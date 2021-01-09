import { listService } from "./listService";

Component({
  data:{
    Invitations: [],
  },
  pageLifetimes:{
    show: function(){
      let pagesLength = getCurrentPages().length;
      let route = getCurrentPages()[pagesLength-1].route;
      let pageName = route.split("/").pop();
      if(pageName == "main"){
        listService.GetRoomsParticipated().then(
          (res: any) => {
            this.setData({
              Invitations: res.data
          })}
        ).catch((e) => console.error(e));
      }else if(pageName == "hall"){
        listService.GetAvailableRooms().then(
          (res: any) => {          
            this.setData({
              Invitations: res.data
          })
        });
      }
    }
  },
  methods:{
    NavigateToDetails: function(e){
      let roomId = e.currentTarget.dataset.roomid;
      let roomModel:any = this.data.Invitations.find((invitation:any) => invitation.RoomId == roomId);

      wx.navigateTo({
        url: "/components/InvitationDetail/invitationDetail",
        success: function(res){
          res.eventChannel.emit("InvitationDetailRoomModel", {RoomModel: roomModel})
        }
      });
    },

    JoinInvitation: function(e){
      let roomId = e.currentTarget.dataset.roomid;
      listService.JoinRoom(roomId).then(
        (res:any) => {
          let invitation = res.data[0];
          let invitations: any = this.data.Invitations;
          var invitationIndex = invitations.findIndex((i:any) => i.RoomId == invitation.RoomId);
          invitations[invitationIndex] = invitation;
          this.setData({
            Invitations: invitations
          });
        }
      );
    }
  }
})