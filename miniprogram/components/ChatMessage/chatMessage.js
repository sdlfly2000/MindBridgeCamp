"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chatMessageService_1 = require("./chatMessageService");
Component({
    data: {
        roomId: "",
        participantsOnline: 0,
        totalParticipants: 0,
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
                totalParticipants: res.data.length
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0TWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUFvRjtBQUVwRixTQUFTLENBQUM7SUFDUixJQUFJLEVBQUM7UUFDSCxNQUFNLEVBQUUsRUFBRTtRQUNWLGtCQUFrQixFQUFFLENBQUM7UUFDckIsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQixRQUFRLEVBQUUsSUFBSSxLQUFLLEVBQTRCO1FBQy9DLFlBQVksRUFBQyxFQUFFO1FBQ2YsTUFBTSxFQUFDLEVBQUU7S0FDVjtJQUNELFNBQVMsRUFBQztRQUNSLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztZQUNkLElBQUksWUFBWSxHQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMzQyxZQUFZLENBQUMsRUFBRSxDQUFDLHNCQUFzQixFQUFFLFVBQVMsSUFBUTtnQkFDdkQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDL0IsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU07aUJBQ3pCLENBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUM7S0FDRjtJQUNELE9BQU8sRUFBQztRQUNOLFlBQVksRUFBQyxVQUFTLE1BQWE7WUFBdEIsaUJBbUJaO1lBbEJDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztZQUNkLHVDQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQUMsS0FBSztvQkFDM0QsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7b0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25CLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0JBQ1QsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFlBQVksRUFBRSxFQUFFO3dCQUNoQixNQUFNLEVBQUUsRUFBRTtxQkFDWCxDQUFDLENBQUM7b0JBQ0gsRUFBRSxDQUFDLE9BQU8sQ0FBQzt3QkFDVCxNQUFNLEVBQUUsY0FBYztxQkFDdkIsQ0FBQyxDQUFDO2dCQUNMLENBQUMsRUFBQyxDQUFDO2lCQUNBLElBQUksQ0FBQztnQkFDSixLQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsVUFBVSxFQUFDO1lBQ1QsdUNBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IsQ0FBQztRQUNELDBCQUEwQixFQUFFLFVBQVMsTUFBYztZQUF2QixpQkFNM0I7WUFMQyx1Q0FBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7aUJBQzVDLElBQUksQ0FBQyxVQUFDLEdBQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzlCLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxJQUFJO2FBQzdCLENBQUMsRUFGaUIsQ0FFakIsQ0FBQztpQkFDRixLQUFLLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNELGVBQWUsRUFBQyxVQUFTLE1BQWM7WUFBdkIsaUJBTWY7WUFMQyx1Q0FBa0IsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO2lCQUN2QyxJQUFJLENBQUMsVUFBQyxHQUFPLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUM5QixpQkFBaUIsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07YUFDbkMsQ0FBQyxFQUZpQixDQUVqQixDQUFDO2lCQUNGLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0QsZUFBZSxFQUFFLFVBQVMsTUFBYztZQUF2QixpQkFPaEI7WUFOQyx1Q0FBa0IsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO2lCQUNuQyxJQUFJLENBQUMsVUFBQyxHQUFRLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUMvQixRQUFRLEVBQUUsR0FBRyxDQUFDLElBQXVDO2dCQUNyRCxNQUFNLEVBQUUsY0FBYzthQUN2QixDQUFDLEVBSGtCLENBR2xCLENBQUM7aUJBQ0YsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxXQUFXLEVBQUU7WUFDWCx1Q0FBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBQ0QsZUFBZTtZQUNiLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDdEMsQ0FBQztRQUNELGdCQUFnQixFQUFFLFVBQVMsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFlBQVksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7YUFDN0IsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hhdE1lc3NhZ2VTZXJ2aWNlLCBMZWFybmluZ1Jvb21NZXNzYWdlTW9kZWwgfSBmcm9tIFwiLi9jaGF0TWVzc2FnZVNlcnZpY2VcIjtcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgZGF0YTp7XHJcbiAgICByb29tSWQ6IFwiXCIsXHJcbiAgICBwYXJ0aWNpcGFudHNPbmxpbmU6IDAsXHJcbiAgICB0b3RhbFBhcnRpY2lwYW50czogMCxcclxuICAgIG1lc3NhZ2VzOiBuZXcgQXJyYXk8TGVhcm5pbmdSb29tTWVzc2FnZU1vZGVsPigpLFxyXG4gICAgbWVzc2FnZUlucHV0OlwiXCIsXHJcbiAgICBib3R0b206XCJcIlxyXG4gIH0sXHJcbiAgbGlmZXRpbWVzOnsgICAgXHJcbiAgICByZWFkeTogZnVuY3Rpb24oKXtcclxuICAgICAgbGV0IHZtID0gdGhpcztcclxuICAgICAgbGV0IGV2ZW50Q2hhbm5lbCAgPSB0aGlzLmdldEV2ZW50Q2hhbm5lbCgpO1xyXG4gICAgICBldmVudENoYW5uZWwub24oXCJDaGF0TWVzc2FnZVJvb21Nb2RlbFwiLCBmdW5jdGlvbihkYXRhOmFueSl7XHJcbiAgICAgICAgbGV0IHJvb21Nb2RlbCA9IGRhdGEuUm9vbU1vZGVsO1xyXG4gICAgICAgIHZtLnNldERhdGEoe1xyXG4gICAgICAgICAgcm9vbUlkOiByb29tTW9kZWwuUm9vbUlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdm0uQ29ubmVjdFRvSHViKHJvb21Nb2RlbC5Sb29tSWQpO1xyXG4gICAgICAgIHZtLkdldEZ1bGxNZXNzYWdlcyhyb29tTW9kZWwuUm9vbUlkKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuQ2xvc2VUb0h1YigpO1xyXG4gICAgfSAgICBcclxuICB9LFxyXG4gIG1ldGhvZHM6e1xyXG4gICAgQ29ubmVjdFRvSHViOmZ1bmN0aW9uKHJvb21JZDpzdHJpbmcpe1xyXG4gICAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgICBjaGF0TWVzc2FnZVNlcnZpY2UuQ29ubmVjdCh7cm9vbUlkOiByb29tSWQsIG9uTWVzc2FnZTogKG1vZGVsKSA9PiB7ICAgICAgXHJcbiAgICAgICAgbGV0IG1vZGVscyA9IHZtLmRhdGEubWVzc2FnZXM7XHJcbiAgICAgICAgbW9kZWxzLnB1c2gobW9kZWwpO1xyXG4gICAgICAgIHZtLnNldERhdGEoe1xyXG4gICAgICAgICAgbWVzc2FnZXM6IG1vZGVscyxcclxuICAgICAgICAgIG1lc3NhZ2VJbnB1dDogXCJcIixcclxuICAgICAgICAgIGJvdHRvbTogXCJcIlxyXG4gICAgICAgIH0pOyAgIFxyXG4gICAgICAgIHZtLnNldERhdGEoe1xyXG4gICAgICAgICAgYm90dG9tOiBcInNjcm9sbEJvdHRvbVwiXHJcbiAgICAgICAgfSk7ICAgICAgXHJcbiAgICAgIH19KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuR2V0Q291bnRPbmxpbmVQYXJ0aWNpcGFudHMocm9vbUlkKTtcclxuICAgICAgICAgIHRoaXMuR2V0UGFydGljaXBhbnRzKHJvb21JZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKHJlcykgPT4gY29uc29sZS5lcnJvcihyZXMpKTtcclxuICAgIH0sXHJcbiAgICBDbG9zZVRvSHViOmZ1bmN0aW9uKCl7XHJcbiAgICAgIGNoYXRNZXNzYWdlU2VydmljZS5DbG9zZSgpO1xyXG4gICAgfSxcclxuICAgIEdldENvdW50T25saW5lUGFydGljaXBhbnRzOiBmdW5jdGlvbihyb29tSWQ6IHN0cmluZyl7XHJcbiAgICAgIGNoYXRNZXNzYWdlU2VydmljZS5HZXRQYXJ0aWNwYW50c09ubGluZShyb29tSWQpXHJcbiAgICAgICAgLnRoZW4oKHJlczphbnkpID0+IHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwYXJ0aWNpcGFudHNPbmxpbmU6IHJlcy5kYXRhXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLmNhdGNoKChyZXMpID0+IGNvbnNvbGUuZXJyb3IocmVzKSk7XHJcbiAgICB9LFxyXG4gICAgR2V0UGFydGljaXBhbnRzOmZ1bmN0aW9uKHJvb21JZDogc3RyaW5nKXtcclxuICAgICAgY2hhdE1lc3NhZ2VTZXJ2aWNlLkdldFBhcnRpY2lwYW50cyhyb29tSWQpXHJcbiAgICAgICAgLnRoZW4oKHJlczphbnkpID0+IHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB0b3RhbFBhcnRpY2lwYW50czogcmVzLmRhdGEubGVuZ3RoXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLmNhdGNoKChyZXMpID0+IGNvbnNvbGUuZXJyb3IocmVzKSk7XHJcbiAgICB9LFxyXG4gICAgR2V0RnVsbE1lc3NhZ2VzOiBmdW5jdGlvbihyb29tSWQ6IHN0cmluZyl7XHJcbiAgICAgIGNoYXRNZXNzYWdlU2VydmljZS5HZXRNZXNzYWdlcyhyb29tSWQpXHJcbiAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbWVzc2FnZXM6IHJlcy5kYXRhIGFzIEFycmF5PExlYXJuaW5nUm9vbU1lc3NhZ2VNb2RlbD4sXHJcbiAgICAgICAgICBib3R0b206IFwic2Nyb2xsQm90dG9tXCJcclxuICAgICAgICB9KSlcclxuICAgICAgICAuY2F0Y2goKHJlcykgPT4gY29uc29sZS5lcnJvcihyZXMpKTtcclxuICAgIH0sXHJcbiAgICBTZW5kTWVzc2FnZTogZnVuY3Rpb24oKXtcclxuICAgICAgY2hhdE1lc3NhZ2VTZXJ2aWNlLlNlbmQodGhpcy5wcm9wZXJ0aWVzLm1lc3NhZ2VJbnB1dCk7ICAgICAgXHJcbiAgICB9LFxyXG4gICAgZ2V0RXZlbnRDaGFubmVsKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldE9wZW5lckV2ZW50Q2hhbm5lbCgpO1xyXG4gICAgfSxcclxuICAgIGJpbmRNZXNzYWdlSW5wdXQ6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIG1lc3NhZ2VJbnB1dDogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pIl19