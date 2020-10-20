const themeConfig = require("./config/theme/");

module.exports = {
  base: "/blog/",
  head: [
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,user-scaleble=0,initial-scale=1.0,maximum-scale=1.0"
      }
    ]
  ],
  title: "Asher's Blog",
  description: "Just write my notes!",
  theme: "reco",
  themeConfig,
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-180951962-1"
      }
    ]
  ]
};
