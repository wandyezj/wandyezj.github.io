https://detective.kusto.io/

## Kusto Learning

```kql
// Get the minimum value and save it to a variable that can be reused.
let min_t = toscalar(Votes | summarize min(Timestamp));
```

## 2022

### Warmup

```kql
Onboarding
| summarize sum(Score)
```


### Case 1

```kql
// Step 1

// Find the books weight
Books 
| where book_title == "De Revolutionibus Magnis Data"
 | take 10
 | project-keep rf_id, weight_gram;


// Step 2
// Find which shelf has weight greater than the expected weight and value
// The value from the query above
let value = 1764;

Shelves 
| project-keep shelf, rf_ids 
| mv-expand rf_ids // expand the array
| extend rf_id = tostring(rf_ids)
| project-keep shelf, rf_id
| join kind = leftouter Books on rf_id
| project-keep shelf, rf_id, weight_gram
| summarize expected_weight =sum(weight_gram) by shelf
// calculate expected weight for shelf based on rf_ids present
| join kind = leftouter Shelves on shelf
| project-keep shelf, total_weight, expected_weight
| extend diff = total_weight - expected_weight
| where diff >= value

```

## Case 2

```kql

// Preliminary investigation reveals that a small set of voter_hash_id are present more than once
// Votes
// | summarize c = count() by voter_hash_id
// | where c > 1

// A look through a few of the IPs of the ones that voted twice and for Poppy (who we suspect stuffed the ballot box) shows that the ballot box is stuffed at a specific point for th IP
// Votes
// | where voter_hash_id in () // list of voter Hash Ids
// | order by voter_hash_id, Timestamp


// Which votes should be invalidated?
// Votes that look like ballot box stuffing
// Votes that look stuffed are those that are within less than a second of another vote on the same IP
// We don't need to be perfectly accurate because there are over 5 million votes as we are looking for accuracy within a tenth of a percent.
// Need to create a table of vote and previous vote timestamp to compare

// Answer Query
Votes 
// groups by ip and then timestamp to line up scan
| order by via_ip, Timestamp asc
// get the timestamp of the vote before
| scan declare (step: string, previous_Timestamp: datetime) with (
    step s1: true => step = "s1";
    step s2: true => step = "s2", previous_Timestamp = s1.Timestamp;
)
| where step == "s2"
| extend diff = Timestamp - previous_Timestamp
| extend valid = diff > 1000ms
| where valid == true
| summarize Count=count() by vote
| as hint.materialized=true T
| extend Total = toscalar(T | summarize sum(Count))
| project vote, Percentage = round(Count*100.0 / Total, 1), Count
| order by Count
;
```

## Case 3

```kql
// start
// 157th Ave / 148th Street
// between 8:31 and 8:40

// Run queries individually
// Saving as temporary tables cuts down on overall individual query time and memory resources which are limited

// All VINs from starting ave and street from when robbers left to when police arrive
//.drop table TrafficBank ifexists;
// .set TrafficBank <| 
Traffic | 
where Ave == 157 and Street == 148 and Timestamp >= datetime(2022-10-16 08:31) and Timestamp <= datetime(2022-10-16 08:40)
| project VIN | distinct VIN;



// all final destinations
//.drop table TrafficFinal ifexists;
.set TrafficFinal <| Traffic | summarize arg_max(Timestamp, *) by VIN;


// Find cars that left the banks final destination where there are more than three
TrafficBank
| join kind=inner TrafficFinal on VIN
| summarize c = count() by Ave, Street
| where c >= 3
| order by c
// strangely there were two locations with three cars so picked the first one.


```

Dead ends

- Looking for cars that arrived before the robbery and left during the designated time
- trying to query everything at once, exceeds memory

## Case 4

```kql
// ingest
.execute database script <|
.create-merge table Primes (n:long)
.ingest into table Primes (@'https://kustodetectiveagency.blob.core.windows.net/prime-numbers/prime-numbers.csv.gz')


// find biggest special prime under 100000000
Primes
| where n < 100000000
// A prime number is said to be Special prime number if it can be expressed as the sum of three integer numbers: 
// two neighboring prime numbers and 1. For example, 19 = 7 + 11 + 1, or 13 = 5 + 7 + 1. 
| order by n asc
//| take 10
// go though and make specials
| scan declare (step: string, special:long ) with (
    step a: true => step = "a";
    step b: true => step = "b";
    step c: true => step = "c", special = (a.n + b.n + 1);
) 
| where step == "c" 
| project-keep  special
| project-rename n = special
| join kind = inner Primes on n
| summarize (max(n))

// https://kustodetectiveagency.blob.core.windows.net/el-puente/message.txt
```


