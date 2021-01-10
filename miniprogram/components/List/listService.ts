
import { webClient } from "../../utils/util";

var app = getApp<IAppOption>();

class ListService{
  BaseUrlApp: string = "";
  constructor(baseUrlApp: string){
    this.BaseUrlApp = baseUrlApp;
  };

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

  public GetRoomsParticipated() {
    let vm = this;
    let url = vm.BaseUrlApp + "LearningRoom/GetRoomsParticipated/" + this.GetLoginToken();
    return webClient(url);
  }

  public GetAvailableRooms(){
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