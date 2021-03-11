import { chatMessageService, LearningRoomMessageModel } from "./chatMessageService";

Component({
  data:{
    roomId: "",
    participantsOnline: 0,
    totalParticipants: 0,
    messages: new Array<LearningRoomMessageModel>(),
    messageInput:""
  },
  lifetimes:{    
    ready: function(){
      let vm = this;
      let eventChannel  = this.getEventChannel();
      eventChannel.on("ChatMessageRoomModel", function(data:any){
        let roomModel = data.RoomModel;
        vm.setData({
          roomId: roomModel.RoomId
        });
        vm.ConnectToHub(roomModel.RoomId);
        vm.GetFullMessages(roomModel.RoomId);
      });
    },
    detached: function(){
      this.CloseToHub();
    }    
  },
  methods:{
    ConnectToHub:function(roomId:string){
      let vm = this;
      chatMessageService.Connect({roomId: roomId, onMessage: (model) => {      
        let models = vm.data.messages;
        models.push(model);
        vm.setData({
          messages: models,
          messageInput: ""
        });        
      }})
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
    GetFullMessages: function(roomId: string){
      chatMessageService.GetMessages(roomId)
        .then((res: any) => this.setData({
          messages: res.data as Array<LearningRoomMessageModel>
        }))
        .catch((res) => console.error(res));
    },
    SendMessage: function(){
      chatMessageService.Send(this.properties.messageInput);
    },
    getEventChannel(){
      return this.getOpenerEventChannel();
    },
    bindMessageInput: function(e){
      this.setData({
        messageInput: e.detail.value
      })
    }
  }
})