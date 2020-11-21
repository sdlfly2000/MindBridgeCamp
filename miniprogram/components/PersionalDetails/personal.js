"use strict";
Component({
    data: {
        personalData: {},
        validationRules: []
    },
    methods: {
        FormInputChange: function (e) {
            var _a;
            var field = e.currentTarget.dataset.field;
            this.setData((_a = {},
                _a["personalData." + field] = e.detail.value,
                _a));
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFDO1FBQ0gsWUFBWSxFQUFDLEVBRVo7UUFDRCxlQUFlLEVBQUUsRUFFaEI7S0FDRjtJQUNELE9BQU8sRUFBQztRQUNOLGVBQWUsWUFBQyxDQUFNOztZQUNiLElBQUEscUNBQUssQ0FBMkI7WUFDdkMsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQyxrQkFBZ0IsS0FBTyxJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztvQkFDekMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgZGF0YTp7XHJcbiAgICBwZXJzb25hbERhdGE6e1xyXG5cclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uUnVsZXM6IFtcclxuXHJcbiAgICBdXHJcbiAgfSxcclxuICBtZXRob2RzOntcclxuICAgIEZvcm1JbnB1dENoYW5nZShlOiBhbnkpe1xyXG4gICAgICBjb25zdCB7ZmllbGR9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBbYHBlcnNvbmFsRGF0YS4ke2ZpZWxkfWBdOiBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=