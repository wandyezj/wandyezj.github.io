# API Design Guidelines

- avoid overloads in parameters where a parameter can be multiple types, because it add complexity and can be confusing

- avoid localization of error messages as this makes it hard to look up specific errors online and get community support

- be case sensitive by default `AHome != ahome`

- names should never have two capitol letters in a row
- names should only contain the letters `[A-Z][a-z]`

- when it's possible to get an item in a collection by different properties {name, index, id, key, value} create separate methods for each unique way of retrieving the items.Did 