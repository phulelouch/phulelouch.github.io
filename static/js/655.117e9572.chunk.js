"use strict";(self.webpackChunkberry_material_react_ts=self.webpackChunkberry_material_react_ts||[]).push([[655],{29669:function(e,t,i){i.r(t),i.d(t,{default:function(){return ue}});var a=i(1413),n=i(29439),r=i(4942),s=i(47313),o=i(64164),l=i(62111),c=i(92484),d=i(82821),m=i(83440),p=i(82937),h=i(42669),x=i(77449),g=i(56456),u=i(86227),Z=i(35645),f=i(44021),j=i.p+"static/media/img-slider-layout1.29d04eeb42d2544eace5.png",v=i.p+"static/media/img-slider-layout2.1f0d0963731b96833ca4.png",b=i.p+"static/media/img-slider-layout3.fd5936f0c719cf635fea.png",y=i(46417),A=function(e){var t=e.item;return(0,y.jsx)(p.ZP,{container:!0,direction:"column",alignItems:"center",spacing:3,textAlign:"center",children:(0,y.jsx)(p.ZP,{item:!0,children:(0,y.jsx)(m.Z,{component:"img",image:t.image,title:"Slider5 image"})})})},k=function(){var e=[{image:j},{image:v},{image:b}];return(0,y.jsx)(f.Z,(0,a.Z)((0,a.Z)({},{autoplay:!0,arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:e.map((function(e,t){return(0,y.jsx)(A,{item:e},t)}))}))},P=i(74165),w=i(15861),S=i(45987),B=i(10383),K=i(91294),E=i(35553),C=i(73477),z=i(16157),I=i(48569),Y=i(66399),q=i(7410),L=i(3463),U=i(31881),D=i.n(U),G=i(76208),Q=function(){var e=(0,s.useRef)(!0);return(0,s.useEffect)((function(){return function(){e.current=!1}}),[]),e},R=i(7066),T=i(36872),M=["className"],N=function(e){var t=e.className,i=(0,S.Z)(e,M),n=Q(),r=(0,Y.I0)();return(0,y.jsx)(q.J9,{initialValues:{email:"",submit:null},validationSchema:L.Ry().shape({email:L.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=(0,w.Z)((0,P.Z)().mark((function e(t,i){var a,s,o,l;return(0,P.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.setErrors,s=i.setStatus,o=i.setSubmitting,e.prev=1,l={headers:{"content-type":"application/json"}},e.next=5,D().post("https://yourapicall",{email:t.email},l);case 5:r((0,R.ss)({open:!0,message:"Success! Please check inbox and confirm.",variant:"alert",alert:{color:"success"},close:!1})),n.current&&(s({success:!0}),o(!1)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n.current&&(s({success:!1}),a({submit:null===e.t0||void 0===e.t0?void 0:e.t0.message}),o(!1));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,i){return e.apply(this,arguments)}}(),children:function(e){var n=e.errors,r=e.handleBlur,s=e.handleChange,o=e.handleSubmit,l=e.isSubmitting,c=e.touched,d=e.values;return(0,y.jsxs)("form",(0,a.Z)((0,a.Z)({noValidate:!0,onSubmit:o,className:t},i),{},{children:[(0,y.jsxs)(p.ZP,{container:!0,alignItems:"center",spacing:T.dv,children:[(0,y.jsx)(p.ZP,{item:!0,xs:!0,zeroMinWidth:!0,children:(0,y.jsxs)(B.Z,{fullWidth:!0,error:Boolean(c.email&&n.email),children:[(0,y.jsx)(K.Z,{htmlFor:"outlined-adornment-email-forgot",children:"Email Address"}),(0,y.jsx)(E.Z,{id:"outlined-adornment-email-forgot",type:"email",defaultValue:d.email,name:"email",onBlur:r,onChange:s,label:"Email Address"})]})}),(0,y.jsx)(p.ZP,{item:!0,children:(0,y.jsx)(G.Z,{children:(0,y.jsx)(C.Z,{disableElevation:!0,disabled:l,type:"submit",variant:"contained",size:"large",sx:{px:2.75,py:1.5},children:"Subscribe"})})})]}),c.email&&n.email&&(0,y.jsx)(z.Z,{sx:{mt:1},children:(0,y.jsx)(I.Z,{error:!0,id:"standard-weight-helper-text-email-forgot",children:n.email})}),n.submit&&(0,y.jsx)(z.Z,{sx:{mt:3},children:(0,y.jsx)(I.Z,{error:!0,children:n.submit})})]}))}})},H=i(1834),F=i(75579),X=i(30040),J=i(68913),V=i(13241),O=i(83962);var W=i.p+"static/media/logo.fd2b0d56de0c60011fb00969a6c64366.svg";var _=i.p+"static/media/logo-dark.ec5cd7933b65512af67a11d0aa6f3e1e.svg";var $=i.p+"static/media/img-soon-bg.9fe6491575c045fabb7435e0838b6516.svg";var ee=i.p+"static/media/img-soon-bg-grid.507433b0fd64b7735d4aa7ebb9f40966.svg";var te=i.p+"static/media/img-soon-bg-grid-dark.dcc850105ec54ec50462bffc218e1a6e.svg";var ie=i.p+"static/media/img-soon-2.8eea516f894b754a338dc935ddab6040.svg";var ae=i.p+"static/media/img-soon-3.f6231670a81320a4332631e4c11af50a.svg";var ne=i.p+"static/media/img-soon-4.aa00a4248acc090f4c5043310ff2755a.svg";var re=i.p+"static/media/img-soon-5.e2ee046738fa9ca259f1c79c7d1aadbe.svg";var se=i.p+"static/media/img-soon-6.8eb30ab51134c108fa0fe3f2118c7a51.svg";var oe=i.p+"static/media/img-soon-7.881726311bcd4476ca4aefa242f62348.svg";var le=i.p+"static/media/img-soon-8.3c84a925cac4f074e2457e0e47cebb35.svg",ce=Z.KP,de=(0,o.ZP)("div")((function(e){var t,i=e.theme;return t={maxWidth:720,margin:"0 auto",position:"relative"},(0,r.Z)(t,i.breakpoints.down("xl"),{marginTop:30}),(0,r.Z)(t,i.breakpoints.down("md"),{maxWidth:450}),(0,r.Z)(t,i.breakpoints.down("lg"),{display:"none"}),t})),me=(0,o.ZP)("div")((function(e){var t,i=e.theme;return t={maxWidth:550,margin:"0 0 0 auto"},(0,r.Z)(t,i.breakpoints.down("lg"),{margin:"0 auto"}),(0,r.Z)(t,i.breakpoints.up(1400),{maxWidth:600}),t})),pe=(0,o.ZP)(c.Z)((function(e){var t,i=e.theme;return t={minHeight:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"space-between"},(0,r.Z)(t,i.breakpoints.down("lg"),{display:"block"}),(0,r.Z)(t,i.breakpoints.up(1200),{overflow:"hidden",maxHeight:"100vh"}),(0,r.Z)(t,i.breakpoints.up(1400),{alignItems:"center"}),t})),he=(0,o.ZP)("div")((function(e){var t=e.theme;return{borderRadius:"8px",width:"calc(100% - 40px)",marginLeft:40,height:"calc(100% - 40px)",position:"absolute",left:0,background:"dark"===t.palette.mode?t.palette.dark.main:t.palette.primary.light}})),xe=(0,o.ZP)("img")({position:"absolute",top:0,left:0,width:"100%",zIndex:3}),ge=(0,o.ZP)("img")({position:"absolute",top:0,left:0,width:"100%",animation:"5s wings ease-in-out infinite",zIndex:5,"&:nth-of-type(3)":{animationDelay:"2s"},"&:nth-of-type(4)":{animationDelay:"1s"},"&:nth-of-type(5)":{animationDelay:"3s"},"&:nth-of-type(9)":{animationDelay:"5s"},"&:nth-of-type(10)":{animationDelay:"6s"},"&:nth-of-type(7)":{animation:"3s blink ease-in-out infinite",animationDelay:"1s"},"&:nth-of-type(6)":{animation:"3s blink ease-in-out infinite",animationDelay:"2s"}}),ue=function(){var e=(0,l.Z)(),t=s.useState(!1),i=(0,n.Z)(t,2),r=i[0],o=i[1],c=[{source:j},{source:v},{source:b}];return(0,y.jsxs)(pe,{children:[(0,y.jsxs)(d.Z,{sx:{p:0},children:[(0,y.jsxs)(d.Z,{sx:{position:"relative"},children:[(0,y.jsx)(m.Z,{component:"img",image:$,title:"Slider5 image",sx:{position:"absolute",bottom:-40,left:50,width:400,transform:"rotate(145deg)"}}),"light"===e.palette.mode&&(0,y.jsx)("img",{src:W,alt:"Berry",width:"100"}),"dark"===e.palette.mode&&(0,y.jsx)("img",{src:_,alt:"Berry",width:"100"})]}),(0,y.jsx)(p.ZP,{container:!0,spacing:T.dv,children:(0,y.jsx)(p.ZP,{item:!0,xs:12,children:(0,y.jsxs)(de,{children:[(0,y.jsx)(m.Z,{component:"img",image:$,title:"Slider5 image",sx:{position:"relative",zIndex:1}}),(0,y.jsx)(xe,{src:"dark"===e.palette.mode?te:ee,title:"Slider5 image"}),(0,y.jsx)(ge,{src:ie,title:"Slider5 image"}),(0,y.jsx)(ge,{src:ae,title:"Slider5 image"}),(0,y.jsx)(ge,{src:ne,title:"Slider5 image"}),(0,y.jsx)(ge,{src:re,title:"Slider5 image"}),(0,y.jsx)(ge,{src:se,title:"Slider5 image"}),(0,y.jsx)(ge,{src:oe,title:"Slider5 image"}),(0,y.jsx)(ge,{src:le,title:"Slider5 image"})]})})})]}),(0,y.jsx)(d.Z,{sx:{padding:{xs:3,xl:10},margin:"0 auto"},children:(0,y.jsx)(p.ZP,{container:!0,spacing:T.dv,children:(0,y.jsx)(p.ZP,{item:!0,xs:12,children:(0,y.jsx)(me,{children:(0,y.jsxs)(p.ZP,{container:!0,spacing:T.dv,children:[(0,y.jsx)(p.ZP,{item:!0,xs:12,children:(0,y.jsx)(h.Z,{variant:"h2",component:"div",color:"primary",children:"Coming Soon"})}),(0,y.jsx)(p.ZP,{item:!0,xs:12,children:(0,y.jsxs)(p.ZP,{container:!0,spacing:2,children:[(0,y.jsx)(p.ZP,{item:!0,xs:12,children:(0,y.jsx)(h.Z,{variant:"h1",component:"div",children:"Berry - The React Admin Template"})}),(0,y.jsx)(p.ZP,{item:!0,xs:12,children:(0,y.jsx)(h.Z,{sx:{fontSize:"1.125rem"},children:"Presenting Material-UI based React Dashboard Template to build performance centric websites and applications."})})]})}),(0,y.jsx)(p.ZP,{item:!0,xs:12,children:(0,y.jsxs)(p.ZP,{container:!0,spacing:T.dv,children:[(0,y.jsx)(p.ZP,{item:!0,children:(0,y.jsxs)(h.Z,{variant:"h5",component:"div",color:"secondary",sx:{display:"flex",alignItems:"center"},children:[(0,y.jsx)(F.Z,{sx:{mr:.625,fontSize:"1rem"}}),"Flexible & Fast"]})}),(0,y.jsx)(p.ZP,{item:!0,children:(0,y.jsxs)(h.Z,{variant:"h5",component:"div",color:"secondary",sx:{display:"flex",alignItems:"center"},children:[(0,y.jsx)(F.Z,{sx:{mr:.625,fontSize:"1rem"}}),"Material UI"]})}),(0,y.jsx)(p.ZP,{item:!0,children:(0,y.jsxs)(h.Z,{variant:"h5",component:"div",color:"secondary",sx:{display:"flex",alignItems:"center"},children:[(0,y.jsx)(F.Z,{sx:{mr:.625,fontSize:"1rem"}}),"Javascript / Typescript"]})})]})}),(0,y.jsx)(p.ZP,{item:!0,xs:12,children:(0,y.jsx)(N,{})}),(0,y.jsx)(p.ZP,{item:!0,xs:12,children:(0,y.jsxs)(p.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:T.dv,children:[(0,y.jsxs)(p.ZP,{item:!0,xs:12,sm:6,sx:{position:"relative"},children:[(0,y.jsx)(he,{}),(0,y.jsx)(x.Z,{href:"#",variant:"inherit",component:"div",sx:{width:"calc(100% - 20px)",mt:2.5,boxShadow:"0px 45px 45px rgba(30, 136, 229, 0.2)",borderRadius:"8px",overflow:"hidden",cursor:"pointer"},onClick:function(){o(!0)},children:(0,y.jsx)(k,{})}),(0,y.jsx)(ce,{children:r?(0,y.jsx)(Z.u_,{onClose:function(){return o(!r)},children:(0,y.jsx)(Z.ZP,{views:c})}):null})]}),(0,y.jsx)(p.ZP,{item:!0,xs:12,sm:6,sx:{position:"relative"},children:(0,y.jsxs)(p.ZP,{container:!0,justifyContent:"space-between",spacing:T.dv,children:[(0,y.jsx)(p.ZP,{item:!0,xs:12,children:(0,y.jsxs)(p.ZP,{container:!0,justifyContent:"flex-end",spacing:1,children:[(0,y.jsx)(p.ZP,{item:!0,children:(0,y.jsx)(g.Z,{component:x.Z,href:"https://blog.berrydashboard.io/",target:"_blank",children:(0,y.jsx)(u.Z,{sx:(0,a.Z)((0,a.Z)((0,a.Z)({},e.typography.commonAvatar),e.typography.mediumAvatar),{},{bgcolor:"dark"===e.palette.mode?e.palette.dark.main:e.palette.secondary.light,color:"dark"===e.palette.mode?e.palette.secondary.main:e.palette.secondary.dark}),children:(0,y.jsx)(O.Z,{})})})}),(0,y.jsx)(p.ZP,{item:!0,children:(0,y.jsx)(g.Z,{component:x.Z,href:"https://www.facebook.com/codedthemes",target:"_blank",children:(0,y.jsx)(u.Z,{sx:(0,a.Z)((0,a.Z)((0,a.Z)({},e.typography.commonAvatar),e.typography.mediumAvatar),{},{bgcolor:"dark"===e.palette.mode?e.palette.dark.main:e.palette.primary.light,color:"dark"===e.palette.mode?e.palette.primary.main:e.palette.primary.dark}),children:(0,y.jsx)(X.Z,{})})})}),(0,y.jsx)(p.ZP,{item:!0,children:(0,y.jsx)(g.Z,{component:x.Z,href:"https://twitter.com/codedthemes",target:"_blank",children:(0,y.jsx)(u.Z,{sx:(0,a.Z)((0,a.Z)((0,a.Z)({},e.typography.commonAvatar),e.typography.mediumAvatar),{},{bgcolor:"dark"===e.palette.mode?e.palette.dark.main:e.palette.warning.light,color:(e.palette.mode,e.palette.warning.dark)}),children:(0,y.jsx)(J.Z,{})})})}),(0,y.jsx)(p.ZP,{item:!0,children:(0,y.jsx)(g.Z,{component:x.Z,href:"https://github.com/codedthemes",target:"_blank",children:(0,y.jsx)(u.Z,{sx:(0,a.Z)((0,a.Z)((0,a.Z)({},e.typography.commonAvatar),e.typography.mediumAvatar),{},{bgcolor:"dark"===e.palette.mode?e.palette.dark.main:e.palette.grey[200],color:"dark"===e.palette.mode?e.palette.dark.light:e.palette.grey[800]}),children:(0,y.jsx)(V.Z,{})})})}),(0,y.jsx)(p.ZP,{item:!0,children:(0,y.jsx)(g.Z,{component:x.Z,href:"https://dribbble.com/codedthemes",target:"_blank",children:(0,y.jsx)(u.Z,{sx:(0,a.Z)((0,a.Z)((0,a.Z)({},e.typography.commonAvatar),e.typography.mediumAvatar),{},{bgcolor:"dark"===e.palette.mode?e.palette.dark.main:e.palette.grey[100],color:"dark"===e.palette.mode?e.palette.grey[600]:e.palette.grey[500]}),children:(0,y.jsx)(H.Ps0,{})})})})]})}),(0,y.jsx)(p.ZP,{item:!0,xs:12,children:(0,y.jsxs)(p.ZP,{container:!0,alignItems:"center",justifyContent:"flex-end",spacing:1,children:[(0,y.jsx)(p.ZP,{item:!0,children:(0,y.jsx)(h.Z,{variant:"body1",align:"right",component:"div",children:"Project By"})}),(0,y.jsx)(p.ZP,{item:!0,children:(0,y.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAbCAYAAAC0n4dLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAlJSURBVHgB7VppdJTVGX6+YQIhCYQkBAuEfSkiWFqQag14OLVy0KPWhdJzkNYKbRW0lS62R9saW2u1tcUuai1YtfS4BIQKFaGthVMQkSVwaAibhCXIloWsk5nM8vo+c+/IJJOZLP5hjvOc85zM3Hu/+333vs+73PkCpPCJhoNuYt00yc+5HEMyRiLHFUKwsgSV/n04NnOv04QUkgZdEkDJAzIotxBfzirA3JzxGBEKIENnSLMTNfs98FTvxnuBerxQVYrtU4qcKqSQ/Ci+VrKPrZW5jSdkZ8AjPukAvhppqjska8tfl+k7J0saUkhevLdI8s5uk+XBFukyWuqk8fBLshApJCe23i2Dq/fIqyG/eKWbCPjEe+Kf8uDGOyUdKSQPnoOkVe2SlXEtGxRpahI50hiS/Q1i2Gj4vkfTQOjCUH+D1B5bJXOLIT2QwkUFd7yOK4owK/cy3Bavf9d6wVKfYHeGwOtyEHQBAZ1NtC+vl2DNZBf6p5ka052F7LxJKBq+GHuwBPuQwkWDdgWw8X7pN2oeHnF6xfbVHQFWPAwsuVKQMcBBwOsg3QdMOAnkB4A09fFBY4Asp/UBI3MoRg+7FfeoAO5F18CJ+ii9yhZ0H4w+WXYeH7oGx14bVHrijInMHUASoV0B5AxHYcZATGjb7m0E1hQBK0cIctPV6xsFhescXLPPwWBH0DdPd0GXP6DQhbQ2Mzu6/X3HYdbr02TgbZud0+gYNNhs5QLlaJiNf1P5grIMXcck5TLln5TPo2vIUb6o/EC5SvmosgZGGHn2+x3KXylLkESIEYBAnDOTcIu7d2zflt8A+yrUDT6rF9YCV29zYU6BGvwhoKcKwq1pwK1Rwz25/ZulZSJ//B2Ygc14GYmhM+ER5fdhNn2nsr+SJ4pZym8q322zjiBMBmpvrkj7p2A8FV24NoIBMBGI4vuB8k5lrvK7ynLlA8q+diyPvv448zn2fu2BzxLo5LOl2bHRfZy7R4Jr2r1hK6yeitzrRuKytu30/tK/6arG6R3qgYEa8hepGYbMRKfhSkNm/hSMn63F4Ao4wQRDP6/8nnINzAafse30si8oj9vvvZU3K69Svq/8h7Iiah6VKr6qbFDuQOuN50bNUF6v1NVhg/KdqH6K5VvKTDsvN5v7pdJXCQNfhEklW+34SKpixPqMbS+OuucN9n40zOqo6+guTB3jldOU/1O+Ydv57CeUS+0aiGzlHOXlSkbSv9q/kfXOg3GYFehEynS1bcifgAJ3OvLbtlerxus1CKeFdKXVuuvTgYJr0SU4bri0NLh04eyw4RJhPsxm348Lxif+DhMFTsGE3teUz8KEdwpmu7LQjr1R+R/lTcrrlK/aawgeSR+DSSlTYKLKWzCezcqHDsAIczeMuFbbcYlAAy2CiQp/UX5D+R3b9xMY8a5Trlf+yN4Ldn4a8XPg4Qu4S/mM8j4Yww9ULrFjmYqeUGqVhadhouPbMA5Dmy2GSVFX2TV3iBgB9BqIzJDEGqhJdd/Y1/52rN5fMM7k9a5Cfz7ODhjvi4dIXuU7hbMJxn0Fxgu5mawVvqbkT88PKnvCpI/zylthPOaPvL29lh76dRijc3N/DeP9FNwgGGNpcguHeV7PSOBFYnAvKThNlPg/TAqj+C6B8WSKgiLR+Bk2EvuGwUQEGlJL6/AJaald1732O6/T3Q4L83aYiLQSJpWx/2W7Vq6ZUYqpgenobXQCMSmgpS4cNmLCs3NJCPU5DjIzHPQPODh9VJ/8Cm1v8zZBxRPeZXectwzigre37yNDtDtEeQ5moVR1PBFQ5Qx9G+x4kmGewqCAxsJ4/X47npt+l/08EaamYEieZdu4eRkwIXYUwjLHv2wfQ/5eJAadpgQXcm+tXcNYey8WipGfxbm/zTBG5HiKLxKuKZLzlkTkZEEDM8RTvL/HBeflXjIlUkSMiL9QvgITTTpETASo2I1TEkB12/Z+Y0OomdaMJn3kHiM1Of9bcPRA6zF1mhF/uklwwyshHKqLrUEkqMnfjYP++vDiE2G5XdhvYTwogrkwi2dBxpzPjR1r+9j2aeURPgpMNGC90Mf2M8dm28+n7BiGTIqF+Z5hlUUcDX3atg2z44fY/kRwATHCduy96KlfUk615GcK4qC9ztfmmvaOkmKfiyeZK6PmYoT6nR3D9HI1jLAXoxOIiQD1XlTWH8b+jEFhpX2E/prAR89rwv7lLUjv2RN1mukeWiu4UcunS4c4+MAjWFWqK1U/rEkX3FfuQ/HE3siOukPID3/DEZTN2OR0dFamJzPfs6BhMUSp0ZD0eqqdYZEq5w9VPBay4GHup9GYdz22nXme4fKQ8hYYL4rMvxEm/DN/0vAUC3PvkzCexLDNIpShlCE5pi7qJMrt81O8LPxoSKYfCnZTnGtccdpZjBYpj8GIiuJ9HGb9FDyNvw0Xok+HiLnRt3c5/vMH8Zoaq5WaKcv5EzPgndOIszlqSd2yk2qSpzToLVAh/EyzX+lZgdMrhKrhXpzUDF7T0joK6Ovi2rJlcRcdDXoEiyAWfCwCWfEOVeo5JJzPufjD9jMLtGuUjFos2t6wc7A4ZEVO4zJ0/hzGmKyqK2GEwtzP4msEjGBeggnPFAgFUGXnZpHGXMsjYGRR5fYZImABGv0jEY2wyY4vghEnw/KLMEdEeij3mBHiXNR1XMfmqO+shfbY52JtwVrhdjsPBUzBsm5gRGOket5+fhKdQLuZuuQPkj/mZmzLGoqRbft2BLxYeKQeDaUZ6NeUDlfIaCjkVsPnBHEmVyOE38Hjo3pj/uAerW5QuQPFA6Y6c9A1cAoWQAEk2a9sSY2y5+SeBO+B5NGaOpl64Jz0310lfXZWS7Zy/I46mVPaLEe9gZhrPFVSUfqUFCKF5EDxTMk9v1/eCbaE7R37mld53BeUXU1+2Vrvl+0NATnoCYq3ndH6Otlf8ZY8nPrnkCRD6dMyqa5cyuRjgAKq3CHLtjwhfZBC8qHszzKm9qDslG5Aje8/vUWeTf0fQJKj5DHJP/eu/NJzRqol1AnLa35orJC9FetlgUaRLKSQ/KAXn9gg009vkmeaq+REwCP1AZ+0ML8H1NMDzdKsbZVq+PLjb8qPt/1QxvDNIlK4qNENA4mzZjLyCq7HmAHTkZs5TI9oekKtLkVz7XacPfVfHLhpl+NBCimkcPHjQ+Eq2l60YgDJAAAAAElFTkSuQmCC",alt:"Berry",width:"128"})})]})})]})})]})})]})})})})})]})}}}]);