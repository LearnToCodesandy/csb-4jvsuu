(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(5),s=c.n(n),r=(c(11),c(6)),i=c(2),j=c(4),b=c.n(j),l=c(0),d=function(e){var t=e.beer_id,c=Object(a.useState)(""),n=Object(i.a)(c,2),s=n[0],r=n[1],j=Object(a.useState)(""),b=Object(i.a)(j,2),d=b[0],o=b[1],u=Object(a.useState)(""),O=Object(i.a)(u,2),m=O[0],h=O[1];return Object(a.useEffect)((function(){!function(e){var t=JSON.parse(localStorage.getItem("beers"));r(t[e-1].description),o(t[e-1].name),h(t[e-1].brewers_tips)}(t)}),[]),Object(l.jsxs)("div",{className:"modal",children:[Object(l.jsx)("div",{className:"modal-header",children:Object(l.jsx)("p",{className:"modal-title",children:d})}),Object(l.jsxs)("div",{className:"modal-body",children:[Object(l.jsx)("p",{className:"modal-beer-data",children:s}),Object(l.jsxs)("p",{className:"tips",children:["Tip : ",m]})]})]})},o=function(e){var t=e.beerObj,c=Object(a.useState)(!1),n=Object(i.a)(c,2),s=n[0],r=n[1],j=Object(a.useState)(""),b=Object(i.a)(j,2),o=b[0],u=b[1];return Object(l.jsxs)("div",{className:"beer-item",children:[Object(l.jsx)("span",{className:"count",children:t._id}),Object(l.jsx)("div",{className:"beer-item-header",children:Object(l.jsx)("img",{className:"beer-image",src:t.image_url,alt:"not found!"})}),Object(l.jsxs)("div",{className:"beer-item-body",children:[Object(l.jsx)("h1",{children:t.name}),Object(l.jsx)("p",{children:t.tagline}),Object(l.jsx)("button",{className:"beer-btn",onClick:function(){return e=t._id,u(e),void r(!s);var e},children:"Know Details"})]}),s?Object(l.jsx)(d,{beer_id:o}):""]})},u=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=function(){var e=Object(r.a)(b.a.mark((function e(){var t,c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.punkapi.com/v2/beers");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a=c.map((function(e){return{_id:e.id,name:e.name,tagline:e.tagline,image_url:e.image_url}})),localStorage.setItem("beers",JSON.stringify(c)),n(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),Object(l.jsxs)("div",{className:"beer-container",children:[Object(l.jsx)("h1",{children:"Beer Collection"}),Object(l.jsx)("p",{children:"We are famouse for beere!"}),Object(l.jsx)("div",{className:"beer-collection-container",children:c.map((function(e){return Object(l.jsx)(o,{beerObj:e},e._id)}))})]})};function O(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(u,{})})}var m=document.getElementById("root");s.a.render(Object(l.jsx)(a.StrictMode,{children:Object(l.jsx)(O,{})}),m)}},[[14,1,2]]]);
//# sourceMappingURL=main.85726c61.chunk.js.map