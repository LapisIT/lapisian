import * as dotenv from 'dotenv';
import * as NodeVault from 'node-vault';
import { failIfNil } from './ensure';
import * as Debug from 'debug';
const debug = Debug('vault-env-config');

export const initVault =  async (): Promise<NodeVault.client> => {
  dotenv.config();
  failIfNil('process.env.VAULT_ADDR must be specified.', process.env.VAULT_ADDR);
  failIfNil('process.env.VAULT_TOKEN must be specified.', process.env.VAULT_TOKEN);

  const options = {
    endpoint: process.env.VAULT_ADDR,
  };

  // process.env.DEBUG = 'node-vault';

  const vault = NodeVault(options);

  const res =  await vault.initialized();

  debug('vault.initialized: %j', res);

  return vault;
}
