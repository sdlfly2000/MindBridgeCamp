"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chatMessageService_1 = require("./chatMessageService");
Component({
    data: {
        roomId: "",
        participantsOnline: 0,
        totalParticipants: 0,
        messages: [],
        messageInput: ""
    },
    lifetimes: {
        ready: function () {
            var vm = this;
            var eventChannel = this.getEventChannel();
            eventChannel.on("ChatMessageRoomModel", function (data) {
                var roomModel = data.RoomModel;
                vm.setData({
                    roomId: roomModel.RoomId
                });
                vm.ConnectToHub(roomModel.RoomId);
                vm.GetFullMessages(roomModel.RoomId);
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
        GetFullMessages: function (roomId) {
            var _this = this;
            chatMessageService_1.chatMessageService.GetMessages(roomId)
                .then(function (res) { return _this.setData({
                messages: res
            }); })
                .catch(function (res) { return console.error(res); });
        },
        SendMessage: function () {
            chatMessageService_1.chatMessageService.Send(this.properties.messageInput);
        },
        getEventChannel: function () {
            return this.getOpenerEventChannel();
        },
        bindMessageInput: function (e) {
            this.setData({
                messageInput: e.detail.value
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0TWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUEwRDtBQUUxRCxTQUFTLENBQUM7SUFDUixJQUFJLEVBQUM7UUFDSCxNQUFNLEVBQUUsRUFBRTtRQUNWLGtCQUFrQixFQUFFLENBQUM7UUFDckIsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQixRQUFRLEVBQUMsRUFBRTtRQUNYLFlBQVksRUFBQyxFQUFFO0tBQ2hCO0lBQ0QsU0FBUyxFQUFDO1FBQ1IsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ2QsSUFBSSxZQUFZLEdBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzNDLFlBQVksQ0FBQyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsVUFBUyxJQUFRO2dCQUN2RCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUMvQixFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNULE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTTtpQkFDekIsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxFQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxRQUFRLEVBQUU7WUFDUixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQztLQUNGO0lBQ0QsT0FBTyxFQUFDO1FBQ04sWUFBWSxFQUFDLFVBQVMsTUFBYTtZQUF0QixpQkFPWjtZQU5DLHVDQUFrQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQy9CLElBQUksQ0FBQztnQkFDSixLQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsVUFBVSxFQUFDO1lBQ1QsdUNBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IsQ0FBQztRQUNELDBCQUEwQixFQUFFLFVBQVMsTUFBYztZQUF2QixpQkFNM0I7WUFMQyx1Q0FBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7aUJBQzVDLElBQUksQ0FBQyxVQUFDLEdBQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzlCLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxJQUFJO2FBQzdCLENBQUMsRUFGaUIsQ0FFakIsQ0FBQztpQkFDRixLQUFLLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNELGVBQWUsRUFBQyxVQUFTLE1BQWM7WUFBdkIsaUJBTWY7WUFMQyx1Q0FBa0IsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO2lCQUN2QyxJQUFJLENBQUMsVUFBQyxHQUFPLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUM5QixpQkFBaUIsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07YUFDbkMsQ0FBQyxFQUZpQixDQUVqQixDQUFDO2lCQUNGLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsZUFBZSxFQUFFLFVBQVMsTUFBYztZQUF2QixpQkFNaEI7WUFMQyx1Q0FBa0IsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2lCQUNuQyxJQUFJLENBQUMsVUFBQyxHQUFRLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUMvQixRQUFRLEVBQUUsR0FBRzthQUNkLENBQUMsRUFGa0IsQ0FFbEIsQ0FBQztpQkFDRixLQUFLLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNELFdBQVcsRUFBRTtZQUNYLHVDQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFDRCxlQUFlO1lBQ2IsT0FBTyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsZ0JBQWdCLEVBQUUsVUFBUyxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsWUFBWSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSzthQUM3QixDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGF0TWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi9jaGF0TWVzc2FnZVNlcnZpY2VcIjtcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgZGF0YTp7XHJcbiAgICByb29tSWQ6IFwiXCIsXHJcbiAgICBwYXJ0aWNpcGFudHNPbmxpbmU6IDAsXHJcbiAgICB0b3RhbFBhcnRpY2lwYW50czogMCxcclxuICAgIG1lc3NhZ2VzOltdLFxyXG4gICAgbWVzc2FnZUlucHV0OlwiXCJcclxuICB9LFxyXG4gIGxpZmV0aW1lczp7ICAgIFxyXG4gICAgcmVhZHk6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCB2bSA9IHRoaXM7XHJcbiAgICAgIGxldCBldmVudENoYW5uZWwgID0gdGhpcy5nZXRFdmVudENoYW5uZWwoKTtcclxuICAgICAgZXZlbnRDaGFubmVsLm9uKFwiQ2hhdE1lc3NhZ2VSb29tTW9kZWxcIiwgZnVuY3Rpb24oZGF0YTphbnkpe1xyXG4gICAgICAgIGxldCByb29tTW9kZWwgPSBkYXRhLlJvb21Nb2RlbDtcclxuICAgICAgICB2bS5zZXREYXRhKHtcclxuICAgICAgICAgIHJvb21JZDogcm9vbU1vZGVsLlJvb21JZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZtLkNvbm5lY3RUb0h1Yihyb29tTW9kZWwuUm9vbUlkKTtcclxuICAgICAgICB2bS5HZXRGdWxsTWVzc2FnZXMocm9vbU1vZGVsLlJvb21JZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGRldGFjaGVkOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLkNsb3NlVG9IdWIoKTtcclxuICAgIH0gICAgXHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIENvbm5lY3RUb0h1YjpmdW5jdGlvbihyb29tSWQ6c3RyaW5nKXtcclxuICAgICAgY2hhdE1lc3NhZ2VTZXJ2aWNlLkNvbm5lY3Qocm9vbUlkKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuR2V0Q291bnRPbmxpbmVQYXJ0aWNpcGFudHMocm9vbUlkKTtcclxuICAgICAgICAgIHRoaXMuR2V0UGFydGljaXBhbnRzKHJvb21JZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKHJlcykgPT4gY29uc29sZS5lcnJvcihyZXMpKTtcclxuICAgIH0sXHJcbiAgICBDbG9zZVRvSHViOmZ1bmN0aW9uKCl7XHJcbiAgICAgIGNoYXRNZXNzYWdlU2VydmljZS5DbG9zZSgpO1xyXG4gICAgfSxcclxuICAgIEdldENvdW50T25saW5lUGFydGljaXBhbnRzOiBmdW5jdGlvbihyb29tSWQ6IHN0cmluZyl7XHJcbiAgICAgIGNoYXRNZXNzYWdlU2VydmljZS5HZXRQYXJ0aWNwYW50c09ubGluZShyb29tSWQpXHJcbiAgICAgICAgLnRoZW4oKHJlczphbnkpID0+IHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwYXJ0aWNpcGFudHNPbmxpbmU6IHJlcy5kYXRhXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLmNhdGNoKChyZXMpID0+IGNvbnNvbGUuZXJyb3IocmVzKSk7XHJcbiAgICB9LFxyXG4gICAgR2V0UGFydGljaXBhbnRzOmZ1bmN0aW9uKHJvb21JZDogc3RyaW5nKXtcclxuICAgICAgY2hhdE1lc3NhZ2VTZXJ2aWNlLkdldFBhcnRpY2lwYW50cyhyb29tSWQpXHJcbiAgICAgICAgLnRoZW4oKHJlczphbnkpID0+IHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB0b3RhbFBhcnRpY2lwYW50czogcmVzLmRhdGEubGVuZ3RoXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLmNhdGNoKChyZXMpID0+IGNvbnNvbGUuZXJyb3IocmVzKSk7XHJcbiAgICB9LFxyXG4gICAgR2V0RnVsbE1lc3NhZ2VzOiBmdW5jdGlvbihyb29tSWQ6IHN0cmluZyl7XHJcbiAgICAgIGNoYXRNZXNzYWdlU2VydmljZS5HZXRNZXNzYWdlcyhyb29tSWQpXHJcbiAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbWVzc2FnZXM6IHJlc1xyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC5jYXRjaCgocmVzKSA9PiBjb25zb2xlLmVycm9yKHJlcykpO1xyXG4gICAgfSxcclxuICAgIFNlbmRNZXNzYWdlOiBmdW5jdGlvbigpe1xyXG4gICAgICBjaGF0TWVzc2FnZVNlcnZpY2UuU2VuZCh0aGlzLnByb3BlcnRpZXMubWVzc2FnZUlucHV0KTtcclxuICAgIH0sXHJcbiAgICBnZXRFdmVudENoYW5uZWwoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0T3BlbmVyRXZlbnRDaGFubmVsKCk7XHJcbiAgICB9LFxyXG4gICAgYmluZE1lc3NhZ2VJbnB1dDogZnVuY3Rpb24oZSl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgbWVzc2FnZUlucHV0OiBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=