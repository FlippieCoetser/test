module.exports = function (wallaby) {
  return {
    files: [
      "./utilities/inject.js",
      "./importmap/importmap.js",
      "./node_modules/@browser-modules/browser.template/lib/*.js",
      "./src/**/*.ts",
    ],
    tests: ["./test/*.ts"],
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
