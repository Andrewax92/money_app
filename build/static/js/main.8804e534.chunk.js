(this["webpackJsonpmy-money"]=this["webpackJsonpmy-money"]||[]).push([[0],{27:function(e,t,n){e.exports={container:"Home_container__3bftD",content:"Home_content__18qU0",sidebar:"Home_sidebar__21xz5",transactions:"Home_transactions__3_tqr",name:"Home_name__4a_Tj",amount:"Home_amount__1MW_9"}},39:function(e,t,n){e.exports={navbar:"Navbar_navbar__27XP9",title:"Navbar_title__1us0q"}},45:function(e,t,n){e.exports={"login-form":"Login_login-form__1NBYb"}},46:function(e,t,n){e.exports={"signup-form":"Signup_signup-form__3B7tC"}},51:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n.n(c),a=n(43),s=n.n(a),u=(n(51),n(30)),o=n(13),i=n(0),j=n(1),l=n(9),b=n(23),O=n(44),d=n(18),p=Object(O.a)({apiKey:"AIzaSyBzZ1OnFBf9RteYI8ha-TnxhlInbE9w1h4",authDomain:"money-tracker-1ed44.firebaseapp.com",projectId:"money-tracker-1ed44",storageBucket:"money-tracker-1ed44.appspot.com",messagingSenderId:"315155896293",appId:"1:315155896293:web:e1e9cc46fe3017972a010c"}),f=Object(d.f)(p),h=Object(b.b)(p),x=n(17),m=n(8),v=Object(c.createContext)(),g=function(e,t){switch(t.type){case"LOGIN":return Object(x.a)(Object(x.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(x.a)(Object(x.a)({},e),{},{user:null});case"AUTH_IS_READY":return Object(x.a)(Object(x.a)({},e),{},{user:t.payload,authIsReady:!0});default:return e}},y=function(e){var t=e.children,n=Object(c.useReducer)(g,{user:null,authIsReady:!1}),r=Object(l.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){var e=Object(b.c)(h,(function(t){s({type:"AUTH_IS_READY",payload:t}),e()}))}),[]),console.log("AuthContext",a),Object(m.jsx)(v.Provider,{value:Object(x.a)(Object(x.a)({},a),{},{dispatch:s}),children:t})},_=function(){var e=Object(c.useContext)(v);if(!e)throw new Error("useAuthContext must be inside an AuthContextProvider");return e},N=n(39),S=n.n(N),D=function(){var e=_().user,t=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(l.a)(a,2),u=s[0],o=s[1],O=Object(c.useState)(!1),d=Object(l.a)(O,2),p=d[0],f=d[1],x=_().dispatch,m=function(){var e=Object(j.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(null),f(!0),e.prev=2,e.next=5,Object(b.e)(h);case 5:x({type:"LOGOUT"}),n||(f(!1),o(null)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),n||(console.log(e.t0),o(e.t0.message),f(!1));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return r(!0)}}),[]),{error:u,logout:m,isPending:p}}(),n=t.logout;return console.log("Navbar",e),Object(m.jsx)("nav",{className:S.a.navbar,children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{className:S.a.title,children:"moneyAPP"}),!e&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("li",{children:[" ",Object(m.jsx)(u.b,{to:"/login",children:"Login"})]}),Object(m.jsxs)("li",{children:[" ",Object(m.jsx)(u.b,{to:"/signup",children:"Signup"})]})]}),e&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("li",{children:["hello,",e.displayName]}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{className:"btn",onClick:n,children:"Logout"})})]})]})})},E=n(27),w=n.n(E),k={document:null,isPending:!1,error:null,success:null},C=function(e,t){switch(t.type){case"IS_PENDING":return{isPending:!0,document:null,success:!1,error:null};case"ADDED_DOCUMENT":return{isPending:!1,document:t.payload,success:!0,error:null};case"ERROR":return{isPending:!1,document:null,success:!1,error:t.payload};case"DELETED_DOCUMENT":return{isPending:!1,document:t.payload,success:!1,error:null};default:return e}},I=function(e){var t=Object(c.useReducer)(C,k),n=Object(l.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(!1),u=Object(l.a)(s,2),o=u[0],b=u[1],O=Object(d.c)(f,e),p=function(e){o||a(e)},h=function(){var e=Object(j.a)(Object(i.a)().mark((function e(t){var n,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"IS_PENDING"}),e.prev=1,n=d.a.fromDate(new Date),e.next=5,Object(d.b)(O,Object(x.a)(Object(x.a)({},t),{},{createdAt:n}));case 5:c=e.sent,console.log("The added Document is",c),p({type:"ADDED_DOCUMENT",payload:c}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),p({type:"ERROR",payload:e.t0});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(Object(i.a)().mark((function e(t){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"IS_PENDING"}),e.prev=1,e.next=4,Object(d.d)(Object(d.e)(f,"transactions",t));case 4:n=e.sent,p({type:"DELETED_DOCUMENT",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),p({type:"ERROR",payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return b(!0)}}),[]),{addDocument:h,deleteDocument:m,state:r}},R=function(e){var t=e.uid,n=Object(c.useState)(""),r=Object(l.a)(n,2),a=r[0],s=r[1],u=Object(c.useState)(""),o=Object(l.a)(u,2),b=o[0],O=o[1],d=I("transactions"),p=d.addDocument,f=d.state,h=function(){var e=Object(j.a)(Object(i.a)().mark((function e(n){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(t,a,b),e.next=4,p({uid:t,name:a,amount:b});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){f.success&&(s(""),O(""))}),[f.success]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{children:"Add a Transaction"}),Object(m.jsxs)("form",{onSubmit:h,children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"Transaction name : "}),Object(m.jsx)("input",{type:"text",required:!0,onChange:function(e){return s(e.target.value)},value:a})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"Amount ($): "}),Object(m.jsx)("input",{type:"number",required:!0,onChange:function(e){return O(e.target.value)},value:b})]}),Object(m.jsx)("button",{children:"Add transaction"})]})]})},P=n(14),A=function(e){var t=e.transactions,n=I("transactions"),c=n.deleteDocument,r=n.state;return console.log(r),Object(m.jsx)("ul",{className:w.a.transactions,children:t.map((function(e){return Object(m.jsxs)("li",{children:[Object(m.jsx)("p",{className:w.a.name,children:e.name}),Object(m.jsxs)("p",{className:w.a.amount,children:["$",e.amount]}),Object(m.jsx)("button",{onClick:function(){return c(e.id)},children:"x"})]},e.id)}))})},T=function(){var e=_().user,t=function(e,t,n){var r=Object(c.useState)(null),a=Object(l.a)(r,2),s=a[0],u=a[1],o=Object(c.useState)(null),i=Object(l.a)(o,2),j=i[0],b=i[1];console.log(s);var O=Object(c.useRef)(t).current,p=Object(c.useRef)(n).current;return Object(c.useEffect)((function(){var t=Object(d.c)(f,e);O&&(t=Object(d.i)(Object(d.c)(f,e),d.j.apply(void 0,Object(P.a)(O)))),p&&(t=Object(d.i)(Object(d.c)(f,e),d.j.apply(void 0,Object(P.a)(O)),d.h.apply(void 0,Object(P.a)(p))));var n=Object(d.g)(t,(function(e){var t=[];e.docs.forEach((function(e){t.push(Object(x.a)(Object(x.a)({},e.data()),{},{id:e.id}))})),u(t),b(null)}),(function(e){console.log(e),b("Could not fetchData")}));return function(){return n()}}),[e,O]),{documents:s,error:j}}("transactions",["uid","==",e.uid],["createdAt","desc"]),n=t.documents,r=t.error;return console.log("The user is",e.uid),Object(m.jsxs)("div",{className:w.a.container,children:[Object(m.jsxs)("div",{className:w.a.content,children:[r&&Object(m.jsx)("p",{children:r}),n&&Object(m.jsx)(A,{transactions:n})]}),Object(m.jsx)("div",{className:w.a.sidebar,children:Object(m.jsx)(R,{uid:e.uid})})]})},L=n(45),U=n.n(L),G=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),u=s[0],o=s[1],O=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(l.a)(a,2),u=s[0],o=s[1],O=Object(c.useState)(!1),d=Object(l.a)(O,2),p=d[0],f=d[1],x=_().dispatch,m=function(){var e=Object(j.a)(Object(i.a)().mark((function e(t,c){var r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(null),f(!0),e.prev=2,e.next=5,Object(b.d)(h,t,c);case 5:r=e.sent,x({type:"LOGIN",payload:r.user}),n||(f(!1),o(null)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),n||(console.log(e.t0),o(e.t0.message),f(!1));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return r(!0)}}),[]),{error:u,login:m,isPending:p}}(),d=O.login,p=O.error,f=O.isPending;return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d(n,u)},className:U.a["login-form"],children:[Object(m.jsx)("h2",{children:"Login"}),Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"email:"}),Object(m.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)},value:n})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"password:"}),Object(m.jsx)("input",{type:"current-password",onChange:function(e){return o(e.target.value)},value:u})]}),!f&&Object(m.jsx)("button",{className:"btn",children:"Login"}),f&&Object(m.jsx)("button",{className:"btn",disabled:!0,children:" Loading..."}),p&&Object(m.jsx)("p",{children:p})]})},H=n(46),B=n.n(H),M=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),u=s[0],O=s[1],d=Object(c.useState)(""),p=Object(l.a)(d,2),f=p[0],x=p[1],v=(Object(o.n)(),function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(l.a)(a,2),u=s[0],o=s[1],O=Object(c.useState)(!1),d=Object(l.a)(O,2),p=d[0],f=d[1],x=_().dispatch,m=function(){var e=Object(j.a)(Object(i.a)().mark((function e(t,c,r){var a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(null),f(!0),e.prev=2,e.next=5,Object(b.a)(h,t,c);case 5:if(a=e.sent,console.log("Response is",a),x({type:"LOGIN",payload:a.user}),a){e.next=10;break}throw new Error("Could not complete signUp");case 10:return e.next=12,Object(b.f)(h.currentUser,{displayName:r});case 12:n||(f(!1),o(null)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),n||(console.log(e.t0),f(!1),o(null));case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t,n,c){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return r(!0)}}),[]),{error:u,isPending:p,signup:m}}()),g=v.signup,y=v.error,N=v.isPending,S=function(){var e=Object(j.a)(Object(i.a)().mark((function e(t){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,g(n,u,f);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("form",{onSubmit:S,className:B.a["signup-form"],children:[Object(m.jsx)("h2",{children:"Login"}),Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"display name:"}),Object(m.jsx)("input",{type:"text",onChange:function(e){return x(e.target.value)},value:f})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"email:"}),Object(m.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)},value:n})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"password:"}),Object(m.jsx)("input",{type:"current-password",onChange:function(e){return O(e.target.value)},value:u})]}),!N&&Object(m.jsx)("button",{className:"btn",children:"Signup"}),N&&Object(m.jsx)("button",{className:"btn",disabled:!0,children:"Loading"}),y&&Object(m.jsx)("p",{children:y})]})};var q=function(){var e=_(),t=e.authIsReady,n=e.user;return Object(m.jsx)("div",{className:"App",children:t&&Object(m.jsxs)(u.a,{children:[Object(m.jsx)(D,{}),Object(m.jsxs)(o.d,{children:[Object(m.jsx)(o.b,{path:"/",element:n?Object(m.jsx)(T,{}):Object(m.jsx)(o.a,{to:"/login"})}),Object(m.jsx)(o.b,{path:"/login",element:n?Object(m.jsx)(o.a,{to:"/"}):Object(m.jsx)(G,{})}),Object(m.jsx)(o.b,{path:"/signup",element:n?Object(m.jsx)(o.a,{to:"/"}):Object(m.jsx)(M,{})})]})]})})};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(y,{children:Object(m.jsx)(q,{})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.8804e534.chunk.js.map