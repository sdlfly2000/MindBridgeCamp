export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

export const Login = function(app: IAppOption){
  wx.login({
    success: res => {
      console.log("Login Code: " + res.code)
      wx.request({
        url: app.globalData.baseUrlAuth + "WeixinLogin/GetToken",
        data:{
          LoginCode: res.code,
          AppName: app.globalData.appName
        },
        header: {
          'content-type': 'application/json'
        },
        method: 'POST',
        success: function(response){
          console.log("Login Token: " + response.data)
          if(response.data != undefined){
            wx.setStorageSync('LoginToken', response.data)
          }
        }
      })
    },
  }) 
}