function x(){}const N=t=>t;function it(t,e){for(const n in e)t[n]=e[n];return t}function _t(t){return t()}function vt(){return Object.create(null)}function H(t){t.forEach(_t)}function j(t){return typeof t=="function"}function Gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let L;function Ce(t,e){return L||(L=document.createElement("a")),L.href=e,t===L.href}function zt(t){return Object.keys(t).length===0}function Ut(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Oe(t,e,n){t.$$.on_destroy.push(Ut(e,n))}function qe(t,e,n,r){if(t){const i=yt(t,e,n,r);return t[0](i)}}function yt(t,e,n,r){return t[1]&&r?it(n.ctx.slice(),t[1](r(e))):n.ctx}function Ie(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const a=[],s=Math.max(e.dirty.length,i.length);for(let o=0;o<s;o+=1)a[o]=e.dirty[o]|i[o];return a}return e.dirty|i}return e.dirty}function Pe(t,e,n,r,i,a){if(i){const s=yt(e,n,r,a);t.p(s,i)}}function De(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function We(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Le(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function Ge(t){const e={};for(const n in t)e[n]=!0;return e}function ze(t){return t&&j(t.destroy)?t.destroy:x}const wt=typeof window!="undefined";let G=wt?()=>window.performance.now():()=>Date.now(),at=wt?t=>requestAnimationFrame(t):x;const T=new Set;function xt(t){T.forEach(e=>{e.c(t)||(T.delete(e),e.f())}),T.size!==0&&at(xt)}function z(t){let e;return T.size===0&&at(xt),{promise:new Promise(n=>{T.add(e={c:t,f:n})}),abort(){T.delete(e)}}}let U=!1;function Vt(){U=!0}function Zt(){U=!1}function Jt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function Kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const f=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&f.push(d)}e=f}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let f=0;f<e.length;f++){const u=e[f].claim_order,d=(i>0&&e[n[i]].claim_order<=u?i+1:Jt(1,i,l=>e[n[l]].claim_order,u))-1;r[f]=n[d]+1;const c=d+1;n[c]=f,i=Math.max(c,i)}const a=[],s=[];let o=e.length-1;for(let f=n[i]+1;f!=0;f=r[f-1]){for(a.push(e[f-1]);o>=f;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);a.reverse(),s.sort((f,u)=>f.claim_order-u.claim_order);for(let f=0,u=0;f<s.length;f++){for(;u<a.length&&s[f].claim_order>=a[u].claim_order;)u++;const d=u<a.length?a[u]:null;t.insertBefore(s[f],d)}}function Qt(t,e){t.appendChild(e)}function kt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Xt(t){const e=Mt("style");return Yt(kt(t),e),e}function Yt(t,e){Qt(t.head||t,e)}function te(t,e){if(U){for(Kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ue(t,e,n){U&&!n?te(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ee(t){t.parentNode.removeChild(t)}function Ve(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Mt(t){return document.createElement(t)}function ne(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function st(t){return document.createTextNode(t)}function Ze(){return st(" ")}function Je(){return st("")}function Ke(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Qe(t){return function(e){return e.preventDefault(),t.call(this,e)}}function re(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Xe(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:re(t,r,e[r])}function Ye(t){return t===""?null:+t}function ie(t){return Array.from(t.childNodes)}function ae(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function St(t,e,n,r,i=!1){ae(t);const a=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const f=n(o);return f===void 0?t.splice(s,1):t[s]=f,i||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const f=n(o);return f===void 0?t.splice(s,1):t[s]=f,i?f===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return r()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function $t(t,e,n,r){return St(t,i=>i.nodeName===e,i=>{const a=[];for(let s=0;s<i.attributes.length;s++){const o=i.attributes[s];n[o.name]||a.push(o.name)}a.forEach(s=>i.removeAttribute(s))},()=>r(e))}function tn(t,e,n){return $t(t,e,n,Mt)}function en(t,e,n){return $t(t,e,n,ne)}function se(t,e){return St(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>st(e),!0)}function nn(t){return se(t," ")}function rn(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function an(t,e){t.value=e==null?"":e}function sn(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function on(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];r.selected=~e.indexOf(r.__value)}}function fn(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function un(t){return[].map.call(t.querySelectorAll(":checked"),e=>e.__value)}function ln(t,e,n){t.classList[n?"add":"remove"](e)}function Rt(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}function cn(t,e=document.body){return Array.from(e.querySelectorAll(t))}const ot=new Set;let V=0;function oe(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Z(t,e,n,r,i,a,s,o=0){const f=16.666/r;let u=`{
`;for(let p=0;p<=1;p+=f){const m=e+(n-e)*a(p);u+=p*100+`%{${s(m,1-m)}}
`}const d=u+`100% {${s(n,1-n)}}
}`,c=`__svelte_${oe(d)}_${o}`,l=kt(t);ot.add(l);const h=l.__svelte_stylesheet||(l.__svelte_stylesheet=Xt(t).sheet),g=l.__svelte_rules||(l.__svelte_rules={});g[c]||(g[c]=!0,h.insertRule(`@keyframes ${c} ${d}`,h.cssRules.length));const b=t.style.animation||"";return t.style.animation=`${b?`${b}, `:""}${c} ${r}ms linear ${i}ms 1 both`,V+=1,c}function J(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),V-=i,V||fe())}function fe(){at(()=>{V||(ot.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),ot.clear())})}function hn(t,e,n,r){if(!e)return x;const i=t.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return x;const{delay:a=0,duration:s=300,easing:o=N,start:f=G()+a,end:u=f+s,tick:d=x,css:c}=n(t,{from:e,to:i},r);let l=!0,h=!1,g;function b(){c&&(g=Z(t,0,1,s,a,o,c)),a||(h=!0)}function p(){c&&J(t,g),l=!1}return z(m=>{if(!h&&m>=f&&(h=!0),h&&m>=u&&(d(1,0),p()),!l)return!1;if(h){const y=m-f,w=0+1*o(y/s);d(w,1-w)}return!0}),b(),d(0,1),p}function dn(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:r}=e,i=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=r,ue(t,i)}}function ue(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const r=getComputedStyle(t),i=r.transform==="none"?"":r.transform;t.style.transform=`${i} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let K;function Q(t){K=t}function C(){if(!K)throw new Error("Function called outside component initialization");return K}function gn(t){C().$$.on_mount.push(t)}function pn(t){C().$$.after_update.push(t)}function mn(){const t=C();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const i=Rt(e,n);r.slice().forEach(a=>{a.call(t,i)})}}}function bn(t,e){C().$$.context.set(t,e)}function _n(t){return C().$$.context.get(t)}function vn(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const O=[],At=[],X=[],ft=[],le=Promise.resolve();let ut=!1;function ce(){ut||(ut=!0,le.then(Et))}function q(t){X.push(t)}function yn(t){ft.push(t)}let lt=!1;const ct=new Set;function Et(){if(!lt){lt=!0;do{for(let t=0;t<O.length;t+=1){const e=O[t];Q(e),he(e.$$)}for(Q(null),O.length=0;At.length;)At.pop()();for(let t=0;t<X.length;t+=1){const e=X[t];ct.has(e)||(ct.add(e),e())}X.length=0}while(O.length);for(;ft.length;)ft.pop()();ut=!1,lt=!1,ct.clear()}}function he(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}let I;function Bt(){return I||(I=Promise.resolve(),I.then(()=>{I=null})),I}function P(t,e,n){t.dispatchEvent(Rt(`${e?"intro":"outro"}${n}`))}const Y=new Set;let R;function wn(){R={r:0,c:[],p:R}}function xn(){R.r||H(R.c),R=R.p}function Ht(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function de(t,e,n,r){if(t&&t.o){if(Y.has(t))return;Y.add(t),R.c.push(()=>{Y.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const Tt={duration:0};function kn(t,e,n){let r=e(t,n),i=!1,a,s,o=0;function f(){a&&J(t,a)}function u(){const{delay:c=0,duration:l=300,easing:h=N,tick:g=x,css:b}=r||Tt;b&&(a=Z(t,0,1,l,c,h,b,o++)),g(0,1);const p=G()+c,m=p+l;s&&s.abort(),i=!0,q(()=>P(t,!0,"start")),s=z(y=>{if(i){if(y>=m)return g(1,0),P(t,!0,"end"),f(),i=!1;if(y>=p){const w=h((y-p)/l);g(w,1-w)}}return i})}let d=!1;return{start(){d||(d=!0,J(t),j(r)?(r=r(),Bt().then(u)):u())},invalidate(){d=!1},end(){i&&(f(),i=!1)}}}function Mn(t,e,n,r){let i=e(t,n),a=r?0:1,s=null,o=null,f=null;function u(){f&&J(t,f)}function d(l,h){const g=l.b-a;return h*=Math.abs(g),{a,b:l.b,d:g,duration:h,start:l.start,end:l.start+h,group:l.group}}function c(l){const{delay:h=0,duration:g=300,easing:b=N,tick:p=x,css:m}=i||Tt,y={start:G()+h,b:l};l||(y.group=R,R.r+=1),s||o?o=y:(m&&(u(),f=Z(t,a,l,g,h,b,m)),l&&p(0,1),s=d(y,g),q(()=>P(t,l,"start")),z(w=>{if(o&&w>o.start&&(s=d(o,g),o=null,P(t,s.b,"start"),m&&(u(),f=Z(t,a,s.b,s.duration,0,b,i.css))),s){if(w>=s.end)p(a=s.b,1-a),P(t,s.b,"end"),o||(s.b?u():--s.group.r||H(s.group.c)),s=null;else if(w>=s.start){const D=w-s.start;a=s.a+s.d*b(D/s.duration),p(a,1-a)}}return!!(s||o)}))}return{run(l){j(i)?Bt().then(()=>{i=i(),c(l)}):c(l)},end(){u(),s=o=null}}}const Sn=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function ge(t,e){de(t,1,1,()=>{e.delete(t.key)})}function $n(t,e){t.f(),ge(t,e)}function Rn(t,e,n,r,i,a,s,o,f,u,d,c){let l=t.length,h=a.length,g=l;const b={};for(;g--;)b[t[g].key]=g;const p=[],m=new Map,y=new Map;for(g=h;g--;){const _=c(i,a,g),S=n(_);let $=s.get(S);$?r&&$.p(_,e):($=u(S,_),$.c()),m.set(S,p[g]=$),S in b&&y.set(S,Math.abs(g-b[S]))}const w=new Set,D=new Set;function rt(_){Ht(_,1),_.m(o,d),s.set(_.key,_),d=_.first,h--}for(;l&&h;){const _=p[h-1],S=t[l-1],$=_.key,W=S.key;_===S?(d=_.first,l--,h--):m.has(W)?!s.has($)||w.has($)?rt(_):D.has(W)?l--:y.get($)>y.get(W)?(D.add($),rt(_)):(w.add(W),l--):(f(S,s),l--)}for(;l--;){const _=t[l];m.has(_.key)||f(_,s)}for(;h;)rt(p[h-1]);return p}function An(t,e){const n={},r={},i={$$scope:1};let a=t.length;for(;a--;){const s=t[a],o=e[a];if(o){for(const f in s)f in o||(r[f]=1);for(const f in o)i[f]||(n[f]=o[f],i[f]=1);t[a]=o}else for(const f in s)i[f]=1}for(const s in r)s in n||(n[s]=void 0);return n}function En(t){return typeof t=="object"&&t!==null?t:{}}function Bn(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function Hn(t){t&&t.c()}function Tn(t,e){t&&t.l(e)}function pe(t,e,n,r){const{fragment:i,on_mount:a,on_destroy:s,after_update:o}=t.$$;i&&i.m(e,n),r||q(()=>{const f=a.map(_t).filter(j);s?s.push(...f):H(f),t.$$.on_mount=[]}),o.forEach(q)}function me(t,e){const n=t.$$;n.fragment!==null&&(H(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function be(t,e){t.$$.dirty[0]===-1&&(O.push(t),ce(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Fn(t,e,n,r,i,a,s,o=[-1]){const f=K;Q(t);const u=t.$$={fragment:null,ctx:null,props:a,update:x,not_equal:i,bound:vt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:vt(),dirty:o,skip_bound:!1,root:e.target||f.$$.root};s&&s(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(c,l,...h)=>{const g=h.length?h[0]:l;return u.ctx&&i(u.ctx[c],u.ctx[c]=g)&&(!u.skip_bound&&u.bound[c]&&u.bound[c](g),d&&be(t,c)),l}):[],u.update(),d=!0,H(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){Vt();const c=ie(e.target);u.fragment&&u.fragment.l(c),c.forEach(ee)}else u.fragment&&u.fragment.c();e.intro&&Ht(t.$$.fragment),pe(t,e.target,e.anchor,e.customElement),Zt(),Et()}Q(f)}class Nn{$destroy(){me(this,1),this.$destroy=x}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!zt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const F=[];function Ft(t,e=x){let n;const r=new Set;function i(o){if(Gt(t,o)&&(t=o,n)){const f=!F.length;for(const u of r)u[1](),F.push(u,t);if(f){for(let u=0;u<F.length;u+=2)F[u][0](F[u+1]);F.length=0}}}function a(o){i(o(t))}function s(o,f=x){const u=[o,f];return r.add(u),r.size===1&&(n=e(i)||x),o(t),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:i,update:a,subscribe:s}}function ht(t){const e=t-1;return e*e*e+1}function jn(t,{delay:e=0,duration:n=400,easing:r=N}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:a=>`opacity: ${a*i}`}}function Cn(t,{delay:e=0,duration:n=400,easing:r=ht,x:i=0,y:a=0,opacity:s=0}={}){const o=getComputedStyle(t),f=+o.opacity,u=o.transform==="none"?"":o.transform,d=f*(1-s);return{delay:e,duration:n,easing:r,css:(c,l)=>`
			transform: ${u} translate(${(1-c)*i}px, ${(1-c)*a}px);
			opacity: ${f-d*l}`}}function On(t,{delay:e=0,duration:n=400,easing:r=ht}={}){const i=getComputedStyle(t),a=+i.opacity,s=parseFloat(i.height),o=parseFloat(i.paddingTop),f=parseFloat(i.paddingBottom),u=parseFloat(i.marginTop),d=parseFloat(i.marginBottom),c=parseFloat(i.borderTopWidth),l=parseFloat(i.borderBottomWidth);return{delay:e,duration:n,easing:r,css:h=>`overflow: hidden;opacity: ${Math.min(h*20,1)*a};height: ${h*s}px;padding-top: ${h*o}px;padding-bottom: ${h*f}px;margin-top: ${h*u}px;margin-bottom: ${h*d}px;border-top-width: ${h*c}px;border-bottom-width: ${h*l}px;`}}function v(t,e){_e(t)&&(t="100%");var n=ve(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function tt(t){return Math.min(1,Math.max(0,t))}function _e(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function ve(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Nt(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function et(t){return t<=1?Number(t)*100+"%":t}function B(t){return t.length===1?"0"+t:String(t)}function ye(t,e,n){return{r:v(t,255)*255,g:v(e,255)*255,b:v(n,255)*255}}function jt(t,e,n){t=v(t,255),e=v(e,255),n=v(n,255);var r=Math.max(t,e,n),i=Math.min(t,e,n),a=0,s=0,o=(r+i)/2;if(r===i)s=0,a=0;else{var f=r-i;switch(s=o>.5?f/(2-r-i):f/(r+i),r){case t:a=(e-n)/f+(e<n?6:0);break;case e:a=(n-t)/f+2;break;case n:a=(t-e)/f+4;break}a/=6}return{h:a,s,l:o}}function dt(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*(6*n):n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function we(t,e,n){var r,i,a;if(t=v(t,360),e=v(e,100),n=v(n,100),e===0)i=n,a=n,r=n;else{var s=n<.5?n*(1+e):n+e-n*e,o=2*n-s;r=dt(o,s,t+1/3),i=dt(o,s,t),a=dt(o,s,t-1/3)}return{r:r*255,g:i*255,b:a*255}}function Ct(t,e,n){t=v(t,255),e=v(e,255),n=v(n,255);var r=Math.max(t,e,n),i=Math.min(t,e,n),a=0,s=r,o=r-i,f=r===0?0:o/r;if(r===i)a=0;else{switch(r){case t:a=(e-n)/o+(e<n?6:0);break;case e:a=(n-t)/o+2;break;case n:a=(t-e)/o+4;break}a/=6}return{h:a,s:f,v:s}}function xe(t,e,n){t=v(t,360)*6,e=v(e,100),n=v(n,100);var r=Math.floor(t),i=t-r,a=n*(1-e),s=n*(1-i*e),o=n*(1-(1-i)*e),f=r%6,u=[n,s,a,a,o,n][f],d=[o,n,n,s,a,a][f],c=[a,a,o,n,n,s][f];return{r:u*255,g:d*255,b:c*255}}function Ot(t,e,n,r){var i=[B(Math.round(t).toString(16)),B(Math.round(e).toString(16)),B(Math.round(n).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function ke(t,e,n,r,i){var a=[B(Math.round(t).toString(16)),B(Math.round(e).toString(16)),B(Math.round(n).toString(16)),B(Me(r))];return i&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function Me(t){return Math.round(parseFloat(t)*255).toString(16)}function qt(t){return k(t)/255}function k(t){return parseInt(t,16)}function Se(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var gt={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function $e(t){var e={r:0,g:0,b:0},n=1,r=null,i=null,a=null,s=!1,o=!1;return typeof t=="string"&&(t=Ee(t)),typeof t=="object"&&(A(t.r)&&A(t.g)&&A(t.b)?(e=ye(t.r,t.g,t.b),s=!0,o=String(t.r).substr(-1)==="%"?"prgb":"rgb"):A(t.h)&&A(t.s)&&A(t.v)?(r=et(t.s),i=et(t.v),e=xe(t.h,r,i),s=!0,o="hsv"):A(t.h)&&A(t.s)&&A(t.l)&&(r=et(t.s),a=et(t.l),e=we(t.h,r,a),s=!0,o="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(n=t.a)),n=Nt(n),{ok:s,format:t.format||o,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:n}}var Re="[-\\+]?\\d+%?",Ae="[-\\+]?\\d*\\.\\d+%?",E="(?:"+Ae+")|(?:"+Re+")",pt="[\\s|\\(]+("+E+")[,|\\s]+("+E+")[,|\\s]+("+E+")\\s*\\)?",mt="[\\s|\\(]+("+E+")[,|\\s]+("+E+")[,|\\s]+("+E+")[,|\\s]+("+E+")\\s*\\)?",M={CSS_UNIT:new RegExp(E),rgb:new RegExp("rgb"+pt),rgba:new RegExp("rgba"+mt),hsl:new RegExp("hsl"+pt),hsla:new RegExp("hsla"+mt),hsv:new RegExp("hsv"+pt),hsva:new RegExp("hsva"+mt),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Ee(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;var e=!1;if(gt[t])t=gt[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n=M.rgb.exec(t);return n?{r:n[1],g:n[2],b:n[3]}:(n=M.rgba.exec(t),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=M.hsl.exec(t),n?{h:n[1],s:n[2],l:n[3]}:(n=M.hsla.exec(t),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=M.hsv.exec(t),n?{h:n[1],s:n[2],v:n[3]}:(n=M.hsva.exec(t),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=M.hex8.exec(t),n?{r:k(n[1]),g:k(n[2]),b:k(n[3]),a:qt(n[4]),format:e?"name":"hex8"}:(n=M.hex6.exec(t),n?{r:k(n[1]),g:k(n[2]),b:k(n[3]),format:e?"name":"hex"}:(n=M.hex4.exec(t),n?{r:k(n[1]+n[1]),g:k(n[2]+n[2]),b:k(n[3]+n[3]),a:qt(n[4]+n[4]),format:e?"name":"hex8"}:(n=M.hex3.exec(t),n?{r:k(n[1]+n[1]),g:k(n[2]+n[2]),b:k(n[3]+n[3]),format:e?"name":"hex"}:!1)))))))))}function A(t){return Boolean(M.CSS_UNIT.exec(String(t)))}var It=function(){function t(e,n){e===void 0&&(e=""),n===void 0&&(n={});var r;if(e instanceof t)return e;typeof e=="number"&&(e=Se(e)),this.originalInput=e;var i=$e(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=n.format)!==null&&r!==void 0?r:i.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},t.prototype.getLuminance=function(){var e=this.toRgb(),n,r,i,a=e.r/255,s=e.g/255,o=e.b/255;return a<=.03928?n=a/12.92:n=Math.pow((a+.055)/1.055,2.4),s<=.03928?r=s/12.92:r=Math.pow((s+.055)/1.055,2.4),o<=.03928?i=o/12.92:i=Math.pow((o+.055)/1.055,2.4),.2126*n+.7152*r+.0722*i},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(e){return this.a=Nt(e),this.roundA=Math.round(100*this.a)/100,this},t.prototype.toHsv=function(){var e=Ct(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},t.prototype.toHsvString=function(){var e=Ct(this.r,this.g,this.b),n=Math.round(e.h*360),r=Math.round(e.s*100),i=Math.round(e.v*100);return this.a===1?"hsv("+n+", "+r+"%, "+i+"%)":"hsva("+n+", "+r+"%, "+i+"%, "+this.roundA+")"},t.prototype.toHsl=function(){var e=jt(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},t.prototype.toHslString=function(){var e=jt(this.r,this.g,this.b),n=Math.round(e.h*360),r=Math.round(e.s*100),i=Math.round(e.l*100);return this.a===1?"hsl("+n+", "+r+"%, "+i+"%)":"hsla("+n+", "+r+"%, "+i+"%, "+this.roundA+")"},t.prototype.toHex=function(e){return e===void 0&&(e=!1),Ot(this.r,this.g,this.b,e)},t.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},t.prototype.toHex8=function(e){return e===void 0&&(e=!1),ke(this.r,this.g,this.b,this.a,e)},t.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var e=Math.round(this.r),n=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb("+e+", "+n+", "+r+")":"rgba("+e+", "+n+", "+r+", "+this.roundA+")"},t.prototype.toPercentageRgb=function(){var e=function(n){return Math.round(v(n,255)*100)+"%"};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var e=function(n){return Math.round(v(n,255)*100)};return this.a===1?"rgb("+e(this.r)+"%, "+e(this.g)+"%, "+e(this.b)+"%)":"rgba("+e(this.r)+"%, "+e(this.g)+"%, "+e(this.b)+"%, "+this.roundA+")"},t.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+Ot(this.r,this.g,this.b,!1),n=0,r=Object.entries(gt);n<r.length;n++){var i=r[n],a=i[0],s=i[1];if(e===s)return a}return!1},t.prototype.toString=function(e){var n=Boolean(e);e=e!=null?e:this.format;var r=!1,i=this.a<1&&this.a>=0,a=!n&&i&&(e.startsWith("hex")||e==="name");return a?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l+=e/100,n.l=tt(n.l),new t(n)},t.prototype.brighten=function(e){e===void 0&&(e=10);var n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(e/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(e/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(e/100)))),new t(n)},t.prototype.darken=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.l-=e/100,n.l=tt(n.l),new t(n)},t.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},t.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},t.prototype.desaturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s-=e/100,n.s=tt(n.s),new t(n)},t.prototype.saturate=function(e){e===void 0&&(e=10);var n=this.toHsl();return n.s+=e/100,n.s=tt(n.s),new t(n)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var n=this.toHsl(),r=(n.h+e)%360;return n.h=r<0?360+r:r,new t(n)},t.prototype.mix=function(e,n){n===void 0&&(n=50);var r=this.toRgb(),i=new t(e).toRgb(),a=n/100,s={r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a};return new t(s)},t.prototype.analogous=function(e,n){e===void 0&&(e=6),n===void 0&&(n=30);var r=this.toHsl(),i=360/n,a=[this];for(r.h=(r.h-(i*e>>1)+720)%360;--e;)r.h=(r.h+i)%360,a.push(new t(r));return a},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var n=this.toHsv(),r=n.h,i=n.s,a=n.v,s=[],o=1/e;e--;)s.push(new t({h:r,s:i,v:a})),a=(a+o)%1;return s},t.prototype.splitcomplement=function(){var e=this.toHsl(),n=e.h;return[this,new t({h:(n+72)%360,s:e.s,l:e.l}),new t({h:(n+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var n=this.toRgb(),r=new t(e).toRgb();return new t({r:r.r+(n.r-r.r)*n.a,g:r.g+(n.g-r.g)*n.a,b:r.b+(n.b-r.b)*n.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var n=this.toHsl(),r=n.h,i=[this],a=360/e,s=1;s<e;s++)i.push(new t({h:(r+s*a)%360,s:n.s,l:n.l}));return i},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();function Be(t){if(t===void 0&&(t={}),t.count!==void 0&&t.count!==null){var e=t.count,n=[];for(t.count=void 0;e>n.length;)t.count=null,t.seed&&(t.seed+=1),n.push(Be(t));return t.count=e,n}var r=He(t.hue,t.seed),i=Te(r,t),a=Fe(r,i,t),s={h:r,s:i,v:a};return t.alpha!==void 0&&(s.a=t.alpha),new It(s)}function He(t,e){var n=je(t),r=nt(n,e);return r<0&&(r=360+r),r}function Te(t,e){if(e.hue==="monochrome")return 0;if(e.luminosity==="random")return nt([0,100],e.seed);var n=Pt(t).saturationRange,r=n[0],i=n[1];switch(e.luminosity){case"bright":r=55;break;case"dark":r=i-10;break;case"light":i=55;break}return nt([r,i],e.seed)}function Fe(t,e,n){var r=Ne(t,e),i=100;switch(n.luminosity){case"dark":i=r+20;break;case"light":r=(i+r)/2;break;case"random":r=0,i=100;break}return nt([r,i],n.seed)}function Ne(t,e){for(var n=Pt(t).lowerBounds,r=0;r<n.length-1;r++){var i=n[r][0],a=n[r][1],s=n[r+1][0],o=n[r+1][1];if(e>=i&&e<=s){var f=(o-a)/(s-i),u=a-f*i;return f*e+u}}return 0}function je(t){var e=parseInt(t,10);if(!Number.isNaN(e)&&e<360&&e>0)return[e,e];if(typeof t=="string"){var n=Wt.find(function(s){return s.name===t});if(n){var r=Dt(n);if(r.hueRange)return r.hueRange}var i=new It(t);if(i.isValid){var a=i.toHsv().h;return[a,a]}}return[0,360]}function Pt(t){t>=334&&t<=360&&(t-=360);for(var e=0,n=Wt;e<n.length;e++){var r=n[e],i=Dt(r);if(i.hueRange&&t>=i.hueRange[0]&&t<=i.hueRange[1])return i}throw Error("Color not found")}function nt(t,e){if(e===void 0)return Math.floor(t[0]+Math.random()*(t[1]+1-t[0]));var n=t[1]||1,r=t[0]||0;e=(e*9301+49297)%233280;var i=e/233280;return Math.floor(r+i*(n-r))}function Dt(t){var e=t.lowerBounds[0][0],n=t.lowerBounds[t.lowerBounds.length-1][0],r=t.lowerBounds[t.lowerBounds.length-1][1],i=t.lowerBounds[0][1];return{name:t.name,hueRange:t.hueRange,lowerBounds:t.lowerBounds,saturationRange:[e,n],brightnessRange:[r,i]}}var Wt=[{name:"monochrome",hueRange:null,lowerBounds:[[0,0],[100,0]]},{name:"red",hueRange:[-26,18],lowerBounds:[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]},{name:"orange",hueRange:[19,46],lowerBounds:[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]},{name:"yellow",hueRange:[47,62],lowerBounds:[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]},{name:"green",hueRange:[63,178],lowerBounds:[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]},{name:"blue",hueRange:[179,257],lowerBounds:[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]},{name:"purple",hueRange:[258,282],lowerBounds:[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]},{name:"pink",hueRange:[283,334],lowerBounds:[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]}];function Lt(t){return Object.prototype.toString.call(t)==="[object Date]"}function bt(t,e){if(t===e||t!==t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const r=e.map((i,a)=>bt(t[a],i));return i=>r.map(a=>a(i))}if(n==="object"){if(!t||!e)throw new Error("Object cannot be null");if(Lt(t)&&Lt(e)){t=t.getTime(),e=e.getTime();const a=e-t;return s=>new Date(t+s*a)}const r=Object.keys(e),i={};return r.forEach(a=>{i[a]=bt(t[a],e[a])}),a=>{const s={};return r.forEach(o=>{s[o]=i[o](a)}),s}}if(n==="number"){const r=e-t;return i=>t+i*r}throw new Error(`Cannot interpolate ${n} values`)}function qn(t,e={}){const n=Ft(t);let r,i=t;function a(s,o){if(t==null)return n.set(t=s),Promise.resolve();i=s;let f=r,u=!1,{delay:d=0,duration:c=400,easing:l=N,interpolate:h=bt}=it(it({},e),o);if(c===0)return f&&(f.abort(),f=null),n.set(t=i),Promise.resolve();const g=G()+d;let b;return r=z(p=>{if(p<g)return!0;u||(b=h(t,s),typeof c=="function"&&(c=c(t,s)),u=!0),f&&(f.abort(),f=null);const m=p-g;return m>c?(n.set(t=s),!1):(n.set(t=b(l(m/c))),!0)}),r.promise}return{set:a,update:(s,o)=>a(s(i,t),o),subscribe:n.subscribe}}function In(t,{from:e,to:n},r={}){const i=getComputedStyle(t),a=i.transform==="none"?"":i.transform,[s,o]=i.transformOrigin.split(" ").map(parseFloat),f=e.left+e.width*s/n.width-(n.left+s),u=e.top+e.height*o/n.height-(n.top+o),{delay:d=0,duration:c=h=>Math.sqrt(h)*120,easing:l=ht}=r;return{delay:d,duration:j(c)?c(Math.sqrt(f*f+u*u)):c,easing:l,css:(h,g)=>{const b=g*f,p=g*u,m=h+g*e.width/n.width,y=h+g*e.height/n.height;return`transform: ${a} translate(${b}px, ${p}px) scale(${m}, ${y});`}}}function Pn(t){return Ft({classNames:""},e=>{if(typeof window=="undefined")return;let n={},r=()=>e(function(i){let a={classNames:""},s=[];for(let o in i)a[o]=i[o].matches,a[o]&&s.push("media-"+o);return a.classNames=s.join(" "),a}(n));for(let i in t){let a=window.matchMedia(t[i]);n[i]=a,n[i].addListener(r)}return r(),()=>{for(let i in n)n[i].removeListener(r)}})}export{Oe as $,gn as A,it as B,Ft as C,_n as D,qe as E,Xe as F,ln as G,te as H,Ke as I,Pe as J,De as K,Ie as L,Le as M,We as N,Ge as O,vn as P,Ve as Q,Qe as R,Nn as S,x as T,At as U,Bn as V,yn as W,ze as X,j as Y,mn as Z,qn as _,ie as a,N as a0,Rn as a1,$n as a2,dn as a3,hn as a4,q as a5,kn as a6,Cn as a7,In as a8,Mn as a9,jn as aa,cn as ab,Sn as ac,On as ad,H as ae,ne as af,en as ag,un as ah,fn as ai,on as aj,sn as ak,ge as al,Ye as am,an,Pn as ao,Ce as ap,It as aq,Be as ar,re as b,tn as c,ee as d,Mt as e,Ue as f,se as g,rn as h,Fn as i,Hn as j,Ze as k,Je as l,Tn as m,nn as n,pe as o,An as p,En as q,wn as r,Gt as s,st as t,de as u,me as v,xn as w,Ht as x,bn as y,pn as z};