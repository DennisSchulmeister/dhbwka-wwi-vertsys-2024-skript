"use strict";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import * as esbuild from "esbuild";
import path from "path";

esbuild.build({
    entryPoints: [path.join(__dirname, "..", "index.js")],
    bundle: true,
    minify: true,
    outfile: path.join(__dirname, "..", "static", "_bundle.js"),
    treeShaking: true,
    sourcemap: true,
});
