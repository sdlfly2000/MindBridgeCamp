// login.ts
import { loginService } from "./LoginService"

var app = getApp<IAppOption>();

Page({
  data: {
    notificationAuthUerInfo: "程序申请获取本人公开信息， 如昵称、头像、地区以及性别。",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
      wx.switchTab({url:app.globalData.mainPage})
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
        wx.switchTab({url:app.globalData.mainPage})
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          })
          wx.switchTab({url:app.globalData.mainPage})
        },
      })
    }
  },
  getUserInfo(e: any) {
    if(e.detail.userInfo != undefined){
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true,
      })
      loginService.UpdateOrAddUserInfo(e.detail.userInfo);
      wx.switchTab({url:app.globalData.mainPage})
    }
  }
})
