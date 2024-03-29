# checklist todo

- UI testing with a framework Playwright.
    - cross browser
    - low dependencies
    - https://playwright.dev/docs/intro
    - can this be added to UI less test?
    - pipeline do test after dist packaged so it cant be modified

- checklist template repository
    - allow for md checklists to be created
    - allow for drop down selection from sample
    - requires some sort of versioning?
    - allow load of checklists from different URLs

- load configuration from png
    - requires complex embedding or analyzing png

- bigger default text and click zones for checkbox and circles
    - at minimum double current size (better if scale is configurable)

- alternative layout for mobile

- support item types
    - title could be considered an item when built (still want it separate for easy of use in configuration json)

    - support sections groups and overall title
        - type heading
        - can make this an item as well, set of item types?

    - Markdown comments?
        - type comment
        - how would this be kept track of in json? as items? or just ignore for JSON purposes (that poses problems for edit)
        - new comment item type has comment property, just union with normal items, just support single line comments to make it easy, but would be nice to support multi line

- auto test framework for scenarios
    - loads html page and runs scenarios
    - save/load all formats

- multi select support? (new likert like type)


- default configuration json for markdown, so it doesn't need to be specified

- UI better layout for all the normal controls
    - have two different modes, one for developer one for use
    - Buttons
        - 'edit' - in markdown only
        - 'share' - for url
        - 'save' - download file in markdown or svg, maybe a save with dropdown with a selected default of svg
        - 'load' - single button


- UI About button that contains documentation to describe everything

- error checking for invalid file or invalid configuration
    - just make a simple JSON validator
        - allow validation of references, insistence that a string is a keyof another field can refer via dot notation
        - x.y.z.{keys} keyof x.k
        - x.l is {list} - check properties type is one in the set
        - a.z is {list, undefined} - check property type
        - x.l[] - represent an item of the list
        - need ability to define strong types for convenience
    - error handling around json parsing
    - check that only valid things are in the configuration and all types are correct
    - check that all ids are present and unique
    - error handling around md parsing
    - display for invalid errors
    - communication of where the invalid data is
    - need new UI function to show error
    - from configuration parsers return success or failure codes
    - display issues in a window when editing the Markdown File with a periodic refresh rate




- create site to support page
    - need server and web address
    - need to apply CSP

- writeup explaining security and privacy features
    - apply unlicense
    - svg sandbox for
    - open source all code visible and readable
    - no external libraries or dependencies single file
    - no web requests
    - no use of eval
- security
    - Apply Content Security Policy
    - configuration is the main entry point for data can this inject anything?
    - Cross Site Scripting with the configuration is the major attack vector
        - https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
        - Have JavaScript that replaces all characters in the configuration with the encoded entities
    - Implement Content Security Policy do not allow loading JavaScript from anywhere
    - entity encode all configuration fields when the configuration is parsed so that data is good everywhere?
    - https://owasp.org/www-project-enterprise-security-api/
- writeup explaining configuration formats
- styling css
- embed checksum of configuration in configuration to check unmodified.
    - this would simply prevent accidental modification
- embed signature in configuration and allow checking that the
    - allow signing with private key in UI
    - signature against an embedded public key
- load configuration from hash by default

- localization for controls via configuration

## done

- [x] update drawings as html is updated for testing convenience

- [x] embed configuration in svg element and allow upload of svg
    - embed configuration in png
    - https://svgwg.org/svg2-draft/struct.html#MetadataElement
    - use desc element instead identified by the id 'configuration'
    - want to support svg since it allows downloading an image and then if you want to make changes to the image can simply upload modify and re-download.

- [x] browser check
    - only officially support Edge (and at least a recent updated version)
    - only tested on edge - too much effort to try to support multiple browsers (what works on edge should work on other updated chromium browsers)
    - check that APIs are supported
    - difficult to tell specific browser, not a clean way to check
    - instead check for specific API support
    - not supporting
        - legacy: IE, Safari
        - Non Chromium: Gecko, WebKit

- [x] configuration support in markdown

- [x] replacement of HTML with svg as the display canvas
    - event handler that takes care of the html

- [x] likert support
    - https://en.wikipedia.org/wiki/Likert_scale
    - `- (likert)
    - md format
    - json config
    - svg
    - support single select only

- [x] default svg favicon

- [x] embed favicon icon in configuration png or svg (some browsers do not support)
    - https://caniuse.com/link-icon-svg
    - should this only allow PNG to avoid SVG security issues?
    - CSP hashable?

- [x] share URL to clipboard button
    - click button
    - ctrl + v into open tab
    - enter
    - should show equivalent version

- [x] way to view and edit configuration
    - big textarea, overlay and button to accept
    - transparent background style background-color rgba(0,0,0.9)

- [x] configuration json to configuration markdown

- [x] download and upload markdown files

- [x] edit cancel button

- [x] view and edit configuration as markdown or json

- [x] UI move cancel away from save button
    - make buttons bigger

- [x] svg show descriptions on item (check and likert) text also title
    - makes it easy to check by viewing UI

- [x] separate publish repository for project
    - https://openchecklist.github.io
    - simply a copy renamed index.html

- [x] convert svg to png
    - as simple as drawing to a canvas, simply allow a data url for an image in CSP
    - image.src property is blocked by csp - allow data url bypass

- [x] publish pipeline
    - build
    - publish
    - embed csp hashes