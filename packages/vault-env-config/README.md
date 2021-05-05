![Vault-Env-Config logo](https://github.com/LapisIT/lapisian/raw/master/packages/vault-env-config/src/images/vault-env-config.png "Vault logo")

# vault-env-config
vault-env-config CLI provides 2 commands to integrate with Vault (https://www.vaultproject.io/) 
using Vault API (node-vault https://www.npmjs.com/package/node-vault).

* Read key/value environment variables from Vault and store them in .env
* Write key/value environment variables from .env to Vault

# Usage
## Install
```
npm i @lapis-it/vault-env-config
```
## Configure VAULT_ADDRESS and VAULT_TOKEN
You can either include VAULT_ADDRESS and VAULT_TOKEN in .env or export as environment variable.

## read
* -k: The Vault key/value secret path e.g. secret/data/:path (https://www.vaultproject.io/api-docs/secret/kv/kv-v2)
* -e: Specify the path for .env file   
```
export VAULT_ADDRESS=<YOUR VOLT> \
export VAULT_TOKEN=<YOUR TOKEN> \
export DEBUG=vault-env-config; \
vec read \
-k lapis/data/my-project/local \
-e ./local.env
```

## write
* -k: The Vault key/value secret path e.g. secret/data/:path (https://www.vaultproject.io/api-docs/secret/kv/kv-v2)
* -e: Specify the path for a .env file   
```
export VAULT_ADDRESS=<YOUR VOLT> \
export VAULT_TOKEN=<YOUR TOKEN> \
export DEBUG=vault-env-config; \
vec read \
-k lapis/data/my-project/local \
-e ./local.env
```


