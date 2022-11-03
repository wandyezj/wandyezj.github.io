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