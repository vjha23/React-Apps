(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),i=n(6),o=n.n(i),a=(n(13),n(4)),j=n.n(a),u=n(7),l=n(2),b=function(){return Object(c.jsx)("div",{className:"loading",children:Object(c.jsx)("h1",{children:"loading..."})})},d=n(5),h=function(e){var t=e.id,n=e.image,s=e.info,i=e.name,o=e.price,a=e.removeTour,j=Object(r.useState)(!1),u=Object(l.a)(j,2),b=u[0],d=u[1];return Object(c.jsxs)("article",{className:"single-tour",children:[Object(c.jsx)("img",{src:n,alt:i}),Object(c.jsxs)("footer",{children:[Object(c.jsxs)("div",{className:"tour-info",children:[Object(c.jsx)("h4",{children:i}),Object(c.jsxs)("h4",{className:"tour-price",children:["$",o]})]}),Object(c.jsxs)("p",{children:[b?s:"".concat(s.substring(0,200),"..."),Object(c.jsx)("button",{onClick:function(){return d(!b)},children:b?"show less":"read more"})]}),Object(c.jsx)("button",{className:"delete-btn",onClick:function(){return a(t)},children:"not interested"})]})]})},O=function(e){return Object(c.jsxs)("section",{children:[Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{children:"our tours"}),Object(c.jsx)("div",{className:"underline"})]}),Object(c.jsx)("div",{children:e.tours.map((function(t){return Object(c.jsx)(h,Object(d.a)(Object(d.a)({},t),{},{removeTour:e.removeTour}),t.id)}))})]})};var x=function(){var e=Object(r.useState)(!0),t=Object(l.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)([]),o=Object(l.a)(i,2),a=o[0],d=o[1],h=function(){var e=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,fetch("https://course-api.com/react-tours-project");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,d(n),s(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),s(!1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){h()}),[]),n?Object(c.jsx)("main",{children:Object(c.jsx)(b,{})}):0===a.length?Object(c.jsx)("main",{children:Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{children:"no tours left"}),Object(c.jsx)("button",{className:"btn",onClick:function(){return h()},children:"refresh"})]})}):Object(c.jsx)("main",{children:Object(c.jsx)(O,{tours:a,removeTour:function(e){var t=a.filter((function(t){return t.id!==e}));d(t)}})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.60241ba1.chunk.js.map