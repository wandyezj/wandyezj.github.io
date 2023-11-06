# GitHub gist

Use GitHub gists as a way to store data from a website.

- read all users gists
- write a gist
- read a gist

GitHub App should be used as the permissions.

[Permissions for "Gists"](https://docs.github.com/en/rest/overview/permissions-required-for-github-apps?apiVersion=2022-11-28#user-permissions-for-gists)


[List public gists](https://docs.github.com/en/rest/gists/gists?apiVersion=2022-11-28#list-public-gists)


see gists https://gist.github.com/wandyezj

Account Permissions
`Gists` -> `Access Read and Write`


[User Token](https://docs.github.com/en/rest/overview/endpoints-available-for-github-app-user-access-tokens?apiVersion=2022-11-28#gists)

seem to be able to get private gists if pass in a header `authorization: Bearer YOUR_PERSONAL_ACCESS_TOKEN`

## Get User

`https://api.github.com/user`
In headers Authorization: Bearer gho_xxx

## Get all gists

`https://api.github.com/gists?per_page=100`
In headers Authorization: Bearer gho_xxx




[User Access Token](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)

- Is this how to get the bearer? gits `ghu_`


[GitHub Token prefixes](https://github.blog/2021-04-05-behind-githubs-new-authentication-token-formats/)



## Steps making the GitHub App

- GitHub App name: `wandyezj-gist-app`
- Write: `Read and Write Gists`
- Homepage URL: `https:\\wandyezj.github.io`
- Callback URL: `https:\\wandyezj.github.io\wandyezj-gist-app`
- check `Request user authorization (OAuth) during installation`
- Under `Account permissions` select `Gists` -> `Access Read and Write`
- currently `Only on this account`
    - note: this should probably change to `Any Account` to be used by others

### notes

- will need to make the [app visibility](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/making-a-github-app-public-or-private#about-visibility-for-github-apps) public to allow it to be installed on other accounts.

- there are [rate limits](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/rate-limits-for-github-apps)
    - 5000 per hour for personal

- can create a [custom badge](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/creating-a-custom-badge-for-your-github-app) for the GitHub app

## Steps to using the API

[Using the web application flow to generate a user access token](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app#using-the-web-application-flow-to-generate-a-user-access-token)


1. Direct to authorize URL

    `https://github.com/login/oauth/authorize?client_id=12345`

    [see Client ID under about in the app on GitHub](https://github.com/settings/apps/wandyezj-gist-app)

2. On app callback page

    GitHub will then direct to the callback url with a code
    `callbackurl?code=codetoauth`

3. exchange code for user access token

    This needs to happen on the server to protect the client_secret. Otherwise other people could use the secret in their flows (act as your authorized app)

    `https://github.com/settings/apps/wandyezj-gist-app` -> Generate secret

    POST `https://github.com/login/oauth/access_token`

    - `client_id`
    - `client_secret` - do not publish this
    - `code`

4. read the access and refresh token
    - `access_token`
    - `refresh_token` (good for `refresh_token_expires_in`)


Should use Key Vault to store the token


[Refreshing a user access token with a refresh token](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/refreshing-user-access-tokens#refreshing-a-user-access-token-with-a-refresh-token)

1. request new token
    - this needs to happen on the server to protect the `client_secret`

    - `client_id`
    - `client_secret`
    - `grant_type` refresh_token
    - `refresh_token`


Security

- client_secret needs to be kept on the server
- CORS needs to be enforced so the server only accepts requests from specific websites, but really for this to be secure the server needs to have a session token that only it and the client know about
