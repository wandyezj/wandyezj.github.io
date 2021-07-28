# Open Data

Design of a data collection system

Design data points to collect document both intent and how the data points are specifically collected. How data points are collected can change so this metadata needs to be updated as appropriate.

Data Persistence, how long will the data set stay available? How often is the data set renewed? How are new points entered into the data set.

Steps in data collection and maintenance

Much effort has been spent on analysis while relatively little has been spent on data source quality assurance. 


## Notes

The idea of open data is that data is visible to the public.

How to ensure the integrity of data sources and document how the data was collected?

How to preserve integrity of the data?

How to update the data?

How to link to the data set?

How to understand what the data represents?
    need metadata that specifies how the data was collected in as close detail as possible

How to reproduce results?

How to tell if key data was not collected?
Only have the current data, after collection difficult to collect additional data points

How to account for updates to the data? i.e. if name of a school changed? (Possible a school name is not an appropriate identifier)

How to ensure privacy for individuals in data sets?

How to trust the source of the data? How to verify that the data really came from the specific source?

How to update the data? How to pull back the data? Or mark if a set has flaws and to use a new set?

If software comes to rely on the data then there could be attempts to manipulate the data

The data needs to be accurate for any calculations on the data to have a chance of being accurate. Garbage in Garbage out.

[Data Citation](https://en.wikipedia.org/wiki/Data_citation)

[Digital Object Identifier](https://en.wikipedia.org/wiki/Digital_object_identifier)

[Data Sharing](https://en.wikipedia.org/wiki/Data_sharing)

2007 America COMPETES Act requires "civilian federal agencies to provide guidelines, policies and procedures, to facilitate and optimize the open exchange of data and research between agencies, the public and policymakers. See Section 1009."

Need a pipeline that continually renews and updates data. The Data must match the state of the world, of the view of that world will be inaccurate, and thus calculations will be inaccurate.

Important for policy makers and administrators to have a clear view of data so that they can make informed choices about allocation of resources and make better policy. It's also important for the data to be open so the public can take advantage of it, it will also spark new business and increase competition.

How frequently to be useful does the data need to be updated? How quickly does data rot set in, data rot being where the data no longer reflects the state of the world.

Lots of Data is available online:

https://opendata.cityofnewyork.us/data/

https://www.opendatanetwork.com/

https://www.data.gov/

https://data.gov.uk/




https://en.wikipedia.org/wiki/Open_data


Interesting Projects

https://github.com/GSA

## Examining Data on data.gov

Complicated by lack of concrete entities to join on. How to define a concrete entity? Lack of documentation on how data was collected. Lack of documenation on how data was aggregated. Process to collect and have additions to the data set year over year. Use of CSV over TSV

https://data-seattlecitygis.opendata.arcgis.com/datasets/f61d9ea57af34150b20e2bd5b2d6b681_7.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D

Lack of standard licenses for the data.

Identifiers out of context with rest of the important data.

Might be convenient to have a standard reporting system with explanation of how records should be derived, and what each field means, and a standard way to upload and verify the data is from the specified entity (Hardware based 2FA might be good...), simply include reporting as a standard requirement in order to get federal dollars


Data is often composed of similar concrete entities, but the format of these entities is different in different data sets
Identifier Name for entities is also highly variable

- Time
- Location
    - Street Address
    - Postal Address
    - GPS Coordinates
- Name
- Phone Number

### Location Formats

From: https://data.ct.gov/api/views/9k2y-kqxn/rows.csv?accessType=DOWNLOAD

Location

"81 West Rocks Road
Norwalk, CT 06851-2299
(41.134342, -73.414156)"



From: https://data-seattlecitygis.opendata.arcgis.com/datasets/f61d9ea57af34150b20e2bd5b2d6b681_7.csv?outSR=%7B%22latestWkid%22%3A2926%2C%22wkid%22%3A2926%7D

X, Y
1263633.12497076,192888.60952957

SCHOOL_STREET_ADDRESS, SCHOOL_CITY, SCHOOL_STATE, SCHOOL_ZIP_CODE
9421 18th Ave SW,Seattle, WA, 98106



From: https://data-nces.opendata.arcgis.com/datasets/6a2b95d345d8452ca527b30490096391_0.csv?outSR=%7B%22latestWkid%22%3A4269%2C%22wkid%22%3A4269%7D https://catalog.data.gov/dataset/postsecondary-school-locations-2019-20

X,Y,
-86.568502,34.783368

NAME,STREET,CITY,STATE,ZIP
Alabama A & M University,4900 Meridian Street,Normal,AL,35762

### Phone Number Formats

From: https://data.ct.gov/api/views/9k2y-kqxn/rows.csv?accessType=DOWNLOAD

860-584-7827

## What kind of data is useful and desireable to collect?

- Location of key community resources, can be done via registration

- Work related injuries
    Goal: Reduce workplace injuries
- Schools
    - Teaching Staff education levels
    - Teaching Staff salaries
    - Student demographics
    - Student regions feeding the school
    - AP test scores
    Goal: Understand what schools are available and level of student educational attainment
    Goal: solid data source for location of resource
- Hospitals & Clinics
    - Treatments available at the hospital
    - Treatments and costs billed within a range
    - What kinds of medical treatments are being applied? What kinds of health problems are people in the community having?
    Goal: increase public health
    Goal: solid data source for location of the resource
- Buisnesses
    - Registration of grocery stores
    Goal: Location of these buisnesses, allow people to find physical stores more easily
- Libraries
    Goal: Allow people to find these resources more easily
- Roads
    Closed Lanes
- Registered Laws

- Air Quality Data Sensor
- Weather Sensor

https://en.wikipedia.org/wiki/Fei-Fei_Li

## How can this inform normal data availability practices?

Today there is a lot of focus on tooling but little focus on the people who carry out data collection and use the end product data sets. This is a tricky problem to solve to mange the people collecting the data and management of the data.s


## Data Management Systems

### CKAN

[CKAN](https://ckan.org/) Open Source Data Management System
    Open Source
    Powers Data.gov, western governments

### DSpace

[DSpace](https://duraspace.org/dspace/) Open Digital Repositories
    Doesn't seem to be used

### Dataverse

https://en.wikipedia.org/wiki/Dataverse



### Socrata

Private Enterprise

Socrata Open Data API

https://www.tylertech.com/products/socrata

https://en.wikipedia.org/wiki/Socrata

## Data Sets

Data Sets are key for academic research

[https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.255.6394&rep=rep1&type=pdf](https://openaccess.thecvf.com/content_cvpr_2017/papers/Johnson_CLEVR_A_Diagnostic_CVPR_2017_paper.pdf)

[Novel Dataset for Fine-Grained Image Categorization:
Stanford Dogs](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.255.6394&rep=rep1&type=pdf)

Image Net