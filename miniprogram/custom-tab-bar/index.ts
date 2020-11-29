Component({
  data:{
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list:[
      {
        "pagePath": "/pages/main/main",
        "text": "主页"
      },
      {
        "pagePath": "/pages/hall/hall",
        "text": "自习大厅"
      },
      {
        "pagePath": "/pages/pair/pair",
        "text": "匹配中心"
      },
      {
        "pagePath": "/pages/personal/personal",
        "text": "我的"
      }
    ]
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        "url": url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})