"use strict";
Component({
    options: {
        addGlobalClass: true
    },
    data: {
        selected: 0,
        color: "#7A7E83",
        selectedColor: "#3cc51f",
        list: [{
                pagePath: "/pages/main/main",
                iconPath: "/image/icon_component.png",
                selectedIconPath: "/image/icon_component_HL.png",
                text: "组件"
            }, {
                pagePath: "/components/calc/calc",
                iconPath: "/image/icon_API.png",
                selectedIconPath: "/image/icon_API_HL.png",
                text: "接口"
            }]
    },
    attached: function () {
    },
    methods: {
        switchTab: function (e) {
            var data = e.currentTarget.dataset;
            var url = data.path;
            wx.switchTab({
                url: url
            });
            this.setData({
                selected: data.index
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLElBQUk7S0FDckI7SUFDRCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsQ0FBQztRQUNYLEtBQUssRUFBRSxTQUFTO1FBQ2hCLGFBQWEsRUFBRSxTQUFTO1FBQ3hCLElBQUksRUFBRSxDQUFDO2dCQUNMLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLGdCQUFnQixFQUFFLDhCQUE4QjtnQkFDaEQsSUFBSSxFQUFFLElBQUk7YUFDWCxFQUFFO2dCQUNELFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLGdCQUFnQixFQUFFLHdCQUF3QjtnQkFDMUMsSUFBSSxFQUFFLElBQUk7YUFDWCxDQUFDO0tBQ0g7SUFDRCxRQUFRO0lBQ1IsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsWUFBQyxDQUFDO1lBQ1QsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUE7WUFDcEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtZQUNyQixFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEdBQUcsRUFBRSxHQUFHO2FBQ1QsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDckIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICBvcHRpb25zOiB7XHJcbiAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZVxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgc2VsZWN0ZWQ6IDAsXHJcbiAgICBjb2xvcjogXCIjN0E3RTgzXCIsXHJcbiAgICBzZWxlY3RlZENvbG9yOiBcIiMzY2M1MWZcIixcclxuICAgIGxpc3Q6IFt7XHJcbiAgICAgIHBhZ2VQYXRoOiBcIi9wYWdlcy9tYWluL21haW5cIixcclxuICAgICAgaWNvblBhdGg6IFwiL2ltYWdlL2ljb25fY29tcG9uZW50LnBuZ1wiLFxyXG4gICAgICBzZWxlY3RlZEljb25QYXRoOiBcIi9pbWFnZS9pY29uX2NvbXBvbmVudF9ITC5wbmdcIixcclxuICAgICAgdGV4dDogXCLnu4Tku7ZcIlxyXG4gICAgfSwge1xyXG4gICAgICBwYWdlUGF0aDogXCIvY29tcG9uZW50cy9jYWxjL2NhbGNcIixcclxuICAgICAgaWNvblBhdGg6IFwiL2ltYWdlL2ljb25fQVBJLnBuZ1wiLFxyXG4gICAgICBzZWxlY3RlZEljb25QYXRoOiBcIi9pbWFnZS9pY29uX0FQSV9ITC5wbmdcIixcclxuICAgICAgdGV4dDogXCLmjqXlj6NcIlxyXG4gICAgfV1cclxuICB9LFxyXG4gIGF0dGFjaGVkKCkge1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc3dpdGNoVGFiKGUpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICAgIGNvbnN0IHVybCA9IGRhdGEucGF0aFxyXG4gICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgIHVybDogdXJsXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IGRhdGEuaW5kZXhcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pIl19