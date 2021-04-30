import * as program from 'commander';
import { readAsDotEnv } from '../readAsDotEnv';
import * as Debug from 'debug';
const debug = Debug('vault-env-config');

const initOptions = () => {
  program
    .option('-k, --key <type>', 'The key as path secrets/my-project/dev')
    .option('-e, --env <type>', 'The env file name the default is $(pwd)/.env');
  program.parse(process.argv);
  return program.opts();
}

(async (options) => {
  debug('options: ', options);
  //failIfNil('Please specify a key for KV. -k lapis/your-project/key or --key==lapis/your-project/key', options.key);
  await readAsDotEnv(options.key, options.env);
})(initOptions());


