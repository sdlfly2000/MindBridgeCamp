"use strict";
var app = getApp();
Page({
    onLoad: function () {
    },
    onShow: function () {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRTlCLElBQUksQ0FBQztJQUNILE1BQU07SUFFTixDQUFDO0lBQ0QsTUFBTTtRQUNKLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVU7WUFDeEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZCLFFBQVEsRUFBRSxDQUFDO2FBQ1osQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcblxyXG5QYWdlKHtcclxuICBvbkxvYWQoKXtcclxuICAgIFxyXG4gIH0sXHJcbiAgb25TaG93KCl7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuZ2V0VGFiQmFyID09PSAnZnVuY3Rpb24nICYmXHJcbiAgICB0aGlzLmdldFRhYkJhcigpKSB7XHJcbiAgICAgIHRoaXMuZ2V0VGFiQmFyKCkuc2V0RGF0YSh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IDBcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG4iXX0=