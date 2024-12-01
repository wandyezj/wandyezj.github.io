---
layout: post
title: "API Design Error Messages"
date: 2024-12-01 00:00:00 -0700
tags: software API
---

APIs often return string error messages to give more information on what went wrong.

I recommend any error messages be strings from a fixed known list.

Why?

Developers frequently log error messages in telemetry to better understand what went wrong.

- Error messages with variables make it more difficult to determine the frequency of an error when querying logs.
- Error messages with variables have the potential to contain Customer Content. If these messages are logged can trigger a legal privacy incident due to various privacy laws in effect worldwide.

Developers frequently look up and ask about error messages online.

- Error messages with variables make it more difficult to search for help, since the error messages are not alike then can't be easily searched.

If additional information is needed for a specific error message; place this information in separate fields from the main message. Make sure that this information does not contain customer content.

Information about parameters passed to the API does not need to be reflected in the error message. This information is already available to the developer and they can log it if necessary.

Providing a guarantee to developers using the API that the error message comes from a known list of fixed messages greatly reduces development costs and legal risks.



