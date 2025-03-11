Do not `export * from x` in the index.ts file. Instead export the individual types.

All packages should be clear about the specific types they export in their top-level index file.

This makes it easy to tell what types a package is intended to export.

This also helps prevent export of internal types.

This makes it easy to tell what is added / removed / changed between package versions by looking at the top level file.

This also prevents regressions where types are unintentionally renamed or moved.