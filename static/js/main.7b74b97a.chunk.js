(this["webpackJsonprad-assessment"]=this["webpackJsonprad-assessment"]||[]).push([[0],{113:function(e,a,t){e.exports={Header:"Header_Header__1CTzX",logo:"Header_logo__3T0lc"}},188:function(e,a,t){e.exports=t.p+"static/media/norwegian_logo.eaca2f37.png"},191:function(e,a,t){e.exports=t(408)},20:function(e,a,t){e.exports={Footer:"Footer_Footer__37hEc",content:"Footer_content__2lZHa",social:"Footer_social__1qlfP",shareThis:"Footer_shareThis__34Pcm",menu:"Footer_menu__2pwSg",musicBy:"Footer_musicBy__1oE0Q",musicByText:"Footer_musicByText__HUjpS",icon:"Footer_icon__2fpab",iconFb:"Footer_iconFb__2KYRK",iconTw:"Footer_iconTw__-LfdE",iconSpotify:"Footer_iconSpotify__28k5x",spotify:"Footer_spotify__1uMP9"}},34:function(e,a,t){e.exports={Container:"Home_Container__OUvgC",colLeft:"Home_colLeft__27HIA",colRight:"Home_colRight__1JfAp",contentContainer:"Home_contentContainer__15jKi",button:"Home_button__2bGMA",refreshing:"Home_refreshing__4Vecx",termsAndCon:"Home_termsAndCon__2yTTV"}},389:function(e,a,t){},407:function(e,a,t){},408:function(e,a,t){"use strict";t.r(a);t(192),t(201);var n=t(1),o=t.n(n),c=t(187),r=t.n(c),i=t(113),s=t.n(i),l=t(188),m=t.n(l),u=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:s.a.Header},o.a.createElement("a",{href:"#norwegian.com"}," ",o.a.createElement("img",{className:s.a.logo,src:m.a,alt:"Norwegian.com"}))))},_=t(410),d=t(411),f=t(20),E=t.n(f),p=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("footer",{className:E.a.Footer},o.a.createElement("div",{className:E.a.content},o.a.createElement("div",{className:E.a.social},o.a.createElement("span",{className:E.a.shareThis},"SHARE THIS"),o.a.createElement(_.a,{url:"http://www.norwegian.com",quote:"Norwegian.com - Chose your destination",hashtag:"#norwegian.com"},o.a.createElement("span",{className:"".concat(E.a.icon," ").concat(E.a.iconFb)}," ")),o.a.createElement(d.a,{url:"http://www.norwegian.com",title:"Norwegian.com - Chose your destination",hashtag:"#norwegian.com"},o.a.createElement("span",{className:"".concat(E.a.icon," ").concat(E.a.iconTw)}))),o.a.createElement("div",{className:E.a.menu},o.a.createElement("a",{href:"#norwegian.com"}," NORWEGIAN.COM "),o.a.createElement("a",{href:"#terms"}," TERMS & CONDITIONS "),o.a.createElement("a",{href:"#cookies"}," COOKIES POLICY ")),o.a.createElement("div",{className:E.a.musicBy},o.a.createElement("span",{className:E.a.musicByText},"MUSIC BY"),o.a.createElement("a",{href:"#spotify.com",className:E.a.iconSpotify}," "),o.a.createElement("span",{className:E.a.spotify},"Spotify")))))},h=(t(389),t(84)),g=t(53),N=t.n(g),y=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{className:e.isLoading?"".concat(N.a.item,"   fade-out"):"".concat(N.a.item,"  fade-in"),"data-hover":e.post.destination},o.a.createElement("a",{href:"#0",tabIndex:"0"},o.a.createElement("h2",null,e.post.destination),o.a.createElement("div",{className:N.a.divider}," "),o.a.createElement("p",null,e.post.direct),o.a.createElement("p",null,e.post.from),o.a.createElement("p",null,e.post.priceAndDate))))},b=function(e){return o.a.createElement("nav",null,o.a.createElement("ul",{className:N.a.Destinations},e.destinations.map((function(a){return o.a.createElement(y,{key:a.id,post:a,isLoading:e.isLoading})}))))},w=t(114),F=t.n(w),v=t(190),C=t.n(v),S=t(34),T=t.n(S),H=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!1),i=Object(h.a)(r,2),s=i[0],l=i[1],m=Object(n.useState)(1),u=Object(h.a)(m,2),_=u[0],d=u[1];return Object(n.useEffect)((function(){l(!0),F.a.create({adapter:C()(F.a.defaults.adapter)}).get("https://5f80ee7a5b1f3f00161a65bc.mockapi.io/destination?page=".concat(_,"&limit=6"),{delay:500}).then((function(e){c(e.data),l(!1)})).catch((function(e){console.log(e)}))}),[_]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:T.a.Container},o.a.createElement("div",{className:T.a.colLeft},o.a.createElement("div",{className:T.a.contentContainer},o.a.createElement("h1",null,"The sounds of ",o.a.createElement("br",null)," Spain..."),o.a.createElement("p",null," Whether you're turning up the tunes in Tenerife, bouncing to the beat in Barcelona or moving to the music in Madrid, we've got you covered."),o.a.createElement("p",null,"You'll also have the opportunity to win a 5 day trip to Spain, courtesy of Norwegian!"),o.a.createElement("button",{disabled:s,onClick:function(){3===_?_=1:_++,d(_)},className:T.a.button},"MORE PLEASE ",o.a.createElement("i",{className:s?"".concat(T.a.refreshing,"  loader"):T.a.refreshing}," ")))),o.a.createElement("div",{className:T.a.colRight},o.a.createElement(b,{destinations:t,isLoading:s}),o.a.createElement("a",{className:"".concat(T.a.termsAndCon,s?"   fade-out":"  fade-in"),href:"#terms-and-conditions"},"* terms & conditions apply"))))};var O=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,null),o.a.createElement(H,null),o.a.createElement(p,null))};t(407);r.a.render(o.a.createElement(O,null),document.getElementById("root"))},53:function(e,a,t){e.exports={Destinations:"Destinations_Destinations__3jYdQ",item:"Destinations_item__CL8BB",divider:"Destinations_divider__1JdS7"}}},[[191,1,2]]]);
//# sourceMappingURL=main.7b74b97a.chunk.js.map