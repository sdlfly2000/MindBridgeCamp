import { NoteModel } from "../../models/Note/NoteModel";

Component({
  data: {
    Notes: Array<NoteModel>()
  },
  lifetimes: {
    ready: function(){

    }
  },
  methods: {
   CreateNote: function() {
    wx.navigateTo({
      url: "/components/ShareNotes/shareNotes"
    });
   } 
  }  
});