(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(29)},27:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(4),c=t.n(a),i=t(1),l=t(2),s=t(8),u=t(12),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var f=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,31)).then(function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),o(e),r(e),a(e),c(e)})},E=t(3),b={isPending:!1,robots:[],error:""},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object(E.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(E.a)({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAIL":return Object(E.a)({},e,{error:n.payload,isPending:!1});default:return e}},p={searchField:""},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHANGE_SEARCH_FIELD":return Object(E.a)({},e,{searchField:n.payload});default:return e}},m=Object(l.b)({searchField:v,robots:g}),O=(t(25),t(27),function(e){e.searchfield;var n=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))}),w=r.a.memo(function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)}),S=t(9),j=t(10),y=t(14),_=t(11),C=t(15),R=function(e){function n(e){var t;return Object(S.a)(this,n),(t=Object(y.a)(this,Object(_.a)(n).call(this,e))).state={hasError:!1},t}return Object(C.a)(n,e),Object(j.a)(n,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," Oooops. That is not good."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(o.Component),T=t(13),k=function(e){var n=e.color,t=Object(o.useState)(0),a=Object(T.a)(t,2),c=a[0],i=a[1];return r.a.createElement("button",{color:n,onClick:function(){i(function(e){return e+1})}},"Count: ",c)},F=r.a.memo(function(){return console.log("Header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(k,{color:"red"}))}),L=Object(o.lazy)(function(){return t.e(2).then(t.bind(null,32))}),N=function(){var e=Object(i.b)(),n=Object(i.c)(function(e){return e.searchField.searchField}),t=Object(i.c)(function(e){return e.robots.robots});(new AbortController).signal.addEventListener("abort",function(){console.log("Request aborted")}),Object(o.useEffect)(function(){e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})}).catch(function(n){e({type:"REQUEST_ROBOTS_FAIL",payload:n})})})},[e]);var a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement(F,null),r.a.createElement(O,{searchChange:function(n){e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})}}),r.a.createElement(w,null,r.a.createElement(R,null,r.a.createElement(o.Suspense,{fallback:r.a.createElement("h1",null,"Loading...")},r.a.createElement(L,{robots:a}))))):r.a.createElement("h1",null,"Loading")},P=Object(s.createLogger)(),A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,U=Object(l.d)(m,A(Object(l.a)(u.a,P)));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:U},r.a.createElement(N,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/PWA-example-robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/PWA-example-robofriends","/service-worker.js");d?(function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):h(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):h(n,e)})}}(),f()}},[[16,4,3]]]);
//# sourceMappingURL=main.0849b0cf.chunk.js.map