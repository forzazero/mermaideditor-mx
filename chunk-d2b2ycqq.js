import{m as yq}from"./chunk-s1d9knd2.js";import{n as Mq}from"./chunk-8p5trb55.js";import"./chunk-p5189q43.js";import"./chunk-cnmg8960.js";import"./chunk-d9c5zn3e.js";import"./chunk-dwfehcax.js";import"./chunk-c2q7w7yg.js";import"./chunk-1eea5pck.js";import"./chunk-zytwp2dq.js";import"./chunk-g1m75yhz.js";import"./chunk-gn8z033j.js";import"./chunk-tvennjz4.js";import"./chunk-ey7accpt.js";import"./chunk-9qwss9fz.js";import"./chunk-rsn0nww0.js";import"./chunk-jv6vf1cz.js";import"./chunk-p0086vb2.js";import"./chunk-q9ddk6t4.js";import{qa as $q}from"./chunk-n1n7pm9h.js";import{pc as Qq,qc as Jq}from"./chunk-2xerk7c4.js";import"./chunk-fa5482nf.js";import{Hc as g,jd as d,od as s,pd as l,qd as n,rd as o,sd as a,td as i,ud as t,vd as e}from"./chunk-ewvwrrzy.js";import{Dd as f,Sd as qq,je as S,me as Kq}from"./chunk-n1tz0fqs.js";import{Je as Y}from"./chunk-6w9wqhxg.js";import"./chunk-nxytaaww.js";var Yq=g.pie,b={sections:new Map,showData:!1,config:Yq},T=b.sections,C=b.showData,Zq=structuredClone(Yq),Rq=Y(()=>structuredClone(Zq),"getConfig"),Hq=Y(()=>{T=new Map,C=b.showData,s()},"clear"),Pq=Y(({label:q,value:$})=>{if($<0)throw Error(`"${q}" has invalid value: ${$}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);if(!T.has(q))T.set(q,$),f.debug(`added new section: ${q}, with value: ${$}`)},"addSection"),xq=Y(()=>T,"getSections"),Wq=Y((q)=>{C=q},"setShowData"),vq=Y(()=>C,"getShowData"),Xq={getConfig:Rq,clear:Hq,setDiagramTitle:i,getDiagramTitle:t,setAccTitle:l,getAccTitle:n,setAccDescription:o,getAccDescription:a,addSection:Pq,getSections:xq,setShowData:Wq,getShowData:vq},Tq=Y((q,$)=>{yq(q,$),$.setShowData(q.showData),q.sections.map($.addSection)},"populateDb"),fq={parse:Y(async(q)=>{let $=await Mq("pie",q);f.debug($),Tq($,Xq)},"parse")},Aq=Y((q)=>`
  .pieCircle{
    stroke: ${q.pieStrokeColor};
    stroke-width : ${q.pieStrokeWidth};
    opacity : ${q.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${q.pieOuterStrokeColor};
    stroke-width: ${q.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${q.pieTitleTextSize};
    fill: ${q.pieTitleTextColor};
    font-family: ${q.fontFamily};
  }
  .slice {
    font-family: ${q.fontFamily};
    fill: ${q.pieSectionTextColor};
    font-size:${q.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${q.pieLegendTextColor};
    font-family: ${q.fontFamily};
    font-size: ${q.pieLegendTextSize};
  }
`,"getStyles"),Iq=Aq,Gq=Y((q)=>{let $=[...q.values()].reduce((M,j)=>M+j,0),D=[...q.entries()].map(([M,j])=>({label:M,value:j})).filter((M)=>M.value/$*100>=1);return Kq().value((M)=>M.value).sort(null)(D)},"createPieArcs"),Lq=Y((q,$,D,u)=>{f.debug(`rendering pie chart
`+q);let M=u.db,j=e(),k=Jq(M.getConfig(),j.pie),m=40,J=18,B=4,Z=450,R=Z,A=$q($),x=A.append("g");x.attr("transform","translate("+R/2+","+Z/2+")");let{themeVariables:y}=j,[p]=Qq(y.pieOuterStrokeWidth);p??=2;let{legendPosition:Bq,textPosition:_}=k,Uq=k.donutHole>0&&k.donutHole<=0.9?k.donutHole:0,w=Math.min(R,Z)/2-m,zq=S().innerRadius(Uq*w).outerRadius(w),Oq=S().innerRadius(w*_).outerRadius(w*_),H=x.append("g");H.append("circle").attr("cx",0).attr("cy",0).attr("r",w+p/2).attr("class","pieOuterCircle");let W=M.getSections(),kq=Gq(W),wq=[y.pie1,y.pie2,y.pie3,y.pie4,y.pie5,y.pie6,y.pie7,y.pie8,y.pie9,y.pie10,y.pie11,y.pie12],I=0;W.forEach((K)=>{I+=K});let c=kq.filter((K)=>(K.data.value/I*100).toFixed(0)!=="0"),G=qq(wq).domain([...W.keys()]);H.selectAll("mySlices").data(c).enter().append("path").attr("d",zq).attr("fill",(K)=>{return G(K.data.label)}).attr("class",(K)=>{let Q="pieCircle";if(k.highlightSlice==="hover")Q+=" highlightedOnHover";else if(k.highlightSlice===K.data.label)Q+=" highlighted";return Q}),H.selectAll("mySlices").data(c).enter().append("text").text((K)=>{return(K.data.value/I*100).toFixed(0)+"%"}).attr("transform",(K)=>{return"translate("+Oq.centroid(K)+")"}).style("text-anchor","middle").attr("class","slice");let Fq=x.append("text").text(M.getDiagramTitle()).attr("x",0).attr("y",-(Z-50)/2).attr("class","pieTitleText"),P=[...W.entries()].map(([K,Q])=>({label:K,value:Q})),F=x.selectAll(".legend").data(P).enter().append("g").attr("class","legend");F.append("rect").attr("width",J).attr("height",J).style("fill",(K)=>G(K.label)).style("stroke",(K)=>G(K.label)),F.append("text").attr("x",J+B).attr("y",J-B).text((K)=>{if(M.getShowData())return`${K.label} [${K.value}]`;return K.label});let V=Math.max(...F.selectAll("text").nodes().map((K)=>K?.getBoundingClientRect().width??0)),v=Z,L=R+m,X=J+B,N=P.length*X;switch(Bq){case"center":F.attr("transform",(K,Q)=>{let U=X*P.length/2,z=-V/2-(J+B),O=Q*X-U;return"translate("+z+","+O+")"});break;case"top":v+=N,F.attr("transform",(K,Q)=>{let U=w,z=-V/2-(J+B),O=Q*X-U;return`translate(${z}, ${O})`}),H.attr("transform",()=>{return`translate(0, ${N+X})`});break;case"bottom":v+=N,F.attr("transform",(K,Q)=>{let U=-w-X,z=-V/2-(J+B),O=Q*X-U;return"translate("+z+","+O+")"});break;case"left":L+=J+B+V,F.attr("transform",(K,Q)=>{let U=X*P.length/2,z=-w-(J+B),O=Q*X-U;return"translate("+z+","+O+")"}),H.attr("transform",()=>{return`translate(${V+J+B}, 0)`});break;case"right":default:L+=J+B+V,F.attr("transform",(K,Q)=>{let U=X*P.length/2,z=12*J,O=Q*X-U;return"translate("+z+","+O+")"});break}let E=Fq.node()?.getBoundingClientRect().width??0,jq=R/2-E/2,Vq=R/2+E/2,h=Math.min(0,jq),r=Math.max(L,Vq)-h;A.attr("viewBox",`${h} 0 ${r} ${v}`),d(A,v,r,k.useMaxWidth)},"draw"),Nq={draw:Lq},Eq={parser:fq,db:Xq,renderer:Nq,styles:Iq};export{Eq as diagram};
