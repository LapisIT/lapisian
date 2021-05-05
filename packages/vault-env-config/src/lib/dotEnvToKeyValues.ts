import * as R from 'ramda';
const { fromPairs, split, } = R;

import { readFileSync } from 'fs';
import { EOL } from 'os';
import { KeyValuePair } from 'ramda/tools';

/**
 *
 */
export const dotEnvToKeyValues =
  // eslint-disable-next-line @typescript-eslint/ban-types
  async (dotEnvPath = `${process.cwd()}/.env`): Promise<object> => {
  const data =  readFileSync(dotEnvPath, { encoding:'utf8' });
  const keyValues: KeyValuePair<string, string>[] =
    splitByEOL(data).map(kvAsString => splitByEqual(kvAsString) as KeyValuePair<string, string>);
  return fromPairs<string>(keyValues);
}
const splitByEOL = split(EOL);
const splitByEqual = split('=');

