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
    }
  }  
})