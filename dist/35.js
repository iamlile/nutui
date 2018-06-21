/*! NutUI v1.2.8 Thu Jun 21 2018 15:10:48 GMT+0800 (CST) */
webpackJsonpnutui([35],{1071:function(t,v,_){(t.exports=_(1)()).push([t.i,"",""])},1162:function(t,v){t.exports={render:function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",[_("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",showQrCode:!0}}),t._v(" "),_("h5",[t._v("依赖")]),t._v(" "),_("h6",[t._v("Mask")]),t._v(" "),_("h5",[t._v("基本用法")]),t._v(" "),_("nut-codebox",{attrs:{code:"this.$loading(options);"}}),t._v(" "),_("h5",[t._v("示例")]),t._v(" "),_("nut-codebox",{attrs:{code:t.demo,imgUrl:"../asset/img/demo/loading1.png"}}),t._v(" "),_("nut-codebox",{attrs:{code:"export default {\n    data(){\n        return{\n          loading:null\n        }\n    },\n    mounted(){\n      this.loading = this.$loading({\n        fade:true\n      });\n    },\n    methods:{\n      showLoading(){\n        this.loading.show();\n      },\n      hideLoading(){\n        this.loading.hide();\n      },\n    }\n}"}}),t._v(" "),_("h5",[t._v("Options")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"tbl-wrapper"},[_("table",{staticClass:"u-full-width"},[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("可选值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("mini")]),t._v(" "),_("td",[t._v("迷你模式（非全屏），默认")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("maxDuring")]),t._v(" "),_("td",[t._v("最大展示时长")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("0（0为不消失）")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("bgColor")]),t._v(" "),_("td",[t._v("遮罩层颜色")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("mini模式：'rgba(0,0,0,.7)'"),_("br"),t._v("非mini模式：'rgba(0,0,0,.5)'")]),t._v(" "),_("td",[t._v("支持HEX、RGBA")])]),t._v(" "),_("tr",[_("td",[t._v("iconUrl")]),t._v(" "),_("td",[t._v("icon图片地址")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("''")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("iconRotate")]),t._v(" "),_("td",[t._v("ICON无限旋转动画，mini模式默认开启")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("mini模式：true"),_("br"),t._v("非mini模式：false")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("text")]),t._v(" "),_("td",[t._v("提示文字")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("mini模式：''"),_("br"),t._v("非mini模式：'加载中...'")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("textColor")]),t._v(" "),_("td",[t._v("文字颜色")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("mini模式：'#FFFFFF'"),_("br"),t._v("非mini模式：'#000000'")]),t._v(" "),_("td",[t._v("支持HEX、RGBA")])]),t._v(" "),_("tr",[_("td",[t._v("fontSize")]),t._v(" "),_("td",[t._v("文字大小，单位rem")]),t._v(" "),_("td",[t._v("Number/String")]),t._v(" "),_("td",[t._v("mini模式：0.22"),_("br"),t._v("非mini模式：0.28")]),t._v(" "),_("td",[t._v("支持HEX、RGBA")])]),t._v(" "),_("tr",[_("td",[t._v("height")]),t._v(" "),_("td",[t._v("mini模式框体高度，单位rem")]),t._v(" "),_("td",[t._v("Number/String")]),t._v(" "),_("td",[t._v("'auto'")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("width")]),t._v(" "),_("td",[t._v("mini模式框体宽度，单位rem")]),t._v(" "),_("td",[t._v("Number/String")]),t._v(" "),_("td",[t._v("'auto'")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("borderRadius")]),t._v(" "),_("td",[t._v("mini模式圆角边框")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("'10%'")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("padding")]),t._v(" "),_("td",[t._v("mini模式内边距，单位rem")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("'0.3'")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("fade")]),t._v(" "),_("td",[t._v("是否开启渐隐渐现动效")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("--")])])])])])}]}},1276:function(t,v,_){var d=_(1071);"string"==typeof d&&(d=[[t.i,d,""]]),d.locals&&(t.exports=d.locals);_(3)("31a877e2",d,!0,{})},878:function(t,v,_){var d=_(2)(_(977),_(1162),function(t){_(1276)},null,null);t.exports=d.exports},977:function(t,v,_){"use strict";Object.defineProperty(v,"__esModule",{value:!0}),v.default={data:function(){return{demo:'<a href="javascript:;" @click="showLoading">Demo</a>'}},mounted:function(){},methods:{}}}});