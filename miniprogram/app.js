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
        util_1.GetLocalUserInformation(this);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EscUNBQXNEO0FBRXRELEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsU0FBUyxFQUFFLG9CQUFvQjtRQUMvQixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFFBQVEsRUFBRSxTQUFTO1FBR25CLFdBQVcsRUFBRSxpQ0FBaUM7UUFDOUMsVUFBVSxFQUFFLGlDQUFpQztLQUM5QztJQUNELFFBQVE7UUFFTixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQy9CLDhCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcclxuaW1wb3J0IHsgR2V0TG9jYWxVc2VySW5mb3JtYXRpb24gfSBmcm9tIFwiLi91dGlscy91dGlsXCJcclxuXHJcbkFwcDxJQXBwT3B0aW9uPih7XHJcbiAgZ2xvYmFsRGF0YToge1xyXG4gICAgbWFpblBhZ2U6IFwiL3BhZ2VzL21haW4vbWFpblwiLFxyXG4gICAgbG9naW5QYWdlOiBcIi9wYWdlcy9sb2dpbi9sb2dpblwiLFxyXG4gICAgYXBwTmFtZTogXCJNaW5kQnJpZGdlQ2FtcFwiLFxyXG4gICAgdXNlckluZm86IHVuZGVmaW5lZCxcclxuICAgIC8vIGJhc2VVcmxBdXRoOiBcImh0dHBzOi8vd3d3LmlkZWEtYWN0aXZhdG9yLmNvbTo3MDAyL2FwaS9cIixcclxuICAgIC8vIGJhc2VVcmxBcHA6IFwiaHR0cHM6Ly93d3cuaWRlYS1hY3RpdmF0b3IuY29tOjcwMDMvYXBpL1wiLFxyXG4gICAgYmFzZVVybEF1dGg6IFwiaHR0cDovLzE5Mi4xNjguMzEuMjUwOjgwMDIvYXBpL1wiLFxyXG4gICAgYmFzZVVybEFwcDogXCJodHRwOi8vMTkyLjE2OC4zMS4yNTA6ODAwMy9hcGkvXCJcclxuICB9LFxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgLy8g5bGV56S65pys5Zyw5a2Y5YKo6IO95YqbXHJcbiAgICBjb25zdCBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxyXG4gICAgbG9ncy51bnNoaWZ0KERhdGUubm93KCkpXHJcbiAgICB3eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpXHJcbiAgICBHZXRMb2NhbFVzZXJJbmZvcm1hdGlvbih0aGlzKTtcclxuICB9XHJcbn0pIl19