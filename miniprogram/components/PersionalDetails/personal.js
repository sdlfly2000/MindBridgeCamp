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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFDO1FBQ0gsWUFBWSxFQUFDLEVBRVo7UUFDRCxlQUFlLEVBQUUsRUFFaEI7S0FDRjtJQUNELE9BQU8sRUFBQztRQUNOLGVBQWUsRUFBZixVQUFnQixDQUFNOztZQUNiLElBQUEsS0FBSyxHQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxNQUEzQixDQUEyQjtZQUN2QyxJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLGtCQUFnQixLQUFPLElBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO29CQUN6QyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICBkYXRhOntcclxuICAgIHBlcnNvbmFsRGF0YTp7XHJcblxyXG4gICAgfSxcclxuICAgIHZhbGlkYXRpb25SdWxlczogW1xyXG5cclxuICAgIF1cclxuICB9LFxyXG4gIG1ldGhvZHM6e1xyXG4gICAgRm9ybUlucHV0Q2hhbmdlKGU6IGFueSl7XHJcbiAgICAgIGNvbnN0IHtmaWVsZH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIFtgcGVyc29uYWxEYXRhLiR7ZmllbGR9YF06IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==