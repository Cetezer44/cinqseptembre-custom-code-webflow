/*! Cinq Septembre — code personnalise du site
 *  Depot : github.com/Cetezer44/cinqseptembre-custom-code-webflow
 *  Genere par build.py le 2026-11-12 — ne pas editer ce fichier a la main.
 */
/* ---------- barba-core-2.10.3.umd.js ---------- */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t||self).barba=n()}(this,function(){function t(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,"symbol"==typeof(e=function(t,n){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key))?e:String(e),i)}var e}function n(n,r,i){return r&&t(n.prototype,r),i&&t(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function r(){return r=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},r.apply(this,arguments)}function i(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,o(t,n)}function e(t){return e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},e(t)}function o(t,n){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},o(t,n)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function s(t,n,r){return s=u()?Reflect.construct.bind():function(t,n,r){var i=[null];i.push.apply(i,n);var e=new(Function.bind.apply(t,i));return r&&o(e,r.prototype),e},s.apply(null,arguments)}function f(t){var n="function"==typeof Map?new Map:void 0;return f=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return s(t,arguments,e(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)},f(t)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var a,h=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};!function(t){t[t.off=0]="off",t[t.error=1]="error",t[t.warning=2]="warning",t[t.info=3]="info",t[t.debug=4]="debug"}(a||(a={}));var v=a.off,d=/*#__PURE__*/function(){function t(t){this.t=void 0,this.t=t}t.getLevel=function(){return v},t.setLevel=function(t){return v=a[t]};var n=t.prototype;return n.error=function(){this.i(console.error,a.error,[].slice.call(arguments))},n.warn=function(){this.i(console.warn,a.warning,[].slice.call(arguments))},n.info=function(){this.i(console.info,a.info,[].slice.call(arguments))},n.debug=function(){this.i(console.log,a.debug,[].slice.call(arguments))},n.i=function(n,r,i){r<=t.getLevel()&&n.apply(console,["["+this.t+"] "].concat(i))},t}();function l(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function p(t){return t&&t.sensitive?"":"i"}var m={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},w=/*#__PURE__*/function(){function t(){this.o=m,this.u=void 0,this.h={after:null,before:null,parent:null}}var n=t.prototype;return n.toString=function(t){return t.outerHTML},n.toDocument=function(t){return this.u||(this.u=new DOMParser),this.u.parseFromString(t,"text/html")},n.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},n.getHtml=function(t){return void 0===t&&(t=document),this.toString(t.documentElement)},n.getWrapper=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},n.getContainer=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},n.removeContainer=function(t){document.body.contains(t)&&(this.v(t),t.parentNode.removeChild(t))},n.addContainer=function(t,n){var r=this.getContainer()||this.h.before;r?this.l(t,r):this.h.after?this.h.after.parentNode.insertBefore(t,this.h.after):this.h.parent?this.h.parent.appendChild(t):n.appendChild(t)},n.getSibling=function(){return this.h},n.getNamespace=function(t){void 0===t&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},n.getHref=function(t){if(t.tagName&&"a"===t.tagName.toLowerCase()){if("string"==typeof t.href)return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},n.resolveUrl=function(){var t=[].slice.call(arguments).length;if(0===t)throw new Error("resolveUrl requires at least one argument; got none.");var n=document.createElement("base");if(n.href=arguments[0],1===t)return n.href;var r=document.getElementsByTagName("head")[0];r.insertBefore(n,r.firstChild);for(var i,e=document.createElement("a"),o=1;o<t;o++)e.href=arguments[o],n.href=i=e.href;return r.removeChild(n),i},n.l=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},n.v=function(t){return this.h={after:t.nextElementSibling,before:t.previousElementSibling,parent:t.parentElement},this.h},t}(),b=new w,y=/*#__PURE__*/function(){function t(){this.p=void 0,this.m=[],this.P=-1}var i=t.prototype;return i.init=function(t,n){this.p="barba";var r={data:{},ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.P=0,this.m.push(r);var i={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(i,"",t)},i.change=function(t,n,r){if(r&&r.state){var i=r.state,e=i.index;n=this.g(this.P-e),this.replace(i.states),this.P=e}else this.add(t,n);return n},i.add=function(t,n,r,i){var e=null!=r?r:this.R(n),o={data:null!=i?i:{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};switch(e){case"push":this.P=this.size,this.m.push(o);break;case"replace":this.set(this.P,o)}var u={from:this.p,index:this.P,states:[].concat(this.m)};switch(e){case"push":window.history&&window.history.pushState(u,"",t);break;case"replace":window.history&&window.history.replaceState(u,"",t)}},i.store=function(t,n){var i=n||this.P,e=this.get(i);e.data=r({},e.data,t),this.set(i,e);var o={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(o,"")},i.update=function(t,n){var i=n||this.P,e=r({},this.get(i),t);this.set(i,e)},i.remove=function(t){t?this.m.splice(t,1):this.m.pop(),this.P--},i.clear=function(){this.m=[],this.P=-1},i.replace=function(t){this.m=t},i.get=function(t){return this.m[t]},i.set=function(t,n){return this.m[t]=n},i.R=function(t){var n="push",r=t,i=m.prefix+"-"+m.history;return r.hasAttribute&&r.hasAttribute(i)&&(n=r.getAttribute(i)),n},i.g=function(t){return Math.abs(t)>1?t>0?"forward":"back":0===t?"popstate":t>0?"back":"forward"},n(t,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),t}(),P=new y,g=function(t,n){try{var r=function(){if(!n.next.html)return Promise.resolve(t).then(function(t){var r=n.next;if(t){var i=b.toElement(t.html);r.namespace=b.getNamespace(i),r.container=b.getContainer(i),r.url=t.url,r.html=t.html,P.update({ns:r.namespace});var e=b.toDocument(t.html);document.title=e.title}})}();return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},E=function t(n,r,i){return n instanceof RegExp?function(t,n){if(!n)return t;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,e=r.exec(t.source);e;)n.push({name:e[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),e=r.exec(t.source);return t}(n,r):Array.isArray(n)?function(n,r,i){var e=n.map(function(n){return t(n,r,i).source});return new RegExp("(?:".concat(e.join("|"),")"),p(i))}(n,r,i):function(t,n,r){return function(t,n,r){void 0===r&&(r={});for(var i=r.strict,e=void 0!==i&&i,o=r.start,u=void 0===o||o,s=r.end,f=void 0===s||s,c=r.encode,a=void 0===c?function(t){return t}:c,h=r.delimiter,v=void 0===h?"/#?":h,d=r.endsWith,m="[".concat(l(void 0===d?"":d),"]|$"),w="[".concat(l(v),"]"),b=u?"^":"",y=0,P=t;y<P.length;y++){var g=P[y];if("string"==typeof g)b+=l(a(g));else{var E=l(a(g.prefix)),x=l(a(g.suffix));if(g.pattern)if(n&&n.push(g),E||x)if("+"===g.modifier||"*"===g.modifier){var R="*"===g.modifier?"?":"";b+="(?:".concat(E,"((?:").concat(g.pattern,")(?:").concat(x).concat(E,"(?:").concat(g.pattern,"))*)").concat(x,")").concat(R)}else b+="(?:".concat(E,"(").concat(g.pattern,")").concat(x,")").concat(g.modifier);else b+="+"===g.modifier||"*"===g.modifier?"((?:".concat(g.pattern,")").concat(g.modifier,")"):"(".concat(g.pattern,")").concat(g.modifier);else b+="(?:".concat(E).concat(x,")").concat(g.modifier)}}if(f)e||(b+="".concat(w,"?")),b+=r.endsWith?"(?=".concat(m,")"):"$";else{var k=t[t.length-1],O="string"==typeof k?w.indexOf(k[k.length-1])>-1:void 0===k;e||(b+="(?:".concat(w,"(?=").concat(m,"))?")),O||(b+="(?=".concat(w,"|").concat(m,")"))}return new RegExp(b,p(r))}(function(t,n){void 0===n&&(n={});for(var r=function(t){for(var n=[],r=0;r<t.length;){var i=t[r];if("*"!==i&&"+"!==i&&"?"!==i)if("\\"!==i)if("{"!==i)if("}"!==i)if(":"!==i)if("("!==i)n.push({type:"CHAR",index:r,value:t[r++]});else{var e=1,o="";if("?"===t[s=r+1])throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<t.length;)if("\\"!==t[s]){if(")"===t[s]){if(0==--e){s++;break}}else if("("===t[s]&&(e++,"?"!==t[s+1]))throw new TypeError("Capturing groups are not allowed at ".concat(s));o+=t[s++]}else o+=t[s++]+t[s++];if(e)throw new TypeError("Unbalanced pattern at ".concat(r));if(!o)throw new TypeError("Missing pattern at ".concat(r));n.push({type:"PATTERN",index:r,value:o}),r=s}else{for(var u="",s=r+1;s<t.length;){var f=t.charCodeAt(s);if(!(f>=48&&f<=57||f>=65&&f<=90||f>=97&&f<=122||95===f))break;u+=t[s++]}if(!u)throw new TypeError("Missing parameter name at ".concat(r));n.push({type:"NAME",index:r,value:u}),r=s}else n.push({type:"CLOSE",index:r,value:t[r++]});else n.push({type:"OPEN",index:r,value:t[r++]});else n.push({type:"ESCAPED_CHAR",index:r++,value:t[r++]});else n.push({type:"MODIFIER",index:r,value:t[r++]})}return n.push({type:"END",index:r,value:""}),n}(t),i=n.prefixes,e=void 0===i?"./":i,o="[^".concat(l(n.delimiter||"/#?"),"]+?"),u=[],s=0,f=0,c="",a=function(t){if(f<r.length&&r[f].type===t)return r[f++].value},h=function(t){var n=a(t);if(void 0!==n)return n;var i=r[f],e=i.index;throw new TypeError("Unexpected ".concat(i.type," at ").concat(e,", expected ").concat(t))},v=function(){for(var t,n="";t=a("CHAR")||a("ESCAPED_CHAR");)n+=t;return n};f<r.length;){var d=a("CHAR"),p=a("NAME"),m=a("PATTERN");if(p||m)-1===e.indexOf(b=d||"")&&(c+=b,b=""),c&&(u.push(c),c=""),u.push({name:p||s++,prefix:b,suffix:"",pattern:m||o,modifier:a("MODIFIER")||""});else{var w=d||a("ESCAPED_CHAR");if(w)c+=w;else if(c&&(u.push(c),c=""),a("OPEN")){var b=v(),y=a("NAME")||"",P=a("PATTERN")||"",g=v();h("CLOSE"),u.push({name:y||(P?s++:""),pattern:y&&!P?o:P,prefix:b,suffix:g,modifier:a("MODIFIER")||""})}else h("END")}}return u}(t,r),n,r)}(n,r,i)},x={__proto__:null,update:g,nextTick:function(){return new Promise(function(t){window.requestAnimationFrame(t)})},pathToRegexp:E},R=function(){return window.location.origin},k=function(t){return void 0===t&&(t=window.location.href),O(t).port},O=function(t){var n,r=t.match(/:\d+/);if(null===r)/^http/.test(t)&&(n=80),/^https/.test(t)&&(n=443);else{var i=r[0].substring(1);n=parseInt(i,10)}var e,o=t.replace(R(),""),u={},s=o.indexOf("#");s>=0&&(e=o.slice(s+1),o=o.slice(0,s));var f=o.indexOf("?");return f>=0&&(u=T(o.slice(f+1)),o=o.slice(0,f)),{hash:e,path:o,port:n,query:u}},T=function(t){return t.split("&").reduce(function(t,n){var r=n.split("=");return t[r[0]]=r[1],t},{})},A=function(t){return void 0===t&&(t=window.location.href),t.replace(/(\/#.*|\/|#.*)$/,"")},j={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(t,n){return void 0===n&&(n=document.baseURI),new URL(t,n).href},getOrigin:R,getPort:k,getPath:function(t){return void 0===t&&(t=window.location.href),O(t).path},getQuery:function(t,n){return void 0===n&&(n=!1),n?JSON.stringify(O(t).query):O(t).query},getHash:function(t){return O(t).hash},parse:O,parseQuery:T,clean:A};function M(t,n,i,e,o){return void 0===n&&(n=2e3),new Promise(function(u,s){var f=new XMLHttpRequest;f.onreadystatechange=function(){if(f.readyState===XMLHttpRequest.DONE)if(200===f.status){var n=""!==f.responseURL&&f.responseURL!==t?f.responseURL:t;u({html:f.responseText,url:r({href:n},O(n))}),e.update(t,{status:"fulfilled",target:n})}else if(f.status){var o={status:f.status,statusText:f.statusText};i(t,o),s(o),e.update(t,{status:"rejected"})}},f.ontimeout=function(){var r=new Error("Timeout error ["+n+"]");i(t,r),s(r),e.update(t,{status:"rejected"})},f.onerror=function(){var n=new Error("Fetch error");i(t,n),s(n),e.update(t,{status:"rejected"})},f.open("GET",t),f.timeout=n,f.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),f.setRequestHeader("x-barba","yes"),o.all().forEach(function(t,n){f.setRequestHeader(n,t)}),f.send()})}function N(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then}function S(t,n){return void 0===n&&(n={}),function(){var r=arguments,i=!1,e=new Promise(function(e,o){n.async=function(){return i=!0,function(t,n){t?o(t):e(n)}};var u=t.apply(n,[].slice.call(r));i||(N(u)?u.then(e,o):e(u))});return e}}var C=/*#__PURE__*/function(t){function n(){var n;return(n=t.call(this)||this).logger=new d("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}i(n,t);var r=n.prototype;return r.init=function(){var t=this;this.registered.clear(),this.all.forEach(function(n){t[n]||(t[n]=function(r,i){t.registered.has(n)||t.registered.set(n,new Set),t.registered.get(n).add({ctx:i||{},fn:r})})})},r.do=function(t){var n=arguments,r=this;if(this.registered.has(t)){var i=Promise.resolve();return this.registered.get(t).forEach(function(t){i=i.then(function(){return S(t.fn,t.ctx).apply(void 0,[].slice.call(n,1))})}),i.catch(function(n){r.logger.debug("Hook error ["+t+"]"),r.logger.error(n)})}return Promise.resolve()},r.clear=function(){var t=this;this.all.forEach(function(n){delete t[n]}),this.init()},r.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var t=[];this.registered.forEach(function(n,r){return t.push(r)}),this.logger.info("Registered hooks: "+t.join(","))},n}(h),L=new C,H=/*#__PURE__*/function(){function t(t){if(this.k=void 0,this.O=[],"boolean"==typeof t)this.k=t;else{var n=Array.isArray(t)?t:[t];this.O=n.map(function(t){return E(t)})}}return t.prototype.checkHref=function(t){if("boolean"==typeof this.k)return this.k;var n=O(t).path;return this.O.some(function(t){return null!==t.exec(n)})},t}(),_=/*#__PURE__*/function(t){function n(n){var r;return(r=t.call(this,n)||this).T=new Map,r}i(n,t);var e=n.prototype;return e.set=function(t,n,r,i,e){return this.T.set(t,{action:r,request:n,status:i,target:null!=e?e:t}),{action:r,request:n,status:i,target:e}},e.get=function(t){return this.T.get(t)},e.getRequest=function(t){return this.T.get(t).request},e.getAction=function(t){return this.T.get(t).action},e.getStatus=function(t){return this.T.get(t).status},e.getTarget=function(t){return this.T.get(t).target},e.has=function(t){return!this.checkHref(t)&&this.T.has(t)},e.delete=function(t){return this.T.delete(t)},e.update=function(t,n){var i=r({},this.T.get(t),n);return this.T.set(t,i),i},n}(H),D=/*#__PURE__*/function(){function t(){this.A=new Map}var n=t.prototype;return n.set=function(t,n){return this.A.set(t,n),{name:n}},n.get=function(t){return this.A.get(t)},n.all=function(){return this.A},n.has=function(t){return this.A.has(t)},n.delete=function(t){return this.A.delete(t)},n.clear=function(){return this.A.clear()},t}(),B=function(){return!window.history.pushState},q=function(t){return!t.el||!t.href},F=function(t){var n=t.event;return n.which>1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey},I=function(t){var n=t.el;return n.hasAttribute("target")&&"_blank"===n.target},U=function(t){var n=t.el;return void 0!==n.protocol&&window.location.protocol!==n.protocol||void 0!==n.hostname&&window.location.hostname!==n.hostname},$=function(t){var n=t.el;return void 0!==n.port&&k()!==k(n.href)},Q=function(t){var n=t.el;return n.getAttribute&&"string"==typeof n.getAttribute("download")},X=function(t){return t.el.hasAttribute(m.prefix+"-"+m.prevent)},z=function(t){return Boolean(t.el.closest("["+m.prefix+"-"+m.prevent+'="all"]'))},G=function(t){var n=t.href;return A(n)===A()&&k(n)===k()},J=/*#__PURE__*/function(t){function n(n){var r;return(r=t.call(this,n)||this).suite=[],r.tests=new Map,r.init(),r}i(n,t);var r=n.prototype;return r.init=function(){this.add("pushState",B),this.add("exists",q),this.add("newTab",F),this.add("blank",I),this.add("corsDomain",U),this.add("corsPort",$),this.add("download",Q),this.add("preventSelf",X),this.add("preventAll",z),this.add("sameUrl",G,!1)},r.add=function(t,n,r){void 0===r&&(r=!0),this.tests.set(t,n),r&&this.suite.push(t)},r.run=function(t,n,r,i){return this.tests.get(t)({el:n,event:r,href:i})},r.checkLink=function(t,n,r){var i=this;return this.suite.some(function(e){return i.run(e,t,n,r)})},n}(H),W=/*#__PURE__*/function(t){function n(r,i){var e;return void 0===i&&(i="Barba error"),(e=t.call.apply(t,[this].concat([].slice.call(arguments,2)))||this).error=void 0,e.label=void 0,e.error=r,e.label=i,Error.captureStackTrace&&Error.captureStackTrace(c(e),n),e.name="BarbaError",e}return i(n,t),n}(/*#__PURE__*/f(Error)),K=/*#__PURE__*/function(){function t(t){void 0===t&&(t=[]),this.logger=new d("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var n=t.prototype;return n.add=function(t,n){"rule"===t?this.j.splice(n.position||0,0,n.value):this.all.push(n),this.update()},n.resolve=function(t,n){var r=this;void 0===n&&(n={});var i=n.once?this.once:this.page;i=i.filter(n.self?function(t){return t.name&&"self"===t.name}:function(t){return!t.name||"self"!==t.name});var e=new Map,o=i.find(function(i){var o=!0,u={};return n.self&&"self"===i.name?(e.set(i,u),!0):(r.j.reverse().forEach(function(n){o&&(o=r.M(i,n,t,u),i.from&&i.to&&(o=r.M(i,n,t,u,"from")&&r.M(i,n,t,u,"to")),i.from&&!i.to&&(o=r.M(i,n,t,u,"from")),!i.from&&i.to&&(o=r.M(i,n,t,u,"to")))}),e.set(i,u),o)}),u=e.get(o),s=[];if(s.push(n.once?"once":"page"),n.self&&s.push("self"),u){var f,c=[o];Object.keys(u).length>0&&c.push(u),(f=this.logger).info.apply(f,["Transition found ["+s.join(",")+"]"].concat(c))}else this.logger.info("No transition found ["+s.join(",")+"]");return o},n.update=function(){var t=this;this.all=this.all.map(function(n){return t.N(n)}).sort(function(t,n){return t.priority-n.priority}).reverse().map(function(t){return delete t.priority,t}),this.page=this.all.filter(function(t){return void 0!==t.leave||void 0!==t.enter}),this.once=this.all.filter(function(t){return void 0!==t.once})},n.M=function(t,n,r,i,e){var o=!0,u=!1,s=t,f=n.name,c=f,a=f,h=f,v=e?s[e]:s,d="to"===e?r.next:r.current;if(e?v&&v[f]:v[f]){switch(n.type){case"strings":default:var l=Array.isArray(v[c])?v[c]:[v[c]];d[c]&&-1!==l.indexOf(d[c])&&(u=!0),-1===l.indexOf(d[c])&&(o=!1);break;case"object":var p=Array.isArray(v[a])?v[a]:[v[a]];d[a]?(d[a].name&&-1!==p.indexOf(d[a].name)&&(u=!0),-1===p.indexOf(d[a].name)&&(o=!1)):o=!1;break;case"function":v[h](r)?u=!0:o=!1}u&&(e?(i[e]=i[e]||{},i[e][f]=s[e][f]):i[f]=s[f])}return o},n.S=function(t,n,r){var i=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(i+=Math.pow(10,r),t.from&&t.from[n]&&(i+=1),t.to&&t.to[n]&&(i+=2)),i},n.N=function(t){var n=this;t.priority=0;var r=0;return this.j.forEach(function(i,e){r+=n.S(t,i.name,e+1)}),t.priority=r,t},t}();function V(t,n){try{var r=t()}catch(t){return n(t)}return r&&r.then?r.then(void 0,n):r}var Y=/*#__PURE__*/function(){function t(t){void 0===t&&(t=[]),this.logger=new d("@barba/core"),this.store=void 0,this.C=!1,this.store=new K(t)}var r=t.prototype;return r.get=function(t,n){return this.store.resolve(t,n)},r.doOnce=function(t){var n=t.data,r=t.transition;try{var i=function(){e.C=!1},e=this,o=r||{};e.C=!0;var u=V(function(){return Promise.resolve(e.L("beforeOnce",n,o)).then(function(){return Promise.resolve(e.once(n,o)).then(function(){return Promise.resolve(e.L("afterOnce",n,o)).then(function(){})})})},function(t){e.C=!1,e.logger.debug("Transition error [before/after/once]"),e.logger.error(t)});return Promise.resolve(u&&u.then?u.then(i):i())}catch(t){return Promise.reject(t)}},r.doPage=function(t){var n=t.data,r=t.transition,i=t.page,e=t.wrapper;try{var o=function(t){u.C=!1},u=this,s=r||{},f=!0===s.sync||!1;u.C=!0;var c=V(function(){function t(){return Promise.resolve(u.L("before",n,s)).then(function(){function t(t){return Promise.resolve(u.remove(n)).then(function(){return Promise.resolve(u.L("after",n,s)).then(function(){})})}var r=function(){if(f)return V(function(){return Promise.resolve(u.add(n,e)).then(function(){return Promise.resolve(u.L("beforeLeave",n,s)).then(function(){return Promise.resolve(u.L("beforeEnter",n,s)).then(function(){return Promise.resolve(Promise.all([u.leave(n,s),u.enter(n,s)])).then(function(){return Promise.resolve(u.L("afterLeave",n,s)).then(function(){return Promise.resolve(u.L("afterEnter",n,s)).then(function(){})})})})})})},function(t){if(u.H(t))throw new W(t,"Transition error [sync]")});var t=function(t){return V(function(){var t=function(){if(!1!==r)return Promise.resolve(u.add(n,e)).then(function(){return Promise.resolve(u.L("beforeEnter",n,s)).then(function(){return Promise.resolve(u.enter(n,s,r)).then(function(){return Promise.resolve(u.L("afterEnter",n,s)).then(function(){})})})})}();if(t&&t.then)return t.then(function(){})},function(t){if(u.H(t))throw new W(t,"Transition error [before/after/enter]")})},r=!1,o=V(function(){return Promise.resolve(u.L("beforeLeave",n,s)).then(function(){return Promise.resolve(Promise.all([u.leave(n,s),g(i,n)]).then(function(t){return t[0]})).then(function(t){return r=t,Promise.resolve(u.L("afterLeave",n,s)).then(function(){})})})},function(t){if(u.H(t))throw new W(t,"Transition error [before/after/leave]")});return o&&o.then?o.then(t):t()}();return r&&r.then?r.then(t):t()})}var r=function(){if(f)return Promise.resolve(g(i,n)).then(function(){})}();return r&&r.then?r.then(t):t()},function(t){if(u.C=!1,t.name&&"BarbaError"===t.name)throw u.logger.debug(t.label),u.logger.error(t.error),t;throw u.logger.debug("Transition error [page]"),u.logger.error(t),t});return Promise.resolve(c&&c.then?c.then(o):o())}catch(t){return Promise.reject(t)}},r.once=function(t,n){try{return Promise.resolve(L.do("once",t,n)).then(function(){return n.once?S(n.once,n)(t):Promise.resolve()})}catch(t){return Promise.reject(t)}},r.leave=function(t,n){try{return Promise.resolve(L.do("leave",t,n)).then(function(){return n.leave?S(n.leave,n)(t):Promise.resolve()})}catch(t){return Promise.reject(t)}},r.enter=function(t,n,r){try{return Promise.resolve(L.do("enter",t,n)).then(function(){return n.enter?S(n.enter,n)(t,r):Promise.resolve()})}catch(t){return Promise.reject(t)}},r.add=function(t,n){try{return b.addContainer(t.next.container,n),L.do("nextAdded",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.remove=function(t){try{return b.removeContainer(t.current.container),L.do("currentRemoved",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.H=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},r.L=function(t,n,r){try{return Promise.resolve(L.do(t,n,r)).then(function(){return r[t]?S(r[t],r)(n):Promise.resolve()})}catch(t){return Promise.reject(t)}},n(t,[{key:"isRunning",get:function(){return this.C},set:function(t){this.C=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return"self"===t.name})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),t}(),Z=/*#__PURE__*/function(){function t(t){var n=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,0!==t.length&&(t.forEach(function(t){n.byNamespace.set(t.namespace,t)}),this.names.forEach(function(t){L[t](n._(t))}))}return t.prototype._=function(t){var n=this;return function(r){var i=t.match(/enter/i)?r.next:r.current,e=n.byNamespace.get(i.namespace);return e&&e[t]?S(e[t],e)(r):Promise.resolve()}},t}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var n=this;do{if(n.matches(t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null});var tt={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},nt=/*#__PURE__*/function(){function t(){this.version="2.10.3",this.schemaPage=tt,this.Logger=d,this.logger=new d("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=L,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=b,this.helpers=x,this.history=P,this.request=M,this.url=j,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var i=t.prototype;return i.use=function(t,n){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):"function"==typeof t.install?(t.install(this,n),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},i.init=function(t){var n=void 0===t?{}:t,i=n.transitions,e=void 0===i?[]:i,o=n.views,u=void 0===o?[]:o,s=n.schema,f=void 0===s?m:s,c=n.requestError,a=n.timeout,h=void 0===a?2e3:a,v=n.cacheIgnore,l=void 0!==v&&v,p=n.cacheFirstPage,w=void 0!==p&&p,b=n.prefetchIgnore,y=void 0!==b&&b,P=n.preventRunning,g=void 0!==P&&P,E=n.prevent,x=void 0===E?null:E,R=n.debug,k=n.logLevel;if(d.setLevel(!0===(void 0!==R&&R)?"debug":void 0===k?"off":k),this.logger.info(this.version),Object.keys(f).forEach(function(t){m[t]&&(m[t]=f[t])}),this.B=c,this.timeout=h,this.cacheIgnore=l,this.cacheFirstPage=w,this.prefetchIgnore=y,this.preventRunning=g,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var O=this.data.current;if(!O.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new _(l),this.headers=new D,this.prevent=new J(y),this.transitions=new Y(e),this.views=new Z(u),null!==x){if("function"!=typeof x)throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",x)}this.history.init(O.url.href,O.namespace),w&&this.cache.set(O.url.href,Promise.resolve({html:O.html,url:O.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(t){return t.init()});var T=this.data;T.trigger="barba",T.next=T.current,T.current=r({},this.schemaPage),this.hooks.do("ready",T),this.once(T),this.I()},i.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},i.force=function(t){window.location.assign(t)},i.go=function(t,n,r){var i;if(void 0===n&&(n="barba"),this.F=null,this.transitions.isRunning)this.force(t);else if(!(i="popstate"===n?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(t,!0):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(this.cache.has(t)?this.cache.get(t).target:t,n,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,n,null!=r?r:void 0,i)},i.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function r(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var i=function(){if(n.transitions.hasOnce){var r=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:r,data:t})).then(function(){})}}();return i&&i.then?i.then(r):r()})}catch(t){return Promise.reject(t)}},i.page=function(t,n,i,e){try{var o,u=function(){var t=s.data;return Promise.resolve(s.hooks.do("page",t)).then(function(){var n=function(n,r){try{var i=(u=s.transitions.get(t,{once:!1,self:e}),Promise.resolve(s.transitions.doPage({data:t,page:o,transition:u,wrapper:s.q})).then(function(){s.I()}))}catch(t){return r()}var u;return i&&i.then?i.then(void 0,r):i}(0,function(){0===d.getLevel()&&s.force(t.next.url.href)});if(n&&n.then)return n.then(function(){})})},s=this;if(s.data.next.url=r({href:t},s.url.parse(t)),s.data.trigger=n,s.data.event=i,s.cache.has(t))o=s.cache.update(t,{action:"click"}).request;else{var f=s.request(t,s.timeout,s.onRequestError.bind(s,n),s.cache,s.headers);f.then(function(r){r.url.href!==t&&s.history.add(r.url.href,n,"replace")}),o=s.cache.set(t,f,"click","pending").request}var c=function(){if(s.transitions.shouldWait)return Promise.resolve(g(o,s.data)).then(function(){})}();return Promise.resolve(c&&c.then?c.then(u):u())}catch(t){return Promise.reject(t)}},i.onRequestError=function(t){this.transitions.isRunning=!1;var n=[].slice.call(arguments,1),r=n[0],i=n[1],e=this.cache.getAction(r);return this.cache.delete(r),this.B&&!1===this.B(t,e,r,i)||"click"===e&&this.force(r),!1},i.prefetch=function(t){var n=this;t=this.url.getAbsoluteHref(t),this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(t){n.logger.error(t)}),"prefetch","pending")},i.G=function(){!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},i.J=function(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},i.U=function(t){var n=this,r=this.W(t);if(r){var i=this.url.getAbsoluteHref(this.dom.getHref(r));this.prevent.checkHref(i)||this.cache.has(i)||this.cache.set(i,this.request(i,this.timeout,this.onRequestError.bind(this,r),this.cache,this.headers).catch(function(t){n.logger.error(t)}),"enter","pending")}},i.$=function(t){var n=this.W(t);if(n){if(this.transitions.isRunning&&this.preventRunning)return t.preventDefault(),void t.stopPropagation();this.F=t,this.go(this.dom.getHref(n),n,t)}},i.X=function(t){this.go(this.url.getHref(),"popstate",t)},i.W=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},i.I=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:r({href:t},this.url.parse(t))};this.D={current:n,event:void 0,next:r({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},n(t,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),t}();return new nt});
//# sourceMappingURL=barba.umd.js.map

/* ---------- 01-core.js ---------- */
/* ===== Cinq Septembre — socle =====
   Charge par jsDelivr depuis le depot cinqseptembre-custom-code-webflow.
   Tous les reglages du site sont rassembles ici : c'est le seul endroit a
   modifier pour ajuster une duree, un seuil ou un selecteur. */
window.CS = window.CS || {};

/* Les deux mots du logotype, inlines a la construction depuis src/svg/.
   Partages par le loader et par le logo fixe du collage. */
CS.svg = {
  cinq:      "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 43.5 22\" role=\"img\" aria-label=\"Cinq\">\n<path d=\"M4.65385 17.2253C3.01795 17.2253 1.83333 16.7095 1.1 15.674C0.366667 14.6385 0 13.1436 0 11.1813C0 10.2385 0.11685 9.25934 0.34652 8.23993C0.57619 7.22051 0.914652 6.2293 1.35385 5.26227C1.79304 4.29927 2.32088 3.42894 2.94139 2.65531C3.55788 1.88168 4.25495 1.2652 5.03663 0.801832C5.81429 0.338462 6.66044 0.108791 7.57106 0.108791C8.65092 0.108791 9.63004 0.471429 10.5125 1.1967C10.6656 1.32161 10.722 1.49084 10.6736 1.7044L9.98059 5.20183C9.93223 5.44762 9.81941 5.57253 9.63407 5.57253C9.44872 5.57253 9.35604 5.44762 9.35604 5.20183L9.33187 4.29927C9.29963 3.01795 9.11429 2.10733 8.77582 1.5674C8.43736 1.02747 7.94982 0.757509 7.31722 0.757509C6.68462 0.757509 6.13663 0.999267 5.58059 1.48681C5.02454 1.97436 4.50879 2.62308 4.0293 3.43297C3.54982 4.24286 3.13077 5.13736 2.76813 6.12051C2.40549 7.09963 2.12344 8.08681 1.92198 9.07399C1.72051 10.0612 1.61978 10.9799 1.61978 11.83C1.61978 13.2201 1.83333 14.3524 2.25641 15.2348C2.67949 16.1132 3.38864 16.5564 4.37582 16.5564C4.96007 16.5564 5.48388 16.3429 5.93919 15.9198C6.39451 15.4967 6.8619 14.7674 7.34139 13.7319L7.85311 12.644C7.92967 12.4586 8.04652 12.3659 8.19963 12.3659C8.44542 12.3659 8.53004 12.511 8.45348 12.8051L7.52674 16.4194C7.4663 16.6491 7.34139 16.7901 7.15604 16.8344C6.89414 16.9271 6.51538 17.0158 6.01978 17.1004C5.52418 17.185 5.06886 17.2293 4.65385 17.2293V17.2253Z\" fill=\"currentColor\"/>\n<path d=\"M10.2586 17.0158C10.041 17.0158 9.93223 16.9392 9.93223 16.7861C9.93223 16.6168 10.0853 16.5081 10.3956 16.4637L10.859 16.3952C11.1974 16.3509 11.4352 16.2663 11.5641 16.1535C11.693 16.0366 11.7897 15.819 11.8542 15.4927L15.0051 1.87766C15.0817 1.55531 15.0817 1.33773 15.0051 1.22894C14.9286 1.12015 14.7352 1.03553 14.4249 0.975092L13.9615 0.882418C13.7601 0.834066 13.6593 0.749451 13.6593 0.628571C13.6593 0.443223 13.7963 0.350549 14.0744 0.350549H18.1963C18.4139 0.350549 18.5227 0.427106 18.5227 0.58022C18.5227 0.749451 18.3696 0.858242 18.0593 0.902564L17.596 0.971062C17.2575 1.01538 17.0238 1.1 16.9029 1.21282C16.778 1.32967 16.6773 1.54725 16.6007 1.87363L13.4498 15.4886C13.3894 15.811 13.3934 16.0286 13.4619 16.1374C13.5304 16.2462 13.7198 16.3308 14.03 16.3912L14.4934 16.4839C14.6949 16.5282 14.7956 16.6168 14.7956 16.7377C14.7956 16.9231 14.6586 17.0158 14.3806 17.0158H10.2586Z\" fill=\"currentColor\"/>\n<path d=\"M26.259 17.2253C26.0575 17.2253 25.9286 17.1004 25.8641 16.8546L22.4875 3.05421C22.4714 2.97766 22.4352 2.93736 22.3707 2.93736C22.3062 2.93736 22.2619 2.97766 22.2337 3.05421L19.4777 15.0253C19.3689 15.4564 19.3648 15.7868 19.4656 16.0084C19.5663 16.2341 19.8 16.3751 20.1707 16.4355L20.4487 16.4839C20.6502 16.5 20.7348 16.5927 20.7026 16.7619C20.6542 16.9311 20.5172 17.0158 20.2875 17.0158H16.9755C16.7418 17.0158 16.6491 16.9311 16.6974 16.7619C16.7297 16.5927 16.8465 16.5 17.044 16.4839L17.3703 16.4355C17.7853 16.3751 18.0956 16.23 18.2971 16.0084C18.4985 15.7868 18.6516 15.4564 18.7604 15.0253L21.7945 1.87363C21.8711 1.55128 21.8711 1.3337 21.7945 1.22491C21.7179 1.11612 21.5084 1.0315 21.17 0.971062L20.6582 0.878388C20.4568 0.830037 20.3802 0.741392 20.4286 0.600366C20.4608 0.431136 20.5897 0.34652 20.8234 0.34652H23.0678C23.4546 0.34652 23.6842 0.515751 23.7648 0.854213L26.6821 12.8495C26.7143 12.9582 26.7626 13.0106 26.8311 13.0106C26.8996 13.0106 26.944 12.9582 26.9601 12.8495L29.3897 2.337C29.5147 1.84139 29.5147 1.4989 29.3897 1.30549C29.2648 1.11209 29.0714 0.991209 28.8095 0.946886L28.4147 0.878388C28.2132 0.830037 28.1366 0.741392 28.181 0.600366C28.2132 0.431136 28.3421 0.34652 28.5758 0.34652H31.8879C32.1176 0.34652 32.2183 0.431136 32.1901 0.600366C32.1297 0.769597 32.0048 0.862271 31.8194 0.878388L31.493 0.92674C31.078 0.98718 30.7718 1.11612 30.5784 1.30952C30.385 1.50293 30.2278 1.84542 30.1029 2.34103L26.7908 16.7216C26.7143 17.0601 26.537 17.2293 26.259 17.2293V17.2253Z\" fill=\"currentColor\"/>\n<path d=\"M37.1663 21.996C36.6546 21.996 36.2355 21.8952 35.9051 21.6938C35.5747 21.4923 35.2927 21.2506 35.059 20.9645C34.8293 20.6784 34.6238 20.3883 34.4465 20.0941C34.2692 19.8 34.0919 19.5542 33.9147 19.3527C33.7374 19.1513 33.5238 19.0506 33.278 19.0506C33.0161 19.0506 32.7824 19.1271 32.5729 19.2802C32.3634 19.4333 32.17 19.6106 31.9927 19.8121C31.8154 20.0136 31.626 20.1908 31.4245 20.344C31.2231 20.4971 30.9934 20.5736 30.7315 20.5736C30.3608 20.5736 30.1755 20.3963 30.1755 20.0418C30.1755 19.7799 30.3245 19.522 30.6267 19.2641C30.9289 19.0062 31.4084 18.7967 32.0733 18.6275L34.781 17.4227C34.9341 17.3462 35.0066 17.2696 35.0026 17.193C34.9945 17.1165 34.9139 17.048 34.7608 16.9835C33.959 16.6733 33.3264 16.0487 32.863 15.1059C32.3996 14.163 32.17 12.922 32.17 11.3788C32.17 10.2344 32.3029 9.11832 32.5648 8.02234C32.8267 6.92637 33.1894 5.90293 33.6527 4.95201C34.1161 4.0011 34.652 3.163 35.2604 2.42967C35.8689 1.69634 36.5256 1.12418 37.2267 0.717216C37.9278 0.310256 38.6491 0.104762 39.3905 0.104762C40.5952 0.104762 41.5462 0.596337 42.2513 1.57546C42.9524 2.55458 43.307 4.00916 43.307 5.93919C43.307 7.12784 43.1659 8.29634 42.8799 9.44872C42.5938 10.5971 42.1989 11.6648 41.6993 12.644C41.1996 13.6231 40.6154 14.4733 39.9506 15.1905C39.2857 15.9077 38.5766 16.4436 37.819 16.7982C37.4927 16.9513 37.2026 17.0722 36.9407 17.1568C36.6788 17.2414 36.3766 17.3703 36.0381 17.5396L34.648 18.1883C34.511 18.2487 34.4425 18.3293 34.4506 18.418C34.4586 18.5066 34.5392 18.5872 34.6923 18.6476C35.1073 18.8169 35.4901 19.0385 35.8366 19.3084C36.1832 19.5784 36.5297 19.8121 36.8802 20.0136C37.2267 20.215 37.6015 20.3158 38.0044 20.3158C38.4517 20.3158 38.8465 20.1667 39.185 19.8645C39.5234 19.5623 39.8176 19.0183 40.0634 18.2326C40.1238 18.0311 40.2326 17.9304 40.3857 17.9304C40.5872 17.9304 40.6637 18.0714 40.6194 18.3454C40.4018 19.4414 39.9828 20.3198 39.3582 20.9846C38.7337 21.6495 38.0044 21.9799 37.1703 21.9799L37.1663 21.996ZM36.0341 16.6249C36.6062 16.6249 37.1663 16.3993 37.7143 15.9399C38.2623 15.4846 38.778 14.8601 39.2656 14.0623C39.7531 13.2685 40.1802 12.3498 40.5509 11.3062C40.9216 10.2626 41.2117 9.15458 41.4212 7.98205C41.6308 6.80952 41.7355 5.62088 41.7355 4.41612C41.7355 1.94615 40.97 0.709158 39.4429 0.709158C38.8707 0.709158 38.3106 0.938828 37.7626 1.39414C37.2147 1.84945 36.6989 2.47399 36.2114 3.2718C35.7238 4.06557 35.2967 4.98425 34.926 6.02784C34.5553 7.07143 34.2652 8.17949 34.0557 9.35201C33.8462 10.5245 33.7414 11.7132 33.7414 12.9179C33.7414 15.3879 34.507 16.6249 36.0341 16.6249Z\" fill=\"currentColor\"/>\n</svg>",
  septembre: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 107.58 22\" role=\"img\" aria-label=\"Septembre\">\n<g transform=\"translate(-50.42 0)\">\n<path d=\"M53.7267 17.2253C53.4165 17.2253 53.074 17.193 52.6952 17.1326C52.3165 17.0722 51.9619 16.9956 51.6315 16.9029C51.3011 16.8103 51.0392 16.7095 50.8579 16.6007C50.7491 16.5403 50.6685 16.4718 50.6161 16.4033C50.5637 16.3348 50.5355 16.2139 50.5355 16.0447L50.4187 12.4103C50.4187 12.1 50.5194 11.9469 50.7209 11.9469C50.8901 11.9469 51.007 12.0839 51.0674 12.3619L51.2769 13.2403C51.8007 15.4484 52.7799 16.5524 54.2183 16.5524C54.9919 16.5524 55.6044 16.2945 56.0597 15.7747C56.515 15.259 56.7447 14.5297 56.7447 13.5868C56.7447 12.644 56.507 11.826 56.0396 11.0403C55.5681 10.2546 54.8147 9.47289 53.7831 8.7033C52.6388 7.88535 51.8088 7.0956 51.281 6.33004C50.7571 5.56447 50.4952 4.75055 50.4952 3.88828C50.4952 2.74396 50.8941 1.8293 51.6879 1.14432C52.4817 0.459341 53.4971 0.112821 54.7341 0.112821C55.1974 0.112821 55.6447 0.165201 56.0758 0.273993C56.507 0.382784 56.8615 0.535897 57.1396 0.737363C57.2322 0.797802 57.3048 0.87033 57.3612 0.946886C57.4136 1.02344 57.4418 1.12418 57.4418 1.24908L57.5103 4.74652C57.5103 5.00842 57.4095 5.14139 57.2081 5.14139C57.0711 5.14139 56.9703 5.0326 56.9059 4.81905L56.7447 4.23883C56.4062 3.05018 56.0517 2.17985 55.689 1.63187C55.3264 1.08388 54.8066 0.80989 54.1256 0.80989C53.4447 0.80989 52.933 1.02747 52.5381 1.45861C52.1432 1.88974 51.9458 2.5022 51.9458 3.28791C51.9458 3.95275 52.1634 4.58535 52.5945 5.18571C53.0256 5.78608 53.7832 6.51941 54.863 7.38571C56.0194 8.32857 56.8656 9.23516 57.3974 10.1055C57.9293 10.9799 58.1952 11.9066 58.1952 12.8978C58.1952 13.7641 58.0018 14.5176 57.615 15.1663C57.2282 15.815 56.7004 16.3187 56.0275 16.6813C55.3546 17.044 54.589 17.2253 53.7227 17.2253H53.7267Z\" fill=\"currentColor\"/>\n<path d=\"M60.5806 17.0158C60.3509 17.0158 60.2341 16.9311 60.2341 16.7619C60.2341 16.6249 60.3348 16.5322 60.5363 16.4839L61.0681 16.3912C61.3945 16.3308 61.604 16.2462 61.7048 16.1374C61.8055 16.0286 61.8538 15.815 61.8538 15.4886V1.87363C61.8538 1.55128 61.8015 1.3337 61.7048 1.22491C61.604 1.11612 61.3905 1.0315 61.0681 0.971062L60.5363 0.878388C60.3348 0.830037 60.2341 0.741392 60.2341 0.600366C60.2341 0.431136 60.3509 0.34652 60.5806 0.34652H68.3612C68.7157 0.34652 68.9092 0.52381 68.9414 0.878388L69.1267 4.72234C69.159 4.98425 69.0582 5.11722 68.8245 5.11722C68.6392 5.11722 68.5304 5.01648 68.5022 4.81502L68.3652 3.95678C68.196 2.90513 67.8494 2.13956 67.3216 1.65201C66.7978 1.16447 66.0725 0.922711 65.1458 0.922711C64.5293 0.922711 64.0982 1.01136 63.8604 1.18864C63.6227 1.36593 63.5018 1.68022 63.5018 2.12747V7.70806C63.5018 7.92564 63.6106 8.0304 63.8282 8.0304H64.9846C65.6656 8.0304 66.0806 7.66777 66.2337 6.94249L66.4674 5.78608C66.5278 5.55641 66.6608 5.45568 66.8623 5.48388C67.0315 5.51612 67.1161 5.64506 67.1161 5.87876V11.0886C67.1161 11.3183 67.0315 11.4513 66.8623 11.4835C66.6608 11.5158 66.5319 11.415 66.4674 11.1813L66.2337 10.0451C66.1249 9.50513 65.9758 9.15055 65.7824 8.98132C65.589 8.81209 65.315 8.72747 64.9604 8.72747H63.8242C63.6066 8.72747 63.4978 8.83626 63.4978 9.04982V14.8641C63.4978 15.4201 63.6388 15.8231 63.9249 16.0689C64.211 16.3147 64.7308 16.4396 65.4883 16.4396C66.2458 16.4396 66.9187 16.2421 67.4707 15.8473C68.0187 15.4524 68.4015 14.715 68.615 13.6352L68.893 12.2692C68.9414 12.0678 69.0542 11.967 69.2396 11.967C69.4571 11.967 69.5498 12.1 69.5176 12.3619L69.2839 16.4839C69.2516 16.8385 69.0623 17.0158 68.7037 17.0158H60.5766H60.5806Z\" fill=\"currentColor\"/>\n<path d=\"M72.1125 17.0158C71.8828 17.0158 71.7659 16.9311 71.7659 16.7619C71.7659 16.6249 71.8667 16.5322 72.0681 16.4839L72.6 16.3912C72.9264 16.3308 73.1359 16.2462 73.2366 16.1374C73.3374 16.0286 73.3857 15.815 73.3857 15.4886V1.87363C73.3857 1.55128 73.3333 1.3337 73.2366 1.22491C73.1359 1.11612 72.9223 1.0315 72.6 0.971062L72.0681 0.878388C71.8667 0.830037 71.7659 0.741392 71.7659 0.600366C71.7659 0.431136 71.8828 0.34652 72.1125 0.34652H76.9517C77.8623 0.34652 78.6641 0.543956 79.3612 0.938828C80.0542 1.3337 80.5982 1.87766 80.981 2.5707C81.3678 3.26374 81.5612 4.0696 81.5612 4.98022C81.5612 5.89084 81.3678 6.64029 80.981 7.31722C80.5941 7.99817 80.0623 8.52601 79.3813 8.90476C78.7004 9.28352 77.9147 9.47289 77.0201 9.47289H75.352C75.1344 9.47289 75.0256 9.58168 75.0256 9.79524V15.4C75.0256 15.7223 75.0861 15.944 75.211 16.0608C75.3359 16.1777 75.6139 16.2744 76.0451 16.3509L76.9033 16.4879C77.0725 16.5201 77.1572 16.6048 77.1572 16.7418C77.1572 16.9271 77.0403 17.0198 76.8106 17.0198H72.1084L72.1125 17.0158ZM75.0297 7.61538C75.0297 8.46557 75.5454 8.88864 76.581 8.88864C77.6165 8.88864 78.374 8.53407 78.9542 7.82491C79.5344 7.11575 79.8245 6.14066 79.8245 4.90769C79.8245 3.67473 79.5304 2.66337 78.9462 1.9663C78.3579 1.27326 77.5278 0.922711 76.444 0.922711C75.5011 0.922711 75.0297 1.23297 75.0297 1.84945V7.61538Z\" fill=\"currentColor\"/>\n<path d=\"M86.3762 17.0158C86.1465 17.0158 86.0297 16.9311 86.0297 16.7619C86.0297 16.5927 86.1304 16.5 86.3319 16.4839L87.3755 16.3227C87.6857 16.2744 87.8912 16.1938 88 16.081C88.1088 15.9681 88.1612 15.7465 88.1612 15.4201V1.52308C88.1612 1.30549 88.1128 1.15238 88.0242 1.05971C87.9355 0.967033 87.7381 0.922711 87.444 0.922711C86.8718 0.922711 86.3077 1.1685 85.7517 1.6641C85.1956 2.15971 84.833 2.95348 84.6637 4.04945L84.5469 4.81502C84.5147 5.01648 84.4099 5.11722 84.2205 5.11722C83.9908 5.11722 83.8901 4.98425 83.9183 4.72234L84.1278 0.531868C84.1601 0.177289 84.2971 0 84.5429 0C84.6517 0 84.7524 0.0282051 84.8451 0.0805861C84.9377 0.132967 85.0949 0.193407 85.3205 0.253846C85.5421 0.314286 85.9007 0.34652 86.3963 0.34652H91.5619C92.0575 0.34652 92.4161 0.314286 92.6377 0.253846C92.8593 0.193407 93.0245 0.132967 93.1253 0.0805861C93.226 0.0282051 93.3227 0 93.4154 0C93.6612 0 93.8022 0.177289 93.8304 0.531868L94.0399 4.72234C94.0722 4.98425 93.9714 5.11722 93.7377 5.11722C93.5524 5.11722 93.4436 5.01648 93.4154 4.81502L93.2985 4.04945C93.1454 2.95348 92.7868 2.15971 92.2348 1.6641C91.6788 1.1685 91.1066 0.922711 90.5224 0.922711C90.2282 0.922711 90.0348 0.971062 89.9421 1.05971C89.8495 1.15238 89.8051 1.30549 89.8051 1.52308V15.4161C89.8051 15.7385 89.8615 15.9601 89.9784 16.0769C90.0952 16.1938 90.3007 16.2744 90.5909 16.3187L91.6344 16.4799C91.8359 16.496 91.9366 16.5886 91.9366 16.7579C91.9366 16.9271 91.8198 17.0117 91.5901 17.0117H86.3802L86.3762 17.0158Z\" fill=\"currentColor\"/>\n<path d=\"M96.1513 17.0158C95.9176 17.0158 95.8048 16.9311 95.8048 16.7619C95.8048 16.6249 95.9055 16.5322 96.107 16.4839L96.6388 16.3912C96.9652 16.3308 97.1747 16.2462 97.2755 16.1374C97.3762 16.0286 97.4245 15.815 97.4245 15.4886V1.87363C97.4245 1.55128 97.3722 1.3337 97.2755 1.22491C97.1747 1.11612 96.9612 1.0315 96.6388 0.971062L96.107 0.878388C95.9055 0.830037 95.8048 0.741392 95.8048 0.600366C95.8048 0.431136 95.9216 0.34652 96.1513 0.34652H103.932C104.286 0.34652 104.48 0.52381 104.512 0.878388L104.697 4.72234C104.73 4.98425 104.629 5.11722 104.395 5.11722C104.21 5.11722 104.101 5.01648 104.069 4.81502L103.932 3.95678C103.763 2.90513 103.416 2.13956 102.888 1.65201C102.364 1.16447 101.639 0.922711 100.712 0.922711C100.096 0.922711 99.6648 1.01136 99.4271 1.18864C99.1894 1.36593 99.0685 1.68022 99.0685 2.12747V7.70806C99.0685 7.92564 99.1773 8.0304 99.3908 8.0304H100.547C101.228 8.0304 101.643 7.66777 101.796 6.94249L102.026 5.78608C102.086 5.55641 102.219 5.45568 102.421 5.48388C102.59 5.51612 102.675 5.64506 102.675 5.87876V11.0886C102.675 11.3183 102.59 11.4513 102.421 11.4835C102.219 11.5158 102.09 11.415 102.026 11.1813L101.796 10.0451C101.688 9.50513 101.538 9.15055 101.345 8.98132C101.152 8.81209 100.878 8.72747 100.523 8.72747H99.3868C99.1692 8.72747 99.0645 8.83626 99.0645 9.04982V14.8641C99.0645 15.4201 99.2055 15.8231 99.4916 16.0689C99.7777 16.3147 100.297 16.4396 101.055 16.4396C101.812 16.4396 102.485 16.2421 103.033 15.8473C103.581 15.4524 103.964 14.715 104.178 13.6352L104.456 12.2692C104.504 12.0678 104.617 11.967 104.802 11.967C105.02 11.967 105.112 12.1 105.08 12.3619L104.851 16.4839C104.818 16.8385 104.625 17.0158 104.27 17.0158H96.1432H96.1513Z\" fill=\"currentColor\"/>\n<path d=\"M114.19 16.7861C114.13 16.7861 114.058 16.7619 113.981 16.7176C113.904 16.6733 113.848 16.5725 113.82 16.4154L110.322 2.22015C110.306 2.11136 110.262 2.063 110.185 2.07106C110.109 2.07912 110.069 2.13553 110.069 2.24432L109.605 15.0293C109.589 15.4604 109.658 15.7908 109.815 16.0125C109.968 16.2381 110.238 16.3791 110.625 16.4396L110.927 16.4879C111.128 16.504 111.229 16.5967 111.229 16.7659C111.229 16.9352 111.112 17.0198 110.882 17.0198H107.57C107.341 17.0198 107.224 16.9352 107.224 16.7659C107.224 16.5967 107.325 16.504 107.526 16.4879L107.828 16.4396C108.231 16.3791 108.505 16.2341 108.65 16.0125C108.795 15.7908 108.876 15.4604 108.892 15.0293L109.355 1.87766C109.371 1.55531 109.323 1.33773 109.218 1.22894C109.11 1.12015 108.88 1.03553 108.525 0.975092L107.993 0.882418C107.792 0.834066 107.691 0.745421 107.691 0.604396C107.691 0.435165 107.808 0.350549 108.038 0.350549H110.818C111.297 0.350549 111.588 0.58022 111.696 1.04359L114.497 12.5996C114.529 12.7084 114.577 12.7608 114.646 12.7608C114.714 12.7608 114.759 12.7084 114.775 12.5996L117.692 0.92674C117.785 0.539927 118.03 0.34652 118.433 0.34652H121.165C121.399 0.34652 121.512 0.431136 121.512 0.600366C121.512 0.737363 121.411 0.830037 121.21 0.878388L120.678 0.971062C120.351 1.0315 120.138 1.11612 120.029 1.22491C119.92 1.3337 119.876 1.55128 119.892 1.87363L120.355 15.4886C120.371 15.811 120.424 16.0286 120.516 16.1374C120.609 16.2462 120.819 16.3308 121.141 16.3912L121.673 16.4839C121.874 16.5282 121.975 16.6209 121.975 16.7619C121.975 16.9311 121.858 17.0158 121.629 17.0158H117.438C117.208 17.0158 117.092 16.9311 117.092 16.7619C117.092 16.6249 117.192 16.5322 117.394 16.4839L117.926 16.3912C118.248 16.3308 118.466 16.2462 118.574 16.1374C118.683 16.0286 118.727 15.815 118.711 15.4886L118.316 2.24432C118.316 2.13553 118.28 2.07912 118.212 2.07106C118.143 2.063 118.091 2.10733 118.063 2.2L114.541 16.4194C114.509 16.5725 114.46 16.6733 114.392 16.7216C114.323 16.77 114.255 16.7901 114.195 16.7901L114.19 16.7861Z\" fill=\"currentColor\"/>\n<path d=\"M123.937 17.0158C123.708 17.0158 123.591 16.9311 123.591 16.7619C123.591 16.6249 123.692 16.5322 123.893 16.4839L124.425 16.3912C124.751 16.3308 124.961 16.2462 125.062 16.1374C125.162 16.0286 125.211 15.815 125.211 15.4886V1.87363C125.211 1.55128 125.158 1.3337 125.062 1.22491C124.961 1.11612 124.747 1.0315 124.425 0.971062L123.893 0.878388C123.692 0.830037 123.591 0.741392 123.591 0.600366C123.591 0.431136 123.708 0.34652 123.937 0.34652H128.64C129.409 0.34652 130.098 0.507692 130.703 0.834066C131.303 1.15641 131.778 1.59963 132.125 2.15568C132.471 2.71172 132.645 3.34432 132.645 4.05348C132.645 4.76264 132.439 5.39121 132.032 5.98755C131.621 6.58388 131.033 7.07949 130.259 7.48242C130.167 7.52674 130.122 7.59121 130.122 7.66777C130.122 7.74432 130.175 7.80073 130.284 7.82894C131.335 8.18352 132.145 8.75165 132.717 9.5293C133.289 10.311 133.575 11.2297 133.575 12.2974C133.575 13.2081 133.366 14.022 132.951 14.7392C132.536 15.4564 131.96 16.0165 131.226 16.4194C130.493 16.8223 129.663 17.0198 128.736 17.0198H123.941L123.937 17.0158ZM128.084 7.49853C128.901 7.49853 129.586 7.18022 130.134 6.53956C130.682 5.8989 130.956 5.1011 130.956 4.14212C130.956 3.18315 130.694 2.40952 130.171 1.81319C129.647 1.22088 128.95 0.922711 128.088 0.922711C127.27 0.922711 126.859 1.23297 126.859 1.84945V6.22527C126.859 6.67253 126.955 6.9989 127.149 7.19634C127.342 7.3978 127.652 7.49853 128.088 7.49853H128.084ZM128.43 16.4396C129.433 16.4396 130.251 16.0568 130.884 15.2952C131.516 14.5337 131.835 13.5103 131.835 12.2249C131.835 10.9396 131.512 9.93223 130.872 9.19084C130.231 8.44945 129.369 8.07875 128.289 8.07875C127.33 8.07875 126.855 8.45751 126.855 9.21502V14.844C126.855 15.9077 127.378 16.4436 128.43 16.4436V16.4396Z\" fill=\"currentColor\"/>\n<path d=\"M145.498 17.2253C144.156 17.2253 143.298 16.3469 142.927 14.5861L142.396 12.0154C142.226 11.1813 142.037 10.5487 141.827 10.1176C141.618 9.68645 141.332 9.39231 140.969 9.23919C140.607 9.08608 140.107 9.00952 139.474 9.00952C139.257 9.00952 139.088 9.06593 138.963 9.18278C138.838 9.29963 138.777 9.44066 138.777 9.60989V15.4C138.777 15.7223 138.838 15.944 138.963 16.0608C139.088 16.1777 139.366 16.2744 139.797 16.3509L140.655 16.4879C140.824 16.5201 140.909 16.6048 140.909 16.7418C140.909 16.9271 140.792 17.0198 140.562 17.0198H135.86C135.626 17.0198 135.514 16.9352 135.514 16.7659C135.514 16.6289 135.614 16.5363 135.816 16.4879L136.348 16.3952C136.674 16.3348 136.884 16.2502 136.984 16.1414C137.085 16.0326 137.133 15.819 137.133 15.4927V1.87363C137.133 1.55128 137.081 1.3337 136.984 1.22491C136.884 1.11612 136.67 1.0315 136.348 0.971062L135.816 0.878388C135.614 0.830037 135.514 0.741392 135.514 0.600366C135.514 0.431136 135.63 0.34652 135.86 0.34652H140.562C141.473 0.34652 142.283 0.52381 142.996 0.878388C143.705 1.23297 144.261 1.72454 144.664 2.34908C145.067 2.97363 145.264 3.69487 145.264 4.51282C145.264 5.48388 144.97 6.36227 144.386 7.13993C143.798 7.92161 143.056 8.4696 142.162 8.79597C142.053 8.8282 141.997 8.87656 141.989 8.94505C141.981 9.01355 142.033 9.07399 142.138 9.11831C142.633 9.34798 143.02 9.67436 143.306 10.0894C143.592 10.5044 143.814 11.0604 143.967 11.7575L144.475 14.1187C144.644 14.9205 144.845 15.4927 145.075 15.8311C145.309 16.1696 145.599 16.3388 145.953 16.3388C146.078 16.3388 146.187 16.3187 146.288 16.2824C146.389 16.2421 146.514 16.1696 146.671 16.0608C146.796 15.9842 146.908 15.9641 147.017 16.0044C147.126 16.0447 147.178 16.1253 147.178 16.2462C147.178 16.5081 147.009 16.7377 146.667 16.9311C146.328 17.1245 145.933 17.2212 145.486 17.2212L145.498 17.2253ZM140.333 8.42527C141.38 8.42527 142.178 8.07472 142.718 7.37363C143.258 6.67253 143.528 5.7337 143.528 4.56117C143.528 3.38864 143.214 2.52637 142.589 1.88571C141.964 1.24505 141.102 0.92674 140.006 0.92674C139.188 0.92674 138.777 1.237 138.777 1.85348V7.15604C138.777 8.00623 139.293 8.4293 140.329 8.4293L140.333 8.42527Z\" fill=\"currentColor\"/>\n<path d=\"M148.508 17.0158C148.278 17.0158 148.162 16.9311 148.162 16.7619C148.162 16.6249 148.262 16.5322 148.464 16.4839L148.996 16.3912C149.322 16.3308 149.531 16.2462 149.632 16.1374C149.733 16.0286 149.781 15.815 149.781 15.4886V1.87363C149.781 1.55128 149.729 1.3337 149.632 1.22491C149.531 1.11612 149.318 1.0315 148.996 0.971062L148.464 0.878388C148.262 0.830037 148.162 0.741392 148.162 0.600366C148.162 0.431136 148.278 0.34652 148.508 0.34652H156.289C156.643 0.34652 156.837 0.52381 156.869 0.878388L157.054 4.72234C157.086 4.98425 156.986 5.11722 156.752 5.11722C156.567 5.11722 156.458 5.01648 156.43 4.81502L156.293 3.95678C156.123 2.90513 155.777 2.13956 155.249 1.65201C154.725 1.16447 154 0.922711 153.073 0.922711C152.457 0.922711 152.026 1.01136 151.788 1.18864C151.55 1.36593 151.429 1.68022 151.429 2.12747V7.70806C151.429 7.92564 151.538 8.0304 151.756 8.0304H152.912C153.593 8.0304 154.008 7.66777 154.161 6.94249L154.395 5.78608C154.455 5.55641 154.588 5.45568 154.79 5.48388C154.959 5.51612 155.044 5.64506 155.044 5.87876V11.0886C155.044 11.3183 154.959 11.4513 154.79 11.4835C154.588 11.5158 154.459 11.415 154.395 11.1813L154.161 10.0451C154.052 9.50513 153.903 9.15055 153.71 8.98132C153.516 8.81209 153.242 8.72747 152.888 8.72747H151.752C151.534 8.72747 151.425 8.83626 151.425 9.04982V14.8641C151.425 15.4201 151.566 15.8231 151.852 16.0689C152.138 16.3147 152.658 16.4396 153.416 16.4396C154.173 16.4396 154.846 16.2421 155.398 15.8473C155.946 15.4524 156.329 14.715 156.542 13.6352L156.821 12.2692C156.869 12.0678 156.982 11.967 157.167 11.967C157.385 11.967 157.477 12.1 157.445 12.3619L157.211 16.4839C157.179 16.8385 156.99 17.0158 156.631 17.0158H148.504H148.508Z\" fill=\"currentColor\"/>\n</g>\n</svg>",
  /* Mots de la roulette du loader, traces dans la police du logotype
     (tools/tracer-mots.py) : meme echelle, meme ligne de base que CINQ. */
  un:        "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"16.876 0 26.624 22\" role=\"img\" aria-label=\"Un\" fill=\"currentColor\">\n<path transform=\"translate(15.223 17.02) scale(0.02317)\" d=\"M225 9Q171 9 133 -16.5Q95 -42 79.5 -87.5Q64 -133 78 -192L185 -654Q190 -675 185 -682Q180 -689 160 -693L140 -697Q127 -700 127 -708Q127 -720 145 -720H325Q339 -720 339 -710Q339 -699 325 -697L297 -693Q276 -690 267.5 -682Q259 -674 254 -653L147 -191Q129 -115 157.5 -73Q186 -31 246 -31Q311 -31 351 -73Q391 -115 408 -191L510 -633Q523 -689 490 -693L468 -696Q454 -698 454 -708Q454 -714 460 -717Q466 -720 473 -720H617Q630 -720 630 -710Q630 -700 614 -697L590 -693Q555 -687 542 -634L440 -192Q419 -101 364 -46Q309 9 225 9ZM956 9Q943 9 939 -7L793 -603Q792 -608 788 -608Q784 -608 782 -603L663 -86Q656 -58 662.5 -43.5Q669 -29 693 -25L705 -23Q718 -22 716 -11Q713 0 698 0H555Q540 0 543 -11Q545 -22 558 -23L572 -25Q599 -29 612 -43.5Q625 -58 632 -86L763 -654Q768 -675 763 -682Q758 -689 736 -693L714 -697Q701 -700 704 -709Q706 -720 721 -720H818Q843 -720 848 -698L974 -180Q976 -173 980.5 -173Q985 -173 986 -180L1091 -634Q1099 -666 1091 -678.5Q1083 -691 1066 -694L1049 -697Q1036 -700 1039 -709Q1041 -720 1056 -720H1199Q1214 -720 1212 -709Q1208 -698 1196 -697L1182 -695Q1155 -691 1142.5 -678.5Q1130 -666 1122 -634L979 -13Q974 9 956 9Z\"/>\n</svg>",
  deux:      "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-9.487 0 52.987 22\" role=\"img\" aria-label=\"Deux\" fill=\"currentColor\">\n<path transform=\"translate(-8.653 17.02) scale(0.02317)\" d=\"M-22 0Q-36 0 -36 -10Q-36 -21 -16 -24L4 -27Q26 -30 34.5 -37.5Q43 -45 47 -66L183 -654Q188 -675 183 -682Q178 -689 158 -693L138 -697Q125 -700 125 -708Q125 -720 143 -720H344Q430 -720 480.5 -656.5Q531 -593 531 -468Q531 -376 502 -291.5Q473 -207 424 -141.5Q375 -76 312.5 -38Q250 0 182 0ZM187 -26Q244 -26 294 -68Q344 -110 382 -182.5Q420 -255 441.5 -346Q463 -437 463 -534Q463 -614 430 -654Q397 -694 338 -694Q263 -694 246 -621L126 -99Q117 -59 133.5 -42.5Q150 -26 187 -26ZM549 0Q535 0 535 -10Q535 -21 555 -24L575 -27Q597 -30 605.5 -37.5Q614 -45 618 -66L754 -654Q759 -675 754 -682Q749 -689 729 -693L709 -697Q696 -700 696 -708Q696 -720 714 -720H1048Q1074 -720 1069 -697L1038 -531Q1035 -514 1022 -514Q1008 -514 1010 -527L1013 -562Q1018 -613 1004.5 -642Q991 -671 964.5 -683Q938 -695 903 -695Q863 -695 845 -683.5Q827 -672 820 -643L765 -402Q762 -388 776 -388H827Q871 -388 891 -435L913 -485Q918 -498 929 -498Q935 -498 938.5 -493.5Q942 -489 940 -481L888 -256Q883 -239 871 -239Q859 -239 859 -252L860 -301Q861 -336 851.5 -347Q842 -358 819 -358H769Q754 -358 751 -344L693 -93Q685 -57 700 -41Q715 -25 764 -25Q794 -25 823.5 -34.5Q853 -44 879.5 -71Q906 -98 928 -149L952 -205Q957 -218 968 -218Q983 -218 978 -201L927 -23Q921 0 897 0ZM1295 9Q1241 9 1203 -16.5Q1165 -42 1149.5 -87.5Q1134 -133 1148 -192L1255 -654Q1260 -675 1255 -682Q1250 -689 1230 -693L1210 -697Q1197 -700 1197 -708Q1197 -720 1215 -720H1395Q1409 -720 1409 -710Q1409 -699 1395 -697L1367 -693Q1346 -690 1337.5 -682Q1329 -674 1324 -653L1217 -191Q1199 -115 1227.5 -73Q1256 -31 1316 -31Q1381 -31 1421 -73Q1461 -115 1478 -191L1580 -633Q1593 -689 1560 -693L1538 -696Q1524 -698 1524 -708Q1524 -714 1530 -717Q1536 -720 1543 -720H1687Q1700 -720 1700 -710Q1700 -700 1684 -697L1660 -693Q1625 -687 1612 -634L1510 -192Q1489 -101 1434 -46Q1379 9 1295 9ZM1603 0Q1594 0 1591 -3.5Q1588 -7 1588 -11Q1588 -22 1606 -25L1622 -28Q1656 -34 1678 -47.5Q1700 -61 1719 -91L1874 -329Q1882 -341 1886 -352.5Q1890 -364 1886 -383L1828 -653Q1824 -676 1814 -684Q1804 -692 1791 -694L1773 -697Q1757 -700 1760 -710Q1762 -720 1779 -720H1952Q1970 -720 1968 -710Q1965 -700 1948 -697L1928 -694Q1910 -691 1902 -682Q1894 -673 1898 -653L1946 -435Q1947 -431 1950.5 -430Q1954 -429 1958 -434L2095 -643Q2109 -665 2109.5 -675.5Q2110 -686 2092 -690L2066 -696Q2049 -700 2052 -710Q2054 -720 2072 -720H2227Q2246 -720 2242 -708Q2240 -698 2224 -695L2208 -692Q2182 -687 2161.5 -673Q2141 -659 2121 -629L1975 -407Q1966 -394 1963 -380.5Q1960 -367 1965 -344L2025 -67Q2030 -43 2040.5 -36Q2051 -29 2062 -27L2081 -24Q2094 -23 2094 -12Q2094 0 2074 0H1899Q1884 0 1884 -11Q1884 -21 1903 -24L1923 -27Q1941 -30 1950 -39Q1959 -48 1955 -67L1904 -301Q1903 -307 1899 -307.5Q1895 -308 1891 -303L1746 -77Q1732 -55 1731.5 -44.5Q1731 -34 1749 -30L1776 -24Q1789 -21 1789 -12Q1789 0 1770 0Z\"/>\n</svg>",
  trois:     "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-10.372 0 53.872 22\" role=\"img\" aria-label=\"Trois\" fill=\"currentColor\">\n<path transform=\"translate(-11.554 17.02) scale(0.02317)\" d=\"M65 0Q51 0 51 -10Q51 -20 67 -23L109 -30Q129 -33 139 -40.5Q149 -48 153 -69L292 -669Q295 -683 289.5 -689Q284 -695 265 -695Q231 -695 190.5 -667.5Q150 -640 118 -565L102 -527Q97 -514 85 -514Q71 -514 76 -531L126 -712Q132 -735 148 -735Q157 -735 162.5 -731.5Q168 -728 181 -724Q194 -720 226 -720H449Q481 -720 496.5 -724Q512 -728 519.5 -731.5Q527 -735 533 -735Q550 -735 545 -712L513 -531Q510 -514 496 -514Q483 -514 485 -527L487 -552Q493 -626 468 -660.5Q443 -695 398 -695Q379 -695 371.5 -689Q364 -683 361 -669L222 -69Q217 -48 223.5 -40.5Q230 -33 249 -30L296 -23Q307 -22 307 -12Q307 0 291 0ZM908 9Q866 9 839.5 -21Q813 -51 814 -105L815 -216Q816 -270 809 -298Q802 -326 783 -336Q764 -346 727 -346Q705 -346 694.5 -338Q684 -330 680 -313L622 -70Q617 -49 623 -41Q629 -33 654 -29L698 -23Q712 -22 712 -12Q712 0 696 0H484Q470 0 470 -10Q470 -21 490 -24L510 -27Q532 -30 540.5 -37.5Q549 -45 553 -66L689 -654Q694 -675 689 -682Q684 -689 664 -693L644 -697Q631 -700 631 -708Q631 -720 649 -720H852Q911 -720 950 -699Q989 -678 1008.5 -643Q1028 -608 1028 -566Q1028 -513 1001 -470Q974 -427 930.5 -397.5Q887 -368 837 -354Q831 -353 830.5 -348.5Q830 -344 836 -341Q864 -326 874 -299Q884 -272 884 -227V-125Q884 -70 896 -49.5Q908 -29 929 -29Q937 -29 943 -31.5Q949 -34 959 -41Q967 -48 973.5 -45Q980 -42 980 -34Q980 -20 959 -5.5Q938 9 908 9ZM762 -371Q812 -371 856 -398Q900 -425 927.5 -471Q955 -517 955 -574Q955 -630 927.5 -662.5Q900 -695 832 -695Q768 -695 758 -655L705 -426Q692 -371 762 -371ZM1275 9Q1197 9 1151.5 -55Q1106 -119 1106 -243Q1106 -317 1123 -388Q1140 -459 1170 -520.5Q1200 -582 1239.5 -629.5Q1279 -677 1324.5 -703.5Q1370 -730 1418 -730Q1496 -730 1541.5 -666.5Q1587 -603 1587 -478Q1587 -404 1570 -333Q1553 -262 1523 -200.5Q1493 -139 1453.5 -91.5Q1414 -44 1368.5 -17.5Q1323 9 1275 9ZM1273 -17Q1310 -17 1345.5 -46.5Q1381 -76 1412.5 -127.5Q1444 -179 1468 -246.5Q1492 -314 1505.5 -390Q1519 -466 1519 -544Q1519 -704 1420 -704Q1383 -704 1347.5 -674.5Q1312 -645 1280.5 -593.5Q1249 -542 1225 -474.5Q1201 -407 1187.5 -331Q1174 -255 1174 -177Q1174 -17 1273 -17ZM1605 0Q1591 0 1591 -10Q1591 -21 1611 -24L1631 -27Q1653 -30 1661.5 -37.5Q1670 -45 1674 -66L1810 -654Q1815 -675 1810 -682Q1805 -689 1785 -693L1765 -697Q1752 -700 1752 -708Q1752 -720 1770 -720H1948Q1962 -720 1962 -710Q1962 -699 1942 -696L1922 -693Q1900 -690 1892 -682.5Q1884 -675 1879 -654L1743 -66Q1739 -45 1743.5 -38Q1748 -31 1768 -27L1788 -23Q1801 -20 1801 -12Q1801 0 1783 0ZM2095 9Q2067 9 2035.5 3Q2004 -3 1976.5 -13.5Q1949 -24 1933 -38Q1928 -43 1926.5 -48Q1925 -53 1927 -63L1955 -220Q1958 -238 1971 -238Q1983 -238 1983 -218L1984 -179Q1986 -95 2013 -58Q2040 -21 2101 -21Q2157 -21 2194 -61.5Q2231 -102 2231 -170Q2231 -214 2207 -262Q2183 -310 2140 -358Q2089 -415 2064.5 -462Q2040 -509 2040 -561Q2040 -602 2060 -640.5Q2080 -679 2120.5 -704.5Q2161 -730 2224 -730Q2311 -730 2357 -691Q2371 -680 2367 -658L2339 -512Q2336 -497 2325 -497Q2314 -497 2312 -514L2311 -535Q2307 -616 2288.5 -658.5Q2270 -701 2215 -701Q2175 -701 2151 -683Q2127 -665 2116 -638.5Q2105 -612 2105 -586Q2105 -557 2113 -530.5Q2121 -504 2140.5 -474.5Q2160 -445 2194 -403Q2242 -346 2269 -294Q2296 -242 2296 -193Q2296 -134 2269.5 -88.5Q2243 -43 2198 -17Q2153 9 2095 9Z\"/>\n</svg>",
  quatre:    "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-30.389 0 73.889 22\" role=\"img\" aria-label=\"Quatre\" fill=\"currentColor\">\n<path transform=\"translate(-29.648 17.02) scale(0.02317)\" d=\"M270 215Q237 215 215.5 202Q194 189 179 170.5Q164 152 152.5 133Q141 114 129.5 101Q118 88 102 88Q85 88 71.5 98Q58 108 46.5 121Q35 134 22 144Q9 154 -8 154Q-32 154 -32 131Q-32 114 -12.5 97.5Q7 81 50 70L167 18Q177 13 176.5 8Q176 3 166 -1Q114 -21 84 -82Q54 -143 54 -243Q54 -317 71 -388Q88 -459 118 -520.5Q148 -582 187.5 -629.5Q227 -677 272.5 -703.5Q318 -730 366 -730Q444 -730 489.5 -666.5Q535 -603 535 -478Q535 -401 516.5 -326.5Q498 -252 465.5 -188.5Q433 -125 390 -78.5Q347 -32 298 -9Q277 1 260 6.5Q243 12 221 23L161 51Q152 55 152.5 61Q153 67 163 71Q190 82 212.5 99.5Q235 117 257.5 130Q280 143 306 143Q335 143 357 123.5Q379 104 395 53Q399 40 409 40Q422 40 419 58Q405 129 364.5 172Q324 215 270 215ZM221 -17Q258 -17 293.5 -46.5Q329 -76 360.5 -127.5Q392 -179 416 -246.5Q440 -314 453.5 -390Q467 -466 467 -544Q467 -704 368 -704Q331 -704 295.5 -674.5Q260 -645 228.5 -593.5Q197 -542 173 -474.5Q149 -407 135.5 -331Q122 -255 122 -177Q122 -17 221 -17ZM803 9Q749 9 711 -16.5Q673 -42 657.5 -87.5Q642 -133 656 -192L763 -654Q768 -675 763 -682Q758 -689 738 -693L718 -697Q705 -700 705 -708Q705 -720 723 -720H903Q917 -720 917 -710Q917 -699 903 -697L875 -693Q854 -690 845.5 -682Q837 -674 832 -653L725 -191Q707 -115 735.5 -73Q764 -31 824 -31Q889 -31 929 -73Q969 -115 986 -191L1088 -633Q1101 -689 1068 -693L1046 -696Q1032 -698 1032 -708Q1032 -714 1038 -717Q1044 -720 1051 -720H1195Q1208 -720 1208 -710Q1208 -700 1192 -697L1168 -693Q1133 -687 1120 -634L1018 -192Q997 -101 942 -46Q887 9 803 9ZM1072 0Q1060 0 1060 -10Q1060 -19 1076 -23L1092 -26Q1112 -30 1126.5 -45.5Q1141 -61 1154 -89L1453 -714Q1458 -724 1463 -727Q1468 -730 1472 -730Q1477 -730 1480.5 -727Q1484 -724 1484 -714L1495 -80Q1496 -52 1502 -41.5Q1508 -31 1527 -26L1540 -23Q1552 -20 1552 -11Q1552 0 1535 0H1370Q1357 0 1357 -10Q1357 -21 1377 -23L1397 -25Q1414 -27 1420.5 -36Q1427 -45 1427 -67L1425 -222Q1425 -248 1398 -248H1291Q1265 -248 1252 -222L1187 -88Q1160 -31 1205 -25L1219 -23Q1234 -21 1234 -11Q1234 0 1217 0ZM1295 -278H1407Q1424 -278 1424 -295L1422 -568H1417L1286 -295Q1282 -288 1285 -283Q1288 -278 1295 -278ZM1651 0Q1637 0 1637 -10Q1637 -20 1653 -23L1695 -30Q1715 -33 1725 -40.5Q1735 -48 1739 -69L1878 -669Q1881 -683 1875.5 -689Q1870 -695 1851 -695Q1817 -695 1776.5 -667.5Q1736 -640 1704 -565L1688 -527Q1683 -514 1671 -514Q1657 -514 1662 -531L1712 -712Q1718 -735 1734 -735Q1743 -735 1748.5 -731.5Q1754 -728 1767 -724Q1780 -720 1812 -720H2035Q2067 -720 2082.5 -724Q2098 -728 2105.5 -731.5Q2113 -735 2119 -735Q2136 -735 2131 -712L2099 -531Q2096 -514 2082 -514Q2069 -514 2071 -527L2073 -552Q2079 -626 2054 -660.5Q2029 -695 1984 -695Q1965 -695 1957.5 -689Q1950 -683 1947 -669L1808 -69Q1803 -48 1809.5 -40.5Q1816 -33 1835 -30L1882 -23Q1893 -22 1893 -12Q1893 0 1877 0ZM2494 9Q2452 9 2425.5 -21Q2399 -51 2400 -105L2401 -216Q2402 -270 2395 -298Q2388 -326 2369 -336Q2350 -346 2313 -346Q2291 -346 2280.5 -338Q2270 -330 2266 -313L2208 -70Q2203 -49 2209 -41Q2215 -33 2240 -29L2284 -23Q2298 -22 2298 -12Q2298 0 2282 0H2070Q2056 0 2056 -10Q2056 -21 2076 -24L2096 -27Q2118 -30 2126.5 -37.5Q2135 -45 2139 -66L2275 -654Q2280 -675 2275 -682Q2270 -689 2250 -693L2230 -697Q2217 -700 2217 -708Q2217 -720 2235 -720H2438Q2497 -720 2536 -699Q2575 -678 2594.5 -643Q2614 -608 2614 -566Q2614 -513 2587 -470Q2560 -427 2516.5 -397.5Q2473 -368 2423 -354Q2417 -353 2416.5 -348.5Q2416 -344 2422 -341Q2450 -326 2460 -299Q2470 -272 2470 -227V-125Q2470 -70 2482 -49.5Q2494 -29 2515 -29Q2523 -29 2529 -31.5Q2535 -34 2545 -41Q2553 -48 2559.5 -45Q2566 -42 2566 -34Q2566 -20 2545 -5.5Q2524 9 2494 9ZM2348 -371Q2398 -371 2442 -398Q2486 -425 2513.5 -471Q2541 -517 2541 -574Q2541 -630 2513.5 -662.5Q2486 -695 2418 -695Q2354 -695 2344 -655L2291 -426Q2278 -371 2348 -371ZM2628 0Q2614 0 2614 -10Q2614 -21 2634 -24L2654 -27Q2676 -30 2684.5 -37.5Q2693 -45 2697 -66L2833 -654Q2838 -675 2833 -682Q2828 -689 2808 -693L2788 -697Q2775 -700 2775 -708Q2775 -720 2793 -720H3127Q3153 -720 3148 -697L3117 -531Q3114 -514 3101 -514Q3087 -514 3089 -527L3092 -562Q3097 -613 3083.5 -642Q3070 -671 3043.5 -683Q3017 -695 2982 -695Q2942 -695 2924 -683.5Q2906 -672 2899 -643L2844 -402Q2841 -388 2855 -388H2906Q2950 -388 2970 -435L2992 -485Q2997 -498 3008 -498Q3014 -498 3017.5 -493.5Q3021 -489 3019 -481L2967 -256Q2962 -239 2950 -239Q2938 -239 2938 -252L2939 -301Q2940 -336 2930.5 -347Q2921 -358 2898 -358H2848Q2833 -358 2830 -344L2772 -93Q2764 -57 2779 -41Q2794 -25 2843 -25Q2873 -25 2902.5 -34.5Q2932 -44 2958.5 -71Q2985 -98 3007 -149L3031 -205Q3036 -218 3047 -218Q3062 -218 3057 -201L3006 -23Q3000 0 2976 0Z\"/>\n</svg>"
};

CS.config = {
  /* ---- Loader : roulette UN, DEUX, TROIS, QUATRE -> CINQ ----
     A la place de CINQ, les mots defilent vers le haut l'un apres l'autre, comme
     un compteur, et s'arretent sur CINQ : le logotype est alors forme, a la
     place exacte du logo de l'accueil, et le voile s'efface. */
  loader: {
    actif: true,
    pages: ['accueil'],   // pages ou le loader apparait ; [] = partout, null = nulle part
    uneFoisParSession: false,   // false = a chaque chargement de la page (pas aux retours par transition)
    mots: ['un', 'deux', 'trois', 'quatre', 'cinq'],   // cles de CS.svg, dans l'ordre ; le dernier reste
    apparition: 400,      // ms — le logotype apparait, sur le premier mot
    pause: 250,           // ms — temps d'arret avant le premier cran
    pas: 380,             // ms — duree d'un cran de roulette
    pasPause: 90,         // ms — arret sur chaque mot
    pasDernier: 520,      // ms — le dernier cran, celui qui amene CINQ, un peu plus pose
    repos: 300,           // ms — temps d'arret une fois le logo forme
    sortie: 500           // ms — disparition du voile
  },


  /* ---- Collage en defilement infini (accueil + page Projets) ----
     Le motif et les 11 emplacements sont repris au pixel de la maquette
     (groupe de 1206 x 3249 px). Les coordonnees sont celles du motif, pas de
     l'ecran : le JS les convertit en pourcentages. */
  collage: {
    pages: ['accueil', 'projets'],
    conteneur: '.cs-collage',      // cree si absent
    /* Le moteur lit la Collection List deja presente sur la page d'accueil
       (ancienne mosaique). Rien a recreer dans le Designer : il suffit que la
       liste soit liee a « Projets », l'image au champ « Image mosaique 1 »,
       le lien a la page du projet, et que le lien porte un attribut
       data-nom contenant le Name. */
    source: '.canvas-content, .collection-list-projet, .cs-source',
    item: '.canvas-item__link, .item-projet, .cs-source__item',
    nom: '.projet-name-cat, [data-cs-nom]',   // element portant le nom, a defaut de data-nom
    cadre: '.infinite-canvas, .container-projets',  // bloc d'origine a masquer
    logoPages: ['accueil'],        // logo fixe au centre : accueil seulement

    motif: { w: 1206, h: 3249 },
    /* Espace vertical ajoute entre deux repetitions. Sans lui, la derniere
       tuile du motif (en bas a gauche) et la premiere de la repetition
       suivante partagent exactement le bord a y 3249 et se touchent sur 73 px.
       160 px correspond a l'ecart le plus serre a l'interieur du motif : le
       raccord n'est donc pas plus serre qu'ailleurs. */
    margeRaccord: 160,
    partLargeur: 0.8375,           // 1206 / 1440 : le motif occupe 83,75 % de la largeur
    largeurMax: 1600,              // px — au-dela, les images cesseraient de grandir

    vitesse: 1,                    // molette
    vitesseTactile: 1.6,           // glissement au doigt
    souplesse: 0.1,                // lissage du defilement : 0,05 tres doux, 0,2 sec
    seuilClic: 8,                  // px — au-dela, le geste est un glissement, pas un clic

    /* Deformation des images au defilement (voir 03-deformation.js).
       L'intensite suit la vitesse : nulle a l'arret, pleine a vitessePleine.
       Elle monte vite et retombe lentement, pour que l'effet « s'attarde ». */
    deformation: {
      pages: ['accueil'],          // ajouter 'projets' pour l'avoir aussi sur la grille des projets
      force: 0.032,                // etirement maximal aux bords haut et bas : 3,2 % (bybang.co : 4,86 %)
      vitessePleine: 800,          // px/s
      montee: 25,                  // ms
      descente: 175,               // ms
      largeurMin: 981,             // px — desactive en dessous (tablette, mobile)
      zoomSurvol: 1.04             // meme zoom au survol que la version sans WebGL
    },

    cases: [
      { x: 352, y:    0, w: 154, h: 214 },
      { x: 769, y:  214, w: 343, h: 229 },
      { x: 157, y:  399, w: 340, h: 439 },
      { x: 977, y:  604, w: 229, h: 321 },
      { x:  84, y: 1150, w: 172, h: 226 },
      { x: 887, y: 1319, w: 319, h: 440 },
      { x: 256, y: 1698, w: 301, h: 394 },
      { x: 780, y: 2040, w: 163, h: 227 },
      { x:   0, y: 2253, w: 325, h: 411 },
      { x: 965, y: 2664, w: 164, h: 227 },
      { x: 166, y: 2957, w: 259, h: 292 }
    ]
  },

  /* ---- Page Projets : vue liste + bascule grille / liste ----
     Bande horizontale de grandes cartes, en defilement infini, calee en bas
     de l'ecran. Mesures reprises de la maquette (cadre de 1440 x 1024). */
  liste: {
    pages: ['projets'],
    vueParDefaut: 'grille',        // 'grille' ou 'liste'
    memoriser: true,               // retient la vue le temps de la session
    carte: { w: 436, h: 628 },     // proportions d'une carte
    partHauteur: 0.6133,           // 628 / 1024 : hauteur de carte / hauteur d'ecran
    ecart: 10,                     // px entre deux cartes
    bas: 14,                       // px sous les cartes
    decalage: -0.28,               // la premiere carte depasse a gauche de 28 % de sa largeur
    vitesse: 1,
    vitesseTactile: 1.6,
    souplesse: 0.1,
    seuilClic: 8,
    libelles: { versListe: 'Vue liste', versGrille: 'Vue grille', curseur: 'D\u00e9couvrir' }
  },

  /* ---- Page Contact ---- */
  contact: {
    pages: ['contact'],
    retour: '/',                   // ou aller a la fermeture si l'on n'arrive pas du site
    libelleFermer: 'Fermer'
  },

  /* ---- Page Archive : mosaique infinie + focus ----
     Trame reguliere reprise de la maquette (cadre de 1440 px de large) :
     tuiles de 130 x 180, une tous les 276 px en largeur et 323 px en hauteur.
     Tout est mis a l'echelle de la largeur d'ecran, dans les bornes ci-dessous. */
  archive: {
    pages: ['archives'],
    source: '.cs-archive-source',          // Collection List « Bibliotheque » du Designer
    item: '.cs-archive-item',
    champs: { nom: '.cs-archive-item__nom', type: '.cs-archive-item__type', annee: '.cs-archive-item__annee' },

    base: 1440,                    // largeur de la maquette
    tuile: { w: 130, h: 180 },
    pas: { x: 276, y: 323 },
    origine: { x: 241, y: 255 },   // position d'une tuile de reference a l'ouverture
    echelleMin: 0.75,              // petit ecran : les tuiles ne descendent pas sous 97 px de large
    echelleMax: 1.35,              // tres grand ecran
    melange: 7,                    // decalage d'une rangee a l'autre dans l'ordre des references

    souplesse: 0.1,                // lissage (molette, elan)
    vitesse: 1,                    // molette
    elan: 260,                     // ms de vitesse conservee au relachement
    seuilClic: 8,                  // px — au-dela, le geste est un deplacement, pas un clic

    focus: {
      w: 344, h: 477,              // proportions de l'image agrandie
      duree: 600,                  // ms — agrandissement / retour
      delaiSuivant: 450            // ms mini entre deux references (fleches du clavier)
    },
    libelleFermer: 'Fermer'
  },

  /* ---- Flottement a la souris ----
     Sur les mosaiques, chaque image se decale de quelques pixels a l'oppose du
     pointeur. Chacune a sa « profondeur » : c'est l'ecart entre elles qui donne
     l'impression de flotter, pas le deplacement lui-meme. Souris uniquement,
     et rien si l'utilisateur prefere moins de mouvement. */
  flottement: {
    actif: true,
    pages: ['accueil', 'projets', 'archives'],
    amplitude: 12,                 // px — decalage maximal, pointeur au bord de l'ecran
    souplesse: 0.06,               // amorti : 0,03 tres flottant, 0,15 nerveux
    profondeurs: [0.55, 1, 0.8, 0.45, 0.7, 1, 0.6, 0.9, 0.5, 0.85, 0.65]   // part de l'amplitude, image par image
  },

  /* ---- Transitions de page (Barba) ---- */
  transitions: {
    actif: true,
    sortie: 300,                   // ms — fondu de la page qui part
    entree: 450,                   // ms — fondu de la page qui arrive
    /* Contact : le panneau noir descend du haut comme un rideau, et remonte
       quand on quitte la page. Meme duree et meme courbe que la descente de
       la barre de navigation (01-base.css), pour qu'ils bougent ensemble. */
    rideau: 900,                   // ms
    logo: 200,                     // ms — le logo central de l'accueil s'efface avant le rideau
    /* Pages chargees normalement, sans transition : les pages de projet
       embarquent encore leur propre script, que Barba n'executerait pas. */
    exclure: [/^\/projets\/.+/]
  }
};



/* ---- Utilitaires ---- */
CS.reduit = function () {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

CS.sourisFine = function () {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
};

CS.attendre = function (ms) {
  return new Promise(function (r) { setTimeout(r, ms); });
};

CS.pret = function (fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn, { once: true });
  } else {
    fn();
  }
};

/* Quelle page affiche-t-on ? Repose sur le slug de l'URL, pas sur le balisage,
   pour rester vrai meme si la structure Webflow change. */
CS.quellePage = function (chemin) {
  var p = (chemin || '').replace(/\/+$/, '');
  if (p === '' || p === '/index') return 'accueil';
  if (p.indexOf('/projets/') === 0) return 'projet';
  if (p === '/projets') return 'projets';
  if (p === '/archive' || p === '/archives' || p === '/bibliotheque') return 'archives';
  if (p === '/contact') return 'contact';
  if (p === '/approche' || p === '/a-propos') return 'approche';
  return p.replace(/^\//, '').replace(/\//g, '-') || 'autre';
};
CS.page = CS.quellePage(location.pathname);

/* ===== Cycle de vie des pages =====
   Avec Barba, les pages se remplacent sans rechargement : un module ne peut
   plus se contenter de demarrer une fois. Chaque module se declare avec
   CS.module(nom, pages, init). A chaque arrivee sur une page, CS.entrer()
   appelle init(ctx) pour les modules concernes ; au depart, CS.sortir()
   defait tout ce qu'ils ont branche.

   ctx.conteneur     element de la page (conteneur Barba) : tout ce qu'un
                     module cree y est ajoute, et disparait donc avec la page
   ctx.ecoute(...)   addEventListener retire automatiquement au depart
   ctx.aLaSortie(fn) nettoyage libre (arreter une boucle, retirer une classe) */
CS._modules = [];
/* Une file de pages, et non une seule : pendant certaines transitions (le
   rideau de Contact) la page qui arrive s'installe alors que celle qui part
   est encore a l'ecran. CS.sortir() demonte toujours la plus ancienne. */
CS._pages = [];

CS.module = function (nom, pages, init) {
  CS._modules.push({ nom: nom, pages: pages, init: init });
};

CS.entrer = function (conteneur) {
  CS.page = CS.quellePage(location.pathname);
  var h = document.documentElement;
  h.className = h.className.replace(/(^|\s)cs-page-\S+/g, ' ').replace(/\s+/g, ' ').trim();
  h.classList.add('cs-page-' + CS.page);

  var nettoyages = [];
  CS._pages.push(nettoyages);
  var ctx = {
    page: CS.page,
    conteneur: conteneur || document.body,
    ecoute: function (cible, type, fn, options) {
      cible.addEventListener(type, fn, options);
      nettoyages.push(function () { cible.removeEventListener(type, fn, options); });
    },
    aLaSortie: function (fn) { nettoyages.push(fn); }
  };
  CS._modules.forEach(function (m) {
    if (m.pages && m.pages.indexOf(CS.page) === -1) return;
    try { m.init(ctx); } catch (e) { if (window.console) console.error('[CS] ' + m.nom, e); }
  });
};

CS.sortir = function () {
  var n = CS._pages.shift() || [];
  n.forEach(function (fn) { try { fn(); } catch (e) {} });
};

/* ---- Flottement a la souris ----
   Suit le pointeur avec un amorti et appelle appliquer(x, y) tant que la valeur
   bouge ; x et y vont de -1 (bord gauche / haut) a 1 (bord droit / bas).
   Le module appelant decide quoi deplacer. Rend null si l'effet ne s'applique
   pas (pas de souris, mouvement reduit, page non concernee). */
CS.flottement = function (ctx, appliquer) {
  var F = CS.config.flottement;
  if (!F || !F.actif || F.pages.indexOf(ctx.page) === -1) return null;
  if (!CS.sourisFine() || CS.reduit()) return null;
  var vx = 0, vy = 0, x = 0, y = 0, enCours = false, vivant = true;
  function boucle() {
    enCours = false;
    if (!vivant) return;
    x += (vx - x) * F.souplesse;
    y += (vy - y) * F.souplesse;
    var pose = Math.abs(vx - x) < 0.0005 && Math.abs(vy - y) < 0.0005;
    if (pose) { x = vx; y = vy; }
    appliquer(x, y);
    if (!pose) lancer();
  }
  function lancer() { if (!enCours) { enCours = true; requestAnimationFrame(boucle); } }
  ctx.ecoute(window, 'pointermove', function (e) {
    if (e.pointerType !== 'mouse') return;
    vx = e.clientX / window.innerWidth * 2 - 1;
    vy = e.clientY / window.innerHeight * 2 - 1;
    lancer();
  }, { passive: true });
  /* le pointeur quitte la fenetre : tout revient doucement a sa place */
  ctx.ecoute(document.documentElement, 'pointerleave', function () { vx = 0; vy = 0; lancer(); });
  ctx.aLaSortie(function () { vivant = false; });
  return true;
};

/* ---- Curseur personnalise (souris uniquement) ----
   Une pastille + un mot qui suivent le pointeur au-dessus d'une zone.
   Le transform de suivi est pose sur l'element lui-meme, a chaque mouvement :
   le curseur doit coller au pointeur, sans lissage. L'apparition est jouee
   sur son contenu, pour ne pas se melanger au suivi.
   estDessus(e) dit si le curseur doit etre visible a cet endroit. */
CS.ICONES = {
  rond:  '<circle cx="8" cy="8" r="7" stroke-opacity=".35"/><path d="M8 1a7 7 0 0 1 7 7"/>',
  croix: '<path d="M5.5 5.5l5 5M10.5 5.5l-5 5"/>'
};
CS.curseur = function (ctx, zone, texte, icone, estDessus) {
  if (!CS.sourisFine()) return null;
  var c = document.createElement('div');
  c.className = 'cs-curseur';
  c.setAttribute('aria-hidden', 'true');
  c.innerHTML =
    '<span class="cs-curseur__int">' +
      '<svg class="cs-curseur__rond" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round">' +
        CS.ICONES[icone] +
      '</svg>' +
      '<span class="cs-curseur__texte"></span>' +
    '</span>';
  c.querySelector('.cs-curseur__texte').textContent = texte;
  ctx.conteneur.appendChild(c);
  ctx.ecoute(zone, 'pointermove', function (e) {
    if (e.pointerType !== 'mouse') return;
    c.style.transform = 'translate3d(' + e.clientX + 'px,' + e.clientY + 'px,0)';
    c.classList.toggle('is-visible', !!estDessus(e));
  });
  ctx.ecoute(zone, 'pointerleave', function () { c.classList.remove('is-visible'); });
  return c;
};

/* ---------- 03-deformation.js ---------- */
/* ===== Deformation des images au defilement (WebGL) =====
   Tout ce qui approche du haut ou du bas de l'ecran est etire horizontalement
   depuis l'axe central, selon un profil en arc de cercle : nul au milieu de
   l'ecran, maximal aux bords. La deformation est calculee dans l'espace de
   l'ECRAN, pas dans chaque image : les bords verticaux des images se courbent,
   elles semblent s'enrouler vers soi. Appliquee image par image (un simple
   scaleX), elle garderait quatre bords droits — c'est la raison du WebGL.

   Ce module ne sait que dessiner : on lui donne a chaque image la liste des
   rectangles a l'ecran et l'intensite, il rend la main. Le moteur de collage
   (05-collage.js) decide de l'intensite a partir de la vitesse de defilement.

   CS.creerDeformation(canvas, auChargement) -> { taille, dessiner, detruire }
   ou null si WebGL n'est pas disponible (le DOM reste alors affiche tel quel). */
CS.creerDeformation = function (canvas, auChargement) {
  var gl = null;
  try {
    gl = canvas.getContext('webgl', { alpha: true, antialias: true, premultipliedAlpha: false, powerPreference: 'low-power' });
  } catch (e) {}
  if (!gl) return null;

  var VS =
    'attribute vec2 aP; varying vec2 vEcran;' +
    'void main(){ vEcran = aP; gl_Position = vec4(aP.x*2.0-1.0, 1.0-aP.y*2.0, 0.0, 1.0); }';

  var FS =
    'precision highp float;' +
    'uniform sampler2D uTexture; uniform vec2 uEcran; uniform vec4 uCase; uniform vec2 uImage;' +
    'uniform float uForce; uniform float uZoom; varying vec2 vEcran;' +
    'void main(){' +
    /* 1. courbure de l'ecran : on resserre l'abscisse lue, donc l'image affichee s'elargit */
    '  vec2 e = vEcran;' +
    '  float cy = e.y*2.0-1.0;' +
    '  float bord = 1.0 - sqrt(max(0.0, 1.0 - cy*cy));' +
    '  e.x = 0.5 + (e.x-0.5)*(1.0 - bord*uForce);' +
    /* 2. position dans la case, bords adoucis sur moins d'un pixel */
    '  vec2 l = (e*uEcran - uCase.xy)/uCase.zw;' +
    '  vec2 d = min(l, 1.0-l)*uCase.zw;' +
    '  float a = smoothstep(0.0, 0.75, min(d.x, d.y));' +
    '  if (a <= 0.0) discard;' +
    /* 3. meme cadrage que object-fit: cover, zoom de survol compris */
    '  vec2 uv = 0.5 + (l-0.5)/uZoom;' +
    '  float rc = uCase.z/max(uCase.w, 1.0);' +
    '  float ri = uImage.x/max(uImage.y, 1.0);' +
    '  if (ri > rc) uv.x = 0.5 + (uv.x-0.5)*rc/ri; else uv.y = 0.5 + (uv.y-0.5)*ri/rc;' +
    '  gl_FragColor = vec4(texture2D(uTexture, clamp(uv, 0.0, 1.0)).rgb, a);' +
    '}';

  function shader(type, source) {
    var s = gl.createShader(type);
    gl.shaderSource(s, source); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { gl.deleteShader(s); return null; }
    return s;
  }
  var vs = shader(gl.VERTEX_SHADER, VS), fs = shader(gl.FRAGMENT_SHADER, FS);
  if (!vs || !fs) return null;
  var prog = gl.createProgram();
  gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
  gl.useProgram(prog);

  var tampon = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, tampon);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), gl.STATIC_DRAW);
  var aP = gl.getAttribLocation(prog, 'aP');
  gl.enableVertexAttribArray(aP);
  gl.vertexAttribPointer(aP, 2, gl.FLOAT, false, 0, 0);

  var U = {};
  ['uTexture', 'uEcran', 'uCase', 'uImage', 'uForce', 'uZoom'].forEach(function (n) { U[n] = gl.getUniformLocation(prog, n); });
  gl.uniform1i(U.uTexture, 0);
  gl.clearColor(0, 0, 0, 0);
  gl.enable(gl.BLEND);
  gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

  /* ---- Textures, une par adresse d'image ---- */
  var textures = {}, vivant = true, enCours = 0, largeur = 1, hauteur = 1, densite = 1;
  function texture(url) {
    var t = textures[url];
    if (t) return t.pret ? t : null;
    t = textures[url] = { pret: false };
    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.decoding = 'async';
    enCours++;
    img.onload = function () {
      enCours--;
      if (!vivant) return;
      try {
        var tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        if (gl.getError() !== gl.NO_ERROR) throw new Error('texture');
        t.tex = tex; t.w = img.naturalWidth; t.h = img.naturalHeight; t.pret = true;
        if (auChargement) auChargement();
      } catch (e) { t.echec = true; }       // image non lisible : la case garde son <img>
    };
    img.onerror = function () { enCours--; t.echec = true; };
    img.src = url;
    return null;
  }

  return {
    enAttente: function () { return enCours > 0; },

    taille: function (l, h) {
      densite = Math.min(window.devicePixelRatio || 1, 2);
      largeur = l; hauteur = h;
      var w = Math.max(1, Math.round(l * densite)), hh = Math.max(1, Math.round(h * densite));
      if (canvas.width !== w || canvas.height !== hh) { canvas.width = w; canvas.height = hh; }
      gl.viewport(0, 0, w, hh);
      gl.uniform2f(U.uEcran, l, h);
    },

    /* cases : [{ cle, url, x, y, w, h, zoom }] en pixels CSS. Rend le tableau des
       cles effectivement dessinees (texture prete). */
    dessiner: function (cases, force) {
      var dessinees = [];
      if (!vivant) return dessinees;
      gl.disable(gl.SCISSOR_TEST);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.SCISSOR_TEST);
      gl.uniform1f(U.uForce, force);
      /* marge laterale : de combien une image peut deborder de sa case une fois etiree */
      var marge = largeur * 0.5 * force / (1 - force) + 2;
      for (var i = 0; i < cases.length; i++) {
        var c = cases[i], t = texture(c.url);
        if (!t) continue;
        var x0 = Math.max(0, Math.floor((c.x - marge) * densite));
        var x1 = Math.min(canvas.width, Math.ceil((c.x + c.w + marge) * densite));
        var y0 = Math.max(0, Math.floor((hauteur - c.y - c.h) * densite));
        var y1 = Math.min(canvas.height, Math.ceil((hauteur - c.y) * densite));
        if (x1 <= x0 || y1 <= y0) continue;
        gl.scissor(x0, y0, x1 - x0, y1 - y0);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, t.tex);
        gl.uniform4f(U.uCase, c.x, c.y, c.w, c.h);
        gl.uniform2f(U.uImage, t.w, t.h);
        gl.uniform1f(U.uZoom, c.zoom || 1);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        dessinees.push(c.cle);
      }
      return dessinees;
    },

    detruire: function () {
      vivant = false;
      Object.keys(textures).forEach(function (k) { if (textures[k].tex) gl.deleteTexture(textures[k].tex); });
      gl.deleteBuffer(tampon); gl.deleteProgram(prog);
      var perte = gl.getExtension('WEBGL_lose_context');
      if (perte) perte.loseContext();
    }
  };
};

/* ---------- 04-loader.js ---------- */
/* ===== Loader =====
   Le logotype apparait avec, a la place de CINQ, une roulette : UN, DEUX,
   TROIS, QUATRE defilent vers le haut comme un compteur et s'arretent sur
   CINQ. Le logo est alors forme — meme taille, meme position que celui de
   l'accueil — et le voile s'efface : le logo semble rester en place.

   Le balisage est injecte ici : rien a creer dans le Designer.
   Joue a chaque chargement reel de la page ; pas quand on y revient par une
   transition Barba (le script n'est alors pas relance).
   Reglages : CS.config.loader (01-core.js). */
(function () {
  var C = CS.config.loader;

  /* Le Head a pu masquer la page en prevision du loader : quoi qu'il arrive
     ensuite, c'est a nous de la redonner a voir. */
  function rendreLaPage() {
    document.documentElement.classList.remove('cs-loader-actif');
  }

  if (!C.actif) { rendreLaPage(); return; }
  if (!C.pages || C.pages.indexOf(CS.page) === -1) { rendreLaPage(); return; }

  var CLE = 'cs-loader-vu';
  if (C.uneFoisParSession) {
    try {
      if (sessionStorage.getItem(CLE)) { rendreLaPage(); return; }
      sessionStorage.setItem(CLE, '1');
    } catch (e) { /* navigation privee : le loader passera a chaque fois */ }
  }

  document.documentElement.classList.add('cs-loader-actif');

  /* La roulette : une bande de mots empiles, vue a travers la case de CINQ.
     Chaque mot est cale a droite (contre SEPTEMBRE, qui ne bouge pas) et garde
     sa largeur propre, lue dans son viewBox : 43,5 = largeur de CINQ. */
  var mots = (C.mots || ['cinq']).filter(function (m) { return CS.svg[m]; });
  var LARGEUR_CINQ = 43.5;
  var bandeHTML = mots.map(function (m, k) {
    var vb = /viewBox="[\d.\-]+ [\d.\-]+ ([\d.]+)/.exec(CS.svg[m]);
    var largeur = vb ? (parseFloat(vb[1]) / LARGEUR_CINQ * 100) : 100;
    return '<span class="cs-loader__chiffre" style="--cs-k:' + k + ';width:' + largeur.toFixed(2) + '%">' + CS.svg[m] + '</span>';
  }).join('');

  var voile = document.createElement('div');
  voile.className = 'cs-loader';
  voile.setAttribute('role', 'presentation');
  voile.style.setProperty('--cs-loader-apparition', C.apparition + 'ms');
  voile.style.setProperty('--cs-loader-sortie', C.sortie + 'ms');
  voile.innerHTML =
    '<div class="cs-loader__logo">' +
      '<span class="cs-loader__mot cs-loader__mot--cinq"><span class="cs-loader__bande">' + bandeHTML + '</span></span>' +
      '<span class="cs-loader__mot cs-loader__mot--septembre">' + CS.svg.septembre + '</span>' +
    '</div>';
  var bande = voile.querySelector('.cs-loader__bande');

  function poser() {
    (document.body || document.documentElement).appendChild(voile);
    jouer();
  }

  function cran(i, duree) {
    bande.style.setProperty('--cs-loader-pas', duree + 'ms');
    bande.style.setProperty('--cs-i', i);
  }

  async function jouer() {
    var dernier = mots.length - 1;

    if (CS.reduit()) {
      /* Mouvement reduit : pas de roulette, le logo est deja forme, simple fondu */
      cran(dernier, 0);
      await CS.attendre(20);
      voile.setAttribute('data-visible', '');
      await CS.attendre(C.apparition + C.repos);
    } else {
      await CS.attendre(20);                    // laisse le navigateur peindre l'etat de depart
      voile.setAttribute('data-visible', '');   // le logotype apparait, sur le premier mot
      await CS.attendre(C.apparition + C.pause);
      for (var i = 1; i <= dernier; i++) {
        var d = i === dernier ? C.pasDernier : C.pas;
        cran(i, d);
        await CS.attendre(d + (i === dernier ? 0 : C.pasPause));
      }
      await CS.attendre(C.repos);
    }

    voile.setAttribute('data-fini', '');        // le voile s'efface
    rendreLaPage();
    document.dispatchEvent(new CustomEvent('cs:loader-fini'));

    await CS.attendre(C.sortie);
    if (voile.parentNode) voile.parentNode.removeChild(voile);
  }

  CS.pret(poser);
})();

/* ---------- 05-collage.js ---------- */
/* ===== Collage en defilement infini =====
   Accueil et page Projets partagent ce moteur. Il lit une liste CMS posee dans
   Webflow, repartit les projets dans les 11 emplacements du motif de la
   maquette, et fait defiler ce motif sans fin.

   Pourquoi pas la barre de defilement du navigateur : une boucle vraiment
   infinie demanderait soit une page demesurement haute, soit des sauts de
   position visibles. On ecoute donc la molette et le toucher, et on deplace la
   piste nous-memes, ce qui permet de recycler les repetitions hors de l'ecran.

   Reglages : CS.config.collage (01-core.js). */
CS.module('collage', CS.config.collage.pages, function (ctx) {
  var C = CS.config.collage;
  var racine, piste, motifs = [], projets = [];
  var cible = 0, courant = 0, anime = false, vivant = true;
  var hMotif = 0;   // hauteur d'une repetition
  var hPas = 0;     // distance entre deux repetitions = hMotif + marge de raccord

  CS.collage = { actif: false, racine: null, projets: [] };

  /* ---- Lecture de la liste CMS ---- */
  var src = ctx.conteneur.querySelector(C.source) || document.querySelector(C.source);
  if (src) {
    projets = Array.prototype.map.call(src.querySelectorAll(C.item), function (el) {
      var img = el.querySelector('img');
      return {
        href: el.getAttribute('href') || el.dataset.href || '#',
        src: img ? (img.currentSrc || img.src) : '',
        srcset: img ? img.getAttribute('srcset') : null,
        alt: img ? (img.getAttribute('alt') || '') : '',
        nom: (el.dataset.nom || el.getAttribute('aria-label') ||
              ((C.nom && el.querySelector(C.nom)) || {}).textContent || '').trim()
      };
    }).filter(function (p) { return p.src; });
  }
  if (!projets.length) return;   // pas de liste CMS : on ne fait rien

  /* La liste CMS d'origine ne sert qu'a fournir les donnees : on la retire de
     l'affichage, ainsi que l'ancien cadre de mosaique s'il est encore la. */
  var cadre = (C.cadre && src.closest(C.cadre)) || src;
  cadre.style.display = 'none';
  cadre.setAttribute('aria-hidden', 'true');
  Array.prototype.forEach.call(ctx.conteneur.querySelectorAll('.canvas-zoom'), function (e) { e.style.display = 'none'; });

  /* ---- Construction d'une repetition du motif ---- */
  function construireMotif(rang) {
    var m = document.createElement('div');
    m.className = 'cs-collage__motif';
    m.dataset.rang = rang;
    C.cases.forEach(function (c) {
      var a = document.createElement('a');
      a.className = 'cs-collage__case';
      a.style.left   = (c.x / C.motif.w * 100) + '%';
      a.style.top    = (c.y / C.motif.h * 100) + '%';
      a.style.width  = (c.w / C.motif.w * 100) + '%';
      a.style.height = (c.h / C.motif.h * 100) + '%';
      a.innerHTML = '<img class="cs-collage__img" alt=""><span class="cs-collage__nom"></span>';
      m.appendChild(a);
    });
    piste.appendChild(m);
    return m;
  }

  /* Remplit une repetition avec le bloc de projets correspondant a son rang.
     Le decalage par rang evite que deux repetitions voisines se ressemblent. */
  function remplir(m) {
    var rang = +m.dataset.rang;
    var n = projets.length;
    Array.prototype.forEach.call(m.children, function (a, i) {
      var p = projets[(((rang * C.cases.length + i) % n) + n) % n];
      var img = a.querySelector('img');
      if (img.getAttribute('src') !== p.src) {
        img.src = p.src;
        if (p.srcset) img.srcset = p.srcset;
        img.alt = p.alt || p.nom;
      }
      a.href = p.href;
      a._src = p.src;              // lu par le calque de deformation
      a.querySelector('.cs-collage__nom').textContent = p.nom;
    });
  }

  /* ---- Mise en page ---- */
  function mesurer() {
    var large = Math.min(window.innerWidth * C.partLargeur, C.largeurMax);
    racine.style.setProperty('--cs-motif-w', large + 'px');
    hMotif = large * (C.motif.h / C.motif.w);
    hPas = hMotif + large * (C.margeRaccord / C.motif.w);

    var besoin = Math.ceil(window.innerHeight / hPas) + 2;
    while (motifs.length < besoin) motifs.push(construireMotif(motifs.length));
    motifs.forEach(remplir);
    lMotif = large;
    xMotif = (window.innerWidth - large) / 2;
    majDeformation();
    placer();
    demanderRendu();
  }

  /* Recycle les repetitions sorties de l'ecran : celle qui passe au-dessus
     repart en bas avec le bloc de projets suivant. */
  function placer() {
    var vh = window.innerHeight, k = motifs.length;
    motifs.forEach(function (m) {
      var rang = +m.dataset.rang;
      var y = rang * hPas - courant;
      if (y + hMotif < -hPas) { rang += k; m.dataset.rang = rang; remplir(m); y = rang * hPas - courant; }
      else if (y > vh + hPas) { rang -= k; m.dataset.rang = rang; remplir(m); y = rang * hPas - courant; }
      m._y = y;
      m.style.transform = 'translate3d(0,' + y.toFixed(1) + 'px,0)';
    });
  }

  function boucle() {
    if (!vivant) return;
    courant += (cible - courant) * C.souplesse;
    if (Math.abs(cible - courant) < 0.1) { courant = cible; anime = false; }
    placer();
    if (anime) requestAnimationFrame(boucle);
  }
  function relancer() { if (!anime) { anime = true; requestAnimationFrame(boucle); } demanderRendu(); }

  /* ---- Deformation au defilement ----
     Le calque WebGL est glisse SOUS les cases : les liens, le nom au survol et
     le clic restent ceux du DOM. Une case dont la texture est prete recoit
     data-gl, qui rend son <img> invisible ; les autres gardent leur <img>.
     Sans WebGL, sur petit ecran ou si l'utilisateur prefere moins de
     mouvement, rien de tout cela n'est cree. */
  var D = C.deformation, gl = null, toile = null, glActif = false;
  var lMotif = 0, xMotif = 0;
  var enRendu = false, tPrec = 0, yPrec = 0, intensite = 0, survol = null;

  function majDeformation() {
    if (!gl) return;
    glActif = window.innerWidth >= D.largeurMin;
    toile.style.display = glActif ? '' : 'none';
    if (glActif) gl.taille(window.innerWidth, window.innerHeight);
    else liberer();
  }
  function liberer() {
    Array.prototype.forEach.call(racine.querySelectorAll('[data-gl]'), function (a) { a.removeAttribute('data-gl'); });
  }

  function rendre(t) {
    enRendu = false;
    if (!vivant || !glActif) return;
    var dt = Math.min(100, Math.max(1, t - (tPrec || t)));
    tPrec = t;

    /* intensite : vitesse de defilement lissee, montee rapide, descente lente */
    var vitesse = Math.abs(courant - yPrec) / dt * 1000;
    yPrec = courant;
    var viseeI = anime ? Math.min(vitesse / D.vitessePleine, 1) : 0;
    intensite += (viseeI - intensite) * (1 - Math.exp(-dt / (viseeI > intensite ? D.montee : D.descente)));
    if (intensite < 0.002 && viseeI === 0) intensite = 0;

    var vh = window.innerHeight, liste = [], zoomEnCours = false;
    var kz = 1 - Math.pow(0.86, dt / 16.67);
    motifs.forEach(function (m) {
      Array.prototype.forEach.call(m.children, function (a, i) {
        var c = C.cases[i];
        var y = m._y + c.y / C.motif.h * hMotif, h = c.h / C.motif.h * hMotif;
        var vz = a === survol ? D.zoomSurvol : 1;
        a._zoom = a._zoom || 1;
        if (Math.abs(vz - a._zoom) > 0.0005) { a._zoom += (vz - a._zoom) * kz; zoomEnCours = true; } else a._zoom = vz;
        if (y + h < 0 || y > vh) { if (a.hasAttribute('data-gl')) a.removeAttribute('data-gl'); return; }
        liste.push({ cle: a, url: a._src, x: xMotif + c.x / C.motif.w * lMotif + (a._fx || 0), y: y + (a._fy || 0), w: c.w / C.motif.w * lMotif, h: h, zoom: a._zoom });
      });
    });

    var dessinees = gl.dessiner(liste, D.force * intensite);
    liste.forEach(function (o) {
      var pret = dessinees.indexOf(o.cle) !== -1;
      if (pret !== o.cle.hasAttribute('data-gl')) { if (pret) o.cle.setAttribute('data-gl', ''); else o.cle.removeAttribute('data-gl'); }
    });

    if (anime || intensite > 0 || zoomEnCours || gl.enAttente()) demanderRendu();
    else tPrec = 0;
  }
  function demanderRendu() {
    if (!glActif || enRendu) return;
    enRendu = true;
    requestAnimationFrame(rendre);
  }

  /* ---- Mise en place ---- */
  racine = document.createElement('div');
  racine.className = 'cs-collage';
  piste = document.createElement('div');
  piste.className = 'cs-collage__piste';
  racine.appendChild(piste);
  ctx.conteneur.appendChild(racine);

  if (D && D.pages.indexOf(ctx.page) !== -1 && !CS.reduit() && CS.creerDeformation) {
    toile = document.createElement('canvas');
    toile.className = 'cs-collage__gl';
    toile.setAttribute('aria-hidden', 'true');
    gl = CS.creerDeformation(toile, function () { demanderRendu(); });
    if (gl) {
      racine.insertBefore(toile, piste);
      /* contexte perdu (pilote, mise en veille) : on rend la main aux <img> */
      ctx.ecoute(toile, 'webglcontextlost', function (e) { e.preventDefault(); glActif = false; liberer(); toile.style.display = 'none'; });
      ctx.ecoute(racine, 'pointerover', function (e) {
        if (e.pointerType !== 'mouse') return;
        survol = e.target.closest ? e.target.closest('.cs-collage__case') : null;
        demanderRendu();
      });
      ctx.ecoute(racine, 'pointerleave', function () { survol = null; demanderRendu(); });
    } else toile = null;
  }

  document.documentElement.classList.add('cs-sans-defilement');
  ctx.aLaSortie(function () {
    vivant = false;
    if (gl) gl.detruire();
    document.documentElement.classList.remove('cs-sans-defilement');
    CS.collage = null;
  });
  mesurer();

  /* ---- Entrees ---- */
  ctx.ecoute(racine, 'wheel', function (e) {
    e.preventDefault();
    cible += e.deltaY * (e.deltaMode === 1 ? 16 : 1) * C.vitesse;
    relancer();
  }, { passive: false });

  var tireDepuis = null, deplace = 0;
  ctx.ecoute(racine, 'pointerdown', function (e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    tireDepuis = e.clientY; deplace = 0;
    racine.classList.add('is-tire');
  });
  ctx.ecoute(racine, 'pointermove', function (e) {
    if (tireDepuis === null) return;
    var d = e.clientY - tireDepuis;
    deplace += Math.abs(d);
    cible -= d * C.vitesseTactile;
    tireDepuis = e.clientY;
    relancer();
  });
  function relacher() { tireDepuis = null; racine.classList.remove('is-tire'); }
  ctx.ecoute(racine, 'pointerup', relacher);
  ctx.ecoute(racine, 'pointercancel', relacher);
  /* Un glissement n'ouvre pas le projet : seul un vrai clic compte. */
  ctx.ecoute(racine, 'click', function (e) {
    if (deplace > C.seuilClic) { e.preventDefault(); e.stopPropagation(); }
    deplace = 0;
  }, true);

  ctx.ecoute(window, 'keydown', function (e) {
    if (!CS.collage || !CS.collage.actif) return;
    var pas = { ArrowUp: -120, ArrowDown: 120, PageUp: -600, PageDown: 600 }[e.key];
    if (pas === undefined) return;
    e.preventDefault(); cible += pas; relancer();
  });

  var t;
  ctx.ecoute(window, 'resize', function () {
    clearTimeout(t); t = setTimeout(mesurer, 150);
  }, { passive: true });

  /* ---- Flottement a la souris ----
     Le decalage est pose sur chaque case (le lien), donc la zone de clic et le
     nom au survol suivent ; le calque WebGL lit le meme decalage. */
  var FL = CS.config.flottement;
  CS.flottement(ctx, function (fx, fy) {
    motifs.forEach(function (m) {
      Array.prototype.forEach.call(m.children, function (a, i) {
        var p = FL.profondeurs[i % FL.profondeurs.length];
        a._fx = -fx * FL.amplitude * p;
        a._fy = -fy * FL.amplitude * p;
        a.style.transform = 'translate3d(' + a._fx.toFixed(2) + 'px,' + a._fy.toFixed(2) + 'px,0)';
      });
    });
    demanderRendu();
  });

  /* ---- Logo fixe au centre, en difference (accueil) ---- */
  if (C.logoPages && C.logoPages.indexOf(ctx.page) !== -1) {
    var d = document.createElement('div');
    d.className = 'cs-collage-logo';
    d.innerHTML =
      '<span class="cs-collage-logo__mot cs-collage-logo__mot--cinq">' + CS.svg.cinq + '</span>' +
      '<span class="cs-collage-logo__mot cs-collage-logo__mot--septembre">' + CS.svg.septembre + '</span>';
    ctx.conteneur.appendChild(d);
  }

  /* Expose aux autres modules (vue liste de la page Projets).
     actif = false quand une autre vue a la main : le clavier ne pilote plus la grille. */
  CS.collage = { actif: true, racine: racine, projets: projets };
});

/* ---------- 06-liste.js ---------- */
/* ===== Page Projets : vue liste et bascule grille / liste =====
   La vue liste est une bande horizontale de grandes cartes, en defilement
   infini, alimentee par les memes projets que la grille (lus une seule fois
   par le moteur de collage, declare juste avant). Un bouton fixe a droite
   passe d'une vue a l'autre.

   Les cartes sont posees une a une par transform : la bande n'a pas de largeur
   reelle, chaque carte reboucle de l'autre cote quand elle sort de l'ecran.

   Reglages : CS.config.liste (01-core.js). */
CS.module('liste', CS.config.liste.pages, function (ctx) {
  var L = CS.config.liste;
  var projets = (CS.collage && CS.collage.projets) || [];
  if (!projets.length) return;

  var racine, cartes = [], bouton, curseur;
  var cible = 0, courant = 0, anime = false, vivant = true;
  var largeur = 0, pas = 0, total = 0;
  var vue = 'grille';
  var CLE = 'cs-vue-projets';

  /* ---- Memoire de la vue (le temps de la session) ---- */
  function lireVue() {
    if (L.memoriser) {
      try { var v = sessionStorage.getItem(CLE); if (v === 'grille' || v === 'liste') return v; } catch (e) {}
    }
    return L.vueParDefaut === 'liste' ? 'liste' : 'grille';
  }
  function retenirVue(v) {
    if (!L.memoriser) return;
    try { sessionStorage.setItem(CLE, v); } catch (e) {}
  }

  /* ---- Construction ---- */
  function creerCarte(p) {
    var a = document.createElement('a');
    a.className = 'cs-liste__carte';
    a.href = p.href;
    a.draggable = false;
    a.innerHTML =
      '<span class="cs-liste__int">' +
        '<span class="cs-liste__nom"></span>' +
        '<span class="cs-liste__cadre"><img class="cs-liste__img" alt="" loading="lazy" draggable="false"></span>' +
      '</span>';
    a.querySelector('.cs-liste__nom').textContent = p.nom;
    var img = a.querySelector('img');
    img.src = p.src;
    if (p.srcset) img.srcset = p.srcset;
    img.alt = p.alt || p.nom;
    racine.appendChild(a);
    return a;
  }

  /* Assez de cartes pour couvrir l'ecran plus une de marge de chaque cote :
     avec peu de projets, la liste est repetee. */
  function mesurer() {
    var h = Math.round(window.innerHeight * L.partHauteur);
    largeur = Math.round(h * L.carte.w / L.carte.h);
    pas = largeur + L.ecart;
    racine.style.setProperty('--cs-carte-w', largeur + 'px');
    racine.style.setProperty('--cs-carte-h', h + 'px');
    racine.style.setProperty('--cs-liste-bas', L.bas + 'px');

    var besoin = Math.ceil((window.innerWidth + 2 * pas) / pas);
    while (cartes.length < besoin || cartes.length % projets.length !== 0) {
      cartes.push(creerCarte(projets[cartes.length % projets.length]));
    }
    total = cartes.length * pas;
    placer();
  }

  function placer() {
    var depart = L.decalage * largeur;
    for (var i = 0; i < cartes.length; i++) {
      var x = ((i * pas - courant) % total + total) % total;   // 0 .. total
      if (x > total - pas) x -= total;                         // la derniere repasse a gauche
      cartes[i]._x = x + depart;
      cartes[i].style.transform = 'translate3d(' + (x + depart).toFixed(1) + 'px,0,0)';
    }
  }

  function boucle() {
    if (!vivant) return;
    courant += (cible - courant) * L.souplesse;
    if (Math.abs(cible - courant) < 0.1) { courant = cible; anime = false; }
    placer();
    if (anime) requestAnimationFrame(boucle);
  }
  function relancer() { if (!anime) { anime = true; requestAnimationFrame(boucle); } }

  /* ---- Bascule ---- */
  function entreeCartes() {
    if (CS.reduit()) return;
    /* Decalage d'entree de gauche a droite, sur les seules cartes visibles */
    var visibles = cartes.filter(function (c) { return c._x < window.innerWidth && c._x + largeur > 0; })
                         .sort(function (a, b) { return a._x - b._x; });
    cartes.forEach(function (c) { c.style.removeProperty('--cs-i'); });
    visibles.forEach(function (c, i) { c.style.setProperty('--cs-i', i); });
    racine.dataset.etat = 'avant';
    void racine.offsetWidth;            // fige l'etat de depart avant de lancer la transition
    racine.dataset.etat = 'entree';
  }

  function appliquer(v, immediat) {
    vue = v;
    var grille = CS.collage && CS.collage.racine;
    document.documentElement.setAttribute('data-cs-vue', v);
    if (CS.collage) CS.collage.actif = (v === 'grille');
    if (grille) { grille.inert = (v !== 'grille'); grille.setAttribute('aria-hidden', v !== 'grille'); }
    racine.inert = (v !== 'liste');
    racine.setAttribute('aria-hidden', v !== 'liste');
    bouton.textContent = v === 'grille' ? L.libelles.versListe : L.libelles.versGrille;
    if (curseur) curseur.classList.remove('is-visible');
    if (v === 'liste' && !immediat) entreeCartes();
  }

  /* ---- Mise en place ---- */
  racine = document.createElement('div');
  racine.className = 'cs-liste';
  ctx.conteneur.appendChild(racine);

  bouton = document.createElement('button');
  bouton.type = 'button';
  bouton.className = 'cs-vue-bascule';
  ctx.ecoute(bouton, 'click', function () {
    var v = vue === 'grille' ? 'liste' : 'grille';
    retenirVue(v);
    appliquer(v, false);
  });
  ctx.conteneur.appendChild(bouton);

  ctx.aLaSortie(function () {
    vivant = false;
    document.documentElement.removeAttribute('data-cs-vue');
  });

  mesurer();

  /* ---- Entrees ---- */
  ctx.ecoute(racine, 'wheel', function (e) {
    e.preventDefault();
    /* molette verticale ou geste horizontal du trackpad : le plus marque l'emporte */
    var d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    cible += d * (e.deltaMode === 1 ? 16 : 1) * L.vitesse;
    relancer();
  }, { passive: false });

  var tireDepuis = null, deplace = 0;
  ctx.ecoute(racine, 'pointerdown', function (e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    tireDepuis = e.clientX; deplace = 0;
    racine.classList.add('is-tire');
  });
  ctx.ecoute(racine, 'pointermove', function (e) {
    if (tireDepuis === null) return;
    var d = e.clientX - tireDepuis;
    deplace += Math.abs(d);
    cible -= d * L.vitesseTactile;
    tireDepuis = e.clientX;
    relancer();
  });
  function relacher() { tireDepuis = null; racine.classList.remove('is-tire'); }
  ctx.ecoute(racine, 'pointerup', relacher);
  ctx.ecoute(racine, 'pointercancel', relacher);
  ctx.ecoute(racine, 'click', function (e) {
    if (deplace > L.seuilClic) { e.preventDefault(); e.stopPropagation(); }
    deplace = 0;
  }, true);
  ctx.ecoute(racine, 'dragstart', function (e) { e.preventDefault(); });

  ctx.ecoute(window, 'keydown', function (e) {
    if (vue !== 'liste') return;
    var d = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -1, ArrowDown: 1, PageUp: -3, PageDown: 3 }[e.key];
    if (d === undefined) return;
    e.preventDefault(); cible += d * pas; relancer();
  });

  var t;
  ctx.ecoute(window, 'resize', function () {
    clearTimeout(t); t = setTimeout(mesurer, 150);
  }, { passive: true });

  /* ---- Curseur « Decouvrir » ---- */
  curseur = CS.curseur(ctx, racine, L.libelles.curseur, 'rond', function (e) {
    return e.target.closest && e.target.closest('.cs-liste__cadre') && !racine.classList.contains('is-tire');
  });

  appliquer(lireVue(), true);
});

/* ---------- 07-contact.js ---------- */
/* ===== Page Contact =====
   La structure et les textes sont dans le Designer (.cs-contact). Ici :
   le curseur « Fermer » et la fermeture — un clic sur le fond noir, ou la
   touche Echap, ramene a la page d'ou l'on vient.

   La barre de navigation qui descend et le contenu qui apparait sont en CSS :
   voir 07-contact.css. */
CS.module('contact', CS.config.contact.pages, function (ctx) {
  var K = CS.config.contact;
  var fond = ctx.conteneur.matches('.cs-contact') ? ctx.conteneur : ctx.conteneur.querySelector('.cs-contact');
  if (!fond) return;

  function fermer() {
    var vientDuSite = CS.navigationInterne;      // on est arrive ici par une transition
    if (!vientDuSite) {
      try { vientDuSite = !!document.referrer && new URL(document.referrer).origin === location.origin; } catch (e) {}
    }
    if (vientDuSite && history.length > 1) history.back();
    else CS.aller(K.retour);
  }

  /* Tout ce qui n'est pas un lien ferme la page */
  ctx.ecoute(fond, 'click', function (e) {
    if (e.target.closest('a, button')) return;
    fermer();
  });
  ctx.ecoute(window, 'keydown', function (e) { if (e.key === 'Escape') fermer(); });

  if (CS.curseur(ctx, fond, K.libelleFermer, 'croix', function (e) { return !e.target.closest('a, button'); })) {
    document.documentElement.classList.add('cs-curseur-fermer');
    ctx.aLaSortie(function () { document.documentElement.classList.remove('cs-curseur-fermer'); });
  }
});

/* ---------- 08-archive.js ---------- */
/* ===== Page Archive : mosaique infinie et focus =====
   Les references de la collection « Bibliotheque » (Collection List du
   Designer) sont posees sur une trame reguliere qui se prolonge sans fin dans
   les deux directions. On s'y deplace en tirant, a la molette ou au clavier.

   La trame est virtuelle : seules les tuiles visibles existent (une « reserve »
   de colonnes x rangees). Chaque tuile de la reserve est reaffectee a une
   autre case de la trame quand elle sort de l'ecran. La reference affichee
   dans une case ne depend que de sa position : on retrouve la meme image en
   revenant au meme endroit.

   Un clic sur une tuile l'agrandit au centre ; les autres s'effacent, les
   informations apparaissent dessous. En focus, les fleches du clavier passent
   a la reference suivante ou precedente.

   Reglages : CS.config.archive (01-core.js). */
CS.module('archive', CS.config.archive.pages, function (ctx) {
  var A = CS.config.archive, F = A.focus;

  /* ---- Lecture de la Collection List ---- */
  var src = ctx.conteneur.querySelector(A.source);
  if (!src) return;
  function texte(el, sel) { var e = sel && el.querySelector(sel); return e ? e.textContent.trim() : ''; }
  var refs = Array.prototype.map.call(src.querySelectorAll(A.item), function (el) {
    var img = el.querySelector('img');
    return {
      src: img ? (img.getAttribute('src') || '') : '',
      srcset: img ? img.getAttribute('srcset') : null,
      nom: texte(el, A.champs.nom),
      type: texte(el, A.champs.type),
      annee: texte(el, A.champs.annee)
    };
  }).filter(function (r) { return r.src; });
  var n = refs.length;
  if (!n) return;

  function mod(a, b) { return ((a % b) + b) % b; }

  /* ---- Etat ---- */
  var racine, plan, tuiles = [], cols = 0, rangs = 0;
  var tw, th, px, py, ox, oy;                  // tuile, pas, origine — a l'echelle
  var camX = 0, camY = 0, cibleX = 0, cibleY = 0;
  var anime = false, vivant = true;
  var focusOuvert = false;
  var FL = CS.config.flottement, flX = 0, flY = 0;     // flottement a la souris, en px

  racine = document.createElement('div');
  racine.className = 'cs-archive';
  plan = document.createElement('div');
  plan.className = 'cs-archive__plan';
  racine.appendChild(plan);
  ctx.conteneur.appendChild(racine);

  document.documentElement.classList.add('cs-sans-defilement');
  ctx.aLaSortie(function () {
    vivant = false;
    document.documentElement.classList.remove('cs-sans-defilement');
  });

  /* ---- Trame ---- */
  function creerTuile() {
    var t = document.createElement('div');
    t.className = 'cs-archive__tuile';
    t.setAttribute('role', 'button');
    t.tabIndex = 0;
    t.innerHTML = '<img class="cs-archive__img" alt="" draggable="false">';
    t._c = null; t._r = null; t._i = -1;
    plan.appendChild(t);
    return t;
  }

  function mesurer() {
    var e = Math.max(A.echelleMin, Math.min(A.echelleMax, window.innerWidth / A.base));
    tw = A.tuile.w * e; th = A.tuile.h * e;
    px = A.pas.x * e;   py = A.pas.y * e;
    ox = A.origine.x * e; oy = A.origine.y * e;
    racine.style.setProperty('--cs-tuile-w', tw.toFixed(2) + 'px');
    racine.style.setProperty('--cs-tuile-h', th.toFixed(2) + 'px');

    var c = Math.ceil(window.innerWidth / px) + 2;
    var r = Math.ceil(window.innerHeight / py) + 2;
    if (c !== cols || r !== rangs) {
      cols = c; rangs = r;
      while (tuiles.length < cols * rangs) tuiles.push(creerTuile());
      while (tuiles.length > cols * rangs) plan.removeChild(tuiles.pop());
      tuiles.forEach(function (t) { t._c = null; });      // force la reaffectation
    }
    placer();
  }

  /* La tuile i de la reserve tient toujours une colonne congrue a i modulo
     cols (idem pour les rangees) : elle ne change de case que lorsqu'elle sort
     d'un cote pour rentrer de l'autre. */
  function placer() {
    var c0 = Math.floor((camX - ox) / px) - 1;
    var r0 = Math.floor((camY - oy) / py) - 1;
    for (var k = 0; k < tuiles.length; k++) {
      var t = tuiles[k];
      var c = c0 + mod((k % cols) - c0, cols);
      var r = r0 + mod(Math.floor(k / cols) - r0, rangs);
      if (c !== t._c || r !== t._r) {
        t._c = c; t._r = r;
        var i = mod(c + r * A.melange, n);
        if (i !== t._i) {
          t._i = i;
          var img = t.firstChild, ref = refs[i];
          img.removeAttribute('srcset');
          img.src = ref.src;
          if (ref.srcset) { img.srcset = ref.srcset; img.sizes = Math.ceil(tw) + 'px'; }
          img.alt = ref.nom;
          t.setAttribute('aria-label', ref.nom);
        }
      }
      /* flottement : chaque case de la trame a sa profondeur, fixe */
      var pf = FL.profondeurs[mod(c * 3 + r * 5, FL.profondeurs.length)];
      t._x = ox + c * px - camX + flX * pf;
      t._y = oy + r * py - camY + flY * pf;
      t.style.transform = 'translate3d(' + t._x.toFixed(1) + 'px,' + t._y.toFixed(1) + 'px,0)';
    }
  }

  function boucle() {
    if (!vivant) return;
    camX += (cibleX - camX) * A.souplesse;
    camY += (cibleY - camY) * A.souplesse;
    if (Math.abs(cibleX - camX) < 0.1 && Math.abs(cibleY - camY) < 0.1) { camX = cibleX; camY = cibleY; anime = false; }
    placer();
    if (anime) requestAnimationFrame(boucle);
  }
  function relancer() { if (!anime) { anime = true; requestAnimationFrame(boucle); } }

  mesurer();

  /* Flottement a la souris — fige pendant le focus, pour que l'image agrandie
     retrouve sa case la ou elle l'a quittee. */
  CS.flottement(ctx, function (fx, fy) {
    if (focusOuvert) return;
    flX = -fx * FL.amplitude; flY = -fy * FL.amplitude;
    placer();
  });

  /* ---- Deplacement ----
     Pendant qu'on tire, la trame suit le pointeur a l'identique (pas de
     lissage : c'est une manipulation directe). Au relachement, elle garde un
     peu de la vitesse du geste et se pose en douceur. */
  var tire = null, deplace = 0, vx = 0, vy = 0;
  ctx.ecoute(racine, 'pointerdown', function (e) {
    if (focusOuvert) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    tire = { x: e.clientX, y: e.clientY, t: e.timeStamp, id: e.pointerId };
    deplace = 0; vx = vy = 0;
    cibleX = camX; cibleY = camY;                  // arrete net un elan en cours
  });
  ctx.ecoute(racine, 'pointermove', function (e) {
    if (!tire || e.pointerId !== tire.id) return;
    var dx = e.clientX - tire.x, dy = e.clientY - tire.y;
    var dt = Math.max(1, e.timeStamp - tire.t);
    deplace += Math.abs(dx) + Math.abs(dy);
    if (deplace > A.seuilClic && !racine.classList.contains('is-tire')) {
      racine.classList.add('is-tire');
      try { racine.setPointerCapture(tire.id); } catch (err) {}
    }
    /* vitesse lissee, en px/ms */
    vx = vx * 0.7 + (dx / dt) * 0.3;
    vy = vy * 0.7 + (dy / dt) * 0.3;
    camX -= dx; camY -= dy; cibleX = camX; cibleY = camY;
    tire.x = e.clientX; tire.y = e.clientY; tire.t = e.timeStamp;
    placer();
  });
  function relacher(e) {
    if (!tire) return;
    var arret = e.timeStamp - tire.t > 80;          // doigt immobile avant de lacher : pas d'elan
    tire = null;
    racine.classList.remove('is-tire');
    if (!arret && deplace > A.seuilClic && !CS.reduit()) {
      cibleX = camX - vx * A.elan;
      cibleY = camY - vy * A.elan;
      relancer();
    }
  }
  ctx.ecoute(racine, 'pointerup', relacher);
  ctx.ecoute(racine, 'pointercancel', relacher);

  ctx.ecoute(racine, 'wheel', function (e) {
    e.preventDefault();
    var k = (e.deltaMode === 1 ? 16 : 1) * A.vitesse;
    if (focusOuvert) return;                       // en focus, la molette ne fait rien
    if (e.shiftKey && !e.deltaX) cibleX += e.deltaY * k;
    else { cibleX += e.deltaX * k; cibleY += e.deltaY * k; }
    relancer();
  }, { passive: false });

  ctx.ecoute(racine, 'dragstart', function (e) { e.preventDefault(); });

  var tr;
  ctx.ecoute(window, 'resize', function () {
    clearTimeout(tr);
    tr = setTimeout(function () { mesurer(); }, 150);
  }, { passive: true });

  /* ==================== Focus ==================== */
  var panneau = document.createElement('div');
  panneau.className = 'cs-archive__focus';
  panneau.setAttribute('role', 'dialog');
  panneau.setAttribute('aria-modal', 'true');
  panneau.hidden = true;
  panneau.innerHTML =
    '<div class="cs-archive__focus-centre"><div class="cs-archive__focus-cadre">' +
      '<img class="cs-archive__focus-img" alt="" draggable="false">' +
    '</div></div>' +
    '<div class="cs-archive__focus-infos">' +
      '<h2 class="cs-archive__focus-nom"></h2>' +
      '<p class="cs-archive__focus-type"></p>' +
      '<p class="cs-archive__focus-annee"></p>' +
    '</div>';
  racine.appendChild(panneau);
  var cadre = panneau.querySelector('.cs-archive__focus-cadre');
  var grande = panneau.querySelector('.cs-archive__focus-img');
  var infos = panneau.querySelector('.cs-archive__focus-infos');
  var elNom = panneau.querySelector('.cs-archive__focus-nom');
  var elType = panneau.querySelector('.cs-archive__focus-type');
  var elAnnee = panneau.querySelector('.cs-archive__focus-annee');

  var origine = null;        // tuile cliquee
  var courant = -1;          // reference affichee
  var animCadre = null;
  var EASE = 'cubic-bezier(0.77, 0, 0.175, 1)';     // --cs-ease-in-out

  function remplirFocus(i) {
    var ref = refs[i];
    courant = i;
    grande.removeAttribute('srcset');
    grande.src = ref.src;
    grande.alt = ref.nom;
    elNom.textContent = ref.nom;
    elType.textContent = ref.type;
    elAnnee.textContent = ref.annee;
    panneau.setAttribute('aria-label', ref.nom);
  }

  /* Transform qui ramene le cadre (a sa place finale) sur le rectangle d'une tuile */
  function versTuile(t) {
    var a = t.getBoundingClientRect(), b = cadre.getBoundingClientRect();
    if (!b.width || !b.height) return 'none';
    var dx = (a.left + a.width / 2) - (b.left + b.width / 2);
    var dy = (a.top + a.height / 2) - (b.top + b.height / 2);
    return 'translate(' + dx.toFixed(2) + 'px,' + dy.toFixed(2) + 'px) scale(' +
           (a.width / b.width).toFixed(4) + ',' + (a.height / b.height).toFixed(4) + ')';
  }

  function ouvrir(t) {
    if (focusOuvert || t._i < 0) return;
    focusOuvert = true;
    origine = t;
    cibleX = camX; cibleY = camY;                   // la trame ne bouge plus
    remplirFocus(t._i);
    panneau.hidden = false;
    racine.classList.add('est-focus');
    t.classList.add('est-origine');
    if (animCadre) animCadre.cancel();
    if (!CS.reduit()) {
      animCadre = cadre.animate(
        [{ transform: versTuile(t) }, { transform: 'none' }],
        { duration: F.duree, easing: EASE });
    }
    void panneau.offsetWidth;
    panneau.classList.add('est-ouvert');
    panneau.tabIndex = -1;
    try { panneau.focus({ preventScroll: true }); } catch (e) {}
  }

  function fermer() {
    if (!focusOuvert) return;
    focusOuvert = false;
    panneau.classList.remove('est-ouvert');
    var t = origine, retour = t && t._i === courant && !CS.reduit();
    function fin() {
      panneau.hidden = true;
      if (t) { t.classList.remove('est-origine'); try { t.focus({ preventScroll: true }); } catch (e) {} }
      racine.classList.remove('est-focus', 'est-fermeture');
    }
    if (animCadre) animCadre.cancel();
    if (retour) {
      /* meme reference qu'a l'ouverture : l'image retourne dans sa case */
      animCadre = cadre.animate(
        [{ transform: 'none' }, { transform: versTuile(t) }],
        { duration: F.duree, easing: EASE, fill: 'forwards' });
      animCadre.onfinish = function () { fin(); animCadre.cancel(); };
      setTimeout(function () { racine.classList.remove('est-focus'); }, F.duree * 0.4);
    } else {
      /* on a change de reference entre-temps : simple fondu */
      racine.classList.add('est-fermeture');
      racine.classList.remove('est-focus');
      setTimeout(fin, 300);
    }
    if (curseur) curseur.classList.remove('is-visible');
  }

  /* Reference suivante / precedente (fleches du clavier) : fondu enchaine de
     l'image et du texte. Ni la molette ni le glissement au doigt ne changent
     de reference : en focus, on regarde une image, on ne defile pas. */
  var dernier = 0;
  function suivant(sens) {
    var maintenant = Date.now();
    if (maintenant - dernier < F.delaiSuivant) return;
    dernier = maintenant;
    var i = mod(courant + sens, n);
    var pre = new Image(); pre.src = refs[i].src;
    panneau.classList.add('est-change');
    setTimeout(function () {
      if (!focusOuvert) return;
      remplirFocus(i);
      panneau.classList.remove('est-change');
    }, 180);
  }
  /* Clic : sur une tuile -> ouvre ; en focus -> ferme. Un deplacement n'est pas un clic. */
  ctx.ecoute(racine, 'click', function (e) {
    if (deplace > A.seuilClic) { deplace = 0; return; }
    deplace = 0;
    if (focusOuvert) { fermer(); return; }
    var t = e.target.closest('.cs-archive__tuile');
    if (t) ouvrir(t);
  });

  ctx.ecoute(window, 'keydown', function (e) {
    if (focusOuvert) {
      if (e.key === 'Escape') { e.preventDefault(); fermer(); }
      else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); suivant(1); }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); suivant(-1); }
      return;
    }
    var t = document.activeElement && document.activeElement.closest && document.activeElement.closest('.cs-archive__tuile');
    if (t && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); ouvrir(t); return; }
    var d = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
    if (!d) return;
    e.preventDefault();
    cibleX += d[0] * px; cibleY += d[1] * py; relancer();
  });

  var curseur = CS.curseur(ctx, racine, A.libelleFermer, 'croix', function () { return focusOuvert; });
});

