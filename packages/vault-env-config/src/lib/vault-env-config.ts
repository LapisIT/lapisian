import * as dotenv from 'dotenv';
import * as R from 'ramda';
import { initVault } from './initVault';
dotenv.config();
const { path, } = R;

/**
 *
 */
export const vaultEnvConfig =  async (): Promise<string> => {
  const vault = await initVault();
  const val = await vault.read('lapis/data/vancouver-ocean-wise/whale-watch/local');
  return path(['data', 'data'], val);
}
