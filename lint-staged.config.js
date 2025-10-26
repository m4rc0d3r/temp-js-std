import path from "node:path";

const PRETTIER_COMMAND = "prettier --write";
const PACKAGE_JSON = "package.json";

/** @type {import("lint-staged").Configuration} */
const config = {
  "*.{json,md,yaml,yml}": (files) => {
    const filteredFiles = files.filter((file) => path.basename(file) !== PACKAGE_JSON);
    return filteredFiles.length > 0 ? runWithFiles(PRETTIER_COMMAND, filteredFiles) : [];
  },
  "*.{js,cjs,mjs,ts,mts,cts}": (files) => {
    return [
      ...["eslint --fix", PRETTIER_COMMAND].map((command) => runWithFiles(command, files)),
      "tsc --noEmit",
    ];
  },
  [PACKAGE_JSON]: () => ["syncpack format"],
};

/**
 * @param {string} command
 * @param {string[]} files
 */
function runWithFiles(command, files) {
  return [command, ...files].join(" ");
}

export default config;
