(this.webpackJsonpmemory_game=this.webpackJsonpmemory_game||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),s=(n(14),n(5)),u=n.n(s),i=n(9),p=n(8),f=n(6),j=(n(16),n(0));var h=function(){var e=Object(c.useState)(!0),t=Object(f.a)(e,2),n=(t[0],t[1],Object(c.useState)([])),r=Object(f.a)(n,2),a=r[0],o=r[1];return Object(c.useEffect)((function(){for(var e=[],t=0;t<20;t++){var n=Math.floor(151*Math.random()+1);e.push(n)}e.forEach((function(e){!function(){var t=Object(p.a)(u.a.mark((function t(){var n,c,r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(e));case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,r=c.species.name,a=c.sprites.front_shiny,o((function(e){return[].concat(Object(i.a)(e),[{NAME:r,PICTURE:a}])})),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}()()}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{}),console.log(a)]})};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7289ebd7.chunk.js.map