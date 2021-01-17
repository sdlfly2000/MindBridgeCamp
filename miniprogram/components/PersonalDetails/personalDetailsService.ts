import { webClient } from "../../utils/util";

var app = getApp<IAppOption>();

class PersonalDetailService {
  private BaseUrlApp: string;
  constructor(baseUrlApp: string){
    this.BaseUrlApp = baseUrlApp;
  }

  public UpdateUser(userModel: any){
    let updateUserUrl: string = this.BaseUrlApp + "User/UpdateUser/" + this.GeLoginToken();
    webClient(updateUserUrl, "POST", userModel).catch((e) => console.error(e));
  }

  private GeLoginToken(): string {
    return wx.getStorageSync("LoginToken");
  }
}

export const personalDetailsService = new PersonalDetailService(app.globalData.baseUrlApp);