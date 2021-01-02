"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invitationService_1 = require("./invitationService");
var util_1 = require("../../utils/util");
Component({
    data: {
        Title: "",
        ParticipantCount: 3,
        LearningContent: "",
        StartDate: "",
        EndDate: "",
        Place: "",
        IsShowSelectDate: false,
        IsShowSelectTime: false,
        CurrentDateTime: 0,
        BookingDate: "",
        BookingHourStart: "",
        BookingHourEnd: "",
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
            if (e.target.id == "idStartTime") {
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
                StartDate: this.data.StartDate,
                EndDate: this.data.EndDate,
                Place: this.data.Place,
                RoomId: "",
                CreatedBy: "",
                CreatedOn: (new Date(Date.now())).toDateString(),
                CurrentParticipantCount: 1
            };
            invitationService_1.invitationService.CreateInvitation(model).then(function () {
                wx.showModal({
                    title: "邀约生成",
                    complete: function () {
                        wx.navigateBack();
                    }
                });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludml0YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBd0Q7QUFFeEQseUNBQTBEO0FBRTFELFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILEtBQUssRUFBRSxFQUFFO1FBQ1QsZ0JBQWdCLEVBQUUsQ0FBQztRQUNuQixlQUFlLEVBQUUsRUFBRTtRQUNuQixTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxFQUFFO1FBQ1gsS0FBSyxFQUFFLEVBQUU7UUFDVCxnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLGdCQUFnQixFQUFFLEtBQUs7UUFDdkIsZUFBZSxFQUFFLENBQUM7UUFDbEIsV0FBVyxFQUFFLEVBQUU7UUFDZixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsYUFBYSxFQUFDO1FBQ1osSUFBSSxFQUFFO1lBQ0osSUFBSSxlQUFlLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDM0MsSUFBSSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsV0FBVyxFQUFFLGlCQUFVLENBQUMsZUFBZSxDQUFDO2dCQUN4QyxnQkFBZ0IsRUFBRSxpQkFBVSxDQUFDLGVBQWUsQ0FBQztnQkFDN0MsY0FBYyxFQUFFLGlCQUFVLENBQUMsV0FBVyxDQUFDO2dCQUN2QyxlQUFlLEVBQUUsZUFBZSxDQUFDLE9BQU8sRUFBRTthQUMzQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7SUFDRCxPQUFPLEVBQUU7UUFDUCx5QkFBeUIsRUFBRSxVQUFTLENBQUM7O1lBQzVCLElBQUEsS0FBSyxHQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxNQUEzQixDQUEyQjtZQUN2QyxJQUFJLENBQUMsT0FBTztnQkFDUixHQUFDLG9CQUFrQixLQUFPLElBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUM3QyxDQUFBO1FBQ0osQ0FBQztRQUNELFlBQVksRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsZ0JBQWdCLEVBQUUsSUFBSTthQUN2QixDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxnQkFBZ0IsRUFBRSxLQUFLO2FBQ3hCLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxtQkFBbUIsRUFBRSxVQUFTLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxnQkFBZ0IsRUFBRSxLQUFLO2dCQUN2QixlQUFlLEVBQUUsQ0FBQyxDQUFDLE1BQU07Z0JBQ3pCLFdBQVcsRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM1QyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsWUFBWSxFQUFFLFVBQVMsQ0FBQztZQUN0QixJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLGFBQWEsRUFBQztnQkFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxnQkFBZ0IsRUFBRSxJQUFJO29CQUN0QixTQUFTLEVBQUUsS0FBSztpQkFDakIsQ0FBQyxDQUFDO2FBQ0o7aUJBQUk7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxnQkFBZ0IsRUFBRSxJQUFJO29CQUN0QixTQUFTLEVBQUUsSUFBSTtpQkFDaEIsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDO1FBQ0QsaUJBQWlCLEVBQUU7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxnQkFBZ0IsRUFBRSxLQUFLO2FBQ3hCLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxtQkFBbUIsRUFBRSxVQUFTLENBQUM7WUFDN0IsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQztnQkFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxnQkFBZ0IsRUFBRSxLQUFLO29CQUN2QixjQUFjLEVBQUUsQ0FBQyxDQUFDLE1BQU07aUJBQ3pCLENBQUMsQ0FBQzthQUNKO2lCQUFJO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsZ0JBQWdCLEVBQUUsS0FBSztvQkFDdkIsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLE1BQU07aUJBQzNCLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQztRQUNELGdCQUFnQixFQUFFO1lBQ2hCLElBQUksS0FBSyxHQUFzQjtnQkFDN0IsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDdEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQzVDLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWU7Z0JBQzFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7Z0JBQzlCLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Z0JBQzFCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ3RCLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFNBQVMsRUFBRSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFO2dCQUNoRCx1QkFBdUIsRUFBRSxDQUFDO2FBQzNCLENBQUM7WUFDRixxQ0FBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQzVDO2dCQUNFLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFFLE1BQU07b0JBQ2IsUUFBUSxFQUFFO3dCQUNSLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDcEIsQ0FBQztpQkFDRixDQUFDLENBQUM7WUFDTCxDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGludml0YXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vaW52aXRhdGlvblNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTGVhcm5pbmdSb29tTW9kZWwgfSBmcm9tIFwiLi9tb2RlbHMvTGVhcm5pbmdSb29tTW9kZWxcIjtcclxuaW1wb3J0IHsgRm9ybWF0RGF0ZSwgRm9ybWF0VGltZSB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsXCI7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gIGRhdGE6e1xyXG4gICAgVGl0bGU6IFwiXCIsXHJcbiAgICBQYXJ0aWNpcGFudENvdW50OiAzLFxyXG4gICAgTGVhcm5pbmdDb250ZW50OiBcIlwiLFxyXG4gICAgU3RhcnREYXRlOiBcIlwiLFxyXG4gICAgRW5kRGF0ZTogXCJcIixcclxuICAgIFBsYWNlOiBcIlwiLFxyXG4gICAgSXNTaG93U2VsZWN0RGF0ZTogZmFsc2UsXHJcbiAgICBJc1Nob3dTZWxlY3RUaW1lOiBmYWxzZSxcclxuICAgIEN1cnJlbnREYXRlVGltZTogMCxcclxuICAgIEJvb2tpbmdEYXRlOiBcIlwiLFxyXG4gICAgQm9va2luZ0hvdXJTdGFydDogXCJcIixcclxuICAgIEJvb2tpbmdIb3VyRW5kOiBcIlwiLFxyXG4gICAgSXNFbmRUaW1lOiBmYWxzZVxyXG4gIH0sXHJcbiAgcGFnZUxpZmV0aW1lczp7XHJcbiAgICBzaG93OiBmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgY3VycmVudERhdGVUaW1lID0gbmV3IERhdGUoRGF0ZS5ub3coKSk7XHJcbiAgICAgIGxldCBlbmREYXRlVGltZSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlVGltZS5nZXRUaW1lKCkgKyAzNjAwMDAwKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBCb29raW5nRGF0ZTogRm9ybWF0RGF0ZShjdXJyZW50RGF0ZVRpbWUpLFxyXG4gICAgICAgIEJvb2tpbmdIb3VyU3RhcnQ6IEZvcm1hdFRpbWUoY3VycmVudERhdGVUaW1lKSxcclxuICAgICAgICBCb29raW5nSG91ckVuZDogRm9ybWF0VGltZShlbmREYXRlVGltZSksXHJcbiAgICAgICAgQ3VycmVudERhdGVUaW1lOiBjdXJyZW50RGF0ZVRpbWUuZ2V0VGltZSgpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgSW52aXRhdGlvbkZvcm1JbnB1dENoYW5nZTogZnVuY3Rpb24oZSl7XHJcbiAgICAgIGNvbnN0IHtmaWVsZH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW2BpbnZpdGF0aW9uRGF0YS4ke2ZpZWxkfWBdOiBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uU2VsZWN0RGF0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBJc1Nob3dTZWxlY3REYXRlOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uQ2xvc2VTZWxlY3REYXRlOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIElzU2hvd1NlbGVjdERhdGU6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uQ29uZmlybVNlbGVjdERhdGU6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIElzU2hvd1NlbGVjdERhdGU6IGZhbHNlLFxyXG4gICAgICAgIEN1cnJlbnREYXRlVGltZTogZS5kZXRhaWwsXHJcbiAgICAgICAgQm9va2luZ0RhdGU6IEZvcm1hdERhdGUobmV3IERhdGUoZS5kZXRhaWwpKVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvblNlbGVjdFRpbWU6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICBpZihlLnRhcmdldC5pZCA9PSBcImlkU3RhcnRUaW1lXCIpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBJc1Nob3dTZWxlY3RUaW1lOiB0cnVlLFxyXG4gICAgICAgICAgSXNFbmRUaW1lOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgSXNTaG93U2VsZWN0VGltZTogdHJ1ZSxcclxuICAgICAgICAgIElzRW5kVGltZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25DbG9zZVNlbGVjdFRpbWU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgSXNTaG93U2VsZWN0VGltZTogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25Db25maXJtU2VsZWN0VGltZTogZnVuY3Rpb24oZSl7XHJcbiAgICAgIGlmKHRoaXMuZGF0YS5Jc0VuZFRpbWUpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBJc1Nob3dTZWxlY3RUaW1lOiBmYWxzZSxcclxuICAgICAgICAgIEJvb2tpbmdIb3VyRW5kOiBlLmRldGFpbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgSXNTaG93U2VsZWN0VGltZTogZmFsc2UsXHJcbiAgICAgICAgICBCb29raW5nSG91clN0YXJ0OiBlLmRldGFpbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgU3VibWl0SW52aXRhdGlvbjogZnVuY3Rpb24oKXtcclxuICAgICAgbGV0IG1vZGVsOiBMZWFybmluZ1Jvb21Nb2RlbCA9IHtcclxuICAgICAgICBUaXRsZTogdGhpcy5kYXRhLlRpdGxlLFxyXG4gICAgICAgIFBhcnRpY2lwYW50Q291bnQ6IHRoaXMuZGF0YS5QYXJ0aWNpcGFudENvdW50LFxyXG4gICAgICAgIExlYXJuaW5nQ29udGVudDogdGhpcy5kYXRhLkxlYXJuaW5nQ29udGVudCxcclxuICAgICAgICBTdGFydERhdGU6IHRoaXMuZGF0YS5TdGFydERhdGUsXHJcbiAgICAgICAgRW5kRGF0ZTogdGhpcy5kYXRhLkVuZERhdGUsXHJcbiAgICAgICAgUGxhY2U6IHRoaXMuZGF0YS5QbGFjZSxcclxuICAgICAgICBSb29tSWQ6IFwiXCIsXHJcbiAgICAgICAgQ3JlYXRlZEJ5OiBcIlwiLFxyXG4gICAgICAgIENyZWF0ZWRPbjogKG5ldyBEYXRlKERhdGUubm93KCkpKS50b0RhdGVTdHJpbmcoKSxcclxuICAgICAgICBDdXJyZW50UGFydGljaXBhbnRDb3VudDogMVxyXG4gICAgICB9O1xyXG4gICAgICBpbnZpdGF0aW9uU2VydmljZS5DcmVhdGVJbnZpdGF0aW9uKG1vZGVsKS50aGVuKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIumCgOe6pueUn+aIkFwiLFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7ICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICApOyAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=