import zlib from "node:zlib";
import fs from "node:fs";

const source = fs.readFileSync("zlib-compress.mjs.txt");
const result = zlib.unzipSync(source);

console.info(result.toString());