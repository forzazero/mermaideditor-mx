import{sb as cu}from"./chunk-hgb5smew.js";import{xb as au}from"./chunk-tv32rnyg.js";import{jc as Nu,kc as Hu,pc as Du,qc as Bu,rc as Xu,sc as Ou,tc as wu,uc as Cu,vc as Eu,wc as Qf}from"./chunk-6rq1j1c6.js";import{$c as lf,Dc as Gu,Ec as W,Gc as Yf,Ic as vu,Jc as Au,Kc as Pu,Lc as ju,Mc as Hf,Rc as Fu,Xc as Iu,Yc as cf,Zc as yf,_c as rf,ad as nf,bd as bu,cd as Vu,dd as Su,ed as xu,fd as gu,gd as _u,hd as Tu,id as kf,jd as $f,kd as pu}from"./chunk-5490625s.js";import{ge as Jf,he as Cf}from"./chunk-fn162pnw.js";var Wu=Cf((If,bf)=>{(function(f,Y){typeof If=="object"&&typeof bf<"u"?bf.exports=Y():typeof define=="function"&&define.amd?define(Y):(f=typeof globalThis<"u"?globalThis:f||self).dayjs_plugin_isoWeek=Y()})(If,function(){var f="day";return function(Y,Q,Z){var z=function(v){return v.add(4-v.isoWeekday(),f)},U=Q.prototype;U.isoWeekYear=function(){return z(this).year()},U.isoWeek=function(v){if(!this.$utils().u(v))return this.add(7*(v-this.isoWeek()),f);var A,p,P,T,l=z(this),r=(A=this.isoWeekYear(),p=this.$u,P=(p?Z.utc:Z)().year(A).startOf("year"),T=4-P.isoWeekday(),P.isoWeekday()>4&&(T+=7),P.add(T,f));return l.diff(r,"week")+1},U.isoWeekday=function(v){return this.$utils().u(v)?this.day()||7:this.day(this.day()%7?v:v-7)};var D=U.startOf;U.startOf=function(v,A){var p=this.$utils(),P=!!p.u(A)||A;return p.p(v)==="isoweek"?P?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):D.bind(this)(v,A)}}})});var qu=Cf((Vf,Sf)=>{(function(f,Y){typeof Vf=="object"&&typeof Sf<"u"?Sf.exports=Y():typeof define=="function"&&define.amd?define(Y):(f=typeof globalThis<"u"?globalThis:f||self).dayjs_plugin_customParseFormat=Y()})(Vf,function(){var f={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Y=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,Q=/\d/,Z=/\d\d/,z=/\d\d?/,U=/\d*[^-_:/,()\s\d]+/,D={},v=function(w){return(w=+w)+(w>68?1900:2000)},A=function(w){return function(G){this[w]=+G}},p=[/[+-]\d\d:?(\d\d)?|Z/,function(w){(this.zone||(this.zone={})).offset=function(G){if(!G)return 0;if(G==="Z")return 0;var g=G.match(/([+-]|\d\d)/g),V=60*g[1]+(+g[2]||0);return V===0?0:g[0]==="+"?-V:V}(w)}],P=function(w){var G=D[w];return G&&(G.indexOf?G:G.s.concat(G.f))},T=function(w,G){var g,V=D.meridiem;if(V){for(var m=1;m<=24;m+=1)if(w.indexOf(V(m,0,G))>-1){g=m>12;break}}else g=w===(G?"pm":"PM");return g},l={A:[U,function(w){this.afternoon=T(w,!1)}],a:[U,function(w){this.afternoon=T(w,!0)}],Q:[Q,function(w){this.month=3*(w-1)+1}],S:[Q,function(w){this.milliseconds=100*+w}],SS:[Z,function(w){this.milliseconds=10*+w}],SSS:[/\d{3}/,function(w){this.milliseconds=+w}],s:[z,A("seconds")],ss:[z,A("seconds")],m:[z,A("minutes")],mm:[z,A("minutes")],H:[z,A("hours")],h:[z,A("hours")],HH:[z,A("hours")],hh:[z,A("hours")],D:[z,A("day")],DD:[Z,A("day")],Do:[U,function(w){var G=D.ordinal,g=w.match(/\d+/);if(this.day=g[0],G)for(var V=1;V<=31;V+=1)G(V).replace(/\[|\]/g,"")===w&&(this.day=V)}],w:[z,A("week")],ww:[Z,A("week")],M:[z,A("month")],MM:[Z,A("month")],MMM:[U,function(w){var G=P("months"),g=(P("monthsShort")||G.map(function(V){return V.slice(0,3)})).indexOf(w)+1;if(g<1)throw Error();this.month=g%12||g}],MMMM:[U,function(w){var G=P("months").indexOf(w)+1;if(G<1)throw Error();this.month=G%12||G}],Y:[/[+-]?\d+/,A("year")],YY:[Z,function(w){this.year=v(w)}],YYYY:[/\d{4}/,A("year")],Z:p,ZZ:p};function r(w){var G,g;G=w,g=D&&D.formats;for(var V=(w=G.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(S,h,N){var H=N&&N.toUpperCase();return h||g[N]||f[N]||g[H].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(O,B,J){return B||J.slice(1)})})).match(Y),m=V.length,o=0;o<m;o+=1){var F=V[o],X=l[F],K=X&&X[0],j=X&&X[1];V[o]=j?{regex:K,parser:j}:F.replace(/^\[|\]$/g,"")}return function(S){for(var h={},N=0,H=0;N<m;N+=1){var O=V[N];if(typeof O=="string")H+=O.length;else{var{regex:B,parser:J}=O,q=S.slice(H),L=B.exec(q)[0];J.call(h,L),S=S.replace(L,"")}}return function(R){var C=R.afternoon;if(C!==void 0){var M=R.hours;C?M<12&&(R.hours+=12):M===12&&(R.hours=0),delete R.afternoon}}(h),h}}return function(w,G,g){g.p.customParseFormat=!0,w&&w.parseTwoDigitYear&&(v=w.parseTwoDigitYear);var V=G.prototype,m=V.parse;V.parse=function(o){var{date:F,utc:X,args:K}=o;this.$u=X;var j=K[1];if(typeof j=="string"){var S=K[2]===!0,h=K[3]===!0,N=S||h,H=K[2];h&&(H=K[2]),D=this.$locale(),!S&&H&&(D=g.Ls[H]),this.$d=function(q,L,R,C){try{if(["x","X"].indexOf(L)>-1)return new Date((L==="X"?1000:1)*q);var M=r(L)(q),_=M.year,u=M.month,E=M.day,x=M.hours,I=M.minutes,b=M.seconds,n=M.milliseconds,c=M.zone,y=M.week,i=new Date,Mf=E||(_||u?1:i.getDate()),zf=_||i.getFullYear(),qf=0;_&&!u||(qf=u>0?u-1:i.getMonth());var Uf,Kf=x||0,k=I||0,Zf=b||0,e=n||0;return c?new Date(Date.UTC(zf,qf,Mf,Kf,k,Zf,e+60*c.offset*1000)):R?new Date(Date.UTC(zf,qf,Mf,Kf,k,Zf,e)):(Uf=new Date(zf,qf,Mf,Kf,k,Zf,e),y&&(Uf=C(Uf).week(y).toDate()),Uf)}catch(d){return new Date("")}}(F,j,X,g),this.init(),H&&H!==!0&&(this.$L=this.locale(H).$L),N&&F!=this.format(j)&&(this.$d=new Date("")),D={}}else if(j instanceof Array)for(var O=j.length,B=1;B<=O;B+=1){K[1]=j[B-1];var J=g.apply(this,K);if(J.isValid()){this.$d=J.$d,this.$L=J.$L,this.init();break}B===O&&(this.$d=new Date(""))}else m.call(this,o)}}})});var Uu=Cf((xf,gf)=>{(function(f,Y){typeof xf=="object"&&typeof gf<"u"?gf.exports=Y():typeof define=="function"&&define.amd?define(Y):(f=typeof globalThis<"u"?globalThis:f||self).dayjs_plugin_advancedFormat=Y()})(xf,function(){return function(f,Y){var Q=Y.prototype,Z=Q.format;Q.format=function(z){var U=this,D=this.$locale();if(!this.isValid())return Z.bind(this)(z);var v=this.$utils(),A=(z||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(p){switch(p){case"Q":return Math.ceil((U.$M+1)/3);case"Do":return D.ordinal(U.$D);case"gggg":return U.weekYear();case"GGGG":return U.isoWeekYear();case"wo":return D.ordinal(U.week(),"W");case"w":case"ww":return v.s(U.week(),p==="w"?1:2,"0");case"W":case"WW":return v.s(U.isoWeek(),p==="W"?1:2,"0");case"k":case"kk":return v.s(String(U.$H===0?24:U.$H),p==="k"?1:2,"0");case"X":return Math.floor(U.$d.getTime()/1000);case"x":return U.$d.getTime();case"z":return"["+U.offsetName()+"]";case"zzz":return"["+U.offsetName("long")+"]";default:return p}});return Z.bind(this)(A)}}})});var Ku=Cf((_f,Tf)=>{(function(f,Y){typeof _f=="object"&&typeof Tf<"u"?Tf.exports=Y():typeof define=="function"&&define.amd?define(Y):(f=typeof globalThis<"u"?globalThis:f||self).dayjs_plugin_duration=Y()})(_f,function(){var f,Y,Q=1000,Z=60000,z=3600000,U=86400000,D=31536000000,v=2628000000,A=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,p=/\[([^\]]+)]|YYYY|YY|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g,P={years:D,months:v,days:U,hours:z,minutes:Z,seconds:Q,milliseconds:1,weeks:604800000},T=function(F){return F instanceof m},l=function(F,X,K){return new m(F,K,X.$l)},r=function(F){return Y.p(F)+"s"},w=function(F){return F<0},G=function(F){return w(F)?Math.ceil(F):Math.floor(F)},g=function(F){return Math.abs(F)},V=function(F,X){return F?w(F)?{negative:!0,format:""+g(F)+X}:{negative:!1,format:""+F+X}:{negative:!1,format:""}},m=function(){function F(K,j,S){var h=this;if(this.$d={},this.$l=S,K===void 0&&(this.$ms=0,this.parseFromMilliseconds()),j)return l(K*P[r(j)],this);if(typeof K=="number")return this.$ms=K,this.parseFromMilliseconds(),this;if(typeof K=="object")return Object.keys(K).forEach(function(O){h.$d[r(O)]=K[O]}),this.calMilliseconds(),this;if(typeof K=="string"){var N=K.match(A);if(N){var H=N.slice(2).map(function(O){return O!=null?Number(O):0});return this.$d.years=H[0],this.$d.months=H[1],this.$d.weeks=H[2],this.$d.days=H[3],this.$d.hours=H[4],this.$d.minutes=H[5],this.$d.seconds=H[6],this.calMilliseconds(),this}}return this}var X=F.prototype;return X.calMilliseconds=function(){var K=this;this.$ms=Object.keys(this.$d).reduce(function(j,S){return j+(K.$d[S]||0)*P[S]},0)},X.parseFromMilliseconds=function(){var K=this.$ms;this.$d.years=G(K/D),K%=D,this.$d.months=G(K/v),K%=v,this.$d.days=G(K/U),K%=U,this.$d.hours=G(K/z),K%=z,this.$d.minutes=G(K/Z),K%=Z,this.$d.seconds=G(K/Q),K%=Q,this.$d.milliseconds=K},X.toISOString=function(){var K=V(this.$d.years,"Y"),j=V(this.$d.months,"M"),S=+this.$d.days||0;this.$d.weeks&&(S+=7*this.$d.weeks);var h=V(S,"D"),N=V(this.$d.hours,"H"),H=V(this.$d.minutes,"M"),O=this.$d.seconds||0;this.$d.milliseconds&&(O+=this.$d.milliseconds/1000,O=Math.round(1000*O)/1000);var B=V(O,"S"),J=K.negative||j.negative||h.negative||N.negative||H.negative||B.negative,q=N.format||H.format||B.format?"T":"",L=(J?"-":"")+"P"+K.format+j.format+h.format+q+N.format+H.format+B.format;return L==="P"||L==="-P"?"P0D":L},X.toJSON=function(){return this.toISOString()},X.format=function(K){var j=K||"YYYY-MM-DDTHH:mm:ss",S={Y:this.$d.years,YY:Y.s(this.$d.years,2,"0"),YYYY:Y.s(this.$d.years,4,"0"),M:this.$d.months,MM:Y.s(this.$d.months,2,"0"),D:this.$d.days,DD:Y.s(this.$d.days,2,"0"),H:this.$d.hours,HH:Y.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:Y.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:Y.s(this.$d.seconds,2,"0"),SSS:Y.s(this.$d.milliseconds,3,"0")};return j.replace(p,function(h,N){return N||String(S[h])})},X.as=function(K){return this.$ms/P[r(K)]},X.get=function(K){var j=this.$ms,S=r(K);return S==="milliseconds"?j%=1000:j=S==="weeks"?G(j/P[S]):this.$d[S],j||0},X.add=function(K,j,S){var h;return h=j?K*P[r(j)]:T(K)?K.$ms:l(K,this).$ms,l(this.$ms+h*(S?-1:1),this)},X.subtract=function(K,j){return this.add(K,j,!0)},X.locale=function(K){var j=this.clone();return j.$l=K,j},X.clone=function(){return l(this.$ms,this)},X.humanize=function(K){return f().add(this.$ms,"ms").locale(this.$l).fromNow(!K)},X.valueOf=function(){return this.asMilliseconds()},X.milliseconds=function(){return this.get("milliseconds")},X.asMilliseconds=function(){return this.as("milliseconds")},X.seconds=function(){return this.get("seconds")},X.asSeconds=function(){return this.as("seconds")},X.minutes=function(){return this.get("minutes")},X.asMinutes=function(){return this.as("minutes")},X.hours=function(){return this.get("hours")},X.asHours=function(){return this.as("hours")},X.days=function(){return this.get("days")},X.asDays=function(){return this.as("days")},X.weeks=function(){return this.get("weeks")},X.asWeeks=function(){return this.as("weeks")},X.months=function(){return this.get("months")},X.asMonths=function(){return this.as("months")},X.years=function(){return this.get("years")},X.asYears=function(){return this.as("years")},F}(),o=function(F,X,K){return F.add(X.years()*K,"y").add(X.months()*K,"M").add(X.days()*K,"d").add(X.hours()*K,"h").add(X.minutes()*K,"m").add(X.seconds()*K,"s").add(X.milliseconds()*K,"ms")};return function(F,X,K){f=K,Y=K().$utils(),K.duration=function(h,N){var H=K.locale();return l(h,{$l:H},N)},K.isDuration=T;var j=X.prototype.add,S=X.prototype.subtract;X.prototype.add=function(h,N){return T(h)?o(this,h,1):j.bind(this)(h,N)},X.prototype.subtract=function(h,N){return T(h)?o(this,h,-1):S.bind(this)(h,N)}}})});var yu=Jf(au(),1),s=Jf(Gu(),1),ru=Jf(Wu(),1),lu=Jf(qu(),1),nu=Jf(Uu(),1),Rf=Jf(Gu(),1),eu=Jf(Ku(),1);var mf=function(){var f=W(function(B,J,q,L){for(q=q||{},L=B.length;L--;q[B[L]]=J);return q},"o"),Y=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],Q=[1,26],Z=[1,27],z=[1,28],U=[1,29],D=[1,30],v=[1,31],A=[1,32],p=[1,33],P=[1,34],T=[1,9],l=[1,10],r=[1,11],w=[1,12],G=[1,13],g=[1,14],V=[1,15],m=[1,16],o=[1,19],F=[1,20],X=[1,21],K=[1,22],j=[1,23],S=[1,25],h=[1,35],N={trace:W(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:W(function(J,q,L,R,C,M,_){var u=M.length-1;switch(C){case 1:return M[u-1];case 2:this.$=[];break;case 3:M[u-1].push(M[u]),this.$=M[u-1];break;case 4:case 5:this.$=M[u];break;case 6:case 7:this.$=[];break;case 8:R.setWeekday("monday");break;case 9:R.setWeekday("tuesday");break;case 10:R.setWeekday("wednesday");break;case 11:R.setWeekday("thursday");break;case 12:R.setWeekday("friday");break;case 13:R.setWeekday("saturday");break;case 14:R.setWeekday("sunday");break;case 15:R.setWeekend("friday");break;case 16:R.setWeekend("saturday");break;case 17:R.setDateFormat(M[u].substr(11)),this.$=M[u].substr(11);break;case 18:R.enableInclusiveEndDates(),this.$=M[u].substr(18);break;case 19:R.TopAxis(),this.$=M[u].substr(8);break;case 20:R.setAxisFormat(M[u].substr(11)),this.$=M[u].substr(11);break;case 21:R.setTickInterval(M[u].substr(13)),this.$=M[u].substr(13);break;case 22:R.setExcludes(M[u].substr(9)),this.$=M[u].substr(9);break;case 23:R.setIncludes(M[u].substr(9)),this.$=M[u].substr(9);break;case 24:R.setTodayMarker(M[u].substr(12)),this.$=M[u].substr(12);break;case 27:R.setDiagramTitle(M[u].substr(6)),this.$=M[u].substr(6);break;case 28:this.$=M[u].trim(),R.setAccTitle(this.$);break;case 29:case 30:this.$=M[u].trim(),R.setAccDescription(this.$);break;case 31:R.addSection(M[u].substr(8)),this.$=M[u].substr(8);break;case 33:R.addTask(M[u-1],M[u]),this.$="task";break;case 34:this.$=M[u-1],R.setClickEvent(M[u-1],M[u],null);break;case 35:this.$=M[u-2],R.setClickEvent(M[u-2],M[u-1],M[u]);break;case 36:this.$=M[u-2],R.setClickEvent(M[u-2],M[u-1],null),R.setLink(M[u-2],M[u]);break;case 37:this.$=M[u-3],R.setClickEvent(M[u-3],M[u-2],M[u-1]),R.setLink(M[u-3],M[u]);break;case 38:this.$=M[u-2],R.setClickEvent(M[u-2],M[u],null),R.setLink(M[u-2],M[u-1]);break;case 39:this.$=M[u-3],R.setClickEvent(M[u-3],M[u-1],M[u]),R.setLink(M[u-3],M[u-2]);break;case 40:this.$=M[u-1],R.setLink(M[u-1],M[u]);break;case 41:case 47:this.$=M[u-1]+" "+M[u];break;case 42:case 43:case 45:this.$=M[u-2]+" "+M[u-1]+" "+M[u];break;case 44:case 46:this.$=M[u-3]+" "+M[u-2]+" "+M[u-1]+" "+M[u];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},f(Y,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:Q,13:Z,14:z,15:U,16:D,17:v,18:A,19:18,20:p,21:P,22:T,23:l,24:r,25:w,26:G,27:g,28:V,29:m,30:o,31:F,33:X,35:K,36:j,37:24,38:S,40:h},f(Y,[2,7],{1:[2,1]}),f(Y,[2,3]),{9:36,11:17,12:Q,13:Z,14:z,15:U,16:D,17:v,18:A,19:18,20:p,21:P,22:T,23:l,24:r,25:w,26:G,27:g,28:V,29:m,30:o,31:F,33:X,35:K,36:j,37:24,38:S,40:h},f(Y,[2,5]),f(Y,[2,6]),f(Y,[2,17]),f(Y,[2,18]),f(Y,[2,19]),f(Y,[2,20]),f(Y,[2,21]),f(Y,[2,22]),f(Y,[2,23]),f(Y,[2,24]),f(Y,[2,25]),f(Y,[2,26]),f(Y,[2,27]),{32:[1,37]},{34:[1,38]},f(Y,[2,30]),f(Y,[2,31]),f(Y,[2,32]),{39:[1,39]},f(Y,[2,8]),f(Y,[2,9]),f(Y,[2,10]),f(Y,[2,11]),f(Y,[2,12]),f(Y,[2,13]),f(Y,[2,14]),f(Y,[2,15]),f(Y,[2,16]),{41:[1,40],43:[1,41]},f(Y,[2,4]),f(Y,[2,28]),f(Y,[2,29]),f(Y,[2,33]),f(Y,[2,34],{42:[1,42],43:[1,43]}),f(Y,[2,40],{41:[1,44]}),f(Y,[2,35],{43:[1,45]}),f(Y,[2,36]),f(Y,[2,38],{42:[1,46]}),f(Y,[2,37]),f(Y,[2,39])],defaultActions:{},parseError:W(function(J,q){if(q.recoverable)this.trace(J);else{var L=Error(J);throw L.hash=q,L}},"parseError"),parse:W(function(J){var q=this,L=[0],R=[],C=[null],M=[],_=this.table,u="",E=0,x=0,I=0,b=2,n=1,c=M.slice.call(arguments,1),y=Object.create(this.lexer),i={yy:{}};for(var Mf in this.yy)if(Object.prototype.hasOwnProperty.call(this.yy,Mf))i.yy[Mf]=this.yy[Mf];if(y.setInput(J,i.yy),i.yy.lexer=y,i.yy.parser=this,typeof y.yylloc>"u")y.yylloc={};var zf=y.yylloc;M.push(zf);var qf=y.options&&y.options.ranges;if(typeof i.yy.parseError==="function")this.parseError=i.yy.parseError;else this.parseError=Object.getPrototypeOf(this).parseError;function Uf(t){L.length=L.length-2*t,C.length=C.length-t,M.length=M.length-t}W(Uf,"popStack");function Kf(){var t=R.pop()||y.lex()||n;if(typeof t!=="number"){if(t instanceof Array)R=t,t=R.pop();t=q.symbols_[t]||t}return t}W(Kf,"lex");var k,Zf,e,d,k0,jf,hf={},Of,ff,Ju,wf;while(!0){if(e=L[L.length-1],this.defaultActions[e])d=this.defaultActions[e];else{if(k===null||typeof k>"u")k=Kf();d=_[e]&&_[e][k]}if(typeof d>"u"||!d.length||!d[0]){var Ff="";wf=[];for(Of in _[e])if(this.terminals_[Of]&&Of>b)wf.push("'"+this.terminals_[Of]+"'");if(y.showPosition)Ff="Parse error on line "+(E+1)+`:
`+y.showPosition()+`
Expecting `+wf.join(", ")+", got '"+(this.terminals_[k]||k)+"'";else Ff="Parse error on line "+(E+1)+": Unexpected "+(k==n?"end of input":"'"+(this.terminals_[k]||k)+"'");this.parseError(Ff,{text:y.match,token:this.terminals_[k]||k,line:y.yylineno,loc:zf,expected:wf})}if(d[0]instanceof Array&&d.length>1)throw Error("Parse Error: multiple actions possible at state: "+e+", token: "+k);switch(d[0]){case 1:if(L.push(k),C.push(y.yytext),M.push(y.yylloc),L.push(d[1]),k=null,!Zf){if(x=y.yyleng,u=y.yytext,E=y.yylineno,zf=y.yylloc,I>0)I--}else k=Zf,Zf=null;break;case 2:if(ff=this.productions_[d[1]][1],hf.$=C[C.length-ff],hf._$={first_line:M[M.length-(ff||1)].first_line,last_line:M[M.length-1].last_line,first_column:M[M.length-(ff||1)].first_column,last_column:M[M.length-1].last_column},qf)hf._$.range=[M[M.length-(ff||1)].range[0],M[M.length-1].range[1]];if(jf=this.performAction.apply(hf,[u,x,E,i.yy,d[1],C,M].concat(c)),typeof jf<"u")return jf;if(ff)L=L.slice(0,-1*ff*2),C=C.slice(0,-1*ff),M=M.slice(0,-1*ff);L.push(this.productions_[d[1]][0]),C.push(hf.$),M.push(hf._$),Ju=_[L[L.length-2]][L[L.length-1]],L.push(Ju);break;case 3:return!0}}return!0},"parse")},H=function(){var B={EOF:1,parseError:W(function(q,L){if(this.yy.parser)this.yy.parser.parseError(q,L);else throw Error(q)},"parseError"),setInput:W(function(J,q){if(this.yy=q||this.yy||{},this._input=J,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges)this.yylloc.range=[0,0];return this.offset=0,this},"setInput"),input:W(function(){var J=this._input[0];this.yytext+=J,this.yyleng++,this.offset++,this.match+=J,this.matched+=J;var q=J.match(/(?:\r\n?|\n).*/g);if(q)this.yylineno++,this.yylloc.last_line++;else this.yylloc.last_column++;if(this.options.ranges)this.yylloc.range[1]++;return this._input=this._input.slice(1),J},"input"),unput:W(function(J){var q=J.length,L=J.split(/(?:\r\n?|\n)/g);this._input=J+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-q),this.offset-=q;var R=this.match.split(/(?:\r\n?|\n)/g);if(this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),L.length-1)this.yylineno-=L.length-1;var C=this.yylloc.range;if(this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:L?(L.length===R.length?this.yylloc.first_column:0)+R[R.length-L.length].length-L[0].length:this.yylloc.first_column-q},this.options.ranges)this.yylloc.range=[C[0],C[0]+this.yyleng-q];return this.yyleng=this.yytext.length,this},"unput"),more:W(function(){return this._more=!0,this},"more"),reject:W(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:W(function(J){this.unput(this.match.slice(J))},"less"),pastInput:W(function(){var J=this.matched.substr(0,this.matched.length-this.match.length);return(J.length>20?"...":"")+J.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:W(function(){var J=this.match;if(J.length<20)J+=this._input.substr(0,20-J.length);return(J.substr(0,20)+(J.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:W(function(){var J=this.pastInput(),q=Array(J.length+1).join("-");return J+this.upcomingInput()+`
`+q+"^"},"showPosition"),test_match:W(function(J,q){var L,R,C;if(this.options.backtrack_lexer){if(C={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges)C.yylloc.range=this.yylloc.range.slice(0)}if(R=J[0].match(/(?:\r\n?|\n).*/g),R)this.yylineno+=R.length;if(this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:R?R[R.length-1].length-R[R.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+J[0].length},this.yytext+=J[0],this.match+=J[0],this.matches=J,this.yyleng=this.yytext.length,this.options.ranges)this.yylloc.range=[this.offset,this.offset+=this.yyleng];if(this._more=!1,this._backtrack=!1,this._input=this._input.slice(J[0].length),this.matched+=J[0],L=this.performAction.call(this,this.yy,this,q,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input)this.done=!1;if(L)return L;else if(this._backtrack){for(var M in C)this[M]=C[M];return!1}return!1},"test_match"),next:W(function(){if(this.done)return this.EOF;if(!this._input)this.done=!0;var J,q,L,R;if(!this._more)this.yytext="",this.match="";var C=this._currentRules();for(var M=0;M<C.length;M++)if(L=this._input.match(this.rules[C[M]]),L&&(!q||L[0].length>q[0].length)){if(q=L,R=M,this.options.backtrack_lexer)if(J=this.test_match(L,C[M]),J!==!1)return J;else if(this._backtrack){q=!1;continue}else return!1;else if(!this.options.flex)break}if(q){if(J=this.test_match(q,C[R]),J!==!1)return J;return!1}if(this._input==="")return this.EOF;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:W(function(){var q=this.next();if(q)return q;else return this.lex()},"lex"),begin:W(function(q){this.conditionStack.push(q)},"begin"),popState:W(function(){var q=this.conditionStack.length-1;if(q>0)return this.conditionStack.pop();else return this.conditionStack[0]},"popState"),_currentRules:W(function(){if(this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1])return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;else return this.conditions.INITIAL.rules},"_currentRules"),topState:W(function(q){if(q=this.conditionStack.length-1-Math.abs(q||0),q>=0)return this.conditionStack[q];else return"INITIAL"},"topState"),pushState:W(function(q){this.begin(q)},"pushState"),stateStackSize:W(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:W(function(q,L,R,C){var M=C;switch(R){case 0:return this.begin("open_directive"),"open_directive";break;case 1:return this.begin("acc_title"),31;break;case 2:return this.popState(),"acc_title_value";break;case 3:return this.begin("acc_descr"),33;break;case 4:return this.popState(),"acc_descr_value";break;case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return B}();N.lexer=H;function O(){this.yy={}}return W(O,"Parser"),O.prototype=N,N.Parser=O,new O}();mf.parser=mf;var f0=mf;s.default.extend(ru.default);s.default.extend(lu.default);s.default.extend(nu.default);var hu={friday:5,saturday:6},a="",tf="",ef=void 0,af="",Df=[],Bf=[],fu=new Map,uu=[],Af=[],Nf="",Yu="",ku=["active","done","crit","milestone","vert"],Mu=[],Lf="",Xf=!1,zu=!1,Zu="sunday",Pf="saturday",of=0,u0=W(function(){uu=[],Af=[],Nf="",Mu=[],Ef=0,sf=void 0,vf=void 0,$=[],a="",tf="",Yu="",ef=void 0,af="",Df=[],Bf=[],Xf=!1,zu=!1,of=0,fu=new Map,Lf="",Du(),Zu="sunday",Pf="saturday"},"clear"),Y0=W(function(f){Lf=f},"setDiagramId"),M0=W(function(f){tf=f},"setAxisFormat"),z0=W(function(){return tf},"getAxisFormat"),Z0=W(function(f){ef=f},"setTickInterval"),Q0=W(function(){return ef},"getTickInterval"),J0=W(function(f){af=f},"setTodayMarker"),W0=W(function(){return af},"getTodayMarker"),q0=W(function(f){a=f},"setDateFormat"),U0=W(function(){Xf=!0},"enableInclusiveEndDates"),K0=W(function(){return Xf},"endDatesAreInclusive"),h0=W(function(){zu=!0},"enableTopAxis"),L0=W(function(){return zu},"topAxisEnabled"),R0=W(function(f){Yu=f},"setDisplayMode"),G0=W(function(){return Yu},"getDisplayMode"),N0=W(function(){return a},"getDateFormat"),H0=W(function(f){Df=f.toLowerCase().split(/[\s,]+/)},"setIncludes"),D0=W(function(){return Df},"getIncludes"),B0=W(function(f){Bf=f.toLowerCase().split(/[\s,]+/)},"setExcludes"),X0=W(function(){return Bf},"getExcludes"),O0=W(function(){return fu},"getLinks"),w0=W(function(f){Nf=f,uu.push(f)},"addSection"),C0=W(function(){return uu},"getSections"),E0=W(function(){let f=Lu(),Y=10,Q=0;while(!f&&Q<Y)f=Lu(),Q++;return Af=$,Af},"getTasks"),$u=W(function(f,Y,Q,Z){let z=f.format(Y.trim()),U=f.format("YYYY-MM-DD");if(Z.includes(z)||Z.includes(U))return!1;if(Q.includes("weekends")&&(f.isoWeekday()===hu[Pf]||f.isoWeekday()===hu[Pf]+1))return!0;if(Q.includes(f.format("dddd").toLowerCase()))return!0;return Q.includes(z)||Q.includes(U)},"isInvalidDate"),v0=W(function(f){Zu=f},"setWeekday"),A0=W(function(){return Zu},"getWeekday"),P0=W(function(f){Pf=f},"setWeekend"),mu=W(function(f,Y,Q,Z){if(!Q.length||f.manualEndTime)return;let z;if(f.startTime instanceof Date)z=s.default(f.startTime);else z=s.default(f.startTime,Y,!0);z=z.add(1,"d");let U;if(f.endTime instanceof Date)U=s.default(f.endTime);else U=s.default(f.endTime,Y,!0);let[D,v]=j0(z,U,Y,Q,Z);f.endTime=D.toDate(),f.renderEndTime=v},"checkTaskDates"),j0=W(function(f,Y,Q,Z,z){let U=!1,D=null,v=Y.add(1e4,"d");while(f<=Y){if(!U)D=Y.toDate();if(U=$u(f,Q,Z,z),U){if(Y=Y.add(1,"d"),Y>v)throw Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.")}f=f.add(1,"d")}return[Y,D]},"fixTaskDates"),df=W(function(f,Y,Q){if(Q=Q.trim(),W((v)=>{let A=v.trim();return A==="x"||A==="X"},"isTimestampFormat")(Y)&&/^\d+$/.test(Q))return new Date(Number(Q));let U=/^after\s+(?<ids>[\d\w- ]+)/.exec(Q);if(U!==null){let v=null;for(let p of U.groups.ids.split(" ")){let P=Wf(p);if(P!==void 0&&(!v||P.endTime>v.endTime))v=P}if(v)return v.endTime;let A=new Date;return A.setHours(0,0,0,0),A}let D=s.default(Q,Y.trim(),!0);if(D.isValid())return D.toDate();else{Yf.debug("Invalid date:"+Q),Yf.debug("With date format:"+Y.trim());let v=new Date(Q);if(v===void 0||isNaN(v.getTime())||v.getFullYear()<-1e4||v.getFullYear()>1e4)throw Error("Invalid date:"+Q);return v}},"getStartDate"),ou=W(function(f){let Y=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(f.trim());if(Y!==null)return[Number.parseFloat(Y[1]),Y[2]];return[NaN,"ms"]},"parseDuration"),iu=W(function(f,Y,Q,Z=!1){Q=Q.trim();let U=/^until\s+(?<ids>[\d\w- ]+)/.exec(Q);if(U!==null){let P=null;for(let l of U.groups.ids.split(" ")){let r=Wf(l);if(r!==void 0&&(!P||r.startTime<P.startTime))P=r}if(P)return P.startTime;let T=new Date;return T.setHours(0,0,0,0),T}let D=s.default(Q,Y.trim(),!0);if(D.isValid()){if(Z)D=D.add(1,"d");return D.toDate()}let v=s.default(f),[A,p]=ou(Q);if(!Number.isNaN(A)){let P=v.add(A,p);if(P.isValid())v=P}return v.toDate()},"getEndDate"),Ef=0,Gf=W(function(f){if(f===void 0)return Ef=Ef+1,"task"+Ef;return f},"parseId"),F0=W(function(f,Y){let Q;if(Y.substr(0,1)===":")Q=Y.substr(1,Y.length);else Q=Y;let Z=Q.split(","),z={};Qu(Z,z,ku);for(let D=0;D<Z.length;D++)Z[D]=Z[D].trim();let U="";switch(Z.length){case 1:z.id=Gf(),z.startTime=f.endTime,U=Z[0];break;case 2:z.id=Gf(),z.startTime=df(void 0,a,Z[0]),U=Z[1];break;case 3:z.id=Gf(Z[0]),z.startTime=df(void 0,a,Z[1]),U=Z[2];break;default:}if(U)z.endTime=iu(z.startTime,a,U,Xf),z.manualEndTime=s.default(U,"YYYY-MM-DD",!0).isValid(),mu(z,a,Bf,Df);return z},"compileData"),I0=W(function(f,Y){let Q;if(Y.substr(0,1)===":")Q=Y.substr(1,Y.length);else Q=Y;let Z=Q.split(","),z={};Qu(Z,z,ku);for(let U=0;U<Z.length;U++)Z[U]=Z[U].trim();switch(Z.length){case 1:z.id=Gf(),z.startTime={type:"prevTaskEnd",id:f},z.endTime={data:Z[0]};break;case 2:z.id=Gf(),z.startTime={type:"getStartDate",startData:Z[0]},z.endTime={data:Z[1]};break;case 3:z.id=Gf(Z[0]),z.startTime={type:"getStartDate",startData:Z[1]},z.endTime={data:Z[2]};break;default:}return z},"parseData"),sf,vf,$=[],du={},b0=W(function(f,Y){let Q={section:Nf,type:Nf,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:Y},task:f,classes:[]},Z=I0(vf,Y);Q.raw.startTime=Z.startTime,Q.raw.endTime=Z.endTime,Q.id=Z.id,Q.prevTaskId=vf,Q.active=Z.active,Q.done=Z.done,Q.crit=Z.crit,Q.milestone=Z.milestone,Q.vert=Z.vert,Q.order=of,of++;let z=$.push(Q);vf=Q.id,du[Q.id]=z-1},"addTask"),Wf=W(function(f){let Y=du[f];return $[Y]},"findTaskById"),V0=W(function(f,Y){let Q={section:Nf,type:Nf,description:f,task:f,classes:[]},Z=F0(sf,Y);Q.startTime=Z.startTime,Q.endTime=Z.endTime,Q.id=Z.id,Q.active=Z.active,Q.done=Z.done,Q.crit=Z.crit,Q.milestone=Z.milestone,Q.vert=Z.vert,sf=Q,Af.push(Q)},"addTaskOrg"),Lu=W(function(){let f=W(function(Q){let Z=$[Q],z="";switch($[Q].raw.startTime.type){case"prevTaskEnd":{let U=Wf(Z.prevTaskId);Z.startTime=U.endTime;break}case"getStartDate":if(z=df(void 0,a,$[Q].raw.startTime.startData),z)$[Q].startTime=z;break}if($[Q].startTime){if($[Q].endTime=iu($[Q].startTime,a,$[Q].raw.endTime.data,Xf),$[Q].endTime)$[Q].processed=!0,$[Q].manualEndTime=s.default($[Q].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),mu($[Q],a,Bf,Df)}return $[Q].processed},"compileTask"),Y=!0;for(let[Q,Z]of $.entries())f(Q),Y=Y&&Z.processed;return Y},"compileTasks"),S0=W(function(f,Y){let Q=Y;if(Qf().securityLevel!=="loose")Q=yu.sanitizeUrl(Y);f.split(",").forEach(function(Z){if(Wf(Z)!==void 0)tu(Z,()=>{window.open(Q,"_self")}),fu.set(Z,Q)}),su(f,"clickable")},"setLink"),su=W(function(f,Y){f.split(",").forEach(function(Q){let Z=Wf(Q);if(Z!==void 0)Z.classes.push(Y)})},"setClass"),x0=W(function(f,Y,Q){if(Qf().securityLevel!=="loose")return;if(Y===void 0)return;let Z=[];if(typeof Q==="string"){Z=Q.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let U=0;U<Z.length;U++){let D=Z[U].trim();if(D.startsWith('"')&&D.endsWith('"'))D=D.substr(1,D.length-2);Z[U]=D}}if(Z.length===0)Z.push(f);if(Wf(f)!==void 0)tu(f,()=>{cu.runFunc(Y,...Z)})},"setClickFun"),tu=W(function(f,Y){Mu.push(function(){let Q=Lf?`${Lf}-${f}`:f,Z=document.querySelector(`[id="${Q}"]`);if(Z!==null)Z.addEventListener("click",function(){Y()})},function(){let Q=Lf?`${Lf}-${f}`:f,Z=document.querySelector(`[id="${Q}-text"]`);if(Z!==null)Z.addEventListener("click",function(){Y()})})},"pushFun"),g0=W(function(f,Y,Q){f.split(",").forEach(function(Z){x0(Z,Y,Q)}),su(f,"clickable")},"setClickEvent"),_0=W(function(f){Mu.forEach(function(Y){Y(f)})},"bindFunctions"),T0={getConfig:W(()=>Qf().gantt,"getConfig"),clear:u0,setDateFormat:q0,getDateFormat:N0,enableInclusiveEndDates:U0,endDatesAreInclusive:K0,enableTopAxis:h0,topAxisEnabled:L0,setAxisFormat:M0,getAxisFormat:z0,setTickInterval:Z0,getTickInterval:Q0,setTodayMarker:J0,getTodayMarker:W0,setAccTitle:Bu,getAccTitle:Xu,setDiagramTitle:Cu,getDiagramTitle:Eu,setDiagramId:Y0,setDisplayMode:R0,getDisplayMode:G0,setAccDescription:Ou,getAccDescription:wu,addSection:w0,getSections:C0,getTasks:E0,addTask:b0,findTaskById:Wf,addTaskOrg:V0,setIncludes:H0,getIncludes:D0,setExcludes:B0,getExcludes:X0,setClickEvent:g0,setLink:S0,getLinks:O0,bindFunctions:_0,parseDuration:ou,isInvalidDate:$u,setWeekday:v0,getWeekday:A0,setWeekend:P0};function Qu(f,Y,Q){let Z=!0;while(Z)Z=!1,Q.forEach(function(z){let U="^\\s*"+z+"\\s*$",D=new RegExp(U);if(f[0].match(D))Y[z]=!0,f.shift(1),Z=!0})}W(Qu,"getTaskTags");Rf.default.extend(eu.default);var p0=W(function(){Yf.debug("Something is calling, setConf, remove the call")},"setConf"),Ru={monday:Vu,tuesday:Su,wednesday:xu,thursday:gu,friday:_u,saturday:Tu,sunday:bu},c0=W((f,Y)=>{let Q=[...f].map(()=>-1/0),Z=[...f].sort((U,D)=>U.startTime-D.startTime||U.order-D.order),z=0;for(let U of Z)for(let D=0;D<Q.length;D++)if(U.startTime>=Q[D]){if(Q[D]=U.endTime,U.order=D+Y,D>z)z=D;break}return z},"getMaxIntersections"),uf,pf=1e4,y0=W(function(f,Y,Q,Z){let z=Qf().gantt;Z.db.setDiagramId(Y);let U=Qf().securityLevel,D;if(U==="sandbox")D=Hf("#i"+Y);let v=U==="sandbox"?Hf(D.nodes()[0].contentDocument.body):Hf("body"),A=U==="sandbox"?D.nodes()[0].contentDocument:document,p=A.getElementById(Y);if(uf=p.parentElement.offsetWidth,uf===void 0)uf=1200;if(z.useWidth!==void 0)uf=z.useWidth;let P=Z.db.getTasks(),T=[];for(let h of P)T.push(h.type);T=S(T);let l={},r=2*z.topPadding;if(Z.db.getDisplayMode()==="compact"||z.displayMode==="compact"){let h={};for(let H of P)if(h[H.section]===void 0)h[H.section]=[H];else h[H.section].push(H);let N=0;for(let H of Object.keys(h)){let O=c0(h[H],N)+1;N+=O,r+=O*(z.barHeight+z.barGap),l[H]=O}}else{r+=P.length*(z.barHeight+z.barGap);for(let h of T)l[h]=P.filter((N)=>N.type===h).length}p.setAttribute("viewBox","0 0 "+uf+" "+r);let w=v.select(`[id="${Y}"]`),G=pu().domain([Au(P,function(h){return h.startTime}),vu(P,function(h){return h.endTime})]).rangeRound([0,uf-z.leftPadding-z.rightPadding]);function g(h,N){let H=h.startTime,O=N.startTime,B=0;if(H>O)B=1;else if(H<O)B=-1;return B}W(g,"taskCompare"),P.sort(g),V(P,uf,r),Hu(w,r,uf,z.useMaxWidth),w.append("text").text(Z.db.getDiagramTitle()).attr("x",uf/2).attr("y",z.titleTopMargin).attr("class","titleText");function V(h,N,H){let O=z.barHeight,B=O+z.barGap,J=z.topPadding,q=z.leftPadding,L=Iu().domain([0,T.length]).range(["#00B9FA","#F95002"]).interpolate(Fu);o(B,J,q,N,H,h,Z.db.getExcludes(),Z.db.getIncludes()),X(q,J,N,H),m(h,B,J,q,O,L,N,H),K(B,J,q,O,L),j(q,J,N,H)}W(V,"makeGantt");function m(h,N,H,O,B,J,q){h.sort((u,E)=>u.vert===E.vert?0:u.vert?1:-1);let R=[...new Set(h.map((u)=>u.order))].map((u)=>h.find((E)=>E.order===u));w.append("g").selectAll("rect").data(R).enter().append("rect").attr("x",0).attr("y",function(u,E){return E=u.order,E*N+H-2}).attr("width",function(){return q-z.rightPadding/2}).attr("height",N).attr("class",function(u){for(let[E,x]of T.entries())if(u.type===x)return"section section"+E%z.numberSectionStyles;return"section section0"}).enter();let C=w.append("g").selectAll("rect").data(h).enter(),M=Z.db.getLinks();if(C.append("rect").attr("id",function(u){return Y+"-"+u.id}).attr("rx",3).attr("ry",3).attr("x",function(u){if(u.milestone)return G(u.startTime)+O+0.5*(G(u.endTime)-G(u.startTime))-0.5*B;return G(u.startTime)+O}).attr("y",function(u,E){if(E=u.order,u.vert)return z.gridLineStartPadding;return E*N+H}).attr("width",function(u){if(u.milestone)return B;if(u.vert)return 0.08*B;return G(u.renderEndTime||u.endTime)-G(u.startTime)}).attr("height",function(u){if(u.vert)return P.length*(z.barHeight+z.barGap)+z.barHeight*2;return B}).attr("transform-origin",function(u,E){return E=u.order,(G(u.startTime)+O+0.5*(G(u.endTime)-G(u.startTime))).toString()+"px "+(E*N+H+0.5*B).toString()+"px"}).attr("class",function(u){let x="";if(u.classes.length>0)x=u.classes.join(" ");let I=0;for(let[n,c]of T.entries())if(u.type===c)I=n%z.numberSectionStyles;let b="";if(u.active)if(u.crit)b+=" activeCrit";else b=" active";else if(u.done)if(u.crit)b=" doneCrit";else b=" done";else if(u.crit)b+=" crit";if(b.length===0)b=" task";if(u.milestone)b=" milestone "+b;if(u.vert)b=" vert "+b;return b+=I,b+=" "+x,"task"+b}),C.append("text").attr("id",function(u){return Y+"-"+u.id+"-text"}).text(function(u){return u.task}).attr("font-size",z.fontSize).attr("x",function(u){let E=G(u.startTime),x=G(u.renderEndTime||u.endTime);if(u.milestone)E+=0.5*(G(u.endTime)-G(u.startTime))-0.5*B,x=E+B;if(u.vert)return G(u.startTime)+O;let I=this.getBBox().width;if(I>x-E)if(x+I+1.5*z.leftPadding>q)return E+O-5;else return x+O+5;else return(x-E)/2+E+O}).attr("y",function(u,E){if(u.vert)return z.gridLineStartPadding+P.length*(z.barHeight+z.barGap)+60;return E=u.order,E*N+z.barHeight/2+(z.fontSize/2-2)+H}).attr("text-height",B).attr("class",function(u){let E=G(u.startTime),x=G(u.endTime);if(u.milestone)x=E+B;let I=this.getBBox().width,b="";if(u.classes.length>0)b=u.classes.join(" ");let n=0;for(let[y,i]of T.entries())if(u.type===i)n=y%z.numberSectionStyles;let c="";if(u.active)if(u.crit)c="activeCritText"+n;else c="activeText"+n;if(u.done)if(u.crit)c=c+" doneCritText"+n;else c=c+" doneText"+n;else if(u.crit)c=c+" critText"+n;if(u.milestone)c+=" milestoneText";if(u.vert)c+=" vertText";if(I>x-E)if(x+I+1.5*z.leftPadding>q)return b+" taskTextOutsideLeft taskTextOutside"+n+" "+c;else return b+" taskTextOutsideRight taskTextOutside"+n+" "+c+" width-"+I;else return b+" taskText taskText"+n+" "+c+" width-"+I}),Qf().securityLevel==="sandbox"){let u;u=Hf("#i"+Y);let E=u.nodes()[0].contentDocument;C.filter(function(x){return M.has(x.id)}).each(function(x){var I=E.querySelector("#"+CSS.escape(Y+"-"+x.id)),b=E.querySelector("#"+CSS.escape(Y+"-"+x.id+"-text"));let n=I.parentNode;var c=E.createElement("a");c.setAttribute("xlink:href",M.get(x.id)),c.setAttribute("target","_top"),n.appendChild(c),c.appendChild(I),c.appendChild(b)})}}W(m,"drawRects");function o(h,N,H,O,B,J,q,L){if(q.length===0&&L.length===0)return;let R,C;for(let{startTime:I,endTime:b}of J){if(R===void 0||I<R)R=I;if(C===void 0||b>C)C=b}if(!R||!C)return;if(Rf.default(C).diff(Rf.default(R),"year")>5){Yf.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let M=Z.db.getDateFormat(),_=[],u=null,E=Rf.default(R);while(E.valueOf()<=C){if(Z.db.isInvalidDate(E,M,q,L))if(!u)u={start:E,end:E};else u.end=E;else if(u)_.push(u),u=null;E=E.add(1,"d")}w.append("g").selectAll("rect").data(_).enter().append("rect").attr("id",(I)=>Y+"-exclude-"+I.start.format("YYYY-MM-DD")).attr("x",(I)=>G(I.start.startOf("day"))+H).attr("y",z.gridLineStartPadding).attr("width",(I)=>G(I.end.endOf("day"))-G(I.start.startOf("day"))).attr("height",B-N-z.gridLineStartPadding).attr("transform-origin",function(I,b){return(G(I.start)+H+0.5*(G(I.end)-G(I.start))).toString()+"px "+(b*h+0.5*B).toString()+"px"}).attr("class","exclude-range")}W(o,"drawExcludeDays");function F(h,N,H,O){if(H<=0||h>N)return 1/0;let B=N-h,J=Rf.default.duration({[O??"day"]:H}).asMilliseconds();if(J<=0)return 1/0;return Math.ceil(B/J)}W(F,"getEstimatedTickCount");function X(h,N,H,O){let B=Z.db.getDateFormat(),J=Z.db.getAxisFormat(),q;if(J)q=J;else if(B==="D")q="%d";else q=z.axisFormat??"%Y-%m-%d";let L=ju(G).tickSize(-O+N+z.gridLineStartPadding).tickFormat($f(q)),C=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(Z.db.getTickInterval()||z.tickInterval);if(C!==null){let M=parseInt(C[1],10);if(isNaN(M)||M<=0)Yf.warn(`Invalid tick interval value: "${C[1]}". Skipping custom tick interval.`);else{let _=C[2],u=Z.db.getWeekday()||z.weekday,E=G.domain(),x=E[0],I=E[1],b=F(x,I,M,_);if(b>pf)Yf.warn(`The tick interval "${M}${_}" would generate ${b} ticks, which exceeds the maximum allowed (${pf}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(_){case"millisecond":L.ticks(cf.every(M));break;case"second":L.ticks(yf.every(M));break;case"minute":L.ticks(rf.every(M));break;case"hour":L.ticks(lf.every(M));break;case"day":L.ticks(nf.every(M));break;case"week":L.ticks(Ru[u].every(M));break;case"month":L.ticks(kf.every(M));break}}}if(w.append("g").attr("class","grid").attr("transform","translate("+h+", "+(O-50)+")").call(L).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),Z.db.topAxisEnabled()||z.topAxis){let M=Pu(G).tickSize(-O+N+z.gridLineStartPadding).tickFormat($f(q));if(C!==null){let _=parseInt(C[1],10);if(isNaN(_)||_<=0)Yf.warn(`Invalid tick interval value: "${C[1]}". Skipping custom tick interval.`);else{let u=C[2],E=Z.db.getWeekday()||z.weekday,x=G.domain(),I=x[0],b=x[1];if(F(I,b,_,u)<=pf)switch(u){case"millisecond":M.ticks(cf.every(_));break;case"second":M.ticks(yf.every(_));break;case"minute":M.ticks(rf.every(_));break;case"hour":M.ticks(lf.every(_));break;case"day":M.ticks(nf.every(_));break;case"week":M.ticks(Ru[E].every(_));break;case"month":M.ticks(kf.every(_));break}}}w.append("g").attr("class","grid").attr("transform","translate("+h+", "+N+")").call(M).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}W(X,"makeGrid");function K(h,N){let H=0,O=Object.keys(l).map((B)=>[B,l[B]]);w.append("g").selectAll("text").data(O).enter().append(function(B){let J=B[0].split(Nu.lineBreakRegex),q=-(J.length-1)/2,L=A.createElementNS("http://www.w3.org/2000/svg","text");L.setAttribute("dy",q+"em");for(let[R,C]of J.entries()){let M=A.createElementNS("http://www.w3.org/2000/svg","tspan");if(M.setAttribute("alignment-baseline","central"),M.setAttribute("x","10"),R>0)M.setAttribute("dy","1em");M.textContent=C,L.appendChild(M)}return L}).attr("x",10).attr("y",function(B,J){if(J>0)for(let q=0;q<J;q++)return H+=O[J-1][1],B[1]*h/2+H*h+N;else return B[1]*h/2+N}).attr("font-size",z.sectionFontSize).attr("class",function(B){for(let[J,q]of T.entries())if(B[0]===q)return"sectionTitle sectionTitle"+J%z.numberSectionStyles;return"sectionTitle"})}W(K,"vertLabels");function j(h,N,H,O){let B=Z.db.getTodayMarker();if(B==="off")return;let J=w.append("g").attr("class","today"),q=new Date,L=J.append("line");if(L.attr("x1",G(q)+h).attr("x2",G(q)+h).attr("y1",z.titleTopMargin).attr("y2",O-z.titleTopMargin).attr("class","today"),B!=="")L.attr("style",B.replace(/,/g,";"))}W(j,"drawToday");function S(h){let N={},H=[];for(let O=0,B=h.length;O<B;++O)if(!Object.prototype.hasOwnProperty.call(N,h[O]))N[h[O]]=!0,H.push(h[O]);return H}W(S,"checkUnique")},"draw"),r0={setConf:p0,draw:y0},l0=W((f)=>`
  .mermaid-main-font {
        font-family: ${f.fontFamily};
  }

  .exclude-range {
    fill: ${f.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${f.sectionBkgColor};
  }

  .section2 {
    fill: ${f.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${f.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${f.titleColor};
  }

  .sectionTitle1 {
    fill: ${f.titleColor};
  }

  .sectionTitle2 {
    fill: ${f.titleColor};
  }

  .sectionTitle3 {
    fill: ${f.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${f.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${f.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${f.fontFamily};
    fill: ${f.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${f.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${f.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${f.taskTextDarkColor};
    text-anchor: start;
    font-family: ${f.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${f.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${f.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${f.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${f.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${f.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${f.taskBkgColor};
    stroke: ${f.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${f.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${f.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${f.activeTaskBkgColor};
    stroke: ${f.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${f.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${f.doneTaskBorderColor};
    fill: ${f.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${f.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${f.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${f.critBorderColor};
    fill: ${f.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${f.critBorderColor};
    fill: ${f.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${f.critBorderColor};
    fill: ${f.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${f.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar — same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${f.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${f.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${f.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${f.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${f.titleColor||f.textColor};
    font-family: ${f.fontFamily};
  }
`,"getStyles"),n0=l0,d0={parser:f0,db:T0,renderer:r0,styles:n0};export{d0 as diagram};
