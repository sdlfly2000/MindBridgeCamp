import { chatMessageService } from "./chatMessageService";

Component({
  data:{
    roomId: undefined,
    participantsOnline: 0,
    totalParticipants: 0,
  },
  lifetimes:{    
    ready: function(){
      let vm = this;
      let eventChannel  = this.getEventChannel();
      eventChannel.on("ChatMessageRoomModel", function(data:any){
        let roomModel = data.RoomModel;
        vm.data.roomId = roomModel.RoomId;
        vm.ConnectToHub(roomModel.RoomId);
      });
    },
    detached: function(){
      this.CloseToHub();
    }    
  },
  methods:{
    ConnectToHub:function(roomId:string){
      chatMessageService.Connect(roomId)
        .then(() => {
          this.GetCountOnlineParticipants(roomId);
          this.GetParticipants(roomId);
        })
        .catch((res) => console.error(res));
    },
    CloseToHub:function(){
      chatMessageService.Close();
    },
    GetCountOnlineParticipants: function(roomId: string){
      chatMessageService.GetParticpantsOnline(roomId)
        .then((res:any) => this.setData({
          participantsOnline: res.data
        }))
        .catch((res) => console.error(res));
    },
    GetParticipants:function(roomId: string){
      chatMessageService.GetParticipants(roomId)
        .then((res:any) => this.setData({
          totalParticipants: res.data.length
        }))
        .catch((res) => console.error(res));
    },
    getEventChannel(){
      return this.getOpenerEventChannel();
    }
  }
})