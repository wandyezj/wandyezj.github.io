---
layout: post
title: "Setting up a personal website on GitHub"
date: 2022-09-30 00:00:00 -0700
tags: software github tutorial
---

You can do this entire tutorial from your browser!


## Steps

1. Register for a GitHub account.
    - pick a name that you want to use as your alias forever.
    - you will by typing this alias a lot!
    - I recommend an alias that
        - is made of only lowercase a-z characters
        - is less than 10 characters
1. Create a Logo for your alias
    - You can change this whenever but it acts as your symbol
    - (I've never changed mine)
1. Create a repository called `ALIAS.github.io` where `ALIAS` is your github alias.
1. There are two main options for your website
    - Website using HTML
    - Blog using Jekyll
1. For your first site use HTML to check that everything is working.
    - Setting up Jekyll is difficult and requires installing things on your desktop, you can always switch to Jekyll later.
1. We are going to create the main page for the site called `index.html`
1. On the open repository in your browser click `Add file` -> `Create new file`
1. Name the file `docs/index.html`
1. Copy and paste the following into the file.

    ```html
    <!DOCTYPE html>
    <html lang='en'>

    <head>
    <!-- Metadata goes here -->
    <meta charset='UTF-8' />
    <title>Hello World!</title>
    </head>

    <body>
    <!-- Content goes here -->
    <h1>Hello World!</h1>
    </body>

    </html>

    ```

1. click `Commit new file`
1. Now we will to set up the repository to publish the site
1. Click `Settings` -> `Pages`
1. Set source to `Deploy from branch`
1. Set branch to main /docs
1. Click `Visit site` to visit your new website!

## Further Reading

[About GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)

[Github Pages Terms of Use](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#prohibited-uses)
