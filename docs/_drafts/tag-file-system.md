# Tag File System

search for files by tag.

How to bootstrap this onto existing fie systems so that it is compatible ans still useful?

How to identify and track files?

- hash
    - but what if the file contents change? Then the hash changes
- path
    - but what if the path changes
- name
    - but what if the name changes
- extension
    - file name extensions tend not to change

- fuzzy matching with other discovered file

Works well for achieved files that do not frequently change



All of these pieces could be updated in the existing file system

Another way it to create a separate tracked world that documents are dragged into and out of for paths and naming. However, may not be compatible with existing file systems.

Simple enough to create a database ca use sqlite to boot strap search functionality.Then it simply a matter of UI.

What about labels?

Possible to automatically derive tags and labels based off of the contents or position or surrounding files?

In order for tags to be persistent when files change they would need to be stored with the file. for certain file types could certainly include the tags.

Previous Work

http://web.mit.edu/6.033/2011/wwwdocs/writing-samples/usmanm_dp1.pdf