import { listService } from "./listService";

Component({
  data:{
    Invitations: []
  },
  pageLifetimes:{
    show: function(){
      listService.GetAvailableRooms().then(
        (res: any) => {
          this.setData({
            Invitations: res.data
        })
      });
    }
  }
})