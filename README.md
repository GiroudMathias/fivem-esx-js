# fivem-esx-js

[![HitCount](http://hits.dwyl.io/GiroudMathias/fivem-esx-js.svg)](http://hits.dwyl.io/GiroudMathias/fivem-esx-js)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/GiroudMathias/fivem-esx-js/issues)

[![https://nodei.co/npm/fivem-esx-js.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/fivem-esx-js.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/fivem-esx-js)

_Javascript/Typescript wrapper for the FiveM ESX Framework natives._

Features based on the [**ESX framework for FiveM**](https://esx-org.github.io/). This module will allow you to fully exploit ESX from your JavaScript/TypeScript developments.
## Features

- Two dependencies [@citizenfx/client](https://www.npmjs.com/package/@citizenfx/client) and [fivem-js](https://www.npmjs.com/package/fivem-js)
- Integration of ESX Class (and functions) client and server side

In other words, whatever the FiveM ESX Lua Framework wrapper can do, this package can as well.

_Note: Not all features are currently available. They will be added as development continues as well as additional language specific features._

## Usage

### Typescript
#### Client side
Create a file "esx.ts" containing:
```typescript
import {ESXClient} from "fivem-esx-js/client/esx_client";

export let ESX: ESXClient;
emit('esx:getSharedObject', (obj) => {
    ESX = obj;
});
```
ESX is now available! example on "test.ts":
```typescript
import {ESX} from "../esx";
ESX.ShowNotification('Hello World !');
```

#### Server side
Create a file "esx.ts" containing:
```typescript
import {ESXServer} from "fivem-esx-js/server/esx_server";

export let ESX: ESXServer;
emit('esx:getSharedObject', (obj) => {
    ESX = obj;
});
```
ESX is now available! example on "test.ts":
```typescript
import {ESX} from "../esx";
let player = ESX.GetPlayerFromId(1);
player.addBank(10000);
```

### Javascript
TODO

### Contributing

You are more than welcome to contribute to this project by submitting a pull request and creating issues.

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/GiroudMathias/fivem-esx-js/issues)
