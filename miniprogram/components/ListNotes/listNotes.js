"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Component({
    data: {
        Notes: Array()
    },
    lifetimes: {
        ready: function () {
        }
    },
    methods: {
        CreateNote: function () {
            wx.navigateTo({
                url: "/components/ShareNotes/shareNotes"
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdE5vdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdE5vdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEtBQUssRUFBYTtLQUMxQjtJQUNELFNBQVMsRUFBRTtRQUNULEtBQUssRUFBRTtRQUVQLENBQUM7S0FDRjtJQUNELE9BQU8sRUFBRTtRQUNSLFVBQVUsRUFBRTtZQUNYLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLG1DQUFtQzthQUN6QyxDQUFDLENBQUM7UUFDSixDQUFDO0tBQ0Q7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb3RlTW9kZWwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL05vdGUvTm90ZU1vZGVsXCI7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gIGRhdGE6IHtcclxuICAgIE5vdGVzOiBBcnJheTxOb3RlTW9kZWw+KClcclxuICB9LFxyXG4gIGxpZmV0aW1lczoge1xyXG4gICAgcmVhZHk6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICBDcmVhdGVOb3RlOiBmdW5jdGlvbigpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6IFwiL2NvbXBvbmVudHMvU2hhcmVOb3Rlcy9zaGFyZU5vdGVzXCJcclxuICAgIH0pO1xyXG4gICB9IFxyXG4gIH0gIFxyXG59KTsiXX0=