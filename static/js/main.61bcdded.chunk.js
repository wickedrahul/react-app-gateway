(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(t,e,n){t.exports={row:"Counter_row__3Vx9O",value:"Counter_value__1koVe",button:"Counter_button__1VzYs",textbox:"Counter_textbox__ruMhb",asyncButton:"Counter_asyncButton__92K1i Counter_button__1VzYs"}},17:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),u=(n(17),n(6)),i=n(3),s=n(10),l=n.n(s),d=n(12),p=n(2);function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(e){return setTimeout((function(){return e({data:t})}),500)}))}var j=Object(p.b)("counter/fetchCount",function(){var t=Object(d.a)(l.a.mark((function t(e,n){var r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.amount,a=n.rejectWithValue,t.prev=2,t.next=5,b(r);case 5:return t.abrupt("return",t.sent);case 8:return t.prev=8,t.t0=t.catch(2),t.abrupt("return",a(t.t0));case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e,n){return t.apply(this,arguments)}}()),h=n(11),x=n.n(h),f=n(1);function v(){Object(i.c)((function(t){return t})).user;var t=Object(i.b)(),e=Object(r.useState)("2"),n=Object(u.a)(e,2),o=n[0],c=(n[1],Number(o)||0),s=a.a.useState(""),l=Object(u.a)(s,2),d=l[0],p=l[1],b=a.a.useState(""),h=Object(u.a)(b,2),v=h[0],O=h[1];return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:x.a.row,style:{marginTop:"100px"},children:[Object(f.jsx)("input",{type:"text",style:{margin:"5px",padding:"10px"},placeholder:"email",onChange:function(t){p(t.target.value)}}),Object(f.jsx)("input",{type:"text",style:{margin:"5px",padding:"10px"},placeholder:"password",onChange:function(t){O(t.target.value)}}),Object(f.jsx)("button",{className:x.a.asyncButton,onClick:function(){alert(d),alert(v),t(j(c))},children:"Login"})]})})}n(24);var O,m=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(v,{})})},g=n(5),_=Object(p.c)({name:"user",initialState:{isLoading:!0},reducers:{},extraReducers:(O={},Object(g.a)(O,j.pending,(function(t){t.isLoading=!0})),Object(g.a)(O,j.fulfilled,(function(t,e){var n=e.payload.data;t.value=n})),Object(g.a)(O,j.rejected,(function(t,e){t.isLoading=!1,t.error=e.payload.error})),O)}),w=Object(p.a)({reducer:{user:_.reducer}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(i.a,{store:w,children:Object(f.jsx)(m,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.61bcdded.chunk.js.map