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
                CreatedOn: (new Date(Date.now())).toJSON(),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludml0YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBd0Q7QUFFeEQseUNBQTBEO0FBRTFELFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILEtBQUssRUFBRSxFQUFFO1FBQ1QsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQixlQUFlLEVBQUUsRUFBRTtRQUNuQixTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxFQUFFO1FBQ1gsS0FBSyxFQUFFLEVBQUU7UUFDVCxnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLGdCQUFnQixFQUFFLEtBQUs7UUFDdkIsZUFBZSxFQUFFLENBQUM7UUFDbEIsV0FBVyxFQUFFLEVBQUU7UUFDZixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsYUFBYSxFQUFDO1FBQ1osSUFBSSxFQUFFO1lBQ0osSUFBSSxlQUFlLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDM0MsSUFBSSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsV0FBVyxFQUFFLGlCQUFVLENBQUMsZUFBZSxDQUFDO2dCQUN4QyxnQkFBZ0IsRUFBRSxpQkFBVSxDQUFDLGVBQWUsQ0FBQztnQkFDN0MsY0FBYyxFQUFFLGlCQUFVLENBQUMsV0FBVyxDQUFDO2dCQUN2QyxlQUFlLEVBQUUsZUFBZSxDQUFDLE9BQU8sRUFBRTthQUMzQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCx5QkFBeUIsRUFBRSxVQUFTLENBQUM7O1lBQ25DLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxhQUFh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SSxDQUM1QztnQkFDRSxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBRSxNQUFNO29CQUNiLFFBQVEsRUFBRTt3QkFDUixFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3BCLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUNGLENBQUM7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbnZpdGF0aW9uU2VydmljZSB9IGZyb20gJy4vaW52aXRhdGlvblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMZWFybmluZ1Jvb21Nb2RlbCB9IGZyb20gJy4vbW9kZWxzL0xlYXJuaW5nUm9vbU1vZGVsJztcclxuaW1wb3J0IHsgRm9ybWF0RGF0ZSwgRm9ybWF0VGltZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICBkYXRhOntcclxuICAgIFRpdGxlOiAnJyxcclxuICAgIFBhcnRpY2lwYW50Q291bnQ6IDMsXHJcbiAgICBMZWFybmluZ0NvbnRlbnQ6ICcnLFxyXG4gICAgU3RhcnREYXRlOiAnJyxcclxuICAgIEVuZERhdGU6ICcnLFxyXG4gICAgUGxhY2U6ICcnLFxyXG4gICAgSXNTaG93U2VsZWN0RGF0ZTogZmFsc2UsXHJcbiAgICBJc1Nob3dTZWxlY3RUaW1lOiBmYWxzZSxcclxuICAgIEN1cnJlbnREYXRlVGltZTogMCxcclxuICAgIEJvb2tpbmdEYXRlOiAnJyxcclxuICAgIEJvb2tpbmdIb3VyU3RhcnQ6ICcnLFxyXG4gICAgQm9va2luZ0hvdXJFbmQ6ICcnLFxyXG4gICAgSXNFbmRUaW1lOiBmYWxzZVxyXG4gIH0sXHJcbiAgcGFnZUxpZmV0aW1lczp7XHJcbiAgICBzaG93OiBmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgY3VycmVudERhdGVUaW1lID0gbmV3IERhdGUoRGF0ZS5ub3coKSk7XHJcbiAgICAgIGxldCBlbmREYXRlVGltZSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlVGltZS5nZXRUaW1lKCkgKyAzNjAwMDAwKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBCb29raW5nRGF0ZTogRm9ybWF0RGF0ZShjdXJyZW50RGF0ZVRpbWUpLFxyXG4gICAgICAgIEJvb2tpbmdIb3VyU3RhcnQ6IEZvcm1hdFRpbWUoY3VycmVudERhdGVUaW1lKSxcclxuICAgICAgICBCb29raW5nSG91ckVuZDogRm9ybWF0VGltZShlbmREYXRlVGltZSksXHJcbiAgICAgICAgQ3VycmVudERhdGVUaW1lOiBjdXJyZW50RGF0ZVRpbWUuZ2V0VGltZSgpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgSW52aXRhdGlvbkZvcm1JbnB1dENoYW5nZTogZnVuY3Rpb24oZSl7XHJcbiAgICAgIGxldCB2RmllbGQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5maWVsZFxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW2Ake3ZGaWVsZH1gXTogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvblNlbGVjdERhdGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgSXNTaG93U2VsZWN0RGF0ZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNsb3NlU2VsZWN0RGF0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBJc1Nob3dTZWxlY3REYXRlOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNvbmZpcm1TZWxlY3REYXRlOiBmdW5jdGlvbihlKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBJc1Nob3dTZWxlY3REYXRlOiBmYWxzZSxcclxuICAgICAgICBDdXJyZW50RGF0ZVRpbWU6IGUuZGV0YWlsLFxyXG4gICAgICAgIEJvb2tpbmdEYXRlOiBGb3JtYXREYXRlKG5ldyBEYXRlKGUuZGV0YWlsKSlcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3RUaW1lOiBmdW5jdGlvbihlKXtcclxuICAgICAgaWYoZS50YXJnZXQuaWQgPT0gJ2lkU3RhcnRUaW1lJyl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIElzU2hvd1NlbGVjdFRpbWU6IHRydWUsXHJcbiAgICAgICAgICBJc0VuZFRpbWU6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBJc1Nob3dTZWxlY3RUaW1lOiB0cnVlLFxyXG4gICAgICAgICAgSXNFbmRUaW1lOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkNsb3NlU2VsZWN0VGltZTogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBJc1Nob3dTZWxlY3RUaW1lOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNvbmZpcm1TZWxlY3RUaW1lOiBmdW5jdGlvbihlKXtcclxuICAgICAgaWYodGhpcy5kYXRhLklzRW5kVGltZSl7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIElzU2hvd1NlbGVjdFRpbWU6IGZhbHNlLFxyXG4gICAgICAgICAgQm9va2luZ0hvdXJFbmQ6IGUuZGV0YWlsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBJc1Nob3dTZWxlY3RUaW1lOiBmYWxzZSxcclxuICAgICAgICAgIEJvb2tpbmdIb3VyU3RhcnQ6IGUuZGV0YWlsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBTdWJtaXRJbnZpdGF0aW9uOiBmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgbW9kZWw6IExlYXJuaW5nUm9vbU1vZGVsID0ge1xyXG4gICAgICAgIFRpdGxlOiB0aGlzLmRhdGEuVGl0bGUsXHJcbiAgICAgICAgUGFydGljaXBhbnRDb3VudDogdGhpcy5kYXRhLlBhcnRpY2lwYW50Q291bnQsXHJcbiAgICAgICAgTGVhcm5pbmdDb250ZW50OiB0aGlzLmRhdGEuTGVhcm5pbmdDb250ZW50LFxyXG4gICAgICAgIFN0YXJ0RGF0ZTogW3RoaXMuZGF0YS5Cb29raW5nRGF0ZSwgdGhpcy5kYXRhLkJvb2tpbmdIb3VyU3RhcnRdLmpvaW4oJ1QnKSxcclxuICAgICAgICBFbmREYXRlOiAgW3RoaXMuZGF0YS5Cb29raW5nRGF0ZSwgdGhpcy5kYXRhLkJvb2tpbmdIb3VyRW5kXS5qb2luKCdUJyksXHJcbiAgICAgICAgUGxhY2U6IHRoaXMuZGF0YS5QbGFjZSxcclxuICAgICAgICBSb29tSWQ6ICcnLFxyXG4gICAgICAgIENyZWF0ZWRCeTogJycsXHJcbiAgICAgICAgQ3JlYXRlZE9uOiAobmV3IERhdGUoRGF0ZS5ub3coKSkpLnRvSlNPTigpLFxyXG4gICAgICAgIEN1cnJlbnRQYXJ0aWNpcGFudENvdW50OiAxXHJcbiAgICAgIH07XHJcbiAgICAgIGludml0YXRpb25TZXJ2aWNlLkNyZWF0ZUludml0YXRpb24obW9kZWwpLnRoZW4oXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfpgoDnuqbnlJ/miJAnLFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICApOyAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=