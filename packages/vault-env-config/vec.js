#!/usr/bin/env node


// require(`./src/lib/bin/vec`);
const dotenv = require('dotenv');
const program = require('commander');
dotenv.config();

program
  .version('1.0.0')
  .command('read', 'read config items from Vault and create .env file.')
  .command('write', 'write config items in .env to Vault.')

// program.on('command:*', function (operands) {
//   console.error(`error: unknown command '${operands[0]}'`);
//   // const availableCommands = program.commands.map(cmd => cmd.name());
//   // mySuggestBestMatch(operands[0], availableCommands);
//   process.exitCode = 1;
// });

program.parse(process.argv);
