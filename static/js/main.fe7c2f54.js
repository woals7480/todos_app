(()=>{"use strict";var e={5675:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var n=r(4942),i=r(5861),o=r(885),a=r(3292),l=r(2550),u=r(9233),c=r(1133),s=r(1451),f=r(3497),d=r(7922),y=r(8859),p=r(7132),h={bg:"black",grey:"#3A3D40",TodoBg:"#5C5C60"},g=r(9526),b=r(5519),v=r(5738),j=r(2640),x=r(2450),O=r(7557);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(){var e=(0,g.useState)(!0),t=(0,o.default)(e,2),r=t[0],l=t[1],m=(0,g.useState)(""),D=(0,o.default)(m,2),P=D[0],T=D[1],k=(0,g.useState)(""),C=(0,o.default)(k,2),E=C[0],z=C[1],I=(0,g.useState)({}),A=(0,o.default)(I,2),J=A[0],N=A[1];(0,g.useEffect)((function(){H(),_()}),[]);var _=function(){var e=(0,i.default)((function*(){try{var e=yield b.default.getItem("@header");l(JSON.parse(e).isActive)}catch(t){alert("\uc5d0\ub7ec\uac00 \ub0ac\uc2b5\ub2c8\ub2e4.")}}));return function(){return e.apply(this,arguments)}}(),B=function(){var e=(0,i.default)((function*(){try{yield b.default.setItem("@header",JSON.stringify({isActive:!0})),l(!0)}catch(e){alert("\uc5d0\ub7ec\uac00 \ub0ac\uc2b5\ub2c8\ub2e4.")}}));return function(){return e.apply(this,arguments)}}(),L=function(){var e=(0,i.default)((function*(){try{yield b.default.setItem("@header",JSON.stringify({isActive:!1})),l(!1)}catch(e){alert("\uc5d0\ub7ec\uac00 \ub0ac\uc2b5\ub2c8\ub2e4.")}}));return function(){return e.apply(this,arguments)}}(),M=function(){var e=(0,i.default)((function*(e){try{yield b.default.setItem("@toDos",JSON.stringify(e))}catch(t){alert("\uc5d0\ub7ec\uac00 \ub0ac\uc2b5\ub2c8\ub2e4.")}}));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=(0,i.default)((function*(){try{var e=yield b.default.getItem("@toDos");e&&N(JSON.parse(e))}catch(t){alert("\uc5d0\ub7ec\uac00 \ub0ac\uc2b5\ub2c8\ub2e4.")}}));return function(){return e.apply(this,arguments)}}(),K=function(e){return z(e)};return(0,O.jsxs)(c.default,{style:S.container,children:[(0,O.jsx)(a.default,{style:"auto"}),(0,O.jsxs)(c.default,{style:S.header,children:[(0,O.jsx)(s.default,{onPress:B,children:(0,O.jsx)(u.default,{style:w(w({},S.btnText),{},{color:r?"white":h.grey}),children:"Work"})}),(0,O.jsx)(s.default,{onPress:L,children:(0,O.jsx)(u.default,{style:w(w({},S.btnText),{},{color:r?h.grey:"white"}),children:"Travel"})})]}),(0,O.jsx)(f.default,{placeholder:r?"\ud574\uc57c\ud560 \uc77c\uc744 \uc801\uc73c\uc138\uc694.":"\uac00\uace0\uc2f6\uc740 \uacf3\uc744 \uc801\uc73c\uc138\uc694.",onChangeText:function(e){return T(e)},onSubmitEditing:function(){if(""!==P){var e=Object.assign({},J,(0,n.default)({},Date.now(),{text:P,isActive:r,isDone:!1,isEdit:!1}));N(e),M(e),T("")}},returnKeyType:"done",style:S.input}),(0,O.jsx)(d.default,{children:Object.keys(J).map((function(e){return J[e].isActive===r?J[e].isEdit?(0,O.jsx)(f.default,{placeholder:"\uc218\uc815\ud560 \ub0b4\uc6a9\uc744 \uc801\uc73c\uc138\uc694.",onChangeText:K,onSubmitEditing:function(){!function(e){var t=w({},J);t[e].text=E,t[e].isEdit=!1,N(t),M(t)}(e)},returnKeyType:"done",style:S.input},e):(0,O.jsxs)(c.default,{style:S.toDo,children:[(0,O.jsx)(u.default,{style:w(w({},S.toDoText),{},{textDecorationLine:J[e].isDone?"line-through":"none",color:""+(J[e].isDone?h.grey:"white")}),children:J[e].text}),(0,O.jsxs)(c.default,{style:S.icons,children:[(0,O.jsx)(s.default,{onPress:function(){return function(e){var t=w({},J);t[e].isDone?t[e].isDone=!1:t[e].isDone=!0,N(t),M(t)}(e)},children:(0,O.jsx)(v.default,{name:"checkmark-done",size:24,color:"black"})}),(0,O.jsx)(s.default,{onPress:function(){return function(e){var t=w({},J);t[e].isEdit=!0,N(t),M(t)}(e)},children:(0,O.jsx)(j.default,{name:"edit",size:20,color:"lightgray",style:{marginLeft:5}})}),(0,O.jsx)(s.default,{onPress:function(){return function(e){if("web"===p.default.OS){if(confirm("\uc815\ub9d0\ub85c \uc0ad\uc81c\ud558\uaca0\uc2b5\ub2c8\uae4c ?")){var t=w({},J);delete t[e],N(t),M(t)}}else y.default.alert("\uc815\ub9d0\ub85c \uc0ad\uc81c\ud558\uaca0\uc2b5\ub2c8\uae4c ?","",[{text:"\uc608",style:"destructive",onPress:function(){var t=w({},J);delete t[e],N(t),M(t)}},{text:"\uc544\ub2c8\uc694"}])}(e)},style:{marginLeft:10},children:(0,O.jsx)(x.default,{name:"trash",size:18,color:"lightgray"})})]})]},e):null}))})]})}var S=l.default.create({container:{flex:1,backgroundColor:h.bg,paddingHorizontal:20},header:{flexDirection:"row",marginTop:100,justifyContent:"space-between"},btnText:{fontSize:42,fontWeight:"600"},input:{backgroundColor:"white",padding:15,borderRadius:30,marginVertical:20,fontSize:16},toDo:{backgroundColor:h.TodoBg,marginBottom:20,paddingVertical:20,paddingHorizontal:30,borderRadius:12,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},toDoText:{fontSize:16},icons:{flexDirection:"row",alignItems:"center"}})}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,(()=>{var e=[];r.O=(t,n,i,o)=>{if(!n){var a=1/0;for(s=0;s<e.length;s++){for(var[n,i,o]=e[s],l=!0,u=0;u<n.length;u++)(!1&o||a>=o)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(l=!1,o<a&&(a=o));if(l){e.splice(s--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,i,o]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,[a,l,u]=n,c=0;if(a.some((t=>0!==e[t]))){for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(u)var s=u(r)}for(t&&t(n);c<a.length;c++)o=a[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(s)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[637],(()=>r(9484)));n=r.O(n)})();
//# sourceMappingURL=main.fe7c2f54.js.map