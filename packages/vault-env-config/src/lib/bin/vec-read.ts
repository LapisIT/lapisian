import { program } from '@commander-js/extra-typings';
import { readAsDotEnv } from '../readAsDotEnv';
import * as Debug from 'debug';
import { failIfNil } from '../ensure';
import { VecOptions } from '../VecOptions';
const debug = Debug('vault-env-config');

const initOptions = (): VecOptions => {
  program
    .option('-k, --key <type>', 'The key as path secrets/my-project/dev')
    .option('-e, --env <type>', 'The env file name the default is $(pwd)/.env');
  program.parse(process.argv);
  return program.opts() as VecOptions;
}

(async (options: VecOptions) => {
  debug('options: ', options);
  failIfNil('options.key must be specified.', options.key);
  await readAsDotEnv(options.key, options.env);
})(initOptions()).catch(console.error);
