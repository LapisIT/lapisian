import * as dotenv from 'dotenv';
import * as R from 'ramda';
import { initVault } from './initVault';
import { jsonToDotEnv } from './jsonToDotEnv';
dotenv.config();
const { path, } = R;

/**
 *
 */
export const readAsDotEnv =  async (keyAsPath: string, dotEnvPath?: string): Promise<string> => {
  const vault = await initVault();
  const response = await vault.read(keyAsPath);
  const data: object = path(['data', 'data'], response);
  return jsonToDotEnv(dotEnvPath, data);
}
