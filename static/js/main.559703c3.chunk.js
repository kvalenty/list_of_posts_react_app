(this.webpackJsonplist_of_posts_react_app=this.webpackJsonplist_of_posts_react_app||[]).push([[0],{34:function(e,t,n){e.exports=n(47)},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),l=n(13),u=n(5),i=n(30),s=n(7),p=n(12),m=n.n(p),d=n(17),f="https://bloggy-api.herokuapp.com/posts",b=new Headers;b.append("Content-Type","application/json");var O=function(){return{method:"GET",headers:b,redirect:"follow"}},E=function(e){return{method:"POST",headers:b,body:e,redirect:"follow"}},v=function(){var e=Object(d.a)(m.a.mark((function e(t,n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(e,t){return e.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{comments:t.filter((function(t){return t.postId===e.id}))})}))},y=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(f,O());case 2:return n=e.sent,e.next=5,v("https://bloggy-api.herokuapp.com/comments",O());case 5:a=e.sent,r=h(n,a),t({type:"POSTS/LOAD_POSTS",payload:r});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(d.a)(m.a.mark((function e(t,n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=JSON.stringify({title:t,body:n}),fetch(f,E(a)).then((function(e){return e.text()})).catch((function(e){return console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat("https://bloggy-api.herokuapp.com/posts/").concat(t),{method:"DELETE",headers:b,redirect:"follow"}).then((function(e){return e.text()})).catch((function(e){return console.error(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=n(10),w=n(14),T=n(11),P=n(6),_=n(31),x=Object(u.b)((function(e){return e}))((function(e){var t=Object(u.c)(),n=e.post,c=e.editPostHandle,o=Object(a.useState)(n.title),l=Object(g.a)(o,2),i=l[0],s=l[1],p=Object(a.useState)(n.body),m=Object(g.a)(p,2),d=m[0],f=m[1];return r.a.createElement(P.a,{className:"p-4",onSubmit:function(e){!function(e){e.preventDefault(),i.trim()&&d.trim()&&(j(i,d),t({type:"POSTS/UPDATE_POST",payload:{id:n.id,title:i,body:d}}),s(""),f(""))}(e),c()}},r.a.createElement(P.a.Group,{controlId:"formBasicEmail"},r.a.createElement(P.a.Label,null,"Title"),r.a.createElement(P.a.Control,{type:"text",placeholder:"Enter new title",value:i,onChange:function(e){var t=e.target.value;s(t)}})),r.a.createElement(P.a.Group,{controlId:"formBasicPassword"},r.a.createElement(P.a.Label,null,"Text of post"),r.a.createElement(P.a.Control,{type:"text",placeholder:"Enter your post",value:d,onChange:function(e){var t=e.target.value;f(t)}})),r.a.createElement(_.a,null,r.a.createElement(T.a,{variant:"success",type:"submit"},"Submit"),r.a.createElement(T.a,{onClick:c,variant:"secondary",type:"submit"},"Cencel")))})),k=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a.Title,null,e.title),r.a.createElement(w.a.Text,null,e.body))},C=n(32),D=n(22),L=function(e){var t=e.comments;return r.a.createElement(C.a,{className:"flush m-2"},null===t||void 0===t?void 0:t.map((function(e){return r.a.createElement(D.a,{key:e.id},e.body)})))},N=Object(u.b)((function(e){return e}))((function(e){var t,n=e.post,c=Object(u.c)(),o=Object(a.useState)(!1),l=Object(g.a)(o,2),i=l[0],s=l[1],p=Object(a.useState)(!1),m=Object(g.a)(p,2),d=m[0],f=m[1],b=null===(t=n.comments)||void 0===t?void 0:t.length,O=function(){return s(!i)};return r.a.createElement(w.a,{className:"text-center m-3"},r.a.createElement(w.a.Body,null,i&&r.a.createElement(x,{post:n,editPostHandle:O}),!i&&r.a.createElement(k,{title:n.title,body:n.body}),d&&r.a.createElement(L,{comments:n.comments}),r.a.createElement(T.a,{variant:"danger",onClick:function(){window.confirm("Are you sure?")&&(S(n.id),c({type:"POSTS/REMOVE_POST",payload:n.id}))}},"Delete"),r.a.createElement(T.a,{variant:"warning",onClick:O,disabled:i},"Edit"),r.a.createElement(T.a,{variant:"info",onClick:function(){return f(!d)},disabled:!b},"Comments")),r.a.createElement(w.a.Footer,{className:"text-muted"},"Comments: ".concat(b)))})),A=Object(u.b)((function(e){return e}))((function(e){var t=e.posts.posts;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(N,{post:e,key:e.id})})))})),B=Object(u.b)((function(e){return e}))((function(e){var t=Object(u.c)(),n=e.posts.posts,c=0;n.length>0&&(c=n[n.length-1].id);var o=Object(a.useState)(""),l=Object(g.a)(o,2),i=l[0],s=l[1],p=Object(a.useState)(""),m=Object(g.a)(p,2),d=m[0],f=m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{className:"p-4",onSubmit:function(e){e.preventDefault(),i.trim()&&d.trim()&&(j(i,d),t({type:"POSTS/ADD_POST",payload:{id:c+1,title:i,body:d}}),s(""),f(""))}},r.a.createElement(P.a.Group,{controlId:"formBasicEmail"},r.a.createElement(P.a.Label,null,"Title"),r.a.createElement(P.a.Control,{type:"text",placeholder:"Enter new title",value:i,onChange:function(e){var t=e.target.value;s(t)}})),r.a.createElement(P.a.Group,{controlId:"formBasicPassword"},r.a.createElement(P.a.Label,null,"Text of post"),r.a.createElement(P.a.Control,{type:"text",placeholder:"Enter your post",value:d,onChange:function(e){var t=e.target.value;f(t)}})),r.a.createElement(T.a,{variant:"success",type:"submit",block:!0},"Submit")))})),I=Object(u.b)((function(e){return e}))((function(){var e=Object(u.c)();return Object(a.useEffect)((function(){y(e)}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement(A,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=n(33),G={posts:[]},M=Object(l.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POSTS/LOAD_POSTS":return Object(s.a)(Object(s.a)({},e),{},{posts:t.payload});case"POSTS/ADD_POST":return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(F.a)(e.posts),[t.payload])});case"POSTS/UPDATE_POST":var n=t.payload.id,a=e.posts.map((function(e){return n===e.id?t.payload:e}));return Object(s.a)(Object(s.a)({},e),{},{posts:a});case"POSTS/REMOVE_POST":return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.payload}))});default:return e}}}),H=(n(46),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d),J=Object(l.e)(M,H(Object(l.a)(i.a)));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:J},r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.559703c3.chunk.js.map