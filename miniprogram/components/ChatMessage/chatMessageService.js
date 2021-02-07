"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatMessageService = void 0;
var app = getApp();
var ChatMessageService = (function () {
    function ChatMessageService(bassUrlWs) {
        this._bassUrlWs = bassUrlWs;
    }
    ChatMessageService.prototype.Connect = function (RoomId) {
        var _this = this;
        return new Promise(function (resolve, error) {
            _this._socket = wx.connectSocket({
                url: _this._bassUrlWs + "ChatMessage/" + RoomId + "/" + _this.GetLoginToken(),
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
    ChatMessageService.prototype.GetLoginToken = function () {
        return wx.getStorageSync("LoginToken");
    };
    return ChatMessageService;
}());
exports.chatMessageService = new ChatMessageService(app.globalData.bassUrlWs);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdE1lc3NhZ2VTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdE1lc3NhZ2VTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFDO0FBRS9CO0lBR0UsNEJBQVksU0FBZ0I7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUNNLG9DQUFPLEdBQWQsVUFBZSxNQUFhO1FBQTVCLGlCQWVDO1FBZEMsT0FBTyxJQUFJLE9BQU8sQ0FDaEIsVUFBQyxPQUFPLEVBQUUsS0FBSztZQUNiLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDOUIsR0FBRyxFQUFFLEtBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxHQUFHLE1BQU0sR0FBRyxHQUFHLEdBQUcsS0FBSSxDQUFDLGFBQWEsRUFBRTtnQkFDM0UsT0FBTyxFQUFFLFVBQVMsR0FBRztvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLENBQUM7Z0JBQ0QsSUFBSSxFQUFFLFVBQVMsR0FBRztvQkFDaEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLENBQUM7YUFDRixDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBQ00sa0NBQUssR0FBWjs7UUFDRSxNQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7SUFDMUIsQ0FBQztJQUVPLHdDQUFXLEdBQW5COztRQUNFLE1BQUEsSUFBSSxDQUFDLE9BQU8sMENBQUUsTUFBTSxDQUNsQixVQUFDLEdBQUc7WUFDRixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsRUFBRTtRQUNILE1BQUEsSUFBSSxDQUFDLE9BQU8sMENBQUUsT0FBTyxDQUNuQixVQUFDLEdBQUc7WUFDRixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQ0Q7UUFDRixNQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLFNBQVMsQ0FDckIsVUFBQyxHQUFHO1lBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxFQUNEO0lBQ04sQ0FBQztJQUVPLDBDQUFhLEdBQXJCO1FBQ0UsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7QUFFWSxRQUFBLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKTtcclxuXHJcbmNsYXNzIENoYXRNZXNzYWdlU2VydmljZXtcclxuICBwcml2YXRlIF9iYXNzVXJsV3M6c3RyaW5nOyAgXHJcbiAgcHJpdmF0ZSBfc29ja2V0OiBXZWNoYXRNaW5pcHJvZ3JhbS5Tb2NrZXRUYXNrIHwgdW5kZWZpbmVkO1xyXG4gIGNvbnN0cnVjdG9yKGJhc3NVcmxXczpzdHJpbmcpe1xyXG4gICAgdGhpcy5fYmFzc1VybFdzID0gYmFzc1VybFdzO1xyXG4gIH1cclxuICBwdWJsaWMgQ29ubmVjdChSb29tSWQ6c3RyaW5nKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShcclxuICAgICAgKHJlc29sdmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc29ja2V0ID0gd3guY29ubmVjdFNvY2tldCh7XHJcbiAgICAgICAgICB1cmw6IHRoaXMuX2Jhc3NVcmxXcyArIFwiQ2hhdE1lc3NhZ2UvXCIgKyBSb29tSWQgKyBcIi9cIiArIHRoaXMuR2V0TG9naW5Ub2tlbigpLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIGVycm9yKHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5TZXR1cEV2ZW50cygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuICBwdWJsaWMgQ2xvc2UoKXtcclxuICAgIHRoaXMuX3NvY2tldD8uY2xvc2Uoe30pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBTZXR1cEV2ZW50cygpe1xyXG4gICAgdGhpcy5fc29ja2V0Py5vbk9wZW4oXHJcbiAgICAgIChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmluZm8ocmVzKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX3NvY2tldD8ub25FcnJvcihcclxuICAgICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKHJlcy5lcnJNc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgdGhpcy5fc29ja2V0Py5vbk1lc3NhZ2UoXHJcbiAgICAgICAgKHJlcykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5pbmZvKHJlcy5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIEdldExvZ2luVG9rZW4oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB3eC5nZXRTdG9yYWdlU3luYyhcIkxvZ2luVG9rZW5cIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hhdE1lc3NhZ2VTZXJ2aWNlID0gbmV3IENoYXRNZXNzYWdlU2VydmljZShhcHAuZ2xvYmFsRGF0YS5iYXNzVXJsV3MpOyJdfQ==