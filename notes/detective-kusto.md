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