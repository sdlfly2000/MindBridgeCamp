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
            });
        },
        detached: function () {
            this.CloseToHub();
        }
    },
    methods: {
        ConnectToHub: function (roomId) {
            var _this = this;
            chatMessageService_1.chatMessageService.Connect(roomId)
                .then(function () {
                _this.GetCountOnlineParticipants(roomId);
                _this.GetParticipants(roomId);
            })
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
        GetParticipants: function (roomId) {
            var _this = this;
            chatMessageService_1.chatMessageService.GetParticipants(roomId)
                .then(function (res) { return _this.setData({
                totalParticipants: res.data.length
            }); })
                .catch(function (res) { return console.error(res); });
        },
        getEventChannel: function () {
            return this.getOpenerEventChannel();
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0TWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUEwRDtBQUUxRCxTQUFTLENBQUM7SUFDUixJQUFJLEVBQUM7UUFDSCxNQUFNLEVBQUUsU0FBUztRQUNqQixrQkFBa0IsRUFBRSxDQUFDO1FBQ3JCLGlCQUFpQixFQUFFLENBQUM7S0FDckI7SUFDRCxTQUFTLEVBQUM7UUFDUixLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDZCxJQUFJLFlBQVksR0FBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDM0MsWUFBWSxDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxVQUFTLElBQVE7Z0JBQ3ZELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQy9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0JBQ2xDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDO0tBQ0Y7SUFDRCxPQUFPLEVBQUM7UUFDTixZQUFZLEVBQUMsVUFBUyxNQUFhO1lBQXRCLGlCQU9aO1lBTkMsdUNBQWtCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDL0IsSUFBSSxDQUFDO2dCQUNKLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxVQUFVLEVBQUM7WUFDVCx1Q0FBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixDQUFDO1FBQ0QsMEJBQTBCLEVBQUUsVUFBUyxNQUFjO1lBQXZCLGlCQU0zQjtZQUxDLHVDQUFrQixDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztpQkFDNUMsSUFBSSxDQUFDLFVBQUMsR0FBTyxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDOUIsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLElBQUk7YUFDN0IsQ0FBQyxFQUZpQixDQUVqQixDQUFDO2lCQUNGLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsZUFBZSxFQUFDLFVBQVMsTUFBYztZQUF2QixpQkFNZjtZQUxDLHVDQUFrQixDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7aUJBQ3ZDLElBQUksQ0FBQyxVQUFDLEdBQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzlCLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTthQUNuQyxDQUFDLEVBRmlCLENBRWpCLENBQUM7aUJBQ0YsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxlQUFlO1lBQ2IsT0FBTyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUN0QyxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGF0TWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi9jaGF0TWVzc2FnZVNlcnZpY2VcIjtcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgZGF0YTp7XHJcbiAgICByb29tSWQ6IHVuZGVmaW5lZCxcclxuICAgIHBhcnRpY2lwYW50c09ubGluZTogMCxcclxuICAgIHRvdGFsUGFydGljaXBhbnRzOiAwLFxyXG4gIH0sXHJcbiAgbGlmZXRpbWVzOnsgICAgXHJcbiAgICByZWFkeTogZnVuY3Rpb24oKXtcclxuICAgICAgbGV0IHZtID0gdGhpcztcclxuICAgICAgbGV0IGV2ZW50Q2hhbm5lbCAgPSB0aGlzLmdldEV2ZW50Q2hhbm5lbCgpO1xyXG4gICAgICBldmVudENoYW5uZWwub24oXCJDaGF0TWVzc2FnZVJvb21Nb2RlbFwiLCBmdW5jdGlvbihkYXRhOmFueSl7XHJcbiAgICAgICAgbGV0IHJvb21Nb2RlbCA9IGRhdGEuUm9vbU1vZGVsO1xyXG4gICAgICAgIHZtLmRhdGEucm9vbUlkID0gcm9vbU1vZGVsLlJvb21JZDtcclxuICAgICAgICB2bS5Db25uZWN0VG9IdWIocm9vbU1vZGVsLlJvb21JZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGRldGFjaGVkOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLkNsb3NlVG9IdWIoKTtcclxuICAgIH0gICAgXHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIENvbm5lY3RUb0h1YjpmdW5jdGlvbihyb29tSWQ6c3RyaW5nKXtcclxuICAgICAgY2hhdE1lc3NhZ2VTZXJ2aWNlLkNvbm5lY3Qocm9vbUlkKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuR2V0Q291bnRPbmxpbmVQYXJ0aWNpcGFudHMocm9vbUlkKTtcclxuICAgICAgICAgIHRoaXMuR2V0UGFydGljaXBhbnRzKHJvb21JZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKHJlcykgPT4gY29uc29sZS5lcnJvcihyZXMpKTtcclxuICAgIH0sXHJcbiAgICBDbG9zZVRvSHViOmZ1bmN0aW9uKCl7XHJcbiAgICAgIGNoYXRNZXNzYWdlU2VydmljZS5DbG9zZSgpO1xyXG4gICAgfSxcclxuICAgIEdldENvdW50T25saW5lUGFydGljaXBhbnRzOiBmdW5jdGlvbihyb29tSWQ6IHN0cmluZyl7XHJcbiAgICAgIGNoYXRNZXNzYWdlU2VydmljZS5HZXRQYXJ0aWNwYW50c09ubGluZShyb29tSWQpXHJcbiAgICAgICAgLnRoZW4oKHJlczphbnkpID0+IHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwYXJ0aWNpcGFudHNPbmxpbmU6IHJlcy5kYXRhXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLmNhdGNoKChyZXMpID0+IGNvbnNvbGUuZXJyb3IocmVzKSk7XHJcbiAgICB9LFxyXG4gICAgR2V0UGFydGljaXBhbnRzOmZ1bmN0aW9uKHJvb21JZDogc3RyaW5nKXtcclxuICAgICAgY2hhdE1lc3NhZ2VTZXJ2aWNlLkdldFBhcnRpY2lwYW50cyhyb29tSWQpXHJcbiAgICAgICAgLnRoZW4oKHJlczphbnkpID0+IHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB0b3RhbFBhcnRpY2lwYW50czogcmVzLmRhdGEubGVuZ3RoXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLmNhdGNoKChyZXMpID0+IGNvbnNvbGUuZXJyb3IocmVzKSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0RXZlbnRDaGFubmVsKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldE9wZW5lckV2ZW50Q2hhbm5lbCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=