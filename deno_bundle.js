import * as esbuild from "npm:esbuild@0.20.2";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader";

const result = await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: ["./cli.js"],
  outfile: "./dist/bytes.esm.js",
  bundle: true,
  format: "esm",
});

esbuild.stop();
