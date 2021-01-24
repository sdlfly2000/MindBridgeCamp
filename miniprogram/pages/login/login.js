"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginService_1 = require("./LoginService");
var app = getApp();
Page({
    data: {
        notificationAuthUerInfo: "程序申请获取本人公开信息， 如昵称、头像、地区以及性别。",
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        hasUserInfo: app.globalData.userInfo != undefined
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtDQUE2QztBQUM3QyxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQztBQUUvQixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSix1QkFBdUIsRUFBRSw4QkFBOEI7UUFDdkQsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsV0FBVyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLFNBQVM7S0FDbEQ7SUFDRCxXQUFXLEVBQVgsVUFBWSxDQUFNO1FBQ2hCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakQsSUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxTQUFTLEVBQUM7WUFDaEMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7WUFDM0MsMkJBQVksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQTtTQUM1QztJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2dpbi50c1xyXG5pbXBvcnQgeyBsb2dpblNlcnZpY2UgfSBmcm9tIFwiLi9Mb2dpblNlcnZpY2VcIlxyXG52YXIgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KCk7XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBub3RpZmljYXRpb25BdXRoVWVySW5mbzogXCLnqIvluo/nlLPor7fojrflj5bmnKzkurrlhazlvIDkv6Hmga/vvIwg5aaC5pi156ew44CB5aS05YOP44CB5Zyw5Yy65Lul5Y+K5oCn5Yir44CCXCIsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgICBoYXNVc2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8gIT0gdW5kZWZpbmVkICAgIFxyXG4gIH0sXHJcbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XHJcbiAgICBsZXQgbG9naW5Ub2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKFwiTG9naW5Ub2tlblwiKTtcclxuICAgIGlmKGUuZGV0YWlsLnVzZXJJbmZvICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cclxuICAgICAgbG9naW5TZXJ2aWNlLlVwZGF0ZU9yQWRkVXNlckluZm8obG9naW5Ub2tlbiwgZS5kZXRhaWwudXNlckluZm8pO1xyXG4gICAgICB3eC5zd2l0Y2hUYWIoe3VybDphcHAuZ2xvYmFsRGF0YS5tYWluUGFnZX0pXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXX0=