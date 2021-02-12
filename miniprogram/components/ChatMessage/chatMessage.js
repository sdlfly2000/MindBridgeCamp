"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chatMessageService_1 = require("./chatMessageService");
Component({
    data: {
        roomId: undefined,
        participantsOnline: 0,
        totalParticipants: 0,
    },
    lifetimes: {
        ready: function () {
            var vm = this;
            var eventChannel = this.getEventChannel();
            eventChannel.on("ChatMessageRoomModel", function (data) {
                var roomModel = data.RoomModel;
                vm.data.roomId = roomModel.RoomId;
                vm.ConnectToHub(roomModel.RoomId);
                vm.GetCountOnlineParticipants(roomModel.RoomId);
            });
        },
        detached: function () {
            this.CloseToHub();
        }
    },
    methods: {
        ConnectToHub: function (roomId) {
            chatMessageService_1.chatMessageService.Connect(roomId)
                .then(function (res) { return console.info(res); })
                .catch(function (res) { return console.error(res); });
        },
        CloseToHub: function () {
            chatMessageService_1.chatMessageService.Close();
        },
        GetCountOnlineParticipants: function (roomId) {
            var _this = this;
            chatMessageService_1.chatMessageService.GetParticpantsOnline(roomId)
                .then(function (res) { return _this.setData({
                participantsOnline: res.data
            }); })
                .catch(function (res) { return console.error(res); });
        },
        getEventChannel: function () {
            return this.getOpenerEventChannel();
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0TWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUEwRDtBQUUxRCxTQUFTLENBQUM7SUFDUixJQUFJLEVBQUM7UUFDSCxNQUFNLEVBQUUsU0FBUztRQUNqQixrQkFBa0IsRUFBRSxDQUFDO1FBQ3JCLGlCQUFpQixFQUFFLENBQUM7S0FDckI7SUFDRCxTQUFTLEVBQUM7UUFDUixLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDZCxJQUFJLFlBQVksR0FBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDM0MsWUFBWSxDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxVQUFTLElBQVE7Z0JBQ3ZELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQy9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0JBQ2xDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxFQUFFLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDO0tBQ0Y7SUFDRCxPQUFPLEVBQUM7UUFDTixZQUFZLEVBQUMsVUFBUyxNQUFhO1lBQ2pDLHVDQUFrQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQy9CLElBQUksQ0FBQyxVQUFDLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQWpCLENBQWlCLENBQUM7aUJBQy9CLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsVUFBVSxFQUFDO1lBQ1QsdUNBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IsQ0FBQztRQUNELDBCQUEwQixFQUFFLFVBQVMsTUFBYztZQUF2QixpQkFNM0I7WUFMQyx1Q0FBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7aUJBQzVDLElBQUksQ0FBQyxVQUFDLEdBQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzlCLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxJQUFJO2FBQzdCLENBQUMsRUFGaUIsQ0FFakIsQ0FBQztpQkFDRixLQUFLLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNELGVBQWU7WUFDYixPQUFPLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3RDLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoYXRNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuL2NoYXRNZXNzYWdlU2VydmljZVwiO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICBkYXRhOntcclxuICAgIHJvb21JZDogdW5kZWZpbmVkLFxyXG4gICAgcGFydGljaXBhbnRzT25saW5lOiAwLFxyXG4gICAgdG90YWxQYXJ0aWNpcGFudHM6IDAsXHJcbiAgfSxcclxuICBsaWZldGltZXM6eyAgICBcclxuICAgIHJlYWR5OiBmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgICBsZXQgZXZlbnRDaGFubmVsICA9IHRoaXMuZ2V0RXZlbnRDaGFubmVsKCk7XHJcbiAgICAgIGV2ZW50Q2hhbm5lbC5vbihcIkNoYXRNZXNzYWdlUm9vbU1vZGVsXCIsIGZ1bmN0aW9uKGRhdGE6YW55KXtcclxuICAgICAgICBsZXQgcm9vbU1vZGVsID0gZGF0YS5Sb29tTW9kZWw7XHJcbiAgICAgICAgdm0uZGF0YS5yb29tSWQgPSByb29tTW9kZWwuUm9vbUlkO1xyXG4gICAgICAgIHZtLkNvbm5lY3RUb0h1Yihyb29tTW9kZWwuUm9vbUlkKTtcclxuICAgICAgICB2bS5HZXRDb3VudE9ubGluZVBhcnRpY2lwYW50cyhyb29tTW9kZWwuUm9vbUlkKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuQ2xvc2VUb0h1YigpO1xyXG4gICAgfSAgICBcclxuICB9LFxyXG4gIG1ldGhvZHM6e1xyXG4gICAgQ29ubmVjdFRvSHViOmZ1bmN0aW9uKHJvb21JZDpzdHJpbmcpe1xyXG4gICAgICBjaGF0TWVzc2FnZVNlcnZpY2UuQ29ubmVjdChyb29tSWQpXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT5jb25zb2xlLmluZm8ocmVzKSlcclxuICAgICAgICAuY2F0Y2goKHJlcykgPT4gY29uc29sZS5lcnJvcihyZXMpKTtcclxuICAgIH0sXHJcbiAgICBDbG9zZVRvSHViOmZ1bmN0aW9uKCl7XHJcbiAgICAgIGNoYXRNZXNzYWdlU2VydmljZS5DbG9zZSgpO1xyXG4gICAgfSxcclxuICAgIEdldENvdW50T25saW5lUGFydGljaXBhbnRzOiBmdW5jdGlvbihyb29tSWQ6IHN0cmluZyl7XHJcbiAgICAgIGNoYXRNZXNzYWdlU2VydmljZS5HZXRQYXJ0aWNwYW50c09ubGluZShyb29tSWQpXHJcbiAgICAgICAgLnRoZW4oKHJlczphbnkpID0+IHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwYXJ0aWNpcGFudHNPbmxpbmU6IHJlcy5kYXRhXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLmNhdGNoKChyZXMpID0+IGNvbnNvbGUuZXJyb3IocmVzKSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0RXZlbnRDaGFubmVsKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldE9wZW5lckV2ZW50Q2hhbm5lbCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=