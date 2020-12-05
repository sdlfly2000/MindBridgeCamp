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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVOb3Rlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlTm90ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILGNBQWMsRUFBQyxFQUVkO0tBQ0Y7SUFDRCxPQUFPLEVBQUM7UUFDTix5QkFBeUIsRUFBRSxVQUFTLENBQUM7O1lBQzVCLElBQUEsS0FBSyxHQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxNQUEzQixDQUEyQjtZQUN2QyxJQUFJLENBQUMsT0FBTztnQkFDUixHQUFDLG9CQUFrQixLQUFPLElBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUM3QyxDQUFBO1FBQ0osQ0FBQztRQUNELGdCQUFnQixFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFO29CQUNSLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxVQUFVLEVBQUM7WUFDVCxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLEtBQUssRUFBRSxDQUFDO2dCQUNSLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUM7Z0JBQ3BDLFVBQVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7Z0JBQy9CLE9BQU8sWUFBRSxHQUFHO29CQUVWLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICBkYXRhOntcclxuICAgIHNoYXJlTm90ZXNEYXRhOntcclxuXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIFNoYXJlTm90ZXNGb3JtSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICBjb25zdCB7ZmllbGR9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtgc2hhcmVOb3Rlc0RhdGEuJHtmaWVsZH1gXTogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBTdWJtaXRTaGFyZU5vdGVzOiBmdW5jdGlvbigpe1xyXG4gICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgIHRpdGxlOiBcIuWIhuS6q+eUn+aIkFwiLFxyXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVCYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTsgICAgICBcclxuICAgIH0sXHJcbiAgICBHZXRQaWN0dXJlOmZ1bmN0aW9uKCl7XHJcbiAgICAgIHd4LmNob29zZUltYWdlKHtcclxuICAgICAgICBjb3VudDogMSxcclxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXHJcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xyXG4gICAgICAgICAgY29uc29sZS5pbmZvKHJlcy50ZW1wRmlsZVBhdGhzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==