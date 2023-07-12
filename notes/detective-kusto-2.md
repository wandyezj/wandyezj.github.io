# Detective Kusto 2

## Learning

Can run SQL? How Cool!


## Warmup

```kql

// Only first detective to crack the case gets the bounty

// Cases and bounties
let CaseBounty = DetectiveCases
| where EventType == 'CaseOpened'
| project CaseId, Bounty = toreal(Properties.Bounty);
//CaseBounty | take 10;

// Cases Solved
let CaseSolved = DetectiveCases
| where EventType  == 'CaseSolved'
| project CaseId, DetectiveId, Timestamp;
//CaseSolved | take 10 ;

// Who is the first detective to crack the case?
let FirstSolved = CaseSolved 
| summarize First=min(Timestamp) by CaseId;
// FirstSolved | take 10;

let DetectiveBounties = FirstSolved | join kind=inner CaseSolved on CaseId | where First == Timestamp
| join kind=inner CaseBounty on CaseId | project DetectiveId, Bounty;
//DetectiveBounties | take 10;

let DetectiveTotals = DetectiveBounties |  summarize Total=sum(Bounty) by DetectiveId;

let best = DetectiveTotals | summarize Total=max(Total) | join kind=inner DetectiveTotals on Total;
best;

```

## Case 1

Two Tables

Consumption and Costs

Uncover any mystery in billing.

There appear to be several different billing dates


```kql
// shows the number of unique entries shifts by date, and Electricity and Water don't have matching numbers of households?
Consumption
| project Timestamp, Consumed, MeterType
| summarize count() by Timestamp, MeterType
| order by Timestamp asc, MeterType asc
```

Tells you the bills doubled so correct amount should be half