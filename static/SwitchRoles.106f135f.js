import{b as a,y as e,a as s,l,j as o,o as t,e as n,z as d,t as u,u as i,f as r,w as c,D as m,G as p,_ as v}from"./index.9340b6d0.js";const _={class:"switch-roles"},b=(a=>(m("data-v-21f43ea2"),a=a(),p(),a))((()=>d("span",null,"切换权限：",-1))),f=v(a({__name:"SwitchRoles",emits:["change"],setup(a,{emit:m}){const p=e(),v=s(p.roles[0]);return l(v,(async a=>{await p.changeRoles(a),m("change")})),(a,e)=>{const s=o("el-radio-button"),l=o("el-radio-group");return t(),n("div",null,[d("div",null,"你的权限："+u(i(p).roles),1),d("div",_,[b,r(l,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=a=>v.value=a)},{default:c((()=>[r(s,{label:"editor"}),r(s,{label:"admin"})])),_:1},8,["modelValue"])])])}}}),[["__scopeId","data-v-21f43ea2"]]);export{f as S};
