Component({
  data: {
    selected: 0,
    current: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/main/main",
      iconPath: "/image/icon_component.png",
      selectedIconPath: "/image/icon_component_HL.png",
      text: "组件"
    }, {
      pagePath: "/components/calc/calc",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "接口"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      console.info("Before: " + this.data.selected)
      console.info("Before: " + this.data.current)
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        current: data.index,
        selected: data.index
      })
    }
  }
})