(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[505],{3887:function(e,t,r){"use strict";r.d(t,{Ee:function(){return c}});var n=r(7294),a=r(7277),o=r(4040),l=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t,i=(0,a.Gp)(function(e,t){let{htmlWidth:r,htmlHeight:a,alt:o,...l}=e;return n.createElement("img",{width:r,height:a,ref:t,alt:o,...l})});i.displayName="NativeImage";var c=(0,a.Gp)(function(e,t){let{fallbackSrc:r,fallback:c,src:u,srcSet:s,align:f,fit:p,loading:d,ignoreFallback:m,crossOrigin:y,fallbackStrategy:v="beforeLoadOrError",referrerPolicy:g,...h}=e,_=null!=d||m||!(void 0!==r||void 0!==c),b=function(e){let{loading:t,src:r,srcSet:a,onLoad:l,onError:i,crossOrigin:c,sizes:u,ignoreFallback:s}=e,[f,p]=(0,n.useState)("pending");(0,n.useEffect)(()=>{p(r?"loading":"pending")},[r]);let d=(0,n.useRef)(),m=(0,n.useCallback)(()=>{if(!r)return;y();let e=new Image;e.src=r,c&&(e.crossOrigin=c),a&&(e.srcset=a),u&&(e.sizes=u),t&&(e.loading=t),e.onload=e=>{y(),p("loaded"),null==l||l(e)},e.onerror=e=>{y(),p("failed"),null==i||i(e)},d.current=e},[r,c,a,u,l,i,t]),y=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return(0,o.G)(()=>{if(!s)return"loading"===f&&m(),()=>{y()}},[f,m,s]),s?"loaded":f}({...e,ignoreFallback:_}),x=l(b,v),E={ref:t,objectFit:p,objectPosition:f,..._?h:function(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}(h,["onError","onLoad"])};return x?c||n.createElement(a.m$.img,{as:i,className:"chakra-image__placeholder",src:r,...E}):n.createElement(a.m$.img,{as:i,src:u,srcSet:s,crossOrigin:y,loading:d,referrerPolicy:g,className:"chakra-image",...E})});c.displayName="Image",(0,a.Gp)((e,t)=>n.createElement(a.m$.img,{ref:t,as:i,className:"chakra-image",...e}))},4902:function(e,t,r){"use strict";r.d(t,{kC:function(){return S},X6:function(){return $},xv:function(){return P}});var n=r(7294),a=r(7277);function o(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):!function(e){let t=typeof e;return null!=e&&("object"===t||"function"===t)&&!Array.isArray(e)}(e)?null!=e?t(e):null:Object.keys(e).reduce((r,n)=>(r[n]=t(e[n]),r),{})}Object.freeze(["base","sm","md","lg","xl","2xl"]);var l=r(5336),i=r(4520);function c(e){let t=Object.assign({},e);for(let r in t)void 0===t[r]&&delete t[r];return t}var u,s,f=r(2494),p=r(8387),d=Object.create,m=Object.defineProperty,y=Object.getOwnPropertyDescriptor,v=Object.getOwnPropertyNames,g=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,_=(e,t)=>function(){return t||(0,e[v(e)[0]])((t={exports:{}}).exports,t),t.exports},b=_({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(e){var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),s=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator,d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}function g(){}function h(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var _=h.prototype=new g;_.constructor=h,m(_,v.prototype),_.isPureReactComponent=!0;var b=Array.isArray,x=Object.prototype.hasOwnProperty,E={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,n){var a,o={},l=null,i=null;if(null!=r)for(a in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(l=""+r.key),r)x.call(r,a)&&!k.hasOwnProperty(a)&&(o[a]=r[a]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===o[a]&&(o[a]=c[a]);return{$$typeof:t,type:e,key:l,ref:i,props:o,_owner:E.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var S=/\/+/g;function N(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function j(e,n,a){if(null==e)return e;var o=[],l=0;return!function e(n,a,o,l,i){var c,u,s,f=typeof n;("undefined"===f||"boolean"===f)&&(n=null);var d=!1;if(null===n)d=!0;else switch(f){case"string":case"number":d=!0;break;case"object":switch(n.$$typeof){case t:case r:d=!0}}if(d)return i=i(d=n),n=""===l?"."+N(d,0):l,b(i)?(o="",null!=n&&(o=n.replace(S,"$&/")+"/"),e(i,a,o,"",function(e){return e})):null!=i&&(C(i)&&(c=i,u=o+(!i.key||d&&d.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+n,i={$$typeof:t,type:c.type,key:u,ref:c.ref,props:c.props,_owner:c._owner}),a.push(i)),1;if(d=0,l=""===l?".":l+":",b(n))for(var m=0;m<n.length;m++){var y=l+N(f=n[m],m);d+=e(f,a,o,y,i)}else if("function"==typeof(y=null===(s=n)||"object"!=typeof s?null:"function"==typeof(s=p&&s[p]||s["@@iterator"])?s:null))for(n=y.call(n),m=0;!(f=n.next()).done;)y=l+N(f=f.value,m++),d+=e(f,a,o,y,i);else if("object"===f)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(a=String(n))?"object with keys {"+Object.keys(n).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.");return d}(e,o,"","",function(e){return n.call(a,e,l++)}),o}function $(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},R={transition:null};e.Children={map:j,forEach:function(e,t,r){j(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return j(e,function(){t++}),t},toArray:function(e){return j(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},e.Component=v,e.Fragment=n,e.Profiler=o,e.PureComponent=h,e.StrictMode=a,e.Suspense=u,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:R,ReactCurrentOwner:E},e.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),o=e.key,l=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(l=r.ref,i=E.current),void 0!==r.key&&(o=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in r)x.call(r,u)&&!k.hasOwnProperty(u)&&(a[u]=void 0===r[u]&&void 0!==c?c[u]:r[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){c=Array(u);for(var s=0;s<u;s++)c[s]=arguments[s+2];a.children=c}return{$$typeof:t,type:e.type,key:o,ref:l,props:a,_owner:i}},e.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},e.createElement=w,e.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=C,e.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:$}},e.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},e.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},e.useCallback=function(e,t){return L.current.useCallback(e,t)},e.useContext=function(e){return L.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return L.current.useDeferredValue(e)},e.useEffect=function(e,t){return L.current.useEffect(e,t)},e.useId=function(){return L.current.useId()},e.useImperativeHandle=function(e,t,r){return L.current.useImperativeHandle(e,t,r)},e.useInsertionEffect=function(e,t){return L.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return L.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return L.current.useMemo(e,t)},e.useReducer=function(e,t,r){return L.current.useReducer(e,t,r)},e.useRef=function(e){return L.current.useRef(e)},e.useState=function(e){return L.current.useState(e)},e.useSyncExternalStore=function(e,t,r){return L.current.useSyncExternalStore(e,t,r)},e.useTransition=function(){return L.current.useTransition()},e.version="18.2.0"}});_({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js"(e,t){}});var x=(s=null!=(u=_({"../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(e,t){t.exports=b()}})())?d(g(u)):{},((e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of v(t))h.call(e,a)||void 0===a||m(e,a,{get:()=>t[a],enumerable:!(n=y(t,a))||n.enumerable});return e})(u&&u.__esModule?s:m(s,"default",{value:u,enumerable:!0}),u));function E(e){return x.Children.toArray(e).filter(e=>(0,x.isValidElement)(e))} /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (0,a.Gp)(function(e,t){let{ratio:r=4/3,children:i,className:c,...u}=e,s=n.Children.only(i),f=(0,l.cx)("chakra-aspect-ratio",c);return n.createElement(a.m$.div,{ref:t,position:"relative",className:f,_before:{height:0,content:'""',display:"block",paddingBottom:o(r,e=>`${1/e*100}%`)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...u},s)}).displayName="AspectRatio",(0,a.Gp)(function(e,t){let r=(0,a.mq)("Badge",e),{className:o,...c}=(0,i.Lr)(e);return n.createElement(a.m$.span,{ref:t,className:(0,l.cx)("chakra-badge",e.className),...c,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})}).displayName="Badge";var k=(0,a.m$)("div");k.displayName="Box";var w=(0,a.Gp)(function(e,t){let{size:r,centerContent:a=!0,...o}=e;return n.createElement(k,{ref:t,boxSize:r,__css:{...a?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...o})});w.displayName="Square",(0,a.Gp)(function(e,t){let{size:r,...a}=e;return n.createElement(w,{size:r,ref:t,borderRadius:"9999px",...a})}).displayName="Circle",(0,a.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}}).displayName="Center";var C={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,a.Gp)(function(e,t){let{axis:r="both",...o}=e;return n.createElement(a.m$.div,{ref:t,__css:C[r],...o,position:"absolute"})}),(0,a.Gp)(function(e,t){let r=(0,a.mq)("Code",e),{className:o,...c}=(0,i.Lr)(e);return n.createElement(a.m$.code,{ref:t,className:(0,l.cx)("chakra-code",e.className),...c,__css:{display:"inline-block",...r}})}).displayName="Code",(0,a.Gp)(function(e,t){let{className:r,centerContent:o,...c}=(0,i.Lr)(e),u=(0,a.mq)("Container",e);return n.createElement(a.m$.div,{ref:t,className:(0,l.cx)("chakra-container",r),...c,__css:{...u,...o&&{display:"flex",flexDirection:"column",alignItems:"center"}}})}).displayName="Container",(0,a.Gp)(function(e,t){let{borderLeftWidth:r,borderBottomWidth:o,borderTopWidth:c,borderRightWidth:u,borderWidth:s,borderStyle:f,borderColor:p,...d}=(0,a.mq)("Divider",e),{className:m,orientation:y="horizontal",__css:v,...g}=(0,i.Lr)(e);return n.createElement(a.m$.hr,{ref:t,"aria-orientation":y,...g,__css:{...d,border:"0",borderColor:p,borderStyle:f,...{vertical:{borderLeftWidth:r||u||s||"1px",height:"100%"},horizontal:{borderBottomWidth:o||c||s||"1px",width:"100%"}}[y],...v},className:(0,l.cx)("chakra-divider",m)})}).displayName="Divider";var S=(0,a.Gp)(function(e,t){let{direction:r,align:o,justify:l,wrap:i,basis:c,grow:u,shrink:s,...f}=e;return n.createElement(a.m$.div,{ref:t,__css:{display:"flex",flexDirection:r,alignItems:o,justifyContent:l,flexWrap:i,flexBasis:c,flexGrow:u,flexShrink:s},...f})});S.displayName="Flex";var N=(0,a.Gp)(function(e,t){let{templateAreas:r,gap:o,rowGap:l,columnGap:i,column:c,row:u,autoFlow:s,autoRows:f,templateRows:p,autoColumns:d,templateColumns:m,...y}=e;return n.createElement(a.m$.div,{ref:t,__css:{display:"grid",gridTemplateAreas:r,gridGap:o,gridRowGap:l,gridColumnGap:i,gridAutoColumns:d,gridColumn:c,gridRow:u,gridAutoFlow:s,gridAutoRows:f,gridTemplateRows:p,gridTemplateColumns:m},...y})});function j(e){return o(e,e=>"auto"===e?"auto":`span ${e}/span ${e}`)}N.displayName="Grid",(0,a.Gp)(function(e,t){let{area:r,colSpan:o,colStart:l,colEnd:i,rowEnd:u,rowSpan:s,rowStart:f,...p}=e,d=c({gridArea:r,gridColumn:j(o),gridRow:j(s),gridColumnStart:l,gridColumnEnd:i,gridRowStart:f,gridRowEnd:u});return n.createElement(a.m$.div,{ref:t,__css:d,...p})}).displayName="GridItem";var $=(0,a.Gp)(function(e,t){let r=(0,a.mq)("Heading",e),{className:o,...c}=(0,i.Lr)(e);return n.createElement(a.m$.h2,{ref:t,className:(0,l.cx)("chakra-heading",e.className),...c,__css:r})});$.displayName="Heading",(0,a.Gp)(function(e,t){let r=(0,a.mq)("Mark",e),o=(0,i.Lr)(e);return n.createElement(k,{ref:t,...o,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...r}})}),(0,a.Gp)(function(e,t){let r=(0,a.mq)("Kbd",e),{className:o,...c}=(0,i.Lr)(e);return n.createElement(a.m$.kbd,{ref:t,className:(0,l.cx)("chakra-kbd",o),...c,__css:{fontFamily:"mono",...r}})}).displayName="Kbd",(0,a.Gp)(function(e,t){let r=(0,a.mq)("Link",e),{className:o,isExternal:c,...u}=(0,i.Lr)(e);return n.createElement(a.m$.a,{target:c?"_blank":void 0,rel:c?"noopener":void 0,ref:t,className:(0,l.cx)("chakra-link",o),...u,__css:r})}).displayName="Link",(0,a.Gp)(function(e,t){let{isExternal:r,target:o,rel:i,className:c,...u}=e;return n.createElement(a.m$.a,{...u,ref:t,className:(0,l.cx)("chakra-linkbox__overlay",c),rel:r?"noopener noreferrer":i,target:r?"_blank":o,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})}),(0,a.Gp)(function(e,t){let{className:r,...o}=e;return n.createElement(a.m$.div,{ref:t,position:"relative",...o,className:(0,l.cx)("chakra-linkbox",r),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})});var[L,R]=(0,p.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),O=(0,a.Gp)(function(e,t){let r=(0,a.jC)("List",e),{children:o,styleType:l="none",stylePosition:c,spacing:u,...s}=(0,i.Lr)(e),f=E(o);return n.createElement(L,{value:r},n.createElement(a.m$.ul,{ref:t,listStyleType:l,listStylePosition:c,role:"list",__css:{...r.container,...u?{"& > *:not(style) ~ *:not(style)":{mt:u}}:{}},...s},f))});O.displayName="List",(0,a.Gp)((e,t)=>{let{as:r,...a}=e;return n.createElement(O,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...a})}).displayName="OrderedList",(0,a.Gp)(function(e,t){let{as:r,...a}=e;return n.createElement(O,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...a})}).displayName="UnorderedList",(0,a.Gp)(function(e,t){let r=R();return n.createElement(a.m$.li,{ref:t,...e,__css:r.item})}).displayName="ListItem",(0,a.Gp)(function(e,t){let r=R();return n.createElement(f.JO,{ref:t,role:"presentation",...e,__css:r.icon})}).displayName="ListIcon",(0,a.Gp)(function(e,t){var r,l,i;let{columns:c,spacingX:u,spacingY:s,spacing:f,minChildWidth:p,...d}=e,m=(0,a.Fg)(),y=p?(r=p,l=m,o(r,e=>{var t;let r=(0,a.LP)("sizes",e,"number"==typeof e?`${e}px`:e)(l);return null===e?null:`repeat(auto-fit, minmax(${r}, 1fr))`})):(i=c,o(i,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`));return n.createElement(N,{ref:t,gap:f,columnGap:u,rowGap:s,templateColumns:y,...d})}).displayName="SimpleGrid",(0,a.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}).displayName="Spacer";var G="& > *:not(style) ~ *:not(style)",I=e=>n.createElement(a.m$.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});I.displayName="StackItem";var M=(0,a.Gp)((e,t)=>{let{isInline:r,direction:i,align:c,justify:u,spacing:s="0.5rem",wrap:f,children:p,divider:d,className:m,shouldWrapChildren:y,...v}=e,g=r?"row":i??"column",h=(0,n.useMemo)(()=>(function(e){let{spacing:t,direction:r}=e,n={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:r,[G]:o(r,e=>n[e])}})({direction:g,spacing:s}),[g,s]),_=(0,n.useMemo)(()=>(function(e){let{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":o(r,e=>n[e])}})({spacing:s,direction:g}),[s,g]),b=!!d,x=!y&&!b,k=(0,n.useMemo)(()=>{let e=E(p);return x?e:e.map((t,r)=>{let a=void 0!==t.key?t.key:r,o=r+1===e.length,l=n.createElement(I,{key:a},t),i=y?l:t;if(!b)return i;let c=(0,n.cloneElement)(d,{__css:_});return n.createElement(n.Fragment,{key:a},i,o?null:c)})},[d,_,b,x,y,p]),w=(0,l.cx)("chakra-stack",m);return n.createElement(a.m$.div,{ref:t,display:"flex",alignItems:c,justifyContent:u,flexDirection:h.flexDirection,flexWrap:f,className:w,__css:b?{}:{[G]:h[G]},...v},k)});M.displayName="Stack",(0,a.Gp)((e,t)=>n.createElement(M,{align:"center",...e,direction:"row",ref:t})).displayName="HStack",(0,a.Gp)((e,t)=>n.createElement(M,{align:"center",...e,direction:"column",ref:t})).displayName="VStack";var P=(0,a.Gp)(function(e,t){let r=(0,a.mq)("Text",e),{className:o,align:u,decoration:s,casing:f,...p}=(0,i.Lr)(e),d=c({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return n.createElement(a.m$.p,{ref:t,className:(0,l.cx)("chakra-text",e.className),...d,...p,__css:r})});function T(e){return"number"==typeof e?`${e}px`:e}P.displayName="Text",(0,a.Gp)(function(e,t){let{spacing:r="0.5rem",spacingX:c,spacingY:u,children:s,justify:f,direction:p,align:d,className:m,shouldWrapChildren:y,...v}=e,g=(0,n.useMemo)(()=>{let{spacingX:e=r,spacingY:t=r}={spacingX:c,spacingY:u};return{"--chakra-wrap-x-spacing":t=>o(e,e=>T((0,i.fr)("space",e)(t))),"--chakra-wrap-y-spacing":e=>o(t,t=>T((0,i.fr)("space",t)(e))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:f,alignItems:d,flexDirection:p,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}},[r,c,u,f,d,p]),h=(0,n.useMemo)(()=>y?n.Children.map(s,(e,t)=>n.createElement(A,{key:t},e)):s,[s,y]);return n.createElement(a.m$.div,{ref:t,className:(0,l.cx)("chakra-wrap",m),overflow:"hidden",...v},n.createElement(a.m$.ul,{className:"chakra-wrap__list",__css:g},h))}).displayName="Wrap";var A=(0,a.Gp)(function(e,t){let{className:r,...o}=e;return n.createElement(a.m$.li,{ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,l.cx)("chakra-wrap__listitem",r),...o})});A.displayName="WrapItem"},1210:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=r,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4941).Z;r(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(2648).Z,o=r(7273).Z,l=a(r(7294)),i=r(6273),c=r(2725),u=r(3462),s=r(1018),f=r(7190),p=r(1210),d=r(8684),m={};function y(e,t,r,n){if(e&&i.isLocalURL(t)){Promise.resolve(e.prefetch(t,r,n)).catch(function(e){});var a=n&&void 0!==n.locale?n.locale:e&&e.locale;m[t+"%"+r+(a?"%"+a:"")]=!0}}var v=l.default.forwardRef(function(e,t){var r,a,v=e.href,g=e.as,h=e.children,_=e.prefetch,b=e.passHref,x=e.replace,E=e.shallow,k=e.scroll,w=e.locale,C=e.onClick,S=e.onMouseEnter,N=e.onTouchStart,j=e.legacyBehavior,$=void 0===j?!0!==Boolean(!1):j,L=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=h,$&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));var R=!1!==_,O=l.default.useContext(u.RouterContext),G=l.default.useContext(s.AppRouterContext);G&&(O=G);var I=l.default.useMemo(function(){var e=n(i.resolveHref(O,v,!0),2),t=e[0],r=e[1];return{href:t,as:g?i.resolveHref(O,g):r||t}},[O,v,g]),M=I.href,P=I.as,T=l.default.useRef(M),A=l.default.useRef(P);$&&(a=l.default.Children.only(r));var B=$?a&&"object"==typeof a&&a.ref:t,D=n(f.useIntersection({rootMargin:"200px"}),3),W=D[0],q=D[1],F=D[2],U=l.default.useCallback(function(e){(A.current!==P||T.current!==M)&&(F(),A.current=P,T.current=M),W(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[P,B,M,F,W]);l.default.useEffect(function(){var e=q&&R&&i.isLocalURL(M),t=void 0!==w?w:O&&O.locale,r=m[M+"%"+P+(t?"%"+t:"")];e&&!r&&y(O,M,P,{locale:t})},[P,M,q,w,R,O]);var z={ref:U,onClick:function(e){$||"function"!=typeof C||C(e),$&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,c,u,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(d=(p=e).currentTarget.target)||"_self"===d)&&!p.metaKey&&!p.ctrlKey&&!p.shiftKey&&!p.altKey&&(!p.nativeEvent||2!==p.nativeEvent.which)&&i.isLocalURL(r)){e.preventDefault();var p,d,m=function(){"beforePopState"in t?t[a?"replace":"push"](r,n,{shallow:o,locale:u,scroll:c}):t[a?"replace":"push"](r,{forceOptimisticNavigation:!f})};s?l.default.startTransition(m):m()}}(e,O,M,P,x,E,k,w,Boolean(G),R)},onMouseEnter:function(e){$||"function"!=typeof S||S(e),$&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),!(!R&&G)&&i.isLocalURL(M)&&y(O,M,P,{priority:!0})},onTouchStart:function(e){$||"function"!=typeof N||N(e),$&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),!(!R&&G)&&i.isLocalURL(M)&&y(O,M,P,{priority:!0})}};if(!$||b||"a"===a.type&&!("href"in a.props)){var H=void 0!==w?w:O&&O.locale,V=O&&O.isLocaleDomain&&p.getDomainLocale(P,H,O.locales,O.domainLocales);z.href=V||d.addBasePath(c.addLocale(P,H,O&&O.defaultLocale))}return $?l.default.cloneElement(a,z):l.default.createElement("a",Object.assign({},L,z),r)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,u=e.disabled||!l,s=n(a.useState(!1),2),f=s[0],p=s[1],d=n(a.useState(null),2),m=d[0],y=d[1];return a.useEffect(function(){if(l){if(!u&&!f&&m&&m.tagName){var e,n,a,s,d,y,v;return n=function(e){return e&&p(e)},d=(s=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=i.get(n)))return t;var a=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:a},c.push(r),i.set(r,t),t}(a={root:null==t?void 0:t.current,rootMargin:r})).id,y=s.observer,(v=s.elements).set(m,n),y.observe(m),function(){if(v.delete(m),y.unobserve(m),0===v.size){y.disconnect(),i.delete(d);var e=c.findIndex(function(e){return e.root===d.root&&e.margin===d.margin});e>-1&&c.splice(e,1)}}}}else if(!f){var g=o.requestIdleCallback(function(){return p(!0)});return function(){return o.cancelIdleCallback(g)}}},[m,u,r,t,f]),[y,f,a.useCallback(function(){p(!1)},[])]};var a=r(7294),o=r(9311),l="function"==typeof IntersectionObserver,i=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,r(2648).Z)(r(7294)),a=n.default.createContext(null);t.AppRouterContext=a;var o=n.default.createContext(null);t.LayoutRouterContext=o;var l=n.default.createContext(null);t.GlobalLayoutRouterContext=l;var i=n.default.createContext(null);t.TemplateContext=i},1664:function(e,t,r){e.exports=r(8418)}}]);