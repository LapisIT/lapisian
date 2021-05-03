![Vault logo](src/images/vault.png "Vault logo")
![Dotenv logo](src/images/dotenv.png "DotEnv logo")

# vault-env-config
Get 


* Get key/value environment variables from Vault and store them in .env
* Write key/value environment variables from .env to Vault

# Usage
```

export VAULT_ADDRESS=<YOUR VOLT> \
export VAULT_TOKEN=<YOUR TOKEN> \
export DEBUG=vault-env-config; \
vec read \
-k lapis/data/vancouver-ocean-wise/whale-watch/local \
-e ./.env

```

