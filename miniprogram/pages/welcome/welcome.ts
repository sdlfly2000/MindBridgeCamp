import { Login } from "../../utils/util";
import { loginService } from "../login/LoginService";

var app = getApp<IAppOption>();

Page({
  onLoad() {    
      Login(app)
        .then((res:any) => {
          let loginToken:string = res.data;
          if (app.globalData.userInfo) {
            loginService.UpdateOrAddUserInfo(loginToken, app.globalData.userInfo);
            wx.switchTab({url:app.globalData.mainPage});
          }else {
            wx.navigateTo({url:app.globalData.loginPage});
          }
        }); 
    }
})