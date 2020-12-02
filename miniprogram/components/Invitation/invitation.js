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
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludml0YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILGNBQWMsRUFBRSxFQUVmO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCx5QkFBeUIsRUFBRSxVQUFTLENBQUM7O1lBQzVCLElBQUEscUNBQUssQ0FBMkI7WUFDdkMsSUFBSSxDQUFDLE9BQU87Z0JBQ1IsR0FBQyxvQkFBa0IsS0FBTyxJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztvQkFDN0MsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgZGF0YTp7XHJcbiAgICBpbnZpdGF0aW9uRGF0YToge1xyXG5cclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIEludml0YXRpb25Gb3JtSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICBjb25zdCB7ZmllbGR9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtgaW52aXRhdGlvbkRhdGEuJHtmaWVsZH1gXTogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9ICBcclxufSkiXX0=