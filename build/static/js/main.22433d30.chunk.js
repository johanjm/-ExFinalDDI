(this.webpackJsonpproyect=this.webpackJsonpproyect||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(6),i=c.n(r),s=(c(11),c(3)),a=c.n(s),o=c(5),d=c(2),j=(c(13),c(0));var b=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(),s=Object(d.a)(i,2),b=s[0],u=(s[1],Object(n.useState)([])),l=Object(d.a)(u,2),h=(l[0],l[1],Object(n.useState)([])),O=Object(d.a)(h,2),x=(O[0],O[1]),f=Object(n.useState)([{id:1,advice:"Remember that spiders are more afraid of you, than you are of them."},{id:2,advice:"No Remember that spiders are more afraid of you, than you are of them."},{id:3,advice:"R more afraid of you, than you are of them."},{id:4,advice:"No Remember that spiders are more afraid of them."}]),p=Object(d.a)(f,2),v=p[0],m=p[1],y=Object(n.useState)({id:"",advice:""}),g=Object(d.a)(y,2),k=(g[0],g[1],function(){var e=Object(o.a)(a.a.mark((function e(t){var c,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.adviceslip.com/advice/search/"+t);case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,console.log(n.slips),x(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=function(){var e=Object(o.a)(a.a.mark((function e(t){var c,n,i,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.adviceslip.com/advice");case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,i=n.slip,console.log(i),r(i.advice),e.t0=t,e.next="next"===e.t0?12:"add"===e.t0?14:20;break;case 12:return t=null,e.abrupt("break",20);case 14:return s={id:i.id,advice:i.advice},(o=v).push(s),m(o),console.log(s),e.abrupt("break",20);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){C()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{id:"cab",children:[Object(j.jsxs)("div",{id:"mitad",children:[Object(j.jsx)("p",{class:"titulo",children:"Consejo del d\xeda"}),Object(j.jsx)("tr",{}),Object(j.jsx)("p",{children:c}),Object(j.jsx)("tr",{}),"---",b,"---",Object(j.jsxs)("div",{id:"cab",children:[Object(j.jsxs)("div",{id:"mitad1",children:[Object(j.jsx)("button",{class:"boton1",onClick:function(){return C("add")},children:"Marcar como favorito"})," "]}),Object(j.jsxs)("div",{id:"mitad1",children:[" ",Object(j.jsx)("button",{class:"boton1",onClick:function(){return C("next")},children:"Siguiente consejo"})]})]})]}),Object(j.jsxs)("div",{id:"mitad",children:[Object(j.jsx)("p",{class:"titulo",children:"Consejos Favoritos"}),Object(j.jsx)("tr",{}),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Advice"}),Object(j.jsx)("th",{children:"Acci\xf3n"})]})}),Object(j.jsx)("tbody",{children:v.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.advice}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{class:"boton1",onClick:function(){return function(e){m(v.filter((function(t){return t.id!=e})))}(e.id)},children:"Eliminar"})})]})}))})]})]})]}),Object(j.jsxs)("div",{id:"cab",children:[Object(j.jsx)("p",{class:"titulo",children:"Buscador de Consejos"}),Object(j.jsx)("tr",{})]}),Object(j.jsxs)("div",{id:"cab",children:[Object(j.jsx)("p",{children:" *Palabra clave: "}),Object(j.jsx)("input",{}),Object(j.jsx)("tr",{}),Object(j.jsx)("button",{class:"boton1",onClick:function(){return k("fun")},children:"Buscar"}),Object(j.jsx)("tr",{})]}),Object(j.jsxs)("div",{id:"cab",children:[Object(j.jsx)("p",{class:"titulo",children:"Resultados de la busqueda"}),Object(j.jsx)("tr",{})]})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),i(e),s(e)}))};i.a.render(Object(j.jsx)(b,{}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.22433d30.chunk.js.map