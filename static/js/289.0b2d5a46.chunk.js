"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[289],{155:function(t,e,n){n.d(e,{O:function(){return s}});var r=n(87),a=n(689),u={list:"MoviesList_list__0Owr9",itemLink:"MoviesList_itemLink__6tK9W"},c=n(184),s=function(t){var e=t.movies,n=(0,a.TH)();return(0,c.jsx)("ul",{className:u.list,children:e.map((function(t){var e=t.id,a=t.title;return(0,c.jsx)("li",{className:u.listItem,children:(0,c.jsx)(r.rU,{to:"/movies/".concat(e),state:{from:n},className:u.itemLink,children:a})},e)}))})}},289:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(439),a=n(87),u=n(155),c=n(234),s=n(791),i=n(596),o={input:"SearchBox_input__oapIq",submitBtn:"SearchBox_submitBtn__etWvy",noResMess:"SearchBox_noResMess__+cyEx"},l=n(184),f=function(t){var e=t.onSubmitInput,n=(0,s.useState)(""),a=(0,r.Z)(n,2),u=a[0],c=a[1];return(0,l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==u.trim()?(e(u),c("")):i.Am.error("Please write something!",{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"colored"})},className:o.from,children:[(0,l.jsx)("input",{type:"text",placeholder:"Search films",value:u,autoFocus:!0,onChange:function(t){var e=t.currentTarget.value;c(e)},autoComplete:"off",className:o.input}),(0,l.jsx)("button",{type:"submit",className:o.submitBtn,children:"Search"})]})},p=function(t){var e=t.search;return(0,l.jsxs)("p",{className:o.noResMess,children:["There is no movies matching your search: '",e,"'"]})},m=function(){var t,e=(0,s.useState)([]),n=(0,r.Z)(e,2),i=n[0],o=n[1],m=(0,a.lr)(),v=(0,r.Z)(m,2),h=v[0],d=v[1],g=null!==(t=h.get("query"))&&void 0!==t?t:"";return(0,s.useEffect)((function(){if(g)try{(0,c.z1)(g).then((function(t){return o(t)}))}catch(t){console.log(t)}}),[g]),(0,l.jsxs)("div",{style:{position:"relative"},children:[(0,l.jsx)(f,{onSubmitInput:function(t){d(""!==t?{query:t}:{})}}),0!==i.length&&(0,l.jsx)(u.O,{movies:i}),0===i.length&&""!==g&&(0,l.jsx)(p,{search:g})]})},v=function(){return(0,l.jsx)(m,{})}},234:function(t,e,n){n.d(e,{Hg:function(){return i},TP:function(){return l},tx:function(){return p},z1:function(){return o},zv:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="?api_key=8342d698457bbb39c567b3c209d2c795",i=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie".concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e).concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews").concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=289.0b2d5a46.chunk.js.map