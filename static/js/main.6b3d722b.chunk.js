(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{85:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var s=n(47),i=n(42),a=n(43),c=n(48),o=n(46),r=n(21),l=n.n(r),d=n(0),u=n.n(d),p=(n(53),n(45)),h=(n(85),n.p+"static/media/point.ae993290.png"),j=n.p+"static/media/plane.31d92501.png",m=n(2),b=n.n(m),g=b.a.icon({iconUrl:h,iconSize:[15,15]}),O=(b.a.icon({iconUrl:h,iconSize:[5,5]}),b.a.icon({iconUrl:j,iconSize:[45,45]})),f=n(90),x=n(94),v=n(91),N=n(92),C=n(93),S=(n(86),n(1)),y=Object(p.io)("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl/",{path:"/flights"}),k=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).chatContainer=u.a.createRef(),e.state={userName:"",isLoggedIn:!1,messages:[],flights:[],positions:[],fp:{}},e.onButtonClicked=function(t){var n=(new Date).toString();y.emit("CHAT",{name:e.state.userName,date:n,message:t}),document.getElementById("message").value=""},e.buttonUsernameClicked=function(t){e.setState({isLoggedIn:!0,userName:t})},e.scrollToMyRef=function(){var t=e.chatContainer.current.scrollHeight-e.chatContainer.current.clientHeight;e.chatContainer.current.scrollTo(0,t)},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;y.on("connect",(function(){console.log(y.connected)})),y.emit("FLIGHTS"),y.on("FLIGHTS",(function(t){console.log(t),e.setState((function(e){return{flights:t}}));var n=[],s={},i=0;t.map((function(e){var t=[];return t.push(e.origin),t.push(e.code),t.push([]),n.push(t),s[e.code]=i,i+=1,1})),e.setState({positions:n}),e.setState({fp:s}),console.log("posiciones iniciales",e.state.positions),console.log("fp",e.state.fp)})),y.on("POSITION",(function(t){var n=[];e.state.positions.map((function(e){return n.push(e)})),n[e.state.fp[t.code]][0]=t.position,n[e.state.fp[t.code]][2].push(t.position),e.setState({positions:n}),console.log("posiciones cambiadas",e.state.positions)})),y.on("CHAT",(function(t){var n=new Date(t.date).toISOString(),i=(parseInt(n.slice(11,13))-4).toString(),a=n.slice(0,10).replace(/-/g,"/")+" "+i+n.slice(13,16);console.log(a);var c=[].concat(Object(s.a)(e.state.messages),[{name:t.name,date:a,message:t.message}]);e.setState({messages:c},(function(){return e.scrollToMyRef()}))}))}},{key:"render",value:function(){var e=this;return Object(S.jsx)(u.a.Fragment,{children:Object(S.jsx)("div",{className:"fluid-container",children:Object(S.jsxs)("div",{className:"row",children:[Object(S.jsxs)("div",{className:"col-8",children:[Object(S.jsx)("h1",{children:"Mapa en vivo:"}),Object(S.jsx)("div",{className:"map_box",children:Object(S.jsxs)(f.a,{center:[0,0],zoom:1.4,scrollWheelZoom:!0,children:[Object(S.jsx)(x.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),this.state.flights.map((function(e){return Object(S.jsx)(v.a,{position:e.origin,icon:g,children:Object(S.jsx)(N.a,{smoothFactor:1,positions:[e.origin,e.destination]})})})),this.state.flights.map((function(e){return Object(S.jsx)(v.a,{position:e.destination,icon:g})})),this.state.positions.map((function(e){return Object(S.jsx)(v.a,{position:e[0],icon:O,children:Object(S.jsxs)(C.a,{children:["Code: ",e[1]," ",Object(S.jsx)("br",{})]})})})),";"]})}),Object(S.jsx)("div",{className:"space"}),Object(S.jsxs)("div",{className:"flights_box",children:["Vuelos:",this.state.flights.map((function(e){return Object(S.jsxs)("li",{children:["Code: ",e.code,",  Airline: ",e.airline,",  Origen: (",e.origin[0],", ",e.origin[1],"),  Destino: (",e.destination[0],", ",e.destination[1],"),  Plane: ",e.plane,"."]},e.code)}))]})]}),Object(S.jsx)("div",{className:"col-4",children:Object(S.jsx)("div",{children:this.state.isLoggedIn?Object(S.jsx)("div",{children:Object(S.jsxs)("div",{className:"chat_window",children:[Object(S.jsx)("div",{className:"top_menu",children:Object(S.jsx)("div",{className:"title",children:"Centro de Control"})}),Object(S.jsx)("ul",{children:Object(S.jsx)("div",{ref:this.chatContainer,className:"Chat",children:this.state.messages.map((function(e){return Object(S.jsx)("li",{children:Object(S.jsxs)("div",{children:["(",e.date,")     ",e.name,": ",e.message]})},e.message+e.date+e.name)}))})}),Object(S.jsxs)("div",{className:"bottom_wrapper clearfix",children:[Object(S.jsx)("div",{className:"message_input_wrapper",children:Object(S.jsx)("input",{id:"message",className:"message_input",placeholder:"Escribe algo aqu\xed..."})}),Object(S.jsx)("div",{className:"send_message",children:Object(S.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){return e.onButtonClicked(document.getElementById("message").value)},children:"Send"})})]})]})}):Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:"Reg\xedstrate para poder chatear!"}),Object(S.jsxs)("div",{className:"input-group",children:[Object(S.jsx)("input",{type:"search",id:"nickname",className:"form-control rounded",placeholder:"Nickname","aria-label":"Search","aria-describedby":"search-addon"}),Object(S.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){return e.buttonUsernameClicked(document.getElementById("nickname").value)},children:"Ingresar"})]})]})})})]})})})}}]),n}(d.Component);l.a.render(Object(S.jsx)(k,{}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.6b3d722b.chunk.js.map