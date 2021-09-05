#!/usr/bin/env node

const { Command } = require('commander'),
      program = new Command(),
      {redeem} = require('./src/redeem'),
      {logger, chalk} = require('./src/utils'),
      constant = require('./src/constant').entryPoint,
      moduleData = require('./package.json');
require('clear')()

console.log(chalk.red(require('figlet').textSync(moduleData.name)));
console.log(chalk.bgRed.whiteBright.bold(moduleData.description));

const options = program
  .version(moduleData.version)
  .requiredOption('-e, --email <type>', 'User email address')
  .requiredOption('-p, --password <type>', 'User password')
  .option('-t, --totp <type>', 'MFA totp token')
  .option('-c, --cookie <type>', 'Cookie session file location')
  .option('-v, --verbose', 'Output extra debugging')
  .parse(process.argv)
  .opts();

//Validate email addrr via regex
if(!options.email.match(constant.emailRegex)){
  return logger.error('Please provide an valid email address')
}

redeem(options.email, options.password, options.totp, options.cookie, options.verbose)
.then(res=>logger.log('Done!'))
.catch(err=>logger.error(err.message))
