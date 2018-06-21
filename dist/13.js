/*! NutUI v1.2.8 Thu Jun 21 2018 15:10:48 GMT+0800 (CST) */
webpackJsonpnutui([13],{1002:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{demo1:'<nut-timer \n:timespacer="6000000000" \n@end-timer="endTimer"\n></nut-timer>',demo2:'<nut-timer \n        timespacer="600000000" \n        @end-timer="endTimer2" \n        formater="dd天hh时mm分ss秒" \n        starttime="2018-06-05 12:30:30" \n        endtime="2018-06-06 10:13:30"></nut-timer>'}},methods:{endTimer1:function(){console.log("示例1倒计时结束了！")},endTimer2:function(){console.log("示例2倒计时结束了！")}}}},1096:function(t,e,n){(t.exports=n(1)()).push([t.i,"",""])},1201:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"倒计时组件。",showQrCode:!0}}),t._v(" "),n("h5",[t._v("示例1")]),t._v(" "),n("nut-timer",{attrs:{timespacer:6e8},on:{"end-timer":t.endTimer1}}),t._v(" "),n("nut-codebox",{attrs:{code:t.demo1}}),t._v(" "),n("nut-codebox",{attrs:{code:"export default {\n    methods:{\n      endTimer1() {\n        console.log('示例1的倒计时结束了！');\n      }\n    }\n}"}}),t._v(" "),n("h5",[t._v("示例2")]),t._v(" "),n("nut-timer",{attrs:{timespacer:"600000000",formater:"dd天hh时mm分ss秒",starttime:"2018-06-05 12:30:30",endtime:"2018-06-06 10:13:30"},on:{"end-timer":t.endTimer2}}),t._v(" "),n("nut-codebox",{attrs:{code:t.demo2}}),t._v(" "),n("nut-codebox",{attrs:{code:"export default {\n    methods:{\n      endTimer2() {\n        console.log('示例2的倒计时结束了！');\n      }\n    }\n}"}}),t._v(" "),n("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),n("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("可选值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("timespacer")]),t._v(" "),n("td",[t._v("需要倒计时的毫秒数，如果有starttime和startend参数则此参数不生效")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("0")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("formater")]),t._v(" "),n("td",[t._v("倒计时显示格式，d对应剩余天数，h对应剩余小时，m对应剩余分钟，s对应剩余秒")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("hh:mm:ss")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("starttime")]),t._v(" "),n("td",[t._v("倒计时起始时间，可以为ms格式，可以是时间格式")]),t._v(" "),n("td",[t._v("Number | String | Date")]),t._v(" "),n("td",[t._v("0")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("startend")]),t._v(" "),n("td",[t._v("倒计时结束时间，可以为ms格式，可以是时间格式")]),t._v(" "),n("td",[t._v("Number String | Date")]),t._v(" "),n("td",[t._v("0")]),t._v(" "),n("td",[t._v("--")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("事件名")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("回调参数")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("end-timer")]),t._v(" "),n("td",[t._v("倒计时结束时触发")]),t._v(" "),n("td",[t._v("--")])])])])])}]}},1301:function(t,e,n){var r=n(1096);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(3)("1b96de70",r,!0,{})},901:function(t,e,n){var r=n(2)(n(1002),n(1201),function(t){n(1301)},null,null);t.exports=r.exports}});