module.exports = {
  redeemer: {
    url: "https://www.epicgames.com/store/en-US/",
    selectors: {
      signIn: "[data-component='SignIn']",
      loginWithEpic: "#login-with-epic",
      emailField: "#email",
      passwordField: "#password",
      loginButton: "#sign-in",
      securityCode: ".jss27 > input",
      securityContinue: "#continue",
      loginErrorMessage: ".MuiTypography-subtitle1",
    },
  },
  entryPoint: {
    emailRegex:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  utils: {
    infoEmojis: ["ðĩ", "ð", "ðĶ", "ðĶ§", "ðķ", "ð", "ðĶŪ", "ðâðĶš", "ðĐ", "ðš", "ðĶ", "ðĶ", "ðą", "ð", "ðââŽ", "ðĶ", "ðŊ",
     "ð", "ð", "ðī", "ð", "ðĶ", "ðĶ", "ðĶ", "ðĶŽ", "ðŪ", "ð", "ð", "ð", "ð·", "ð", "ð", "ð―", "ð", "ð", "ð",
      "ðŠ", "ðŦ", "ðĶ", "ðĶ", "ð", "ðĶĢ", "ðĶ", "ðĶ", "ð­", "ð", "ð", "ðđ", "ð°", "ð", "ðŋïļ", "ðĶŦ", "ðĶ", "ðĶ", "ðŧ",
       "ðŧââïļ", "ðĻ", "ðž", "ðĶĨ", "ðĶĶ", "ðĶĻ", "ðĶ", "ðĶĄ", "ðū", "ðĶ", "ð", "ð", "ðĢ", "ðĪ", "ðĨ", "ðĶ", "ð§", "ðïļ", "ðĶ",
       "ðĶ", "ðĶĒ", "ðĶ", "ðĶĪ", "ðŠķ", "ðĶĐ", "ðĶ", "ðĶ", "ðļ", "ð", "ðĒ", "ðĶ", "ð", "ðē", "ð", "ðĶ", "ðĶ", "ðģ", "ð",
       "ðŽ", "ðĶ­", "ð", "ð ", "ðĄ", "ðĶ", "ð", "ð", "ð", "ðĶ", "ð", "ð", "ð", "ðŠē", "ð", "ðĶ", "ðŠģ", "ð·ïļ", "ðĶ",
       "ðĶ", "ðŠ°", "ðŠą", "ðĶ", "ðĶ", "ðĶ", "ðĶ"],
  },
};
