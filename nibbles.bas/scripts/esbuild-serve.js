"use strict";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import * as esbuild from "esbuild";
import path from "path";

let ctx = await esbuild.context({
    entryPoints: [path.join(__dirname, "..", "index.js")],
    bundle: true,
    outfile: path.join(__dirname, "..", "static", "_bundle.js"),
    treeShaking: true,
    sourcemap: true,
});

let { host, port } = await ctx.serve({
    servedir: path.join(__dirname, "..", "static"),
    port: 8889,
});

console.log(`Listening on ${host}:${port}`);