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
                            Invitations: _this.SetParticipatedRoomStatus(res.data)
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
        SetParticipatedRoomStatus: function (rooms) {
            var currentDateTime = new Date();
            rooms.forEach(function (room) {
                var startDate = new Date(room.StartDate);
                var endDate = new Date(room.EndDate);
                if (currentDateTime < startDate) {
                    room.Status = "NotStart";
                }
                else if (currentDateTime > startDate && currentDateTime < endDate) {
                    room.Status = "InProcess";
                }
                else {
                    room.Status = "Over";
                }
                ;
                room.Participated = true;
            });
            return rooms;
        },
        GetCurrentPageName: function () {
            var pagesLength = getCurrentPages().length;
            var route = getCurrentPages()[pagesLength - 1].route;
            return route.split("/").pop();
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBNEQ7QUFDNUQsNkNBQTRDO0FBRTVDLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRTlCLFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILFdBQVcsRUFBRSxFQUFFO1FBQ2YsaUJBQWlCLEVBQUUsS0FBSztLQUN6QjtJQUNELGFBQWEsRUFBQztRQUNaLElBQUksRUFBRTtZQUFBLGlCQWFMO1lBWkMsd0JBQWlCLENBQUMsR0FBRyxDQUFDO2lCQUNyQixJQUFJLENBQUMsVUFBQyxHQUFHO2dCQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsaUJBQWlCLEVBQUUsSUFBSTtpQkFDeEIsQ0FBQyxDQUFBO1lBQUEsQ0FBQyxDQUFDO2lCQUNMLEtBQUssQ0FBQyxVQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxpQkFBaUIsRUFBRSxLQUFLO2lCQUN6QixDQUFDLENBQUE7WUFDSixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtJQUNELFNBQVMsRUFBQztRQUNSLG1CQUFtQixFQUFFLFVBQVMsaUJBQXlCO1lBQWxDLGlCQXlCcEI7WUF4QkMsSUFBRyxDQUFDLGlCQUFpQixFQUFDO2dCQUNwQixZQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkIsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxpQkFBaUIsRUFBRSxJQUFJO3FCQUN4QixDQUFDLENBQUE7Z0JBQUEsQ0FBQyxDQUFDLENBQUM7YUFDUjtpQkFBSTtn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LFdBQVcsR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDbkQsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzTG9naW5Ub2tlblZhbGlkLCBMb2dpbiB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsXCI7XHJcbmltcG9ydCB7IGxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4vbGlzdFNlcnZpY2VcIjtcclxuXHJcbnZhciBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxyXG5cclxuQ29tcG9uZW50KHtcclxuICBkYXRhOntcclxuICAgIEludml0YXRpb25zOiBbXSxcclxuICAgIGlzTG9naW5Ub2tlblZhbGlkOiBmYWxzZVxyXG4gIH0sXHJcbiAgcGFnZUxpZmV0aW1lczp7XHJcbiAgICBzaG93OiBmdW5jdGlvbigpe1xyXG4gICAgICBJc0xvZ2luVG9rZW5WYWxpZChhcHApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKHJlcyk7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGlzTG9naW5Ub2tlblZhbGlkOiB0cnVlXHJcbiAgICAgICAgfSl9KVxyXG4gICAgICAuY2F0Y2goKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcocmVzKTtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgaXNMb2dpblRva2VuVmFsaWQ6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIG9ic2VydmVyczp7XHJcbiAgICAnaXNMb2dpblRva2VuVmFsaWQnOiBmdW5jdGlvbihpc0xvZ2luVG9rZW5WYWxpZDpib29sZWFuKXtcclxuICAgICAgaWYoIWlzTG9naW5Ub2tlblZhbGlkKXtcclxuICAgICAgICBMb2dpbihhcHApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhyZXMpO1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgaXNMb2dpblRva2VuVmFsaWQ6IHRydWVcclxuICAgICAgICAgIH0pfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGxldCBwYWdlTmFtZSA9IHRoaXMuR2V0Q3VycmVudFBhZ2VOYW1lKCk7XHJcbiAgICAgICAgaWYocGFnZU5hbWUgPT0gXCJtYWluXCIpe1xyXG4gICAgICAgICAgbGlzdFNlcnZpY2UuR2V0Um9vbXNQYXJ0aWNpcGF0ZWQoKS50aGVuKFxyXG4gICAgICAgICAgICAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgSW52aXRhdGlvbnM6IHRoaXMuU2V0UGFydGljaXBhdGVkUm9vbVN0YXR1cyhyZXMuZGF0YSlcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICApLmNhdGNoKChyZXMpID0+IGNvbnNvbGUuZXJyb3IocmVzKSk7XHJcbiAgICAgICAgfWVsc2UgaWYocGFnZU5hbWUgPT0gXCJoYWxsXCIpe1xyXG4gICAgICAgICAgbGlzdFNlcnZpY2UuR2V0QXZhaWxhYmxlUm9vbXMoKS50aGVuKFxyXG4gICAgICAgICAgICAocmVzOiBhbnkpID0+IHsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIEludml0YXRpb25zOiByZXMuZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIE5hdmlnYXRlVG9EZXRhaWxzOiBmdW5jdGlvbihlKXtcclxuICAgICAgbGV0IHJvb21JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvb21pZDtcclxuICAgICAgbGV0IHJvb21Nb2RlbDphbnkgPSB0aGlzLmRhdGEuSW52aXRhdGlvbnMuZmluZCgoaW52aXRhdGlvbjphbnkpID0+IGludml0YXRpb24uUm9vbUlkID09IHJvb21JZCk7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogXCIvY29tcG9uZW50cy9JbnZpdGF0aW9uRGV0YWlsL2ludml0YXRpb25EZXRhaWxcIixcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgcmVzLmV2ZW50Q2hhbm5lbC5lbWl0KFwiSW52aXRhdGlvbkRldGFpbFJvb21Nb2RlbFwiLCB7Um9vbU1vZGVsOiByb29tTW9kZWx9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIEpvaW5JbnZpdGF0aW9uOiBmdW5jdGlvbihlKXtcclxuICAgICAgbGV0IHJvb21JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvb21pZDtcclxuICAgICAgbGlzdFNlcnZpY2UuSm9pblJvb20ocm9vbUlkKS50aGVuKFxyXG4gICAgICAgIChyZXM6YW55KSA9PiB7XHJcbiAgICAgICAgICBsZXQgaW52aXRhdGlvbiA9IHJlcy5kYXRhWzBdO1xyXG4gICAgICAgICAgbGV0IGludml0YXRpb25zOiBhbnkgPSB0aGlzLmRhdGEuSW52aXRhdGlvbnM7XHJcbiAgICAgICAgICBsZXQgaW52aXRhdGlvbkluZGV4ID0gaW52aXRhdGlvbnMuZmluZEluZGV4KChpOmFueSkgPT4gaS5Sb29tSWQgPT0gaW52aXRhdGlvbi5Sb29tSWQpO1xyXG4gICAgICAgICAgaW52aXRhdGlvbnNbaW52aXRhdGlvbkluZGV4XSA9IGludml0YXRpb247XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBJbnZpdGF0aW9uczogaW52aXRhdGlvbnNcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgU2lnbkluSW52aXRhdGlvbjogZnVuY3Rpb24oZSl7XHJcbiAgICAgIGxldCByb29tSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yb29taWQ7XHJcbiAgICAgIGxpc3RTZXJ2aWNlLlNpZ25JblJvb20ocm9vbUlkKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGxldCBpbnZpdGF0aW9uczphbnkgPSB0aGlzLmRhdGEuSW52aXRhdGlvbnM7XHJcbiAgICAgICAgICBsZXQgaW52aXRhdGlvbkluZGV4ID0gaW52aXRhdGlvbnMuZmluZEluZGV4KChpOmFueSkgPT4gaS5Sb29tSWQgPT0gcm9vbUlkKTtcclxuICAgICAgICAgIGludml0YXRpb25zW2ludml0YXRpb25JbmRleF0uSXNTaWduSW4gPSB0cnVlO1xyXG5cclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIEludml0YXRpb25zOiBpbnZpdGF0aW9uc1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKHJlcykgPT4gY29uc29sZS5lcnJvcihyZXMuZXJyTXNnKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIFNldFBhcnRpY2lwYXRlZFJvb21TdGF0dXMocm9vbXM6IFtdKXtcclxuICAgICAgbGV0IGN1cnJlbnREYXRlVGltZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIHJvb21zLmZvckVhY2goKHJvb206YW55KSA9PntcclxuICAgICAgICBsZXQgc3RhcnREYXRlOkRhdGUgPSBuZXcgRGF0ZShyb29tLlN0YXJ0RGF0ZSk7XHJcbiAgICAgICAgbGV0IGVuZERhdGU6RGF0ZSA9IG5ldyBEYXRlKHJvb20uRW5kRGF0ZSk7XHJcbiAgICAgICAgaWYoY3VycmVudERhdGVUaW1lIDwgc3RhcnREYXRlKXtcclxuICAgICAgICAgIHJvb20uU3RhdHVzID0gXCJOb3RTdGFydFwiXHJcbiAgICAgICAgfWVsc2UgaWYoY3VycmVudERhdGVUaW1lID4gc3RhcnREYXRlICYmIGN1cnJlbnREYXRlVGltZSA8IGVuZERhdGUpe1xyXG4gICAgICAgICAgcm9vbS5TdGF0dXMgPSBcIkluUHJvY2Vzc1wiXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICByb29tLlN0YXR1cyA9IFwiT3ZlclwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICByb29tLlBhcnRpY2lwYXRlZCA9IHRydWU7ICAgICAgICBcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByb29tcztcclxuICAgIH0sXHJcblxyXG4gICAgR2V0Q3VycmVudFBhZ2VOYW1lKCl7XHJcbiAgICAgIGxldCBwYWdlc0xlbmd0aCA9IGdldEN1cnJlbnRQYWdlcygpLmxlbmd0aDtcclxuICAgICAgbGV0IHJvdXRlID0gZ2V0Q3VycmVudFBhZ2VzKClbcGFnZXNMZW5ndGgtMV0ucm91dGU7XHJcbiAgICAgIHJldHVybiByb3V0ZS5zcGxpdChcIi9cIikucG9wKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==