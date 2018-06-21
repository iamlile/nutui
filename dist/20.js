/*! NutUI v1.2.8 Thu Jun 21 2018 15:10:48 GMT+0800 (CST) */
webpackJsonpnutui([20],{1009:function(t,v,_){(t.exports=_(1)()).push([t.i,"\npre[data-v-1a7059d8] {\n  margin-top: 30px;\n}\n",""])},1120:function(t,v){t.exports={render:function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",[_("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"滑块组件。",showQrCode:!0}}),t._v(" "),_("h5",[t._v("基本用法")]),t._v(" "),_("nut-codebox",{attrs:{code:t.demo1,imgUrl:"../asset/img/demo/slider.png"}},[t._v(">")]),t._v(" "),_("h5",[t._v("Props")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"tbl-wrapper"},[_("table",{staticClass:"u-full-width"},[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("可选值")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("step")]),t._v(" "),_("td",[t._v("滑块每次移动距离")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("click-more")]),t._v(" "),_("td",[t._v("是否支持点击滑动")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("true/false")])]),t._v(" "),_("tr",[_("td",[t._v("value")]),t._v(" "),_("td",[t._v("滑块初始值")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("min")]),t._v(" "),_("td",[t._v("最小值")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("max")]),t._v(" "),_("td",[t._v("最大值")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("100")]),t._v(" "),_("td",[t._v("--")])]),t._v(" "),_("tr",[_("td",[t._v("showNums")]),t._v(" "),_("td",[t._v("是否显示数字")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("true/false")])])])]),t._v(" "),_("h5",[t._v("Events")]),t._v(" "),_("div",{staticClass:"tbl-wrapper"},[_("table",{staticClass:"u-full-width"},[_("thead",[_("tr",[_("th",[t._v("事件名")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("回调参数")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("touch-end")]),t._v(" "),_("td",[t._v("滑动结束时触发")]),t._v(" "),_("td",[t._v("value")])])])])])])}]}},1214:function(t,v,_){var e=_(1009);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);_(3)("9ee2547e",e,!0,{})},894:function(t,v,_){var e=_(2)(_(995),_(1120),function(t){_(1214)},"data-v-1a7059d8",null);t.exports=e.exports},995:function(t,v,_){"use strict";Object.defineProperty(v,"__esModule",{value:!0}),v.default={data:function(){return{demo1:'<nut-slider  \n:value="10" \n:step="10" \n:min="10" \n@touch-end="afterTouch"\n></nut-slider>'}},methods:{afterTouch:function(t){console.log(t)}}}}});