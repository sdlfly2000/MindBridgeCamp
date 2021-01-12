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
                CreatedOn: util_1.formatTime(new Date(Date.now())),
                CurrentParticipantCount: 1
            };
            console.info(model);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludml0YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBd0Q7QUFFeEQseUNBQXNFO0FBRXRFLFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILEtBQUssRUFBRSxFQUFFO1FBQ1QsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQixlQUFlLEVBQUUsRUFBRTtRQUNuQixTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxFQUFFO1FBQ1gsS0FBSyxFQUFFLEVBQUU7UUFDVCxnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLGdCQUFnQixFQUFFLEtBQUs7UUFDdkIsZUFBZSxFQUFFLENBQUM7UUFDbEIsV0FBVyxFQUFFLEVBQUU7UUFDZixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsYUFBYSxFQUFDO1FBQ1osSUFBSSxFQUFFO1lBQ0osSUFBSSxlQUFlLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDM0MsSUFBSSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsV0FBVyxFQUFFLGlCQUFVLENBQUMsZUFBZSxDQUFDO2dCQUN4QyxnQkFBZ0IsRUFBRSxpQkFBVSxDQUFDLGVBQWUsQ0FBQztnQkFDN0MsY0FBYyxFQUFFLGlCQUFVLENBQUMsV0FBVyxDQUFDO2dCQUN2QyxlQUFlLEVBQUUsZUFBZSxDQUFDLE9BQU8sRUFBRTthQUMzQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCx5QkFBeUIsRUFBRSxVQUFTLENBQUM7O1lBQ25DLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxhQUFh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QyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQzVDO2dCQUNFLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFFLE1BQU07b0JBQ2IsUUFBUSxFQUFFO3dCQUNSLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDcEIsQ0FBQztpQkFDRixDQUFDLENBQUM7WUFDTCxDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGludml0YXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9pbnZpdGF0aW9uU2VydmljZSc7XHJcbmltcG9ydCB7IExlYXJuaW5nUm9vbU1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvTGVhcm5pbmdSb29tTW9kZWwnO1xyXG5pbXBvcnQgeyBGb3JtYXREYXRlLCBGb3JtYXRUaW1lLCBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gIGRhdGE6e1xyXG4gICAgVGl0bGU6ICcnLFxyXG4gICAgUGFydGljaXBhbnRDb3VudDogMyxcclxuICAgIExlYXJuaW5nQ29udGVudDogJycsXHJcbiAgICBTdGFydERhdGU6ICcnLFxyXG4gICAgRW5kRGF0ZTogJycsXHJcbiAgICBQbGFjZTogJycsXHJcbiAgICBJc1Nob3dTZWxlY3REYXRlOiBmYWxzZSxcclxuICAgIElzU2hvd1NlbGVjdFRpbWU6IGZhbHNlLFxyXG4gICAgQ3VycmVudERhdGVUaW1lOiAwLFxyXG4gICAgQm9va2luZ0RhdGU6ICcnLFxyXG4gICAgQm9va2luZ0hvdXJTdGFydDogJycsXHJcbiAgICBCb29raW5nSG91ckVuZDogJycsXHJcbiAgICBJc0VuZFRpbWU6IGZhbHNlXHJcbiAgfSxcclxuICBwYWdlTGlmZXRpbWVzOntcclxuICAgIHNob3c6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCBjdXJyZW50RGF0ZVRpbWUgPSBuZXcgRGF0ZShEYXRlLm5vdygpKTtcclxuICAgICAgbGV0IGVuZERhdGVUaW1lID0gbmV3IERhdGUoY3VycmVudERhdGVUaW1lLmdldFRpbWUoKSArIDM2MDAwMDApO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIEJvb2tpbmdEYXRlOiBGb3JtYXREYXRlKGN1cnJlbnREYXRlVGltZSksXHJcbiAgICAgICAgQm9va2luZ0hvdXJTdGFydDogRm9ybWF0VGltZShjdXJyZW50RGF0ZVRpbWUpLFxyXG4gICAgICAgIEJvb2tpbmdIb3VyRW5kOiBGb3JtYXRUaW1lKGVuZERhdGVUaW1lKSxcclxuICAgICAgICBDdXJyZW50RGF0ZVRpbWU6IGN1cnJlbnREYXRlVGltZS5nZXRUaW1lKClcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBJbnZpdGF0aW9uRm9ybUlucHV0Q2hhbmdlOiBmdW5jdGlvbihlKXtcclxuICAgICAgbGV0IHZGaWVsZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmZpZWxkXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBbYCR7dkZpZWxkfWBdOiBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uU2VsZWN0RGF0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBJc1Nob3dTZWxlY3REYXRlOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uQ2xvc2VTZWxlY3REYXRlOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIElzU2hvd1NlbGVjdERhdGU6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uQ29uZmlybVNlbGVjdERhdGU6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIElzU2hvd1NlbGVjdERhdGU6IGZhbHNlLFxyXG4gICAgICAgIEN1cnJlbnREYXRlVGltZTogZS5kZXRhaWwsXHJcbiAgICAgICAgQm9va2luZ0RhdGU6IEZvcm1hdERhdGUobmV3IERhdGUoZS5kZXRhaWwpKVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvblNlbGVjdFRpbWU6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICBpZihlLnRhcmdldC5pZCA9PSAnaWRTdGFydFRpbWUnKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgSXNTaG93U2VsZWN0VGltZTogdHJ1ZSxcclxuICAgICAgICAgIElzRW5kVGltZTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIElzU2hvd1NlbGVjdFRpbWU6IHRydWUsXHJcbiAgICAgICAgICBJc0VuZFRpbWU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQ2xvc2VTZWxlY3RUaW1lOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIElzU2hvd1NlbGVjdFRpbWU6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uQ29uZmlybVNlbGVjdFRpbWU6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICBpZih0aGlzLmRhdGEuSXNFbmRUaW1lKXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgSXNTaG93U2VsZWN0VGltZTogZmFsc2UsXHJcbiAgICAgICAgICBCb29raW5nSG91ckVuZDogZS5kZXRhaWxcclxuICAgICAgICB9KTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIElzU2hvd1NlbGVjdFRpbWU6IGZhbHNlLFxyXG4gICAgICAgICAgQm9va2luZ0hvdXJTdGFydDogZS5kZXRhaWxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFN1Ym1pdEludml0YXRpb246IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCBtb2RlbDogTGVhcm5pbmdSb29tTW9kZWwgPSB7XHJcbiAgICAgICAgVGl0bGU6IHRoaXMuZGF0YS5UaXRsZSxcclxuICAgICAgICBQYXJ0aWNpcGFudENvdW50OiB0aGlzLmRhdGEuUGFydGljaXBhbnRDb3VudCxcclxuICAgICAgICBMZWFybmluZ0NvbnRlbnQ6IHRoaXMuZGF0YS5MZWFybmluZ0NvbnRlbnQsXHJcbiAgICAgICAgU3RhcnREYXRlOiBbdGhpcy5kYXRhLkJvb2tpbmdEYXRlLCB0aGlzLmRhdGEuQm9va2luZ0hvdXJTdGFydF0uam9pbignVCcpLFxyXG4gICAgICAgIEVuZERhdGU6ICBbdGhpcy5kYXRhLkJvb2tpbmdEYXRlLCB0aGlzLmRhdGEuQm9va2luZ0hvdXJFbmRdLmpvaW4oJ1QnKSxcclxuICAgICAgICBQbGFjZTogdGhpcy5kYXRhLlBsYWNlLFxyXG4gICAgICAgIFJvb21JZDogJycsXHJcbiAgICAgICAgQ3JlYXRlZEJ5OiAnJyxcclxuICAgICAgICBDcmVhdGVkT246IGZvcm1hdFRpbWUobmV3IERhdGUoRGF0ZS5ub3coKSkpLFxyXG4gICAgICAgIEN1cnJlbnRQYXJ0aWNpcGFudENvdW50OiAxXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnNvbGUuaW5mbyhtb2RlbCk7XHJcbiAgICAgIGludml0YXRpb25TZXJ2aWNlLkNyZWF0ZUludml0YXRpb24obW9kZWwpLnRoZW4oXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfpgoDnuqbnlJ/miJAnLFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICApOyAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=