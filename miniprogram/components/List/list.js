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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBNEQ7QUFDNUQsNkNBQTRDO0FBRTVDLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRTlCLFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILFdBQVcsRUFBRSxFQUFFO1FBQ2YsaUJBQWlCLEVBQUUsS0FBSztLQUN6QjtJQUNELGFBQWEsRUFBQztRQUNaLElBQUksRUFBRTtZQUFBLGlCQVdMO1lBVkMsd0JBQWlCLENBQUMsR0FBRyxDQUFDO2lCQUNyQixJQUFJLENBQUM7Z0JBQ0osS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxpQkFBaUIsRUFBRSxJQUFJO2lCQUN4QixDQUFDLENBQUE7WUFBQSxDQUFDLENBQUM7aUJBQ0wsS0FBSyxDQUFDO2dCQUNMLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsaUJBQWlCLEVBQUUsS0FBSztpQkFDekIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7SUFDRCxTQUFTLEVBQUM7UUFDUixtQkFBbUIsRUFBRSxVQUFTLGlCQUF5QjtZQUFsQyxpQkF5QnBCO1lBeEJDLElBQUcsQ0FBQyxpQkFBaUIsRUFBQztnQkFDcEIsWUFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsaUJBQWlCLEVBQUUsSUFBSTtxQkFDeEIsQ0FBQyxDQUFBO2dCQUFBLENBQUMsQ0FBQyxDQUFDO2FBQ1I7aUJBQUk7Z0JBQ0gsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQ3pDLElBQUcsUUFBUSxJQUFJLE1BQU0sRUFBQztvQkFDcEIseUJBQVcsQ0FBQyxvQkFBb0Is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QUFDO1lBQ0wsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUVELGtCQUFrQjtZQUNoQixJQUFJLFdBQVcsR0FBRyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDM0MsSUFBSSxLQUFLLEdBQUcsZUFBZSxFQUFFLENBQUMsV0FBVyxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNuRCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEMsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNMb2dpblRva2VuVmFsaWQsIExvZ2luIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxcIjtcclxuaW1wb3J0IHsgbGlzdFNlcnZpY2UgfSBmcm9tIFwiLi9saXN0U2VydmljZVwiO1xyXG5cclxudmFyIGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcblxyXG5Db21wb25lbnQoe1xyXG4gIGRhdGE6e1xyXG4gICAgSW52aXRhdGlvbnM6IFtdLFxyXG4gICAgaXNMb2dpblRva2VuVmFsaWQ6IGZhbHNlXHJcbiAgfSxcclxuICBwYWdlTGlmZXRpbWVzOntcclxuICAgIHNob3c6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIElzTG9naW5Ub2tlblZhbGlkKGFwcClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpc0xvZ2luVG9rZW5WYWxpZDogdHJ1ZVxyXG4gICAgICAgIH0pfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgaXNMb2dpblRva2VuVmFsaWQ6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIG9ic2VydmVyczp7XHJcbiAgICAnaXNMb2dpblRva2VuVmFsaWQnOiBmdW5jdGlvbihpc0xvZ2luVG9rZW5WYWxpZDpib29sZWFuKXtcclxuICAgICAgaWYoIWlzTG9naW5Ub2tlblZhbGlkKXtcclxuICAgICAgICBMb2dpbihhcHApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhyZXMpO1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgaXNMb2dpblRva2VuVmFsaWQ6IHRydWVcclxuICAgICAgICAgIH0pfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGxldCBwYWdlTmFtZSA9IHRoaXMuR2V0Q3VycmVudFBhZ2VOYW1lKCk7XHJcbiAgICAgICAgaWYocGFnZU5hbWUgPT0gXCJtYWluXCIpe1xyXG4gICAgICAgICAgbGlzdFNlcnZpY2UuR2V0Um9vbXNQYXJ0aWNpcGF0ZWQoKS50aGVuKFxyXG4gICAgICAgICAgICAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgSW52aXRhdGlvbnM6IHJlcy5kYXRhXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgKS5jYXRjaCgocmVzKSA9PiBjb25zb2xlLmVycm9yKHJlcykpO1xyXG4gICAgICAgIH1lbHNlIGlmKHBhZ2VOYW1lID09IFwiaGFsbFwiKXtcclxuICAgICAgICAgIGxpc3RTZXJ2aWNlLkdldEF2YWlsYWJsZVJvb21zKCkudGhlbihcclxuICAgICAgICAgICAgKHJlczogYW55KSA9PiB7ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBJbnZpdGF0aW9uczogcmVzLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczp7XHJcbiAgICBOYXZpZ2F0ZVRvRGV0YWlsczogZnVuY3Rpb24oZSl7XHJcbiAgICAgIGxldCByb29tSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yb29taWQ7XHJcbiAgICAgIGxldCByb29tTW9kZWw6YW55ID0gdGhpcy5kYXRhLkludml0YXRpb25zLmZpbmQoKGludml0YXRpb246YW55KSA9PiBpbnZpdGF0aW9uLlJvb21JZCA9PSByb29tSWQpO1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IFwiL2NvbXBvbmVudHMvSW52aXRhdGlvbkRldGFpbC9pbnZpdGF0aW9uRGV0YWlsXCIsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgIHJlcy5ldmVudENoYW5uZWwuZW1pdChcIkludml0YXRpb25EZXRhaWxSb29tTW9kZWxcIiwge1Jvb21Nb2RlbDogcm9vbU1vZGVsfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBKb2luSW52aXRhdGlvbjogZnVuY3Rpb24oZSl7XHJcbiAgICAgIGxldCByb29tSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yb29taWQ7XHJcbiAgICAgIGxpc3RTZXJ2aWNlLkpvaW5Sb29tKHJvb21JZCkudGhlbihcclxuICAgICAgICAocmVzOmFueSkgPT4ge1xyXG4gICAgICAgICAgbGV0IGludml0YXRpb24gPSByZXMuZGF0YVswXTtcclxuICAgICAgICAgIGxldCBpbnZpdGF0aW9uczogYW55ID0gdGhpcy5kYXRhLkludml0YXRpb25zO1xyXG4gICAgICAgICAgbGV0IGludml0YXRpb25JbmRleCA9IGludml0YXRpb25zLmZpbmRJbmRleCgoaTphbnkpID0+IGkuUm9vbUlkID09IGludml0YXRpb24uUm9vbUlkKTtcclxuICAgICAgICAgIGludml0YXRpb25zW2ludml0YXRpb25JbmRleF0gPSBpbnZpdGF0aW9uO1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgSW52aXRhdGlvbnM6IGludml0YXRpb25zXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIFNpZ25Jbkludml0YXRpb246IGZ1bmN0aW9uKGUpe1xyXG4gICAgICBsZXQgcm9vbUlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucm9vbWlkO1xyXG4gICAgICBsaXN0U2VydmljZS5TaWduSW5Sb29tKHJvb21JZClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBsZXQgaW52aXRhdGlvbnM6YW55ID0gdGhpcy5kYXRhLkludml0YXRpb25zO1xyXG4gICAgICAgICAgbGV0IGludml0YXRpb25JbmRleCA9IGludml0YXRpb25zLmZpbmRJbmRleCgoaTphbnkpID0+IGkuUm9vbUlkID09IHJvb21JZCk7XHJcbiAgICAgICAgICBpbnZpdGF0aW9uc1tpbnZpdGF0aW9uSW5kZXhdLklzU2lnbkluID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBJbnZpdGF0aW9uczogaW52aXRhdGlvbnNcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChyZXMpID0+IGNvbnNvbGUuZXJyb3IocmVzLmVyck1zZykpO1xyXG4gICAgfSxcclxuXHJcbiAgICBHZXRDdXJyZW50UGFnZU5hbWUoKXtcclxuICAgICAgbGV0IHBhZ2VzTGVuZ3RoID0gZ2V0Q3VycmVudFBhZ2VzKCkubGVuZ3RoO1xyXG4gICAgICBsZXQgcm91dGUgPSBnZXRDdXJyZW50UGFnZXMoKVtwYWdlc0xlbmd0aC0xXS5yb3V0ZTtcclxuICAgICAgcmV0dXJuIHJvdXRlLnNwbGl0KFwiL1wiKS5wb3AoKTtcclxuICAgIH1cclxuICB9XHJcbn0pIl19