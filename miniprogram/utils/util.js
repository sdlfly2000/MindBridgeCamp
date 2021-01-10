"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.IsLoginTokenValid = exports.webClient = exports.FormatTime = exports.FormatDate = exports.formatTime = void 0;
exports.formatTime = function (date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return ([year, month, day].map(formatNumber).join('-') +
        ' ' +
        [hour, minute, second].map(formatNumber).join(':'));
};
var formatNumber = function (n) {
    var s = n.toString();
    return s[1] ? s : '0' + s;
};
exports.FormatDate = function (date) {
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()].map(formatNumber).join('-');
};
exports.FormatTime = function (date) {
    return [date.getHours(), date.getMinutes()].map(formatNumber).join(':');
};
exports.webClient = function (url, httpMethod, requestData) {
    return new Promise(function (resolve, error) {
        wx.request({
            url: url,
            method: httpMethod,
            data: requestData,
            success: function (res) {
                if (res.statusCode == 200) {
                    resolve(res);
                }
                else {
                    error(res);
                }
            },
            fail: function (e) {
                console.error(e);
            }
        });
    });
};
exports.IsLoginTokenValid = function (app) {
    var loginToken = wx.getStorageSync("LoginToken");
    return new Promise(function (resolve, error) {
        wx.request({
            url: app.globalData.baseUrlAuth + "WeixinLogin/IsLoginTokenValid/" + loginToken,
            success: function (res) {
                if (res.statusCode == 200) {
                    resolve(res);
                }
                else {
                    error(res);
                }
            },
            fail: function (e) {
                console.error(e);
            }
        });
    });
};
exports.Login = function (app) {
    return new Promise(function (resolve) {
        wx.login({
            success: function (res) {
                console.info("Login Code: " + res.code);
                wx.request({
                    url: app.globalData.baseUrlAuth + "WeixinLogin/GetToken",
                    data: {
                        LoginCode: res.code,
                        AppName: app.globalData.appName
                    },
                    header: {
                        'content-type': 'application/json'
                    },
                    method: 'POST',
                    success: function (response) {
                        if (response.data != undefined) {
                            wx.setStorageSync('LoginToken', response.data);
                            console.info("Login Token: " + response.data);
                            resolve(response);
                        }
                    }
                });
            },
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxVQUFVLEdBQUcsVUFBQyxJQUFVO0lBQ25DLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUMvQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2pDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUMxQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDNUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ2hDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUVoQyxPQUFPLENBQ0wsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzlDLEdBQUc7UUFDSCxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDbkQsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELElBQU0sWUFBWSxHQUFHLFVBQUMsQ0FBUztJQUM3QixJQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDdEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQTtBQUMzQixDQUFDLENBQUE7QUFFWSxRQUFBLFVBQVUsR0FBRyxVQUFTLElBQVU7SUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFB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LElBQUksQ0FBQyxDQUFBOzRCQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQzlDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDbkI7b0JBQ0gsQ0FBQztpQkFDRixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUNGLENBQUE7QUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZm9ybWF0VGltZSA9IChkYXRlOiBEYXRlKSA9PiB7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxXG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpXG4gIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKClcbiAgY29uc3QgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKClcbiAgY29uc3Qgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKClcblxuICByZXR1cm4gKFxuICAgIFt5ZWFyLCBtb250aCwgZGF5XS5tYXAoZm9ybWF0TnVtYmVyKS5qb2luKCctJykgK1xuICAgICcgJyArXG4gICAgW2hvdXIsIG1pbnV0ZSwgc2Vjb25kXS5tYXAoZm9ybWF0TnVtYmVyKS5qb2luKCc6JylcbiAgKVxufVxuXG5jb25zdCBmb3JtYXROdW1iZXIgPSAobjogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHMgPSBuLnRvU3RyaW5nKClcbiAgcmV0dXJuIHNbMV0gPyBzIDogJzAnICsgc1xufVxuXG5leHBvcnQgY29uc3QgRm9ybWF0RGF0ZSA9IGZ1bmN0aW9uKGRhdGU6IERhdGUpe1xuICByZXR1cm4gW2RhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgZGF0ZS5nZXREYXRlKCldLm1hcChmb3JtYXROdW1iZXIpLmpvaW4oJy0nKTtcbn1cblxuZXhwb3J0IGNvbnN0IEZvcm1hdFRpbWUgPSBmdW5jdGlvbihkYXRlOiBEYXRlKXtcbiAgcmV0dXJuIFtkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpXS5tYXAoZm9ybWF0TnVtYmVyKS5qb2luKCc6Jyk7XG59XG5cbmV4cG9ydCBjb25zdCB3ZWJDbGllbnQgPSBmdW5jdGlvbih1cmw6IHN0cmluZywgaHR0cE1ldGhvZD86IGFueSwgcmVxdWVzdERhdGE/OiBhbnkpe1xuICByZXR1cm4gbmV3IFByb21pc2UoXG4gICAgKHJlc29sdmUsIGVycm9yKSA9PiB7XG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIG1ldGhvZDogaHR0cE1ldGhvZCxcbiAgICAgICAgZGF0YTogcmVxdWVzdERhdGEsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgaWYocmVzLnN0YXR1c0NvZGUgPT0gMjAwKXtcbiAgICAgICAgICAgIHJlc29sdmUocmVzKTsgICAgICAgICAgICBcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGVycm9yKHJlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbihlKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBJc0xvZ2luVG9rZW5WYWxpZCA9IGZ1bmN0aW9uKGFwcDogSUFwcE9wdGlvbil7XG4gIGxldCBsb2dpblRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKFwiTG9naW5Ub2tlblwiKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKFxuICAgIChyZXNvbHZlLCBlcnJvcikgPT4ge1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogYXBwLmdsb2JhbERhdGEuYmFzZVVybEF1dGggKyBcIldlaXhpbkxvZ2luL0lzTG9naW5Ub2tlblZhbGlkL1wiICsgbG9naW5Ub2tlbixcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgICBpZihyZXMuc3RhdHVzQ29kZSA9PSAyMDApe1xuICAgICAgICAgICAgcmVzb2x2ZShyZXMpOyAgICAgICAgICAgIFxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZXJyb3IocmVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKGUpe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IExvZ2luID0gZnVuY3Rpb24oYXBwOiBJQXBwT3B0aW9uKXtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKFxuICAgIChyZXNvbHZlKSA9PiB7XG4gICAgICB3eC5sb2dpbih7XG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKFwiTG9naW4gQ29kZTogXCIgKyByZXMuY29kZSk7ICAgICAgXG4gICAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IGFwcC5nbG9iYWxEYXRhLmJhc2VVcmxBdXRoICsgXCJXZWl4aW5Mb2dpbi9HZXRUb2tlblwiLFxuICAgICAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICAgIExvZ2luQ29kZTogcmVzLmNvZGUsXG4gICAgICAgICAgICAgIEFwcE5hbWU6IGFwcC5nbG9iYWxEYXRhLmFwcE5hbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpeyAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdMb2dpblRva2VuJywgcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJMb2dpbiBUb2tlbjogXCIgKyByZXNwb25zZS5kYXRhKTsgXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgfSkgXG4gICAgfVxuICApIFxufSJdfQ==