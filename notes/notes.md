# Notes

## Reference

[https://wandyezj.github.io/](https://wandyezj.github.io/)

[Publish and share a website for free with GitHub](https://medium.com/@svinkle/publish-and-share-your-own-website-for-free-with-github-2eff049a1cb5)

[Basic Web Pages Tutorial](https://internetingishard.com/html-and-css/basic-web-pages/)

## View Markdown Files are part of the website

It would be convenient enable markdown files to be viewed as part of the site.

Possible Solutions:

* reference markdown files on the site and have GitHub render them.
* read markdown files from the site and call the GitHub markdown to html API to render on the fly via JavaScript

## Links

Provide Links to Patreon, Youtube, Twitter, GitHub, LinkedIn

## Site Pages

What to host on the site?

Purpose of the site.

Projects - completed or in a good enough to be useful state

## Books

Can use the Open Library API to retrieve a link to the about page for the book and possibly the free version

> http://openlibrary.org/api/books?bibkeys=ISBN:0553096095&format=json

To prevent spamming the Open Library API it should only be called upon request, the main data set should remain static.

https://en.wikipedia.org/wiki/International_Standard_Book_Number

[NPR Top 100 Science Fiction](https://www.npr.org/2011/08/11/139085843/your-picks-top-100-science-fiction-fantasy-books)