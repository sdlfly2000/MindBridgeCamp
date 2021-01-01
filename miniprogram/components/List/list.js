"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listService_1 = require("./listService");
Component({
    data: {
        Invitations: []
    },
    pageLifetimes: {
        show: function () {
            var _this = this;
            listService_1.listService.GetAvailableRooms().then(function (res) {
                _this.setData({
                    Invitations: res.data
                });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBNEM7QUFFNUMsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFDO1FBQ0gsV0FBVyxFQUFFLEVBQUU7S0FDaEI7SUFDRCxhQUFhLEVBQUM7UUFDWixJQUFJLEVBQUU7WUFBQSxpQkFPTDtZQU5DLHlCQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQ2xDLFVBQUMsR0FBUTtnQkFDUCxLQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFdBQVcsRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDeEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0U2VydmljZSB9IGZyb20gXCIuL2xpc3RTZXJ2aWNlXCI7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gIGRhdGE6e1xyXG4gICAgSW52aXRhdGlvbnM6IFtdXHJcbiAgfSxcclxuICBwYWdlTGlmZXRpbWVzOntcclxuICAgIHNob3c6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxpc3RTZXJ2aWNlLkdldEF2YWlsYWJsZVJvb21zKCkudGhlbihcclxuICAgICAgICAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIEludml0YXRpb25zOiByZXMuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=