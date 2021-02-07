import { chatMessageService } from "./chatMessageService";

Component({
  data:{
    model:{}
  },
  lifetimes:{    
    ready: function(){
      let vm = this;
      let eventChannel  = this.getEventChannel();
      eventChannel.on("ChatMessageRoomModel", function(data:any){
        let roomModel = data.RoomModel;
        vm.ConnectToHub(roomModel.RoomId);
      });
    }
  },
  methods:{
    ConnectToHub:function(roomId:string){
      chatMessageService.Connect(roomId)
        .then((res) =>console.info(res))
        .catch((res) => console.error(res));
    },
    CloseToHub:function(){
      chatMessageService.Close();
    },
    getEventChannel(){
      return this.getOpenerEventChannel();
    }
  }
})