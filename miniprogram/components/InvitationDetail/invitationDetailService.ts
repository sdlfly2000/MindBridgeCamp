var app = getApp<IAppOption>();

class InvitationDetailService{
  BaseUrlApp: string = "";
  constructor(baseUrlApp: string){
    this.BaseUrlApp = baseUrlApp;
  }

  public JoinRoom(roomId: string){
    let vm = this;
    return new Promise(
      (resolve) => {
        wx.request({
          url: vm.BaseUrlApp + "LearningRoom/JoinRoom/" + this.GetLoginToken() + "/" + roomId,
          success: function(res){
            resolve(res);
          }
        });
      }
    );
  }

  public GetCreatorInfo(openId:string){
    let vm = this;
    return new Promise(
      (resolve, error) => {
        wx.request({
          url: vm.BaseUrlApp + "User/Get/" + openId,
          success: function(res){
            resolve(res);
          },
          fail: function(e){
            error(e);
          }
        });
      }
    );
  }

  public GetParticipants(roomId:string){
    let vm = this;
    return new Promise(
      (resolve, error) => {
        wx.request({
          url: vm.BaseUrlApp + "LearningRoom/GetParticipants/" + roomId,
          success: function(res){
            resolve(res);
          },
          fail: function(err){
            error(err);
          }
        });
      }
    );
  }

  private GetLoginToken(): string {
    return wx.getStorageSync("LoginToken");
  }
}

export const invitationDetailService = new InvitationDetailService(app.globalData.baseUrlApp)