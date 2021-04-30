import * as dotenv from 'dotenv';
import * as program from 'commander';
dotenv.config();

program
  .version('1.0.0')
  .command('read', 'read config items from Vault and create .env file.')
  .command('write', 'write config items in .env to Vault.')

program.parse(process.argv);
