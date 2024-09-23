---
layout: post
title: "Welcome to Jekyll!"
date: 2021-08-21 00:00:00 -0700
tags: jekyll update
---

## Posts

This post is in the `_posts` directory.

Edit and rebuild the side to see changes with `bundle exec jekyll serve` which launches a web server and auto-regenerates your site when a file is updated.

## New Posts

To add new posts, add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.md` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

## Code Snippets

```typescript
function f(): string {
    return "hello";
}

console.log(f())
```

## Links

Info on how to get the most out of Jekyll on [Jekyll docs][jekyll-docs].

File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh].

Ask questions on [Jekyll Talk][jekyll-talk].

This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.com](https://jekyllrb.com/)

You can find the source code for Minima at GitHub:
[jekyll][jekyll-organization] /
[minima](https://github.com/jekyll/minima)

You can find the source code for Jekyll at GitHub:
[jekyll][jekyll-organization] /
[jekyll](https://github.com/jekyll/jekyll)

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]: https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
[jekyll-organization]: https://github.com/jekyll

## GitHub Setups

[GitHub Software Installed on docs runner](https://github.com/actions/runner-images/blob/ubuntu20/20220905.1/images/linux/Ubuntu2004-Readme.md)

## Local Testing

Check Ubuntu version

> lsb_release -a

On Windows:

- Using WSL2 with ubuntu 20 follow [setup](#setup).
- [Using WSL2 with Ubuntu 22](#notes-for-ubuntu-22)
- [Using WSL2 with Ubuntu 24](#notes-for-ubuntu-24)

### Setup

Packages have dependencies on multiple compilers:

https://jekyllrb.com/docs/installation/

> sudo apt-get install gcc -y

> sudo apt install g++ -y

> sudo apt-get update --fix-missing

> sudo apt install make

Once those compilers are installed:

> sudo apt-get install ruby-full

> sudo gem install jekyll bundler

### Launch The Server

With the following installed, launch the server

> cd docs

> bundle install

> bundle exec jekyll serve

### Notes for Ubuntu 22

[Install WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

Before doing the setup

Ubuntu 22 comes with ruby 3 which is not compatible with the github-pages. Use ruby 2 with rvm.

1. Install RVM

    https://rvm.io/rvm/install

    > sudo apt install gnupg2

    > gpg --keyserver keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB

    > \curl -sSL https://get.rvm.io | bash -s stable

    After installing rvm restart WSL

1. Install older ruby version

    > rvm pkg install openssl

    - Enter the password.

    > rvm install "ruby-2.7.6" --with-openssl-dir=$HOME/.rvm/usr

1. Check Installed Ruby Versions

    > rvm list known

1. Use Installed ruby versions

    > rvm use ruby-2.7.6

1. Check ruby version

    > ruby --version

1. Follow [setup steps](#setup)

## Notes for Ubuntu 24

[Install WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

(On Windows 11, open Powershell as administrator and run `wsl --install`)

Get Ubuntu 24.04 LTS from the Microsoft Store.

Ubuntu 24 comes with ruby 3.


### Install ruby

> gpg --keyserver keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
\curl -sSL https://get.rvm.io | bash -s stable

> rvm install "ruby-3.3.5"

> rvm list known

> rvm use ruby-3.3.5


### Check Versions

> ruby -v

> gem -v

> gcc -v

> g++ -v

> make -v

### Install jekyll

[Install Jekyll on Ubuntu](https://jekyllrb.com/docs/installation/ubuntu/)

```text
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

> gem install jekyll bundler

