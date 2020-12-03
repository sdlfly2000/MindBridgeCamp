Component({
  methods:{
    NavigateToInvitation: function(){
      wx.navigateTo({
        url: "/components/Invitation/invitation"
      });
    },
    NavigateToShareNotes: function(){
      wx.navigateTo({
        url: "/components/ShareNotes/shareNotes"
      });
    },
    NavigateToExchange: function(){
      wx.navigateTo({
        url: "/components/Exchange/exchange"
      });
    }
  }  
})