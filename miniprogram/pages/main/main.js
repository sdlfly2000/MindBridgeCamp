"use strict";
var app = getApp();
Page({
    data: {
        previousScroll: 0
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRTlCLElBQUksQ0FBQztJQUNILElBQUksRUFBQztRQUNILGNBQWMsRUFBQyxDQUFDO0tBQ2pCO0lBQ0QsTUFBTTtRQUNKLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVU7WUFDeEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZCLFFBQVEsRUFBRSxDQUFDO2FBQ1osQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsWUFBWSxFQUFFLFVBQVMsTUFBTTtRQUMzQixJQUFJLGFBQWEsR0FBVyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQzdDLElBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFDO1lBQzFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxLQUFLO2FBQ2YsQ0FBQyxDQUFDO1NBQ0o7YUFBSTtZQUNILElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsY0FBYyxFQUFFLGFBQWE7U0FDOUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHVCQUF1QixFQUFFO1FBQ3ZCLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBQyxHQUFHLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxrQkFBa0IsRUFBRTtRQUNsQixFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUMsR0FBRyxFQUFDLGNBQWMsRUFBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELGtCQUFrQixFQUFFO1FBQ2xCLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBQyxHQUFHLEVBQUMsY0FBYyxFQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOntcclxuICAgIHByZXZpb3VzU2Nyb2xsOjBcclxuICB9LFxyXG4gIG9uU2hvdygpe1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmdldFRhYkJhciA9PT0gJ2Z1bmN0aW9uJyAmJlxyXG4gICAgdGhpcy5nZXRUYWJCYXIoKSkge1xyXG4gICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xyXG4gICAgICAgIHNlbGVjdGVkOiAwXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBvblBhZ2VTY3JvbGw6IGZ1bmN0aW9uKG9wdGlvbil7XHJcbiAgICBsZXQgY3VycmVudFNjcm9sbDogbnVtYmVyID0gb3B0aW9uLnNjcm9sbFRvcDtcclxuICAgIGlmKGN1cnJlbnRTY3JvbGwgPiB0aGlzLmRhdGEucHJldmlvdXNTY3JvbGwpe1xyXG4gICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xyXG4gICAgICAgIGlzU2hvd246IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuZ2V0VGFiQmFyKCkuc2V0RGF0YSh7XHJcbiAgICAgICAgaXNTaG93bjogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHByZXZpb3VzU2Nyb2xsOiBjdXJyZW50U2Nyb2xsXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG5hdmlnYXRlVG9QZXJzaW9uYWxQYWdlOiBmdW5jdGlvbigpe1xyXG4gICAgd3gubmF2aWdhdGVUbyh7dXJsOlwiLi4vcGVyc2lvbmFsL3BlcnNpb25hbFwifSk7XHJcbiAgfSxcclxuICBuYXZpZ2F0ZVRvSGFsbFBhZ2U6IGZ1bmN0aW9uKCl7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6XCIuLi9oYWxsL2hhbGxcIn0pO1xyXG4gIH0sXHJcbiAgbmF2aWdhdGVUb1BhaXJQYWdlOiBmdW5jdGlvbigpe1xyXG4gICAgd3gubmF2aWdhdGVUbyh7dXJsOlwiLi4vcGFpci9wYWlyXCJ9KTtcclxuICB9XHJcbn0pXHJcblxyXG4iXX0=