---
layout: post
title:  "GitHub contributing to projects"
date:   2022-05-05 12:00:00 -0700
tags: software github
---


I always forget the git commands to set up a Pull Request to Open Source projects on GitHub. This is a short summary.

1. Sign into Github

1. Fork project repository

1. Clone Fork local
    > git clone URLFORK

    _note_: `URLFORK` is the url of the fork
1. Change to local repository
    > cd NAME

    _note_: `NAME` - repository name

1. Add upstream
    > git remote add upstream URLPROJECT

1. Check origins
    > git remote -v

    _note_: origin should be the fork url, upstream should be the project url

1. Pull latest
    > git pull upstream main

    _note_: `main` is the branch to pull in

1. create new branch
    > git checkout -b NAME

    _note_: `NAME` is the name of the new branch. Recommended to be username/description, username is your github username, and description is a short description of the change

1. Push the branch

    > git push

    _note_: This will git you the actual command to run to push to origin.

1. make and commit changes to the local repository
    > git add

    > git commit -m "message"

1. push changes to fork
    > git push

1. Create pull request

## Convenient Git Commands

### Delete local branch

> git branch -d NAME

### Delete remote branch

> git push origin --delete NAME

_note_: `NAME` is the name of the remote branch.

### Automatically push to central repository

> git config --local --add push.autoSetupRemote true

### Change Author or last commit

> git commit --amend --author="Author Name email@address.com" --no-edit

### Check git config

> git config --get user.email

### Set local email

> git config --local user.email email@address.com

### Revert to commit

see previous commit hashes
> git log

revert to the specific commit specify with `commithash`
> git reset --HARD commithash

push the change to the remote
> git push --force


## Merge another repository and preserve history

These commands merge the remote repositories changes into the existing repository and preserve history.

> git checkout main

> git remote add remoteother url

> git fetch remoteother

> git merge remoteother/main --allow-unrelated-histories

> git remote rm remoteother

Use git mv to move files into position. This works better when there is less in the history.

When merging the pull request make that the merge preserves all commits.


## Typical Flow

Typical flow for making changes to a project when you can create a branch and push to the project directly.

### Create the topic branch

> git checkout main

Make sure you are on the main branch

> git status

Make sure main branch is updated with latest

> git fetch

> git pull

Create the topic branch locally and push to remote

> git checkout -b branch-name

> git push

### Commit changes

> git add *

> git commit -am "message"

> git push

### Merge changes

> git fetch

> git merge origin/main

> git push

### Complete Pull Request

### Delete local branch

> git branch -D branch-name
