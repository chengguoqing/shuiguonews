(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/myQR/myQR"],{"05f5":function(t,n,e){"use strict";e.r(n);var i=e("ff9e"),o=e("10b5");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("9f29");var c=e("2877"),a=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=a.exports},"10b5":function(t,n,e){"use strict";e.r(n);var i=e("5e85"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=o.a},"1cd7":function(t,n,e){"use strict";(function(t){e("de3c"),e("921b");i(e("66fd"));var n=i(e("05f5"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"5e85":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{tis:"保存到相册",showBtn:!1}},onLoad:function(){},methods:{printscreen:function(){this.tis="正在保存";var n=this.$mp.page.$getAppWebview(),e=new plus.nativeObj.Bitmap;this.showBtn=!1,this.$nextTick(function(){var i=this;setTimeout(function(){n.draw(e,function(n){i.showBtn=!0,console.log("bitmap绘制图片成功"),console.log("e: "+JSON.stringify(n)),e.save("_doc/Qr.jpg",{overwrite:!0,quality:100},function(n){plus.gallery.save(n.target,function(n){t.showToast({title:"保存成功"}),i.tis="保存到相册",e.clear()},function(t){e.clear()})},function(t){console.log("保存图片失败："+JSON.stringify(t))})},function(t){console.log("bitmap绘制图片失败："+JSON.stringify(t))})},200)})}}};n.default=e}).call(this,e("543d")["default"])},"69d6":function(t,n,e){},"9f29":function(t,n,e){"use strict";var i=e("69d6"),o=e.n(i);o.a},ff9e:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})}},[["1cd7","common/runtime","common/vendor"]]]);