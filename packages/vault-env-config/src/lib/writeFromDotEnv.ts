import { initVault } from './initVault';
import { dotEnvToKeyValues } from './dotEnvToKeyValues';

/**
 *
 */
export const writeFromDotEnv =  async (keyAsPath: string, dotEnvPath: string): Promise<any> => {
  const vault = await initVault();
  const keyValues = await dotEnvToKeyValues(dotEnvPath);
  return vault.write(keyAsPath, { data: keyValues });
}
