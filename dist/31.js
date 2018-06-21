/*! NutUI v1.2.8 Thu Jun 21 2018 15:10:48 GMT+0800 (CST) */
webpackJsonpnutui([31],{1079:function(t,e,n){(t.exports=n(1)()).push([t.i,".pic-box{display:flex}.pic-box span{width:60px;height:60px;margin-right:20px;border:1px solid #eee}.pic-box span img{width:100%;height:100%}",""])},1176:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"图片查看器，支持左右滑动切换。",showQrCode:!0}}),t._v(" "),n("h5",[t._v("依赖")]),t._v(" "),n("h6",[t._v("Swiper")]),t._v(" "),n("h5",[t._v("示例")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo1,imgUrl:"../asset/img/demo/pictureview.png"}}),t._v(" "),n("nut-codebox",{attrs:{code:t.demo2}}),t._v(" "),n("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),n("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("可选值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("visible")]),t._v(" "),n("td",[t._v("初始状态显示或隐藏大图")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("true/false")])]),t._v(" "),n("tr",[n("td",[t._v("bgColor")]),t._v(" "),n("td",[t._v("设置黑色遮罩层透明度")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("rgba(0,0,0,.5)")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("imgArr")]),t._v(" "),n("td",[t._v("大图数组")]),t._v(" "),n("td",[t._v("Array")]),t._v(" "),n("td",[t._v("[ ]")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("initNum")]),t._v(" "),n("td",[t._v("显示大图时初始显示第几个")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("1")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("pagination")]),t._v(" "),n("td",[t._v("显示大图是是否显示点点点")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("--")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("事件名")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("回调参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("close-pic")]),t._v(" "),n("td",[t._v("点击关闭大图时触发")]),t._v(" "),n("td",[t._v("--")])])])])])}]}},1284:function(t,e,n){var v=n(1079);"string"==typeof v&&(v=[[t.i,v,""]]),v.locals&&(t.exports=v.locals);n(3)("2334fe10",v,!0,{})},882:function(t,e,n){var v=n(2)(n(983),n(1176),function(t){n(1284)},null,null);t.exports=v.exports},983:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{demo1:'<div class="pic-box">\n    <span v-for="(item, index) in picBox" @click="setPicShow(index)">\n      <img :src="item">\n    </span>\n</div>\n<nut-pictureview \n:visible.sync="picShow" \n:bgColor="coverColor" \n:imgArr="picBox" \n:initNum="picShowNum" \n:pagination="showPage" \n@close-pic="closeDo"\n></nut-pictureview>',demo2:"export default {\n  data(){\n    return{\n      picShow:false,\n      picShowNum:1,\n      showPage:true,\n      coverColor:'rgba(0,0,0,.7)',\n      picBox:['http://img10.360buyimg.com/n1/s368x368_jfs/t15451/283/338246331/345534/6b69d792/5a2a07c2N38f87e33.jpg',\n              'http://img10.360buyimg.com/n1/s368x368_jfs/t2590/194/2825053760/121163/21a0bec9/577335b9N8990670f.jpg',\n              'http://misc.360buyimg.com/mtd/pc/common/img/no_login.jpg'],\n    }\n  },\n  methods:{\n    setPicShow(index){\n      this.picShowNum = index+1;\n      this.picShow = true;\n    },\n    closeDo(){\n      console.log('关闭了')\n    }\n  }\n}"}},methods:{}}}});