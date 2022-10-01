https://detective.kusto.io/

## 2022

### Problem 1

```kql
Onboarding
| summarize sum(Score)
```


### Problem 2

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