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
            var field = e.currentTarget.dataset.field;
            this.setData((_a = {},
                _a["invitationData." + field] = e.detail.value,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludml0YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBd0Q7QUFFeEQseUNBQTBEO0FBRTFELFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILEtBQUssRUFBRSxFQUFFO1FBQ1QsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQixlQUFlLEVBQUUsRUFBRTtRQUNuQixTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxFQUFFO1FBQ1gsS0FBSyxFQUFFLEVBQUU7UUFDVCxnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLGdCQUFnQixFQUFFLEtBQUs7UUFDdkIsZUFBZSxFQUFFLENBQUM7UUFDbEIsV0FBVyxFQUFFLEVBQUU7UUFDZixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsYUFBYSxFQUFDO1FBQ1osSUFBSSxFQUFFO1lBQ0osSUFBSSxlQUFlLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDM0MsSUFBSSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsV0FBVyxFQUFFLGlCQUFVLENBQUMsZUFBZSxDQUFDO2dCQUN4QyxnQkFBZ0IsRUFBRSxpQkFBVSxDQUFDLGVBQWUsQ0FBQztnQkFDN0MsY0FBYyxFQUFFLGlCQUFVLENBQUMsV0FBVyxDQUFDO2dCQUN2QyxlQUFlLEVBQUUsZUFBZSxDQUFDLE9BQU8sRUFBRTthQUMzQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCx5QkFBeUIsRUFBRSxVQUFTLENBQUM7O1lBQzVCLElBQUEsS0FBSyxHQUFJLENBQUMsQ0FBQyxhQUFh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LENBQzVDO2dCQUNFLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFFLE1BQU07b0JBQ2IsUUFBUSxFQUFFO3dCQUNSLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDcEIsQ0FBQztpQkFDRixDQUFDLENBQUM7WUFDTCxDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGludml0YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9pbnZpdGF0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IExlYXJuaW5nUm9vbU1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvTGVhcm5pbmdSb29tTW9kZWwnO1xyXG5pbXBvcnQgeyBGb3JtYXREYXRlLCBGb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gIGRhdGE6e1xyXG4gICAgVGl0bGU6ICcnLFxyXG4gICAgUGFydGljaXBhbnRDb3VudDogMyxcclxuICAgIExlYXJuaW5nQ29udGVudDogJycsXHJcbiAgICBTdGFydERhdGU6ICcnLFxyXG4gICAgRW5kRGF0ZTogJycsXHJcbiAgICBQbGFjZTogJycsXHJcbiAgICBJc1Nob3dTZWxlY3REYXRlOiBmYWxzZSxcclxuICAgIElzU2hvd1NlbGVjdFRpbWU6IGZhbHNlLFxyXG4gICAgQ3VycmVudERhdGVUaW1lOiAwLFxyXG4gICAgQm9va2luZ0RhdGU6ICcnLFxyXG4gICAgQm9va2luZ0hvdXJTdGFydDogJycsXHJcbiAgICBCb29raW5nSG91ckVuZDogJycsXHJcbiAgICBJc0VuZFRpbWU6IGZhbHNlXHJcbiAgfSxcclxuICBwYWdlTGlmZXRpbWVzOntcclxuICAgIHNob3c6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCBjdXJyZW50RGF0ZVRpbWUgPSBuZXcgRGF0ZShEYXRlLm5vdygpKTtcclxuICAgICAgbGV0IGVuZERhdGVUaW1lID0gbmV3IERhdGUoY3VycmVudERhdGVUaW1lLmdldFRpbWUoKSArIDM2MDAwMDApO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIEJvb2tpbmdEYXRlOiBGb3JtYXREYXRlKGN1cnJlbnREYXRlVGltZSksXHJcbiAgICAgICAgQm9va2luZ0hvdXJTdGFydDogRm9ybWF0VGltZShjdXJyZW50RGF0ZVRpbWUpLFxyXG4gICAgICAgIEJvb2tpbmdIb3VyRW5kOiBGb3JtYXRUaW1lKGVuZERhdGVUaW1lKSxcclxuICAgICAgICBDdXJyZW50RGF0ZVRpbWU6IGN1cnJlbnREYXRlVGltZS5nZXRUaW1lKClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBJbnZpdGF0aW9uRm9ybUlucHV0Q2hhbmdlOiBmdW5jdGlvbihlKXtcclxuICAgICAgY29uc3Qge2ZpZWxkfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbYGludml0YXRpb25EYXRhLiR7ZmllbGR9YF06IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3REYXRlOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIElzU2hvd1NlbGVjdERhdGU6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DbG9zZVNlbGVjdERhdGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgSXNTaG93U2VsZWN0RGF0ZTogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25Db25maXJtU2VsZWN0RGF0ZTogZnVuY3Rpb24oZSl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgSXNTaG93U2VsZWN0RGF0ZTogZmFsc2UsXHJcbiAgICAgICAgQ3VycmVudERhdGVUaW1lOiBlLmRldGFpbCxcclxuICAgICAgICBCb29raW5nRGF0ZTogRm9ybWF0RGF0ZShuZXcgRGF0ZShlLmRldGFpbCkpXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uU2VsZWN0VGltZTogZnVuY3Rpb24oZSl7XHJcbiAgICAgIGlmKGUudGFyZ2V0LmlkID09ICdpZFN0YXJ0VGltZScpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBJc1Nob3dTZWxlY3RUaW1lOiB0cnVlLFxyXG4gICAgICAgICAgSXNFbmRUaW1lOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgSXNTaG93U2VsZWN0VGltZTogdHJ1ZSxcclxuICAgICAgICAgIElzRW5kVGltZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25DbG9zZVNlbGVjdFRpbWU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgSXNTaG93U2VsZWN0VGltZTogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25Db25maXJtU2VsZWN0VGltZTogZnVuY3Rpb24oZSl7XHJcbiAgICAgIGlmKHRoaXMuZGF0YS5Jc0VuZFRpbWUpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBJc1Nob3dTZWxlY3RUaW1lOiBmYWxzZSxcclxuICAgICAgICAgIEJvb2tpbmdIb3VyRW5kOiBlLmRldGFpbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgSXNTaG93U2VsZWN0VGltZTogZmFsc2UsXHJcbiAgICAgICAgICBCb29raW5nSG91clN0YXJ0OiBlLmRldGFpbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgU3VibWl0SW52aXRhdGlvbjogZnVuY3Rpb24oKXtcclxuICAgICAgbGV0IG1vZGVsOiBMZWFybmluZ1Jvb21Nb2RlbCA9IHtcclxuICAgICAgICBUaXRsZTogdGhpcy5kYXRhLlRpdGxlLFxyXG4gICAgICAgIFBhcnRpY2lwYW50Q291bnQ6IHRoaXMuZGF0YS5QYXJ0aWNpcGFudENvdW50LFxyXG4gICAgICAgIExlYXJuaW5nQ29udGVudDogdGhpcy5kYXRhLkxlYXJuaW5nQ29udGVudCxcclxuICAgICAgICBTdGFydERhdGU6IFt0aGlzLmRhdGEuQm9va2luZ0RhdGUsIHRoaXMuZGF0YS5Cb29raW5nSG91clN0YXJ0XS5qb2luKCdUJyksXHJcbiAgICAgICAgRW5kRGF0ZTogIFt0aGlzLmRhdGEuQm9va2luZ0RhdGUsIHRoaXMuZGF0YS5Cb29raW5nSG91ckVuZF0uam9pbignVCcpLFxyXG4gICAgICAgIFBsYWNlOiB0aGlzLmRhdGEuUGxhY2UsXHJcbiAgICAgICAgUm9vbUlkOiAnJyxcclxuICAgICAgICBDcmVhdGVkQnk6ICcnLFxyXG4gICAgICAgIENyZWF0ZWRPbjogKG5ldyBEYXRlKERhdGUubm93KCkpKS50b0pTT04oKSxcclxuICAgICAgICBDdXJyZW50UGFydGljaXBhbnRDb3VudDogMVxyXG4gICAgICB9O1xyXG4gICAgICBpbnZpdGF0aW9uU2VydmljZS5DcmVhdGVJbnZpdGF0aW9uKG1vZGVsKS50aGVuKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn6YKA57qm55Sf5oiQJyxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pOyAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgKTsgICAgICBcclxuICAgIH1cclxuICB9XHJcbn0pIl19