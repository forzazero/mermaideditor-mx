import{ia as Cq}from"./chunk-jbaqfsdx.js";import{la as Fq,ma as Pq,na as Lq,qa as e}from"./chunk-ws1qyqdb.js";import"./chunk-tv32rnyg.js";import{kc as zq,pc as Hq,qc as Iq,rc as Mq,sc as Nq,tc as Rq,uc as Wq,vc as Eq,wc as u}from"./chunk-6rq1j1c6.js";import{Ec as Q,Mc as k,md as n}from"./chunk-5490625s.js";import"./chunk-fn162pnw.js";var o=function(){var q=Q(function(z,J,K,U){for(K=K||{},U=z.length;U--;K[z[U]]=J);return K},"o"),X=[6,8,10,11,12,14,16,17,18],G=[1,9],N=[1,10],Z=[1,11],H=[1,12],R=[1,13],B=[1,14],W={trace:Q(function(){},"trace"),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:Q(function(J,K,U,I,M,Y,C){var P=Y.length-1;switch(M){case 1:return Y[P-1];case 2:this.$=[];break;case 3:Y[P-1].push(Y[P]),this.$=Y[P-1];break;case 4:case 5:this.$=Y[P];break;case 6:case 7:this.$=[];break;case 8:I.setDiagramTitle(Y[P].substr(6)),this.$=Y[P].substr(6);break;case 9:this.$=Y[P].trim(),I.setAccTitle(this.$);break;case 10:case 11:this.$=Y[P].trim(),I.setAccDescription(this.$);break;case 12:I.addSection(Y[P].substr(8)),this.$=Y[P].substr(8);break;case 13:I.addTask(Y[P-1],Y[P]),this.$="task";break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},q(X,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:G,12:N,14:Z,16:H,17:R,18:B},q(X,[2,7],{1:[2,1]}),q(X,[2,3]),{9:15,11:G,12:N,14:Z,16:H,17:R,18:B},q(X,[2,5]),q(X,[2,6]),q(X,[2,8]),{13:[1,16]},{15:[1,17]},q(X,[2,11]),q(X,[2,12]),{19:[1,18]},q(X,[2,4]),q(X,[2,9]),q(X,[2,10]),q(X,[2,13])],defaultActions:{},parseError:Q(function(J,K){if(K.recoverable)this.trace(J);else{var U=Error(J);throw U.hash=K,U}},"parseError"),parse:Q(function(J){var K=this,U=[0],I=[],M=[null],Y=[],C=this.table,P="",w=0,Xq=0,Zq=0,Sq=2,Jq=1,jq=Y.slice.call(arguments,1),L=Object.create(this.lexer),$={yy:{}};for(var m in this.yy)if(Object.prototype.hasOwnProperty.call(this.yy,m))$.yy[m]=this.yy[m];if(L.setInput(J,$.yy),$.yy.lexer=L,$.yy.parser=this,typeof L.yylloc>"u")L.yylloc={};var l=L.yylloc;Y.push(l);var Tq=L.options&&L.options.ranges;if(typeof $.yy.parseError==="function")this.parseError=$.yy.parseError;else this.parseError=Object.getPrototypeOf(this).parseError;function wq(A){U.length=U.length-2*A,M.length=M.length-A,Y.length=Y.length-A}Q(wq,"popStack");function Kq(){var A=I.pop()||L.lex()||Jq;if(typeof A!=="number"){if(A instanceof Array)I=A,A=I.pop();A=K.symbols_[A]||A}return A}Q(Kq,"lex");var V,i,b,O,oq,r,g={},_,j,Qq,p;while(!0){if(b=U[U.length-1],this.defaultActions[b])O=this.defaultActions[b];else{if(V===null||typeof V>"u")V=Kq();O=C[b]&&C[b][V]}if(typeof O>"u"||!O.length||!O[0]){var c="";p=[];for(_ in C[b])if(this.terminals_[_]&&_>Sq)p.push("'"+this.terminals_[_]+"'");if(L.showPosition)c="Parse error on line "+(w+1)+`:
`+L.showPosition()+`
Expecting `+p.join(", ")+", got '"+(this.terminals_[V]||V)+"'";else c="Parse error on line "+(w+1)+": Unexpected "+(V==Jq?"end of input":"'"+(this.terminals_[V]||V)+"'");this.parseError(c,{text:L.match,token:this.terminals_[V]||V,line:L.yylineno,loc:l,expected:p})}if(O[0]instanceof Array&&O.length>1)throw Error("Parse Error: multiple actions possible at state: "+b+", token: "+V);switch(O[0]){case 1:if(U.push(V),M.push(L.yytext),Y.push(L.yylloc),U.push(O[1]),V=null,!i){if(Xq=L.yyleng,P=L.yytext,w=L.yylineno,l=L.yylloc,Zq>0)Zq--}else V=i,i=null;break;case 2:if(j=this.productions_[O[1]][1],g.$=M[M.length-j],g._$={first_line:Y[Y.length-(j||1)].first_line,last_line:Y[Y.length-1].last_line,first_column:Y[Y.length-(j||1)].first_column,last_column:Y[Y.length-1].last_column},Tq)g._$.range=[Y[Y.length-(j||1)].range[0],Y[Y.length-1].range[1]];if(r=this.performAction.apply(g,[P,Xq,w,$.yy,O[1],M,Y].concat(jq)),typeof r<"u")return r;if(j)U=U.slice(0,-1*j*2),M=M.slice(0,-1*j),Y=Y.slice(0,-1*j);U.push(this.productions_[O[1]][0]),M.push(g.$),Y.push(g._$),Qq=C[U[U.length-2]][U[U.length-1]],U.push(Qq);break;case 3:return!0}}return!0},"parse")},E=function(){var z={EOF:1,parseError:Q(function(K,U){if(this.yy.parser)this.yy.parser.parseError(K,U);else throw Error(K)},"parseError"),setInput:Q(function(J,K){if(this.yy=K||this.yy||{},this._input=J,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges)this.yylloc.range=[0,0];return this.offset=0,this},"setInput"),input:Q(function(){var J=this._input[0];this.yytext+=J,this.yyleng++,this.offset++,this.match+=J,this.matched+=J;var K=J.match(/(?:\r\n?|\n).*/g);if(K)this.yylineno++,this.yylloc.last_line++;else this.yylloc.last_column++;if(this.options.ranges)this.yylloc.range[1]++;return this._input=this._input.slice(1),J},"input"),unput:Q(function(J){var K=J.length,U=J.split(/(?:\r\n?|\n)/g);this._input=J+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-K),this.offset-=K;var I=this.match.split(/(?:\r\n?|\n)/g);if(this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),U.length-1)this.yylineno-=U.length-1;var M=this.yylloc.range;if(this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:U?(U.length===I.length?this.yylloc.first_column:0)+I[I.length-U.length].length-U[0].length:this.yylloc.first_column-K},this.options.ranges)this.yylloc.range=[M[0],M[0]+this.yyleng-K];return this.yyleng=this.yytext.length,this},"unput"),more:Q(function(){return this._more=!0,this},"more"),reject:Q(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:Q(function(J){this.unput(this.match.slice(J))},"less"),pastInput:Q(function(){var J=this.matched.substr(0,this.matched.length-this.match.length);return(J.length>20?"...":"")+J.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:Q(function(){var J=this.match;if(J.length<20)J+=this._input.substr(0,20-J.length);return(J.substr(0,20)+(J.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:Q(function(){var J=this.pastInput(),K=Array(J.length+1).join("-");return J+this.upcomingInput()+`
`+K+"^"},"showPosition"),test_match:Q(function(J,K){var U,I,M;if(this.options.backtrack_lexer){if(M={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges)M.yylloc.range=this.yylloc.range.slice(0)}if(I=J[0].match(/(?:\r\n?|\n).*/g),I)this.yylineno+=I.length;if(this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:I?I[I.length-1].length-I[I.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+J[0].length},this.yytext+=J[0],this.match+=J[0],this.matches=J,this.yyleng=this.yytext.length,this.options.ranges)this.yylloc.range=[this.offset,this.offset+=this.yyleng];if(this._more=!1,this._backtrack=!1,this._input=this._input.slice(J[0].length),this.matched+=J[0],U=this.performAction.call(this,this.yy,this,K,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input)this.done=!1;if(U)return U;else if(this._backtrack){for(var Y in M)this[Y]=M[Y];return!1}return!1},"test_match"),next:Q(function(){if(this.done)return this.EOF;if(!this._input)this.done=!0;var J,K,U,I;if(!this._more)this.yytext="",this.match="";var M=this._currentRules();for(var Y=0;Y<M.length;Y++)if(U=this._input.match(this.rules[M[Y]]),U&&(!K||U[0].length>K[0].length)){if(K=U,I=Y,this.options.backtrack_lexer)if(J=this.test_match(U,M[Y]),J!==!1)return J;else if(this._backtrack){K=!1;continue}else return!1;else if(!this.options.flex)break}if(K){if(J=this.test_match(K,M[I]),J!==!1)return J;return!1}if(this._input==="")return this.EOF;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:Q(function(){var K=this.next();if(K)return K;else return this.lex()},"lex"),begin:Q(function(K){this.conditionStack.push(K)},"begin"),popState:Q(function(){var K=this.conditionStack.length-1;if(K>0)return this.conditionStack.pop();else return this.conditionStack[0]},"popState"),_currentRules:Q(function(){if(this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1])return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;else return this.conditions.INITIAL.rules},"_currentRules"),topState:Q(function(K){if(K=this.conditionStack.length-1-Math.abs(K||0),K>=0)return this.conditionStack[K];else return"INITIAL"},"topState"),pushState:Q(function(K){this.begin(K)},"pushState"),stateStackSize:Q(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:Q(function(K,U,I,M){var Y=M;switch(I){case 0:break;case 1:break;case 2:return 10;case 3:break;case 4:break;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;break;case 8:return this.popState(),"acc_title_value";break;case 9:return this.begin("acc_descr"),14;break;case 10:return this.popState(),"acc_descr_value";break;case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}};return z}();W.lexer=E;function F(){this.yy={}}return Q(F,"Parser"),F.prototype=W,W.Parser=F,new F}();o.parser=o;var Dq=o,h="",t=[],f=[],y=[],$q=Q(function(){t.length=0,f.length=0,h="",y.length=0,Hq()},"clear"),bq=Q(function(q){h=q,t.push(q)},"addSection"),uq=Q(function(){return t},"getSections"),gq=Q(function(){let q=Gq(),X=100,G=0;while(!q&&G<X)q=Gq(),G++;return f.push(...y),f},"getTasks"),hq=Q(function(){let q=[];return f.forEach((G)=>{if(G.people)q.push(...G.people)}),[...new Set(q)].sort()},"updateActors"),fq=Q(function(q,X){let G=X.substr(1).split(":"),N=0,Z=[];if(G.length===1)N=Number(G[0]),Z=[];else N=Number(G[0]),Z=G[1].split(",");let H=Z.map((B)=>B.trim()),R={section:h,type:h,people:H,task:q,score:N};y.push(R)},"addTask"),yq=Q(function(q){let X={section:h,type:h,description:q,task:q,classes:[]};f.push(X)},"addTaskOrg"),Gq=Q(function(){let q=Q(function(G){return y[G].processed},"compileTask"),X=!0;for(let[G,N]of y.entries())q(G),X=X&&N.processed;return X},"compileTasks"),xq=Q(function(){return hq()},"getActors"),Uq={getConfig:Q(()=>u().journey,"getConfig"),clear:$q,setDiagramTitle:Wq,getDiagramTitle:Eq,setAccTitle:Iq,getAccTitle:Mq,setAccDescription:Nq,getAccDescription:Rq,addSection:bq,getSections:uq,getTasks:gq,addTask:fq,addTaskOrg:yq,getActors:xq},_q=Q((q)=>`.label {
    font-family: ${q.fontFamily};
    color: ${q.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${q.textColor}
  }

  .legend {
    fill: ${q.textColor};
    font-family: ${q.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${q.textColor}
  }

  .face {
    ${q.faceColor?`fill: ${q.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${q.mainBkg};
    stroke: ${q.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${q.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${q.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${q.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${q.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${q.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${q.fontFamily};
    font-size: 12px;
    background: ${q.tertiaryColor};
    border: 1px solid ${q.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${q.fillType0?`fill: ${q.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${q.fillType0?`fill: ${q.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${q.fillType0?`fill: ${q.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${q.fillType0?`fill: ${q.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${q.fillType0?`fill: ${q.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${q.fillType0?`fill: ${q.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${q.fillType0?`fill: ${q.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${q.fillType0?`fill: ${q.fillType7}`:""};
  }

  .actor-0 {
    ${q.actor0?`fill: ${q.actor0}`:""};
  }
  .actor-1 {
    ${q.actor1?`fill: ${q.actor1}`:""};
  }
  .actor-2 {
    ${q.actor2?`fill: ${q.actor2}`:""};
  }
  .actor-3 {
    ${q.actor3?`fill: ${q.actor3}`:""};
  }
  .actor-4 {
    ${q.actor4?`fill: ${q.actor4}`:""};
  }
  .actor-5 {
    ${q.actor5?`fill: ${q.actor5}`:""};
  }
  ${Cq()}
`,"getStyles"),pq=_q,qq=Q(function(q,X){return Fq(q,X)},"drawRect"),kq=Q(function(q,X){let N=q.append("circle").attr("cx",X.cx).attr("cy",X.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),Z=q.append("g");Z.append("circle").attr("cx",X.cx-5).attr("cy",X.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),Z.append("circle").attr("cx",X.cx+5).attr("cy",X.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function H(W){let E=n().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);W.append("path").attr("class","mouth").attr("d",E).attr("transform","translate("+X.cx+","+(X.cy+2)+")")}Q(H,"smile");function R(W){let E=n().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);W.append("path").attr("class","mouth").attr("d",E).attr("transform","translate("+X.cx+","+(X.cy+7)+")")}Q(R,"sad");function B(W){W.append("line").attr("class","mouth").attr("stroke",2).attr("x1",X.cx-5).attr("y1",X.cy+7).attr("x2",X.cx+5).attr("y2",X.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}if(Q(B,"ambivalent"),X.score>3)H(Z);else if(X.score<3)R(Z);else B(Z);return N},"drawFace"),Vq=Q(function(q,X){let G=q.append("circle");if(G.attr("cx",X.cx),G.attr("cy",X.cy),G.attr("class","actor-"+X.pos),G.attr("fill",X.fill),G.attr("stroke",X.stroke),G.attr("r",X.r),G.class!==void 0)G.attr("class",G.class);if(X.title!==void 0)G.append("title").text(X.title);return G},"drawCircle"),Oq=Q(function(q,X){return Lq(q,X)},"drawText"),dq=Q(function(q,X){function G(Z,H,R,B,W){return Z+","+H+" "+(Z+R)+","+H+" "+(Z+R)+","+(H+B-W)+" "+(Z+R-W*1.2)+","+(H+B)+" "+Z+","+(H+B)}Q(G,"genPoints");let N=q.append("polygon");N.attr("points",G(X.x,X.y,50,20,7)),N.attr("class","labelBox"),X.y=X.y+X.labelMargin,X.x=X.x+0.5*X.labelMargin,Oq(q,X)},"drawLabel"),mq=Q(function(q,X,G){let N=q.append("g"),Z=e();Z.x=X.x,Z.y=X.y,Z.fill=X.fill,Z.width=G.width*X.taskCount+G.diagramMarginX*(X.taskCount-1),Z.height=G.height,Z.class="journey-section section-type-"+X.num,Z.rx=3,Z.ry=3,qq(N,Z),Aq(G)(X.text,N,Z.x,Z.y,Z.width,Z.height,{class:"journey-section section-type-"+X.num},G,X.colour)},"drawSection"),a=-1,lq=Q(function(q,X,G,N){let Z=X.x+G.width/2,H=q.append("g");a++;let R=450;H.append("line").attr("id",N+"-task"+a).attr("x1",Z).attr("y1",X.y).attr("x2",Z).attr("y2",R).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),kq(H,{cx:Z,cy:300+(5-X.score)*30,score:X.score});let B=e();B.x=X.x,B.y=X.y,B.fill=X.fill,B.width=G.width,B.height=G.height,B.class="task task-type-"+X.num,B.rx=3,B.ry=3,qq(H,B);let W=X.x+14;X.people.forEach((E)=>{let F=X.actors[E].color,z={cx:W,cy:X.y,r:7,fill:F,stroke:"#000",title:E,pos:X.actors[E].position};Vq(H,z),W+=10}),Aq(G)(X.task,H,B.x,B.y,B.width,B.height,{class:"task"},G,X.colour)},"drawTask"),iq=Q(function(q,X){Pq(q,X)},"drawBackgroundRect"),Aq=function(){function q(Z,H,R,B,W,E,F,z){let J=H.append("text").attr("x",R+W/2).attr("y",B+E/2+5).style("font-color",z).style("text-anchor","middle").text(Z);N(J,F)}Q(q,"byText");function X(Z,H,R,B,W,E,F,z,J){let{taskFontSize:K,taskFontFamily:U}=z,I=Z.split(/<br\s*\/?>/gi);for(let M=0;M<I.length;M++){let Y=M*K-K*(I.length-1)/2,C=H.append("text").attr("x",R+W/2).attr("y",B).attr("fill",J).style("text-anchor","middle").style("font-size",K).style("font-family",U);C.append("tspan").attr("x",R+W/2).attr("dy",Y).text(I[M]),C.attr("y",B+E/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),N(C,F)}}Q(X,"byTspan");function G(Z,H,R,B,W,E,F,z){let J=H.append("switch"),U=J.append("foreignObject").attr("x",R).attr("y",B).attr("width",W).attr("height",E).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");U.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(Z),X(Z,J,R,B,W,E,F,z),N(U,F)}Q(G,"byFo");function N(Z,H){for(let R in H)if(R in H)Z.attr(R,H[R])}return Q(N,"_setTextAttrs"),function(Z){return Z.textPlacement==="fo"?G:Z.textPlacement==="old"?q:X}}(),rq=Q(function(q,X){a=-1,q.append("defs").append("marker").attr("id",X+"-arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},"initGraphics"),x={drawRect:qq,drawCircle:Vq,drawSection:mq,drawText:Oq,drawLabel:dq,drawTask:lq,drawBackgroundRect:iq,initGraphics:rq},cq=Q(function(q){Object.keys(q).forEach(function(G){S[G]=q[G]})},"setConf"),T={},d=0;function vq(q){let X=u().journey,G=X.maxLabelWidth;d=0;let N=60;Object.keys(T).forEach((Z)=>{let H=T[Z].color,R={cx:20,cy:N,r:7,fill:H,stroke:"#000",pos:T[Z].position};x.drawCircle(q,R);let B=q.append("text").attr("visibility","hidden").text(Z),W=B.node().getBoundingClientRect().width;B.remove();let E=[];if(W<=G)E=[Z];else{let F=Z.split(" "),z="";if(B=q.append("text").attr("visibility","hidden"),F.forEach((J)=>{let K=z?`${z} ${J}`:J;if(B.text(K),B.node().getBoundingClientRect().width>G){if(z)E.push(z);if(z=J,B.text(J),B.node().getBoundingClientRect().width>G){let I="";for(let M of J)if(I+=M,B.text(I+"-"),B.node().getBoundingClientRect().width>G)E.push(I.slice(0,-1)+"-"),I=M;z=I}}else z=K}),z)E.push(z);B.remove()}E.forEach((F,z)=>{let J={x:40,y:N+7+z*20,fill:"#666",text:F,textMargin:X.boxTextMargin??5},U=x.drawText(q,J).node().getBoundingClientRect().width;if(U>d&&U>X.leftMargin-U)d=U}),N+=Math.max(20,E.length*20)})}Q(vq,"drawActorLegend");var S=u().journey,D=0,sq=Q(function(q,X,G,N){let Z=u(),H=Z.journey.titleColor,R=Z.journey.titleFontSize,B=Z.journey.titleFontFamily,W=Z.securityLevel,E;if(W==="sandbox")E=k("#i"+X);let F=W==="sandbox"?k(E.nodes()[0].contentDocument.body):k("body");v.init();let z=F.select("#"+X);x.initGraphics(z,X);let J=N.db.getTasks(),K=N.db.getDiagramTitle(),U=N.db.getActors();for(let w in T)delete T[w];let I=0;U.forEach((w)=>{T[w]={color:S.actorColours[I%S.actorColours.length],position:I},I++}),vq(z),D=S.leftMargin+d,v.insert(0,0,D,Object.keys(T).length*50),nq(z,J,0,X);let M=v.getBounds();if(K)z.append("text").text(K).attr("x",D).attr("font-size",R).attr("font-weight","bold").attr("y",25).attr("fill",H).attr("font-family",B);let Y=M.stopy-M.starty+2*S.diagramMarginY,C=D+M.stopx+2*S.diagramMarginX;zq(z,Y,C,S.useMaxWidth),z.append("line").attr("x1",D).attr("y1",S.height*4).attr("x2",C-D-4).attr("y2",S.height*4).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#"+X+"-arrowhead)");let P=K?70:0;z.attr("viewBox",`${M.startx} -25 ${C} ${Y+P}`),z.attr("preserveAspectRatio","xMinYMin meet"),z.attr("height",Y+P+25)},"draw"),v={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:Q(function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},"init"),updateVal:Q(function(q,X,G,N){if(q[X]===void 0)q[X]=G;else q[X]=N(G,q[X])},"updateVal"),updateBounds:Q(function(q,X,G,N){let Z=u().journey,H=this,R=0;function B(W){return Q(function(F){R++;let z=H.sequenceItems.length-R+1;if(H.updateVal(F,"starty",X-z*Z.boxMargin,Math.min),H.updateVal(F,"stopy",N+z*Z.boxMargin,Math.max),H.updateVal(v.data,"startx",q-z*Z.boxMargin,Math.min),H.updateVal(v.data,"stopx",G+z*Z.boxMargin,Math.max),W!=="activation")H.updateVal(F,"startx",q-z*Z.boxMargin,Math.min),H.updateVal(F,"stopx",G+z*Z.boxMargin,Math.max),H.updateVal(v.data,"starty",X-z*Z.boxMargin,Math.min),H.updateVal(v.data,"stopy",N+z*Z.boxMargin,Math.max)},"updateItemBounds")}Q(B,"updateFn"),this.sequenceItems.forEach(B())},"updateBounds"),insert:Q(function(q,X,G,N){let Z=Math.min(q,G),H=Math.max(q,G),R=Math.min(X,N),B=Math.max(X,N);this.updateVal(v.data,"startx",Z,Math.min),this.updateVal(v.data,"starty",R,Math.min),this.updateVal(v.data,"stopx",H,Math.max),this.updateVal(v.data,"stopy",B,Math.max),this.updateBounds(Z,R,H,B)},"insert"),bumpVerticalPos:Q(function(q){this.verticalPos=this.verticalPos+q,this.data.stopy=this.verticalPos},"bumpVerticalPos"),getVerticalPos:Q(function(){return this.verticalPos},"getVerticalPos"),getBounds:Q(function(){return this.data},"getBounds")},s=S.sectionFills,Bq=S.sectionColours,nq=Q(function(q,X,G,N){let Z=u().journey,H="",R=Z.height*2+Z.diagramMarginY,B=G+R,W=0,E="#CCC",F="black",z=0;for(let[J,K]of X.entries()){if(H!==K.section){E=s[W%s.length],z=W%s.length,F=Bq[W%Bq.length];let I=0,M=K.section;for(let C=J;C<X.length;C++)if(X[C].section==M)I=I+1;else break;let Y={x:J*Z.taskMargin+J*Z.width+D,y:50,text:K.section,fill:E,num:z,colour:F,taskCount:I};x.drawSection(q,Y,Z),H=K.section,W++}let U=K.people.reduce((I,M)=>{if(T[M])I[M]=T[M];return I},{});K.x=J*Z.taskMargin+J*Z.width+D,K.y=B,K.width=Z.diagramMarginX,K.height=Z.diagramMarginY,K.colour=F,K.fill=E,K.num=z,K.actors=U,x.drawTask(q,K,Z,N),v.insert(K.x,K.y,K.x+K.width+Z.taskMargin,450)}},"drawTasks"),Yq={setConf:cq,draw:sq},JX={parser:Dq,db:Uq,renderer:Yq,styles:pq,init:Q((q)=>{Yq.setConf(q.journey),Uq.clear()},"init")};export{JX as diagram};
