import{j as R}from"./chunk-shfv189s.js";import{k as H}from"./chunk-zmxp9e7a.js";import"./chunk-qb7a9a7r.js";import"./chunk-k038tavn.js";import"./chunk-a4v1rnvv.js";import"./chunk-exhmw57h.js";import"./chunk-79z7bwqh.js";import"./chunk-te7snhjz.js";import"./chunk-hdv4pcmp.js";import"./chunk-7vtenrzv.js";import"./chunk-8q5y580x.js";import{D as v}from"./chunk-sn0xyxdg.js";import{rb as j}from"./chunk-hgb5smew.js";import"./chunk-tv32rnyg.js";import{Pb as N,Zb as T,kc as C,pc as D,qc as X,rc as A,sc as W,tc as S,uc as f,vc as Y}from"./chunk-6rq1j1c6.js";import{Ec as x,Gc as E}from"./chunk-5490625s.js";import"./chunk-5qwm0r03.js";import"./chunk-s6b10p79.js";import"./chunk-fn162pnw.js";var m=N.packet,P=class{constructor(){this.packet=[],this.setAccTitle=X,this.getAccTitle=A,this.setDiagramTitle=f,this.getDiagramTitle=Y,this.getAccDescription=S,this.setAccDescription=W}static{x(this,"PacketDB")}getConfig(){let q=j({...m,...T().packet});if(q.showBits)q.paddingY+=10;return q}getPacket(){return this.packet}pushWord(q){if(q.length>0)this.packet.push(q)}clear(){D(),this.packet=[]}},h=1e4,p=x((q,$)=>{R(q,$);let L=-1,V=[],z=1,{bitsPerRow:I}=$.getConfig();for(let{start:J,end:y,bits:Q,label:O}of q.blocks){if(J!==void 0&&y!==void 0&&y<J)throw Error(`Packet block ${J} - ${y} is invalid. End must be greater than start.`);if(J??=L+1,J!==L+1)throw Error(`Packet block ${J} - ${y??J} is not contiguous. It should start from ${L+1}.`);if(Q===0)throw Error(`Packet block ${J} is invalid. Cannot have a zero bit field.`);y??=J+(Q??1)-1,Q??=y-J+1,L=y,E.debug(`Packet block ${J} - ${L} with label ${O}`);while(V.length<=I+1&&$.getPacket().length<h){let[K,Z]=k({start:J,end:y,bits:Q,label:O},z,I);if(V.push(K),K.end+1===z*I)$.pushWord(V),V=[],z++;if(!Z)break;({start:J,end:y,bits:Q,label:O}=Z)}}$.pushWord(V)},"populate"),k=x((q,$,L)=>{if(q.start===void 0)throw Error("start should have been set during first phase");if(q.end===void 0)throw Error("end should have been set during first phase");if(q.start>q.end)throw Error(`Block start ${q.start} is greater than block end ${q.end}.`);if(q.end+1<=$*L)return[q,void 0];let V=$*L-1,z=$*L;return[{start:q.start,end:V,label:q.label,bits:V-q.start},{start:z,end:q.end,label:q.label,bits:q.end-z}]},"getNextFittingBlock"),_={parser:{yy:void 0},parse:x(async(q)=>{let $=await H("packet",q),L=_.parser?.yy;if(!(L instanceof P))throw Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");E.debug($),p($,L)},"parse")},w=x((q,$,L,V)=>{let z=V.db,I=z.getConfig(),{rowHeight:J,paddingY:y,bitWidth:Q,bitsPerRow:O}=I,K=z.getPacket(),Z=z.getDiagramTitle(),F=J+y,M=F*(K.length+1)-(Z?0:J),G=Q*O+2,U=v($);U.attr("viewBox",`0 0 ${G} ${M}`),C(U,M,G,I.useMaxWidth);for(let[B,u]of K.entries())g(U,u,B,I);U.append("text").text(Z).attr("x",G/2).attr("y",M-F/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),g=x((q,$,L,{rowHeight:V,paddingX:z,paddingY:I,bitWidth:J,bitsPerRow:y,showBits:Q})=>{let O=q.append("g"),K=L*(V+I)+I;for(let Z of $){let F=Z.start%y*J+1,M=(Z.end-Z.start+1)*J-z;if(O.append("rect").attr("x",F).attr("y",K).attr("width",M).attr("height",V).attr("class","packetBlock"),O.append("text").attr("x",F+M/2).attr("y",K+V/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(Z.label),!Q)continue;let G=Z.end===Z.start,U=K-2;if(O.append("text").attr("x",F+(G?M/2:0)).attr("y",U).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",G?"middle":"start").text(Z.start),!G)O.append("text").attr("x",F+M).attr("y",U).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(Z.end)}},"drawWord"),n={draw:w},a={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},c=x(({packet:q}={})=>{let $=j(a,q);return`
	.packetByte {
		font-size: ${$.byteFontSize};
	}
	.packetByte.start {
		fill: ${$.startByteColor};
	}
	.packetByte.end {
		fill: ${$.endByteColor};
	}
	.packetLabel {
		fill: ${$.labelColor};
		font-size: ${$.labelFontSize};
	}
	.packetTitle {
		fill: ${$.titleColor};
		font-size: ${$.titleFontSize};
	}
	.packetBlock {
		stroke: ${$.blockStrokeColor};
		stroke-width: ${$.blockStrokeWidth};
		fill: ${$.blockFillColor};
	}
	`},"styles"),i={parser:_,get db(){return new P},renderer:n,styles:c};export{i as diagram};
