(window["webpackJsonpemployee-details-widget"]=window["webpackJsonpemployee-details-widget"]||[]).push([[0],{58:function(e){e.exports=JSON.parse('{"common":{"couldNotFetchData":"Unfortunately we could not fetch entity data","widgetName":"Details about \'{{widgetNamePlaceholder}}\'","name":"Name","value":"Value","loading":"Loading...","missingId":"Please provide employee ID","notAuthenticated":"User is not authenticated.","download":"Download file"},"entities":{"employee":{"id":"ID","firstname":"entities.employee.firstname","lastname":"entities.employee.lastname"}}}')},71:function(e,t,n){e.exports=n(91)},81:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n(48),o=n(23),c={en:n(58)};function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var l=Object.keys(c).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(a.a)({},t,{translation:c[t]}))}),{});r.a.use(o.a).init({fallbackLng:"en",resources:l,interpolation:{escapeValue:!1}});n(81);var s=n(29),u=n(30),p=n(35),m=n(20),f=n(31),d=n(64),b=n(0),h=n.n(b),y=n(13),O=n.n(y),v=h.a.createContext(null),k=n(16),w=n.n(k),E=n(33),j=n(37),g=n(123),P=n(63),D=n(3),C=n.n(D),N=(C.a.shape({initialized:C.a.bool,authenticated:C.a.bool}),n(65));C.a.oneOfType([C.a.func,C.a.shape({current:C.a.elementType}),C.a.shape(null)]);var S=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},x=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},z=n(125),R=(C.a.shape({id:C.a.number,firstname:C.a.string,lastname:C.a.string}),n(117)),A=n(121),F=n(120),T=n(118),U=n(119),I=function(e){var t=e.t,n=e.employee;return h.a.createElement(R.a,null,h.a.createElement(T.a,null,h.a.createElement(U.a,null,h.a.createElement(F.a,null,t("common.name")),h.a.createElement(F.a,null,t("common.value")))),h.a.createElement(A.a,null,h.a.createElement(U.a,null,h.a.createElement(F.a,null,h.a.createElement("span",null,t("".concat("entities.employee.","id")))),h.a.createElement(F.a,null,h.a.createElement("span",null,n.id))),h.a.createElement(U.a,null,h.a.createElement(F.a,null,h.a.createElement("span",null,t("".concat("entities.employee.","firstname")))),h.a.createElement(F.a,null,h.a.createElement("span",null,n.firstname))),h.a.createElement(U.a,null,h.a.createElement(F.a,null,h.a.createElement("span",null,t("".concat("entities.employee.","lastname")))),h.a.createElement(F.a,null,h.a.createElement("span",null,n.lastname)))))};I.defaultProps={employee:[]};var L=Object(o.b)()(I),M=function(e){var t=e.t,n=e.employee;return h.a.createElement(z.a,null,h.a.createElement("h3",null,t("common.widgetName",{widgetNamePlaceholder:"Employee"})),h.a.createElement(L,{employee:n}))};M.defaultProps={employee:{}};var K=Object(o.b)()(M),H=n(4),J=n(126),V=n(128),W=n(122),B=n(5),G=n(127),q=n(60),Q=n.n(q),X=n(61),Y=n.n(X),Z=n(59),$=n.n(Z),_=n(62),ee=n.n(_),te={success:$.a,error:Q.a,info:Y.a},ne={success:3e3,error:null,info:5e3},ae=function e(t){var n=t.className,a=t.classes,r=t.status,o=t.message,c=t.onClose,i=!!o,l=r||e.INFO,s=te[l],u=ne[l],p=h.a.createElement("span",{className:a.message},h.a.createElement(s,{className:Object(H.a)(a.icon,a.iconStatus)}),o);return h.a.createElement(J.a,{open:i,onClose:c,autoHideDuration:u},h.a.createElement(V.a,{className:Object(H.a)(a[l],n),message:p,action:[h.a.createElement(G.a,{key:"close","aria-label":"close",color:"inherit",onClick:c},h.a.createElement(ee.a,{className:a.icon}))]}))};ae.SUCCESS="success",ae.ERROR="error",ae.defaultProps={message:null,className:"",status:ae.INFO="info",onClose:function(){}};var re=Object(B.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:W.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(ae),oe=function(){var e=Object(E.a)(w.a.mark((function e(t,n){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var le=function(){var e=Object(E.a)(w.a.mark((function e(t,n){var a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("employees","/").concat(n),r=ie({},{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})},{method:"GET"}),e.abrupt("return",oe(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),se=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={loading:!0,employee:{},notificationStatus:null,notificationMessage:null},n.theme=Object(P.a)(),n.closeNotification=n.closeNotification.bind(Object(j.a)(n)),n.fetchData=n.fetchData.bind(Object(j.a)(n)),n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props.keycloak,n=t.initialized&&t.authenticated,a=e.keycloak.authenticated!==n;n&&a&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(E.a)(w.a.mark((function e(){var t,n,a,r,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,le(r,a);case 6:o=e.sent,this.setState((function(){return{employee:o,loading:!1}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("common.couldNotFetchData"),notificationStatus:re.ERROR,loading:!1}}))}},{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"render",value:function(){var e=this.state,t=e.employee,n=e.notificationStatus,a=e.notificationMessage,r=e.loading,o=this.props,c=o.t,i=o.keycloak;return h.a.createElement(g.a,{theme:this.theme},h.a.createElement(x,{keycloak:i},c("common.notAuthenticated")),h.a.createElement(S,{keycloak:i},r&&c("common.loading"),!r&&h.a.createElement(K,{employee:t})),h.a.createElement(re,{status:n,message:a,onClose:this.closeNotification}))}}]),t}(h.a.Component);se.defaultProps={onError:function(){},serviceUrl:""};var ue=function(e){var t=function(t){function n(){var t,a;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(p.a)(this,(t=Object(m.a)(n)).call.apply(t,[this].concat(o)))).renderWrappedComponent=function(t){var n=a.props,r=n.forwardedRef,o=Object(N.a)(n,["forwardedRef"]);return h.a.createElement(e,Object.assign({},o,{ref:r,keycloak:t}))},a}return Object(f.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){return h.a.createElement(v.Consumer,null,this.renderWrappedComponent)}}]),n}(b.Component);return t.defaultProps={forwardedRef:function(){}},Object(b.forwardRef)((function(e,n){return h.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}(Object(o.b)()(se));function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(n,!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe=function(){return window&&window.entando&&window.entando.keycloak&&me({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},de="service-url",be=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).mountPoint=null,n.unsubscribeFromKeycloakEvent=null,n.keycloak=fe(),n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"connectedCallback",value:function(){var e=this;this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint);var t,n,a=this.getAttribute("locale")||"en";r.a.changeLanguage(a),this.keycloak=me({},fe(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=me({},fe(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.render()}},{key:"render",value:function(){var e=this,t=this.getAttribute(de)||"",n=this.getAttribute("id"),a=h.a.createElement(ue,{id:n,onError:function(t){var n=new CustomEvent("".concat("employee.details.","error"),{details:{error:t}});e.dispatchEvent(n)},serviceUrl:t});O.a.render(h.a.createElement(v.Provider,{value:this.keycloak},a),this.mountPoint)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}}]),t}(Object(d.a)(HTMLElement));customElements.define("employee-details",be)}},[[71,1,2]]]);
//# sourceMappingURL=main.fc2f8070.chunk.js.map