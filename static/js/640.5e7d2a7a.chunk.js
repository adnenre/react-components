"use strict";(self.webpackChunknew=self.webpackChunknew||[]).push([[640,889],{275:function(e,n,t){t(2791);var r=t(184);n.Z=function(){return(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:(0,r.jsx)("path",{d:"M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"})})}},6605:function(e,n,t){t.d(n,{CM:function(){return x},Dx:function(){return u},bf:function(){return $},kr:function(){return g},yN:function(){return Z}});var r,i,l,a,s,c=t(168),o=t(5867),d=t(1607),p=t(4271),f={primary:"\n      background:".concat(d.Z.color.$primary,";\n      color:white !important; \n    ")},u=o.ZP.h5(r||(r=(0,c.Z)(["\n  font-size: 1.5rem;\n  text-align: center;\n  ","\n"])),(function(e){return(0,p.$s)("color",e)})),g=o.ZP.div(i||(i=(0,c.Z)(["\n  background: white;\n  box-shadow: 0 0 20px 1px #bec0c2;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n"]))),x=o.ZP.div(l||(l=(0,c.Z)(["\n  border-bottom: "," ",";\n  padding: 0.5rem 0;\n  ",";\n  min-height: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),d.Z.border.thin,d.Z.color.$gray2,(function(){return f.primary})),$=o.ZP.div(a||(a=(0,c.Z)(["\n  padding: 2rem;\n  display: ",";\n  flex-direction: ",";\n  flex-wrap: wrap;\n"])),(function(e){return e.$flex?"flex":"block"}),(function(e){var n=e.$flex,t=e.$flexColumn;return n?"row":t?"column":"none"})),Z=o.ZP.div(s||(s=(0,c.Z)(["\n  padding: 0.5rem 1rem;\n  border-top: "," ",";\n  display: ",";\n  flex-direction: ",";\n  flex-wrap: wrap;\n  justify-content: ",";\n  overflow: auto;\n  text-align: left;\n"])),d.Z.border.thin,d.Z.color.$gray2,(function(e){e.flex;return"flex"}),(function(e){var n=e.$flex;e.$flexColumn;return n?"row":"column"}),(function(e){var n=e.$center,t=e.$spaceBetween;return n?"center":t?"space-between":"left"}))},4868:function(e,n,t){t(2791);var r=t(6605),i=t(184);n.Z=function(e){var n=e.title,t=e.content,l=e.footer;return(0,i.jsxs)(r.kr,{children:[(0,i.jsx)(r.CM,{children:(0,i.jsx)(r.Dx,{children:n})}),(0,i.jsx)(r.bf,{children:t}),(0,i.jsx)(r.yN,{children:l})]})}},951:function(e,n,t){t.r(n),t.d(n,{default:function(){return W}});var r,i,l,a,s=t(2791),c=t(4868),o=t(1413),d=t(9439),p=t(4925),f=t(168),u=t(5867),g=t(1607),x=t(4271),$=g.Z.components.alert["border-left"],Z=u.ZP.div(r||(r=(0,f.Z)(["\n  display: ",";\n  align-items: center;\n  width: 100%;\n  margin: 0.25rem 0;\n  padding: 0.5em;\n  font-size: 1rem;\n  background: ",";\n  ","\n  ","\n  border-left: ",";\n\n  display: flex;\n  justify-content: space-between;\n"])),(function(e){return e.$isOpen?"block":"none"}),g.Z.color.$black,(function(e){return(0,x.$s)("border-radius",e)}),(function(e){return(0,x.$s)("color",e)}),(function(e){var n=e.$primary,t=e.$info,r=e.$danger,i=e.$warning,l=e.$success,a=e.$black;return n?$+g.Z.color.$primary:t?$+g.Z.color.$info:r?$+g.Z.color.$danger:i?$+g.Z.color.$warning:l?$+g.Z.color.$success:a?$+g.Z.color.$black:$+g.Z.color.$primary})),h=u.ZP.div(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),m=u.ZP.h3(l||(l=(0,f.Z)(["\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 1rem;\n\n  text-align: left;\n  color: white;\n"]))),j=u.ZP.h5(a||(a=(0,f.Z)(["\n  font-size: 0.8rem;\n  color: white;\n  text-align: left;\n"]))),w=t(275),b=t(1127),k=t(184),v=["title","description","isOpen"],y=function(e){var n=e.title,t=e.description,r=e.isOpen,i=(0,p.Z)(e,v),l=(0,s.useState)(r),a=(0,d.Z)(l,2),c=a[0],f=a[1];return c?(0,k.jsxs)(Z,(0,o.Z)((0,o.Z)({$isOpen:c},i),{},{children:[(0,k.jsxs)(h,{children:[(0,k.jsx)(m,{"data-testid":"alert-title",children:n}),(0,k.jsx)(j,{"data-testid":"alert-description",children:t})]}),(0,k.jsx)(b.Z,{$gray1:!0,role:"closeButton",icon:(0,k.jsx)(w.Z,{}),onClick:function(){f(!1)}})]})):null};y.defaultProps={isOpen:!0};var P=y,A=t(5718),C=t(2837),_=t(6014),W=function(){return(0,k.jsxs)(_.W2,{children:[(0,k.jsx)(c.Z,{title:A.Z.pages.alert.page.title,content:(0,k.jsx)(_.W2,{children:(0,k.jsxs)(_.X2,{children:[(0,k.jsx)(P,{$info:!0,title:"Info",description:A.Z.pages.alert.desc}),(0,k.jsx)(P,{$success:!0,title:"Success",description:A.Z.pages.alert.desc}),(0,k.jsx)(P,{$danger:!0,title:"Danger",description:A.Z.pages.alert.desc}),(0,k.jsx)(P,{$warning:!0,title:"Warning",description:A.Z.pages.alert.desc})]})}),footer:(0,k.jsx)(C.default,{code:"\n            <Alert $info    title='Info'     description={fake_data.pages.alert.desc} />\n            <Alert $success title='Success'  description={fake_data.pages.alert.desc} />\n            <Alert $danger  title='Danger'   description={fake_data.pages.alert.desc} />\n            <Alert $warning title='Warning'  description={fake_data.pages.alert.desc} />\n          "})}),(0,k.jsx)(c.Z,{title:A.Z.pages.alert.page.title,content:(0,k.jsx)(_.W2,{children:(0,k.jsxs)(_.X2,{children:[(0,k.jsx)(P,{$pill:!0,$info:!0,title:"Info",description:A.Z.pages.alert.desc}),(0,k.jsx)(P,{$pill:!0,$success:!0,title:"Success",description:A.Z.pages.alert.desc}),(0,k.jsx)(P,{$pill:!0,$danger:!0,title:"Danger",description:A.Z.pages.alert.desc}),(0,k.jsx)(P,{$pill:!0,$warning:!0,title:"Warning",description:A.Z.pages.alert.desc})]})}),footer:(0,k.jsx)(C.default,{code:"\n\n            <Alert $pill $info    title='Info'     description={fake_data.pages.alert.desc} />\n            <Alert $pill $success title='Success'  description={fake_data.pages.alert.desc} />\n            <Alert $pill $danger  title='Danger'   description={fake_data.pages.alert.desc} />\n            <Alert $pill $warning title='Warning'  description={fake_data.pages.alert.desc} />\n          "})})]})}}}]);
//# sourceMappingURL=640.5e7d2a7a.chunk.js.map