var app = getApp<IAppOption>();

class ChatMessageService{
  private _baseUrlWs:string;  
  private _baseUrlApp:string;
  private _socket: WechatMiniprogram.SocketTask | undefined;
  constructor(baseUrlWs:string, baseUrlApp:string){
    this._baseUrlWs = baseUrlWs;
    this._baseUrlApp = baseUrlApp;
  }
  public Connect(connectOptions: ConnectOptions){
    return new Promise(
      (resolve, error) => {
        this._socket = wx.connectSocket({
          url: this._baseUrlWs + "ChatMessage/" + connectOptions.roomId + "/" + this.GetLoginToken(),
          success: function(res){
            resolve(res);
          },
          fail: function(res){
            error(res);
          }
        });
        this.SetupEvents({onMessage: connectOptions.onMessage});
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

  private SetupEvents(eventHandlers: WebsocketEventHandlers){
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
          let model = JSON.parse(res.data as string) as LearningRoomMessageModel
          console.info(res.data);
          eventHandlers.onMessage(model);
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

export interface ConnectOptions {
  roomId:string,
  onMessage: (message:LearningRoomMessageModel) => void
}

export interface WebsocketEventHandlers{
  onMessage: (message:LearningRoomMessageModel) => void
}

export interface LearningRoomMessageModel{
  createdByNickName: string,
  content: string,
  isCreatedByRequester: boolean,
  createdOn: Date
}

export interface Participant {
  Name:string,
  NickName: string,
  Gender: number,
  AvatarUrl: string
}

export const chatMessageService = new ChatMessageService(app.globalData.baseUrlWs, app.globalData.baseUrlApp);