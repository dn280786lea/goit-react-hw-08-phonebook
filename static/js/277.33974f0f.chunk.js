"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[277],{277:function(e,t,n){n.r(t),n.d(t,{Contacts:function(){return b},default:function(){return N}});var a=n(4420),r=n(1620),s=n(3553),c=function(e){return e.contacts.contacts},i=function(e){return e.filter.filter},o=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.error},u=((0,s.P1)([c,i],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),n(184)),m=function(){var e=(0,a.I0)(),t=(0,a.v9)(i);return(0,u.jsxs)("div",{className:"filter",children:[(0,u.jsx)("label",{className:"filter-contact",children:"Find contacts by name "}),(0,u.jsx)("input",{type:"text",value:t,onChange:function(t){e((0,r.b)(t.target.value))},placeholder:"Enter by name",className:"input"})]})},d=n(2791),f=n(2561),h=function(){var e=(0,a.I0)(),t=(0,a.v9)(c);return(0,u.jsxs)("div",{className:"phonebook-form",children:[(0,u.jsx)("h1",{className:"phonebook-title",children:"Phonebook"}),(0,u.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a={name:n.target.elements.name.value,number:n.target.elements.number.value};(Array.isArray(t)?t.find((function(e){return e.name.toLowerCase()===a.name.toLowerCase().trim()})):null)?alert("".concat(a.name," is already in contacts")):(e((0,f.uK)(a)),n.target.reset())},className:"form-container",children:[(0,u.jsxs)("div",{className:"form-group",children:[(0,u.jsx)("label",{className:"form-title-cont",htmlFor:"name",children:"Name:"}),(0,u.jsx)("input",{className:"input-contact",type:"text",name:"name",required:!0})]}),(0,u.jsxs)("div",{className:"form-group",children:[(0,u.jsx)("label",{className:"form-title-cont",htmlFor:"number",children:"Number:"}),(0,u.jsx)("input",{type:"text",name:"number",required:!0,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Please enter a valid number",className:"input-contact"})]}),(0,u.jsx)("button",{className:"namebtn",type:"submit",children:"Add contact"})]})]})},j=n(3157),p=n(2784),x=function(e){var t=e.name,n=e.number,r=e.id,s=(0,a.I0)();return(0,u.jsxs)("div",{className:"contact-item",children:[(0,u.jsxs)(p.Z,{direction:"row",spacing:2,children:[(0,u.jsx)(j.Z,{alt:"{name}",src:"/static/images/avatar/1.jpg"}),(0,u.jsx)(j.Z,{alt:"{name}",src:"/static/images/avatar/2.jpg"}),(0,u.jsx)(j.Z,{alt:"{name}r",src:"/static/images/avatar/3.jpg"})]}),(0,u.jsxs)("span",{className:"item",children:[t," "]}),(0,u.jsxs)("span",{className:"item",children:[n," "]}),(0,u.jsx)("button",{className:"deletebtn",type:"button",onClick:function(){return s((0,f.GK)(r))},children:"Delete"})]},r)},v=function(){var e=(0,a.v9)(c),t=(0,a.v9)(i),n=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase().trim())}));return(0,u.jsx)("div",{className:"contactlist-list",children:n.map((function(e){var t=e.name,n=e.phone,a=e.id;return(0,u.jsx)(x,{name:t,id:a,number:n},a)}))})},b=function(){var e=(0,a.I0)(),t=(0,a.v9)(o),n=(0,a.v9)(l);return(0,d.useEffect)((function(){e((0,f.yF)())}),[e]),(0,u.jsxs)("div",{children:[(0,u.jsx)(h,{}),(0,u.jsx)("h2",{className:"contact-contacts",children:"Contacts"}),(0,u.jsx)(m,{}),(0,u.jsx)(v,{}),t&&!n&&(0,u.jsx)("b",{children:"Request in progress..."})]})},N=b}}]);
//# sourceMappingURL=277.33974f0f.chunk.js.map