# Https Website

Adding https to the wandyez.com root domain.

Azure does not allow automatic certificates for the root domain

https://letsencrypt.org/how-it-works/

https://dev.to/ope/securing-your-azure-web-app-with-let-s-encrypt-4g99

- See Getting a Certificate

## Existing Steps


1. [verify domain ownership](https://eff-certbot.readthedocs.io/en/stable/using.html#manual)
    - need to place a file on the site or update the dns record
    - Probably want to update the DNS record? Otherwise need to push to the repository.
    - manual has to be done for every renewal
1.

## How to Automate Updating the certificate?

## Cert Bot



## Lets Encrypt Root Certificate

Own Cert -> Lets Encrypt Cert -? ISRG Root x1 or x2 Cert

Own Certificate is only valid for 90 days. Which means its best to renew every month or two months.
- What is the certificate authority rate limit?
    - https://letsencrypt.org/docs/rate-limits/
    - The main limit is Certificates per Registered Domain (50 per week).
    - There is a Failed Validation limit of 5 failures per account, per hostname, per hour. 

## Using a GitHub Action to run the certificate update process

- need to create an ACME account?
    - register --agree-tos 
    

- Either
    - add a file to a well known path on the site (easiest)
        - how does site get updates?
    - Update DNS record name, need permissions
    - https://eff-certbot.readthedocs.io/en/stable/using.html#pre-and-post-validation-hooks


certbot command line arguments

certonly --manual -d wandyezj.com
--cert-name CERTNAME

 --preferred-challenges {http, dns}

--dry-run  
--test-cert

When are certificates due for renewal?

What is it about the private key?

> sudo apt-get update
> sudo apt-get install certbot

> sudo certbot certonly -d yourdomain.com --manual --preferred-challenges dns

export pfx
```sh
# create a staging area
mkdir /tmp/sandbox -p
cd /tmp/sandbox

# copy the needed files over
SOURCE=/etc/letsencrypt/live/yourdomain.com
sudo cp $SOURCE/{cert.pem,privkey.pem,chain.pem} .

# make the files your own
# assuming your username is ope...
sudo chown ope *.pem

# finally, create the private certificate,
# saving it to "certificate.pfx"
openssl pkcs12 -export -out certificate.pfx -inkey privkey.pem -in cert.pem -certfile chain.pem
```

### What is needed on the Azure side?
Upload a private certificate