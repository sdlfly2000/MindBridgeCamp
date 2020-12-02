Component({
  methods:{
    NavigateToInvitation: function(){
      wx.navigateTo({
        url: "/components/Invitation/invitation"
      });
    }
  }  
})