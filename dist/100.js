/*! NutUI v1.2.8 Thu Jun 21 2018 15:10:48 GMT+0800 (CST) */
webpackJsonpnutui([100],{1085:function(n,o,e){(n.exports=e(1)()).push([n.i,"",""])},1186:function(n,o){n.exports={render:function(){var n=this,o=n.$createElement,e=n._self._c||o;return e("div",[e("nut-demoheader",{attrs:{name:n.$route.name}}),n._v(" "),e("h5",[n._v("示例")]),n._v(" "),e("p",[n._v("默认用法")]),n._v(" "),e("nut-advertisemask",{attrs:{imgSrc:"/asset/img/advertising/adver.png",linkHref:"https://m.jd.com/",picWidth:5,picHeight:6,clickMask:!0,showClose:!0,closeTop:3,closeRight:.8,closeScale:1.2,circleShow:!0,initShow:n.initShow},on:{"update:initShow":function(o){n.initShow=o},jumpTo:n.jumpToFun,closeMask:n.closeMaskFun,maskClose:n.maskClose,maskOpen:n.maskOpen}}),n._v(" "),e("button",{staticClass:"button button-primary",on:{click:n.clickMe}},[n._v("点击出现广告蒙层")])],1)},staticRenderFns:[]}},1290:function(n,o,e){var t=e(1085);"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);e(3)("6c529fe6",t,!0,{})},810:function(n,o,e){var t=e(2)(e(906),e(1186),function(n){e(1290)},null,null);n.exports=t.exports},906:function(n,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t,s=e(20);(t=s)&&t.__esModule;o.default={data:function(){return{initShow:!0,initCeshi:1,demo1:""}},components:{},methods:{jumpToFun:function(){console.log("点击了跳转")},closeMaskFun:function(){console.log("点击了关闭按钮")},maskClose:function(){console.log("关闭了蒙层")},maskOpen:function(){console.log("打开了蒙层")},clickMe:function(){this.initShow=!0}}}}});