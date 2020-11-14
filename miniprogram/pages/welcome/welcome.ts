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
              wx.redirectTo({url: app.globalData.mainPage})
            },
          })
        }else{
          wx.redirectTo({url: app.globalData.loginPage})
        }
      },
    })
  }
})

