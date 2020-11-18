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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbGMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBc0M7QUFFdEMsSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFOUIsU0FBUyxDQUFDO0lBQ1IsU0FBUyxFQUFDO1FBQ1IsS0FBSyxFQUFFO1lBQUEsaUJBT047WUFOQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsVUFBQSxHQUFHO2dCQUM3QixLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtvQkFDdEIsV0FBVyxFQUFFLElBQUk7aUJBQ2xCLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQTtRQUNILENBQUM7S0FDRjtJQUNELGFBQWEsRUFBRTtRQUNiLElBQUksRUFBRTtRQUNOLENBQUM7S0FDRjtJQUNELElBQUksRUFBQztRQUNILFFBQVEsRUFBQyxFQUVSO1FBQ0QsUUFBUSxFQUFDLEVBRVI7UUFDRCxlQUFlLEVBQUM7WUFDZCxFQUFDLElBQUksRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxJQUFJLEVBQUMsRUFBQztZQUNyRSxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsSUFBSSxFQUFDLEVBQUM7WUFDM0QsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFDO1lBQ3pELEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFDO1NBQy9EO0tBQ0Y7SUFDRCxPQUFPLEVBQUM7UUFDTixlQUFlLFlBQUMsQ0FBSzs7WUFDWixJQUFBLHFDQUFLLENBQTJCO1lBQ3ZDLElBQUksQ0FBQyxPQUFPO2dCQUNSLEdBQUMsY0FBWSxLQUFPLElBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUN2QyxDQUFBO1FBQ0osQ0FBQztRQUNELFVBQVU7WUFDUixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQyxDQUFDLENBQUE7UUFDNUIsQ0FBQztRQUNELFlBQVk7WUFDVixFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUNkLE9BQU87b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO2dCQUNoQyxDQUFDO2dCQUNELElBQUk7b0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO29CQUNoQyxZQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ1osQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9naW59IGZyb20gXCIuLi8uLi91dGlscy91dGlsXCJcclxuXHJcbnZhciBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxyXG5cclxuQ29tcG9uZW50KHtcclxuICBsaWZldGltZXM6e1xyXG4gICAgcmVhZHk6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSByZXMgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxyXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGFnZUxpZmV0aW1lczoge1xyXG4gICAgc2hvdzogZnVuY3Rpb24oKXtcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGE6e1xyXG4gICAgY2FsY0RhdGE6e1xyXG5cclxuICAgIH0sXHJcbiAgICB1c2VySW5mbzp7XHJcblxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb25SdWxlczpbXHJcbiAgICAgIHtuYW1lOiBcImlzRml2ZVllYXJzQW5kT25seU9uZVwiLCBydWxlczp7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6XCLlv4XpgIlcIn19LFxyXG4gICAgICB7bmFtZTogXCJpc0ZpcnN0SGFuZFwiLCBydWxlczp7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6XCLlv4XpgIlcIn19LFxyXG4gICAgICB7bmFtZTogXCJzYWxlUHJpY2VcIiwgcnVsZXM6e3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOlwi5b+F6YCJXCJ9fSxcclxuICAgICAge25hbWU6IFwicHVyY2hhc2VkUHJpY2VcIiwgcnVsZXM6e3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOlwi5b+F6YCJXCJ9fVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgbWV0aG9kczp7XHJcbiAgICBGb3JtSW5wdXRDaGFuZ2UoZTphbnkpIHtcclxuICAgICAgY29uc3Qge2ZpZWxkfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbYGNhbGNEYXRhLiR7ZmllbGR9YF06IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgc3VibWl0Rm9ybSgpe1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe3RpdGxlOlwiT0tcIn0pXHJcbiAgICB9LFxyXG4gICAgY2hlY2tTZXNzaW9uKCl7XHJcbiAgICAgIHd4LmNoZWNrU2Vzc2lvbih7XHJcbiAgICAgICAgc3VjY2Vzcygpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBpbiB2YWxpZC5cIilcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWwoKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9naW4gaW4gRmFpbHVyZS5cIilcclxuICAgICAgICAgIExvZ2luKGFwcClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==