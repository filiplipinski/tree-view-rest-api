(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(t,n,e){t.exports=e(37)},37:function(t,n,e){"use strict";e.r(n);var r=e(1),a=e.n(r),o=e(8),i=e.n(o),c=e(3),u=e(2),l={colors:{bgc:"#ddd",bgc_hover:"#ccc",title_bgc:"#283E4A",title:"#eee",h1:"#222",blue:"#0086ff",green:"#36BC50",red:"#EA4335"},font:{thin:300,regular:400,semi_bold:600,bold:700},media:{mobile:"@media (max-width: 1024px)"}};function s(){var t=Object(c.a)(["\n  min-height: 100vh;\n  background-color: ",";\n"]);return s=function(){return t},t}function d(){var t=Object(c.a)(["\n  html {\n    font-size: 62.5%;\n  }\n  body{\n    font-family: 'Montserrat';\n    font-size: 1.6rem;\n  }\n  \n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n"]);return d=function(){return t},t}var f=Object(u.b)(d()),p=u.c.div(s(),function(t){return t.theme.colors.white}),m=function(t){var n=t.children;return a.a.createElement(u.a,{theme:l},a.a.createElement(a.a.Fragment,null,a.a.createElement(f,null),a.a.createElement(p,null,n)))};function h(){var t=Object(c.a)(["\n  font-size: 3em;\n  font-weight: ",";\n  background-color: ",";\n  text-align: center;\n  padding: 2% 0;\n  color: ",";\n"]);return h=function(){return t},t}var b=u.c.h1(h(),function(t){return t.theme.font.bold},function(t){return t.theme.colors.title_bgc},function(t){return t.theme.colors.title}),g=e(5),v=e(9),x=e(10),O=e(12),j=e(11),E=e(13);function k(){var t=Object(c.a)(["\n  background-color: #eee;\n  border: 1px solid black;\n  border-radius: 6px;\n  display: inline-block;\n  min-width: 300px;\n  padding: 0 10px;\n  margin: 5vw 0 50px 5vw;\n"]);return k=function(){return t},t}var w=u.c.div(k()),y=e(14),C=e(22),S=e(4),_=e.n(S),z=e(6),F=function(){var t=Object(z.a)(_.a.mark(function t(n,e,r){var a,o;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:e,body:r?JSON.stringify(r):void 0,headers:{Authorization:"Basic ".concat(btoa("".concat("rest",":").concat("gBict?3J"))),"Content-Type":"application/json"}},t.next=3,fetch("https://cors-anywhere.herokuapp.com/http://dotnet.demos.i-sklep.pl/rest_api/shop_api/v1"+n,a).then(function(t){if("OK"===t.statusText)return t.json();throw Error("Error ".concat(t.status))}).then(function(t){return t}).catch(function(t){return alert("Failed to fetch. Check console."),console.log(t),[]});case 3:return o=t.sent,t.abrupt("return",o);case 5:case"end":return t.stop()}},t)}));return function(n,e,r){return t.apply(this,arguments)}}(),T={get:function(){var t=Object(z.a)(_.a.mark(function t(){return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F("/categories","GET").then(function(t){return 0!==t.length?t.data.categories:[]});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),put:function(){var t=Object(z.a)(_.a.mark(function t(n,e){var r;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={category:e},t.next=3,F("/categories/".concat(n),"PUT",r).then(function(t){return t.data.category});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t)}));return function(n,e){return t.apply(this,arguments)}}(),post:function(){var t=Object(z.a)(_.a.mark(function t(n){var e;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={category:n},t.next=3,F("/categories","POST",e).then(function(t){return t.data.category});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t)}));return function(n){return t.apply(this,arguments)}}(),delete:function(){var t=Object(z.a)(_.a.mark(function t(n){return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F("/categories/".concat(n),"DELETE").then(function(t){return t.success});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));return function(n){return t.apply(this,arguments)}}()},A=e(23);function V(){var t=Object(c.a)(["\n  color: ",";\n  margin-bottom: 10px;\n"]);return V=function(){return t},t}function D(){var t=Object(c.a)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  background-color: transparent;\n  border: none;\n  font-size: 25px;\n  height: 25px;\n  width: 25px;\n  color: ",";\n  cursor: pointer;\n  transition: .3s;\n\n  :hover{\n    transform: scale(1.2) rotate(180deg);\n  }\n"]);return D=function(){return t},t}function M(){var t=Object(c.a)(["\n  margin: 10px auto 0;\n  background-color: ",";\n  font-weight: ",";\n  border: none;\n  border-radius: 12px;\n  padding: 5px 10px;\n  color: ",";\n  transition: .3s;\n  cursor: pointer;\n\n  :hover{\n    color: ",";\n    background-color: ",";\n    box-shadow: 0 0 0px 1px inset ",";\n  }\n"]);return M=function(){return t},t}function B(){var t=Object(c.a)(["\n  font-family: 'Montserrat';\n  border: none;\n  display: block;\n  margin: 2px auto;\n  padding: 4px;\n  color: black;\n"]);return B=function(){return t},t}function J(){var t=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(calc( 100% + 15px ));\n  border-radius: 6px;\n  padding: 30px 10px 10px;\n  background-color: ",";\n"]);return J=function(){return t},t}var N=u.c.form(J(),function(t){return t.theme.colors.title_bgc}),P=u.c.input(B()),I=Object(u.c)(P)(M(),function(t){return t.theme.colors.title},function(t){return t.theme.font.semi_bold},function(t){return t.theme.colors.title_bgc},function(t){return t.theme.colors.title},function(t){return t.theme.colors.title_bgc},function(t){return t.theme.colors.title}),K=u.c.button(D(),function(t){return t.theme.colors.title}),U=u.c.p(V(),function(t){return t.theme.colors.title}),W=function(t){function n(){var t,e;Object(v.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(O.a)(this,(t=Object(j.a)(n)).call.apply(t,[this].concat(a)))).state={name:"",description:""},e.handleChange=function(t){e.setState(Object(C.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=e.state,n=t.name,r=t.description,a=e.props.single_cat,o=a.id,i=a.parent_id,c=a.ordering,u=a.name,l=a.description,s=e.props.biggestOrderingOfChilds+1;if("edit"===e.props.editOrAdd){var d={parent_id:i,name:n||u,description:r||l,ordering:c,is_visible:!0};""===n&&""===r&&alert("Podaj dane kt\xf3re chcesz nadpisa\u0107."),T.put(o,d).then(function(t){return e.props.updateState(t)})}else if("add"===e.props.editOrAdd){var f={parent_id:o,name:n,description:r,ordering:s,is_visible:!0};""===n?alert("Musisz poda\u0107 nazw\u0119 kategorii kt\xf3r\u0105 chcesz doda\u0107."):T.post(f).then(function(t){return e.props.addToState(t)})}else console.log("Error: Invalid props editOrAdd");e.props.closeForm()},e}return Object(E.a)(n,t),Object(x.a)(n,[{key:"render",value:function(){var t=this.state,n=t.name,e=t.description,r=this.props,o=r.single_cat,i=o.name,c=o.id,u=r.editOrAdd;return a.a.createElement(N,{onSubmit:this.handleSubmit},a.a.createElement(U,null,"edit"===u&&"Edycja kategorii: ".concat(i),"add"===u&&1!==c&&"Dodawanie podkategorii do: ".concat(i),1===c&&"Dodawanie g\u0142\xf3wnej kategorii: "),a.a.createElement(K,{onClick:this.props.closeForm}," ",a.a.createElement(A.a,null),"  "),a.a.createElement(P,{value:n,onChange:this.handleChange,name:"name",type:"text",placeholder:"Nazwa"}),a.a.createElement(P,{value:e,onChange:this.handleChange,name:"description",type:"text",placeholder:"Opis"}),a.a.createElement(I,{type:"submit",value:"Zatwierd\u017a"}))}}]),n}(r.Component);function Y(){var t=Object(c.a)(["\n  background-color: ",";\n  font-weight: ",";\n  border: none;\n  border-radius: 12px;\n  padding: 5px 10px;\n  color: ",";\n  transition: .3s;\n  cursor: pointer;\n\n  :hover{\n    color: ",";\n    background-color: ",";\n    box-shadow: 0 0 0px 1px inset ",";\n  }\n"]);return Y=function(){return t},t}function G(){var t=Object(c.a)(["\n  display: flex;\n  justify-content: space-around;\n"]);return G=function(){return t},t}function L(){var t=Object(c.a)(["\n  font-size: 20px;\n  text-decoration: underline;\n"]);return L=function(){return t},t}function Z(){var t=Object(c.a)(["\n  color: ",";\n  margin-bottom: 10px;\n  text-align: center;\n"]);return Z=function(){return t},t}function $(){var t=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(calc( 100% + 15px ));\n  border-radius: 6px;\n  padding: 10px;\n  background-color: ",";\n"]);return $=function(){return t},t}var q=u.c.div($(),function(t){return t.theme.colors.title_bgc}),H=u.c.p(Z(),function(t){return t.theme.colors.title}),Q=u.c.span(L()),R=u.c.div(G()),X=u.c.button(Y(),function(t){return t.theme.colors.title},function(t){return t.theme.font.semi_bold},function(t){return t.theme.colors.title_bgc},function(t){return t.theme.colors.title},function(t){return t.theme.colors.title_bgc},function(t){return t.theme.colors.title}),tt=function(t){var n=t.idToDelete,e=t.catName,r=t.deleteCatFromState,o=t.closeConfirmation;return a.a.createElement(q,null,a.a.createElement(H,null,"Czy na pewno chcesz usun\u0105\u0107 kategorie o nazwie: ",a.a.createElement(Q,null,e),"?"),a.a.createElement(R,null,a.a.createElement(X,{onClick:function(){r(n),o()}},"Usu\u0144"),a.a.createElement(X,{onClick:function(){return o()}},"Anuluj")))},nt=e(18),et=e(7);function rt(){var t=Object(c.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  border-top: 1px solid black;   \n\n  :first-child {\n    border: none;\n  }\n"]);return rt=function(){return t},t}function at(){var t=Object(c.a)(["\n  font-size: 1.8em;\n  line-height: 1.9em;\n  font-weight: ","; \n  border: none;\n"]);return at=function(){return t},t}function ot(){var t=Object(c.a)(["\n  :hover{\n    color:  ",";\n  }\n"]);return ot=function(){return t},t}function it(){var t=Object(c.a)(["\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n\n  :hover{\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n"]);return it=function(){return t},t}function ct(){var t=Object(c.a)(["\n  :hover{\n    color:  ",";\n  }\n"]);return ct=function(){return t},t}function ut(){var t=Object(c.a)(["\n  font-size: 25px;\n  margin-left: 10px;\n  cursor: pointer;\n\n  :hover{\n    color:  ",";\n    transform: scale(1.2);    \n  }\n"]);return ut=function(){return t},t}function lt(){var t=Object(c.a)(["\n  flex-grow: 1;\n  padding-left: ",";  \n  cursor: pointer;\n  border-radius: 6px;\n\n  :hover {\n    background-color: ",";\n  }\n"]);return lt=function(){return t},t}function st(){var t=Object(c.a)(["\n  font-size: 1em; \n  color: ",";\n  font-weight: ",";\n  margin-bottom: 5px;\n"]);return st=function(){return t},t}function dt(){var t=Object(c.a)(["\n  font-size: 1.5em;\n  padding: 5px 40px 5px 0;\n"]);return dt=function(){return t},t}var ft=u.c.p(dt()),pt=u.c.p(st(),function(t){return t.theme.colors.title_bgc},function(t){return t.theme.font.thin}),mt=u.c.div(lt(),function(t){return"".concat(60*t.depth,"px")},function(t){return t.theme.colors.bgc_hover}),ht=u.c.div(ut(),function(t){return t.theme.colors.blue}),bt=Object(u.c)(ht)(ct(),function(t){return t.theme.colors.green}),gt=Object(u.c)(bt)(it()),vt=Object(u.c)(ht)(ot(),function(t){return t.theme.colors.red}),xt=Object(u.c)(ft)(at(),function(t){return t.theme.font.semi_bold}),Ot=u.c.div(rt()),jt=function t(n){var e=n.single_cat,o=n.getChildCat,i=n.depth,c=n.toggleVisibility,u=n.updateState,l=n.addToState,s=n.deleteCatFromState,d=Object(r.useState)(!1),f=Object(y.a)(d,2),p=f[0],m=f[1],h=Object(r.useState)("edit"),b=Object(y.a)(h,2),v=b[0],x=b[1],O=Object(r.useState)(!1),j=Object(y.a)(O,2),E=j[0],k=j[1],w=o(e).map(function(n){return a.a.createElement(t,{key:n.id,single_cat:n,getChildCat:o,toggleVisibility:c,updateState:u,addToState:l,deleteCatFromState:s,depth:i+1})});return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ot,null,1===e.id?a.a.createElement(a.a.Fragment,null,a.a.createElement(xt,null,"Kategorie: "),a.a.createElement(gt,{onClick:function(){m(!p),x("add")}},a.a.createElement(et.b,null))):a.a.createElement(a.a.Fragment,null,a.a.createElement(mt,{depth:i,onClick:function(){return c(e)}},a.a.createElement(ft,null,0!==o(e).length&&(e.childVisible?a.a.createElement(nt.b,null):a.a.createElement(nt.a,null)),e.name),a.a.createElement(pt,null,e.description)),a.a.createElement(ht,{onClick:function(){m(!p),x("edit")}},a.a.createElement(et.a,null)),a.a.createElement(vt,{onClick:function(){return k(!E)}},a.a.createElement(et.c,null)),a.a.createElement(bt,{onClick:function(){m(!p),x("add")}},a.a.createElement(et.b,null))),E&&a.a.createElement(tt,{idToDelete:e.id,catName:e.name,deleteCatFromState:s,closeConfirmation:function(){return k(!E)}}),p&&a.a.createElement(W,{single_cat:e,closeForm:function(){return m(!p)},editOrAdd:v,updateState:u,addToState:l,biggestOrderingOfChilds:function(){var t=o(e);return Math.max.apply(Math,Object(g.a)(t.map(function(t){return t.ordering})).concat([-1]))}()})),e.childVisible&&w)};jt.defaultProps={depth:-1};var Et=jt,kt=function(t){function n(){var t,e;Object(v.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(O.a)(this,(t=Object(j.a)(n)).call.apply(t,[this].concat(a)))).state={data:[]},e.updateState=function(t){var n=e.state.data.map(function(n){return n.id===t.id&&(n.parent_id=t.parent_id,n.name=t.name,n.description=t.description,n.is_visible=t.is_visible,n.ordering=t.ordering),n});e.setState({data:n})},e.addToState=function(t){e.setState(function(n){return{data:[].concat(Object(g.a)(n.data),[t])}})},e.deleteCatFromState=function(t){T.delete(t).then(function(n){if(n){var r=Object(g.a)(e.state.data),a=r.findIndex(function(n){return n.id===t});r.splice(a,1),e.setState({data:r})}})},e.getChildCat=function(t){return e.state.data.filter(function(n){return n.parent_id===t.id})},e.toggleVisibility=function(t){var n=Object(g.a)(e.state.data);n.map(function(n){return n.id===t.id&&(n.childVisible=!n.childVisible),n}),e.setState({data:n})},e}return Object(E.a)(n,t),Object(x.a)(n,[{key:"componentDidMount",value:function(){var t=this;T.get().then(function(n){n.map(function(t){return 1===t.id?t.childVisible=!0:t.childVisible=!1,n}),n.sort(function(t,n){return t.ordering-n.ordering}),t.setState({data:n})})}},{key:"render",value:function(){var t=this,n=null;0!==this.state.data.length&&(n=this.state.data.filter(function(t){return 1===t.id}).map(function(n){return a.a.createElement(Et,{key:n.id,single_cat:n,getChildCat:t.getChildCat,toggleVisibility:t.toggleVisibility,updateState:t.updateState,addToState:t.addToState,deleteCatFromState:t.deleteCatFromState})}));return a.a.createElement(w,null,n||a.a.createElement("p",null,"\u0141adowanie..."))}}]),n}(r.Component),wt=function(){return a.a.createElement(m,null,a.a.createElement(b,null,"katalog produkt\xf3w"),a.a.createElement(kt,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(wt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.a871551c.chunk.js.map