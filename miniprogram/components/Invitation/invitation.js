"use strict";
Component({
    data: {
        invitationData: {}
    },
    methods: {
        InvitationFormInputChange: function (e) {
            var _a;
            var field = e.currentTarget.dataset.field;
            this.setData((_a = {},
                _a["invitationData." + field] = e.detail.value,
                _a));
        },
        SubmitInvitation: function () {
            wx.showModal({
                title: "邀约生成",
                complete: function () {
                    wx.navigateBack();
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludml0YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILGNBQWMsRUFBRSxFQUVmO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCx5QkFBeUIsRUFBRSxVQUFTLENBQUM7O1lBQzVCLElBQUEsS0FBSyxHQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxNQUEzQixDQUEyQjtZQUN2QyxJQUFJLENBQUMsT0FBTztnQkFDUixHQUFDLG9CQUFrQixLQUFPLElBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUM3QyxDQUFBO1FBQ0osQ0FBQztRQUNELGdCQUFnQixFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFO29CQUNSLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgZGF0YTp7XHJcbiAgICBpbnZpdGF0aW9uRGF0YToge1xyXG5cclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIEludml0YXRpb25Gb3JtSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICBjb25zdCB7ZmllbGR9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtgaW52aXRhdGlvbkRhdGEuJHtmaWVsZH1gXTogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBTdWJtaXRJbnZpdGF0aW9uOiBmdW5jdGlvbigpe1xyXG4gICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgIHRpdGxlOiBcIumCgOe6pueUn+aIkFwiLFxyXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVCYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTsgICAgICBcclxuICAgIH1cclxuICB9ICBcclxufSkiXX0=