```text
Well done, my friend.
It's time to meet. Let's go for a virtual sTREEt tour...
Across the Big Apple city, there is a special place with Turkish Hazelnut and four Schubert Chokecherries within 66-meters radius area.
Go 'out' and look for me there, near the smallest American Linden tree (within the same area).
Find me and the bottom line: my key message to you.

Cheers,
El Puente.

PS: You know what to do with the following:
```

```kql
.execute database script <|
// The data below is from https://data.cityofnewyork.us/Environment/2015-Street-Tree-Census-Tree-Data/uvpi-gqnh 
// The size of the tree can be derived using 'tree_dbh' (tree diameter) column.
.create-merge table nyc_trees 
       (tree_id:int, block_id:int, created_at:datetime, tree_dbh:int, stump_diam:int, 
curb_loc:string, status:string, health:string, spc_latin:string, spc_common:string, steward:string,
guards:string, sidewalk:string, user_type:string, problems:string, root_stone:string, root_grate:string,
root_other:string, trunk_wire:string, trnk_light:string, trnk_other:string, brch_light:string, brch_shoe:string,
brch_other:string, address:string, postcode:int, zip_city:string, community_board:int, borocode:int, borough:string,
cncldist:int, st_assem:int, st_senate:int, nta:string, nta_name:string, boro_ct:string, ['state']:string,
latitude:real, longitude:real, x_sp:real, y_sp:real, council_district:int, census_tract:int, ['bin']:int, bbl:long)
with (docstring = "2015 NYC Tree Census")
.ingest async into table nyc_trees ('https://kustodetectiveagency.blob.core.windows.net/el-puente/1.csv.gz')
.ingest async into table nyc_trees ('https://kustodetectiveagency.blob.core.windows.net/el-puente/2.csv.gz')
.ingest async into table nyc_trees ('https://kustodetectiveagency.blob.core.windows.net/el-puente/3.csv.gz')
// Get a virtual tour link with Latitude/Longitude coordinates
.create-or-alter function with (docstring = "Virtual tour starts here", skipvalidation = "true") VirtualTourLink(lat:real, lon:real) { 
	print Link=strcat('https://www.google.com/maps/@', lat, ',', lon, ',4a,75y,32.0h,79.0t/data=!3m7!1e1!3m5!1s-1P!2e0!5s20191101T000000!7i16384!8i8192')
}
// Decrypt message helper function. Usage: print Message=Decrypt(message, key)
.create-or-alter function with 
  (docstring = "Use this function to decrypt messages")
  Decrypt(_message:string, _key:string) { 
    let S = (_key:string) {let r = array_concat(range(48, 57, 1), range(65, 92, 1), range(97, 122, 1)); 
    toscalar(print l=r, key=to_utf8(hash_sha256(_key)) | mv-expand l to typeof(int), key to typeof(int) | order by key asc | summarize make_string(make_list(l)))};
    let cypher1 = S(tolower(_key)); let cypher2 = S(toupper(_key)); coalesce(base64_decode_tostring(translate(cypher1, cypher2, _message)), "Failure: wrong key")
}

```

Use H3 since this can correspond to circles

```kql
// figure out
nyc_trees
| where spc_common == "'Schubert' chokecherry" or spc_common == "Turkish hazelnut"
| project-keep tree_id, spc_common, latitude, longitude
| extend h3 = geo_point_to_h3cell(longitude, latitude, 10)
| summarize cs = countif(spc_common == "'Schubert' chokecherry"), ct = countif(spc_common == "Turkish hazelnut") by h3
| where cs == 4 and ct == 1

// returns
// 8a2a100dec9ffff

// figure out lindens nearby
nyc_trees
| where spc_common == "American linden"
| extend h3 = geo_point_to_h3cell(longitude, latitude, 10)
| where h3 == "8a2a100dec9ffff"

// link to coordinates
VirtualTourLink(40.71222313, -73.96452201)

// https://www.google.com/maps/place/333+Berry+St,+Brooklyn,+NY+11249/@40.7123125,-73.9645614,3a,57.3y,87.28h,88.84t/data=!3m6!1e1!3m4!1suq2B8V4DgxKKyLOk8urg7g!2e0!7i16384!8i8192!4m5!3m4!1s0x89c25bdf45a8863d:0xccc65068c1338b70!8m2!3d40.7121633!4d-73.9644901

// There is a note that says El Puente

let message = @"20INznpGzmkmK2NlZ0JILtO4OoYhOoYUB0OrOoTl5mJ3KgXrB0[8LTSSXUYhzUY8vmkyKUYevUYrDgYNK07yaf7soC3kKgMlOtHkLt[kZEclBtkyOoYwvtJGK2YevUY[v65iLtkeLEOhvtNlBtpizoY[v65yLdOkLEOhvtNlDn5lB07lOtJIDmllzmJ4vf7soCpiLdYIK0[eK27soleqO6keDpYp2CeH5d\F\fN6aQT6aQL[aQcUaQc[aQ57aQ5[aQDG";
let key = "ashes to ashes";
//"LOTS OF LOVE PLEASE RESPECT!"; // not the key.
print Message=Decrypt(message, key)

```

