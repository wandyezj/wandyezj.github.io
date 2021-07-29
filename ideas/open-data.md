# Open Data

## Abstract

Analysis of data is increasingly used to make decisions. The data used for analysis must come from some source. Open Data is the idea that some data be made freely available for analysis.

This paper:

- defines Open Data
- proposes objectives for Open Data
- proposes quality measures for Open Data
- examines Open Data practices on data.gov
- proposes Open Data principles to guide Open Data practices

The objective of this paper is to propose objectives, quality measures, and principles for Open Data.

## Definition

"Open Data is the idea that some data should be freely available to everyone to use and republish as they wish, without restrictions from copyright, patents or other mechanisms of control."  from the [Wikipedia page on Open Data](https://en.wikipedia.org/wiki/Open_data)

## Proposed Open Data Objectives

I propose the following Open Data objectives:

- Maintain trust in conclusions derived from data.
- Allow citizens to check on government activities.
- Enable administrators to make better decision.
- Increase economic competition and service quality.
- Expand collaboration among organizations and communities.

Open Data could allow citizens, researchers, and administrators to gauge the effectiveness of specific program interventions and to assess and improve the quality of peoples lives.

Some potential questions answerable with data:

- What specific and types of roadway intersections have the most accidents?
- Are community resources {Fire, Police, Libraries, Schools, Clinics, Groceries} accessible to citizens?
- Where and what injuries are taking place?
- What measures account for differences in reported injuries?
- Does an area have sufficient resources to support a new business?
- How are people's lives impacted by air pollution and noise pollution, what interventions are effective in reducing this pollution?

## Open Data Portals

To realize the Open Data ideal, data must be made available. Many systems have been devised to make data available:

- [Comprehensive Knowledge Archive Network (CKAN)](https://en.wikipedia.org/wiki/CKAN)
- [Socrata](https://en.wikipedia.org/wiki/Socrata)
- [DSpace](https://duraspace.org/dspace/)
- [Dataverse](https://en.wikipedia.org/wiki/Dataverse)

[CKAN](https://ckan.org/) has become a standard Open Data portal for many federal governments, including: Canada, The United States, Mexico, Australia, Singapore, and Switzerland.

The United States Government's Open Data size [data.gov](https://www.data.gov/) is powered by CKAN.

## Proposed Measures of Open Data Quality

I propose Data Quality be measured on the dimensions of allowing accurate conclusions to be derived via data analysis.

Data Quality is essential to ensure that conclusions derived from data analysis can be appropriately trusted. To ensure guidance offered by analysis of data is accurate the data must contain sufficient accurate information for the analysis. To verify conclusions the complete set of steps from data source to data analysis needs to be accessible.

I propose the following Data Quality dimensions:

- Accessible
- Source
- Collection
- Private
- Timely
- Fresh
- Citable
- Compatible
- Metadata

### Accessible

Is relevant data discoverable? Can the data be easily downloaded? Can what the data represents be easily understood?

### Source

Can the source of the data be verified? Does the data come from a trusted source?

### Collection

How was the data collected? What procedure was used to collect the data? What assumptions are made during collection? (biases in the collection proceedure can introduce and invalidate certain types of conclusions) Placing the data in context.

### Privacy

Does the data maintain individuals privacy?

### Timely

Is the data made available soon enough for the analysis to guide decision making?

### Fresh

When is the data updated? How often is it stated the data will be updated? How long will the data set be maintained? Can the presence of data be relied upon in the future?

### Citable

Can analysis done using the data cite the specific version of the data set used for analysis?

### Compatible

Is the data compatible with other data sets? Is the data easy to combine with other data sets? Do data fields follow standard data formats? Is the data exportable in standard formats? Can the data be easily ingested into standard analysis tools?

### Metadata

Does the metadata specify:

- the source of the data
- how to verify the source of the data
- the data collection procedure
- what every field in the data set means
- when new versions of the data set are made available
- frequency of updates to the data set
- how long the data set will be updated and maintained
- how to cite the data set

## Open Data Quality on data.gov

Browsing though the data available on data.gov I made the following observations.

### Formats Filter

Under the [data catalog](https://catalog.data.gov/dataset) there is a 'Formats' filter.
It is unclear what the 'Formats' filter and tags mean. Does the formats field mean the formats that are supported for a piece of data or all the formats the data consists of? Publishers of data seem confused as some data has the same information in multiple formats (although who knows if these align) other data is composed of multiple formats of data. For example some data might consist of images and a file that contains additional metadata about those images. Or does this mean that there is one asset for each tag. So two HTLM tags indicated two HTML documents?

Suggestion: have a single format source of truth for the data. If the data consists of multiple formats then that data should be packaged together into a single compressed file.

### Data Formats

Data is in multiple formats:

```text
API, ARCE, ARCG, ASCII, ArcGIS, BIN, CDF, CSV, DOC, Digital, ESRI, EXCEL, EXE, Esri, Export, GIF, GZ, GeoJSON, GeoTIFF, HTML, JPEG, JSON, KML, MGD77t, NETCDF, OGC, PDF, PNG, QGIS, RDF, SHP, SID, TAR, TEXT, TIFF, Undefined, WCS, WFS, WMS, XML, XYZ, ZIP, application/html, application/unknown, application/vnd.geo..., chemical/x-mdl-sdfile, comma-delimited, gml, nc, sos
```

One of the formats is `undefined`.

Some of these formats seem redundant:

- Geolocation: ArcGIS, gml, ESRI, KML,
- tables: EXCEL, CSV, comma-delimited
- Rich Data: JSON, RDF, XML
- image: PNG, GIF, JPEG
- Compressed: TAR, ZIP, GZ
- DOC, PDF

Multiple formats requires multiple readers to get the data into a standard format so it can be analyzed.

[TSV](https://en.wikipedia.org/wiki/Tab-separated_values) frequently used in place of CSV since it has simpler parsing less prone to errors is not used.

### Data Updates

Hard to tell what data is one off verses which data is updated and when.

Hard to tell when data was collected and renewed. What time frame is the data for?

### Data Location

Hard to tell where data is located. Some data sets are uploaded to the site while others are linked to external sites.

Links to external sites are often broken.

### License

Hard to tell what license data sets are distributed under. Some data sets have licenses but others are missing a license.

### Data Set Titles

Data Set titles are often unclear. Some Data Sets that could be part of a group are broken into multiple separate entries. There does not seem to be a standard format for titles. Not all titles contain the time span the data is relevant for or when the data was collected.

### Data Set Fields

Data Set fields are often ambiguous. Not exposed on the site what fields are present in a data set.

Data Set fields have inconsistent formatting and types for the same type of data. For example geographic location.

### Data Aggregation

Data is often aggregated for specific reports. Aggregation hides aspects of the data. For example the mean hides outliers. It would be useful if data was not aggregated to allow analysis tools to aggregate as needed. If data is aggregated it should be explained how the aggregation was performed from the base source of data and the intent behind the aggregation.

### Data Relations

Data is split up between multiple sets, it is hard to find related data, that can be looked at together. Since keys are not universally shared it can be difficult to related and link together different sets.

## Proposed Open Data Principles

All Open Data should be published with metadata that describes:

- Data Collection Procedure as detailed as possible
- License under which the data is published



a data schema.

Data Schemas.

Single entity owns definitions of new schemas.

Need a schema defintion language.

Single entity owns the schema for a set of data.

Standard ways to communicate specific data.

Data is Dynamic and must be updated to reflect the state of the world.

Archived.



## Applications 

Improve metadata




Idea of a Data Asset, Data Set.

Data Schema -> Defined Schema that a Data Asset adheres to and can be used across assets. Allow Schemas to be combined. Strong Types! Create schemas for subtypes. Schemas could be defined as TypeScript interfaces.

Data Asset / entity -> single file or group of files, an individually downloadable unit.

Data Set -> a set of Data Assets

JSON -> TSV conversion is this reasonable? Yes simply destructure the field, add a deliminator (maybe `.`) how would this work for lists of objects? (possibly ban lists of objects, reasonable to ban all lists?)
TSV as the unit of a data asset. TSV is easily consumed by spreadsheet programs, and databases, as tables, while JSON and complex objects have yet to be consumable.




Standards Based Approach to highlight high quality data, and to make it easy to find data.

Insist

- Data Portals should allow complete download of data sets.
- Data Portals should not be used for processing and analyzing data sets; instead data should be downloaded and ingested into dedicated processing applications. This places the cost on those who analyze the data instead of on the public. Data Portals can provide a mechanism, such as an RSS feed to indicate when new data is available.

Publishing data sets is one component, another key component is data quality


-> Challenges

Reporting
Updating
Maintenance
interoperability between sets
interoperability within analysis software, ingestion

Potentially useful questions:



## scratch


Knowledge is power. Data forms the basis of knowledge. The I



Difficult to find related data so 


- how are some formats undefined?


Suggestion: eliminate redundant data formats.


TSV is not supported, would be better than CSV

https://en.wikipedia.org/wiki/Tab-separated_values

multiple formats, and mu

 for the same data


- Non compatible formats for similar fields
- Inconsistent Field names

- Splitting of data sets instead and global rollup

- multiple formats: {
    
} 
How come these are not limited to a few standard formats, with the other formats being derivable



- lack of license


- lack of dates
- lack of clear titles

- links to data verse sets of data available

- links to data are often broken

is documented and made available along with the source and adhered to during collection.



Source
    - Trusted
Metadata
    - Complete
    - Specifies data collection procedure
    - Specifies the source of the data
    - Specified what every field in the data means
    - specifies what analysis was done using the data so if inaccuracies are found in the data and the data is updated those conclusions can be revised.
Compatible
    - Can be easily combined with other data
Timely
    - Data is provided in a timely manner
Maintained
    - Data is 
Citable
    - Two way link to see what papers rely on the data

Consistent sets

Design of a data collection system




Design data points to collect document both intent and how the data points are specifically collected. How data points are collected can change so this metadata needs to be updated as appropriate.

Data Persistence, how long will the data set stay available? How often is the data set renewed? How are new points entered into the data set.

Steps in data collection and maintenance

Much effort has been spent on analysis while relatively little has been spent on data source quality assurance.

Specify units in the name of the data point

Most data can't be single collection since the state of the world changes.

standard atomic entities from which other entities are built, and standard representation between formats, JSON, TSV

Annotate in code that data is collected and provide link to metadata, annotate metadata with link to where data is collected in code. Have a random GUID tag that can be researched later.

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

[ckan.org](https://ckan.org/)

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

[Socrata product page](https://www.tylertech.com/products/socrata)

## Data Sets

Data Sets are key for academic research

[https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.255.6394&rep=rep1&type=pdf](https://openaccess.thecvf.com/content_cvpr_2017/papers/Johnson_CLEVR_A_Diagnostic_CVPR_2017_paper.pdf)

[Novel Dataset for Fine-Grained Image Categorization:
Stanford Dogs](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.255.6394&rep=rep1&type=pdf)

Image Net

## Papers

Kassen, Maxat (1 October 2013). "A promising phenomenon of open data: A case study of the Chicago open data project"
