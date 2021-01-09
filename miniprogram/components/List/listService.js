"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listService = void 0;
var util_1 = require("../../utils/util");
var app = getApp();
var ListService = (function () {
    function ListService(baseUrlApp) {
        this.BaseUrlApp = "";
        this.BaseUrlApp = baseUrlApp;
    }
    ;
    ListService.prototype.JoinRoom = function (roomId) {
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
    ListService.prototype.GetRoomsParticipated = function () {
        var vm = this;
        var url = vm.BaseUrlApp + "LearningRoom/GetRoomsParticipated/" + this.GetLoginToken();
        return util_1.webClient(url);
    };
    ListService.prototype.GetAvailableRooms = function () {
        var vm = this;
        return new Promise(function (resolve) {
            wx.request({
                url: vm.BaseUrlApp + "LearningRoom/GetAvailableRooms",
                success: function (res) {
                    resolve(res);
                }
            });
        });
    };
    ListService.prototype.GetLoginToken = function () {
        return wx.getStorageSync("LoginToken");
    };
    return ListService;
}());
exports.listService = new ListService(app.globalData.baseUrlApp);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5Q0FBNkM7QUFFN0MsSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUM7QUFFL0I7SUFFRSxxQkFBWSxVQUFrQjtRQUQ5QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFBQSxDQUFDO0lBRUssOEJBQVEsR0FBZixVQUFnQixNQUFjO1FBQTlCLGlCQVlDO1FBWEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsT0FBTyxJQUFJLE9BQU8sQ0FDaEIsVUFBQyxPQUFPO1lBQ04sRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxHQUFHLEVBQUUsRUFBRSxDQUFDLFVBQVUsR0FBRyx3QkFBd0IsR0FBRyxLQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU07Z0JBQ25GLE9BQU8sRUFBRSxVQUFTLEdBQUc7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU0sMENBQW9CLEdBQTNCO1FBQ0UsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLFVBQVUsR0FBRyxvQ0FBb0MsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEYsT0FBTyxnQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSx1Q0FBaUIsR0FBeEI7UUFDRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZCxPQUFPLElBQUksT0FBTyxDQUNoQixVQUFDLE9BQU87WUFDTixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxFQUFFLENBQUMsVUFBVSxHQUFJLGdDQUFnQztnQkFDdEQsT0FBTyxFQUFFLFVBQVMsR0FBRztvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTyxtQ0FBYSxHQUFyQjtRQUNFLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBM0NELElBMkNDO0FBRVksUUFBQSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyB3ZWJDbGllbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbFwiO1xyXG5cclxudmFyIGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpO1xyXG5cclxuY2xhc3MgTGlzdFNlcnZpY2V7XHJcbiAgQmFzZVVybEFwcDogc3RyaW5nID0gXCJcIjtcclxuICBjb25zdHJ1Y3RvcihiYXNlVXJsQXBwOiBzdHJpbmcpe1xyXG4gICAgdGhpcy5CYXNlVXJsQXBwID0gYmFzZVVybEFwcDtcclxuICB9O1xyXG5cclxuICBwdWJsaWMgSm9pblJvb20ocm9vbUlkOiBzdHJpbmcpe1xyXG4gICAgbGV0IHZtID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgKHJlc29sdmUpID0+IHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdm0uQmFzZVVybEFwcCArIFwiTGVhcm5pbmdSb29tL0pvaW5Sb29tL1wiICsgdGhpcy5HZXRMb2dpblRva2VuKCkgKyBcIi9cIiArIHJvb21JZCxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBHZXRSb29tc1BhcnRpY2lwYXRlZCgpIHtcclxuICAgIGxldCB2bSA9IHRoaXM7XHJcbiAgICBsZXQgdXJsID0gdm0uQmFzZVVybEFwcCArIFwiTGVhcm5pbmdSb29tL0dldFJvb21zUGFydGljaXBhdGVkL1wiICsgdGhpcy5HZXRMb2dpblRva2VuKCk7XHJcbiAgICByZXR1cm4gd2ViQ2xpZW50KHVybCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgR2V0QXZhaWxhYmxlUm9vbXMoKXtcclxuICAgIGxldCB2bSA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHZtLkJhc2VVcmxBcHAgKyAgXCJMZWFybmluZ1Jvb20vR2V0QXZhaWxhYmxlUm9vbXNcIixcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgR2V0TG9naW5Ub2tlbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHd4LmdldFN0b3JhZ2VTeW5jKFwiTG9naW5Ub2tlblwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0U2VydmljZSA9IG5ldyBMaXN0U2VydmljZShhcHAuZ2xvYmFsRGF0YS5iYXNlVXJsQXBwKTsiXX0=