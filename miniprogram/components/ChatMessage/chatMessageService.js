"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatMessageService = void 0;
var app = getApp();
var ChatMessageService = (function () {
    function ChatMessageService(baseUrlWs, baseUrlApp) {
        this._baseUrlWs = baseUrlWs;
        this._baseUrlApp = baseUrlApp;
    }
    ChatMessageService.prototype.Connect = function (RoomId) {
        var _this = this;
        return new Promise(function (resolve, error) {
            _this._socket = wx.connectSocket({
                url: _this._baseUrlWs + "ChatMessage/" + RoomId + "/" + _this.GetLoginToken(),
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    error(res);
                }
            });
            _this.SetupEvents();
        });
    };
    ChatMessageService.prototype.Close = function () {
        var _a;
        (_a = this._socket) === null || _a === void 0 ? void 0 : _a.close({});
    };
    ChatMessageService.prototype.SetupEvents = function () {
        var _a, _b, _c;
        (_a = this._socket) === null || _a === void 0 ? void 0 : _a.onOpen(function (res) {
            console.info(res);
        });
        (_b = this._socket) === null || _b === void 0 ? void 0 : _b.onError(function (res) {
            console.error(res.errMsg);
        });
        (_c = this._socket) === null || _c === void 0 ? void 0 : _c.onMessage(function (res) {
            console.info(res.data);
        });
    };
    ChatMessageService.prototype.GetParticipants = function (roomId) {
        var _this = this;
        return new Promise(function (resolve, error) {
            wx.request({
                url: _this._baseUrlApp + "LearningRoom" + "/GetParticipants/" + roomId,
                success: function (res) {
                    if (res.statusCode == 200) {
                        resolve(res);
                    }
                    else {
                        error(res);
                    }
                },
                fail: function (res) {
                    error(res);
                }
            });
        });
    };
    ChatMessageService.prototype.GetParticpantsOnline = function (roomId) {
        var _this = this;
        return new Promise(function (resolve, error) {
            wx.request({
                url: _this._baseUrlApp + "LearningRoom" + "/GetParticipantsOnlineCount/" + roomId,
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    error(res);
                }
            });
        });
    };
    ChatMessageService.prototype.GetLoginToken = function () {
        return wx.getStorageSync("LoginToken");
    };
    return ChatMessageService;
}());
exports.chatMessageService = new ChatMessageService(app.globalData.baseUrlWs, app.globalData.baseUrlApp);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdE1lc3NhZ2VTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdE1lc3NhZ2VTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFDO0FBRS9CO0lBSUUsNEJBQVksU0FBZ0IsRUFBRSxVQUFpQjtRQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lBQ00sb0NBQU8sR0FBZCxVQUFlLE1BQWE7UUFBNUIsaUJBZUM7UUFkQyxPQUFPLElBQUksT0FBTyxDQUNoQixVQUFDLE9BQU8sRUFBRSxLQUFLO1lBQ2IsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUM5QixHQUFHLEVBQUUsS0FBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxLQUFJLENBQUMsYUFBYSxFQUFFO2dCQUMzRSxPQUFPLEVBQUUsVUFBUyxHQUFHO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBUyxHQUFHO29CQUNoQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQzthQUNGLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFDTSxrQ0FBSyxHQUFaOztRQUNFLE1BQUEsSUFBSSxDQUFDLE9BQU8sMENBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtJQUMxQixDQUFDO0lBRU8sd0NBQVcsR0FBbkI7O1FBQ0UsTUFBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxNQUFNLENBQ2xCLFVBQUMsR0FBRztZQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxFQUFFO1FBQ0gsTUFBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxPQUFPLENBQ25CLFVBQUMsR0FBRztZQUNGLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFDRDtRQUNGLE1BQUEsSUFBSSxDQUFDLE9BQU8sMENBQUUsU0FBUyxDQUNyQixVQUFDLEdBQUc7WUFDRixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQ0Q7SUFDTixDQUFDO0lBRU0sNENBQWUsR0FBdEIsVUFBdUIsTUFBYTtRQUFwQyxpQkFrQkM7UUFqQkMsT0FBTyxJQUFJLE9BQU8sQ0FDaEIsVUFBQyxPQUFPLEVBQUUsS0FBSztZQUNiLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsR0FBRyxFQUFFLEtBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxHQUFHLG1CQUFtQixHQUFHLE1BQU07Z0JBQ3JFLE9BQU8sRUFBRSxVQUFTLEdBQUc7b0JBQ25CLElBQUcsR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUM7d0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDZDt5QkFBSTt3QkFDSCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ1o7Z0JBQ0gsQ0FBQztnQkFDRCxJQUFJLEVBQUMsVUFBUyxHQUFHO29CQUNmLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU0saURBQW9CLEdBQTNCLFVBQTRCLE1BQWM7UUFBMUMsaUJBY0M7UUFiQyxPQUFPLElBQUksT0FBTyxDQUNoQixVQUFDLE9BQU8sRUFBRSxLQUFLO1lBRWIsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxHQUFHLEVBQUUsS0FBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLEdBQUcsOEJBQThCLEdBQUcsTUFBTTtnQkFDaEYsT0FBTyxFQUFFLFVBQVMsR0FBRztvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLENBQUM7Z0JBQ0QsSUFBSSxFQUFFLFVBQVMsR0FBRztvQkFDaEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTywwQ0FBYSxHQUFyQjtRQUNFLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBcEZELElBb0ZDO0FBRVksUUFBQSxrQkFBa0IsR0FBRyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KCk7XHJcblxyXG5jbGFzcyBDaGF0TWVzc2FnZVNlcnZpY2V7XHJcbiAgcHJpdmF0ZSBfYmFzZVVybFdzOnN0cmluZzsgIFxyXG4gIHByaXZhdGUgX2Jhc2VVcmxBcHA6c3RyaW5nO1xyXG4gIHByaXZhdGUgX3NvY2tldDogV2VjaGF0TWluaXByb2dyYW0uU29ja2V0VGFzayB8IHVuZGVmaW5lZDtcclxuICBjb25zdHJ1Y3RvcihiYXNlVXJsV3M6c3RyaW5nLCBiYXNlVXJsQXBwOnN0cmluZyl7XHJcbiAgICB0aGlzLl9iYXNlVXJsV3MgPSBiYXNlVXJsV3M7XHJcbiAgICB0aGlzLl9iYXNlVXJsQXBwID0gYmFzZVVybEFwcDtcclxuICB9XHJcbiAgcHVibGljIENvbm5lY3QoUm9vbUlkOnN0cmluZyl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgIChyZXNvbHZlLCBlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NvY2tldCA9IHd4LmNvbm5lY3RTb2NrZXQoe1xyXG4gICAgICAgICAgdXJsOiB0aGlzLl9iYXNlVXJsV3MgKyBcIkNoYXRNZXNzYWdlL1wiICsgUm9vbUlkICsgXCIvXCIgKyB0aGlzLkdldExvZ2luVG9rZW4oKSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICBlcnJvcihyZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuU2V0dXBFdmVudHMoKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgcHVibGljIENsb3NlKCl7XHJcbiAgICB0aGlzLl9zb2NrZXQ/LmNsb3NlKHt9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgU2V0dXBFdmVudHMoKXtcclxuICAgIHRoaXMuX3NvY2tldD8ub25PcGVuKFxyXG4gICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKHJlcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9zb2NrZXQ/Lm9uRXJyb3IoXHJcbiAgICAgICAgKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihyZXMuZXJyTXNnKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuX3NvY2tldD8ub25NZXNzYWdlKFxyXG4gICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuaW5mbyhyZXMuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIEdldFBhcnRpY2lwYW50cyhyb29tSWQ6c3RyaW5nKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgKHJlc29sdmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHRoaXMuX2Jhc2VVcmxBcHAgKyBcIkxlYXJuaW5nUm9vbVwiICsgXCIvR2V0UGFydGljaXBhbnRzL1wiICsgcm9vbUlkLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgaWYocmVzLnN0YXR1c0NvZGUgPT0gMjAwKXtcclxuICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIGVycm9yKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOmZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIGVycm9yKHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgR2V0UGFydGljcGFudHNPbmxpbmUocm9vbUlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgKHJlc29sdmUsIGVycm9yKSA9PlxyXG4gICAgICB7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHRoaXMuX2Jhc2VVcmxBcHAgKyBcIkxlYXJuaW5nUm9vbVwiICsgXCIvR2V0UGFydGljaXBhbnRzT25saW5lQ291bnQvXCIgKyByb29tSWQsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgZXJyb3IocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIEdldExvZ2luVG9rZW4oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB3eC5nZXRTdG9yYWdlU3luYyhcIkxvZ2luVG9rZW5cIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hhdE1lc3NhZ2VTZXJ2aWNlID0gbmV3IENoYXRNZXNzYWdlU2VydmljZShhcHAuZ2xvYmFsRGF0YS5iYXNlVXJsV3MsIGFwcC5nbG9iYWxEYXRhLmJhc2VVcmxBcHApOyJdfQ==