"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chatMessageService_1 = require("./chatMessageService");
Component({
    data: {
        roomId: "",
        participantsOnline: 0,
        totalParticipants: 0,
        participants: new Array(),
        messages: new Array(),
        messageInput: "",
        bottom: ""
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
                        messageInput: "",
                        bottom: ""
                    });
                    vm.setData({
                        bottom: "scrollBottom"
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
                totalParticipants: res.data.length,
                participants: res.data
            }); })
                .catch(function (res) { return console.error(res); });
        },
        GetFullMessages: function (roomId) {
            var _this = this;
            chatMessageService_1.chatMessageService.GetMessages(roomId)
                .then(function (res) { return _this.setData({
                messages: res.data,
                bottom: "scrollBottom"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0TWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUFrRztBQUVsRyxTQUFTLENBQUM7SUFDUixJQUFJLEVBQUM7UUFDSCxNQUFNLEVBQUUsRUFBRTtRQUNWLGtCQUFrQixFQUFFLENBQUM7UUFDckIsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQixZQUFZLEVBQUUsSUFBSSxLQUFLLEVBQWU7UUFDdEMsUUFBUSxFQUFFLElBQUksS0FBSyxFQUE0QjtRQUMvQyxZQUFZLEVBQUMsRUFBRTtRQUNmLE1BQU0sRUFBQyxFQUFFO0tBQ1Y7SUFDRCxTQUFTLEVBQUM7UUFDUixLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDZCxJQUFJLFlBQVksR0FBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDM0MsWUFBWSxDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxVQUFTLElBQVE7Z0JBQ3ZELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQy9CLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ1QsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNO2lCQUN6QixDQUFDLENBQUM7Z0JBQ0gsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xDLEVBQUUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDO0tBQ0Y7SUFDRCxPQUFPLEVBQUM7UUFDTixZQUFZLEVBQUMsVUFBUyxNQUFhO1lBQXRCLGlCQW1CWjtZQWxCQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDZCx1Q0FBa0IsQ0FBQyxPQUFPLENBQUMs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QUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNoYXRNZXNzYWdlU2VydmljZSwgTGVhcm5pbmdSb29tTWVzc2FnZU1vZGVsLCBQYXJ0aWNpcGFudCAgfSBmcm9tIFwiLi9jaGF0TWVzc2FnZVNlcnZpY2VcIjtcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgZGF0YTp7XHJcbiAgICByb29tSWQ6IFwiXCIsXHJcbiAgICBwYXJ0aWNpcGFudHNPbmxpbmU6IDAsXHJcbiAgICB0b3RhbFBhcnRpY2lwYW50czogMCxcclxuICAgIHBhcnRpY2lwYW50czogbmV3IEFycmF5PFBhcnRpY2lwYW50PigpLFxyXG4gICAgbWVzc2FnZXM6IG5ldyBBcnJheTxMZWFybmluZ1Jvb21NZXNzYWdlTW9kZWw+KCksXHJcbiAgICBtZXNzYWdlSW5wdXQ6XCJcIixcclxuICAgIGJvdHRvbTpcIlwiXHJcbiAgfSxcclxuICBsaWZldGltZXM6eyAgICBcclxuICAgIHJlYWR5OiBmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgICBsZXQgZXZlbnRDaGFubmVsICA9IHRoaXMuZ2V0RXZlbnRDaGFubmVsKCk7XHJcbiAgICAgIGV2ZW50Q2hhbm5lbC5vbihcIkNoYXRNZXNzYWdlUm9vbU1vZGVsXCIsIGZ1bmN0aW9uKGRhdGE6YW55KXtcclxuICAgICAgICBsZXQgcm9vbU1vZGVsID0gZGF0YS5Sb29tTW9kZWw7XHJcbiAgICAgICAgdm0uc2V0RGF0YSh7XHJcbiAgICAgICAgICByb29tSWQ6IHJvb21Nb2RlbC5Sb29tSWRcclxuICAgICAgICB9KTtcclxuICAgICAgICB2bS5Db25uZWN0VG9IdWIocm9vbU1vZGVsLlJvb21JZCk7XHJcbiAgICAgICAgdm0uR2V0RnVsbE1lc3NhZ2VzKHJvb21Nb2RlbC5Sb29tSWQpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBkZXRhY2hlZDogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5DbG9zZVRvSHViKCk7XHJcbiAgICB9ICAgIFxyXG4gIH0sXHJcbiAgbWV0aG9kczp7XHJcbiAgICBDb25uZWN0VG9IdWI6ZnVuY3Rpb24ocm9vbUlkOnN0cmluZyl7XHJcbiAgICAgIGxldCB2bSA9IHRoaXM7XHJcbiAgICAgIGNoYXRNZXNzYWdlU2VydmljZS5Db25uZWN0KHtyb29tSWQ6IHJvb21JZCwgb25NZXNzYWdlOiAobW9kZWwpID0+IHsgICAgICBcclxuICAgICAgICBsZXQgbW9kZWxzID0gdm0uZGF0YS5tZXNzYWdlcztcclxuICAgICAgICBtb2RlbHMucHVzaChtb2RlbCk7XHJcbiAgICAgICAgdm0uc2V0RGF0YSh7XHJcbiAgICAgICAgICBtZXNzYWdlczogbW9kZWxzLFxyXG4gICAgICAgICAgbWVzc2FnZUlucHV0OiBcIlwiLFxyXG4gICAgICAgICAgYm90dG9tOiBcIlwiXHJcbiAgICAgICAgfSk7ICAgXHJcbiAgICAgICAgdm0uc2V0RGF0YSh7XHJcbiAgICAgICAgICBib3R0b206IFwic2Nyb2xsQm90dG9tXCJcclxuICAgICAgICB9KTsgICAgICBcclxuICAgICAgfX0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5HZXRDb3VudE9ubGluZVBhcnRpY2lwYW50cyhyb29tSWQpO1xyXG4gICAgICAgICAgdGhpcy5HZXRQYXJ0aWNpcGFudHMocm9vbUlkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgocmVzKSA9PiBjb25zb2xlLmVycm9yKHJlcykpO1xyXG4gICAgfSxcclxuICAgIENsb3NlVG9IdWI6ZnVuY3Rpb24oKXtcclxuICAgICAgY2hhdE1lc3NhZ2VTZXJ2aWNlLkNsb3NlKCk7XHJcbiAgICB9LFxyXG4gICAgR2V0Q291bnRPbmxpbmVQYXJ0aWNpcGFudHM6IGZ1bmN0aW9uKHJvb21JZDogc3RyaW5nKXtcclxuICAgICAgY2hhdE1lc3NhZ2VTZXJ2aWNlLkdldFBhcnRpY3BhbnRzT25saW5lKHJvb21JZClcclxuICAgICAgICAudGhlbigocmVzOmFueSkgPT4gdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBhcnRpY2lwYW50c09ubGluZTogcmVzLmRhdGFcclxuICAgICAgICB9KSlcclxuICAgICAgICAuY2F0Y2goKHJlcykgPT4gY29uc29sZS5lcnJvcihyZXMpKTtcclxuICAgIH0sXHJcbiAgICBHZXRQYXJ0aWNpcGFudHM6ZnVuY3Rpb24ocm9vbUlkOiBzdHJpbmcpe1xyXG4gICAgICBjaGF0TWVzc2FnZVNlcnZpY2UuR2V0UGFydGljaXBhbnRzKHJvb21JZClcclxuICAgICAgICAudGhlbigocmVzOmFueSkgPT4gdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHRvdGFsUGFydGljaXBhbnRzOiByZXMuZGF0YS5sZW5ndGgsXHJcbiAgICAgICAgICBwYXJ0aWNpcGFudHM6IHJlcy5kYXRhIGFzIEFycmF5PFBhcnRpY2lwYW50PlxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC5jYXRjaCgocmVzKSA9PiBjb25zb2xlLmVycm9yKHJlcykpO1xyXG4gICAgfSxcclxuICAgIEdldEZ1bGxNZXNzYWdlczogZnVuY3Rpb24ocm9vbUlkOiBzdHJpbmcpe1xyXG4gICAgICBjaGF0TWVzc2FnZVNlcnZpY2UuR2V0TWVzc2FnZXMocm9vbUlkKVxyXG4gICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4gdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIG1lc3NhZ2VzOiByZXMuZGF0YSBhcyBBcnJheTxMZWFybmluZ1Jvb21NZXNzYWdlTW9kZWw+LFxyXG4gICAgICAgICAgYm90dG9tOiBcInNjcm9sbEJvdHRvbVwiXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLmNhdGNoKChyZXMpID0+IGNvbnNvbGUuZXJyb3IocmVzKSk7XHJcbiAgICB9LFxyXG4gICAgU2VuZE1lc3NhZ2U6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNoYXRNZXNzYWdlU2VydmljZS5TZW5kKHRoaXMucHJvcGVydGllcy5tZXNzYWdlSW5wdXQpOyAgICAgIFxyXG4gICAgfSxcclxuICAgIGdldEV2ZW50Q2hhbm5lbCgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRPcGVuZXJFdmVudENoYW5uZWwoKTtcclxuICAgIH0sXHJcbiAgICBiaW5kTWVzc2FnZUlucHV0OiBmdW5jdGlvbihlKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBtZXNzYWdlSW5wdXQ6IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==