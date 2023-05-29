import { Calculator } from "../lib/index.js";
console.log(`Import module: Calculator`);
console.log(`Use module: 1 + 2 = ${Calculator.Add(1, 2)}`);

import { JSONLoader } from "../JSONLoader.js";
let json = await JSONLoader.load("../test.json");
console.log(json);
