import * as dotenv from 'dotenv';
import * as R from 'ramda';
dotenv.config();
const { path, } = R;

export const vaultEnvConfig =  async (): Promise<string> => {
  const options = {
    endpoint: process.env.VAULT_ADDRESS,
  };

  // get new instance of the client
  process.env.DEBUG = 'node-vault';
  const vault = require("node-vault")(options);

  const res =  await vault.initialized();

  console.log('res: %j', res);

  const val = await vault.read('lapis/data/vancouver-ocean-wise/whale-watch/local');

  return path(['data', 'data'], val);
}
