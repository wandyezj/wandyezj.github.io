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

- buttonLoadShapshotFromFile


## Test Scenarios