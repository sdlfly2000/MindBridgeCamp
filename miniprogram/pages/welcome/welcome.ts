// import { welcomeService } from "./welcomeService"

var app = getApp<IAppOption>();

Page({
  onLoad() {
    if (app.globalData.userInfo) {
      wx.switchTab({url:app.globalData.mainPage})
    } else {
      wx.navigateTo({url:app.globalData.loginPage})
    }
  }
})