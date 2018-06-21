/*! NutUI v1.2.8 Thu Jun 21 2018 15:10:48 GMT+0800 (CST) */
webpackJsonpnutui([48],{1011:function(e,n,t){(e.exports=t(1)()).push([e.i,"",""])},1125:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("nut-docheader",{attrs:{name:e.$route.name,chName:e.$route.params.chnName,type:"Component",showQrCode:!0}}),e._v(" "),t("h5",[e._v("示例")]),e._v(" "),t("h6",[e._v("基本用法")]),e._v(" "),t("nut-codebox",{attrs:{code:e.demo1,imgUrl:"../asset/img/demo/choose.png"}}),e._v(" "),t("h6",[e._v("事件")]),e._v(" "),t("nut-codebox",{attrs:{code:e.demo2}}),e._v(" "),t("h5",[e._v("Props")]),e._v(" "),e._m(0),e._v(" "),t("h5",[e._v("Events")]),e._v(" "),e._m(1)],1)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"tbl-wrapper"},[t("table",{staticClass:"u-full-width"},[t("thead",[t("tr",[t("th",[e._v("参数")]),e._v(" "),t("th",[e._v("说明")]),e._v(" "),t("th",[e._v("类型")]),e._v(" "),t("th",[e._v("默认值")]),e._v(" "),t("th",[e._v("可选值")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("visibile")]),e._v(" "),t("td",[e._v("打开和关闭选择弹层")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("false")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("short")]),e._v(" "),t("td",[e._v("短的面板还是长的面板")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("false")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("needCache")]),e._v(" "),t("td",[e._v("弹层打开后再关闭是否需要缓存下来数据，以备下次打开使用")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[e._v("false")]),e._v(" "),t("td",[e._v("true")])]),e._v(" "),t("tr",[t("td",[e._v("title")]),e._v(" "),t("td",[e._v("选择弹层标题")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td",[e._v("所在地区")]),e._v(" "),t("td",[e._v("--")])]),e._v(" "),t("tr",[t("td",[e._v("onlyKey")]),e._v(" "),t("td",[e._v("列表数据对象中，区分每条数据的key名，如'id'")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td",[e._v("id")]),e._v(" "),t("td",[e._v("--")])]),e._v(" "),t("tr",[t("td",[e._v("contentKey")]),e._v(" "),t("td",[e._v("列表数据对象中，用于显示到列表中的字段key名，如'name'")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td",[e._v("name")]),e._v(" "),t("td",[e._v("--")])]),e._v(" "),t("tr",[t("td",[e._v("listData")]),e._v(" "),t("td",[e._v("弹层列表数据")]),e._v(" "),t("td",[e._v("Array")]),e._v(" "),t("td",[e._v("[]")]),e._v(" "),t("td",[e._v("--")])])])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"tbl-wrapper"},[t("table",{staticClass:"u-full-width"},[t("thead",[t("tr",[t("th",[e._v("事件名")]),e._v(" "),t("th",[e._v("说明")]),e._v(" "),t("th",[e._v("回调参数")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("init-choose")]),e._v(" "),t("td",[e._v("打开选择弹层时给列表初始化数据入口")]),e._v(" "),t("td",[e._v("--")])]),e._v(" "),t("tr",[t("td",[e._v("close-choose")]),e._v(" "),t("td",[e._v("关闭选择弹层时的回调")]),e._v(" "),t("td",[e._v("--")])]),e._v(" "),t("tr",[t("td",[e._v("choose-item")]),e._v(" "),t("td",[e._v("选择某一条选项时的回调")]),e._v(" "),t("td",[e._v("item:当前选中的数据，index: 当前操作的所处层级")])])])])])}]}},1216:function(e,n,t){var v=t(1011);"string"==typeof v&&(v=[[e.i,v,""]]),v.locals&&(e.exports=v.locals);t(3)("054e4f08",v,!0,{})},865:function(e,n,t){var v=t(2)(t(963),t(1125),function(e){t(1216)},null,null);e.exports=v.exports},963:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{demo1:'<nut-choose \n        :visibile="showChoose"\n        :needCache="true"\n        @init-choose="initChoose" \n        @close-choose="closeChoose" \n        @choose-item="closeItem"\n        :listData="chooseData"></nut-choose> ',demo2:"export default {\n    data(){\n      return {\n        showChoose: false,\n        loading: false,\n        chooseData: []\n      }\n    },\n    methods:{\n        initChoose() {\n            this.chooseData = [{ 'name': '北京', 'id': 1 },\n                { 'name': '上海', 'id': 2 },\n                { 'name': '天津', 'id': 3 },\n                { 'name': '重庆', 'id': 4 },\n                { 'name': '河北', 'id': 5 },\n                { 'name': '山西', 'id': 6 },\n                { 'name': '河南', 'id': 7 },\n                { 'name': '辽宁', 'id': 8 },\n                { 'name': '吉林', 'id': 9 },\n                { 'name': '黑龙江', 'id': 10 },\n                { 'name': '内蒙古', 'id': 11 },\n                { 'name': '江苏', 'id': 12 },\n                { 'name': '山东', 'id': 13 },\n                { 'name': '安徽', 'id': 14 },\n                { 'name': '浙江', 'id': 15 },\n                { 'name': '福建', 'id': 16 },\n                { 'name': '湖北', 'id': 17 },\n                { 'name': '湖南', 'id': 18 },\n                { 'name': '广东', 'id': 19 },\n                { 'name': '广西', 'id': 20 },\n                { 'name': '江西', 'id': 21 },\n                { 'name': '四川', 'id': 22 },\n                { 'name': '海南', 'id': 23 },\n                { 'name': '贵州', 'id': 24 },\n                { 'name': '云南', 'id': 25 },\n                { 'name': '西藏', 'id': 26 },\n                { 'name': '陕西', 'id': 27 },\n                { 'name': '甘肃', 'id': 28 },\n                { 'name': '青海', 'id': 29 },\n                { 'name': '宁夏', 'id': 30 },\n                { 'name': '新疆', 'id': 31 },\n                { 'name': '台湾', 'id': 32 }];\n        },\n        closeChoose() {\n            this.showChoose = false;\n            console.log('关闭了弹框');\n        },\n        closeItem(item,level) {\n            console.log('当前选中的数据:');\n            console.log(item);\n            let self = this;\n            if(level == 1) {\n                self.chooseData = [\n                    {\n                    \"id\": 2816,\n                    \"name\": \"密云区\"\n                    },\n                    {\n                    \"id\": 72,\n                    \"name\": \"朝阳区\"\n                    }\n                ];\n            }\n            if(level == 2) {\n                self.closeChoose();\n            }\n        }\n    }\n}"}},methods:{}}}});