Component({
  data:{
    paireBy: []
  },
  methods: {
    onChange(event){
      this.setData({
        paireBy: event.detail
      });
    }
  }
});