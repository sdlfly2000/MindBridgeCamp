"use strict";
Component({
    data: {
        selected: 0,
        color: "#7A7E83",
        selectedColor: "#3cc51f",
        isShown: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFDO1FBQ0gsUUFBUSxFQUFFLENBQUM7UUFDWCxLQUFLLEVBQUUsU0FBUztRQUNoQixhQUFhLEVBQUUsU0FBUztRQUN4QixPQUFPLEVBQUUsSUFBSTtRQUNiLElBQUksRUFBQztZQUNIO2dCQUNFLFVBQVUsRUFBRSxrQkFBa0I7Z0JBQzlCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixNQUFNLEVBQUUsSUFBSTthQUNiO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLGtCQUFrQjtnQkFDOUIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE1BQU0sRUFBRSxNQUFNO2FBQ2Y7WUFDRDtnQkFDRSxVQUFVLEVBQUUsa0JBQWtCO2dCQUM5QixNQUFNLEVBQUUsaUJBQWlCO2dCQUN6QixNQUFNLEVBQUUsTUFBTTthQUNmO1lBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLDBCQUEwQjtnQkFDdEMsTUFBTSxFQUFFLFdBQVc7Z0JBQ25CLE1BQU0sRUFBRSxJQUFJO2FBQ2I7U0FDRjtLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxZQUFDLENBQUM7WUFDVCxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3JCLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLFNBQVM7YUFDcEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICBkYXRhOntcclxuICAgIHNlbGVjdGVkOiAwLFxyXG4gICAgY29sb3I6IFwiIzdBN0U4M1wiLFxyXG4gICAgc2VsZWN0ZWRDb2xvcjogXCIjM2NjNTFmXCIsXHJcbiAgICBpc1Nob3duOiB0cnVlLFxyXG4gICAgbGlzdDpbXHJcbiAgICAgIHtcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwiL3BhZ2VzL21haW4vbWFpblwiLFxyXG4gICAgICAgIFwiaWNvblwiOiBcImhvbWUtb1wiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIuS4u+mhtVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBcInBhZ2VQYXRoXCI6IFwiL3BhZ2VzL2hhbGwvaGFsbFwiLFxyXG4gICAgICAgIFwiaWNvblwiOiBcIm5vdGVzLW9cIixcclxuICAgICAgICBcInRleHRcIjogXCLoh6rkuaDlpKfljoVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcIi9wYWdlcy9wYWlyL3BhaXJcIixcclxuICAgICAgICBcImljb25cIjogXCJzbWlsZS1jb21tZW50LW9cIixcclxuICAgICAgICBcInRleHRcIjogXCLljLnphY3kuK3lv4NcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJwYWdlUGF0aFwiOiBcIi9wYWdlcy9wZXJzb25hbC9wZXJzb25hbFwiLFxyXG4gICAgICAgIFwiaWNvblwiOiBcInNldHRpbmctb1wiLFxyXG4gICAgICAgIFwidGV4dFwiOiBcIuaIkeeahFwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHN3aXRjaFRhYihlKSB7XHJcbiAgICAgIHZhciBwYWdlSW5kZXggPSBlLmRldGFpbDtcclxuICAgICAgdmFyIHBhZ2UgPSB0aGlzLmRhdGEubGlzdFtwYWdlSW5kZXhdO1xyXG4gICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgIFwidXJsXCI6IHBhZ2UucGFnZVBhdGhcclxuICAgICAgfSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBzZWxlY3RlZDogcGFnZUluZGV4XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdfQ==