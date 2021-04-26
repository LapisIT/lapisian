import * as dotenv from 'dotenv';
import * as NodeVault from 'node-vault';
import { failIfNil } from './ensure';

export const initVault =  async (): Promise<NodeVault.client> => {
  dotenv.config();
  failIfNil('process.env.VAULT_ADDRESS must be specified.', process.env.VAULT_ADDRESS);
  failIfNil('process.env.VAULT_TOKEN must be specified.', process.env.VAULT_TOKEN);

  const options = {
    endpoint: process.env.VAULT_ADDRESS,
  };

  // process.env.DEBUG = 'node-vault';

  const vault = require("node-vault")(options);

  const res =  await vault.initialized();

  console.log('res: %j', res);

  return vault;
}
