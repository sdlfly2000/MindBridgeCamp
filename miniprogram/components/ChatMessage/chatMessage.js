"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chatMessageService_1 = require("./chatMessageService");
Component({
    data: {
        roomId: "",
        participantsOnline: 0,
        totalParticipants: 0,
        messages: new Array(),
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
            var vm = this;
            chatMessageService_1.chatMessageService.Connect({ roomId: roomId, onMessage: function (model) {
                    var models = vm.data.messages;
                    models.push(model);
                    vm.setData({
                        messages: models,
                        messageInput: ""
                    });
                } })
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
                messages: res.data
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0TWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUFvRjtBQUVwRixTQUFTLENBQUM7SUFDUixJQUFJLEVBQUM7UUFDSCxNQUFNLEVBQUUsRUFBRTtRQUNWLGtCQUFrQixFQUFFLENBQUM7UUFDckIsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQixRQUFRLEVBQUUsSUFBSSxLQUFLLEVBQTRCO1FBQy9DLFlBQVksRUFBQyxFQUFFO0tBQ2hCO0lBQ0QsU0FBUyxFQUFDO1FBQ1IsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ2QsSUFBSSxZQUFZLEdBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzNDLFlBQVksQ0FBQyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsVUFBUyxJQUFRO2dCQUN2RCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUMvQixFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNULE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTTtpQkFDekIsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxFQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxRQUFRLEVBQUU7WUFDUixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQztLQUNGO0lBQ0QsT0FBTyxFQUFDO1FBQ04sWUFBWSxFQUFDLFVBQVMsTUFBYTtZQUF0QixpQkFlWjtZQWRDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztZQUNkLHVDQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQUMsS0FBSztvQkFDM0QsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25CLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0JBQ1QsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFlBQVksRUFBRSxFQUFFO3FCQUNqQixDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxFQUFDLENBQUM7aUJBQ0EsSUFBSSxDQUFDO2dCQUNKLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxVQUFVLEVBQUM7WUFDVCx1Q0FBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixDQUFDO1FBQ0QsMEJBQTBCLEVBQUUsVUFBUyxNQUFjO1lBQXZCLGlCQU0zQjtZQUxDLHVDQUFrQixDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQztpQkFDNUMsSUFBSSxDQUFDLFVBQUMsR0FBTyxJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDOUIsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLElBQUk7YUFDN0IsQ0FBQyxFQUZpQixDQUVqQixDQUFDO2lCQUNGLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsZUFBZSxFQUFDLFVBQVMsTUFBYztZQUF2QixpQkFNZjtZQUxDLHVDQUFrQixDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7aUJBQ3ZDLElBQUksQ0FBQyxVQUFDLEdBQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzlCLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTthQUNuQyxDQUFDLEVBRmlCLENBRWpCLENBQUM7aUJBQ0YsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxlQUFlLEVBQUUsVUFBUyxNQUFjO1lBQXZCLGlCQU1oQjtZQUxDLHVDQUFrQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7aUJBQ25DLElBQUksQ0FBQyxVQUFDLEdBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQy9CLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBdUM7YUFDdEQsQ0FBQyxFQUZrQixDQUVsQixDQUFDO2lCQUNGLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsV0FBVyxFQUFFO1lBQ1gsdUNBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUNELGVBQWU7WUFDYixPQUFPLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3RDLENBQUM7UUFDRCxnQkFBZ0IsRUFBRSxVQUFTLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxZQUFZLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2FBQzdCLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoYXRNZXNzYWdlU2VydmljZSwgTGVhcm5pbmdSb29tTWVzc2FnZU1vZGVsIH0gZnJvbSBcIi4vY2hhdE1lc3NhZ2VTZXJ2aWNlXCI7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gIGRhdGE6e1xyXG4gICAgcm9vbUlkOiBcIlwiLFxyXG4gICAgcGFydGljaXBhbnRzT25saW5lOiAwLFxyXG4gICAgdG90YWxQYXJ0aWNpcGFudHM6IDAsXHJcbiAgICBtZXNzYWdlczogbmV3IEFycmF5PExlYXJuaW5nUm9vbU1lc3NhZ2VNb2RlbD4oKSxcclxuICAgIG1lc3NhZ2VJbnB1dDpcIlwiXHJcbiAgfSxcclxuICBsaWZldGltZXM6eyAgICBcclxuICAgIHJlYWR5OiBmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgICBsZXQgZXZlbnRDaGFubmVsICA9IHRoaXMuZ2V0RXZlbnRDaGFubmVsKCk7XHJcbiAgICAgIGV2ZW50Q2hhbm5lbC5vbihcIkNoYXRNZXNzYWdlUm9vbU1vZGVsXCIsIGZ1bmN0aW9uKGRhdGE6YW55KXtcclxuICAgICAgICBsZXQgcm9vbU1vZGVsID0gZGF0YS5Sb29tTW9kZWw7XHJcbiAgICAgICAgdm0uc2V0RGF0YSh7XHJcbiAgICAgICAgICByb29tSWQ6IHJvb21Nb2RlbC5Sb29tSWRcclxuICAgICAgICB9KTtcclxuICAgICAgICB2bS5Db25uZWN0VG9IdWIocm9vbU1vZGVsLlJvb21JZCk7XHJcbiAgICAgICAgdm0uR2V0RnVsbE1lc3NhZ2VzKHJvb21Nb2RlbC5Sb29tSWQpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBkZXRhY2hlZDogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5DbG9zZVRvSHViKCk7XHJcbiAgICB9ICAgIFxyXG4gIH0sXHJcbiAgbWV0aG9kczp7XHJcbiAgICBDb25uZWN0VG9IdWI6ZnVuY3Rpb24ocm9vbUlkOnN0cmluZyl7XHJcbiAgICAgIGxldCB2bSA9IHRoaXM7XHJcbiAgICAgIGNoYXRNZXNzYWdlU2VydmljZS5Db25uZWN0KHtyb29tSWQ6IHJvb21JZCwgb25NZXNzYWdlOiAobW9kZWwpID0+IHsgICAgICBcclxuICAgICAgICBsZXQgbW9kZWxzID0gdm0uZGF0YS5tZXNzYWdlcztcclxuICAgICAgICBtb2RlbHMucHVzaChtb2RlbCk7XHJcbiAgICAgICAgdm0uc2V0RGF0YSh7XHJcbiAgICAgICAgICBtZXNzYWdlczogbW9kZWxzLFxyXG4gICAgICAgICAgbWVzc2FnZUlucHV0OiBcIlwiXHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgICAgfX0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5HZXRDb3VudE9ubGluZVBhcnRpY2lwYW50cyhyb29tSWQpO1xyXG4gICAgICAgICAgdGhpcy5HZXRQYXJ0aWNpcGFudHMocm9vbUlkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgocmVzKSA9PiBjb25zb2xlLmVycm9yKHJlcykpO1xyXG4gICAgfSxcclxuICAgIENsb3NlVG9IdWI6ZnVuY3Rpb24oKXtcclxuICAgICAgY2hhdE1lc3NhZ2VTZXJ2aWNlLkNsb3NlKCk7XHJcbiAgICB9LFxyXG4gICAgR2V0Q291bnRPbmxpbmVQYXJ0aWNpcGFudHM6IGZ1bmN0aW9uKHJvb21JZDogc3RyaW5nKXtcclxuICAgICAgY2hhdE1lc3NhZ2VTZXJ2aWNlLkdldFBhcnRpY3BhbnRzT25saW5lKHJvb21JZClcclxuICAgICAgICAudGhlbigocmVzOmFueSkgPT4gdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBhcnRpY2lwYW50c09ubGluZTogcmVzLmRhdGFcclxuICAgICAgICB9KSlcclxuICAgICAgICAuY2F0Y2goKHJlcykgPT4gY29uc29sZS5lcnJvcihyZXMpKTtcclxuICAgIH0sXHJcbiAgICBHZXRQYXJ0aWNpcGFudHM6ZnVuY3Rpb24ocm9vbUlkOiBzdHJpbmcpe1xyXG4gICAgICBjaGF0TWVzc2FnZVNlcnZpY2UuR2V0UGFydGljaXBhbnRzKHJvb21JZClcclxuICAgICAgICAudGhlbigocmVzOmFueSkgPT4gdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHRvdGFsUGFydGljaXBhbnRzOiByZXMuZGF0YS5sZW5ndGhcclxuICAgICAgICB9KSlcclxuICAgICAgICAuY2F0Y2goKHJlcykgPT4gY29uc29sZS5lcnJvcihyZXMpKTtcclxuICAgIH0sXHJcbiAgICBHZXRGdWxsTWVzc2FnZXM6IGZ1bmN0aW9uKHJvb21JZDogc3RyaW5nKXtcclxuICAgICAgY2hhdE1lc3NhZ2VTZXJ2aWNlLkdldE1lc3NhZ2VzKHJvb21JZClcclxuICAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBtZXNzYWdlczogcmVzLmRhdGEgYXMgQXJyYXk8TGVhcm5pbmdSb29tTWVzc2FnZU1vZGVsPlxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC5jYXRjaCgocmVzKSA9PiBjb25zb2xlLmVycm9yKHJlcykpO1xyXG4gICAgfSxcclxuICAgIFNlbmRNZXNzYWdlOiBmdW5jdGlvbigpe1xyXG4gICAgICBjaGF0TWVzc2FnZVNlcnZpY2UuU2VuZCh0aGlzLnByb3BlcnRpZXMubWVzc2FnZUlucHV0KTtcclxuICAgIH0sXHJcbiAgICBnZXRFdmVudENoYW5uZWwoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0T3BlbmVyRXZlbnRDaGFubmVsKCk7XHJcbiAgICB9LFxyXG4gICAgYmluZE1lc3NhZ2VJbnB1dDogZnVuY3Rpb24oZSl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgbWVzc2FnZUlucHV0OiBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=