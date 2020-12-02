"use strict";
Component({
    data: {
        shareNotesData: {}
    },
    methods: {
        ShareNotesFormInputChange: function (e) {
            var _a;
            var field = e.currentTarget.dataset.field;
            this.setData((_a = {},
                _a["shareNotesData." + field] = e.detail.value,
                _a));
        },
        SubmitShareNotes: function () {
            wx.showModal({
                title: "分享生成",
                complete: function () {
                    wx.navigateBack();
                }
            });
        },
        GetPicture: function () {
            wx.chooseImage({
                count: 1,
                sizeType: ['original', 'compressed'],
                sourceType: ['album', 'camera'],
                success: function (res) {
                    console.info(res.tempFilePaths);
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVOb3Rlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlTm90ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILGNBQWMsRUFBQyxFQUVkO0tBQ0Y7SUFDRCxPQUFPLEVBQUM7UUFDTix5QkFBeUIsRUFBRSxVQUFTLENBQUM7O1lBQzVCLElBQUEscUNBQUssQ0FBMkI7WUFDdkMsSUFBSSxDQUFDLE9BQU87Z0JBQ1IsR0FBQyxvQkFBa0IsS0FBTyxJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztvQkFDN0MsQ0FBQTtRQUNKLENBQUM7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRTtvQkFDUixFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsVUFBVSxFQUFDO1lBQ1QsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDYixLQUFLLEVBQUUsQ0FBQztnQkFDUixRQUFRLEVBQUUsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDO2dCQUNwQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO2dCQUMvQixPQUFPLFlBQUUsR0FBRztvQkFFVixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEMsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgZGF0YTp7XHJcbiAgICBzaGFyZU5vdGVzRGF0YTp7XHJcblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczp7XHJcbiAgICBTaGFyZU5vdGVzRm9ybUlucHV0Q2hhbmdlOiBmdW5jdGlvbihlKXtcclxuICAgICAgY29uc3Qge2ZpZWxkfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbYHNoYXJlTm90ZXNEYXRhLiR7ZmllbGR9YF06IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgU3VibWl0U2hhcmVOb3RlczogZnVuY3Rpb24oKXtcclxuICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICB0aXRsZTogXCLliIbkuqvnlJ/miJBcIixcclxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7ICAgICAgXHJcbiAgICB9LFxyXG4gICAgR2V0UGljdHVyZTpmdW5jdGlvbigpe1xyXG4gICAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxyXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXHJcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcclxuICAgICAgICAgIGNvbnNvbGUuaW5mbyhyZXMudGVtcEZpbGVQYXRocyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=