(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(133)},132:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(73),i=a.n(o),l=a(14),c=a(188),s=a(184),m=a(177),d=a(190),p=a(185),u=a(179),h=a(175),g=a(186),f=a(189),b=a(181),x=a(78),y=a(41),E=a(74),w=a.n(E),v=a(58),k=a.n(v),j={white:"#fff",white2:"#9ca3af",white3:"#D9D9D9",black1:"#000000",black2:"#111111",black3:"#1e1e1e",black4:"#3c3c3c",black5:"#4d4d4d",golden:"#bf9b30",goldenDark:"#a67c00"},S=a(27),C=260,D=["About","Experience","Projects","Contact"],M={open:{rotate:0,y:0},closed:{rotate:-180,y:-8}};var T=function(e){var t=e.window,a=n.useState(!1),r=Object(l.a)(a,2),o=r[0],i=r[1],E=function(){i(!o)},v=n.createElement(s.a,{onClick:E,sx:{textAlign:"center",color:j.white}},n.createElement(p.a,{sx:{mt:10}},D.map(function(e){return n.createElement(u.a,{key:e,disablePadding:!0},n.createElement(h.a,{sx:{borderRadius:"7px",margin:"1rem",color:j.white,backgroundColor:j.black3,":hover":{bgcolor:j.black4},textAlign:"center"}},n.createElement(g.a,{primary:e})))})),n.createElement(b.a,{href:k.a,variant:"contained",sx:{px:10,mt:10,textTransform:"none",color:j.white,backgroundColor:j.goldenDark,":hover":{bgcolor:j.golden}}},"Resume")),T=void 0!==t?function(){return t().document.body}:void 0;return n.createElement(s.a,{sx:{display:"flex"}},n.createElement(c.a,{component:"nav",sx:{backgroundColor:j.black1}},n.createElement(f.a,{sx:{justifyContent:"space-between",mx:{xs:0,sm:3}}},n.createElement("img",{style:{width:70},src:w.a,alt:"logo"}),n.createElement(s.a,{sx:{display:{xs:"none",md:"block"},mr:5}},D.map(function(e){return n.createElement(b.a,{key:e,sx:{px:3,textTransform:"none",marginRight:"1rem",fontSize:"15px",color:j.white,backgroundColor:j.black1,":hover":{bgcolor:j.black4}}},e)})),n.createElement(b.a,{href:k.a,variant:"contained",sx:{px:2,display:{xs:"none",sm:"block"},textTransform:"none",color:j.white,backgroundColor:j.goldenDark,":hover":{bgcolor:j.golden}}},"Resume"),n.createElement(d.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:E,sx:{display:{sm:"none"},marginLeft:"auto",justifyContent:"flex-end",fontSize:"30px"}},o?n.createElement(S.motion.nav,{color:"white",animate:o?"closed":"open",variants:M},n.createElement(y.b,null)):n.createElement(S.motion.nav,{color:"white",animate:o?"closed":"open",variants:M},n.createElement(x.a,{style:{fontSize:"32px"}}))))),n.createElement(s.a,{component:"nav"},n.createElement(m.a,{PaperProps:{sx:{backgroundColor:j.black3}},container:T,variant:"temporary",open:o,onClose:E,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:C}}},v)),n.createElement(s.a,{component:"main",sx:{p:3}},n.createElement(f.a,null)))},I=a(187),P=a(81),W=a.n(P);function R(){return r.a.createElement(s.a,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",height:"80vh",alignItems:"center"}},r.a.createElement(S.motion.div,{initial:{rotate:320,scale:0},animate:{rotate:360,scale:1},whileHover:{scale:1.1,transition:{duration:.5}},whileTap:{scale:.9},transition:{type:"spring",stiffness:260,damping:20}},r.a.createElement("img",{src:W.a,alt:"Logo",style:{width:"22rem"}})),r.a.createElement(s.a,{sx:{width:{xs:"100%",md:"50%"}}},r.a.createElement(I.a,{variant:"h5",color:j.white2},"Hi, I'm"),r.a.createElement(I.a,{variant:"h3",color:j.white},"Mohamed Hosam"),r.a.createElement(I.a,{variant:"h5",color:j.white},"Software Engineer"),r.a.createElement(I.a,{variant:"h9",color:j.white2},'I study Computer Engineering "3rd Year" at Kocaeli University in Turkey. In the Past 3 years i have made a lot of projects in Software and Web development fields. I have created 2 big projects that deal with database (SQL, MongoDB). One of them is interactive comment section the other one is bank management system. You can see my projects in the project section.')))}var O=a(4),A=a(86),B=a(9),H=a(178),z=a(45),N=a(191),L=a(176),F=a(43),q=Object(B.a)(function(e){return n.createElement(N.a,Object.assign({disableRipple:!0},e))})(function(e){var t=e.theme;return{textTransform:"none",fontWeight:t.typography.fontWeightRegular,fontSize:t.typography.pxToRem(15),marginRight:t.spacing(2),color:"rgba(255, 255, 255, 0.7)","&.Mui-selected":{color:"#fff"},"&.Mui-focusVisible":{backgroundColor:"rgba(20, 20, 20, 0.32)"}}});function J(e){var t=e.children,a=e.value,r=e.index,o=Object(A.a)(e,["children","value","index"]);return n.createElement(s.a,Object.assign({sx:{width:{xs:"100%",md:"80%"}},role:"tabpanel",hidden:a!==r,id:"vertical-tabpanel-".concat(r),"aria-labelledby":"vertical-tab-".concat(r)},o),a===r&&n.createElement(s.a,{sx:{p:3}},n.createElement(S.motion.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:40,damping:10}},t)))}function G(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}function K(){var e=Object(L.a)("(max-width: 900px)"),t=n.useState(0),a=Object(l.a)(t,2),r=a[0],o=a[1];return n.createElement(s.a,{sx:{my:20,flexGrow:1,bgcolor:j.black2,display:"flex",mx:{xs:0,md:10},p:1,borderRadius:"5px",flexDirection:{xs:"column",md:"row"},minHeight:"22rem"}},n.createElement(H.a,{scrollButtons:!0,orientation:e?"horizonal":"vertical",variant:"scrollable",value:r,onChange:function(e,t){o(t)},"aria-label":"Vertical tabs example",TabIndicatorProps:{style:{background:"#fff"}},sx:Object(O.a)({borderRight:1,borderColor:j.black3,".MuiTabs-indicator":{left:0}},"& .".concat(z.a.scrollButtons),{"&.Mui-disabled":{opacity:.3},"&.MuiTabs-scrollButtons":{color:"white"}})},n.createElement(q,Object.assign({label:"Kocaeli University"},G(0))),n.createElement(q,Object.assign({label:"Freelance"},G(1)))),n.createElement(J,{value:r,index:0,sx:{maxWidth:{xs:"100",md:"80%"}}},n.createElement(I.a,{variant:"h8",color:j.white2},"Jun. 2022 \u2011 Nov. 2022"),n.createElement(s.a,{sx:{display:"flex",felxDirection:"row",justifyContent:"space-between",alignItems:"center"}},n.createElement(I.a,{variant:"h6",color:j.white},"FULL STACK DEVELOPER"),n.createElement("a",{href:"https://webscrapingcimri.netlify.app/"},n.createElement(F.a,{className:"icon",color:"white",style:{fontSize:"20px",marginLeft:"20%"}}))),n.createElement(s.a,{sx:{my:3}},n.createElement("ul",{style:{color:j.white2,listStyleType:"square"}},n.createElement("li",null," Worked on 'Yemek Bursu Website' and was responsible of student application form and its security. We used ASP.Net MVC framework to develop the whole website."),n.createElement("li",null,"Implemented a dynamic search engine to search on any laptop or specific seller."),n.createElement("li",null,"Made sure the student is authenticated and securely logged in to apply to the scholarship."),n.createElement("li",null,"Implemented an application view page for students to update or delete their application."),n.createElement("li",null,"Implemented input validation control to make sure student fill all fields in the page."),n.createElement("li",null,"Was responsible to solve any bugs or issues that any student might have after deploying the website.")))),n.createElement(J,{value:r,index:1,sx:{position:"relative",maxWidth:{xs:"100",md:"80%"}}},n.createElement(I.a,{variant:"h8",color:j.white2},"Jun. 2020 \u2011 Oct. 2020"),n.createElement(s.a,{sx:{display:"flex",felxDirection:"row",justifyContent:"space-between",alignItems:"center"}},n.createElement(I.a,{variant:"h6",color:j.white},"Motion Graphic Designer"),n.createElement("a",{href:"https://vimeo.com/mhosam"},n.createElement(F.a,{className:"icon",color:"white",style:{fontSize:"20px",marginLeft:"20%"}}))),n.createElement(s.a,{sx:{my:3}},n.createElement("ul",{style:{color:j.white2,listStyleType:"square"}},n.createElement("li",null,"Worked on some logo animation videos with Adobe After Effects Tool for some freelance jobs."),n.createElement("li",null,"Worked on some video Editing and motion graphics projects that are listed in my vimeo page.")))))}var U=a(56),V=a.n(U),Y=a(182);a(132);function Q(e){return n.createElement(Y.a,{label:e.label,sx:{color:j.white,bgcolor:j.black5,mr:1}})}function X(e){var t=Object(L.a)("(max-width: 900px)"),a=e.right,r=a?-20:20;return n.createElement(s.a,{sx:{display:"flex",flexDirection:{xs:"column",md:e.flexDirection},p:1,my:10,justifyContent:"center"}},n.createElement(s.a,{sx:{bgcolor:j.black2,width:{xs:"85%",md:"50%"},mx:{xs:0,md:5},px:4,pt:4,pb:2,borderRadius:"10px",position:"relative"}},t?n.createElement("a",{href:e.data.preview},n.createElement("img",{src:e.data.image,alt:"projectImage",className:"projectImage"})):null,n.createElement(I.a,{variant:"h7",color:j.white2},e.data.projectType),n.createElement(I.a,{variant:"h5",color:j.white},e.data.title),n.createElement("a",{href:e.data.preview},n.createElement(F.a,{className:"icon",color:"white",style:{fontSize:"20px",position:"absolute",right:40,top:35}})),n.createElement("a",{href:e.data.github},n.createElement(y.a,{className:"icon",color:"white",style:{fontSize:"20px",position:"absolute",right:80,top:35}})),n.createElement(s.a,{sx:{my:5}},n.createElement("ul",{style:{color:j.white2,listStyleType:"square"}},e.data.description.map(function(e,t){return n.createElement("li",{key:t},e)}))),n.createElement(H.a,{variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example",sx:Object(O.a)({},"& .".concat(z.a.scrollButtons),{"&.Mui-disabled":{opacity:.3},"&.MuiTabs-scrollButtons":{color:"white"}})},e.data.skills.map(function(e,t){return n.createElement(Q,{label:e,key:t})}))),t?null:n.createElement(s.a,{sx:{width:"30%",my:6}},n.createElement(S.motion.div,{initial:{x:0,scale:0,rotate:0,opacity:.5},animate:a?{x:10,scale:1,rotate:4}:{x:-40,scale:1,rotate:-4},whileHover:{scale:1.2,rotate:0,opacity:1,transition:{duration:.5},x:r},whileTap:{scale:1},transition:{type:"spring",stiffness:260,damping:20}},n.createElement("a",{href:e.data.preview},n.createElement("img",{src:e.data.image,alt:"projectImage2",style:{maxWidth:"100%",maxHeight:"auto",borderRadius:"10px"}})))))}var Z=a(82),$=a.n(Z),_=a(83),ee=a.n(_),te=a(84),ae=a.n(te),ne={card1:{title:"E-Commerce Website",projectType:"MERN Full Stack",preview:"https://webscrapingcimri.netlify.app/",github:"https://github.com/m4hosam/Web-Scraping-E-Commerce",skills:["React JS","Puppeteer","MongoDB","Node.js"],image:V.a,description:["Web scrape 4 different websites and compare the results together to get the a unique laptop with different sellers.","Web scrape 4 different websites and compare the results together to get the a unique laptop with different sellers.","Implemented an E\u2011Commerce website with admin section to add oand delete any product."]},card2:{title:"Interactive Comment Section",projectType:"Full Stack Node.JS",preview:"https://interactivecomment.onrender.com/",github:"https://github.com/m4hosam/interactive-comment-section",skills:["EJS","Express","Mongoose","MongoDB","Node.js"],image:$.a,description:["Created a fully functional interactive comment section for user to add, reply, like or delete a comment","Implemented a responsive design for Desktop or mobile use (User Friendly)"]},card3:{title:"Bank Management System ",projectType:"Desktop Application",preview:"https://github.com/m4hosam/bank-managment-system",github:"https://github.com/m4hosam/bank-managment-system",skills:["Python","PYQT","SQL"],image:ee.a,description:["Created a fully functional bank management system consisting of Client, Clerk and Manager Interfaces with their related normalized database.","Established a connection between client and clerks so the client can request opening account or deleting account. Manger can assign clients to certain clerks and manage the currency values.","Implemented loan management system with interest calculator over the requested time of the loan (credit)."]},card4:{title:"Harry Potter Android Game",projectType:"Android Application",preview:"https://github.com/m4hosam/Harry-Potter-Android-Game",github:"https://github.com/m4hosam/Harry-Potter-Android-Game",skills:["Kotlin","Android Studio","FireBase"],image:ae.a,description:["The Harry Potter themed card game allows players to test their memory skills by matching pairs of upside-down cards to earn points.","With three different levels of difficulty, the game provides a range of challenges suitable for players of all skill levels.","Featuring iconic characters from the Harry Potter universe, the game offers a fun and engaging way to interact with the magical world of Hogwarts."]}};function re(e){return n.createElement(s.a,{sx:{my:5}},n.createElement(X,{flexDirection:"row",right:!0,data:ne.card1}),n.createElement(X,{flexDirection:"row-reverse",data:ne.card2}),n.createElement(X,{flexDirection:"row",right:!0,data:ne.card3}),n.createElement(X,{flexDirection:"row-reverse",data:ne.card4}))}var oe=a(180);var ie=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a,{fixed:!0},r.a.createElement(T,null),r.a.createElement(R,null),r.a.createElement(K,null),r.a.createElement(re,null)))};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)))},56:function(e,t,a){e.exports=a.p+"static/media/webScrap.b713f565.png"},58:function(e,t,a){e.exports=a.p+"static/media/resume.30558e32.pdf"},74:function(e,t,a){e.exports=a.p+"static/media/logo.2fe0622d.png"},81:function(e,t,a){e.exports=a.p+"static/media/m4h.d736a6d5.png"},82:function(e,t,a){e.exports=a.p+"static/media/interactiveCommentSection1.bda779ee.png"},83:function(e,t,a){e.exports=a.p+"static/media/bankMangementSystem.eda2402a.png"},84:function(e,t,a){e.exports=a.p+"static/media/HarryPotter.759fb665.png"}},[[100,1,2]]]);
//# sourceMappingURL=main.bc2c5518.chunk.js.map