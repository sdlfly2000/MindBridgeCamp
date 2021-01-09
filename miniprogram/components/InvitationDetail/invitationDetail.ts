import { invitationDetailService } from "./invitationDetailService";

Component({
  data:{
    InvitationShown: {},
    ParticipantsShown: []
  },
  lifetimes:{
    ready: function(){
      let vm = this;
      const eventChannel = this.getOpenerEventChannel();
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
        .then((res:any) => vm.setData({
          ParticipantsShown: res.data
        }))
        .catch((err) => console.error(err));
      });
    }
  }
})