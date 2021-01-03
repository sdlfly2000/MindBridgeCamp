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
        },
        CloseInvitationDetail: function () {
            this.setData({
                IsShowInvitationDetail: false
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNEM7QUFFNUMsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFDO1FBQ0gsV0FBVyxFQUFFLEVBQUU7UUFDZixzQkFBc0IsRUFBRSxLQUFLO1FBQzdCLGVBQWUsRUFBRSxFQUFFO0tBQ3BCO0lBQ0QsYUFBYSxFQUFDO1FBQ1osSUFBSSxFQUFFO1lBQUEsaUJBT0w7WUFOQyx5QkFBVyxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUNsQyxVQUFDLEdBQVE7Z0JBQ1AsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUk7aUJBQ3hCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGO0lBQ0QsT0FBTyxFQUFDO1FBQ04sb0JBQW9CLEVBQUUsVUFBUyxDQUFDO1lBQzlCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUM1QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQyxVQUFjLElBQUssT0FBQSxVQUFVLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsc0JBQXNCLEVBQUUsSUFBSTtnQkFDNUIsZUFBZSxFQUFFLFNBQVM7YUFDM0IsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELGNBQWMsRUFBRSxVQUFTLENBQUM7WUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQ0QscUJBQXFCLEVBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxzQkFBc0IsRUFBRSxLQUFLO2FBQzlCLENBQUMsQ0FBQztRQUNMLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4vbGlzdFNlcnZpY2VcIjtcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgZGF0YTp7XHJcbiAgICBJbnZpdGF0aW9uczogW10sXHJcbiAgICBJc1Nob3dJbnZpdGF0aW9uRGV0YWlsOiBmYWxzZSxcclxuICAgIEludml0YXRpb25TaG93bjoge31cclxuICB9LFxyXG4gIHBhZ2VMaWZldGltZXM6e1xyXG4gICAgc2hvdzogZnVuY3Rpb24oKXtcclxuICAgICAgbGlzdFNlcnZpY2UuR2V0QXZhaWxhYmxlUm9vbXMoKS50aGVuKFxyXG4gICAgICAgIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgSW52aXRhdGlvbnM6IHJlcy5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIE9wZW5JbnZpdGF0aW9uRGV0YWlsOiBmdW5jdGlvbihlKXtcclxuICAgICAgbGV0IHJvb21JZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvb21pZDtcclxuICAgICAgbGV0IHJvb21Nb2RlbCA9IHRoaXMuZGF0YS5JbnZpdGF0aW9ucy5maW5kKChpbnZpdGF0aW9uOmFueSkgPT4gaW52aXRhdGlvbi5Sb29tSWQgPT0gcm9vbUlkKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBJc1Nob3dJbnZpdGF0aW9uRGV0YWlsOiB0cnVlLFxyXG4gICAgICAgIEludml0YXRpb25TaG93bjogcm9vbU1vZGVsXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIEpvaW5JbnZpdGF0aW9uOiBmdW5jdGlvbihlKXtcclxuICAgICAgY29uc29sZS5pbmZvKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnJvb21pZCk7XHJcbiAgICB9LFxyXG4gICAgQ2xvc2VJbnZpdGF0aW9uRGV0YWlsOmZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgSXNTaG93SW52aXRhdGlvbkRldGFpbDogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==