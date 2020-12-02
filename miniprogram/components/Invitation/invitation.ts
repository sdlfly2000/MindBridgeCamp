Component({
  data:{
    invitationData: {

    }
  },
  methods: {
    InvitationFormInputChange: function(e){
      const {field} = e.currentTarget.dataset
      this.setData({
          [`invitationData.${field}`]: e.detail.value
      })
    },
    SubmitInvitation: function(){
      wx.showModal({
        title: "邀约生成",
        complete: function(){
          wx.navigateBack();
        }
      });      
    }
  }  
})