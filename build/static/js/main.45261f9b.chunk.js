(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t.n(o),r=t(14),a=t.n(r),s=t(3),i=t(4),u=t.n(i),l="/api/persons",d=function(){return u.a.get(l)},h=function(e){return u.a.post(l,e)},b=function(e,n){return u.a.put("".concat(l,"/").concat(e),n)},j=function(e){return u.a.delete("".concat(l,"/").concat(e))},f=t(0),m=function(e){var n=e.searchTerm,t=e.handleSearchChange;return Object(f.jsxs)("div",{children:["filter shown with"," ",Object(f.jsx)("input",{value:n,onChange:t})]})},O=function(e){var n=e.persons,t=e.setPersons,o=e.newName,c=e.setNewName,r=e.newNumber,a=e.setNewNumber,s=e.handleNameChange,i=e.handleNumberChange,u=e.setMessage,l=e.setNotificationColor;return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();for(var s=[],i=0;i<n.length;i++)s.push(n[i].name);s.includes(o)?(window.confirm("".concat(o," is already in the phonebook. Would you like to replace the old number with the new one?"))&&d().then((function(e){return e.data.find((function(e){return e.name===o}))})).then((function(e){var n={name:e.name,number:r};b(e.id,n).then((function(e){console.log(e),d().then((function(e){t(e.data)}))}))})).catch((function(){l({color:"red"}),u("Information of ".concat(o," has alredy been removed from the server.\n").concat(o," will now be removed from view.")),c(""),a(""),setTimeout((function(){u(null),d().then((function(e){t(e.data)}))}),5e3)})),c(""),a("")):h({name:o,number:r}).then((function(e){console.log(e),t(n.concat(e.data)),u("Added ".concat(o)),c(""),a(""),setTimeout((function(){return u(null)}),5e3)}))},children:[Object(f.jsxs)("div",{children:["name: ",Object(f.jsx)("input",{value:o,onChange:s})]}),Object(f.jsxs)("div",{children:["phone number:",Object(f.jsx)("input",{value:r,onChange:i})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"add"})})]})})},v=function(e){var n=e.handlePersonDeletion,t=e.id;return Object(f.jsx)("button",{onClick:function(){n(t)},children:"delete"})},w=function(e){var n=e.persons,t=e.newSearch,o=e.handlePersonDeletion,c=e.setPersons;return Object(f.jsx)("div",{children:n.filter((function(e){return""===t||e.name.toLowerCase().includes(t.toLowerCase())?e:void 0})).map((function(e){return Object(f.jsxs)("p",{children:[e.name," ",e.number,Object(f.jsx)(v,{handlePersonDeletion:o,id:e.id,setPersons:c})]},e.name)}))})},p=function(e){var n=e.message,t=e.color;return null===n?null:Object(f.jsx)("div",{className:"notification",style:t,children:n})},g=function(){var e=Object(o.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(""),a=Object(s.a)(r,2),i=a[0],u=a[1],l=Object(o.useState)(""),h=Object(s.a)(l,2),b=h[0],v=h[1],g=Object(o.useState)(""),x=Object(s.a)(g,2),N=x[0],C=x[1],S=Object(o.useState)(null),P=Object(s.a)(S,2),y=P[0],k=P[1],D=Object(o.useState)({color:"green"}),T=Object(s.a)(D,2),I=T[0],M=T[1];return Object(o.useEffect)((function(){d().then((function(e){console.log(e.data),c(e.data)}))}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(p,{message:y,color:I}),Object(f.jsx)(m,{searchTerm:N,handleSearchChange:function(e){C(e.target.value)}}),Object(f.jsx)("h2",{children:"Add a new person"}),Object(f.jsx)(O,{persons:t,setPersons:c,newName:i,setNewName:u,newNumber:b,setNewNumber:v,handleNameChange:function(e){u(e.target.value)},handleNumberChange:function(e){v(e.target.value)},setMessage:k,setNotificationColor:M}),Object(f.jsx)("h2",{children:"Numbers"}),Object(f.jsx)(w,{persons:t,setPersons:c,setNewName:u,setNewNumber:v,newSearch:N,handlePersonDeletion:function(e){var n=t.find((function(n){return n.id===e})).name;window.confirm("Do you really want to delete ".concat(n,"?"))&&j(e).then((function(e){console.log(e),d().then((function(e){console.log(e.data),c(e.data)}))})).catch((function(){M({color:"red"}),k("Information of ".concat(n," has alredy been removed from the server. \n").concat(n," will now be removed from view.")),u(""),v(""),setTimeout((function(){k(null),d().then((function(e){c(e.data)}))}),5e3)}))}})]})};t(38);a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.45261f9b.chunk.js.map