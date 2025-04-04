const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/Restaurant-Management-App/",

  pages: {
    index: {
      entry: "src/main.js",
      title: "Restaurant-Management-App",
    },
  },
});
