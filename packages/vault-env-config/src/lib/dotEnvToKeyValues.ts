import * as R from 'ramda';
const { fromPairs, split, slice } = R;

import { readFileSync } from 'fs';
import { EOL } from 'os';
import { KeyValuePair } from 'ramda/tools';
import { equals } from 'ramda';

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

const splitByEqual = (kvAsString) => {
  const keyValues: string[] = split('=', kvAsString);
  const key = keyValues[0];
  const value = getValue(keyValues);
  return [key, value];
}

const getValue = (keyValues: string[]) => {
  if(equals(keyValues.length, 2)) {
    return removeDoubleQuotes(keyValues[1]);
  }
  const valueContainsEquals = slice(1, Infinity, keyValues);
  return removeDoubleQuotes(valueContainsEquals.join('='));
}

const removeDoubleQuotes = (value: string) => {
  if(equals(slice(0,1, value), '"') &&
    equals(slice(value.length - 1, Infinity, value), '"')) {
    return slice(1, value.length - 1, value);
  }
  return value;
}

