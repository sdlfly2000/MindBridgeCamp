"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginService_1 = require("./LoginService");
var app = getApp();
Page({
    data: {
        notificationAuthUerInfo: "程序申请获取本人公开信息， 如昵称、头像、地区以及性别。",
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onLoad: function () {
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
        if (e.detail.userInfo != undefined) {
            app.globalData.userInfo = e.detail.userInfo;
            LoginService_1.loginService.UpdateOrAddUserInfo(e.detail.userInfo);
            wx.switchTab({ url: app.globalData.mainPage });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtDQUE2QztBQUU3QyxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQztBQUUvQixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSix1QkFBdUIsRUFBRSw4QkFBOEI7UUFDdkQsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7S0FDcEQ7SUFDRCxNQUFNO1FBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNwQixHQUFHLENBQUMscUJBQXFCLEdBQUcsVUFBQSxHQUFHO2dCQUM3QixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO2dCQUN0QyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQTtZQUM3QyxDQUFDLENBQUE7U0FDRjthQUFNO1lBQ0wsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHO29CQUNWLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7b0JBQ3RDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFBO2dCQUM3QyxDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsV0FBVyxFQUFYLFVBQVksQ0FBTTtRQUNoQixJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLFNBQVMsRUFBQztZQUNoQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtZQUMzQywyQkFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUE7U0FDNUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9naW4udHNcclxuaW1wb3J0IHsgbG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4vTG9naW5TZXJ2aWNlXCJcclxuXHJcbnZhciBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcclxuXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIG5vdGlmaWNhdGlvbkF1dGhVZXJJbmZvOiBcIueoi+W6j+eUs+ivt+iOt+WPluacrOS6uuWFrOW8gOS/oeaBr++8jCDlpoLmmLXnp7DjgIHlpLTlg4/jgIHlnLDljLrku6Xlj4rmgKfliKvjgIJcIixcclxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKVxyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gICBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcclxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IHJlcyA9PiB7XHJcbiAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICB3eC5zd2l0Y2hUYWIoe3VybDphcHAuZ2xvYmFsRGF0YS5tYWluUGFnZX0pXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cclxuICAgICAgICAgIHd4LnN3aXRjaFRhYih7dXJsOmFwcC5nbG9iYWxEYXRhLm1haW5QYWdlfSlcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XHJcbiAgICBpZihlLmRldGFpbC51c2VySW5mbyAhPSB1bmRlZmluZWQpe1xyXG4gICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXHJcbiAgICAgIGxvZ2luU2VydmljZS5VcGRhdGVPckFkZFVzZXJJbmZvKGUuZGV0YWlsLnVzZXJJbmZvKTtcclxuICAgICAgd3guc3dpdGNoVGFiKHt1cmw6YXBwLmdsb2JhbERhdGEubWFpblBhZ2V9KVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl19