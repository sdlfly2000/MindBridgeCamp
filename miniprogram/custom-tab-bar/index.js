"use strict";
Component({
    data: {
        selected: 0,
        color: "#7A7E83",
        selectedColor: "#3cc51f",
        list: [
            {
                "pagePath": "/pages/main/main",
                "text": "主页"
            },
            {
                "pagePath": "/pages/hall/hall",
                "text": "自习大厅"
            },
            {
                "pagePath": "/pages/pair/pair",
                "text": "匹配中心"
            },
            {
                "pagePath": "/pages/personal/personal",
                "text": "我的"
            }
        ]
    },
    methods: {
        switchTab: function (e) {
            var data = e.currentTarget.dataset;
            var url = data.path;
            wx.switchTab({
                "url": url
            });
            this.setData({
                selected: data.index
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFDO1FBQ0gsUUFBUSxFQUFFLENBQUM7UUFDWCxLQUFLLEVBQUUsU0FBUztRQUNoQixhQUFhLEVBQUUsU0FBUztRQUN4QixJQUFJLEVBQUM7WUFDSDtnQkFDRSxVQUFVLEVBQUUsa0JBQWtCO2dCQUM5QixNQUFNLEVBQUUsSUFBSTthQUNiO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLGtCQUFrQjtnQkFDOUIsTUFBTSxFQUFFLE1BQU07YUFDZjtZQUNEO2dCQUNFLFVBQVUsRUFBRSxrQkFBa0I7Z0JBQzlCLE1BQU0sRUFBRSxNQUFNO2FBQ2Y7WUFDRDtnQkFDRSxVQUFVLEVBQUUsMEJBQTBCO2dCQUN0QyxNQUFNLEVBQUUsSUFBSTthQUNiO1NBQ0Y7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsWUFBQyxDQUFDO1lBQ1QsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUE7WUFDcEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtZQUNyQixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxHQUFHO2FBQ1gsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDckIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICBkYXRhOntcclxuICAgIHNlbGVjdGVkOiAwLFxyXG4gICAgY29sb3I6IFwiIzdBN0U4M1wiLFxyXG4gICAgc2VsZWN0ZWRDb2xvcjogXCIjM2NjNTFmXCIsXHJcbiAgICBsaXN0OltcclxuICAgICAge1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCIvcGFnZXMvbWFpbi9tYWluXCIsXHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwi5Li76aG1XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCIvcGFnZXMvaGFsbC9oYWxsXCIsXHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwi6Ieq5Lmg5aSn5Y6FXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCIvcGFnZXMvcGFpci9wYWlyXCIsXHJcbiAgICAgICAgXCJ0ZXh0XCI6IFwi5Yy56YWN5Lit5b+DXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIFwicGFnZVBhdGhcIjogXCIvcGFnZXMvcGVyc29uYWwvcGVyc29uYWxcIixcclxuICAgICAgICBcInRleHRcIjogXCLmiJHnmoRcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBzd2l0Y2hUYWIoZSkge1xyXG4gICAgICBjb25zdCBkYXRhID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcclxuICAgICAgY29uc3QgdXJsID0gZGF0YS5wYXRoXHJcbiAgICAgIHd4LnN3aXRjaFRhYih7XHJcbiAgICAgICAgXCJ1cmxcIjogdXJsXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IGRhdGEuaW5kZXhcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pIl19