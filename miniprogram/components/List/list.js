"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listService_1 = require("./listService");
Component({
    data: {
        Invitations: [],
    },
    pageLifetimes: {
        show: function () {
            var _this = this;
            var pagesLength = getCurrentPages().length;
            var route = getCurrentPages()[pagesLength - 1].route;
            var pageName = route.split("/").pop();
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
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNEM7QUFFNUMsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFDO1FBQ0gsV0FBVyxFQUFFLEVBQUU7S0FDaEI7SUFDRCxhQUFhLEVBQUM7UUFDWixJQUFJLEVBQUU7WUFBQSxpQkFtQkw7WUFsQkMsSUFBSSxXQUFXLEdBQUcsZUFBZSxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQzNDLElBQUksS0FBSyxHQUFHLGVBQWUsRUFBRSxDQUFDLFdBQVcsR0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDbkQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0QyxJQUFHLFFBQVEsSUFBSSxNQUFNLEVBQUM7Z0JBQ3BCLHlCQUFXLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxJQUFJLENBQ3JDLFVBQUMsR0FBUTtvQkFDUCxLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLFdBQVcsRUFBRSxHQUFHLENBQUMsSUFBSTtxQkFDeEIsQ0FBQyxDQUFBO2dCQUFBLENBQUMsQ0FDSixDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQzthQUNsQztpQkFBSyxJQUFHLFFBQVEsSUFBSSxNQUFNLEVBQUM7Z0JBQzFCLHlCQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQ2xDLFVBQUMsR0FBUTtvQkFDUCxLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLFdBQVcsRUFBRSxHQUFHLENBQUMsSUFBSTtxQkFDeEIsQ0FBQyxDQUFBO2dCQUNKLENBQUMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDO0tBQ0Y7SUFDRCxPQUFPLEVBQUM7UUFDTixpQkFBaUIsRUFBRSxVQUFTLENBQUM7WUFDM0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzVDLElBQUksU0FBUyxHQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFDLFVBQWMsSUFBSyxPQUFBLFVBQVUsQ0FBQyxNQUFNLElBQUksTUFBTSxFQUEzQixDQUEyQixDQUFDLENBQUM7WUFFaEcsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsK0NBQStDO2dCQUNwRCxPQUFPLEVBQUUsVUFBUyxHQUFHO29CQUNuQixHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFBO2dCQUM1RSxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELGNBQWMsRUFBRSxVQUFTLENBQUM7WUFBVixpQkFhZjtZQVpDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUM1Qyx5QkFBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQy9CLFVBQUMsR0FBTztnQkFDTixJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLFdBQVcsR0FBUSxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDN0MsSUFBSSxlQUFlLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQUssSUFBSyxPQUFBLENBQUMsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO2dCQUN0RixXQUFXLENBQUMsZUFBZSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUMxQyxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFdBQVcsRUFBRSxXQUFXO2lCQUN6QixDQUFDLENBQUM7WUFDTCxDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4vbGlzdFNlcnZpY2VcIjtcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgZGF0YTp7XHJcbiAgICBJbnZpdGF0aW9uczogW10sXHJcbiAgfSxcclxuICBwYWdlTGlmZXRpbWVzOntcclxuICAgIHNob3c6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCBwYWdlc0xlbmd0aCA9IGdldEN1cnJlbnRQYWdlcygpLmxlbmd0aDtcclxuICAgICAgbGV0IHJvdXRlID0gZ2V0Q3VycmVudFBhZ2VzKClbcGFnZXNMZW5ndGgtMV0ucm91dGU7XHJcbiAgICAgIGxldCBwYWdlTmFtZSA9IHJvdXRlLnNwbGl0KFwiL1wiKS5wb3AoKTtcclxuICAgICAgaWYocGFnZU5hbWUgPT0gXCJtYWluXCIpe1xyXG4gICAgICAgIGxpc3RTZXJ2aWNlLkdldFJvb21zUGFydGljaXBhdGVkKCkudGhlbihcclxuICAgICAgICAgIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIEludml0YXRpb25zOiByZXMuZGF0YVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgKS5jYXRjaCgoZSkgPT4gY29uc29sZS5lcnJvcihlKSk7XHJcbiAgICAgIH1lbHNlIGlmKHBhZ2VOYW1lID09IFwiaGFsbFwiKXtcclxuICAgICAgICBsaXN0U2VydmljZS5HZXRBdmFpbGFibGVSb29tcygpLnRoZW4oXHJcbiAgICAgICAgICAocmVzOiBhbnkpID0+IHsgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgSW52aXRhdGlvbnM6IHJlcy5kYXRhXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIE5hdmlnYXRlVG9EZXRhaWxzOiBmdW5jdGlvbihlKXtcclxuICAgICAgbGV0IHJvb21JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvb21pZDtcclxuICAgICAgbGV0IHJvb21Nb2RlbDphbnkgPSB0aGlzLmRhdGEuSW52aXRhdGlvbnMuZmluZCgoaW52aXRhdGlvbjphbnkpID0+IGludml0YXRpb24uUm9vbUlkID09IHJvb21JZCk7XHJcblxyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IFwiL2NvbXBvbmVudHMvSW52aXRhdGlvbkRldGFpbC9pbnZpdGF0aW9uRGV0YWlsXCIsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgIHJlcy5ldmVudENoYW5uZWwuZW1pdChcIkludml0YXRpb25EZXRhaWxSb29tTW9kZWxcIiwge1Jvb21Nb2RlbDogcm9vbU1vZGVsfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBKb2luSW52aXRhdGlvbjogZnVuY3Rpb24oZSl7XHJcbiAgICAgIGxldCByb29tSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yb29taWQ7XHJcbiAgICAgIGxpc3RTZXJ2aWNlLkpvaW5Sb29tKHJvb21JZCkudGhlbihcclxuICAgICAgICAocmVzOmFueSkgPT4ge1xyXG4gICAgICAgICAgbGV0IGludml0YXRpb24gPSByZXMuZGF0YVswXTtcclxuICAgICAgICAgIGxldCBpbnZpdGF0aW9uczogYW55ID0gdGhpcy5kYXRhLkludml0YXRpb25zO1xyXG4gICAgICAgICAgdmFyIGludml0YXRpb25JbmRleCA9IGludml0YXRpb25zLmZpbmRJbmRleCgoaTphbnkpID0+IGkuUm9vbUlkID09IGludml0YXRpb24uUm9vbUlkKTtcclxuICAgICAgICAgIGludml0YXRpb25zW2ludml0YXRpb25JbmRleF0gPSBpbnZpdGF0aW9uO1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgSW52aXRhdGlvbnM6IGludml0YXRpb25zXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==