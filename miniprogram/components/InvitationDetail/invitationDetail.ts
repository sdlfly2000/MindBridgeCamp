import { invitationDetailService } from "./invitationDetailService";

Component({
  data:{
    InvitationShown: {},
    ParticipantsShown: [],
    IsJoinRoom: false
  },
  lifetimes:{
    ready: function(){
      let vm = this;
      const eventChannel = this.getEventChannel();
      eventChannel.on("InvitationDetailRoomModel", function(data:any){
        let roomModel = data.RoomModel;
        invitationDetailService.GetCreatorInfo(roomModel.CreatedBy).then(
          (res:any) =>{           
            let invitationShown: any = roomModel;
            invitationShown.Created = res.data.Name;
            vm.setData({
              InvitationShown: invitationShown
            });
          }
        ).catch((e) => console.error(e));
        invitationDetailService.GetParticipants(roomModel.RoomId)
          .then(
            (res:any) => {
              let participants:[] = res.data;
              participants.forEach(
                (p:any) => {
                  if(p.Gender == 0){
                    p.GenderClass="participant-boy";
                  }else if(p.Gender == 1){
                    p.GenderClass="participant-girl";
                  } 
              });
              vm.setData({
                ParticipantsShown: participants
              });
            }
          ).catch((err) => console.error(err));
        invitationDetailService.IsJoinRoom(roomModel.RoomId)
          .then(() => vm.setData({ IsJoinRoom: true }));
      });
    }
  },
  methods:{
    JoinInvitation: function(e){
      let roomId = e.currentTarget.dataset.roomid;
      invitationDetailService.JoinRoom(roomId).then(
        () => {
          wx.navigateBack();
        }
      );
    },
    CloseInvitationDetail:function(){
      wx.navigateBack();
    },
    getEventChannel(){
      return this.getOpenerEventChannel();
    }
  }
})