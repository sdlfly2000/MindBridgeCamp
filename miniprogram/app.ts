// app.ts
import { GetLocalUserInformation } from "./utils/util"

App<IAppOption>({
  globalData: {
    mainPage: "/pages/main/main",
    loginPage: "/pages/login/login",
    appName: "MindBridgeCamp",
    userInfo: undefined,
    // baseUrlAuth: "https://www.idea-activator.com:7002/api/",
    baseUrlAuth: "http://192.168.31.250:8002/api/",
    baseUrlApp: "http://192.168.31.250:8003/api/"
  },
  userInfoReadyCallback: function(res){
    if(res.userInfo != undefined){
      this.globalData.userInfo = res.userInfo;
    }
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    GetLocalUserInformation(this);
  }
})