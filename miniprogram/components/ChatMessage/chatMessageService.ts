var app = getApp<IAppOption>();

class ChatMessageService{
  private _bassUrlWs:string;  
  private _socket: WechatMiniprogram.SocketTask | undefined;
  constructor(bassUrlWs:string){
    this._bassUrlWs = bassUrlWs;
  }
  public Connect(RoomId:string){
    return new Promise(
      (resolve, error) => {
        this._socket = wx.connectSocket({
          url: this._bassUrlWs + "ChatMessage/" + RoomId + "/" + this.GetLoginToken(),
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
  public Close(){
    this._socket?.close({});
  }

  private SetupEvents(){
    this._socket?.onOpen(
      (res) => {
        console.info(res);
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

  private GetLoginToken(): string {
    return wx.getStorageSync("LoginToken");
  }
}

export const chatMessageService = new ChatMessageService(app.globalData.bassUrlWs);