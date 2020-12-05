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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFDO1FBQ0gsU0FBUyxFQUFFLEVBQUU7UUFDYixNQUFNLEVBQUUsRUFBRTtRQUNWLGVBQWUsRUFBRSxFQUVoQjtLQUNGO0lBQ0QsT0FBTyxFQUFDO1FBQ04sZUFBZSxZQUFDLEtBQUs7O1lBQ1osSUFBQSxJQUFJLEdBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQXhCLENBQXdCO1lBQ25DLElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMsS0FBRyxJQUFNLElBQUcsS0FBSyxDQUFDLE1BQU07b0JBQ3pCLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gIGRhdGE6e1xyXG4gICAgb2JqZWN0aXZlOiBcIlwiLFxyXG4gICAgZ2VuZGVyOiBcIlwiLFxyXG4gICAgdmFsaWRhdGlvblJ1bGVzOiBbXHJcblxyXG4gICAgXVxyXG4gIH0sXHJcbiAgbWV0aG9kczp7XHJcbiAgICBGb3JtUmFkaW9DaGFuZ2UoZXZlbnQpe1xyXG4gICAgICBjb25zdCB7bmFtZX0gPSBldmVudC50YXJnZXQuZGF0YXNldFxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtgJHtuYW1lfWBdOiBldmVudC5kZXRhaWxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pIl19