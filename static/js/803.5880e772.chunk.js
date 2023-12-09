"use strict";(self.webpackChunknew=self.webpackChunknew||[]).push([[803,889],{6605:function(n,t,e){e.d(t,{CM:function(){return p},Dx:function(){return m},bf:function(){return x},kr:function(){return h},yN:function(){return Z}});var i,r,o,c,s,a=e(168),d=e(5867),l=e(1607),u=e(4271),f={primary:"\n      background:".concat(l.Z.color.$primary,";\n      color:white !important; \n    ")},m=d.ZP.h5(i||(i=(0,a.Z)(["\n  font-size: 1.5rem;\n  text-align: center;\n  ","\n"])),(function(n){return(0,u.$s)("color",n)})),h=d.ZP.div(r||(r=(0,a.Z)(["\n  background: white;\n  box-shadow: 0 0 20px 1px #bec0c2;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n"]))),p=d.ZP.div(o||(o=(0,a.Z)(["\n  border-bottom: "," ",";\n  padding: 0.5rem 0;\n  ",";\n  min-height: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),l.Z.border.thin,l.Z.color.$gray2,(function(){return f.primary})),x=d.ZP.div(c||(c=(0,a.Z)(["\n  padding: 2rem;\n  display: ",";\n  flex-direction: ",";\n  flex-wrap: wrap;\n"])),(function(n){return n.$flex?"flex":"block"}),(function(n){var t=n.$flex,e=n.$flexColumn;return t?"row":e?"column":"none"})),Z=d.ZP.div(s||(s=(0,a.Z)(["\n  padding: 0.5rem 1rem;\n  border-top: "," ",";\n  display: ",";\n  flex-direction: ",";\n  flex-wrap: wrap;\n  justify-content: ",";\n  overflow: auto;\n  text-align: left;\n"])),l.Z.border.thin,l.Z.color.$gray2,(function(n){n.flex;return"flex"}),(function(n){var t=n.$flex;n.$flexColumn;return t?"row":"column"}),(function(n){var t=n.$center,e=n.$spaceBetween;return t?"center":e?"space-between":"left"}))},4868:function(n,t,e){e(2791);var i=e(6605),r=e(184);t.Z=function(n){var t=n.title,e=n.content,o=n.footer;return(0,r.jsxs)(i.kr,{children:[(0,r.jsx)(i.CM,{children:(0,r.jsx)(i.Dx,{children:t})}),(0,r.jsx)(i.bf,{children:e}),(0,r.jsx)(i.yN,{children:o})]})}},7855:function(n,t,e){var i=e(2791);t.Z=function(n,t){(0,i.useEffect)((function(){var e=function(e){var i=n.current;i&&!i.contains(e.target)&&t(e)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.addEventListener("mousedown",e),document.addEventListener("touchstart",e)}}),[n,t])}},478:function(n,t,e){e.r(t),e.d(t,{default:function(){return A}});var i,r,o,c,s=e(2791),a=e(2837),d=e(4868),l=e(9439),u=e(1413),f=e(4925),m=e(184),h=function(n){var t={transform:n.$isOpen?"rotatez(90deg)":"rotatez(0deg)"};return(0,m.jsx)("svg",{style:t,focusable:"false",preserveAspectRatio:"xMidYMid meet",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true",fill:"currentColor",children:(0,m.jsx)("path",{d:"M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"})})},p=e(7855),x=e(168),Z=e(5867),g=e(1607),v=e(4271),w=Z.ZP.div(i||(i=(0,x.Z)(["\n  width: 100%;\n"]))),y=Z.ZP.h5(r||(r=(0,x.Z)(["\n  position: relative;\n  z-index: 2;\n  width: 100%;\n\n  display: flex;\n  justify-content: space-between;\n\n  padding: 1rem;\n  font-weight: 500;\n  font-size: 1rem;\n  cursor: pointer;\n"]))),j=Z.ZP.div(o||(o=(0,x.Z)(["\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  background: ",";\n  text-align: left;\n  display: block;\n  padding: 1.5rem 1rem;\n  text-align: left;\n\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: 300;\n  line-height: 1.6;\n  opacity: 1;\n  text-transform: none;\n\n  text-decoration: none;\n  color: ",";\n  letter-spacing: 1px;\n  animation-name: slideaway;\n  animation-duration: 300ms;\n  animation-timing-function: ease-in-out;\n  @keyframes slideaway {\n    0% {\n      height: 0;\n      transform: translateY(-40px);\n      opacity: 0;\n    }\n    100% {\n      height: 100%;\n      transform: translateY(0px);\n      opacity: 1;\n    }\n  }\n"])),g.Z.color.$white,g.Z.color.$gray),b=Z.ZP.div(c||(c=(0,x.Z)(["\n  ","\n"])),v.tR),$=["children"],k=["id","title","content","isOpen","toggleAccordion"],O=["items"],S=function(n){var t=n.children,e=(0,f.Z)(n,$);return(0,m.jsx)(y,(0,u.Z)((0,u.Z)({},e),{},{children:t}))},P=function(n){var t=n.id,e=n.title,i=n.content,r=n.isOpen,o=n.toggleAccordion,c=(0,f.Z)(n,k);return(0,m.jsxs)(w,(0,u.Z)((0,u.Z)({},c),{},{children:[(0,m.jsxs)(S,{"data-testid":"accordionItem-".concat(t),onClick:o,$isOpen:r,children:[e,(0,m.jsx)(h,{$isOpen:r})]}),r&&(0,m.jsx)(j,{"data-testid":"accordionContent-".concat(t),children:(0,m.jsx)("p",{children:i})})]}))},C=function(n){var t=n.items,e=(0,f.Z)(n,O),i=(0,s.useRef)(null),r=t.map((function(n){return(0,u.Z)((0,u.Z)({},n),{},{isOpen:!1})})),o=(0,s.useState)(r),c=(0,l.Z)(o,2),a=c[0],d=c[1],h=function(n){return function(t){t.preventDefault();var e=a.map((function(t,e){return e===n?(0,u.Z)((0,u.Z)({},t),{},{isOpen:!t.isOpen}):(0,u.Z)((0,u.Z)({},t),{},{isOpen:!1})}));d(e)}};return(0,p.Z)(i,(function(){return function(){var n=a.map((function(n){return(0,u.Z)((0,u.Z)({},n),{},{isOpen:!1})}));d(n)}()})),(0,m.jsx)(b,(0,u.Z)((0,u.Z)({ref:i},e),{},{children:a.map((function(n,t){return(0,m.jsx)(P,{id:t,title:n.title,content:n.content,isOpen:n.isOpen,toggleAccordion:h(t)},t)}))}))},z=e(5718),A=function(){var n=z.Z.pages.accordion;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d.Z,{title:n.page.title,content:(0,m.jsx)(C,{items:n.items}),footer:(0,m.jsx)(a.default,{code:"\n            const items = [\n              {\n                title: 'Section 1',\n                content: 'this is the first content ...',\n              },\n              {\n                title: 'Section 2',\n                content: 'this is the second content ...',\n              },\n              {\n                title: 'Section 3',\n                content: 'this is the third content ....',\n              },\n            ];\n\n            <Accordion items={items} />\n            "})}),(0,m.jsx)(d.Z,{title:n.page.title+" Primary",content:(0,m.jsx)(C,{$primary:!0,items:n.items}),footer:(0,m.jsx)(a.default,{code:"\n            const items = [\n              {\n                title: 'Section 1',\n                content: 'this is the first content ...',\n              },\n              {\n                title: 'Section 2',\n                content: 'this is the second content ...',\n              },\n              {\n                title: 'Section 3',\n                content: 'this is the third content ....',\n              },\n            ];\n\n            <Accordion $primary items={items} />\n            "})}),(0,m.jsx)(d.Z,{title:n.page.title+" Secondary",content:(0,m.jsx)(C,{$secondary:!0,items:n.items}),footer:(0,m.jsx)(a.default,{code:"\n            const items = [\n              {\n                title: 'Section 1',\n                content: 'this is the first content ...',\n              },\n              {\n                title: 'Section 2',\n                content: 'this is the second content ...',\n              },\n              {\n                title: 'Section 3',\n                content: 'this is the third content ....',\n              },\n            ];\n\n            <Accordion $secondary items={items} />\n            "})})]})}}}]);
//# sourceMappingURL=803.5880e772.chunk.js.map