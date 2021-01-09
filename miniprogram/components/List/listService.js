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
    ListService.prototype.GetCreatorInfo = function (openId) {
        var vm = this;
        return new Promise(function (resolve) {
            wx.request({
                url: vm.BaseUrlApp + "User/Get/" + openId,
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
    ListService.prototype.GetParticipants = function (roomId) {
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
    ListService.prototype.GetLoginToken = function () {
        return wx.getStorageSync("LoginToken");
    };
    return ListService;
}());
exports.listService = new ListService(app.globalData.baseUrlApp);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxJQUFJLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQztBQUUvQjtJQUVFLHFCQUFZLFVBQWtCO1FBRDlCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUFBLENBQUM7SUFFRiw4QkFBUSxHQUFSLFVBQVMsTUFBYztRQUF2QixpQkFZQztRQVhDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLE9BQU8sSUFBSSxPQUFPLENBQ2hCLFVBQUMsT0FBTztZQUNOLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEdBQUcsd0JBQXdCLEdBQUcsS0FBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNO2dCQUNuRixPQUFPLEVBQUUsVUFBUyxHQUFHO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBZSxNQUFhO1FBQzFCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLE9BQU8sSUFBSSxPQUFPLENBQ2hCLFVBQUMsT0FBTztZQUNOLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEdBQUcsV0FBVyxHQUFHLE1BQU07Z0JBQ3pDLE9BQU8sRUFBRSxVQUFTLEdBQUc7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsdUNBQWlCLEdBQWpCO1FBQ0UsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsT0FBTyxJQUFJLE9BQU8sQ0FDaEIsVUFBQyxPQUFPO1lBQ04sRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxHQUFHLEVBQUUsRUFBRSxDQUFDLFVBQVUsR0FBSSxnQ0FBZ0M7Z0JBQ3RELE9BQU8sRUFBRSxVQUFTLEdBQUc7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQscUNBQWUsR0FBZixVQUFnQixNQUFhO1FBQzNCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLE9BQU8sSUFBSSxPQUFPLENBQ2hCLFVBQUMsT0FBTyxFQUFFLEtBQUs7WUFDYixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxFQUFFLENBQUMsVUFBVSxHQUFHLCtCQUErQixHQUFHLE1BQU07Z0JBQzdELE9BQU8sRUFBRSxVQUFTLEdBQUc7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDO2dCQUNELElBQUksRUFBRSxVQUFTLEdBQUc7b0JBQ2hCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU8sbUNBQWEsR0FBckI7UUFDRSxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQXBFRCxJQW9FQztBQUVZLFFBQUEsV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpO1xyXG5cclxuY2xhc3MgTGlzdFNlcnZpY2V7XHJcbiAgQmFzZVVybEFwcDogc3RyaW5nID0gXCJcIjtcclxuICBjb25zdHJ1Y3RvcihiYXNlVXJsQXBwOiBzdHJpbmcpe1xyXG4gICAgdGhpcy5CYXNlVXJsQXBwID0gYmFzZVVybEFwcDtcclxuICB9O1xyXG5cclxuICBKb2luUm9vbShyb29tSWQ6IHN0cmluZyl7XHJcbiAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB2bS5CYXNlVXJsQXBwICsgXCJMZWFybmluZ1Jvb20vSm9pblJvb20vXCIgKyB0aGlzLkdldExvZ2luVG9rZW4oKSArIFwiL1wiICsgcm9vbUlkLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgR2V0Q3JlYXRvckluZm8ob3BlbklkOnN0cmluZyl7XHJcbiAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB2bS5CYXNlVXJsQXBwICsgXCJVc2VyL0dldC9cIiArIG9wZW5JZCxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEdldEF2YWlsYWJsZVJvb21zKCl7XHJcbiAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB2bS5CYXNlVXJsQXBwICsgIFwiTGVhcm5pbmdSb29tL0dldEF2YWlsYWJsZVJvb21zXCIsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBHZXRQYXJ0aWNpcGFudHMocm9vbUlkOnN0cmluZyl7XHJcbiAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAocmVzb2x2ZSwgZXJyb3IpID0+IHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdm0uQmFzZVVybEFwcCArIFwiTGVhcm5pbmdSb29tL0dldFBhcnRpY2lwYW50cy9cIiArIHJvb21JZCxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbihlcnIpe1xyXG4gICAgICAgICAgICBlcnJvcihlcnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBHZXRMb2dpblRva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gd3guZ2V0U3RvcmFnZVN5bmMoXCJMb2dpblRva2VuXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RTZXJ2aWNlID0gbmV3IExpc3RTZXJ2aWNlKGFwcC5nbG9iYWxEYXRhLmJhc2VVcmxBcHApOyJdfQ==