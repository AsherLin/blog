module.exports = {
  type: "blog",
  author: "Asher Lin",
  authorAvatar: "/images/avatar.png",
  codeTheme: "okaidia",
  startYear: "2020",
  noFoundPageByTencent: false,
  mode: "light",
  modePicker: false,

  nav: [
    {
      text: "時間軸",
      link: "/timeline/",
      icon: "reco-date"
    }
  ],

  blogConfig: {
    category: {
      location: 2,
      text: "分類"
    },
    tag: {
      location: 3,
      text: "標籤"
    }
  },

  locales: {
    "/": {
      recoLocales: {
        homeBlog: {
          article: "文章",
          tag: "標籤",
          category: "分類",
          friendLink: "連結"
        },
        pagation: {
          prev: "上一頁",
          next: "下一頁",
          go: "前往",
          jump: "跳轉至"
        }
      }
    }
  }

  // friendLink: [
  //   {
  //     title: "",
  //     desc: "",
  //     logo: "",
  //     link: ""
  //   }
  // ],
};
