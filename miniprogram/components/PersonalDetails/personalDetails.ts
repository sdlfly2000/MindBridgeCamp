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