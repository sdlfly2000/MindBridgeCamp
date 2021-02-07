"use strict";
var app = getApp();
Component({
    methods: {
        ConnectToHub: function () {
            wx.connectSocket({
                url: app.globalData.bassUrlWs + "ChatMessage" + "/RoomId" + "/LoginToken",
                success: function (res) {
                    console.info(res);
                }
            });
        },
        CloseToHub: function () {
            wx.closeSocket();
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0TWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUM7QUFFL0IsU0FBUyxDQUFDO0lBQ1IsT0FBTyxFQUFDO1FBQ04sWUFBWSxFQUFDO1lBQ1gsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDZixHQUFHLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsYUFBYSxHQUFHLFNBQVMsR0FBRyxhQUFhO2dCQUN6RSxPQUFPLEVBQUUsVUFBUyxHQUFHO29CQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELFVBQVUsRUFBRTtZQUNWLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KCk7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gIG1ldGhvZHM6e1xyXG4gICAgQ29ubmVjdFRvSHViOmZ1bmN0aW9uKCl7XHJcbiAgICAgIHd4LmNvbm5lY3RTb2NrZXQoe1xyXG4gICAgICAgIHVybDogYXBwLmdsb2JhbERhdGEuYmFzc1VybFdzICsgXCJDaGF0TWVzc2FnZVwiICsgXCIvUm9vbUlkXCIgKyBcIi9Mb2dpblRva2VuXCIsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgIGNvbnNvbGUuaW5mbyhyZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgQ2xvc2VUb0h1YjogZnVuY3Rpb24oKXtcclxuICAgICAgd3guY2xvc2VTb2NrZXQoKTtcclxuICAgIH1cclxuICB9XHJcbn0pIl19