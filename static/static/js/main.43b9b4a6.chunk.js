(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{12:function(e,t,n){e.exports=n(22)},17:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),o=n.n(c),i=n(11),s=n.n(i),l=(n(17),n(18),n(1)),u=n.n(l),m=n(2),p=n(4),f=(n(20),n(3)),b=n(5),d=n(6),h=n(8),E=n(7),O=n(9);n(21);!function(e){e.Credit="credit",e.Debit="debit"}(a||(a={}));var v=function(e){function t(){return Object(b.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper"},o.a.createElement("ul",{className:"accordion-list"},this.props.transactions.map((function(e,t){return o.a.createElement("li",{className:"accordion-list ".concat(t)},o.a.createElement(j,{transaction:e}))}))))}}]),t}(o.a.Component),y=(r={},Object(f.a)(r,a.Credit,"green"),Object(f.a)(r,a.Debit,"red"),r),j=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={opened:null},n}return Object(O.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.transaction,n=this.state.opened;return o.a.createElement("div",{className:"accordion-item, ".concat(n==t.id&&"accordion-item--opened")},o.a.createElement("div",{onClick:function(){e.setState((function(e){return{opened:null===e.opened?t.id:null}}))},className:"accordion-item__line"},o.a.createElement("h5",{className:"accordion-item__title"},"   ",o.a.createElement("span",{style:{color:y[t.type]}},"$ ",new Intl.NumberFormat("en-IN",{maximumFractionDigits:2,minimumFractionDigits:2}).format(t.amount))),o.a.createElement("span",{className:"accordion-item__icon"})),o.a.createElement("div",{className:"accordion-item__inner"},o.a.createElement("div",{className:"accordion-item__content"},o.a.createElement("p",{className:"accordion-item__paragraph"},"ID: ",t.id,o.a.createElement("br",null),"Date: ",t.date))))}}]),t}(o.a.Component),g=function(e){var t=e.balance;return o.a.createElement("header",{id:"header",className:"alt"},o.a.createElement("span",{className:"logo"},o.a.createElement("img",{src:"images/logo.svg",alt:""})),o.a.createElement("h1",null,"$ ",new Intl.NumberFormat("en-IN",{maximumFractionDigits:2,minimumFractionDigits:2}).format(t.total_balance)),o.a.createElement("p",null,"This is your current account balance"))};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e){return o.a.createElement("div",{id:"form"},o.a.createElement("div",{className:"form-group mb-3"},o.a.createElement("label",{className:"label-form",htmlFor:"type","aria-describedby":"amount"},"Type"),o.a.createElement("select",{value:e.formValue.type,onChange:function(t){return e.onChange(N({},e.formValue,{type:t.target.value}))},id:"type",className:"custom-select mb-3"},o.a.createElement("option",{value:"credit",selected:!0},"Credit"),o.a.createElement("option",{value:"debit"},"Debit"))),o.a.createElement("div",{className:"form-group mb-3"},o.a.createElement("label",{className:"label-form",htmlFor:"amount"},"Amount"),o.a.createElement("input",{value:e.formValue.amount,onChange:function(t){return e.onChange(N({},e.formValue,{amount:parseInt(t.target.value,10)}))},id:"amount",type:"number",className:"form-control","aria-describedby":"amount"})),o.a.createElement("a",{style:{cursor:"pointer"},onClick:function(){return e.onSubmit(e.formValue)}},"Submit"))};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var C=function(e,t){return fetch("".concat("http://localhost:8080").concat(e),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{headers:{Accept:"application/json","Content-Type":"application/json"}})).then(function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=6;break}return e.t0=Error,e.next=4,t.text();case 4:throw e.t1=e.sent,(0,e.t0)(e.t1);case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},P=function(){return C("/api/account/balance",{method:"GET"})},T=function(e,t){return C("/api/account/transaction?offset=".concat(e,"&limit=").concat(t),{method:"GET"})},D=function(e){return C("/api/account/transaction/".concat(e),{method:"GET"})},F=function(e){return C("/api/account/transaction",{method:"POST",body:JSON.stringify(e)})},x=function(e){return o.a.createElement("div",{id:"form",style:{marginTop:15}},o.a.createElement("div",{className:"form-group mb-3"},o.a.createElement("label",{className:"label-form",htmlFor:"amount"},"ID"),o.a.createElement("input",{value:e.formValue,onChange:function(t){return e.onChange(t.target.value)},id:"amount",type:"string",className:"form-control","aria-describedby":"id"})),o.a.createElement("a",{style:{cursor:"pointer"},onClick:function(){return e.onSubmit(e.formValue)}},"Search"))};function _(e,t){return function(n){return t(e(n))}}var V=function(e){var t=e.transactions,n=e.transactionForm,a=e.setTransactionForm,r=e.postNewTransaction,c=e.transactionSearchForm,i=e.setTransactionSearchForm,s=e.searchTransaction;return o.a.createElement("div",{id:"main"},o.a.createElement("section",{id:"intro",className:"main"},o.a.createElement("div",{className:"spotlight"},o.a.createElement("div",{className:"new-transaction"},o.a.createElement("header",{className:"major"},o.a.createElement("h3",null,"New Transaction")),o.a.createElement(S,{formValue:n,onChange:a,onSubmit:r}),o.a.createElement("header",{className:"major",style:{marginTop:20}},o.a.createElement("h3",null,"Search Transaction")),o.a.createElement(x,{formValue:c,onChange:i,onSubmit:s})),o.a.createElement("div",{className:"transactions"},o.a.createElement("header",{className:"major"},o.a.createElement("h3",null,"Transactions")),o.a.createElement(v,{transactions:t})))))},I=function(e){var t=e.setPage,n=e.page;return o.a.createElement("nav",{id:"nav"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{onClick:function(){return t(n-1)}},"Prev")),o.a.createElement("li",null,o.a.createElement("a",{className:"active"},n)),o.a.createElement("li",null,o.a.createElement("a",{onClick:function(){return t(n+1)}},"Next"))))},J=function(){var e=Object(c.useState)(0),t=Object(p.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)({total_balance:0}),s=Object(p.a)(i,2),l=s[0],f=s[1],b=Object(c.useState)([]),d=Object(p.a)(b,2),h=d[0],E=d[1],O=Object(c.useState)({type:a.Credit,amount:0}),v=Object(p.a)(O,2),y=v[0],j=v[1],w=Object(c.useState)(""),N=Object(p.a)(w,2),S=N[0],k=N[1];function C(){return x.apply(this,arguments)}function x(){return(x=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return t=e.sent,f(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return A.apply(this,arguments)}function A(){return(A=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 5,e.t0=E,e.next=4,T(5*n,5);case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W(D(t).then(_(JSON.stringify,alert)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){return($=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(F(y));case 2:W(C()),W(J());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(t>=0?t:0);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){e.catch((function(e){alert(e.message)}))}return Object(c.useEffect)((function(){W(J())}),[n]),Object(c.useEffect)((function(){W(C())}),[]),o.a.createElement("div",{id:"wrapper"},o.a.createElement(g,{balance:l}),o.a.createElement(V,{postNewTransaction:function(){return $.apply(this,arguments)},setTransactionForm:function(e){j(e)},transactions:h,transactionForm:y,searchTransaction:function(e){return G.apply(this,arguments)},setTransactionSearchForm:function(e){k(e)},transactionSearchForm:S}),o.a.createElement(I,{setPage:function(e){return B.apply(this,arguments)},page:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.43b9b4a6.chunk.js.map