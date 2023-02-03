import { createRequire } from "./deps.ts";

// importing node modules
const require = createRequire(import.meta.url);

const os = require("os");
const path = require("path");

const definePath = path.dirname("/foo/bar/fiz/buz");
console.log(definePath);

// deno run --allow-sys
const homeDirectory = os.homedir();
console.log(homeDirectory);

// deno run --allow-sys
const osRelease = os.release();
console.log(osRelease);
