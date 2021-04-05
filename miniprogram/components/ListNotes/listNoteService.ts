var app = getApp<IAppOption>();

class ListNoteService {
  BaseUrlApp: string = "";
  constructor(baseUrlApp: string){
    this.BaseUrlApp = baseUrlApp;
  };

  public GetValidNotes(){

  }

  private GetLoginToken(): string {    
    return wx.getStorageSync("LoginToken");
  }
}

export const listNoteService = new ListNoteService(app.globalData.baseUrlApp);