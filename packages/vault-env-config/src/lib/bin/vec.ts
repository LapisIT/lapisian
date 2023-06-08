#!/usr/bin/env node
import * as dotenv from 'dotenv';
import { program } from '@commander-js/extra-typings';
dotenv.config();

program
  .version('1.0.0')
  .command('read', 'read config items from Vault and create .env file.')
  .command('write', 'write config items in .env to Vault.')

program.on('command:*', function (operands) {
  console.error(`error: unknown command '${operands[0]}'`);
  // const availableCommands = program.commands.map(cmd => cmd.name());
  // mySuggestBestMatch(operands[0], availableCommands);
  process.exitCode = 1;
});

program.parse(process.argv);
