(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={section:"Feedback_section__24_hs",title:"Feedback_title__3KPzo",boxText:"Feedback_boxText__2kPy2",total:"Feedback_total__3RJO2",text:"Feedback_text__3r_2C",listBtn:"Feedback_listBtn__T9X1j",good:"Feedback_good__3Gsrk",neutral:"Feedback_neutral__1PsuQ",bad:"Feedback_bad__2-hVr",staticTitle:"Feedback_staticTitle__22Xyc",notFeedback:"Feedback_notFeedback__27IVT"}},16:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(4),i=a.n(s),o=a(5),r=a(6),d=a(7),b=a(10),l=a(9),u=a(1),j=a.n(u),h=a(0),_=function(e){var t=e.title,a=e.children;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{className:j.a.title,children:t}),a]})},k=function(e){var t=e.options,a=e.onLeaveFeedback,c=Object.keys(t);return Object(h.jsx)("ul",{className:j.a.listBtn,children:c.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("button",{id:e,onClick:a,className:j.a["".concat(e)]})},e)}))})},x=function(e){var t=e.message;return Object(h.jsx)("h2",{className:j.a.notFeedback,children:t})},O=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positiveFeedback;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:j.a.staticTitle,children:"Statistics"}),0===n?Object(h.jsx)(x,{message:"No feedback given"}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:j.a.boxText,children:[Object(h.jsxs)("p",{className:j.a.text,children:["Good:",t]}),Object(h.jsxs)("p",{className:j.a.text,children:["Neutral:",a]}),Object(h.jsxs)("p",{className:j.a.text,children:["Bad:",c]})]}),Object(h.jsxs)("p",{className:j.a.total,children:["Total:",n]}),Object(h.jsxs)("p",{className:j.a.total,children:["Positive Feedback:",s,"%"]})]})]})},v=function(e){Object(b.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.giveFeedback=function(t){var a=t.target.id;e.setState((function(e){return Object(o.a)({},"".concat(a),e["".concat(a)]+1)})),e.countTotalFeedback(),e.countPositiveFeedbackPercentage()},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=Object.values(e.state).reduce((function(e,t){return e+t}),0),a=(e.state.neutral+e.state.good)/t*100;return Number.parseInt(a)},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:j.a.section,children:Object(h.jsxs)(_,{title:"Please Live Feedback",children:[Object(h.jsx)(k,{options:this.state,onLeaveFeedback:this.giveFeedback}),Object(h.jsx)(O,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positiveFeedback:this.countPositiveFeedbackPercentage()})]})})}}]),a}(c.Component),F=a(8),p=a.n(F),f=function(){return Object(h.jsx)("div",{className:p.a.container,children:Object(h.jsx)(v,{})})};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={container:"App_container__31N_t"}}},[[16,1,2]]]);
//# sourceMappingURL=main.a2ae4f47.chunk.js.map