(this.webpackJsonpinform=this.webpackJsonpinform||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=(a(15),a(1)),s=a.n(o),i=a(5),u=a(6),m=a(7),h=a(9),d=a(8),p=function(e){var t=e.type||"text",a="".concat(t,"-").concat(Math.random());return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:t,id:a,onChange:e.onChange,defaultChecked:"true"}),r.a.createElement("label",{htmlFor:a},e.label.toUpperCase()))},f=a(2),v=a.n(f),b=null,E=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={},window.localStorage&&(b=window.localStorage),n.state={resetDisabled:!0,head:[],columnState:{},data:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.props.url);case 2:if(t=e.sent,a=this.state,!t.ok){e.next=11;break}return e.next=7,t.json();case 7:for(r in n=e.sent,a.data=n.data.slice(),a.data[0])r=r.replace("_"," "),a.head.push(r),a.columnState[r]=!0;this.setState({state:a});case 11:this.loadFromStorage();case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadFromStorage",value:function(){if(b){var e=JSON.parse(b.getItem("columnState"));if(e){var t=this.state;t.columnState=e,t.resetDisabled=!1,this.setState({state:t})}}}},{key:"onInputChange",value:function(e){var t=this.state;t.columnState[e]=!1,t.resetDisabled=!1,this.setState({state:t}),b&&b.setItem("columnState",JSON.stringify(t.columnState))}},{key:"renderHead",value:function(){var e=this;return this.state.head.map((function(t,a){if(e.state.columnState[t])return r.a.createElement("th",{key:a},r.a.createElement(p,{onChange:function(){return e.onInputChange(t)},label:t,type:"checkbox"}))}))}},{key:"renderBody",value:function(){var e=this;return this.state.data.map((function(t,a){return r.a.createElement("tr",{key:a},e.state.head.map((function(a,n){if(e.state.columnState[a]){var l=t[a.replace(" ","_")];return r.a.createElement("td",{className:v.a[a],key:n},"color"===a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{backgroundColor:l}}),r.a.createElement("span",null,l)):l)}})))}))}},{key:"onResetClick",value:function(e){e.preventDefault();var t=e.target.querySelector("svg");t&&t.classList.toggle("rotate"),b&&b.removeItem("columnState");var a=this.state;a.head.forEach((function(e){a.columnState[e]=!0})),a.resetDisabled=!0,this.setState({state:a})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:v.a.Table},r.a.createElement("table",null,r.a.createElement("caption",null,this.props.caption,r.a.createElement("button",{onClick:function(t){return e.onResetClick(t)},disabled:this.state.resetDisabled,type:"button"},r.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M7 9h-7v-7h1v5.2c1.853-4.237 6.083-7.2 11-7.2 6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.286 0-11.45-4.844-11.959-11h1.004c.506 5.603 5.221 10 10.955 10 6.071 0 11-4.929 11-11s-4.929-11-11-11c-4.66 0-8.647 2.904-10.249 7h5.249v1z"})),"Reset")),r.a.createElement("thead",null,r.a.createElement("tr",null,this.renderHead())),r.a.createElement("tbody",null,this.renderBody())))}}]),a}(r.a.Component),g=(a(17),function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(E,{caption:"Pantone colors",url:"https://reqres.in/api/unknown?per_page=12"}))});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))},2:function(e,t,a){e.exports={Table:"Table_Table__2DxTv",name:"Table_name__37pXL",id:"Table_id__2cFj5",year:"Table_year__JDcZN",color:"Table_color__2zaoL"}}},[[10,1,2]]]);
//# sourceMappingURL=main.0855617d.chunk.js.map