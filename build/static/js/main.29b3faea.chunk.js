(this["webpackJsonpchat-lite"]=this["webpackJsonpchat-lite"]||[]).push([[0],{150:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(8),c=a.n(s),o=(a(91),a(18)),i=a(28),u=a.n(i),l=a(41),j=a(19),d=a(43),m=a.n(d),b=a(81),p=function(e,t){switch(t.type){case"JOINED":return Object(o.a)(Object(o.a)({},e),{},{joined:!0,userName:t.payload.userName,roomId:t.payload.roomId});case"SET_USERS":return Object(o.a)(Object(o.a)({},e),{},{users:t.payload});case"NEW_MESSAGE":return Object(o.a)(Object(o.a)({},e),{},{messages:[].concat(Object(b.a)(e.messages),[t.payload])});default:return e}},O=a(183),x=a(184),h=a(79),f=a.n(h)()(),v=a(6);function N(e){var t=e.onLogin,a=n.a.useState("1"),r=Object(j.a)(a,2),s=r[0],c=r[1],o=n.a.useState(""),i=Object(j.a)(o,2),d=i[0],b=i[1],p=n.a.useState(!1),h=Object(j.a)(p,2),f=h[0],N=h[1],g=function(){var e=Object(l.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d||!s){e.next=4;break}return e.abrupt("return",alert("Enter your name"));case 4:if(s||!d){e.next=8;break}return e.abrupt("return",alert("Enter Room ID"));case 8:if(d||s){e.next=10;break}return e.abrupt("return",alert("Enter Room ID and Name"));case 10:return a={roomId:s,userName:d},N(!0),e.next=14,m.a.post("/rooms",a);case 14:return e.next=16,t(a);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"join-block",children:[Object(v.jsx)(O.a,{className:"input",label:"Room",variant:"filled",value:s,required:!0,color:"secondary",onChange:function(e){return c(e.target.value)}}),Object(v.jsx)(O.a,{className:"input",label:"Name",variant:"filled",value:d,required:!0,color:"secondary",onChange:function(e){return b(e.target.value)}}),Object(v.jsx)(x.a,{disabled:f,onClick:g,variant:"contained",color:"primary",size:"medium",children:f?"Joining...":"Join Room"})]})}a(150);var g=function(e){var t=e.users,a=e.messages,r=e.userName,s=e.roomId,c=e.onAddMessage,o=n.a.useState(""),i=Object(j.a)(o,2),u=i[0],l=i[1],d=n.a.useState(""),m=Object(j.a)(d,2),b=m[0];return m[1],Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("h1",{children:["Room ",s]}),Object(v.jsxs)("div",{className:"chatbox",children:[Object(v.jsxs)("div",{className:"chatbox__user-list",children:[Object(v.jsxs)("h1",{children:["Online (",t.length,"):"]}),t.map((function(e,t){return Object(v.jsx)("div",{className:"chatbox__user--active",children:Object(v.jsx)("p",{children:e})},e+t)}))]}),Object(v.jsx)("div",{className:"chatbox__messages",children:function(e){return e.length>7?(e.splice(0,1),e):e}(a).map((function(e,t){return Object(v.jsx)("div",{className:"chatbox__messages__user-message",children:Object(v.jsxs)("div",{className:"chatbox__messages__user-message--ind-message",children:[Object(v.jsx)("p",{className:"name",children:e.userName}),Object(v.jsx)("br",{}),Object(v.jsx)("p",{className:"message",children:Object(v.jsx)("b",{children:e.text})})]})},e+t)}))}),Object(v.jsx)("form",{onSubmit:function(e){e.preventDefault(),u.trim()&&(f.emit("roomNewMessage",{roomId:s,userName:r,text:u}),c({userName:r,text:u}),l(""))},children:Object(v.jsx)("input",{value:u,onChange:function(e){return l(e.target.value)},type:"text",placeholder:b||"Enter your message"})})]})]})};var y=function(){var e=n.a.useReducer(p,{joined:!1,roomId:null,userName:null,users:[],messages:[]}),t=Object(j.a)(e,2),a=t[0],r=t[1],s=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"JOINED",payload:t}),f.emit("roomJoin",t),e.next=4,m.a.get("/rooms/".concat(t.roomId));case 4:a=e.sent,n=a.data,c(n.users);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(e){r({type:"SET_USERS",payload:e})},i=function(e){r({type:"NEW_MESSAGE",payload:e})};return n.a.useEffect((function(){f.on("roomSetUsers",c),f.on("roomNewMessage",i)}),[]),Object(v.jsx)("div",{className:"App",children:Object(v.jsx)("div",{className:"wrapper",children:a.joined?Object(v.jsx)(g,Object(o.a)(Object(o.a)({},a),{},{onAddMessage:i})):Object(v.jsx)(N,{onLogin:s})})})};c.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(y,{})}),document.getElementById("root"))},91:function(e,t,a){}},[[151,1,2]]]);
//# sourceMappingURL=main.29b3faea.chunk.js.map