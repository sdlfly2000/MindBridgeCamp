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
                .then(function () { return _this.setData({
                isLoginTokenValid: true
            }); })
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
                util_1.Login(app).then(function () { return _this.setData({
                    isLoginTokenValid: true
                }); });
            }
            else {
                var pageName = this.GetCurrentPageName();
                if (pageName == "main") {
                    listService_1.listService.GetRoomsParticipated().then(function (res) {
                        _this.setData({
                            Invitations: res.data
                        });
                    }).catch(function (e) { return console.error(e); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBNEQ7QUFDNUQsNkNBQTRDO0FBRTVDLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFBO0FBRTlCLFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILFdBQVcsRUFBRSxFQUFFO1FBQ2YsaUJBQWlCLEVBQUUsS0FBSztLQUN6QjtJQUNELGFBQWEsRUFBQztRQUNaLElBQUksRUFBRTtZQUFBLGlCQVVMO1lBVEMsd0JBQWlCLENBQUMsR0FBRyxDQUFDO2lCQUNyQixJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZCLGlCQUFpQixFQUFFLElBQUk7YUFDeEIsQ0FBQyxFQUZVLENBRVYsQ0FBQztpQkFDRixLQUFLLENBQUM7Z0JBQ0wsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxpQkFBaUIsRUFBRSxLQUFLO2lCQUN6QixDQUFDLENBQUE7WUFDSixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtJQUNELFNBQVMsRUFBQztRQUNSLG1CQUFtQixFQUFFLFVBQVMsaUJBQXlCO1lBQWxDLGlCQXVCcEI7WUF0QkMsSUFBRyxDQUFDLGlCQUFpQixFQUFDO2dCQUNwQixZQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNqQyxpQkFBaUIsRUFBRSxJQUFJO2lCQUN4QixDQUFDLEVBRm9CLENBRXBCLENBQUMsQ0FBQzthQUNMO2lCQUFJO2dCQUNILElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUN6QyxJQUFHLFFBQVEsSUFBSSxNQUFNLEVBQUM7b0JBQ3BCLHlCQUFXLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxJQUFJLENBQ3JDLFVBQUMsR0FBUTt3QkFDUCxLQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNYLFdBQVcsRUFBRSxHQUFHLENBQUMsSUFBSTt5QkFDeEIsQ0FBQyxDQUFBO29CQUFBLENBQUMsQ0FDSixDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztpQkFDbEM7cUJBQUssSUFBRyxRQUFRLElBQUksTUFBTSxFQUFDO29CQUMxQix5QkFBVyxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUNsQyxVQUFDLEdBQVE7d0JBQ1AsS0FBSSxDQUFDLE9BQU8sQ0FBQzs0QkFDWCxXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUk7eUJBQ3hCLENBQUMsQ0FBQTtvQkFDSixDQUFDLENBQUMsQ0FBQztpQkFDSjthQUNGO1FBQ0gsQ0FBQztLQUNGO0lBQ0QsT0FBTyxFQUFDO1FBQ04saUJBQWlCLEVBQUUsVUFBUyxDQUFDO1lBQzNCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUM1QyxJQUFJLFNBQVMsR0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQyxVQUFjLElBQUssT0FBQSxVQUFVLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1lBRWhHLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLCtDQUErQztnQkFDcEQsT0FBTyxFQUFFLFVBQVMsR0FBRztvQkFDbkIsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQTtnQkFDNUUsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxjQUFjLEVBQUUsVUFBUyxDQUFDO1lBQVYsaUJBYWY7WUFaQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDNUMseUJBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUMvQixVQUFDLEdBQU87Z0JBQ04sSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxXQUFXLEdBQVEsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzdDLElBQUksZUFBZSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFLLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQTdCLENBQTZCLENBQUMsQ0FBQztnQkFDdEYsV0FBVyxDQUFDLGVBQWUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDMUMsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxXQUFXLEVBQUUsV0FBVztpQkFDekIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUNGLENBQUM7UUFDSixDQUFDO1FBRUQsa0JBQWtCO1lBQ2hCLElBQUksV0FBVyxHQUFHLGVBQWUsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUMzQyxJQUFJLEtBQUssR0FBRyxlQUFlLEVBQUUsQ0FBQyxXQUFXLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ25ELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQyxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0xvZ2luVG9rZW5WYWxpZCwgTG9naW4gfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbFwiO1xyXG5pbXBvcnQgeyBsaXN0U2VydmljZSB9IGZyb20gXCIuL2xpc3RTZXJ2aWNlXCI7XHJcblxyXG52YXIgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgZGF0YTp7XHJcbiAgICBJbnZpdGF0aW9uczogW10sXHJcbiAgICBpc0xvZ2luVG9rZW5WYWxpZDogZmFsc2VcclxuICB9LFxyXG4gIHBhZ2VMaWZldGltZXM6e1xyXG4gICAgc2hvdzogZnVuY3Rpb24oKXtcclxuICAgICAgSXNMb2dpblRva2VuVmFsaWQoYXBwKVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGlzTG9naW5Ub2tlblZhbGlkOiB0cnVlXHJcbiAgICAgIH0pKVxyXG4gICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBpc0xvZ2luVG9rZW5WYWxpZDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb2JzZXJ2ZXJzOntcclxuICAgICdpc0xvZ2luVG9rZW5WYWxpZCc6IGZ1bmN0aW9uKGlzTG9naW5Ub2tlblZhbGlkOmJvb2xlYW4pe1xyXG4gICAgICBpZighaXNMb2dpblRva2VuVmFsaWQpe1xyXG4gICAgICAgIExvZ2luKGFwcCkudGhlbigoKSA9PiB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgaXNMb2dpblRva2VuVmFsaWQ6IHRydWVcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGxldCBwYWdlTmFtZSA9IHRoaXMuR2V0Q3VycmVudFBhZ2VOYW1lKCk7XHJcbiAgICAgICAgaWYocGFnZU5hbWUgPT0gXCJtYWluXCIpe1xyXG4gICAgICAgICAgbGlzdFNlcnZpY2UuR2V0Um9vbXNQYXJ0aWNpcGF0ZWQoKS50aGVuKFxyXG4gICAgICAgICAgICAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgSW52aXRhdGlvbnM6IHJlcy5kYXRhXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgKS5jYXRjaCgoZSkgPT4gY29uc29sZS5lcnJvcihlKSk7XHJcbiAgICAgICAgfWVsc2UgaWYocGFnZU5hbWUgPT0gXCJoYWxsXCIpe1xyXG4gICAgICAgICAgbGlzdFNlcnZpY2UuR2V0QXZhaWxhYmxlUm9vbXMoKS50aGVuKFxyXG4gICAgICAgICAgICAocmVzOiBhbnkpID0+IHsgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIEludml0YXRpb25zOiByZXMuZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIE5hdmlnYXRlVG9EZXRhaWxzOiBmdW5jdGlvbihlKXtcclxuICAgICAgbGV0IHJvb21JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvb21pZDtcclxuICAgICAgbGV0IHJvb21Nb2RlbDphbnkgPSB0aGlzLmRhdGEuSW52aXRhdGlvbnMuZmluZCgoaW52aXRhdGlvbjphbnkpID0+IGludml0YXRpb24uUm9vbUlkID09IHJvb21JZCk7XHJcblxyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IFwiL2NvbXBvbmVudHMvSW52aXRhdGlvbkRldGFpbC9pbnZpdGF0aW9uRGV0YWlsXCIsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgIHJlcy5ldmVudENoYW5uZWwuZW1pdChcIkludml0YXRpb25EZXRhaWxSb29tTW9kZWxcIiwge1Jvb21Nb2RlbDogcm9vbU1vZGVsfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBKb2luSW52aXRhdGlvbjogZnVuY3Rpb24oZSl7XHJcbiAgICAgIGxldCByb29tSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yb29taWQ7XHJcbiAgICAgIGxpc3RTZXJ2aWNlLkpvaW5Sb29tKHJvb21JZCkudGhlbihcclxuICAgICAgICAocmVzOmFueSkgPT4ge1xyXG4gICAgICAgICAgbGV0IGludml0YXRpb24gPSByZXMuZGF0YVswXTtcclxuICAgICAgICAgIGxldCBpbnZpdGF0aW9uczogYW55ID0gdGhpcy5kYXRhLkludml0YXRpb25zO1xyXG4gICAgICAgICAgdmFyIGludml0YXRpb25JbmRleCA9IGludml0YXRpb25zLmZpbmRJbmRleCgoaTphbnkpID0+IGkuUm9vbUlkID09IGludml0YXRpb24uUm9vbUlkKTtcclxuICAgICAgICAgIGludml0YXRpb25zW2ludml0YXRpb25JbmRleF0gPSBpbnZpdGF0aW9uO1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgSW52aXRhdGlvbnM6IGludml0YXRpb25zXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIEdldEN1cnJlbnRQYWdlTmFtZSgpe1xyXG4gICAgICBsZXQgcGFnZXNMZW5ndGggPSBnZXRDdXJyZW50UGFnZXMoKS5sZW5ndGg7XHJcbiAgICAgIGxldCByb3V0ZSA9IGdldEN1cnJlbnRQYWdlcygpW3BhZ2VzTGVuZ3RoLTFdLnJvdXRlO1xyXG4gICAgICByZXR1cm4gcm91dGUuc3BsaXQoXCIvXCIpLnBvcCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=