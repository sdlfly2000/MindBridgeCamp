import {Login} from "../../utils/util"

var app = getApp<IAppOption>()

Component({
  lifetimes:{
    ready: function(){
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
      }
    }
  },
  pageLifetimes: {
    show: function(){
    }
  },
  data:{
    calcData:{

    },
    userInfo:{

    },
    validationRules:[
      {name: "isFiveYearsAndOnlyOne", rules:{required: true, message:"必选"}},
      {name: "isFirstHand", rules:{required: true, message:"必选"}},
      {name: "salePrice", rules:{required: true, message:"必选"}},
      {name: "purchasedPrice", rules:{required: true, message:"必选"}}
    ]
  },
  methods:{
    FormInputChange(e:any) {
      const {field} = e.currentTarget.dataset
      this.setData({
          [`calcData.${field}`]: e.detail.value
      })
    },
    submitForm(){
      wx.showToast({title:"OK"})
    },
    checkSession(){
      wx.checkSession({
        success(){
          console.log("Login in valid.")
        },
        fail(){
          console.log("Login in Failure.")
          Login(app)
        }
      })
    }
  }
})