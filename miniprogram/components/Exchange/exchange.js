"use strict";
Component({
    data: {
        exchangeData: {}
    },
    methods: {
        ExchangeFormInputChange: function (e) {
            var _a;
            var field = e.currentTarget.dataset.field;
            this.setData((_a = {},
                _a["exchangeData." + field] = e.detail.value,
                _a));
        },
        SubmitExchange: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleGNoYW5nZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFDO1FBQ0gsWUFBWSxFQUFDLEVBRVo7S0FDRjtJQUNELE9BQU8sRUFBQztRQUNOLHVCQUF1QixFQUFFLFVBQVMsQ0FBQzs7WUFDMUIsSUFBQSxLQUFLLEdBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLE1BQTNCLENBQTJCO1lBQ3ZDLElBQUksQ0FBQyxPQUFPO2dCQUNSLEdBQUMsa0JBQWdCLEtBQU8sSUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQzNDLENBQUE7UUFDSixDQUFDO1FBQ0QsY0FBYyxFQUFFO1lBQ2QsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUU7b0JBQ1IsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELFVBQVUsRUFBQztZQUNULEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsUUFBUSxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQztnQkFDcEMsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztnQkFDL0IsT0FBTyxZQUFFLEdBQUc7b0JBRVYsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gIGRhdGE6e1xyXG4gICAgZXhjaGFuZ2VEYXRhOntcclxuXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIEV4Y2hhbmdlRm9ybUlucHV0Q2hhbmdlOiBmdW5jdGlvbihlKXtcclxuICAgICAgY29uc3Qge2ZpZWxkfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbYGV4Y2hhbmdlRGF0YS4ke2ZpZWxkfWBdOiBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIFN1Ym1pdEV4Y2hhbmdlOiBmdW5jdGlvbigpe1xyXG4gICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgIHRpdGxlOiBcIuWIhuS6q+eUn+aIkFwiLFxyXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVCYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTsgICAgICBcclxuICAgIH0sXHJcbiAgICBHZXRQaWN0dXJlOmZ1bmN0aW9uKCl7XHJcbiAgICAgIHd4LmNob29zZUltYWdlKHtcclxuICAgICAgICBjb3VudDogMSxcclxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXHJcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSxcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xyXG4gICAgICAgICAgY29uc29sZS5pbmZvKHJlcy50ZW1wRmlsZVBhdGhzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==