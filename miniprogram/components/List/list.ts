import { listService } from "./listService";

Component({
  data:{
    Invitations: [],
    IsShowInvitationDetail: false,
    InvitationShown: {},
    ParticipantsShown: []
  },
  pageLifetimes:{
    show: function(){
      listService.GetAvailableRooms().then(
        (res: any) => {
          this.setData({
            Invitations: res.data
        })
      });
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

    OpenInvitationDetail: function(e){
      let roomId = e.currentTarget.dataset.roomid;
      let roomModel:any = this.data.Invitations.find((invitation:any) => invitation.RoomId == roomId);
      this.setData({
        IsShowInvitationDetail: true,
        InvitationShown: roomModel
      });
      listService.GetCreatorInfo(roomModel.CreatedBy).then(
        (res: any) => {
          let invitationShown: any = this.data.InvitationShown;
          invitationShown.Created = res.data.Name;
          this.setData({
            InvitationShown: invitationShown
          });
        }
      );
      listService.GetParticipants(roomId)
        .then((res:any) => this.setData({
          ParticipantsShown: res.data
        }))
        .catch((err) => console.info(err));
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
    },
    CloseInvitationDetail:function(){
      this.setData({
        IsShowInvitationDetail: false
      });
    }
  }
})