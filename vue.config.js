module.exports = {
  pages: {
    popup: {
      template: "public/browser-extension.html",
      entry: "./src/popup/main.js",
      title: "Popup",
    },
    standalone: {
      template: "public/index.html",
      entry: "./src/standalone/main.js",
      title: "Flowcas",
    },
  },
  pluginOptions: {
    browserExtension: {
      components: {
        background: true,
        popup: true,
        standalone: true,
      },
      componentOptions: {
        background: {
          entry: "src/background.js",
        },
      },
    },
  },
};
