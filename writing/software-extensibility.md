# Software Extensibility

Extending the capability of software.

## Definitions

Host

- The piece of software that can be extended.

Extension

- The piece of software that can be added to the host.

API

- Application Programming Interface, the set of functions that the Host and Extension use to communicate.

## APIs

All individual APIs should be semantically versioned.

### Verification

An extension should be written that exercises full capabilities of all APIs the host supports to ensure that no regressions in the API layer occur.

## Permissions

Each API and the version of the API that an extension uses should be listed in the manifest.

Before an extension is added to the host the use can view the list of permissions being granted.

Ideally this list should be automatically generated from the extension source code.

The host should only enable use of APIs by the extension that are listed in the manifest.

The host can deny an extension if it does not support all APIs that an application requires.

The host should have an API that lists all APIs that are supported.
