/*! For license information please see commons-0d0575de96439f52df8d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"7j6X":function(e,t,n){"use strict";var r=n("dZvc");function a(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var i=/([A-Z])/g;var o=/^ms-/;function c(e){return function(e){return e.replace(i,"-$1").toLowerCase()}(e).replace(o,"-ms-")}var u=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(c(t))||a(e).getPropertyValue(c(t));Object.keys(t).forEach((function(a){var i=t[a];i||0===i?!function(e){return!(!e||!u.test(e))}(a)?n+=c(a)+": "+i+";":r+=a+"("+i+") ":e.style.removeProperty(c(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),o=n("wx14"),c=n("zLVn"),u=n("TSYQ"),s=n.n(u),l=n("JCAc"),f=n("YdCC"),d=n("vUet"),p=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.as,u=Object(c.a)(e,["bsPrefix","className","as"]);n=Object(d.a)(n,"navbar-brand");var l=i||(u.href?"a":"span");return a.a.createElement(l,Object(o.a)({},u,{ref:t,className:s()(r,n)}))}));p.displayName="NavbarBrand";var v=p,b=n("7j6X"),m=n("GEtZ");function h(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=Object(m.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),i()}}function y(e,t,n,r){var a,i,o;null==n&&(a=e,i=Object(b.a)(a,"transitionDuration")||"",o=-1===i.indexOf("ms")?1e3:1,n=parseFloat(i)*o||0);var c=h(e,n,r),u=Object(m.a)(e,"transitionend",t);return function(){c(),u()}}var g=n("dI71"),E=n("i8i4"),O=n.n(E),x=!1,w=a.a.createContext(null),T=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(g.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[O.a.findDOMNode(this),r],i=a[0],o=a[1],c=this.getTimeouts(),u=r?c.appear:c.enter;!e&&!n||x?this.safeSetState({status:"entered"},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(i,o),t.onTransitionEnd(u,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:O.a.findDOMNode(this);t&&!x?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:O.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(c.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(w.Provider,{value:null},"function"==typeof n?n(e,r):a.a.cloneElement(a.a.Children.only(n),r))},t}(a.a.Component);function j(){}T.contextType=w,T.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:j,onEntering:j,onEntered:j,onExit:j,onExiting:j,onExited:j},T.UNMOUNTED="unmounted",T.EXITED="exited",T.ENTERING="entering",T.ENTERED="entered",T.EXITING="exiting";var C=T;var S,N=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};var A={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function k(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=A[e];return n+parseInt(Object(b.a)(t,r[0]),10)+parseInt(Object(b.a)(t,r[1]),10)}var P=((S={}).exited="collapse",S.exiting="collapsing",S.entering="collapsing",S.entered="collapse show",S),I={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:k},L=a.a.forwardRef((function(e,t){var n=e.onEnter,i=e.onEntering,u=e.onEntered,l=e.onExit,f=e.onExiting,d=e.className,p=e.children,v=e.dimension,b=void 0===v?"height":v,m=e.getDimensionValue,h=void 0===m?k:m,g=Object(c.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),E="function"==typeof b?b():b,O=Object(r.useMemo)((function(){return N((function(e){e.style[E]="0"}),n)}),[E,n]),x=Object(r.useMemo)((function(){return N((function(e){var t="scroll"+E[0].toUpperCase()+E.slice(1);e.style[E]=e[t]+"px"}),i)}),[E,i]),w=Object(r.useMemo)((function(){return N((function(e){e.style[E]=null}),u)}),[E,u]),T=Object(r.useMemo)((function(){return N((function(e){e.style[E]=h(E,e)+"px",e.offsetHeight}),l)}),[l,h,E]),j=Object(r.useMemo)((function(){return N((function(e){e.style[E]=null}),f)}),[E,f]);return a.a.createElement(C,Object(o.a)({ref:t,addEndListener:y},g,{"aria-expanded":g.role?g.in:null,onEnter:O,onEntering:x,onEntered:w,onExit:T,onExiting:j}),(function(e,t){return a.a.cloneElement(p,Object(o.a)({},t,{className:s()(d,p.props.className,P[e],"width"===E&&"width")}))}))}));L.defaultProps=I;var R=L,M=a.a.createContext(null);M.displayName="NavbarContext";var D=M,q=a.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,i=Object(c.a)(e,["children","bsPrefix"]);return r=Object(d.a)(r,"navbar-collapse"),a.a.createElement(D.Consumer,null,(function(e){return a.a.createElement(R,Object(o.a)({in:!(!e||!e.expanded)},i),a.a.createElement("div",{ref:t,className:r},n))}))}));q.displayName="NavbarCollapse";var _=q,K=n("ZCiN"),z=a.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,u=e.children,l=e.label,f=e.as,p=void 0===f?"button":f,v=e.onClick,b=Object(c.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(d.a)(n,"navbar-toggler");var m=Object(r.useContext)(D)||{},h=m.onToggle,y=m.expanded,g=Object(K.a)((function(e){v&&v(e),h&&h()}));return"button"===p&&(b.type="button"),a.a.createElement(p,Object(o.a)({},b,{ref:t,onClick:g,"aria-label":l,className:s()(i,n,!y&&"collapsed")}),u||a.a.createElement("span",{className:n+"-icon"}))}));z.displayName="NavbarToggle",z.defaultProps={label:"Toggle navigation"};var U=z,Y=a.a.createContext(null),B=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},F=Y,H=Object(f.a)("navbar-text",{Component:"span"}),V=a.a.forwardRef((function(e,t){var n=Object(l.a)(e,{expanded:"onToggle"}),i=n.bsPrefix,u=n.expand,f=n.variant,p=n.bg,v=n.fixed,b=n.sticky,m=n.className,h=n.children,y=n.as,g=void 0===y?"nav":y,E=n.expanded,O=n.onToggle,x=n.onSelect,w=n.collapseOnSelect,T=Object(c.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),j=Object(d.a)(i,"navbar"),C=Object(r.useCallback)((function(){x&&x.apply(void 0,arguments),w&&E&&O&&O(!1)}),[x,w,E,O]);void 0===T.role&&"nav"!==g&&(T.role="navigation");var S=j+"-expand";"string"==typeof u&&(S=S+"-"+u);var N=Object(r.useMemo)((function(){return{onToggle:function(){return O&&O(!E)},bsPrefix:j,expanded:!!E}}),[j,E,O]);return a.a.createElement(D.Provider,{value:N},a.a.createElement(F.Provider,{value:C},a.a.createElement(g,Object(o.a)({ref:t},T,{className:s()(m,j,u&&S,f&&j+"-"+f,p&&"bg-"+p,b&&"sticky-"+b,v&&"fixed-"+v)}),h)))}));V.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},V.displayName="Navbar",V.Brand=v,V.Toggle=U,V.Collapse=_,V.Text=H;var W=V,Z=(n("K9S6"),n("Wzyw")),J=n("Zeqi"),G=n("YGJp"),Q=n("lcWJ"),X=a.a.createContext(null);X.displayName="NavContext";var $=X,ee=a.a.createContext(null),te=function(){},ne=a.a.forwardRef((function(e,t){var n,i,u=e.as,s=void 0===u?"ul":u,l=e.onSelect,f=e.activeKey,d=e.role,p=e.onKeyDown,v=Object(c.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),b=Object(G.a)(),m=Object(r.useRef)(!1),h=Object(r.useContext)(F),y=Object(r.useContext)(ee);y&&(d=d||"tablist",f=y.activeKey,n=y.getControlledId,i=y.getControllerId);var g=Object(r.useRef)(null),E=function(e){var t=g.current;if(!t)return null;var n=Object(J.a)(t,"[data-rb-event-key]:not(.disabled)"),r=t.querySelector(".active");if(!r)return null;var a=n.indexOf(r);if(-1===a)return null;var i=a+e;return i>=n.length&&(i=0),i<0&&(i=n.length-1),n[i]},O=function(e,t){null!=e&&(l&&l(e,t),h&&h(e,t))};Object(r.useEffect)((function(){if(g.current&&m.current){var e=g.current.querySelector("[data-rb-event-key].active");e&&e.focus()}m.current=!1}));var x=Object(Q.a)(t,g);return a.a.createElement(F.Provider,{value:O},a.a.createElement($.Provider,{value:{role:d,activeKey:B(f),getControlledId:n||te,getControllerId:i||te}},a.a.createElement(s,Object(o.a)({},v,{onKeyDown:function(e){var t;switch(p&&p(e),e.key){case"ArrowLeft":case"ArrowUp":t=E(-1);break;case"ArrowRight":case"ArrowDown":t=E(1);break;default:return}t&&(e.preventDefault(),O(t.dataset.rbEventKey,e),m.current=!0,b())},ref:x,role:d}))))})),re=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.children,u=e.as,l=void 0===u?"div":u,f=Object(c.a)(e,["bsPrefix","className","children","as"]);return n=Object(d.a)(n,"nav-item"),a.a.createElement(l,Object(o.a)({},f,{ref:t,className:s()(r,n)}),i)}));re.displayName="NavItem";var ae=re;function ie(e){return!e||"#"===e.trim()}var oe=a.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,i=e.disabled,u=e.onKeyDown,s=Object(c.a)(e,["as","disabled","onKeyDown"]),l=function(e){var t=s.href,n=s.onClick;(i||ie(t))&&e.preventDefault(),i?e.stopPropagation():n&&n(e)};return ie(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),i&&(s.tabIndex=-1,s["aria-disabled"]=!0),a.a.createElement(r,Object(o.a)({ref:t},s,{onClick:l,onKeyDown:N((function(e){" "===e.key&&(e.preventDefault(),l(e))}),u)}))}));oe.displayName="SafeAnchor";var ce=oe,ue=(n("2W6z"),a.a.forwardRef((function(e,t){var n=e.active,i=e.className,u=e.eventKey,l=e.onSelect,f=e.onClick,d=e.as,p=Object(c.a)(e,["active","className","eventKey","onSelect","onClick","as"]),v=B(u,p.href),b=Object(r.useContext)(F),m=Object(r.useContext)($),h=n;if(m){p.role||"tablist"!==m.role||(p.role="tab");var y=m.getControllerId(v),g=m.getControlledId(v);p["data-rb-event-key"]=v,p.id=y||p.id,p["aria-controls"]=g||p["aria-controls"],h=null==n&&null!=v?m.activeKey===v:n}"tab"===p.role&&(p.tabIndex=h?p.tabIndex:-1,p["aria-selected"]=h);var E=Object(K.a)((function(e){f&&f(e),null!=v&&(l&&l(v,e),b&&b(v,e))}));return a.a.createElement(d,Object(o.a)({},p,{ref:t,onClick:E,className:s()(i,h&&"active")}))})));ue.defaultProps={disabled:!1};var se=ue,le={disabled:!1,as:ce},fe=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,i=e.className,u=e.href,l=e.eventKey,f=e.onSelect,p=e.as,v=Object(c.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(d.a)(n,"nav-link"),a.a.createElement(se,Object(o.a)({},v,{href:u,ref:t,eventKey:l,as:p,disabled:r,onSelect:f,className:s()(i,n,r&&"disabled")}))}));fe.displayName="NavLink",fe.defaultProps=le;var de=fe,pe=a.a.forwardRef((function(e,t){var n,i,u,f=Object(l.a)(e,{activeKey:"onSelect"}),p=f.as,v=void 0===p?"div":p,b=f.bsPrefix,m=f.variant,h=f.fill,y=f.justify,g=f.navbar,E=f.className,O=f.children,x=f.activeKey,w=Object(c.a)(f,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),T=Object(d.a)(b,"nav"),j=!1,C=Object(r.useContext)(D),S=Object(r.useContext)(Z.a);return C?(i=C.bsPrefix,j=null==g||g):S&&(u=S.cardHeaderBsPrefix),a.a.createElement(ne,Object(o.a)({as:v,ref:t,activeKey:x,className:s()(E,(n={},n[T]=!j,n[i+"-nav"]=j,n[u+"-"+m]=!!u,n[T+"-"+m]=!!m,n[T+"-fill"]=h,n[T+"-justified"]=y,n))},w),O)}));pe.displayName="Nav",pe.defaultProps={justify:!1,fill:!1},pe.Item=ae,pe.Link=de;var ve=pe,be=function(e){e.siteTitle;return a.a.createElement(W,{variant:"dark",expand:"sm",sticky:"top",className:"transparentNav"},a.a.createElement("div",{className:"container my-1"},a.a.createElement(W.Brand,{href:"/"},a.a.createElement("img",{src:n("azua"),height:"40px"})),a.a.createElement(W.Toggle,{"aria-controls":"basic-navbar-nav"}),a.a.createElement(W.Collapse,{id:"basic-navbar-nav"},a.a.createElement(ve,{className:"ml-auto"},a.a.createElement(ve.Link,{href:"/projects"}," Projects "),a.a.createElement(ve.Link,{href:"/research"}," Research ")))))};be.defaultProps={siteTitle:""};var me=be,he=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.fluid,i=e.as,u=void 0===i?"div":i,l=e.className,f=Object(c.a)(e,["bsPrefix","fluid","as","className"]),p=Object(d.a)(n,"container"),v="string"==typeof r?"-"+r:"-fluid";return a.a.createElement(u,Object(o.a)({ref:t},f,{className:s()(l,r?""+p+v:p)}))}));he.displayName="Container",he.defaultProps={fluid:!1};var ye=he;t.a=function(e){var t,n=e.children,r=Object(i.useStaticQuery)("3649515864");return a.a.createElement(a.a.Fragment,null,a.a.createElement(me,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.a.createElement(ye,{className:"py-3 main border-left border-right bg-white"},a.a.createElement("main",null,n)),a.a.createElement("footer",{className:"sticky-bottom footer"},a.a.createElement(ye,null,"Alzeck@github.com © ",(new Date).getFullYear(),", Built with"," ",a.a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},GEtZ:function(e,t,n){"use strict";var r=n("SJxq"),a=!1,i=!1;try{var o={get passive(){return a=!0},get once(){return i=a=!0}};r.a&&(window.addEventListener("test",o,o),window.removeEventListener("test",o,!0))}catch(s){}var c=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!i){var o=r.once,c=r.capture,u=n;!i&&o&&(u=n.__once||function e(r){this.removeEventListener(t,e,c),n.call(this,r)},n.__once=u),e.addEventListener(t,u,a?r:c)}e.addEventListener(t,n,r)};var u=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};t.a=function(e,t,n,r){return c(e,t,n,r),function(){u(e,t,n,r)}}},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("wx14"),a=n("zLVn"),i=n("q1tI");n("QLaP");function o(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e,t){return Object.keys(t).reduce((function(n,u){var s,l=n,f=l[o(u)],d=l[u],p=Object(a.a)(l,[o(u),u].map(c)),v=t[u],b=function(e,t,n){var r=Object(i.useRef)(void 0!==e),a=Object(i.useState)(t),o=a[0],c=a[1],u=void 0!==e,s=r.current;return r.current=u,!u&&s&&o!==t&&c(t),[u?e:o,Object(i.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(d,f,e[v]),m=b[0],h=b[1];return Object(r.a)({},p,((s={})[u]=m,s[v]=h,s))}),e)}n("dI71"),n("94VI")},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,i.default)(r)};var r,a=n("pvIh"),i=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},SJxq:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Wzyw:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r).a.createContext(null);a.displayName="CardContext",t.a=a},YGJp:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(){return Object(r.useReducer)((function(e){return!e}),!1)[1]}},YdCC:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("wx14"),a=n("zLVn"),i=n("TSYQ"),o=n.n(i),c=/-(.)/g;var u=n("q1tI"),s=n.n(u),l=n("vUet"),f=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var n=void 0===t?{}:t,i=n.displayName,c=void 0===i?f(e):i,u=n.Component,d=n.defaultProps,p=s.a.forwardRef((function(t,n){var i=t.className,c=t.bsPrefix,f=t.as,d=void 0===f?u||"div":f,p=Object(a.a)(t,["className","bsPrefix","as"]),v=Object(l.a)(c,e);return s.a.createElement(d,Object(r.a)({ref:n,className:o()(i,v)},p))}));return p.defaultProps=d,p.displayName=c,p}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},Zeqi:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return r(e.querySelectorAll(t))}},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=o.length)return!1;for(u=c;0!=u--;)if(!e(t[u],o[u]))return!1;return!0}if(r&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!o.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!e(u.value[1],o.get(u.value[0])))return!1;return!0}if(a&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!o.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((c=t.length)!=o.length)return!1;for(u=c;0!=u--;)if(t[u]!==o[u])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(o,s[u]))return!1;if(n&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!e(t[s[u]],o[s[u]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},azua:function(e,t,n){e.exports=n.p+"static/logo_big-32df39cf03fe47baa8286928646ea918.png"},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},lcWJ:function(e,t,n){"use strict";var r=n("q1tI"),a=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=a(e),r=a(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])}},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,i,o){var c=a||"<<anonymous>>",u=o||r;if(null==n[r])return t?new Error("Required "+i+" `"+u+"` was not specified in `"+c+"`."):null;for(var s=arguments.length,l=Array(s>6?s-6:0),f=6;f<s;f++)l[f-6]=arguments[f];return e.apply(void 0,[n,r,c,i,u].concat(l))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return be}));var r,a,i,o,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("ZhWT"),d=n.n(f),p=n("q1tI"),v=n.n(p),b=n("YVoz"),m=n.n(b),h="bodyAttributes",y="htmlAttributes",g="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(E).map((function(e){return E[e]})),"charset"),x="cssText",w="href",T="http-equiv",j="innerHTML",C="itemprop",S="name",N="property",A="rel",k="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",R="defer",M="encodeSpecialCharacters",D="onChangeClientState",q="titleTemplate",_=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),K=[E.NOSCRIPT,E.SCRIPT,E.STYLE],z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},H=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=X(e,E.TITLE),n=X(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,L);return t||r||void 0},Z=function(e){return X(e,D)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],u=c.toLowerCase();-1===t.indexOf(u)||n===A&&"canonical"===e[n].toLowerCase()||u===A&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==j&&c!==x&&c!==C||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],u=m()({},r[c],a[c]);r[c]=u}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;ue(E.BODY,r),ue(E.HTML,a),ce(f,d);var p={baseTag:se(E.BASE,n),linkTags:se(E.LINK,i),metaTags:se(E.META,o),noscriptTags:se(E.NOSCRIPT,c),scriptTags:se(E.SCRIPT,s),styleTags:se(E.STYLE,l)},v={},b={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(v[e]=n),r.length&&(b[e]=p[e].oldTags)})),t&&t(),u(e,v,b)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ue(E.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var u=o[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},se=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===j)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[v.a.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+V(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case y:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===j||n===x){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),v.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===j||e===x)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===K.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(E.BASE,t,r),bodyAttributes:de(h,n,r),htmlAttributes:de(y,a,r),link:de(E.LINK,i,r),meta:de(E.META,o,r),noscript:de(E.NOSCRIPT,c,r),script:de(E.SCRIPT,u,r),style:de(E.STYLE,s,r),title:de(E.TITLE,{title:f,titleAttributes:d},r)}},ve=l()((function(e){return{baseTag:G([w,P],e),bodyAttributes:J(h,e),defer:X(e,R),encode:X(e,M),htmlAttributes:J(y,e),linkTags:Q(E.LINK,[A,w],e),metaTags:Q(E.META,[S,O,T,N,C],e),noscriptTags:Q(E.NOSCRIPT,[j],e),onChangeClientState:Z(e),scriptTags:Q(E.SCRIPT,[k,j],e),styleTags:Q(E.STYLE,[x],e),title:W(e),titleAttributes:J(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),be=(a=ve,o=i=function(e){function t(){return U(this,t),H(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case E.TITLE:return B({},a,((t={})[r.type]=o,t.titleAttributes=B({},i),t));case E.BODY:return B({},a,{bodyAttributes:B({},i)});case E.HTML:return B({},a,{htmlAttributes:B({},i)})}return B({},a,((n={})[r.type]=B({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return v.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(F(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=F(e,["children"]),r=B({},n);return t&&(r=this.mapChildrenToProps(t,r)),v.a.createElement(a,r)},Y(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(v.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);be.renderStatic=be.rewind}).call(this,n("yLpj"))},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("wx14");var r=n("q1tI"),a=n.n(r),i=a.a.createContext({});i.Consumer,i.Provider;function o(e,t){var n=Object(r.useContext)(i);return e||n[t]||t}},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("qhky"),o=n("Wbzz");function c(e){var t,n,r=e.description,c=e.lang,u=e.meta,s=e.title,l=Object(o.useStaticQuery)("63159454").site,f=r||l.siteMetadata.description,d=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return a.a.createElement(i.a,{htmlAttributes:{lang:c},title:s,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:f},{property:"og:title",content:s},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=l.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:f}].concat(u)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=commons-0d0575de96439f52df8d.js.map