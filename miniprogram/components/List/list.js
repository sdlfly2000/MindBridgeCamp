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
                .then(function () {
                _this.setData({
                    isLoginTokenValid: true
                });
            })
                .catch(function () {
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
                        var Rooms = _this.MapParticipatedRoom(res.data);
                        _this.setData({
                            Invitations: Rooms
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
        NavigateToChatMessage: function (e) {
            var roomId = e.currentTarget.dataset.roomid;
            var roomModel = this.data.Invitations.find(function (invitation) { return invitation.RoomId == roomId; });
            wx.navigateTo({
                url: "/components/ChatMessage/chatMessage",
                success: function (res) {
                    res.eventChannel.emit("ChatMessageRoomModel", { RoomModel: roomModel });
                }
            });
        },
        MapParticipatedRoom: function (rooms) {
            rooms.forEach(function (room) {
                if (room.Status == 1) {
                    room.Thumb = "/image/NotStart.png";
                }
                else if (room.Status == 0) {
                    room.Thumb = "/image/InProcess.png";
                }
                else if (room.Status == 2) {
                    room.Thumb = "/image/Complete.png";
                }
            });
            return rooms;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBNEQ7QUFDNUQsNkNBQTRDO0FBRTVDLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRTlCLFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILFdBQVcsRUFBRSxFQUFFO1FBQ2YsaUJBQWlCLEVBQUUsS0FBSztLQUN6QjtJQUNELGFBQWEsRUFBQztRQUNaLElBQUksRUFBRTtZQUFBLGlCQVdMO1lBVkMsd0JBQWlCLENBQUMsR0FBRyxDQUFDO2lCQUNyQixJQUFJLENBQUM7Z0JBQ0osS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxpQkFBaUIsRUFBRSxJQUFJO2lCQUN4QixDQUFDLENBQUE7WUFBQSxDQUFDLENBQUM7aUJBQ0wsS0FBSyxDQUFDO2dCQUNMLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsaUJBQWlCLEVBQUUsS0FBSztpQkFDekIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7SUFDRCxTQUFTLEVBQUM7UUFDUixtQkFBbUIsRUFBRSxVQUFTLGlCQUF5QjtZQUFsQyxpQkEwQnBCO1lBekJDLElBQUcsQ0FBQyxpQkFBaUIsRUFBQztnQkFDcEIsWUFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsaUJBQWlCLEVBQUUsSUFBSTtxQkFDeEIsQ0FBQyxDQUFBO2dCQUFBLENBQUMsQ0FBQyxDQUFDO2FBQ1I7aUJBQUk7Z0JBQ0gsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQ3pDLElBQUcsUUFBUSxJQUFJLE1BQU0sRUFBQztvQkFDcEIseUJBQVcsQ0FBQyxvQkFBb0Is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QUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUVELGtCQUFrQjtZQUNoQixJQUFJLFdBQVcsR0FBRyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDM0MsSUFBSSxLQUFLLEdBQUcsZUFBZSxFQUFFLENBQUMsV0FBVyxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNuRCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEMsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNMb2dpblRva2VuVmFsaWQsIExvZ2luIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxcIjtcclxuaW1wb3J0IHsgbGlzdFNlcnZpY2UgfSBmcm9tIFwiLi9saXN0U2VydmljZVwiO1xyXG5cclxudmFyIGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcblxyXG5Db21wb25lbnQoe1xyXG4gIGRhdGE6e1xyXG4gICAgSW52aXRhdGlvbnM6IFtdLFxyXG4gICAgaXNMb2dpblRva2VuVmFsaWQ6IGZhbHNlXHJcbiAgfSxcclxuICBwYWdlTGlmZXRpbWVzOntcclxuICAgIHNob3c6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIElzTG9naW5Ub2tlblZhbGlkKGFwcClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpc0xvZ2luVG9rZW5WYWxpZDogdHJ1ZVxyXG4gICAgICAgIH0pfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgaXNMb2dpblRva2VuVmFsaWQ6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIG9ic2VydmVyczp7XHJcbiAgICAnaXNMb2dpblRva2VuVmFsaWQnOiBmdW5jdGlvbihpc0xvZ2luVG9rZW5WYWxpZDpib29sZWFuKXtcclxuICAgICAgaWYoIWlzTG9naW5Ub2tlblZhbGlkKXtcclxuICAgICAgICBMb2dpbihhcHApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhyZXMpO1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgaXNMb2dpblRva2VuVmFsaWQ6IHRydWVcclxuICAgICAgICAgIH0pfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGxldCBwYWdlTmFtZSA9IHRoaXMuR2V0Q3VycmVudFBhZ2VOYW1lKCk7XHJcbiAgICAgICAgaWYocGFnZU5hbWUgPT0gXCJtYWluXCIpe1xyXG4gICAgICAgICAgbGlzdFNlcnZpY2UuR2V0Um9vbXNQYXJ0aWNpcGF0ZWQoKS50aGVuKFxyXG4gICAgICAgICAgICAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgUm9vbXMgPSB0aGlzLk1hcFBhcnRpY2lwYXRlZFJvb20ocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBJbnZpdGF0aW9uczogUm9vbXNcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICApLmNhdGNoKChyZXMpID0+IGNvbnNvbGUuZXJyb3IocmVzKSk7XHJcbiAgICAgICAgfWVsc2UgaWYocGFnZU5hbWUgPT0gXCJoYWxsXCIpe1xyXG4gICAgICAgICAgbGlzdFNlcnZpY2UuR2V0QXZhaWxhYmxlUm9vbXMoKS50aGVuKFxyXG4gICAgICAgICAgICAocmVzOiBhbnkpID0+IHsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIEludml0YXRpb25zOiByZXMuZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIE5hdmlnYXRlVG9EZXRhaWxzOiBmdW5jdGlvbihlKXtcclxuICAgICAgbGV0IHJvb21JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvb21pZDtcclxuICAgICAgbGV0IHJvb21Nb2RlbDphbnkgPSB0aGlzLmRhdGEuSW52aXRhdGlvbnMuZmluZCgoaW52aXRhdGlvbjphbnkpID0+IGludml0YXRpb24uUm9vbUlkID09IHJvb21JZCk7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogXCIvY29tcG9uZW50cy9JbnZpdGF0aW9uRGV0YWlsL2ludml0YXRpb25EZXRhaWxcIixcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgcmVzLmV2ZW50Q2hhbm5lbC5lbWl0KFwiSW52aXRhdGlvbkRldGFpbFJvb21Nb2RlbFwiLCB7Um9vbU1vZGVsOiByb29tTW9kZWx9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgTmF2aWdhdGVUb0NoYXRNZXNzYWdlOiBmdW5jdGlvbihlKXtcclxuICAgICAgbGV0IHJvb21JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvb21pZDtcclxuICAgICAgbGV0IHJvb21Nb2RlbDphbnkgPSB0aGlzLmRhdGEuSW52aXRhdGlvbnMuZmluZCgoaW52aXRhdGlvbjphbnkpID0+IGludml0YXRpb24uUm9vbUlkID09IHJvb21JZCk7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogXCIvY29tcG9uZW50cy9DaGF0TWVzc2FnZS9jaGF0TWVzc2FnZVwiLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICByZXMuZXZlbnRDaGFubmVsLmVtaXQoXCJDaGF0TWVzc2FnZVJvb21Nb2RlbFwiLCB7Um9vbU1vZGVsOiByb29tTW9kZWx9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgTWFwUGFydGljaXBhdGVkUm9vbShyb29tczogW10pe1xyXG4gICAgICByb29tcy5mb3JFYWNoKChyb29tOmFueSkgPT4ge1xyXG4gICAgICAgIGlmKHJvb20uU3RhdHVzPT0xKXtcclxuICAgICAgICAgIHJvb20uVGh1bWIgPSBcIi9pbWFnZS9Ob3RTdGFydC5wbmdcIjtcclxuICAgICAgICB9ZWxzZSBpZihyb29tLlN0YXR1cz09MCl7XHJcbiAgICAgICAgICByb29tLlRodW1iID0gXCIvaW1hZ2UvSW5Qcm9jZXNzLnBuZ1wiO1xyXG4gICAgICAgIH1lbHNlIGlmKHJvb20uU3RhdHVzPT0yKXtcclxuICAgICAgICAgIHJvb20uVGh1bWIgPSBcIi9pbWFnZS9Db21wbGV0ZS5wbmdcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcm9vbXM7XHJcbiAgICB9LFxyXG5cclxuICAgIEpvaW5JbnZpdGF0aW9uOiBmdW5jdGlvbihlKXtcclxuICAgICAgbGV0IHJvb21JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvb21pZDtcclxuICAgICAgbGlzdFNlcnZpY2UuSm9pblJvb20ocm9vbUlkKS50aGVuKFxyXG4gICAgICAgIChyZXM6YW55KSA9PiB7XHJcbiAgICAgICAgICBsZXQgaW52aXRhdGlvbiA9IHJlcy5kYXRhWzBdO1xyXG4gICAgICAgICAgbGV0IGludml0YXRpb25zOiBhbnkgPSB0aGlzLmRhdGEuSW52aXRhdGlvbnM7XHJcbiAgICAgICAgICBsZXQgaW52aXRhdGlvbkluZGV4ID0gaW52aXRhdGlvbnMuZmluZEluZGV4KChpOmFueSkgPT4gaS5Sb29tSWQgPT0gaW52aXRhdGlvbi5Sb29tSWQpO1xyXG4gICAgICAgICAgaW52aXRhdGlvbnNbaW52aXRhdGlvbkluZGV4XSA9IGludml0YXRpb247XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBJbnZpdGF0aW9uczogaW52aXRhdGlvbnNcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgU2lnbkluSW52aXRhdGlvbjogZnVuY3Rpb24oZSl7XHJcbiAgICAgIGxldCByb29tSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yb29taWQ7XHJcbiAgICAgIGxpc3RTZXJ2aWNlLlNpZ25JblJvb20ocm9vbUlkKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGxldCBpbnZpdGF0aW9uczphbnkgPSB0aGlzLmRhdGEuSW52aXRhdGlvbnM7XHJcbiAgICAgICAgICBsZXQgaW52aXRhdGlvbkluZGV4ID0gaW52aXRhdGlvbnMuZmluZEluZGV4KChpOmFueSkgPT4gaS5Sb29tSWQgPT0gcm9vbUlkKTtcclxuICAgICAgICAgIGludml0YXRpb25zW2ludml0YXRpb25JbmRleF0uSXNTaWduSW4gPSB0cnVlO1xyXG5cclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIEludml0YXRpb25zOiBpbnZpdGF0aW9uc1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKHJlcykgPT4gY29uc29sZS5lcnJvcihyZXMuZXJyTXNnKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIEdldEN1cnJlbnRQYWdlTmFtZSgpe1xyXG4gICAgICBsZXQgcGFnZXNMZW5ndGggPSBnZXRDdXJyZW50UGFnZXMoKS5sZW5ndGg7XHJcbiAgICAgIGxldCByb3V0ZSA9IGdldEN1cnJlbnRQYWdlcygpW3BhZ2VzTGVuZ3RoLTFdLnJvdXRlO1xyXG4gICAgICByZXR1cm4gcm91dGUuc3BsaXQoXCIvXCIpLnBvcCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=