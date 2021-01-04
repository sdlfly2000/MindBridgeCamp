"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listService = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQztBQUUvQjtJQUVFLHFCQUFZLFVBQWtCO1FBRDlCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUFBLENBQUM7SUFFRiw4QkFBUSxHQUFSLFVBQVMsTUFBYztRQUF2QixpQkFZQztRQVhDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLE9BQU8sSUFBSSxPQUFPLENBQ2hCLFVBQUMsT0FBTztZQUNOLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEdBQUcsd0JBQXdCLEdBQUcsS0FBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNO2dCQUNuRixPQUFPLEVBQUUsVUFBUyxHQUFHO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELHVDQUFpQixHQUFqQjtRQUNFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLE9BQU8sSUFBSSxPQUFPLENBQ2hCLFVBQUMsT0FBTztZQUNOLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEdBQUksZ0NBQWdDO2dCQUN0RCxPQUFPLEVBQUUsVUFBUyxHQUFHO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVPLG1DQUFhLEdBQXJCO1FBQ0UsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFFWSxRQUFBLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcclxuXHJcbmNsYXNzIExpc3RTZXJ2aWNle1xyXG4gIEJhc2VVcmxBcHA6IHN0cmluZyA9IFwiXCI7XHJcbiAgY29uc3RydWN0b3IoYmFzZVVybEFwcDogc3RyaW5nKXtcclxuICAgIHRoaXMuQmFzZVVybEFwcCA9IGJhc2VVcmxBcHA7XHJcbiAgfTtcclxuXHJcbiAgSm9pblJvb20ocm9vbUlkOiBzdHJpbmcpe1xyXG4gICAgbGV0IHZtID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgKHJlc29sdmUpID0+IHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdm0uQmFzZVVybEFwcCArIFwiTGVhcm5pbmdSb29tL0pvaW5Sb29tL1wiICsgdGhpcy5HZXRMb2dpblRva2VuKCkgKyBcIi9cIiArIHJvb21JZCxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEdldEF2YWlsYWJsZVJvb21zKCl7XHJcbiAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB2bS5CYXNlVXJsQXBwICsgIFwiTGVhcm5pbmdSb29tL0dldEF2YWlsYWJsZVJvb21zXCIsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIEdldExvZ2luVG9rZW4oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB3eC5nZXRTdG9yYWdlU3luYyhcIkxvZ2luVG9rZW5cIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdFNlcnZpY2UgPSBuZXcgTGlzdFNlcnZpY2UoYXBwLmdsb2JhbERhdGEuYmFzZVVybEFwcCk7Il19