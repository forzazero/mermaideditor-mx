import{m as Y}from"./chunk-s1d9knd2.js";import{n as R}from"./chunk-8p5trb55.js";import"./chunk-p5189q43.js";import"./chunk-cnmg8960.js";import"./chunk-d9c5zn3e.js";import"./chunk-dwfehcax.js";import"./chunk-c2q7w7yg.js";import"./chunk-1eea5pck.js";import"./chunk-zytwp2dq.js";import"./chunk-g1m75yhz.js";import"./chunk-gn8z033j.js";import"./chunk-tvennjz4.js";import"./chunk-ey7accpt.js";import"./chunk-9qwss9fz.js";import"./chunk-rsn0nww0.js";import"./chunk-jv6vf1cz.js";import"./chunk-p0086vb2.js";import"./chunk-q9ddk6t4.js";import{qa as H}from"./chunk-n1n7pm9h.js";import{qc as N}from"./chunk-2xerk7c4.js";import"./chunk-fa5482nf.js";import{Hc as T,Rc as j,jd as D,od as X,pd as A,qd as C,rd as S,sd as f,td as W,ud as v}from"./chunk-ewvwrrzy.js";import{Dd as E}from"./chunk-n1tz0fqs.js";import{Je as F}from"./chunk-6w9wqhxg.js";import"./chunk-nxytaaww.js";var m=T.packet,B=class{constructor(){this.packet=[],this.setAccTitle=A,this.getAccTitle=C,this.setDiagramTitle=W,this.getDiagramTitle=v,this.getAccDescription=f,this.setAccDescription=S}static{F(this,"PacketDB")}getConfig(){let q=N({...m,...j().packet});if(q.showBits)q.paddingY+=10;return q}getPacket(){return this.packet}pushWord(q){if(q.length>0)this.packet.push(q)}clear(){X(),this.packet=[]}},h=1e4,p=F((q,$)=>{Y(q,$);let K=-1,Q=[],J=1,{bitsPerRow:L}=$.getConfig();for(let{start:G,end:z,bits:U,label:M}of q.blocks){if(G!==void 0&&z!==void 0&&z<G)throw Error(`Packet block ${G} - ${z} is invalid. End must be greater than start.`);if(G??=K+1,G!==K+1)throw Error(`Packet block ${G} - ${z??G} is not contiguous. It should start from ${K+1}.`);if(U===0)throw Error(`Packet block ${G} is invalid. Cannot have a zero bit field.`);z??=G+(U??1)-1,U??=z-G+1,K=z,E.debug(`Packet block ${G} - ${K} with label ${M}`);while(Q.length<=L+1&&$.getPacket().length<h){let[V,y]=k({start:G,end:z,bits:U,label:M},J,L);if(Q.push(V),V.end+1===J*L)$.pushWord(Q),Q=[],J++;if(!y)break;({start:G,end:z,bits:U,label:M}=y)}}$.pushWord(Q)},"populate"),k=F((q,$,K)=>{if(q.start===void 0)throw Error("start should have been set during first phase");if(q.end===void 0)throw Error("end should have been set during first phase");if(q.start>q.end)throw Error(`Block start ${q.start} is greater than block end ${q.end}.`);if(q.end+1<=$*K)return[q,void 0];let Q=$*K-1,J=$*K;return[{start:q.start,end:Q,label:q.label,bits:Q-q.start},{start:J,end:q.end,label:q.label,bits:q.end-J}]},"getNextFittingBlock"),_={parser:{yy:void 0},parse:F(async(q)=>{let $=await R("packet",q),K=_.parser?.yy;if(!(K instanceof B))throw Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");E.debug($),p($,K)},"parse")},w=F((q,$,K,Q)=>{let J=Q.db,L=J.getConfig(),{rowHeight:G,paddingY:z,bitWidth:U,bitsPerRow:M}=L,V=J.getPacket(),y=J.getDiagramTitle(),x=G+z,Z=x*(V.length+1)-(y?0:G),I=U*M+2,O=H($);O.attr("viewBox",`0 0 ${I} ${Z}`),D(O,Z,I,L.useMaxWidth);for(let[P,u]of V.entries())g(O,u,P,L);O.append("text").text(y).attr("x",I/2).attr("y",Z-x/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),g=F((q,$,K,{rowHeight:Q,paddingX:J,paddingY:L,bitWidth:G,bitsPerRow:z,showBits:U})=>{let M=q.append("g"),V=K*(Q+L)+L;for(let y of $){let x=y.start%z*G+1,Z=(y.end-y.start+1)*G-J;if(M.append("rect").attr("x",x).attr("y",V).attr("width",Z).attr("height",Q).attr("class","packetBlock"),M.append("text").attr("x",x+Z/2).attr("y",V+Q/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(y.label),!U)continue;let I=y.end===y.start,O=V-2;if(M.append("text").attr("x",x+(I?Z/2:0)).attr("y",O).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",I?"middle":"start").text(y.start),!I)M.append("text").attr("x",x+Z).attr("y",O).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(y.end)}},"drawWord"),n={draw:w},a={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},c=F(({packet:q}={})=>{let $=N(a,q);return`
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
	`},"styles"),o={parser:_,get db(){return new B},renderer:n,styles:c};export{o as diagram};
