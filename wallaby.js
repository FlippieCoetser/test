module.exports = function (wallaby) {
  return {
    files: [
      "JSONLoader.js",
      "test.json",
      "importmap.js",
      "src/**/*.ts",
      "node_modules/@browser-modules/browser.template/lib/*.js",
    ],
    tests: ["test/*.ts"],
    trace: true,
    compilers: {
      "**/*.ts": wallaby.compilers.typeScript({
        module: "es2020",
        target: "es2020",
        sourceMap: true,
        inlineSources: true,
      }),
    },
  };
};
