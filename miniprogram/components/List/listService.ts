
var app = getApp<IAppOption>();

class ListService{
  BaseUrlApp: string = "";
  constructor(baseUrlApp: string){
    this.BaseUrlApp = baseUrlApp;
  };

  JoinRoom(roomId: string){
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

  GetCreatorInfo(openId:string){
    let vm = this;
    return new Promise(
      (resolve) => {
        wx.request({
          url: vm.BaseUrlApp + "User/Get/" + openId,
          success: function(res){
            resolve(res);
          }
        });
      }
    );
  }

  GetAvailableRooms(){
    let vm = this;
    return new Promise(
      (resolve) => {
        wx.request({
          url: vm.BaseUrlApp +  "LearningRoom/GetAvailableRooms",
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

export const listService = new ListService(app.globalData.baseUrlApp);