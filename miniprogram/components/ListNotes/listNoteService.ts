import { NoteModel } from "../../models/Note/NoteModel";

var app = getApp<IAppOption>();

class ListNoteService {
  BaseUrlApp: string = "";
  constructor(baseUrlApp: string){
    this.BaseUrlApp = baseUrlApp;
  };

  public Create(note: NoteModel){
    return new Promise(
      (resolve, error) => {
        wx.request({
          url: this.BaseUrlApp + "Note/Create/" + this.GetLoginToken(),
          method: 'POST',
          data: {
            model: note
          },
          success: function(res) {
            resolve(res);
          },
          fail: function(res) {
            error(res);
          }
        });
      }
    );
  }

  public GetValidNotes(){
    
  }

  private GetLoginToken(): string {    
    return wx.getStorageSync("LoginToken");
  }
}

export const listNoteService = new ListNoteService(app.globalData.baseUrlApp);