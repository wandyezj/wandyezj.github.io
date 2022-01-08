# Programming Languages Standard Libraries

These libraries are considered built into the language.

What essential features should be built into a standard scripting library?

What is the bare minimum?

- time
    - now()
        - milliseconds
        - note: unix time is in seconds, seconds since X - but this does not easily translate to a valid timestamp, since seconds and days can be arbitrarily added.
        - typically Day Month Year are used perhaps to minute and maybe second for human readable times
        - That said Unix time can represent any time, the translation to any sort of specific date from thee requires more complex logic, especially considering the different human time systems used over time. A 64 bit time value is massive.
        - is there a need for a more accurate time
        - https://en.wikipedia.org/wiki/Unix_time
        - note: actual time returned would be keyed to the machine clock
        - accurate time would be since the start of the script
        - probably the correct thing to do is provide a simple version and then have external libraries translate that stamp to appropriate time systems
        - The problem is that time is relative.
        - https://en.wikipedia.org/wiki/Unix_time
        - [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)
        - [TAI](https://en.wikipedia.org/wiki/International_Atomic_Time)
        - Excel Dates - Excel stores dates as sequential serial numbers so that they can be used in calculations. January 1, 1900 is serial number 1, and January 1, 2008 is serial number 39448 because it is 39,447 days after January 1, 1900.
        - important to be able to convert between different formats
        - would be convenient if all files stored dates the same way, since this can avoid the ambiguity.
        - What matters is wha time a day starts and what time a year starts these can be linked back to a specific timeframe. Hence an algorithm would simply look these offsets up in a table. However since time is a human construct that means that new time system can come into play. Should this be exposed to a script writer? changing this underneath the hood can have existing scripts modify their results.
        - [C++ Chrono](https://www.cplusplus.com/reference/chrono/)
            - takes the opinion of the system clock -> looks at the machines clock.
        - any timestamp of day will need to refer to some alternative endpoint
- networking
    - fetch
    - [http](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
        - can this be simplified?
    - auth
- string formatting