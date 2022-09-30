import{d as e,r as t,a,c as n,o as r,b as l,e as i,w as o,T as s,f as c,u,g as d,h as f,i as m,_ as p,j as h,k as v,F as g,l as A,t as w,m as b,n as y,p as C,q as k,E as x,s as E,v as V,x as S,y as B,z as D,A as F,B as I,C as _,D as L,G as T,H as R,I as M,J as N,K as O,L as Y,M as j,N as Q,O as P,P as q,Q as z,R as U,S as H,U as J,V as X}from"./index.6d72f221.js";import{_ as G}from"./index.vue_vue_type_script_setup_true_lang.6e1c38e1.js";const K=!0,W=!0,Z=!0,$=!0,ee=!0,te=!0,ae=e("settings",(()=>({fixedHeader:t(Z),showSettings:t(K),showTagsView:t(W),showSidebarLogo:t($),showThemeSwitch:t(ee),showScreenfull:t(te)}))),ne={class:"app-main"},re=p(a({__name:"AppMain",setup(e){const t=m(),a=n((()=>t.path));return(e,t)=>{const n=f("router-view");return r(),l("section",ne,[i(n,null,{default:o((({Component:e})=>[i(s,{name:"fade-transform",mode:"out-in"},{default:o((()=>[(r(),c(d(e),{key:u(a)}))])),_:2},1024)])),_:1})])}}}),[["__scopeId","data-v-0058dddf"]]);function le(e,t){void 0===t&&(t={});for(var a=function(e){for(var t=[],a=0;a<e.length;){var n=e[a];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:a,value:e[a++]});else{var r=1,l="";if("?"===e[o=a+1])throw new TypeError('Pattern cannot start with "?" at '.concat(o));for(;o<e.length;)if("\\"!==e[o]){if(")"===e[o]){if(0==--r){o++;break}}else if("("===e[o]&&(r++,"?"!==e[o+1]))throw new TypeError("Capturing groups are not allowed at ".concat(o));l+=e[o++]}else l+=e[o++]+e[o++];if(r)throw new TypeError("Unbalanced pattern at ".concat(a));if(!l)throw new TypeError("Missing pattern at ".concat(a));t.push({type:"PATTERN",index:a,value:l}),a=o}else{for(var i="",o=a+1;o<e.length;){var s=e.charCodeAt(o);if(!(s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122||95===s))break;i+=e[o++]}if(!i)throw new TypeError("Missing parameter name at ".concat(a));t.push({type:"NAME",index:a,value:i}),a=o}else t.push({type:"CLOSE",index:a,value:e[a++]});else t.push({type:"OPEN",index:a,value:e[a++]});else t.push({type:"ESCAPED_CHAR",index:a++,value:e[a++]});else t.push({type:"MODIFIER",index:a,value:e[a++]})}return t.push({type:"END",index:a,value:""}),t}(e),n=t.prefixes,r=void 0===n?"./":n,l="[^".concat(function(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(t.delimiter||"/#?"),"]+?"),i=[],o=0,s=0,c="",u=function(e){if(s<a.length&&a[s].type===e)return a[s++].value},d=function(e){var t=u(e);if(void 0!==t)return t;var n=a[s],r=n.type,l=n.index;throw new TypeError("Unexpected ".concat(r," at ").concat(l,", expected ").concat(e))},f=function(){for(var e,t="";e=u("CHAR")||u("ESCAPED_CHAR");)t+=e;return t};s<a.length;){var m=u("CHAR"),p=u("NAME"),h=u("PATTERN");if(p||h){var v=m||"";-1===r.indexOf(v)&&(c+=v,v=""),c&&(i.push(c),c=""),i.push({name:p||o++,prefix:v,suffix:"",pattern:h||l,modifier:u("MODIFIER")||""})}else{var g=m||u("ESCAPED_CHAR");if(g)c+=g;else if(c&&(i.push(c),c=""),u("OPEN")){v=f();var A=u("NAME")||"",w=u("PATTERN")||"",b=f();d("CLOSE"),i.push({name:A||(w?o++:""),pattern:A&&!w?l:w,prefix:v,suffix:b,modifier:u("MODIFIER")||""})}else d("END")}}return i}function ie(e,t){return function(e,t){void 0===t&&(t={});var a=function(e){return e&&e.sensitive?"":"i"}(t),n=t.encode,r=void 0===n?function(e){return e}:n,l=t.validate,i=void 0===l||l,o=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),a)}));return function(t){for(var a="",n=0;n<e.length;n++){var l=e[n];if("string"!=typeof l){var s=t?t[l.name]:void 0,c="?"===l.modifier||"*"===l.modifier,u="*"===l.modifier||"+"===l.modifier;if(Array.isArray(s)){if(!u)throw new TypeError('Expected "'.concat(l.name,'" to not repeat, but got an array'));if(0===s.length){if(c)continue;throw new TypeError('Expected "'.concat(l.name,'" to not be empty'))}for(var d=0;d<s.length;d++){var f=r(s[d],l);if(i&&!o[n].test(f))throw new TypeError('Expected all "'.concat(l.name,'" to match "').concat(l.pattern,'", but got "').concat(f,'"'));a+=l.prefix+f+l.suffix}}else if("string"!=typeof s&&"number"!=typeof s){if(!c){var m=u?"an array":"a string";throw new TypeError('Expected "'.concat(l.name,'" to be ').concat(m))}}else{f=r(String(s),l);if(i&&!o[n].test(f))throw new TypeError('Expected "'.concat(l.name,'" to match "').concat(l.pattern,'", but got "').concat(f,'"'));a+=l.prefix+f+l.suffix}}else a+=l}return a}}(le(e,t),t)}const oe={key:0,class:"no-redirect"},se=["onClick"],ce=p(a({__name:"index",setup(e){const a=m(),n=A(),i=t([]),s=()=>{i.value=a.matched.filter((e=>e.meta&&e.meta.title&&!1!==e.meta.breadcrumb))},u=e=>{const{redirect:t,path:r}=e;t?n.push(t):n.push((e=>{const{params:t}=a;return ie(e)(t)})(r))};return h((()=>a.path),(e=>{e.startsWith("/redirect/")||s()})),s(),(e,t)=>{const a=f("el-breadcrumb-item"),n=f("el-breadcrumb");return r(),c(n,{class:"app-breadcrumb"},{default:o((()=>[(r(!0),l(g,null,v(i.value,((e,t)=>(r(),c(a,{key:e.path},{default:o((()=>["noRedirect"===e.redirect||t===i.value.length-1?(r(),l("span",oe,w(e.meta.title),1)):(r(),l("a",{key:1,onClick:b((t=>u(e)),["prevent"])},w(e.meta.title),9,se))])),_:2},1024)))),128))])),_:1})}}}),[["__scopeId","data-v-e0caced0"]]),ue=p(a({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggle-click"],setup(e,{emit:t}){const a=e,n=()=>{t("toggle-click")};return(e,t)=>{const s=f("el-icon");return r(),l("div",{onClick:n},[i(s,{size:20,class:"icon"},{default:o((()=>[a.isActive?(r(),c(u(y),{key:0})):(r(),c(u(C),{key:1}))])),_:1})])}}}),[["__scopeId","data-v-b698c316"]]),de=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],fe=(()=>{if("undefined"==typeof document)return!1;const e=de[0],t={};for(const a of de){if((null==a?void 0:a[1])in document){for(const[n,r]of a.entries())t[e[n]]=r;return t}}return!1})(),me={change:fe.fullscreenchange,error:fe.fullscreenerror};let pe={request:(e=document.documentElement,t)=>new Promise(((a,n)=>{const r=()=>{pe.off("change",r),a()};pe.on("change",r);const l=e[fe.requestFullscreen](t);l instanceof Promise&&l.then(r).catch(n)})),exit:()=>new Promise(((e,t)=>{if(!pe.isFullscreen)return void e();const a=()=>{pe.off("change",a),e()};pe.on("change",a);const n=document[fe.exitFullscreen]();n instanceof Promise&&n.then(a).catch(t)})),toggle:(e,t)=>pe.isFullscreen?pe.exit():pe.request(e,t),onchange(e){pe.on("change",e)},onerror(e){pe.on("error",e)},on(e,t){const a=me[e];a&&document.addEventListener(a,t,!1)},off(e,t){const a=me[e];a&&document.removeEventListener(a,t,!1)},raw:fe};Object.defineProperties(pe,{isFullscreen:{get:()=>Boolean(document[fe.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return null!=(e=document[fe.fullscreenElement])?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[fe.fullscreenEnabled])}}),fe||(pe={isEnabled:!1});const he=pe,ve=p(a({__name:"index",setup(e){const a=t("全屏"),n=t(!1),s=()=>{he.isEnabled?he.toggle():x.warning("您的浏览器无法工作")},c=()=>{n.value=he.isFullscreen,a.value=he.isFullscreen?"退出全屏":"全屏"};return he.on("change",c),k((()=>{he.isEnabled&&he.off("change",c)})),(e,t)=>{const c=f("svg-icon"),u=f("el-tooltip");return r(),l("div",{onClick:s},[i(u,{effect:"dark",content:a.value,placement:"bottom"},{default:o((()=>[i(c,{name:n.value?"fullscreen-exit":"fullscreen"},null,8,["name"])])),_:1},8,["content"])])}}}),[["__scopeId","data-v-ecf0ac31"]]),ge={class:"navigation-bar"},Ae={class:"right-menu"},we={target:"_blank",href:"https://juejin.cn/post/7089377403717287972"},be={target:"_blank",href:"https://github.com/un-pany/v3-admin-vite"},ye={target:"_blank",href:"https://gitee.com/un-pany/v3-admin-vite"},Ce={target:"_blank",href:"https://juejin.cn/post/6963876125428678693"},ke={target:"_blank",href:"https://github.com/un-pany/v3-admin/blob/master/README.en.md"},xe={target:"_blank",href:"https://github.com/un-pany/v3-admin"},Ee={target:"_blank",href:"https://gitee.com/un-pany/v3-admin"},Ve=(e=>(I("data-v-9fa1296c"),e=e(),_(),e))((()=>S("span",{style:{display:"block"}},"退出登录",-1))),Se=p(a({__name:"index",setup(e){const t=A(),a=E(),s=ae(),d=V(),m=n((()=>a.sidebar)),p=n((()=>s.showThemeSwitch)),h=n((()=>s.showScreenfull)),v=()=>{a.toggleSidebar(!1)},g=()=>{d.logout(),t.push("/login")};return(e,t)=>{const a=f("el-avatar"),n=f("el-dropdown-item"),s=f("el-dropdown-menu"),d=f("el-dropdown");return r(),l("div",ge,[i(ue,{"is-active":u(m).opened,class:"hamburger",onToggleClick:v},null,8,["is-active"]),i(ce,{class:"breadcrumb"}),S("div",Ae,[u(h)?(r(),c(ve,{key:0,class:"right-menu-item"})):B("",!0),u(p)?(r(),c(G,{key:1,class:"right-menu-item"})):B("",!0),i(d,{class:"right-menu-item"},{dropdown:o((()=>[i(s,null,{default:o((()=>[S("a",we,[i(n,null,{default:o((()=>[D("V3-Admin-Vite 中文文档")])),_:1})]),S("a",be,[i(n,null,{default:o((()=>[D("V3-Admin-Vite GitHub")])),_:1})]),S("a",ye,[i(n,null,{default:o((()=>[D("V3-Admin-Vite Gitee")])),_:1})]),S("a",Ce,[i(n,{divided:""},{default:o((()=>[D("V3-Admin 中文文档")])),_:1})]),S("a",ke,[i(n,null,{default:o((()=>[D("V3-Admin English Docs")])),_:1})]),S("a",xe,[i(n,null,{default:o((()=>[D("V3-Admin GitHub")])),_:1})]),S("a",Ee,[i(n,null,{default:o((()=>[D("V3-Admin Gitee")])),_:1})]),i(n,{divided:"",onClick:g},{default:o((()=>[Ve])),_:1})])),_:1})])),default:o((()=>[i(a,{icon:u(F),size:34},null,8,["icon"])])),_:1})])])}}}),[["__scopeId","data-v-9fa1296c"]]),Be=e=>(I("data-v-eb8fd065"),e=e(),_(),e),De={class:"drawer-container"},Fe=Be((()=>S("h3",{class:"drawer-title"},"系统布局配置",-1))),Ie={class:"drawer-item"},_e=Be((()=>S("span",null,"显示标签栏",-1))),Le={class:"drawer-item"},Te=Be((()=>S("span",null,"显示侧边栏 Logo",-1))),Re={class:"drawer-item"},Me=Be((()=>S("span",null,"固定 Header",-1))),Ne={class:"drawer-item"},Oe=Be((()=>S("span",null,"显示切换主题按钮",-1))),Ye={class:"drawer-item"},je=Be((()=>S("span",null,"显示全屏按钮",-1))),Qe=p(a({__name:"index",setup(e){const t=ae();return(e,a)=>{const n=f("el-switch");return r(),l("div",De,[S("div",null,[Fe,S("div",Ie,[_e,i(n,{modelValue:u(t).showTagsView,"onUpdate:modelValue":a[0]||(a[0]=e=>u(t).showTagsView=e),class:"drawer-switch"},null,8,["modelValue"])]),S("div",Le,[Te,i(n,{modelValue:u(t).showSidebarLogo,"onUpdate:modelValue":a[1]||(a[1]=e=>u(t).showSidebarLogo=e),class:"drawer-switch"},null,8,["modelValue"])]),S("div",Re,[Me,i(n,{modelValue:u(t).fixedHeader,"onUpdate:modelValue":a[2]||(a[2]=e=>u(t).fixedHeader=e),class:"drawer-switch"},null,8,["modelValue"])]),S("div",Ne,[Oe,i(n,{modelValue:u(t).showThemeSwitch,"onUpdate:modelValue":a[3]||(a[3]=e=>u(t).showThemeSwitch=e),class:"drawer-switch"},null,8,["modelValue"])]),S("div",Ye,[je,i(n,{modelValue:u(t).showScreenfull,"onUpdate:modelValue":a[4]||(a[4]=e=>u(t).showScreenfull=e),class:"drawer-switch"},null,8,["modelValue"])])])])}}}),[["__scopeId","data-v-eb8fd065"]]),Pe=e=>/^(https?:|mailto:|tel:)/.test(e),qe=["href"],ze=a({__name:"SidebarItemLink",props:{to:{type:String,required:!0}},setup(e){const t=e;return(e,a)=>{const n=f("router-link");return u(Pe)(t.to)?(r(),l("a",{key:0,href:t.to,target:"_blank",rel:"noopener"},[L(e.$slots,"default")],8,qe)):(r(),c(n,{key:1,to:t.to},{default:o((()=>[L(e.$slots,"default")])),_:3},8,["to"]))}}});function Ue(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function He(e,t){for(var a,n="",r=0,l=-1,i=0,o=0;o<=e.length;++o){if(o<e.length)a=e.charCodeAt(o);else{if(47===a)break;a=47}if(47===a){if(l===o-1||1===i);else if(l!==o-1&&2===i){if(n.length<2||2!==r||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var s=n.lastIndexOf("/");if(s!==n.length-1){-1===s?(n="",r=0):r=(n=n.slice(0,s)).length-1-n.lastIndexOf("/"),l=o,i=0;continue}}else if(2===n.length||1===n.length){n="",r=0,l=o,i=0;continue}t&&(n.length>0?n+="/..":n="..",r=2)}else n.length>0?n+="/"+e.slice(l+1,o):n=e.slice(l+1,o),r=o-l-1;l=o,i=0}else 46===a&&-1!==i?++i:i=-1}return n}var Je={resolve:function(){for(var e,t="",a=!1,n=arguments.length-1;n>=-1&&!a;n--){var r;n>=0?r=arguments[n]:(void 0===e&&(e=process.cwd()),r=e),Ue(r),0!==r.length&&(t=r+"/"+t,a=47===r.charCodeAt(0))}return t=He(t,!a),a?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(Ue(e),0===e.length)return".";var t=47===e.charCodeAt(0),a=47===e.charCodeAt(e.length-1);return 0!==(e=He(e,!t)).length||t||(e="."),e.length>0&&a&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return Ue(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var a=arguments[t];Ue(a),a.length>0&&(void 0===e?e=a:e+="/"+a)}return void 0===e?".":Je.normalize(e)},relative:function(e,t){if(Ue(e),Ue(t),e===t)return"";if((e=Je.resolve(e))===(t=Je.resolve(t)))return"";for(var a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var n=e.length,r=n-a,l=1;l<t.length&&47===t.charCodeAt(l);++l);for(var i=t.length-l,o=r<i?r:i,s=-1,c=0;c<=o;++c){if(c===o){if(i>o){if(47===t.charCodeAt(l+c))return t.slice(l+c+1);if(0===c)return t.slice(l+c)}else r>o&&(47===e.charCodeAt(a+c)?s=c:0===c&&(s=0));break}var u=e.charCodeAt(a+c);if(u!==t.charCodeAt(l+c))break;47===u&&(s=c)}var d="";for(c=a+s+1;c<=n;++c)c!==n&&47!==e.charCodeAt(c)||(0===d.length?d+="..":d+="/..");return d.length>0?d+t.slice(l+s):(l+=s,47===t.charCodeAt(l)&&++l,t.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(Ue(e),0===e.length)return".";for(var t=e.charCodeAt(0),a=47===t,n=-1,r=!0,l=e.length-1;l>=1;--l)if(47===(t=e.charCodeAt(l))){if(!r){n=l;break}}else r=!1;return-1===n?a?"/":".":a&&1===n?"//":e.slice(0,n)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');Ue(e);var a,n=0,r=-1,l=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var i=t.length-1,o=-1;for(a=e.length-1;a>=0;--a){var s=e.charCodeAt(a);if(47===s){if(!l){n=a+1;break}}else-1===o&&(l=!1,o=a+1),i>=0&&(s===t.charCodeAt(i)?-1==--i&&(r=a):(i=-1,r=o))}return n===r?r=o:-1===r&&(r=e.length),e.slice(n,r)}for(a=e.length-1;a>=0;--a)if(47===e.charCodeAt(a)){if(!l){n=a+1;break}}else-1===r&&(l=!1,r=a+1);return-1===r?"":e.slice(n,r)},extname:function(e){Ue(e);for(var t=-1,a=0,n=-1,r=!0,l=0,i=e.length-1;i>=0;--i){var o=e.charCodeAt(i);if(47!==o)-1===n&&(r=!1,n=i+1),46===o?-1===t?t=i:1!==l&&(l=1):-1!==t&&(l=-1);else if(!r){a=i+1;break}}return-1===t||-1===n||0===l||1===l&&t===n-1&&t===a+1?"":e.slice(t,n)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var a=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return a?a===t.root?a+n:a+e+n:n}("/",e)},parse:function(e){Ue(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var a,n=e.charCodeAt(0),r=47===n;r?(t.root="/",a=1):a=0;for(var l=-1,i=0,o=-1,s=!0,c=e.length-1,u=0;c>=a;--c)if(47!==(n=e.charCodeAt(c)))-1===o&&(s=!1,o=c+1),46===n?-1===l?l=c:1!==u&&(u=1):-1!==l&&(u=-1);else if(!s){i=c+1;break}return-1===l||-1===o||0===u||1===u&&l===o-1&&l===i+1?-1!==o&&(t.base=t.name=0===i&&r?e.slice(1,o):e.slice(i,o)):(0===i&&r?(t.name=e.slice(1,l),t.base=e.slice(1,o)):(t.name=e.slice(i,l),t.base=e.slice(i,o)),t.ext=e.slice(l,o)),i>0?t.dir=e.slice(0,i-1):r&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};Je.posix=Je;var Xe=Je;const Ge={key:2},Ke=p(a({__name:"SidebarItem",props:{item:{type:Object,required:!0},isCollapse:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{type:String,default:""}},setup(e){const t=e,a=n((()=>t.item.meta&&t.item.meta.alwaysShow)),s=n((()=>{if(t.item.children){return t.item.children.filter((e=>!(e.meta&&e.meta.hidden))).length}return 0})),m=n((()=>{if(s.value>1)return null;if(t.item.children)for(const e of t.item.children)if(!e.meta||!e.meta.hidden)return e;return{...t.item,path:""}})),p=e=>Pe(e)?e:Pe(t.basePath)?t.basePath:Xe.resolve(t.basePath,e);return(e,n)=>{var s;const h=f("svg-icon"),A=f("el-menu-item"),b=f("sidebar-item",!0),y=f("el-sub-menu");return(null==(s=t.item.meta)?void 0:s.hidden)?B("",!0):(r(),l("div",{key:0,class:R({"simple-mode":t.isCollapse,"first-level":t.isFirstLevel})},[u(a)||!u(m)||u(m).children?(r(),c(y,{key:1,index:p(t.item.path),"popper-append-to-body":""},{title:o((()=>[t.item.meta&&t.item.meta.svgIcon?(r(),c(h,{key:0,name:t.item.meta.svgIcon},null,8,["name"])):t.item.meta&&t.item.meta.elIcon?(r(),c(d(t.item.meta.elIcon),{key:1,class:"el-icon"})):B("",!0),t.item.meta&&t.item.meta.title?(r(),l("span",Ge,w(t.item.meta.title),1)):B("",!0)])),default:o((()=>[t.item.children?(r(!0),l(g,{key:0},v(t.item.children,(e=>(r(),c(b,{key:e.path,item:e,"is-collapse":t.isCollapse,"is-first-level":!1,"base-path":p(e.path)},null,8,["item","is-collapse","base-path"])))),128)):B("",!0)])),_:1},8,["index"])):(r(),l(g,{key:0},[u(m).meta?(r(),c(ze,{key:0,to:p(u(m).path)},{default:o((()=>[i(A,{index:p(u(m).path)},T({default:o((()=>[u(m).meta.svgIcon?(r(),c(h,{key:0,name:u(m).meta.svgIcon},null,8,["name"])):u(m).meta.elIcon?(r(),c(d(u(m).meta.elIcon),{key:1,class:"el-icon"})):B("",!0)])),_:2},[u(m).meta.title?{name:"title",fn:o((()=>[D(w(u(m).meta.title),1)])),key:"0"}:void 0]),1032,["index"])])),_:1},8,["to"])):B("",!0)],64))],2))}}}),[["__scopeId","data-v-6c92c552"]]),We=e=>(I("data-v-7415e5ef"),e=e(),_(),e),Ze=We((()=>S("img",{src:"data:image/png;base64,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",class:"sidebar-logo"},null,-1))),$e=We((()=>S("img",{src:"/v3-admin-vite/static/logo-text-1.0f451132.png",class:"sidebar-logo-text"},null,-1))),et=p(a({__name:"SidebarLogo",props:{collapse:{type:Boolean,default:!0}},setup(e){const t=e;return(e,a)=>{const n=f("router-link");return r(),l("div",{class:R(["sidebar-logo-container",{collapse:t.collapse}])},[i(s,{name:"sidebar-logo-fade"},{default:o((()=>[t.collapse?(r(),c(n,{key:"collapse",to:"/"},{default:o((()=>[Ze])),_:1})):(r(),c(n,{key:"expand",to:"/"},{default:o((()=>[$e])),_:1}))])),_:1})],2)}}}),[["__scopeId","data-v-7415e5ef"]]),tt=e=>{let t="";try{t=getComputedStyle(document.documentElement).getPropertyValue(e)}catch(a){console.error(a)}return t},at=p(a({__name:"index",setup(e){const t=tt("--v3-sidebar-menu-bg-color"),a=tt("--v3-sidebar-menu-text-color"),s=tt("--v3-sidebar-menu-active-text-color"),d=m(),p=E(),h=M(),A=ae(),{showSidebarLogo:w}=N(A),b=n((()=>{const{meta:e,path:t}=d;return(null==e?void 0:e.activeMenu)?e.activeMenu:t})),y=n((()=>!p.sidebar.opened));return(e,n)=>{const d=f("el-menu"),m=f("el-scrollbar");return r(),l("div",{class:R({"has-logo":u(w)})},[u(w)?(r(),c(et,{key:0,collapse:u(y)},null,8,["collapse"])):B("",!0),i(m,{"wrap-class":"scrollbar-wrapper"},{default:o((()=>[i(d,{"default-active":u(b),collapse:u(y),"background-color":u(t),"text-color":u(a),"active-text-color":u(s),"unique-opened":!0,"collapse-transition":!1,mode:"vertical"},{default:o((()=>[(r(!0),l(g,null,v(u(h).routes,(e=>(r(),c(Ke,{key:e.path,item:e,"base-path":e.path,"is-collapse":u(y)},null,8,["item","base-path","is-collapse"])))),128))])),_:1},8,["default-active","collapse","background-color","text-color","active-text-color"])])),_:1})],2)}}}),[["__scopeId","data-v-add62d2b"]]),nt=e("tags-view",(()=>{const e=t([]);return{visitedViews:e,addVisitedView:t=>{e.value.some(((a,n)=>{if(a.path===t.path)return a.fullPath!==t.fullPath&&(e.value[n]=Object.assign({},t)),!0}))||e.value.push(Object.assign({},t))},delVisitedView:t=>{for(const[a,n]of e.value.entries())if(n.path===t.path){e.value.splice(a,1);break}},delOthersVisitedViews:t=>{e.value=e.value.filter((e=>{var a;return(null==(a=e.meta)?void 0:a.affix)||e.path===t.path}))},delAllVisitedViews:()=>{const t=e.value.filter((e=>{var t;return null==(t=e.meta)?void 0:t.affix}));e.value=t}}}));const rt=p({},[["render",function(e,t){const a=f("el-scrollbar");return r(),c(a,{vertical:!1,class:"scroll-container"},{default:o((()=>[L(e.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-1320289d"]]),lt={class:"tags-view-container"},it=p(a({__name:"index",setup(e){const a=q(),n=A(),s=m(),d=nt(),p=M(),y=t(!1),C=t(0),k=t(0),x=t({});let E=[];const V=e=>e.path===s.path,F=e=>{var t;return null==(t=e.meta)?void 0:t.affix},I=(e,t="/")=>{let a=[];return e.forEach((e=>{var n;if(null==(n=e.meta)?void 0:n.affix){const n=Xe.resolve(t,e.path);a.push({fullPath:n,path:n,name:e.name,meta:{...e.meta}})}if(e.children){const t=I(e.children,e.path);t.length>=1&&(a=a.concat(t))}})),a},_=()=>{s.name&&d.addVisitedView(s)},L=e=>{d.delVisitedView(e),V(e)&&N(d.visitedViews,e)},T=()=>{x.value.fullPath!==s.path&&void 0!==x.value.fullPath&&n.push(x.value.fullPath),d.delOthersVisitedViews(x.value)},N=(e,t)=>{const a=e.slice(-1)[0];void 0!==a&&void 0!==a.fullPath?n.push(a.fullPath):"Dashboard"===t.name?n.push({path:"/redirect"+t.path,query:t.query}):n.push("/")},z=()=>{y.value=!1};return h(s,(()=>{_()}),{deep:!0}),h(y,(e=>{e?document.body.addEventListener("click",z):document.body.removeEventListener("click",z)})),O((()=>{(()=>{E=I(p.routes);for(const e of E)e.name&&d.addVisitedView(e)})(),_()})),(e,t)=>{const m=f("el-icon"),p=f("router-link");return r(),l("div",lt,[i(rt,{class:"tags-view-wrapper"},{default:o((()=>[(r(!0),l(g,null,v(u(d).visitedViews,(e=>(r(),c(p,{key:e.path,class:R([V(e)?"active":"","tags-view-item"]),to:{path:e.path,query:e.query},onMouseup:b((t=>F(e)?"":L(e)),["middle"]),onContextmenu:b((t=>((e,t)=>{const n=a.proxy.$el.getBoundingClientRect().left,r=a.proxy.$el.offsetWidth-105,l=t.clientX-n+15;k.value=l>r?r:l,C.value=t.clientY,y.value=!0,x.value=e})(e,t)),["prevent"])},{default:o((()=>{var t;return[D(w(null==(t=e.meta)?void 0:t.title)+" ",1),F(e)?B("",!0):(r(),c(m,{key:0,size:12,onClick:b((t=>L(e)),["prevent","stop"])},{default:o((()=>[i(u(P))])),_:2},1032,["onClick"]))]})),_:2},1032,["class","to","onMouseup","onContextmenu"])))),128))])),_:1}),Y(S("ul",{style:Q({left:k.value+"px",top:C.value+"px"}),class:"contextmenu"},[S("li",{onClick:t[0]||(t[0]=e=>{return t=x.value,void n.replace({path:"/redirect"+t.path,query:t.query});var t})},"刷新"),F(x.value)?B("",!0):(r(),l("li",{key:0,onClick:t[1]||(t[1]=e=>L(x.value))},"关闭")),S("li",{onClick:T},"关闭其它"),S("li",{onClick:t[2]||(t[2]=e=>{return t=x.value,d.delAllVisitedViews(),void(E.some((e=>e.path===s.path))||N(d.visitedViews,t));var t})},"关闭所有")],4),[[j,y.value]])])}}}),[["__scopeId","data-v-d678e982"]]),ot=p(a({__name:"index",props:{buttonTop:{type:Number,default:250}},setup(e){const a=e;U((e=>({"22b2cbc4":n})));const n=a.buttonTop+"px",s=t(!1);return(e,t)=>{const a=f("el-icon"),n=f("el-drawer");return r(),l(g,null,[S("div",{class:"handle-button",onClick:t[0]||(t[0]=e=>s.value=!0)},[i(a,{size:24},{default:o((()=>[i(u(z))])),_:1})]),i(n,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e),size:"300px","with-header":!1},{default:o((()=>[L(e.$slots,"default",{},void 0,!0)])),_:3},8,["modelValue"])],64)}}}),[["__scopeId","data-v-73ce001a"]]),st=p(a({__name:"index",setup(e){const t=E(),a=ae();(()=>{const e=m(),t=E(),a=()=>document.body.getBoundingClientRect().width-1<992,n=()=>{if(!document.hidden){const e=a();t.toggleDevice(e?J.Mobile:J.Desktop),e&&t.closeSidebar(!0)}};h((()=>e.name),(()=>{t.device===J.Mobile&&t.sidebar.opened&&t.closeSidebar(!1)})),H((()=>{window.addEventListener("resize",n)})),O((()=>{a()&&(t.toggleDevice(J.Mobile),t.closeSidebar(!0))})),X((()=>{window.removeEventListener("resize",n)}))})();const s=n((()=>({hideSidebar:!t.sidebar.opened,openSidebar:t.sidebar.opened,withoutAnimation:t.sidebar.withoutAnimation,mobile:t.device===J.Mobile}))),d=n((()=>a.showSettings)),f=n((()=>a.showTagsView)),p=n((()=>a.fixedHeader)),v=()=>{t.closeSidebar(!1)};return(e,t)=>(r(),l("div",{class:R([u(s),"app-wrapper"])},[u(s).mobile&&u(s).openSidebar?(r(),l("div",{key:0,class:"drawer-bg",onClick:v})):B("",!0),i(u(at),{class:"sidebar-container"}),S("div",{class:R([{hasTagsView:u(f)},"main-container"])},[S("div",{class:R({"fixed-header":u(p)})},[i(u(Se)),u(f)?(r(),c(u(it),{key:0})):B("",!0)],2),i(u(re)),u(d)?(r(),c(u(ot),{key:0},{default:o((()=>[i(u(Qe))])),_:1})):B("",!0)],2)],2))}}),[["__scopeId","data-v-566562ee"]]);export{st as default};
