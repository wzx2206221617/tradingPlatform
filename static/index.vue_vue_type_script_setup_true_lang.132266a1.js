import{a as e,s as a,c as t,o as n,f as l,w as s,e as o,b as d,k as m,u as i,F as r,x as c,W as u,h as f,t as p}from"./index.cfc56859.js";const _=[{title:"默认",name:"normal"},{title:"黑暗",name:"dark"}],k=e({__name:"index",setup(e){const k=a(),w=t((()=>k.activeThemeName)),b=e=>{k.setTheme(e)};return(e,a)=>{const t=f("el-icon"),k=f("el-tooltip"),x=f("el-dropdown-item"),h=f("el-dropdown-menu"),g=f("el-dropdown");return n(),l(g,{trigger:"click",onCommand:b},{dropdown:s((()=>[o(h,null,{default:s((()=>[(n(!0),d(r,null,m(i(_),((e,a)=>(n(),l(x,{key:a,disabled:i(w)===e.name,command:e.name},{default:s((()=>[c("span",null,p(e.title),1)])),_:2},1032,["disabled","command"])))),128))])),_:1})])),default:s((()=>[c("div",null,[o(k,{effect:"dark",content:"主题模式",placement:"bottom"},{default:s((()=>[o(t,{size:20},{default:s((()=>[o(i(u))])),_:1})])),_:1})])])),_:1})}}});export{k as _};