```text
Impressive, you got it right! Something BIG is going to happen...
Keep the next hint close to you, it will help you. We will be in touch soon.
El Puente.

wytaPUJM!PS:2,7,17,29,42,49,58,59,63

```

Learning

- @"" for literal strings without escapes
- Geo [H3](https://www.uber.com/blog/h3/)
- Can create helper functions



## Case 5

```kql
// Parse chat logs to make it easier to work with
.drop table ChatLogsParsed ifexists;
.set ChatLogsParsed <| ChatLogs
| parse kind=regex Message with * "User '" user "' " action " '" data "'"
```

```kql
// Brute force get all IP addresses and check every single one (very inefficient)

ChatLogsParsed
|  where action =="logged in from"
| project-keep data
| distinct data
```

Simply search through all the IPs to see which ones do not return 404.

There are ~200000 IPs so export all of them and use a program to scan through them. This ensure that nothing is missed.

```js
function getUrl(ip) {
    return `https://sneakinto.z13.web.core.windows.net/${ip}`;
}

async function checkUrl(ip) {
    const url = getUrl(ip)
    const response = await fetch(url);
    
    const success = response.status !== 404;
    return {
        success,
        ip,
        url,
        response,
    };
}

async function querySingleBatch(l, start, end) {
    const promises = []
    for (let i = start; i < end; i++) {
        const ip = l[i];
        const request = checkUrl(ip);
        promises.push(request);
    }

    const results = await Promise.all(promises);
    return results;
}

async function queryBatch(l) {
    const start = 0;
    const batchSize = 100;

    const successes = [];
    for (let i = start; i < l.length; i+= batchSize) {
        const start = i;
        const end = i + batchSize
        const results = await querySingleBatch(l, start, end);
        const ok = results.filter(x => x.success);
        successes.push(...ok);
        const tested = results.map(x => x.ip).join(", ");
        console.log(`tested (${start} -> ${end -1}) [${tested}]`);
        if (successes.length > 0) {
            console.log(`SUCCESS [${successes.map(x => x.ip).join(" ")}]`);
        }
    }
}

async function main() {
    const fs = require( 'fs')

    // export.csv contains the export for kusto for the IPs
    const data = fs.readFileSync("export.csv", {encoding:"utf8"}).toString().replace(/\r/,'')

    const l = data.split("\n").map(x => x.replace(/"/g, '').replace(/\r/g,''));

    queryBatch(l);
} 

main();

```


- [A](https://sneakinto.z13.web.core.windows.net/119.10.30.154)
    - [message-project-x.png](https://sneakinto.z13.web.core.windows.net/119.10.30.154/message-project-x.png)
- [B](https://sneakinto.z13.web.core.windows.net/146.49.19.37)
    - [image1.jpg](https://sneakinto.z13.web.core.windows.net/146.49.19.37/image1.jpg)
        - Date Taken: 2020-07-10 14:13
    - [image2.jpg](https://sneakinto.z13.web.core.windows.net/146.49.19.37/image2.jpg)
        - Date Taken: 2018-06-01 02:25
    - [image3.jpg](https://sneakinto.z13.web.core.windows.net/146.49.19.37/image3.jpg)
        - Matches the x.pdf circled image
        - Date Taken: 2020-07-09 13:58
    - [image4.jpg](https://sneakinto.z13.web.core.windows.net/146.49.19.37/image4.jpg)
        - Date Taken: 2020-07-13 08:57
- [C](https://sneakinto.z13.web.core.windows.net/194.243.69.176)
    - [utils.txt](https://sneakinto.z13.web.core.windows.net/194.243.69.176/utils.txt)
- [D](https://sneakinto.z13.web.core.windows.net/236.48.237.42)
    - [project-x.pdf](https://sneakinto.z13.web.core.windows.net/236.48.237.42/project-x.pdf)
        - circled image matches image 3


Project X message

```text

Did you see that?! Kastor the Elephant was chosen as a city mascot!
This is nonsense! Every tie I think of it, another Poppy the goldfish dies.
We will strike back, and when we do - they will feel the anger of the escaping elephant!

In past, we've talked much about the wealth and about importance of thinking out of the box, and I think I just got an inspiring idea by watching popular science course about Dig Data. You should watch it too...

So, we have our target: the Project X is ON!

1) Get the picture of the Project X's target and see the date it was taken (Date1)
2) There was another historical nonsense event happened at year YYYY, and it reminds me of today (I will send a link later).
    We will use that event as a reference point. The day of our action will be:
    > Date1 + ((YYYY % 1000) days))

