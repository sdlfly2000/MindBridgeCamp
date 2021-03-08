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
    ChatMessageService.prototype.SetupEvents = function () {
        var _a, _b, _c;
        (_a = this._socket) === null || _a === void 0 ? void 0 : _a.onOpen(function () {
            console.info("Websocket connected.");
        });
        (_b = this._socket) === null || _b === void 0 ? void 0 : _b.onError(function (res) {
            console.error(res.errMsg);
        });
        (_c = this._socket) === null || _c === void 0 ? void 0 : _c.onMessage(function (res) {
            console.info(res.data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdE1lc3NhZ2VTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdE1lc3NhZ2VTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFDO0FBRS9CO0lBSUUsNEJBQVksU0FBZ0IsRUFBRSxVQUFpQjtRQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lBQ00sb0NBQU8sR0FBZCxVQUFlLE1BQWE7UUFBNUIsaUJBZUM7UUFkQyxPQUFPLElBQUksT0FBTyxDQUNoQixVQUFDLE9BQU8sRUFBRSxLQUFLO1lBQ2IsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUM5QixHQUFHLEVBQUUsS0FBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxLQUFJLENBQUMsYUFBYSxFQUFFO2dCQUMzRSxPQUFPLEVBQUUsVUFBUyxHQUFHO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBUyxHQUFHO29CQUNoQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQzthQUNGLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSxpQ0FBSSxHQUFYLFVBQVksT0FBYzs7UUFDeEIsTUFBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxJQUFJLENBQUM7WUFDakIsSUFBSSxFQUFFLE9BQU87U0FDZCxFQUFFO0lBQ0wsQ0FBQztJQUVNLGtDQUFLLEdBQVo7O1FBQ0UsTUFBQSxJQUFJLENBQUMsT0FBTywwQ0FBRSxLQUFLLENBQUMsRUFBRSxFQUFFO0lBQzFCLENBQUM7SUFFTyx3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QyxXQUFXLEdBQUcsY0FBYyxHQUFHLDhCQUE4QixHQUFHLE1BQU07Z0JBQ2hGLE9BQU8sRUFBRSxVQUFTLEdBQUc7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDO2dCQUNELElBQUksRUFBRSxVQUFTLEdBQUc7b0JBQ2hCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sMENBQWEsR0FBckI7UUFDRSxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQWpJRCxJQWlJQztBQUVZLFFBQUEsa0JBQWtCLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpO1xyXG5cclxuY2xhc3MgQ2hhdE1lc3NhZ2VTZXJ2aWNle1xyXG4gIHByaXZhdGUgX2Jhc2VVcmxXczpzdHJpbmc7ICBcclxuICBwcml2YXRlIF9iYXNlVXJsQXBwOnN0cmluZztcclxuICBwcml2YXRlIF9zb2NrZXQ6IFdlY2hhdE1pbmlwcm9ncmFtLlNvY2tldFRhc2sgfCB1bmRlZmluZWQ7XHJcbiAgY29uc3RydWN0b3IoYmFzZVVybFdzOnN0cmluZywgYmFzZVVybEFwcDpzdHJpbmcpe1xyXG4gICAgdGhpcy5fYmFzZVVybFdzID0gYmFzZVVybFdzO1xyXG4gICAgdGhpcy5fYmFzZVVybEFwcCA9IGJhc2VVcmxBcHA7XHJcbiAgfVxyXG4gIHB1YmxpYyBDb25uZWN0KFJvb21JZDpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAocmVzb2x2ZSwgZXJyb3IpID0+IHtcclxuICAgICAgICB0aGlzLl9zb2NrZXQgPSB3eC5jb25uZWN0U29ja2V0KHtcclxuICAgICAgICAgIHVybDogdGhpcy5fYmFzZVVybFdzICsgXCJDaGF0TWVzc2FnZS9cIiArIFJvb21JZCArIFwiL1wiICsgdGhpcy5HZXRMb2dpblRva2VuKCksXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgZXJyb3IocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLlNldHVwRXZlbnRzKCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgU2VuZChjb250ZW50OnN0cmluZyl7XHJcbiAgICB0aGlzLl9zb2NrZXQ/LnNlbmQoe1xyXG4gICAgICBkYXRhOiBjb250ZW50XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBDbG9zZSgpe1xyXG4gICAgdGhpcy5fc29ja2V0Py5jbG9zZSh7fSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIFNldHVwRXZlbnRzKCl7XHJcbiAgICB0aGlzLl9zb2NrZXQ/Lm9uT3BlbihcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhcIldlYnNvY2tldCBjb25uZWN0ZWQuXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fc29ja2V0Py5vbkVycm9yKFxyXG4gICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzLmVyck1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl9zb2NrZXQ/Lm9uTWVzc2FnZShcclxuICAgICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmluZm8ocmVzLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBHZXRNZXNzYWdlcyhyb29tSWQ6IHN0cmluZyl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgIChyZXNvbHZlLCBlcnJvcikgPT4ge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB0aGlzLl9iYXNlVXJsQXBwICsgXCJMZWFybmluZ1Jvb20vR2V0QWxsTWVzc2FnZXNCeVJvb20vXCIgKyB0aGlzLkdldExvZ2luVG9rZW4oKSArIFwiL1wiICsgcm9vbUlkLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIGVycm9yKHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgU2F2ZU1lc3NhZ2Uocm9vbUlkOnN0cmluZywgbWVzc2FnZTpzdHJpbmcpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAocmVzb2x2ZSwgZXJyb3IpID0+IHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdGhpcy5fYmFzZVVybEFwcCArIFwiTGVhcm5pbmdSb29tL1NhdmVNZXNzYWdlXCIsXHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBsb2dpblRva2VuOiB0aGlzLkdldExvZ2luVG9rZW4oKSxcclxuICAgICAgICAgICAgcm9vbUlkOiByb29tSWQsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IG1lc3NhZ2VcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgZXJyb3IocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBHZXRQYXJ0aWNpcGFudHMocm9vbUlkOnN0cmluZyl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgIChyZXNvbHZlLCBlcnJvcikgPT4ge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB0aGlzLl9iYXNlVXJsQXBwICsgXCJMZWFybmluZ1Jvb21cIiArIFwiL0dldFBhcnRpY2lwYW50cy9cIiArIHJvb21JZCxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIGlmKHJlcy5zdGF0dXNDb2RlID09IDIwMCl7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICBlcnJvcihyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDpmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICBlcnJvcihyZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIEdldFBhcnRpY3BhbnRzT25saW5lKHJvb21JZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoXHJcbiAgICAgIChyZXNvbHZlLCBlcnJvcikgPT5cclxuICAgICAge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB0aGlzLl9iYXNlVXJsQXBwICsgXCJMZWFybmluZ1Jvb21cIiArIFwiL0dldFBhcnRpY2lwYW50c09ubGluZUNvdW50L1wiICsgcm9vbUlkLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIGVycm9yKHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBHZXRMb2dpblRva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gd3guZ2V0U3RvcmFnZVN5bmMoXCJMb2dpblRva2VuXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoYXRNZXNzYWdlU2VydmljZSA9IG5ldyBDaGF0TWVzc2FnZVNlcnZpY2UoYXBwLmdsb2JhbERhdGEuYmFzZVVybFdzLCBhcHAuZ2xvYmFsRGF0YS5iYXNlVXJsQXBwKTsiXX0=