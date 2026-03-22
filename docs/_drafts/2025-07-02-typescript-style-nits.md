---
layout: post
title: "TypeScript Style Nits"
date: 2025-07-02 00:00:00 -0700
tags: software
---

These are some common nits I have with how people write TypeScript.

nit: please do not repeat names. This adds clutter to the code and makes it difficult to tell which names have actually been renamed in the object.

```typescript
 responseNeedsXYZ: responseNeedsXYZ,
      XYZEnabled: XYZEnabled,
      hasClaims: hasClaims,
```

verses:

```typescript
      responseNeedsXYZ,
      XYZEnabled,
      hasClaims,
```

nit: please use camel case for variable names, i.e. xyzEnabled

Upper case is reserved for: classes names, enum names, etc...