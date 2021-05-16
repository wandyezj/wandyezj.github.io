# Geolocation Words

Idea is to label each square area on earth with a minimum set of words.

The idea is a small set of words is easier to remember as a mnemonic for locations.

Some examples include What words and Plus Codes.

What words is an interesting idea but it is not open source. Plus Codes are interesting but not easy to remember.

A primary issue with words is that they carry certain localization issues.

- Polycheck
    - words have different connotation in different parts of the world, socially acceptable phrases in one part of the world may be offensive in another
- Political boundaries
    - Maps are a politically contentious especially where borders are concerned
    - City names can also be politically contentious

Assuming localization issues are resolved, another issue is translation from the words to actual coordinates. This presents an adoption barrier.

One way is to potentially use made up names in place of existing social names, this is what labeling with words does.

One useful aspect may be forming attractive phrases that people wish to use.

One issue is having words that everyone is aware of to avoid giving out words that people do not know.

Much of the world is covered in ocean (~70%), which likely does not need to be taken into account. This allows names to be reserved for land or ocean to have a longer associated phrase.

Land mass is about 150 000 000 square kilometers. What accuracy is needed?

for:

- two words - square root - ~12250 words
- three words - cubed root - ~540 words
- four words - fourth root - ~110 words

Square km is too large of an area

Another option is to community source names for specific places, the key would be to prevent name collision. It would then be allowable to have multiple names for a location. However this would require a database lookup since there would not be a defined pattern to resolve to coordinates.

Chunking existing number could also make it simple, since order is relative.

If each word were assigned a number the number could be looked up and a location could have multiple names.

example
- 123456789 - single word or phrase

- 1 2 3 4 5 6 7 8 9 - nine individual words

- 123 456 789 - three words

- 12 3456 78 9 - four words looked up in index

Issues around zero


