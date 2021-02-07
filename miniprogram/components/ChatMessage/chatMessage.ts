var app = getApp<IAppOption>();

Component({
  methods:{
    ConnectToHub:function(){
      wx.connectSocket({
        url: app.globalData.bassUrlWs + "ChatMessage" + "/RoomId" + "/LoginToken",
        success: function(res){
          console.info(res);
        }
      });
    },
    CloseToHub: function(){
      wx.closeSocket();
    }
  }
})