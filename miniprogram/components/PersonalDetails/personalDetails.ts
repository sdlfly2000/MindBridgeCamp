import { personalDetailsService } from "./personalDetailsService"

Component({
  data:{
    name: "",
    majorIn:"",
    height: undefined,
    weight: undefined,
    hobby: "",
    studyConent:""
  },
  pageLifetimes：{
	show: function(){
	  personalDetailService.GetUser()
		.then(
		(res) => {
		  this.setData({
			name: res.Name,
			majorIn: res.MajorIn,
			height: res.Height,
			weight: res.Weight,
			hobby: res.Hobby,
			studyConent: res.StudyContent,
			expectationAfterGraduation: res.ExpectationAfterGraduation,
			gender: res.Gender
		  });  	
		})
		.catch((e) => console.error(e))	
	} 
  }，
  methods:{
    FormRadioChange(event){
      const {name} = event.target.dataset
      this.setData({
        [`${name}`]: event.detail
      })
    },
    SubmitChange(){
      let userModel = {
        Gender: this.data.gender,
        Name: this.data.name,
        MajorIn: this.data.majorIn,
        Height: this.data.height,
        Weight: this.data.weight,
        StudyContent: this.data.studyConent,
        ExpectationAfterGraduation: this.data.expectationAfterGraduation,
        Hobby: this.data.hobby
      }
      personalDetailsService.UpdateUser(userModel);
      wx.navigateBack();
    },
    CancelEdit(){
      wx.navigateBack();
    }
  }
})