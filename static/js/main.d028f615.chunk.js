(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{15:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(7),r=c.n(a),s=(c(15),c(6)),i=c(9),j=(c.p,c(5)),l=c.n(j),o=c(8),d=c(10),u=c(3),b=function(e,t){var c=t.payload;switch(t.type){case"SET_CART":case"INC_COUNT":case"DEC_COUNT":return Object(u.a)(Object(u.a)({},e),{},{cart:c,loading:!1})}},h=c(1),O=Object(n.createContext)(),x={cart:[],loading:!0},p=function(e){var t=e.children,c=Object(n.useReducer)(b,x),a=Object(d.a)(c,2),r=a[0],s=a[1],i=function(){var e=Object(o.a)(l.a.mark((function e(){var t,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,c.ok,n=c.cart,s({type:"SET_CART",payload:n}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){i()}),[]);return Object(h.jsx)(O.Provider,{value:{cart:r.cart,loading:r.loading,increaseHowMany:function(e){var t=r.cart.map((function(t){return t.id===e?(t.howMany++,t):t}));s({type:"INC_COUNT",payload:t})},decreaseHowMany:function(e){var t=r.cart.map((function(t){return t.id===e?(0!==t.howMany&&t.howMany--,t):t}));s({type:"DEC_COUNT",payload:t})}},children:t})},m=function(){return Object(n.useContext)(O)},f=function(){var e=m(),t=e.cart,c=e.loading,n=e.increaseHowMany,a=e.decreaseHowMany;return Object(h.jsx)("aside",{className:"items",children:c?Object(h.jsx)("h1",{children:"Loading..."}):t.map((function(e){var t=e.id,c=e.title,r=e.imgSrc,j=e.price,l=e.howMany;return Object(h.jsxs)("div",{className:"item flex",children:[Object(h.jsx)("img",{src:r,alt:c}),Object(h.jsx)("h6",{children:c}),Object(h.jsxs)("div",{className:"buttons-div flex",children:[Object(h.jsx)(s.a,{className:"minus pointer",onClick:function(){return a(t)}}),Object(h.jsx)("span",{children:l}),Object(h.jsx)(s.b,{className:"plus pointer",onClick:function(){return n(t)}})]}),Object(h.jsxs)("span",{children:["\u20b9",j]}),Object(h.jsx)(i.a,{className:"bin pointer"})]},t)}))})},v=function(){var e=m().loading;return Object(h.jsx)("section",{className:"summary",children:e?Object(h.jsx)("h1",{children:"Loading..."}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h4",{children:"Summary"}),Object(h.jsxs)("div",{className:"details",children:[Object(h.jsxs)("div",{className:"order-total flex",children:[Object(h.jsx)("p",{children:"Order total"}),Object(h.jsx)("span",{children:"$544"})]}),Object(h.jsxs)("div",{className:"shiping flex",children:[Object(h.jsx)("p",{children:"Shipping"}),Object(h.jsx)("span",{children:"$210"})]}),Object(h.jsxs)("div",{className:"subtotal flex",children:[Object(h.jsx)("p",{children:"Subtotal"}),Object(h.jsx)("span",{children:"$1599.25"})]}),Object(h.jsx)("button",{children:"Checkout Items"})]})]})})};var y=function(){return m().name,Object(h.jsxs)("div",{className:"container grid",children:[Object(h.jsx)("header",{className:"header",children:Object(h.jsxs)("h3",{children:["Home/",Object(h.jsx)("span",{children:"Cart"})]})}),Object(h.jsx)(f,{}),Object(h.jsx)(v,{}),Object(h.jsx)("footer",{className:"footer"})]})};r.a.render(Object(h.jsx)(p,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.d028f615.chunk.js.map