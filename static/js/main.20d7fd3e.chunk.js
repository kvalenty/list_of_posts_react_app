(this.webpackJsonplist_of_posts_react_app=this.webpackJsonplist_of_posts_react_app||[]).push([[0],{35:function(e,t,a){e.exports=a(48)},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),l=a(13),u=a(7),i=a(32),s=a(6),m=a(11),p=a.n(m),d=a(15),f=function(e){return{type:"POSTS/LOAD_POSTS",payload:e}},O="https://bloggy-api.herokuapp.com/posts",b="https://bloggy-api.herokuapp.com/comments",E=new Headers;E.append("Content-Type","application/json");var v=function(){return{method:"GET",headers:E,redirect:"follow"}},y=function(e){return{method:"POST",headers:E,body:e,redirect:"follow"}},h=function(){var e=Object(d.a)(p.a.mark((function e(t,a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,a);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),S=function(e,t){return e.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{comments:t.filter((function(t){return t.postId===e.id}))})}))},j=function(){var e=Object(d.a)(p.a.mark((function e(t){var a,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(O,v());case 2:return a=e.sent,e.next=5,h(b,v());case 5:n=e.sent,r=S(a,n),t({type:"COMMENTS/LOAD_COMMENTS",payload:n}),t(f(r));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(d.a)(p.a.mark((function e(t,a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=JSON.stringify({title:t,body:a}),fetch(O,y(n)).then((function(e){return e.text()})).catch((function(e){return console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(p.a.mark((function e(t,a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=JSON.stringify({postId:t,body:a}),fetch(b,y(n)).then((function(e){return e.text()})).catch((function(e){return console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(O,"/").concat(t),{method:"DELETE",headers:E,redirect:"follow"}).then((function(e){return e.text()})).catch((function(e){return console.error(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=a(8),_=a(14),C=a(9),x=a(5),k=a(18),D=a(33),N=Object(u.b)((function(e){return e}))((function(e){var t=Object(u.c)(),a=e.post,c=e.editPostHandle,o=Object(n.useState)(a.title),l=Object(P.a)(o,2),i=l[0],s=l[1],m=Object(n.useState)(a.body),p=Object(P.a)(m,2),d=p[0],f=p[1];return r.a.createElement(x.a,{className:"p-4",onSubmit:function(e){!function(e){e.preventDefault(),i.trim()&&d.trim()&&(T(i,d),t({type:"POSTS/UPDATE_POST",payload:{id:a.id,title:i,body:d}}),s(""),f(""))}(e),c()}},r.a.createElement(x.a.Group,{controlId:"formBasicEmail"},r.a.createElement(x.a.Label,null,"Title"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter new title",value:i,onChange:function(e){var t=e.target.value;s(t)}})),r.a.createElement(x.a.Group,{controlId:"formBasicPassword"},r.a.createElement(x.a.Label,null,"Text of post"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter your post",value:d,onChange:function(e){var t=e.target.value;f(t)}})),r.a.createElement(D.a,null,r.a.createElement(C.a,{variant:"success",type:"submit"},"Submit"),r.a.createElement(C.a,{onClick:c,variant:"secondary",type:"submit"},"Cencel")))})),M=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a.Title,null,e.title),r.a.createElement(_.a.Text,null,e.body))},A=a(34),L=a(23),I=function(e){var t=e.comments;return r.a.createElement(A.a,{className:"flush m-2"},null===t||void 0===t?void 0:t.map((function(e){return r.a.createElement(L.a,{key:e.id},e.body)})))},B=Object(u.b)((function(e){return e}))((function(e){var t,a=e.post,c=Object(u.c)(),o=Object(n.useState)(!1),l=Object(P.a)(o,2),i=l[0],s=l[1],m=Object(n.useState)(!1),p=Object(P.a)(m,2),d=p[0],f=p[1],O=Object(n.useState)(!1),b=Object(P.a)(O,2),E=b[0],v=b[1],y=Object(n.useState)(""),h=Object(P.a)(y,2),S=h[0],j=h[1],T=null===(t=a.comments)||void 0===t?void 0:t.length,D=function(){return s(!i)};return r.a.createElement(_.a,{className:"text-center m-3"},r.a.createElement(_.a.Body,null,i&&r.a.createElement(N,{post:a,editPostHandle:D}),!i&&r.a.createElement(M,{title:a.title,body:a.body}),d&&r.a.createElement(I,{comments:a.comments}),E&&r.a.createElement(x.a,{className:"p-4"},r.a.createElement(x.a.Row,{className:"align-items-end"},r.a.createElement(k.a,null,r.a.createElement(x.a.Label,null,"Add new comment"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter new comment",value:S,onChange:function(e){j(e.target.value)}})),r.a.createElement(k.a,null,r.a.createElement(C.a,{variant:"secondary",onClick:function(){S.trim()&&(w(a.id,S),c({type:"POSTS/UPDATE_COMMENTS",payload:{postId:a.id,body:S}}),v(!E),j(""))}},"Submit")))),r.a.createElement(C.a,{variant:"danger",onClick:function(){window.confirm("Are you sure?")&&(g(a.id),c({type:"POSTS/REMOVE_POST",payload:a.id}))}},"Delete"),r.a.createElement(C.a,{variant:"warning",onClick:D,disabled:i},"Edit post"),r.a.createElement(C.a,{variant:"info",onClick:function(){return f(!d)},disabled:!T},d?"Hide comments":"Show comments"),r.a.createElement(C.a,{variant:"primary",onClick:function(){return v(!E)}},"Add comment")),r.a.createElement(_.a.Footer,{className:"text-muted"},"Comments: ".concat(T)))})),F=Object(u.b)((function(e){return e}))((function(e){var t=e.posts.posts;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(B,{post:e,key:e.id})})))})),G=Object(u.b)((function(e){return e}))((function(e){var t=Object(u.c)(),a=e.posts.posts,c=0;a.length>0&&(c=a[a.length-1].id);var o=Object(n.useState)(""),l=Object(P.a)(o,2),i=l[0],s=l[1],m=Object(n.useState)(""),p=Object(P.a)(m,2),d=p[0],f=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{className:"p-4",onSubmit:function(e){e.preventDefault(),i.trim()&&d.trim()&&(T(i,d),t({type:"POSTS/ADD_POST",payload:{id:c+1,title:i,body:d}}),s(""),f(""))}},r.a.createElement(x.a.Group,{controlId:"formBasicEmail"},r.a.createElement(x.a.Label,null,"Title"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter new title",value:i,onChange:function(e){var t=e.target.value;s(t)}})),r.a.createElement(x.a.Group,{controlId:"formBasicPassword"},r.a.createElement(x.a.Label,null,"Text of post"),r.a.createElement(x.a.Control,{type:"text",placeholder:"Enter your post",value:d,onChange:function(e){var t=e.target.value;f(t)}})),r.a.createElement(C.a,{variant:"success",type:"submit",block:!0},"Submit")))})),U=Object(u.b)((function(e){return e}))((function(){var e=Object(u.c)();return Object(n.useEffect)((function(){j(e)}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null),r.a.createElement(F,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(29),J={posts:[],comments:[]},R=Object(l.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POSTS/LOAD_POSTS":return Object(s.a)(Object(s.a)({},e),{},{posts:t.payload});case"COMMENTS/LOAD_COMMENTS":return Object(s.a)(Object(s.a)({},e),{},{posts:t.payload,comments:t.payload});case"POSTS/ADD_POST":return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(H.a)(e.posts),[t.payload])});case"POSTS/UPDATE_POST":var a=t.payload.id,n=e.posts.map((function(e){return a===e.id?t.payload:e}));return Object(s.a)(Object(s.a)({},e),{},{posts:n});case"POSTS/UPDATE_COMMENTS":var r=t.payload.postId,c=e.comments.length-1,o=e.comments[c].id,l=e.posts.map((function(e){var a=e.comments;return r===e.id?Object(s.a)(Object(s.a)({},e),{},{comments:[].concat(Object(H.a)(a),[Object(s.a)({id:o+1},t.payload)])}):e}));return Object(s.a)(Object(s.a)({},e),{},{posts:l});case"POSTS/REMOVE_POST":return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==+t.payload}))});default:return e}}}),V=(a(47),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d),W=Object(l.e)(R,V(Object(l.a)(i.a)));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:W},r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.20d7fd3e.chunk.js.map