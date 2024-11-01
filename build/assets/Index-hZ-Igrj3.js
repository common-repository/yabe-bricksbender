import{i as z,r as j,o as l,e as g,w as V,b as e,n as v,f as S,g as R,u as o,v as A,a as _,t as u,T as X,j as B,p as F,k as H,l as K,m as M,c as h,d as G,F as U,q as T,_ as f}from"./admin-DKtmiGTF.js";import{u as N,a as D,b as L,c as O,_ as E}from"./notifier-BjApKgeD.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-B4-cSZR6.js";const J=["value","disabled"],Q={width:"1%",class:"manage-column vertical:middle"},W={class:"vertical:middle rel"},Y=["title"],Z={class:"size:20 mr:6","data-builder-mode":"light"},ee={class:"font:bold"},te={class:"ml:6 fg:gray-50"},se={width:"",class:"vertical:middle"},ae={__name:"TheElementIndexRow",props:{item:{type:Object,required:!0}},emits:["updateStatus"],setup(a,{emit:k}){const r=N(),w=k,n=z("selectedItems");function m(d){d.code==="Space"&&(d.preventDefault(),w("updateStatus"))}return(d,b)=>{const p=j("font-awesome-icon");return l(),g(X,{mode:"out-in"},{default:V(()=>[e("tr",{class:v([[a.item.status?"active":"inactive"],"group"])},[e("th",{scope:"row",class:v([{"pl:6":!a.item.status},"vertical:middle py:8 ybb-check-column"])},[S(e("input",{"onUpdate:modelValue":b[0]||(b[0]=y=>R(n)?n.value=y:null),type:"checkbox",value:a.item.id,disabled:o(r).isBusy},null,8,J),[[A,o(n)]])],2),e("td",Q,[_(o(D),{"aria-disabled":o(r).isBusy,checked:a.item.status,onClick:b[1]||(b[1]=y=>d.$emit("updateStatus")),onKeyup:m,class:v([[a.item.status?"bg:sky-60":"opacity:.5 bg:gray-20"],"rel inline-flex p:0 h:24 w:44 flex-shrink:0 cursor:pointer rounded b:2 b:transparent transition-property:color,background-color,border-color,text-decoration-color,fill,stroke transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|2,rgb(14,165,233)|0|0|0|4,rgba(0,0,0,0)|0|0|0|0:focus outline:2|solid|transparent:focus"])},{default:V(()=>[e("span",{class:v([[a.item.status?"translateX(20)":"translateX(0)"],"pointer-events:none rel inline-block font:12 h:20 w:20 rounded bg:white transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|0,rgba(59,130,246,0.5)|0|0|0|0,rgba(0,0,0,0.1)|0|1|3|0,rgba(0,0,0,0.1)|0|1|2|-1"])},[e("span",{"aria-hidden":"true",class:v([[a.item.status?"opacity:0 transition-timing-function:ease-out transition-duration:100":"opacity:1 transition-timing-function:ease-in transition-duration:200"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[a.item.isUpdatingStatus?(l(),g(p,{key:1,icon:["fas","spinner"],class:"animation:rotate|linear|1s|infinite fg:gray-60"})):(l(),g(p,{key:0,icon:["fas","xmark"],class:"fg:gray-60"}))],2),e("span",{"aria-hidden":"true",class:v([[a.item.status?"opacity:1 transition-timing-function:ease-in transition-duration:200":"opacity:0 transition-timing-function:ease-out transition-duration:100"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[a.item.isUpdatingStatus?(l(),g(p,{key:1,icon:["fas","spinner"],class:"animation:rotate|linear|1s|infinite fg:sky-60"})):(l(),g(p,{key:0,icon:["fas","check"],class:"fg:sky-60"}))],2)],2)]),_:1},8,["aria-disabled","checked","class"])]),e("td",W,[e("div",{class:"flex align-items:center",title:a.item.id},[e("div",Z,[e("i",{class:v([a.item.icon,"m:2 f:16 font:semibold"])},null,2)]),e("span",ee,u(a.item.name),1),e("span",te," @ "+u(a.item.namespace),1)],8,Y)]),e("td",se,u(a.item.category),1)],2)]),_:1})}}},ne=P(ae,[["__scopeId","data-v-1e3da520"]]),ie=["disabled"],oe=e("hr",{class:"invisible m:0 mt:-2"},null,-1),le={class:"flex flex:col align-items:center {w:full;max-w:screen-sm}>*"},ce={class:"tablenav top"},de={class:"tablenav-pages pb:12"},re={class:"displaying-num"},ue=e("br",{class:"clear"},null,-1),me={class:"wp-list-table widefat table-auto plugins"},he={class:"manage-column column-cb ybb-check-column px:2 vertical:middle"},fe=e("td",{class:"manage-column"},null,-1),be={scope:"col"},pe={scope:"col"},ve={key:0},ye={key:1},ge={class:"inactive animation:skeleton|2s|infinite"},_e=e("th",{scope:"row",class:"vertical:middle py:8 ybb-check-column"},[e("input",{type:"checkbox",value:"0",disabled:""})],-1),ke={width:"1%",class:"manage-column vertical:middle"},we={class:"translateX(0) pointer-events:none rel inline-block h:20 w:20 rounded bg:white box-shadow:0|0"},xe={"aria-hidden":"true",class:"abs inset:0 flex h:full w:full align-items:center justify-content:center opacity:1"},$e=e("td",{width:"30%"},[e("div",{class:"h:12 bg:slate-30 r:4 w:1/2"})],-1),Be=e("td",{width:"10%",class:"align-items:center vertical:middle"},[e("div",{class:"h:12 bg:slate-30 r:4 w:1/2"})],-1),Se=e("td",{width:"",class:"align-items:center vertical:middle"},[e("div",{class:"h:12 bg:slate-30 r:4 w:full"})],-1),Ue={key:2},Ve={class:"manage-column column-cb ybb-check-column px:2 vertical:middle"},Ae=e("td",{class:"manage-column"},null,-1),Ce={scope:"col"},Ie={scope:"col"},Te={class:"tablenav bottom"},Ee={class:"tablenav-pages"},je={class:"displaying-num"},Ne=e("br",{class:"clear"},null,-1),Fe={__name:"Index",setup(a){const k=L(),r=N(),w=O(),n=B([]),m=B("-1"),d=B([]);F("selectedItems",d);const b=r.hasTask;H(()=>{r.reset(),p()});function p(){r.add("modules.m.element-switch.index:fetch-items"),k.request({method:"GET",url:"/modules/m/element-switch/index"}).then(t=>t.data).then(t=>{n.value=t.data.elements.map(s=>(s.isUpdatingStatus=!1,s)),$()}).catch(function(t){w.alert(t.message)}).finally(()=>{r.remove("modules.m.element-switch.index:fetch-items"),$()})}function y(t,s=null){s!==t.status&&(r.add("modules.m.element-switch.index:update-status"),t.isUpdatingStatus=!0,k.request({method:"PATCH",url:`/modules/m/element-switch/update-status/${t.namespace}/${t.id}`,data:{status:s!==null?s:!t.status}}).then(i=>i.data).then(i=>{t.status=i.status}).catch(function(i){w.alert(i.message)}).finally(()=>{t.isUpdatingStatus=!1,r.remove("modules.m.element-switch.index:update-status")}))}const x=K({get(){if(n.value.length>0){let t=!0;for(const[s,i]of n.value.entries())if(d.value.includes(i.id)||(t=!1),!t)break;return t}return!1},set(t){const s=[];t&&n.value.forEach(i=>{s.push(i.id)}),d.value=s}});function $(){d.value=[]}const C=B([{key:"activate",label:"Activate"},{key:"deactivate",label:"Deactivate"}]);function I(){if(m.value!=="-1")switch(m.value){case"deactivate":confirm(f("Are you sure you want to deactivate the selected element(s)?","yabe-bricksbender"))&&(d.value.forEach(async t=>{const s=n.value.find(i=>i.id===t);y(s,!1)}),$());break;case"activate":confirm(f("Are you sure you want to activate the selected element(s)?","yabe-bricksbender"))&&(d.value.forEach(async t=>{const s=n.value.find(i=>i.id===t);y(s,!0)}),$());break}}return(t,s)=>{const i=j("font-awesome-icon"),q=M("ripple");return l(),h(U,null,[S((l(),h("button",{type:"button",disabled:o(r).isBusy,onClick:p,class:"button float:right"},[G(" refresh 🔄️")],8,ie)),[[q]]),oe,e("div",le,[e("div",ce,[_(E,{modelValue:m.value,"onUpdate:modelValue":s[0]||(s[0]=c=>m.value=c),actions:C.value,onBulkActions:I},null,8,["modelValue","actions"]),e("div",de,[e("span",re,u(`${n.value.length} ${o(f)("items","yabe-bricksbender")}`),1)]),ue]),e("table",me,[e("thead",null,[e("tr",null,[e("td",he,[S(e("input",{"onUpdate:modelValue":s[1]||(s[1]=c=>x.value=c),class:"ml:12",type:"checkbox"},null,512),[[A,x.value]])]),fe,e("th",be,u(o(f)("Name","yabe-bricksbender")),1),e("th",pe,u(o(f)("Category","yabe-bricksbender")),1)])]),n.value.length>0&&!o(b)("modules.m.element-switch.index:fetch-items")?(l(),h("tbody",ve,[(l(!0),h(U,null,T(n.value,c=>(l(),g(ne,{key:c.id,item:c,onUpdateStatus:De=>y(c,null)},null,8,["item","onUpdateStatus"]))),128))])):o(b)("modules.m.element-switch.index:fetch-items")?(l(),h("tbody",ye,[(l(!0),h(U,null,T(n.value.length?n.value.length:5,c=>(l(),h("tr",ge,[_e,e("td",ke,[_(o(D),{checked:!1,class:"opacity:.5 bg:gray-85 rel inline-flex p:0 h:24 w:44 flex-shrink:0 cursor:pointer rounded b:2 b:transparent"},{default:V(()=>[e("span",we,[e("span",xe,[_(i,{icon:["fas","spinner"],class:"animation:rotate|linear|1s|infinite font:12 fg:gray-60"})])])]),_:1})]),$e,Be,Se]))),256))])):(l(),h("tbody",Ue)),e("tfoot",null,[e("tr",null,[e("td",Ve,[S(e("input",{"onUpdate:modelValue":s[2]||(s[2]=c=>x.value=c),class:"ml:12",type:"checkbox"},null,512),[[A,x.value]])]),Ae,e("th",Ce,u(o(f)("Name","yabe-bricksbender")),1),e("th",Ie,u(o(f)("Category","yabe-bricksbender")),1)])])]),e("div",Te,[_(E,{modelValue:m.value,"onUpdate:modelValue":s[3]||(s[3]=c=>m.value=c),actions:C.value,onBulkActions:I},null,8,["modelValue","actions"]),e("div",Ee,[e("span",je,u(`${n.value.length} ${o(f)("items","yabe-bricksbender")}`),1)]),Ne])])],64)}}};export{Fe as default};