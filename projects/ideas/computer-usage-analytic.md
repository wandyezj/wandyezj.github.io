# Computer Usage Analytics

How am I using my computer?

What do I spend time doing? Where should I optimize?

## Data Collection

### Browser History

Chromium stores browser history in a `History` sqlite database:

Chrome

`"%LOCALAPPDATA%\Google\Chrome\User Data\Default\History"`

Edge
`"C:\Users\%USERNAME%\AppData\Local\Microsoft\Edge\User Data\Default\History"`

`"%LOCALAPPDATA%\Microsoft\Edge\User Data\Default\History"`

Mozilla

https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data

`"%APPDATA%\Mozilla\Firefox\Profiles\0ylh05gg.default\places.sqlite"`

Browse the SQLite database with
[SQLiteDatabaseBrowser](https://sqlitebrowser.org/)

Mozilla and Chromium browsers sqlite databases have different data structures.

- Site History
- Bookmarks

### Program Sampling

Periodically check what programs are running.

> tasklist

### Installed Programs

[Check what programs are installed](https://stackoverflow.com/questions/908850/get-installed-applications-in-a-system)

Look at the windows registry

> "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall"

Specifically interested in any steam or xbox games or the like.

### Web Traffic

https://www.telerik.com/blogs/understanding-telerik-fiddler-as-a-proxy

https://www.telerik.com/fiddler/usecases/https-traffic-recording