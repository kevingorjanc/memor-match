(this["webpackJsonpmemor-match"]=this["webpackJsonpmemor-match"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/memory-match.034b4acc.svg"},function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/highscores-title.d40d221d.svg"},function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),l=a(10),c=a.n(l),n=(a(17),a(2)),r=a(3),o=a(5),m=a(4),h=a(1),d=a(6),u=(a(8),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).firstRow=[],a.secondRow=[],a.thirdRow=[],a.fourthRow=[],a.randomizeTiles(),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(){if(!0===this.props.resetTiles){var e;[].push(this.firstRow,this.secondRow,this.thirdRow,this.fourthRow);var t=document.getElementsByClassName("game-tiles");for(e=0;e<t.length;e++)t[e].className="game-tiles";this.props.turnOffReset()}}},{key:"randomizeTiles",value:function(){for(var e=[i.a.createElement("div",{id:"red",className:"game-tiles",onClick:this.props.handleTileClick}),i.a.createElement("div",{id:"red",className:"game-tiles",onClick:this.props.handleTileClick}),i.a.createElement("div",{id:"yellow",className:"game-tiles",onClick:this.props.handleTileClick}),i.a.createElement("div",{id:"yellow",className:"game-tiles",onClick:this.props.handleTileClick}),i.a.createElement("div",{id:"grey",className:"game-tiles",onClick:this.props.handleTileClick}),i.a.createElement("div",{id:"grey",className:"game-tiles",onClick:this.props.handleTileClick}),i.a.createElement("div",{id:"green",className:"game-tiles",onClick:this.props.handleTileClick}),i.a.createElement("div",{id:"green",className:"game-tiles",onClick:this.props.handleTileClick}),i.a.createElement("div",{id:"blue",className:"game-tiles",onClick:this.props.handleTileClick}),i.a.createElement("div",{id:"blue",className:"game-tiles",onClick:this.props.handleTileClick}),i.a.createElement("div",{id:"purple",className:"game-tiles",onClick:this.props.handleTileClick}),i.a.createElement("div",{id:"purple",className:"game-tiles",onClick:this.props.handleTileClick}),i.a.createElement("div",{id:"orange",className:"game-tiles",onClick:this.props.handleTileClick}),i.a.createElement("div",{id:"orange",className:"game-tiles",onClick:this.props.handleTileClick}),i.a.createElement("div",{id:"pink",className:"game-tiles",onClick:this.props.handleTileClick}),i.a.createElement("div",{id:"pink",className:"game-tiles",onClick:this.props.handleTileClick})];e.length>0;){var t=e.length,a=Math.floor(Math.random()*t);t>=13&&t<=16?this.firstRow.push(e.splice(a,1)):t>=9&&t<=12?this.secondRow.push(e.splice(a,1)):t>=5&&t<=8?this.thirdRow.push(e.splice(a,1)):this.fourthRow.push(e.splice(a,1))}}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row"},this.firstRow),i.a.createElement("div",{className:"row"},this.secondRow),i.a.createElement("div",{className:"row"},this.thirdRow),i.a.createElement("div",{className:"row"},this.fourthRow))}}]),t}(i.a.Component)),p=a(7),g=a.n(p),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).submitScore=a.submitScore.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"submitScore",value:function(){var e=this;if(document.getElementsByClassName("user-name")[0].value.length>4&&document.getElementsByClassName("user-name")[0].value.length<=40){var t={attemptedMatches:this.props.tileClicks/2,name:document.getElementsByClassName("user-name")[0].value,time:this.props.displayTime,compositeScore:this.props.displayTime+this.props.tileClicks/2};fetch("/high-scores",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){e.props.viewHighScores()}))}else alert("Moniker must be between 5 and 40 characters!!")}},{key:"render",value:function(){return i.a.createElement("div",{className:"game-won"},i.a.createElement("div",{className:"game-win-text"},"You've Beaten"),i.a.createElement("div",{className:"game-end-logo"},i.a.createElement("img",{src:g.a,alt:"MemoryMatch!",className:"logo"})),i.a.createElement("br",null),i.a.createElement("div",{className:"attemots"},i.a.createElement("b",null,"Matches Attempted: ",this.props.tileClicks/2)),i.a.createElement("div",{className:"attempts"},i.a.createElement("b",null,"Game Duration : ",this.props.displayTime," Seconds")),i.a.createElement("div",null,i.a.createElement("div",{className:"name-input-field-label"},"Choose a Name!"),i.a.createElement("input",{className:"user-name"})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{className:"reset-game-button",onClick:this.submitScore},"Submit Score"),i.a.createElement("button",{className:"reset-game-button",onClick:this.props.resetGame},"Play Again"))}}]),t}(i.a.Component),v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var s=arguments.length,i=new Array(s),l=0;l<s;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).startTime="",a.compareTime="",a.displayTime="",a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(){if(""===this.startTime){var e=new Date;this.startTime=e.getTime()}else{var t=new Date;this.compareTime=t.getTime(),this.displayTime=(this.compareTime-this.startTime)/1e3}}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"timer-display"}," Time Elapsed = ",this.displayTime," seconds"),8===this.props.matches?i.a.createElement(b,{tileClicks:this.props.tileClicks,displayTime:this.displayTime,resetGame:this.props.resetGame,viewHighScores:this.props.viewHighScores}):i.a.createElement("span",null))}}]),t}(i.a.Component),k=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={firstTileColor:"",secondTileColor:"",matches:0,resetTiles:!1,tileClicks:0},a.handleTileClick=a.handleTileClick.bind(Object(h.a)(a)),a.compareTileColors=a.compareTileColors.bind(Object(h.a)(a)),a.turnOffReset=a.turnOffReset.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleTileClick",value:function(e){var t=this;if(e.target.className.length<12){var a=e.target.id;e.target.className=e.target.className+" "+a,console.log("handling click"),""===this.state.firstTileColor?this.setState({firstTileColor:a,tileClicks:this.state.tileClicks+1}):(this.setState({secondTileColor:a,tileClicks:this.state.tileClicks+1}),setTimeout((function(){return t.compareTileColors()}),300))}}},{key:"compareTileColors",value:function(){console.log("comparing colors"),this.state.firstTileColor===this.state.secondTileColor?this.setState({firstTileColor:"",secondTileColor:"",matches:this.state.matches+1}):this.setState({firstTileColor:"",secondTileColor:"",matches:0,resetTiles:!0})}},{key:"turnOffReset",value:function(){this.setState({resetTiles:!1})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"title"},i.a.createElement("img",{src:g.a,alt:"MemoryMatch!",className:"logo"})),i.a.createElement("div",{className:"rules"},i.a.createElement("b",null,"Match the tiles, remember the matches.")),i.a.createElement("br",null),i.a.createElement("div",{className:"stat-display-box"},i.a.createElement("div",{className:"attempts-display"},"Matches Attempted : ",Math.floor(this.state.tileClicks/2)),i.a.createElement(v,{matches:this.state.matches,tileClicks:this.state.tileClicks,resetGame:this.props.resetGame,viewHighScores:this.props.viewHighScores})),i.a.createElement("br",null),i.a.createElement(u,{handleTileClick:this.handleTileClick,resetTiles:this.state.resetTiles,turnOffReset:this.turnOffReset}))}}]),t}(i.a.Component),f=a(11),E=a.n(f),C=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={backendData:"",displayableScores:[]},a.callBackend=a.callBackend.bind(Object(h.a)(a)),a.callBackend(),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"callBackend",value:function(){var e=this;console.log("calling backend"),fetch("/high-scores").then((function(e){return e.json()})).then((function(t){e.setState({backendData:t})})).then((function(){e.sortData()})).catch((function(e){console.log(e)}))}},{key:"sortData",value:function(){console.log("sorting response data");var e=this.state.backendData.sort((function(e,t){return e.compositeScore>t.compositeScore?1:-1}));this.makeSortedDataDisplayable(e)}},{key:"makeSortedDataDisplayable",value:function(e){console.log("parsing sorted data for display");for(var t=[],a=0;a<=e.length-1&&a<=50;){var s=i.a.createElement("tr",{className:"score-rows"},i.a.createElement("td",{key:e[a].id},a+1),i.a.createElement("td",{key:e[a].id},i.a.createElement("b",null,e[a].name)),i.a.createElement("td",{key:e[a].id},i.a.createElement("b",null,e[a].compositeScore)));a++,t.push(s)}this.setState({displayableScores:t})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"high-scores"},i.a.createElement("img",{src:E.a,alt:"HIGH SCORES!!!",className:"high-scores-title"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("table",{className:"table-container"},i.a.createElement("tbody",null,i.a.createElement("tr",{className:"high-score-table-headers"},i.a.createElement("th",{className:"high-score-table-headers-small"}),i.a.createElement("th",{className:"high-score-table-headers-small"}),i.a.createElement("th",{className:"high-score-table-headers-small"},i.a.createElement("i",null,"Time + Attempted Matches"))),this.state.displayableScores)),i.a.createElement("button",{className:"reset-game-button",onClick:this.props.closeHighScores},"close scores")))}}]),t}(i.a.Component),T=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={startGame:!1,viewScores:!1},a.startGame=a.startGame.bind(Object(h.a)(a)),a.resetGame=a.resetGame.bind(Object(h.a)(a)),a.viewHighScores=a.viewHighScores.bind(Object(h.a)(a)),a.closeHighScores=a.closeHighScores.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"startGame",value:function(){this.setState({startGame:!0,viewScores:!1})}},{key:"resetGame",value:function(){this.setState({startGame:!1})}},{key:"viewHighScores",value:function(){this.setState({viewScores:!0,startGame:!1})}},{key:"closeHighScores",value:function(){this.setState({viewScores:!1})}},{key:"whichView",value:function(){return this.state.startGame?i.a.createElement(k,{resetGame:this.resetGame,viewHighScores:this.viewHighScores}):this.state.viewScores?i.a.createElement(C,{closeHighScores:this.closeHighScores,newScore:this.state.newScore}):i.a.createElement("div",{className:"start-screen"},i.a.createElement("img",{src:g.a,alt:"MemoryMatch!",className:"logo"}),i.a.createElement("br",null),i.a.createElement("button",{className:"reset-game-button",onClick:this.startGame},"Start Game"),i.a.createElement("button",{className:"reset-game-button",onClick:this.viewHighScores},"High Scores"))}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,this.whichView()))}}]),t}(i.a.Component);console.log("memorymatch starting"),c.a.render(i.a.createElement(T,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.3b58b368.chunk.js.map