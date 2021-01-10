import { IsLoginTokenValid, Login } from "../../utils/util";
import { listService } from "./listService";

var app = getApp<IAppOption>()

Component({
  data:{
    Invitations: [],
    isLoginTokenValid: false
  },
  pageLifetimes:{
    show: function(){
      IsLoginTokenValid(app)
      .then((res) => {
        console.debug(res);
        this.setData({
          isLoginTokenValid: true
        })})
      .catch((res) => {
        console.debug(res);
        this.setData({
          isLoginTokenValid: false
        })
      })
    }
  },
  observers:{
    'isLoginTokenValid': function(isLoginTokenValid:boolean){
      if(!isLoginTokenValid){
        Login(app).then((res) => {
          console.debug(res);
          this.setData({
            isLoginTokenValid: true
          })});
      }else{
        let pageName = this.GetCurrentPageName();
        if(pageName == "main"){
          listService.GetRoomsParticipated().then(
            (res: any) => {
              this.setData({
                Invitations: res.data
            })}
          ).catch((res) => console.error(res));
        }else if(pageName == "hall"){
          listService.GetAvailableRooms().then(
            (res: any) => {          
              this.setData({
                Invitations: res.data
            })
          });
        }
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
    },

    GetCurrentPageName(){
      let pagesLength = getCurrentPages().length;
      let route = getCurrentPages()[pagesLength-1].route;
      return route.split("/").pop();
    }
  }
})