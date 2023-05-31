const path = require("path");

module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    proxies: {
      "/node_modules/": "/base/node_modules/",
    },
    files: [
      { pattern: "./utilities/inject.js" },
      { pattern: "./importmap/importmap.js" },
      {
        pattern: "./node_modules/@browser-modules/browser.template/lib/*.js",
        type: "module",
      },
      { pattern: "./src/**/*.js", type: "module" },
      { pattern: "./test/**/*.js", type: "module" },
    ],
    preprocessors: {
      "src/**/!(*.test).js": ["karma-coverage-istanbul-instrumenter"],
    },
    reporters: ["spec", "coverage-istanbul"],
    coverageIstanbulInstrumenter: {
      esModules: true,
    },
    coverageIstanbulReporter: {
      reports: ["html", "text", "lcovonly"],
      dir: path.join(__dirname, "coverage"),
      skipFilesWithNoCoverage: true,
    },
    browsers: ["ChromeHeadless"],
    singleRun: true,
    logLevel: config.LOG_DISABLE,
  });
};
