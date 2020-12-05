"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
var app = getApp();
Component({
    lifetimes: {
        ready: function () {
            var _this = this;
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true,
                });
            };
        }
    },
    pageLifetimes: {
        show: function () {
        }
    },
    data: {
        calcData: {},
        userInfo: {},
        validationRules: [
            { name: "isFiveYearsAndOnlyOne", rules: { required: true, message: "必选" } },
            { name: "isFirstHand", rules: { required: true, message: "必选" } },
            { name: "salePrice", rules: { required: true, message: "必选" } },
            { name: "purchasedPrice", rules: { required: true, message: "必选" } }
        ]
    },
    methods: {
        FormInputChange: function (e) {
            var _a;
            var field = e.currentTarget.dataset.field;
            this.setData((_a = {},
                _a["calcData." + field] = e.detail.value,
                _a));
        },
        submitForm: function () {
            wx.showToast({ title: "OK" });
        },
        checkSession: function () {
            wx.checkSession({
                success: function () {
                    console.log("Login in valid.");
                },
                fail: function () {
                    console.log("Login in Failure.");
                    util_1.Login(app);
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbGMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBc0M7QUFFdEMsSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFOUIsU0FBUyxDQUFDO0lBQ1IsU0FBUyxFQUFDO1FBQ1IsS0FBSyxFQUFFO1lBQUEsaUJBT047WUFOQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsVUFBQSxHQUFHO2dCQUM3QixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtvQkFDdEIsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQTtRQUNILENBQUM7S0FDRjtJQUNELGFBQWEsRUFBRTtRQUNiLElBQUksRUFBRTtRQUNOLENBQUM7S0FDRjtJQUNELElBQUksRUFBQztRQUNILFFBQVEsRUFBQyxFQUVSO1FBQ0QsUUFBUSxFQUFDLEVBRVI7UUFDRCxlQUFlLEVBQUM7WUFDZCxFQUFDLElBQUksRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxJQUFJLEVBQUMsRUFBQztZQUNyRSxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsSUFBSSxFQUFDLEVBQUM7WUFDM0QsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFDO1lBQ3pELEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFDO1NBQy9EO0tBQ0Y7SUFDRCxPQUFPLEVBQUM7UUFDTixlQUFlLEVBQWYsVUFBZ0IsQ0FBSzs7WUFDWixJQUFBLEtBQUssR0FBSSxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sTUFBM0IsQ0FBMkI7WUFDdkMsSUFBSSxDQUFDLE9BQU87Z0JBQ1IsR0FBQyxjQUFZLEtBQU8sSUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7b0JBQ3ZDLENBQUE7UUFDSixDQUFDO1FBQ0QsVUFBVTtZQUNSLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQTtRQUM1QixDQUFDO1FBQ0QsWUFBWTtZQUNWLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsT0FBTztvQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7Z0JBQ2hDLENBQUM7Z0JBQ0QsSUFBSTtvQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUE7b0JBQ2hDLFlBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDWixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2dpbn0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxcIlxyXG5cclxudmFyIGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcblxyXG5Db21wb25lbnQoe1xyXG4gIGxpZmV0aW1lczp7XHJcbiAgICByZWFkeTogZnVuY3Rpb24oKXtcclxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBwYWdlTGlmZXRpbWVzOiB7XHJcbiAgICBzaG93OiBmdW5jdGlvbigpe1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YTp7XHJcbiAgICBjYWxjRGF0YTp7XHJcblxyXG4gICAgfSxcclxuICAgIHVzZXJJbmZvOntcclxuXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvblJ1bGVzOltcclxuICAgICAge25hbWU6IFwiaXNGaXZlWWVhcnNBbmRPbmx5T25lXCIsIHJ1bGVzOntyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTpcIuW/hemAiVwifX0sXHJcbiAgICAgIHtuYW1lOiBcImlzRmlyc3RIYW5kXCIsIHJ1bGVzOntyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTpcIuW/hemAiVwifX0sXHJcbiAgICAgIHtuYW1lOiBcInNhbGVQcmljZVwiLCBydWxlczp7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6XCLlv4XpgIlcIn19LFxyXG4gICAgICB7bmFtZTogXCJwdXJjaGFzZWRQcmljZVwiLCBydWxlczp7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6XCLlv4XpgIlcIn19XHJcbiAgICBdXHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIEZvcm1JbnB1dENoYW5nZShlOmFueSkge1xyXG4gICAgICBjb25zdCB7ZmllbGR9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIFtgY2FsY0RhdGEuJHtmaWVsZH1gXTogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzdWJtaXRGb3JtKCl7XHJcbiAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6XCJPS1wifSlcclxuICAgIH0sXHJcbiAgICBjaGVja1Nlc3Npb24oKXtcclxuICAgICAgd3guY2hlY2tTZXNzaW9uKHtcclxuICAgICAgICBzdWNjZXNzKCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIGluIHZhbGlkLlwiKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCgpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBpbiBGYWlsdXJlLlwiKVxyXG4gICAgICAgICAgTG9naW4oYXBwKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pIl19