import{ta as iz}from"./chunk-998kcxes.js";import{ua as az}from"./chunk-4xwpe2ek.js";import{wa as nz}from"./chunk-5n106k9s.js";import{jb as $z,sb as dz}from"./chunk-hgb5smew.js";import{jc as l,pc as Iz,qc as yz,rc as cz,sc as pz,tc as lz,uc as mz,vc as rz,wc as _}from"./chunk-6rq1j1c6.js";import{Ec as Y,Gc as O}from"./chunk-5490625s.js";var uz=function(){var z=Y(function(c,Z,j,X){for(j=j||{},X=c.length;X--;j[c[X]]=Z);return j},"o"),J=[1,2],B=[1,3],Q=[1,4],U=[2,4],M=[1,9],R=[1,11],v=[1,16],q=[1,17],P=[1,18],w=[1,19],D=[1,33],A=[1,20],b=[1,21],H=[1,22],h=[1,23],C=[1,24],g=[1,26],N=[1,27],V=[1,28],E=[1,29],s=[1,30],Qz=[1,31],Wz=[1,32],Xz=[1,35],Zz=[1,36],Kz=[1,37],qz=[1,38],$=[1,34],G=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],Bz=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,39,40,41,45,48,51,52,53,54,57],hz=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],vz={trace:Y(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,CLICK:38,STRING:39,HREF:40,classDef:41,CLASSDEF_ID:42,CLASSDEF_STYLEOPTS:43,DEFAULT:44,style:45,STYLE_IDS:46,STYLEDEF_STYLEOPTS:47,class:48,CLASSENTITY_IDS:49,STYLECLASS:50,direction_tb:51,direction_bt:52,direction_rl:53,direction_lr:54,eol:55,";":56,EDGE_STATE:57,STYLE_SEPARATOR:58,left_of:59,right_of:60,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"CLICK",39:"STRING",40:"HREF",41:"classDef",42:"CLASSDEF_ID",43:"CLASSDEF_STYLEOPTS",44:"DEFAULT",45:"style",46:"STYLE_IDS",47:"STYLEDEF_STYLEOPTS",48:"class",49:"CLASSENTITY_IDS",50:"STYLECLASS",51:"direction_tb",52:"direction_bt",53:"direction_rl",54:"direction_lr",56:";",57:"EDGE_STATE",58:"STYLE_SEPARATOR",59:"left_of",60:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[9,5],[9,5],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[55,1],[55,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:Y(function(Z,j,X,F,L,W,d){var K=W.length-1;switch(L){case 3:return F.setRootDoc(W[K]),W[K];break;case 4:this.$=[];break;case 5:if(W[K]!="nl")W[K-1].push(W[K]),this.$=W[K-1];break;case 6:case 7:this.$=W[K];break;case 8:this.$="nl";break;case 12:this.$=W[K];break;case 13:let Hz=W[K-1];Hz.description=F.trimColon(W[K]),this.$=Hz;break;case 14:this.$={stmt:"relation",state1:W[K-2],state2:W[K]};break;case 15:let Yz=F.trimColon(W[K]);this.$={stmt:"relation",state1:W[K-3],state2:W[K-1],description:Yz};break;case 19:this.$={stmt:"state",id:W[K-3],type:"default",description:"",doc:W[K-1]};break;case 20:var S=W[K],I=W[K-2].trim();if(W[K].match(":")){var o=W[K].split(":");S=o[0],I=[I,o[1]]}this.$={stmt:"state",id:S,type:"default",description:I};break;case 21:this.$={stmt:"state",id:W[K-3],type:"default",description:W[K-5],doc:W[K-1]};break;case 22:this.$={stmt:"state",id:W[K],type:"fork"};break;case 23:this.$={stmt:"state",id:W[K],type:"join"};break;case 24:this.$={stmt:"state",id:W[K],type:"choice"};break;case 25:this.$={stmt:"state",id:F.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:W[K-1].trim(),note:{position:W[K-2].trim(),text:W[K].trim()}};break;case 29:this.$=W[K].trim(),F.setAccTitle(this.$);break;case 30:case 31:this.$=W[K].trim(),F.setAccDescription(this.$);break;case 32:this.$={stmt:"click",id:W[K-3],url:W[K-2],tooltip:W[K-1]};break;case 33:this.$={stmt:"click",id:W[K-3],url:W[K-1],tooltip:""};break;case 34:case 35:this.$={stmt:"classDef",id:W[K-1].trim(),classes:W[K].trim()};break;case 36:this.$={stmt:"style",id:W[K-1].trim(),styleClass:W[K].trim()};break;case 37:this.$={stmt:"applyClass",id:W[K-1].trim(),styleClass:W[K].trim()};break;case 38:F.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:F.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:F.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:F.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:W[K].trim(),type:"default",description:""};break;case 46:this.$={stmt:"state",id:W[K-2].trim(),classes:[W[K].trim()],type:"default",description:""};break;case 47:this.$={stmt:"state",id:W[K-2].trim(),classes:[W[K].trim()],type:"default",description:""};break}},"anonymous"),table:[{3:1,4:J,5:B,6:Q},{1:[3]},{3:5,4:J,5:B,6:Q},{3:6,4:J,5:B,6:Q},z([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],U,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:M,5:R,8:8,9:10,10:12,11:13,12:14,13:15,16:v,17:q,19:P,22:w,24:D,25:A,26:b,27:H,28:h,29:C,32:25,33:g,35:N,37:V,38:E,41:s,45:Qz,48:Wz,51:Xz,52:Zz,53:Kz,54:qz,57:$},z(G,[2,5]),{9:39,10:12,11:13,12:14,13:15,16:v,17:q,19:P,22:w,24:D,25:A,26:b,27:H,28:h,29:C,32:25,33:g,35:N,37:V,38:E,41:s,45:Qz,48:Wz,51:Xz,52:Zz,53:Kz,54:qz,57:$},z(G,[2,7]),z(G,[2,8]),z(G,[2,9]),z(G,[2,10]),z(G,[2,11]),z(G,[2,12],{14:[1,40],15:[1,41]}),z(G,[2,16]),{18:[1,42]},z(G,[2,18],{20:[1,43]}),{23:[1,44]},z(G,[2,22]),z(G,[2,23]),z(G,[2,24]),z(G,[2,25]),{30:45,31:[1,46],59:[1,47],60:[1,48]},z(G,[2,28]),{34:[1,49]},{36:[1,50]},z(G,[2,31]),{13:51,24:D,57:$},{42:[1,52],44:[1,53]},{46:[1,54]},{49:[1,55]},z(Bz,[2,44],{58:[1,56]}),z(Bz,[2,45],{58:[1,57]}),z(G,[2,38]),z(G,[2,39]),z(G,[2,40]),z(G,[2,41]),z(G,[2,6]),z(G,[2,13]),{13:58,24:D,57:$},z(G,[2,17]),z(hz,U,{7:59}),{24:[1,60]},{24:[1,61]},{23:[1,62]},{24:[2,48]},{24:[2,49]},z(G,[2,29]),z(G,[2,30]),{39:[1,63],40:[1,64]},{43:[1,65]},{43:[1,66]},{47:[1,67]},{50:[1,68]},{24:[1,69]},{24:[1,70]},z(G,[2,14],{14:[1,71]}),{4:M,5:R,8:8,9:10,10:12,11:13,12:14,13:15,16:v,17:q,19:P,21:[1,72],22:w,24:D,25:A,26:b,27:H,28:h,29:C,32:25,33:g,35:N,37:V,38:E,41:s,45:Qz,48:Wz,51:Xz,52:Zz,53:Kz,54:qz,57:$},z(G,[2,20],{20:[1,73]}),{31:[1,74]},{24:[1,75]},{39:[1,76]},{39:[1,77]},z(G,[2,34]),z(G,[2,35]),z(G,[2,36]),z(G,[2,37]),z(Bz,[2,46]),z(Bz,[2,47]),z(G,[2,15]),z(G,[2,19]),z(hz,U,{7:78}),z(G,[2,26]),z(G,[2,27]),{5:[1,79]},{5:[1,80]},{4:M,5:R,8:8,9:10,10:12,11:13,12:14,13:15,16:v,17:q,19:P,21:[1,81],22:w,24:D,25:A,26:b,27:H,28:h,29:C,32:25,33:g,35:N,37:V,38:E,41:s,45:Qz,48:Wz,51:Xz,52:Zz,53:Kz,54:qz,57:$},z(G,[2,32]),z(G,[2,33]),z(G,[2,21])],defaultActions:{5:[2,1],6:[2,2],47:[2,48],48:[2,49]},parseError:Y(function(Z,j){if(j.recoverable)this.trace(Z);else{var X=Error(Z);throw X.hash=j,X}},"parseError"),parse:Y(function(Z){var j=this,X=[0],F=[],L=[null],W=[],d=this.table,K="",S=0,I=0,o=0,Hz=2,Yz=1,HJ=W.slice.call(arguments,1),x=Object.create(this.lexer),m={yy:{}};for(var Pz in this.yy)if(Object.prototype.hasOwnProperty.call(this.yy,Pz))m.yy[Pz]=this.yy[Pz];if(x.setInput(Z,m.yy),m.yy.lexer=x,m.yy.parser=this,typeof x.yylloc>"u")x.yylloc={};var Lz=x.yylloc;W.push(Lz);var YJ=x.options&&x.options.ranges;if(typeof m.yy.parseError==="function")this.parseError=m.yy.parseError;else this.parseError=Object.getPrototypeOf(this).parseError;function UJ(T){X.length=X.length-2*T,L.length=L.length-T,W.length=W.length-T}Y(UJ,"popStack");function Nz(){var T=F.pop()||x.lex()||Yz;if(typeof T!=="number"){if(T instanceof Array)F=T,T=F.pop();T=j.symbols_[T]||T}return T}Y(Nz,"lex");var u,Oz,r,k,IJ,wz,n={},Uz,y,Ez,Mz;while(!0){if(r=X[X.length-1],this.defaultActions[r])k=this.defaultActions[r];else{if(u===null||typeof u>"u")u=Nz();k=d[r]&&d[r][u]}if(typeof k>"u"||!k.length||!k[0]){var xz="";Mz=[];for(Uz in d[r])if(this.terminals_[Uz]&&Uz>Hz)Mz.push("'"+this.terminals_[Uz]+"'");if(x.showPosition)xz="Parse error on line "+(S+1)+`:
`+x.showPosition()+`
Expecting `+Mz.join(", ")+", got '"+(this.terminals_[u]||u)+"'";else xz="Parse error on line "+(S+1)+": Unexpected "+(u==Yz?"end of input":"'"+(this.terminals_[u]||u)+"'");this.parseError(xz,{text:x.match,token:this.terminals_[u]||u,line:x.yylineno,loc:Lz,expected:Mz})}if(k[0]instanceof Array&&k.length>1)throw Error("Parse Error: multiple actions possible at state: "+r+", token: "+u);switch(k[0]){case 1:if(X.push(u),L.push(x.yytext),W.push(x.yylloc),X.push(k[1]),u=null,!Oz){if(I=x.yyleng,K=x.yytext,S=x.yylineno,Lz=x.yylloc,o>0)o--}else u=Oz,Oz=null;break;case 2:if(y=this.productions_[k[1]][1],n.$=L[L.length-y],n._$={first_line:W[W.length-(y||1)].first_line,last_line:W[W.length-1].last_line,first_column:W[W.length-(y||1)].first_column,last_column:W[W.length-1].last_column},YJ)n._$.range=[W[W.length-(y||1)].range[0],W[W.length-1].range[1]];if(wz=this.performAction.apply(n,[K,I,S,m.yy,k[1],L,W].concat(HJ)),typeof wz<"u")return wz;if(y)X=X.slice(0,-1*y*2),L=L.slice(0,-1*y),W=W.slice(0,-1*y);X.push(this.productions_[k[1]][0]),L.push(n.$),W.push(n._$),Ez=d[X[X.length-2]][X[X.length-1]],X.push(Ez);break;case 3:return!0}}return!0},"parse")},jJ=function(){var c={EOF:1,parseError:Y(function(j,X){if(this.yy.parser)this.yy.parser.parseError(j,X);else throw Error(j)},"parseError"),setInput:Y(function(Z,j){if(this.yy=j||this.yy||{},this._input=Z,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges)this.yylloc.range=[0,0];return this.offset=0,this},"setInput"),input:Y(function(){var Z=this._input[0];this.yytext+=Z,this.yyleng++,this.offset++,this.match+=Z,this.matched+=Z;var j=Z.match(/(?:\r\n?|\n).*/g);if(j)this.yylineno++,this.yylloc.last_line++;else this.yylloc.last_column++;if(this.options.ranges)this.yylloc.range[1]++;return this._input=this._input.slice(1),Z},"input"),unput:Y(function(Z){var j=Z.length,X=Z.split(/(?:\r\n?|\n)/g);this._input=Z+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-j),this.offset-=j;var F=this.match.split(/(?:\r\n?|\n)/g);if(this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),X.length-1)this.yylineno-=X.length-1;var L=this.yylloc.range;if(this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:X?(X.length===F.length?this.yylloc.first_column:0)+F[F.length-X.length].length-X[0].length:this.yylloc.first_column-j},this.options.ranges)this.yylloc.range=[L[0],L[0]+this.yyleng-j];return this.yyleng=this.yytext.length,this},"unput"),more:Y(function(){return this._more=!0,this},"more"),reject:Y(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:Y(function(Z){this.unput(this.match.slice(Z))},"less"),pastInput:Y(function(){var Z=this.matched.substr(0,this.matched.length-this.match.length);return(Z.length>20?"...":"")+Z.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:Y(function(){var Z=this.match;if(Z.length<20)Z+=this._input.substr(0,20-Z.length);return(Z.substr(0,20)+(Z.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:Y(function(){var Z=this.pastInput(),j=Array(Z.length+1).join("-");return Z+this.upcomingInput()+`
`+j+"^"},"showPosition"),test_match:Y(function(Z,j){var X,F,L;if(this.options.backtrack_lexer){if(L={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges)L.yylloc.range=this.yylloc.range.slice(0)}if(F=Z[0].match(/(?:\r\n?|\n).*/g),F)this.yylineno+=F.length;if(this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:F?F[F.length-1].length-F[F.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+Z[0].length},this.yytext+=Z[0],this.match+=Z[0],this.matches=Z,this.yyleng=this.yytext.length,this.options.ranges)this.yylloc.range=[this.offset,this.offset+=this.yyleng];if(this._more=!1,this._backtrack=!1,this._input=this._input.slice(Z[0].length),this.matched+=Z[0],X=this.performAction.call(this,this.yy,this,j,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input)this.done=!1;if(X)return X;else if(this._backtrack){for(var W in L)this[W]=L[W];return!1}return!1},"test_match"),next:Y(function(){if(this.done)return this.EOF;if(!this._input)this.done=!0;var Z,j,X,F;if(!this._more)this.yytext="",this.match="";var L=this._currentRules();for(var W=0;W<L.length;W++)if(X=this._input.match(this.rules[L[W]]),X&&(!j||X[0].length>j[0].length)){if(j=X,F=W,this.options.backtrack_lexer)if(Z=this.test_match(X,L[W]),Z!==!1)return Z;else if(this._backtrack){j=!1;continue}else return!1;else if(!this.options.flex)break}if(j){if(Z=this.test_match(j,L[F]),Z!==!1)return Z;return!1}if(this._input==="")return this.EOF;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:Y(function(){var j=this.next();if(j)return j;else return this.lex()},"lex"),begin:Y(function(j){this.conditionStack.push(j)},"begin"),popState:Y(function(){var j=this.conditionStack.length-1;if(j>0)return this.conditionStack.pop();else return this.conditionStack[0]},"popState"),_currentRules:Y(function(){if(this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1])return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;else return this.conditions.INITIAL.rules},"_currentRules"),topState:Y(function(j){if(j=this.conditionStack.length-1-Math.abs(j||0),j>=0)return this.conditionStack[j];else return"INITIAL"},"topState"),pushState:Y(function(j){this.begin(j)},"pushState"),stateStackSize:Y(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:Y(function(j,X,F,L){function W(){let K=X.yytext.indexOf("%%");if(K===0)return!1;if(K>0){let S=X.yytext.slice(0,K),I=X.yytext.slice(K);if(I)j.lexer.unput(I);X.yytext=S}return!0}Y(W,"processId");var d=L;switch(F){case 0:return 38;case 1:return 40;case 2:return 39;case 3:return 44;case 4:return 51;case 5:return 52;case 6:return 53;case 7:return 54;case 8:return 5;case 9:break;case 10:break;case 11:break;case 12:break;case 13:return this.pushState("SCALE"),17;break;case 14:return 18;case 15:this.popState();break;case 16:return this.begin("acc_title"),33;break;case 17:return this.popState(),"acc_title_value";break;case 18:return this.begin("acc_descr"),35;break;case 19:return this.popState(),"acc_descr_value";break;case 20:this.begin("acc_descr_multiline");break;case 21:this.popState();break;case 22:return"acc_descr_multiline_value";case 23:return this.pushState("CLASSDEF"),41;break;case 24:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";break;case 25:return this.popState(),this.pushState("CLASSDEFID"),42;break;case 26:return this.popState(),43;break;case 27:return this.pushState("CLASS"),48;break;case 28:return this.popState(),this.pushState("CLASS_STYLE"),49;break;case 29:return this.popState(),50;break;case 30:return this.pushState("STYLE"),45;break;case 31:return this.popState(),this.pushState("STYLEDEF_STYLES"),46;break;case 32:return this.popState(),47;break;case 33:return this.pushState("SCALE"),17;break;case 34:return 18;case 35:this.popState();break;case 36:this.pushState("STATE");break;case 37:return this.popState(),X.yytext=X.yytext.slice(0,-8).trim(),25;break;case 38:return this.popState(),X.yytext=X.yytext.slice(0,-8).trim(),26;break;case 39:return this.popState(),X.yytext=X.yytext.slice(0,-10).trim(),27;break;case 40:return this.popState(),X.yytext=X.yytext.slice(0,-8).trim(),25;break;case 41:return this.popState(),X.yytext=X.yytext.slice(0,-8).trim(),26;break;case 42:return this.popState(),X.yytext=X.yytext.slice(0,-10).trim(),27;break;case 43:return 51;case 44:return 52;case 45:return 53;case 46:return 54;case 47:this.pushState("STATE_STRING");break;case 48:return this.pushState("STATE_ID"),"AS";break;case 49:if(!W())return;return this.popState(),"ID";break;case 50:this.popState();break;case 51:return"STATE_DESCR";case 52:return 19;case 53:this.popState();break;case 54:return this.popState(),this.pushState("struct"),20;break;case 55:return this.popState(),21;break;case 56:break;case 57:return this.begin("NOTE"),29;break;case 58:return this.popState(),this.pushState("NOTE_ID"),59;break;case 59:return this.popState(),this.pushState("NOTE_ID"),60;break;case 60:this.popState(),this.pushState("FLOATING_NOTE");break;case 61:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";break;case 62:break;case 63:return"NOTE_TEXT";case 64:if(!W())return;return this.popState(),"ID";break;case 65:if(!W())return;return this.popState(),this.pushState("NOTE_TEXT"),24;break;case 66:return this.popState(),X.yytext=X.yytext.substr(2).trim(),31;break;case 67:return this.popState(),X.yytext=X.yytext.slice(0,-8).trim(),31;break;case 68:return 6;case 69:return 6;case 70:return 16;case 71:return 57;case 72:if(!W())return;return 24;case 73:return X.yytext=X.yytext.trim(),14;break;case 74:return 15;case 75:return 28;case 76:return 58;case 77:return 5;case 78:return"INVALID"}},"anonymous"),rules:[/^(?:click\b)/i,/^(?:href\b)/i,/^(?:"[^"]*")/i,/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?\n\s*end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:(?:[^:\n;]|:[^:\n;])+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[10,11,12],inclusive:!1},struct:{rules:[10,11,12,23,27,30,36,43,44,45,46,55,56,57,71,72,73,74,75,76],inclusive:!1},FLOATING_NOTE_ID:{rules:[64],inclusive:!1},FLOATING_NOTE:{rules:[61,62,63],inclusive:!1},NOTE_TEXT:{rules:[66,67],inclusive:!1},NOTE_ID:{rules:[65],inclusive:!1},NOTE:{rules:[58,59,60],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[32],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[31],inclusive:!1},CLASS_STYLE:{rules:[29],inclusive:!1},CLASS:{rules:[28],inclusive:!1},CLASSDEFID:{rules:[26],inclusive:!1},CLASSDEF:{rules:[24,25],inclusive:!1},acc_descr_multiline:{rules:[21,22],inclusive:!1},acc_descr:{rules:[19],inclusive:!1},acc_title:{rules:[17],inclusive:!1},SCALE:{rules:[14,15,34,35],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[49],inclusive:!1},STATE_STRING:{rules:[50,51],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[10,11,12,37,38,39,40,41,42,47,48,52,53,54],inclusive:!1},ID:{rules:[10,11,12],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,11,12,13,16,18,20,23,27,30,33,36,54,57,68,69,70,71,72,73,74,76,77,78],inclusive:!0}}};return c}();vz.lexer=jJ;function jz(){this.yy={}}return Y(jz,"Parser"),jz.prototype=vz,vz.Parser=jz,new jz}();uz.parser=uz;var $J=uz,MJ="TB",sz="TB",Dz="dir",a="state",i="root",fz="relation",GJ="classDef",RJ="style",FJ="applyClass",zz="default",oz="divider",tz="fill:none",ez="fill: #333",zJ="c",JJ="markdown",QJ="normal",bz="rect",Cz="rectWithTitle",vJ="stateStart",PJ="stateEnd",kz="divider",Tz="roundedWithTitle",LJ="note",OJ="noteGroup",Jz="statediagram",wJ="state",xJ=`${Jz}-${wJ}`,WJ="transition",bJ="note",CJ="note-edge",uJ=`${WJ} ${CJ}`,fJ=`${Jz}-${bJ}`,AJ="cluster",hJ=`${Jz}-${AJ}`,NJ="cluster-alt",EJ=`${Jz}-${NJ}`,XJ="parent",ZJ="note",DJ="state",Az="----",kJ=`${Az}${ZJ}`,_z=`${Az}${XJ}`,KJ=Y((z,J=sz)=>{if(!z.doc)return J;let B=J;for(let Q of z.doc)if(Q.stmt==="dir")B=Q.value;return B},"getDir"),TJ=Y(function(z,J){return J.db.getClasses()},"getClasses"),_J=Y(async function(z,J,B,Q){O.info("REF0:"),O.info("Drawing state diagram (v2)",J);let{securityLevel:U,state:M,layout:R}=_();Q.db.extract(Q.db.getRootDocV2());let v=Q.db.getData(),q=iz(J,U);if(v.type=Q.type,v.layoutAlgorithm=R,v.nodeSpacing=M?.nodeSpacing||50,v.rankSpacing=M?.rankSpacing||50,_().look==="neo")v.markers=["barbNeo"];else v.markers=["barb"];v.diagramId=J,await nz(v,q);let w=8;try{(typeof Q.db.getLinks==="function"?Q.db.getLinks():new Map).forEach((A,b)=>{let H=typeof b==="string"?b:typeof b?.id==="string"?b.id:"";if(!H){O.warn("⚠️ Invalid or missing stateId from key:",JSON.stringify(b));return}let h=q.node()?.querySelectorAll("g"),C;if(h?.forEach((E)=>{if(E.textContent?.trim()===H)C=E}),!C){O.warn("⚠️ Could not find node matching text:",H);return}let g=C.parentNode;if(!g){O.warn("⚠️ Node has no parent, cannot wrap:",H);return}let N=document.createElementNS("http://www.w3.org/2000/svg","a"),V=A.url.replace(/^"+|"+$/g,"");if(N.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",V),N.setAttribute("target","_blank"),A.tooltip){let E=A.tooltip.replace(/^"+|"+$/g,"");N.setAttribute("title",E)}g.replaceChild(N,C),N.appendChild(C),O.info("\uD83D\uDD17 Wrapped node in <a> tag for:",H,A.url)})}catch(D){O.error("❌ Error injecting clickable links:",D)}dz.insertTitle(q,"statediagramTitleText",M?.titleTopMargin??25,Q.db.getDiagramTitle()),az(q,w,Jz,M?.useMaxWidth??!0)},"draw"),dJ={getClasses:TJ,draw:_J,getDir:KJ},Rz=new Map,p=0;function Fz(z="",J=0,B="",Q=Az){let U=B!==null&&B.length>0?`${Q}${B}`:"";return`${DJ}-${z}${U}-${J}`}Y(Fz,"stateDomId");var gJ=Y((z,J,B,Q,U,M,R,v)=>{O.trace("items",J),J.forEach((q)=>{switch(q.stmt){case a:e(z,q,B,Q,U,M,R,v);break;case zz:e(z,q,B,Q,U,M,R,v);break;case fz:{e(z,q.state1,B,Q,U,M,R,v),e(z,q.state2,B,Q,U,M,R,v);let P=R==="neo",w={id:"edge"+p,start:q.state1.id,end:q.state2.id,arrowhead:"normal",arrowTypeEnd:P?"arrow_barb_neo":"arrow_barb",style:tz,labelStyle:"",label:l.sanitizeText(q.description??"",_()),arrowheadStyle:ez,labelpos:zJ,labelType:JJ,thickness:QJ,classes:WJ,look:R};U.push(w),p++}break}})},"setupDoc"),gz=Y((z,J=sz)=>{let B=J;if(z.doc){for(let Q of z.doc)if(Q.stmt==="dir")B=Q.value}return B},"getDir");function t(z,J,B){if(!J.id||J.id==="</join></fork>"||J.id==="</choice>")return;if(J.cssClasses){if(!Array.isArray(J.cssCompiledStyles))J.cssCompiledStyles=[];J.cssClasses.split(" ").forEach((U)=>{let M=B.get(U);if(M)J.cssCompiledStyles=[...J.cssCompiledStyles??[],...M.styles]})}let Q=z.find((U)=>U.id===J.id);if(Q)Object.assign(Q,J);else z.push(J)}Y(t,"insertOrUpdateNode");function qJ(z){return z?.classes?.join(" ")??""}Y(qJ,"getClassesFromDbInfo");function BJ(z){return z?.styles??[]}Y(BJ,"getStylesFromDbInfo");var e=Y((z,J,B,Q,U,M,R,v)=>{let q=J.id,P=B.get(q),w=qJ(P),D=BJ(P),A=_();if(O.info("dataFetcher parsedItem",J,P,D),q!=="root"){let b=bz;if(J.start===!0)b=vJ;else if(J.start===!1)b=PJ;if(J.type!==zz)b=J.type;if(!Rz.get(q))Rz.set(q,{id:q,shape:b,description:l.sanitizeText(q,A),cssClasses:`${w} ${xJ}`,cssStyles:D});let H=Rz.get(q);if(J.description){if(Array.isArray(H.description))H.shape=Cz,H.description.push(J.description);else if(H.description?.length&&H.description.length>0)if(H.shape=Cz,H.description===q)H.description=[J.description];else H.description=[H.description,J.description];else H.shape=bz,H.description=J.description;H.description=l.sanitizeTextOrArray(H.description,A)}if(H.description?.length===1&&H.shape===Cz)if(H.type==="group")H.shape=Tz;else H.shape=bz;if(!H.type&&J.doc)O.info("Setting cluster for XCX",q,gz(J)),H.type="group",H.isGroup=!0,H.dir=gz(J),H.shape=J.type===oz?kz:Tz,H.cssClasses=`${H.cssClasses} ${hJ} ${M?EJ:""}`;let h={labelStyle:"",shape:H.shape,label:H.description,cssClasses:H.cssClasses,cssCompiledStyles:[],cssStyles:H.cssStyles,id:q,dir:H.dir,domId:Fz(q,p),type:H.type,isGroup:H.type==="group",padding:8,rx:10,ry:10,look:R,labelType:"markdown"};if(h.shape===kz)h.label="";if(z&&z.id!=="root")O.trace("Setting node ",q," to be child of its parent ",z.id),h.parentId=z.id;if(h.centerLabel=!0,J.note){let C={labelStyle:"",shape:LJ,label:J.note.text,labelType:"markdown",cssClasses:fJ,cssStyles:[],cssCompiledStyles:[],id:q+kJ+"-"+p,domId:Fz(q,p,ZJ),type:H.type,isGroup:H.type==="group",padding:A.flowchart?.padding,look:R,position:J.note.position},g=q+_z,N={labelStyle:"",shape:OJ,label:J.note.text,cssClasses:H.cssClasses,cssStyles:[],id:q+_z,domId:Fz(q,p,XJ),type:"group",isGroup:!0,padding:16,look:R,position:J.note.position};p++,N.id=g,C.parentId=g,t(Q,N,v),t(Q,C,v),t(Q,h,v);let V=q,E=C.id;if(J.note.position==="left of")V=C.id,E=q;U.push({id:V+"-"+E,start:V,end:E,arrowhead:"none",arrowTypeEnd:"",style:tz,labelStyle:"",classes:uJ,arrowheadStyle:ez,labelpos:zJ,labelType:JJ,thickness:QJ,look:R})}else t(Q,h,v)}if(J.doc)O.trace("Adding nodes children "),gJ(J,J.doc,B,Q,U,!M,R,v)},"dataFetcher"),VJ=Y(()=>{Rz.clear(),p=0},"reset"),f={START_NODE:"[*]",START_TYPE:"start",END_NODE:"[*]",END_TYPE:"end",COLOR_KEYWORD:"color",FILL_KEYWORD:"fill",BG_FILL:"bgFill",STYLECLASS_SEP:","},Vz=Y(()=>new Map,"newClassesList"),Sz=Y(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),Gz=Y((z)=>JSON.parse(JSON.stringify(z)),"clone"),nJ=class{constructor(z){this.version=z,this.nodes=[],this.edges=[],this.rootDoc=[],this.classes=Vz(),this.documents={root:Sz()},this.currentDocument=this.documents.root,this.startEndCount=0,this.dividerCnt=0,this.links=new Map,this.getAccTitle=cz,this.setAccTitle=yz,this.getAccDescription=lz,this.setAccDescription=pz,this.setDiagramTitle=mz,this.getDiagramTitle=rz,this.clear(),this.setRootDoc=this.setRootDoc.bind(this),this.getDividerId=this.getDividerId.bind(this),this.setDirection=this.setDirection.bind(this),this.trimColon=this.trimColon.bind(this)}static{Y(this,"StateDB")}static{this.relationType={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3}}extract(z){this.clear(!0);for(let Q of Array.isArray(z)?z:z.doc)switch(Q.stmt){case a:this.addState(Q.id.trim(),Q.type,Q.doc,Q.description,Q.note);break;case fz:this.addRelation(Q.state1,Q.state2,Q.description);break;case GJ:this.addStyleClass(Q.id.trim(),Q.classes);break;case RJ:this.handleStyleDef(Q);break;case FJ:this.setCssClass(Q.id.trim(),Q.styleClass);break;case"click":this.addLink(Q.id,Q.url,Q.tooltip);break}let J=this.getStates(),B=_();VJ(),e(void 0,this.getRootDocV2(),J,this.nodes,this.edges,!0,B.look,this.classes);for(let Q of this.nodes){if(!Array.isArray(Q.label))continue;if(Q.description=Q.label.slice(1),Q.isGroup&&Q.description.length>0)throw Error(`Group nodes can only have label. Remove the additional description for node [${Q.id}]`);Q.label=Q.label[0]}}handleStyleDef(z){let J=z.id.trim().split(","),B=z.styleClass.split(",");for(let Q of J){let U=this.getState(Q);if(!U){let M=Q.trim();this.addState(M),U=this.getState(M)}if(U)U.styles=B.map((M)=>M.replace(/;/g,"")?.trim())}}setRootDoc(z){if(O.info("Setting root doc",z),this.rootDoc=z,this.version===1)this.extract(z);else this.extract(this.getRootDocV2())}docTranslator(z,J,B){if(J.stmt===fz){this.docTranslator(z,J.state1,!0),this.docTranslator(z,J.state2,!1);return}if(J.stmt===a)if(J.id===f.START_NODE)J.id=z.id+(B?"_start":"_end"),J.start=B;else J.id=J.id.trim();if(J.stmt!==i&&J.stmt!==a||!J.doc)return;let Q=[],U=[];for(let M of J.doc)if(M.type===oz){let R=Gz(M);R.doc=Gz(U),Q.push(R),U=[]}else U.push(M);if(Q.length>0&&U.length>0){let M={stmt:a,id:$z(),type:"divider",doc:Gz(U)};Q.push(Gz(M)),J.doc=Q}J.doc.forEach((M)=>this.docTranslator(J,M,!0))}getRootDocV2(){return this.docTranslator({id:i,stmt:i},{id:i,stmt:i,doc:this.rootDoc},!0),{id:i,doc:this.rootDoc}}addState(z,J=zz,B=void 0,Q=void 0,U=void 0,M=void 0,R=void 0,v=void 0){let q=z?.trim();if(!this.currentDocument.states.has(q))O.info("Adding state ",q,Q),this.currentDocument.states.set(q,{stmt:a,id:q,descriptions:[],type:J,doc:B,note:U,classes:[],styles:[],textStyles:[]});else{let P=this.currentDocument.states.get(q);if(!P)throw Error(`State not found: ${q}`);if(!P.doc)P.doc=B;if(!P.type)P.type=J}if(Q)O.info("Setting state description",q,Q),(Array.isArray(Q)?Q:[Q]).forEach((w)=>this.addDescription(q,w.trim()));if(U){let P=this.currentDocument.states.get(q);if(!P)throw Error(`State not found: ${q}`);P.note=U,P.note.text=l.sanitizeText(P.note.text,_())}if(M)O.info("Setting state classes",q,M),(Array.isArray(M)?M:[M]).forEach((w)=>this.setCssClass(q,w.trim()));if(R)O.info("Setting state styles",q,R),(Array.isArray(R)?R:[R]).forEach((w)=>this.setStyle(q,w.trim()));if(v)O.info("Setting state styles",q,R),(Array.isArray(v)?v:[v]).forEach((w)=>this.setTextStyle(q,w.trim()))}clear(z){if(this.nodes=[],this.edges=[],this.documents={root:Sz()},this.currentDocument=this.documents.root,this.startEndCount=0,this.classes=Vz(),!z)this.links=new Map,Iz()}getState(z){return this.currentDocument.states.get(z)}getStates(){return this.currentDocument.states}logDocuments(){O.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}addLink(z,J,B){this.links.set(z,{url:J,tooltip:B}),O.warn("Adding link",z,J,B)}getLinks(){return this.links}startIdIfNeeded(z=""){if(z===f.START_NODE)return this.startEndCount++,`${f.START_TYPE}${this.startEndCount}`;return z}startTypeIfNeeded(z="",J=zz){return z===f.START_NODE?f.START_TYPE:J}endIdIfNeeded(z=""){if(z===f.END_NODE)return this.startEndCount++,`${f.END_TYPE}${this.startEndCount}`;return z}endTypeIfNeeded(z="",J=zz){return z===f.END_NODE?f.END_TYPE:J}addRelationObjs(z,J,B=""){let Q=this.startIdIfNeeded(z.id.trim()),U=this.startTypeIfNeeded(z.id.trim(),z.type),M=this.startIdIfNeeded(J.id.trim()),R=this.startTypeIfNeeded(J.id.trim(),J.type);this.addState(Q,U,z.doc,z.description,z.note,z.classes,z.styles,z.textStyles),this.addState(M,R,J.doc,J.description,J.note,J.classes,J.styles,J.textStyles),this.currentDocument.relations.push({id1:Q,id2:M,relationTitle:l.sanitizeText(B,_())})}addRelation(z,J,B){if(typeof z==="object"&&typeof J==="object")this.addRelationObjs(z,J,B);else if(typeof z==="string"&&typeof J==="string"){let Q=this.startIdIfNeeded(z.trim()),U=this.startTypeIfNeeded(z),M=this.endIdIfNeeded(J.trim()),R=this.endTypeIfNeeded(J);this.addState(Q,U),this.addState(M,R),this.currentDocument.relations.push({id1:Q,id2:M,relationTitle:B?l.sanitizeText(B,_()):void 0})}}addDescription(z,J){let B=this.currentDocument.states.get(z),Q=J.startsWith(":")?J.replace(":","").trim():J;B?.descriptions?.push(l.sanitizeText(Q,_()))}cleanupLabel(z){return z.startsWith(":")?z.slice(2).trim():z.trim()}getDividerId(){return this.dividerCnt++,`divider-id-${this.dividerCnt}`}addStyleClass(z,J=""){if(!this.classes.has(z))this.classes.set(z,{id:z,styles:[],textStyles:[]});let B=this.classes.get(z);if(J&&B)J.split(f.STYLECLASS_SEP).forEach((Q)=>{let U=Q.replace(/([^;]*);/,"$1").trim();if(RegExp(f.COLOR_KEYWORD).exec(Q)){let R=U.replace(f.FILL_KEYWORD,f.BG_FILL).replace(f.COLOR_KEYWORD,f.FILL_KEYWORD);B.textStyles.push(R)}B.styles.push(U)})}getClasses(){return this.classes}setCssClass(z,J){z.split(",").forEach((B)=>{let Q=this.getState(B);if(!Q){let U=B.trim();this.addState(U),Q=this.getState(U)}Q?.classes?.push(J)})}setStyle(z,J){this.getState(z)?.styles?.push(J)}setTextStyle(z,J){this.getState(z)?.textStyles?.push(J)}getDirectionStatement(){return this.rootDoc.find((z)=>z.stmt===Dz)}getDirection(){return this.getDirectionStatement()?.value??MJ}setDirection(z){let J=this.getDirectionStatement();if(J)J.value=z;else this.rootDoc.unshift({stmt:Dz,value:z})}trimColon(z){return z.startsWith(":")?z.slice(1).trim():z.trim()}getData(){let z=_();return{nodes:this.nodes,edges:this.edges,other:{},config:z,direction:KJ(this.getRootDocV2())}}getConfig(){return _().state}},SJ=Y((z)=>`
defs [id$="-barbEnd"] {
    fill: ${z.transitionColor};
    stroke: ${z.transitionColor};
  }
g.stateGroup text {
  fill: ${z.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${z.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${z.stateLabelColor};
}

g.stateGroup rect {
  fill: ${z.mainBkg};
  stroke: ${z.nodeBorder};
}

g.stateGroup line {
  stroke: ${z.lineColor};
  stroke-width: ${z.strokeWidth||1};
}

.transition {
  stroke: ${z.transitionColor};
  stroke-width: ${z.strokeWidth||1};
  fill: none;
}

.stateGroup .composit {
  fill: ${z.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${z.noteBorderColor};
  fill: ${z.noteBkgColor};

  text {
    fill: ${z.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${z.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${z.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${z.edgeLabelBackground};
  p {
    background-color: ${z.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${z.edgeLabelBackground};
    fill: ${z.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${z.transitionLabelColor||z.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${z.transitionLabelColor||z.tertiaryTextColor};
}

.stateLabel text {
  fill: ${z.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${z.specialStateColor};
  stroke: ${z.specialStateColor};
}

.node .fork-join {
  fill: ${z.specialStateColor};
  stroke: ${z.specialStateColor};
}

.node circle.state-end {
  fill: ${z.innerEndBackground};
  stroke: ${z.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${z.compositeBackground||z.background};
  // stroke: ${z.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${z.stateBkg||z.mainBkg};
  stroke: ${z.stateBorder||z.nodeBorder};
  stroke-width: ${z.strokeWidth||1}px;
}
.node polygon {
  fill: ${z.mainBkg};
  stroke: ${z.stateBorder||z.nodeBorder};;
  stroke-width: ${z.strokeWidth||1}px;
}
[id$="-barbEnd"] {
  fill: ${z.lineColor};
}

.statediagram-cluster rect {
  fill: ${z.compositeTitleBackground};
  stroke: ${z.stateBorder||z.nodeBorder};
  stroke-width: ${z.strokeWidth||1}px;
}

.cluster-label, .nodeLabel {
  color: ${z.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${z.stateBorder||z.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${z.compositeBackground||z.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${z.altBackground?z.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${z.altBackground?z.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${z.noteBkgColor};
  stroke: ${z.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${z.noteBkgColor};
  stroke: ${z.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${z.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${z.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${z.noteTextColor};
}

[id$="-dependencyStart"], [id$="-dependencyEnd"] {
  fill: ${z.lineColor};
  stroke: ${z.lineColor};
  stroke-width: ${z.strokeWidth||1};
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${z.textColor};
}

[data-look="neo"].statediagram-cluster rect {
  fill: ${z.mainBkg};
  stroke: ${z.useGradient?"url("+z.svgId+"-gradient)":z.stateBorder||z.nodeBorder};
  stroke-width: ${z.strokeWidth??1};
}
[data-look="neo"].statediagram-cluster rect.outer {
  rx: ${z.radius}px;
  ry: ${z.radius}px;
  filter: ${z.dropShadow?z.dropShadow.replace("url(#drop-shadow)",`url(${z.svgId}-drop-shadow)`):"none"}
}
`,"getStyles"),iJ=SJ;
export{$J as e,dJ as f,nJ as g,iJ as h};
