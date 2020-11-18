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
            if (typeof this.getTabBar === 'function' &&
                this.getTabBar()) {
                this.getTabBar().setData({
                    selected: 1
                });
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbGMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBc0M7QUFFdEMsSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFOUIsU0FBUyxDQUFDO0lBQ1IsU0FBUyxFQUFDO1FBQ1IsS0FBSyxFQUFFO1lBQUEsaUJBT047WUFOQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsVUFBQSxHQUFHO2dCQUM3QixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtvQkFDdEIsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQTtRQUNILENBQUM7S0FDRjtJQUNELGFBQWEsRUFBRTtRQUNiLElBQUksRUFBRTtZQUNKLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVU7Z0JBQ3hDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDdkIsUUFBUSxFQUFFLENBQUM7aUJBQ1osQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDO0tBQ0Y7SUFDRCxJQUFJLEVBQUM7UUFDSCxRQUFRLEVBQUMsRUFFUjtRQUNELFFBQVEsRUFBQyxFQUVSO1FBQ0QsZUFBZSxFQUFDO1lBQ2QsRUFBQyxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsSUFBSSxFQUFDLEVBQUM7WUFDckUsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFDO1lBQzNELEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxJQUFJLEVBQUMsRUFBQztZQUN6RCxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxJQUFJLEVBQUMsRUFBQztTQUMvRDtLQUNGO0lBQ0QsT0FBTyxFQUFDO1FBQ04sZUFBZSxZQUFDLENBQUs7O1lBQ1osSUFBQSxxQ0FBSyxDQUEyQjtZQUN2QyxJQUFJLENBQUMsT0FBTztnQkFDUixHQUFDLGNBQVksS0FBTyxJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztvQkFDdkMsQ0FBQTtRQUNKLENBQUM7UUFDRCxVQUFVO1lBQ1IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFBO1FBQzVCLENBQUM7UUFDRCxZQUFZO1lBQ1YsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDZCxPQUFPO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQztnQkFDRCxJQUFJO29CQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtvQkFDaEMsWUFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNaLENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ2lufSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbFwiXHJcblxyXG52YXIgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgbGlmZXRpbWVzOntcclxuICAgIHJlYWR5OiBmdW5jdGlvbigpe1xyXG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gcmVzID0+IHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcclxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHBhZ2VMaWZldGltZXM6IHtcclxuICAgIHNob3c6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5nZXRUYWJCYXIgPT09ICdmdW5jdGlvbicgJiZcclxuICAgICAgdGhpcy5nZXRUYWJCYXIoKSkge1xyXG4gICAgICAgIHRoaXMuZ2V0VGFiQmFyKCkuc2V0RGF0YSh7XHJcbiAgICAgICAgICBzZWxlY3RlZDogMVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGE6e1xyXG4gICAgY2FsY0RhdGE6e1xyXG5cclxuICAgIH0sXHJcbiAgICB1c2VySW5mbzp7XHJcblxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb25SdWxlczpbXHJcbiAgICAgIHtuYW1lOiBcImlzRml2ZVllYXJzQW5kT25seU9uZVwiLCBydWxlczp7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6XCLlv4XpgIlcIn19LFxyXG4gICAgICB7bmFtZTogXCJpc0ZpcnN0SGFuZFwiLCBydWxlczp7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6XCLlv4XpgIlcIn19LFxyXG4gICAgICB7bmFtZTogXCJzYWxlUHJpY2VcIiwgcnVsZXM6e3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOlwi5b+F6YCJXCJ9fSxcclxuICAgICAge25hbWU6IFwicHVyY2hhc2VkUHJpY2VcIiwgcnVsZXM6e3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOlwi5b+F6YCJXCJ9fVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgbWV0aG9kczp7XHJcbiAgICBGb3JtSW5wdXRDaGFuZ2UoZTphbnkpIHtcclxuICAgICAgY29uc3Qge2ZpZWxkfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbYGNhbGNEYXRhLiR7ZmllbGR9YF06IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgc3VibWl0Rm9ybSgpe1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe3RpdGxlOlwiT0tcIn0pXHJcbiAgICB9LFxyXG4gICAgY2hlY2tTZXNzaW9uKCl7XHJcbiAgICAgIHd4LmNoZWNrU2Vzc2lvbih7XHJcbiAgICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBpbiB2YWxpZC5cIilcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwoKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9naW4gaW4gRmFpbHVyZS5cIilcclxuICAgICAgICAgIExvZ2luKGFwcClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==