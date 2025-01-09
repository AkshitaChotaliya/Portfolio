# battery [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/battery/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/battery)

Get battery level and charging status.

[![NPM Badge](https://nodei.co/npm/battery.png)](https://npmjs.com/package/battery)

## Install

```sh
npm install battery
```

## Usage

```js
const battery = require("battery");

(async () => {
	const { level, charging } = await battery();

	console.log(level);
	//=> 0.8

	console.log(charging);
	//=> true
})();
```

## API

### battery()

## Related

- [battery-cli](https://github.com/Richienb/battery-cli) CLI for this module.
