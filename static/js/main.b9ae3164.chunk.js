(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(n,t,e){n.exports=e(37)},37:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e.n(r),o=e(8),i=e.n(o),c=e(3),u=e(2),l={colors:{bgc:"#ddd",bgc_hover:"#ccc",title_bgc:"#283E4A",title:"#eee",h1:"#222",blue:"#0086ff",green:"#36BC50",red:"#EA4335"},font:{thin:300,regular:400,semi_bold:600,bold:700},media:{mobile:"@media (max-width: 1024px)"}};function s(){var n=Object(c.a)(["\n  min-height: 100vh;\n  background-color: ",";\n"]);return s=function(){return n},n}function d(){var n=Object(c.a)(["\n  html {\n    font-size: 62.5%;\n  }\n  body{\n    font-family: 'Montserrat';\n    font-size: 1.6rem;\n  }\n  \n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n"]);return d=function(){return n},n}var f=Object(u.b)(d()),p=u.c.div(s(),function(n){return n.theme.colors.white}),m=function(n){var t=n.children;return a.a.createElement(u.a,{theme:l},a.a.createElement(a.a.Fragment,null,a.a.createElement(f,null),a.a.createElement(p,null,t)))};function h(){var n=Object(c.a)(["\n  font-size: 3em;\n  font-weight: ",";\n  background-color: ",";\n  text-align: center;\n  padding: 2% 0;\n  color: ",";\n"]);return h=function(){return n},n}var b=u.c.h1(h(),function(n){return n.theme.font.bold},function(n){return n.theme.colors.title_bgc},function(n){return n.theme.colors.title}),g=e(5),v=e(9),x=e(10),O=e(12),j=e(11),E=e(13);function k(){var n=Object(c.a)(["\n  background-color: #eee;\n  border: 1px solid black;\n  border-radius: 6px;\n  display: inline-block;\n  min-width: 300px;\n  padding: 0 10px;\n  margin: 5vw 0 50px 5vw;\n"]);return k=function(){return n},n}var w=u.c.div(k());function y(){var n=Object(c.a)(["\n  font-size: 1.8em;\n  line-height: 1.9em;\n  font-weight: ","; \n"]);return y=function(){return n},n}var C=u.c.p(y(),function(n){return n.theme.font.semi_bold}),S=e(14),_=e(22),z=e(4),F=e.n(z),T=e(6),A=function(){var n=Object(T.a)(F.a.mark(function n(t,e,r){var a,o;return F.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a={method:e,body:r?JSON.stringify(r):void 0,headers:{Authorization:"Basic ".concat(btoa("".concat("rest",":").concat("gBict?3J"))),"Content-Type":"application/json"}},n.next=3,fetch("https://cors-anywhere.herokuapp.com/http://dotnet.demos.i-sklep.pl/rest_api/shop_api/v1"+t,a).then(function(n){if("OK"===n.statusText)return n.json();throw Error("Error ".concat(n.status))}).then(function(n){return n}).catch(function(n){return alert("Failed to fetch. Check console."),console.log(n),[]});case 3:return o=n.sent,n.abrupt("return",o);case 5:case"end":return n.stop()}},n)}));return function(t,e,r){return n.apply(this,arguments)}}(),V={get:function(){var n=Object(T.a)(F.a.mark(function n(){return F.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A("/categories","GET").then(function(n){return 0!==n.length?n.data.categories:[]});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),put:function(){var n=Object(T.a)(F.a.mark(function n(t,e){var r;return F.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r={category:e},n.next=3,A("/categories/".concat(t),"PUT",r).then(function(n){return n.data.category});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}},n)}));return function(t,e){return n.apply(this,arguments)}}(),post:function(){var n=Object(T.a)(F.a.mark(function n(t){var e;return F.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e={category:t},n.next=3,A("/categories","POST",e).then(function(n){return n.data.category});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}(),delete:function(){var n=Object(T.a)(F.a.mark(function n(t){return F.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A("/categories/".concat(t),"DELETE").then(function(n){return n.success});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()},D=e(23);function M(){var n=Object(c.a)(["\n  color: ",";\n  margin-bottom: 10px;\n"]);return M=function(){return n},n}function B(){var n=Object(c.a)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  background-color: transparent;\n  border: none;\n  font-size: 25px;\n  height: 25px;\n  width: 25px;\n  color: ",";\n  cursor: pointer;\n  transition: .3s;\n\n  :hover{\n    transform: scale(1.2) rotate(180deg);\n  }\n"]);return B=function(){return n},n}function J(){var n=Object(c.a)(["\n  margin: 10px auto 0;\n  background-color: ",";\n  font-weight: ",";\n  border: none;\n  border-radius: 12px;\n  padding: 5px 10px;\n  color: ",";\n  transition: .3s;\n  cursor: pointer;\n\n  :hover{\n    color: ",";\n    background-color: ",";\n    box-shadow: 0 0 0px 1px inset ",";\n  }\n"]);return J=function(){return n},n}function N(){var n=Object(c.a)(["\n  font-family: 'Montserrat';\n  border: none;\n  display: block;\n  margin: 2px auto;\n  padding: 4px;\n  color: black;\n"]);return N=function(){return n},n}function P(){var n=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(calc( 100% + 15px ));\n  border-radius: 6px;\n  padding: 30px 10px 10px;\n  background-color: ",";\n"]);return P=function(){return n},n}var I=u.c.form(P(),function(n){return n.theme.colors.title_bgc}),K=u.c.input(N()),U=Object(u.c)(K)(J(),function(n){return n.theme.colors.title},function(n){return n.theme.font.semi_bold},function(n){return n.theme.colors.title_bgc},function(n){return n.theme.colors.title},function(n){return n.theme.colors.title_bgc},function(n){return n.theme.colors.title}),W=u.c.button(B(),function(n){return n.theme.colors.title}),Y=u.c.p(M(),function(n){return n.theme.colors.title}),G=function(n){function t(){var n,e;Object(v.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(O.a)(this,(n=Object(j.a)(t)).call.apply(n,[this].concat(a)))).state={name:"",description:""},e.handleChange=function(n){e.setState(Object(_.a)({},n.target.name,n.target.value))},e.handleSubmit=function(){var n=e.state,t=n.name,r=n.description,a=e.props.single_cat,o=a.id,i=a.parent_id,c=a.ordering,u=a.name,l=a.description,s=e.props.biggestOrderingOfChilds+1;if("edit"===e.props.editOrAdd){var d={parent_id:i,name:t||u,description:r||l,ordering:c,is_visible:!0};""===t&&""===r&&alert("Podaj dane kt\xf3re chcesz nadpisa\u0107."),V.put(o,d).then(function(n){return e.props.updateState(n)})}else if("add"===e.props.editOrAdd){var f={parent_id:o,name:t,description:r,ordering:s,is_visible:!0};""===t?alert("Musisz poda\u0107 nazw\u0119 kategorii kt\xf3r\u0105 chcesz doda\u0107."):V.post(f).then(function(n){return e.props.addToState(n)})}else console.log("Error: Invalid props editOrAdd");e.props.closeForm()},e}return Object(E.a)(t,n),Object(x.a)(t,[{key:"render",value:function(){var n=this.state,t=n.name,e=n.description,r=this.props,o=r.single_cat,i=o.name,c=o.id,u=r.editOrAdd;return a.a.createElement(I,{onSubmit:this.handleSubmit},a.a.createElement(Y,null,"edit"===u&&"Edycja kategorii: ".concat(i),"add"===u&&1!==c&&"Dodawanie podkategorii do: ".concat(i),1===c&&"Dodawanie g\u0142\xf3wnej kategorii: "),a.a.createElement(W,{onClick:this.props.closeForm}," ",a.a.createElement(D.a,null),"  "),a.a.createElement(K,{value:t,onChange:this.handleChange,name:"name",type:"text",placeholder:"Nazwa"}),a.a.createElement(K,{value:e,onChange:this.handleChange,name:"description",type:"text",placeholder:"Opis"}),a.a.createElement(U,{type:"submit",value:"Zatwierd\u017a"}))}}]),t}(r.Component);function L(){var n=Object(c.a)(["\n  background-color: ",";\n  font-weight: ",";\n  border: none;\n  border-radius: 12px;\n  padding: 5px 10px;\n  color: ",";\n  transition: .3s;\n  cursor: pointer;\n\n  :hover{\n    color: ",";\n    background-color: ",";\n    box-shadow: 0 0 0px 1px inset ",";\n  }\n"]);return L=function(){return n},n}function Z(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: space-around;\n"]);return Z=function(){return n},n}function $(){var n=Object(c.a)(["\n  font-size: 20px;\n  text-decoration: underline;\n"]);return $=function(){return n},n}function q(){var n=Object(c.a)(["\n  color: ",";\n  margin-bottom: 10px;\n  text-align: center;\n"]);return q=function(){return n},n}function H(){var n=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(calc( 100% + 15px ));\n  border-radius: 6px;\n  padding: 10px;\n  background-color: ",";\n"]);return H=function(){return n},n}var Q=u.c.div(H(),function(n){return n.theme.colors.title_bgc}),R=u.c.p(q(),function(n){return n.theme.colors.title}),X=u.c.span($()),nn=u.c.div(Z()),tn=u.c.button(L(),function(n){return n.theme.colors.title},function(n){return n.theme.font.semi_bold},function(n){return n.theme.colors.title_bgc},function(n){return n.theme.colors.title},function(n){return n.theme.colors.title_bgc},function(n){return n.theme.colors.title}),en=function(n){var t=n.idToDelete,e=n.catName,r=n.deleteCatFromState,o=n.closeConfirmation;return a.a.createElement(Q,null,a.a.createElement(R,null,"Czy na pewno chcesz usun\u0105\u0107 kategorie o nazwie: ",a.a.createElement(X,null,e),"?"),a.a.createElement(nn,null,a.a.createElement(tn,{onClick:function(){r(t),o()}},"Usu\u0144"),a.a.createElement(tn,{onClick:function(){return o()}},"Anuluj")))},rn=e(18),an=e(7);function on(){var n=Object(c.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  border-top: 1px solid black;   \n\n  :first-child {\n    border: none;\n  }\n"]);return on=function(){return n},n}function cn(){var n=Object(c.a)(["\n  font-size: 1.8em;\n  line-height: 1.9em;\n  font-weight: ","; \n  border: none;\n"]);return cn=function(){return n},n}function un(){var n=Object(c.a)(["\n  :hover{\n    color:  ",";\n  }\n"]);return un=function(){return n},n}function ln(){var n=Object(c.a)(["\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n\n  :hover{\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n"]);return ln=function(){return n},n}function sn(){var n=Object(c.a)(["\n  :hover{\n    color:  ",";\n  }\n"]);return sn=function(){return n},n}function dn(){var n=Object(c.a)(["\n  font-size: 25px;\n  margin-left: 10px;\n  cursor: pointer;\n\n  :hover{\n    color:  ",";\n    transform: scale(1.2);    \n  }\n"]);return dn=function(){return n},n}function fn(){var n=Object(c.a)(["\n  flex-grow: 1;\n  padding-left: ",";  \n  cursor: pointer;\n  border-radius: 6px;\n\n  :hover {\n    background-color: ",";\n  }\n"]);return fn=function(){return n},n}function pn(){var n=Object(c.a)(["\n  font-size: 1em; \n  color: ",";\n  font-weight: ",";\n  margin-bottom: 5px;\n"]);return pn=function(){return n},n}function mn(){var n=Object(c.a)(["\n  font-size: 1.5em;\n  padding: 5px 40px 5px 0;\n"]);return mn=function(){return n},n}var hn=u.c.p(mn()),bn=u.c.p(pn(),function(n){return n.theme.colors.title_bgc},function(n){return n.theme.font.thin}),gn=u.c.div(fn(),function(n){return"".concat(60*n.depth,"px")},function(n){return n.theme.colors.bgc_hover}),vn=u.c.div(dn(),function(n){return n.theme.colors.blue}),xn=Object(u.c)(vn)(sn(),function(n){return n.theme.colors.green}),On=Object(u.c)(xn)(ln()),jn=Object(u.c)(vn)(un(),function(n){return n.theme.colors.red}),En=Object(u.c)(hn)(cn(),function(n){return n.theme.font.semi_bold}),kn=u.c.div(on()),wn=function n(t){var e=t.single_cat,o=t.getChildCat,i=t.depth,c=t.toggleVisibility,u=t.updateState,l=t.addToState,s=t.deleteCatFromState,d=Object(r.useState)(!1),f=Object(S.a)(d,2),p=f[0],m=f[1],h=Object(r.useState)("edit"),b=Object(S.a)(h,2),v=b[0],x=b[1],O=Object(r.useState)(!1),j=Object(S.a)(O,2),E=j[0],k=j[1],w=o(e).map(function(t){return a.a.createElement(n,{key:t.id,single_cat:t,getChildCat:o,toggleVisibility:c,updateState:u,addToState:l,deleteCatFromState:s,depth:i+1})});return a.a.createElement(a.a.Fragment,null,a.a.createElement(kn,null,1===e.id?a.a.createElement(a.a.Fragment,null,a.a.createElement(En,null,"Kategorie: "),a.a.createElement(On,{onClick:function(){m(!p),x("add")}},a.a.createElement(an.b,null))):a.a.createElement(a.a.Fragment,null,a.a.createElement(gn,{depth:i,onClick:function(){return c(e)}},a.a.createElement(hn,null,0!==o(e).length&&(e.childVisible?a.a.createElement(rn.b,null):a.a.createElement(rn.a,null)),e.name),a.a.createElement(bn,null,e.description)),a.a.createElement(vn,{onClick:function(){m(!p),x("edit")}},a.a.createElement(an.a,null)),a.a.createElement(jn,{onClick:function(){return k(!E)}},a.a.createElement(an.c,null)),a.a.createElement(xn,{onClick:function(){m(!p),x("add")}},a.a.createElement(an.b,null))),E&&a.a.createElement(en,{idToDelete:e.id,catName:e.name,deleteCatFromState:s,closeConfirmation:function(){return k(!E)}}),p&&a.a.createElement(G,{single_cat:e,closeForm:function(){return m(!p)},editOrAdd:v,updateState:u,addToState:l,biggestOrderingOfChilds:function(){var n=o(e);return Math.max.apply(Math,Object(g.a)(n.map(function(n){return n.ordering})).concat([-1]))}()})),e.childVisible&&w)};wn.defaultProps={depth:-1};var yn=wn,Cn=function(n){function t(){var n,e;Object(v.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(O.a)(this,(n=Object(j.a)(t)).call.apply(n,[this].concat(a)))).state={data:[]},e.updateState=function(n){var t=e.state.data.map(function(t){return t.id===n.id&&(t.parent_id=n.parent_id,t.name=n.name,t.description=n.description,t.is_visible=n.is_visible,t.ordering=n.ordering),t});e.setState({data:t})},e.addToState=function(n){e.setState(function(t){return{data:[].concat(Object(g.a)(t.data),[n])}})},e.deleteCatFromState=function(n){V.delete(n).then(function(t){if(t){var r=Object(g.a)(e.state.data),a=r.findIndex(function(t){return t.id===n});r.splice(a,1),e.setState({data:r})}})},e.getChildCat=function(n){return e.state.data.filter(function(t){return t.parent_id===n.id})},e.toggleVisibility=function(n){var t=Object(g.a)(e.state.data);t.map(function(t){return t.id===n.id&&(t.childVisible=!t.childVisible),t}),e.setState({data:t})},e}return Object(E.a)(t,n),Object(x.a)(t,[{key:"componentDidMount",value:function(){var n=this;V.get().then(function(t){t.map(function(n){return 1===n.id?n.childVisible=!0:n.childVisible=!1,t}),t.sort(function(n,t){return n.ordering-t.ordering}),n.setState({data:t})})}},{key:"render",value:function(){var n=this,t=null;0!==this.state.data.length&&(t=this.state.data.filter(function(n){return 1===n.id}).map(function(t){return a.a.createElement(yn,{key:t.id,single_cat:t,getChildCat:n.getChildCat,toggleVisibility:n.toggleVisibility,updateState:n.updateState,addToState:n.addToState,deleteCatFromState:n.deleteCatFromState})}));return a.a.createElement(w,null,t||a.a.createElement(C,null,"\u0141adowanie kategorii..."))}}]),t}(r.Component),Sn=function(){return a.a.createElement(m,null,a.a.createElement(b,null,"katalog produkt\xf3w"),a.a.createElement(Cn,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Sn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.b9ae3164.chunk.js.map