(this["webpackJsonpanonym-chat"]=this["webpackJsonpanonym-chat"]||[]).push([[0],{79:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t),a.d(t,"Context",(function(){return V}));var n=a(8),r=a(1),c=a(14),o=a.n(c),s=(a(79),a(23)),i=a(54),u=a(17),j=a(135),l=a(37),d=a.n(l),b=a(46),h=a(125),m=a(138),p=a(130),x=a(26),O=a(29),f=function(){var e=Object(r.useContext)(V),t=e.auth,a=e.firestore,c=Object(x.a)(t),o=Object(s.a)(c,1)[0],i=Object(r.useState)(""),u=Object(s.a)(i,2),j=u[0],l=u[1],f=Object(r.useCallback)(Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new RegExp("\\S"),!!t.test(j)&&j.length>0)try{a.collection("messages").add({uid:o.uid,displayName:o.displayName,photoURL:o.photoURL,text:j,createDate:O.a.firestore.FieldValue.serverTimestamp()}),l("")}catch(n){console.log(n)}case 3:case"end":return e.stop()}}),e)}))),[j]),g=function(e){13===e.keyCode&&f()};return Object(n.jsxs)(h.a,{container:!0,children:[Object(n.jsx)(m.a,{defaultValue:"",fullWidth:!0,onKeyDown:g,onKeyUp:g,multiline:!0,variant:"outlined",style:{width:"90%"},value:j,onChange:function(e){return l(e.target.value)}}),Object(n.jsx)(p.a,{onClick:f,fullWidth:!0,style:{width:"10%"},variant:"outlined",children:"Send"})]})},g=a(134),y=a(129),v=a(50),w=a(132),C=a(133),k=a(131),D=Object(k.a)({messageArea:{height:"50px",overflowY:"none"},inline:{display:"inline",maxWidth:"600px"},notmyMessage:{maxWidth:"600px",wordWrap:"break-word","& *":{display:"flex",backgroundColor:"red"}},myMessage:{maxWidth:"600px",wordWrap:"break-word","& *":{display:"flex",flexDirection:"row-reverse",backgroundColor:"green"}}}),I=function(e){var t=D(),a=e.time;return Object(n.jsx)(v.a,{multiline:!0,component:"span",variant:"body2",className:t.inline,color:"textPrimary",children:a})},M=function(e){var t=D(),a=e.itsMe,r=e.text,c=e.time;return Object(n.jsx)(w.a,{className:a?t.myMessage:t.notmyMessage,primary:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(I,{time:c}),r]})})},S=function(e){var t=D(),a=e.message,r=e.myId,c=new Date(a.createDate&&1e3*a.createDate.seconds+a.createDate.nanoseconds/1e6).toLocaleString().substring(12,17),o=a.text,s=r===a.uid;return Object(n.jsx)(C.a,{children:Object(n.jsx)(h.a,{item:!0,xs:12,align:s?"right":"left",children:Object(n.jsx)(w.a,{className:s?t.myMessage:t.notmyMessage,primary:Object(n.jsx)(M,{time:c,text:o,itsMe:s})})})},a.createDate)},W=a(63),A=function(){console.log("render Messages");var e=D(),t=Object(r.useContext)(V),a=t.auth,c=t.firestore,o=Object(x.a)(a),i=Object(s.a)(o,1)[0],u=Object(W.a)(c.collection("messages").orderBy("createDate")),j=Object(s.a)(u,2),l=j[0],d=j[1];return Object(r.useEffect)((function(){var e=document.getElementById("chatsMessages");e&&(e.scrollTop=9999999)}),[l]),d?Object(n.jsx)(g.a,{disableShrink:!0}):Object(n.jsx)(h.a,{container:!0,justify:"center",style:{marginTop:16},children:Object(n.jsx)("div",{id:"chatsMessages",style:{width:"100%",height:"60vh",border:"1px solid gray",overflowY:"auto"},children:Object(n.jsx)(y.a,{className:e.messageArea,children:l.map((function(e){return Object(n.jsx)(S,{myId:i.uid,message:e})}))})})})},B=Object(k.a)({table:{minWidth:650},chatSection:{width:"100%",height:"80vh"},headBG:{backgroundColor:"#e0e0e0"},borderRight500:{borderRight:"1px solid #e0e0e0"}}),E=function(e){var t=e.auth,a=function(){var e=Object(b.a)(d.a.mark((function e(){var a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new O.a.auth.GoogleAuthProvider,e.next=3,t.signInWithPopup(a);case 3:n=e.sent,r=n.user,console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)(p.a,{variant:"contained",color:"primary",type:"submit",onClick:a,children:"Login"})},N=[{path:"/login",Component:E}],G=[{path:"/",Component:function(){return B(),Object(n.jsxs)(j.a,{children:[Object(n.jsx)(A,{}),Object(n.jsx)(f,{})]})}}],J=function(){var e=Object(r.useContext)(V).auth,t=Object(x.a)(e),a=Object(s.a)(t,1)[0]?G.map((function(e){var t=e.path,a=e.Component;return Object(n.jsx)(u.b,{path:t,component:a,exact:!0},t)})):N.map((function(e){var t=e.path,a=e.Component;return Object(n.jsx)(u.b,{path:t,component:a,exact:!0},t)}));return Object(n.jsxs)(u.d,{children:[a,Object(n.jsx)(u.a,{to:"/"})]})},L=a(136),R=a(137),T=function(){var e=Object(r.useContext)(V).auth,t=Object(x.a)(e),a=Object(s.a)(t,1)[0];return Object(n.jsx)(L.a,{color:"default",position:"static",children:Object(n.jsx)(R.a,{children:Object(n.jsxs)(h.a,{container:!0,justify:"space-between",children:[Object(n.jsx)(v.a,{variant:"h6",color:"inherit",children:"Anonym Chat"}),a?Object(n.jsx)(p.a,{variant:"outlined",color:"secondary",onClick:function(){return e.signOut()},children:"Logout"}):Object(n.jsx)(E,{auth:e})]})})})};var P=function(){var e=Object(r.useContext)(V).auth,t=Object(x.a)(e),a=Object(s.a)(t,3),c=(a[0],a[1]);return a[2],Object(n.jsxs)(i.a,{basename:"/anonym-chat",children:[Object(n.jsx)(T,{}),c?Object(n.jsx)(g.a,{disableShrink:!0}):Object(n.jsx)(J,{})]})};a(91),a(92);O.a.initializeApp({apiKey:"AIzaSyDSfl9oycjIQyv3VuXy9110ms4JTTGYJAE",authDomain:"chat-anonym-5555.firebaseapp.com",projectId:"chat-anonym-5555",storageBucket:"chat-anonym-5555.appspot.com",messagingSenderId:"871012339222",appId:"1:871012339222:web:24186c163e2ae7e385af37",measurementId:"G-976SGBJ2EZ"});var K=O.a.auth(),U=O.a.firestore(),V=Object(r.createContext)(null);o.a.render(Object(n.jsx)(V.Provider,{value:{firebase:O.a,auth:K,firestore:U},children:Object(n.jsx)(P,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.fbd75a64.chunk.js.map