(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},343:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(10),s=n.n(r),c=(n(103),n(90)),l=n(91),i=n(97),u=n(92),h=n(98),m=(n(104),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),o.a.createElement("h2",null,e.monster.name),o.a.createElement("p",null,e.monster.email))}),d=(n(105),function(e){return console.log(e),o.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return o.a.createElement(m,{key:e.id,monster:e})})))}),f=(n(106),function(e){var t=e.placeholder,n=e.handleChange;return o.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=(n(107),n(108),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null," Monsters Rolodex"),o.a.createElement(f,{placeholder:"search monsters",handleChange:this.handleChange}),o.a.createElement(d,{monsters:a}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,n){e.exports=n(343)}},[[99,1,2]]]);
//# sourceMappingURL=main.0d63b00e.chunk.js.map