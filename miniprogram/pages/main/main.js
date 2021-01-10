"use strict";
var app = getApp();
Page({
    data: {
        previousScroll: 0
    },
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
    onPageScroll: function (option) {
        var currentScroll = option.scrollTop;
        if (currentScroll > this.data.previousScroll) {
            this.getTabBar().setData({
                isShown: false
            });
        }
        else {
            this.getTabBar().setData({
                isShown: true
            });
        }
        this.setData({
            previousScroll: currentScroll
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRTlCLElBQUksQ0FBQztJQUNILElBQUksRUFBQztRQUNILGNBQWMsRUFBQyxDQUFDO0tBQ2pCO0lBQ0QsTUFBTTtRQUNKLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUNyQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7NEJBQ1YsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTs0QkFDdEMsSUFBSSxHQUFHLENBQUMscUJBQXFCLEVBQUU7Z0NBQzdCLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQTs2QkFDL0I7d0JBQ0gsQ0FBQztxQkFDRixDQUFDLENBQUE7aUJBQ0g7cUJBQUk7aUJBQ0o7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU07UUFDSixJQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxVQUFVO1lBQ3hDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUN2QixRQUFRLEVBQUUsQ0FBQzthQUNaLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUNELFlBQVksRUFBRSxVQUFTLE1BQU07UUFDM0IsSUFBSSxhQUFhLEdBQVcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUM3QyxJQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBQztZQUMxQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUN2QixPQUFPLEVBQUUsS0FBSzthQUNmLENBQUMsQ0FBQztTQUNKO2FBQUk7WUFDSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUN2QixPQUFPLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGNBQWMsRUFBRSxhQUFhO1NBQzlCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCx1QkFBdUIsRUFBRTtRQUN2QixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUMsR0FBRyxFQUFDLHdCQUF3QixFQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDbEIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxjQUFjLEVBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxrQkFBa0IsRUFBRTtRQUNsQixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUMsR0FBRyxFQUFDLGNBQWMsRUFBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxyXG5cclxuUGFnZSh7XHJcbiAgZGF0YTp7XHJcbiAgICBwcmV2aW91c1Njcm9sbDowXHJcbiAgfSxcclxuICBvbkxvYWQoKXtcclxuICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mbyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uU2hvdygpe1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmdldFRhYkJhciA9PT0gJ2Z1bmN0aW9uJyAmJlxyXG4gICAgdGhpcy5nZXRUYWJCYXIoKSkge1xyXG4gICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xyXG4gICAgICAgIHNlbGVjdGVkOiAwXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBvblBhZ2VTY3JvbGw6IGZ1bmN0aW9uKG9wdGlvbil7XHJcbiAgICBsZXQgY3VycmVudFNjcm9sbDogbnVtYmVyID0gb3B0aW9uLnNjcm9sbFRvcDtcclxuICAgIGlmKGN1cnJlbnRTY3JvbGwgPiB0aGlzLmRhdGEucHJldmlvdXNTY3JvbGwpe1xyXG4gICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xyXG4gICAgICAgIGlzU2hvd246IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuZ2V0VGFiQmFyKCkuc2V0RGF0YSh7XHJcbiAgICAgICAgaXNTaG93bjogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHByZXZpb3VzU2Nyb2xsOiBjdXJyZW50U2Nyb2xsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG5hdmlnYXRlVG9QZXJzaW9uYWxQYWdlOiBmdW5jdGlvbigpe1xyXG4gICAgd3gubmF2aWdhdGVUbyh7dXJsOlwiLi4vcGVyc2lvbmFsL3BlcnNpb25hbFwifSk7XHJcbiAgfSxcclxuICBuYXZpZ2F0ZVRvSGFsbFBhZ2U6IGZ1bmN0aW9uKCl7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6XCIuLi9oYWxsL2hhbGxcIn0pO1xyXG4gIH0sXHJcbiAgbmF2aWdhdGVUb1BhaXJQYWdlOiBmdW5jdGlvbigpe1xyXG4gICAgd3gubmF2aWdhdGVUbyh7dXJsOlwiLi4vcGFpci9wYWlyXCJ9KTtcclxuICB9XHJcbn0pXHJcblxyXG4iXX0=