"use strict";
Component({
    data: {
        showInvitationDialog: false,
        buttonsInvitationDialog: [{ text: "取消" }, { text: "确定" }]
    },
    methods: {
        DisplayInvitationDialog: function () {
            this.setData({
                showInvitationDialog: true
            });
        },
        TapInvitationDialogButton: function (e) {
            switch (e.detail.index) {
                case 0: {
                    break;
                }
                case 1: {
                    break;
                }
            }
            ;
            this.setData({
                showInvitationDialog: false
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbk1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFDO1FBQ0gsb0JBQW9CLEVBQUUsS0FBSztRQUMzQix1QkFBdUIsRUFBRSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0tBQ3ZEO0lBQ0QsT0FBTyxFQUFDO1FBQ04sdUJBQXVCLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxvQkFBb0IsRUFBRSxJQUFJO2FBQzNCLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCx5QkFBeUIsRUFBRSxVQUFTLENBQUM7WUFDbkMsUUFBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQztnQkFDcEIsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDTixNQUFNO2lCQUNQO2dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ04sTUFBTTtpQkFDUDthQUNGO1lBQUEsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsb0JBQW9CLEVBQUUsS0FBSzthQUM1QixDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gIGRhdGE6e1xyXG4gICAgc2hvd0ludml0YXRpb25EaWFsb2c6IGZhbHNlLFxyXG4gICAgYnV0dG9uc0ludml0YXRpb25EaWFsb2c6IFt7dGV4dDogXCLlj5bmtohcIn0sIHt0ZXh0OiBcIuehruWumlwiIH1dXHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIERpc3BsYXlJbnZpdGF0aW9uRGlhbG9nOiBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHNob3dJbnZpdGF0aW9uRGlhbG9nOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFRhcEludml0YXRpb25EaWFsb2dCdXR0b246IGZ1bmN0aW9uKGUpe1xyXG4gICAgICBzd2l0Y2goZS5kZXRhaWwuaW5kZXgpe1xyXG4gICAgICAgIGNhc2UgMDoge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgMToge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHNob3dJbnZpdGF0aW9uRGlhbG9nOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9ICBcclxufSkiXX0=