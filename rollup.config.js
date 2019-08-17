import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "commonjs" },
      { file: pkg.module, format: "es" }
    ],
    plugins: [typescript()]
  }
];