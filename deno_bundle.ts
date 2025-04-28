import * as esbuild from "npm:esbuild";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader";

const result = await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: ["./lib/nbb_main.js"],
  outfile: "./dist/bytes.esm.js",
  bundle: true,
  format: "esm",
});

esbuild.stop();
