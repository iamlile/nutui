/*! NutUI v1.2.8 Thu Jun 21 2018 15:10:48 GMT+0800 (CST) */
webpackJsonpnutui([9],{1056:function(t,A,e){(t.exports=e(1)()).push([t.i,'.demo-nav{width:100%;background-color:#f8f8f8;border-bottom:1px solid #eee;justify-content:center;padding:0 8px;position:fixed;top:0;left:0;z-index:1000}.demo-nav,.goback{height:40px;display:flex;align-items:center}.goback{cursor:pointer;width:45px}.go-btn{display:block;width:20px;height:20px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAApCAYAAAAvUenwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAC4UlEQVRIx8WXX2hOYRzHP9s082exyCKlXciUslxI/gznOFijoRal2IVW3Llx6vRcPj31XHAhyQ2luMAYa8zyvq8lSlqL1jItaZKhRlqmtJmL8xuv2Z/3z1Oeu/fzPuf7Oc/vnOd3zinA8dDGFgMXgXrgbIHj8LlAE1Aj6JMzgTa2FGgBtgkaBY45EWhjy4B7wAZBI0CDisKreQu0sUuAdqBK0A/gkIrCZoC8BNrYZUASqBQ0DBxQUdg+PidngTa2QsIrBA0Be1QUPkqfl5NAG1sJPACWC/oM1KgofDZxbtYCbexa4pqXC/oI7FJR+GKy+VkJtLHrgftAmaB3QKCisHeqYwqzCK8GEmnhb4Dq6cIzFmhjdwNtQKmgXmCzisI3Mx07o0Abux+4A8wV9BzYqqLwfSYnN61AG3sYuA4UC3oKeCoKP2Va2ikF2thG4DIwS1AHsFNF4ZdMw6cUaGNPAheAIkFtQK2KwqFswicVaGMVcIY/t/AtYJ+KwuFsw2HCPtDGWuBUGrpC3BVHcwn/awXa2NMTwi8AR/MJ/70CbexxKUuJ8G6gSkXhz3zCQS5iKpno9PygBKgWXg6s8PygNZVMjOUtEMlDzw8Kga2CqoBVnh+0pJKJnMtUlP4jlUx0eH7wHdgh5VsDVHl+0JxKJkZyEUzaTbWxJ4Bzaf8ngToVhd+cCERyBLiUtsonxJvtqxOBSOqJ98J4L+oibheDTgQiqQVuAHME9RA/ZAacCETiEbfs+YL6RNLvRCCSjcBdYKGgfpH0ORGIZB3xA3+xoAGR9DgRiGQ18W27VNAg8YXvmmx+xg/98aGi8CWwRUoEsAhIaWM3ORGI5DVx33olaAHQro31nQhE8pb4Vb1b0DygVRu714lAJB+A7UCnoBKgSRt70IlAJIOADzwWVAxc1cY2QJ6v7+lDPp9uA4GgMaDR9TfabOAaUCfoY1Eeef+MVDIx6vnBTeI9shI47zL//4xfCJTnunU1hbUAAAAASUVORK5CYII=") no-repeat;background-size:contain}.title{flex:1;font-size:16px;text-align:center;line-height:40px}.home{width:53px;text-decoration:none;color:#000}',""])},1137:function(t,A){t.exports={render:function(){var t=this,A=t.$createElement,e=t._self._c||A;return t.showFlag?e("div",{staticClass:"demo-nav"},[e("div",{staticClass:"goback",on:{click:t.goback}},[e("b",{staticClass:"go-btn"})]),t._v(" "),e("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("a",{staticClass:"home",attrs:{href:t.hrefUrl}},[t._v("文档")])]):t._e()},staticRenderFns:[]}},1261:function(t,A,e){var o=e(1056);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(3)("8a4e5d52",o,!0,{})},788:function(t,A,e){var o=e(2)(e(916),e(1137),function(t){e(1261)},null,null);t.exports=o.exports},916:function(t,A,e){"use strict";Object.defineProperty(A,"__esModule",{value:!0}),A.default={data:function(){return{showPath:""}},methods:{goback:function(){self!=top||1===history.length?this.$router.push("./index"):history.back()}},computed:{showFlag:function(){return"/index"!=this.showPath},title:function(){return this.showPath.substring(1)},hrefUrl:function(){return"./index.html#"+this.showPath}},watch:{$route:{immediate:!0,handler:function(t,A){this.showPath=t.path}}},mounted:function(){}}}});