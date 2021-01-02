import { LearningRoomModel } from "./models/LearningRoomModel";

var app = getApp<IAppOption>();

class InvitationService{
  BaseUrlApp: string = "";
  constructor(baseUrlApp: string){
    this.BaseUrlApp = baseUrlApp;
  }

  public CreateInvitation(roomModel: LearningRoomModel) {
    var vm = this;
    var loginToken = this.GetLoginToken();
    return new Promise(
      (resolve) => {
        wx.request({
          url: vm.BaseUrlApp + "LearningRoom/CreateRoom/" + loginToken,
          data: {
            model: roomModel
          },
          method: "POST",
          success: function(res){
            resolve(res);
          }
        });
      }
    );
  }

  private GetLoginToken(): string {
    return wx.getStorageSync("LoginToken");
  }
}

export const invitationService = new InvitationService(app.globalData.baseUrlApp);