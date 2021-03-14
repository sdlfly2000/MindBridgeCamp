"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatMessageService = void 0;
var app = getApp();
var ChatMessageService = (function () {
    function ChatMessageService(baseUrlWs, baseUrlApp) {
        this._baseUrlWs = baseUrlWs;
        this._baseUrlApp = baseUrlApp;
    }
    ChatMessageService.prototype.Connect = function (connectOptions) {
        var _this = this;
        return new Promise(function (resolve, error) {
            _this._socket = wx.connectSocket({
                url: _this._baseUrlWs + "ChatMessage/" + connectOptions.roomId + "/" + _this.GetLoginToken(),
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    error(res);
                }
            });
            _this.SetupEvents({ onMessage: connectOptions.onMessage });
        });
    };
    ChatMessageService.prototype.Send = function (content) {
        var _a;
        (_a = this._socket) === null || _a === void 0 ? void 0 : _a.send({
            data: content
        });
    };
    ChatMessageService.prototype.Close = function () {
        var _a;
        (_a = this._socket) === null || _a === void 0 ? void 0 : _a.close({});
    };
    ChatMessageService.prototype.SetupEvents = function (eventHandlers) {
        var _a, _b, _c;
        (_a = this._socket) === null || _a === void 0 ? void 0 : _a.onOpen(function () {
            console.info("Websocket connected.");
        });
        (_b = this._socket) === null || _b === void 0 ? void 0 : _b.onError(function (res) {
            console.error(res.errMsg);
        });
        (_c = this._socket) === null || _c === void 0 ? void 0 : _c.onMessage(function (res) {
            var model = JSON.parse(res.data);
            console.info(res.data);
            eventHandlers.onMessage(model);
        });
    };
    ChatMessageService.prototype.GetMessages = function (roomId) {
        var _this = this;
        return new Promise(function (resolve, error) {
            wx.request({
                url: _this._baseUrlApp + "LearningRoom/GetAllMessagesByRoom/" + _this.GetLoginToken() + "/" + roomId,
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    error(res);
                }
            });
        });
    };
    ChatMessageService.prototype.SaveMessage = function (roomId, message) {
        var _this = this;
        return new Promise(function (resolve, error) {
            wx.request({
                url: _this._baseUrlApp + "LearningRoom/SaveMessage",
                method: "POST",
                data: {
                    loginToken: _this.GetLoginToken(),
                    roomId: roomId,
                    content: message
                },
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    error(res);
                }
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdE1lc3NhZ2VTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdE1lc3NhZ2VTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFDO0FBRS9CO0lBSUUsNEJBQVksU0FBZ0IsRUFBRSxVQUFpQjtRQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lBQ00sb0NBQU8sR0FBZCxVQUFlLGNBQThCO1FBQTdDLGlCQWVDO1FBZEMsT0FBTyxJQUFJLE9BQU8sQ0FDaEIsVUFBQyxPQUFPLEVBQUUsS0FBSztZQUNiLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDOUIsR0FBRyxFQUFFLEtBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEtBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQzFGLE9BQU8sRUFBRSxVQUFTLEdBQUc7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDO2dCQUNELElBQUksRUFBRSxVQUFTLEdBQUc7b0JBQ2hCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSxpQ0FBSSxHQUFYLFVBQVksT0FBYzs7UUFDeEIsTUFBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxJQUFJLENBQUM7WUFDakIsSUFBSSxFQUFFLE9BQU87U0FDZCxFQUFFO0lBQ0wsQ0FBQztJQUVNLGtDQUFLLEdBQVo7O1FBQ0UsTUFBQSxJQUFJLENB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LENBQUM7UUFDTCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSxpREFBb0IsR0FBM0IsVUFBNEIsTUFBYztRQUExQyxpQkFjQztRQWJDLE9BQU8sSUFBSSxPQUFPLENBQ2hCLFVBQUMsT0FBTyxFQUFFLEtBQUs7WUFFYixFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNULEdBQUcsRUFBRSxLQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsR0FBRyw4QkFBOEIsR0FBRyxNQUFNO2dCQUNoRixPQUFPLEVBQUUsVUFBUyxHQUFHO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBUyxHQUFHO29CQUNoQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLDBDQUFhLEdBQXJCO1FBQ0UsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFuSUQsSUFtSUM7QUF5QlksUUFBQSxrQkFBa0IsR0FBRyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KCk7XHJcblxyXG5jbGFzcyBDaGF0TWVzc2FnZVNlcnZpY2V7XHJcbiAgcHJpdmF0ZSBfYmFzZVVybFdzOnN0cmluZzsgIFxyXG4gIHByaXZhdGUgX2Jhc2VVcmxBcHA6c3RyaW5nO1xyXG4gIHByaXZhdGUgX3NvY2tldDogV2VjaGF0TWluaXByb2dyYW0uU29ja2V0VGFzayB8IHVuZGVmaW5lZDtcclxuICBjb25zdHJ1Y3RvcihiYXNlVXJsV3M6c3RyaW5nLCBiYXNlVXJsQXBwOnN0cmluZyl7XHJcbiAgICB0aGlzLl9iYXNlVXJsV3MgPSBiYXNlVXJsV3M7XHJcbiAgICB0aGlzLl9iYXNlVXJsQXBwID0gYmFzZVVybEFwcDtcclxuICB9XHJcbiAgcHVibGljIENvbm5lY3QoY29ubmVjdE9wdGlvbnM6IENvbm5lY3RPcHRpb25zKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgKHJlc29sdmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc29ja2V0ID0gd3guY29ubmVjdFNvY2tldCh7XHJcbiAgICAgICAgICB1cmw6IHRoaXMuX2Jhc2VVcmxXcyArIFwiQ2hhdE1lc3NhZ2UvXCIgKyBjb25uZWN0T3B0aW9ucy5yb29tSWQgKyBcIi9cIiArIHRoaXMuR2V0TG9naW5Ub2tlbigpLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIGVycm9yKHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5TZXR1cEV2ZW50cyh7b25NZXNzYWdlOiBjb25uZWN0T3B0aW9ucy5vbk1lc3NhZ2V9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBTZW5kKGNvbnRlbnQ6c3RyaW5nKXtcclxuICAgIHRoaXMuX3NvY2tldD8uc2VuZCh7XHJcbiAgICAgIGRhdGE6IGNvbnRlbnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIENsb3NlKCl7XHJcbiAgICB0aGlzLl9zb2NrZXQ/LmNsb3NlKHt9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgU2V0dXBFdmVudHMoZXZlbnRIYW5kbGVyczogV2Vic29ja2V0RXZlbnRIYW5kbGVycyl7XHJcbiAgICB0aGlzLl9zb2NrZXQ/Lm9uT3BlbihcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhcIldlYnNvY2tldCBjb25uZWN0ZWQuXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fc29ja2V0Py5vbkVycm9yKFxyXG4gICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzLmVyck1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl9zb2NrZXQ/Lm9uTWVzc2FnZShcclxuICAgICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgICBsZXQgbW9kZWwgPSBKU09OLnBhcnNlKHJlcy5kYXRhIGFzIHN0cmluZykgYXMgTGVhcm5pbmdSb29tTWVzc2FnZU1vZGVsXHJcbiAgICAgICAgICBjb25zb2xlLmluZm8ocmVzLmRhdGEpO1xyXG4gICAgICAgICAgZXZlbnRIYW5kbGVycy5vbk1lc3NhZ2UobW9kZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBHZXRNZXNzYWdlcyhyb29tSWQ6IHN0cmluZyl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgIChyZXNvbHZlLCBlcnJvcikgPT4ge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB0aGlzLl9iYXNlVXJsQXBwICsgXCJMZWFybmluZ1Jvb20vR2V0QWxsTWVzc2FnZXNCeVJvb20vXCIgKyB0aGlzLkdldExvZ2luVG9rZW4oKSArIFwiL1wiICsgcm9vbUlkLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIGVycm9yKHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgU2F2ZU1lc3NhZ2Uocm9vbUlkOnN0cmluZywgbWVzc2FnZTpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAocmVzb2x2ZSwgZXJyb3IpID0+IHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdGhpcy5fYmFzZVVybEFwcCArIFwiTGVhcm5pbmdSb29tL1NhdmVNZXNzYWdlXCIsXHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBsb2dpblRva2VuOiB0aGlzLkdldExvZ2luVG9rZW4oKSxcclxuICAgICAgICAgICAgcm9vbUlkOiByb29tSWQsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IG1lc3NhZ2VcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgZXJyb3IocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBHZXRQYXJ0aWNpcGFudHMocm9vbUlkOnN0cmluZyl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgIChyZXNvbHZlLCBlcnJvcikgPT4ge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB0aGlzLl9iYXNlVXJsQXBwICsgXCJMZWFybmluZ1Jvb21cIiArIFwiL0dldFBhcnRpY2lwYW50cy9cIiArIHJvb21JZCxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIGlmKHJlcy5zdGF0dXNDb2RlID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICBlcnJvcihyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDpmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICBlcnJvcihyZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIEdldFBhcnRpY3BhbnRzT25saW5lKHJvb21JZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgIChyZXNvbHZlLCBlcnJvcikgPT5cclxuICAgICAge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB0aGlzLl9iYXNlVXJsQXBwICsgXCJMZWFybmluZ1Jvb21cIiArIFwiL0dldFBhcnRpY2lwYW50c09ubGluZUNvdW50L1wiICsgcm9vbUlkLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIGVycm9yKHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBHZXRMb2dpblRva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gd3guZ2V0U3RvcmFnZVN5bmMoXCJMb2dpblRva2VuXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25uZWN0T3B0aW9ucyB7XHJcbiAgcm9vbUlkOnN0cmluZyxcclxuICBvbk1lc3NhZ2U6IChtZXNzYWdlOkxlYXJuaW5nUm9vbU1lc3NhZ2VNb2RlbCkgPT4gdm9pZFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlYnNvY2tldEV2ZW50SGFuZGxlcnN7XHJcbiAgb25NZXNzYWdlOiAobWVzc2FnZTpMZWFybmluZ1Jvb21NZXNzYWdlTW9kZWwpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMZWFybmluZ1Jvb21NZXNzYWdlTW9kZWx7XHJcbiAgY3JlYXRlZEJ5Tmlja05hbWU6IHN0cmluZyxcclxuICBjb250ZW50OiBzdHJpbmcsXHJcbiAgaXNDcmVhdGVkQnlSZXF1ZXN0ZXI6IGJvb2xlYW4sXHJcbiAgY3JlYXRlZE9uOiBEYXRlXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFydGljaXBhbnQge1xyXG4gIE5hbWU6c3RyaW5nLFxyXG4gIE5pY2tOYW1lOiBzdHJpbmcsXHJcbiAgR2VuZGVyOiBudW1iZXIsXHJcbiAgQXZhdGFyVXJsOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoYXRNZXNzYWdlU2VydmljZSA9IG5ldyBDaGF0TWVzc2FnZVNlcnZpY2UoYXBwLmdsb2JhbERhdGEuYmFzZVVybFdzLCBhcHAuZ2xvYmFsRGF0YS5iYXNlVXJsQXBwKTsiXX0=