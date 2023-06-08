import { program } from '@commander-js/extra-typings';
import * as Debug from 'debug';
import { writeFromDotEnv } from '../writeFromDotEnv';
import { VecOptions } from '../VecOptions';
const debug = Debug('vault-env-config');

const initOptions = (): VecOptions => {
  program
    .option('-k, --key <type>', 'The key as path secrets/data/my-project/dev')
    .option('-e, --env <type>', 'The env file name the default is $(pwd)/.env');
  program.parse(process.argv);
  return program.opts() as VecOptions;
}


(async (options: VecOptions) => {
  debug('options: ', options);
  //failIfNil('Please specify a key for KV. -k lapis/your-project/key or --key==lapis/your-project/key', options.key);
  await writeFromDotEnv(options.key, options.env);
})(initOptions());


