Component({
  data:{
    objective: "",
    gender: "",
    validationRules: [

    ]
  },
  methods:{
    FormRadioChange(event){
      const {name} = event.target.dataset
      this.setData({
        [`${name}`]: event.detail
      })
    }
  }
})