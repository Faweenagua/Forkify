function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.60e8a3e2.js","eyyUD":"icons.9801e6f1.svg"}'));var a,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var f,p={};f=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,g=Function.prototype.call;p=f?g.bind(g):function(){return g.apply(g,arguments)};var v={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!v.call({1:2},1);h=m?function(e){var t=y(this,e);return!!t&&t.enumerable}:v;var _;_=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var b,w,k={},E={},S=Function.prototype,O=S.bind,j=S.call,L=f&&O.bind(j,j),$=(E=f?function(e){return e&&L(e)}:function(e){return e&&function(){return j.apply(e,arguments)}})({}.toString),x=E("".slice);w=function(e){return x($(e),8,-1)};var P=c.Object,M=E("".split);k=d((function(){return!P("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?M(e,""):P(e)}:P;var T,H=c.TypeError;T=function(e){if(null==e)throw H("Can't call method on "+e);return e},b=function(e){return k(T(e))};var q,F,I,N;N=function(e){return"function"==typeof e},I=function(e){return"object"==typeof e?null!==e:N(e)};var A,R={},C=function(e){return N(e)?e:void 0};A=function(e,t){return arguments.length<2?C(c[e]):c[e]&&c[e][t]};var D={};D=E({}.isPrototypeOf);var U,W,G,z={};z=A("navigator","userAgent")||"";var B,J,V=c.process,Y=c.Deno,Q=V&&V.versions||Y&&Y.version,K=Q&&Q.v8;K&&(J=(B=K.split("."))[0]>0&&B[0]<4?1:+(B[0]+B[1])),!J&&z&&(!(B=z.match(/Edge\/(\d+)/))||B[1]>=74)&&(B=z.match(/Chrome\/(\d+)/))&&(J=+B[1]),G=J,W=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&G&&G<41})),U=W&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var X=c.Object;R=U?function(e){return"symbol"==typeof e}:function(e){var t=A("Symbol");return N(t)&&D(t.prototype,X(e))};var Z,ee,te,ne=c.String;te=function(e){try{return ne(e)}catch(e){return"Object"}};var re=c.TypeError;ee=function(e){if(N(e))return e;throw re(te(e)+" is not a function")},Z=function(e,t){var n=e[t];return null==n?void 0:ee(n)};var ie,oe=c.TypeError;ie=function(e,t){var n,r;if("string"===t&&N(n=e.toString)&&!I(r=p(n,e)))return r;if(N(n=e.valueOf)&&!I(r=p(n,e)))return r;if("string"!==t&&N(n=e.toString)&&!I(r=p(n,e)))return r;throw oe("Can't convert object to primitive value")};var ae,se;var ce,ue={},le=Object.defineProperty;ce=function(e,t){try{le(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var de=c["__core-js_shared__"]||ce("__core-js_shared__",{});ue=de,(se=function(e,t){return ue[e]||(ue[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var fe,pe={},he=c.Object;fe=function(e){return he(T(e))};var ge=E({}.hasOwnProperty);pe=Object.hasOwn||function(e,t){return ge(fe(e),t)};var ve,ye=0,me=Math.random(),_e=E(1..toString);ve=function(e){return"Symbol("+(void 0===e?"":e)+")_"+_e(++ye+me,36)};var be=se("wks"),we=c.Symbol,ke=we&&we.for,Ee=U?we:we&&we.withoutSetter||ve;ae=function(e){if(!pe(be,e)||!W&&"string"!=typeof be[e]){var t="Symbol."+e;W&&pe(we,e)?be[e]=we[e]:be[e]=U&&ke?ke(t):Ee(t)}return be[e]};var Se=c.TypeError,Oe=ae("toPrimitive");F=function(e,t){if(!I(e)||R(e))return e;var n,r=Z(e,Oe);if(r){if(void 0===t&&(t="default"),n=p(r,e,t),!I(n)||R(n))return n;throw Se("Can't convert object to primitive value")}return void 0===t&&(t="number"),ie(e,t)},q=function(e){var t=F(e,"string");return R(t)?t:t+""};var je,Le,$e=c.document,xe=I($e)&&I($e.createElement);Le=function(e){return xe?$e.createElement(e):{}},je=!l&&!d((function(){return 7!=Object.defineProperty(Le("div"),"a",{get:function(){return 7}}).a}));var Pe,Me,Te=Object.getOwnPropertyDescriptor,He=s=l?Te:function(e,t){if(e=b(e),t=q(t),je)try{return Te(e,t)}catch(e){}if(pe(e,t))return _(!p(h,e,t),e[t])},qe={};Me=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Fe,Ie=c.String,Ne=c.TypeError;Fe=function(e){if(I(e))return e;throw Ne(Ie(e)+" is not an object")};var Ae=c.TypeError,Re=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor;Pe=l?Me?function(e,t,n){if(Fe(e),t=q(t),Fe(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Ce(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Re(e,t,n)}:Re:function(e,t,n){if(Fe(e),t=q(t),Fe(n),je)try{return Re(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Ae("Accessors not supported");return"value"in n&&(e[t]=n.value),e},qe=l?function(e,t,n){return Pe(e,t,_(1,n))}:function(e,t,n){return e[t]=n,e};var De,Ue={},We=E(Function.toString);N(ue.inspectSource)||(ue.inspectSource=function(e){return We(e)}),Ue=ue.inspectSource;var Ge,ze,Be=c.WeakMap;ze=N(Be)&&/native code/.test(Ue(Be));var Je,Ve=se("keys");Je=function(e){return Ve[e]||(Ve[e]=ve(e))};var Ye={};Ye={};var Qe,Ke,Xe,Ze=c.TypeError,et=c.WeakMap;if(ze||ue.state){var tt=ue.state||(ue.state=new et),nt=E(tt.get),rt=E(tt.has),it=E(tt.set);Qe=function(e,t){if(rt(tt,e))throw new Ze("Object already initialized");return t.facade=e,it(tt,e,t),t},Ke=function(e){return nt(tt,e)||{}},Xe=function(e){return rt(tt,e)}}else{var ot=Je("state");Ye[ot]=!0,Qe=function(e,t){if(pe(e,ot))throw new Ze("Object already initialized");return t.facade=e,qe(e,ot,t),t},Ke=function(e){return pe(e,ot)?e[ot]:{}},Xe=function(e){return pe(e,ot)}}Ge={set:Qe,get:Ke,has:Xe,enforce:function(e){return Xe(e)?Ke(e):Qe(e,{})},getterFor:function(e){return function(t){var n;if(!I(t)||(n=Ke(t)).type!==e)throw Ze("Incompatible receiver, "+e+" required");return n}}};var at=Function.prototype,st=l&&Object.getOwnPropertyDescriptor,ct=pe(at,"name"),ut={EXISTS:ct,PROPER:ct&&"something"===function(){}.name,CONFIGURABLE:ct&&(!l||l&&st(at,"name").configurable)}.CONFIGURABLE,lt=Ge.get,dt=Ge.enforce,ft=String(String).split("String");(De=function(e,t,n,r){var i,o=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,s=!!r&&!!r.noTargetGet,u=r&&void 0!==r.name?r.name:t;N(n)&&("Symbol("===String(u).slice(0,7)&&(u="["+String(u).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!pe(n,"name")||ut&&n.name!==u)&&qe(n,"name",u),(i=dt(n)).source||(i.source=ft.join("string"==typeof u?u:""))),e!==c?(o?!s&&e[t]&&(a=!0):delete e[t],a?e[t]=n:qe(e,t,n)):a?e[t]=n:ce(t,n)})(Function.prototype,"toString",(function(){return N(this)&&lt(this).source||Ue(this)}));var pt,ht,gt,vt,yt,mt={},_t=Math.ceil,bt=Math.floor;yt=function(e){var t=+e;return t!=t||0===t?0:(t>0?bt:_t)(t)};var wt=Math.max,kt=Math.min;vt=function(e,t){var n=yt(e);return n<0?wt(n+t,0):kt(n,t)};var Et,St,Ot=Math.min;St=function(e){return e>0?Ot(yt(e),9007199254740991):0},Et=function(e){return St(e.length)};var jt=function(e){return function(t,n,r){var i,o=b(t),a=Et(o),s=vt(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},Lt={includes:jt(!0),indexOf:jt(!1)}.indexOf,$t=E([].push);gt=function(e,t){var n,r=b(e),i=0,o=[];for(n in r)!pe(Ye,n)&&pe(r,n)&&$t(o,n);for(;t.length>i;)pe(r,n=t[i++])&&(~Lt(o,n)||$t(o,n));return o};var xt,Pt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");ht=Object.getOwnPropertyNames||function(e){return gt(e,Pt)},xt=Object.getOwnPropertySymbols;var Mt=E([].concat);mt=A("Reflect","ownKeys")||function(e){var t=ht(Fe(e));return xt?Mt(t,xt(e)):t},pt=function(e,t,n){for(var r=mt(t),i=Pe,o=s,a=0;a<r.length;a++){var c=r[a];pe(e,c)||n&&pe(n,c)||i(e,c,o(t,c))}};var Tt={},Ht=/#|\.prototype\./,qt=function(e,t){var n=It[Ft(e)];return n==At||n!=Nt&&(N(t)?d(t):!!t)},Ft=qt.normalize=function(e){return String(e).replace(Ht,".").toLowerCase()},It=qt.data={},Nt=qt.NATIVE="N",At=qt.POLYFILL="P";Tt=qt,a=function(e,t){var n,r,i,o,a,s=e.target,u=e.global,l=e.stat;if(n=u?c:l?c[s]||ce(s,{}):(c[s]||{}).prototype)for(r in t){if(o=t[r],i=e.noTargetGet?(a=He(n,r))&&a.value:n[r],!Tt(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;pt(o,i)}(e.sham||i&&i.sham)&&qe(o,"sham",!0),De(n,r,o,e)}};var Rt,Ct={},Dt=Function.prototype,Ut=Dt.apply,Wt=Dt.call;Ct="object"==typeof Reflect&&Reflect.apply||(f?Wt.bind(Ut):function(){return Wt.apply(Ut,arguments)});var Gt,zt=E(E.bind);Gt=function(e,t){return ee(e),void 0===t?e:f?zt(e,t):function(){return e.apply(t,arguments)}};var Bt={};Bt=A("document","documentElement");var Jt={};Jt=E([].slice);var Vt,Yt=c.TypeError;Vt=function(e,t){if(e<t)throw Yt("Not enough arguments");return e};var Qt;Qt=/(?:ipad|iphone|ipod).*applewebkit/i.test(z);var Kt;Kt="process"==w(c.process);var Xt,Zt,en,tn,nn=c.setImmediate,rn=c.clearImmediate,on=c.process,an=c.Dispatch,sn=c.Function,cn=c.MessageChannel,un=c.String,ln=0,dn={};try{Xt=c.location}catch(e){}var fn=function(e){if(pe(dn,e)){var t=dn[e];delete dn[e],t()}},pn=function(e){return function(){fn(e)}},hn=function(e){fn(e.data)},gn=function(e){c.postMessage(un(e),Xt.protocol+"//"+Xt.host)};nn&&rn||(nn=function(e){Vt(arguments.length,1);var t=N(e)?e:sn(e),n=Jt(arguments,1);return dn[++ln]=function(){Ct(t,void 0,n)},Zt(ln),ln},rn=function(e){delete dn[e]},Kt?Zt=function(e){on.nextTick(pn(e))}:an&&an.now?Zt=function(e){an.now(pn(e))}:cn&&!Qt?(tn=(en=new cn).port2,en.port1.onmessage=hn,Zt=Gt(tn.postMessage,tn)):c.addEventListener&&N(c.postMessage)&&!c.importScripts&&Xt&&"file:"!==Xt.protocol&&!d(gn)?(Zt=gn,c.addEventListener("message",hn,!1)):Zt="onreadystatechange"in Le("script")?function(e){Bt.appendChild(Le("script")).onreadystatechange=function(){Bt.removeChild(this),fn(e)}}:function(e){setTimeout(pn(e),0)}),Rt={set:nn,clear:rn},a({global:!0,bind:!0,enumerable:!0,forced:!c.setImmediate||!c.clearImmediate},{setImmediate:Rt.set,clearImmediate:Rt.clear});var vn={},yn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,o=Object.create(i.prototype),a=new $(r||[]);return o._invoke=function(e,t,n){var r=d;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return P()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?h:f,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",g={};function v(){}function y(){}function m(){}var _={};c(_,o,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(x([])));w&&w!==n&&r.call(w,o)&&(_=w);var k=m.prototype=v.prototype=Object.create(_);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,o,a,s){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function O(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function x(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:t,done:!0}}return y.prototype=m,c(k,"constructor",m),c(m,"constructor",y),y.displayName=c(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(u(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}(vn);try{regeneratorRuntime=yn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=yn:Function("r","regeneratorRuntime = r")(yn)}const mn=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} seconds`))}),1e3*n)})))]),o=await i.json();if(!i.ok)throw new Error(`${o.message} (${i.status})`);return o}catch(e){throw e}var n},_n={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},bn=function(e,t){const n=t?e.data.recipes:e.data.recipe;return{id:n.id,title:n.title,publisher:n.publisher,sourceUrl:n.source_url,image:n.image_url,servings:n.servings,cookingTime:n.cooking_time,ingredients:n.ingredients,...n.key&&{key:n.key}}},wn=function(e=_n.search.page){_n.search.page=e;const t=(e-1)*_n.search.resultsPerPage,n=e*_n.search.resultsPerPage;return _n.search.results.slice(t,n)},kn=function(){localStorage.setItem("bookmarks",JSON.stringify(_n.bookmarks))},En=function(e){_n.bookmarks.push(e),kn(),e.id===_n.recipe.id&&(_n.recipe.bookmarked=!0)};!function(){const e=localStorage.getItem("bookmarks");e&&(_n.bookmarks=JSON.parse(e))}();var Sn;Sn=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();class On{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}renderSpinner(){const e=`\n          <div class="spinner">\n            <svg>\n              <use href="${n(Sn)}#icon-loader"></use>\n            </svg>\n          </div>\n    `;this._clear(),this._parentElement.insertAdjacentHTML("afterBegin",e)}renderError(e=this._errorMessage){const t=`\n        <div class="error">\n            <div>\n              <svg>\n                <use href="${n(Sn)}#icon-alert-triangle"></use>\n              </svg>\n            </div>\n            <p>${e} </p>\n        </div>\n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterBegin",t)}renderSuccess(e=this._successMessage){const t=`\n        <div class="message">\n            <div>\n              <svg>\n                <use href="${n(Sn)}#icon-smile"></use>\n              </svg>\n            </div>\n            <p>${e}</p>\n        </div>\n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterBegin",t)}_clear(){this._parentElement.innerHTML=""}}var jn=new class extends On{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one. 😥";_successMessage="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const{updateTo:r}=n.dataset;+r>0&&e(+r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n        <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n        <h1 class="recipe__title">\n            <span>${this._data.title}</span>\n        </h1>\n        </figure>\n\n        <div class="recipe__details">\n        <div class="recipe__info">\n            <svg class="recipe__info-icon">\n            <use href="${n(Sn)}#icon-clock"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n            <span class="recipe__info-text">minutes</span>\n        </div>\n        <div class="recipe__info">\n            <svg class="recipe__info-icon">\n            <use href="${n(Sn)}#icon-users"></use>\n            </svg>\n            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n            <span class="recipe__info-text">servings</span>\n\n            <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n                <svg>\n                <use href="${n(Sn)}#icon-minus-circle"></use>\n                </svg>\n            </button>\n            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n                <svg>\n                <use href="${n(Sn)}#icon-plus-circle"></use>\n                </svg>\n            </button>\n            </div>\n        </div>\n\n        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n            <svg>\n              <use href="${n(Sn)}#icon-user"></use>\n            </svg>\n        </div>\n        <button class="btn--round btn--bookmark">\n            <svg class="">\n            <use href="${n(Sn)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n            </svg>\n        </button>\n        </div>\n\n        <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n\n        ${this._data.ingredients.map(this._generateMarkupIngredients).join("")}\n            \n        </ul>\n        </div>\n\n        <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n            This recipe was carefully designed and tested by\n            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n            directions at their website.\n        </p>\n        <a\n            class="btn--small recipe__btn"\n            href="${this._data.sourceUrl}"\n            target="_blank"\n        >\n            <span>Directions</span>\n            <svg class="search__icon">\n            <use href="${n(Sn)}#icon-arrow-right"></use>\n            </svg>\n        </a>\n        </div>\n    `}_generateMarkupIngredients(e){return`\n        <li class="recipe__ingredient">\n        <svg class="recipe__icon">\n            <use href="${n(Sn)}#icon-check"></use>\n        </svg>\n        <div class="recipe__quantity">${e.quantity?function(e){if(parseFloat(e)===parseInt(e))return e;const t=function(e,n){return n<1e-7?e:t(n,Math.floor(e%n))},n=e.toString().length-2;let r=Math.pow(10,n),i=e*r;var o=t(i,r);i/=o,r/=o;let a=0;return i>r&&(a=Math.floor(i/r),i-=a*r),e=Math.floor(i)+"/"+Math.floor(r),a&&(e=a+" "+e),e}(e.quantity).toString():""}</div>\n        <div class="recipe__description">\n            <span class="recipe__unit">${e.unit}</span>\n            ${e.description}\n        </div>\n        </li>\n        `}};var Ln=new class{_parentEl=document.querySelector(".search");getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearSearch(),e}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}_clearSearch(){this._parentEl.querySelector(".search__field").value=""}};var $n=new class extends On{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n      <li class="preview">\n          <a class="preview__link ${this._data.id==e?"preview__link--active":""}"  href="#${this._data.id}">\n          <figure class="preview__fig">\n              <img src="${this._data.image}" alt="${this._data.title}" />\n          </figure>\n          <div class="preview__data">\n              <h4 class="preview__title">${this._data.title}</h4>\n              <p class="preview__publisher">${this._data.publisher}4444</p>\n              <div class="preview__user-generated">\n                <svg>\n                  <use href="${n(Sn)}#icon-user"></use>\n                </svg>\n              </div>\n          </div>\n          </a>\n      </li>\n    `}};var xn=new class extends On{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your search. Please try again. 😥";_successMessage="";_generateMarkup(){return this._data.map((e=>$n.render(e,!1))).join("")}};var Pn=new class extends On{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return console.log(t),1===e&&t>1?`\n        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>\n            <svg class="search__icon">\n                <use href="${n(Sn)}#icon-arrow-right"></use>\n            </svg>\n        </button>\n        `:e===t&&t>1?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${n(Sn)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${e-1}</span>\n        </button>\n        `:e<t&&e>1?`\n        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${n(Sn)}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${e-1}</span>\n        </button>\n        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n            <span>Page ${e+1}</span>\n            <svg class="search__icon">\n                <use href="${n(Sn)}#icon-arrow-right"></use>\n            </svg>\n        </button>\n        `:""}};var Mn=new class extends On{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it 😑";_successMessage="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>$n.render(e,!1))).join("")}};var Tn=new class extends On{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_successMessage="Recipe was successfully uploaded 🤩";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};const Hn=async function(){try{const e=window.location.hash.slice(1);if(!e)return;xn.update(wn()),Mn.update(_n.bookmarks),jn.renderSpinner(),await async function(e){try{const t=await mn(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=015ca3df-05d2-4fa3-884d-7be4efd2c39f`);_n.recipe=bn(t,!1),_n.bookmarks.some((t=>t.id===e))?_n.recipe.bookmarked=!0:_n.recipe.bookmarked=!1}catch(e){throw console.error(`${e} 🧨🧨🧨🧨`),e}}(e),jn.render(_n.recipe)}catch(e){console.error(e),jn.renderError()}},qn=async function(){try{xn.renderSpinner();const e=Ln.getQuery();if(!e)return;await async function(e){try{_n.search.query=e;const t=await mn(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=015ca3df-05d2-4fa3-884d-7be4efd2c39f`);_n.recipe=bn(t,!0),_n.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),_n.search.page=1}catch(e){throw console.error(`${e} 🧨🧨🧨🧨`),e}}(e),xn.render(wn(1)),Pn.render(_n.search)}catch(e){xn.renderError()}},Fn=function(e){xn.render(wn(e)),Pn.render(_n.search)},In=function(e){var t;t=e,_n.recipe.ingredients.forEach((e=>{e.quantity=e.quantity*t/_n.recipe.servings})),_n.recipe.servings=t,jn.update(_n.recipe)},Nn=function(){_n.recipe.bookmarked?function(e){const t=_n.bookmarks.findIndex((t=>t.id===e));_n.bookmarks.splice(t,1),kn(),e===_n.recipe.id&&(_n.recipe.bookmarked=!1)}(_n.recipe.id):En(_n.recipe),jn.update(_n.recipe),Mn.render(_n.bookmarks)},An=function(){Mn.render(_n.bookmarks)},Rn=async function(e){console.log(e);try{Tn.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient format! Please use the correct format ");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:e.servings,ingredients:t},r=await mn("https://forkify-api.herokuapp.com/api/v2/recipes/?key=015ca3df-05d2-4fa3-884d-7be4efd2c39f",n);console.log(r),_n.recipe=bn(r),console.log(_n.recipe)}catch(e){throw e}}(e),jn.render(_n.recipe),Tn.renderSuccess(),En(_n.recipe),Mn.render(_n.bookmarks),window.history.pushState(null,"",`${_n.recipe.id}`),setTimeout((function(){Tn.toggleWindow()}),2500)}catch(e){console.log(e),Tn.renderError(e.message)}};Mn.addHandlerRender(An),jn.addHandlerRender(Hn),jn.addHandlerUpdateServings(In),jn.addHandlerAddBookmark(Nn),Ln.addHandlerSearch(qn),Pn.addHandlerClick(Fn),Tn.addHandlerUpload(Rn);
//# sourceMappingURL=index.60e8a3e2.js.map
