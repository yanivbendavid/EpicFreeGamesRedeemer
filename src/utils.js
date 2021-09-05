const chalk = require('chalk')
const constant = require('./constant').utils

module.exports = {
  /**
   * Get browser will create an instance of chromium and will keep the same UID of that process
   */
  getBrowser: async() => {
    const browser = await require("puppeteer").launch();
    return await browser.newPage();
  },
  /**
   * Generates a MFA code based on a TOTP str.
   * @param {string} token : The users TOTP string
   * @returns {string} MFA code.
   */
  mfaCodeGenerator: token => require("totp-generator")(token),

  /**
   * Logger is our internal logger that includes colours and nice icons because why not.
   */
  logger: {
    /**
     * Logger.log(), great if you're into just logging
     * @param {string} message - Whatever message you like to include.
     * @param {boolean} icon - Will add a nice random unicode emoji of an animal
     * @returns
     */
    log: (message, icon = true) =>
      console.log(
        icon
          ? `${
              constant.infoEmojis[
                Math.floor(Math.random() * constant.infoEmojis.length)
              ]
            } `
          : "",
        chalk.dim(message)
      ),

    /**
     * Logger.error(), throw errors like a king!
     * @param {string} message - Whatever message you like to include.
     * @param {boolean} icon - Prefix of ❌
     * @returns
     */
    error: (message, icon = true) =>
      console.error(icon ? "❌ " : "", chalk.red(message)),

    /**
     * Logger.warn(), warn your buddies
     * @param {string} message - Whatever message you like to include.
     * @param {boolean} icon - Prefix of ⚠️
     * @returns
     */
    warn: (message, icon = true) =>
      console.warn(icon ? "⚠️ " : "", chalk.bold(message)),
  },
  chalk: chalk, //This is exprot chalk to be used everywhere!
};

