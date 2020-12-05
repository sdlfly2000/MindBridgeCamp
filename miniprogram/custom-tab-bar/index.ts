Component({
  data:{
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list:[
      {
        "pagePath": "/pages/main/main",
        "icon": "home-o",
        "text": "主页"
      },
      {
        "pagePath": "/pages/hall/hall",
        "icon": "notes-o",
        "text": "自习大厅"
      },
      {
        "pagePath": "/pages/pair/pair",
        "icon": "smile-comment-o",
        "text": "匹配中心"
      },
      {
        "pagePath": "/pages/personal/personal",
        "icon": "setting-o",
        "text": "我的"
      }
    ]
  },
  methods: {
    switchTab(e) {
      var pageIndex = e.detail;
      var page = this.data.list[pageIndex];
      wx.switchTab({
        "url": page.pagePath
      })
      this.setData({
        selected: pageIndex
      })
    }
  }
})