"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./utils/util");
App({
    globalData: {
        mainPage: "/pages/main/main",
        loginPage: "/pages/login/login",
        appName: "MindBridgeCamp",
        userInfo: undefined,
        baseUrlAuth: "http://192.168.31.250:8002/api/",
        baseUrlApp: "http://192.168.31.250:8003/api/"
    },
    userInfoReadyCallback: function (res) {
        if (res.userInfo != undefined) {
            this.globalData.userInfo = res.userInfo;
        }
    },
    onLaunch: function () {
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        util_1.GetLocalUserInformation(this);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EscUNBQXNEO0FBRXRELEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsU0FBUyxFQUFFLG9CQUFvQjtRQUMvQixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFFBQVEsRUFBRSxTQUFTO1FBRW5CLFdBQVcsRUFBRSxpQ0FBaUM7UUFDOUMsVUFBVSxFQUFFLGlDQUFpQztLQUM5QztJQUNELHFCQUFxQixFQUFFLFVBQVMsR0FBRztRQUNqQyxJQUFHLEdBQUcsQ0FBQyxRQUFRLElBQUksU0FBUyxFQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBQ0QsUUFBUTtRQUVOLElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDeEIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDL0IsOEJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC50c1xyXG5pbXBvcnQgeyBHZXRMb2NhbFVzZXJJbmZvcm1hdGlvbiB9IGZyb20gXCIuL3V0aWxzL3V0aWxcIlxyXG5cclxuQXBwPElBcHBPcHRpb24+KHtcclxuICBnbG9iYWxEYXRhOiB7XHJcbiAgICBtYWluUGFnZTogXCIvcGFnZXMvbWFpbi9tYWluXCIsXHJcbiAgICBsb2dpblBhZ2U6IFwiL3BhZ2VzL2xvZ2luL2xvZ2luXCIsXHJcbiAgICBhcHBOYW1lOiBcIk1pbmRCcmlkZ2VDYW1wXCIsXHJcbiAgICB1c2VySW5mbzogdW5kZWZpbmVkLFxyXG4gICAgLy8gYmFzZVVybEF1dGg6IFwiaHR0cHM6Ly93d3cuaWRlYS1hY3RpdmF0b3IuY29tOjcwMDIvYXBpL1wiLFxyXG4gICAgYmFzZVVybEF1dGg6IFwiaHR0cDovLzE5Mi4xNjguMzEuMjUwOjgwMDIvYXBpL1wiLFxyXG4gICAgYmFzZVVybEFwcDogXCJodHRwOi8vMTkyLjE2OC4zMS4yNTA6ODAwMy9hcGkvXCJcclxuICB9LFxyXG4gIHVzZXJJbmZvUmVhZHlDYWxsYmFjazogZnVuY3Rpb24ocmVzKXtcclxuICAgIGlmKHJlcy51c2VySW5mbyAhPSB1bmRlZmluZWQpe1xyXG4gICAgICB0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm87XHJcbiAgICB9XHJcbiAgfSxcclxuICBvbkxhdW5jaCgpIHtcclxuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xyXG4gICAgY29uc3QgbG9ncyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cclxuICAgIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxyXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoJ2xvZ3MnLCBsb2dzKVxyXG4gICAgR2V0TG9jYWxVc2VySW5mb3JtYXRpb24odGhpcyk7XHJcbiAgfVxyXG59KSJdfQ==