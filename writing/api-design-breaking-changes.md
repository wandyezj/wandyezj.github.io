# API Design Breaking Changes

What is considered a breaking change?


- Is the change directed towards a documented bug? If so consumers are likely to expect the change.
- How old is the API? The longer the API has been around the more likely consumers have built around the current behavior.
- How broken is the API? Is the behavior is so broken that consumers can't use the API then it's probably not breaking.
- How much is the API being used?
- What is the downside of making the change?
- Does the behavior align with the documentation? If the behavior is being adjusted to align with the documentation or intended behavior then the change is less breaking.
- Is there a behavior difference across platforms? If so then the difference should be documented.