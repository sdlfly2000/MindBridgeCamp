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
      .then(() => {
        this.setData({
          isLoginTokenValid: true
        })})
      .catch(() => {
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
              let Rooms = this.MapParticipatedRoom(res.data);
              this.setData({
                Invitations: Rooms
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
    NavigateToChatMessage: function(e){
      let roomId = e.currentTarget.dataset.roomid;
      let roomModel:any = this.data.Invitations.find((invitation:any) => invitation.RoomId == roomId);
      wx.navigateTo({
        url: "/components/ChatMessage/chatMessage",
        success: function(res){
          res.eventChannel.emit("ChatMessageRoomModel", {RoomModel: roomModel})
        }
      });
    },
    MapParticipatedRoom(rooms: []){
      rooms.forEach((room:any) => {
        if(room.Status==1){
          room.Thumb = "/image/NotStart.png";
        }else if(room.Status==0){
          room.Thumb = "/image/InProcess.png";
        }else if(room.Status==2){
          room.Thumb = "/image/Complete.png";
        }
      });
      return rooms;
    },

    JoinInvitation: function(e){
      let roomId = e.currentTarget.dataset.roomid;
      listService.JoinRoom(roomId).then(
        (res:any) => {
          let invitation = res.data[0];
          let invitations: any = this.data.Invitations;
          let invitationIndex = invitations.findIndex((i:any) => i.RoomId == invitation.RoomId);
          invitations[invitationIndex] = invitation;
          this.setData({
            Invitations: invitations
          });
        }
      );
    },

    SignInInvitation: function(e){
      let roomId = e.currentTarget.dataset.roomid;
      listService.SignInRoom(roomId)
        .then(() => {
          let invitations:any = this.data.Invitations;
          let invitationIndex = invitations.findIndex((i:any) => i.RoomId == roomId);
          invitations[invitationIndex].IsSignIn = true;

          this.setData({
            Invitations: invitations
          });
        })
        .catch((res) => console.error(res.errMsg));
    },

    GetCurrentPageName(){
      let pagesLength = getCurrentPages().length;
      let route = getCurrentPages()[pagesLength-1].route;
      return route.split("/").pop();
    }
  }
})