(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed23b480"],{"7f7f":function(t,i,n){var c=n("86cc").f,e=Function.prototype,o=/^\s*function ([^ (]*)/,a="name";a in e||n("9e1e")&&c(e,a,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},8093:function(t,i,n){},9114:function(t,i,n){"use strict";var c=n("8093"),e=n.n(c);e.a},ac6a:function(t,i,n){for(var c=n("cadf"),e=n("0d58"),o=n("2aba"),a=n("7726"),s=n("32e9"),u=n("84f2"),r=n("2b4c"),l=r("iterator"),m=r("toStringTag"),f=u.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=e(h),L=0;L<p.length;L++){var b,d=p[L],S=h[d],k=a[d],C=k&&k.prototype;if(C&&(C[l]||s(C,l,f),C[m]||s(C,m,d),u[d]=f,S))for(b in c)C[b]||o(C,b,c[b],!0)}},bb41:function(t,i,n){"use strict";n.r(i);var c=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"communication-min-sub"},[n("p",[t._v("我是 communication-min-sub")]),n("button",{on:{click:t.onCommunicationClick}},[t._v("click")]),n("button",{on:{click:t.busClick}},[t._v("click bus")]),n("button",{on:{click:t.handleDispatch}},[t._v("dispatch")])])},e=[];n("7f7f"),n("ac6a");function o(t,i,n){this.$children.forEach(function(c){var e=c.$options.name;e===t?c.$emit.apply(c,[i].concat(n)):o.apply(c,[t,i].concat([n]))})}var a={methods:{dispatch:function(t,i,n){var c=this.$parent||this.$root,e=c.$options.name;while(c&&(!e||e!==t))c=c.$parent,c&&(e=c.$options.name);c&&c.$emit.apply(c,[i].concat(n))},broadcast:function(t,i,n){o.call(this,t,i,n)}}},s={name:"communication-min-sub",inheritAttrs:!1,mixins:[a],data:function(){return{}},inject:["onCommunicationClick"],methods:{emitClick:function(){this.$emit("emitClick","emit 触发了")},busClick:function(){this.$bus.$emit("busClick","bus 触发了")},handleDispatch:function(){this.dispatch("communication","onMessage","触发了dispatch")}},mounted:function(){}},u=s,r=(n("9114"),n("2877")),l=Object(r["a"])(u,c,e,!1,null,"426ef4ce",null);l.options.__file="communication-min-sub.vue";i["default"]=l.exports}}]);