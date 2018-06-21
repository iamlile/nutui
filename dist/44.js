/*! NutUI v1.2.8 Thu Jun 21 2018 15:10:48 GMT+0800 (CST) */
webpackJsonpnutui([44],{1051:function(e,t,n){(e.exports=n(1)()).push([e.i,"",""])},1123:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nut-docheader",{attrs:{name:e.$route.name,chName:e.$route.params.chnName,type:"Filter",desc:"将jpg格式图片url转换为对应的dpg格式url，也支持原始图片是jpg格式的webp图片。",showQrCode:!0}}),e._v(" "),n("h6",[e._v("DPG是京东推出的图片压缩技术，经过DPG压缩后的图片兼容jpeg，同时全平台、全部浏览器都支持。该技术可以有效地减少图片大小50%，减少cdn带宽流量50%，加快图片用户在设备上的渲染速度，直接节省用户浏览流量，提升用户购物体验。")]),e._v(" "),n("h5",[e._v("示例")]),e._v(" "),n("h6",[e._v("传入jpg图片，请求对应的dpg图片。")]),e._v(" "),n("div",{staticStyle:{width:"100%",overflow:"hidden"}},[n("img",{attrs:{src:e._f("Dpg")("//img10.360buyimg.com/n1/s368x368_jfs/t6499/90/1456804243/302655/1e93032/5951e7ecNafb50399.jpg"),alt:""}})]),e._v(" "),n("nut-codebox",{attrs:{code:e.demo1}}),e._v(" "),n("h6",[e._v("传入原始图片是jpg格式的webp图片，请求对应的dpg图片。")]),e._v(" "),n("div",{staticStyle:{width:"100%",overflow:"hidden"}},[n("img",{attrs:{src:e._f("Dpg")("//img10.360buyimg.com/n1/s368x368_jfs/t14533/126/2072200806/342302/3602464d/5a69359bNd2297228.jpg.webp"),alt:""}})]),e._v(" "),n("nut-codebox",{attrs:{code:e.demo2}})],1)},staticRenderFns:[]}},1256:function(e,t,n){var o=n(1051);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(3)("28268286",o,!0,{})},869:function(e,t,n){var o=n(2)(n(967),n(1123),function(e){n(1256)},null,null);e.exports=o.exports},967:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{demo1:'<img \n:src="\'//img10.360buyimg.com/n1/s368x368_jfs/t6499/90/1456804243/302655/1e93032/5951e7ecNafb50399.jpg\' | dpg" \nalt=""/>',demo2:'<img \n:src="\'//img10.360buyimg.com/n1/s368x368_jfs/t14533/126/2072200806/342302/3602464d/5a69359bNd2297228.jpg.webp\' | dpg" \nalt=""/>'}}}}});