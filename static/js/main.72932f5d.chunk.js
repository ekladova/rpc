(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),s=t.n(r),o=(t(9),t(10),t(11),function(e){var a=e.children,t=e.className,n=e.id,r=e.onClick;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{onClick:r,id:n,className:"button-container"},c.a.createElement("div",{className:"image "+t}),c.a.createElement("div",{className:"description"},c.a.createElement("p",null,a))))}),l=(t(12),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header-container"},c.a.createElement("h1",{className:"header-text"},"Rock Paper Scissors")))}),i=(t(13),function(e){var a=e.score1,t=e.score2;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"score-container"},c.a.createElement("div",{className:"boxes"},c.a.createElement("div",{className:"box score-box right"},c.a.createElement("p",null,a)),c.a.createElement("div",{className:"box score-box left"},c.a.createElement("p",null,t)))))}),m=t(1),u=(t(14),function(e){var a=e.card,t=e.botCard,n=e.onClick,r=e.counter,s=e.setBotCardF,l=e.clearAll;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"game-scene-container"},c.a.createElement("div",{className:"boxes"},c.a.createElement("div",{className:"box game-box player1box"},c.a.createElement("div",{id:"player",className:"display-card"},c.a.createElement("div",{className:"image "+a}))),c.a.createElement("div",{id:"bot",className:"box game-box player2box"},c.a.createElement("div",{className:"image "+t})))),c.a.createElement("div",{className:"set-clear-buttons"},c.a.createElement("button",{className:"box set-button",disabled:0===r,onClick:s},"Set"),c.a.createElement("button",{className:"box set-button",onClick:l},"Clear")),c.a.createElement("div",{className:"buttons-container"},c.a.createElement(o,{onClick:n,id:"rock",className:"rock"},"Rock"),c.a.createElement(o,{onClick:n,id:"paper",className:"paper"},"Paper"),c.a.createElement(o,{onClick:n,id:"scissors",className:"scissors"},"Scissors")))}),d=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)(""),o=Object(m.a)(s,2),l=o[0],d=o[1],E=Object(n.useState)(1),b=Object(m.a)(E,2),p=b[0],v=b[1],N=Object(n.useState)(0),f=Object(m.a)(N,2),g=f[0],k=f[1],h=Object(n.useState)(0),x=Object(m.a)(h,2),j=x[0],O=x[1],C=Object(n.useState)(0),S=Object(m.a)(C,2),y=S[0],w=S[1],B=Object(n.useState)("Set your icon"),F=Object(m.a)(B,2),T=F[0],P=F[1],W=["rock","paper","scissors"];return Object(n.useEffect)((function(){return t!==l?setTimeout((function(){!function(e,a){e&&a&&"rock"===e&&"paper"===a||"paper"===e&&"scissors"===a||"scissors"===e&&"rock"===a?(O(j+1),r(""),d(""),w(0),v(p+1),P("Bot won round "+p)):("paper"===e&&"rock"===a||"scissors"===e&&"paper"===a||"rock"===e&&"scissors"===a)&&(k(g+1),r(""),d(""),w(0),v(p+1),P("You won round "+p)),3===j?(P("Bot Won. Play again?"),k(0),O(0),r(""),d(""),w(0),v(1)):3===g&&(P("You Won. Play again?"),k(0),O(0),r(""),d(""),w(0),v(1))}(t,l)}),500):t&&l&&t===l&&setTimeout((function(){r(""),d(""),w(0),v(p+1),P("Same cards! Try again.")}),500),function(){}}),[t,l,p]),c.a.createElement(c.a.Fragment,null,c.a.createElement("main",{className:"game-container"},c.a.createElement("div",{className:"round-container"},c.a.createElement("h1",{className:"roundText"},"Round ",p)),c.a.createElement(i,{score1:g,score2:j}),c.a.createElement("div",{className:"player-box"},c.a.createElement("h2",null,"Player 1"),c.a.createElement("h2",null,"Bot")),c.a.createElement("div",{className:"message"},c.a.createElement("h2",null,T)),c.a.createElement(u,{setBotCardF:function(){var e=W[Math.floor(3*Math.random())];d(e)},counter:y,onClick:function(e){0===y||t!==e.currentTarget.id?(r(e.currentTarget.id),w(1)):(r(""),w(0))},card:t,botCard:l,clearAll:function(){k(0),O(0),r(""),d(""),w(0),v(1),P("Set your icon")},message:T})))};var E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(l,null),c.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.72932f5d.chunk.js.map