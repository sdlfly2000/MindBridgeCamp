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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleGNoYW5nZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFDO1FBQ0gsWUFBWSxFQUFDLEVBRVo7S0FDRjtJQUNELE9BQU8sRUFBQztRQUNOLHVCQUF1QixFQUFFLFVBQVMsQ0FBQzs7WUFDMUIsSUFBQSxxQ0FBSyxDQUEyQjtZQUN2QyxJQUFJLENBQUMsT0FBTztnQkFDUixHQUFDLGtCQUFnQixLQUFPLElBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUMzQyxDQUFBO1FBQ0osQ0FBQztRQUNELGNBQWMsRUFBRTtZQUNkLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsUUFBUSxFQUFFO29CQUNSLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxVQUFVLEVBQUM7WUFDVCxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLEtBQUssRUFBRSxDQUFDO2dCQUNSLFFBQVEsRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUM7Z0JBQ3BDLFVBQVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7Z0JBQy9CLE9BQU8sWUFBRSxHQUFHO29CQUVWLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICBkYXRhOntcclxuICAgIGV4Y2hhbmdlRGF0YTp7XHJcblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczp7XHJcbiAgICBFeGNoYW5nZUZvcm1JbnB1dENoYW5nZTogZnVuY3Rpb24oZSl7XHJcbiAgICAgIGNvbnN0IHtmaWVsZH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW2BleGNoYW5nZURhdGEuJHtmaWVsZH1gXTogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBTdWJtaXRFeGNoYW5nZTogZnVuY3Rpb24oKXtcclxuICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICB0aXRsZTogXCLliIbkuqvnlJ/miJBcIixcclxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7ICAgICAgXHJcbiAgICB9LFxyXG4gICAgR2V0UGljdHVyZTpmdW5jdGlvbigpe1xyXG4gICAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgY291bnQ6IDEsXHJcbiAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLFxyXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXHJcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAvLyB0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcclxuICAgICAgICAgIGNvbnNvbGUuaW5mbyhyZXMudGVtcEZpbGVQYXRocyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=