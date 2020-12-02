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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludml0YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILGNBQWMsRUFBRSxFQUVmO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCx5QkFBeUIsRUFBRSxVQUFTLENBQUM7O1lBQzVCLElBQUEscUNBQUssQ0FBMkI7WUFDdkMsSUFBSSxDQUFDLE9BQU87Z0JBQ1IsR0FBQyxvQkFBa0IsS0FBTyxJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztvQkFDN0MsQ0FBQTtRQUNKLENBQUM7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRTtvQkFDUixFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gIGRhdGE6e1xyXG4gICAgaW52aXRhdGlvbkRhdGE6IHtcclxuXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBJbnZpdGF0aW9uRm9ybUlucHV0Q2hhbmdlOiBmdW5jdGlvbihlKXtcclxuICAgICAgY29uc3Qge2ZpZWxkfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbYGludml0YXRpb25EYXRhLiR7ZmllbGR9YF06IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgU3VibWl0SW52aXRhdGlvbjogZnVuY3Rpb24oKXtcclxuICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICB0aXRsZTogXCLpgoDnuqbnlJ/miJBcIixcclxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7ICAgICAgXHJcbiAgICB9XHJcbiAgfSAgXHJcbn0pIl19