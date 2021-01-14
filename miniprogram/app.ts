// app.ts
// import { Login } from "./utils/util"

App<IAppOption>({
  globalData: {
    mainPage: "/components/calc/calc",
    loginPage: "/pages/login/login",
    appName: "MindBridgeCamp",
    // baseUrlAuth: "https://www.idea-activator.com:7002/api/",
    baseUrlAuth: "http://192.168.31.250:8002/api/",
    baseUrlApp: "http://192.168.31.250:8003/api/"
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // Login(this);
  }
})