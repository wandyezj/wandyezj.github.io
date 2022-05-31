# checklist todo

- view and edit configuration as markdown

- configuration json to configuration markdown

- edit cancel button

- support descriptions on item (check and likert) text

- support sections groups and overall title

- multi select support?

- convert svg to png
    - desireable to be able to load from svg as well, however this requires complex embedding

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

- separate repository for project 
- publish pipeline
    - build
    - publish
    - embed csp hashes
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