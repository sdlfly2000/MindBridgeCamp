"use strict";
App({
    globalData: {
        mainPage: "/pages/main/main",
        loginPage: "/pages/login/login",
        appName: "MindBridgeCamp",
        baseUrlAuth: "http://192.168.31.250:8002/api/",
        baseUrlApp: "http://192.168.31.250:8003/api/"
    },
    onLaunch: function () {
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUU7UUFDVixRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFNBQVMsRUFBRSxvQkFBb0I7UUFDL0IsT0FBTyxFQUFFLGdCQUFnQjtRQUV6QixXQUFXLEVBQUUsaUNBQWlDO1FBQzlDLFVBQVUsRUFBRSxpQ0FBaUM7S0FDOUM7SUFDRCxRQUFRO1FBRU4sSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUN4QixFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUVqQyxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLnRzXHJcbi8vIGltcG9ydCB7IExvZ2luIH0gZnJvbSBcIi4vdXRpbHMvdXRpbFwiXHJcblxyXG5BcHA8SUFwcE9wdGlvbj4oe1xyXG4gIGdsb2JhbERhdGE6IHtcclxuICAgIG1haW5QYWdlOiBcIi9wYWdlcy9tYWluL21haW5cIixcclxuICAgIGxvZ2luUGFnZTogXCIvcGFnZXMvbG9naW4vbG9naW5cIixcclxuICAgIGFwcE5hbWU6IFwiTWluZEJyaWRnZUNhbXBcIixcclxuICAgIC8vIGJhc2VVcmxBdXRoOiBcImh0dHBzOi8vd3d3LmlkZWEtYWN0aXZhdG9yLmNvbTo3MDAyL2FwaS9cIixcclxuICAgIGJhc2VVcmxBdXRoOiBcImh0dHA6Ly8xOTIuMTY4LjMxLjI1MDo4MDAyL2FwaS9cIixcclxuICAgIGJhc2VVcmxBcHA6IFwiaHR0cDovLzE5Mi4xNjguMzEuMjUwOjgwMDMvYXBpL1wiXHJcbiAgfSxcclxuICBvbkxhdW5jaCgpIHtcclxuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xyXG4gICAgY29uc3QgbG9ncyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cclxuICAgIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxyXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoJ2xvZ3MnLCBsb2dzKVxyXG4gICAgLy8gTG9naW4odGhpcyk7XHJcbiAgfVxyXG59KSJdfQ==