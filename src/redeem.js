const {getBrowser, mfaCodeGenerator} = require('./utils');
const constant = require('./constant.json');

exports.redeem = async (email, password, totp=false) => {
  /*
  */

  const page = await getBrowser();
  await page.goto(constant.url);
  console.log('waiting for Epic');
  await page.waitForSelector(constant.selectors.signIn);
  await page.click(constant.selectors.signIn);
  
  await page.waitForSelector(constant.selectors.loginWithEpic);
  await page.click(constant.selectors.loginWithEpic);

  await page.waitForSelector(constant.selectors.loginButton)
  await page.type(constant.selectors.emailField, email)
  await page.type(constant.selectors.passwordField, password)
  await page.click(constant.selectors.loginButton)

  if (page.url.includes('mfa')){
    if (!totp){
      return console.error('Please provide your TOTP token from EPIC.')
    }
    await page.waitForSelector(constant.selectors.securityCode)
    await page.type(constant.selectors.securityCode, mfaCodeGenerator(totp)),
    await page.click();
  }
  
  // User is already logged in

  // TODO:
  // - Add redeem game function for at least 1 game! (Via css selectors).
  // - When 1 game is already redeemed, on second and on, open new tab and redeem the rest.
  // - Add a checkout flow.
  // - Separate login method to an external function.
  // - Add external cookie support.
  // - await Promise.all([tab1, tab2]).

  return await page.close();
}
