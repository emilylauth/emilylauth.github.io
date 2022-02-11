(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},,,,,,,,,,,,,,,function(e,t,c){},,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var i=c(9),n=c(3),a=c(1),s=c(0),l=Object(a.createContext)(),r=function(e){var t=e.children,c=Object(a.useState)("light"),i=Object(n.a)(c,2),r=i[0],o=i[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o=(c(14),"https://github.com/emilylauth/emilylauth.github.io.git"),j="EL",h={name:"Emily Lauth",role:"Full Stack Developer",description:"Welcome to my portfolio. I am a development student based in Salt Lake City, UT. Previously, I have been a photographer and photo editor in Chicago for 5 years. I received a Bachelor of Science degree in 2016 from Illinois State University, with focus in Interactive Media.",social:{linkedin:"https://www.linkedin.com/in/emily-lauth/",github:"https://github.com/emilylauth"}},u=[{name:"BadBank",description:"Front end banking application",stack:["React","JavaScript","AWS"],sourceCode:"https://github.com/emilylauth/BAD-BANK-APP",livePreview:"https://emily-lauth-banking-application.s3.amazonaws.com/index.html#/login/"},{name:"Movie Tickets",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["JavaScript","React","CSS"],sourceCode:"https://github.com/emilylauth/Movie-Tickets",livePreview:"https://emilylauth.github.io/Movie-Tickets/"},{name:"HTML Portfolio",description:"First major project created for MIT xPRO. This was developed as my inital portfolio.",stack:["HTML","CSS"],sourceCode:"https://github.com/emilylauth/HTML-Portfolio",livePreview:"https://emilylauth.github.io/HTML-Portfolio/"},{name:"Tic Tac Toe",description:"Tic Tac Toe game built to practice synchronizing state between parent and child components.",stack:["JavaScript","React","CSS"],sourceCode:"https://github.com/emilylauth/Tic-Tac-Toe",livePreview:"https://emilylauth.github.io/Tic-Tac-Toe/"}],b=["React","HTML","CSS","JavaScript","Git","GraphQL"],m="elauth14@gmail.com",d=c(17),O=c.n(d),p=c(15),x=c.n(p),f=c(19),v=c.n(f),k=c(18),g=c.n(k),N=(c(29),function(){var e=Object(a.useContext)(l),t=Object(n.a)(e,1)[0],c=t.themeName,i=t.toggleTheme,r=Object(a.useState)(!1),o=Object(n.a)(r,2),j=o[0],h=o[1],d=function(){return h(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[u.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,b.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,m?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===c?Object(s.jsx)(x.a,{}):Object(s.jsx)(O.a,{})}),Object(s.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(g.a,{}):Object(s.jsx)(v.a,{})})]})}),_=(c(33),function(){var e=o,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(N,{})]})}),y=c(11),T=c.n(y),w=c(20),S=c.n(w),C=(c(34),function(){var e=h.name,t=h.role,c=h.description,i=h.resume,n=h.social;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:c&&c}),Object(s.jsxs)("div",{className:"about__contact center",children:[i&&Object(s.jsx)("a",{href:i,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),n&&Object(s.jsxs)(s.Fragment,{children:[n.github&&Object(s.jsx)("a",{href:n.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(T.a,{})}),n.linkedin&&Object(s.jsx)("a",{href:n.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(S.a,{})})]})]})]})}),P=c(7),L=c.n(P),M=c(21),E=c.n(M),I=(c(36),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},L()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(T.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(E.a,{})})]})}),A=(c(37),function(){return u.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:u.map((function(e){return Object(s.jsx)(I,{project:e},L()())}))})]}):null}),B=(c(38),function(){return b.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:b.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},L()())}))})]}):null}),H=c(22),J=c.n(H),R=(c(39),function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?i(!0):i(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(J.a,{fontSize:"large"})})}):null}),F=(c(40),function(){return m?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(m),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),z=(c(41),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/emilylauth/emilylauth.github.io",className:"link footer__link",children:"Check out the repository for this portfolio"})})}),q=function(){var e=Object(a.useContext)(l),t=Object(n.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(_,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(C,{}),Object(s.jsx)(A,{}),Object(s.jsx)(B,{}),Object(s.jsx)(F,{})]}),Object(s.jsx)(R,{}),Object(s.jsx)(z,{})]})};c(42);Object(i.render)(Object(s.jsx)(r,{children:Object(s.jsx)(q,{})}),document.getElementById("root"))}],[[44,1,2]]]);
//# sourceMappingURL=main.7348e52f.chunk.js.map