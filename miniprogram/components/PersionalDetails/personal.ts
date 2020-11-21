Component({
  data:{
    personalData:{

    },
    validationRules: [

    ]
  },
  methods:{
    FormInputChange(e: any){
      const {field} = e.currentTarget.dataset
      this.setData({
        [`personalData.${field}`]: e.detail.value
      })
    }
  }
})