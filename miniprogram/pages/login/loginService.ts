import { webClient } from "../../utils/util";

var app = getApp<IAppOption>();

class LoginService{
	private BaseUrlApp: string = "";

	constructor(baseUrlApp: string){
		this.BaseUrlApp = baseUrlApp;
	}
	
	public UpdateOrAddUserInfo(loginToken: string, userInfo: any){
		let isUserExistUrl = this.BaseUrlApp + "User/IsUserExist/" + loginToken;
		webClient(isUserExistUrl)
			.then(() => this.UpdateUserInfo(loginToken, userInfo))
			.catch(() => this.AddUserInfo(loginToken, userInfo));
	}

	private UpdateUserInfo(loginToken: string, userInfo: any){
		let updateUserInfoUrl: string = this.BaseUrlApp + "User/UpdateUserInfo/" + loginToken;
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

	private AddUserInfo(loginToken: string, userInfo: any){
		let addUserInfoUrl: string = this.BaseUrlApp + "User/AddUser/" + loginToken;
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