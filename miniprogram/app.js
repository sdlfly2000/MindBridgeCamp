"use strict";
App({
    globalData: {
        mainPage: "/components/calc/calc",
        loginPage: "/pages/login/login",
        appName: "RealEstateCalc",
        baseUrlAuth: "https://www.idea-activator.com:7002/api/",
        baseUrlApp: ""
    },
    onLaunch: function () {
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUU7UUFDVixRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLFNBQVMsRUFBRSxvQkFBb0I7UUFDL0IsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUsMENBQTBDO1FBQ3ZELFVBQVUsRUFBRSxFQUFFO0tBQ2Y7SUFDRCxRQUFRO1FBRU4sSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUN4QixFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUVqQyxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLnRzXG4vLyBpbXBvcnQgeyBMb2dpbiB9IGZyb20gXCIuL3V0aWxzL3V0aWxcIlxuXG5BcHA8SUFwcE9wdGlvbj4oe1xuICBnbG9iYWxEYXRhOiB7XG4gICAgbWFpblBhZ2U6IFwiL2NvbXBvbmVudHMvY2FsYy9jYWxjXCIsXG4gICAgbG9naW5QYWdlOiBcIi9wYWdlcy9sb2dpbi9sb2dpblwiLFxuICAgIGFwcE5hbWU6IFwiUmVhbEVzdGF0ZUNhbGNcIixcbiAgICBiYXNlVXJsQXV0aDogXCJodHRwczovL3d3dy5pZGVhLWFjdGl2YXRvci5jb206NzAwMi9hcGkvXCIsXG4gICAgYmFzZVVybEFwcDogXCJcIlxuICB9LFxuICBvbkxhdW5jaCgpIHtcbiAgICAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcbiAgICBjb25zdCBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxuICAgIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncylcbiAgICAvLyBMb2dpbih0aGlzKVxuICB9XG59KSJdfQ==