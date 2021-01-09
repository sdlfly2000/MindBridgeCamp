"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invitationDetailService = void 0;
var app = getApp();
var InvitationDetailService = (function () {
    function InvitationDetailService(baseUrlApp) {
        this.BaseUrlApp = "";
        this.BaseUrlApp = baseUrlApp;
    }
    InvitationDetailService.prototype.JoinRoom = function (roomId) {
        var _this = this;
        var vm = this;
        return new Promise(function (resolve) {
            wx.request({
                url: vm.BaseUrlApp + "LearningRoom/JoinRoom/" + _this.GetLoginToken() + "/" + roomId,
                success: function (res) {
                    resolve(res);
                }
            });
        });
    };
    InvitationDetailService.prototype.GetCreatorInfo = function (openId) {
        var vm = this;
        return new Promise(function (resolve, error) {
            wx.request({
                url: vm.BaseUrlApp + "User/Get/" + openId,
                success: function (res) {
                    resolve(res);
                },
                fail: function (e) {
                    error(e);
                }
            });
        });
    };
    InvitationDetailService.prototype.GetParticipants = function (roomId) {
        var vm = this;
        return new Promise(function (resolve, error) {
            wx.request({
                url: vm.BaseUrlApp + "LearningRoom/GetParticipants/" + roomId,
                success: function (res) {
                    resolve(res);
                },
                fail: function (err) {
                    error(err);
                }
            });
        });
    };
    InvitationDetailService.prototype.GetLoginToken = function () {
        return wx.getStorageSync("LoginToken");
    };
    return InvitationDetailService;
}());
exports.invitationDetailService = new InvitationDetailService(app.globalData.baseUrlApp);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRhdGlvbkRldGFpbFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnZpdGF0aW9uRGV0YWlsU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQztBQUUvQjtJQUVFLGlDQUFZLFVBQWtCO1FBRDlCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVNLDBDQUFRLEdBQWYsVUFBZ0IsTUFBYztRQUE5QixpQkFZQztRQVhDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLE9BQU8sSUFBSSxPQUFPLENBQ2hCLFVBQUMsT0FBTztZQUNOLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEdBQUcsd0JBQXdCLEdBQUcsS0FBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNO2dCQUNuRixPQUFPLEVBQUUsVUFBUyxHQUFHO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVNLGdEQUFjLEdBQXJCLFVBQXNCLE1BQWE7UUFDakMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsT0FBTyxJQUFJLE9BQU8sQ0FDaEIsVUFBQyxPQUFPLEVBQUUsS0FBSztZQUNiLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEdBQUcsV0FBVyxHQUFHLE1BQU07Z0JBQ3pDLE9BQU8sRUFBRSxVQUFTLEdBQUc7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDO2dCQUNELElBQUksRUFBRSxVQUFTLENBQUM7b0JBQ2QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSxpREFBZSxHQUF0QixVQUF1QixNQUFhO1FBQ2xDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLE9BQU8sSUFBSSxPQUFPLENBQ2hCLFVBQUMsT0FBTyxFQUFFLEtBQUs7WUFDYixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxFQUFFLENBQUMsVUFBVSxHQUFHLCtCQUErQixHQUFHLE1BQU07Z0JBQzdELE9BQU8sRUFBRSxVQUFTLEdBQUc7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDO2dCQUNELElBQUksRUFBRSxVQUFTLEdBQUc7b0JBQ2hCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU8sK0NBQWEsR0FBckI7UUFDRSxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQXpERCxJQXlEQztBQUVZLFFBQUEsdUJBQXVCLEdBQUcsSUFBSSx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpO1xyXG5cclxuY2xhc3MgSW52aXRhdGlvbkRldGFpbFNlcnZpY2V7XHJcbiAgQmFzZVVybEFwcDogc3RyaW5nID0gXCJcIjtcclxuICBjb25zdHJ1Y3RvcihiYXNlVXJsQXBwOiBzdHJpbmcpe1xyXG4gICAgdGhpcy5CYXNlVXJsQXBwID0gYmFzZVVybEFwcDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBKb2luUm9vbShyb29tSWQ6IHN0cmluZyl7XHJcbiAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB2bS5CYXNlVXJsQXBwICsgXCJMZWFybmluZ1Jvb20vSm9pblJvb20vXCIgKyB0aGlzLkdldExvZ2luVG9rZW4oKSArIFwiL1wiICsgcm9vbUlkLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIEdldENyZWF0b3JJbmZvKG9wZW5JZDpzdHJpbmcpe1xyXG4gICAgbGV0IHZtID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgKHJlc29sdmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHZtLkJhc2VVcmxBcHAgKyBcIlVzZXIvR2V0L1wiICsgb3BlbklkLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBlcnJvcihlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBHZXRQYXJ0aWNpcGFudHMocm9vbUlkOnN0cmluZyl7XHJcbiAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAocmVzb2x2ZSwgZXJyb3IpID0+IHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdm0uQmFzZVVybEFwcCArIFwiTGVhcm5pbmdSb29tL0dldFBhcnRpY2lwYW50cy9cIiArIHJvb21JZCxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbihlcnIpe1xyXG4gICAgICAgICAgICBlcnJvcihlcnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBHZXRMb2dpblRva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gd3guZ2V0U3RvcmFnZVN5bmMoXCJMb2dpblRva2VuXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGludml0YXRpb25EZXRhaWxTZXJ2aWNlID0gbmV3IEludml0YXRpb25EZXRhaWxTZXJ2aWNlKGFwcC5nbG9iYWxEYXRhLmJhc2VVcmxBcHApIl19