(this.webpackJsonptest_emphasoft=this.webpackJsonptest_emphasoft||[]).push([[0],{163:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(42),s=n.n(c),u=(n(98),n(99),n(7)),o=n(8),i=n(91),l=n(207),m=n(4),f={err:!1,isAuth:!!localStorage.getItem("token")},p={users:[],user:null,editUser:null,createUser:null,error:null},E={isLoading:!1},d=Object(o.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return localStorage.setItem("token",t.token),Object(m.a)(Object(m.a)({},e),{},{err:!1,isAuth:!0});case"LOGIN_FAIL":return Object(m.a)(Object(m.a)({},e),{},{isAuth:!1,err:!0});case"LOGOUT":return localStorage.removeItem("token"),Object(m.a)(Object(m.a)({},e),{},{isAuth:!1});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USERS":return Object(m.a)(Object(m.a)({},e),{},{users:t.users});case"GET_USER":return Object(m.a)(Object(m.a)({},e),{},{user:t.user});case"CREATE_USER":return Object(m.a)(Object(m.a)({},e),{},{createUser:t.user});case"EDIT_USER":return Object(m.a)(Object(m.a)({},e),{},{editUser:t.user});case"CLEAR":return Object(m.a)({},p);case"ERROR":return Object(m.a)(Object(m.a)({},e),{},{error:t.error});default:return e}},loader:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0});case"LOADED":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1});default:return e}},form:l.a}),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,h=Object(o.e)(d,_(Object(o.a)(i.a))),b=function(e){var t=e.children;return r.a.createElement(u.a,{store:h},t)},v=n(14),O=n(9),N="https://emphasoft-test-assignment.herokuapp.com",g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r={method:t,headers:{accept:"application/json","Content-Type":"application/json"}};if(a){var c=localStorage.getItem("token");r=Object(m.a)(Object(m.a)({},r),{},{headers:Object(m.a)(Object(m.a)({},r.headers),{},{Authorization:"Token ".concat(c)})})}return"GET"!==t&&(r=Object(m.a)(Object(m.a)({},r),{},{body:JSON.stringify(n)})),fetch(e,r).then((function(e){if(e.ok)return e.json();throw new Error}))};function j(e){return{type:"ERROR",err:e}}var y=function(e){return function(t){return function(e){return g(N+"/api-token-auth/","POST",e,!1)}(e).then((function(e){t(function(e){return{type:"LOGIN_SUCCESS",token:e}}(e.token))})).catch((function(e){t({type:"LOGIN_FAIL"}),alert("Can't authorizate")}))}},w=function(){return function(e){return e({type:"LOADING"}),g(N+"/api/v1/users/").then((function(t){e(function(e){return{type:"GET_USERS",users:e}}(t)),e({type:"LOADED"})})).catch((function(t){e({type:"LOGIN_FAIL"})}))}},S=function(e){return function(t){return t({type:"LOADING"}),function(e){return g(N+"/api/v1/users/".concat(e,"/"))}(e).then((function(e){t(function(e){return{type:"GET_USER",user:e}}(e)),t({type:"LOADED"})})).catch((function(e){t(j(e))}))}},L=function(e,t){return function(n){return function(e,t){return g(N+"/api/v1/users/".concat(e,"/"),"PUT",t)}(e,t).then((function(e){n(function(e){return{type:"EDIT_USER",user:e}}(e))})).catch((function(e){n(j(e))}))}},U=function(e){return function(t){return function(e){return g(N+"/api/v1/users/","POST",e)}(e).then((function(e){t(function(e){return{type:"CREATE_USER",user:e}}(e))})).catch((function(e){t(j(e))}))}},A=n(206),I=n(205),R=function(e){var t={};return e.username?e.username.length>150?t.username="Must be 150 characters or less":/^[\w.@+-]+$/.test(e.username)||(t.username="Invalid username"):t.username="The field can't be empty",e.password?e.password.length>128?t.password="Must be 128 characters or less":/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(e.password)||(t.password="Invalid password"):t.password="The field can't be empty",e.first_name&&e.first_name.length>30&&(t.first_name="Must be 30 characters or less"),e.last_name&&e.last_name.length>150&&(t.last_name="Must be 150 characters or less"),t},T=function(e){var t=e.meta,n=e.input,a=e.className,c=e.placeholder,s=e.type;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({},n,{className:a,placeholder:c,type:s})),r.a.createElement("div",{className:"form__error"},t.touched&&t.error&&t.error))},k=(n(163),Object(I.a)({form:"authForm",validate:R})((function(e){return r.a.createElement("div",{className:"auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"auth__title"},"Sign in"),r.a.createElement("form",{className:"auth-form",onSubmit:e.handleSubmit},r.a.createElement("div",{className:"auth-form__item"},r.a.createElement(A.a,{className:"auth-form__input",component:T,type:"text",placeholder:"Username",name:"username"})),r.a.createElement("div",{className:"auth-form__item"},r.a.createElement(A.a,{className:"auth-form__input",component:T,type:"password",placeholder:"Password",name:"password",autoComplete:"off"})),r.a.createElement("button",{className:"button auth-form__button",type:"submit"},"LogIn"))))}))),C=Object(u.b)((function(e){return{isAuth:e.login.isAuth}}),(function(e){return{login:function(t,n){e(y(t))}}}))((function(e){if(e.isAuth)return r.a.createElement(O.a,{to:"/"});return r.a.createElement(k,{onSubmit:function(t){e.login(t)}})}));n(202);function G(e){return r.a.createElement("div",{className:"forms"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",null,e.title),r.a.createElement("form",{className:"form",onSubmit:e.handleSubmit},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(A.a,{className:"form__input",component:T,type:"text",name:"username"}),r.a.createElement("label",{htmlFor:"first_name"},"Firstname"),r.a.createElement(A.a,{className:"form__input",component:T,type:"text",name:"first_name"}),r.a.createElement("label",{htmlFor:"last_name"},"Lastname"),r.a.createElement(A.a,{className:"form__input",component:T,type:"text",name:"last_name"}),r.a.createElement("label",{htmlFor:"password"},"New password"),r.a.createElement(A.a,{className:"form__input",component:T,type:"text",name:"password"}),r.a.createElement("span",{className:"form__active"},r.a.createElement("label",{htmlFor:"is_active"},"Is active"),r.a.createElement(A.a,{className:"form__input",component:"input",type:"checkbox",name:"is_active"})),r.a.createElement("div",{className:"form__buttons"},r.a.createElement("button",{className:"button form__button",type:"submit"},"Save"),r.a.createElement(v.b,{to:"/"},r.a.createElement("button",{className:"button form__button form__button_cancel"},"Cancel"))))))}var F=function(e,t){var n,a,r,c;return{initialValues:{username:(null===(n=t.user)||void 0===n?void 0:n.username)||"",first_name:(null===(a=t.user)||void 0===a?void 0:a.first_name)||"",last_name:(null===(r=t.user)||void 0===r?void 0:r.last_name)||"",is_active:(null===(c=t.user)||void 0===c?void 0:c.is_active)||!0,password:""}}},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(u.b)(F)(Object(I.a)({form:e,enableReinitialize:t,validate:R})(G))},x=D("createForm"),M=Object(u.b)((function(e){return{createUser:e.users.createUser}}),(function(e){return{create:function(t){e(U(t))},clear:function(){e({type:"CLEAR"})}}}))((function(e){var t=e.createUser,n=e.clear,c=e.create;if(Object(a.useEffect)((function(){n()}),[t,n]),t)return r.a.createElement(O.a,{to:"/"});return r.a.createElement(x,{title:"Create user",onSubmit:function(e){c(e)}})})),P=D("editForm",!0),z=Object(u.b)((function(e){return{user:e.users.user,editUser:e.users.editUser,isLoading:e.loader.isLoading}}),(function(e){return{get:function(t){e(S(t))},edit:function(t,n){e(L(t,n))},clear:function(){e({type:"CLEAR"})}}}))((function(e){var t=e.get,n=e.match,c=e.edit,s=e.user,u=e.editUser,o=e.clear,i=e.isLoading;if(Object(a.useEffect)((function(){o()}),[u,o]),Object(a.useEffect)((function(){t(n.params.id)}),[n.params.id,t]),i)return null;if(u)return r.a.createElement(O.a,{to:"/"});return s&&r.a.createElement(P,{title:"Edit username",user:s,onSubmit:function(e){c(n.params.id,e)}})})),J=function(){return r.a.createElement("div",{className:"create"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(v.b,{className:"button",to:"/create"},r.a.createElement("button",{className:"button form__button"},"Add user"))))},$=(n(203),Object(u.b)(null,(function(e){return{logout:function(){e({type:"LOGOUT"})}}}))((function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"wrapper header__wrapper"},r.a.createElement("h2",{className:"header__title"},"Users list"),r.a.createElement("button",{className:"button header__button",onClick:function(){e.logout()}},"Logout")))}))),B=(n(89),function(){return r.a.createElement("div",{className:"users__title"},r.a.createElement("span",{className:"users__id"},"ID"),r.a.createElement("span",{className:"users__name"},"Firstname"),r.a.createElement("span",{className:"users__name"},"Lastname"),r.a.createElement("span",{className:"users__name"},"Username"))}),V=function(e){return r.a.createElement("li",{className:"users__item"},r.a.createElement("span",{className:"users__id"},e.user.id),r.a.createElement("span",{className:"users__name"},e.user.first_name?e.user.first_name:"-"),r.a.createElement("span",{className:"users__name"},e.user.last_name?e.user.last_name:"-"),r.a.createElement("span",{className:"users__name"},e.user.username),r.a.createElement(v.b,{className:"button users__button",to:"/users/".concat(e.user.id)},"Edit"))},W=Object(u.b)((function(e){return{users:e.users.users}}))((function(e){var t=e.users.map((function(e){return r.a.createElement(V,{key:e.id,user:e})}));return r.a.createElement("div",{className:"users"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(B,null),r.a.createElement("ul",null,t)))})),X=Object(u.b)((function(e){return{isLoading:e.loader.isLoading}}),(function(e){return{getUsers:function(){e(w())}}}))((function(e){var t=e.getUsers,n=e.isLoading;return Object(a.useEffect)((function(){t()}),[t]),n?null:r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement(J,null),r.a.createElement(W,null))})),Z=Object(u.b)((function(e){return{isAuth:e.login.isAuth}}))((function(e){return e.isAuth?r.a.createElement(O.b,e):r.a.createElement(O.a,{to:"/login"})}));var q=function(){return r.a.createElement(v.a,null,r.a.createElement(Z,{path:"/",exact:!0,component:X}),r.a.createElement(Z,{path:"/users/:id",component:z}),r.a.createElement(O.b,{path:"/login",exact:!0,component:C}),r.a.createElement(Z,{path:"/create",exact:!0,component:M}))},H=function(){return r.a.createElement(b,null,r.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e,t,n){},93:function(e,t,n){e.exports=n(204)},98:function(e,t,n){},99:function(e,t,n){}},[[93,1,2]]]);
//# sourceMappingURL=main.aa313123.chunk.js.map