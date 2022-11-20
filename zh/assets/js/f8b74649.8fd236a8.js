"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1901],{9613:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>m});var t=r(9496);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),c=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,f=s["".concat(a,".").concat(m)]||s[m]||u[m]||p;return r?t.createElement(f,l(l({ref:n},d),{},{components:r})):t.createElement(f,l({ref:n},d))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=r.length,l=new Array(p);l[0]=s;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<p;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2685:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=r(2962),o=r(2742),p=(r(9496),r(9613)),l=["components"],i={id:"deploy",title:"pnpm deploy"},a=void 0,c={unversionedId:"cli/deploy",id:"version-7.x/cli/deploy",title:"pnpm deploy",description:"\u6dfb\u52a0\u4e8e\uff1av7.4.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-7.x/cli/deploy.md",sourceDirName:"cli",slug:"/cli/deploy",permalink:"/zh/cli/deploy",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"7.x",frontMatter:{id:"deploy",title:"pnpm deploy"},sidebar:"version-7.x/docs",previous:{title:"pnpm init",permalink:"/zh/cli/init"},next:{title:"pnpm doctor",permalink:"/zh/cli/doctor"}},d={},u=[{value:"\u5df2\u90e8\u7f72\u9879\u76ee\u4e2d\u5305\u542b\u7684\u6587\u4ef6",id:"\u5df2\u90e8\u7f72\u9879\u76ee\u4e2d\u5305\u542b\u7684\u6587\u4ef6",level:2}],s={toc:u};function m(e){var n=e.components,r=(0,o.Z)(e,l);return(0,p.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av7.4.0"),(0,p.kt)("p",null,"\u4ece workspace \u90e8\u7f72\u5305\u3002"),(0,p.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --filter=<deployed project name> deploy <target directory>\n")),(0,p.kt)("p",null,"\u5982\u679c\u60a8\u5728\u90e8\u7f72\u4e4b\u524d\u6784\u5efa\u8fc7\u9879\u76ee\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"--prod")," \u9009\u9879\u8df3\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u5b89\u88c5\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --filter=<\u90e8\u7f72\u7684\u9879\u76ee\u540d\u79f0> --prod deploy <\u76ee\u6807\u6587\u4ef6\u5939>\n")),(0,p.kt)("p",null,"\u5728 docker \u6620\u50cf\u4e2d\u7684\u7528\u6cd5\u3002 \u5728\u4f60\u7684 monorepo \u4e2d\u6784\u5efa\u5b8c\u6240\u6709\u5185\u5bb9\u540e\uff0c\u5728\u7b2c\u4e8c\u4e2a\u955c\u50cf\u4e2d\u6267\u884c\u6b64\u64cd\u4f5c\uff0c\u8be5\u955c\u50cf\u4f7f\u7528\u4f60\u7684 monorepo \u57fa\u7840\u955c\u50cf\u4f5c\u4e3a\u6784\u5efa\u4e0a\u4e0b\u6587\u6216\u5728\u989d\u5916\u7684\u6784\u5efa\u9636\u6bb5\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# syntax=docker/dockerfile:1.4\n\nFROM workspace as pruned\nRUN pnpm --filter <your package name> --prod deploy pruned\n\nFROM node:18-alpine\nWORKDIR /app\n\nENV NODE_ENV=production\n\nCOPY --from=pruned /app/pruned .\n\nENTRYPOINT ["node", "index.js"]\n')),(0,p.kt)("h2",{id:"\u5df2\u90e8\u7f72\u9879\u76ee\u4e2d\u5305\u542b\u7684\u6587\u4ef6"},"\u5df2\u90e8\u7f72\u9879\u76ee\u4e2d\u5305\u542b\u7684\u6587\u4ef6"),(0,p.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u90e8\u7f72\u671f\u95f4\u4f1a\u590d\u5236\u9879\u76ee\u7684\u6240\u6709\u6587\u4ef6\u3002 \u9879\u76ee\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u53ef\u80fd\u5305\u542b\u4e00\u4e2a\u201cfiles\u201d\u5b57\u6bb5\u6765\u5217\u51fa\u5e94\u8be5\u590d\u5236\u7684\u6587\u4ef6\u548c\u76ee\u5f55\u3002"))}m.isMDXComponent=!0}}]);