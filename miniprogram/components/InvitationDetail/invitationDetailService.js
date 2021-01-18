"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invitationDetailService = void 0;
var util_1 = require("../../utils/util");
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
    InvitationDetailService.prototype.IsJoinRoom = function (roomId) {
        var isJoinRoomUrl = this.BaseUrlApp + "LearningRoom/IsJoinRoom/" + this.GetLoginToken() + "/" + roomId;
        return util_1.webClient(isJoinRoomUrl);
    };
    InvitationDetailService.prototype.GetLoginToken = function () {
        return wx.getStorageSync("LoginToken");
    };
    return InvitationDetailService;
}());
exports.invitationDetailService = new InvitationDetailService(app.globalData.baseUrlApp);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRhdGlvbkRldGFpbFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnZpdGF0aW9uRGV0YWlsU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBNkM7QUFFN0MsSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUM7QUFFL0I7SUFFRSxpQ0FBWSxVQUFrQjtRQUQ5QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFFTSwwQ0FBUSxHQUFmLFVBQWdCLE1BQWM7UUFBOUIsaUJBWUM7UUFYQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZCxPQUFPLElBQUksT0FBTyxDQUNoQixVQUFDLE9BQU87WUFDTixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxFQUFFLENBQUMsVUFBVSxHQUFHLHdCQUF3QixHQUFHLEtBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTTtnQkFDbkYsT0FBTyxFQUFFLFVBQVMsR0FBRztvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSxnREFBYyxHQUFyQixVQUFzQixNQUFhO1FBQ2pDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLE9BQU8sSUFBSSxPQUFPLENBQ2hCLFVBQUMsT0FBTyxFQUFFLEtBQUs7WUFDYixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxFQUFFLENBQUMsVUFBVSxHQUFHLFdBQVcsR0FBRyxNQUFNO2dCQUN6QyxPQUFPLEVBQUUsVUFBUyxHQUFHO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBUyxDQUFDO29CQUNkLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU0saURBQWUsR0FBdEIsVUFBdUIsTUFBYTtRQUNsQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZCxPQUFPLElBQUksT0FBTyxDQUNoQixVQUFDLE9BQU8sRUFBRSxLQUFLO1lBQ2IsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxHQUFHLEVBQUUsRUFBRSxDQUFDLFVBQVUsR0FBRywrQkFBK0IsR0FBRyxNQUFNO2dCQUM3RCxPQUFPLEVBQUUsVUFBUyxHQUFHO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBUyxHQUFHO29CQUNoQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVNLDRDQUFVLEdBQWpCLFVBQWtCLE1BQWM7UUFDOUIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRywwQkFBMEIsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUN2RyxPQUFPLGdCQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVPLCtDQUFhLEdBQXJCO1FBQ0UsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUE5REQsSUE4REM7QUFFWSxRQUFBLHVCQUF1QixHQUFHLElBQUksdUJBQXVCLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdlYkNsaWVudCB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsXCI7XHJcblxyXG52YXIgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KCk7XHJcblxyXG5jbGFzcyBJbnZpdGF0aW9uRGV0YWlsU2VydmljZXtcclxuICBCYXNlVXJsQXBwOiBzdHJpbmcgPSBcIlwiO1xyXG4gIGNvbnN0cnVjdG9yKGJhc2VVcmxBcHA6IHN0cmluZyl7XHJcbiAgICB0aGlzLkJhc2VVcmxBcHAgPSBiYXNlVXJsQXBwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIEpvaW5Sb29tKHJvb21JZDogc3RyaW5nKXtcclxuICAgIGxldCB2bSA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHZtLkJhc2VVcmxBcHAgKyBcIkxlYXJuaW5nUm9vbS9Kb2luUm9vbS9cIiArIHRoaXMuR2V0TG9naW5Ub2tlbigpICsgXCIvXCIgKyByb29tSWQsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgR2V0Q3JlYXRvckluZm8ob3BlbklkOnN0cmluZyl7XHJcbiAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAocmVzb2x2ZSwgZXJyb3IpID0+IHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdm0uQmFzZVVybEFwcCArIFwiVXNlci9HZXQvXCIgKyBvcGVuSWQsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGVycm9yKGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIEdldFBhcnRpY2lwYW50cyhyb29tSWQ6c3RyaW5nKXtcclxuICAgIGxldCB2bSA9IHRoaXM7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgIChyZXNvbHZlLCBlcnJvcikgPT4ge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB2bS5CYXNlVXJsQXBwICsgXCJMZWFybmluZ1Jvb20vR2V0UGFydGljaXBhbnRzL1wiICsgcm9vbUlkLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKGVycil7XHJcbiAgICAgICAgICAgIGVycm9yKGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgSXNKb2luUm9vbShyb29tSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICBsZXQgaXNKb2luUm9vbVVybCA9IHRoaXMuQmFzZVVybEFwcCArIFwiTGVhcm5pbmdSb29tL0lzSm9pblJvb20vXCIgKyB0aGlzLkdldExvZ2luVG9rZW4oKSArIFwiL1wiICsgcm9vbUlkO1xyXG4gICAgcmV0dXJuIHdlYkNsaWVudChpc0pvaW5Sb29tVXJsKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgR2V0TG9naW5Ub2tlbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHd4LmdldFN0b3JhZ2VTeW5jKFwiTG9naW5Ub2tlblwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbnZpdGF0aW9uRGV0YWlsU2VydmljZSA9IG5ldyBJbnZpdGF0aW9uRGV0YWlsU2VydmljZShhcHAuZ2xvYmFsRGF0YS5iYXNlVXJsQXBwKSJdfQ==