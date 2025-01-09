declare namespace battery {
	export interface ReturnType {
		/** The battery level as a float from 0 to 1. */
		level: number

		/** Whether the battery is charging. */
		charging: boolean
	}
}

/**
Get battery level and charging status.
@example
```
const battery = require("battery");

(async () => {
	const { level, charging } = await battery();

	console.log(level);
	//=> 0.8

	console.log(charging);
	//=> true
})();
```
*/
declare function battery(): ReturnType

export = battery
