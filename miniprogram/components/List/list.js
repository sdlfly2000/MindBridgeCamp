"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
var listService_1 = require("./listService");
var app = getApp();
Component({
    data: {
        Invitations: [],
        isLoginTokenValid: false
    },
    pageLifetimes: {
        show: function () {
            var _this = this;
            util_1.IsLoginTokenValid(app)
                .then(function (res) {
                console.debug(res);
                _this.setData({
                    isLoginTokenValid: true
                });
            })
                .catch(function (res) {
                console.debug(res);
                _this.setData({
                    isLoginTokenValid: false
                });
            });
        }
    },
    observers: {
        'isLoginTokenValid': function (isLoginTokenValid) {
            var _this = this;
            if (!isLoginTokenValid) {
                util_1.Login(app).then(function (res) {
                    console.debug(res);
                    _this.setData({
                        isLoginTokenValid: true
                    });
                });
            }
            else {
                var pageName = this.GetCurrentPageName();
                if (pageName == "main") {
                    listService_1.listService.GetRoomsParticipated().then(function (res) {
                        _this.setData({
                            Invitations: res.data
                        });
                    }).catch(function (res) { return console.error(res); });
                }
                else if (pageName == "hall") {
                    listService_1.listService.GetAvailableRooms().then(function (res) {
                        _this.setData({
                            Invitations: res.data
                        });
                    });
                }
            }
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
        SignInInvitation: function (e) {
            var _this = this;
            var roomId = e.currentTarget.dataset.roomid;
            listService_1.listService.SignInRoom(roomId)
                .then(function () {
                var invitations = _this.data.Invitations;
                var invitationIndex = invitations.findIndex(function (i) { return i.RoomId == roomId; });
                invitations[invitationIndex].IsSignIn = true;
                _this.setData({
                    Invitations: invitations
                });
            })
                .catch(function (res) { return console.error(res.errMsg); });
        },
        GetCurrentPageName: function () {
            var pagesLength = getCurrentPages().length;
            var route = getCurrentPages()[pagesLength - 1].route;
            return route.split("/").pop();
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBNEQ7QUFDNUQsNkNBQTRDO0FBRTVDLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRTlCLFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILFdBQVcsRUFBRSxFQUFFO1FBQ2YsaUJBQWlCLEVBQUUsS0FBSztLQUN6QjtJQUNELGFBQWEsRUFBQztRQUNaLElBQUksRUFBRTtZQUFBLGlCQWFMO1lBWkMsd0JBQWlCLENBQUMsR0FBRyxDQUFDO2lCQUNyQixJQUFJLENBQUMsVUFBQyxHQUFHO2dCQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsaUJBQWlCLEVBQUUsSUFBSTtpQkFDeEIsQ0FBQyxDQUFBO1lBQUEsQ0FBQyxDQUFDO2lCQUNMLEtBQUssQ0FBQyxVQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxpQkFBaUIsRUFBRSxLQUFLO2lCQUN6QixDQUFDLENBQUE7WUFDSixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtJQUNELFNBQVMsRUFBQztRQUNSLG1CQUFtQixFQUFFLFVBQVMsaUJBQXlCO1lBQWxDLGlCQXlCcEI7WUF4QkMsSUFBRyxDQUFDLGlCQUFpQixFQUFDO2dCQUNwQixZQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkIsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxpQkFBaUIsRUFBRSxJQUFJO3FCQUN4QixDQUFDLENBQUE7Z0JBQUEsQ0FBQyxDQUFDLENBQUM7YUFDUjtpQkFBSTtnQkFDSCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDekMsSUFBRyxRQUFRLElBQUksTUFBTSxFQUFDO29CQUNwQix5QkFBVyxDQUFDLG9CQUFvQixFQUFFLENBQUMsSUFBSSxDQUNyQyxVQUFDLEdBQVE7d0JBQ1AsS0FBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUk7eUJBQ3hCLENBQUMsQ0FBQTtvQkFBQSxDQUFDLENBQ0osQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7aUJBQ3RDO3FCQUFLLElBQUcsUUFBUSxJQUFJLE1BQU0sRUFBQztvQkFDMUIseUJBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FDbEMsVUFBQyxHQUFRO3dCQUNQLEtBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsV0FBVyxFQUFFLEdBQUcsQ0FBQyxJQUFJO3lCQUN4QixDQUFDLENBQUE7b0JBQ0osQ0FBQyxDQUFDLENBQUM7aUJBQ0o7YUFDRjtRQUNILENBQUM7S0FDRjtJQUNELE9BQU8sRUFBQztRQUNOLGlCQUFpQixFQUFFLFVBQVMsQ0FBQztZQUMzQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDNUMsSUFBSSxTQUFTLEdBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUMsVUFBYyxJQUFLLE9BQUEsVUFBVSxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQTNCLENBQTJCLENBQUMsQ0FBQztZQUNoRyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSwrQ0FBK0M7Z0JBQ3BELE9BQU8sRUFBRSxVQUFTLEdBQUc7b0JBQ25CLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUE7Z0JBQzVFLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsY0FBYyxFQUFFLFVBQVMsQ0FBQztZQUFWLGlCQWFmO1lBWkMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzVDLHlCQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDL0IsVUFBQyxHQUFPO2dCQUNOLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLElBQUksV0FBVyxHQUFRLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUM3QyxJQUFJLGVBQWUsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBSyxJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxFQUE3QixDQUE2QixDQUFDLENBQUM7Z0JBQ3RGLFdBQVcsQ0FBQyxlQUFlLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsV0FBVyxFQUFFLFdBQVc7aUJBQ3pCLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQztRQUVELGdCQUFnQixFQUFFLFVBQVMsQ0FBQztZQUFWLGlCQWFqQjtZQVpDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUM1Qyx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7aUJBQzNCLElBQUksQ0FBQztnQkFDSixJQUFJLFdBQVcsR0FBTyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDNUMsSUFBSSxlQUFlLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUssSUFBSyxPQUFBLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFsQixDQUFrQixDQUFDLENBQUM7Z0JBQzNFLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUU3QyxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFdBQVcsRUFBRSxXQUFXO2lCQUN6QixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBRUQsa0JBQWtCO1lBQ2hCLElBQUksV0FBVyxHQUFHLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUMzQyxJQUFJLEtBQUssR0FBRyxlQUFlLEVBQUUsQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ25ELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQyxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0xvZ2luVG9rZW5WYWxpZCwgTG9naW4gfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbFwiO1xyXG5pbXBvcnQgeyBsaXN0U2VydmljZSB9IGZyb20gXCIuL2xpc3RTZXJ2aWNlXCI7XHJcblxyXG52YXIgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgZGF0YTp7XHJcbiAgICBJbnZpdGF0aW9uczogW10sXHJcbiAgICBpc0xvZ2luVG9rZW5WYWxpZDogZmFsc2VcclxuICB9LFxyXG4gIHBhZ2VMaWZldGltZXM6e1xyXG4gICAgc2hvdzogZnVuY3Rpb24oKXtcclxuICAgICAgSXNMb2dpblRva2VuVmFsaWQoYXBwKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhyZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpc0xvZ2luVG9rZW5WYWxpZDogdHJ1ZVxyXG4gICAgICAgIH0pfSlcclxuICAgICAgLmNhdGNoKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKHJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGlzTG9naW5Ub2tlblZhbGlkOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBvYnNlcnZlcnM6e1xyXG4gICAgJ2lzTG9naW5Ub2tlblZhbGlkJzogZnVuY3Rpb24oaXNMb2dpblRva2VuVmFsaWQ6Ym9vbGVhbil7XHJcbiAgICAgIGlmKCFpc0xvZ2luVG9rZW5WYWxpZCl7XHJcbiAgICAgICAgTG9naW4oYXBwKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZGVidWcocmVzKTtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIGlzTG9naW5Ub2tlblZhbGlkOiB0cnVlXHJcbiAgICAgICAgICB9KX0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBsZXQgcGFnZU5hbWUgPSB0aGlzLkdldEN1cnJlbnRQYWdlTmFtZSgpO1xyXG4gICAgICAgIGlmKHBhZ2VOYW1lID09IFwibWFpblwiKXtcclxuICAgICAgICAgIGxpc3RTZXJ2aWNlLkdldFJvb21zUGFydGljaXBhdGVkKCkudGhlbihcclxuICAgICAgICAgICAgKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIEludml0YXRpb25zOiByZXMuZGF0YVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICkuY2F0Y2goKHJlcykgPT4gY29uc29sZS5lcnJvcihyZXMpKTtcclxuICAgICAgICB9ZWxzZSBpZihwYWdlTmFtZSA9PSBcImhhbGxcIil7XHJcbiAgICAgICAgICBsaXN0U2VydmljZS5HZXRBdmFpbGFibGVSb29tcygpLnRoZW4oXHJcbiAgICAgICAgICAgIChyZXM6IGFueSkgPT4geyAgICAgICAgICBcclxuICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgSW52aXRhdGlvbnM6IHJlcy5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6e1xyXG4gICAgTmF2aWdhdGVUb0RldGFpbHM6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICBsZXQgcm9vbUlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucm9vbWlkO1xyXG4gICAgICBsZXQgcm9vbU1vZGVsOmFueSA9IHRoaXMuZGF0YS5JbnZpdGF0aW9ucy5maW5kKChpbnZpdGF0aW9uOmFueSkgPT4gaW52aXRhdGlvbi5Sb29tSWQgPT0gcm9vbUlkKTtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiBcIi9jb21wb25lbnRzL0ludml0YXRpb25EZXRhaWwvaW52aXRhdGlvbkRldGFpbFwiLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICByZXMuZXZlbnRDaGFubmVsLmVtaXQoXCJJbnZpdGF0aW9uRGV0YWlsUm9vbU1vZGVsXCIsIHtSb29tTW9kZWw6IHJvb21Nb2RlbH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgSm9pbkludml0YXRpb246IGZ1bmN0aW9uKGUpe1xyXG4gICAgICBsZXQgcm9vbUlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucm9vbWlkO1xyXG4gICAgICBsaXN0U2VydmljZS5Kb2luUm9vbShyb29tSWQpLnRoZW4oXHJcbiAgICAgICAgKHJlczphbnkpID0+IHtcclxuICAgICAgICAgIGxldCBpbnZpdGF0aW9uID0gcmVzLmRhdGFbMF07XHJcbiAgICAgICAgICBsZXQgaW52aXRhdGlvbnM6IGFueSA9IHRoaXMuZGF0YS5JbnZpdGF0aW9ucztcclxuICAgICAgICAgIGxldCBpbnZpdGF0aW9uSW5kZXggPSBpbnZpdGF0aW9ucy5maW5kSW5kZXgoKGk6YW55KSA9PiBpLlJvb21JZCA9PSBpbnZpdGF0aW9uLlJvb21JZCk7XHJcbiAgICAgICAgICBpbnZpdGF0aW9uc1tpbnZpdGF0aW9uSW5kZXhdID0gaW52aXRhdGlvbjtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIEludml0YXRpb25zOiBpbnZpdGF0aW9uc1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBTaWduSW5JbnZpdGF0aW9uOiBmdW5jdGlvbihlKXtcclxuICAgICAgbGV0IHJvb21JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvb21pZDtcclxuICAgICAgbGlzdFNlcnZpY2UuU2lnbkluUm9vbShyb29tSWQpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IGludml0YXRpb25zOmFueSA9IHRoaXMuZGF0YS5JbnZpdGF0aW9ucztcclxuICAgICAgICAgIGxldCBpbnZpdGF0aW9uSW5kZXggPSBpbnZpdGF0aW9ucy5maW5kSW5kZXgoKGk6YW55KSA9PiBpLlJvb21JZCA9PSByb29tSWQpO1xyXG4gICAgICAgICAgaW52aXRhdGlvbnNbaW52aXRhdGlvbkluZGV4XS5Jc1NpZ25JbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgSW52aXRhdGlvbnM6IGludml0YXRpb25zXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgocmVzKSA9PiBjb25zb2xlLmVycm9yKHJlcy5lcnJNc2cpKTtcclxuICAgIH0sXHJcblxyXG4gICAgR2V0Q3VycmVudFBhZ2VOYW1lKCl7XHJcbiAgICAgIGxldCBwYWdlc0xlbmd0aCA9IGdldEN1cnJlbnRQYWdlcygpLmxlbmd0aDtcclxuICAgICAgbGV0IHJvdXRlID0gZ2V0Q3VycmVudFBhZ2VzKClbcGFnZXNMZW5ndGgtMV0ucm91dGU7XHJcbiAgICAgIHJldHVybiByb3V0ZS5zcGxpdChcIi9cIikucG9wKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==