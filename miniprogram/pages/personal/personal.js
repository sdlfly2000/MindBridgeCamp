"use strict";
Page({
    data: {
        stylePersionalInfo: "personal-info",
        styleNicknameContainer: "nickname-container",
        styleAvatarImageContainer: "avatar-image-container"
    },
    onShow: function () {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 3
            });
        }
    },
    onScroll: function (e) {
        var currentStyle = this.data.stylePersionalInfo;
        if (e.detail.isFixed) {
            if (currentStyle != "personal-info-fixed") {
                this.setData({
                    stylePersionalInfo: "personal-info-fixed",
                    styleNicknameContainer: "nickname-container-fixed",
                    styleAvatarImageContainer: "avatar-image-container-fixed"
                });
            }
        }
        else {
            if (currentStyle != "personal-info") {
                this.setData({
                    stylePersionalInfo: "personal-info",
                    styleNicknameContainer: "nickname-container",
                    styleAvatarImageContainer: "avatar-image-container"
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFDO1FBQ0gsa0JBQWtCLEVBQUMsZUFBZTtRQUNsQyxzQkFBc0IsRUFBQyxvQkFBb0I7UUFDM0MseUJBQXlCLEVBQUMsd0JBQXdCO0tBQ25EO0lBQ0QsTUFBTTtRQUNKLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVU7WUFDeEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZCLFFBQVEsRUFBRSxDQUFDO2FBQ1osQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsUUFBUSxFQUFFLFVBQVMsQ0FBSztRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFBO1FBQy9DLElBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUM7WUFDbEIsSUFBRyxZQUFZLElBQUkscUJBQXFCLEVBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsa0JBQWtCLEVBQUUscUJBQXFCO29CQUN6QyxzQkFBc0IsRUFBQywwQkFBMEI7b0JBQ2pELHlCQUF5QixFQUFDLDhCQUE4QjtpQkFDekQsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUFJO1lBQ0gsSUFBRyxZQUFZLElBQUksZUFBZSxFQUFDO2dCQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLGtCQUFrQixFQUFFLGVBQWU7b0JBQ25DLHNCQUFzQixFQUFDLG9CQUFvQjtvQkFDM0MseUJBQXlCLEVBQUMsd0JBQXdCO2lCQUNuRCxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xyXG4gIGRhdGE6e1xyXG4gICAgc3R5bGVQZXJzaW9uYWxJbmZvOlwicGVyc29uYWwtaW5mb1wiLFxyXG4gICAgc3R5bGVOaWNrbmFtZUNvbnRhaW5lcjpcIm5pY2tuYW1lLWNvbnRhaW5lclwiLFxyXG4gICAgc3R5bGVBdmF0YXJJbWFnZUNvbnRhaW5lcjpcImF2YXRhci1pbWFnZS1jb250YWluZXJcIlxyXG4gIH0sXHJcbiAgb25TaG93KCl7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuZ2V0VGFiQmFyID09PSAnZnVuY3Rpb24nICYmXHJcbiAgICB0aGlzLmdldFRhYkJhcigpKSB7XHJcbiAgICAgIHRoaXMuZ2V0VGFiQmFyKCkuc2V0RGF0YSh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IDNcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIG9uU2Nyb2xsOiBmdW5jdGlvbihlOmFueSl7XHJcbiAgICBsZXQgY3VycmVudFN0eWxlID0gdGhpcy5kYXRhLnN0eWxlUGVyc2lvbmFsSW5mb1xyXG4gICAgaWYoZS5kZXRhaWwuaXNGaXhlZCl7XHJcbiAgICAgIGlmKGN1cnJlbnRTdHlsZSAhPSBcInBlcnNvbmFsLWluZm8tZml4ZWRcIil7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHN0eWxlUGVyc2lvbmFsSW5mbzogXCJwZXJzb25hbC1pbmZvLWZpeGVkXCIsXHJcbiAgICAgICAgICBzdHlsZU5pY2tuYW1lQ29udGFpbmVyOlwibmlja25hbWUtY29udGFpbmVyLWZpeGVkXCIsXHJcbiAgICAgICAgICBzdHlsZUF2YXRhckltYWdlQ29udGFpbmVyOlwiYXZhdGFyLWltYWdlLWNvbnRhaW5lci1maXhlZFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICBpZihjdXJyZW50U3R5bGUgIT0gXCJwZXJzb25hbC1pbmZvXCIpe1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBzdHlsZVBlcnNpb25hbEluZm86IFwicGVyc29uYWwtaW5mb1wiLFxyXG4gICAgICAgICAgc3R5bGVOaWNrbmFtZUNvbnRhaW5lcjpcIm5pY2tuYW1lLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgc3R5bGVBdmF0YXJJbWFnZUNvbnRhaW5lcjpcImF2YXRhci1pbWFnZS1jb250YWluZXJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9ICAgIFxyXG4gIH1cclxufSkiXX0=