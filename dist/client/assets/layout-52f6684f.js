import{j as o,a as e,F as c}from"./jsx-runtime-4e3661cc.js";import{H as r,u as s}from"./index-2ba2cd1d.js";const l="_header_13fto_35",h="_logo_13fto_56",d="_nav_13fto_61",f="_activeLink_13fto_79",m="_main_13fto_83",v="_footer_13fto_88",a={header:l,logo:h,nav:d,activeLink:f,main:m,footer:v},k=({children:n})=>o(c,{children:[e(r,{title:"Rakkas Demo App"}),o("header",{className:a.header,children:[e("a",{className:a.logo,href:"/",children:"Rakkas Demo App"}),e("nav",{className:a.nav,children:o("ul",{children:[e("li",{children:e(t,{href:"/",activeClass:a.activeLink,children:"Home"})}),e("li",{children:e(t,{href:"/about",activeClass:a.activeLink,children:"About"})}),e("li",{children:e(t,{href:"/todo",activeClass:a.activeLink,children:"Todo"})})]})})]}),e("section",{className:a.main,children:n}),o("footer",{className:a.footer,children:[e("p",{children:"Software and documentation: Copyright 2021 Fatih Aygün. MIT License."}),o("p",{children:["Favicon: “Flamenco” by"," ",e("a",{href:"https://thenounproject.com/term/flamenco/111303/",children:"gzz from Noun Project"})," ","(not affiliated).",e("br",{}),"Used under"," ",e("a",{href:"https://creativecommons.org/licenses/by/2.0/",children:"Creative Commons Attribution Generic license (CCBY)"})]})]})]});function t(n){const{current:i}=s();return e("a",{href:n.href,className:n.href===i.pathname?n.activeClass:void 0,children:n.children})}export{k as default};