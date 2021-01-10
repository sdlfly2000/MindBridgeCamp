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
        GetCurrentPageName: function () {
            var pagesLength = getCurrentPages().length;
            var route = getCurrentPages()[pagesLength - 1].route;
            return route.split("/").pop();
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBNEQ7QUFDNUQsNkNBQTRDO0FBRTVDLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRTlCLFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILFdBQVcsRUFBRSxFQUFFO1FBQ2YsaUJBQWlCLEVBQUUsS0FBSztLQUN6QjtJQUNELGFBQWEsRUFBQztRQUNaLElBQUksRUFBRTtZQUFBLGlCQWFMO1lBWkMsd0JBQWlCLENBQUMsR0FBRyxDQUFDO2lCQUNyQixJQUFJLENBQUMsVUFBQyxHQUFHO2dCQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsaUJBQWlCLEVBQUUsSUFBSTtpQkFDeEIsQ0FBQyxDQUFBO1lBQUEsQ0FBQyxDQUFDO2lCQUNMLEtBQUssQ0FBQyxVQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxpQkFBaUIsRUFBRSxLQUFLO2lCQUN6QixDQUFDLENBQUE7WUFDSixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtJQUNELFNBQVMsRUFBQztRQUNSLG1CQUFtQixFQUFFLFVBQVMsaUJBQXlCO1lBQWxDLGlCQXlCcEI7WUF4QkMsSUFBRyxDQUFDLGlCQUFpQixFQUFDO2dCQUNwQixZQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbkIsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxpQkFBaUIsRUFBRSxJQUFJO3FCQUN4QixDQUFDLENBQUE7Z0JBQUEsQ0FBQyxDQUFDLENBQUM7YUFDUjtpQkFBSTtnQkFDSCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDekMsSUFBRyxRQUFRLElBQUksTUFBTSxFQUFDO29CQUNwQix5QkFBVyxDQUFDLG9CQUFvQixFQUFFLENBQUMsSUFBSSxDQUNyQyxVQUFDLEdBQVE7d0JBQ1AsS0FBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUk7eUJBQ3hCLENBQUMsQ0FBQTtvQkFBQSxDQUFDLENBQ0osQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7aUJBQ3RDO3FCQUFLLElBQUcsUUFBUSxJQUFJLE1BQU0sRUFBQztvQkFDMUIseUJBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FDbEMsVUFBQyxHQUFRO3dCQUNQLEtBQUksQ0FBQyxPQUFPLENBQUM7NEJBQ1gsV0FBVyxFQUFFLEdBQUcsQ0FBQyxJQUFJO3lCQUN4QixDQUFDLENBQUE7b0JBQ0osQ0FBQyxDQUFDLENBQUM7aUJBQ0o7YUFDRjtRQUNILENBQUM7S0FDRjtJQUNELE9BQU8sRUFBQztRQUNOLGlCQUFpQixFQUFFLFVBQVMsQ0FBQztZQUMzQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDNUMsSUFBSSxTQUFTLEdBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUMsVUFBYyxJQUFLLE9BQUEsVUFBVSxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQTNCLENBQTJCLENBQUMsQ0FBQztZQUVoRyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSwrQ0FBK0M7Z0JBQ3BELE9BQU8sRUFBRSxVQUFTLEdBQUc7b0JBQ25CLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUE7Z0JBQzVFLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsY0FBYyxFQUFFLFVBQVMsQ0FBQztZQUFWLGlCQWFmO1lBWkMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzVDLHlCQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDL0IsVUFBQyxHQUFPO2dCQUNOLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLElBQUksV0FBVyxHQUFRLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUM3QyxJQUFJLGVBQWUsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBSyxJQUFLLE9BQUEsQ0FBQyxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxFQUE3QixDQUE2QixDQUFDLENBQUM7Z0JBQ3RGLFdBQVcsQ0FBQyxlQUFlLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsV0FBVyxFQUFFLFdBQVc7aUJBQ3pCLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQztRQUVELGtCQUFrQjtZQUNoQixJQUFJLFdBQVcsR0FBRyxlQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDM0MsSUFBSSxLQUFLLEdBQUcsZUFBZSxFQUFFLENBQUMsV0FBVyxHQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNuRCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEMsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNMb2dpblRva2VuVmFsaWQsIExvZ2luIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxcIjtcclxuaW1wb3J0IHsgbGlzdFNlcnZpY2UgfSBmcm9tIFwiLi9saXN0U2VydmljZVwiO1xyXG5cclxudmFyIGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcblxyXG5Db21wb25lbnQoe1xyXG4gIGRhdGE6e1xyXG4gICAgSW52aXRhdGlvbnM6IFtdLFxyXG4gICAgaXNMb2dpblRva2VuVmFsaWQ6IGZhbHNlXHJcbiAgfSxcclxuICBwYWdlTGlmZXRpbWVzOntcclxuICAgIHNob3c6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIElzTG9naW5Ub2tlblZhbGlkKGFwcClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcocmVzKTtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgaXNMb2dpblRva2VuVmFsaWQ6IHRydWVcclxuICAgICAgICB9KX0pXHJcbiAgICAgIC5jYXRjaCgocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhyZXMpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpc0xvZ2luVG9rZW5WYWxpZDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb2JzZXJ2ZXJzOntcclxuICAgICdpc0xvZ2luVG9rZW5WYWxpZCc6IGZ1bmN0aW9uKGlzTG9naW5Ub2tlblZhbGlkOmJvb2xlYW4pe1xyXG4gICAgICBpZighaXNMb2dpblRva2VuVmFsaWQpe1xyXG4gICAgICAgIExvZ2luKGFwcCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKHJlcyk7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBpc0xvZ2luVG9rZW5WYWxpZDogdHJ1ZVxyXG4gICAgICAgICAgfSl9KTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgbGV0IHBhZ2VOYW1lID0gdGhpcy5HZXRDdXJyZW50UGFnZU5hbWUoKTtcclxuICAgICAgICBpZihwYWdlTmFtZSA9PSBcIm1haW5cIil7XHJcbiAgICAgICAgICBsaXN0U2VydmljZS5HZXRSb29tc1BhcnRpY2lwYXRlZCgpLnRoZW4oXHJcbiAgICAgICAgICAgIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBJbnZpdGF0aW9uczogcmVzLmRhdGFcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICApLmNhdGNoKChyZXMpID0+IGNvbnNvbGUuZXJyb3IocmVzKSk7XHJcbiAgICAgICAgfWVsc2UgaWYocGFnZU5hbWUgPT0gXCJoYWxsXCIpe1xyXG4gICAgICAgICAgbGlzdFNlcnZpY2UuR2V0QXZhaWxhYmxlUm9vbXMoKS50aGVuKFxyXG4gICAgICAgICAgICAocmVzOiBhbnkpID0+IHsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIEludml0YXRpb25zOiByZXMuZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIE5hdmlnYXRlVG9EZXRhaWxzOiBmdW5jdGlvbihlKXtcclxuICAgICAgbGV0IHJvb21JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvb21pZDtcclxuICAgICAgbGV0IHJvb21Nb2RlbDphbnkgPSB0aGlzLmRhdGEuSW52aXRhdGlvbnMuZmluZCgoaW52aXRhdGlvbjphbnkpID0+IGludml0YXRpb24uUm9vbUlkID09IHJvb21JZCk7XHJcblxyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IFwiL2NvbXBvbmVudHMvSW52aXRhdGlvbkRldGFpbC9pbnZpdGF0aW9uRGV0YWlsXCIsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgIHJlcy5ldmVudENoYW5uZWwuZW1pdChcIkludml0YXRpb25EZXRhaWxSb29tTW9kZWxcIiwge1Jvb21Nb2RlbDogcm9vbU1vZGVsfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBKb2luSW52aXRhdGlvbjogZnVuY3Rpb24oZSl7XHJcbiAgICAgIGxldCByb29tSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yb29taWQ7XHJcbiAgICAgIGxpc3RTZXJ2aWNlLkpvaW5Sb29tKHJvb21JZCkudGhlbihcclxuICAgICAgICAocmVzOmFueSkgPT4ge1xyXG4gICAgICAgICAgbGV0IGludml0YXRpb24gPSByZXMuZGF0YVswXTtcclxuICAgICAgICAgIGxldCBpbnZpdGF0aW9uczogYW55ID0gdGhpcy5kYXRhLkludml0YXRpb25zO1xyXG4gICAgICAgICAgdmFyIGludml0YXRpb25JbmRleCA9IGludml0YXRpb25zLmZpbmRJbmRleCgoaTphbnkpID0+IGkuUm9vbUlkID09IGludml0YXRpb24uUm9vbUlkKTtcclxuICAgICAgICAgIGludml0YXRpb25zW2ludml0YXRpb25JbmRleF0gPSBpbnZpdGF0aW9uO1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgSW52aXRhdGlvbnM6IGludml0YXRpb25zXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIEdldEN1cnJlbnRQYWdlTmFtZSgpe1xyXG4gICAgICBsZXQgcGFnZXNMZW5ndGggPSBnZXRDdXJyZW50UGFnZXMoKS5sZW5ndGg7XHJcbiAgICAgIGxldCByb3V0ZSA9IGdldEN1cnJlbnRQYWdlcygpW3BhZ2VzTGVuZ3RoLTFdLnJvdXRlO1xyXG4gICAgICByZXR1cm4gcm91dGUuc3BsaXQoXCIvXCIpLnBvcCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=