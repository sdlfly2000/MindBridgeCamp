"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./utils/util");
App({
    globalData: {
        mainPage: "/components/calc/calc",
        loginPage: "/pages/login/login",
        appName: "RealEstateCalc",
        baseUrlAuth: "http://192.168.31.250:8002/api/",
        baseUrlApp: "http://192.168.31.250:8003/api/"
    },
    onLaunch: function () {
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        var loginToken = wx.getStorageSync("LoginToken");
        if (loginToken == undefined || loginToken == "") {
            util_1.Login(this);
        }
        else {
            console.log("Login Token: " + loginToken);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EscUNBQW9DO0FBRXBDLEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsU0FBUyxFQUFFLG9CQUFvQjtRQUMvQixPQUFPLEVBQUUsZ0JBQWdCO1FBRXpCLFdBQVcsRUFBRSxpQ0FBaUM7UUFDOUMsVUFBVSxFQUFFLGlDQUFpQztLQUM5QztJQUNELFFBQVE7UUFFTixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQy9CLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakQsSUFBRyxVQUFVLElBQUksU0FBUyxJQUFJLFVBQVUsSUFBSSxFQUFFLEVBQUM7WUFDN0MsWUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2I7YUFBSTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC50c1xuaW1wb3J0IHsgTG9naW4gfSBmcm9tIFwiLi91dGlscy91dGlsXCJcblxuQXBwPElBcHBPcHRpb24+KHtcbiAgZ2xvYmFsRGF0YToge1xuICAgIG1haW5QYWdlOiBcIi9jb21wb25lbnRzL2NhbGMvY2FsY1wiLFxuICAgIGxvZ2luUGFnZTogXCIvcGFnZXMvbG9naW4vbG9naW5cIixcbiAgICBhcHBOYW1lOiBcIlJlYWxFc3RhdGVDYWxjXCIsXG4gICAgLy8gYmFzZVVybEF1dGg6IFwiaHR0cHM6Ly93d3cuaWRlYS1hY3RpdmF0b3IuY29tOjcwMDIvYXBpL1wiLFxuICAgIGJhc2VVcmxBdXRoOiBcImh0dHA6Ly8xOTIuMTY4LjMxLjI1MDo4MDAyL2FwaS9cIixcbiAgICBiYXNlVXJsQXBwOiBcImh0dHA6Ly8xOTIuMTY4LjMxLjI1MDo4MDAzL2FwaS9cIlxuICB9LFxuICBvbkxhdW5jaCgpIHtcbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcbiAgICBjb25zdCBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxuICAgIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncylcbiAgICBsZXQgbG9naW5Ub2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKFwiTG9naW5Ub2tlblwiKTtcbiAgICBpZihsb2dpblRva2VuID09IHVuZGVmaW5lZCB8fCBsb2dpblRva2VuID09IFwiXCIpe1xuICAgICAgTG9naW4odGhpcyk7XG4gICAgfWVsc2V7XG4gICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIFRva2VuOiBcIiArIGxvZ2luVG9rZW4pO1xuICAgIH1cbiAgfVxufSkiXX0=