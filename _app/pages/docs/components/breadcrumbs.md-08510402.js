import{S as F,i as G,s as N,e as h,t as v,k as H,c as _,a as g,g as b,d as o,n as L,b as E,G as A,f as d,H as m,h as Y,B as M,F as Q,p as Z,T as O,Q as tt,M as x,N as st,j as at,m as et,o as nt,x as lt,u as ot,v as pt}from"../../../chunks/vendor-6e47c272.js";/* empty css                                                            */function J(r,t,l){const e=r.slice();return e[2]=t[l],e}function K(r){let t,l,e=r[2].title+"",i,u,a,p;return{c(){t=h("li"),l=h("a"),i=v(e),p=H(),this.h()},l(s){t=_(s,"LI",{class:!0});var c=g(t);l=_(c,"A",{href:!0,"data-tooltip":!0,class:!0});var k=g(l);i=b(k,e),k.forEach(o),p=L(c),c.forEach(o),this.h()},h(){E(l,"href",u=r[2].href),E(l,"data-tooltip",a=r[2].tooltip),E(l,"class","svelte-i2zqmv"),A(l,"tooltip",r[2].tooltip),E(t,"class","breadcrumb-item svelte-i2zqmv")},m(s,c){d(s,t,c),m(t,l),m(l,i),m(t,p)},p(s,c){c&1&&e!==(e=s[2].title+"")&&Y(i,e),c&1&&u!==(u=s[2].href)&&E(l,"href",u),c&1&&a!==(a=s[2].tooltip)&&E(l,"data-tooltip",a),c&1&&A(l,"tooltip",s[2].tooltip)},d(s){s&&o(t)}}}function it(r){let t,l=r[0],e=[];for(let a=0;a<l.length;a+=1)e[a]=K(J(r,l,a));let i=[r[1],{class:"breadcrumb"}],u={};for(let a=0;a<i.length;a+=1)u=M(u,i[a]);return{c(){t=h("ul");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=_(a,"UL",{class:!0});var p=g(t);for(let s=0;s<e.length;s+=1)e[s].l(p);p.forEach(o),this.h()},h(){Q(t,u),A(t,"svelte-i2zqmv",!0)},m(a,p){d(a,t,p);for(let s=0;s<e.length;s+=1)e[s].m(t,null)},p(a,[p]){if(p&1){l=a[0];let s;for(s=0;s<l.length;s+=1){const c=J(a,l,s);e[s]?e[s].p(c,p):(e[s]=K(c),e[s].c(),e[s].m(t,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=l.length}Q(t,u=Z(i,[p&2&&a[1],{class:"breadcrumb"}])),A(t,"svelte-i2zqmv",!0)},i:O,o:O,d(a){a&&o(t),tt(e,a)}}}function ct(r,t,l){const e=["links"];let i=x(t,e),{links:u}=t;return r.$$set=a=>{t=M(M({},t),st(a)),l(1,i=x(t,e)),"links"in a&&l(0,u=a.links)},[u,i]}class rt extends F{constructor(t){super();G(this,t,ct,it,N,{links:0})}}function ut(r){let t,l,e,i,u,a,p,s,c,k,P,w,z,I,y,C,D,j,S,W=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span>Breadcrumbs<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

    <span class="token keyword">let</span> links <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">&#123;</span>title<span class="token operator">:</span><span class="token string">'Home'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">'#'</span><span class="token punctuation">,</span> tooltip<span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span>title<span class="token operator">:</span><span class="token string">'Settings'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">'#'</span><span class="token punctuation">,</span> tooltip<span class="token operator">:</span> <span class="token string">'Settings'</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#123;</span>title<span class="token operator">:</span><span class="token string">'SvelteSpectre'</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">'#'</span><span class="token punctuation">,</span> tooltip<span class="token operator">:</span> <span class="token string">'SvelteSpectre'</span><span class="token punctuation">&#125;</span>
        <span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumbs</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>links<span class="token punctuation">&#125;</span></span><span class="token punctuation">/></span></span></code>`,q;return s=new rt({props:{links:r[0]}}),{c(){t=h("h1"),l=v(V),e=H(),i=h("p"),u=v("Breadcrumbs are used as navigational hierarchies to indicate current location."),a=H(),p=h("p"),at(s.$$.fragment),c=H(),k=h("p"),P=v("Add a container element with the "),w=h("code"),z=v("breadcrumb"),I=v(` class. And add child elements with
the `),y=h("code"),C=v("breadcrumb-item"),D=v(" class."),j=H(),S=h("pre"),this.h()},l(n){t=_(n,"H1",{});var f=g(t);l=b(f,V),f.forEach(o),e=L(n),i=_(n,"P",{});var R=g(i);u=b(R,"Breadcrumbs are used as navigational hierarchies to indicate current location."),R.forEach(o),a=L(n),p=_(n,"P",{});var T=g(p);et(s.$$.fragment,T),T.forEach(o),c=L(n),k=_(n,"P",{});var B=g(k);P=b(B,"Add a container element with the "),w=_(B,"CODE",{});var U=g(w);z=b(U,"breadcrumb"),U.forEach(o),I=b(B,` class. And add child elements with
the `),y=_(B,"CODE",{});var $=g(y);C=b($,"breadcrumb-item"),$.forEach(o),D=b(B," class."),B.forEach(o),j=L(n),S=_(n,"PRE",{class:!0});var X=g(S);X.forEach(o),this.h()},h(){E(S,"class","language-sv")},m(n,f){d(n,t,f),m(t,l),d(n,e,f),d(n,i,f),m(i,u),d(n,a,f),d(n,p,f),nt(s,p,null),d(n,c,f),d(n,k,f),m(k,P),m(k,w),m(w,z),m(k,I),m(k,y),m(y,C),m(k,D),d(n,j,f),d(n,S,f),S.innerHTML=W,q=!0},p:O,i(n){q||(lt(s.$$.fragment,n),q=!0)},o(n){ot(s.$$.fragment,n),q=!1},d(n){n&&o(t),n&&o(e),n&&o(i),n&&o(a),n&&o(p),pt(s),n&&o(c),n&&o(k),n&&o(j),n&&o(S)}}}const kt={file:"breadcrumbs.md",title:"Breadcrumbs",api:[{title:"interface Link",description:"interface Link",variables:"interface Link { href: string; title: string; tooltip: string; }"},{title:"href: string",description:"Item link",variables:"any URL string"},{title:"title: string",description:"Item title",variables:"any string"},{title:"title: tooltip",description:"Item tooltip",variables:"any string"}]},{file:ht,title:V,api:_t}=kt;function ft(r){return[[{title:"Home",href:"#",tooltip:"Home"},{title:"Settings",href:"#",tooltip:"Settings"},{title:"SvelteSpectre",href:"#",tooltip:"SvelteSpectre"}]]}class gt extends F{constructor(t){super();G(this,t,ft,ut,N,{})}}export{gt as default,kt as metadata};