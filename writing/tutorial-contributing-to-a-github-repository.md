# Tutorial Contributing to a GitHub Repository

## Setup

1. Click code drop down and copy the HTTPS URL
1. Clone the repository to you local machine
    > git clone `origin`
    - `origin` is the copied URL of the repository
1. Move to the repository
    > cd Office-Addin-Scripts
1. Fork the repository
    > click the fork button
1. Drop down the code in the fork can copy the HTTPS URL
1. add the fork as a remote
    > git remote add `alias` `fork`
    - `alias` is your GitHub alias
    - `fork` is the copied URL of the fork
1. fetch all
    > git fetch --all

## Creating a new branch

1. create the branch
    > git checkout -b `branch`
    - `branch` name of the branch
1. push the branch to your remote 
    > git push --set-upstream `alias` `branch`
    - `alias` the alias used when adding the fork as a remote (your GitHub alias)
    - `branch` the name of the branch

## Make the change in your topic branch

## Request a merge from the fork to the GitHub repository


