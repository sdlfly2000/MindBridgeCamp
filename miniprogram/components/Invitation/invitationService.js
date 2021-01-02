"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invitationService = void 0;
var app = getApp();
var InvitationService = (function () {
    function InvitationService(baseUrlApp) {
        this.BaseUrlApp = "";
        this.BaseUrlApp = baseUrlApp;
    }
    InvitationService.prototype.CreateInvitation = function (roomModel) {
        var vm = this;
        var loginToken = this.GetLoginToken();
        return new Promise(function (resolve) {
            wx.request({
                url: vm.BaseUrlApp + "LearningRoom/CreateRoom/" + loginToken,
                data: {
                    model: roomModel
                },
                method: "POST",
                success: function (res) {
                    resolve(res);
                }
            });
        });
    };
    InvitationService.prototype.GetLoginToken = function () {
        return wx.getStorageSync("LoginToken");
    };
    return InvitationService;
}());
exports.invitationService = new InvitationService(app.globalData.baseUrlApp);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRhdGlvblNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnZpdGF0aW9uU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQztBQUUvQjtJQUVFLDJCQUFZLFVBQWtCO1FBRDlCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVNLDRDQUFnQixHQUF2QixVQUF3QixTQUE0QjtRQUNsRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEMsT0FBTyxJQUFJLE9BQU8sQ0FDaEIsVUFBQyxPQUFPO1lBQ04sRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxHQUFHLEVBQUUsRUFBRSxDQUFDLFVBQVUsR0FBRywwQkFBMEIsR0FBRyxVQUFVO2dCQUM1RCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLFNBQVM7aUJBQ2pCO2dCQUNELE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxVQUFTLEdBQUc7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU8seUNBQWEsR0FBckI7UUFDRSxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQztBQUVZLFFBQUEsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGVhcm5pbmdSb29tTW9kZWwgfSBmcm9tIFwiLi9tb2RlbHMvTGVhcm5pbmdSb29tTW9kZWxcIjtcclxuXHJcbnZhciBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcclxuXHJcbmNsYXNzIEludml0YXRpb25TZXJ2aWNle1xyXG4gIEJhc2VVcmxBcHA6IHN0cmluZyA9IFwiXCI7XHJcbiAgY29uc3RydWN0b3IoYmFzZVVybEFwcDogc3RyaW5nKXtcclxuICAgIHRoaXMuQmFzZVVybEFwcCA9IGJhc2VVcmxBcHA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgQ3JlYXRlSW52aXRhdGlvbihyb29tTW9kZWw6IExlYXJuaW5nUm9vbU1vZGVsKSB7XHJcbiAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgdmFyIGxvZ2luVG9rZW4gPSB0aGlzLkdldExvZ2luVG9rZW4oKTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgKHJlc29sdmUpID0+IHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdm0uQmFzZVVybEFwcCArIFwiTGVhcm5pbmdSb29tL0NyZWF0ZVJvb20vXCIgKyBsb2dpblRva2VuLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBtb2RlbDogcm9vbU1vZGVsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgR2V0TG9naW5Ub2tlbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHd4LmdldFN0b3JhZ2VTeW5jKFwiTG9naW5Ub2tlblwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbnZpdGF0aW9uU2VydmljZSA9IG5ldyBJbnZpdGF0aW9uU2VydmljZShhcHAuZ2xvYmFsRGF0YS5iYXNlVXJsQXBwKTsiXX0=