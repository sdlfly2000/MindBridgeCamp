"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = void 0;
var util_1 = require("../../utils/util");
var app = getApp();
var LoginService = (function () {
    function LoginService(baseUrlApp) {
        this.BaseUrlApp = "";
        this.LoginToken = "";
        this.BaseUrlApp = baseUrlApp;
        this.LoginToken = wx.getStorageSync("LoginToken");
    }
    LoginService.prototype.UpdateOrAddUserInfo = function (userInfo) {
        var _this = this;
        var isUserExistUrl = this.BaseUrlApp + "User/IsUserExist/" + this.LoginToken;
        util_1.webClient(isUserExistUrl)
            .then(function () { return _this.UpdateUserInfo(userInfo); })
            .catch(function () { return _this.AddUserInfo(userInfo); });
    };
    LoginService.prototype.UpdateUserInfo = function (userInfo) {
        var updateUserInfoUrl = this.BaseUrlApp + "User/UpdateUserInfo/" + this.LoginToken;
        var userInfoData = {
            NickName: userInfo.nickName,
            AvatarUrl: userInfo.avatarUrl,
            Country: userInfo.country,
            Province: userInfo.province,
            City: userInfo.city,
            Language: userInfo.language
        };
        util_1.webClient(updateUserInfoUrl, "POST", userInfoData)
            .catch(function (res) { return console.error(res); });
    };
    LoginService.prototype.AddUserInfo = function (userInfo) {
        var addUserInfoUrl = this.BaseUrlApp + "User/AddUser/" + this.LoginToken;
        var userInfoData = {
            NickName: userInfo.nickName,
            AvatarUrl: userInfo.avatarUrl,
            Country: userInfo.country,
            Province: userInfo.province,
            City: userInfo.city,
            Language: userInfo.language
        };
        util_1.webClient(addUserInfoUrl, "POST", userInfoData)
            .catch(function (res) { return console.error(res); });
    };
    return LoginService;
}());
exports.loginService = new LoginService(app.globalData.baseUrlApp);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5TZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTG9naW5TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUU3QyxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQztBQUUvQjtJQUlDLHNCQUFZLFVBQWtCO1FBSHRCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUcvQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLDBDQUFtQixHQUExQixVQUEyQixRQUFhO1FBQXhDLGlCQUtDO1FBSkEsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzdFLGdCQUFTLENBQUMsY0FBYyxDQUFDO2FBQ3ZCLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQzthQUN6QyxLQUFLLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU8scUNBQWMsR0FBdEIsVUFBdUIsUUFBYTtRQUNuQyxJQUFJLGlCQUFpQixHQUFXLElBQUksQ0FBQyxVQUFVLEdBQUcsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzRixJQUFJLFlBQVksR0FBRztZQUNsQixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7WUFDM0IsU0FBUyxFQUFFLFFBQVEsQ0FBQyxTQUFTO1lBQzdCLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTztZQUN6QixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7WUFDM0IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1lBQ25CLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTtTQUMzQixDQUFBO1FBQ0QsZ0JBQVMsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDO2FBQ2hELEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU8sa0NBQVcsR0FBbkIsVUFBb0IsUUFBYTtRQUNoQyxJQUFJLGNBQWMsR0FBVyxJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2pGLElBQUksWUFBWSxHQUFHO1lBQ2xCLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTtZQUMzQixTQUFTLEVBQUUsUUFBUSxDQUFDLFNBQVM7WUFDN0IsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPO1lBQ3pCLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTtZQUMzQixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7WUFDbkIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1NBQzNCLENBQUE7UUFDRCxnQkFBUyxDQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDO2FBQzdDLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0YsbUJBQUM7QUFBRCxDQUFDLEFBM0NELElBMkNDO0FBRVksUUFBQSxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdlYkNsaWVudCB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsXCI7XHJcblxyXG52YXIgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KCk7XHJcblxyXG5jbGFzcyBMb2dpblNlcnZpY2V7XHJcblx0cHJpdmF0ZSBCYXNlVXJsQXBwOiBzdHJpbmcgPSBcIlwiO1xyXG5cdHByaXZhdGUgTG9naW5Ub2tlbjogc3RyaW5nID0gXCJcIjtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihiYXNlVXJsQXBwOiBzdHJpbmcpe1xyXG5cdFx0dGhpcy5CYXNlVXJsQXBwID0gYmFzZVVybEFwcDtcclxuXHRcdHRoaXMuTG9naW5Ub2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKFwiTG9naW5Ub2tlblwiKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIFVwZGF0ZU9yQWRkVXNlckluZm8odXNlckluZm86IGFueSl7XHJcblx0XHRsZXQgaXNVc2VyRXhpc3RVcmwgPSB0aGlzLkJhc2VVcmxBcHAgKyBcIlVzZXIvSXNVc2VyRXhpc3QvXCIgKyB0aGlzLkxvZ2luVG9rZW47XHJcblx0XHR3ZWJDbGllbnQoaXNVc2VyRXhpc3RVcmwpXHJcblx0XHRcdC50aGVuKCgpID0+IHRoaXMuVXBkYXRlVXNlckluZm8odXNlckluZm8pKVxyXG5cdFx0XHQuY2F0Y2goKCkgPT4gdGhpcy5BZGRVc2VySW5mbyh1c2VySW5mbykpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBVcGRhdGVVc2VySW5mbyh1c2VySW5mbzogYW55KXtcclxuXHRcdGxldCB1cGRhdGVVc2VySW5mb1VybDogc3RyaW5nID0gdGhpcy5CYXNlVXJsQXBwICsgXCJVc2VyL1VwZGF0ZVVzZXJJbmZvL1wiICsgdGhpcy5Mb2dpblRva2VuO1xyXG5cdFx0bGV0IHVzZXJJbmZvRGF0YSA9IHtcclxuXHRcdFx0Tmlja05hbWU6IHVzZXJJbmZvLm5pY2tOYW1lLFxyXG5cdFx0XHRBdmF0YXJVcmw6IHVzZXJJbmZvLmF2YXRhclVybCxcclxuXHRcdFx0Q291bnRyeTogdXNlckluZm8uY291bnRyeSxcclxuXHRcdFx0UHJvdmluY2U6IHVzZXJJbmZvLnByb3ZpbmNlLFxyXG5cdFx0XHRDaXR5OiB1c2VySW5mby5jaXR5LFxyXG5cdFx0XHRMYW5ndWFnZTogdXNlckluZm8ubGFuZ3VhZ2VcclxuXHRcdH1cclxuXHRcdHdlYkNsaWVudCh1cGRhdGVVc2VySW5mb1VybCwgXCJQT1NUXCIsIHVzZXJJbmZvRGF0YSlcclxuXHRcdFx0LmNhdGNoKChyZXMpID0+IGNvbnNvbGUuZXJyb3IocmVzKSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIEFkZFVzZXJJbmZvKHVzZXJJbmZvOiBhbnkpe1xyXG5cdFx0bGV0IGFkZFVzZXJJbmZvVXJsOiBzdHJpbmcgPSB0aGlzLkJhc2VVcmxBcHAgKyBcIlVzZXIvQWRkVXNlci9cIiArIHRoaXMuTG9naW5Ub2tlbjtcclxuXHRcdGxldCB1c2VySW5mb0RhdGEgPSB7XHJcblx0XHRcdE5pY2tOYW1lOiB1c2VySW5mby5uaWNrTmFtZSxcclxuXHRcdFx0QXZhdGFyVXJsOiB1c2VySW5mby5hdmF0YXJVcmwsXHJcblx0XHRcdENvdW50cnk6IHVzZXJJbmZvLmNvdW50cnksXHJcblx0XHRcdFByb3ZpbmNlOiB1c2VySW5mby5wcm92aW5jZSxcclxuXHRcdFx0Q2l0eTogdXNlckluZm8uY2l0eSxcclxuXHRcdFx0TGFuZ3VhZ2U6IHVzZXJJbmZvLmxhbmd1YWdlXHJcblx0XHR9XHJcblx0XHR3ZWJDbGllbnQoYWRkVXNlckluZm9VcmwsIFwiUE9TVFwiLCB1c2VySW5mb0RhdGEpXHJcblx0XHRcdC5jYXRjaCgocmVzKSA9PiBjb25zb2xlLmVycm9yKHJlcykpO1xyXG5cdH1cdFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5TZXJ2aWNlID0gbmV3IExvZ2luU2VydmljZShhcHAuZ2xvYmFsRGF0YS5iYXNlVXJsQXBwKTsiXX0=