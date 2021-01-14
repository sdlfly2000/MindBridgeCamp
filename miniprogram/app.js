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
    onLaunch: function () {
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        util_1.GetUserInformation(this);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EscUNBQWlEO0FBRWpELEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsU0FBUyxFQUFFLG9CQUFvQjtRQUMvQixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFFBQVEsRUFBRSxTQUFTO1FBRW5CLFdBQVcsRUFBRSxpQ0FBaUM7UUFDOUMsVUFBVSxFQUFFLGlDQUFpQztLQUM5QztJQUNELFFBQVE7UUFFTixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQy9CLHlCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcclxuaW1wb3J0IHsgR2V0VXNlckluZm9ybWF0aW9uIH0gZnJvbSBcIi4vdXRpbHMvdXRpbFwiXHJcblxyXG5BcHA8SUFwcE9wdGlvbj4oe1xyXG4gIGdsb2JhbERhdGE6IHtcclxuICAgIG1haW5QYWdlOiBcIi9wYWdlcy9tYWluL21haW5cIixcclxuICAgIGxvZ2luUGFnZTogXCIvcGFnZXMvbG9naW4vbG9naW5cIixcclxuICAgIGFwcE5hbWU6IFwiTWluZEJyaWRnZUNhbXBcIixcclxuICAgIHVzZXJJbmZvOiB1bmRlZmluZWQsXHJcbiAgICAvLyBiYXNlVXJsQXV0aDogXCJodHRwczovL3d3dy5pZGVhLWFjdGl2YXRvci5jb206NzAwMi9hcGkvXCIsXHJcbiAgICBiYXNlVXJsQXV0aDogXCJodHRwOi8vMTkyLjE2OC4zMS4yNTA6ODAwMi9hcGkvXCIsXHJcbiAgICBiYXNlVXJsQXBwOiBcImh0dHA6Ly8xOTIuMTY4LjMxLjI1MDo4MDAzL2FwaS9cIlxyXG4gIH0sXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcclxuICAgIGNvbnN0IGxvZ3MgPSB3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdXHJcbiAgICBsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSlcclxuICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncylcclxuICAgIEdldFVzZXJJbmZvcm1hdGlvbih0aGlzKTtcclxuICB9XHJcbn0pIl19