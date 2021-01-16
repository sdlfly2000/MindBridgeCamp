"use strict";
Component({
    data: {
        objective: "",
        gender: "",
        validationRules: []
    },
    methods: {
        FormRadioChange: function (event) {
            var _a;
            var name = event.target.dataset.name;
            this.setData((_a = {},
                _a["" + name] = event.detail,
                _a));
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxEZXRhaWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uYWxEZXRhaWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxTQUFTLENBQUM7SUFDUixJQUFJLEVBQUM7UUFDSCxTQUFTLEVBQUUsRUFBRTtRQUNiLE1BQU0sRUFBRSxFQUFFO1FBQ1YsZUFBZSxFQUFFLEVBRWhCO0tBQ0Y7SUFDRCxPQUFPLEVBQUM7UUFDTixlQUFlLFlBQUMsS0FBSzs7WUFDWixJQUFBLElBQUksR0FBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBeEIsQ0FBd0I7WUFDbkMsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQyxLQUFHLElBQU0sSUFBRyxLQUFLLENBQUMsTUFBTTtvQkFDekIsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgZGF0YTp7XHJcbiAgICBvYmplY3RpdmU6IFwiXCIsXHJcbiAgICBnZW5kZXI6IFwiXCIsXHJcbiAgICB2YWxpZGF0aW9uUnVsZXM6IFtcclxuXHJcbiAgICBdXHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIEZvcm1SYWRpb0NoYW5nZShldmVudCl7XHJcbiAgICAgIGNvbnN0IHtuYW1lfSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgW2Ake25hbWV9YF06IGV2ZW50LmRldGFpbFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=