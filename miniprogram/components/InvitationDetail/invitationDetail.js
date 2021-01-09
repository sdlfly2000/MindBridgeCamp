"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invitationDetailService_1 = require("./invitationDetailService");
Component({
    data: {
        InvitationShown: {},
        ParticipantsShown: []
    },
    lifetimes: {
        ready: function () {
            var vm = this;
            var eventChannel = this.getOpenerEventChannel();
            eventChannel.on("InvitationDetailRoomModel", function (data) {
                var roomModel = data.RoomModel;
                invitationDetailService_1.invitationDetailService.GetCreatorInfo(roomModel.CreatedBy).then(function (res) {
                    var invitationShown = roomModel;
                    invitationShown.Created = res.data.Name;
                    vm.setData({
                        InvitationShown: invitationShown
                    });
                }).catch(function (e) { return console.error(e); });
                invitationDetailService_1.invitationDetailService.GetParticipants(roomModel.RoomId)
                    .then(function (res) { return vm.setData({
                    ParticipantsShown: res.data
                }); })
                    .catch(function (err) { return console.error(err); });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRhdGlvbkRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludml0YXRpb25EZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxRUFBb0U7QUFFcEUsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFDO1FBQ0gsZUFBZSxFQUFFLEVBQUU7UUFDbkIsaUJBQWlCLEVBQUUsRUFBRTtLQUN0QjtJQUNELFNBQVMsRUFBQztRQUNSLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztZQUNkLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ2xELFlBQVksQ0FBQyxFQUFFLENBQUMsMkJBQTJCLEVBQUUsVUFBUyxJQUFRO2dCQUM1RCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUMvQixpREFBdUIsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FDOUQsVUFBQyxHQUFPO29CQUNOLElBQUksZUFBZSxHQUFRLFNBQVMsQ0FBQztvQkFDckMsZUFBZSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDeEMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt3QkFDVCxlQUFlLEVBQUUsZUFBZTtxQkFDakMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FDRixDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztnQkFDakMsaURBQXVCLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7cUJBQ3hELElBQUksQ0FBQyxVQUFDLEdBQU8sSUFBSyxPQUFBLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQzVCLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxJQUFJO2lCQUM1QixDQUFDLEVBRmlCLENBRWpCLENBQUM7cUJBQ0YsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW52aXRhdGlvbkRldGFpbFNlcnZpY2UgfSBmcm9tIFwiLi9pbnZpdGF0aW9uRGV0YWlsU2VydmljZVwiO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICBkYXRhOntcclxuICAgIEludml0YXRpb25TaG93bjoge30sXHJcbiAgICBQYXJ0aWNpcGFudHNTaG93bjogW11cclxuICB9LFxyXG4gIGxpZmV0aW1lczp7XHJcbiAgICByZWFkeTogZnVuY3Rpb24oKXtcclxuICAgICAgbGV0IHZtID0gdGhpcztcclxuICAgICAgY29uc3QgZXZlbnRDaGFubmVsID0gdGhpcy5nZXRPcGVuZXJFdmVudENoYW5uZWwoKTtcclxuICAgICAgZXZlbnRDaGFubmVsLm9uKFwiSW52aXRhdGlvbkRldGFpbFJvb21Nb2RlbFwiLCBmdW5jdGlvbihkYXRhOmFueSl7XHJcbiAgICAgICAgbGV0IHJvb21Nb2RlbCA9IGRhdGEuUm9vbU1vZGVsO1xyXG4gICAgICAgIGludml0YXRpb25EZXRhaWxTZXJ2aWNlLkdldENyZWF0b3JJbmZvKHJvb21Nb2RlbC5DcmVhdGVkQnkpLnRoZW4oXHJcbiAgICAgICAgICAocmVzOmFueSkgPT57ICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGludml0YXRpb25TaG93bjogYW55ID0gcm9vbU1vZGVsO1xyXG4gICAgICAgICAgICBpbnZpdGF0aW9uU2hvd24uQ3JlYXRlZCA9IHJlcy5kYXRhLk5hbWU7XHJcbiAgICAgICAgICAgIHZtLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgIEludml0YXRpb25TaG93bjogaW52aXRhdGlvblNob3duXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICkuY2F0Y2goKGUpID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xyXG4gICAgICAgIGludml0YXRpb25EZXRhaWxTZXJ2aWNlLkdldFBhcnRpY2lwYW50cyhyb29tTW9kZWwuUm9vbUlkKVxyXG4gICAgICAgIC50aGVuKChyZXM6YW55KSA9PiB2bS5zZXREYXRhKHtcclxuICAgICAgICAgIFBhcnRpY2lwYW50c1Nob3duOiByZXMuZGF0YVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn0pIl19