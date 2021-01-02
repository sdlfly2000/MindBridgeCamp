
var app = getApp<IAppOption>();

class ListService{
  BaseUrlApp: string = "";
  constructor(baseUrlApp: string){
    this.BaseUrlApp = baseUrlApp;
  };

  GetAvailableRooms(){
    var vm = this;
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
}

export const listService = new ListService(app.globalData.baseUrlApp);