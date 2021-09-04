module.exports = {
  getBrowser: async () => await require('puppeteer').launch().newPage(),
  mfaCodeGenerator: (token) => require('totp-generator')(token)
}

