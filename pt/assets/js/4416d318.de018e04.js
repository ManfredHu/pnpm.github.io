"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9157],{9613:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>m});var r=t(9496);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function p(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?p(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var o=r.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},d=function(e){var o=c(e.components);return r.createElement(l.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},s=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(t),m=n,y=s["".concat(l,".").concat(m)]||s[m]||u[m]||p;return t?r.createElement(y,a(a({ref:o},d),{},{components:t})):r.createElement(y,a({ref:o},d))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var p=t.length,a=new Array(p);a[0]=s;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var c=2;c<p;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},389:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(2962),n=t(2742),p=(t(9496),t(9613)),a=["components"],i={id:"deploy",title:"deploy pnpm"},l=void 0,c={unversionedId:"cli/deploy",id:"cli/deploy",title:"deploy pnpm",description:"Adicionado em: v7.4.0",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/deploy.md",sourceDirName:"cli",slug:"/cli/deploy",permalink:"/pt/next/cli/deploy",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"deploy",title:"deploy pnpm"},sidebar:"docs",previous:{title:"pnpm init",permalink:"/pt/next/cli/init"},next:{title:"pnpm doctor",permalink:"/pt/next/cli/doctor"}},d={},u=[{value:"Arquivos inclu\xeddos no deploy do projeto",id:"arquivos-inclu\xeddos-no-deploy-do-projeto",level:2}],s={toc:u};function m(e){var o=e.components,t=(0,n.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},s,t,{components:o,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Adicionado em: v7.4.0"),(0,p.kt)("p",null,"Deploy de um pacote a partir de um workspace."),(0,p.kt)("p",null,"Uso:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm -- filter=<deployed project name> deploy <target directory>\n")),(0,p.kt)("p",null,"Caso voc\xea construa seu projeto antes da implanta\xe7\xe3o, use tamb\xe9m a op\xe7\xe3o ",(0,p.kt)("inlineCode",{parentName:"p"},"--prod")," para pular a instala\xe7\xe3o de ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> --prod deploy <target directory>\n")),(0,p.kt)("p",null,"Usando em uma imagem Docker. Depois de compilar tudo em seu monorepo, fa\xe7a isso em uma segunda imagem que usa sua imagem base do monorepo como contexto de compila\xe7\xe3o ou em um est\xe1gio de compila\xe7\xe3o adicional:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# syntax=docker/dockerfile:1.4\n\nFROM workspace as pruned\nRUN pnpm --filter <your package name> --prod deploy pruned\n\nFROM node:18-alpine\nWORKDIR /app\n\nENV NODE_ENV=production\n\nCOPY --from=pruned /app/pruned .\n\nENTRYPOINT ["node", "index.js"]\n')),(0,p.kt)("h2",{id:"arquivos-inclu\xeddos-no-deploy-do-projeto"},"Arquivos inclu\xeddos no deploy do projeto"),(0,p.kt)("p",null,"Por padr\xe3o, todos os arquivos do projeto s\xe3o copiados durante o deploy. O ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),' do projeto pode conter o campo "files" para listar os arquivos e diret\xf3rios que dever\xe3o ser copiados.'))}m.isMDXComponent=!0}}]);