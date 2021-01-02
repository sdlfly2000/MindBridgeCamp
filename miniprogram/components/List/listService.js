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
    return ListService;
}());
exports.listService = new ListService(app.globalData.baseUrlApp);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQztBQUUvQjtJQUVFLHFCQUFZLFVBQWtCO1FBRDlCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUFBLENBQUM7SUFFRix1Q0FBaUIsR0FBakI7UUFDRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZCxPQUFPLElBQUksT0FBTyxDQUNoQixVQUFDLE9BQU87WUFDTixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxFQUFFLENBQUMsVUFBVSxHQUFJLGdDQUFnQztnQkFDdEQsT0FBTyxFQUFFLFVBQVMsR0FBRztvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFFWSxRQUFBLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcclxuXHJcbmNsYXNzIExpc3RTZXJ2aWNle1xyXG4gIEJhc2VVcmxBcHA6IHN0cmluZyA9IFwiXCI7XHJcbiAgY29uc3RydWN0b3IoYmFzZVVybEFwcDogc3RyaW5nKXtcclxuICAgIHRoaXMuQmFzZVVybEFwcCA9IGJhc2VVcmxBcHA7XHJcbiAgfTtcclxuXHJcbiAgR2V0QXZhaWxhYmxlUm9vbXMoKXtcclxuICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHZtLkJhc2VVcmxBcHAgKyAgXCJMZWFybmluZ1Jvb20vR2V0QXZhaWxhYmxlUm9vbXNcIixcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0U2VydmljZSA9IG5ldyBMaXN0U2VydmljZShhcHAuZ2xvYmFsRGF0YS5iYXNlVXJsQXBwKTsiXX0=