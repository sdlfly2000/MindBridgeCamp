"use strict";
var app = getApp();
Page({
    onLoad: function () {
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            app.globalData.userInfo = res.userInfo;
                            if (app.userInfoReadyCallback) {
                                app.userInfoReadyCallback(res);
                            }
                        },
                    });
                }
                else {
                }
            },
        });
    },
    onShow: function () {
    },
    navigateToPersionalPage: function () {
        wx.navigateTo({ url: "../persional/persional" });
    },
    navigateToHallPage: function () {
        wx.navigateTo({ url: "../hall/hall" });
    },
    navigateToPairPage: function () {
        wx.navigateTo({ url: "../pair/pair" });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRTlCLElBQUksQ0FBQztJQUNILE1BQU07UUFDSixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFDckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHOzRCQUNWLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7NEJBQ3RDLElBQUksR0FBRyxDQUFDLHFCQUFxQixFQUFFO2dDQUM3QixHQUFHLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUE7NkJBQy9CO3dCQUNILENBQUM7cUJBQ0YsQ0FBQyxDQUFBO2lCQUNIO3FCQUFJO2lCQUNKO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO0lBRU4sQ0FBQztJQUNELHVCQUF1QixFQUFFO1FBQ3ZCLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBQyxHQUFHLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxrQkFBa0IsRUFBRTtRQUNsQixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUMsR0FBRyxFQUFDLGNBQWMsRUFBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELGtCQUFrQixFQUFFO1FBQ2xCLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBQyxHQUFHLEVBQUMsY0FBYyxFQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcblxyXG5QYWdlKHtcclxuICBvbkxvYWQoKXtcclxuICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mbyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uU2hvdygpe1xyXG4gICAgXHJcbiAgfSxcclxuICBuYXZpZ2F0ZVRvUGVyc2lvbmFsUGFnZTogZnVuY3Rpb24oKXtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe3VybDpcIi4uL3BlcnNpb25hbC9wZXJzaW9uYWxcIn0pO1xyXG4gIH0sXHJcbiAgbmF2aWdhdGVUb0hhbGxQYWdlOiBmdW5jdGlvbigpe1xyXG4gICAgd3gubmF2aWdhdGVUbyh7dXJsOlwiLi4vaGFsbC9oYWxsXCJ9KTtcclxuICB9LFxyXG4gIG5hdmlnYXRlVG9QYWlyUGFnZTogZnVuY3Rpb24oKXtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe3VybDpcIi4uL3BhaXIvcGFpclwifSk7XHJcbiAgfVxyXG59KVxyXG5cclxuIl19