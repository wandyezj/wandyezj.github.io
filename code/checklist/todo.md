# checklist todo

- embed favicon icon in configuration png or svg (some browsers do not support)
    - https://caniuse.com/link-icon-svg
    - should this only allow PNG to avoid SVG security issues?
- default svg favicon

- embed configuration in svg element and allow upload of svg
    - https://svgwg.org/svg2-draft/struct.html#MetadataElement
- convert svg to png
- embed configuration in png
- writeup explaining security and privacy features
    - apply unlicense
    - svg sandbox for
    - open source all code visible and readable
    - no external libraries or dependencies single file
    - no web requests
    - no use of eval
- security
    - configuration is the main entry point for data can this inject anything?
    - Cross Site Scripting with the configuration is the major attack vector
        - https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
        - Have JavaScript that replaces all characters in the configuration with the encoded entities
    - Implement Content Security Policy do not allow loading JavaScript from anywhere
    - entity encode all configuration fields when the configuration is parsed so that data is good everywhere?
    - https://owasp.org/www-project-enterprise-security-api/
- writeup explaining configuration formats
- likart support
    - https://en.wikipedia.org/wiki/Likert_scale
- styling css

## done

- [x] browser check
    - only officially support Edge (and at least a recent updated version)
    - only tested on edge - too much effort to try to support multiple browsers (what works on edge should work on other updated chromium browsers)
    - check that APIs are supported
    - difficult to tell specific browser, not a clean way to check
    - instead check for specific API support
    - not supporting
        - legacy: IE, Safari
        - Non Chromium: Gecko, WebKit