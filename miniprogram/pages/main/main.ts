var app = getApp<IAppOption>()

Page({
  onLoad(){
    
  },
  onShow(){
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  }
})

