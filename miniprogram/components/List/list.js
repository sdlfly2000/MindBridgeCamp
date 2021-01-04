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
            var roomId = e.currentTarget.dataset.roomid;
            var roomModel = this.data.Invitations.find(function (invitation) { return invitation.RoomId == roomId; });
            this.setData({
                IsShowInvitationDetail: true,
                InvitationShown: roomModel
            });
        },
        JoinInvitation: function (e) {
            console.info(e.currentTarget.dataset.roomid);
            var roomId = e.currentTarget.dataset.roomid;
            listService_1.listService.JoinRoom(roomId).then(function (res) {
                console.info(res);
            });
        },
        CloseInvitationDetail: function () {
            this.setData({
                IsShowInvitationDetail: false
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNEM7QUFFNUMsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFDO1FBQ0gsV0FBVyxFQUFFLEVBQUU7UUFDZixzQkFBc0IsRUFBRSxLQUFLO1FBQzdCLGVBQWUsRUFBRSxFQUFFO0tBQ3BCO0lBQ0QsYUFBYSxFQUFDO1FBQ1osSUFBSSxFQUFFO1lBQUEsaUJBT0w7WUFOQyx5QkFBVyxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUNsQyxVQUFDLEdBQVE7Z0JBQ1AsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ3hCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGO0lBQ0QsT0FBTyxFQUFDO1FBQ04sb0JBQW9CLEVBQUUsVUFBUyxDQUFDO1lBQzlCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUM1QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQyxVQUFjLElBQUssT0FBQSxVQUFVLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsc0JBQXNCLEVBQUUsSUFBSTtnQkFDNUIsZUFBZSxFQUFFLFNBQVM7YUFDM0IsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELGNBQWMsRUFBRSxVQUFTLENBQUM7WUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDNUMseUJBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUMvQixVQUFDLEdBQUc7Z0JBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUM7UUFDRCxxQkFBcUIsRUFBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLHNCQUFzQixFQUFFLEtBQUs7YUFDOUIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdFNlcnZpY2UgfSBmcm9tIFwiLi9saXN0U2VydmljZVwiO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICBkYXRhOntcclxuICAgIEludml0YXRpb25zOiBbXSxcclxuICAgIElzU2hvd0ludml0YXRpb25EZXRhaWw6IGZhbHNlLFxyXG4gICAgSW52aXRhdGlvblNob3duOiB7fVxyXG4gIH0sXHJcbiAgcGFnZUxpZmV0aW1lczp7XHJcbiAgICBzaG93OiBmdW5jdGlvbigpe1xyXG4gICAgICBsaXN0U2VydmljZS5HZXRBdmFpbGFibGVSb29tcygpLnRoZW4oXHJcbiAgICAgICAgKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICBJbnZpdGF0aW9uczogcmVzLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6e1xyXG4gICAgT3Blbkludml0YXRpb25EZXRhaWw6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICBsZXQgcm9vbUlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucm9vbWlkO1xyXG4gICAgICBsZXQgcm9vbU1vZGVsID0gdGhpcy5kYXRhLkludml0YXRpb25zLmZpbmQoKGludml0YXRpb246YW55KSA9PiBpbnZpdGF0aW9uLlJvb21JZCA9PSByb29tSWQpO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIElzU2hvd0ludml0YXRpb25EZXRhaWw6IHRydWUsXHJcbiAgICAgICAgSW52aXRhdGlvblNob3duOiByb29tTW9kZWxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgSm9pbkludml0YXRpb246IGZ1bmN0aW9uKGUpe1xyXG4gICAgICBjb25zb2xlLmluZm8oZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucm9vbWlkKTtcclxuICAgICAgbGV0IHJvb21JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvb21pZDtcclxuICAgICAgbGlzdFNlcnZpY2UuSm9pblJvb20ocm9vbUlkKS50aGVuKFxyXG4gICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuaW5mbyhyZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBDbG9zZUludml0YXRpb25EZXRhaWw6ZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBJc1Nob3dJbnZpdGF0aW9uRGV0YWlsOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn0pIl19