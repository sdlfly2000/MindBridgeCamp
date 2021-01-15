"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginService_1 = require("./LoginService");
var util_1 = require("../../utils/util");
var app = getApp();
Page({
    data: {
        notificationAuthUerInfo: "程序申请获取本人公开信息， 如昵称、头像、地区以及性别。",
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onLoad: function () {
        util_1.Login(app);
        if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                app.globalData.userInfo = res.userInfo;
                wx.switchTab({ url: app.globalData.mainPage });
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    wx.switchTab({ url: app.globalData.mainPage });
                },
            });
        }
    },
    getUserInfo: function (e) {
        var loginToken = wx.getStorageSync("LoginToken");
        if (e.detail.userInfo != undefined) {
            app.globalData.userInfo = e.detail.userInfo;
            LoginService_1.loginService.UpdateOrAddUserInfo(loginToken, e.detail.userInfo);
            wx.switchTab({ url: app.globalData.mainPage });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtDQUE2QztBQUM3Qyx5Q0FBeUM7QUFFekMsSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUM7QUFFL0IsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osdUJBQXVCLEVBQUUsOEJBQThCO1FBQ3ZELE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO0tBQ3BEO0lBQ0QsTUFBTTtRQUNKLFlBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDckIsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUEsR0FBRztnQkFDN0IsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtnQkFDdEMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUE7WUFDN0MsQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUNMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQTtnQkFDN0MsQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUNELFdBQVcsRUFBWCxVQUFZLENBQU07UUFDaEIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRCxJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLFNBQVMsRUFBQztZQUNoQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtZQUMzQywyQkFBWSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFBO1NBQzVDO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxvZ2luLnRzXHJcbmltcG9ydCB7IGxvZ2luU2VydmljZSB9IGZyb20gXCIuL0xvZ2luU2VydmljZVwiXHJcbmltcG9ydCB7IExvZ2luIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxcIjtcclxuXHJcbnZhciBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG5vdGlmaWNhdGlvbkF1dGhVZXJJbmZvOiBcIueoi+W6j+eUs+ivt+iOt+WPluacrOS6uuWFrOW8gOS/oeaBr++8jCDlpoLmmLXnp7DjgIHlpLTlg4/jgIHlnLDljLrku6Xlj4rmgKfliKvjgIJcIixcclxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKVxyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgTG9naW4oYXBwKTtcclxuICAgIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xyXG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gcmVzID0+IHtcclxuICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgIHd4LnN3aXRjaFRhYih7dXJsOmFwcC5nbG9iYWxEYXRhLm1haW5QYWdlfSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgICAgd3guc3dpdGNoVGFiKHt1cmw6YXBwLmdsb2JhbERhdGEubWFpblBhZ2V9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcclxuICAgIGxldCBsb2dpblRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJMb2dpblRva2VuXCIpO1xyXG4gICAgaWYoZS5kZXRhaWwudXNlckluZm8gIT0gdW5kZWZpbmVkKXtcclxuICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xyXG4gICAgICBsb2dpblNlcnZpY2UuVXBkYXRlT3JBZGRVc2VySW5mbyhsb2dpblRva2VuLCBlLmRldGFpbC51c2VySW5mbyk7XHJcbiAgICAgIHd4LnN3aXRjaFRhYih7dXJsOmFwcC5nbG9iYWxEYXRhLm1haW5QYWdlfSlcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdfQ==