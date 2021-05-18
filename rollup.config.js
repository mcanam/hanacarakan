import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default {
  input: "src/js/index.js",
  output: [
    {
      file: "script.js",
      format: "iife",
    },
  ],
  plugins: [
    resolve(),
		commonjs(),
    postcss({
      extract: "style.css",
      plugins: [autoprefixer(), cssnano()],
    }),
    babel({ 
      babelHelpers: "bundled",
      presets: ["@babel/preset-env"]
    }),
    terser()
  ],
};
