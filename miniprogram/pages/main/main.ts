var app = getApp<IAppOption>()

Page({
  data:{
    previousScroll:0
  },
  onShow(){
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  onPageScroll: function(option){
    let currentScroll: number = option.scrollTop;
    if(currentScroll > this.data.previousScroll){
      this.getTabBar().setData({
        isShown: false
      });
    }else{
      this.getTabBar().setData({
        isShown: true
      });
    }
    this.setData({
      previousScroll: currentScroll
    });
  },
  navigateToPersionalPage: function(){
    wx.navigateTo({url:"../persional/persional"});
  },
  navigateToHallPage: function(){
    wx.navigateTo({url:"../hall/hall"});
  },
  navigateToPairPage: function(){
    wx.navigateTo({url:"../pair/pair"});
  }
})