/* ---------- 09-barba.js ---------- */
/* ===== Demarrage et transitions de page (Barba) =====
   Barba remplace le contenu de la page sans recharger : la barre de
   navigation (hors du conteneur) reste en place, et le code n'est telecharge
   qu'une fois. A chaque changement de page :

     1. la page qui part s'efface (fondu)            -> CS.sortir()
     2. Barba echange les conteneurs
     3. la nouvelle page s'installe                  -> CS.entrer(conteneur)
     4. elle apparait (fondu)

   Dans Webflow, chaque page a un element [data-barba="container"] avec un
   data-barba-namespace. Sans cet element — ou si Barba est desactive dans
   CS.config.transitions — le site fonctionne en chargement classique.

   Bibliotheque : @barba/core 2.10.3 (MIT), embarquee dans ce fichier. */
(function () {
  var T = CS.config.transitions;

  /* Navigation programmee : par Barba s'il tourne, sinon classique */
  CS.aller = function (url) {
    if (CS.barbaActif && window.barba) window.barba.go(url);
    else location.href = url;
  };

  function fondre(el, de, vers, duree) {
    if (!el.animate) { el.style.opacity = vers; return Promise.resolve(); }
    var d = CS.reduit() ? Math.min(duree, 150) : duree;
    var a = el.animate([{ opacity: de }, { opacity: vers }],
      { duration: d, easing: 'cubic-bezier(0.23, 1, 0.32, 1)', fill: 'forwards' });
    /* Garde-fou : dans un onglet en arriere-plan les animations sont en pause
       et « finished » n'arriverait jamais — la navigation ne doit pas en dependre. */
    return Promise.race([a.finished.catch(function () {}), CS.attendre(d + 150)])
      .then(function () { el.style.opacity = vers; a.cancel(); });
  }

  /* Rideau : le panneau se devoile ou se referme par le haut. clip-path ne
     touche ni a la mise en page ni au contenu, qui reste immobile dessous. */
  var FERME = 'inset(0 0 100% 0)', OUVERT = 'inset(0 0 0% 0)';
  function rideau(el, de, vers) {
    if (CS.reduit() || !el.animate) return fondre(el, de === FERME ? 0 : 1, vers === FERME ? 0 : 1, 150);
    var a = el.animate([{ clipPath: de }, { clipPath: vers }],
      { duration: T.rideau, easing: 'cubic-bezier(0.77, 0, 0.175, 1)', fill: 'forwards' });
    return Promise.race([a.finished.catch(function () {}), CS.attendre(T.rideau + 150)])
      .then(function () { el.style.clipPath = vers === OUVERT ? '' : vers; a.cancel(); });
  }

  /* Ce que Webflow fait a chaque chargement et qu'il faut refaire a la main */
  function majDocument(data) {
    /* identifiant de page, lu par les interactions Webflow */
    var m = data.next.html && data.next.html.match(/<html[^>]*\sdata-wf-page="([^"]+)"/);
    if (m) document.documentElement.setAttribute('data-wf-page', m[1]);
    /* lien courant dans la navigation */
    var ici = location.pathname.replace(/\/+$/, '') || '/';
    Array.prototype.forEach.call(document.querySelectorAll('.fixed-nav a[href]'), function (a) {
      var h = (a.getAttribute('href') || '').replace(/\/+$/, '') || '/';
      var courant = h === ici;
      a.classList.toggle('w--current', courant);
      if (courant) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    window.scrollTo(0, 0);
  }

  function relancerWebflow() {
    try {
      if (!window.Webflow) return;
      window.Webflow.destroy();
      window.Webflow.ready();
      var ix2 = window.Webflow.require && window.Webflow.require('ix2');
      if (ix2 && ix2.init) ix2.init();
    } catch (e) {}
  }

  function demarrer() {
    var conteneur = document.querySelector('[data-barba="container"]');
    CS.entrer(conteneur || document.body);

    if (!T.actif || !window.barba || !conteneur) return;
    if (T.exclure.some(function (r) { return r.test(location.pathname); })) return;

    document.body.setAttribute('data-barba', 'wrapper');
    try {
      window.barba.init({
        timeout: 8000,
        prevent: function (o) {
          var a = document.createElement('a'); a.href = o.href;
          return T.exclure.some(function (r) { return r.test(a.pathname); });
        },
        transitions: [{
          /* Vers Contact : la page en place ne bouge pas, le noir descend dessus.
             sync = les deux pages coexistent le temps du mouvement. */
          name: 'contact-ouvre',
          sync: true,
          to: { namespace: ['contact'] },
          /* Avant que le rideau parte : la page en place est contenue sous lui
             (voir .cs-sous-rideau), et le logo central de l'accueil s'efface. */
          beforeLeave: function (data) {
            /* En mode sync, Barba a deja insere Contact dans le document : on
               le referme tout de suite, sinon le panneau noir s'afficherait
               en entier pendant que le logo s'efface. */
            var suivante = data.next && data.next.container;
            if (suivante) { if (CS.reduit()) suivante.style.opacity = 0; else suivante.style.clipPath = FERME; }
            var page = data.current.container;
            page.classList.add('cs-sous-rideau');
            var logo = page.querySelector('.cs-collage-logo');
            if (logo) return fondre(logo, 1, 0, T.logo);
          },
          leave: function () {},
          beforeEnter: function (data) {
            CS.navigationInterne = true;
            if (!CS.reduit()) data.next.container.style.clipPath = FERME;
            else data.next.container.style.opacity = 0;
            majDocument(data);
            CS.entrer(data.next.container);
          },
          enter: function (data) { return rideau(data.next.container, FERME, OUVERT); },
          after: function (data) {
            CS.sortir();                               // la page restee dessous
            data.next.container.style.opacity = '';
            relancerWebflow();
          }
        }, {
          /* Depuis Contact : la page suivante s'installe dessous, le rideau remonte. */
          name: 'contact-ferme',
          sync: true,
          from: { namespace: ['contact'] },
          beforeEnter: function (data) {
            CS.navigationInterne = true;
            data.next.container.classList.add('cs-sous-rideau');
            majDocument(data);
            CS.entrer(data.next.container);
          },
          leave: function (data) { return rideau(data.current.container, OUVERT, FERME); },
          enter: function () {},
          after: function (data) {
            CS.sortir();                               // Contact
            data.next.container.classList.remove('cs-sous-rideau');
            relancerWebflow();
          }
        }, {
          name: 'fondu',
          leave: function (data) { return fondre(data.current.container, 1, 0, T.sortie); },
          afterLeave: function () { CS.sortir(); },
          beforeEnter: function (data) {
            CS.navigationInterne = true;
            data.next.container.style.opacity = 0;
            majDocument(data);
            CS.entrer(data.next.container);
          },
          enter: function (data) { return fondre(data.next.container, 0, 1, T.entree); },
          after: function (data) {
            data.next.container.style.opacity = '';
            relancerWebflow();
          }
        }]
      });
      CS.barbaActif = true;
    } catch (e) {
      if (window.console) console.error('[CS] barba', e);
    }
  }

  CS.pret(demarrer);
})();
