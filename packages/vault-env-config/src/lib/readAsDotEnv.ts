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
  const data = path(['data', 'data'], response);
  // eslint-disable-next-line @typescript-eslint/ban-types
  return jsonToDotEnv(dotEnvPath, data as object);
}
