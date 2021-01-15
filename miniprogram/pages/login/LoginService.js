"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = void 0;
var util_1 = require("../../utils/util");
var app = getApp();
var LoginService = (function () {
    function LoginService(baseUrlApp) {
        this.BaseUrlApp = "";
        this.BaseUrlApp = baseUrlApp;
    }
    LoginService.prototype.UpdateOrAddUserInfo = function (loginToken, userInfo) {
        var _this = this;
        var isUserExistUrl = this.BaseUrlApp + "User/IsUserExist/" + loginToken;
        util_1.webClient(isUserExistUrl)
            .then(function () { return _this.UpdateUserInfo(loginToken, userInfo); })
            .catch(function () { return _this.AddUserInfo(loginToken, userInfo); });
    };
    LoginService.prototype.UpdateUserInfo = function (loginToken, userInfo) {
        var updateUserInfoUrl = this.BaseUrlApp + "User/UpdateUserInfo/" + loginToken;
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
    LoginService.prototype.AddUserInfo = function (loginToken, userInfo) {
        var addUserInfoUrl = this.BaseUrlApp + "User/AddUser/" + loginToken;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5TZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTG9naW5TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE2QztBQUU3QyxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQztBQUUvQjtJQUdDLHNCQUFZLFVBQWtCO1FBRnRCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFHL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDOUIsQ0FBQztJQUVNLDBDQUFtQixHQUExQixVQUEyQixVQUFrQixFQUFFLFFBQWE7UUFBNUQsaUJBS0M7UUFKQSxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFtQixHQUFHLFVBQVUsQ0FBQztRQUN4RSxnQkFBUyxDQUFDLGNBQWMsQ0FBQzthQUN2QixJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxFQUF6QyxDQUF5QyxDQUFDO2FBQ3JELEtBQUssQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEVBQXRDLENBQXNDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU8scUNBQWMsR0FBdEIsVUFBdUIsVUFBa0IsRUFBRSxRQUFhO1FBQ3ZELElBQUksaUJBQWlCLEdBQVcsSUFBSSxDQUFDLFVBQVUsR0FBRyxzQkFBc0IsR0FBRyxVQUFVLENBQUM7UUFDdEYsSUFBSSxZQUFZLEdBQUc7WUFDbEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1lBQzNCLFNBQVMsRUFBRSxRQUFRLENBQUMsU0FBUztZQUM3QixPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU87WUFDekIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1lBQzNCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtZQUNuQixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7U0FDM0IsQ0FBQTtRQUNELGdCQUFTLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQzthQUNoRCxLQUFLLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVPLGtDQUFXLEdBQW5CLFVBQW9CLFVBQWtCLEVBQUUsUUFBYTtRQUNwRCxJQUFJLGNBQWMsR0FBVyxJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsR0FBRyxVQUFVLENBQUM7UUFDNUUsSUFBSSxZQUFZLEdBQUc7WUFDbEIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1lBQzNCLFNBQVMsRUFBRSxRQUFRLENBQUMsU0FBUztZQUM3QixPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU87WUFDekIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO1lBQzNCLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtZQUNuQixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7U0FDM0IsQ0FBQTtRQUNELGdCQUFTLENBQUMsY0FBYyxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUM7YUFDN0MsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRixtQkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7QUFFWSxRQUFBLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2ViQ2xpZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxcIjtcclxuXHJcbnZhciBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcclxuXHJcbmNsYXNzIExvZ2luU2VydmljZXtcclxuXHRwcml2YXRlIEJhc2VVcmxBcHA6IHN0cmluZyA9IFwiXCI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGJhc2VVcmxBcHA6IHN0cmluZyl7XHJcblx0XHR0aGlzLkJhc2VVcmxBcHAgPSBiYXNlVXJsQXBwO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgVXBkYXRlT3JBZGRVc2VySW5mbyhsb2dpblRva2VuOiBzdHJpbmcsIHVzZXJJbmZvOiBhbnkpe1xyXG5cdFx0bGV0IGlzVXNlckV4aXN0VXJsID0gdGhpcy5CYXNlVXJsQXBwICsgXCJVc2VyL0lzVXNlckV4aXN0L1wiICsgbG9naW5Ub2tlbjtcclxuXHRcdHdlYkNsaWVudChpc1VzZXJFeGlzdFVybClcclxuXHRcdFx0LnRoZW4oKCkgPT4gdGhpcy5VcGRhdGVVc2VySW5mbyhsb2dpblRva2VuLCB1c2VySW5mbykpXHJcblx0XHRcdC5jYXRjaCgoKSA9PiB0aGlzLkFkZFVzZXJJbmZvKGxvZ2luVG9rZW4sIHVzZXJJbmZvKSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIFVwZGF0ZVVzZXJJbmZvKGxvZ2luVG9rZW46IHN0cmluZywgdXNlckluZm86IGFueSl7XHJcblx0XHRsZXQgdXBkYXRlVXNlckluZm9Vcmw6IHN0cmluZyA9IHRoaXMuQmFzZVVybEFwcCArIFwiVXNlci9VcGRhdGVVc2VySW5mby9cIiArIGxvZ2luVG9rZW47XHJcblx0XHRsZXQgdXNlckluZm9EYXRhID0ge1xyXG5cdFx0XHROaWNrTmFtZTogdXNlckluZm8ubmlja05hbWUsXHJcblx0XHRcdEF2YXRhclVybDogdXNlckluZm8uYXZhdGFyVXJsLFxyXG5cdFx0XHRDb3VudHJ5OiB1c2VySW5mby5jb3VudHJ5LFxyXG5cdFx0XHRQcm92aW5jZTogdXNlckluZm8ucHJvdmluY2UsXHJcblx0XHRcdENpdHk6IHVzZXJJbmZvLmNpdHksXHJcblx0XHRcdExhbmd1YWdlOiB1c2VySW5mby5sYW5ndWFnZVxyXG5cdFx0fVxyXG5cdFx0d2ViQ2xpZW50KHVwZGF0ZVVzZXJJbmZvVXJsLCBcIlBPU1RcIiwgdXNlckluZm9EYXRhKVxyXG5cdFx0XHQuY2F0Y2goKHJlcykgPT4gY29uc29sZS5lcnJvcihyZXMpKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgQWRkVXNlckluZm8obG9naW5Ub2tlbjogc3RyaW5nLCB1c2VySW5mbzogYW55KXtcclxuXHRcdGxldCBhZGRVc2VySW5mb1VybDogc3RyaW5nID0gdGhpcy5CYXNlVXJsQXBwICsgXCJVc2VyL0FkZFVzZXIvXCIgKyBsb2dpblRva2VuO1xyXG5cdFx0bGV0IHVzZXJJbmZvRGF0YSA9IHtcclxuXHRcdFx0Tmlja05hbWU6IHVzZXJJbmZvLm5pY2tOYW1lLFxyXG5cdFx0XHRBdmF0YXJVcmw6IHVzZXJJbmZvLmF2YXRhclVybCxcclxuXHRcdFx0Q291bnRyeTogdXNlckluZm8uY291bnRyeSxcclxuXHRcdFx0UHJvdmluY2U6IHVzZXJJbmZvLnByb3ZpbmNlLFxyXG5cdFx0XHRDaXR5OiB1c2VySW5mby5jaXR5LFxyXG5cdFx0XHRMYW5ndWFnZTogdXNlckluZm8ubGFuZ3VhZ2VcclxuXHRcdH1cclxuXHRcdHdlYkNsaWVudChhZGRVc2VySW5mb1VybCwgXCJQT1NUXCIsIHVzZXJJbmZvRGF0YSlcclxuXHRcdFx0LmNhdGNoKChyZXMpID0+IGNvbnNvbGUuZXJyb3IocmVzKSk7XHJcblx0fVx0XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblNlcnZpY2UgPSBuZXcgTG9naW5TZXJ2aWNlKGFwcC5nbG9iYWxEYXRhLmJhc2VVcmxBcHApOyJdfQ==