import { webClient } from "../../utils/util";

var app = getApp<IAppOption>();

class LoginService{
	private BaseUrlApp: string = "";
	private LoginToken: string = "";
	
	constructor(baseUrlApp: string){
		this.BaseUrlApp = baseUrlApp;
		this.LoginToken = wx.getStorageSync("LoginToken");
	}
	
	public UpdateOrAddUserInfo(userInfo: any){
		let isUserExistUrl = this.BaseUrlApp + "User/IsUserExist/" + this.LoginToken;
		webClient(isUserExistUrl)
			.then(() => this.UpdateUserInfo(userInfo))
			.catch(() => this.AddUserInfo(userInfo));
	}

	private UpdateUserInfo(userInfo: any){
		let updateUserInfoUrl: string = this.BaseUrlApp + "User/UpdateUserInfo/" + this.LoginToken;
		let userInfoData = {
			NickName: userInfo.nickName,
			AvatarUrl: userInfo.avatarUrl,
			Country: userInfo.country,
			Province: userInfo.province,
			City: userInfo.city,
			Language: userInfo.language
		}
		webClient(updateUserInfoUrl, "POST", userInfoData)
			.catch((res) => console.error(res));
	}

	private AddUserInfo(userInfo: any){
		let addUserInfoUrl: string = this.BaseUrlApp + "User/AddUser/" + this.LoginToken;
		let userInfoData = {
			NickName: userInfo.nickName,
			AvatarUrl: userInfo.avatarUrl,
			Country: userInfo.country,
			Province: userInfo.province,
			City: userInfo.city,
			Language: userInfo.language
		}
		webClient(addUserInfoUrl, "POST", userInfoData)
			.catch((res) => console.error(res));
	}	
}

export const loginService = new LoginService(app.globalData.baseUrlApp);