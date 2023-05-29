const importmap = {
  imports: {
    "@browser-modules/browser.template":
      "./node_modules/@browser-modules/browser.template/lib/Calculator.js",
  },
};

const injectImportmap = (importmap) => {
  const element = document.createElement("script");
  element.type = "importmap";
  element.textContent = JSON.stringify(importmap);
  document.head.appendChild(element);
};

injectImportmap(importmap);
