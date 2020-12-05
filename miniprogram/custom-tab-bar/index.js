"use strict";
Component({
    data: {
        selected: 0,
        color: "#7A7E83",
        selectedColor: "#3cc51f",
        list: [
            {
                "pagePath": "/pages/main/main",
                "icon": "home-o",
                "text": "主页"
            },
            {
                "pagePath": "/pages/hall/hall",
                "icon": "notes-o",
                "text": "自习大厅"
            },
            {
                "pagePath": "/pages/pair/pair",
                "icon": "smile-comment-o",
                "text": "匹配中心"
            },
            {
                "pagePath": "/pages/personal/personal",
                "icon": "setting-o",
                "text": "我的"
            }
        ]
    },
    methods: {
        switchTab: function (e) {
            var pageIndex = e.detail;
            var page = this.data.list[pageIndex];
            wx.switchTab({
                "url": page.pagePath
            });
            this.setData({
                selected: pageIndex
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFDO1FBQ0gsUUFBUSxFQUFFLENBQUM7UUFDWCxLQUFLLEVBQUUsU0FBUztRQUNoQixhQUFhLEVBQUUsU0FBUztRQUN4QixJQUFJLEVBQUM7WUFDSDtnQkFDRSxVQUFVLEVBQUUsa0JBQWtCO2dCQUM5QixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsTUFBTSxFQUFFLElBQUk7YUFDYjtZQUNEO2dCQUNFLFVBQVUsRUFBRSxrQkFBa0I7Z0JBQzlCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixNQUFNLEVBQUUsTUFBTTthQUNmO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLGtCQUFrQjtnQkFDOUIsTUFBTSxFQUFFLGlCQUFpQjtnQkFDekIsTUFBTSxFQUFFLE1BQU07YUFDZjtZQUNEO2dCQUNFLFVBQVUsRUFBRSwwQkFBMEI7Z0JBQ3RDLE1BQU0sRUFBRSxXQUFXO2dCQUNuQixNQUFNLEVBQUUsSUFBSTthQUNiO1NBQ0Y7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsWUFBQyxDQUFDO1lBQ1QsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUTthQUNyQixDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsRUFBRSxTQUFTO2FBQ3BCLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIkNvbXBvbmVudCh7XHJcbiAgZGF0YTp7XHJcbiAgICBzZWxlY3RlZDogMCxcclxuICAgIGNvbG9yOiBcIiM3QTdFODNcIixcclxuICAgIHNlbGVjdGVkQ29sb3I6IFwiIzNjYzUxZlwiLFxyXG4gICAgbGlzdDpbXHJcbiAgICAgIHtcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwiL3BhZ2VzL21haW4vbWFpblwiLFxyXG4gICAgICAgIFwiaWNvblwiOiBcImhvbWUtb1wiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIuS4u+mhtVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwiL3BhZ2VzL2hhbGwvaGFsbFwiLFxyXG4gICAgICAgIFwiaWNvblwiOiBcIm5vdGVzLW9cIixcclxuICAgICAgICBcInRleHRcIjogXCLoh6rkuaDlpKfljoVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcIi9wYWdlcy9wYWlyL3BhaXJcIixcclxuICAgICAgICBcImljb25cIjogXCJzbWlsZS1jb21tZW50LW9cIixcclxuICAgICAgICBcInRleHRcIjogXCLljLnphY3kuK3lv4NcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcIi9wYWdlcy9wZXJzb25hbC9wZXJzb25hbFwiLFxyXG4gICAgICAgIFwiaWNvblwiOiBcInNldHRpbmctb1wiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIuaIkeeahFwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHN3aXRjaFRhYihlKSB7XHJcbiAgICAgIHZhciBwYWdlSW5kZXggPSBlLmRldGFpbDtcclxuICAgICAgdmFyIHBhZ2UgPSB0aGlzLmRhdGEubGlzdFtwYWdlSW5kZXhdO1xyXG4gICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgIFwidXJsXCI6IHBhZ2UucGFnZVBhdGhcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBzZWxlY3RlZDogcGFnZUluZGV4XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==