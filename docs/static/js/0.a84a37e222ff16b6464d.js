webpackJsonp([0],{"+E39":function(t,n,e){t.exports=!e("S82l")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"+ZMJ":function(t,n,e){var r=e("lOnJ");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},"/bQp":function(t,n){t.exports={}},"3Eo+":function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},"3fs2":function(t,n,e){var r=e("RY/4"),o=e("dSzd")("iterator"),i=e("/bQp");t.exports=e("FeBl").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},"52gC":function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"5zde":function(t,n,e){e("zQR9"),e("qyJz"),t.exports=e("FeBl").Array.from},"77Pl":function(t,n,e){var r=e("EqjI");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"7KvD":function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},"7nRM":function(t,n,e){"use strict";n.__esModule=!0;var r,o=e("c/Tr"),i=(r=o)&&r.__esModule?r:{default:r};n.default=function(t){return Array.isArray(t)?t:(0,i.default)(t)}},"880/":function(t,n,e){t.exports=e("hJx8")},"94VQ":function(t,n,e){"use strict";var r=e("Yobk"),o=e("X8DO"),i=e("e6n0"),u={};e("hJx8")(u,e("dSzd")("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},D2L2:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},EqjI:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},FeBl:function(t,n){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},HhAh:function(t,n){function e(t,n,e){var r,o,i,u,c;function s(){var a=Date.now()-u;a<n&&a>=0?r=setTimeout(s,n-a):(r=null,e||(c=t.apply(i,o),i=o=null))}null==n&&(n=100);var a=function(){i=this,o=arguments,u=Date.now();var a=e&&!r;return r||(r=setTimeout(s,n)),a&&(c=t.apply(i,o),i=o=null),c};return a.clear=function(){r&&(clearTimeout(r),r=null)},a.flush=function(){r&&(c=t.apply(i,o),i=o=null,clearTimeout(r),r=null)},a}e.debounce=e,t.exports=e},Ibhu:function(t,n,e){var r=e("D2L2"),o=e("TcQ7"),i=e("vFc/")(!1),u=e("ax3d")("IE_PROTO");t.exports=function(t,n){var e,c=o(t),s=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>s;)r(c,e=n[s++])&&(~i(a,e)||a.push(e));return a}},MU5D:function(t,n,e){var r=e("R9M2");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},Mhyx:function(t,n,e){var r=e("/bQp"),o=e("dSzd")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},MmMw:function(t,n,e){var r=e("EqjI");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},NlfK:function(t,n){},O4g8:function(t,n){t.exports=!0},ON07:function(t,n,e){var r=e("EqjI"),o=e("7KvD").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},PzxK:function(t,n,e){var r=e("D2L2"),o=e("sB3e"),i=e("ax3d")("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},QRG4:function(t,n,e){var r=e("UuGF"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},R9M2:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},RPLV:function(t,n,e){var r=e("7KvD").document;t.exports=r&&r.documentElement},"RY/4":function(t,n,e){var r=e("R9M2"),o=e("dSzd")("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},RqD5:function(t,n){},S82l:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},SfB7:function(t,n,e){t.exports=!e("+E39")&&!e("S82l")(function(){return 7!=Object.defineProperty(e("ON07")("div"),"a",{get:function(){return 7}}).a})},TcQ7:function(t,n,e){var r=e("MU5D"),o=e("52gC");t.exports=function(t){return r(o(t))}},UN9O:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("HhAh"),o=e.n(r),i=e("7nRM"),u=e.n(i),c={name:"info",props:["conjugation","tense"],computed:{dictionaryForm:function(){var t=this,n=u()(this.verbs[this.conjugation]),e=n[0];return n.slice(1).map(function(n,e){return t.tense.pp===e?'<span class="pp">'+n+"</span>":n}).join(", ")+": "+e},examples:function(){return this.tense.examples[this.conjugation]}},methods:{ending:function(t){var n=t.indexOf("|");return t.substring(0,n)+'<span class="ending">'+t.substring(n+1)+"</span>"}}},s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"info"},[e("span",{staticClass:"dictionary-form",domProps:{innerHTML:t._s(t.dictionaryForm)}}),t._v(" "),e("div",{staticClass:"conjugations"},[e("div",{staticClass:"singular"},t._l(t.examples[0].slice(0,3),function(n,r){return e("div",{key:n,staticClass:"example"},[e("div",{domProps:{innerHTML:t._s(t.ending(n))}}),t._v(" "),e("div",{staticClass:"translation"},[t._v(t._s(t.examples[1][r]))])])})),t._v(" "),e("div",{staticClass:"plural"},t._l(t.examples[0].slice(3),function(n,r){return e("div",{key:n,staticClass:"example"},[e("div",{domProps:{innerHTML:t._s(t.ending(n))}}),t._v(" "),e("div",{staticClass:"translation"},[t._v(t._s(t.examples[1][r+3]))])])}))])])},staticRenderFns:[]};var a={name:"tense",data:function(){return{tense:this.$route.params.tense,eraseDelay:100,conjugation:0,infoStyle:{opacity:1}}},components:{Info:e("VU/8")(c,s,!1,function(t){e("NlfK")},null,null).exports},computed:{tenseData:function(){var t=this;return this.tenses.find(function(n){return n.name===t.tense})},description:function(){return this.tenseData.descriptions[this.conjugation]}},created:function(){var t=this;this.debounced=o()(function(n){t.$refs.typer.startErasing(),setTimeout(function(){t.updateInfoStyle(function(){t.tense=n.params.tense})},t.tense.length*t.eraseDelay)},500)},beforeRouteUpdate:function(t,n,e){this.debounced(t),e()},methods:{changeConj:function(t){var n=this;this.updateInfoStyle(function(){n.conjugation=t})},updateInfoStyle:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;this.infoStyle={opacity:0,transform:"translateY(50%)"},setTimeout(function(){n(),t.infoStyle={opacity:1,transform:""}},e)}}},f={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tense"},[e("vue-typer",{ref:"typer",attrs:{text:t.tense,eraseStyle:"backspace",repeat:0,eraseDelay:t.eraseDelay,preEraseDelay:0}}),t._v(" "),e("div",{staticClass:"tense-info"},[e("div",{staticClass:"description"},[t._v(t._s(t.description))]),t._v(" "),e("section",{staticClass:"verb-tabs"},t._l(t.verbs,function(n,r){return e("div",{key:n[1],class:["verb-tab",{active:t.conjugation===r}],on:{click:function(n){t.changeConj(r)}}},[e("span",[t._v(t._s(n[2]))])])})),t._v(" "),e("info",{style:t.infoStyle,attrs:{tense:t.tenseData,conjugation:t.conjugation}})],1)],1)},staticRenderFns:[]};var l=e("VU/8")(a,f,!1,function(t){e("RqD5")},null,null);n.default=l.exports},UuGF:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},X8DO:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},Yobk:function(t,n,e){var r=e("77Pl"),o=e("qio6"),i=e("xnc9"),u=e("ax3d")("IE_PROTO"),c=function(){},s=function(){var t,n=e("ON07")("iframe"),r=i.length;for(n.style.display="none",e("RPLV").appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=s(),void 0===n?e:o(e,n)}},ax3d:function(t,n,e){var r=e("e8AB")("keys"),o=e("3Eo+");t.exports=function(t){return r[t]||(r[t]=o(t))}},"c/Tr":function(t,n,e){t.exports={default:e("5zde"),__esModule:!0}},dSzd:function(t,n,e){var r=e("e8AB")("wks"),o=e("3Eo+"),i=e("7KvD").Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},dY0y:function(t,n,e){var r=e("dSzd")("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},e6n0:function(t,n,e){var r=e("evD5").f,o=e("D2L2"),i=e("dSzd")("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},e8AB:function(t,n,e){var r=e("FeBl"),o=e("7KvD"),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e("O4g8")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},evD5:function(t,n,e){var r=e("77Pl"),o=e("SfB7"),i=e("MmMw"),u=Object.defineProperty;n.f=e("+E39")?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},fBQ2:function(t,n,e){"use strict";var r=e("evD5"),o=e("X8DO");t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},fkB2:function(t,n,e){var r=e("UuGF"),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},h65t:function(t,n,e){var r=e("UuGF"),o=e("52gC");t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),s=r(e),a=c.length;return s<0||s>=a?t?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536}}},hJx8:function(t,n,e){var r=e("evD5"),o=e("X8DO");t.exports=e("+E39")?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},kM2E:function(t,n,e){var r=e("7KvD"),o=e("FeBl"),i=e("+ZMJ"),u=e("hJx8"),c=e("D2L2"),s=function(t,n,e){var a,f,l,p=t&s.F,v=t&s.G,d=t&s.S,y=t&s.P,h=t&s.B,x=t&s.W,g=v?o:o[n]||(o[n]={}),m=g.prototype,_=v?r:d?r[n]:(r[n]||{}).prototype;for(a in v&&(e=n),e)(f=!p&&_&&void 0!==_[a])&&c(g,a)||(l=f?_[a]:e[a],g[a]=v&&"function"!=typeof _[a]?e[a]:h&&f?i(l,r):x&&_[a]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((g.virtual||(g.virtual={}))[a]=l,t&s.R&&m&&!m[a]&&u(m,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},lOnJ:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},lktj:function(t,n,e){var r=e("Ibhu"),o=e("xnc9");t.exports=Object.keys||function(t){return r(t,o)}},msXi:function(t,n,e){var r=e("77Pl");t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},qio6:function(t,n,e){var r=e("evD5"),o=e("77Pl"),i=e("lktj");t.exports=e("+E39")?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,s=0;c>s;)r.f(t,e=u[s++],n[e]);return t}},qyJz:function(t,n,e){"use strict";var r=e("+ZMJ"),o=e("kM2E"),i=e("sB3e"),u=e("msXi"),c=e("Mhyx"),s=e("QRG4"),a=e("fBQ2"),f=e("3fs2");o(o.S+o.F*!e("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var n,e,o,l,p=i(t),v="function"==typeof this?this:Array,d=arguments.length,y=d>1?arguments[1]:void 0,h=void 0!==y,x=0,g=f(p);if(h&&(y=r(y,d>2?arguments[2]:void 0,2)),void 0==g||v==Array&&c(g))for(e=new v(n=s(p.length));n>x;x++)a(e,x,h?y(p[x],x):p[x]);else for(l=g.call(p),e=new v;!(o=l.next()).done;x++)a(e,x,h?u(l,y,[o.value,x],!0):o.value);return e.length=x,e}})},sB3e:function(t,n,e){var r=e("52gC");t.exports=function(t){return Object(r(t))}},"vFc/":function(t,n,e){var r=e("TcQ7"),o=e("QRG4"),i=e("fkB2");t.exports=function(t){return function(n,e,u){var c,s=r(n),a=o(s.length),f=i(u,a);if(t&&e!=e){for(;a>f;)if((c=s[f++])!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===e)return t||f||0;return!t&&-1}}},"vIB/":function(t,n,e){"use strict";var r=e("O4g8"),o=e("kM2E"),i=e("880/"),u=e("hJx8"),c=e("/bQp"),s=e("94VQ"),a=e("e6n0"),f=e("PzxK"),l=e("dSzd")("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,d,y,h,x){s(e,n,d);var g,m,_,b=function(t){if(!p&&t in w)return w[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},O=n+" Iterator",j="values"==y,S=!1,w=t.prototype,M=w[l]||w["@@iterator"]||y&&w[y],D=M||b(y),E=y?j?b("entries"):D:void 0,P="Array"==n&&w.entries||M;if(P&&(_=f(P.call(new t)))!==Object.prototype&&_.next&&(a(_,O,!0),r||"function"==typeof _[l]||u(_,l,v)),j&&M&&"values"!==M.name&&(S=!0,D=function(){return M.call(this)}),r&&!x||!p&&!S&&w[l]||u(w,l,D),c[n]=D,c[O]=v,y)if(g={values:j?D:b("values"),keys:h?D:b("keys"),entries:E},x)for(m in g)m in w||i(w,m,g[m]);else o(o.P+o.F*(p||S),n,g);return g}},xnc9:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},zQR9:function(t,n,e){"use strict";var r=e("h65t")(!0);e("vIB/")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})}});
//# sourceMappingURL=0.a84a37e222ff16b6464d.js.map