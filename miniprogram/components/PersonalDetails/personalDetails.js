"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personalDetailsService_1 = require("./personalDetailsService");
Component({
    data: {
        name: "",
        majorIn: "",
        height: undefined,
        weight: undefined,
        hobby: "",
        studyConent: ""
    },
    methods: {
        FormRadioChange: function (event) {
            var _a;
            var name = event.target.dataset.name;
            this.setData((_a = {},
                _a["" + name] = event.detail,
                _a));
        },
        SubmitChange: function () {
            var userModel = {
                Gender: this.data.gender,
                Name: this.data.name,
                MajorIn: this.data.majorIn,
                Height: this.data.height,
                Weight: this.data.weight,
                StudyContent: this.data.studyConent,
                ExpectationAfterGraduation: this.data.expectationAfterGraduation,
                Hobby: this.data.hobby
            };
            personalDetailsService_1.personalDetailsService.UpdateUser(userModel);
            wx.navigateBack();
        },
        CancelEdit: function () {
            wx.navigateBack();
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxEZXRhaWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uYWxEZXRhaWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUVBQWlFO0FBRWpFLFNBQVMsQ0FBQztJQUNSLElBQUksRUFBQztRQUNILElBQUksRUFBRSxFQUFFO1FBQ1IsT0FBTyxFQUFDLEVBQUU7UUFDVixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsU0FBUztRQUNqQixLQUFLLEVBQUUsRUFBRTtRQUNULFdBQVcsRUFBQyxFQUFFO0tBQ2Y7SUFDRCxPQUFPLEVBQUM7UUFDTixlQUFlLFlBQUMsS0FBSzs7WUFDWixJQUFBLElBQUksR0FBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBeEIsQ0FBd0I7WUFDbkMsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQyxLQUFHLElBQU0sSUFBRyxLQUFLLENBQUMsTUFBTTtvQkFDekIsQ0FBQTtRQUNKLENBQUM7UUFDRCxZQUFZO1lBQ1YsSUFBSSxTQUFTLEdBQUc7Z0JBQ2QsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFDeEIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztnQkFDMUIsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFDeEIsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztnQkFDbkMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQywwQkFBMEI7Z0JBQ2hFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7YUFDdkIsQ0FBQTtZQUNELCtDQUFzQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNELFVBQVU7WUFDUixFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGVyc29uYWxEZXRhaWxzU2VydmljZSB9IGZyb20gXCIuL3BlcnNvbmFsRGV0YWlsc1NlcnZpY2VcIlxyXG5cclxuQ29tcG9uZW50KHtcclxuICBkYXRhOntcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBtYWpvckluOlwiXCIsXHJcbiAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcclxuICAgIHdlaWdodDogdW5kZWZpbmVkLFxyXG4gICAgaG9iYnk6IFwiXCIsXHJcbiAgICBzdHVkeUNvbmVudDpcIlwiXHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIEZvcm1SYWRpb0NoYW5nZShldmVudCl7XHJcbiAgICAgIGNvbnN0IHtuYW1lfSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW2Ake25hbWV9YF06IGV2ZW50LmRldGFpbFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIFN1Ym1pdENoYW5nZSgpe1xyXG4gICAgICBsZXQgdXNlck1vZGVsID0ge1xyXG4gICAgICAgIEdlbmRlcjogdGhpcy5kYXRhLmdlbmRlcixcclxuICAgICAgICBOYW1lOiB0aGlzLmRhdGEubmFtZSxcclxuICAgICAgICBNYWpvckluOiB0aGlzLmRhdGEubWFqb3JJbixcclxuICAgICAgICBIZWlnaHQ6IHRoaXMuZGF0YS5oZWlnaHQsXHJcbiAgICAgICAgV2VpZ2h0OiB0aGlzLmRhdGEud2VpZ2h0LFxyXG4gICAgICAgIFN0dWR5Q29udGVudDogdGhpcy5kYXRhLnN0dWR5Q29uZW50LFxyXG4gICAgICAgIEV4cGVjdGF0aW9uQWZ0ZXJHcmFkdWF0aW9uOiB0aGlzLmRhdGEuZXhwZWN0YXRpb25BZnRlckdyYWR1YXRpb24sXHJcbiAgICAgICAgSG9iYnk6IHRoaXMuZGF0YS5ob2JieVxyXG4gICAgICB9XHJcbiAgICAgIHBlcnNvbmFsRGV0YWlsc1NlcnZpY2UuVXBkYXRlVXNlcih1c2VyTW9kZWwpO1xyXG4gICAgICB3eC5uYXZpZ2F0ZUJhY2soKTtcclxuICAgIH0sXHJcbiAgICBDYW5jZWxFZGl0KCl7XHJcbiAgICAgIHd4Lm5hdmlnYXRlQmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=