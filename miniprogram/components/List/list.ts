import { listService } from "./listService";

Component({
  data:{
    Invitations: [],
    IsShowInvitationDetail: false,
    InvitationShown: {}
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
    OpenInvitationDetail: function(e){
      let roomId = e.currentTarget.dataset.roomid;
      let roomModel = this.data.Invitations.find((invitation:any) => invitation.RoomId == roomId);
      this.setData({
        IsShowInvitationDetail: true,
        InvitationShown: roomModel
      });
    },
    JoinInvitation: function(e){
      console.info(e.currentTarget.dataset.roomid);
      let roomId = e.currentTarget.dataset.roomid;
      listService.JoinRoom(roomId).then(
        (res) => {
          console.info(res);
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