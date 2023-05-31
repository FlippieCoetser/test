let importmap = {
  imports: {
    "@browser-modules/browser.template":
      "../node_modules/@browser-modules/browser.template/lib/Calculator.js",
  },
};

window.inject(importmap);
