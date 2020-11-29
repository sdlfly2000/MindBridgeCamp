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
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRTlCLElBQUksQ0FBQztJQUNILE1BQU07UUFDSixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFDckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHOzRCQUNWLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7NEJBQ3RDLElBQUksR0FBRyxDQUFDLHFCQUFxQixFQUFFO2dDQUM3QixHQUFHLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUE7NkJBQy9CO3dCQUNILENBQUM7cUJBQ0YsQ0FBQyxDQUFBO2lCQUNIO3FCQUFJO2lCQUNKO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVTtZQUN4QyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDdkIsUUFBUSxFQUFFLENBQUM7YUFDWixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFDRCx1QkFBdUIsRUFBRTtRQUN2QixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUMsR0FBRyxFQUFDLHdCQUF3QixFQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDbEIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxjQUFjLEVBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxrQkFBa0IsRUFBRTtRQUNsQixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUMsR0FBRyxFQUFDLGNBQWMsRUFBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxyXG5cclxuUGFnZSh7XHJcbiAgb25Mb2FkKCl7XHJcbiAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm8gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGlmIChhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrKHJlcylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgfSxcclxuICBvblNob3coKXtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5nZXRUYWJCYXIgPT09ICdmdW5jdGlvbicgJiZcclxuICAgIHRoaXMuZ2V0VGFiQmFyKCkpIHtcclxuICAgICAgdGhpcy5nZXRUYWJCYXIoKS5zZXREYXRhKHtcclxuICAgICAgICBzZWxlY3RlZDogMFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbmF2aWdhdGVUb1BlcnNpb25hbFBhZ2U6IGZ1bmN0aW9uKCl7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6XCIuLi9wZXJzaW9uYWwvcGVyc2lvbmFsXCJ9KTtcclxuICB9LFxyXG4gIG5hdmlnYXRlVG9IYWxsUGFnZTogZnVuY3Rpb24oKXtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe3VybDpcIi4uL2hhbGwvaGFsbFwifSk7XHJcbiAgfSxcclxuICBuYXZpZ2F0ZVRvUGFpclBhZ2U6IGZ1bmN0aW9uKCl7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6XCIuLi9wYWlyL3BhaXJcIn0pO1xyXG4gIH1cclxufSlcclxuXHJcbiJdfQ==