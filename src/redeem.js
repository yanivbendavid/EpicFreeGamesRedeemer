const { getBrowser, mfaCodeGenerator, logger } = require("./utils");
const constant = require("./constant").redeemer;

/**
 * The main component of EPIC free game redeemer.
 * @summary This can be used externally but it's better to just launch it via the main entry point.
 * @param {string} email: email of desired user
 * @param {string} password: password of desired user
 * @param {string} totp: optional MFA token
 * @param {boolean} verbose: extra logs
 */
exports.redeem = async (
  email,
  password,
  totp = false,
  cookie = false,
  verbose = false
) => {
  const page = await getBrowser();
  await page.goto(constant.url);

  verbose && logger.log("Waiting for Epic");
  await page.waitForSelector(constant.selectors.signIn);
  await page.click(constant.selectors.signIn);

  verbose && logger.log("Going to login page");
  await page.waitForSelector(constant.selectors.loginWithEpic);
  await page.click(constant.selectors.loginWithEpic);

  verbose && logger.log(`Trying to login to user: ${email}`);
  await page.waitForSelector(constant.selectors.loginButton);
  await page.type(constant.selectors.emailField, email);
  await page.type(constant.selectors.passwordField, password);
  await page.keyboard.press("Enter");
  // await page.click(constant.selectors.loginButton);

  await page.waitForSelector(constant.selectors.loginErrorMessage);

  logger.infoEmojis(await page.$eval(constant.selectors.loginErrorMessage));

  if (page.url().includes("mfa")) {
    //TODO: add a non MFA senario for URL checkup

    // MFA
    if (page.url().includes("mfa")) {
      if (!totp) {
        return logger.error("Please provide your TOTP token from EPIC.");
      }
      await page.waitForSelector(constant.selectors.securityCode);
      await page.type(constant.selectors.securityCode, mfaCodeGenerator(totp));
      await page.click();
    }
    // ENDOF MFA
  }

  // TODO: Finish this!

  return await page.close();
};
