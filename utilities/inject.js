var inject = (importmap) => {
  const script = document.createElement("script");
  script.type = "importmap";
  script.textContent = JSON.stringify(importmap);
  document.head.appendChild(script);
};
