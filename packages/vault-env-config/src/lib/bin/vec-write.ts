import * as program from 'commander';
import * as Debug from 'debug';
import { writeFromDotEnv } from '../writeFromDotEnv';
const debug = Debug('vault-env-config');

const initOptions = () => {
  program
    .option('-k, --key <type>', 'The key as path secrets/data/my-project/dev')
    .option('-e, --env <type>', 'The env file name the default is $(pwd)/.env');
  program.parse(process.argv);
  return program.opts();
}

(async (options) => {
  debug('options: ', options);
  //failIfNil('Please specify a key for KV. -k lapis/your-project/key or --key==lapis/your-project/key', options.key);
  await writeFromDotEnv(options.key, options.env);
})(initOptions());


