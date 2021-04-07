"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listNoteService = void 0;
var app = getApp();
var ListNoteService = (function () {
    function ListNoteService(baseUrlApp) {
        this.BaseUrlApp = "";
        this.BaseUrlApp = baseUrlApp;
    }
    ;
    ListNoteService.prototype.Create = function (note) {
        var _this = this;
        return new Promise(function (resolve, error) {
            wx.request({
                url: _this.BaseUrlApp + "Note/Create/" + _this.GetLoginToken(),
                method: 'POST',
                data: {
                    model: note
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
    ListNoteService.prototype.GetValidNotes = function () {
    };
    ListNoteService.prototype.GetLoginToken = function () {
        return wx.getStorageSync("LoginToken");
    };
    return ListNoteService;
}());
exports.listNoteService = new ListNoteService(app.globalData.baseUrlApp);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdE5vdGVTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdE5vdGVTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLElBQUksR0FBRyxHQUFHLE1BQU0sRUFBYyxDQUFDO0FBRS9CO0lBRUUseUJBQVksVUFBa0I7UUFEOUIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBQUEsQ0FBQztJQUVLLGdDQUFNLEdBQWIsVUFBYyxJQUFlO1FBQTdCLGlCQWtCQztRQWpCQyxPQUFPLElBQUksT0FBTyxDQUNoQixVQUFDLE9BQU8sRUFBRSxLQUFLO1lBQ2IsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxHQUFHLEVBQUUsS0FBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLEdBQUcsS0FBSSxDQUFDLGFBQWEsRUFBRTtnQkFDNUQsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNELE9BQU8sRUFBRSxVQUFTLEdBQUc7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDO2dCQUNELElBQUksRUFBRSxVQUFTLEdBQUc7b0JBQ2hCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU0sdUNBQWEsR0FBcEI7SUFFQSxDQUFDO0lBRU8sdUNBQWEsR0FBckI7UUFDRSxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQUVZLFFBQUEsZUFBZSxHQUFHLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb3RlTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL05vdGUvTm90ZU1vZGVsXCI7XHJcblxyXG52YXIgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KCk7XHJcblxyXG5jbGFzcyBMaXN0Tm90ZVNlcnZpY2Uge1xyXG4gIEJhc2VVcmxBcHA6IHN0cmluZyA9IFwiXCI7XHJcbiAgY29uc3RydWN0b3IoYmFzZVVybEFwcDogc3RyaW5nKXtcclxuICAgIHRoaXMuQmFzZVVybEFwcCA9IGJhc2VVcmxBcHA7XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIENyZWF0ZShub3RlOiBOb3RlTW9kZWwpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFxyXG4gICAgICAocmVzb2x2ZSwgZXJyb3IpID0+IHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdGhpcy5CYXNlVXJsQXBwICsgXCJOb3RlL0NyZWF0ZS9cIiArIHRoaXMuR2V0TG9naW5Ub2tlbigpLFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG1vZGVsOiBub3RlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgZXJyb3IocmVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBHZXRWYWxpZE5vdGVzKCl7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgR2V0TG9naW5Ub2tlbigpOiBzdHJpbmcgeyAgICBcclxuICAgIHJldHVybiB3eC5nZXRTdG9yYWdlU3luYyhcIkxvZ2luVG9rZW5cIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdE5vdGVTZXJ2aWNlID0gbmV3IExpc3ROb3RlU2VydmljZShhcHAuZ2xvYmFsRGF0YS5iYXNlVXJsQXBwKTsiXX0=