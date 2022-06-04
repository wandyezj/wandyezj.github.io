# example title

> example description


- [ ] example item
    > example item description
- [ ] example item 2
    > example item description

- (likert) [always] some likert

- (likert) another likert

- (likert) empty value likert


## example section

- [ ] example item
- [ ] example item 2

<!-- example comment -->

<!--
multi line comment
-->

```config
{
    "id": "default",
    "checkbox": {
        "checked": {
            "color": "pink"
        },
        "unchecked": {
            "color": "white"
        }
    },
    "likert": {
        "options": [
            {
                "value": "always",
                "description": "strongly agree",
                "color": "lime"
            },
            {
                "value": "mostly",
                "description": "agree",
                "color": "lightcyan"
            },
            {
                "value": "unknown",
                "description": "neutral",
                "color": "white"
            },
            {
                "value": "rarely",
                "description": "disagree",
                "color": "yellow"
            },
            {
                "value": "never",
                "description": "strongly disagree",
                "color": "red"
            }
        ]
    }
}
```
