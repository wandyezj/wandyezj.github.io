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


## Essays

https://www.scattered-thoughts.net/writing/against-sql/

https://www.cs.tufts.edu/~nr/cs257/archive/matthias-felleisen/expressive-as-published.pdf

https://langdev.stackexchange.com/questions/2015/how-can-we-compare-expressive-power-between-two-turing-complete-languages


## TypeScript

[NPM package aliases](https://github.com/npm/cli/pull/3) 

```text
"dependencies": {
    "foo-v3": "foo@3",
    "foo-v4": "foo@4"
}

You can also refactor your codebase to update every reference to foo to foo-v3, and then do something like this: 

"dependencies": {
    "foo-old": "foo@^3",
    "foo": "^4.0.3"
}
```


[Pipeline Caching](https://learn.microsoft.com/en-us/azure/devops/pipelines/release/caching?view=azure-devops#nodejsnpm)