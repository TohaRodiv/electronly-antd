"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[274],{45274:function(e,t,n){n.d(t,{Z:function(){return ue}});var a=n(4942),r=n(87462),o=n(67294),c=n(94184),i=n.n(c),l=n(98423),s=n(59844),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},d=function(e){var t=e.prefixCls,n=e.className,c=e.hoverable,l=void 0===c||c,d=u(e,["prefixCls","className","hoverable"]);return o.createElement(s.C,null,(function(e){var c=(0,e.getPrefixCls)("card",t),s=i()("".concat(c,"-grid"),n,(0,a.Z)({},"".concat(c,"-grid-hoverable"),l));return o.createElement("div",(0,r.Z)({},d,{className:s}))}))},f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=function(e){return o.createElement(s.C,null,(function(t){var n=t.getPrefixCls,a=e.prefixCls,c=e.className,l=e.avatar,s=e.title,u=e.description,d=f(e,["prefixCls","className","avatar","title","description"]),v=n("card",a),m=i()("".concat(v,"-meta"),c),p=l?o.createElement("div",{className:"".concat(v,"-meta-avatar")},l):null,b=s?o.createElement("div",{className:"".concat(v,"-meta-title")},s):null,h=u?o.createElement("div",{className:"".concat(v,"-meta-description")},u):null,y=b||h?o.createElement("div",{className:"".concat(v,"-meta-detail")},b,h):null;return o.createElement("div",(0,r.Z)({},d,{className:m}),p,y)}))},m=n(97685),p=n(71002),b=n(91),h=n(1413),y=n(50344),g=n(31131),E=n(21770),Z=n(74902),x=n(75164),C=n(48555);function w(e){var t=(0,o.useRef)(),n=(0,o.useRef)(!1);return(0,o.useEffect)((function(){return function(){n.current=!0,x.Z.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(x.Z.cancel(t.current),t.current=(0,x.Z)((function(){e.apply(void 0,r)})))}}var k=n(15105);function N(e,t){var n,r=e.prefixCls,c=e.id,l=e.active,s=e.tab,u=s.key,d=s.tab,f=s.disabled,v=s.closeIcon,m=e.closable,p=e.renderWrapper,b=e.removeAriaLabel,h=e.editable,y=e.onClick,g=e.onRemove,E=e.onFocus,Z=e.style,x="".concat(r,"-tab");o.useEffect((function(){return g}),[]);var C=h&&!1!==m&&!f;function w(e){f||y(e)}var N=o.createElement("div",{key:u,ref:t,className:i()(x,(n={},(0,a.Z)(n,"".concat(x,"-with-remove"),C),(0,a.Z)(n,"".concat(x,"-active"),l),(0,a.Z)(n,"".concat(x,"-disabled"),f),n)),style:Z,onClick:w},o.createElement("div",{role:"tab","aria-selected":l,id:c&&"".concat(c,"-tab-").concat(u),className:"".concat(x,"-btn"),"aria-controls":c&&"".concat(c,"-panel-").concat(u),"aria-disabled":f,tabIndex:f?null:0,onClick:function(e){e.stopPropagation(),w(e)},onKeyDown:function(e){[k.Z.SPACE,k.Z.ENTER].includes(e.which)&&(e.preventDefault(),w(e))},onFocus:E},d),C&&o.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(x,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:u,event:t})}},v||h.removeIcon||"\xd7"));return p?p(N):N}var P=o.forwardRef(N),S={width:0,height:0,left:0,top:0};var O={width:0,height:0,left:0,top:0,right:0};var T=n(33203),I=n(56180);function R(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,c=e.style;return a&&!1!==a.showAdd?o.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:c,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var M=o.forwardRef(R);function A(e,t){var n=e.prefixCls,r=e.id,c=e.tabs,l=e.locale,s=e.mobile,u=e.moreIcon,d=void 0===u?"More":u,f=e.moreTransitionName,v=e.style,p=e.className,b=e.editable,h=e.tabBarGutter,y=e.rtl,g=e.removeAriaLabel,E=e.onTabClick,Z=(0,o.useState)(!1),x=(0,m.Z)(Z,2),C=x[0],w=x[1],N=(0,o.useState)(null),P=(0,m.Z)(N,2),S=P[0],O=P[1],R="".concat(r,"-more-popup"),A="".concat(n,"-dropdown"),j=null!==S?"".concat(R,"-").concat(S):null,L=null===l||void 0===l?void 0:l.dropdownAriaLabel;var B=o.createElement(T.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;E(t,n),w(!1)},id:R,tabIndex:-1,role:"listbox","aria-activedescendant":j,selectedKeys:[S],"aria-label":void 0!==L?L:"expanded dropdown"},c.map((function(e){var t=b&&!1!==e.closable&&!e.disabled;return o.createElement(T.sN,{key:e.key,id:"".concat(R,"-").concat(e.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(e.key),disabled:e.disabled},o.createElement("span",null,e.tab),t&&o.createElement("button",{type:"button","aria-label":g||"remove",tabIndex:0,className:"".concat(A,"-menu-item-remove"),onClick:function(t){var n,a;t.stopPropagation(),n=t,a=e.key,n.preventDefault(),n.stopPropagation(),b.onEdit("remove",{key:a,event:n})}},e.closeIcon||b.removeIcon||"\xd7"))})));function K(e){for(var t=c.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===S}))||0,a=t.length,r=0;r<a;r+=1){var o=t[n=(n+e+a)%a];if(!o.disabled)return void O(o.key)}}(0,o.useEffect)((function(){var e=document.getElementById(j);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[S]),(0,o.useEffect)((function(){C||O(null)}),[C]);var D=(0,a.Z)({},y?"marginRight":"marginLeft",h);c.length||(D.visibility="hidden",D.order=1);var W=i()((0,a.Z)({},"".concat(A,"-rtl"),y)),V=s?null:o.createElement(I.Z,{prefixCls:A,overlay:B,trigger:["hover"],visible:C,transitionName:f,onVisibleChange:w,overlayClassName:W,mouseEnterDelay:.1,mouseLeaveDelay:.1},o.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:D,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":R,id:"".concat(r,"-more"),"aria-expanded":C,onKeyDown:function(e){var t=e.which;if(C)switch(t){case k.Z.UP:K(-1),e.preventDefault();break;case k.Z.DOWN:K(1),e.preventDefault();break;case k.Z.ESC:w(!1);break;case k.Z.SPACE:case k.Z.ENTER:null!==S&&E(S,e)}else[k.Z.DOWN,k.Z.SPACE,k.Z.ENTER].includes(t)&&(w(!0),e.preventDefault())}},d));return o.createElement("div",{className:i()("".concat(n,"-nav-operations"),p),style:v,ref:t},V,o.createElement(M,{prefixCls:n,locale:l,editable:b}))}var j=o.memo(o.forwardRef(A),(function(e,t){return t.tabMoving})),L=(0,o.createContext)(null),B=Math.pow(.995,20);function K(e,t){var n=o.useRef(e),a=o.useState({}),r=(0,m.Z)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var D=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var c={};return r&&"object"===(0,p.Z)(r)&&!o.isValidElement(r)?c=r:c.right=r,"right"===n&&(t=c.right),"left"===n&&(t=c.left),t?o.createElement("div",{className:"".concat(a,"-extra-content")},t):null};function W(e,t){var n,c=o.useContext(L),l=c.prefixCls,s=c.tabs,u=e.className,d=e.style,f=e.id,v=e.animated,p=e.activeKey,b=e.rtl,y=e.extra,g=e.editable,E=e.locale,k=e.tabPosition,N=e.tabBarGutter,T=e.children,I=e.onTabClick,R=e.onTabScroll,A=(0,o.useRef)(),W=(0,o.useRef)(),V=(0,o.useRef)(),_=(0,o.useRef)(),z=function(){var e=(0,o.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,o.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),q=(0,m.Z)(z,2),H=q[0],G=q[1],Y="top"===k||"bottom"===k,F=K(0,(function(e,t){Y&&R&&R({direction:e>t?"left":"right"})})),X=(0,m.Z)(F,2),U=X[0],J=X[1],Q=K(0,(function(e,t){!Y&&R&&R({direction:e>t?"top":"bottom"})})),$=(0,m.Z)(Q,2),ee=$[0],te=$[1],ne=(0,o.useState)(0),ae=(0,m.Z)(ne,2),re=ae[0],oe=ae[1],ce=(0,o.useState)(0),ie=(0,m.Z)(ce,2),le=ie[0],se=ie[1],ue=(0,o.useState)(0),de=(0,m.Z)(ue,2),fe=de[0],ve=de[1],me=(0,o.useState)(0),pe=(0,m.Z)(me,2),be=pe[0],he=pe[1],ye=(0,o.useState)(null),ge=(0,m.Z)(ye,2),Ee=ge[0],Ze=ge[1],xe=(0,o.useState)(null),Ce=(0,m.Z)(xe,2),we=Ce[0],ke=Ce[1],Ne=(0,o.useState)(0),Pe=(0,m.Z)(Ne,2),Se=Pe[0],Oe=Pe[1],Te=(0,o.useState)(0),Ie=(0,m.Z)(Te,2),Re=Ie[0],Me=Ie[1],Ae=function(e){var t=(0,o.useRef)([]),n=(0,o.useState)({}),a=(0,m.Z)(n,2)[1],r=(0,o.useRef)("function"===typeof e?e():e),c=w((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),c()}]}(new Map),je=(0,m.Z)(Ae,2),Le=je[0],Be=je[1],Ke=function(e,t,n){return(0,o.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||S,o=r.left+r.width,c=0;c<e.length;c+=1){var i,l=e[c].key,s=t.get(l);s||(s=t.get(null===(i=e[c-1])||void 0===i?void 0:i.key)||S);var u=a.get(l)||(0,h.Z)({},s);u.right=o-u.left-u.width,a.set(l,u)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(s,Le,re),De="".concat(l,"-nav-operations-hidden"),We=0,Ve=0;function _e(e){return e<We?We:e>Ve?Ve:e}Y?b?(We=0,Ve=Math.max(0,re-Ee)):(We=Math.min(0,Ee-re),Ve=0):(We=Math.min(0,we-le),Ve=0);var ze=(0,o.useRef)(),qe=(0,o.useState)(),He=(0,m.Z)(qe,2),Ge=He[0],Ye=He[1];function Fe(){Ye(Date.now())}function Xe(){window.clearTimeout(ze.current)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=Ke.get(e)||{width:0,height:0,left:0,right:0,top:0};if(Y){var n=U;b?t.right<U?n=t.right:t.right+t.width>U+Ee&&(n=t.right+t.width-Ee):t.left<-U?n=-t.left:t.left+t.width>-U+Ee&&(n=-(t.left+t.width-Ee)),te(0),J(_e(n))}else{var a=ee;t.top<-ee?a=-t.top:t.top+t.height>-ee+we&&(a=-(t.top+t.height-we)),J(0),te(_e(a))}}!function(e,t){var n=(0,o.useState)(),a=(0,m.Z)(n,2),r=a[0],c=a[1],i=(0,o.useState)(0),l=(0,m.Z)(i,2),s=l[0],u=l[1],d=(0,o.useState)(0),f=(0,m.Z)(d,2),v=f[0],p=f[1],b=(0,o.useState)(),h=(0,m.Z)(b,2),y=h[0],g=h[1],E=(0,o.useRef)(),Z=(0,o.useRef)(),x=(0,o.useRef)(null);x.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;c({x:n,y:a}),window.clearInterval(E.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,o=n.screenY;c({x:a,y:o});var i=a-r.x,l=o-r.y;t(i,l);var d=Date.now();u(d),p(d-s),g({x:i,y:l})}},onTouchEnd:function(){if(r&&(c(null),g(null),y)){var e=y.x/v,n=y.y/v,a=Math.abs(e),o=Math.abs(n);if(Math.max(a,o)<.1)return;var i=e,l=n;E.current=window.setInterval((function(){Math.abs(i)<.01&&Math.abs(l)<.01?window.clearInterval(E.current):t(20*(i*=B),20*(l*=B))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),c=Math.abs(a);o===c?r="x"===Z.current?n:a:o>c?(r=n,Z.current="x"):(r=a,Z.current="y"),t(-r,-r)&&e.preventDefault()}},o.useEffect((function(){function t(e){x.current.onTouchMove(e)}function n(e){x.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){x.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){x.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(A,(function(e,t){function n(e,t){e((function(e){return _e(e+t)}))}if(Y){if(Ee>=re)return!1;n(J,e)}else{if(we>=le)return!1;n(te,t)}return Xe(),Fe(),!0})),(0,o.useEffect)((function(){return Xe(),Ge&&(ze.current=window.setTimeout((function(){Ye(0)}),100)),Xe}),[Ge]);var Je=function(e,t,n,a,r){var c,i,l,s=r.tabs,u=r.tabPosition,d=r.rtl;["top","bottom"].includes(u)?(c="width",i=d?"right":"left",l=Math.abs(t.left)):(c="height",i="top",l=-t.top);var f=t[c],v=n[c],m=a[c],p=f;return v+m>f&&(p=f-m),(0,o.useMemo)((function(){if(!s.length)return[0,0];for(var t=s.length,n=t,a=0;a<t;a+=1){var r=e.get(s[a].key)||O;if(r[i]+r[c]>l+p){n=a-1;break}}for(var o=0,u=t-1;u>=0;u-=1)if((e.get(s[u].key)||O)[i]<l){o=u+1;break}return[o,n]}),[e,l,p,u,s.map((function(e){return e.key})).join("_"),d])}(Ke,{width:Ee,height:we,left:U,top:ee},{width:fe,height:be},{width:Se,height:Re},(0,h.Z)((0,h.Z)({},e),{},{tabs:s})),Qe=(0,m.Z)(Je,2),$e=Qe[0],et=Qe[1],tt={};"top"===k||"bottom"===k?tt[b?"marginRight":"marginLeft"]=N:tt.marginTop=N;var nt=s.map((function(e,t){var n=e.key;return o.createElement(P,{id:f,prefixCls:l,key:n,tab:e,style:0===t?void 0:tt,closable:e.closable,editable:g,active:n===p,renderWrapper:T,removeAriaLabel:null===E||void 0===E?void 0:E.removeAriaLabel,ref:H(n),onClick:function(e){I(n,e)},onRemove:function(){G(n)},onFocus:function(){Ue(n),Fe(),A.current&&(b||(A.current.scrollLeft=0),A.current.scrollTop=0)}})})),at=w((function(){var e,t,n,a,r,o,c,i,l,u=(null===(e=A.current)||void 0===e?void 0:e.offsetWidth)||0,d=(null===(t=A.current)||void 0===t?void 0:t.offsetHeight)||0,f=(null===(n=_.current)||void 0===n?void 0:n.offsetWidth)||0,v=(null===(a=_.current)||void 0===a?void 0:a.offsetHeight)||0,m=(null===(r=V.current)||void 0===r?void 0:r.offsetWidth)||0,p=(null===(o=V.current)||void 0===o?void 0:o.offsetHeight)||0;Ze(u),ke(d),Oe(f),Me(v);var b=((null===(c=W.current)||void 0===c?void 0:c.offsetWidth)||0)-f,h=((null===(i=W.current)||void 0===i?void 0:i.offsetHeight)||0)-v;oe(b),se(h);var y=null===(l=V.current)||void 0===l?void 0:l.className.includes(De);ve(b-(y?0:m)),he(h-(y?0:p)),Be((function(){var e=new Map;return s.forEach((function(t){var n=t.key,a=H(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),rt=s.slice(0,$e),ot=s.slice(et+1),ct=[].concat((0,Z.Z)(rt),(0,Z.Z)(ot)),it=(0,o.useState)(),lt=(0,m.Z)(it,2),st=lt[0],ut=lt[1],dt=Ke.get(p),ft=(0,o.useRef)();function vt(){x.Z.cancel(ft.current)}(0,o.useEffect)((function(){var e={};return dt&&(Y?(b?e.right=dt.right:e.left=dt.left,e.width=dt.width):(e.top=dt.top,e.height=dt.height)),vt(),ft.current=(0,x.Z)((function(){ut(e)})),vt}),[dt,Y,b]),(0,o.useEffect)((function(){Ue()}),[p,dt,Ke,Y]),(0,o.useEffect)((function(){at()}),[b,N,p,s.map((function(e){return e.key})).join("_")]);var mt,pt,bt,ht,yt=!!ct.length,gt="".concat(l,"-nav-wrap");return Y?b?(pt=U>0,mt=U+Ee<re):(mt=U<0,pt=-U+Ee<re):(bt=ee<0,ht=-ee+we<le),o.createElement("div",{ref:t,role:"tablist",className:i()("".concat(l,"-nav"),u),style:d,onKeyDown:function(){Fe()}},o.createElement(D,{position:"left",extra:y,prefixCls:l}),o.createElement(C.default,{onResize:at},o.createElement("div",{className:i()(gt,(n={},(0,a.Z)(n,"".concat(gt,"-ping-left"),mt),(0,a.Z)(n,"".concat(gt,"-ping-right"),pt),(0,a.Z)(n,"".concat(gt,"-ping-top"),bt),(0,a.Z)(n,"".concat(gt,"-ping-bottom"),ht),n)),ref:A},o.createElement(C.default,{onResize:at},o.createElement("div",{ref:W,className:"".concat(l,"-nav-list"),style:{transform:"translate(".concat(U,"px, ").concat(ee,"px)"),transition:Ge?"none":void 0}},nt,o.createElement(M,{ref:_,prefixCls:l,locale:E,editable:g,style:(0,h.Z)((0,h.Z)({},0===nt.length?void 0:tt),{},{visibility:yt?"hidden":null})}),o.createElement("div",{className:i()("".concat(l,"-ink-bar"),(0,a.Z)({},"".concat(l,"-ink-bar-animated"),v.inkBar)),style:st}))))),o.createElement(j,(0,r.Z)({},e,{removeAriaLabel:null===E||void 0===E?void 0:E.removeAriaLabel,ref:V,prefixCls:l,tabs:ct,className:!yt&&De,tabMoving:!!Ge})),o.createElement(D,{position:"right",extra:y,prefixCls:l}))}var V=o.forwardRef(W);function _(e){var t=e.id,n=e.activeKey,r=e.animated,c=e.tabPosition,l=e.rtl,s=e.destroyInactiveTabPane,u=o.useContext(L),d=u.prefixCls,f=u.tabs,v=r.tabPane,m=f.findIndex((function(e){return e.key===n}));return o.createElement("div",{className:i()("".concat(d,"-content-holder"))},o.createElement("div",{className:i()("".concat(d,"-content"),"".concat(d,"-content-").concat(c),(0,a.Z)({},"".concat(d,"-content-animated"),v)),style:m&&v?(0,a.Z)({},l?"marginRight":"marginLeft","-".concat(m,"00%")):null},f.map((function(e){return o.cloneElement(e.node,{key:e.key,prefixCls:d,tabKey:e.key,id:t,animated:v,active:e.key===n,destroyInactiveTabPane:s})}))))}function z(e){var t=e.prefixCls,n=e.forceRender,a=e.className,r=e.style,c=e.id,l=e.active,s=e.animated,u=e.destroyInactiveTabPane,d=e.tabKey,f=e.children,v=o.useState(n),p=(0,m.Z)(v,2),b=p[0],y=p[1];o.useEffect((function(){l?y(!0):u&&y(!1)}),[l,u]);var g={};return l||(s?(g.visibility="hidden",g.height=0,g.overflowY="hidden"):g.display="none"),o.createElement("div",{id:c&&"".concat(c,"-panel-").concat(d),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(d),"aria-hidden":!l,style:(0,h.Z)((0,h.Z)({},g),r),className:i()("".concat(t,"-tabpane"),l&&"".concat(t,"-tabpane-active"),a)},(l||b||n)&&f)}var q=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],H=0;function G(e,t){var n,c,l=e.id,s=e.prefixCls,u=void 0===s?"rc-tabs":s,d=e.className,f=e.children,v=e.direction,Z=e.activeKey,x=e.defaultActiveKey,C=e.editable,w=e.animated,k=void 0===w?{inkBar:!0,tabPane:!1}:w,N=e.tabPosition,P=void 0===N?"top":N,S=e.tabBarGutter,O=e.tabBarStyle,T=e.tabBarExtraContent,I=e.locale,R=e.moreIcon,M=e.moreTransitionName,A=e.destroyInactiveTabPane,j=e.renderTabBar,B=e.onChange,K=e.onTabClick,D=e.onTabScroll,W=(0,b.Z)(e,q),z=function(e){return(0,y.Z)(e).map((function(e){if(o.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return(0,h.Z)((0,h.Z)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}(f),G="rtl"===v;c=!1===k?{inkBar:!1,tabPane:!1}:!0===k?{inkBar:!0,tabPane:!0}:(0,h.Z)({inkBar:!0,tabPane:!1},"object"===(0,p.Z)(k)?k:{});var Y=(0,o.useState)(!1),F=(0,m.Z)(Y,2),X=F[0],U=F[1];(0,o.useEffect)((function(){U((0,g.Z)())}),[]);var J=(0,E.Z)((function(){var e;return null===(e=z[0])||void 0===e?void 0:e.key}),{value:Z,defaultValue:x}),Q=(0,m.Z)(J,2),$=Q[0],ee=Q[1],te=(0,o.useState)((function(){return z.findIndex((function(e){return e.key===$}))})),ne=(0,m.Z)(te,2),ae=ne[0],re=ne[1];(0,o.useEffect)((function(){var e,t=z.findIndex((function(e){return e.key===$}));-1===t&&(t=Math.max(0,Math.min(ae,z.length-1)),ee(null===(e=z[t])||void 0===e?void 0:e.key));re(t)}),[z.map((function(e){return e.key})).join("_"),$,ae]);var oe=(0,E.Z)(null,{value:l}),ce=(0,m.Z)(oe,2),ie=ce[0],le=ce[1],se=P;X&&!["left","right"].includes(P)&&(se="top"),(0,o.useEffect)((function(){l||(le("rc-tabs-".concat(H)),H+=1)}),[]);var ue,de={id:ie,activeKey:$,animated:c,tabPosition:se,rtl:G,mobile:X},fe=(0,h.Z)((0,h.Z)({},de),{},{editable:C,locale:I,moreIcon:R,moreTransitionName:M,tabBarGutter:S,onTabClick:function(e,t){null===K||void 0===K||K(e,t);var n=e!==$;ee(e),n&&(null===B||void 0===B||B(e))},onTabScroll:D,extra:T,style:O,panes:f});return ue=j?j(fe,V):o.createElement(V,fe),o.createElement(L.Provider,{value:{tabs:z,prefixCls:u}},o.createElement("div",(0,r.Z)({ref:t,id:l,className:i()(u,"".concat(u,"-").concat(se),(n={},(0,a.Z)(n,"".concat(u,"-mobile"),X),(0,a.Z)(n,"".concat(u,"-editable"),C),(0,a.Z)(n,"".concat(u,"-rtl"),G),n),d)},W),ue,o.createElement(_,(0,r.Z)({destroyInactiveTabPane:A},de,{animated:c}))))}var Y=o.forwardRef(G);Y.TabPane=z;var F=Y,X=n(89705),U={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},J=n(42135),Q=function(e,t){return o.createElement(J.Z,(0,h.Z)((0,h.Z)({},e),{},{ref:t,icon:U}))};Q.displayName="PlusOutlined";var $=o.forwardRef(Q),ee=n(97937),te=n(21687),ne=n(97647),ae=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function re(e){var t,n=e.type,c=e.className,l=e.size,u=e.onEdit,d=e.hideAdd,f=e.centered,v=e.addIcon,m=ae(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),p=m.prefixCls,b=m.moreIcon,h=void 0===b?o.createElement(X.Z,null):b,y=o.useContext(s.E_),g=y.getPrefixCls,E=y.direction,Z=g("tabs",p);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null===u||void 0===u||u("add"===e?a:n,e)},removeIcon:o.createElement(ee.Z,null),addIcon:v||o.createElement($,null),showAdd:!0!==d});var x=g();return(0,te.Z)(!("onPrevClick"in m)&&!("onNextClick"in m),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),o.createElement(ne.Z.Consumer,null,(function(e){var s,u=void 0!==l?l:e;return o.createElement(F,(0,r.Z)({direction:E,moreTransitionName:"".concat(x,"-slide-up")},m,{className:i()((s={},(0,a.Z)(s,"".concat(Z,"-").concat(u),u),(0,a.Z)(s,"".concat(Z,"-card"),["card","editable-card"].includes(n)),(0,a.Z)(s,"".concat(Z,"-editable-card"),"editable-card"===n),(0,a.Z)(s,"".concat(Z,"-centered"),f),s),c),editable:t,moreIcon:h,prefixCls:Z}))}))}re.TabPane=z;var oe=re,ce=n(71230),ie=n(15746),le=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var se=function(e){var t,n,c,u=o.useContext(s.E_),f=u.getPrefixCls,v=u.direction,m=o.useContext(ne.Z),p=e.prefixCls,b=e.className,h=e.extra,y=e.headStyle,g=void 0===y?{}:y,E=e.bodyStyle,Z=void 0===E?{}:E,x=e.title,C=e.loading,w=e.bordered,k=void 0===w||w,N=e.size,P=e.type,S=e.cover,O=e.actions,T=e.tabList,I=e.children,R=e.activeTabKey,M=e.defaultActiveTabKey,A=e.tabBarExtraContent,j=e.hoverable,L=e.tabProps,B=void 0===L?{}:L,K=le(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),D=f("card",p),W=0===Z.padding||"0px"===Z.padding?{padding:24}:void 0,V=o.createElement("div",{className:"".concat(D,"-loading-block")}),_=o.createElement("div",{className:"".concat(D,"-loading-content"),style:W},o.createElement(ce.Z,{gutter:8},o.createElement(ie.Z,{span:22},V)),o.createElement(ce.Z,{gutter:8},o.createElement(ie.Z,{span:8},V),o.createElement(ie.Z,{span:15},V)),o.createElement(ce.Z,{gutter:8},o.createElement(ie.Z,{span:6},V),o.createElement(ie.Z,{span:18},V)),o.createElement(ce.Z,{gutter:8},o.createElement(ie.Z,{span:13},V),o.createElement(ie.Z,{span:9},V)),o.createElement(ce.Z,{gutter:8},o.createElement(ie.Z,{span:4},V),o.createElement(ie.Z,{span:3},V),o.createElement(ie.Z,{span:16},V))),z=void 0!==R,q=(0,r.Z)((0,r.Z)({},B),(t={},(0,a.Z)(t,z?"activeKey":"defaultActiveKey",z?R:M),(0,a.Z)(t,"tabBarExtraContent",A),t)),H=T&&T.length?o.createElement(oe,(0,r.Z)({size:"large"},q,{className:"".concat(D,"-head-tabs"),onChange:function(t){var n;null===(n=e.onTabChange)||void 0===n||n.call(e,t)}}),T.map((function(e){return o.createElement(oe.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(x||h||H)&&(c=o.createElement("div",{className:"".concat(D,"-head"),style:g},o.createElement("div",{className:"".concat(D,"-head-wrapper")},x&&o.createElement("div",{className:"".concat(D,"-head-title")},x),h&&o.createElement("div",{className:"".concat(D,"-extra")},h)),H));var G=S?o.createElement("div",{className:"".concat(D,"-cover")},S):null,Y=o.createElement("div",{className:"".concat(D,"-body"),style:Z},C?_:I),F=O&&O.length?o.createElement("ul",{className:"".concat(D,"-actions")},function(e){return e.map((function(t,n){return o.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},o.createElement("span",null,t))}))}(O)):null,X=(0,l.Z)(K,["onTabChange"]),U=N||m,J=i()(D,(n={},(0,a.Z)(n,"".concat(D,"-loading"),C),(0,a.Z)(n,"".concat(D,"-bordered"),k),(0,a.Z)(n,"".concat(D,"-hoverable"),j),(0,a.Z)(n,"".concat(D,"-contain-grid"),function(){var t;return o.Children.forEach(e.children,(function(e){e&&e.type&&e.type===d&&(t=!0)})),t}()),(0,a.Z)(n,"".concat(D,"-contain-tabs"),T&&T.length),(0,a.Z)(n,"".concat(D,"-").concat(U),U),(0,a.Z)(n,"".concat(D,"-type-").concat(P),!!P),(0,a.Z)(n,"".concat(D,"-rtl"),"rtl"===v),n),b);return o.createElement("div",(0,r.Z)({},X,{className:J}),c,G,Y,F)};se.Grid=d,se.Meta=v;var ue=se},56180:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(4942),r=n(97685),o=n(91),c=n(67294),i=n(51169),l=n(94184),s=n.n(l),u={adjustX:1,adjustY:1},d=[0,0],f={topLeft:{points:["bl","tl"],overflow:u,offset:[0,-4],targetOffset:d},topCenter:{points:["bc","tc"],overflow:u,offset:[0,-4],targetOffset:d},topRight:{points:["br","tr"],overflow:u,offset:[0,-4],targetOffset:d},bottomLeft:{points:["tl","bl"],overflow:u,offset:[0,4],targetOffset:d},bottomCenter:{points:["tc","bc"],overflow:u,offset:[0,4],targetOffset:d},bottomRight:{points:["tr","br"],overflow:u,offset:[0,4],targetOffset:d}};var v=c.forwardRef((function(e,t){var n=e.arrow,l=void 0!==n&&n,u=e.prefixCls,d=void 0===u?"rc-dropdown":u,v=e.transitionName,m=e.animation,p=e.align,b=e.placement,h=void 0===b?"bottomLeft":b,y=e.placements,g=void 0===y?f:y,E=e.getPopupContainer,Z=e.showAction,x=e.hideAction,C=e.overlayClassName,w=e.overlayStyle,k=e.visible,N=e.trigger,P=void 0===N?["hover"]:N,S=(0,o.Z)(e,["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"]),O=c.useState(),T=(0,r.Z)(O,2),I=T[0],R=T[1],M="visible"in e?k:I,A=c.useRef(null);c.useImperativeHandle(t,(function(){return A.current}));var j=function(){var t=e.overlay;return"function"===typeof t?t():t},L=function(t){var n=e.onOverlayClick,a=j().props;R(!1),n&&n(t),a.onClick&&a.onClick(t)},B=function(){var e=j(),t={prefixCls:"".concat(d,"-menu"),onClick:L};return"string"===typeof e.type&&delete t.prefixCls,c.createElement(c.Fragment,null,l&&c.createElement("div",{className:"".concat(d,"-arrow")}),c.cloneElement(e,t))},K=x;return K||-1===P.indexOf("contextMenu")||(K=["click"]),c.createElement(i.Z,Object.assign({},S,{prefixCls:d,ref:A,popupClassName:s()(C,(0,a.Z)({},"".concat(d,"-show-arrow"),l)),popupStyle:w,builtinPlacements:g,action:P,showAction:Z,hideAction:K||[],popupPlacement:h,popupAlign:p,popupTransitionName:v,popupAnimation:m,popupVisible:M,stretch:function(){var t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n}()?"minWidth":"",popup:"function"===typeof e.overlay?B:B(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;R(t),"function"===typeof n&&n(t)},getPopupContainer:E}),function(){var t=e.children,n=t.props?t.props:{},a=s()(n.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(d,"-open")}());return I&&t?c.cloneElement(t,{className:a}):t}())}))}}]);