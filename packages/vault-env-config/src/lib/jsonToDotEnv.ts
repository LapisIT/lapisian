import * as R from 'ramda';
const { toPairs, } = R;

import { writeFileSync, appendFileSync } from 'fs';
import { EOL } from 'os';
/**
 *
 */
export const jsonToDotEnv =
  async (dotEnvPath = `${process.cwd()}/.env`, json: object): Promise<string> => {
  writeFileSync(dotEnvPath, '');
  const dotEnv = toPairs(json)
    .map((pair: string[]) => (`${pair[0]}=${pair[1]}`))
    .join(EOL);
  appendFileSync(dotEnvPath, `${dotEnv}`, 'utf8');
  return dotEnv;
}
