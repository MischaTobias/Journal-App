import{r as Hc,a as m,R as Qr,b as Wc,j as f,G as k,T as wt,c as st,A as ea,B as Zt,d as qc,L as ta,I as Kc,e as Gc,f as Jc,g as Ti,h as Fn,M as Yc,i as Xc,D as Qc,k as Zc,l as eu,m as tu,n as nu,o as ru,p as iu,q as As,s as Ps,S as su,U as ou,t as au,u as lu,v as cu,C as uu,w as du,x as hu,y as fu,z as pu}from"./@mui-0Ug3c0ZY.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var na,Cs=Hc;na=Cs.createRoot,Cs.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function en(){return en=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},en.apply(this,arguments)}var Be;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Be||(Be={}));const Rs="popstate";function mu(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=yt(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Zr("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:Bn(s))}function r(i,s){Si(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return wu(e,n,r,t)}function M(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Si(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gu(){return Math.random().toString(36).substr(2,8)}function ks(t,e){return{usr:t.state,key:t.key,idx:e}}function Zr(t,e,n,r){return n===void 0&&(n=null),en({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?yt(e):e,{state:n,key:e&&e.key||r||gu()})}function Bn(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function yt(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function wu(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Be.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(en({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=Be.Pop;let g=u(),T=g==null?null:g-c;c=g,l&&l({action:a,location:E.location,delta:T})}function p(g,T){a=Be.Push;let R=Zr(E.location,g,T);n&&n(R,g),c=u()+1;let _=ks(R,c),S=E.createHref(R);try{o.pushState(_,"",S)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;i.location.assign(S)}s&&l&&l({action:a,location:E.location,delta:1})}function w(g,T){a=Be.Replace;let R=Zr(E.location,g,T);n&&n(R,g),c=u();let _=ks(R,c),S=E.createHref(R);o.replaceState(_,"",S),s&&l&&l({action:a,location:E.location,delta:0})}function y(g){let T=i.location.origin!=="null"?i.location.origin:i.location.href,R=typeof g=="string"?g:Bn(g);return R=R.replace(/ $/,"%20"),M(T,"No window.location.(origin|href) available to create URL for href: "+R),new URL(R,T)}let E={get action(){return a},get location(){return t(i,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Rs,d),l=g,()=>{i.removeEventListener(Rs,d),l=null}},createHref(g){return e(i,g)},createURL:y,encodeLocation(g){let T=y(g);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:p,replace:w,go(g){return o.go(g)}};return E}var xs;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(xs||(xs={}));function yu(t,e,n){return n===void 0&&(n="/"),vu(t,e,n,!1)}function vu(t,e,n,r){let i=typeof e=="string"?yt(e):e,s=Ai(i.pathname||"/",n);if(s==null)return null;let o=ra(t);_u(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=xu(s);a=Ru(o[l],c,r)}return a}function ra(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(M(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=He([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(M(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ra(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Pu(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of ia(s.path))i(s,o,l)}),e}function ia(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=ia(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function _u(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Cu(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bu=/^:[\w-]+$/,Eu=3,Iu=2,Tu=1,Su=10,Au=-2,Os=t=>t==="*";function Pu(t,e){let n=t.split("/"),r=n.length;return n.some(Os)&&(r+=Au),e&&(r+=Iu),n.filter(i=>!Os(i)).reduce((i,s)=>i+(bu.test(s)?Eu:s===""?Tu:Su),r)}function Cu(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Ru(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=s==="/"?e:e.slice(s.length)||"/",d=Ns({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),p=l.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Ns({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:He([s,d.pathname]),pathnameBase:Lu(He([s,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(s=He([s,d.pathnameBase]))}return o}function Ns(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ku(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{let{paramName:p,isOptional:w}=u;if(p==="*"){let E=a[d]||"";o=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const y=a[d];return w&&!y?c[p]=void 0:c[p]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function ku(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Si(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function xu(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Si(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ai(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ou(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?yt(t):t;return{pathname:n?n.startsWith("/")?n:Nu(n,e):e,search:Vu(r),hash:Mu(i)}}function Nu(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ur(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Du(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Pi(t,e){let n=Du(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ci(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=yt(t):(i=en({},t),M(!i.pathname||!i.pathname.includes("?"),Ur("?","pathname","search",i)),M(!i.pathname||!i.pathname.includes("#"),Ur("#","pathname","hash",i)),M(!i.search||!i.search.includes("#"),Ur("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?e[d]:"/"}let l=Ou(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const He=t=>t.join("/").replace(/\/\/+/g,"/"),Lu=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Vu=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Mu=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Uu(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const sa=["post","put","patch","delete"];new Set(sa);const ju=["get",...sa];new Set(ju);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tn(){return tn=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tn.apply(this,arguments)}const Ri=m.createContext(null),Fu=m.createContext(null),Xe=m.createContext(null),pr=m.createContext(null),Qe=m.createContext({outlet:null,matches:[],isDataRoute:!1}),oa=m.createContext(null);function Bu(t,e){let{relative:n}=e===void 0?{}:e;jt()||M(!1);let{basename:r,navigator:i}=m.useContext(Xe),{hash:s,pathname:o,search:a}=ca(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:He([r,o])),i.createHref({pathname:l,search:a,hash:s})}function jt(){return m.useContext(pr)!=null}function pn(){return jt()||M(!1),m.useContext(pr).location}function aa(t){m.useContext(Xe).static||m.useLayoutEffect(t)}function la(){let{isDataRoute:t}=m.useContext(Qe);return t?ed():$u()}function $u(){jt()||M(!1);let t=m.useContext(Ri),{basename:e,future:n,navigator:r}=m.useContext(Xe),{matches:i}=m.useContext(Qe),{pathname:s}=pn(),o=JSON.stringify(Pi(i,n.v7_relativeSplatPath)),a=m.useRef(!1);return aa(()=>{a.current=!0}),m.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=Ci(c,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:He([e,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[e,r,o,s,t])}function ca(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=m.useContext(Xe),{matches:i}=m.useContext(Qe),{pathname:s}=pn(),o=JSON.stringify(Pi(i,r.v7_relativeSplatPath));return m.useMemo(()=>Ci(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function zu(t,e){return Hu(t,e)}function Hu(t,e,n,r){jt()||M(!1);let{navigator:i}=m.useContext(Xe),{matches:s}=m.useContext(Qe),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=pn(),u;if(e){var d;let g=typeof e=="string"?yt(e):e;l==="/"||(d=g.pathname)!=null&&d.startsWith(l)||M(!1),u=g}else u=c;let p=u.pathname||"/",w=p;if(l!=="/"){let g=l.replace(/^\//,"").split("/");w="/"+p.replace(/^\//,"").split("/").slice(g.length).join("/")}let y=yu(t,{pathname:w}),E=Ju(y&&y.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:He([l,i.encodeLocation?i.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:He([l,i.encodeLocation?i.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,r);return e&&E?m.createElement(pr.Provider,{value:{location:tn({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Be.Pop}},E):E}function Wu(){let t=Zu(),e=Uu(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},e),n?m.createElement("pre",{style:i},n):null,null)}const qu=m.createElement(Wu,null);class Ku extends m.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?m.createElement(Qe.Provider,{value:this.props.routeContext},m.createElement(oa.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gu(t){let{routeContext:e,match:n,children:r}=t,i=m.useContext(Ri);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(Qe.Provider,{value:e},r)}function Ju(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||M(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:p,errors:w}=n,y=d.route.loader&&p[d.route.id]===void 0&&(!w||w[d.route.id]===void 0);if(d.route.lazy||y){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,p)=>{let w,y=!1,E=null,g=null;n&&(w=a&&d.route.id?a[d.route.id]:void 0,E=d.route.errorElement||qu,l&&(c<0&&p===0?(y=!0,g=null):c===p&&(y=!0,g=d.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,p+1)),R=()=>{let _;return w?_=E:y?_=g:d.route.Component?_=m.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=u,m.createElement(Gu,{match:d,routeContext:{outlet:u,matches:T,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?m.createElement(Ku,{location:n.location,revalidation:n.revalidation,component:E,error:w,children:R(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):R()},null)}var ua=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ua||{}),$n=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}($n||{});function Yu(t){let e=m.useContext(Ri);return e||M(!1),e}function Xu(t){let e=m.useContext(Fu);return e||M(!1),e}function Qu(t){let e=m.useContext(Qe);return e||M(!1),e}function da(t){let e=Qu(),n=e.matches[e.matches.length-1];return n.route.id||M(!1),n.route.id}function Zu(){var t;let e=m.useContext(oa),n=Xu($n.UseRouteError),r=da($n.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function ed(){let{router:t}=Yu(ua.UseNavigateStable),e=da($n.UseNavigateStable),n=m.useRef(!1);return aa(()=>{n.current=!0}),m.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,tn({fromRouteId:e},s)))},[t,e])}function ki(t){let{to:e,replace:n,state:r,relative:i}=t;jt()||M(!1);let{future:s,static:o}=m.useContext(Xe),{matches:a}=m.useContext(Qe),{pathname:l}=pn(),c=la(),u=Ci(e,Pi(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(u);return m.useEffect(()=>c(JSON.parse(d),{replace:n,state:r,relative:i}),[c,d,i,n,r]),null}function Pe(t){M(!1)}function td(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Be.Pop,navigator:s,static:o=!1,future:a}=t;jt()&&M(!1);let l=e.replace(/^\/*/,"/"),c=m.useMemo(()=>({basename:l,navigator:s,static:o,future:tn({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=yt(r));let{pathname:u="/",search:d="",hash:p="",state:w=null,key:y="default"}=r,E=m.useMemo(()=>{let g=Ai(u,l);return g==null?null:{location:{pathname:g,search:d,hash:p,state:w,key:y},navigationType:i}},[l,u,d,p,w,y,i]);return E==null?null:m.createElement(Xe.Provider,{value:c},m.createElement(pr.Provider,{children:n,value:E}))}function xi(t){let{children:e,location:n}=t;return zu(ei(e),n)}new Promise(()=>{});function ei(t,e){e===void 0&&(e=[]);let n=[];return m.Children.forEach(t,(r,i)=>{if(!m.isValidElement(r))return;let s=[...e,i];if(r.type===m.Fragment){n.push.apply(n,ei(r.props.children,s));return}r.type!==Pe&&M(!1),!r.props.index||!r.props.children||M(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ei(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ti(){return ti=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ti.apply(this,arguments)}function nd(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rd(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function id(t,e){return t.button===0&&(!e||e==="_self")&&!rd(t)}const sd=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],od="6";try{window.__reactRouterVersion=od}catch{}const ad="startTransition",Ds=Qr[ad];function ld(t){let{basename:e,children:n,future:r,window:i}=t,s=m.useRef();s.current==null&&(s.current=mu({window:i,v5Compat:!0}));let o=s.current,[a,l]=m.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=m.useCallback(d=>{c&&Ds?Ds(()=>l(d)):l(d)},[l,c]);return m.useLayoutEffect(()=>o.listen(u),[o,u]),m.createElement(td,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const cd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ud=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ha=m.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,unstable_viewTransition:d}=e,p=nd(e,sd),{basename:w}=m.useContext(Xe),y,E=!1;if(typeof c=="string"&&ud.test(c)&&(y=c,cd))try{let _=new URL(window.location.href),S=c.startsWith("//")?new URL(_.protocol+c):new URL(c),D=Ai(S.pathname,w);S.origin===_.origin&&D!=null?c=D+S.search+S.hash:E=!0}catch{}let g=Bu(c,{relative:i}),T=dd(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:i,unstable_viewTransition:d});function R(_){r&&r(_),_.defaultPrevented||T(_)}return m.createElement("a",ti({},p,{href:y||g,onClick:E||s?r:R,ref:n,target:l}))});var Ls;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ls||(Ls={}));var Vs;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Vs||(Vs={}));function dd(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=la(),c=pn(),u=ca(t,{relative:o});return m.useCallback(d=>{if(id(d,n)){d.preventDefault();let p=r!==void 0?r:Bn(c)===Bn(u);l(t,{replace:p,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,l,u,r,i,n,t,s,o,a])}var fa={exports:{}},pa={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mn=m;function hd(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fd=typeof Object.is=="function"?Object.is:hd,pd=mn.useSyncExternalStore,md=mn.useRef,gd=mn.useEffect,wd=mn.useMemo,yd=mn.useDebugValue;pa.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=md(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=wd(function(){function l(w){if(!c){if(c=!0,u=w,w=r(w),i!==void 0&&o.hasValue){var y=o.value;if(i(y,w))return d=y}return d=w}if(y=d,fd(u,w))return y;var E=r(w);return i!==void 0&&i(y,E)?y:(u=w,d=E)}var c=!1,u,d,p=n===void 0?null:n;return[function(){return l(e())},p===null?void 0:function(){return l(p())}]},[e,n,r,i]);var a=pd(t,s[0],s[1]);return gd(function(){o.hasValue=!0,o.value=a},[a]),yd(a),a};fa.exports=pa;var vd=fa.exports,ne="default"in Qr?Wc:Qr,Ms=Symbol.for("react-redux-context"),Us=typeof globalThis<"u"?globalThis:{};function _d(){if(!ne.createContext)return{};const t=Us[Ms]??(Us[Ms]=new Map);let e=t.get(ne.createContext);return e||(e=ne.createContext(null),t.set(ne.createContext,e)),e}var Je=_d(),bd=()=>{throw new Error("uSES not initialized!")};function Oi(t=Je){return function(){return ne.useContext(t)}}var ma=Oi(),ga=bd,Ed=t=>{ga=t},Id=(t,e)=>t===e;function Td(t=Je){const e=t===Je?ma:Oi(t),n=(r,i={})=>{const{equalityFn:s=Id,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:c,stabilityCheck:u,identityFunctionCheck:d}=e();ne.useRef(!0);const p=ne.useCallback({[r.name](y){return r(y)}}[r.name],[r,u,o.stabilityCheck]),w=ga(l.addNestedSub,a.getState,c||a.getState,p,s);return ne.useDebugValue(w),w};return Object.assign(n,{withTypes:()=>n}),n}var at=Td();function Sd(t){t()}function Ad(){let t=null,e=null;return{clear(){t=null,e=null},notify(){Sd(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var js={notify(){},get:()=>[]};function Pd(t,e){let n,r=js,i=0,s=!1;function o(E){u();const g=r.subscribe(E);let T=!1;return()=>{T||(T=!0,g(),d())}}function a(){r.notify()}function l(){y.onStateChange&&y.onStateChange()}function c(){return s}function u(){i++,n||(n=t.subscribe(l),r=Ad())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=js)}function p(){s||(s=!0,u())}function w(){s&&(s=!1,d())}const y={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:c,trySubscribe:p,tryUnsubscribe:w,getListeners:()=>r};return y}var Cd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rd=typeof navigator<"u"&&navigator.product==="ReactNative",kd=Cd||Rd?ne.useLayoutEffect:ne.useEffect;function xd({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=ne.useMemo(()=>{const c=Pd(t);return{store:t,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=ne.useMemo(()=>t.getState(),[t]);kd(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,a]);const l=e||Je;return ne.createElement(l.Provider,{value:o},n)}var Od=xd;function wa(t=Je){const e=t===Je?ma:Oi(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var Nd=wa();function Dd(t=Je){const e=t===Je?Nd:wa(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var vt=Dd();Ed(vd.useSyncExternalStoreWithSelector);const ya=({children:t,title:e=""})=>f.jsx(k,{alignItems:"center",container:!0,justifyContent:"center",spacing:0,sx:{minHeight:"100vh",backgroundColor:"primary.main",padding:4},children:f.jsxs(k,{className:"box-shadow",size:{md:6},sx:{backgroundColor:"white",padding:2,borderRadius:2,width:{sm:450}},children:[f.jsx(wt,{variant:"h5",sx:{mb:1},children:e}),t]})}),Ni=(t={},e={})=>{const[n,r]=m.useState(t),[i,s]=m.useState({});m.useEffect(()=>{c()},[n]),m.useEffect(()=>{r(t)},[t]);const o=m.useMemo(()=>!Object.values(i).find(d=>d!==null),[i]),a=({target:u})=>{const{name:d,value:p}=u;r({...n,[d]:p})},l=()=>{r(t)},c=()=>{const u={};for(const d of Object.keys(e)){const[p,w]=e[d];u[`${d}Valid`]=p(n[d])?null:w,s(u)}};return{...n,formState:n,onInputChange:a,onResetForm:l,...i,formValidationStatus:i,isFormValid:o}};var Fs={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ld=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,w=c&63;l||(w=64,o||(p=64)),r.push(n[u],n[d],n[p],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(va(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ld(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new Vd;const p=s<<2|a>>4;if(r.push(p),c!==64){const w=a<<4&240|c>>2;if(r.push(w),d!==64){const y=c<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Vd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Md=function(t){const e=va(t);return _a.encodeByteArray(e,!0)},zn=function(t){return Md(t).replace(/\./g,"")},ba=function(t){try{return _a.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=()=>Ud().__FIREBASE_DEFAULTS__,Fd=()=>{if(typeof process>"u"||typeof Fs>"u")return;const t=Fs.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ba(t[1]);return e&&JSON.parse(e)},Di=()=>{try{return jd()||Fd()||Bd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ea=t=>{var e,n;return(n=(e=Di())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$d=t=>{const e=Ea(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ia=()=>{var t;return(t=Di())===null||t===void 0?void 0:t.config},Ta=t=>{var e;return(e=Di())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[zn(JSON.stringify(n)),zn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(J())}function qd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gd(){const t=J();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jd(){try{return typeof indexedDB=="object"}catch{return!1}}function Yd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="FirebaseError";class De extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Xd,Object.setPrototypeOf(this,De.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gn.prototype.create)}}class gn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Qd(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new De(i,a,r)}}function Qd(t,e){return t.replace(Zd,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Zd=/\{\$([^}]+)}/g;function eh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Bs(s)&&Bs(o)){if(!Hn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bs(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Kt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function th(t,e){const n=new nh(t,e);return n.subscribe.bind(n)}class nh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rh(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=jr),i.error===void 0&&(i.error=jr),i.complete===void 0&&(i.complete=jr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){return t&&t._delegate?t._delegate:t}class lt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oh(e))try{this.getOrInitializeService({instanceIdentifier:nt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nt){return this.instances.has(e)}getOptions(e=nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nt){return this.component?this.component.multipleInstances?e:nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sh(t){return t===nt?void 0:t}function oh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ih(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(x||(x={}));const lh={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},ch=x.INFO,uh={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},dh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=uh[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Li{constructor(e){this.name=e,this._logLevel=ch,this._logHandler=dh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const hh=(t,e)=>e.some(n=>t instanceof n);let $s,zs;function fh(){return $s||($s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ph(){return zs||(zs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sa=new WeakMap,ni=new WeakMap,Aa=new WeakMap,Fr=new WeakMap,Vi=new WeakMap;function mh(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(We(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sa.set(n,t)}).catch(()=>{}),Vi.set(e,t),e}function gh(t){if(ni.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ni.set(t,e)}let ri={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ni.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Aa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return We(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wh(t){ri=t(ri)}function yh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Br(this),e,...n);return Aa.set(r,e.sort?e.sort():[e]),We(r)}:ph().includes(t)?function(...e){return t.apply(Br(this),e),We(Sa.get(this))}:function(...e){return We(t.apply(Br(this),e))}}function vh(t){return typeof t=="function"?yh(t):(t instanceof IDBTransaction&&gh(t),hh(t,fh())?new Proxy(t,ri):t)}function We(t){if(t instanceof IDBRequest)return mh(t);if(Fr.has(t))return Fr.get(t);const e=vh(t);return e!==t&&(Fr.set(t,e),Vi.set(e,t)),e}const Br=t=>Vi.get(t);function _h(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=We(o);return r&&o.addEventListener("upgradeneeded",l=>{r(We(o.result),l.oldVersion,l.newVersion,We(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const bh=["get","getKey","getAll","getAllKeys","count"],Eh=["put","add","delete","clear"],$r=new Map;function Hs(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($r.get(e))return $r.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Eh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bh.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return $r.set(e,s),s}wh(t=>({...t,get:(e,n,r)=>Hs(e,n)||t.get(e,n,r),has:(e,n)=>!!Hs(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Th(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Th(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ii="@firebase/app",Ws="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=new Li("@firebase/app"),Sh="@firebase/app-compat",Ah="@firebase/analytics-compat",Ph="@firebase/analytics",Ch="@firebase/app-check-compat",Rh="@firebase/app-check",kh="@firebase/auth",xh="@firebase/auth-compat",Oh="@firebase/database",Nh="@firebase/database-compat",Dh="@firebase/functions",Lh="@firebase/functions-compat",Vh="@firebase/installations",Mh="@firebase/installations-compat",Uh="@firebase/messaging",jh="@firebase/messaging-compat",Fh="@firebase/performance",Bh="@firebase/performance-compat",$h="@firebase/remote-config",zh="@firebase/remote-config-compat",Hh="@firebase/storage",Wh="@firebase/storage-compat",qh="@firebase/firestore",Kh="@firebase/vertexai-preview",Gh="@firebase/firestore-compat",Jh="firebase",Yh="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="[DEFAULT]",Xh={[ii]:"fire-core",[Sh]:"fire-core-compat",[Ph]:"fire-analytics",[Ah]:"fire-analytics-compat",[Rh]:"fire-app-check",[Ch]:"fire-app-check-compat",[kh]:"fire-auth",[xh]:"fire-auth-compat",[Oh]:"fire-rtdb",[Nh]:"fire-rtdb-compat",[Dh]:"fire-fn",[Lh]:"fire-fn-compat",[Vh]:"fire-iid",[Mh]:"fire-iid-compat",[Uh]:"fire-fcm",[jh]:"fire-fcm-compat",[Fh]:"fire-perf",[Bh]:"fire-perf-compat",[$h]:"fire-rc",[zh]:"fire-rc-compat",[Hh]:"fire-gcs",[Wh]:"fire-gcs-compat",[qh]:"fire-fst",[Gh]:"fire-fst-compat",[Kh]:"fire-vertex","fire-js":"fire-js",[Jh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new Map,Qh=new Map,oi=new Map;function qs(t,e){try{t.container.addComponent(e)}catch(n){ke.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kt(t){const e=t.name;if(oi.has(e))return ke.debug(`There were multiple attempts to register component ${e}.`),!1;oi.set(e,t);for(const n of Wn.values())qs(n,t);for(const n of Qh.values())qs(n,t);return!0}function Mi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pe(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qe=new gn("app","Firebase",Zh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=Yh;function Pa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:si,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qe.create("bad-app-name",{appName:String(i)});if(n||(n=Ia()),!n)throw qe.create("no-options");const s=Wn.get(i);if(s){if(Hn(n,s.options)&&Hn(r,s.config))return s;throw qe.create("duplicate-app",{appName:i})}const o=new ah(i);for(const l of oi.values())o.addComponent(l);const a=new ef(n,r,o);return Wn.set(i,a),a}function Ca(t=si){const e=Wn.get(t);if(!e&&t===si&&Ia())return Pa();if(!e)throw qe.create("no-app",{appName:t});return e}function Ke(t,e,n){var r;let i=(r=Xh[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ke.warn(a.join(" "));return}kt(new lt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="firebase-heartbeat-database",nf=1,nn="firebase-heartbeat-store";let zr=null;function Ra(){return zr||(zr=_h(tf,nf,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(nn)}catch(n){console.warn(n)}}}}).catch(t=>{throw qe.create("idb-open",{originalErrorMessage:t.message})})),zr}async function rf(t){try{const n=(await Ra()).transaction(nn),r=await n.objectStore(nn).get(ka(t));return await n.done,r}catch(e){if(e instanceof De)ke.warn(e.message);else{const n=qe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ke.warn(n.message)}}}async function Ks(t,e){try{const r=(await Ra()).transaction(nn,"readwrite");await r.objectStore(nn).put(e,ka(t)),await r.done}catch(n){if(n instanceof De)ke.warn(n.message);else{const r=qe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ke.warn(r.message)}}}function ka(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=1024,of=30*24*60*60*1e3;class af{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gs();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=of}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ke.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gs(),{heartbeatsToSend:r,unsentEntries:i}=lf(this._heartbeatsCache.heartbeats),s=zn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return ke.warn(n),""}}}function Gs(){return new Date().toISOString().substring(0,10)}function lf(t,e=sf){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Js(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Js(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jd()?Yd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rf(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ks(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ks(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Js(t){return zn(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t){kt(new lt("platform-logger",e=>new Ih(e),"PRIVATE")),kt(new lt("heartbeat",e=>new af(e),"PRIVATE")),Ke(ii,Ws,t),Ke(ii,Ws,"esm2017"),Ke("fire-js","")}uf("");function Ui(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function xa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const df=xa,Oa=new gn("auth","Firebase",xa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new Li("@firebase/auth");function hf(t,...e){qn.logLevel<=x.WARN&&qn.warn(`Auth (${Ft}): ${t}`,...e)}function Vn(t,...e){qn.logLevel<=x.ERROR&&qn.error(`Auth (${Ft}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t,...e){throw Fi(t,...e)}function me(t,...e){return Fi(t,...e)}function ji(t,e,n){const r=Object.assign(Object.assign({},df()),{[e]:n});return new gn("auth","Firebase",r).create(e,{appName:t.name})}function Ce(t){return ji(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ff(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&he(t,"argument-error"),ji(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Oa.create(t,...e)}function b(t,e,...n){if(!t)throw Fi(e,...n)}function Te(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vn(e),new Error(e)}function xe(t,e){t||Te(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pf(){return Ys()==="http:"||Ys()==="https:"}function Ys(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pf()||qd()||"connection"in navigator)?navigator.onLine:!0}function gf(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n){this.shortDelay=e,this.longDelay=n,xe(n>e,"Short delay should be less than long delay!"),this.isMobile=Wd()||Kd()}get(){return mf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t,e){xe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Te("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Te("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Te("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=new yn(3e4,6e4);function Ze(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Le(t,e,n,r,i={}){return Da(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=wn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Na.fetch()(La(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Da(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wf),e);try{const i=new _f(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw kn(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw kn(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw kn(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw kn(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ji(t,u,c);he(t,u)}}catch(i){if(i instanceof De)throw i;he(t,"network-request-failed",{message:String(i)})}}async function vn(t,e,n,r,i={}){const s=await Le(t,e,n,r,i);return"mfaPendingCredential"in s&&he(t,"multi-factor-auth-required",{_serverResponse:s}),s}function La(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bi(t.config,i):`${t.config.apiScheme}://${i}`}function vf(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _f{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(me(this.auth,"network-request-failed")),yf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function kn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=me(t,e,r);return i.customData._tokenResponse=n,i}function Xs(t){return t!==void 0&&t.enterprise!==void 0}class bf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vf(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ef(t,e){return Le(t,"GET","/v2/recaptchaConfig",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function If(t,e){return Le(t,"POST","/v1/accounts:delete",e)}async function Va(t,e){return Le(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Tf(t,e=!1){const n=Z(t),r=await n.getIdToken(e),i=$i(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Jt(Hr(i.auth_time)),issuedAtTime:Jt(Hr(i.iat)),expirationTime:Jt(Hr(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hr(t){return Number(t)*1e3}function $i(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vn("JWT malformed, contained fewer than 3 sections"),null;try{const i=ba(n);return i?JSON.parse(i):(Vn("Failed to decode base64 JWT payload"),null)}catch(i){return Vn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Qs(t){const e=$i(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof De&&Sf(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Sf({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jt(this.lastLoginAt),this.creationTime=Jt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(t){var e;const n=t.auth,r=await t.getIdToken(),i=await xt(t,Va(n,{idToken:r}));b(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ma(s.providerUserInfo):[],a=Cf(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new li(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Pf(t){const e=Z(t);await Kn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cf(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ma(t){return t.map(e=>{var{providerId:n}=e,r=Ui(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rf(t,e){const n=await Da(t,{},async()=>{const r=wn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=La(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Na.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kf(t,e){return Le(t,"POST","/v2/accounts:revokeToken",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){b(e.length!==0,"internal-error");const n=Qs(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Rf(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Tt;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tt,this.toJSON())}_performRefresh(){return Te("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Se{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ui(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Af(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new li(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await xt(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Tf(this,e)}reload(){return Pf(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pe(this.auth.app))return Promise.reject(Ce(this.auth));const e=await this.getIdToken();return await xt(this,If(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:S,isAnonymous:D,providerData:ue,stsTokenManager:de}=n;b(_&&de,e,"internal-error");const W=Tt.fromJSON(this.name,de);b(typeof _=="string",e,"internal-error"),Ve(d,e.name),Ve(p,e.name),b(typeof S=="boolean",e,"internal-error"),b(typeof D=="boolean",e,"internal-error"),Ve(w,e.name),Ve(y,e.name),Ve(E,e.name),Ve(g,e.name),Ve(T,e.name),Ve(R,e.name);const Et=new Se({uid:_,auth:e,email:p,emailVerified:S,displayName:d,isAnonymous:D,photoURL:y,phoneNumber:w,tenantId:E,stsTokenManager:W,createdAt:T,lastLoginAt:R});return ue&&Array.isArray(ue)&&(Et.providerData=ue.map(Mr=>Object.assign({},Mr))),g&&(Et._redirectEventId=g),Et}static async _fromIdTokenResponse(e,n,r=!1){const i=new Tt;i.updateFromServerResponse(n);const s=new Se({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Kn(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];b(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ma(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Tt;a.updateFromIdToken(r);const l=new Se({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new li(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new Map;function Ae(t){xe(t instanceof Function,"Expected a class definition");let e=Zs.get(t);return e?(xe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zs.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ua.type="NONE";const eo=Ua;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e,n){return`firebase:${t}:${e}:${n}`}class St{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Mn(this.userKey,i.apiKey,s),this.fullPersistenceKey=Mn("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new St(Ae(eo),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ae(eo);const o=Mn(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Se._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new St(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new St(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($a(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ja(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ha(e))return"Blackberry";if(Wa(e))return"Webos";if(Fa(e))return"Safari";if((e.includes("chrome/")||Ba(e))&&!e.includes("edge/"))return"Chrome";if(za(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ja(t=J()){return/firefox\//i.test(t)}function Fa(t=J()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ba(t=J()){return/crios\//i.test(t)}function $a(t=J()){return/iemobile/i.test(t)}function za(t=J()){return/android/i.test(t)}function Ha(t=J()){return/blackberry/i.test(t)}function Wa(t=J()){return/webos/i.test(t)}function zi(t=J()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xf(t=J()){var e;return zi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Of(){return Gd()&&document.documentMode===10}function qa(t=J()){return zi(t)||za(t)||Wa(t)||Ha(t)||/windows phone/i.test(t)||$a(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t,e=[]){let n;switch(t){case"Browser":n=to(J());break;case"Worker":n=`${to(J())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ft}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Df(t,e={}){return Le(t,"GET","/v2/passwordPolicy",Ze(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=6;class Vf{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Lf,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new no(this),this.idTokenSubscription=new no(this),this.beforeStateQueue=new Nf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ae(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await St.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Va(this,{idToken:e}),r=await Se._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pe(this.app))return Promise.reject(Ce(this));const n=e?Z(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pe(this.app)?Promise.reject(Ce(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pe(this.app)?Promise.reject(Ce(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ae(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Df(this),n=new Vf(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kf(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ae(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await St.create(this,[Ae(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ka(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hf(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function et(t){return Z(t)}class no{constructor(e){this.auth=e,this.observer=null,this.addObserver=th(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Uf(t){mr=t}function Ga(t){return mr.loadJS(t)}function jf(){return mr.recaptchaEnterpriseScript}function Ff(){return mr.gapiScript}function Bf(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const $f="recaptcha-enterprise",zf="NO_RECAPTCHA";class Hf{constructor(e){this.type=$f,this.auth=et(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Ef(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new bf(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Xs(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(zf)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Xs(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=jf();l.length!==0&&(l+=a),Ga(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ro(t,e,n,r=!1){const i=new Hf(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ci(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await ro(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ro(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t,e){const n=Mi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Hn(s,e??{}))return i;he(i,"already-initialized")}return n.initialize({options:e})}function qf(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ae);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Kf(t,e,n){const r=et(t);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Ja(e),{host:o,port:a}=Gf(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Jf()}function Ja(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Gf(t){const e=Ja(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:io(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:io(o)}}}function io(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Jf(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Te("not implemented")}_getIdTokenResponse(e){return Te("not implemented")}_linkToIdToken(e,n){return Te("not implemented")}_getReauthenticationResolver(e){return Te("not implemented")}}async function Yf(t,e){return Le(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xf(t,e){return vn(t,"POST","/v1/accounts:signInWithPassword",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qf(t,e){return vn(t,"POST","/v1/accounts:signInWithEmailLink",Ze(t,e))}async function Zf(t,e){return vn(t,"POST","/v1/accounts:signInWithEmailLink",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Hi{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new rn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new rn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ci(e,n,"signInWithPassword",Xf);case"emailLink":return Qf(e,{email:this._email,oobCode:this._password});default:he(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ci(e,r,"signUpPassword",Yf);case"emailLink":return Zf(e,{idToken:n,email:this._email,oobCode:this._password});default:he(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(t,e){return vn(t,"POST","/v1/accounts:signInWithIdp",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="http://localhost";class ct extends Hi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):he("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ui(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ct(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return At(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,At(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,At(e,n)}buildRequest(){const e={requestUri:ep,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function np(t){const e=qt(Kt(t)).link,n=e?qt(Kt(e)).deep_link_id:null,r=qt(Kt(t)).deep_link_id;return(r?qt(Kt(r)).link:null)||r||n||e||t}class Wi{constructor(e){var n,r,i,s,o,a;const l=qt(Kt(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=tp((i=l.mode)!==null&&i!==void 0?i:null);b(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=np(e);try{return new Wi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.providerId=Bt.PROVIDER_ID}static credential(e,n){return rn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wi.parseLink(n);return b(r,"argument-error"),rn._fromEmailAndCode(e,r.code,r.tenantId)}}Bt.PROVIDER_ID="password";Bt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends qi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends _n{constructor(){super("facebook.com")}static credential(e){return ct._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch{return null}}}Ue.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ue.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends _n{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ct._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ie.credential(n,r)}catch{return null}}}Ie.GOOGLE_SIGN_IN_METHOD="google.com";Ie.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends _n{constructor(){super("github.com")}static credential(e){return ct._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch{return null}}}je.GITHUB_SIGN_IN_METHOD="github.com";je.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends _n{constructor(){super("twitter.com")}static credential(e,n){return ct._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fe.credential(n,r)}catch{return null}}}Fe.TWITTER_SIGN_IN_METHOD="twitter.com";Fe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(t,e){return vn(t,"POST","/v1/accounts:signUp",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Se._fromIdTokenResponse(e,r,i),o=so(r);return new ut({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=so(r);return new ut({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function so(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends De{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gn.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Gn(e,n,r,i)}}function Ya(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Gn._fromErrorAndOperation(t,s,e,r):s})}async function ip(t,e,n=!1){const r=await xt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ut._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sp(t,e,n=!1){const{auth:r}=t;if(pe(r.app))return Promise.reject(Ce(r));const i="reauthenticate";try{const s=await xt(t,Ya(r,i,e,t),n);b(s.idToken,r,"internal-error");const o=$i(s.idToken);b(o,r,"internal-error");const{sub:a}=o;return b(t.uid===a,r,"user-mismatch"),ut._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&he(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(t,e,n=!1){if(pe(t.app))return Promise.reject(Ce(t));const r="signIn",i=await Ya(t,r,e),s=await ut._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function op(t,e){return Xa(et(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(t){const e=et(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ap(t,e,n){if(pe(t.app))return Promise.reject(Ce(t));const r=et(t),o=await ci(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rp).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Qa(t),l}),a=await ut._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function lp(t,e,n){return pe(t.app)?Promise.reject(Ce(t)):op(Z(t),Bt.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qa(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cp(t,e){return Le(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Z(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await xt(r,cp(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function dp(t,e,n,r){return Z(t).onIdTokenChanged(e,n,r)}function hp(t,e,n){return Z(t).beforeAuthStateChanged(e,n)}function fp(t,e,n,r){return Z(t).onAuthStateChanged(e,n,r)}const Jn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jn,"1"),this.storage.removeItem(Jn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=1e3,mp=10;class el extends Za{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Of()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mp):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}el.type="LOCAL";const gp=el;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends Za{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tl.type="SESSION";const nl=tl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new gr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await wp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ki("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return window}function vp(t){ve().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(){return typeof ve().WorkerGlobalScope<"u"&&typeof ve().importScripts=="function"}async function _p(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ep(){return rl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="firebaseLocalStorageDb",Ip=1,Yn="firebaseLocalStorage",sl="fbase_key";class bn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wr(t,e){return t.transaction([Yn],e?"readwrite":"readonly").objectStore(Yn)}function Tp(){const t=indexedDB.deleteDatabase(il);return new bn(t).toPromise()}function ui(){const t=indexedDB.open(il,Ip);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yn,{keyPath:sl})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yn)?e(r):(r.close(),await Tp(),e(await ui()))})})}async function oo(t,e,n){const r=wr(t,!0).put({[sl]:e,value:n});return new bn(r).toPromise()}async function Sp(t,e){const n=wr(t,!1).get(e),r=await new bn(n).toPromise();return r===void 0?null:r.value}function ao(t,e){const n=wr(t,!0).delete(e);return new bn(n).toPromise()}const Ap=800,Pp=3;class ol{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ui(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Pp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gr._getInstance(Ep()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _p(),!this.activeServiceWorker)return;this.sender=new yp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ui();return await oo(e,Jn,"1"),await ao(e,Jn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>oo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Sp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ao(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=wr(i,!1).getAll();return new bn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ap)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ol.type="LOCAL";const Cp=ol;new yn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t,e){return e?Ae(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends Hi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return At(e,this._buildIdpRequest())}_linkToIdToken(e,n){return At(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return At(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Rp(t){return Xa(t.auth,new Gi(t),t.bypassAuthState)}function kp(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),sp(n,new Gi(t),t.bypassAuthState)}async function xp(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),ip(n,new Gi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rp;case"linkViaPopup":case"linkViaRedirect":return xp;case"reauthViaPopup":case"reauthViaRedirect":return kp;default:he(this.auth,"internal-error")}}resolve(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=new yn(2e3,1e4);async function Np(t,e,n){if(pe(t.app))return Promise.reject(me(t,"operation-not-supported-in-this-environment"));const r=et(t);ff(t,e,qi);const i=al(r,n);return new it(r,"signInViaPopup",e,i).executeNotNull()}class it extends ll{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,it.currentPopupAction&&it.currentPopupAction.cancel(),it.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){xe(this.filter.length===1,"Popup operations only handle one event");const e=Ki();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,it.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Op.get())};e()}}it.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="pendingRedirect",Un=new Map;class Lp extends ll{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Un.get(this.auth._key());if(!e){try{const r=await Vp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Un.set(this.auth._key(),e)}return this.bypassAuthState||Un.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vp(t,e){const n=jp(e),r=Up(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Mp(t,e){Un.set(t._key(),e)}function Up(t){return Ae(t._redirectPersistence)}function jp(t){return Mn(Dp,t.config.apiKey,t.name)}async function Fp(t,e,n=!1){if(pe(t.app))return Promise.reject(Ce(t));const r=et(t),i=al(r,e),o=await new Lp(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=10*60*1e3;class $p{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cl(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(me(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bp&&this.cachedEventUids.clear(),this.cachedEventUids.has(lo(e))}saveEventToCache(e){this.cachedEventUids.add(lo(e)),this.lastProcessedEventTime=Date.now()}}function lo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(t,e={}){return Le(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qp=/^https?/;async function Kp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hp(t);for(const n of e)try{if(Gp(n))return}catch{}he(t,"unauthorized-domain")}function Gp(t){const e=ai(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qp.test(n))return!1;if(Wp.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=new yn(3e4,6e4);function co(){const t=ve().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Yp(t){return new Promise((e,n)=>{var r,i,s;function o(){co(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{co(),n(me(t,"network-request-failed"))},timeout:Jp.get()})}if(!((i=(r=ve().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ve().gapi)===null||s===void 0)&&s.load)o();else{const a=Bf("iframefcb");return ve()[a]=()=>{gapi.load?o():n(me(t,"network-request-failed"))},Ga(`${Ff()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw jn=null,e})}let jn=null;function Xp(t){return jn=jn||Yp(t),jn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=new yn(5e3,15e3),Zp="__/auth/iframe",em="emulator/auth/iframe",tm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rm(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bi(e,em):`https://${t.config.authDomain}/${Zp}`,r={apiKey:e.apiKey,appName:t.name,v:Ft},i=nm.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wn(r).slice(1)}`}async function im(t){const e=await Xp(t),n=ve().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:rm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tm,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=me(t,"network-request-failed"),a=ve().setTimeout(()=>{s(o)},Qp.get());function l(){ve().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},om=500,am=600,lm="_blank",cm="http://localhost";class uo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function um(t,e,n,r=om,i=am){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sm),{width:r.toString(),height:i.toString(),top:s,left:o}),c=J().toLowerCase();n&&(a=Ba(c)?lm:n),ja(c)&&(e=e||cm,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[w,y])=>`${p}${w}=${y},`,"");if(xf(c)&&a!=="_self")return dm(e||"",a),new uo(null);const d=window.open(e||"",a,u);b(d,t,"popup-blocked");try{d.focus()}catch{}return new uo(d)}function dm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="__/auth/handler",fm="emulator/auth/handler",pm=encodeURIComponent("fac");async function ho(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ft,eventId:i};if(e instanceof qi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof _n){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${pm}=${encodeURIComponent(l)}`:"";return`${mm(t)}?${wn(a).slice(1)}${c}`}function mm({config:t}){return t.emulator?Bi(t,fm):`https://${t.authDomain}/${hm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="webStorageSupport";class gm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nl,this._completeRedirectFn=Fp,this._overrideRedirectResult=Mp}async _openPopup(e,n,r,i){var s;xe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ho(e,n,r,ai(),i);return um(e,o,Ki())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ho(e,n,r,ai(),i);return vp(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(xe(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await im(e),r=new $p(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wr,{type:Wr},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wr];o!==void 0&&n(!!o),he(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Kp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qa()||Fa()||zi()}}const wm=gm;var fo="@firebase/auth",po="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _m(t){kt(new lt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ka(t)},c=new Mf(r,i,s,l);return qf(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),kt(new lt("auth-internal",e=>{const n=et(e.getProvider("auth").getImmediate());return(r=>new ym(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(fo,po,vm(t)),Ke(fo,po,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=5*60,Em=Ta("authIdTokenMaxAge")||bm;let mo=null;const Im=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Em)return;const i=n==null?void 0:n.token;mo!==i&&(mo=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tm(t=Ca()){const e=Mi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wf(t,{popupRedirectResolver:wm,persistence:[Cp,gp,nl]}),r=Ta("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Im(s.toString());hp(n,o,()=>o(n.currentUser)),dp(n,a=>o(a))}}const i=Ea("auth");return i&&Kf(n,`http://${i}`),n}function Sm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Uf({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=me("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Sm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_m("Browser");var Am="firebase",Pm="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ke(Am,Pm,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $t="10.13.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Li("@firebase/firestore");function Xn(t,...e){if(Ot.logLevel<=x.DEBUG){const n=e.map(Yi);Ot.debug(`Firestore (${$t}): ${t}`,...n)}}function Ji(t,...e){if(Ot.logLevel<=x.ERROR){const n=e.map(Yi);Ot.error(`Firestore (${$t}): ${t}`,...n)}}function ul(t,...e){if(Ot.logLevel<=x.WARN){const n=e.map(Yi);Ot.warn(`Firestore (${$t}): ${t}`,...n)}}function Yi(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t="Unexpected state"){const e=`FIRESTORE (${$t}) INTERNAL ASSERTION FAILED: `+t;throw Ji(e),new Error(e)}function Ye(t,e){t||L()}function yr(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="ok",Cm="cancelled",Yt="unknown",P="invalid-argument",Rm="deadline-exceeded",km="not-found",xm="permission-denied",di="unauthenticated",Om="resource-exhausted",Nt="failed-precondition",Nm="aborted",Dm="out-of-range",dl="unimplemented",Lm="internal",Vm="unavailable";class I extends De{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Mm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Y.UNAUTHENTICATED))}shutdown(){}}class Um{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jm{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Ye(typeof e.accessToken=="string"),new hl(e.accessToken,new Y(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Fm{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=Y.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class Bm{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new Fm(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $m{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zm{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Ye(typeof e.token=="string"),new $m(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class sn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sn&&e.projectId===this.projectId&&e.database===this.database}}class on{constructor(e,n,r){n===void 0?n=0:n>e.length&&L(),r===void 0?r=e.length-n:r>e.length-n&&L(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return on.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof on?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class B extends on{construct(e,n,r){return new B(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new I(P,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new B(n)}static emptyPath(){return new B([])}}const Wm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class X extends on{construct(e,n,r){return new X(e,n,r)}static isValidIdentifier(e){return Wm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),X.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new X(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new I(P,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new I(P,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new I(P,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new I(P,"Unterminated ` in path: "+e);return new X(n)}static emptyPath(){return new X([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(B.fromString(e))}static fromName(e){return new G(B.fromString(e).popFirst(5))}static empty(){return new G(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&B.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return B.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new B(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t,e,n){if(!n)throw new I(P,`Function ${t}() cannot be called with an empty ${e}.`)}function wo(t){if(!G.isDocumentKey(t))throw new I(P,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yo(t){if(G.isDocumentKey(t))throw new I(P,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":L()}function vr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new I(P,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xi(t);throw new I(P,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xn=null;function qm(){return xn===null?xn=function(){return 268435456+Math.round(2147483648*Math.random())}():xn++,"0x"+xn.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t){return t==null}function Qn(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vo,A;function _o(t){if(t===void 0)return Ji("RPC_ERROR","HTTP error has no status"),Yt;switch(t){case 200:return go;case 400:return Nt;case 401:return di;case 403:return xm;case 404:return km;case 409:return Nm;case 416:return Dm;case 429:return Om;case 499:return Cm;case 500:return Yt;case 501:return dl;case 503:return Vm;case 504:return Rm;default:return t>=200&&t<300?go:t>=400&&t<500?Nt:t>=500&&t<600?Lm:Yt}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(A=vo||(vo={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";class Jm extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get R(){return!1}P(n,r,i,s,o){const a=qm(),l=this.V(n,r.toUriEncodedString());Xn("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.I(c,s,o),this.p(n,l,c,i).then(u=>(Xn("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ul("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}g(n,r,i,s,o,a){return this.P(n,r,i,s,o)}I(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$t}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}V(n,r){const i=Gm[n];return`${this.m}/v1/${r}:${i}`}terminate(){}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(l){const c=l;throw new I(_o(c.status),"Request failed with error: "+c.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const c=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new I(_o(a.status),`Request failed with error: ${c??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ym(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function F(t,e){return t<e?-1:t>e?1:0}function ml(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _r(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Qm("Invalid base64 string: "+s):s}}(e);return new Oe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Oe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return F(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const Zm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dt(t){if(Ye(!!t),typeof t=="string"){let e=0;const n=Zm.exec(t);if(Ye(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:j(t.seconds),nanos:j(t.nanos)}}function j(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function an(t){return typeof t=="string"?Oe.fromBase64String(t):Oe.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new I(P,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new I(P,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new I(P,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(P,"Timestamp seconds out of range: "+e)}static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new re(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?F(this.nanoseconds,e.nanoseconds):F(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wl(t){const e=t.mapValue.fields.__previous_value__;return gl(e)?wl(e):e}function ln(t){const e=dt(t.mapValue.fields.__local_write_time__.timestampValue);return new re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On={fields:{__type__:{stringValue:"__max__"}}};function ht(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gl(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:function(n){var r,i;return((i=(((r=n==null?void 0:n.mapValue)===null||r===void 0?void 0:r.fields)||{}).__type__)===null||i===void 0?void 0:i.stringValue)==="__vector__"}(t)?10:11:L()}function Zn(t,e){if(t===e)return!0;const n=ht(t);if(n!==ht(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ln(t).isEqual(ln(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=dt(i.timestampValue),a=dt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return an(i.bytesValue).isEqual(an(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return j(i.geoPointValue.latitude)===j(s.geoPointValue.latitude)&&j(i.geoPointValue.longitude)===j(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return j(i.integerValue)===j(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=j(i.doubleValue),a=j(s.doubleValue);return o===a?Qn(o)===Qn(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ml(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(bo(o)!==bo(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Zn(o[l],a[l])))return!1;return!0}(t,e);default:return L()}}function cn(t,e){return(t.values||[]).find(n=>Zn(n,e))!==void 0}function er(t,e){if(t===e)return 0;const n=ht(t),r=ht(e);if(n!==r)return F(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return F(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=j(s.integerValue||s.doubleValue),l=j(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Eo(t.timestampValue,e.timestampValue);case 4:return Eo(ln(t),ln(e));case 5:return F(t.stringValue,e.stringValue);case 6:return function(s,o){const a=an(s),l=an(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=F(a[c],l[c]);if(u!==0)return u}return F(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=F(j(s.latitude),j(o.latitude));return a!==0?a:F(j(s.longitude),j(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Io(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,u;const d=s.fields||{},p=o.fields||{},w=(a=d.value)===null||a===void 0?void 0:a.arrayValue,y=(l=p.value)===null||l===void 0?void 0:l.arrayValue,E=F(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0);return E!==0?E:Io(w,y)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===On&&o===On)return 0;if(s===On)return 1;if(o===On)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let d=0;d<l.length&&d<u.length;++d){const p=F(l[d],u[d]);if(p!==0)return p;const w=er(a[l[d]],c[u[d]]);if(w!==0)return w}return F(l.length,u.length)}(t.mapValue,e.mapValue);default:throw L()}}function Eo(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return F(t,e);const n=dt(t),r=dt(e),i=F(n.seconds,r.seconds);return i!==0?i:F(n.nanos,r.nanos)}function Io(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=er(n[i],r[i]);if(s)return s}return F(n.length,r.length)}function yl(t){return!!t&&"arrayValue"in t}function To(t){return!!t&&"nullValue"in t}function So(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qr(t){return!!t&&"mapValue"in t}function Xt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _r(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xt(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xt(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Ao{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{}class Ee extends vl{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new eg(e,n,r):n==="array-contains"?new rg(e,r):n==="in"?new ig(e,r):n==="not-in"?new sg(e,r):n==="array-contains-any"?new og(e,r):new Ee(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tg(e,r):new ng(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(er(n,this.value)):n!==null&&ht(this.value)===ht(n)&&this.matchesComparison(er(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class br extends vl{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new br(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class eg extends Ee{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class tg extends Ee{constructor(e,n){super(e,"in",n),this.keys=_l("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ng extends Ee{constructor(e,n){super(e,"not-in",n),this.keys=_l("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _l(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class rg extends Ee{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yl(n)&&cn(n.arrayValue,this.value)}}class ig extends Ee{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&cn(this.value.arrayValue,n)}}class sg extends Ee{constructor(e,n){super(e,"not-in",n)}matches(e){if(cn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!cn(this.value.arrayValue,n)}}class og extends Ee{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>cn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new q(e)}static min(){return new q(new re(0,0))}static max(){return new q(new re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n){this.comparator=e,this.root=n||H.EMPTY}insert(e,n){return new tr(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,H.BLACK,null,null))}remove(e){return new tr(this.comparator,this.root.remove(e,this.comparator).copy(null,null,H.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nn(this.root,e,this.comparator,!0)}}class Nn{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class H{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??H.RED,this.left=i??H.EMPTY,this.right=s??H.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new H(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return H.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return H.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,H.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,H.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}}H.EMPTY=null,H.RED=!0,H.BLACK=!1;H.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(e,n,r,i,s){return this}insert(e,n,r){return new H(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.comparator=e,this.data=new tr(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Po(this.data.getIterator())}getIteratorFrom(e){return new Po(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof un)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new un(this.comparator);return n.data=e,n}}class Po{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.fields=e,e.sort(X.comparator)}static empty(){return new dn([])}unionWith(e){let n=new un(X.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ml(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.value=e}static empty(){return new ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xt(n)}setAll(e){let n=X.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Xt(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());qr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];qr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){_r(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ye(Xt(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Me(e,0,q.min(),q.min(),q.min(),ye.empty(),0)}static newFoundDocument(e,n,r,i){return new Me(e,1,n,q.min(),r,i,0)}static newNoDocument(e,n){return new Me(e,2,n,q.min(),q.min(),ye.empty(),0)}static newUnknownDocument(e,n){return new Me(e,3,n,q.min(),q.min(),ye.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.C=null}}function Co(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ag(t,e,n,r,i,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function cg(t){const e=yr(t);if(e.S===null){e.S=[];const n=new Set;for(const s of e.explicitOrderBy)e.S.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new un(X.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.S.push(new hi(s,r))}),n.has(X.keyField().canonicalString())||e.S.push(new hi(X.keyField(),r))}return e.S}function ug(t){const e=yr(t);return e.N||(e.N=dg(e,cg(t))),e.N}function dg(t,e){if(t.limitType==="F")return Co(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new hi(i.field,s)});const n=t.endAt?new Ao(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ao(t.startAt.position,t.startAt.inclusive):null;return Co(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qn(e)?"-0":e}}function hg(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Qn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):bl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this._=void 0}}class fg extends Er{}class pg extends Er{constructor(e){super(),this.elements=e}}class mg extends Er{constructor(e){super(),this.elements=e}}class gg extends Er{constructor(e,n){super(),this.serializer=e,this.q=n}}class Pt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pt}static exists(e){return new Pt(void 0,e)}static updateTime(e){return new Pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Ir{}class El extends Ir{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Il extends Ir{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class Tl extends Ir{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wg extends Ir{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg={asc:"ASCENDING",desc:"DESCENDING"},vg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_g={and:"AND",or:"OR"};class bg{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function fi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Eg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ig(t,e){return fi(t,e.toTimestamp())}function Ro(t){return Ye(!!t),q.fromTimestamp(function(n){const r=dt(n);return new re(r.seconds,r.nanos)}(t))}function Qi(t,e){return pi(t,e).canonicalString()}function pi(t,e){const n=function(i){return new B(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function mi(t,e){return Qi(t.databaseId,e.path)}function Tg(t,e){const n=function(i){const s=B.fromString(i);return Ye(Al(s)),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new I(P,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new I(P,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(function(i){return Ye(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(n))}function ko(t,e,n){return{name:mi(t,e),fields:n.value.mapValue.fields}}function Sg(t,e){let n;if(e instanceof El)n={update:ko(t,e.key,e.value)};else if(e instanceof Tl)n={delete:mi(t,e.key)};else if(e instanceof Il)n={update:ko(t,e.key,e.data),updateMask:kg(e.fieldMask)};else{if(!(e instanceof wg))return L();n={verify:mi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof fg)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof pg)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof mg)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof gg)return{fieldPath:o.field.canonicalString(),increment:a.q};throw L()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ig(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:L()}(t,e.precondition)),n}function Ag(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=function(c,u){return Qi(c.databaseId,u)}(t,i);const s=function(c){if(c.length!==0)return Sl(br.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(u=>function(p){return{field:It(p.field),direction:Pg(p.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=function(c,u){return c.useProto3Json||Km(u)?u:{value:u}}(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{B:n,parent:i}}function Pg(t){return yg[t]}function Cg(t){return vg[t]}function Rg(t){return _g[t]}function It(t){return{fieldPath:t.canonicalString()}}function Sl(t){return t instanceof Ee?function(n){if(n.op==="=="){if(So(n.value))return{unaryFilter:{field:It(n.field),op:"IS_NAN"}};if(To(n.value))return{unaryFilter:{field:It(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(So(n.value))return{unaryFilter:{field:It(n.field),op:"IS_NOT_NAN"}};if(To(n.value))return{unaryFilter:{field:It(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:It(n.field),op:Cg(n.op),value:n.value}}}(t):t instanceof br?function(n){const r=n.getFilters().map(i=>Sl(i));return r.length===1?r[0]:{compositeFilter:{op:Rg(n.op),filters:r}}}(t):L()}function kg(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Al(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){return new bg(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.Y=!1}Z(){if(this.Y)throw new I(Nt,"The client has already been terminated.")}P(e,n,r,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.P(e,pi(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===di&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new I(Yt,s.toString())})}g(e,n,r,i,s){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.g(e,pi(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===di&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new I(Yt,o.toString())})}terminate(){this.Y=!0,this.connection.terminate()}}async function Pl(t,e){const n=yr(t),r={writes:e.map(i=>Sg(n.serializer,i))};await n.P("Commit",n.serializer.databaseId,B.emptyPath(),r)}async function Og(t,e){const n=yr(t),{B:r,parent:i}=Ag(n.serializer,ug(e));return(await n.g("RunQuery",n.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(a,l,c){const u=Tg(a,l.name),d=Ro(l.updateTime),p=l.createTime?Ro(l.createTime):q.min(),w=new ye({mapValue:{fields:l.fields}}),y=Me.newFoundDocument(u,d,p,w);return c&&y.setHasCommittedMutations(),c?y.setHasCommittedMutations():y}(n.serializer,s.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Map;function es(t){if(t._terminated)throw new I(Nt,"The client has already been terminated.");if(!Qt.has(t)){Xn("ComponentProvider","Initializing Datastore");const e=function(s){return new Jm(s,fetch.bind(null))}(function(s,o,a,l){return new Hm(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,pl(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=Zi(t._databaseId),r=function(s,o,a,l){return new xg(s,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);Qt.set(t,r)}return Qt.get(t)}class xo{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new I(P,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new I(P,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,l){if(o===!0&&l===!0)throw new I(P,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pl((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new I(P,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new I(P,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new I(P,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tr{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(Nt,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new I(Nt,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xo(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Mm;switch(r.type){case"firstParty":return new Bm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new I(P,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Qt.get(n);r&&(Xn("ComponentProvider","Removing Datastore"),Qt.delete(n),r.terminate())}(this),Promise.resolve()}}function Ng(t,e){const n=typeof t=="object"?t:Ca(),r=typeof t=="string"?t:"(default)",i=Mi(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=$d("firestore");s&&Dg(i,...s)}return i}function Dg(t,e,n,r={}){var i;const s=(t=vr(t,Tr))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ul("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Y.MOCK_USER;else{a=Hd(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new I(P,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Y(c)}t._authCredentials=new Um(new hl(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sr(this.firestore,e,this._query)}}class ie{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ge(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ie(this.firestore,e,this._key)}}class Ge extends Sr{constructor(e,n,r){super(e,n,function(s){return new lg(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ie(this.firestore,null,new G(e))}withConverter(e){return new Ge(this.firestore,e,this._path)}}function Cl(t,e,...n){if(t=Z(t),fl("collection","path",e),t instanceof Tr){const r=B.fromString(e,...n);return yo(r),new Ge(t,null,r)}{if(!(t instanceof ie||t instanceof Ge))throw new I(P,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return yo(r),new Ge(t.firestore,null,r)}}function ts(t,e,...n){if(t=Z(t),arguments.length===1&&(e=Xm.newId()),fl("doc","path",e),t instanceof Tr){const r=B.fromString(e,...n);return wo(r),new ie(t,null,new G(r))}{if(!(t instanceof ie||t instanceof Ge))throw new I(P,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return wo(r),new ie(t.firestore,t instanceof Ge?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dt(Oe.fromBase64String(e))}catch(n){throw new I(P,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Dt(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new I(P,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new X(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new I(P,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new I(P,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return F(this._lat,e._lat)||F(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=/^__.*__$/;class Vg{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Il(e,this.data,this.fieldMask,n,this.fieldTransforms):new El(e,this.data,n,this.fieldTransforms)}}function kl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class ss{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.tt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new ss(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.rt({path:r,it:!1});return i.st(e),i}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.rt({path:r,it:!1});return i.tt(),i}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return nr(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if(kl(this.et)&&Lg.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class Mg{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Zi(e)}ht(e,n,r,i=!1){return new ss({et:e,methodName:n,lt:r,path:X.emptyPath(),it:!1,ct:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ug(t){const e=t._freezeSettings(),n=Zi(t._databaseId);return new Mg(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jg(t,e,n,r,i,s={}){const o=t.ht(s.merge||s.mergeFields?2:0,e,n,i);Dl("Data must be an object, but it was:",o,r);const a=Ol(r,o);let l,c;if(s.merge)l=new dn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const d of s.mergeFields){const p=Fg(e,d,n);if(!o.contains(p))throw new I(P,`Field '${p}' is specified in your field mask but missing from your input data.`);$g(u,p)||u.push(p)}l=new dn(u),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new Vg(new ye(a),l,c)}function xl(t,e){if(Nl(t=Z(t)))return Dl("Unsupported field value:",e,t),Ol(t,e);if(t instanceof Rl)return function(r,i){if(!kl(i.et))throw i._t(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i._t(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=xl(a,i.ut(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Z(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hg(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=re.fromDate(r);return{timestampValue:fi(i.serializer,s)}}if(r instanceof re){const s=new re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fi(i.serializer,s)}}if(r instanceof rs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dt)return{bytesValue:Eg(i.serializer,r._byteString)};if(r instanceof ie){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i._t(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qi(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof is)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a._t("VectorValues must only contain numeric values.");return bl(a.serializer,l)})}}}}}}(r,i);throw i._t(`Unsupported field value: ${Xi(r)}`)}(t,e)}function Ol(t,e){const n={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_r(t,(r,i)=>{const s=xl(i,e.nt(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Nl(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof re||t instanceof rs||t instanceof Dt||t instanceof ie||t instanceof Rl||t instanceof is)}function Dl(t,e,n){if(!Nl(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Xi(n);throw r==="an object"?e._t(t+" a custom object"):e._t(t+" "+r)}}function Fg(t,e,n){if((e=Z(e))instanceof ns)return e._internalPath;if(typeof e=="string")return Ll(t,e);throw nr("Field path arguments must be of type string or ",t,!1,void 0,n)}const Bg=new RegExp("[~\\*/\\[\\]]");function Ll(t,e,n){if(e.search(Bg)>=0)throw nr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ns(...e.split("."))._internalPath}catch{throw nr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nr(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new I(P,a+t+l)}function $g(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Vl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Vl extends zg{data(){return super.data()}}class Hg{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function Wg(t,e){return typeof e=="string"?Ll(t,e):e instanceof ns?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Kg extends class{convertValue(n,r="none"){switch(ht(n)){case 0:return null;case 1:return n.booleanValue;case 2:return j(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(an(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 11:return this.convertObject(n.mapValue,r);case 10:return this.convertVectorValue(n.mapValue);default:throw L()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const i={};return _r(n,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertVectorValue(n){var r,i,s;const o=(s=(i=(r=n.fields)===null||r===void 0?void 0:r.value.arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(a=>j(a.doubleValue));return new is(o)}convertGeoPoint(n){return new rs(j(n.latitude),j(n.longitude))}convertArray(n,r){return(n.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(n,r){switch(r){case"previous":const i=wl(n);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(ln(n));default:return null}}convertTimestamp(n){const r=dt(n);return new re(r.seconds,r.nanos)}convertDocumentKey(n,r){const i=B.fromString(n);Ye(Al(i));const s=new sn(i.get(1),i.get(3)),o=new G(i.popFirst(5));return s.isEqual(r)||Ji(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ie(this.firestore,null,n)}}function Gg(t){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new I(dl,"limitToLast() queries require specifying at least one orderBy() clause")})((t=vr(t,Sr))._query);const e=es(t.firestore),n=new Kg(t.firestore);return Og(e,t._query).then(r=>{const i=r.map(s=>new Vl(t.firestore,n,s.key,s,t.converter));return t._query.limitType==="L"&&i.reverse(),new Hg(t,i)})}function Ml(t,e,n){const r=qg((t=vr(t,ie)).converter,e,n),i=jg(Ug(t.firestore),"setDoc",t._key,r,t.converter!==null,n);return Pl(es(t.firestore),[i.toMutation(t._key,Pt.none())])}function Jg(t){return Pl(es((t=vr(t,ie)).firestore),[new Tl(t._key,Pt.none())])}(function(){(function(n){$t=n})(`${Ft}_lite`),kt(new lt("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Tr(new jm(e.getProvider("auth-internal")),new zm(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new I(P,'"projectId" not provided in firebase.initializeApp.');return new sn(a.options.projectId,l)}(i,n),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Ke("firestore-lite","4.7.1",""),Ke("firestore-lite","4.7.1","esm2017")})();const Yg={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APIKEY:"AIzaSyC0-WS0YF7HfRjlH-ZtnFdVrEhcv0MFjrc",VITE_APPID:"1:1090067217679:web:6ff7b516e30ec6fe3b127a",VITE_AUTHDOMAIN:"react-projects-d2413.firebaseapp.com",VITE_CLOUDINARY_API_KEY:"899478212634767",VITE_CLOUDINARY_API_SECRET:"WrHVMBVAWTTXJz07mkNeoKAOdxA",VITE_CLOUDINARY_CLOUD_NAME:"maavtomo-projects",VITE_CLOUDINARY_UPLOAD_PRESET:"react-journal",VITE_CLOUDINARY_URL:"https://api.cloudinary.com/v1_1/maavtomo-projects/upload",VITE_MESSAGINGSENDERID:"1090067217679",VITE_PROJECTID:"react-projects-d2413",VITE_STORAGEBUCKET:"react-projects-d2413.appspot.com"},{VITE_APIKEY:Xg,VITE_AUTHDOMAIN:Qg,VITE_PROJECTID:Zg,VITE_STORAGEBUCKET:ew,VITE_MESSAGINGSENDERID:tw,VITE_APPID:nw}=Yg,rw={apiKey:Xg,authDomain:Qg,projectId:Zg,storageBucket:ew,messagingSenderId:tw,appId:nw},Ul=Pa(rw),Lt=Tm(Ul),Ar=Ng(Ul);function z(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var iw=typeof Symbol=="function"&&Symbol.observable||"@@observable",Oo=iw,Kr=()=>Math.random().toString(36).substring(7).split("").join("."),sw={INIT:`@@redux/INIT${Kr()}`,REPLACE:`@@redux/REPLACE${Kr()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Kr()}`},rr=sw;function os(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function jl(t,e,n){if(typeof t!="function")throw new Error(z(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(z(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(z(1));return n(jl)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function c(){o===s&&(o=new Map,s.forEach((g,T)=>{o.set(T,g)}))}function u(){if(l)throw new Error(z(3));return i}function d(g){if(typeof g!="function")throw new Error(z(4));if(l)throw new Error(z(5));let T=!0;c();const R=a++;return o.set(R,g),function(){if(T){if(l)throw new Error(z(6));T=!1,c(),o.delete(R),s=null}}}function p(g){if(!os(g))throw new Error(z(7));if(typeof g.type>"u")throw new Error(z(8));if(typeof g.type!="string")throw new Error(z(17));if(l)throw new Error(z(9));try{l=!0,i=r(i,g)}finally{l=!1}return(s=o).forEach(R=>{R()}),g}function w(g){if(typeof g!="function")throw new Error(z(10));r=g,p({type:rr.REPLACE})}function y(){const g=d;return{subscribe(T){if(typeof T!="object"||T===null)throw new Error(z(11));function R(){const S=T;S.next&&S.next(u())}return R(),{unsubscribe:g(R)}},[Oo](){return this}}}return p({type:rr.INIT}),{dispatch:p,subscribe:d,getState:u,replaceReducer:w,[Oo]:y}}function ow(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:rr.INIT})>"u")throw new Error(z(12));if(typeof n(void 0,{type:rr.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(z(13))})}function aw(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{ow(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let l=!1;const c={};for(let u=0;u<r.length;u++){const d=r[u],p=n[d],w=o[d],y=p(w,a);if(typeof y>"u")throw a&&a.type,new Error(z(14));c[d]=y,l=l||y!==w}return l=l||r.length!==Object.keys(o).length,l?c:o}}function ir(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function lw(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(z(15))};const o={getState:i.getState,dispatch:(l,...c)=>s(l,...c)},a=t.map(l=>l(o));return s=ir(...a)(i.dispatch),{...i,dispatch:s}}}function cw(t){return os(t)&&"type"in t&&typeof t.type=="string"}var Fl=Symbol.for("immer-nothing"),No=Symbol.for("immer-draftable"),se=Symbol.for("immer-state");function fe(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var Vt=Object.getPrototypeOf;function ft(t){return!!t&&!!t[se]}function Ne(t){var e;return t?Bl(t)||Array.isArray(t)||!!t[No]||!!((e=t.constructor)!=null&&e[No])||Cr(t)||Rr(t):!1}var uw=Object.prototype.constructor.toString();function Bl(t){if(!t||typeof t!="object")return!1;const e=Vt(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===uw}function sr(t,e){Pr(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function Pr(t){const e=t[se];return e?e.type_:Array.isArray(t)?1:Cr(t)?2:Rr(t)?3:0}function gi(t,e){return Pr(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function $l(t,e,n){const r=Pr(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function dw(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Cr(t){return t instanceof Map}function Rr(t){return t instanceof Set}function rt(t){return t.copy_||t.base_}function wi(t,e){if(Cr(t))return new Map(t);if(Rr(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=Bl(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[se];let i=Reflect.ownKeys(r);for(let s=0;s<i.length;s++){const o=i[s],a=r[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[o]})}return Object.create(Vt(t),r)}else{const r=Vt(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function as(t,e=!1){return kr(t)||ft(t)||!Ne(t)||(Pr(t)>1&&(t.set=t.add=t.clear=t.delete=hw),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>as(r,!0))),t}function hw(){fe(2)}function kr(t){return Object.isFrozen(t)}var fw={};function pt(t){const e=fw[t];return e||fe(0,t),e}var hn;function zl(){return hn}function pw(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Do(t,e){e&&(pt("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function yi(t){vi(t),t.drafts_.forEach(mw),t.drafts_=null}function vi(t){t===hn&&(hn=t.parent_)}function Lo(t){return hn=pw(hn,t)}function mw(t){const e=t[se];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function Vo(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[se].modified_&&(yi(e),fe(4)),Ne(t)&&(t=or(e,t),e.parent_||ar(e,t)),e.patches_&&pt("Patches").generateReplacementPatches_(n[se].base_,t,e.patches_,e.inversePatches_)):t=or(e,n,[]),yi(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==Fl?t:void 0}function or(t,e,n){if(kr(e))return e;const r=e[se];if(!r)return sr(e,(i,s)=>Mo(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return ar(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),sr(s,(a,l)=>Mo(t,r,i,a,l,n,o)),ar(t,i,!1),n&&t.patches_&&pt("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function Mo(t,e,n,r,i,s,o){if(ft(i)){const a=s&&e&&e.type_!==3&&!gi(e.assigned_,r)?s.concat(r):void 0,l=or(t,i,a);if($l(n,r,l),ft(l))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Ne(i)&&!kr(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;or(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&ar(t,i)}}function ar(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&as(e,n)}function gw(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:zl(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=ls;n&&(i=[r],s=fn);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var ls={get(t,e){if(e===se)return t;const n=rt(t);if(!gi(n,e))return ww(t,n,e);const r=n[e];return t.finalized_||!Ne(r)?r:r===Gr(t.base_,e)?(Jr(t),t.copy_[e]=bi(r,t)):r},has(t,e){return e in rt(t)},ownKeys(t){return Reflect.ownKeys(rt(t))},set(t,e,n){const r=Hl(rt(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=Gr(rt(t),e),s=i==null?void 0:i[se];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(dw(n,i)&&(n!==void 0||gi(t.base_,e)))return!0;Jr(t),_i(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return Gr(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Jr(t),_i(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=rt(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){fe(11)},getPrototypeOf(t){return Vt(t.base_)},setPrototypeOf(){fe(12)}},fn={};sr(ls,(t,e)=>{fn[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});fn.deleteProperty=function(t,e){return fn.set.call(this,t,e,void 0)};fn.set=function(t,e,n){return ls.set.call(this,t[0],e,n,t[0])};function Gr(t,e){const n=t[se];return(n?rt(n):t)[e]}function ww(t,e,n){var i;const r=Hl(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function Hl(t,e){if(!(e in t))return;let n=Vt(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Vt(n)}}function _i(t){t.modified_||(t.modified_=!0,t.parent_&&_i(t.parent_))}function Jr(t){t.copy_||(t.copy_=wi(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var yw=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(l=s,...c){return o.produce(l,u=>n.call(this,u,...c))}}typeof n!="function"&&fe(6),r!==void 0&&typeof r!="function"&&fe(7);let i;if(Ne(e)){const s=Lo(this),o=bi(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?yi(s):vi(s)}return Do(s,r),Vo(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===Fl&&(i=void 0),this.autoFreeze_&&as(i,!0),r){const s=[],o=[];pt("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else fe(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,l=>e(l,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Ne(t)||fe(8),ft(t)&&(t=vw(t));const e=Lo(this),n=bi(t,void 0);return n[se].isManual_=!0,vi(e),n}finishDraft(t,e){const n=t&&t[se];(!n||!n.isManual_)&&fe(9);const{scope_:r}=n;return Do(r,e),Vo(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=pt("Patches").applyPatches_;return ft(t)?r(t,e):this.produce(t,i=>r(i,e))}};function bi(t,e){const n=Cr(t)?pt("MapSet").proxyMap_(t,e):Rr(t)?pt("MapSet").proxySet_(t,e):gw(t,e);return(e?e.scope_:zl()).drafts_.push(n),n}function vw(t){return ft(t)||fe(10,t),Wl(t)}function Wl(t){if(!Ne(t)||kr(t))return t;const e=t[se];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=wi(t,e.scope_.immer_.useStrictShallowCopy_)}else n=wi(t,!0);return sr(n,(r,i)=>{$l(n,r,Wl(i))}),e&&(e.finalized_=!1),n}var oe=new yw,ql=oe.produce;oe.produceWithPatches.bind(oe);oe.setAutoFreeze.bind(oe);oe.setUseStrictShallowCopy.bind(oe);oe.applyPatches.bind(oe);oe.createDraft.bind(oe);oe.finishDraft.bind(oe);function Kl(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var _w=Kl(),bw=Kl,Ew=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ir:ir.apply(null,arguments)};function Uo(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(ge(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>cw(r)&&r.type===t,n}var Gl=class Gt extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Gt.prototype)}static get[Symbol.species](){return Gt}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Gt(...e[0].concat(this)):new Gt(...e.concat(this))}};function jo(t){return Ne(t)?ql(t,()=>{}):t}function Fo(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(ge(10));const r=n.insert(e,t);return t.set(e,r),r}function Iw(t){return typeof t=="boolean"}var Tw=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new Gl;return n&&(Iw(n)?o.push(_w):o.push(bw(n.extraArgument))),o},Sw="RTK_autoBatch",Jl=t=>e=>{setTimeout(e,t)},Aw=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Jl(10),Pw=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,l=t.type==="tick"?queueMicrotask:t.type==="raf"?Aw:t.type==="callback"?t.queueNotification:Jl(t.timeout),c=()=>{o=!1,s&&(s=!1,a.forEach(u=>u()))};return Object.assign({},r,{subscribe(u){const d=()=>i&&u(),p=r.subscribe(d);return a.add(u),()=>{p(),a.delete(u)}},dispatch(u){var d;try{return i=!((d=u==null?void 0:u.meta)!=null&&d[Sw]),s=!i,s&&(o||(o=!0,l(c))),r.dispatch(u)}finally{i=!0}}})},Cw=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new Gl(t);return r&&i.push(Pw(typeof r=="object"?r:void 0)),i};function Rw(t){const e=Tw(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(os(n))a=aw(n);else throw new Error(ge(1));let l;typeof r=="function"?l=r(e):l=e();let c=ir;i&&(c=Ew({trace:!1,...typeof i=="object"&&i}));const u=lw(...l),d=Cw(u);let p=typeof o=="function"?o(d):d();const w=c(...p);return jl(a,s,w)}function Yl(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(ge(28));if(a in e)throw new Error(ge(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function kw(t){return typeof t=="function"}function xw(t,e){let[n,r,i]=Yl(e),s;if(kw(t))s=()=>jo(t());else{const a=jo(t);s=()=>a}function o(a=s(),l){let c=[n[l.type],...r.filter(({matcher:u})=>u(l)).map(({reducer:u})=>u)];return c.filter(u=>!!u).length===0&&(c=[i]),c.reduce((u,d)=>{if(d)if(ft(u)){const w=d(u,l);return w===void 0?u:w}else{if(Ne(u))return ql(u,p=>d(p,l));{const p=d(u,l);if(p===void 0){if(u===null)return u;throw new Error(ge(9))}return p}}return u},a)}return o.getInitialState=s,o}var Ow=Symbol.for("rtk-slice-createasyncthunk");function Nw(t,e){return`${t}/${e}`}function Dw({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[Ow];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(ge(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(Vw()):i.reducers)||{},l=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(_,S){const D=typeof _=="string"?_:_.type;if(!D)throw new Error(ge(12));if(D in c.sliceCaseReducersByType)throw new Error(ge(13));return c.sliceCaseReducersByType[D]=S,u},addMatcher(_,S){return c.sliceMatchers.push({matcher:_,reducer:S}),u},exposeAction(_,S){return c.actionCreators[_]=S,u},exposeCaseReducer(_,S){return c.sliceCaseReducersByName[_]=S,u}};l.forEach(_=>{const S=a[_],D={reducerName:_,type:Nw(s,_),createNotation:typeof i.reducers=="function"};Uw(S)?Fw(D,S,u,e):Mw(D,S,u)});function d(){const[_={},S=[],D=void 0]=typeof i.extraReducers=="function"?Yl(i.extraReducers):[i.extraReducers],ue={..._,...c.sliceCaseReducersByType};return xw(i.initialState,de=>{for(let W in ue)de.addCase(W,ue[W]);for(let W of c.sliceMatchers)de.addMatcher(W.matcher,W.reducer);for(let W of S)de.addMatcher(W.matcher,W.reducer);D&&de.addDefaultCase(D)})}const p=_=>_,w=new Map;let y;function E(_,S){return y||(y=d()),y(_,S)}function g(){return y||(y=d()),y.getInitialState()}function T(_,S=!1){function D(de){let W=de[_];return typeof W>"u"&&S&&(W=g()),W}function ue(de=p){const W=Fo(w,S,{insert:()=>new WeakMap});return Fo(W,de,{insert:()=>{const Et={};for(const[Mr,zc]of Object.entries(i.selectors??{}))Et[Mr]=Lw(zc,de,g,S);return Et}})}return{reducerPath:_,getSelectors:ue,get selectors(){return ue(D)},selectSlice:D}}const R={name:s,reducer:E,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:g,...T(o),injectInto(_,{reducerPath:S,...D}={}){const ue=S??o;return _.inject({reducerPath:ue,reducer:E},D),{...R,...T(ue,!0)}}};return R}}function Lw(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var Xl=Dw();function Vw(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function Mw({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!jw(r))throw new Error(ge(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?Uo(t,o):Uo(t))}function Uw(t){return t._reducerDefinitionType==="asyncThunk"}function jw(t){return t._reducerDefinitionType==="reducerWithPrepare"}function Fw({type:t,reducerName:e},n,r,i){if(!i)throw new Error(ge(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:l,settled:c,options:u}=n,d=i(t,s,u);r.exposeAction(e,d),o&&r.addCase(d.fulfilled,o),a&&r.addCase(d.pending,a),l&&r.addCase(d.rejected,l),c&&r.addMatcher(d.settled,c),r.exposeCaseReducer(e,{fulfilled:o||Dn,pending:a||Dn,rejected:l||Dn,settled:c||Dn})}function Dn(){}function ge(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const Ql=Xl({name:"auth",initialState:{status:"checking",uid:null,email:null,displayName:null,photoURL:null,errorMessage:null},reducers:{login:(t,{payload:e})=>{t.status="authenticated",t.uid=e.uid,t.email=e.email,t.displayName=e.displayName,t.photoURL=e.photoURL,t.errorMessage=null},logout:(t,{payload:e})=>{t.status="not-authenticated",t.uid=null,t.email=null,t.displayName=null,t.photoURL=null,t.errorMessage=e==null?void 0:e.errorMessage},checkCredentials:t=>{t.status="checking",t.errorMessage=null}}}),{login:xr,logout:En,checkCredentials:cs}=Ql.actions,Bw=new Ie,$w=async()=>{try{const t=await Np(Lt,Bw),{displayName:e,email:n,photoURL:r,uid:i}=t.user;return{ok:!0,displayName:e,email:n,photoURL:r,uid:i}}catch(t){return{ok:!1,errorMessage:t.message}}},zw=async({email:t,password:e,displayName:n})=>{try{const r=await ap(Lt,t,e),{uid:i,photoURL:s}=r.user;return await up(Lt.currentUser,{displayName:n}),{ok:!0,uid:i,photoURL:s,email:t,displayName:n}}catch(r){return{ok:!1,errorMessage:r.message}}},Hw=async({email:t,password:e})=>{try{const n=await lp(Lt,t,e),{uid:r,photoURL:i,displayName:s}=n.user;return{ok:!0,uid:r,photoURL:i,email:t,displayName:s}}catch(n){return{ok:!1,errorMessage:n.message}}},Ww=async()=>await Lt.signOut(),Zl=Xl({name:"journal",initialState:{isSaving:!1,savedMessage:"",notes:[],activeNote:null},reducers:{addNewEmptyNote:(t,e)=>{t.notes.push(e.payload),t.isSaving=!1},clearNotesOnLogout:t=>{t.isSaving=!1,t.savedMessage="",t.notes=[],t.activeNote=null},deleteNoteById:(t,e)=>{t.notes=t.notes.filter(n=>n.id!==e.payload),t.activeNote=null,t.isSaving=!1},savingNewNote:t=>{t.isSaving=!0},setActiveNote:(t,e)=>{t.activeNote=e.payload,t.savedMessage=""},setActiveNoteImages:(t,e)=>{t.activeNote.imageURLs=[...t.activeNote.imageURLs,...e.payload],t.isSaving=!1},setNotes:(t,e)=>{t.notes=e.payload},setSaving:t=>{t.isSaving=!0,t.savedMessage=""},updateNote:(t,e)=>{t.isSaving=!1,t.notes=t.notes.map(n=>n.id===e.payload.id?e.payload:n),t.savedMessage=`${e.payload.title} updated successfully!`}}}),{addNewEmptyNote:qw,clearNotesOnLogout:Kw,deleteNoteById:Gw,savingNewNote:Jw,setActiveNote:us,setActiveNoteImages:Yw,setNotes:Xw,setSaving:ds,updateNote:Qw}=Zl.actions,Zw=()=>async t=>{await t(cs());const e=await $w();if(!e.ok)return t(En(e));t(xr(e))},ey=({email:t,password:e,displayName:n})=>async r=>{r(cs());const i=await zw({email:t,password:e,displayName:n});if(!i.ok)return r(En(i));r(xr(i))},ty=({email:t,password:e})=>async n=>{n(cs());const r=await Hw({email:t,password:e});if(!r.ok)return n(En(r));n(xr(r))},ny=()=>async t=>{await Ww(),t(Kw()),t(En({}))},ry=async(t="")=>{if(!t)throw new Error("User UID not found");const e=Cl(Ar,`${t}/journal/notes`),n=await Gg(e),{docs:r}=n;return r.map(i=>({id:i.id,...i.data()}))},iy={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APIKEY:"AIzaSyC0-WS0YF7HfRjlH-ZtnFdVrEhcv0MFjrc",VITE_APPID:"1:1090067217679:web:6ff7b516e30ec6fe3b127a",VITE_AUTHDOMAIN:"react-projects-d2413.firebaseapp.com",VITE_CLOUDINARY_API_KEY:"899478212634767",VITE_CLOUDINARY_API_SECRET:"WrHVMBVAWTTXJz07mkNeoKAOdxA",VITE_CLOUDINARY_CLOUD_NAME:"maavtomo-projects",VITE_CLOUDINARY_UPLOAD_PRESET:"react-journal",VITE_CLOUDINARY_URL:"https://api.cloudinary.com/v1_1/maavtomo-projects/upload",VITE_MESSAGINGSENDERID:"1090067217679",VITE_PROJECTID:"react-projects-d2413",VITE_STORAGEBUCKET:"react-projects-d2413.appspot.com"},{VITE_CLOUDINARY_URL:sy,VITE_CLOUDINARY_UPLOAD_PRESET:oy}=iy,ay=async t=>{if(!t)return null;const e=sy,n=new FormData;n.append("upload_preset",oy),n.append("file",t);try{const r=await fetch(e,{method:"POST",body:n});if(!r.ok)throw new Error("Error uploading file");return(await r.json()).secure_url}catch{return null}},ly=()=>async(t,e)=>{t(Jw());const{uid:n}=e().auth,r={title:"",body:"",date:new Date().getTime(),imageURLs:[]},i=ts(Cl(Ar,`${n}/journal/notes`));await Ml(i,r),r.id=i.id,t(qw(r)),t(us(r))},cy=()=>async(t,e)=>{const{uid:n}=e().auth;if(!n)throw new Error("User UID not found");const r=await ry(n);t(Xw(r))},uy=()=>async(t,e)=>{t(ds());const{uid:n}=e().auth;if(!n)throw new Error("User UID not found");const{activeNote:r}=e().journal,i={...r};delete i.id;const s=ts(Ar,`${n}/journal/notes/${r.id}`);await Ml(s,i,{merge:!0}),i.id=s.id,t(Qw(i))},dy=(t=[])=>async(e,n)=>{e(ds());const r=[];for(const s of t)r.push(ay(s));const i=await Promise.all(r);e(Yw(i))},hy=()=>async(t,e)=>{t(ds());const{uid:n}=e().auth;if(!n)throw new Error("User UID not found");const{activeNote:r}=e().journal,i=ts(Ar,`${n}/journal/notes/${r.id}`);await Jg(i),t(Gw(r.id))},fy=()=>{const{status:t}=at(n=>n.auth),e=vt();return m.useEffect(()=>{fp(Lt,async n=>{if(!n)return e(En());const{uid:r,email:i,displayName:s,photoURL:o}=n;e(xr({uid:r,email:i,displayName:s,photoURL:o})),e(cy())})},[]),t},py={email:"",password:""},my=()=>{const t=vt(),{email:e,password:n,onInputChange:r,formState:i}=Ni(py),{status:s,errorMessage:o}=at(u=>u.auth),a=m.useMemo(()=>s==="checking",[s]),l=u=>{u.preventDefault(),t(ty(i))},c=()=>{t(Zw())};return f.jsx(ya,{title:"Login",children:f.jsx("form",{onSubmit:l,className:"animate__animated animate__fadeIn animate__faster",children:f.jsxs(k,{container:!0,children:[f.jsx(k,{size:{xs:12},sx:{mt:2},children:f.jsx(st,{fullWidth:!0,id:"email",label:"Email",name:"email",placeholder:"correo@google.com",type:"email",variant:"outlined",value:e,onChange:r})}),f.jsx(k,{size:{xs:12},sx:{mt:2},children:f.jsx(st,{fullWidth:!0,id:"password",label:"Password",name:"password",placeholder:"password",type:"password",variant:"outlined",value:n,onChange:r})}),f.jsx(k,{size:{xs:12},display:o?"":"none",sx:{mt:1},children:f.jsx(ea,{severity:"error",children:o})}),f.jsxs(k,{container:!0,size:12,spacing:2,sx:{mb:2,mt:1},children:[f.jsx(k,{size:{xs:12,md:6},children:f.jsx(Zt,{disabled:a,variant:"contained",fullWidth:!0,type:"submit",sx:{height:45,borderRadius:"8px"},children:"Login"})}),f.jsx(k,{size:{xs:12,md:6},children:f.jsxs(Zt,{disabled:a,variant:"contained",fullWidth:!0,onClick:c,sx:{height:45,borderRadius:"8px"},children:[f.jsx(qc,{}),f.jsx(wt,{sx:{ml:1},children:"Google"})]})})]}),f.jsx(k,{container:!0,direction:"row",justifyContent:"end",size:12,children:f.jsx(ta,{color:"inherit",component:ha,to:"/auth/register",children:"Create an account"})})]})})})},gy={displayName:"",email:"",password:""},wy={email:[t=>t.includes("@"),"Email should have an @"],password:[t=>t.length>=6,"Password should have more than 6 characters"],displayName:[t=>t.length>=1,"Full Name is required"]},yy=()=>{const t=vt(),[e,n]=m.useState(!1),{status:r,errorMessage:i}=at(g=>g.auth),s=m.useMemo(()=>r==="checking",[r]),{displayName:o,email:a,password:l,onInputChange:c,formState:u,displayNameValid:d,emailValid:p,passwordValid:w,isFormValid:y}=Ni(gy,wy),E=g=>{g.preventDefault(),n(!0),y&&t(ey(u))};return f.jsx(ya,{title:"Register",children:f.jsx("form",{onSubmit:E,className:"animate__animated animate__fadeIn animate__faster",children:f.jsxs(k,{container:!0,children:[f.jsx(k,{size:{xs:12},sx:{mt:2},children:f.jsx(st,{fullWidth:!0,id:"displayName",label:"Full Name",name:"displayName",placeholder:"John Doe",type:"text",variant:"outlined",value:o,onChange:c,error:!!d&&e,helperText:d})}),f.jsx(k,{size:{xs:12},sx:{mt:2},children:f.jsx(st,{fullWidth:!0,id:"email",label:"Email",name:"email",placeholder:"correo@google.com",type:"email",variant:"outlined",value:a,onChange:c,error:!!p&&e,helperText:p})}),f.jsx(k,{size:{xs:12},sx:{mt:2},children:f.jsx(st,{fullWidth:!0,id:"password",label:"Password",name:"password",placeholder:"password",type:"password",variant:"outlined",value:l,onChange:c,error:!!w&&e,helperText:w})}),f.jsxs(k,{container:!0,size:12,spacing:2,sx:{mb:2,mt:1},children:[f.jsx(k,{size:{xs:12},display:i?"":"none",children:f.jsx(ea,{severity:"error",children:i})}),f.jsx(k,{size:{xs:12},children:f.jsx(Zt,{variant:"contained",fullWidth:!0,type:"submit",disabled:s,children:"Create an account"})})]}),f.jsxs(k,{container:!0,direction:"row",justifyContent:"end",size:12,children:[f.jsx(wt,{sx:{mr:1},children:"Have an account?"}),f.jsx(ta,{color:"inherit",component:ha,to:"/auth/login",children:"Login"})]})]})})})},vy=()=>f.jsxs(xi,{children:[f.jsx(Pe,{path:"login",element:f.jsx(my,{})}),f.jsx(Pe,{path:"register",element:f.jsx(yy,{})}),f.jsx(Pe,{path:"/*",element:f.jsx(ki,{to:"/auth/login"})})]}),_y=({images:t})=>f.jsx(Kc,{sx:{width:"100%",height:400},cols:4,rowHeight:164,children:t.map(e=>f.jsx(Gc,{children:f.jsx("img",{srcSet:`${e}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`,src:`${e}?w=164&h=164&fit=crop&auto=format`,alt:"Note image",loading:"lazy"})},e))}),by=({drawerWidth:t=240})=>{const e=vt(),n=()=>{e(ny())};return f.jsx(Jc,{position:"fixed",sx:{width:{sm:`calc(100% - ${t}px)`},ml:{sm:`${t}px`}},children:f.jsxs(Ti,{children:[f.jsx(Fn,{color:"inherit",edge:"start",sx:{mr:2,display:{sm:"none"}},children:f.jsx(Yc,{})}),f.jsxs(k,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",size:12,children:[f.jsx(wt,{variant:"h6",noWrap:!0,component:"div",children:"Journal App"}),f.jsx(Fn,{color:"error",onClick:n,children:f.jsx(Xc,{})})]})]})})},Ey=({drawerWidth:t=240})=>{const{displayName:e}=at(r=>r.auth),{notes:n}=at(r=>r.journal);return f.jsxs(Qc,{sx:{display:{xs:"none",sm:"block"},width:{sm:t},flexShrink:{sm:0},"& .MuiDrawer-paper":{width:t,boxSizing:"border-box"}},variant:"permanent",anchor:"left",children:[f.jsx(Ti,{children:f.jsx(wt,{variant:"h6",noWrap:!0,children:e})}),f.jsx(Zc,{}),f.jsx(eu,{children:n.map(r=>f.jsx(Iy,{...r},r.id))})]})},Iy=({id:t,title:e,body:n,date:r,imageURLs:i=[]})=>{const s=vt(),o=m.useMemo(()=>e.length>20?e.substring(0,20)+"...":e,[e]),a=()=>{s(us({id:t,title:e,body:n,date:r,imageURLs:i}))};return f.jsx(tu,{onClick:a,disablePadding:!0,children:f.jsxs(nu,{children:[f.jsx(ru,{children:f.jsx(iu,{})}),f.jsxs(k,{container:!0,direction:"column",children:[f.jsx(As,{primary:o,sx:{mb:0}}),f.jsx(As,{secondary:n,sx:{mt:0}})]})]})})},Bo=240,Ty=({children:t})=>f.jsxs(Ps,{sx:{display:"flex"},className:"animate__animated animate__fadeIn animate__faster",children:[f.jsx(by,{drawerWidth:Bo}),f.jsx(Ey,{drawerWidth:Bo}),f.jsxs(Ps,{component:"main",sx:{flexGrow:1,p:3},children:[f.jsx(Ti,{}),t]})]}),Sy=()=>f.jsxs(k,{className:"animate__animated animate__fadeIn animate__faster",alignItems:"center",container:!0,direction:"column",justifyContent:"center",rowSpacing:0,sx:{minHeight:"calc(100vh - 110px)",backgroundColor:"primary.main",borderRadius:3},children:[f.jsx(k,{container:!0,justifyContent:"center",size:12,component:"div",children:f.jsx(su,{sx:{fontSize:100,color:"white"}})}),f.jsx(k,{container:!0,justifyContent:"center",size:12,children:f.jsx(wt,{color:"white",variant:"h5",children:"Select or create a note"})})]});/*!
* sweetalert2 v11.14.0
* Released under the MIT License.
*/function ec(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function Ay(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function $o(t,e){return t.get(ec(t,e))}function Py(t,e,n){Ay(t,e),e.set(t,n)}function Cy(t,e,n){return t.set(ec(t,e),n),n}const Ry=100,v={},ky=()=>{v.previousActiveElement instanceof HTMLElement?(v.previousActiveElement.focus(),v.previousActiveElement=null):document.body&&document.body.focus()},xy=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,r=window.scrollY;v.restoreFocusTimeout=setTimeout(()=>{ky(),e()},Ry),window.scrollTo(n,r)}),tc="swal2-",Oy=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],h=Oy.reduce((t,e)=>(t[e]=tc+e,t),{}),Ny=["success","warning","info","question","error"],lr=Ny.reduce((t,e)=>(t[e]=tc+e,t),{}),nc="SweetAlert2:",hs=t=>t.charAt(0).toUpperCase()+t.slice(1),ee=t=>{console.warn(`${nc} ${typeof t=="object"?t.join(" "):t}`)},_t=t=>{console.error(`${nc} ${t}`)},zo=[],Dy=t=>{zo.includes(t)||(zo.push(t),ee(t))},rc=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Dy(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},Or=t=>typeof t=="function"?t():t,fs=t=>t&&typeof t.toPromise=="function",In=t=>fs(t)?t.toPromise():Promise.resolve(t),ps=t=>t&&Promise.resolve(t)===t,te=()=>document.body.querySelector(`.${h.container}`),Tn=t=>{const e=te();return e?e.querySelector(t):null},le=t=>Tn(`.${t}`),O=()=>le(h.popup),Sn=()=>le(h.icon),Ly=()=>le(h["icon-content"]),ic=()=>le(h.title),ms=()=>le(h["html-container"]),sc=()=>le(h.image),gs=()=>le(h["progress-steps"]),Nr=()=>le(h["validation-message"]),_e=()=>Tn(`.${h.actions} .${h.confirm}`),zt=()=>Tn(`.${h.actions} .${h.cancel}`),bt=()=>Tn(`.${h.actions} .${h.deny}`),Vy=()=>le(h["input-label"]),Ht=()=>Tn(`.${h.loader}`),An=()=>le(h.actions),oc=()=>le(h.footer),Dr=()=>le(h["timer-progress-bar"]),ws=()=>le(h.close),My=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,ys=()=>{const t=O();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((s,o)=>{const a=parseInt(s.getAttribute("tabindex")||"0"),l=parseInt(o.getAttribute("tabindex")||"0");return a>l?1:a<l?-1:0}),r=t.querySelectorAll(My),i=Array.from(r).filter(s=>s.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(i))].filter(s=>Q(s))},vs=()=>Re(document.body,h.shown)&&!Re(document.body,h["toast-shown"])&&!Re(document.body,h["no-backdrop"]),Lr=()=>{const t=O();return t?Re(t,h.toast):!1},Uy=()=>{const t=O();return t?t.hasAttribute("data-loading"):!1},ce=(t,e)=>{if(t.textContent="",e){const r=new DOMParser().parseFromString(e,"text/html"),i=r.querySelector("head");i&&Array.from(i.childNodes).forEach(o=>{t.appendChild(o)});const s=r.querySelector("body");s&&Array.from(s.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},Re=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let r=0;r<n.length;r++)if(!t.classList.contains(n[r]))return!1;return!0},jy=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(h).includes(n)&&!Object.values(lr).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},ae=(t,e,n)=>{if(jy(t,e),!e.customClass)return;const r=e.customClass[n];if(r){if(typeof r!="string"&&!r.forEach){ee(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`);return}C(t,r)}},Vr=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${h.popup} > .${h[e]}`);case"checkbox":return t.querySelector(`.${h.popup} > .${h.checkbox} input`);case"radio":return t.querySelector(`.${h.popup} > .${h.radio} input:checked`)||t.querySelector(`.${h.popup} > .${h.radio} input:first-child`);case"range":return t.querySelector(`.${h.popup} > .${h.range} input`);default:return t.querySelector(`.${h.popup} > .${h.input}`)}},ac=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},lc=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(r=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(r):i.classList.remove(r)}):n?t.classList.add(r):t.classList.remove(r)}))},C=(t,e)=>{lc(t,e,!0)},be=(t,e)=>{lc(t,e,!1)},$e=(t,e)=>{const n=Array.from(t.children);for(let r=0;r<n.length;r++){const i=n[r];if(i instanceof HTMLElement&&Re(i,e))return i}},ot=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},$=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";t&&(t.style.display=e)},K=t=>{t&&(t.style.display="none")},_s=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";t&&new MutationObserver(()=>{Pn(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},Ho=(t,e,n,r)=>{const i=t.querySelector(e);i&&i.style.setProperty(n,r)},Pn=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";e?$(t,n):K(t)},Q=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Fy=()=>!Q(_e())&&!Q(bt())&&!Q(zt()),Wo=t=>t.scrollHeight>t.clientHeight,cc=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),r=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||r>0},bs=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const n=Dr();n&&Q(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},By=()=>{const t=Dr();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),r=e/n*100;t.style.width=`${r}%`},uc=()=>typeof window>"u"||typeof document>"u",$y=`
 <div aria-labelledby="${h.title}" aria-describedby="${h["html-container"]}" class="${h.popup}" tabindex="-1">
   <button type="button" class="${h.close}"></button>
   <ul class="${h["progress-steps"]}"></ul>
   <div class="${h.icon}"></div>
   <img class="${h.image}" />
   <h2 class="${h.title}" id="${h.title}"></h2>
   <div class="${h["html-container"]}" id="${h["html-container"]}"></div>
   <input class="${h.input}" id="${h.input}" />
   <input type="file" class="${h.file}" />
   <div class="${h.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${h.select}" id="${h.select}"></select>
   <div class="${h.radio}"></div>
   <label class="${h.checkbox}">
     <input type="checkbox" id="${h.checkbox}" />
     <span class="${h.label}"></span>
   </label>
   <textarea class="${h.textarea}" id="${h.textarea}"></textarea>
   <div class="${h["validation-message"]}" id="${h["validation-message"]}"></div>
   <div class="${h.actions}">
     <div class="${h.loader}"></div>
     <button type="button" class="${h.confirm}"></button>
     <button type="button" class="${h.deny}"></button>
     <button type="button" class="${h.cancel}"></button>
   </div>
   <div class="${h.footer}"></div>
   <div class="${h["timer-progress-bar-container"]}">
     <div class="${h["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),zy=()=>{const t=te();return t?(t.remove(),be([document.documentElement,document.body],[h["no-backdrop"],h["toast-shown"],h["has-column"]]),!0):!1},tt=()=>{v.currentInstance.resetValidationMessage()},Hy=()=>{const t=O(),e=$e(t,h.input),n=$e(t,h.file),r=t.querySelector(`.${h.range} input`),i=t.querySelector(`.${h.range} output`),s=$e(t,h.select),o=t.querySelector(`.${h.checkbox} input`),a=$e(t,h.textarea);e.oninput=tt,n.onchange=tt,s.onchange=tt,o.onchange=tt,a.oninput=tt,r.oninput=()=>{tt(),i.value=r.value},r.onchange=()=>{tt(),i.value=r.value}},Wy=t=>typeof t=="string"?document.querySelector(t):t,qy=t=>{const e=O();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},Ky=t=>{window.getComputedStyle(t).direction==="rtl"&&C(te(),h.rtl)},Gy=t=>{const e=zy();if(uc()){_t("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=h.container,e&&C(n,h["no-transition"]),ce(n,$y);const r=Wy(t.target);r.appendChild(n),qy(t),Ky(r),Hy()},Es=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Jy(t,e):t&&ce(e,t)},Jy=(t,e)=>{t.jquery?Yy(e,t):ce(e,t.toString())},Yy=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},mt=(()=>{if(uc())return!1;const t=document.createElement("div");return typeof t.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof t.style.animation<"u"?"animationend":!1})(),Xy=(t,e)=>{const n=An(),r=Ht();!n||!r||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?K(n):$(n),ae(n,e,"actions"),Qy(n,r,e),ce(r,e.loaderHtml||""),ae(r,e,"loader"))};function Qy(t,e,n){const r=_e(),i=bt(),s=zt();!r||!i||!s||(Yr(r,"confirm",n),Yr(i,"deny",n),Yr(s,"cancel",n),Zy(r,i,s,n),n.reverseButtons&&(n.toast?(t.insertBefore(s,r),t.insertBefore(i,r)):(t.insertBefore(s,e),t.insertBefore(i,e),t.insertBefore(r,e))))}function Zy(t,e,n,r){if(!r.buttonsStyling){be([t,e,n],h.styled);return}C([t,e,n],h.styled),r.confirmButtonColor&&(t.style.backgroundColor=r.confirmButtonColor,C(t,h["default-outline"])),r.denyButtonColor&&(e.style.backgroundColor=r.denyButtonColor,C(e,h["default-outline"])),r.cancelButtonColor&&(n.style.backgroundColor=r.cancelButtonColor,C(n,h["default-outline"]))}function Yr(t,e,n){const r=hs(e);Pn(t,n[`show${r}Button`],"inline-block"),ce(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=h[e],ae(t,n,`${e}Button`)}const ev=(t,e)=>{const n=ws();n&&(ce(n,e.closeButtonHtml||""),ae(n,e,"closeButton"),Pn(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},tv=(t,e)=>{const n=te();n&&(nv(n,e.backdrop),rv(n,e.position),iv(n,e.grow),ae(n,e,"container"))};function nv(t,e){typeof e=="string"?t.style.background=e:e||C([document.documentElement,document.body],h["no-backdrop"])}function rv(t,e){e&&(e in h?C(t,h[e]):(ee('The "position" parameter is not valid, defaulting to "center"'),C(t,h.center)))}function iv(t,e){e&&C(t,h[`grow-${e}`])}var N={innerParams:new WeakMap,domCache:new WeakMap};const sv=["input","file","range","select","radio","checkbox","textarea"],ov=(t,e)=>{const n=O();if(!n)return;const r=N.innerParams.get(t),i=!r||e.input!==r.input;sv.forEach(s=>{const o=$e(n,h[s]);o&&(cv(s,e.inputAttributes),o.className=h[s],i&&K(o))}),e.input&&(i&&av(e),uv(e))},av=t=>{if(!t.input)return;if(!V[t.input]){_t(`Unexpected type of input! Expected ${Object.keys(V).join(" | ")}, got "${t.input}"`);return}const e=dc(t.input);if(!e)return;const n=V[t.input](e,t);$(e),t.inputAutoFocus&&setTimeout(()=>{ac(n)})},lv=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},cv=(t,e)=>{const n=O();if(!n)return;const r=Vr(n,t);if(r){lv(r);for(const i in e)r.setAttribute(i,e[i])}},uv=t=>{if(!t.input)return;const e=dc(t.input);e&&ae(e,t,"input")},Is=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},Cn=(t,e,n)=>{if(n.inputLabel){const r=document.createElement("label"),i=h["input-label"];r.setAttribute("for",t.id),r.className=i,typeof n.customClass=="object"&&C(r,n.customClass.inputLabel),r.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",r)}},dc=t=>{const e=O();if(e)return $e(e,h[t]||h.input)},cr=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:ps(e)||ee(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},V={};V.text=V.email=V.password=V.number=V.tel=V.url=V.search=V.date=V["datetime-local"]=V.time=V.week=V.month=(t,e)=>(cr(t,e.inputValue),Cn(t,t,e),Is(t,e),t.type=e.input,t);V.file=(t,e)=>(Cn(t,t,e),Is(t,e),t);V.range=(t,e)=>{const n=t.querySelector("input"),r=t.querySelector("output");return cr(n,e.inputValue),n.type=e.input,cr(r,e.inputValue),Cn(n,t,e),t};V.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");ce(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Cn(t,t,e),t};V.radio=t=>(t.textContent="",t);V.checkbox=(t,e)=>{const n=Vr(O(),"checkbox");n.value="1",n.checked=!!e.inputValue;const r=t.querySelector("span");return ce(r,e.inputPlaceholder||e.inputLabel),n};V.textarea=(t,e)=>{cr(t,e.inputValue),Is(t,e),Cn(t,t,e);const n=r=>parseInt(window.getComputedStyle(r).marginLeft)+parseInt(window.getComputedStyle(r).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const r=parseInt(window.getComputedStyle(O()).width),i=()=>{if(!document.body.contains(t))return;const s=t.offsetWidth+n(t);s>r?O().style.width=`${s}px`:ot(O(),"width",e.width)};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const dv=(t,e)=>{const n=ms();n&&(_s(n),ae(n,e,"htmlContainer"),e.html?(Es(e.html,n),$(n,"block")):e.text?(n.textContent=e.text,$(n,"block")):K(n),ov(t,e))},hv=(t,e)=>{const n=oc();n&&(_s(n),Pn(n,e.footer,"block"),e.footer&&Es(e.footer,n),ae(n,e,"footer"))},fv=(t,e)=>{const n=N.innerParams.get(t),r=Sn();if(r){if(n&&e.icon===n.icon){Ko(r,e),qo(r,e);return}if(!e.icon&&!e.iconHtml){K(r);return}if(e.icon&&Object.keys(lr).indexOf(e.icon)===-1){_t(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),K(r);return}$(r),Ko(r,e),qo(r,e),C(r,e.showClass&&e.showClass.icon)}},qo=(t,e)=>{for(const[n,r]of Object.entries(lr))e.icon!==n&&be(t,r);C(t,e.icon&&lr[e.icon]),wv(t,e),pv(),ae(t,e,"icon")},pv=()=>{const t=O();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let r=0;r<n.length;r++)n[r].style.backgroundColor=e},mv=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,gv=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Ko=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,r="";e.iconHtml?r=Go(e.iconHtml):e.icon==="success"?(r=mv,n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?r=gv:e.icon&&(r=Go({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==r.trim()&&ce(t,r)},wv=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Ho(t,n,"background-color",e.iconColor);Ho(t,".swal2-success-ring","border-color",e.iconColor)}},Go=t=>`<div class="${h["icon-content"]}">${t}</div>`,yv=(t,e)=>{const n=sc();if(n){if(!e.imageUrl){K(n);return}$(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),ot(n,"width",e.imageWidth),ot(n,"height",e.imageHeight),n.className=h.image,ae(n,e,"image")}},vv=(t,e)=>{const n=te(),r=O();if(!(!n||!r)){if(e.toast){ot(n,"width",e.width),r.style.width="100%";const i=Ht();i&&r.insertBefore(i,Sn())}else ot(r,"width",e.width);ot(r,"padding",e.padding),e.color&&(r.style.color=e.color),e.background&&(r.style.background=e.background),K(Nr()),_v(r,e)}},_v=(t,e)=>{const n=e.showClass||{};t.className=`${h.popup} ${Q(t)?n.popup:""}`,e.toast?(C([document.documentElement,document.body],h["toast-shown"]),C(t,h.toast)):C(t,h.modal),ae(t,e,"popup"),typeof e.customClass=="string"&&C(t,e.customClass),e.icon&&C(t,h[`icon-${e.icon}`])},bv=(t,e)=>{const n=gs();if(!n)return;const{progressSteps:r,currentProgressStep:i}=e;if(!r||r.length===0||i===void 0){K(n);return}$(n),n.textContent="",i>=r.length&&ee("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.forEach((s,o)=>{const a=Ev(s);if(n.appendChild(a),o===i&&C(a,h["active-progress-step"]),o!==r.length-1){const l=Iv(e);n.appendChild(l)}})},Ev=t=>{const e=document.createElement("li");return C(e,h["progress-step"]),ce(e,t),e},Iv=t=>{const e=document.createElement("li");return C(e,h["progress-step-line"]),t.progressStepsDistance&&ot(e,"width",t.progressStepsDistance),e},Tv=(t,e)=>{const n=ic();n&&(_s(n),Pn(n,e.title||e.titleText,"block"),e.title&&Es(e.title,n),e.titleText&&(n.innerText=e.titleText),ae(n,e,"title"))},hc=(t,e)=>{vv(t,e),tv(t,e),bv(t,e),fv(t,e),yv(t,e),Tv(t,e),ev(t,e),dv(t,e),Xy(t,e),hv(t,e);const n=O();typeof e.didRender=="function"&&n&&e.didRender(n),v.eventEmitter.emit("didRender",n)},Sv=()=>Q(O()),fc=()=>{var t;return(t=_e())===null||t===void 0?void 0:t.click()},Av=()=>{var t;return(t=bt())===null||t===void 0?void 0:t.click()},Pv=()=>{var t;return(t=zt())===null||t===void 0?void 0:t.click()},Wt=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),pc=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},Cv=(t,e,n)=>{pc(t),e.toast||(t.keydownHandler=r=>kv(e,r,n),t.keydownTarget=e.keydownListenerCapture?window:O(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},Ei=(t,e)=>{var n;const r=ys();if(r.length){t=t+e,t===r.length?t=0:t===-1&&(t=r.length-1),r[t].focus();return}(n=O())===null||n===void 0||n.focus()},mc=["ArrowRight","ArrowDown"],Rv=["ArrowLeft","ArrowUp"],kv=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?xv(e,t):e.key==="Tab"?Ov(e):[...mc,...Rv].includes(e.key)?Nv(e.key):e.key==="Escape"&&Dv(e,t,n)))},xv=(t,e)=>{if(!Or(e.allowEnterKey))return;const n=Vr(O(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;fc(),t.preventDefault()}},Ov=t=>{const e=t.target,n=ys();let r=-1;for(let i=0;i<n.length;i++)if(e===n[i]){r=i;break}t.shiftKey?Ei(r,-1):Ei(r,1),t.stopPropagation(),t.preventDefault()},Nv=t=>{const e=An(),n=_e(),r=bt(),i=zt();if(!e||!n||!r||!i)return;const s=[n,r,i];if(document.activeElement instanceof HTMLElement&&!s.includes(document.activeElement))return;const o=mc.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let l=0;l<e.children.length;l++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&Q(a))break}a instanceof HTMLButtonElement&&a.focus()}},Dv=(t,e,n)=>{Or(e.allowEscapeKey)&&(t.preventDefault(),n(Wt.esc))};var Mt={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Lv=()=>{const t=te();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},gc=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},wc=typeof window<"u"&&!!window.GestureEvent,Vv=()=>{if(wc&&!Re(document.body,h.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,C(document.body,h.iosfix),Mv()}},Mv=()=>{const t=te();if(!t)return;let e;t.ontouchstart=n=>{e=Uv(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Uv=t=>{const e=t.target,n=te(),r=ms();return!n||!r||jv(t)||Fv(t)?!1:e===n||!Wo(n)&&e instanceof HTMLElement&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(Wo(r)&&r.contains(e))},jv=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Fv=t=>t.touches&&t.touches.length>1,Bv=()=>{if(Re(document.body,h.iosfix)){const t=parseInt(document.body.style.top,10);be(document.body,h.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},$v=()=>{const t=document.createElement("div");t.className=h["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Ct=null;const zv=t=>{Ct===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Ct=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Ct+$v()}px`)},Hv=()=>{Ct!==null&&(document.body.style.paddingRight=`${Ct}px`,Ct=null)};function yc(t,e,n,r){Lr()?Jo(t,r):(xy(n).then(()=>Jo(t,r)),pc(v)),wc?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),vs()&&(Hv(),Bv(),gc()),Wv()}function Wv(){be([document.documentElement,document.body],[h.shown,h["height-auto"],h["no-backdrop"],h["toast-shown"]])}function ze(t){t=Kv(t);const e=Mt.swalPromiseResolve.get(this),n=qv(this);this.isAwaitingPromise?t.isDismissed||(Rn(this),e(t)):n&&e(t)}const qv=t=>{const e=O();if(!e)return!1;const n=N.innerParams.get(t);if(!n||Re(e,n.hideClass.popup))return!1;be(e,n.showClass.popup),C(e,n.hideClass.popup);const r=te();return be(r,n.showClass.backdrop),C(r,n.hideClass.backdrop),Gv(t,e,n),!0};function vc(t){const e=Mt.swalPromiseReject.get(this);Rn(this),e&&e(t)}const Rn=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,N.innerParams.get(t)||t._destroy())},Kv=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),Gv=(t,e,n)=>{const r=te(),i=mt&&cc(e);typeof n.willClose=="function"&&n.willClose(e),v.eventEmitter.emit("willClose",e),i?Jv(t,e,r,n.returnFocus,n.didClose):yc(t,r,n.returnFocus,n.didClose)},Jv=(t,e,n,r,i)=>{mt&&(v.swalCloseEventFinishedCallback=yc.bind(null,t,n,r,i),e.addEventListener(mt,function(s){s.target===e&&(v.swalCloseEventFinishedCallback(),delete v.swalCloseEventFinishedCallback)}))},Jo=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),v.eventEmitter.emit("didClose"),t._destroy&&t._destroy()})},Ut=t=>{let e=O();if(e||new fr,e=O(),!e)return;const n=Ht();Lr()?K(Sn()):Yv(e,t),$(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},Yv=(t,e)=>{const n=An(),r=Ht();!n||!r||(!e&&Q(_e())&&(e=_e()),$(n),e&&(K(e),r.setAttribute("data-button-to-replace",e.className),n.insertBefore(r,e)),C([t,n],h.loading))},Xv=(t,e)=>{e.input==="select"||e.input==="radio"?n_(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(fs(e.inputValue)||ps(e.inputValue))&&(Ut(_e()),r_(t,e))},Qv=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Zv(n);case"radio":return e_(n);case"file":return t_(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Zv=t=>t.checked?1:0,e_=t=>t.checked?t.value:null,t_=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,n_=(t,e)=>{const n=O();if(!n)return;const r=i=>{e.input==="select"?i_(n,ur(i),e):e.input==="radio"&&s_(n,ur(i),e)};fs(e.inputOptions)||ps(e.inputOptions)?(Ut(_e()),In(e.inputOptions).then(i=>{t.hideLoading(),r(i)})):typeof e.inputOptions=="object"?r(e.inputOptions):_t(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},r_=(t,e)=>{const n=t.getInput();n&&(K(n),In(e.inputValue).then(r=>{n.value=e.input==="number"?`${parseFloat(r)||0}`:`${r}`,$(n),n.focus(),t.hideLoading()}).catch(r=>{_t(`Error in inputValue promise: ${r}`),n.value="",$(n),n.focus(),t.hideLoading()}))};function i_(t,e,n){const r=$e(t,h.select);if(!r)return;const i=(s,o,a)=>{const l=document.createElement("option");l.value=a,ce(l,o),l.selected=_c(a,n.inputValue),s.appendChild(l)};e.forEach(s=>{const o=s[0],a=s[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,r.appendChild(l),a.forEach(c=>i(l,c[1],c[0]))}else i(r,a,o)}),r.focus()}function s_(t,e,n){const r=$e(t,h.radio);if(!r)return;e.forEach(s=>{const o=s[0],a=s[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=h.radio,l.value=o,_c(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");ce(u,a),u.className=h.label,c.appendChild(l),c.appendChild(u),r.appendChild(c)});const i=r.querySelectorAll("input");i.length&&i[0].focus()}const ur=t=>{const e=[];return t instanceof Map?t.forEach((n,r)=>{let i=n;typeof i=="object"&&(i=ur(i)),e.push([r,i])}):Object.keys(t).forEach(n=>{let r=t[n];typeof r=="object"&&(r=ur(r)),e.push([n,r])}),e},_c=(t,e)=>!!e&&e.toString()===t.toString(),o_=t=>{const e=N.innerParams.get(t);t.disableButtons(),e.input?bc(t,"confirm"):Ss(t,!0)},a_=t=>{const e=N.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?bc(t,"deny"):Ts(t,!1)},l_=(t,e)=>{t.disableButtons(),e(Wt.cancel)},bc=(t,e)=>{const n=N.innerParams.get(t);if(!n.input){_t(`The "input" parameter is needed to be set when using returnInputValueOn${hs(e)}`);return}const r=t.getInput(),i=Qv(t,n);n.inputValidator?c_(t,i,e):r&&!r.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||r.validationMessage)):e==="deny"?Ts(t,i):Ss(t,i)},c_=(t,e,n)=>{const r=N.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>In(r.inputValidator(e,r.validationMessage))).then(s=>{t.enableButtons(),t.enableInput(),s?t.showValidationMessage(s):n==="deny"?Ts(t,e):Ss(t,e)})},Ts=(t,e)=>{const n=N.innerParams.get(t||void 0);n.showLoaderOnDeny&&Ut(bt()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>In(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),Rn(t)):t.close({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>Ec(t||void 0,i))):t.close({isDenied:!0,value:e})},Yo=(t,e)=>{t.close({isConfirmed:!0,value:e})},Ec=(t,e)=>{t.rejectPromise(e)},Ss=(t,e)=>{const n=N.innerParams.get(t||void 0);n.showLoaderOnConfirm&&Ut(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>In(n.preConfirm(e,n.validationMessage))).then(i=>{Q(Nr())||i===!1?(t.hideLoading(),Rn(t)):Yo(t,typeof i>"u"?e:i)}).catch(i=>Ec(t||void 0,i))):Yo(t,e)};function dr(){const t=N.innerParams.get(this);if(!t)return;const e=N.domCache.get(this);K(e.loader),Lr()?t.icon&&$(Sn()):u_(e),be([e.popup,e.actions],h.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const u_=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?$(e[0],"inline-block"):Fy()&&K(t.actions)};function Ic(){const t=N.innerParams.get(this),e=N.domCache.get(this);return e?Vr(e.popup,t.input):null}function Tc(t,e,n){const r=N.domCache.get(t);e.forEach(i=>{r[i].disabled=n})}function Sc(t,e){const n=O();if(!(!n||!t))if(t.type==="radio"){const r=n.querySelectorAll(`[name="${h.radio}"]`);for(let i=0;i<r.length;i++)r[i].disabled=e}else t.disabled=e}function Ac(){Tc(this,["confirmButton","denyButton","cancelButton"],!1)}function Pc(){Tc(this,["confirmButton","denyButton","cancelButton"],!0)}function Cc(){Sc(this.getInput(),!1)}function Rc(){Sc(this.getInput(),!0)}function kc(t){const e=N.domCache.get(this),n=N.innerParams.get(this);ce(e.validationMessage,t),e.validationMessage.className=h["validation-message"],n.customClass&&n.customClass.validationMessage&&C(e.validationMessage,n.customClass.validationMessage),$(e.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid","true"),r.setAttribute("aria-describedby",h["validation-message"]),ac(r),C(r,h.inputerror))}function xc(){const t=N.domCache.get(this);t.validationMessage&&K(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),be(e,h.inputerror))}const Rt={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},d_=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],h_={allowEnterKey:void 0},f_=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Oc=t=>Object.prototype.hasOwnProperty.call(Rt,t),Nc=t=>d_.indexOf(t)!==-1,Dc=t=>h_[t],p_=t=>{Oc(t)||ee(`Unknown parameter "${t}"`)},m_=t=>{f_.includes(t)&&ee(`The parameter "${t}" is incompatible with toasts`)},g_=t=>{const e=Dc(t);e&&rc(t,e)},w_=t=>{t.backdrop===!1&&t.allowOutsideClick&&ee('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)p_(e),t.toast&&m_(e),g_(e)};function Lc(t){const e=O(),n=N.innerParams.get(this);if(!e||Re(e,n.hideClass.popup)){ee("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const r=y_(t),i=Object.assign({},n,r);hc(this,i),N.innerParams.set(this,i),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const y_=t=>{const e={};return Object.keys(t).forEach(n=>{Nc(n)?e[n]=t[n]:ee(`Invalid parameter to update: ${n}`)}),e};function Vc(){const t=N.domCache.get(this),e=N.innerParams.get(this);if(!e){Mc(this);return}t.popup&&v.swalCloseEventFinishedCallback&&(v.swalCloseEventFinishedCallback(),delete v.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),v.eventEmitter.emit("didDestroy"),v_(this)}const v_=t=>{Mc(t),delete t.params,delete v.keydownHandler,delete v.keydownTarget,delete v.currentInstance},Mc=t=>{t.isAwaitingPromise?(Xr(N,t),t.isAwaitingPromise=!0):(Xr(Mt,t),Xr(N,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},Xr=(t,e)=>{for(const n in t)t[n].delete(e)};var __=Object.freeze({__proto__:null,_destroy:Vc,close:ze,closeModal:ze,closePopup:ze,closeToast:ze,disableButtons:Pc,disableInput:Rc,disableLoading:dr,enableButtons:Ac,enableInput:Cc,getInput:Ic,handleAwaitingPromise:Rn,hideLoading:dr,rejectPromise:vc,resetValidationMessage:xc,showValidationMessage:kc,update:Lc});const b_=(t,e,n)=>{t.toast?E_(t,e,n):(T_(e),S_(e),A_(t,e,n))},E_=(t,e,n)=>{e.popup.onclick=()=>{t&&(I_(t)||t.timer||t.input)||n(Wt.close)}},I_=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let hr=!1;const T_=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(hr=!0)}}},S_=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(hr=!0)}}},A_=(t,e,n)=>{e.container.onclick=r=>{if(hr){hr=!1;return}r.target===e.container&&Or(t.allowOutsideClick)&&n(Wt.backdrop)}},P_=t=>typeof t=="object"&&t.jquery,Xo=t=>t instanceof Element||P_(t),C_=t=>{const e={};return typeof t[0]=="object"&&!Xo(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,r)=>{const i=t[r];typeof i=="string"||Xo(i)?e[n]=i:i!==void 0&&_t(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function R_(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new this(...e)}function k_(t){class e extends this{_main(r,i){return super._main(r,Object.assign({},t,i))}}return e}const x_=()=>v.timeout&&v.timeout.getTimerLeft(),Uc=()=>{if(v.timeout)return By(),v.timeout.stop()},jc=()=>{if(v.timeout){const t=v.timeout.start();return bs(t),t}},O_=()=>{const t=v.timeout;return t&&(t.running?Uc():jc())},N_=t=>{if(v.timeout){const e=v.timeout.increase(t);return bs(e,!0),e}},D_=()=>!!(v.timeout&&v.timeout.isRunning());let Qo=!1;const Ii={};function L_(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Ii[t]=this,Qo||(document.body.addEventListener("click",V_),Qo=!0)}const V_=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in Ii){const r=e.getAttribute(n);if(r){Ii[n].fire({template:r});return}}};class M_{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const r=this._getHandlersByEventName(e);r.includes(n)||r.push(n)}once(e,n){var r=this;const i=function(){r.removeListener(e,i);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];n.apply(r,o)};this.on(e,i)}emit(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];this._getHandlersByEventName(e).forEach(s=>{try{s.apply(this,r)}catch(o){console.error(o)}})}removeListener(e,n){const r=this._getHandlersByEventName(e),i=r.indexOf(n);i>-1&&r.splice(i,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}v.eventEmitter=new M_;const U_=(t,e)=>{v.eventEmitter.on(t,e)},j_=(t,e)=>{v.eventEmitter.once(t,e)},F_=(t,e)=>{if(!t){v.eventEmitter.reset();return}e?v.eventEmitter.removeListener(t,e):v.eventEmitter.removeAllListeners(t)};var B_=Object.freeze({__proto__:null,argsToParams:C_,bindClickHandler:L_,clickCancel:Pv,clickConfirm:fc,clickDeny:Av,enableLoading:Ut,fire:R_,getActions:An,getCancelButton:zt,getCloseButton:ws,getConfirmButton:_e,getContainer:te,getDenyButton:bt,getFocusableElements:ys,getFooter:oc,getHtmlContainer:ms,getIcon:Sn,getIconContent:Ly,getImage:sc,getInputLabel:Vy,getLoader:Ht,getPopup:O,getProgressSteps:gs,getTimerLeft:x_,getTimerProgressBar:Dr,getTitle:ic,getValidationMessage:Nr,increaseTimer:N_,isDeprecatedParameter:Dc,isLoading:Uy,isTimerRunning:D_,isUpdatableParameter:Nc,isValidParameter:Oc,isVisible:Sv,mixin:k_,off:F_,on:U_,once:j_,resumeTimer:jc,showLoading:Ut,stopTimer:Uc,toggleTimer:O_});class $_{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Fc=["swal-title","swal-html","swal-footer"],z_=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return X_(n),Object.assign(H_(n),W_(n),q_(n),K_(n),G_(n),J_(n),Y_(n,Fc))},H_=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(r=>{gt(r,["name","value"]);const i=r.getAttribute("name"),s=r.getAttribute("value");!i||!s||(typeof Rt[i]=="boolean"?e[i]=s!=="false":typeof Rt[i]=="object"?e[i]=JSON.parse(s):e[i]=s)}),e},W_=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(r=>{const i=r.getAttribute("name"),s=r.getAttribute("value");!i||!s||(e[i]=new Function(`return ${s}`)())}),e},q_=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(r=>{gt(r,["type","color","aria-label"]);const i=r.getAttribute("type");!i||!["confirm","cancel","deny"].includes(i)||(e[`${i}ButtonText`]=r.innerHTML,e[`show${hs(i)}Button`]=!0,r.hasAttribute("color")&&(e[`${i}ButtonColor`]=r.getAttribute("color")),r.hasAttribute("aria-label")&&(e[`${i}ButtonAriaLabel`]=r.getAttribute("aria-label")))}),e},K_=t=>{const e={},n=t.querySelector("swal-image");return n&&(gt(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},G_=t=>{const e={},n=t.querySelector("swal-icon");return n&&(gt(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},J_=t=>{const e={},n=t.querySelector("swal-input");n&&(gt(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const r=Array.from(t.querySelectorAll("swal-input-option"));return r.length&&(e.inputOptions={},r.forEach(i=>{gt(i,["value"]);const s=i.getAttribute("value");if(!s)return;const o=i.innerHTML;e.inputOptions[s]=o})),e},Y_=(t,e)=>{const n={};for(const r in e){const i=e[r],s=t.querySelector(i);s&&(gt(s,[]),n[i.replace(/^swal-/,"")]=s.innerHTML.trim())}return n},X_=t=>{const e=Fc.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const r=n.tagName.toLowerCase();e.includes(r)||ee(`Unrecognized element <${r}>`)})},gt=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&ee([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Bc=10,Q_=t=>{const e=te(),n=O();typeof t.willOpen=="function"&&t.willOpen(n),v.eventEmitter.emit("willOpen",n);const i=window.getComputedStyle(document.body).overflowY;tb(e,n,t),setTimeout(()=>{Z_(e,n)},Bc),vs()&&(eb(e,t.scrollbarPadding,i),Lv()),!Lr()&&!v.previousActiveElement&&(v.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),v.eventEmitter.emit("didOpen",n),be(e,h["no-transition"])},$c=t=>{const e=O();if(t.target!==e||!mt)return;const n=te();e.removeEventListener(mt,$c),n.style.overflowY="auto"},Z_=(t,e)=>{mt&&cc(e)?(t.style.overflowY="hidden",e.addEventListener(mt,$c)):t.style.overflowY="auto"},eb=(t,e,n)=>{Vv(),e&&n!=="hidden"&&zv(n),setTimeout(()=>{t.scrollTop=0})},tb=(t,e,n)=>{C(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),$(e,"grid"),setTimeout(()=>{C(e,n.showClass.popup),e.style.removeProperty("opacity")},Bc)):$(e,"grid"),C([document.documentElement,document.body],h.shown),n.heightAuto&&n.backdrop&&!n.toast&&C([document.documentElement,document.body],h["height-auto"])};var Zo={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function nb(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=Zo.email),t.input==="url"&&(t.inputValidator=Zo.url))}function rb(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(ee('Target parameter is not valid, defaulting to "body"'),t.target="body")}function ib(t){nb(t),t.showLoaderOnConfirm&&!t.preConfirm&&ee(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),rb(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Gy(t)}let we;var Ln=new WeakMap;class U{constructor(){if(Py(this,Ln,void 0),typeof window>"u")return;we=this;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const i=Object.freeze(this.constructor.argsToParams(n));this.params=i,this.isAwaitingPromise=!1,Cy(Ln,this,this._main(we.params))}_main(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(w_(Object.assign({},n,e)),v.currentInstance){const s=Mt.swalPromiseResolve.get(v.currentInstance),{isAwaitingPromise:o}=v.currentInstance;v.currentInstance._destroy(),o||s({isDismissed:!0}),vs()&&gc()}v.currentInstance=we;const r=ob(e,n);ib(r),Object.freeze(r),v.timeout&&(v.timeout.stop(),delete v.timeout),clearTimeout(v.restoreFocusTimeout);const i=ab(we);return hc(we,r),N.innerParams.set(we,r),sb(we,i,r)}then(e){return $o(Ln,this).then(e)}finally(e){return $o(Ln,this).finally(e)}}const sb=(t,e,n)=>new Promise((r,i)=>{const s=o=>{t.close({isDismissed:!0,dismiss:o})};Mt.swalPromiseResolve.set(t,r),Mt.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>{o_(t)},e.denyButton.onclick=()=>{a_(t)},e.cancelButton.onclick=()=>{l_(t,s)},e.closeButton.onclick=()=>{s(Wt.close)},b_(n,e,s),Cv(v,n,s),Xv(t,n),Q_(n),lb(v,n,s),cb(e,n),setTimeout(()=>{e.container.scrollTop=0})}),ob=(t,e)=>{const n=z_(t),r=Object.assign({},Rt,e,n,t);return r.showClass=Object.assign({},Rt.showClass,r.showClass),r.hideClass=Object.assign({},Rt.hideClass,r.hideClass),r.animation===!1&&(r.showClass={backdrop:"swal2-noanimation"},r.hideClass={}),r},ab=t=>{const e={popup:O(),container:te(),actions:An(),confirmButton:_e(),denyButton:bt(),cancelButton:zt(),loader:Ht(),closeButton:ws(),validationMessage:Nr(),progressSteps:gs()};return N.domCache.set(t,e),e},lb=(t,e,n)=>{const r=Dr();K(r),e.timer&&(t.timeout=new $_(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&($(r),ae(r,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&bs(e.timer)})))},cb=(t,e)=>{if(!e.toast){if(!Or(e.allowEnterKey)){rc("allowEnterKey"),hb();return}ub(t)||db(t,e)||Ei(-1,1)}},ub=t=>{const e=t.popup.querySelectorAll("[autofocus]");for(const n of e)if(n instanceof HTMLElement&&Q(n))return n.focus(),!0;return!1},db=(t,e)=>e.focusDeny&&Q(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&Q(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&Q(t.confirmButton)?(t.confirmButton.focus(),!0):!1,hb=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}U.prototype.disableButtons=Pc;U.prototype.enableButtons=Ac;U.prototype.getInput=Ic;U.prototype.disableInput=Rc;U.prototype.enableInput=Cc;U.prototype.hideLoading=dr;U.prototype.disableLoading=dr;U.prototype.showValidationMessage=kc;U.prototype.resetValidationMessage=xc;U.prototype.close=ze;U.prototype.closePopup=ze;U.prototype.closeModal=ze;U.prototype.closeToast=ze;U.prototype.rejectPromise=vc;U.prototype.update=Lc;U.prototype._destroy=Vc;Object.assign(U,B_);Object.keys(__).forEach(t=>{U[t]=function(){return we&&we[t]?we[t](...arguments):null}});U.DismissReason=Wt;U.version="11.14.0";const fr=U;fr.default=fr;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}');const fb=()=>{const t=vt(),{activeNote:e,savedMessage:n,isSaving:r}=at(y=>y.journal),{title:i,body:s,date:o,onInputChange:a,formState:l}=Ni(e),c=m.useMemo(()=>new Date(o).toUTCString(),[o]),u=m.useRef();m.useEffect(()=>{t(us(l))},[l]),m.useEffect(()=>{n&&fr.fire("Saved!",n,"success")},[n]);const d=()=>{t(uy())},p=({target:y})=>{const{files:E}=y;E.length!==0&&t(dy(E))},w=()=>{t(hy())};return f.jsxs(k,{container:!0,direction:"column",children:[f.jsxs(k,{alignItems:"center",className:"animate__animated animate__fadeIn animate__faster",container:!0,direction:"row",justifyContent:"space-between",sx:{mb:1},children:[f.jsx(k,{size:{sm:12,md:6},children:f.jsx(wt,{fontSize:39,fontWeight:"light",children:c})}),f.jsxs(k,{size:{sm:12,md:6},container:!0,justifyContent:"flex-end",children:[f.jsx("input",{multiple:!0,onChange:p,ref:u,style:{display:"none"},type:"file"}),f.jsx(Fn,{color:"primary",disabled:r,onClick:()=>u.current.click(),children:f.jsx(ou,{})}),f.jsxs(Zt,{color:"primary",disabled:r,onClick:d,sx:{padding:2},children:[f.jsx(au,{sx:{fontSize:30,mr:1}}),"Save"]})]})]}),f.jsxs(k,{container:!0,children:[f.jsx(st,{fullWidth:!0,label:"Title",name:"title",onChange:a,placeholder:"Enter title",sx:{border:"none",mb:1},type:"text",value:i,variant:"filled"}),f.jsx(st,{fullWidth:!0,minRows:5,multiline:!0,name:"body",onChange:a,placeholder:"What happened today?",type:"text",value:s,variant:"filled"})]}),f.jsx(k,{container:!0,justifyContent:"end",children:f.jsxs(Zt,{onClick:w,sx:{mt:2},color:"error",children:[f.jsx(lu,{}),"Delete"]})}),f.jsx(_y,{images:e.imageURLs})]})},pb=()=>{const t=vt(),{isSaving:e,activeNote:n}=at(i=>i.journal),r=()=>{t(ly())};return f.jsxs(Ty,{children:[n?f.jsx(fb,{}):f.jsx(Sy,{}),f.jsx(Fn,{size:"large",sx:{color:"white",backgroundColor:"error.main",":hover":{backgroundColor:"error.main",opacity:.8},position:"fixed",right:50,bottom:50},onClick:r,disabled:e,children:f.jsx(cu,{sx:{fontSize:30}})})]})},mb=()=>f.jsxs(xi,{children:[f.jsx(Pe,{path:"/",element:f.jsx(pb,{})}),f.jsx(Pe,{path:"/*",element:f.jsx(ki,{to:"/"})})]}),gb=()=>f.jsx(k,{alignItems:"center",container:!0,justifyContent:"center",spacing:0,sx:{minHeight:"100vh",backgroundColor:"primary.main",padding:4},children:f.jsx(k,{direction:"row",justifyContent:"center",children:f.jsx(uu,{color:"warning"})})}),wb=()=>{const t=fy();return t==="checking"?f.jsx(gb,{}):f.jsxs(xi,{children:[t==="authenticated"?f.jsx(Pe,{path:"/*",element:f.jsx(mb,{})}):f.jsx(Pe,{path:"/auth/*",element:f.jsx(vy,{})}),f.jsx(Pe,{path:"/*",element:f.jsx(ki,{to:"/auth/login"})})]})},yb=({children:t})=>f.jsxs(du,{theme:vb,children:[f.jsx(hu,{}),t]}),vb=fu({palette:{primary:{main:"#262254"},secondary:{main:"#543884"},error:{main:pu.A400}}}),_b=Rw({reducer:{auth:Ql.reducer,journal:Zl.reducer}}),bb=()=>f.jsx(Od,{store:_b,children:f.jsx(ld,{children:f.jsx(yb,{children:f.jsx(wb,{})})})});na(document.getElementById("root")).render(f.jsx(m.StrictMode,{children:f.jsx(bb,{})}));
