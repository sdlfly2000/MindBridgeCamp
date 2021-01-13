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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBNEQ7QUFDNUQsNkNBQTRDO0FBRTVDLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRTlCLFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILFdBQVcsRUFBRSxFQUFFO1FBQ2YsaUJBQWlCLEVBQUUsS0FBSztLQUN6QjtJQUNELGFBQWEsRUFBQztRQUNaLElBQUksRUFBRTtZQUFBLGlCQVdMO1lBVkMsd0JBQWlCLENBQUMsR0FBRyxDQUFDO2lCQUNyQixJQUFJLENBQUM7Z0JBQ0osS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxpQkFBaUIsRUFBRSxJQUFJO2lCQUN4QixDQUFDLENBQUE7WUFBQSxDQUFDLENBQUM7aUJBQ0wsS0FBSyxDQUFDO2dCQUNMLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsaUJBQWlCLEVBQUUsS0FBSztpQkFDekIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7SUFDRCxTQUFTLEVBQUM7UUFDUixtQkFBbUIsRUFBRSxVQUFTLGlCQUF5QjtZQUFsQyxpQkEwQnBCO1lBekJDLElBQUcsQ0FBQyxpQkFBaUIsRUFBQztnQkFDcEIsWUFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsaUJBQWlCLEVBQUUsSUFBSTtxQkFDeEIsQ0FBQyxDQUFBO2dCQUFBLENBQUMsQ0FBQyxDQUFDO2FBQ1I7aUJBQUk7Z0JBQ0gsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQ3pDLElBQUcsUUFBUSxJQUFJLE1BQU0sRUFBQztvQkFDcEIseUJBQVcsQ0FBQyxvQkFBb0Is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UUFDSixDQUFDO1FBRUQsZ0JBQWdCLEVBQUUsVUFBUyxDQUFDO1lBQVYsaUJBYWpCO1lBWkMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzVDLHlCQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztpQkFDM0IsSUFBSSxDQUFDO2dCQUNKLElBQUksV0FBVyxHQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUM1QyxJQUFJLGVBQWUsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBSyxJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQWxCLENBQWtCLENBQUMsQ0FBQztnQkFDM0UsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBRTdDLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsV0FBVyxFQUFFLFdBQVc7aUJBQ3pCLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFFRCxrQkFBa0I7WUFDaEIsSUFBSSxXQUFXLEdBQUcsZUFBZSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQzNDLElBQUksS0FBSyxHQUFHLGVBQWUsRUFBRSxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDbkQsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzTG9naW5Ub2tlblZhbGlkLCBMb2dpbiB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsXCI7XHJcbmltcG9ydCB7IGxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4vbGlzdFNlcnZpY2VcIjtcclxuXHJcbnZhciBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxyXG5cclxuQ29tcG9uZW50KHtcclxuICBkYXRhOntcclxuICAgIEludml0YXRpb25zOiBbXSxcclxuICAgIGlzTG9naW5Ub2tlblZhbGlkOiBmYWxzZVxyXG4gIH0sXHJcbiAgcGFnZUxpZmV0aW1lczp7XHJcbiAgICBzaG93OiBmdW5jdGlvbigpe1xyXG4gICAgICBJc0xvZ2luVG9rZW5WYWxpZChhcHApXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgaXNMb2dpblRva2VuVmFsaWQ6IHRydWVcclxuICAgICAgICB9KX0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGlzTG9naW5Ub2tlblZhbGlkOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBvYnNlcnZlcnM6e1xyXG4gICAgJ2lzTG9naW5Ub2tlblZhbGlkJzogZnVuY3Rpb24oaXNMb2dpblRva2VuVmFsaWQ6Ym9vbGVhbil7XHJcbiAgICAgIGlmKCFpc0xvZ2luVG9rZW5WYWxpZCl7XHJcbiAgICAgICAgTG9naW4oYXBwKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZGVidWcocmVzKTtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIGlzTG9naW5Ub2tlblZhbGlkOiB0cnVlXHJcbiAgICAgICAgICB9KX0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBsZXQgcGFnZU5hbWUgPSB0aGlzLkdldEN1cnJlbnRQYWdlTmFtZSgpO1xyXG4gICAgICAgIGlmKHBhZ2VOYW1lID09IFwibWFpblwiKXtcclxuICAgICAgICAgIGxpc3RTZXJ2aWNlLkdldFJvb21zUGFydGljaXBhdGVkKCkudGhlbihcclxuICAgICAgICAgICAgKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IFJvb21zID0gdGhpcy5NYXBQYXJ0aWNpcGF0ZWRSb29tKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgSW52aXRhdGlvbnM6IFJvb21zXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgKS5jYXRjaCgocmVzKSA9PiBjb25zb2xlLmVycm9yKHJlcykpO1xyXG4gICAgICAgIH1lbHNlIGlmKHBhZ2VOYW1lID09IFwiaGFsbFwiKXtcclxuICAgICAgICAgIGxpc3RTZXJ2aWNlLkdldEF2YWlsYWJsZVJvb21zKCkudGhlbihcclxuICAgICAgICAgICAgKHJlczogYW55KSA9PiB7ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBJbnZpdGF0aW9uczogcmVzLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczp7XHJcbiAgICBOYXZpZ2F0ZVRvRGV0YWlsczogZnVuY3Rpb24oZSl7XHJcbiAgICAgIGxldCByb29tSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yb29taWQ7XHJcbiAgICAgIGxldCByb29tTW9kZWw6YW55ID0gdGhpcy5kYXRhLkludml0YXRpb25zLmZpbmQoKGludml0YXRpb246YW55KSA9PiBpbnZpdGF0aW9uLlJvb21JZCA9PSByb29tSWQpO1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IFwiL2NvbXBvbmVudHMvSW52aXRhdGlvbkRldGFpbC9pbnZpdGF0aW9uRGV0YWlsXCIsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgIHJlcy5ldmVudENoYW5uZWwuZW1pdChcIkludml0YXRpb25EZXRhaWxSb29tTW9kZWxcIiwge1Jvb21Nb2RlbDogcm9vbU1vZGVsfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBNYXBQYXJ0aWNpcGF0ZWRSb29tKHJvb21zOiBbXSl7XHJcbiAgICAgIHJvb21zLmZvckVhY2goKHJvb206YW55KSA9PiB7XHJcbiAgICAgICAgaWYocm9vbS5TdGF0dXM9PTEpe1xyXG4gICAgICAgICAgcm9vbS5UaHVtYiA9IFwiL2ltYWdlL05vdFN0YXJ0LnBuZ1wiO1xyXG4gICAgICAgIH1lbHNlIGlmKHJvb20uU3RhdHVzPT0wKXtcclxuICAgICAgICAgIHJvb20uVGh1bWIgPSBcIi9pbWFnZS9JblByb2Nlc3MucG5nXCI7XHJcbiAgICAgICAgfWVsc2UgaWYocm9vbS5TdGF0dXM9PTIpe1xyXG4gICAgICAgICAgcm9vbS5UaHVtYiA9IFwiL2ltYWdlL0NvbXBsZXRlLnBuZ1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByb29tcztcclxuICAgIH0sXHJcblxyXG4gICAgSm9pbkludml0YXRpb246IGZ1bmN0aW9uKGUpe1xyXG4gICAgICBsZXQgcm9vbUlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucm9vbWlkO1xyXG4gICAgICBsaXN0U2VydmljZS5Kb2luUm9vbShyb29tSWQpLnRoZW4oXHJcbiAgICAgICAgKHJlczphbnkpID0+IHtcclxuICAgICAgICAgIGxldCBpbnZpdGF0aW9uID0gcmVzLmRhdGFbMF07XHJcbiAgICAgICAgICBsZXQgaW52aXRhdGlvbnM6IGFueSA9IHRoaXMuZGF0YS5JbnZpdGF0aW9ucztcclxuICAgICAgICAgIGxldCBpbnZpdGF0aW9uSW5kZXggPSBpbnZpdGF0aW9ucy5maW5kSW5kZXgoKGk6YW55KSA9PiBpLlJvb21JZCA9PSBpbnZpdGF0aW9uLlJvb21JZCk7XHJcbiAgICAgICAgICBpbnZpdGF0aW9uc1tpbnZpdGF0aW9uSW5kZXhdID0gaW52aXRhdGlvbjtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIEludml0YXRpb25zOiBpbnZpdGF0aW9uc1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBTaWduSW5JbnZpdGF0aW9uOiBmdW5jdGlvbihlKXtcclxuICAgICAgbGV0IHJvb21JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvb21pZDtcclxuICAgICAgbGlzdFNlcnZpY2UuU2lnbkluUm9vbShyb29tSWQpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IGludml0YXRpb25zOmFueSA9IHRoaXMuZGF0YS5JbnZpdGF0aW9ucztcclxuICAgICAgICAgIGxldCBpbnZpdGF0aW9uSW5kZXggPSBpbnZpdGF0aW9ucy5maW5kSW5kZXgoKGk6YW55KSA9PiBpLlJvb21JZCA9PSByb29tSWQpO1xyXG4gICAgICAgICAgaW52aXRhdGlvbnNbaW52aXRhdGlvbkluZGV4XS5Jc1NpZ25JbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgSW52aXRhdGlvbnM6IGludml0YXRpb25zXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgocmVzKSA9PiBjb25zb2xlLmVycm9yKHJlcy5lcnJNc2cpKTtcclxuICAgIH0sXHJcblxyXG4gICAgR2V0Q3VycmVudFBhZ2VOYW1lKCl7XHJcbiAgICAgIGxldCBwYWdlc0xlbmd0aCA9IGdldEN1cnJlbnRQYWdlcygpLmxlbmd0aDtcclxuICAgICAgbGV0IHJvdXRlID0gZ2V0Q3VycmVudFBhZ2VzKClbcGFnZXNMZW5ndGgtMV0ucm91dGU7XHJcbiAgICAgIHJldHVybiByb3V0ZS5zcGxpdChcIi9cIikucG9wKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==