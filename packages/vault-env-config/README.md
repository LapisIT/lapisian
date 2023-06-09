![Vault-Env-Config logo](https://github.com/LapisIT/lapisian/raw/master/packages/vault-env-config/src/images/vault-env-config.png "Vault logo")

# vault-env-config
vault-env-config, `vec` is CLI to `read/write` Vault key-value Secrets to/from a `.env` file. 

* Read key/value secrets Json from Vault to .env
* Write key/value secrets in .env to Vault 

# Vault API v1
`vec` uses `node-vault` module to call Vault API (node-vault https://www.npmjs.com/package/node-vault).
`node-vault` is currently using Vault API v1 and v2 is not supported.

# Usage
## Install
```
npm i @lapis-it/vault-env-config
```
## Configure VAULT_ADDR and VAULT_TOKEN
You can either include VAULT_ADDR and VAULT_TOKEN in .env or export as environment variables.

## read
* -k: The Vault key/value secret path e.g. secret/data/:path (https://www.vaultproject.io/api-docs/secret/kv/kv-v2)
* -e: Specify the path for .env file   
```
export VAULT_ADDR=<YOUR VOLT> \
export VAULT_TOKEN=<YOUR TOKEN> \
export DEBUG=vault-env-config; \
vec read \
-k secret/data/my-project/local \
-e ./local.env
```

## write
* -k: The Vault key/value secret path e.g. secret/data/:path (https://www.vaultproject.io/api-docs/secret/kv/kv-v2)
* -e: Specify the path for a .env file   
```
export VAULT_ADDR=<YOUR VOLT> \
export VAULT_TOKEN=<YOUR TOKEN> \
export DEBUG=vault-env-config; \
vec write \
-k secret/data/my-project/local \
-e ./local.env
```


