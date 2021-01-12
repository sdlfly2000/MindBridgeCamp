"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invitationService_1 = require("./invitationService");
var util_1 = require("../../utils/util");
Component({
    data: {
        Title: '',
        ParticipantCount: 3,
        LearningContent: '',
        StartDate: '',
        EndDate: '',
        Place: '',
        IsShowSelectDate: false,
        IsShowSelectTime: false,
        CurrentDateTime: 0,
        BookingDate: '',
        BookingHourStart: '',
        BookingHourEnd: '',
        IsEndTime: false
    },
    pageLifetimes: {
        show: function () {
            var currentDateTime = new Date(Date.now());
            var endDateTime = new Date(currentDateTime.getTime() + 3600000);
            if (endDateTime.getDate() != currentDateTime.getDate()) {
                endDateTime = new Date(currentDateTime.getTime());
                endDateTime.setHours(23);
                endDateTime.setMinutes(59);
            }
            this.setData({
                BookingDate: util_1.FormatDate(currentDateTime),
                BookingHourStart: util_1.FormatTime(currentDateTime),
                BookingHourEnd: util_1.FormatTime(endDateTime),
                CurrentDateTime: currentDateTime.getTime()
            });
        }
    },
    methods: {
        InvitationFormInputChange: function (e) {
            var _a;
            var vField = e.currentTarget.dataset.field;
            this.setData((_a = {},
                _a["" + vField] = e.detail.value,
                _a));
        },
        onSelectDate: function () {
            this.setData({
                IsShowSelectDate: true
            });
        },
        onCloseSelectDate: function () {
            this.setData({
                IsShowSelectDate: false
            });
        },
        onConfirmSelectDate: function (e) {
            this.setData({
                IsShowSelectDate: false,
                CurrentDateTime: e.detail,
                BookingDate: util_1.FormatDate(new Date(e.detail))
            });
        },
        onSelectTime: function (e) {
            if (e.target.id == 'idStartTime') {
                this.setData({
                    IsShowSelectTime: true,
                    IsEndTime: false
                });
            }
            else {
                this.setData({
                    IsShowSelectTime: true,
                    IsEndTime: true
                });
            }
        },
        onCloseSelectTime: function () {
            this.setData({
                IsShowSelectTime: false
            });
        },
        onConfirmSelectTime: function (e) {
            if (this.data.IsEndTime) {
                this.setData({
                    IsShowSelectTime: false,
                    BookingHourEnd: e.detail
                });
            }
            else {
                this.setData({
                    IsShowSelectTime: false,
                    BookingHourStart: e.detail
                });
            }
        },
        SubmitInvitation: function () {
            var model = {
                Title: this.data.Title,
                ParticipantCount: this.data.ParticipantCount,
                LearningContent: this.data.LearningContent,
                StartDate: [this.data.BookingDate, this.data.BookingHourStart].join('T'),
                EndDate: [this.data.BookingDate, this.data.BookingHourEnd].join('T'),
                Place: this.data.Place,
                RoomId: '',
                CreatedBy: '',
                CreatedOn: util_1.formatTime(new Date(Date.now())),
                CurrentParticipantCount: 1
            };
            invitationService_1.invitationService.CreateInvitation(model).then(function () {
                wx.showModal({
                    title: '邀约生成',
                    complete: function () {
                        wx.navigateBack();
                    }
                });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludml0YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBd0Q7QUFFeEQseUNBQXNFO0FBRXRFLFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILEtBQUssRUFBRSxFQUFFO1FBQ1QsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQixlQUFlLEVBQUUsRUFBRTtRQUNuQixTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxFQUFFO1FBQ1gsS0FBSyxFQUFFLEVBQUU7UUFDVCxnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLGdCQUFnQixFQUFFLEtBQUs7UUFDdkIsZUFBZSxFQUFFLENBQUM7UUFDbEIsV0FBVyxFQUFFLEVBQUU7UUFDZixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsYUFBYSxFQUFDO1FBQ1osSUFBSSxFQUFFO1lBQ0osSUFBSSxlQUFlLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDM0MsSUFBSSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBRWhFLElBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLEVBQUUsRUFBQztnQkFDcEQsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QixXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzVCO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxXQUFXLEVBQUUsaUJBQVUsQ0FBQyxlQUFlLENBQUM7Z0JBQ3hDLGdCQUFn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LEtBQUs7Z0JBQ3RCLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFNBQVMsRUFBRSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQyx1QkFBdUIsRUFBRSxDQUFDO2FBQzNCLENBQUM7WUFDRixxQ0FBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQzVDO2dCQUNFLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFFLE1BQU07b0JBQ2IsUUFBUSxFQUFFO3dCQUNSLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDcEIsQ0FBQztpQkFDRixDQUFDLENBQUM7WUFDTCxDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGludml0YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9pbnZpdGF0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IExlYXJuaW5nUm9vbU1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvTGVhcm5pbmdSb29tTW9kZWwnO1xyXG5pbXBvcnQgeyBGb3JtYXREYXRlLCBGb3JtYXRUaW1lLCBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gIGRhdGE6e1xyXG4gICAgVGl0bGU6ICcnLFxyXG4gICAgUGFydGljaXBhbnRDb3VudDogMyxcclxuICAgIExlYXJuaW5nQ29udGVudDogJycsXHJcbiAgICBTdGFydERhdGU6ICcnLFxyXG4gICAgRW5kRGF0ZTogJycsXHJcbiAgICBQbGFjZTogJycsXHJcbiAgICBJc1Nob3dTZWxlY3REYXRlOiBmYWxzZSxcclxuICAgIElzU2hvd1NlbGVjdFRpbWU6IGZhbHNlLFxyXG4gICAgQ3VycmVudERhdGVUaW1lOiAwLFxyXG4gICAgQm9va2luZ0RhdGU6ICcnLFxyXG4gICAgQm9va2luZ0hvdXJTdGFydDogJycsXHJcbiAgICBCb29raW5nSG91ckVuZDogJycsXHJcbiAgICBJc0VuZFRpbWU6IGZhbHNlXHJcbiAgfSxcclxuICBwYWdlTGlmZXRpbWVzOntcclxuICAgIHNob3c6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCBjdXJyZW50RGF0ZVRpbWUgPSBuZXcgRGF0ZShEYXRlLm5vdygpKTtcclxuICAgICAgbGV0IGVuZERhdGVUaW1lID0gbmV3IERhdGUoY3VycmVudERhdGVUaW1lLmdldFRpbWUoKSArIDM2MDAwMDApO1xyXG5cclxuICAgICAgaWYoZW5kRGF0ZVRpbWUuZ2V0RGF0ZSgpICE9IGN1cnJlbnREYXRlVGltZS5nZXREYXRlKCkpe1xyXG4gICAgICAgIGVuZERhdGVUaW1lID0gbmV3IERhdGUoY3VycmVudERhdGVUaW1lLmdldFRpbWUoKSk7IFxyXG4gICAgICAgIGVuZERhdGVUaW1lLnNldEhvdXJzKDIzKTtcclxuICAgICAgICBlbmREYXRlVGltZS5zZXRNaW51dGVzKDU5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBCb29raW5nRGF0ZTogRm9ybWF0RGF0ZShjdXJyZW50RGF0ZVRpbWUpLFxyXG4gICAgICAgIEJvb2tpbmdIb3VyU3RhcnQ6IEZvcm1hdFRpbWUoY3VycmVudERhdGVUaW1lKSxcclxuICAgICAgICBCb29raW5nSG91ckVuZDogRm9ybWF0VGltZShlbmREYXRlVGltZSksXHJcbiAgICAgICAgQ3VycmVudERhdGVUaW1lOiBjdXJyZW50RGF0ZVRpbWUuZ2V0VGltZSgpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgSW52aXRhdGlvbkZvcm1JbnB1dENoYW5nZTogZnVuY3Rpb24oZSl7XHJcbiAgICAgIGxldCB2RmllbGQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5maWVsZFxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW2Ake3ZGaWVsZH1gXTogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvblNlbGVjdERhdGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgSXNTaG93U2VsZWN0RGF0ZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNsb3NlU2VsZWN0RGF0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBJc1Nob3dTZWxlY3REYXRlOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNvbmZpcm1TZWxlY3REYXRlOiBmdW5jdGlvbihlKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBJc1Nob3dTZWxlY3REYXRlOiBmYWxzZSxcclxuICAgICAgICBDdXJyZW50RGF0ZVRpbWU6IGUuZGV0YWlsLFxyXG4gICAgICAgIEJvb2tpbmdEYXRlOiBGb3JtYXREYXRlKG5ldyBEYXRlKGUuZGV0YWlsKSlcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3RUaW1lOiBmdW5jdGlvbihlKXtcclxuICAgICAgaWYoZS50YXJnZXQuaWQgPT0gJ2lkU3RhcnRUaW1lJyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIElzU2hvd1NlbGVjdFRpbWU6IHRydWUsXHJcbiAgICAgICAgICBJc0VuZFRpbWU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBJc1Nob3dTZWxlY3RUaW1lOiB0cnVlLFxyXG4gICAgICAgICAgSXNFbmRUaW1lOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkNsb3NlU2VsZWN0VGltZTogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBJc1Nob3dTZWxlY3RUaW1lOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNvbmZpcm1TZWxlY3RUaW1lOiBmdW5jdGlvbihlKXtcclxuICAgICAgaWYodGhpcy5kYXRhLklzRW5kVGltZSl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIElzU2hvd1NlbGVjdFRpbWU6IGZhbHNlLFxyXG4gICAgICAgICAgQm9va2luZ0hvdXJFbmQ6IGUuZGV0YWlsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBJc1Nob3dTZWxlY3RUaW1lOiBmYWxzZSxcclxuICAgICAgICAgIEJvb2tpbmdIb3VyU3RhcnQ6IGUuZGV0YWlsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBTdWJtaXRJbnZpdGF0aW9uOiBmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgbW9kZWw6IExlYXJuaW5nUm9vbU1vZGVsID0ge1xyXG4gICAgICAgIFRpdGxlOiB0aGlzLmRhdGEuVGl0bGUsXHJcbiAgICAgICAgUGFydGljaXBhbnRDb3VudDogdGhpcy5kYXRhLlBhcnRpY2lwYW50Q291bnQsXHJcbiAgICAgICAgTGVhcm5pbmdDb250ZW50OiB0aGlzLmRhdGEuTGVhcm5pbmdDb250ZW50LFxyXG4gICAgICAgIFN0YXJ0RGF0ZTogW3RoaXMuZGF0YS5Cb29raW5nRGF0ZSwgdGhpcy5kYXRhLkJvb2tpbmdIb3VyU3RhcnRdLmpvaW4oJ1QnKSxcclxuICAgICAgICBFbmREYXRlOiAgW3RoaXMuZGF0YS5Cb29raW5nRGF0ZSwgdGhpcy5kYXRhLkJvb2tpbmdIb3VyRW5kXS5qb2luKCdUJyksXHJcbiAgICAgICAgUGxhY2U6IHRoaXMuZGF0YS5QbGFjZSxcclxuICAgICAgICBSb29tSWQ6ICcnLFxyXG4gICAgICAgIENyZWF0ZWRCeTogJycsXHJcbiAgICAgICAgQ3JlYXRlZE9uOiBmb3JtYXRUaW1lKG5ldyBEYXRlKERhdGUubm93KCkpKSxcclxuICAgICAgICBDdXJyZW50UGFydGljaXBhbnRDb3VudDogMVxyXG4gICAgICB9O1xyXG4gICAgICBpbnZpdGF0aW9uU2VydmljZS5DcmVhdGVJbnZpdGF0aW9uKG1vZGVsKS50aGVuKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn6YKA57qm55Sf5oiQJyxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pOyAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgKTsgICAgICBcclxuICAgIH1cclxuICB9XHJcbn0pIl19