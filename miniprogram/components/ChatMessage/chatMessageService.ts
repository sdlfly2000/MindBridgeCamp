var app = getApp<IAppOption>();

class ChatMessageService{
  private _baseUrlWs:string;  
  private _baseUrlApp:string;
  private _socket: WechatMiniprogram.SocketTask | undefined;
  constructor(baseUrlWs:string, baseUrlApp:string){
    this._baseUrlWs = baseUrlWs;
    this._baseUrlApp = baseUrlApp;
  }
  public Connect(RoomId:string){
    return new Promise(
      (resolve, error) => {
        this._socket = wx.connectSocket({
          url: this._baseUrlWs + "ChatMessage/" + RoomId + "/" + this.GetLoginToken(),
          success: function(res){
            resolve(res);
          },
          fail: function(res){
            error(res);
          }
        });
        this.SetupEvents();
      }
    );
  }

  public Send(content:string){
    this._socket?.send({
      data: content
    });
  }

  public Close(){
    this._socket?.close({});
  }

  private SetupEvents(){
    this._socket?.onOpen(
      () => {
        console.info("Websocket connected.");
      });
      this._socket?.onError(
        (res) => {
          console.error(res.errMsg);
        }
      );
      this._socket?.onMessage(
        (res) => {
          console.info(res.data);
        }
      );
  }

  public GetMessages(roomId: string){
    return new Promise(
      (resolve, error) => {
        wx.request({
          url: this._baseUrlApp + "LearningRoom/GetAllMessagesByRoom/" + this.GetLoginToken() + "/" + roomId,
          success: function(res){
            resolve(res);
          },
          fail: function(res){
            error(res);
          }
        });
      }
    );
  }

  public SaveMessage(roomId:string, message:string){
    return new Promise(
      (resolve, error) => {
        wx.request({
          url: this._baseUrlApp + "LearningRoom/SaveMessage",
          method: "POST",
          data: {
            loginToken: this.GetLoginToken(),
            roomId: roomId,
            content: message
          },
          success: function(res){
            resolve(res);
          },
          fail: function(res){
            error(res);
          }
        });
      }
    );
  }

  public GetParticipants(roomId:string){
    return new Promise(
      (resolve, error) => {
        wx.request({
          url: this._baseUrlApp + "LearningRoom" + "/GetParticipants/" + roomId,
          success: function(res){
            if(res.statusCode == 200){
              resolve(res);
            }else{
              error(res);
            }
          },
          fail:function(res){
            error(res);
          }
        });
      }
    );
  }

  public GetParticpantsOnline(roomId: string) {
    return new Promise(
      (resolve, error) =>
      {
        wx.request({
          url: this._baseUrlApp + "LearningRoom" + "/GetParticipantsOnlineCount/" + roomId,
          success: function(res){
            resolve(res);
          },
          fail: function(res){
            error(res);
          }
        });
      });
  }

  private GetLoginToken(): string {
    return wx.getStorageSync("LoginToken");
  }
}

export const chatMessageService = new ChatMessageService(app.globalData.baseUrlWs, app.globalData.baseUrlApp);