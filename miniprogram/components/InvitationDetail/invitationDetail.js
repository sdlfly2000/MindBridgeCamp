"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invitationDetailService_1 = require("./invitationDetailService");
Component({
    data: {
        InvitationShown: {},
        ParticipantsShown: []
    },
    lifetimes: {
        ready: function () {
            var vm = this;
            var eventChannel = this.getEventChannel();
            eventChannel.on("InvitationDetailRoomModel", function (data) {
                var roomModel = data.RoomModel;
                invitationDetailService_1.invitationDetailService.GetCreatorInfo(roomModel.CreatedBy).then(function (res) {
                    var invitationShown = roomModel;
                    invitationShown.Created = res.data.Name;
                    vm.setData({
                        InvitationShown: invitationShown
                    });
                }).catch(function (e) { return console.error(e); });
                invitationDetailService_1.invitationDetailService.GetParticipants(roomModel.RoomId)
                    .then(function (res) {
                    var participants = res.data;
                    participants.forEach(function (p) {
                        if (p.Gender == 0) {
                            p.GenderClass = "participant-boy";
                        }
                        else {
                            p.GenderClass = "participant-girl";
                        }
                    });
                    vm.setData({
                        ParticipantsShown: participants
                    });
                }).catch(function (err) { return console.error(err); });
            });
        }
    },
    methods: {
        JoinInvitation: function (e) {
            var roomId = e.currentTarget.dataset.roomid;
            invitationDetailService_1.invitationDetailService.JoinRoom(roomId).then(function () {
                wx.navigateBack();
            });
        },
        CloseInvitationDetail: function () {
            wx.navigateBack();
        },
        getEventChannel: function () {
            return this.getOpenerEventChannel();
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRhdGlvbkRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludml0YXRpb25EZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxRUFBb0U7QUFFcEUsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFDO1FBQ0gsZUFBZSxFQUFFLEVBQUU7UUFDbkIsaUJBQWlCLEVBQUUsRUFBRTtLQUN0QjtJQUNELFNBQVMsRUFBQztRQUNSLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztZQUNkLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM1QyxZQUFZLENBQUMsRUFBRSxDQUFDLDJCQUEyQixFQUFFLFVBQVMsSUFBUTtnQkFDNUQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDL0IsaURBQXVCLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQzlELFVBQUMsR0FBTztvQkFDTixJQUFJLGVBQWUsR0FBUSxTQUFTLENBQUM7b0JBQ3JDLGVBQWUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ3hDLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0JBQ1QsZUFBZSxFQUFFLGVBQWU7cUJBQ2pDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQ0YsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7Z0JBQ2pDLGlEQUF1QixDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO3FCQUN4RCxJQUFJLENBQ0gsVUFBQyxHQUFPO29CQUNOLElBQUksWUFBWSxHQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0JBQy9CLFlBQVksQ0FBQyxPQUFPLENBQ2xCLFVBQUMsQ0FBSzt3QkFDSixJQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDOzRCQUNmLENBQUMsQ0FBQyxXQUFXLEdBQUMsaUJBQWlCLENBQUM7eUJBQ2pDOzZCQUFJOzRCQUNILENBQUMsQ0FBQyxXQUFXLEdBQUMsa0JBQWtCLENBQUM7eUJBQ2xDO29CQUNMLENBQUMsQ0FBQyxDQUFDO29CQUNILEVBQUUsQ0FBQyxPQUFPLENBQUM7d0JBQ1QsaUJBQWlCLEVBQUUsWUFBWTtxQkFDaEMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FDRixDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FDRjtJQUNELE9BQU8sRUFBQztRQUNOLGNBQWMsRUFBRSxVQUFTLENBQUM7WUFDeEIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzVDLGlEQUF1QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzNDO2dCQUNFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUM7UUFDRCxxQkFBcUIsRUFBQztZQUNwQixFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELGVBQWU7WUFDYixPQUFPLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3RDLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGludml0YXRpb25EZXRhaWxTZXJ2aWNlIH0gZnJvbSBcIi4vaW52aXRhdGlvbkRldGFpbFNlcnZpY2VcIjtcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgZGF0YTp7XHJcbiAgICBJbnZpdGF0aW9uU2hvd246IHt9LFxyXG4gICAgUGFydGljaXBhbnRzU2hvd246IFtdXHJcbiAgfSxcclxuICBsaWZldGltZXM6e1xyXG4gICAgcmVhZHk6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCB2bSA9IHRoaXM7XHJcbiAgICAgIGNvbnN0IGV2ZW50Q2hhbm5lbCA9IHRoaXMuZ2V0RXZlbnRDaGFubmVsKCk7XHJcbiAgICAgIGV2ZW50Q2hhbm5lbC5vbihcIkludml0YXRpb25EZXRhaWxSb29tTW9kZWxcIiwgZnVuY3Rpb24oZGF0YTphbnkpe1xyXG4gICAgICAgIGxldCByb29tTW9kZWwgPSBkYXRhLlJvb21Nb2RlbDtcclxuICAgICAgICBpbnZpdGF0aW9uRGV0YWlsU2VydmljZS5HZXRDcmVhdG9ySW5mbyhyb29tTW9kZWwuQ3JlYXRlZEJ5KS50aGVuKFxyXG4gICAgICAgICAgKHJlczphbnkpID0+eyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBpbnZpdGF0aW9uU2hvd246IGFueSA9IHJvb21Nb2RlbDtcclxuICAgICAgICAgICAgaW52aXRhdGlvblNob3duLkNyZWF0ZWQgPSByZXMuZGF0YS5OYW1lO1xyXG4gICAgICAgICAgICB2bS5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBJbnZpdGF0aW9uU2hvd246IGludml0YXRpb25TaG93blxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApLmNhdGNoKChlKSA9PiBjb25zb2xlLmVycm9yKGUpKTtcclxuICAgICAgICBpbnZpdGF0aW9uRGV0YWlsU2VydmljZS5HZXRQYXJ0aWNpcGFudHMocm9vbU1vZGVsLlJvb21JZClcclxuICAgICAgICAudGhlbihcclxuICAgICAgICAgIChyZXM6YW55KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYXJ0aWNpcGFudHM6W10gPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgcGFydGljaXBhbnRzLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgKHA6YW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihwLkdlbmRlciA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgcC5HZW5kZXJDbGFzcz1cInBhcnRpY2lwYW50LWJveVwiO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIHAuR2VuZGVyQ2xhc3M9XCJwYXJ0aWNpcGFudC1naXJsXCI7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdm0uc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgUGFydGljaXBhbnRzU2hvd246IHBhcnRpY2lwYW50c1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczp7XHJcbiAgICBKb2luSW52aXRhdGlvbjogZnVuY3Rpb24oZSl7XHJcbiAgICAgIGxldCByb29tSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yb29taWQ7XHJcbiAgICAgIGludml0YXRpb25EZXRhaWxTZXJ2aWNlLkpvaW5Sb29tKHJvb21JZCkudGhlbihcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgQ2xvc2VJbnZpdGF0aW9uRGV0YWlsOmZ1bmN0aW9uKCl7XHJcbiAgICAgIHd4Lm5hdmlnYXRlQmFjaygpO1xyXG4gICAgfSxcclxuICAgIGdldEV2ZW50Q2hhbm5lbCgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRPcGVuZXJFdmVudENoYW5uZWwoKTtcclxuICAgIH1cclxuICB9XHJcbn0pIl19