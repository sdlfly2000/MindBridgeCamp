"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chatMessageService_1 = require("./chatMessageService");
Component({
    data: {
        model: {}
    },
    lifetimes: {
        ready: function () {
            var vm = this;
            var eventChannel = this.getEventChannel();
            eventChannel.on("ChatMessageRoomModel", function (data) {
                var roomModel = data.RoomModel;
                vm.ConnectToHub(roomModel.RoomId);
            });
        }
    },
    methods: {
        ConnectToHub: function (roomId) {
            chatMessageService_1.chatMessageService.Connect(roomId)
                .then(function (res) { return console.info(res); })
                .catch(function (res) { return console.error(res); });
        },
        CloseToHub: function () {
            chatMessageService_1.chatMessageService.Close();
        },
        getEventChannel: function () {
            return this.getOpenerEventChannel();
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0TWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUEwRDtBQUUxRCxTQUFTLENBQUM7SUFDUixJQUFJLEVBQUM7UUFDSCxLQUFLLEVBQUMsRUFBRTtLQUNUO0lBQ0QsU0FBUyxFQUFDO1FBQ1IsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ2QsSUFBSSxZQUFZLEdBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzNDLFlBQVksQ0FBQyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsVUFBUyxJQUFRO2dCQUN2RCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUMvQixFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FDRjtJQUNELE9BQU8sRUFBQztRQUNOLFlBQVksRUFBQyxVQUFTLE1BQWE7WUFDakMsdUNBQWtCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDL0IsSUFBSSxDQUFDLFVBQUMsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBakIsQ0FBaUIsQ0FBQztpQkFDL0IsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxVQUFVLEVBQUM7WUFDVCx1Q0FBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixDQUFDO1FBQ0QsZUFBZTtZQUNiLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDdEMsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hhdE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vY2hhdE1lc3NhZ2VTZXJ2aWNlXCI7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gIGRhdGE6e1xyXG4gICAgbW9kZWw6e31cclxuICB9LFxyXG4gIGxpZmV0aW1lczp7ICAgIFxyXG4gICAgcmVhZHk6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCB2bSA9IHRoaXM7XHJcbiAgICAgIGxldCBldmVudENoYW5uZWwgID0gdGhpcy5nZXRFdmVudENoYW5uZWwoKTtcclxuICAgICAgZXZlbnRDaGFubmVsLm9uKFwiQ2hhdE1lc3NhZ2VSb29tTW9kZWxcIiwgZnVuY3Rpb24oZGF0YTphbnkpe1xyXG4gICAgICAgIGxldCByb29tTW9kZWwgPSBkYXRhLlJvb21Nb2RlbDtcclxuICAgICAgICB2bS5Db25uZWN0VG9IdWIocm9vbU1vZGVsLlJvb21JZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczp7XHJcbiAgICBDb25uZWN0VG9IdWI6ZnVuY3Rpb24ocm9vbUlkOnN0cmluZyl7XHJcbiAgICAgIGNoYXRNZXNzYWdlU2VydmljZS5Db25uZWN0KHJvb21JZClcclxuICAgICAgICAudGhlbigocmVzKSA9PmNvbnNvbGUuaW5mbyhyZXMpKVxyXG4gICAgICAgIC5jYXRjaCgocmVzKSA9PiBjb25zb2xlLmVycm9yKHJlcykpO1xyXG4gICAgfSxcclxuICAgIENsb3NlVG9IdWI6ZnVuY3Rpb24oKXtcclxuICAgICAgY2hhdE1lc3NhZ2VTZXJ2aWNlLkNsb3NlKCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0RXZlbnRDaGFubmVsKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldE9wZW5lckV2ZW50Q2hhbm5lbCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=