"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
var LoginService_1 = require("../login/LoginService");
var app = getApp();
Page({
    onLoad: function () {
        util_1.Login(app)
            .then(function (res) {
            var loginToken = res.data;
            if (app.globalData.userInfo) {
                LoginService_1.loginService.UpdateOrAddUserInfo(loginToken, app.globalData.userInfo);
                wx.switchTab({ url: app.globalData.mainPage });
            }
            else {
                wx.navigateTo({ url: app.globalData.loginPage });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlbGNvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBeUM7QUFDekMsc0RBQXFEO0FBRXJELElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFDO0FBRS9CLElBQUksQ0FBQztJQUNILE1BQU0sRUFBTjtRQUNJLFlBQUssQ0FBQyxHQUFHLENBQUM7YUFDUCxJQUFJLENBQUMsVUFBQyxHQUFPO1lBQ1osSUFBSSxVQUFVLEdBQVUsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNqQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFO2dCQUMzQiwyQkFBWSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0RSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQzthQUM3QztpQkFBSztnQkFDSixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQzthQUMvQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2luIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxcIjtcclxuaW1wb3J0IHsgbG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4uL2xvZ2luL0xvZ2luU2VydmljZVwiO1xyXG5cclxudmFyIGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpO1xyXG5cclxuUGFnZSh7XHJcbiAgb25Mb2FkKCkgeyAgICBcclxuICAgICAgTG9naW4oYXBwKVxyXG4gICAgICAgIC50aGVuKChyZXM6YW55KSA9PiB7XHJcbiAgICAgICAgICBsZXQgbG9naW5Ub2tlbjpzdHJpbmcgPSByZXMuZGF0YTtcclxuICAgICAgICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICAgICAgICBsb2dpblNlcnZpY2UuVXBkYXRlT3JBZGRVc2VySW5mbyhsb2dpblRva2VuLCBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyk7XHJcbiAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7dXJsOmFwcC5nbG9iYWxEYXRhLm1haW5QYWdlfSk7XHJcbiAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDphcHAuZ2xvYmFsRGF0YS5sb2dpblBhZ2V9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcbn0pIl19