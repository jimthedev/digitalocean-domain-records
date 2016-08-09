## Description

Provision a new A record on Digital Ocean.

## Getting Started

### Setup

Generate new read and write api keys at https://cloud.digitalocean.com/settings/api/tokens

Clone this repo, rename .env.example to .env, put your api keys in. ROOT_IP should be the ip that you wish to send traffic (the IP of a droplet). The ROOT_DOMAINNAME should be the root domain. 

### Usage

Given a .env file of:

```
ROOT_IP=1.2.3.4
ROOT_DOMAIN=example.com
DO_KEY_READ=asdasdasdakmsdlkamlsdkmalkmsdlaksmlkamsldkmasda
DO_KEY_WRITE=askmlaksmdlkamsdlkamsldkmalskdmlaksmdlkamsldkm
```

Running this:

```
node index.js --name tester
```

Should create tester.example.com and point it to 1.2.3.4. You can confirm this by viewing your networking setup at: https://cloud.digitalocean.com/domains/example.com  (replace example.com in the url with your ROOT_DOMAINNAME.
