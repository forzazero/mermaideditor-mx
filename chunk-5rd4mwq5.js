import{j as a}from"./chunk-shfv189s.js";import{k as t}from"./chunk-zmxp9e7a.js";import"./chunk-qb7a9a7r.js";import"./chunk-k038tavn.js";import"./chunk-a4v1rnvv.js";import"./chunk-exhmw57h.js";import"./chunk-79z7bwqh.js";import"./chunk-te7snhjz.js";import"./chunk-hdv4pcmp.js";import"./chunk-7vtenrzv.js";import"./chunk-8q5y580x.js";import{D as s}from"./chunk-sn0xyxdg.js";import{qb as o,rb as i}from"./chunk-hgb5smew.js";import"./chunk-tv32rnyg.js";import{Pb as E,kc as u,pc as m,qc as _,rc as h,sc as p,tc as c,uc as g,vc as r,wc as d}from"./chunk-6rq1j1c6.js";import{Ec as Y,Gc as B,Vc as n,md as P,pd as l}from"./chunk-5490625s.js";import"./chunk-5qwm0r03.js";import"./chunk-s6b10p79.js";import"./chunk-fn162pnw.js";var e=E.pie,V={sections:new Map,showData:!1,config:e},w=V.sections,W=V.showData,jq=structuredClone(e),wq=Y(()=>structuredClone(jq),"getConfig"),Bq=Y(()=>{w=new Map,W=V.showData,m()},"clear"),Uq=Y(({label:q,value:J})=>{if(J<0)throw Error(`"${q}" has invalid value: ${J}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);if(!w.has(q))w.set(q,J),B.debug(`added new section: ${q}, with value: ${J}`)},"addSection"),Zq=Y(()=>w,"getSections"),Fq=Y((q)=>{W=q},"setShowData"),xq=Y(()=>W,"getShowData"),qq={getConfig:wq,clear:Bq,setDiagramTitle:g,getDiagramTitle:r,setAccTitle:_,getAccTitle:h,setAccDescription:p,getAccDescription:c,addSection:Uq,getSections:Zq,setShowData:Fq,getShowData:xq},Rq=Y((q,J)=>{a(q,J),J.setShowData(q.showData),q.sections.map(J.addSection)},"populateDb"),Pq={parse:Y(async(q)=>{let J=await t("pie",q);B.debug(J),Rq(J,qq)},"parse")},Vq=Y((q)=>`
  .pieCircle{
    stroke: ${q.pieStrokeColor};
    stroke-width : ${q.pieStrokeWidth};
    opacity : ${q.pieOpacity};
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
`,"getStyles"),Wq=Vq,fq=Y((q)=>{let J=[...q.values()].reduce((Q,z)=>Q+z,0),f=[...q.entries()].map(([Q,z])=>({label:Q,value:z})).filter((Q)=>Q.value/J*100>=1);return l().value((Q)=>Q.value).sort(null)(f)},"createPieArcs"),Lq=Y((q,J,f,L)=>{B.debug(`rendering pie chart
`+q);let Q=L.db,z=d(),T=i(Q.getConfig(),z.pie),N=40,y=18,O=4,H=450,X=H,U=s(J),M=U.append("g");M.attr("transform","translate("+X/2+","+H/2+")");let{themeVariables:K}=z,[I]=o(K.pieOuterStrokeWidth);I??=2;let v=T.textPosition,k=Math.min(X,H)/2-N,$q=P().innerRadius(0).outerRadius(k),Jq=P().innerRadius(k*v).outerRadius(k*v);M.append("circle").attr("cx",0).attr("cy",0).attr("r",k+I/2).attr("class","pieOuterCircle");let j=Q.getSections(),Kq=fq(j),Qq=[K.pie1,K.pie2,K.pie3,K.pie4,K.pie5,K.pie6,K.pie7,K.pie8,K.pie9,K.pie10,K.pie11,K.pie12],Z=0;j.forEach(($)=>{Z+=$});let A=Kq.filter(($)=>($.data.value/Z*100).toFixed(0)!=="0"),F=n(Qq).domain([...j.keys()]);M.selectAll("mySlices").data(A).enter().append("path").attr("d",$q).attr("fill",($)=>{return F($.data.label)}).attr("class","pieCircle"),M.selectAll("mySlices").data(A).enter().append("text").text(($)=>{return($.data.value/Z*100).toFixed(0)+"%"}).attr("transform",($)=>{return"translate("+Jq.centroid($)+")"}).style("text-anchor","middle").attr("class","slice");let Yq=M.append("text").text(Q.getDiagramTitle()).attr("x",0).attr("y",-(H-50)/2).attr("class","pieTitleText"),C=[...j.entries()].map(([$,R])=>({label:$,value:R})),x=M.selectAll(".legend").data(C).enter().append("g").attr("class","legend").attr("transform",($,R)=>{let b=y+O,Xq=b*C.length/2,Oq=12*y,kq=R*b-Xq;return"translate("+Oq+","+kq+")"});x.append("rect").attr("width",y).attr("height",y).style("fill",($)=>F($.label)).style("stroke",($)=>F($.label)),x.append("text").attr("x",y+O).attr("y",y-O).text(($)=>{if(Q.getShowData())return`${$.label} [${$.value}]`;return $.label});let yq=Math.max(...x.selectAll("text").nodes().map(($)=>$?.getBoundingClientRect().width??0)),zq=X+N+y+O+yq,G=Yq.node()?.getBoundingClientRect().width??0,Hq=X/2-G/2,Mq=X/2+G/2,S=Math.min(0,Hq),D=Math.max(zq,Mq)-S;U.attr("viewBox",`${S} 0 ${D} ${H}`),u(U,H,D,T.useMaxWidth)},"draw"),Tq={draw:Lq},bq={parser:Pq,db:qq,renderer:Tq,styles:Wq};export{bq as diagram};
