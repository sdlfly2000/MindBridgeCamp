"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./utils/util");
App({
    globalData: {
        mainPage: "/components/calc/calc",
        loginPage: "/pages/login/login",
        appName: "RealEstateCalc",
        baseUrlAuth: "http://192.168.31.250:8002/api/",
        baseUrlApp: ""
    },
    onLaunch: function () {
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        util_1.Login(this);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EscUNBQW9DO0FBRXBDLEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsU0FBUyxFQUFFLG9CQUFvQjtRQUMvQixPQUFPLEVBQUUsZ0JBQWdCO1FBRXpCLFdBQVcsRUFBRSxpQ0FBaUM7UUFDOUMsVUFBVSxFQUFFLEVBQUU7S0FDZjtJQUNELFFBQVE7UUFFTixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQy9CLFlBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNiLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcbmltcG9ydCB7IExvZ2luIH0gZnJvbSBcIi4vdXRpbHMvdXRpbFwiXG5cbkFwcDxJQXBwT3B0aW9uPih7XG4gIGdsb2JhbERhdGE6IHtcbiAgICBtYWluUGFnZTogXCIvY29tcG9uZW50cy9jYWxjL2NhbGNcIixcbiAgICBsb2dpblBhZ2U6IFwiL3BhZ2VzL2xvZ2luL2xvZ2luXCIsXG4gICAgYXBwTmFtZTogXCJSZWFsRXN0YXRlQ2FsY1wiLFxuICAgIC8vIGJhc2VVcmxBdXRoOiBcImh0dHBzOi8vd3d3LmlkZWEtYWN0aXZhdG9yLmNvbTo3MDAyL2FwaS9cIixcbiAgICBiYXNlVXJsQXV0aDogXCJodHRwOi8vMTkyLjE2OC4zMS4yNTA6ODAwMi9hcGkvXCIsXG4gICAgYmFzZVVybEFwcDogXCJcIlxuICB9LFxuICBvbkxhdW5jaCgpIHtcbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcbiAgICBjb25zdCBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxuICAgIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncylcbiAgICBMb2dpbih0aGlzKVxuICB9XG59KSJdfQ==