import{a9 as e,b as i,a as s,j as a,aa as n,o,e as l,f as d,z as r,Q as t,B as m,w as c,h as p,u,A as f,_ as v}from"./index.9340b6d0.js";import{S as _}from"./SwitchRoles.106f135f.js";const y=i=>{if(i&&i instanceof Array&&i.length>0){const s=e().roles,a=i;return s.some((e=>a.includes(e)))}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1},b={class:"app-container"},g={class:"permission-alert"},k={class:"permission-alert"},h={class:"permission-alert"},z=v(i({__name:"directive",setup(e){const i=s(1),v=()=>{i.value++};return(e,s)=>{const z=a("el-tag"),P=a("el-tab-pane"),j=a("el-tabs"),w=n("permission");return o(),l("div",b,[d(_,{onChange:v}),(o(),l("div",{key:i.value,class:"margin-top"},[r("div",null,[t((o(),l("span",g,[m(" 只有 "),d(z,null,{default:c((()=>[m("admin")])),_:1}),m("可以看见这个 ")])),[[w,["admin"]]]),t((o(),p(z,{class:"permission-code",type:"info",size:"large"},{default:c((()=>[m(" v-permission=\"['admin']\" ")])),_:1})),[[w,["admin"]]])]),r("div",null,[t((o(),l("span",k,[m(" 只有 "),d(z,null,{default:c((()=>[m("editor")])),_:1}),m("可以看见这个 ")])),[[w,["editor"]]]),t((o(),p(z,{class:"permission-code",type:"info",size:"large"},{default:c((()=>[m(" v-permission=\"['editor']\" ")])),_:1})),[[w,["editor"]]])]),r("div",null,[t((o(),l("span",h,[m(" 两者 "),d(z,null,{default:c((()=>[m("admin")])),_:1}),m("和 "),d(z,null,{default:c((()=>[m("editor")])),_:1}),m("都可以看见这个 ")])),[[w,["admin","editor"]]]),t((o(),p(z,{class:"permission-code",type:"info",size:"large"},{default:c((()=>[m(" v-permission=\"['admin', 'editor']\" ")])),_:1})),[[w,["admin","editor"]]])])])),(o(),l("div",{key:"checkPermission"+i.value,class:"margin-top"},[d(z,{type:"info",size:"large"},{default:c((()=>[m(" 在某些情况下，不适合使用 v-permission。例如: Element-Plus 的 el-tab-pane 或 el-table-column 以及其它动态渲染 Dom 的场景。你只能通过手动设置 v-if 来实现。 ")])),_:1}),d(j,{type:"border-card",class:"margin-top"},{default:c((()=>[u(y)(["admin"])?(o(),p(P,{key:0,label:"admin"},{default:c((()=>[m(" admin 可以看见这个 "),d(z,{class:"permission-code",type:"info"},{default:c((()=>[m(" v-if=\"checkPermission(['admin'])\" ")])),_:1})])),_:1})):f("",!0),u(y)(["editor"])?(o(),p(P,{key:1,label:"editor"},{default:c((()=>[m(" editor 可以看见这个 "),d(z,{class:"permission-code",type:"info"},{default:c((()=>[m(" v-if=\"checkPermission(['editor'])\" ")])),_:1})])),_:1})):f("",!0),u(y)(["admin","editor"])?(o(),p(P,{key:2,label:"admin 和 editor"},{default:c((()=>[m(" 两者 admin 和 editor 都可以看见这个 "),d(z,{class:"permission-code",type:"info"},{default:c((()=>[m(" v-if=\"checkPermission(['admin', 'editor'])\" ")])),_:1})])),_:1})):f("",!0)])),_:1})]))])}}}),[["__scopeId","data-v-588db394"]]);export{z as default};
