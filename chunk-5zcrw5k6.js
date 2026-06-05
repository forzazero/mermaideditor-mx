import{j as V}from"./chunk-shfv189s.js";import{k as v}from"./chunk-zmxp9e7a.js";import"./chunk-qb7a9a7r.js";import"./chunk-k038tavn.js";import"./chunk-a4v1rnvv.js";import"./chunk-exhmw57h.js";import"./chunk-79z7bwqh.js";import"./chunk-te7snhjz.js";import"./chunk-hdv4pcmp.js";import"./chunk-7vtenrzv.js";import"./chunk-8q5y580x.js";import{D as O}from"./chunk-sn0xyxdg.js";import{rb as G}from"./chunk-hgb5smew.js";import"./chunk-tv32rnyg.js";import{Nb as D,Pb as M,Zb as T,kc as w,pc as R,qc as k,rc as y,sc as A,tc as C,uc as h,vc as b}from"./chunk-6rq1j1c6.js";import{Ec as K,Gc as j}from"./chunk-5490625s.js";import"./chunk-5qwm0r03.js";import"./chunk-s6b10p79.js";import"./chunk-fn162pnw.js";var U={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},_={axes:[],curves:[],options:U},F=structuredClone(_),g=M.radar,c=K(()=>{return G({...g,...T().radar})},"getConfig"),x=K(()=>F.axes,"getAxes"),o=K(()=>F.curves,"getCurves"),r=K(()=>F.options,"getOptions"),t=K((z)=>{F.axes=z.map((q)=>{return{name:q.name,label:q.label??q.name}})},"setAxes"),s=K((z)=>{F.curves=z.map((q)=>{return{name:q.name,label:q.label??q.name,entries:n(q.entries)}})},"setCurves"),n=K((z)=>{if(z[0].axis==null)return z.map(($)=>$.value);let q=x();if(q.length===0)throw Error("Axes must be populated before curves for reference entries");return q.map(($)=>{let J=z.find((N)=>N.axis?.$refText===$.name);if(J===void 0)throw Error("Missing entry for axis "+$.label);return J.value})},"computeCurveEntries"),a=K((z)=>{let q=z.reduce(($,J)=>{return $[J.name]=J,$},{});F.options={showLegend:q.showLegend?.value??U.showLegend,ticks:q.ticks?.value??U.ticks,max:q.max?.value??U.max,min:q.min?.value??U.min,graticule:q.graticule?.value??U.graticule}},"setOptions"),i=K(()=>{R(),F=structuredClone(_)},"clear"),H={getAxes:x,getCurves:o,getOptions:r,setAxes:t,setCurves:s,setOptions:a,getConfig:c,clear:i,setAccTitle:k,getAccTitle:y,setDiagramTitle:h,getDiagramTitle:b,getAccDescription:C,setAccDescription:A},e=K((z)=>{V(z,H);let{axes:q,curves:$,options:J}=z;H.setAxes(q),H.setCurves($),H.setOptions(J)},"populate"),qq={parse:K(async(z)=>{let q=await v("radar",z);j.debug(q),e(q)},"parse")},$q=K((z,q,$,J)=>{let N=J.db,Q=N.getAxes(),B=N.getCurves(),Z=N.getOptions(),E=N.getConfig(),I=N.getDiagramTitle(),X=O(q),W=zq(X,E),Y=Z.max??Math.max(...B.map((S)=>Math.max(...S.entries))),L=Z.min,P=Math.min(E.width,E.height)/2;Jq(W,Q,P,Z.ticks,Z.graticule),Nq(W,Q,P,E),f(W,Q,B,L,Y,Z.graticule,E),p(W,B,Z.showLegend,E),W.append("text").attr("class","radarTitle").text(I).attr("x",0).attr("y",-E.height/2-E.marginTop)},"draw"),zq=K((z,q)=>{let $=q.width+q.marginLeft+q.marginRight,J=q.height+q.marginTop+q.marginBottom,N={x:q.marginLeft+q.width/2,y:q.marginTop+q.height/2};return w(z,J,$,q.useMaxWidth??!0),z.attr("viewBox",`0 0 ${$} ${J}`),z.append("g").attr("transform",`translate(${N.x}, ${N.y})`)},"drawFrame"),Jq=K((z,q,$,J,N)=>{if(N==="circle")for(let Q=0;Q<J;Q++){let B=$*(Q+1)/J;z.append("circle").attr("r",B).attr("class","radarGraticule")}else if(N==="polygon"){let Q=q.length;for(let B=0;B<J;B++){let Z=$*(B+1)/J,E=q.map((I,X)=>{let W=2*X*Math.PI/Q-Math.PI/2,Y=Z*Math.cos(W),L=Z*Math.sin(W);return`${Y},${L}`}).join(" ");z.append("polygon").attr("points",E).attr("class","radarGraticule")}}},"drawGraticule"),Nq=K((z,q,$,J)=>{let N=q.length;for(let Q=0;Q<N;Q++){let B=q[Q].label,Z=2*Q*Math.PI/N-Math.PI/2;z.append("line").attr("x1",0).attr("y1",0).attr("x2",$*J.axisScaleFactor*Math.cos(Z)).attr("y2",$*J.axisScaleFactor*Math.sin(Z)).attr("class","radarAxisLine"),z.append("text").text(B).attr("x",$*J.axisLabelFactor*Math.cos(Z)).attr("y",$*J.axisLabelFactor*Math.sin(Z)).attr("class","radarAxisLabel")}},"drawAxes");function f(z,q,$,J,N,Q,B){let Z=q.length,E=Math.min(B.width,B.height)/2;$.forEach((I,X)=>{if(I.entries.length!==Z)return;let W=I.entries.map((Y,L)=>{let P=2*Math.PI*L/Z-Math.PI/2,S=m(Y,J,N,E),u=S*Math.cos(P),d=S*Math.sin(P);return{x:u,y:d}});if(Q==="circle")z.append("path").attr("d",l(W,B.curveTension)).attr("class",`radarCurve-${X}`);else if(Q==="polygon")z.append("polygon").attr("points",W.map((Y)=>`${Y.x},${Y.y}`).join(" ")).attr("class",`radarCurve-${X}`)})}K(f,"drawCurves");function m(z,q,$,J){let N=Math.min(Math.max(z,q),$);return J*(N-q)/($-q)}K(m,"relativeRadius");function l(z,q){let $=z.length,J=`M${z[0].x},${z[0].y}`;for(let N=0;N<$;N++){let Q=z[(N-1+$)%$],B=z[N],Z=z[(N+1)%$],E=z[(N+2)%$],I={x:B.x+(Z.x-Q.x)*q,y:B.y+(Z.y-Q.y)*q},X={x:Z.x-(E.x-B.x)*q,y:Z.y-(E.y-B.y)*q};J+=` C${I.x},${I.y} ${X.x},${X.y} ${Z.x},${Z.y}`}return`${J} Z`}K(l,"closedRoundCurve");function p(z,q,$,J){if(!$)return;let N=(J.width/2+J.marginRight)*3/4,Q=-(J.height/2+J.marginTop)*3/4,B=20;q.forEach((Z,E)=>{let I=z.append("g").attr("transform",`translate(${N}, ${Q+E*B})`);I.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${E}`),I.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(Z.label)})}K(p,"drawLegend");var Zq={draw:$q},Kq=K((z,q)=>{let $="";for(let J=0;J<z.THEME_COLOR_LIMIT;J++){let N=z[`cScale${J}`];$+=`
		.radarCurve-${J} {
			color: ${N};
			fill: ${N};
			fill-opacity: ${q.curveOpacity};
			stroke: ${N};
			stroke-width: ${q.curveStrokeWidth};
		}
		.radarLegendBox-${J} {
			fill: ${N};
			fill-opacity: ${q.curveOpacity};
			stroke: ${N};
		}
		`}return $},"genIndexStyles"),Qq=K((z)=>{let q=D(),$=T(),J=G(q,$.themeVariables),N=G(J.radar,z);return{themeVariables:J,radarOptions:N}},"buildRadarStyleOptions"),Bq=K(({radar:z}={})=>{let{themeVariables:q,radarOptions:$}=Qq(z);return`
	.radarTitle {
		font-size: ${q.fontSize};
		color: ${q.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${$.axisColor};
		stroke-width: ${$.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${$.axisLabelFontSize}px;
		color: ${$.axisColor};
	}
	.radarGraticule {
		fill: ${$.graticuleColor};
		fill-opacity: ${$.graticuleOpacity};
		stroke: ${$.graticuleColor};
		stroke-width: ${$.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${$.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${Kq(q,$)}
	`},"styles"),Uq={parser:qq,db:H,renderer:Zq,styles:Bq};export{Uq as diagram};
