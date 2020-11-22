var app = getApp<IAppOption>()

Page({
  onLoad(){
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              app.globalData.userInfo = res.userInfo              
              if (app.userInfoReadyCallback) {
                app.userInfoReadyCallback(res)
              }
            },
          })
        }else{
        }
      },
    })
  },
  onShow(){
    
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

