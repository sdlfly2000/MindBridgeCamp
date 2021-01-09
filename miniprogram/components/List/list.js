"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listService_1 = require("./listService");
Component({
    data: {
        Invitations: [],
        IsShowInvitationDetail: false,
        InvitationShown: {},
        ParticipantsShown: []
    },
    pageLifetimes: {
        show: function () {
            var _this = this;
            listService_1.listService.GetAvailableRooms().then(function (res) {
                _this.setData({
                    Invitations: res.data
                });
            });
        }
    },
    methods: {
        NavigateToDetails: function (e) {
            var roomId = e.currentTarget.dataset.roomid;
            var roomModel = this.data.Invitations.find(function (invitation) { return invitation.RoomId == roomId; });
            wx.navigateTo({
                url: "/components/InvitationDetail/invitationDetail",
                success: function (res) {
                    res.eventChannel.emit("InvitationDetailRoomModel", { RoomModel: roomModel });
                }
            });
        },
        OpenInvitationDetail: function (e) {
            var _this = this;
            var roomId = e.currentTarget.dataset.roomid;
            var roomModel = this.data.Invitations.find(function (invitation) { return invitation.RoomId == roomId; });
            this.setData({
                IsShowInvitationDetail: true,
                InvitationShown: roomModel
            });
            listService_1.listService.GetCreatorInfo(roomModel.CreatedBy).then(function (res) {
                var invitationShown = _this.data.InvitationShown;
                invitationShown.Created = res.data.Name;
                _this.setData({
                    InvitationShown: invitationShown
                });
            });
            listService_1.listService.GetParticipants(roomId)
                .then(function (res) { return _this.setData({
                ParticipantsShown: res.data
            }); })
                .catch(function (err) { return console.info(err); });
        },
        JoinInvitation: function (e) {
            var _this = this;
            var roomId = e.currentTarget.dataset.roomid;
            listService_1.listService.JoinRoom(roomId).then(function (res) {
                var invitation = res.data[0];
                var invitations = _this.data.Invitations;
                var invitationIndex = invitations.findIndex(function (i) { return i.RoomId == invitation.RoomId; });
                invitations[invitationIndex] = invitation;
                _this.setData({
                    Invitations: invitations
                });
            });
        },
        CloseInvitationDetail: function () {
            this.setData({
                IsShowInvitationDetail: false
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNEM7QUFFNUMsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFDO1FBQ0gsV0FBVyxFQUFFLEVBQUU7UUFDZixzQkFBc0IsRUFBRSxLQUFLO1FBQzdCLGVBQWUsRUFBRSxFQUFFO1FBQ25CLGlCQUFpQixFQUFFLEVBQUU7S0FDdEI7SUFDRCxhQUFhLEVBQUM7UUFDWixJQUFJLEVBQUU7WUFBQSxpQkFPTDtZQU5DLHlCQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQ2xDLFVBQUMsR0FBUTtnQkFDUCxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFdBQVcsRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDeEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7SUFDRCxPQUFPLEVBQUM7UUFDTixpQkFBaUIsRUFBRSxVQUFTLENBQUM7WUFDM0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzVDLElBQUksU0FBUyxHQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFDLFVBQWMsSUFBSyxPQUFBLFVBQVUsQ0FBQyxNQUFNLElBQUksTUFBTSxFQUEzQixDQUEyQixDQUFDLENBQUM7WUFFaEcsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsK0NBQStDO2dCQUNwRCxPQUFPLEVBQUUsVUFBUyxHQUFHO29CQUNuQixHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFBO2dCQUM1RSxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELG9CQUFvQixFQUFFLFVBQVMsQ0FBQztZQUFWLGlCQXFCckI7WUFwQkMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzVDLElBQUksU0FBUyxHQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFDLFVBQWMsSUFBSyxPQUFBLFVBQVUsQ0FBQyxNQUFNLElBQUksTUFBTSxFQUEzQixDQUEyQixDQUFDLENBQUM7WUFDaEcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxzQkFBc0IsRUFBRSxJQUFJO2dCQUM1QixlQUFlLEVBQUUsU0FBUzthQUMzQixDQUFDLENBQUM7WUFDSCx5QkFBVyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUNsRCxVQUFDLEdBQVE7Z0JBQ1AsSUFBSSxlQUFlLEdBQVEsS0FBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7Z0JBQ3JELGVBQWUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3hDLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsZUFBZSxFQUFFLGVBQWU7aUJBQ2pDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FDRixDQUFDO1lBQ0YseUJBQVcsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO2lCQUNoQyxJQUFJLENBQUMsVUFBQyxHQUFPLElBQUssT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUM5QixpQkFBaUIsRUFBRSxHQUFHLENBQUMsSUFBSTthQUM1QixDQUFDLEVBRmlCLENBRWpCLENBQUM7aUJBQ0YsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxjQUFjLEVBQUUsVUFBUyxDQUFDO1lBQVYsaUJBYWY7WUFaQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDNUMseUJBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUMvQixVQUFDLEdBQU87Z0JBQ04sSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxXQUFXLEdBQVEsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzdDLElBQUksZUFBZSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFLLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQTdCLENBQTZCLENBQUMsQ0FBQztnQkFDdEYsV0FBVyxDQUFDLGVBQWUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDMUMsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxXQUFXLEVBQUUsV0FBVztpQkFDekIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUNGLENBQUM7UUFDSixDQUFDO1FBQ0QscUJBQXFCLEVBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxzQkFBc0IsRUFBRSxLQUFLO2FBQzlCLENBQUMsQ0FBQztRQUNMLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4vbGlzdFNlcnZpY2VcIjtcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgZGF0YTp7XHJcbiAgICBJbnZpdGF0aW9uczogW10sXHJcbiAgICBJc1Nob3dJbnZpdGF0aW9uRGV0YWlsOiBmYWxzZSxcclxuICAgIEludml0YXRpb25TaG93bjoge30sXHJcbiAgICBQYXJ0aWNpcGFudHNTaG93bjogW11cclxuICB9LFxyXG4gIHBhZ2VMaWZldGltZXM6e1xyXG4gICAgc2hvdzogZnVuY3Rpb24oKXtcclxuICAgICAgbGlzdFNlcnZpY2UuR2V0QXZhaWxhYmxlUm9vbXMoKS50aGVuKFxyXG4gICAgICAgIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgSW52aXRhdGlvbnM6IHJlcy5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIE5hdmlnYXRlVG9EZXRhaWxzOiBmdW5jdGlvbihlKXtcclxuICAgICAgbGV0IHJvb21JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvb21pZDtcclxuICAgICAgbGV0IHJvb21Nb2RlbDphbnkgPSB0aGlzLmRhdGEuSW52aXRhdGlvbnMuZmluZCgoaW52aXRhdGlvbjphbnkpID0+IGludml0YXRpb24uUm9vbUlkID09IHJvb21JZCk7XHJcblxyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IFwiL2NvbXBvbmVudHMvSW52aXRhdGlvbkRldGFpbC9pbnZpdGF0aW9uRGV0YWlsXCIsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgIHJlcy5ldmVudENoYW5uZWwuZW1pdChcIkludml0YXRpb25EZXRhaWxSb29tTW9kZWxcIiwge1Jvb21Nb2RlbDogcm9vbU1vZGVsfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBPcGVuSW52aXRhdGlvbkRldGFpbDogZnVuY3Rpb24oZSl7XHJcbiAgICAgIGxldCByb29tSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yb29taWQ7XHJcbiAgICAgIGxldCByb29tTW9kZWw6YW55ID0gdGhpcy5kYXRhLkludml0YXRpb25zLmZpbmQoKGludml0YXRpb246YW55KSA9PiBpbnZpdGF0aW9uLlJvb21JZCA9PSByb29tSWQpO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIElzU2hvd0ludml0YXRpb25EZXRhaWw6IHRydWUsXHJcbiAgICAgICAgSW52aXRhdGlvblNob3duOiByb29tTW9kZWxcclxuICAgICAgfSk7XHJcbiAgICAgIGxpc3RTZXJ2aWNlLkdldENyZWF0b3JJbmZvKHJvb21Nb2RlbC5DcmVhdGVkQnkpLnRoZW4oXHJcbiAgICAgICAgKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICBsZXQgaW52aXRhdGlvblNob3duOiBhbnkgPSB0aGlzLmRhdGEuSW52aXRhdGlvblNob3duO1xyXG4gICAgICAgICAgaW52aXRhdGlvblNob3duLkNyZWF0ZWQgPSByZXMuZGF0YS5OYW1lO1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgSW52aXRhdGlvblNob3duOiBpbnZpdGF0aW9uU2hvd25cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgbGlzdFNlcnZpY2UuR2V0UGFydGljaXBhbnRzKHJvb21JZClcclxuICAgICAgICAudGhlbigocmVzOmFueSkgPT4gdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFBhcnRpY2lwYW50c1Nob3duOiByZXMuZGF0YVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmluZm8oZXJyKSk7XHJcbiAgICB9LFxyXG4gICAgSm9pbkludml0YXRpb246IGZ1bmN0aW9uKGUpe1xyXG4gICAgICBsZXQgcm9vbUlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucm9vbWlkO1xyXG4gICAgICBsaXN0U2VydmljZS5Kb2luUm9vbShyb29tSWQpLnRoZW4oXHJcbiAgICAgICAgKHJlczphbnkpID0+IHtcclxuICAgICAgICAgIGxldCBpbnZpdGF0aW9uID0gcmVzLmRhdGFbMF07XHJcbiAgICAgICAgICBsZXQgaW52aXRhdGlvbnM6IGFueSA9IHRoaXMuZGF0YS5JbnZpdGF0aW9ucztcclxuICAgICAgICAgIHZhciBpbnZpdGF0aW9uSW5kZXggPSBpbnZpdGF0aW9ucy5maW5kSW5kZXgoKGk6YW55KSA9PiBpLlJvb21JZCA9PSBpbnZpdGF0aW9uLlJvb21JZCk7XHJcbiAgICAgICAgICBpbnZpdGF0aW9uc1tpbnZpdGF0aW9uSW5kZXhdID0gaW52aXRhdGlvbjtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIEludml0YXRpb25zOiBpbnZpdGF0aW9uc1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIENsb3NlSW52aXRhdGlvbkRldGFpbDpmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIElzU2hvd0ludml0YXRpb25EZXRhaWw6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=