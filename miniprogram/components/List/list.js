"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listService_1 = require("./listService");
Component({
    data: {
        Invitations: [],
        IsShowInvitationDetail: false,
        InvitationShown: {}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNEM7QUFFNUMsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFDO1FBQ0gsV0FBVyxFQUFFLEVBQUU7UUFDZixzQkFBc0IsRUFBRSxLQUFLO1FBQzdCLGVBQWUsRUFBRSxFQUFFO0tBQ3BCO0lBQ0QsYUFBYSxFQUFDO1FBQ1osSUFBSSxFQUFFO1lBQUEsaUJBT0w7WUFOQyx5QkFBVyxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUNsQyxVQUFDLEdBQVE7Z0JBQ1AsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ3hCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGO0lBQ0QsT0FBTyxFQUFDO1FBQ04sb0JBQW9CLEVBQUUsVUFBUyxDQUFDO1lBQVYsaUJBZ0JyQjtZQWZDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUM1QyxJQUFJLFNBQVMsR0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQyxVQUFjLElBQUssT0FBQSxVQUFVLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1lBQ2hHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsc0JBQXNCLEVBQUUsSUFBSTtnQkFDNUIsZUFBZSxFQUFFLFNBQVM7YUFDM0IsQ0FBQyxDQUFDO1lBQ0gseUJBQVcsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDbEQsVUFBQyxHQUFRO2dCQUNQLElBQUksZUFBZSxHQUFRLEtBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUNyRCxlQUFlLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN4QyxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLGVBQWUsRUFBRSxlQUFlO2lCQUNqQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUM7UUFDRCxjQUFjLEVBQUUsVUFBUyxDQUFDO1lBQVYsaUJBYWY7WUFaQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDNUMseUJBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUMvQixVQUFDLEdBQU87Z0JBQ04sSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxXQUFXLEdBQVEsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzdDLElBQUksZUFBZSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFLLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQTdCLENBQTZCLENBQUMsQ0FBQztnQkFDdEYsV0FBVyxDQUFDLGVBQWUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDMUMsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxXQUFXLEVBQUUsV0FBVztpQkFDekIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUNGLENBQUM7UUFDSixDQUFDO1FBQ0QscUJBQXFCLEVBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxzQkFBc0IsRUFBRSxLQUFLO2FBQzlCLENBQUMsQ0FBQztRQUNMLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4vbGlzdFNlcnZpY2VcIjtcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgZGF0YTp7XHJcbiAgICBJbnZpdGF0aW9uczogW10sXHJcbiAgICBJc1Nob3dJbnZpdGF0aW9uRGV0YWlsOiBmYWxzZSxcclxuICAgIEludml0YXRpb25TaG93bjoge31cclxuICB9LFxyXG4gIHBhZ2VMaWZldGltZXM6e1xyXG4gICAgc2hvdzogZnVuY3Rpb24oKXtcclxuICAgICAgbGlzdFNlcnZpY2UuR2V0QXZhaWxhYmxlUm9vbXMoKS50aGVuKFxyXG4gICAgICAgIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgSW52aXRhdGlvbnM6IHJlcy5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIE9wZW5JbnZpdGF0aW9uRGV0YWlsOiBmdW5jdGlvbihlKXtcclxuICAgICAgbGV0IHJvb21JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvb21pZDtcclxuICAgICAgbGV0IHJvb21Nb2RlbDphbnkgPSB0aGlzLmRhdGEuSW52aXRhdGlvbnMuZmluZCgoaW52aXRhdGlvbjphbnkpID0+IGludml0YXRpb24uUm9vbUlkID09IHJvb21JZCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgSXNTaG93SW52aXRhdGlvbkRldGFpbDogdHJ1ZSxcclxuICAgICAgICBJbnZpdGF0aW9uU2hvd246IHJvb21Nb2RlbFxyXG4gICAgICB9KTtcclxuICAgICAgbGlzdFNlcnZpY2UuR2V0Q3JlYXRvckluZm8ocm9vbU1vZGVsLkNyZWF0ZWRCeSkudGhlbihcclxuICAgICAgICAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGxldCBpbnZpdGF0aW9uU2hvd246IGFueSA9IHRoaXMuZGF0YS5JbnZpdGF0aW9uU2hvd247XHJcbiAgICAgICAgICBpbnZpdGF0aW9uU2hvd24uQ3JlYXRlZCA9IHJlcy5kYXRhLk5hbWU7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBJbnZpdGF0aW9uU2hvd246IGludml0YXRpb25TaG93blxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIEpvaW5JbnZpdGF0aW9uOiBmdW5jdGlvbihlKXtcclxuICAgICAgbGV0IHJvb21JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvb21pZDtcclxuICAgICAgbGlzdFNlcnZpY2UuSm9pblJvb20ocm9vbUlkKS50aGVuKFxyXG4gICAgICAgIChyZXM6YW55KSA9PiB7XHJcbiAgICAgICAgICBsZXQgaW52aXRhdGlvbiA9IHJlcy5kYXRhWzBdO1xyXG4gICAgICAgICAgbGV0IGludml0YXRpb25zOiBhbnkgPSB0aGlzLmRhdGEuSW52aXRhdGlvbnM7XHJcbiAgICAgICAgICB2YXIgaW52aXRhdGlvbkluZGV4ID0gaW52aXRhdGlvbnMuZmluZEluZGV4KChpOmFueSkgPT4gaS5Sb29tSWQgPT0gaW52aXRhdGlvbi5Sb29tSWQpO1xyXG4gICAgICAgICAgaW52aXRhdGlvbnNbaW52aXRhdGlvbkluZGV4XSA9IGludml0YXRpb247XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBJbnZpdGF0aW9uczogaW52aXRhdGlvbnNcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBDbG9zZUludml0YXRpb25EZXRhaWw6ZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBJc1Nob3dJbnZpdGF0aW9uRGV0YWlsOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn0pIl19