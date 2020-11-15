// app.ts
// import { Login } from "./utils/util"

App<IAppOption>({
  globalData: {
    mainPage: "/components/calc/calc",
    loginPage: "/pages/login/login",
    appName: "RealEstateCalc",
    baseUrlAuth: "https://www.idea-activator.com:7002/api/",
    baseUrlApp: ""
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // Login(this)
  }
})