(this.webpackJsonpapartmentsellingapp=this.webpackJsonpapartmentsellingapp||[]).push([[0],{112:function(e,t,a){e.exports={card:"sCard_card__MMFyo"}},133:function(e,t,a){},134:function(e,t,a){},141:function(e,t,a){},144:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(57),i=a.n(n),r=(a(133),a(7)),o=(a(134),a(53)),l=a.n(o),j=a(30),u=a(63),d=a.n(u),b=a(110),h=a(28),p=Object(b.a)({apiKey:"AIzaSyASrUMYeuw1WvsRejxsTKRzKEF08uy-Ev8",authDomain:"social-app-1a88b.firebaseapp.com",projectId:"social-app-1a88b",storageBucket:"social-app-1a88b.appspot.com",messagingSenderId:"701862505330",appId:"1:701862505330:web:dbbfc1bc46f6bd135c8beb",measurementId:"G-PVR5ERG55T"}),O=Object(h.b)(p),m=a(0),x=function(e){var t=e.toggle,a=Object(c.useState)({}),s=Object(r.a)(a,2),n=s[0],i=s[1];return Object(h.c)(O,(function(e){i(e)})),Object(m.jsxs)("div",{className:d.a.nav,style:{transform:t?"translateX(0)":"translateX(100%)",opacity:t?"1":".2"},children:[Object(m.jsx)(j.b,{exact:!0,to:"/",activeClassName:d.a.active,children:"Home"}),Object(m.jsx)(j.b,{to:"/view",activeClassName:d.a.active,children:"View"}),Object(m.jsx)(j.b,{to:"/profile",activeClassName:d.a.active,children:"Profile"}),n?Object(m.jsx)(j.b,{exact:!0,to:"/dashboard",activeClassName:d.a.active,children:"Add House"}):null,Object(m.jsx)(j.b,{exact:!0,to:"/login",activeClassName:d.a.active,children:n?"Sign Out":"Log In"})]})},f=function(e){var t=Object(c.useState)(!1),a=Object(r.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)({}),o=Object(r.a)(i,2),u=o[0],d=o[1];return Object(h.c)(O,(function(e){d(e)})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("nav",{children:[Object(m.jsx)("div",{className:l.a.left,children:Object(m.jsxs)(j.b,{to:"/",className:l.a.logo,children:["SellHouse.org ",Object(m.jsx)("i",{className:"fas fa-shapes"})]})}),Object(m.jsxs)("div",{className:l.a.right,children:[Object(m.jsx)(j.b,{exact:!0,to:"/",activeClassName:l.a.active,children:"Home"}),Object(m.jsx)(j.b,{to:"/view",activeClassName:l.a.active,children:"View"}),Object(m.jsx)(j.b,{exact:!0,to:"/profile",activeClassName:l.a.active,children:"Profile"}),u?Object(m.jsx)(j.b,{exact:!0,to:"/dashboard",activeClassName:l.a.active,children:"Add House"}):null,Object(m.jsx)(j.b,{exact:!0,to:"/login",activeClassName:l.a.active,children:u?"Sign Out":"Log In"})]}),Object(m.jsx)("div",{className:l.a.toggle,onClick:function(){n(!s)},children:Object(m.jsx)("i",{className:"fas fa-bars"})})]}),Object(m.jsx)(x,{toggle:s})]})},v=a(25),g=a(35),_=a.n(g),y=a.p+"static/media/1.05b20acb.jpg",N=a.p+"static/media/2.4a8bdd19.jpg",S=a.p+"static/media/4.7476482e.jpg",w=a.p+"static/media/5.7b3d4155.jpg",C=a.p+"static/media/offerImg.99fa0db8.jpg",k=a(112),H=a.n(k),I=function(e){return Object(m.jsxs)("div",{className:H.a.card,children:[Object(m.jsx)("i",{className:e.icon}),Object(m.jsx)("h3",{children:e.title}),Object(m.jsx)("p",{children:e.details}),Object(m.jsx)("i",{className:e.icon})]})},A=a(49),E=a.n(A),M=a(27),D=a(48),F=function(e,t){switch(t.type){case"ADD_HOUSE_TO_WISH_LIST":return Object(D.a)(Object(D.a)({},e),{},{favHouses:[].concat(Object(M.a)(e.favHouses),[t.payload])});case"REMOVE_HOUSE_FORM_WISH_LIST":return Object(D.a)(Object(D.a)({},e),{},{favHouses:e.favHouses.filter((function(e){return e.id!==t.payload}))});case"SET_HOUSE_ID":return Object(D.a)(Object(D.a)({},e),{},{id:t.payload});default:return e}},R={favHouses:JSON.parse(localStorage.getItem("favHouses"))||[],id:JSON.parse(localStorage.getItem("houseId"))||[]},L=Object(c.createContext)(F),T=function(e){var t=Object(c.useReducer)(F,R),a=Object(r.a)(t,2),s=a[0],n=a[1];Object(c.useEffect)((function(){localStorage.setItem("favHouses",JSON.stringify(s.favHouses)),localStorage.setItem("houseId",JSON.stringify(s.id))}),[s]);return Object(m.jsx)(L.Provider,{value:{favHouses:s.favHouses,addHouseTofavHouses:function(e){n({type:"ADD_HOUSE_TO_WISH_LIST",payload:e})},removeHouseTofavHouses:function(e){n({type:"REMOVE_HOUSE_FORM_WISH_LIST",payload:e})},id:s.id,setHouseId:function(e){n({type:"SET_HOUSE_ID",payload:e})}},children:e.children})},X=a(93),P=a.n(X),U=function(e){var t=e.closeModal,a=e.img;return Object(m.jsx)("div",{className:P.a.modal,onClick:t,children:Object(m.jsx)("div",{className:P.a.img,children:Object(m.jsx)("img",{src:a,alt:"Photo"})})})},B=a(210),Y=a(196);function q(e){var t=e.rate;return Object(m.jsx)(Y.a,{sx:{"& > legend":{mt:2}},children:Object(m.jsx)(B.a,{name:"half-rating-read",defaultValue:t,precision:.5,readOnly:!0})})}var J=function(e){var t=e.house,a=e.type,s=Object(c.useState)(!1),n=Object(r.a)(s,2),i=n[0],o=n[1],l=Object(c.useState)(null),j=Object(r.a)(l,2),u=j[0],d=j[1],b=Object(c.useState)({}),p=Object(r.a)(b,2),x=p[0],f=p[1];Object(h.c)(O,(function(e){f(e)}));var g=function(e){o(!0),d(e)};Object(c.useEffect)((function(){return i&&(document.body.style.overflow="hidden"),function(){return document.body.style.overflow="unset"}}),[i,u]);var _,y=Object(c.useContext)(L),N=y.addHouseTofavHouses,S=y.favHouses,w=y.removeHouseTofavHouses,C=y.setHouseId,k=!!S.find((function(e){return e.id===t.id})),H=Object(v.g)();return"detailedCard"===t.type?Object(m.jsxs)("div",{className:E.a.card,style:{maxWidth:"300px"},children:[Object(m.jsxs)("div",{className:E.a.img,style:{minHeight:"250px"},children:[Object(m.jsx)("img",{src:t.src,alt:"img"}),"fav"===a?Object(m.jsx)("div",{className:E.a.search,children:Object(m.jsx)("i",{onClick:function(){return w(t.id)},className:"fas fa-trash-alt",title:"Remove House"})}):null,"fav"===a?null:Object(m.jsx)("button",{disabled:k,onClick:function(){return N(t)},children:k?"Added":"Add to Fav"})]}),Object(m.jsxs)("div",{className:E.a.text,children:[Object(m.jsxs)("h4",{children:[t.name," "]}),Object(m.jsxs)("span",{children:[Object(m.jsx)("i",{className:"fas fa-map-marker-alt"}),t.place]}),Object(m.jsx)("div",{className:E.a.rate,children:Object(m.jsx)(q,{rate:t.rate})}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("span",{className:E.a.price,children:[(_=t.price,_.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," $"]}),Object(m.jsx)("button",{onClick:function(){return e=t.id,void(x?(H.push("/view/checkout/".concat(e)),C(e)):H.push("/login"));var e},children:"Buy Now"})]}),Object(m.jsxs)("span",{children:[t.userName?t.userName:"Website"," "]})]})]}):Object(m.jsxs)("div",{className:E.a.card,style:{maxWidth:"400px"},children:[Object(m.jsxs)("div",{className:E.a.img,children:[Object(m.jsx)("img",{src:t.src,alt:"img",onClick:function(){return g(t.src)}}),Object(m.jsx)("div",{className:E.a.search,children:Object(m.jsx)("i",{className:"fas fa-search-plus",title:"Full Image",onClick:function(){return g(t.src)}})})]}),Object(m.jsxs)("div",{className:E.a.text,children:[Object(m.jsxs)("h4",{children:[t.name," "]}),Object(m.jsxs)("span",{children:[Object(m.jsx)("i",{className:"fas fa-map-marker-alt"}),t.place]})]}),i?Object(m.jsx)(U,{closeModal:function(){o(!1)},img:u}):null]})},V=(a(141),a.p+"static/media/contact.9c599013.svg"),W=a(116),K=a(212),z=a(208),G=c.forwardRef((function(e,t){return Object(m.jsx)(z.a,Object(D.a)({elevation:6,ref:t,variant:"filled"},e))}));function Z(e){var t=c.useState(!0),a=Object(r.a)(t,2),s=a[0],n=a[1],i=function(e,t){"clickaway"!==t&&n(!1)};return Object(m.jsx)(Y.a,{spacing:2,sx:{width:"100%"},children:Object(m.jsx)(K.a,{open:s,autoHideDuration:3e3,onClose:i,children:Object(m.jsx)(G,{onClose:i,severity:"success",sx:{width:"100%"},children:e.msg})})})}var Q=function(e){var t=Object(c.useState)(""),a=Object(r.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(""),o=Object(r.a)(i,2),l=o[0],j=o[1],u=Object(c.useState)(""),d=Object(r.a)(u,2),b=d[0],h=d[1],p=Object(c.useState)(!1),O=Object(r.a)(p,2),x=O[0],f=O[1],v=Object(c.useState)(!1),g=Object(r.a)(v,2),_=g[0],y=g[1],N=Object(c.useRef)();return Object(m.jsxs)("div",{className:"wrapper ",children:[_?Object(m.jsx)(Z,{msg:"You Have successfully sent an E-mail!"}):null,Object(m.jsx)("div",{className:"left",children:Object(m.jsx)("img",{src:V,alt:"Faw"})}),Object(m.jsxs)("form",{ref:N,className:"right",onSubmit:function(e){e.preventDefault(),f(!0),W.a.sendForm("service_ltj2944","Real_Estate_App",N.current,"user_D9y1Gws0dAtyKLW4zOemd").then((function(e){console.log(e.text),f(!1),y(!0),j(""),n(""),h(""),setTimeout((function(){y(!1)}),3e3)}),(function(e){console.log(e.text),f(!1)}))},children:[Object(m.jsx)("div",{className:"input",children:Object(m.jsx)("input",{type:"text",placeholder:"Name",value:s,onChange:function(e){return n(e.target.value)},name:"name",required:!0})}),Object(m.jsx)("div",{className:"input",children:Object(m.jsx)("input",{type:"email",placeholder:"E-mail",value:l,onChange:function(e){return j(e.target.value)},name:"email",required:!0})}),Object(m.jsx)("div",{className:"input",children:Object(m.jsx)("textarea",{placeholder:"Message",rows:"5",value:b,onChange:function(e){return h(e.target.value)},name:"message",required:!0})}),Object(m.jsx)("button",{children:x?"Sending...":"Send"})]})]})},$=function(){var e=Object(c.useState)(y),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(0),i=Object(r.a)(n,2),o=i[0],l=i[1],j=[y,N,S,w],u=Object(c.useRef)(null);Object(c.useEffect)((function(){return u.current=setTimeout((function(){l((function(){return o===j.length-1?l(0):l(o+1)})),s((function(){return j[o]}))}),3e3),function(){u.current&&clearTimeout(u.current)}}),[j,o]);var d=Object(v.g)();return Object(m.jsxs)("div",{className:_.a.home,children:[Object(m.jsxs)("div",{className:_.a.img,children:[Object(m.jsx)("img",{src:a,alt:"img2"}),Object(m.jsx)("div",{className:_.a.imgs,children:j.map((function(e,t){return Object(m.jsx)("img",{src:e,alt:e,onClick:function(){return s(e)},className:e===a?_.a.active:null},t)}))}),Object(m.jsxs)("div",{className:_.a.details,children:[Object(m.jsx)("h2",{children:"Make Your Desicion, And Own Your Dream House. "}),Object(m.jsx)("h3",{children:'" Yousef Rashad Abu Aisha "'}),Object(m.jsx)("p",{children:'" Every person is looking to build a life on their own needs an apartment to live on their own terms,If you are looking to start a business in the real estate industry, you need to set up your own company first."'})]})]}),Object(m.jsx)("div",{className:_.a.cards,children:[{title:"Beautiful ",details:"Lorem Ipsum is simply dummy text of the printing and typesetting\n        industry. Lorem Ipsum has been the industry's standard dummy text ever\n        since the 1500s, when an unknown printer took a galley.",icon:"fas fa-building"},{title:"Accurate",details:"Lorem Ipsum is simply dummy text of the printing and typesetting\n        industry. Lorem Ipsum has been the industry's standard dummy text ever\n        since the 1500s, when an unknown printer took a galley.",icon:"fas fa-calendar-check"},{title:"Economical",details:"Lorem Ipsum is simply dummy text of the printing and typesetting\n        industry. Lorem Ipsum has been the industry's standard dummy text ever\n        since the 1500s, when an unknown printer took a galley.",icon:"fas fa-hand-holding-usd"}].map((function(e,t){return Object(m.jsx)(I,{title:e.title,details:e.details,icon:e.icon},t)}))}),Object(m.jsxs)("div",{className:_.a.offer,children:[Object(m.jsx)("div",{className:_.a.right,children:Object(m.jsx)("img",{src:C,alt:"Best House"})}),Object(m.jsxs)("div",{className:_.a.left,children:[Object(m.jsx)("h3",{children:"Why To Choose Us ?"}),Object(m.jsx)("p",{children:"Every person is looking to build a life on their own needs an apartment to live on their own terms,If you are looking to start a business in the real estate industry, you need to set up your own company first, Every person is looking to build a life on their own needs an apartment to live on their own terms,If you are looking to start a business in the real estate industry, you need to set up your own company first."}),Object(m.jsx)("a",{target:"_self",children:Object(m.jsx)("button",{onClick:function(){d.push("/view")},children:"More Details"})})]})]}),Object(m.jsxs)("div",{className:_.a.join,children:[Object(m.jsx)("h2",{children:"Join Our Company Now."}),Object(m.jsx)("p",{children:"Every person is looking to build a life on their own needs an apartment to live on their own terms,If you are looking to start a business in the real estate industry, you need to set up your own company first,"}),Object(m.jsx)("a",{target:"_self",children:Object(m.jsx)("button",{onClick:function(){d.push("/login")},children:"Participate In"})})]}),Object(m.jsxs)("div",{className:_.a.famous,children:[Object(m.jsx)("h3",{children:"Famous Buildings"}),Object(m.jsx)("div",{className:_.a.houseCards,children:[{src:"https://cdn.pixabay.com/photo/2015/07/02/10/28/empire-state-building-828777__340.jpg",name:"Empire State Building",place:"New York City, USA"},{src:"https://cdn.pixabay.com/photo/2017/09/07/16/50/acropolis-2725918__340.jpg",name:"Acropolis Building",place:"Athens, Greece"},{src:"https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244__340.jpg",name:"Sydney Opera House",place:"Australia, Sydney"},{src:"https://cdn.pixabay.com/photo/2019/08/19/15/13/eiffel-tower-4416700__340.jpg",name:"Eiffel Tower",place:"Paris, France"},{src:"https://cdn.pixabay.com/photo/2017/01/30/07/54/church-2020258__340.jpg",name:"Albatros Hotel",place:"Thira, Greece"},{src:"https://cdn.pixabay.com/photo/2015/03/26/10/06/the-louvre-690929__340.jpg",name:"Louvre Museum",place:"Paris, France"}].map((function(e,t){return Object(m.jsx)(J,{house:e},t)}))})]}),Object(m.jsxs)("div",{className:_.a.famous,children:[Object(m.jsx)("h3",{children:"Contact Us"}),Object(m.jsx)("div",{className:_.a.contact,children:Object(m.jsx)(Q,{})})]})]})},ee=a(54),te=a.n(ee),ae=a(209),ce=a(204),se=(a(142),a(143),a(144),a(206)),ne=a(202),ie=a(203);function re(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(ae.a,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:!0,className:"mySwiper",children:[{src:"https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg",name:"Empire State Building",place:"New York City, USA",price:"15,000"},{src:"https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__340.jpg",name:"Acropolis Building",place:"Athens, Greece",price:"70,000"},{src:"https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367__340.jpg",name:"Sydney Opera House",place:"Australia, Sydney",price:"42,000"},{src:"https://cdn.pixabay.com/photo/2016/02/19/10/16/villa-1209148__340.jpg",name:"Eiffel Tower",place:"Paris, France",price:"25,000"},{src:"https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972__340.jpg",name:"Albatros Hotel",place:"Thira, Greece",price:"10,000"},{src:"https://cdn.pixabay.com/photo/2015/03/26/09/41/condominium-690086__340.jpg",name:"Louvre Museum",place:"Paris, France",price:"22,000"},{src:"https://cdn.pixabay.com/photo/2017/06/16/15/58/luxury-home-2409518__340.jpg",name:"Louvre Museum",place:"Paris, France",price:"35,000"},{src:"https://cdn.pixabay.com/photo/2017/07/03/21/35/house-2469067__340.jpg",name:"Louvre Museum",place:"Paris, France",price:"70,000"}].map((function(e,t){return Object(m.jsxs)(ce.a,{children:[Object(m.jsx)("div",{className:"discount",children:Object(m.jsxs)("span",{children:[" ",Math.floor(40*Math.random()+10),"% "]})}),Object(m.jsx)("img",{src:e.src,alt:e.name})]},t)}))})})}se.a.use([ne.a,ie.a]);var oe=a(64),le=a.n(oe),je=a(216),ue=a(207),de=a(218),be=a(217),he=a(214),pe=a(213),Oe=a(60),me=a.n(Oe),xe=Object(c.forwardRef)((function(e,t){return Object(m.jsx)(pe.a,Object(D.a)({direction:"down",ref:t},e))}));function fe(){for(var e=Object(c.useState)(!1),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),i=Object(r.a)(n,2),o=i[0],l=i[1],j=Object(c.useState)(""),u=Object(r.a)(j,2),d=u[0],b=u[1],h=Object(c.useState)(""),p=Object(r.a)(h,2),O=p[0],x=p[1],f=Object(c.useState)(""),v=Object(r.a)(f,2),g=v[0],_=v[1],y=Object(c.useState)(!1),N=Object(r.a)(y,2),S=N[0],w=N[1],C=function(){s(!1)},k=[],H=(new Date).getFullYear(),I=H;I<H+10;I++)k.push(I);return Object(m.jsxs)("div",{className:me.a.box,children:[S?Object(m.jsx)(Z,{msg:"You have successfully bought a new house!"}):null,Object(m.jsx)(je.a,{variant:"outlined",onClick:function(){s(!0)},children:"Add to Cart"}),Object(m.jsxs)(ue.a,{open:a,TransitionComponent:xe,keepMounted:!0,onClose:C,"aria-describedby":"alert-dialog-slide-description",children:[Object(m.jsx)(he.a,{className:me.a.title,children:"Add Payment Method Details"}),Object(m.jsx)(be.a,{children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(!1),w(!0)},children:[Object(m.jsxs)("div",{className:me.a.input,children:[Object(m.jsx)("span",{children:"Card Number"}),Object(m.jsx)("input",{type:"tel",placeholder:"XXXX-XXXX-XXXX-XXXX",onChange:function(e){return l(e.target.value)},value:o,minLength:16,maxLength:16,required:!0,pattern:"[0-9]*"})]}),Object(m.jsxs)("div",{className:me.a.input,children:[Object(m.jsx)("span",{children:"Expire Date"}),Object(m.jsxs)("div",{className:me.a.expireDate,children:[Object(m.jsxs)("select",{required:!0,onChange:function(e){return b(e.target.value)},value:d,children:[Object(m.jsx)("option",{value:"",defaultValue:!0,hidden:!0,children:"Month"}),Object(m.jsx)("option",{value:"01",children:"01"}),Object(m.jsx)("option",{value:"02",children:"02"}),Object(m.jsx)("option",{value:"03",children:"03"}),Object(m.jsx)("option",{value:"04",children:"04"}),Object(m.jsx)("option",{value:"05",children:"05"}),Object(m.jsx)("option",{value:"06",children:"06"}),Object(m.jsx)("option",{value:"07",children:"07"}),Object(m.jsx)("option",{value:"08",children:"08"}),Object(m.jsx)("option",{value:"09",children:"09"}),Object(m.jsx)("option",{value:"10",children:"10"}),Object(m.jsx)("option",{value:"11",children:"11"}),Object(m.jsx)("option",{value:"12",children:"12"})]}),Object(m.jsxs)("select",{required:!0,onChange:function(e){return x(e.target.value)},value:O,children:[Object(m.jsx)("option",{value:"",defaultValue:!0,hidden:!0,children:"Year"}),k.map((function(e,t){return Object(m.jsx)("option",{value:e,children:e},t)}))]})]})]}),Object(m.jsxs)("div",{className:me.a.input,children:[Object(m.jsx)("span",{children:"CVV"}),Object(m.jsx)("input",{type:"tel",placeholder:"XXX",onChange:function(e){return _(e.target.value)},value:g,maxLength:3,minLength:3,required:!0,pattern:"[0-9]*"})]}),Object(m.jsx)("div",{className:me.a.btns,children:Object(m.jsxs)(de.a,{children:[Object(m.jsx)(je.a,{onClick:C,children:"Cancel"}),Object(m.jsx)("button",{children:"Confirm"})]})})]})})]})]})}var ve=a(61),ge=a.n(ve),_e=a(220),ye=a(219);function Ne(){return Object(m.jsx)(ye.a,{sx:{display:"flex"},children:Object(m.jsx)(_e.a,{})})}var Se=function(){var e=Object(c.useContext)(L).id,t=Object(c.useState)([]),a=Object(r.a)(t,2),s=a[0],n=a[1];Object(c.useEffect)((function(){ge.a.get("https://social-app-1a88b-default-rtdb.firebaseio.com/-MnRiJsbSKAmsRa5deHr.json").then((function(e){console.log(e.data);var t=e.data,a=[];for(var c in t)a.push(t[c]);n(a)})).catch((function(e){console.log(e)}))}),[]);var i,o=s.find((function(t){return t.id===e}));return console.log("House is",o),Object(m.jsx)("div",{className:le.a.checkout,children:o?Object(m.jsxs)("div",{className:le.a.offer,children:[Object(m.jsxs)("div",{className:le.a.left,children:[Object(m.jsx)("h3",{children:o.name}),Object(m.jsxs)("span",{children:[Object(m.jsx)("i",{className:"fas fa-map-marker-alt"}),o.place]}),Object(m.jsx)("p",{children:"Every person is looking to build a life on their own needs an apartment to live on their own terms,If you are looking to start a business in the real estate industry, you need to set up your own company first."}),Object(m.jsxs)("span",{children:[(i=o.price,i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," $"]}),Object(m.jsx)("div",{className:le.a.rating,children:Object(m.jsx)(q,{rate:o.rate})}),Object(m.jsx)("div",{className:le.a.snackbar,children:Object(m.jsx)(fe,{})})]}),Object(m.jsx)("div",{className:le.a.right,children:Object(m.jsx)("img",{src:o.src?o.src:"https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png",alt:"House"})})]}):Object(m.jsx)(Ne,{})})},we=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)("date"),i=Object(r.a)(n,2),o=i[0],l=i[1];Object(c.useEffect)((function(){ge.a.get("https://social-app-1a88b-default-rtdb.firebaseio.com/-MnRiJsbSKAmsRa5deHr.json").then((function(e){console.log(e.data);var t=e.data,a=[];for(var c in t)a.push(t[c]);s(j(a))})).catch((function(e){console.log(e)}))}),[o]);var j=function(e){if("price"===o)e.sort((function(e,t){return e.price.toString().replaceAll(",","")-t.price.toString().replaceAll(",","")}));else{if("date"!==o)return e;e.reverse()}return e};return Object(m.jsxs)("div",{className:te.a.view,children:[Object(m.jsx)("div",{className:te.a.img,children:Object(m.jsxs)("div",{className:te.a.text,children:[Object(m.jsx)("h2",{children:"Start Selling and Buying Houses Now."}),Object(m.jsx)("p",{children:'" Every person is looking to build a life on their own needs an apartment to live on their own terms "'})]})}),Object(m.jsxs)("div",{className:te.a.container,children:[Object(m.jsxs)("div",{className:te.a.header,children:[Object(m.jsxs)("div",{className:te.a.left,children:[Object(m.jsx)("i",{className:"fas fa-chevron-left"}),Object(m.jsx)("i",{className:"fas fa-chevron-right"})]}),Object(m.jsx)("div",{className:te.a.right,children:Object(m.jsxs)("select",{onChange:function(e){return l(e.target.value)},value:o,children:[Object(m.jsx)("option",{defaultValue:"",disabled:!0,children:"Sort By"}),Object(m.jsx)("option",{value:"date",children:"Last Modified"}),Object(m.jsx)("option",{value:"price",children:"Price"})]})})]}),Object(m.jsx)("div",{className:te.a.cards,children:a.length>0?a.map((function(e,t){return Object(m.jsx)(J,{house:e,type:"detailedCard"},t)})):Object(m.jsx)(Ne,{})})]}),Object(m.jsxs)("div",{className:te.a.slider,children:[Object(m.jsx)("h3",{children:"Special Offers"}),Object(m.jsx)(re,{})]}),Object(m.jsx)(v.b,{exact:!0,path:"/view/checkout",component:Se})]})},Ce=a(70),ke=a.n(Ce),He=a.p+"static/media/notFound.d2efaffb.svg",Ie=function(){var e=Object(c.useContext)(L).favHouses;return console.log("FavHouses : ",e),Object(m.jsxs)("div",{className:ke.a.profile,children:[Object(m.jsxs)("div",{className:ke.a.header,children:[Object(m.jsx)("h2",{children:"Liked Houses:"}),Object(m.jsxs)("span",{children:[e.length," ",1===e.length?"House":"Houses"]})]}),0===e.length||null===e?Object(m.jsxs)("div",{className:ke.a.cards1,children:[Object(m.jsx)("h2",{className:ke.a.empty,children:"Add Some Houses"}),Object(m.jsx)("img",{src:He,alt:"Add Some Items"})]}):Object(m.jsx)("div",{className:ke.a.cards2,children:e.map((function(e,t){return Object(m.jsx)(J,{house:e,type:"fav"},t)}))})]})},Ae=a(84),Ee=a.n(Ae),Me=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),i=Object(r.a)(n,2),o=i[0],l=i[1],j=Object(c.useState)(""),u=Object(r.a)(j,2),d=u[0],b=u[1],p=Object(c.useState)(""),x=Object(r.a)(p,2),f=x[0],v=x[1],g=Object(c.useState)(""),_=Object(r.a)(g,2),y=_[0],N=_[1],S=Object(c.useState)(!1),w=Object(r.a)(S,2),C=w[0],k=w[1],H=Object(c.useState)(!1),I=Object(r.a)(H,2),A=I[0],E=I[1],M=Object(c.useState)({}),D=Object(r.a)(M,2),F=D[0],R=D[1];Object(h.c)(O,(function(e){R(e)})),Object(c.useEffect)((function(){ge.a.get("https://social-app-1a88b-default-rtdb.firebaseio.com/-MnRiJsbSKAmsRa5deHr.json").then((function(e){console.log(e.data);var t=e.data;N(Object.keys(t).length)})).catch((function(e){console.log(e)}))}),[]),console.log("ID = ",y);var L=function(){s(""),l(""),b(""),v(""),setTimeout((function(){k(!1)}),3e3)};return Object(m.jsxs)("div",{className:Ee.a.dashboard,children:[C?Object(m.jsx)(Z,{msg:"You have successfully added a new house!"}):null,Object(m.jsxs)("div",{className:Ee.a.box,children:[Object(m.jsx)("h3",{children:"Add New House"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:y+1,name:a,place:o,price:d,rate:Math.floor(4*Math.random())+1,src:f,type:"detailedCard",userName:"@".concat(F.email.slice(0,F.email.indexOf("@")))};E(!0),ge.a.post("https://social-app-1a88b-default-rtdb.firebaseio.com/-MnRiJsbSKAmsRa5deHr.json",t).then((function(e){k(!0),E(!1),L()})).then((function(e){E(!1)}))},children:[Object(m.jsx)("input",{type:"text",placeholder:"House name",onChange:function(e){return s(e.target.value)},value:a,maxLength:30,minLength:5,required:!0}),Object(m.jsx)("input",{type:"text",placeholder:"House location",onChange:function(e){return l(e.target.value)},value:o,maxLength:30,required:!0}),Object(m.jsx)("input",{type:"number",placeholder:"House Price",onChange:function(e){return b(e.target.value)},value:d,required:!0}),Object(m.jsx)("input",{type:"url",placeholder:"Image URL",onChange:function(e){return v(e.target.value)},value:f,required:!0}),Object(m.jsx)("div",{className:Ee.a.btn,children:A?Object(m.jsx)(Ne,{}):Object(m.jsx)("button",{children:" Add New House"})})]})]})]})},De=a(2),Fe=a.n(De),Re=a(5),Le=a(41),Te=a.n(Le),Xe=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),i=Object(r.a)(n,2),o=i[0],l=i[1],j=Object(c.useState)(""),u=Object(r.a)(j,2),d=u[0],b=u[1],p=Object(c.useState)(""),x=Object(r.a)(p,2),f=x[0],v=x[1],g=Object(c.useState)(""),_=Object(r.a)(g,2),y=_[0],N=_[1],S=Object(c.useState)(""),w=Object(r.a)(S,2),C=w[0],k=w[1],H=Object(c.useState)({}),I=Object(r.a)(H,2),A=I[0],E=I[1],M=Object(c.useState)(!0),D=Object(r.a)(M,2),F=D[0],R=D[1],L=Object(c.useState)(!1),T=Object(r.a)(L,2),X=T[0],P=T[1],U=Object(c.useState)(!1),B=Object(r.a)(U,2),Y=B[0],q=B[1],J=function(){var e=Object(Re.a)(Fe.a.mark((function e(){var t;return Fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(!0),e.prev=1,e.next=4,Object(h.a)(O,a,o);case 4:t=e.sent,console.log("User: ",t),P(!0),E(t),q(!1),K(),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),k(e.t0.message),console.log("Register Error:",e.t0),q(!1);case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(Re.a)(Fe.a.mark((function e(){var t;return Fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(!0),e.prev=1,e.next=4,Object(h.d)(O,d,f);case 4:t=e.sent,console.log("User: ",t),P(!0),E(t),q(!1),K(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),N(e.t0.message),q(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(Re.a)(Fe.a.mark((function e(){return Fe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)(O);case 2:setTimeout((function(){P(!1)}),3e3);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){s(""),l(""),k(""),b(""),v(""),N("")};return Object(h.c)(O,(function(e){E(e)})),Object(m.jsxs)("div",{className:Te.a.login,children:[X?Object(m.jsx)(Z,{msg:"You Have Successfully Signed In !",type:"success "}):null,Object(m.jsx)("div",{className:Te.a.wrapper,children:A?Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:Te.a.logout,children:[Object(m.jsx)("span",{children:" You Are Signed In As"}),Object(m.jsx)("h4",{children:A?A.email:""}),A?Object(m.jsx)("button",{onClick:W,children:"Sign out"}):null," "]})}):F?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{children:"Log In "}),Object(m.jsx)("input",{type:"email",value:d,onChange:function(e){return b(e.target.value)},placeholder:"example@gmail.com",className:Te.a.input,autoFocus:!0}),Object(m.jsx)("input",{type:"password",value:f,onChange:function(e){return v(e.target.value)},placeholder:"Password",className:Te.a.input}),Object(m.jsx)("span",{className:Te.a.error,children:y}),Y?Object(m.jsx)(Ne,{}):Object(m.jsx)("button",{className:Te.a.button,onClick:V,children:"Sign In"}),Object(m.jsxs)("span",{className:Te.a.toggleMsg,children:["If you dont have an account, you can",Object(m.jsx)("span",{onClick:function(){return R(!F)},children:" Sign Up"})]})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{children:"Sign Up"}),Object(m.jsx)("input",{type:"email",value:a,onChange:function(e){return s(e.target.value)},placeholder:"example@gmail.com",className:Te.a.input,autoFocus:!0}),Object(m.jsx)("input",{type:"password",value:o,onChange:function(e){return l(e.target.value)},placeholder:"Password",className:Te.a.input}),Object(m.jsx)("span",{className:Te.a.error,children:C}),Y?Object(m.jsx)(Ne,{}):Object(m.jsx)("button",{onClick:J,className:Te.a.button,children:"Sign Up"}),Object(m.jsxs)("span",{className:Te.a.toggleMsg,children:["If you already have an account, you can",Object(m.jsx)("span",{onClick:function(){return R(!F)},children:" Sign In"})]})]})})]})},Pe=(a(163),function(){return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsx)("a",{target:"_blank",href:"https://www.facebook.com/yousef.aboesha.9/",children:Object(m.jsx)("i",{className:"fab fa-facebook"})}),Object(m.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/yousef-aboesha-9b40b4193/",children:Object(m.jsx)("i",{className:"fab fa-linkedin"})}),Object(m.jsx)("a",{target:"_blank",href:"https://twitter.com/_abuAisha",children:Object(m.jsx)("i",{className:"fab fa-twitter"})}),Object(m.jsx)("a",{target:"_blank",href:"https://github.com/YousefAboAisha",children:Object(m.jsx)("i",{className:"fab fa-github"})}),Object(m.jsx)("span",{children:" All Rights Reserved To Yousef R Abo Aisha \xa9"})]})});function Ue(){var e=Object(v.h)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var Be=function(){var e=Object(c.useState)({}),t=Object(r.a)(e,2),a=t[0],s=t[1];Object(h.c)(O,(function(e){s(e)}));var n=Object(m.jsxs)(v.d,{children:[Object(m.jsx)(v.b,{exact:!0,path:"/",component:$}),Object(m.jsx)(v.b,{exact:!0,path:"/view",component:we}),Object(m.jsx)(v.b,{exact:!0,path:"/profile",component:Ie}),Object(m.jsx)(v.b,{path:"/view",component:we,children:Object(m.jsx)(v.b,{path:"/view/checkout",component:Se})}),Object(m.jsx)(v.b,{exact:!0,path:"/login",component:Xe}),Object(m.jsx)(v.a,{to:"/"})]});return a&&(n=Object(m.jsxs)(v.d,{children:[Object(m.jsx)(v.b,{exact:!0,path:"/",component:$}),Object(m.jsx)(v.b,{exact:!0,path:"/view",component:we}),Object(m.jsx)(v.b,{exact:!0,path:"/profile",component:Ie}),Object(m.jsx)(v.b,{exact:!0,path:"/dashboard",component:Me}),Object(m.jsx)(v.b,{path:"/view",component:we,children:Object(m.jsx)(v.b,{path:"/view/checkout",component:Se})}),Object(m.jsx)(v.b,{exact:!0,path:"/login",component:Xe}),Object(m.jsx)(v.a,{to:"/"})]})),Object(m.jsx)(T,{children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)(Ue,{}),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(f,{}),n,Object(m.jsx)(Pe,{})]})]})})},Ye=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,223)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(Be,{})}),document.getElementById("root")),Ye()},35:function(e,t,a){e.exports={home:"home_home__3mVXO",img:"home_img__I0dZ-",imgs:"home_imgs__3MQbl",active:"home_active__HFIL2",details:"home_details__1lpP5",cards:"home_cards__mHk49",offer:"home_offer__3FjG0",right:"home_right__1KrFq",left:"home_left__18ROM",famous:"home_famous__1414D",join:"home_join__AtOQv",houseCards:"home_houseCards__33Xqu"}},41:function(e,t,a){e.exports={login:"login_login__HZl0m",wrapper:"login_wrapper__1RrEx",input:"login_input__39oHl",button:"login_button__1tdpe",button2:"login_button2__3ihzM",toggleMsg:"login_toggleMsg__1gFRx",error:"login_error__3n2_i",logout:"login_logout__2x4l8"}},49:function(e,t,a){e.exports={card:"houseCard_card__1uRN1",img:"houseCard_img__3C166",search:"houseCard_search__1MDgW",text:"houseCard_text__1NhCE",rate:"houseCard_rate__2wOrH",price:"houseCard_price__3fatC"}},53:function(e,t,a){e.exports={right:"Navbar_right__1Wt4n",left:"Navbar_left__uthf4",toggle:"Navbar_toggle__1U-p_",active:"Navbar_active__3-a_e"}},54:function(e,t,a){e.exports={view:"view_view__1x2z5",img:"view_img__12Pab",text:"view_text__1FISu",container:"view_container__2dnTP",header:"view_header__sX2DK",left:"view_left__1Dgzc",right:"view_right__JFOmT",cards:"view_cards__XYMK8",slider:"view_slider__2p4eS"}},60:function(e,t,a){e.exports={box:"paymentDetails_box__2ix9v",title:"paymentDetails_title__2JmzK",input:"paymentDetails_input__203Dq",expireDate:"paymentDetails_expireDate__Rkoif",btns:"paymentDetails_btns__axrgy"}},63:function(e,t,a){e.exports={nav:"Sidebar_nav__yFrzL",active:"Sidebar_active__SyrBy"}},64:function(e,t,a){e.exports={checkout:"checkout_checkout__21cds",offer:"checkout_offer__29Jwj",right:"checkout_right__2dM6U",left:"checkout_left__2Q3cs",famous:"checkout_famous__2TNrI",rating:"checkout_rating__Zb0oo",join:"checkout_join__3xXR6"}},70:function(e,t,a){e.exports={profile:"profile_profile__ZGs4B",header:"profile_header__1swBJ",cards1:"profile_cards1__-Yb9N",cards2:"profile_cards2__3ejXa",empty:"profile_empty__q1V0Y"}},84:function(e,t,a){e.exports={dashboard:"Dashboard_dashboard__YLVpD",box:"Dashboard_box__21izk",btn:"Dashboard_btn__T1BPW"}},93:function(e,t,a){e.exports={modal:"popUpImg_modal__2jfjk",img:"popUpImg_img__s1Cyo"}}},[[164,1,2]]]);
//# sourceMappingURL=main.e25e2859.chunk.js.map