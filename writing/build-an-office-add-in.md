# Build an Office Add-In

wandyezj

2019-09-18

## Background

Office Add-Ins allow the extension of office applications.

The following is a short tutorial to developing an Office Add-In.

## Knowledge

The tutorial uses the following technologies:

- JavaScript
- TypeScript
- HTML
- CSS
- GitHub
- Visual Studio Code
- NPM
- Node
- Azure

__tip__ learn the technology as needed

## Explore

Office Add-Ins are specific to a host {Word, Excel, PowerPoint}.

An easy way to explore what Add-Ins can do is with the `Script Lab` Add-In.

Install `Script Lab`

1. Open the Office host that seems the most interesting.
1. Install the `Script Lab` Add-In
    - __tip__: look up how to install an Add-In on the web

`office-js` APIs are what allow JavaScript to interact and manipulate an Office document.

`Script Lab`

- has many example uses for APIs
- enables trying out different `office-js`
- enables mocking up an Add-Ins Interface
- allows saving to GitHub

Playing with `Script Lab` example is a great way to get an idea of what Add-Ins can do and how the office.js API works.

Understanding the following enables many scenarios.

### concepts for Word

- get selected text
- highlight and format text
- insert text

### concepts for Excel

- get selected cells
- update cells
- format cells

## Ideation

## Prototype

## Develop

### Hosting a Static Website on Azure


### User Interface Manifest.xml

[manifest.xml](https://docs.microsoft.com/en-us/office/dev/add-ins/develop/add-in-manifests?tabs=tabid-1)

[manifest.xml commands](https://docs.microsoft.com/en-us/office/dev/add-ins/develop/create-addin-commands)

Common Scenarios:

- custom Tab
- buttons
- open task pane
- call function in a file

__nit__: Outlook Add-Ins as of 2019 use a different manifest than Word, and Excel Add-Ins. If the Add-In us submitted to Word and Outlook, then there need to be two separate manifests and tow separate submission to the App Store.

## Publish

## Update

When updating the Add-In the manifest.xml version must be incremented along with the version of the Add-In on AppSource.

__nit__: it would be nice if this were done automatically 
