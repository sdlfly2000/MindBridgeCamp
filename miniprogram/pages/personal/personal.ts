Page({
  data:{
    stylePersionalInfo:"personal-info",
    styleNicknameContainer:"nickname-container",
    styleAvatarImageContainer:"avatar-image-container"
  },
  onShow(){
    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
  },
  onScroll: function(e:any){
    let currentStyle = this.data.stylePersionalInfo
    if(e.detail.isFixed){
      if(currentStyle != "personal-info-fixed"){
        this.setData({
          stylePersionalInfo: "personal-info-fixed",
          styleNicknameContainer:"nickname-container-fixed",
          styleAvatarImageContainer:"avatar-image-container-fixed"
        });
      }
    }else{
      if(currentStyle != "personal-info"){
        this.setData({
          stylePersionalInfo: "personal-info",
          styleNicknameContainer:"nickname-container",
          styleAvatarImageContainer:"avatar-image-container"
        });
      }
    }    
  }
})