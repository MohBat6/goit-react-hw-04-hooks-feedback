(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,function(e,t,n){e.exports={section:"Section_section__9-2dl",h1:"Section_h1__2wj0y"}},,function(e,t,n){e.exports={list:"Statistics_list__3EDhu"}},function(e,t,n){e.exports={container:"FeedbackOptions_container__3om1E",button:"FeedbackOptions_button__V9UIi"}},function(e,t,n){e.exports={container:"Notification_container__3HxxL"}},function(e,t,n){e.exports={container:"App_container__YmTFY"}},,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(5),s=n.n(i),r=n(2),o=n(6),j=n.n(o),b=n(0),l=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,i=e.positivePercentage;return Object(b.jsxs)("ul",{className:j.a.list,children:[Object(b.jsx)("li",{children:Object(b.jsxs)("span",{children:["Good: ",t," "]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("span",{children:["Neutral: ",n]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("span",{children:["Bad: ",c]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("span",{children:["Total: ",a]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("span",{children:["Positive feedback: ","".concat(i," %")]})})]})},u=n(4),d=n.n(u),h=function(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{className:d.a.section,children:[Object(b.jsx)("h1",{className:d.a.h1,children:t}),n]})},O=n(7),x=n.n(O),f=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(b.jsx)("div",{children:t.map((function(e,t){return Object(b.jsx)("button",{type:"button",className:x.a.button,style:{backgroundColor:e},onClick:function(){return n(e)},children:e},t)}))})},p=n(8),_=n.n(p),k=function(e){var t=e.message;return Object(b.jsx)("div",{className:_.a.container,children:Object(b.jsx)("span",{children:t})})},v=n(9),g=n.n(v);var m=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(0),s=Object(r.a)(i,2),o=s[0],j=s[1],u=Object(c.useState)(0),d=Object(r.a)(u,2),O=d[0],x=d[1],p=function(){return n+o+O};return Object(b.jsx)("div",{className:g.a.container,children:Object(b.jsxs)(h,{title:"Please leave feedback",children:[Object(b.jsx)(f,{options:["good","neutral","bad"],onLeaveFeedback:function(e){return function(e){switch(e){case"good":a((function(e){return e+1}));break;case"bad":x((function(e){return e+1}));break;case"neutral":j((function(e){return e+1}));break;default:return}}(e)}}),Object(b.jsx)("h2",{children:"Statistics"}),p()>0?Object(b.jsx)(l,{good:n,neutral:o,bad:O,total:p(),positivePercentage:function(){var e=100*n/p();return Math.round(e)}()}):Object(b.jsx)(k,{message:"No feedback given"})]})})};n(15);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.1157454b.chunk.js.map