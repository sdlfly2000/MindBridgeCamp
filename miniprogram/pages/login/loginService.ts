import { webClient } from "../../utils/util";

var app = getApp<IAppOption>();

class LoginService{
	private BaseUrlApp: string = "";
	private UserInfo: {};
	private LoginToken: string = "";
	
	constructor(globalData: any){
		this.BaseUrlApp = globalData.baseUrlApp;
		this.UserInfo = globalData.UserInfo;
		this.LoginToken = wx.getStorageSync("LoginToken");
	}
	
	public UpdateOrAddUserInfo(){
		let isUserExistUrl = this.baseUrlApp + "User/IsUserExist/" + this.LoginToken;
		webClient(isUserExistUrl)
			.then(() => this.UpdateUserInfo(this.UserInfo))
			.catch(() => this.AddUserInfo(this.UserInfo));
	}

	private UpdateUserInfo(userInfo: any){
		let updateUserInfoUrl: string = this.BaseUrlApp + "User/UpdateUserInfo/" + this.LoginToken;
		let userInfoData = {
			NickName: userInfo.NickName,
			AvatarUrl: userInfo.AvatarUrl,
			Country: userInfo.Country,
			Province: userInfo.Province,
			City: userInfo.City,
			Language: userInfo.Language
		}
		webClient(updateUserInfoUrl, "POST", userInfoData)
			.catch((res) => console.error(res));
	}

	private AddUser(userInfo: any){
		let addUserInfoUrl: string = this.baseUrlApp + "User/AddUser/" + this.LoginToken;
		let userInfoData = {
			NickName: userInfo.NickName,
			AvatarUrl: userInfo.AvatarUrl,
			Country: userInfo.Country,
			Province: userInfo.Province,
			City: userInfo.City,
			Language: userInfo.Language
		}
		webClient(addUserInfoUrl, "POST", userInfoData)
			.catch((res) => console.error(res));
	}	
}

export const loginService = new LoginService(app.globalData);