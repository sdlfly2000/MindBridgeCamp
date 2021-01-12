import { invitationService } from './invitationService';
import { LearningRoomModel } from './models/LearningRoomModel';
import { FormatDate, FormatTime, formatTime } from '../../utils/util';

Component({
  data:{
    Title: '',
    ParticipantCount: 3,
    LearningContent: '',
    StartDate: '',
    EndDate: '',
    Place: '',
    IsShowSelectDate: false,
    IsShowSelectTime: false,
    CurrentDateTime: 0,
    BookingDate: '',
    BookingHourStart: '',
    BookingHourEnd: '',
    IsEndTime: false
  },
  pageLifetimes:{
    show: function(){
      let currentDateTime = new Date(Date.now());
      let endDateTime = new Date(currentDateTime.getTime() + 3600000);
      this.setData({
        BookingDate: FormatDate(currentDateTime),
        BookingHourStart: FormatTime(currentDateTime),
        BookingHourEnd: FormatTime(endDateTime),
        CurrentDateTime: currentDateTime.getTime()
      });
    }
  },
  methods: {
    InvitationFormInputChange: function(e){
      let vField = e.currentTarget.dataset.field
      this.setData({
          [`${vField}`]: e.detail.value
      })
    },
    onSelectDate: function(){
      this.setData({
        IsShowSelectDate: true
      });
    },
    onCloseSelectDate: function(){
      this.setData({
        IsShowSelectDate: false
      });
    },
    onConfirmSelectDate: function(e){
      this.setData({
        IsShowSelectDate: false,
        CurrentDateTime: e.detail,
        BookingDate: FormatDate(new Date(e.detail))
      });
    },
    onSelectTime: function(e){
      if(e.target.id == 'idStartTime'){
        this.setData({
          IsShowSelectTime: true,
          IsEndTime: false
        });
      }else{
        this.setData({
          IsShowSelectTime: true,
          IsEndTime: true
        });
      }
    },
    onCloseSelectTime: function(){
      this.setData({
        IsShowSelectTime: false
      });
    },
    onConfirmSelectTime: function(e){
      if(this.data.IsEndTime){
        this.setData({
          IsShowSelectTime: false,
          BookingHourEnd: e.detail
        });
      }else{
        this.setData({
          IsShowSelectTime: false,
          BookingHourStart: e.detail
        });
      }
    },
    SubmitInvitation: function(){
      let model: LearningRoomModel = {
        Title: this.data.Title,
        ParticipantCount: this.data.ParticipantCount,
        LearningContent: this.data.LearningContent,
        StartDate: [this.data.BookingDate, this.data.BookingHourStart].join('T'),
        EndDate:  [this.data.BookingDate, this.data.BookingHourEnd].join('T'),
        Place: this.data.Place,
        RoomId: '',
        CreatedBy: '',
        CreatedOn: formatTime(new Date(Date.now())),
        CurrentParticipantCount: 1
      };
      console.info(model);
      invitationService.CreateInvitation(model).then(
        () => {
          wx.showModal({
            title: '邀约生成',
            complete: function(){
              wx.navigateBack();
            }
          });      
        }
      );      
    }
  }
})