We're in the game!

-- JG, the Mayor

```


```kql
// Handy utils

// 1) Utility to discover secondary messages.
// Usage: ReadMessage(Message, Key)
let ReadMessage = (Message:string, Key:string) 
{
    let m = Message; let K = Key; let l = toscalar(print s = split(split(K,':')[1], ',') | mv-expand s | summarize make_list(tolong(s)));
    let ma = (i1:long, i2:long) { make_string(repeat(tolong(l[i1])-tolong(l[i2]), 1))}; 
    let ms = (d:dynamic, s:long, e:long) { make_string(array_slice(d, s, e)) };   
    let mc = m has '...';
    print s=split(split(replace_regex(m, @'[\s\?]+', ' '),substring(K,9,3))[1], ' ')
    | mv-expand with_itemindex=r s to typeof(string) | serialize 
    | where r in (l)
    | extend s = iif(r-1 == prev(r), replace_string(strcat(prev(s), s),'o','ou'), s)
    | where (r+1 != next(r))
    | summarize s=strcat_array(make_list(s), iff(mc, '+%2B', ' '))
    | extend k = series_subtract(series_add(to_utf8(K), l), repeat(23, 10))
    | project result=iif(mc, strcat(ms(k,0,3), ma(8,2), ms(k,4,6), ms(l,8,8), ms(k,7,7), ma(8,0), s), s)
};
ReadMessage(
```
Hi there! How are you?

PS: 
This is a nice utility that reveals what hidden messages the text may have.
We may read the message and think: is there anything beyond words?
Can we find it without the utility, or it will become too much of a headache?
```,
h@'dhkl4fva!that:2,9,15,22,31'
)


// 2) Get GEO location from images:
// Use https://tool.geoimgr.com/
```


Using the message combined with the previous gives the following URL:

```kql
ReadMessage(
```
Hello. It's going to happen soon: a big heist. You can stop it if you are quick enough. Find the exact place and time it’s going to happen.
Do it right, and you will be rewarded, do it wrong, and you will miss your chance.

Here are some pieces of the information:
The heist team has 4 members. They are very careful, hide well with minimal interaction with the external world. Yet, they use public chat-server for their syncs. The data below was captured from the chat-server: it doesn't include messages, but still it may be useful. See what you can do to find the IPs the gang uses to communicate.
Once you have their IPs, use my small utility to sneak into their machine’s and find more hints:
https://sneakinto.z13.web.core.windows.net/<ip>

Cheers
El Puente

PS:
Feeling uncomfortable and wondering about an elephant in the room: why would I help you?
Nothing escapes you, ha?
Let’s put it this way: we live in a circus full of competition. I can use some of your help, and nothing breaks if you use mine... You see, everything is about symbiosis.
Anyway, what do you have to lose? Look on an illustrated past, fast forward N days and realize the future is here.
```,
h@'wytaPUJM!PS:2,7,17,29,42,49,58,59,63')
```



[el puente url](https://bing.com?q=uncomfortable+%2Belephant+%2Bescapes+%2Bcircus+%2Bbreaks+%2Beverything+%2Btoulouse+%2Billustrated)

[image search](https://images-cdn.bridgemanimages.com/api/1.0/image/600wm.XXX.20838950.7055475/5980623.jpg)

The image was illustrated: November 14, 1891


Potential options based on images

- A 2020-07-10 + 891 = 2022-12-18
    - Date: 2022-12-18 (Sunday)
    - Longitude:
    - Latitude:
    - No GeoTags
- B 2018-06-01 + 891 = 2020-11-08
    - Date: 2020-11-08 (In the past)
    - Longitude:
    - Latitude:
    - No GeoTags
- C 2020-07-09 + 891 = 2022-12-17
    - Date: 2022-12-17 (Saturday)
    - Longitude: -3.38010413333333
    - Latitude: 58.9688665166667
- D 2020-07-13 + 891 = 2022-12-21
    - Date: 2022-12-21 (Wednesday)
    - Longitude:
    - Latitude:
    - No Geo Tags


Have to make sure have the right date and location and needs to come back on that date to check.

- Date: 2022-12-17 13:58 (Saturday)
- Longitude: -3.38010413333333
- Latitude: 58.9688665166667


Thanks for the alert! We will start watching the location. Come back here on the date of the heist, resubmit your answer and see if you were right.
