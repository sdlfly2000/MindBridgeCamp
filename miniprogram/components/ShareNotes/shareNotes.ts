Component({
  data:{
    shareNotesData:{

    }
  },
  methods:{
    ShareNotesFormInputChange: function(e){
      const {field} = e.currentTarget.dataset
      this.setData({
          [`shareNotesData.${field}`]: e.detail.value
      })
    },
    SubmitShareNotes: function(){
      wx.showModal({
        title: "分享生成",
        complete: function(){
          wx.navigateBack();
        }
      });      
    },
    GetPicture:function(){
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          console.info(res.tempFilePaths);
        }
      })
    }
  }
})