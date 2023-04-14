---
layout: post
title: "TypeScript Dependency"
date: 2023-03-26
 00:00:00 -0700
tags: software architecture typescript
---



Implications of using TypeScript.

## Short

The TypeScript version must be kept updated.

## Long

- TypeScript major and minor versions are incremental and do not follow semantic versioning. i.e. 3.9, 4.0 [^1]

- New TypeScript versions often introduce new syntax and have better type checking.[^1]

- NPM packages typically target a single TypeScript version for their type files (.d.ts). Newer versions of packages often only target the latest TypeScript version.

- NPM packages frequently have security vulnerabilities discovered in old package versions that are fixed in new versions but rarely back ported. Patching these package dependencies involves updating them to the latest version.

- If dependency packages are upgraded and use newer TypeScript features than the current TypeScript version used by the package then the TypeScript version of the package also needs to be upgraded.

- To keep things simple consistently update the TypeScript version to the latest.

[^1]: [TypeScript Blog](https://devblogs.microsoft.com/typescript/)