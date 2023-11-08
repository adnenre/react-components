"use strict";(self.webpackChunknew=self.webpackChunknew||[]).push([[196,889],{6605:function(n,e,o){o.d(e,{CM:function(){return g},Dx:function(){return f},bf:function(){return p},kr:function(){return x},yN:function(){return m}});var r,t,c,i,l,s=o(168),a=o(5867),d=o(1607),h=o(4271),u={primary:"\n      background:".concat(d.Z.color.$primary,";\n      color:white !important; \n    ")},f=a.ZP.h5(r||(r=(0,s.Z)(["\n  font-size: 1.5rem;\n  text-align: center;\n  ","\n"])),(function(n){return(0,h.$s)("color",n)})),x=a.ZP.div(t||(t=(0,s.Z)(["\n  background: white;\n  box-shadow: 0 0 20px 1px #bec0c2;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n"]))),g=a.ZP.div(c||(c=(0,s.Z)(["\n  border-bottom: "," ",";\n  padding: 0.5rem 0;\n  ",";\n  min-height: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),d.Z.border.thin,d.Z.color.$gray2,(function(){return u.primary})),p=a.ZP.div(i||(i=(0,s.Z)(["\n  padding: 2rem;\n  display: ",";\n  flex-direction: ",";\n  flex-wrap: wrap;\n"])),(function(n){return n.$flex?"flex":"block"}),(function(n){var e=n.$flex,o=n.$flexColumn;return e?"row":o?"column":"none"})),m=a.ZP.div(l||(l=(0,s.Z)(["\n  padding: 0.5rem 1rem;\n  border-top: "," ",";\n  display: ",";\n  flex-direction: ",";\n  flex-wrap: wrap;\n  justify-content: ",";\n  overflow: auto;\n  text-align: left;\n"])),d.Z.border.thin,d.Z.color.$gray2,(function(n){n.flex;return"flex"}),(function(n){var e=n.$flex;n.$flexColumn;return e?"row":"column"}),(function(n){var e=n.$center,o=n.$spaceBetween;return e?"center":o?"space-between":"left"}))},4868:function(n,e,o){o(2791);var r=o(6605),t=o(184);e.Z=function(n){var e=n.title,o=n.content,c=n.footer;return(0,t.jsxs)(r.kr,{children:[(0,t.jsx)(r.CM,{children:(0,t.jsx)(r.Dx,{children:e})}),(0,t.jsx)(r.bf,{children:o}),(0,t.jsx)(r.yN,{children:c})]})}},8750:function(n,e,o){o.r(e),o.d(e,{default:function(){return O}});var r,t,c,i,l=o(2791),s=(o(3588),o(7862),o(5539),o(1293),o(4868)),a=o(1413),d=o(9439),h=o(4925),u=o(168),f=o(5867),x=o(1607),g=o(4271),p=f.ZP.label(r||(r=(0,u.Z)(["\n  display: flex;\n  min-width: 50px;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  > input {\n    &:checked + .slider {\n      ",";\n    }\n\n    &:checked + .slider:before {\n      transform: translateX(20px);\n    }\n  }\n"])),(function(n){return(0,g.$s)("background",n)})),m=f.ZP.span(t||(t=(0,u.Z)(["\n  font-size: 0.75rem;\n  margin-right: 10px;\n  color: ",";\n"])),x.Z.color.$darkBlue10),w=f.ZP.input(c||(c=(0,u.Z)(["\n  display: none;\n"]))),b=f.ZP.span(i||(i=(0,u.Z)(["\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n  background-color: #ccc;\n  border-radius: 20px;\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    left: 3px;\n    bottom: 3px;\n    background-color: white;\n    border-radius: 50%;\n    transition: 0.2s;\n  }\n"]))),$=o(184),C=["label","labelOn","labelOff","onChange","checked"],Z=function(n){var e=n.label,o=n.labelOn,r=n.labelOff,t=n.onChange,c=n.checked,i=(0,h.Z)(n,C),s=(0,l.useState)(c),u=(0,d.Z)(s,2),f=u[0],x=u[1];return(0,$.jsxs)(p,(0,a.Z)((0,a.Z)({},i),{},{children:[e?(0,$.jsx)(m,{children:e}):f?(0,$.jsx)(m,{children:o}):(0,$.jsx)(m,{children:r}),(0,$.jsx)(w,{type:"checkbox",checked:f,onChange:function(){x(!f),t()}}),(0,$.jsx)(b,{className:"slider",$isChecked:f})]}))};Z.defaultProps={checked:!1,labelOn:"On",labelOff:"Off"};var j=Z,k=o(5718),y=o(6014),v=o(2837),P=k.Z.pages,O=function(){return(0,$.jsx)(s.Z,{title:P.switch.page.title,content:(0,$.jsx)(y.W2,{children:(0,$.jsxs)(y.X2,{children:[(0,$.jsx)(y.JX,{$md:"2",children:(0,$.jsx)(j,{checked:!0,$primary:!0,onChange:function(){return console.log("switched")}})}),(0,$.jsx)(y.JX,{$md:"2",children:(0,$.jsx)(j,{$secondary:!0,onChange:function(){return console.log("switched")}})}),(0,$.jsx)(y.JX,{$md:"2",children:(0,$.jsx)(j,{$lime10:!0,onChange:function(){return console.log("switched")}})}),(0,$.jsx)(y.JX,{$md:"2",children:(0,$.jsx)(j,{$danger:!0,onChange:function(){return console.log("switched")}})}),(0,$.jsx)(y.JX,{$md:"2",children:(0,$.jsx)(j,{$warning:!0,onChange:function(){return console.log("switched")}})}),(0,$.jsx)(y.JX,{$md:"2",children:(0,$.jsx)(j,{$black:!0,onChange:function(){return console.log("switched")}})})]})}),footer:(0,$.jsx)(v.default,{code:"\n\n\n        <Container>\n          <Row>\n            <Col $md=\"2\">\n              <Switch\n                checked\n                $primary\n                \n                onChange={() => console.log('switched')}\n              />\n            </Col>\n            <Col $md=\"2\">\n              <Switch\n                $secondary\n                \n                onChange={() => console.log('switched')}\n              />\n            </Col>\n            <Col $md=\"2\">\n              <Switch\n                $lime10\n                \n                onChange={() => console.log('switched')}\n              />\n            </Col>\n\n            <Col $md=\"2\">\n              <Switch\n                $danger\n                \n                onChange={() => console.log('switched')}\n              />\n            </Col>\n            <Col $md=\"2\">\n              <Switch\n                $warning\n                \n                onChange={() => console.log('switched')}\n              />\n            </Col>\n            <Col $md=\"2\">\n              <Switch\n                $black\n                \n                onChange={() => console.log('switched')}\n              />\n            </Col>\n          </Row>\n        </Container>\n \n        "})})}}}]);
//# sourceMappingURL=196.f94710af.chunk.js.map