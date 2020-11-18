"use strict";
Component({
    data: {
        selected: 0,
        current: 0,
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
            console.info("Before: " + this.data.selected);
            console.info("Before: " + this.data.current);
            var data = e.currentTarget.dataset;
            var url = data.path;
            wx.switchTab({ url: url });
            this.setData({
                current: data.index,
                selected: data.index
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLENBQUM7UUFDWCxPQUFPLEVBQUUsQ0FBQztRQUNWLEtBQUssRUFBRSxTQUFTO1FBQ2hCLGFBQWEsRUFBRSxTQUFTO1FBQ3hCLElBQUksRUFBRSxDQUFDO2dCQUNMLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLGdCQUFnQixFQUFFLDhCQUE4QjtnQkFDaEQsSUFBSSxFQUFFLElBQUk7YUFDWCxFQUFFO2dCQUNELFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLGdCQUFnQixFQUFFLHdCQUF3QjtnQkFDMUMsSUFBSSxFQUFFLElBQUk7YUFDWCxDQUFDO0tBQ0g7SUFDRCxRQUFRO0lBQ1IsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsWUFBQyxDQUFDO1lBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUM3QyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzVDLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFBO1lBQ3BDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDckIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEdBQUcsS0FBQSxFQUFDLENBQUMsQ0FBQTtZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLO2FBQ3JCLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgZGF0YToge1xyXG4gICAgc2VsZWN0ZWQ6IDAsXHJcbiAgICBjdXJyZW50OiAwLFxyXG4gICAgY29sb3I6IFwiIzdBN0U4M1wiLFxyXG4gICAgc2VsZWN0ZWRDb2xvcjogXCIjM2NjNTFmXCIsXHJcbiAgICBsaXN0OiBbe1xyXG4gICAgICBwYWdlUGF0aDogXCIvcGFnZXMvbWFpbi9tYWluXCIsXHJcbiAgICAgIGljb25QYXRoOiBcIi9pbWFnZS9pY29uX2NvbXBvbmVudC5wbmdcIixcclxuICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCIvaW1hZ2UvaWNvbl9jb21wb25lbnRfSEwucG5nXCIsXHJcbiAgICAgIHRleHQ6IFwi57uE5Lu2XCJcclxuICAgIH0sIHtcclxuICAgICAgcGFnZVBhdGg6IFwiL2NvbXBvbmVudHMvY2FsYy9jYWxjXCIsXHJcbiAgICAgIGljb25QYXRoOiBcIi9pbWFnZS9pY29uX0FQSS5wbmdcIixcclxuICAgICAgc2VsZWN0ZWRJY29uUGF0aDogXCIvaW1hZ2UvaWNvbl9BUElfSEwucG5nXCIsXHJcbiAgICAgIHRleHQ6IFwi5o6l5Y+jXCJcclxuICAgIH1dXHJcbiAgfSxcclxuICBhdHRhY2hlZCgpIHtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHN3aXRjaFRhYihlKSB7XHJcbiAgICAgIGNvbnNvbGUuaW5mbyhcIkJlZm9yZTogXCIgKyB0aGlzLmRhdGEuc2VsZWN0ZWQpXHJcbiAgICAgIGNvbnNvbGUuaW5mbyhcIkJlZm9yZTogXCIgKyB0aGlzLmRhdGEuY3VycmVudClcclxuICAgICAgY29uc3QgZGF0YSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICAgIGNvbnN0IHVybCA9IGRhdGEucGF0aFxyXG4gICAgICB3eC5zd2l0Y2hUYWIoe3VybH0pXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY3VycmVudDogZGF0YS5pbmRleCxcclxuICAgICAgICBzZWxlY3RlZDogZGF0YS5pbmRleFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSkiXX0=