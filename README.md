```
             _            __                                                                        _
   ___ _ __ (_) ___      / _|_ __ ___  ___        __ _  __ _ _ __ ___   ___  ___       _ __ ___  __| | ___  ___ _ __ ___   ___ _ __
  / _ \ '_ \| |/ __|____| |_| '__/ _ \/ _ \_____ / _` |/ _` | '_ ` _ \ / _ \/ __|_____| '__/ _ \/ _` |/ _ \/ _ \ '_ ` _ \ / _ \ '__|
 |  __/ |_) | | (_|_____|  _| | |  __/  __/_____| (_| | (_| | | | | | |  __/\__ \_____| | |  __/ (_| |  __/  __/ | | | | |  __/ |
  \___| .__/|_|\___|    |_| |_|  \___|\___|      \__, |\__,_|_| |_| |_|\___||___/     |_|  \___|\__,_|\___|\___|_| |_| |_|\___|_|
      |_|                                        |___/
```
> Puppeteer based script that fetch EPIC games for you automatically.

### WIP!

## Install and run
#### Locally:
```bash
npm install
node index.js --email your@email.addr --password pwd123123
```

#### Docker:
```bash
export email=your@email.addr
export password=pwd123123
docker build .
```

### Available args:
```
Options:
  -V, --version          output the version number
  -e, --email <type>     User email address
  -p, --password <type>  User password
  -t, --totp <type>      MFA totp token
  -c, --cookie <type>    Cookie session file location
  -v, --verbose          Output extra debugging
  -h, --help             display help for command
```

### TODO:
- [ ] - Add a Dockerfile + docker compose.
- [ ] - Add redeem game function for at least 1 game! (Via css selectors).
- [ ] - When 1 game is already redeemed, on second and on, open new tab and redeem the rest.
- [ ] - Add a checkout flow.
- [ ] - Separate login method to an external function.
- [ ] - Add external cookie support.
- [ ] - await Promise.all([tab1, tab2]).
- [ ] - Unittests.