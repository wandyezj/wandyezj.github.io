# Sketch - envisioning digital productivity

Sketch presents a blank canvas on which to consider and express ideas.

Sketch exposes a model to allow people to program their worlds.

## Actions

- questions
- sketching
- writing
- mathematical analysis
    - tables
    - equations and calculation
    - charts
- code to enable custom functionality
- presentation
- research
- linking to sources of information
- stitching pieces of information together


## Objects

- Table
    - Could reference or be a view of remote data
- Formatted Text Field
- Image
    - Could be generated off of table data
    - Could be a image or diagram

### Tables

- Tables are all views of underlying datasets
    - The dataset for the table can be located on the client or a backend server
    - this makes it possible to sell access to datasets, hosting and serving datasets of specific attributes could become a valuable business model, especially datasets that need to be frequently updated to be useful (datasets requiring updates serves as a way to keep the dataset from being copied)
    - Table calculations can be done on the client if possible or pushed to the backend server if the view is too large to calculate on the client
        - datasets of millions of rows for example may be best handled by the backend
    - tables can be constructed from any dataset as long as the view follows the same protocol, and calculation protocols
    - this allows table views to be built on top of any backend system, allowing the backend to be optimized for specific queries on the dataset
- Tables are strongly typed in each column
- Tables can have infinite rows

### Charts

- Charts are built off of datasets
- there are lots of ways to project that data into a more understandable form
- making it easy for users to understand the appropriate tool for the information they are attempting to discern can help users gain more insight into their data, plus make it easier for people to use the right chart at the right time
- this also eliminates the need for users to completely remember what chart and calculations are important


## Actions

## Interaction Models

- Touch
    - Mouse, Pen, Touch Screen, Drag and Drop

- Text
    - Terminal

- Speech
    - Speech resolves to text
    - [Web Speech API Specification](https://wicg.github.io/speech-api/_)
    - [Web Speech API Example](https://codeburst.io/html5-speech-recognition-api-670846a50e92)
    - [MDN Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
    - text can resolve to speech or sound can be output

## Implementation

The Browser is increasingly the platform used to deliver and run applications.
Web Assembly as approaching the performance of native code.
Caching and progressive web applications enable applications to run offline.
everything should be able to run offline.
large scale calculations may happen on backend servers
data references and summaries may be pulled from the backend servers
it's important to cut down on data transfer on the client and server
optional collaboration and syncing on the same sketch

Widgets on a canvas

Any conceivable API available


## API

## Programming

- Block Programming
- Event Based Programming
- Appear Synchronous
- Deterministic
- Device Interaction Programming
    - Multiple Display Surfaces

- Understanding and explaining Event Trigger interactions
    - goal of ensuring that there is no feedback loop
    - time based events have no feedback loop thus no danger of cycles
    - manual trigger, since one off action no danger of a feedback loop
    - single source of truth events (weather, time) that are not triggered by other events

- Concept of a Trigger
    - On a trigger do X
        - a sequence of commands
    - Wait for a Trigger to proceed
        - a delay statement

## Communication between Client and Server

Ideally all requests are purely client side, however some actions require a sync between another client and a server.

Ideally there is only Client to Client communication and an intermediary server only connects clients.

A Server may be used for more computationally intensive tasks.

[Idempotency Token](https://en.wikipedia.org/wiki/Idempotence)

Any IOT device could be connected and expose a set of actions that can be utilized. The goal would be a programing model that can be instantly extended with new functionality.


## References

[Homer, Michael, and James Noble. "Lessons in combining block-based and textual programming." Journal of Visual Languages and Sentient Systems 3, no. 1 (2017): 22-39.](https://pdfs.semanticscholar.org/bc0a/79d16d20d9457eaa6f25f86c07a1abfee217.pdf)

- Block to Text and back
- Block good for early learning, but becomes annoying once understood


