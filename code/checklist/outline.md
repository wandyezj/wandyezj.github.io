# Checklist Outline


`configuration` always refers to a parse configuration object, this represents a list including the state of the current list

`gconfiguration` is a global that represents the currently loaded and displayed configuration. Should only be accessed by loadConfiguration and getConfigurationSnapshot.

`snapshot` specific instance of a configuration

loadConfigurationToHtml
    - loads specific JSON configuration to HTML

loadConfiguration
    - gconfiguration
    - loads up specific json configuration, sets global configuration

getConfigurationSnapshot
    - gconfiguration
    - get a snapshot of the current state of the global configuration


loadConfigurationFile
    - load file, pick appropriate parser, load configuration

Get configuation object from various text formats

- getConfigurationFromTextJson
- getConfigurationFromTextMarkdown
- getConfigurationFromTextHex


Convert snapshot to different formats

- getConfigurationToSvgElement
- getConfigurationToTextJson
- getConfigurationToTextHex




prefix all button methods with `button`. These function should only be triggered rom 

Save / Load hex to url hash

- buttonSaveSnapshotToUrlHash
- buttonLoadSnapshotFromUrlHash

- buttonSaveSnapshotToFileSvg
- buttonSaveSnapshotToFileJson
- buttonSaveSnapshotToFileText

- buttonLoadSnapshotFromFile


## Test Scenarios


## notes



Generate a configurable list layout with clickable boxes and allow export to an image

Allow export and sharing via URL

Pieces:

Configuration
    - The `configuration` is the set, layout, and state of possible items.
    - fixed set of item options
        - checkbox
        - likert - future
    - hostable and pointable on any URL
        - determine which parser to use based off .md or .json suffix

load only
    - markdown template (more easily viewable and editable than json)

save / load
    - json configuration (allows saving to local file system)
    - compressed hex url hash (allows sharing link)
    - TODO: image (render selection for reference and share, and load from image via embedded state)

Save / Load methods
    loadConfiguration


HTML Render and Selection

Everything loaded is a configuration
    - markdown configuration is a template
    - json or URL configurations include answers

edit
    - probably want a way to edit inline

Canvas Draw and Image Export / Download
    - possible via screen capture?
    - steganography embedd compressed information into the image since programs remove metadata, also embedd the metadata
    - RGBA can tack on at the end, but still need the total length of data to read

Styling
    - will need to style so it looks appealing

Features
    - encode hash to make it harder for people to tamper with to check that image is actual representation, could also compare image to value but then this changes if svg encoding changes between versions.


Versioning Compatibility

- can be done by versioning, point to specific HTML page
- or keep everything backwards compatible and have shim layers that translate to new logic based on an embedded version number


Principles:
    - hostable anywhere - self contained HTML page
    - sharable and private
        - no telemetry
        - no storage or persistance of data outside of users machine
    - configurable and customizable, with sharable configurations
    - machine parsable if shared
    - secure
        - do not want to allow links that people can click, except to know safe domains (maybe wikipedia links are ok?)
        - defend against HTML injection from input sources
    - compatible this means old configurations and renders continue to work
        - can be done by versioning, point to specific HTML page
        - or keep everything backwards compatible and have shim layers that translate to new logic based on an embedded version number

Reference
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/checkbox
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
https://developer.mozilla.org/en-US/docs/Web/API/File

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas

https://motdave.com/page-https-developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
