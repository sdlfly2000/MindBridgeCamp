export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('-') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

export const FormatDate = function(date: Date){
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].map(formatNumber).join('-');
}

export const FormatTime = function(date: Date){
  return [date.getHours(), date.getMinutes()].map(formatNumber).join(':');
}

export const webClient = function(url: string, httpMethod?: any, requestData?: any){
  return new Promise(
    (resolve, error) => {
      wx.request({
        url: url,
        method: httpMethod,
        data: requestData,
        success: function(res){
          resolve(res);
        },
        fail: function(e){
          error(e);
        }
      });
    }
  );
}

export const IsLoginTokenValid = function(app: IAppOption){
  let loginToken:string = wx.getStorageSync("LoginToken");
  return new Promise(
    (resolve, error) => {
      wx.request({
        url: app.globalData.baseUrlAuth + "WeixinLogin/IsLoginTokenValid/" + loginToken,
        success: function(res){
          resolve(res);
        },
        fail: function(e){
          error(e);
        }
      });
    }
  );
}

export const Login = function(app: IAppOption){
  return new Promise(
    (resolve) => {
      wx.login({
        success: res => {
          console.info("Login Code: " + res.code);      
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
              if(response.data != undefined){
                wx.setStorageSync('LoginToken', response.data)
                console.info("Login Token: " + response.data); 
                resolve(response);
              }
            }
          })
        },
      }) 
    }
  ) 
}