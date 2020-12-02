Component({
  data:{
    showInvitationDialog: false,
    buttonsInvitationDialog: [{text: "取消"}, {text: "确定" }]
  },
  methods:{
    DisplayInvitationDialog: function(){
      this.setData({
        showInvitationDialog: true
      });
    },
    TapInvitationDialogButton: function(e){
      switch(e.detail.index){
        case 0: {
          break;
        }
        case 1: {
          break;
        }
      };
      this.setData({
        showInvitationDialog: false
      });
    }
  }  
})