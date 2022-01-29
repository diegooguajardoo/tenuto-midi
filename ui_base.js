/*! @license

(c) 2000-2021 musictheory.net, LLC. All rights reserved.

This file is licensed only for use in providing musictheory.net's
online services and is subject to the Source Code Policy stated
at https://www.musictheory.net/legal 

You may not port this file to another platform without
musictheory.net, LLC's written consent

*/
(function(){
var A=_musictheory_net_("_");
!function(){
"use strict";
var $=function(){};
"undefined"==typeof window.console&&(window.console={
log:$,
debug:$,
info:$,
warn:$,
error:$,
assert:$,
clear:$,
dir:$,
dirxml:$,
trace:$,
group:$,
groupCollapsed:$,
groupEnd:$,
time:$,
timeEnd:$,
profile:$,
profileEnd:$,
count:$,
exception:$,
table:$,
create:function(){
window.console={
log:function($){
alert("log: "+$);
}
};
}
});
}();
(function($){
"use strict";
var B,C=1,D=1,E=[],F={},G={};
function H($){
return $ instanceof Node;
}
function I($){
return $ instanceof Window;
}
function J($){
if($._eiko_uid)return $._eiko_uid;
var A=E.pop();
A||(A=""+C++);
$._eiko_uid=A;
return A;
}
function K($,B){
return A.isString($)?(B||document).querySelector($):null;
}
function L($,A){
return K($,A);
}
K.query=L;
function M($,B){
var C=[];
if(A.isString($))for(var D=(B||document).querySelectorAll($),E=0,F=D.length;F>E;E++)C.push(D[E]);else(H($)||I($))&&C.push($);
return C;
}
K.queryAll=M;
function N($,B,C,D){
var E=document.createElement($);
if(A.isArray(B)){
C=B;
B=null;
}
B&&T(E,B);
C&&P(E,C,D);
return E;
}
K.create=N;
function O($,B,C,D){
if(!$)return;
if(A.isString(B))if(D){
var E=document.createElement("div");
E.innerHTML=B;
O($,E.childNodes,C);
}else O($,($.ownerDocument||document).createTextNode(B),C);else H(B)?C?$.appendChild(B):$.insertBefore(B,$.firstChild):B.length&&A.each(A.toArray(B),function(A){
O($,A,C,D);
});
}
function P($,A,B){
O($,A,!0,B);
}
K.append=P;
function Q($,A,B){
O($,A,!1,B);
}
K.prepend=Q;
function R($){
if(!$)return;
for(;$.lastChild;)$.removeChild($.lastChild);
}
K.empty=R;
K.fetch=function($,B,C){
if(!$)return;
if(A.isFunction(B)){
C=B;
B={};
}
B||(B={});
var D=B.method?B.method.toUpperCase():"GET",E=B.headers||{},F="GET"==D,G=new XMLHttpRequest();
G.open(D,$,B.async!==!1);
B.type&&(G.responseType=B.type);
A.each(B,function($,A){
try{
G[A]=$;
}catch(B){
console.error(B);
}
});
F||E["Content-type"]||E["Content-Type"]||G.setRequestHeader("Content-type","application/x-www-form-urlencoded");
A.each(E,function($,A){
G.setRequestHeader(A,$);
});
G.onload=function(){
var $=G.status;
0==$||304==$||$>=200&&300>$?C&&C(null,G.response||G.responseText):C&&C(new Error(G.statusText),null);
};
G.onerror=function(){
C&&C(new Error("onerror"),null);
};
G.send(F?null:B.data);
};
function S($){
A.isArray($)?A.each($,function($){
$&&$.remove&&$.remove();
}):$&&$.remove&&$.remove();
}
K.remove=S;
function T($,B){
if(!$)return;
A.each(B,function(A,B){
$.setAttribute(B,A);
});
}
K.setAttributes=T;
function U($,C,D,E){
if(!$||!C||!D)return;
var F,H=A.isFunction(D)?function($){
var A=null;
try{
D($);
}catch(C){
A=C;
}
if(B)B(A);else if(A)throw A;
}:D,I=G[F=J($)],K={
T:C,
W:H,
L:D,
C:!!E
};
$.addEventListener(K.T,K.W,K.C);
if(I)I.push(K);else{
I=[K];
G[F]=I;
}
}
K.listen=U;
function V($,B,C,D){
if(!$)return;
var F,H=G[F=J($)],I=null;
D=!!D;
A.each(H,function(A){
if(B&&B!=A.T||C&&C!=A.L||D!=A.C){
I||(I=[]);
I.push(A);
}else $.removeEventListener(A.T,A.W,A.C);
});
G[F]=I;
if(!I){
$._eiko_uid=0;
E.push(F);
}
}
K.unlisten=V;
function W($,A){
X($,null,A);
}
K.delay=W;
function X($,C,E,G){
if(!A.isNumber(C)){
G=E;
E=C;
C=0;
}
var H=Date.now()+C,I=D++;
function J(){
if(F[I])try{
var A=(Date.now()-H)/$;
if(A>=1)Y(I);else{
A>0&&E&&E(A);
requestAnimationFrame(J);
}
}catch(C){
B&&B(C);
Y(I);
}
}
F[I]=[E,G];
requestAnimationFrame(J);
E&&E(0);
return I;
}
K.animate=X;
function Y($){
var B=F[$];
if(!B)return;
var C=B[0],D=B[1];
C&&C(1);
F[$]=null;
D&&D();
A.every(F,function($){
return null===$;
})&&(F={});
}
K.stop=Y;
function Z($,A,B){
return $+(A-$)*B;
}
K.lerp=Z;
function _($){
$*=5;
if(1>$)return.3*(-.9*Math.cos($*(Math.PI/2))+.9+.1*$);
$=($-1)/4;
var A=$-1;
return.7*(.9*(A*A*A+1)+.1*$)+.3;
}
K.ease=_;
function a($){
return-.9*Math.cos($*(Math.PI/2))+.9+.1*$;
}
K.easeIn=a;
function b($){
return.9*Math.sin($*(Math.PI/2))+.1*$;
}
K.easeOut=b;
function c($){
return-.5*(Math.cos(Math.PI*$)-1);
}
K.easeInOut=c;
K.transform=function($,B,C,D,E,F){
if(!$)return;
var G;
void 0!==D&&void 0!==E&&(G=(D?D+",":"0,")+(E?E:"0"));
if(B||C||!G){
A.isNumber(B)&&(B+="px");
A.isNumber(C)&&(C+="px");
var H=(B||"0")+","+(C||"0");
}
H=H?"translate3d("+H+",0)":"";
G=G?"scale3d("+G+",1)":"";
$.style.transform=H+" "+G;
void 0!==F&&($.style.opacity=String(F));
};
K.setTransformOrigin=function($,A,B){
$.style.transformOrigin=A+" "+B;
};
function d($){
B=$;
}
K.setEventHandler=d;
function e($){
if("loading"!=document.readyState)setTimeout($,0);else{
var A=function(){
document.removeEventListener("DOMContentLoaded",A,!1);
$();
};
document.addEventListener("DOMContentLoaded",A,!1);
}
}
K.ready=e;
$.eiko=$.$=K;
}).call(null,this);
(function($){
"use strict";
var B="_musictheory_net_",C=window.localStorage,D=!1;
function E($){
C.removeItem($);
}
function F($,A){
if(void 0===A){
E($);
return;
}
C.setItem($,JSON.stringify(A));
return A;
}
function G($){
var B=C.getItem($);
if(!A.isString(B))return void 0;
try{
return JSON.parse(B);
}catch(D){
return B||void 0;
}
}
try{
F(B,B);
G(B)!=B&&(D=!0);
E(B);
}catch(H){
D=!0;
}
$.eiko.store={
enabled:!D,
set:F,
get:G,
remove:E
};
}).call(null,this);
_musictheory_net_("$",$);
}).call(this);

(function(){
var $=_musictheory_net_("_"),A=_musictheory_net_("namespace"),B=_musictheory_net_("require"),C=(_musictheory_net_("nilscript"),
_musictheory_net_("N$$_"),_musictheory_net_("$"));
A("browser",function($){
"use strict";
var A,B,D,E,F,G;
function H(){
if(B)return;
B=!0;
var $=navigator.userAgent,A=/WebKit/.test($),C=/Chrome\//.test($),H=A&&/Apple.*Mobile.*Safari/.test($);
G="ontouchstart"in document.documentElement;
D=H&&/iPad.*Apple.*Safari/.test($)||/iPad.*AppleWebKit/.test($);
E=!D&&(H&&/(iPhone|iPod).*Apple.*Safari/.test($)||/(iPhone|iPod).*AppleWebKit/.test($));
var I=A&&!!/Safari\//.test($)&&!C,J=H||D||E,K=A&&C&&/Mobile /.test($);
F=J||K;
!E&&I&&/OS X/.test($)&&G&&(D=!0);
}
$.isApplePad=function(){
H();
return D;
};
$.isApplePhone=function(){
H();
return E;
};
$.isMobile=function(){
H();
return F;
};
$.setViewport=function($){
if(!A){
A=C.create("meta",{
name:"viewport"
});
C.query("head").appendChild(A);
}
A.setAttribute("content",$);
};
$.isInFrame=function(){
return window.top!=window;
};
$.useNativeResolution=function(){
$.setViewport("width=device-width,initial-scale=1,shrink-to-fit=no,user-scalable=no");
};
$.prefersTouchEvents=function(){
H();
var A=D||E,B=navigator.userAgent;
A||(A=/(iPad|iPhone|iPod).*AppleWebKit/.test(B));
if(!A){
var C=B.match(/Android\s+([0-9.]+)/);
A=!!C&&parseFloat(C[1])>=1.5;
}
A&&(A=G);
$.prefersTouchEvents=function(){
return A;
};
return A;
};
return $;
});
A("common",function(A){
"use strict";
var D="beta",E="4.1",F=void 0,G=void 0;
A.addReadyHandler=function($){
F||(F=[]);
F.push($);
};
A.addHotSwapHandler=function($,A){
G||(G={});
G[$]=A;
};
A.invokeHotSwapHandler=function($,A){
if(!G)return;
var B=G[$];
B&&B(A);
};
A.getPath=function($,A){
var B=window["_path_map"],C=B&&B[A];
if(C)return C;
return["/","v19","/",$,"/",A].join("");
};
A.isBetaEnabled=function(){
return C.store.enabled&&C.store.get(D)===E;
};
A.setBetaEnabled=function($){
if(C.store.enabled)try{
$?C.store.set(D,E):C.store.remove(D);
}catch(A){}
};
A.installBeacon=function(){
for(var $=document.cookie.split(";"),A=0,B=$.length;B>A;A++)if($[A].match(/B=/))return;
C.fetch("/s/b");
};
var H=window.open;
A.popUpPiano=function(){
try{
H("/piano","PopUpPiano","width=829,height=256,menubar=0,location=0,toolbar=0,status=0,resizable=0,scrollbars=0");
}catch($){
window.location.href="//www.musictheory.net/piano";
}
};
C.ready(function(){
var D=B("trace"),E=document.body.getAttribute("data-musictheory-id"),G=document.location.hash;
C.setEventHandler(function($){
$&&D.trace({
error:$,
where:"v"
});
});
D.enable();
try{
$.each(F,function($){
$(E);
});
}catch(H){
D.trace({
error:H,
where:"r"
});
try{
$.log(H);
}catch(I){}
}
A.invokeHotSwapHandler(E,G);
});
});
A("trace",function(){
"use strict";
var A=!1;
function B(){
var $=null;
try{
$=document&&document.location&&document.location.href;
}catch(A){}
return $;
}
function C(){
var $=null;
try{
$=navigator&&navigator.userAgent;
}catch(A){}
return $;
}
function D(){
var $=null;
try{
window.parent&&window.parent.location&&window.parent.location!=window.location&&($=window.parent.location.href);
}catch(A){}
return $;
}
function E(){
function $($){
var A=document.createElement("img");
A.src=$;
var B=A.src;
A.src=null;
return B;
}
function A(B,C){
if(!B)return;
if(B.getAttribute){
var D=B.getAttribute("src")||B.getAttribute("href");
D&&(D=0==D.indexOf("data:")?null:$(D));
D&&B.nodeName&&"A"!=B.nodeName.toUpperCase()&&-1==D.search("musictheory.net")&&-1==D.search("musictheory.local")&&C.push(D);
}
if(B.hasChildNodes())for(var E=B.childNodes,F=0,G=E.length;G>F;F++)A(E[F],C);
}
var B=[];
A(document.documentElement,B);
return B;
}
function F(A){
var F=null;
try{
F=window.localStorage.getItem("t");
if(!F){
F=$.uuid().replace(/-/g,"");
window.localStorage.setItem("t",F);
}
}catch(G){}
var H={
build:{
name:"Site",
bundle:"net.musictheory.Site",
version:"2270",
uuids:["62c163e5bae545149bad327d8bba02d0",F]
},
request:{
url:B(),
parent:D(),
ua:C(),
externals:E()
}
};
A.title&&(H.title=A.title);
A.message&&(H.message=A.message);
A.where&&(H.where=A.where);
A.log&&(H.log=A.log);
if(A.error){
var I=A.error;
H.error={
name:I.name,
message:I.message,
string:I.toString()
};
if(I.stack){
var J=[];
try{
$.each(I.stack.split("\n"),function($){
var A=$.trim();
A&&J.push(A);
});
}catch(G){}
H.error.stack=J;
}
}
function K(){
if(!H.fallback){
H.details=null;
H.fallback=!0;
var $=new XMLHttpRequest();
$.open("POST","/s/trace",!0);
$.send(JSON.stringify(H));
}
}
try{
var L=new Worker("/vc/19/0/c5dccca29ac1576a4c19c7ae9fbf0659b18ce6a9/traceworker.js");
L.onerror=function($){
K($.error);
L.terminate();
};
L.postMessage(JSON.stringify(H));
}catch(G){
K(G);
}
}
return{
trace:function($){
A&&setTimeout(function(){
F($);
},1);
},
enable:function(){
A=!0;
}
};
});
}).call(this);

(function(){
var $=_musictheory_net_("_"),A=(_musictheory_net_("namespace"),_musictheory_net_("require")),B=_musictheory_net_("nilscript"),C=_musictheory_net_("N$$_"),D=_musictheory_net_("$");
!function(){
"use strict";
C._registerClass("N$BNh",null,function(A,B){
function E(){
this.N$jNh=this.N$FNh=this.N$INh=this.N$qNh=this.N$RNh=this.N$UNh=this.N$Ypt=null;
this.N$zNh=this.N$WNh=this.N$XNh=this.N$VNh=this.N$JNh=0;
this.N$KNh=!1;
this.constructor=E;
this.N$_id=++C._id;
}
B.N$QNh=function(){
return this.N$XNh;
};
B.N$GNh=function(){
return this.N$VNh;
};
B.N$YNh=function(){
return this.N$WNh;
};
B.N$Xat=function(){
return this.N$Ypt;
};
B.N$eCh=function(){
return this.N$qNh;
};
B.N$tCh=function(){
return this.N$KNh;
};
B.N$nCh=function($){
this.N$INh=$;
};
B.N$rCh=function(){
return this.N$INh;
};
B.N$iCh=function($){
this.N$JNh=$;
};
B.N$sCh=function(){
return this.N$JNh;
};
B.N$oCh=function(A,B,C,D,F,G){
var H=this;
if(H=E.N$_super.prototype.init.call(this)){
H.N$VNh=-1;
H.N$XNh=-1;
H.N$WNh=-1;
H.N$Ypt=B;
H.N$qNh=C;
H.N$INh=A;
$.each(G,function($){
H.N$uCh($);
});
if(F){
var I=H.N$uCh(F);
H.N$aCh(I);
}
if(D){
var J=H.N$uCh(D);
H.N$fCh(J);
}
}
return H;
};
B.N$lCh=function($){
var A,B,D,E,F=this;
if(this.N$KNh)return;
this.N$KNh=!0;
var G=(A=new C._c.N$cCh())&&A.init();
G&&G.N$hCh("_t0a");
function H(){
F.N$pCh(!0);
}
F.N$UNh=C._c.N$vCh.N$dCh(G,H);
F.N$RNh=(B=new C._c.N$mCh())&&B.init();
F.N$jNh=(D=new C._c.N$yCh())&&D.N$gCh(F.N$Ypt,F.N$qNh);
F.N$RNh&&F.N$RNh.N$bCh(F.N$jNh);
G&&G.N$bCh(F.N$RNh);
F.N$FNh.length>2&&(E=F.N$FNh[F.N$FNh.length-1])&&E.N$wCh(!0);
F.N$jNh&&F.N$jNh.N$ECh(F.N$FNh);
F.N$SCh(!0,$,null);
};
B.N$pCh=function($){
this.N$xCh($,this.N$XNh);
};
B.N$SCh=function($,A,B){
var C=$?0:1,E=$?1:0,F=this.N$UNh&&this.N$UNh.N$TCh(),G=((this.N$RNh&&this.N$RNh.N$NCh()).offsetHeight,
this.N$RNh&&this.N$RNh.N$NCh());
D.stop(this.N$zNh);
if(A){
var H=$?.85:1,I=$?1:.85;
this.N$zNh=D.animate(250,function($){
$=D.ease($);
var A=D.lerp(H,I,$),B=D.lerp(C,E,$);
D.transform(G,0,0,A,A,B);
F.opacity=String(B);
},B);
}else B&&B();
};
B.N$uCh=function($){
var A,B=this.N$CCh(),D=(A=new C._c.N$kCh())&&A.init();
D&&D.N$Plt($);
this.N$FNh||(this.N$FNh=[]);
this.N$FNh.push(D);
B==this.N$VNh&&D&&D.N$LCh(!0);
B==this.N$XNh&&D&&D.N$ACh(!0);
D&&D.N$OCh(this,"N$MCh");
return B;
};
B.N$xCh=function($,A){
var B=this;
if(!this.N$KNh)return;
this.N$KNh=!1;
A==this.N$XNh&&this.N$INh&&this.N$INh.respondsToSelector_("N$DCh")&&this.N$INh&&this.N$INh.N$DCh(this);
this.N$INh&&this.N$INh.respondsToSelector_("N$PCh")&&this.N$INh&&this.N$INh.N$PCh(this,A);
{
var C=this.N$UNh;
this.N$RNh;
}
this.N$SCh(!1,$,function(){
C&&C.N$HCh();
});
B.N$UNh=null;
B.N$RNh=null;
B.N$jNh=null;
setTimeout(function(){
B.N$INh&&B.N$INh.respondsToSelector_("N$BCh")&&B.N$INh&&B.N$INh.N$BCh(B,A);
},500);
};
B.N$MCh=function($){
var A=this.N$FNh.indexOf($);
if(0>A)return;
this.N$xCh(!0,A);
};
B.N$jCh=function($){
if(!this.N$FNh||0>$||$>=this.N$FNh.length)return null;
return this.N$FNh[$];
};
B.N$FCh=function($){
var A;
return(A=this.N$jCh($))&&A.N$Xat();
};
B.N$aCh=function($){
var A,B;
if(this.N$VNh!=$){
(A=this.N$jCh(this.N$VNh))&&A.N$LCh(!1);
this.N$VNh=$;
(B=this.N$jCh(this.N$VNh))&&B.N$LCh(!0);
}
};
B.N$ICh=function($){
var A,B;
if(this.N$WNh!=$){
(A=this.N$jCh(this.N$WNh))&&A.N$qCh(!1);
this.N$WNh=$;
(B=this.N$jCh(this.N$WNh))&&B.N$qCh(!0);
}
};
B.N$fCh=function($){
var A,B;
if(this.N$XNh!=$){
(A=this.N$jCh(this.N$XNh))&&A.N$ACh(!1);
this.N$XNh=$;
(B=this.N$jCh(this.N$XNh))&&B.N$ACh(!0);
}
};
B.N$CCh=function(){
return this.N$FNh?this.N$FNh.length:0;
};
return E;
});
C._registerClass("N$yCh","N$RCh",function($,A){
function B(){
C._c.N$RCh.call(this);
this.N$qNh=this.N$UCh=this.N$Ypt=this.N$zCh=null;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Xat=function(){
return this.N$Ypt;
};
A.N$eCh=function(){
return this.N$qNh;
};
$.N$WCh=function(){
return"_n0a";
};
A.N$gCh=function($,A){
var C=this;
if(C=B.N$_super.prototype.init.call(this)){
C.N$Ypt=$;
C.N$qNh=A;
}
return C;
};
A.N$XCh=function(){
var $=B.N$_super.prototype.N$XCh.call(this),A=D.create("div",{
"class":"_r0a"
});
$.appendChild(A);
return A;
};
A.N$VCh=function(){
B.N$_super.prototype.N$VCh.call(this);
if(this.N$Ypt){
this.N$zCh=C._c.N$RCh.N$JCh("_i0a");
this.N$bCh(this.N$zCh);
this.N$zCh&&this.N$zCh.N$KCh(this.N$Ypt);
}
if(this.N$qNh){
this.N$UCh=C._c.N$RCh.N$JCh("_s0a");
this.N$bCh(this.N$UCh);
this.N$UCh&&this.N$UCh.N$KCh(this.N$qNh);
}
};
return B;
});
C._registerClass("N$kCh","N$QCh",function($,A){
function B(){
C._c.N$QCh.call(this);
this.N$Ypt=null;
this.N$GCh=this.N$YCh=this.N$ZCh=this.N$ekh=!1;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Plt=function($){
this.N$Ypt=$;
};
A.N$Xat=function(){
return this.N$Ypt;
};
A.N$tkh=function(){
return this.N$ZCh;
};
A.N$nkh=function(){
return this.N$YCh;
};
A.N$rkh=function(){
return this.N$GCh;
};
A.N$ikh=function(){
return this.N$ekh;
};
$.N$WCh=function(){
return"_o0a";
};
A.N$skh=function($){
var A=this;
(A=B.N$_super.prototype.init.call(this))&&(A.N$Ypt=$);
return A;
};
A.N$XCh=function(){
var $=B.N$_super.prototype.N$XCh.call(this);
$.textContent=this.N$Ypt;
return $;
};
A.N$LCh=function($){
if(this.N$ZCh!=$){
this.N$ZCh=$;
this.N$okh("destructive",$);
}
};
A.N$ACh=function($){
if(this.N$YCh!=$){
this.N$YCh=$;
this.N$okh("cancel",$);
}
};
A.N$qCh=function($){
if(this.N$GCh!=$){
this.N$GCh=$;
this.N$okh("bold",$);
}
};
A.N$wCh=function($){
if(this.N$ekh!=$){
this.N$ekh=$;
this.N$okh("top-margin",$);
}
};
return B;
});
}();
!function(){
"use strict";
var B=A("common"),E=null,F=void 0;
C._registerClass("N$ukh",null,function(A,G){
function H(){
this.N$akh=this.N$fkh=this.N$lkh=this.N$ckh=this.N$hkh=this.N$pkh=this.N$dkh=this.N$vkh=null;
this.N$mkh=this.N$gkh=0;
this.constructor=H;
this.N$_id=++C._id;
}
G.N$ykh=function(){
return this.N$hkh;
};
G.N$bkh=function(){
return this.N$ckh;
};
G.N$wkh=function(){
return this.N$dkh;
};
G.N$Ekh=function(){
return this.N$fkh;
};
G.N$Skh=function(){
return this.N$pkh;
};
G.N$xkh=function(){
return this.N$mkh;
};
G.N$Tkh=function($){
this.N$akh=$;
};
G.N$Nkh=function(){
return this.N$akh;
};
A.N$Ckh=function(){
var $;
F||(F=($=this.alloc())&&$.init());
return F;
};
G.N$kkh=function($){
var A;
this.N$gkh||(this.N$gkh=window.top!=window?32:44);
var B=(A=new C._c.N$Akh())&&A.N$Lkh($,!1);
B&&B.N$Okh(this.N$gkh);
this.N$pkh||(this.N$pkh=[]);
this.N$pkh.push(B);
this.N$hkh&&this.N$hkh.N$bCh(B);
return B;
};
G.N$Mkh=function($){
location.href=$;
};
G.N$Dkh=function($,A){
return B.getPath($,A);
};
G.N$Pkh=function($,A,B){
var D;
C._g.N$pNh("-[N$ukh N$Pkh] "+[$,A,B]);
var F=window.TenutoBridge.getDebugReportObject();
F.h&&(A=A?A+"\n\n"+F.h:F.h);
var G=(D=new C._c.N$Bkh())&&D.N$Hkh($,A,B);
G&&G.N$jkh(F.l);
G&&G.N$jkh(E&&E.N$Ot());
G&&G.N$Fkh();
};
G.N$Ikh=function(){
B.popUpPiano();
};
G.N$qkh=function(){
var A=this;
this.N$pkh=$.map(this.N$pkh||[],function($){
var B,D;
if($&&$.N$Rkh()){
var E=(B=new C._c.N$Akh())&&B.N$Lkh($&&$.N$Ukh(),$&&$.N$zkh());
E&&E.N$Okh(A.N$gkh);
(D=$&&$.N$Xkh())&&D.N$Wkh(E,$);
$&&$.N$Vkh();
return E;
}
$&&$.N$Jkh();
$&&$.N$Okh(A.N$gkh);
return $;
});
};
G.N$Kkh=function(A){
var E,F,G=this;
C._g.N$LNh(function($){
C._g.N$pNh("$D$8G$");
G.N$Pkh(null,null,$);
});
D.setEventHandler(function($){
if($){
C._g.N$pNh("$D$9G$");
G.N$Pkh(null,null,$);
}
C._g.N$kNh();
});
window.addEventListener("error",function(A){
var B=A.message,D=A.error;
if(B.match(/^Script error\.?$/))return;
var E=["$D$AG$"+B,"$D$BG$"+A.filename+":"+(A.lineno||0)+":"+(A.colno||0)];
if(D&&D.stack){
E.push("","$D$CG$");
try{
$.each(D.stack.split("\n"),function($){
var A=$.trim();
A&&E.push(A);
});
}catch(F){}
}
C._g.N$dNh(E);
});
var H=!0,I=A;
I&&I.respondsToSelector_("N$Qkh")&&(H=I&&I.N$Qkh());
G.N$ckh=A;
G.N$hkh=(E=new C._c.N$Gkh())&&E.init();
G.N$hkh&&G.N$hkh.N$hCh("_u0a");
if(H){
G.N$dkh=(F=new C._c.N$Ykh())&&F.init();
G.N$dkh&&G.N$dkh.N$hCh("_a0a");
G.N$dkh&&G.N$dkh.N$Plt(A&&A.N$Xat());
G.N$vkh=C._c.N$RCh.N$JCh("_f0a");
G.N$vkh&&G.N$vkh.N$bCh(G.N$dkh);
G.N$hkh&&G.N$hkh.N$bCh(G.N$vkh);
}
var J=document.body.classList,K=I&&I.respondsToSelector_("N$Zkh")&&I&&I.N$Zkh();
if(K){
J.add("_l0a");
var L=C._c.N$RCh.N$JCh("_c0a");
L&&L.N$bCh(A&&A.N$eLh());
G.N$hkh&&G.N$hkh.N$bCh(L);
}else{
J.add("_h0a");
J.add(window.top!=window?"_p0a":"_d0a");
var M=A&&A.N$eLh();
M&&M.N$hCh("_c0a");
G.N$hkh&&G.N$hkh.N$bCh(M);
}
if(I&&I.respondsToSelector_("N$tLh")&&I&&I.respondsToSelector_("N$nLh")&&I&&I.N$tLh()){
var N=I&&I.N$nLh(),O=G.N$kkh(N);
G.N$hkh&&G.N$hkh.N$bCh(O);
}
G.N$hkh&&G.N$hkh.N$rLh();
J.add("_v0a");
J.add("_m0a");
J.add("_g0a");
B.installBeacon();
G.N$iLh();
D.listen(window,"resize",function(){
return G.N$iLh();
});
};
G.N$iLh=function(){
var A=Math.max(document.documentElement.clientWidth,window.innerWidth||0),B=44,D=C._g.N$m(0,0,A,B);
this.N$dkh&&this.N$dkh.N$sLh(D);
$.each(this.N$lkh,function($){
$&&$.N$oLh();
});
C._c.N$RCh.N$uLh();
};
G.N$aLh=function($){
this.N$lkh||(this.N$lkh=[]);
this.N$lkh.push($);
};
G.N$fLh=function(){
if(C._c.N$cLh.N$lLh())return screen.width>=600&&screen.height>=600?2:1;
return 0;
};
G.N$hLh=function(){
var $=this,A=Math.max(document.documentElement.clientHeight,window.innerHeight||0),B=644-A;
1>B&&(B=0);
var C=function($){
var A=0;
if($>B){
A=B;
B=0;
}else{
A=$;
B-=$;
}
return A;
},D=0,E=0;
D+=C(12);
E+=C(12);
D+=C(20);
var F=66-D,G=44-E;
document.body.style.paddingTop=F+"px";
if($.N$gkh!=G){
$.N$gkh=G;
$.N$qkh();
}
};
G.N$pLh=function($){
};
G.N$Hst=function($,A){};
return H;
});
C._g.N$hNh=function(){
return!1;
};
C._g.N$pNh=function($){
var A,B,D;
E||(E=(A=(B=C._c.N$St)&&B.alloc())&&A.init());
(D=E)&&D.N$At($);
};
C._g.N$dNh=function($){
C._g.N$pNh($.join("\n    "));
};
}();
!function(){
"use strict";
var A={};
C._registerClass("N$dLh",null,function(D,E){
function F(){
this.N$vLh=this.N$mLh=null;
this.constructor=F;
this.N$_id=++C._id;
}
E.N$gLh=function($){
this.N$vLh=$;
};
E.N$yLh=function(){
return this.N$vLh;
};
D.N$Si=function(){
var $,C=B.class_getName(this),D=A[C];
D||(D=A[C]=($=this.alloc())&&$.init());
return D;
};
E.N$bLh=function(A,B){
$.each(this.N$mLh,function($){
$&&$.performSelector_withObject_(A,B);
});
};
E.N$wLh=function(){
C._g.N$pNh("-[N$dLh N$wLh] "+[]);
this.N$bLh("N$ELh",null);
};
E.N$SLh=function(){
C._g.N$pNh("-[N$dLh N$SLh] "+[]);
this.N$bLh("N$xLh",null);
};
E.N$TLh=function(){
C._g.N$pNh("-[N$dLh N$TLh] "+[]);
this.N$bLh("N$NLh",null);
};
E.N$CLh=function(){
C._g.N$pNh("-[N$dLh N$CLh] "+[]);
this.N$bLh("N$kLh",null);
};
E.N$LLh=function($){
C._g.N$pNh("-[N$dLh N$LLh] "+[$]);
this.N$bLh("N$ALh",$);
};
E.N$OLh=function($){
C._g.N$pNh("-[N$dLh N$OLh] "+[$]);
this.N$bLh("N$MLh",$);
};
E.N$DLh=function(A){
this.N$mLh||(this.N$mLh=[]);
this.N$mLh.push(A);
this.N$mLh=$.uniq(this.N$mLh);
};
E.N$PLh=function(A){
this.N$mLh=$.without(this.N$mLh,A);
};
E.N$HLh=function(){};
E.N$BLh=function(){};
E.N$Xdt=function(){};
return F;
});
}();
!function(){
"use strict";
C._registerClass("N$jLh",null,function(A,B){
function D(){
this.N$FLh=this.N$vLh=this.N$f2=this.N$ILh=this.N$qLh=null;
this.N$RLh=this.N$ULh=this.N$zLh=this.N$WLh=this.N$XLh=this.N$VLh=0;
this.constructor=D;
this.N$_id=++C._id;
}
B.N$JLh=function($){
this.N$f2=$;
};
B.N$p2=function(){
return this.N$f2;
};
B.N$KLh=function(){
return this.N$RLh;
};
B.N$QLh=function(){
return this.N$VLh;
};
B.N$GLh=function(){
return this.N$ULh;
};
B.init=function(){
var $=this;
if($=D.N$_super.prototype.init.call(this))if(C._c.N$cLh.N$YLh()){
$.N$qLh=C._c.N$ZLh.N$Si();
$.N$qLh&&$.N$qLh.N$DLh($);
}else setTimeout(function(){
$.N$ALh(5);
},0);
return $;
};
B.N$eAh=function(){
var $,A=this.N$f2&&this.N$f2.N$vi(),B={
0:["/vc/19/0/ab7f3fa3ff988db7f7a7fb941879761ccf104439/i0.ins","/vc/19/0/ab7f3fa3ff988db7f7a7fb941879761ccf104439/i0.xins","/vc/19/0/16a9dbaa1343ec7919ffb8ee516c452ba2c29835/i0.js"],
1:["/vc/19/0/0daa9bf48a2438747332e86af81f5fcc02ead47f/i1.ins","/vc/19/0/0daa9bf48a2438747332e86af81f5fcc02ead47f/i1.xins","/vc/19/0/6af84ba79b98682c49f7a8056d5e90ce5a8d0d7c/i1.js"],
2:["/vc/19/0/b61116e1955d75c5cf646a8e8176d6e75d4c1e09/i2.ins","/vc/19/0/b61116e1955d75c5cf646a8e8176d6e75d4c1e09/i2.xins","/vc/19/0/7b41ece39233cae392a1192cf72c1c143a1d1445/i2.js"],
5:["/vc/19/0/34351d4576c8f9cc222a12f5029561ba1a9c5071/i5.ins","/vc/19/0/34351d4576c8f9cc222a12f5029561ba1a9c5071/i5.xins","/vc/19/0/e9e3df759768a05dc93bbf99a0b70ef77281ddfc/i5.js"],
6:["/vc/19/0/619e77feae3fbccd15247471c9d5c03091769861/i6.ins","/vc/19/0/619e77feae3fbccd15247471c9d5c03091769861/i6.xins","/vc/19/0/178309652b35ec08c72cb6d0bb25f77cc8cdab89/i6.js"],
10:["/vc/19/0/b0cfdeb4797ac951104dcf209861c062e34fb925/i10.ins","/vc/19/0/b0cfdeb4797ac951104dcf209861c062e34fb925/i10.xins","/vc/19/0/c0354d77f3fe3d36c3d8fb9c19eca0b3578a9c0d/i10.js"],
11:["/vc/19/0/8a7b29699ead26d2dd8bb1169ae86113e7a142d9/i11.ins","/vc/19/0/8a7b29699ead26d2dd8bb1169ae86113e7a142d9/i11.xins","/vc/19/0/e1b0d3195e5fffd5d7698fce9606216b65b8a1b8/i11.js"],
12:["/vc/19/0/2514aea7e6cf8523920fd68f5c4de85e56689308/i12.ins","/vc/19/0/2514aea7e6cf8523920fd68f5c4de85e56689308/i12.xins","/vc/19/0/dd9f94b8e03a7ec64d75ae486b7ddb5c1acd4a3d/i12.js"],
13:["/vc/19/0/1ea3770dc636bb5ea046d00047dee8b32e73cd66/i13.ins","/vc/19/0/1ea3770dc636bb5ea046d00047dee8b32e73cd66/i13.xins","/vc/19/0/14fa6d9a049a888eed8b696a1c8f7b1717bd4c2a/i13.js"],
14:["/vc/19/0/135965fa760eea960d5ff35d900d465ac128d3cc/i14.ins","/vc/19/0/135965fa760eea960d5ff35d900d465ac128d3cc/i14.xins","/vc/19/0/a57512e2503e6841a3c533b638a4269e38a7d274/i14.js"],
15:["/vc/19/0/7ae32025b187e4ac87fecc973846e3adc37a8bfe/i15.ins","/vc/19/0/7ae32025b187e4ac87fecc973846e3adc37a8bfe/i15.xins","/vc/19/0/e1df57741f1f7b90bb8d6eed5e5094fd659bc2fa/i15.js"],
16:["/vc/19/0/8abf08ad51d42781ad97939cf3f9f1d2ea7b428f/i16.ins","/vc/19/0/8abf08ad51d42781ad97939cf3f9f1d2ea7b428f/i16.xins","/vc/19/0/75e43a7d7ae92f51eeeaebcf723be93830a4c6f3/i16.js"],
17:["/vc/19/0/e041dfe1bb63fcd84f1d27a1b3725f7aea2dc646/i17.ins","/vc/19/0/e041dfe1bb63fcd84f1d27a1b3725f7aea2dc646/i17.xins","/vc/19/0/effcf499b04460f90a95c0a0358e66f7600fff83/i17.js"],
18:["/vc/19/0/286a1355d04f4ccae3dafc9dfe29017d8b04c1b9/i18.ins","/vc/19/0/286a1355d04f4ccae3dafc9dfe29017d8b04c1b9/i18.xins","/vc/19/0/6ecb722d70b80022a998e990fa144e5e36f92c59/i18.js"],
19:["/vc/19/0/75fd6907ecbccdf3c312c6d8030881adc42bbf09/i19.ins","/vc/19/0/75fd6907ecbccdf3c312c6d8030881adc42bbf09/i19.xins","/vc/19/0/f6412744301c6e97739a205105dd027480f86102/i19.js"],
20:["/vc/19/0/7912bff79a10db90eadc4662e2755db380eba283/i20.ins","/vc/19/0/7912bff79a10db90eadc4662e2755db380eba283/i20.xins","/vc/19/0/ea757d0c44105e3b3d72eec033055341a1b182b8/i20.js"],
21:["/vc/19/0/19ddcba97f0beca975f09238b914e9dcf644c312/i21.ins","/vc/19/0/19ddcba97f0beca975f09238b914e9dcf644c312/i21.xins","/vc/19/0/4bbc9f1f35ed87c021d3410cea49c8eb6030194d/i21.js"],
22:["/vc/19/0/2618dd2a1e964de1fe8174c8182870b88a870391/i22.ins","/vc/19/0/2618dd2a1e964de1fe8174c8182870b88a870391/i22.xins","/vc/19/0/283a102c4ba3bb54407ea693dc16e3c09012ac08/i22.js"],
23:["/vc/19/0/84e5842964c2d0115001e3b26794e7704f26b0d5/i23.ins","/vc/19/0/84e5842964c2d0115001e3b26794e7704f26b0d5/i23.xins","/vc/19/0/33b8d52ba4bc579b9c045bfa3129486f677fcab3/i23.js"],
24:["/vc/19/0/5aebef5b5a61238f5975b1c6554179ae1d4cf9ae/i24.ins","/vc/19/0/5aebef5b5a61238f5975b1c6554179ae1d4cf9ae/i24.xins","/vc/19/0/56c0bbff2f78ec46c42e00a09a83c89e6e01995a/i24.js"],
25:["/vc/19/0/ced607aaa32994399f06454695823c475b79b493/i25.ins","/vc/19/0/ced607aaa32994399f06454695823c475b79b493/i25.xins","/vc/19/0/b04bb3636b0dfd44467278b2fd700bb9236cc9f0/i25.js"],
26:["/vc/19/0/5068adb2711fc701d5ee5d09a95dcbe76026a743/i26.ins","/vc/19/0/5068adb2711fc701d5ee5d09a95dcbe76026a743/i26.xins","/vc/19/0/e7db2ec7152ea2d2eed8cadaded5066dcb0ebaeb/i26.js"],
27:["/vc/19/0/0f969e9bae0a467b45ffbeb5803da28d05b9d97e/i27.ins","/vc/19/0/0f969e9bae0a467b45ffbeb5803da28d05b9d97e/i27.xins","/vc/19/0/dc9660b399d81661f9c29d1ed86a73166e093b20/i27.js"],
28:["/vc/19/0/1fe084f2c42ad57c90bc9068f95cf4399dee0c7e/i28.ins","/vc/19/0/1fe084f2c42ad57c90bc9068f95cf4399dee0c7e/i28.xins","/vc/19/0/a79c7c4c50f48744c794afe83feb414e1f54ed0d/i28.js"],
29:["/vc/19/0/e4537de4893aa0bd9224580dc9ec79058536390f/i29.ins","/vc/19/0/e4537de4893aa0bd9224580dc9ec79058536390f/i29.xins","/vc/19/0/f49ac9ff681f6a9083c0666bf956a70a9f3fe8cf/i29.js"],
100:["/vc/19/0/da65296b4ffbb7d7476cc009396ec09be6d9cca5/i100.ins","/vc/19/0/da65296b4ffbb7d7476cc009396ec09be6d9cca5/i100.xins","/vc/19/0/a2cdc898108ba25381be16d83e401fab6e199172/i100.js"],
102:["/vc/19/0/e19bc1e1685287d10b9fae62312d9f192e335253/i102.ins","/vc/19/0/e19bc1e1685287d10b9fae62312d9f192e335253/i102.xins","/vc/19/0/63b583d8a9d21ed575a939a58a6e6aa6ebc69319/i102.js"]
},D=B[A];
try{
var E=D[0];
D[0]=D[1];
D[1]=E;
}catch(F){
($=C._c.N$ukh.N$Ckh())&&$.N$Pkh("Unknown instrument: "+this.N$f2+", "+A,null,null);
}
this.N$qLh&&this.N$qLh.N$HLh(this.N$f2,D);
};
B.N$tAh=function(A,B,D,E){
var F=this;
C._g.N$pNh("-[N$jLh N$tAh] "+[A,B,D,E]);
var G=A!=this.N$VLh||E;
this.N$VLh=A;
this.N$RLh=B;
this.N$ULh=D;
G&&$.each(this.N$ILh,function($){
$&&$.respondsToSelector_("N$nAh")&&$&&$.N$nAh(F);
});
};
B.N$rAh=function(){
var A=this,B=(Date.now()-this.N$XLh)/1e3;
if(this.N$zLh<this.N$FLh.length){
var C=this.N$FLh[this.N$zLh];
if(B>=C.o){
$.each(this.N$ILh,function($){
$&&$.respondsToSelector_("N$iAh")&&$&&$.N$iAh(A,A.N$zLh,C.d);
});
A.N$zLh++;
}
}
};
B.N$ELh=function(){
C._g.N$pNh("-[N$jLh N$ELh] "+[]);
this.N$VLh<2&&this.N$tAh(2,0,0,!1);
this.N$f2&&this.N$eAh();
};
B.N$ALh=function($){
var A;
C._g.N$pNh("-[N$jLh N$ALh] "+[$]);
this.N$tAh(1,$,0,this.N$RLh!=$);
this.N$ILh&&0!==this.N$ILh.length||(A=C._c.N$oAh.N$Si())&&A.N$sAh($);
};
B.N$MLh=function($){
C._g.N$pNh("-[N$jLh N$MLh] "+[$]);
this.N$tAh(3,0,$,!0);
};
B.N$xLh=function(){
C._g.N$pNh("-[N$jLh N$xLh] "+[]);
this.N$tAh(4,0,1,!0);
this.N$vLh&&this.N$BLh(this.N$vLh,!0);
};
B.N$NLh=function(){
var $=this;
C._g.N$pNh("-[N$jLh N$NLh] "+[]);
if((this.N$qLh&&this.N$qLh.N$yLh())==this.N$vLh){
this.N$XLh=Date.now();
this.N$zLh=0;
this.N$WLh&&clearInterval(this.N$WLh);
this.N$WLh=setInterval(function(){
$.N$rAh();
});
$.N$tAh(5,0,1,!1);
}
};
B.N$kLh=function(){
C._g.N$pNh("-[N$jLh N$kLh] "+[]);
if(this.N$WLh){
clearInterval(this.N$WLh);
this.N$WLh=0;
}
this.N$tAh(4,0,1,!1);
};
B.N$uAh=function(){
C._g.N$pNh("-[N$jLh N$uAh] "+[]);
if(this.N$VLh<4)return;
if(!this.N$vLh)return;
this.N$tAh(4,0,1,!1);
this.N$qLh&&this.N$qLh.N$BLh(this.N$vLh,!0);
};
B.N$aAh=function($){
C._g.N$pNh("-[N$jLh N$aAh] "+[$]);
if(!this.N$f2||(this.N$f2&&this.N$f2.N$vi())!=$){
this.N$vLh=null;
this.N$f2=C._c.N$ti.N$ei($);
this.N$VLh>=2&&this.N$eAh();
}
};
B.N$fAh=function($){
this.N$BLh($,!1);
};
B.N$BLh=function(A,B){
var D=this;
C._g.N$pNh("-[N$jLh N$BLh] "+[A,B]);
if(this.N$vLh!=A){
var E={};
$.each(A&&A.N$Jr(),function($){
var A=$&&$.N$Pr(),B=$&&$.N$Hr(),C=Math.floor(1e3*A),D=E[C];
E[C]={
o:C/1e3,
d:D?Math.max(B,D.d):B
};
});
D.N$FLh=$.values(E).sort(function($,A){
return $.o-A.o;
});
}
D.N$vLh=A;
if(!D.N$vLh)return;
if(D.N$VLh<4)return;
D.N$tAh(4,0,1,!1);
D.N$qLh&&D.N$qLh.N$BLh(A,B);
};
B.N$Xdt=function(){
C._g.N$pNh("-[N$jLh N$Xdt] "+[]);
this.N$qLh&&this.N$qLh.N$Xdt();
this.N$WLh&&clearInterval(this.N$WLh);
this.N$WLh=0;
};
B.N$lAh=function($){
this.N$ILh||(this.N$ILh=[]);
this.N$ILh.push($);
};
B.N$cAh=function(A){
this.N$ILh.length&&(this.N$ILh=$.without(this.N$ILh||[],A));
};
B.N$Hr=function(){
return this.N$vLh&&this.N$vLh.N$Vr();
};
B.N$Xr=function(){
return this.N$vLh&&this.N$vLh.N$Xr();
};
return D;
});
var A=void 0;
C._registerClass("N$oAh",null,function($,B){
function D(){
this.N$hAh=this.N$pAh=null;
this.constructor=D;
this.N$_id=++C._id;
}
$.N$Si=function(){
var $;
A||(A=($=this.alloc())&&$.init());
return A;
};
B.N$sAh=function($){
var A;
if(this.N$hAh)return;
var B=void 0;
this.N$pAh="/faq#exercise-audio";
2==$?B="The audio examples could not load because a firewall or filter blocked the audio file.":3==$?B="The audio examples could not load because the audio file download was interrupted.":5==$?B="The audio examples could not load because a newer version of your web browser is required.":6==$?B="The audio examples could not load because your web browser could not decode the audio file.":7==$?B="The audio examples could not load because the audio file download was corrupted.":$&&(B="The audio examples could not load because the audio system encountered an error.");
if(!B)return;
this.N$hAh=(A=new C._c.N$BNh())&&A.N$oCh(this,"Unable to Play Audio",B,"OK",null,this.N$pAh?["View Help"]:null);
this.N$hAh&&this.N$hAh.N$lCh(!0);
};
B.N$PCh=function($,A){
var B;
if($==this.N$hAh){
A!=($&&$.N$QNh())&&(B=C._c.N$ukh.N$Ckh())&&B.N$Mkh(this.N$pAh);
this.N$hAh&&this.N$hAh.N$nCh(null);
this.N$hAh=null;
}
};
return D;
});
}();
!function(){
"use strict";
var B=A("browser"),D=null;
C._registerClass("N$cLh",null,function(A){
function E(){
this.constructor=E;
this.N$_id=++C._id;
}
A.N$dAh=function(){
return B.isApplePad();
};
A.N$vAh=function(){
return B.isApplePhone();
};
A.N$lLh=function(){
return B.isMobile();
};
A.N$mAh=function($){
B.setViewport($);
};
A.N$gAh=function(){
B.useNativeResolution();
};
A.N$Ctt=function(){
return B.prefersTouchEvents();
};
A.N$YLh=function(){
try{
var A=this.N$yAh();
if(!A||!$.isFunction(A.createDynamicsCompressor))return!1;
var B=A.createBufferSource();
if(!(B&&B.playbackRate&&$.isFunction(B.start)&&$.isFunction(B.stop)&&$.isFunction(B.connect)))return!1;
var C=A.createDynamicsCompressor();
if(!(C&&C.threshold&&C.knee&&C.ratio&&C.attack&&$.isFunction(C.connect)))return!1;
var D=A.createGain();
if(!D||!$.isFunction(D.connect))return!1;
if(!A.destination)return!1;
var E=document.createElement("audio");
if(E&&$.isFunction(E.canPlayType)&&!E.canPlayType("audio/mpeg;"))return!1;
}catch(F){
return!1;
}
return!0;
};
A.N$yAh=function(){
if(!D)try{
var $=window.AudioContext;
$||($=window.webkitAudioContext);
D=$?new $():null;
}catch(A){}
return D;
};
return E;
});
}();
!function(){
"use strict";
C._registerClass("N$bAh","N$RCh",function($,A){
function B(){
C._c.N$RCh.call(this);
this.N$wAh=0;
this.N$n9=this.N$EAh=!1;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$SAh=function(){
return this.N$wAh;
};
A.N$xAh=function(){
return this.N$EAh;
};
A.N$q2=function(){
return this.N$n9;
};
$.N$WCh=function(){
return"_j0a";
};
$.N$TAh=function($){
var A=0;
34==$?A=38:22==$?A=39:28==$?A=40:26==$?A=41:32==$?A=42:30==$?A=43:24==$?A=44:-1==$&&(A=45);
return A;
};
$.N$NAh=function($){
var A=0;
$>=-7&&7>=$&&(A=[13,12,11,10,9,8,7,6,14,15,16,17,18,19,20][$+7]);
return A;
};
A.N$CAh=function($){
var A=this;
if(A=B.N$_super.prototype.init.call(this)){
A.N$wAh=$;
A.N$n9=!0;
A.N$kAh();
}
return A;
};
A.N$kAh=function(){
var $=1,A=[0,0,0,0],B=this.N$wAh;
1==B?A=[120,0,13,20]:2==B?A=[135,0,7,20]:3==B?A=[144,0,5,20]:4==B?A=[151,0,6,20]:5==B?A=[159,0,10,10]:6==B?A=[175,0,13,1]:7==B?A=[60,0,6,18]:8==B?A=[60,0,14,26]:9==B?A=[60,0,22,26]:10==B?A=[60,0,30,26]:11==B?A=[60,0,38,26]:12==B?A=[60,0,46,26]:13==B?A=[60,0,54,26]:14==B?A=[0,0,6,20]:15==B?A=[0,0,14,30]:16==B?A=[0,0,22,30]:17==B?A=[0,0,30,30]:18==B?A=[0,0,38,30]:19==B?A=[0,0,46,30]:20==B?A=[0,0,54,30]:21==B?A=[0,64,23,14]:22==B?A=[24,64,16,24]:23==B?A=[42,64,15,27]:24==B?A=[58,64,45,24]:25==B?A=[104,64,26,30]:26==B?A=[131,64,18,22]:27==B?A=[150,64,18,22]:28==B?A=[169,64,24,26]:29==B?A=[195,64,12,26]:30==B?A=[209,64,30,20]:31==B?A=[240,64,22,20]:32==B?A=[0,202,20,20]:33==B?A=[20,202,20,20]:34==B?A=[40,202,20,20]:35==B?A=[60,202,20,20]:36==B?A=[80,202,20,20]:37==B?A=[102,202,30,20]:38==B?A=[0,135,43,65]:39==B?A=[43,135,43,65]:40==B?A=[86,135,43,65]:41==B?A=[129,135,43,65]:42==B?A=[172,135,43,65]:43==B?A=[215,135,43,65]:44==B?A=[258,135,43,65]:45==B?A=[172,204,73,41]:46==B?A=[254,204,46,37]:47==B?A=[266,0,8,10]:48==B?A=[172,248,79,32]:49==B&&(A=[254,248,79,32]);
C._g.N$hNh()||(1==B?A=[220,0,11,18]:2==B?A=[232,0,6,18]:3==B?A=[240,0,5,18]:4==B?A=[246,0,6,20]:5==B?A=[254,0,9,9]:26==B?A=[190,0,12,16]:27==B&&(A=[204,0,12,16]));
this.N$EAh&&(this.N$wAh>=1&&this.N$wAh<=37?A[1]+=32:this.N$wAh>=48&&this.N$wAh<=49&&(A[1]+=36));
this.N$n9||($*=.35);
6==this.N$wAh&&($*=.35);
var D=this.N$S4();
D.opacity=String($);
D.backgroundPosition="-"+A[0]+"px -"+A[1]+"px";
D.width=A[2]+"px";
D.height=A[3]+"px";
};
A.N$F2=function($){
if(this.N$n9!=$){
this.N$n9=$;
this.N$kAh();
}
};
A.N$LAh=function($){
if(this.N$EAh!=$){
this.N$EAh=$;
this.N$kAh();
}
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$cCh","N$RCh",function($,A){
function B(){
C._c.N$RCh.call(this);
this.constructor=B;
this.N$_id=++C._id;
}
$.N$WCh=function(){
return"_q0a";
};
A.N$XCh=function(){
var $=B.N$_super.prototype.N$XCh.call(this),A=void 0;
$.appendChild(D.create("div",{
"class":"_z0a"
},A=D.create("div",{
"class":"_e1a"
})));
return A;
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$QCh","N$AAh",function($,A){
function B(){
C._c.N$AAh.call(this);
this.N$OAh=null;
this.N$MAh=this.N$DAh=this.N$PAh=this.N$HAh=0;
this.N$BAh=this.N$jAh=!1;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$FAh=function($){
this.N$MAh=$;
};
A.N$IAh=function(){
return this.N$MAh;
};
A.N$qAh=function($){
this.N$DAh=$;
};
A.N$RAh=function(){
return this.N$DAh;
};
A.N$UAh=function($){
this.N$PAh=$;
};
A.N$zAh=function(){
return this.N$PAh;
};
$.N$WCh=function(){
return"_t1a";
};
A.N$XCh=function(){
var $,A=B.N$_super.prototype.N$XCh.call(this);
A.setAttribute("role","button");
this.N$OAh=($=new C._c.N$XAh())&&$.N$WAh(A,1,this);
return A;
};
A.N$VAh=function(){
if(this.N$HAh){
clearTimeout(this.N$HAh);
this.N$HAh=0;
}
};
A.N$JAh=function(){
var $=this;
this.N$VAh();
this.N$OAh&&this.N$OAh.N$KAh()&&this.N$QAh();
this.N$PAh&&(this.N$HAh=setTimeout(function(){
$.N$JAh();
},$.N$PAh));
};
A.N$GAh=function(){
var $=this;
if(!this.N$q2())return!1;
if(!this.N$YAh())return!1;
this.N$VAh();
var A=this.N$MAh,B=this.N$DAh||this.N$PAh;
if(2==A&&B){
this.N$HAh=setTimeout(function(){
$.N$JAh();
},B);
$.N$QAh();
}else 1==A&&$.N$QAh();
var D=$.N$OAh&&$.N$OAh.N$ZAh(),E=D.x-window.pageXOffset,F=D.y-window.pageYOffset,G=$.N$NCh().getBoundingClientRect();
$.N$eOh(C._g.N$s(E-G.left,F-G.top));
$.N$tOh();
return!0;
};
A.N$nOh=function(){
this.N$tOh();
};
A.N$rOh=function($){
this.N$VAh();
0==this.N$MAh&&$&&$.N$KAh()&&this.N$QAh();
this.N$iOh();
this.N$tOh();
};
A.N$tOh=function(){
B.N$_super.prototype.N$tOh.call(this);
this.N$okh("pressed",this.N$sOh());
};
A.N$sOh=function(){
return this.N$q2()&&(this.N$BAh||this.N$OAh&&this.N$OAh.N$KAh());
};
A.N$oOh=function(){
var $=this;
if(this.N$jAh)return;
this.N$uOh("0","tabindex");
D.listen(this.N$NCh(),"keydown",function(A){
var B=C._c.N$fOh.N$aOh(A.keyCode);
if($.N$q2()){
if("Return"==B||"Enter"==B){
$.N$lOh();
A.preventDefault();
}
A.stopPropagation();
}
});
$.N$jAh=!0;
};
A.N$cOh=function(){
var $=this;
if(this.N$q2()){
this.N$BAh=!0;
this.N$tOh();
setTimeout(function(){
$.N$BAh=!1;
$.N$tOh();
$.N$QAh();
},100);
}
};
A.N$eOh=function(){};
A.N$iOh=function(){};
A.N$QAh=function(){
this.N$lOh();
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$AAh","N$RCh",function($,A){
function B(){
C._c.N$RCh.call(this);
this.N$hOh=this.N$pOh=this.N$dOh=this.N$vOh=null;
this.N$n9=!1;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$mOh=function(){
return this.N$dOh;
};
A.N$gOh=function(){
return this.N$hOh;
};
A.N$yOh=function($){
var A=this.N$pOh;
if(A!==$){
this.N$pOh=$;
this.N$tOh(A);
}
};
A.N$YAh=function(){
return this.N$pOh;
};
A.N$bOh=function($){
var A=this.N$vOh;
if(A!==$){
this.N$vOh=$;
this.N$tOh(A);
}
};
A.N$wOh=function(){
return this.N$vOh;
};
A.N$F2=function($){
var A=this.N$n9;
if(A!==$){
this.N$n9=$;
this.N$tOh(A);
}
};
A.N$q2=function(){
return this.N$n9;
};
A.init=function(){
var $=this;
($=B.N$_super.prototype.init.call(this))&&($.N$n9=!0);
return $;
};
A.N$tOh=function(){
var $=!this.N$q2(),A=this.N$vOh,B=this.N$pOh&&!$;
this.N$okh("actionable",B);
this.N$okh("disabled",$);
A&&!$?this.N$uOh(A,"title"):this.N$EOh("title");
};
A.N$lOh=function(){
this.N$pOh&&this.N$pOh();
};
A.N$OCh=function($,A){
var B=this;
if(this.N$dOh!=$||this.N$hOh!=A){
this.N$dOh=$;
this.N$hOh=A;
$&&A?this.N$pOh=function(){
$&&$.performSelector_withObject_(A,B);
}:B.N$pOh=null;
B.N$tOh();
}
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$SOh",null,function($,A){
function B(){
this.N$xOh=this.N$Kdt=null;
this.N$TOh=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$NOh=function($){
this.N$Kdt=$;
};
A.N$tvt=function(){
return this.N$Kdt;
};
A.N$COh=function($){
this.N$TOh=$;
};
A.N$kOh=function(){
return this.N$TOh;
};
A.N$LOh=function($){
var A,B,D;
if(!this.N$Kdt)return;
for(var E=this.N$Kdt.length,F=[],G=[],H=0;E>H;H++){
F[H]=C._g.N$g();
G[H]=this.N$TOh;
}
C._g.N$G(F,$,G);
for(var I=0;E>I;I++){
var J=(A=this.N$Kdt[I])&&A.N$wet();
if(!J)continue;
for(var K=J.length,L=[],M=[],N=0;K>N;N++){
L[N]=C._g.N$g();
M[N]=this.N$TOh;
}
C._g.N$Q(L,F[I],M);
for(var O=0;K>O;O++)(B=(D=J[O])&&D.N$eLh())&&B.N$sLh(L[O]);
}
};
A.N$AOh=function(){
this.N$Kdt=null;
this.N$xOh=null;
};
A.N$OOh=function(){
var $,A=($=new C._c.N$MOh())&&$.init();
this.N$Kdt||(this.N$Kdt=[]);
this.N$Kdt.push(A);
this.N$xOh=A;
return A;
};
A.N$DOh=function(){
this.N$xOh||this.N$OOh();
return this.N$xOh&&this.N$xOh.N$DOh();
};
return B;
});
C._registerClass("N$MOh",null,function($,A){
function B(){
this.N$vet=null;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$POh=function($){
this.N$vet=$;
};
A.N$wet=function(){
return this.N$vet;
};
A.N$DOh=function(){
var $,A=($=new C._c.N$HOh())&&$.init();
this.N$vet||(this.N$vet=[]);
this.N$vet.push(A);
return A;
};
return B;
});
C._registerClass("N$HOh",null,function($,A){
function B(){
this.N$BOh=null;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$jOh=function($){
this.N$BOh=$;
};
A.N$eLh=function(){
return this.N$BOh;
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$FOh","N$RCh",function($,A){
function B(){
C._c.N$RCh.call(this);
this.N$IOh=this.N$pOh=this.N$dOh=null;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$mOh=function(){
return this.N$dOh;
};
A.N$qOh=function(){
return this.N$IOh;
};
A.N$yOh=function($){
this.N$pOh=$;
};
A.N$YAh=function(){
return this.N$pOh;
};
A.init=function(){
var $=this;
($=B.N$_super.prototype.init.call(this))&&($.N$IOh="#");
return $;
};
$.N$ROh=function(){
return"a";
};
A.N$XCh=function(){
var $=this,A=B.N$_super.prototype.N$XCh.call(this);
A.setAttribute("href",this.N$IOh);
A.addEventListener("click",function(A){
if($.N$pOh){
$.N$pOh($,A);
A.preventDefault();
}
});
A.addEventListener("contextmenu",function($){
return $.stopPropagation();
});
return A;
};
A.N$UOh=function($){
if(this.N$IOh!=$){
this.N$IOh=$;
this.N$uOh($,"href");
}
};
A.N$zOh=function($){
if(this.N$dOh!=$){
this.N$dOh=$;
this.N$uOh($,"target");
}
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$WOh","N$RCh",function(A,B){
function E(){
C._c.N$RCh.call(this);
this.N$xOh=this.N$XOh=this.N$Kdt=null;
this.constructor=E;
this.N$_id=++C._id;
}
B.N$tvt=function(){
return this.N$Kdt;
};
A.N$ROh=function(){
return"table";
};
B.N$oLh=function(){
var A=this,B=0;
function C($,A){
if(!$)return;
var C=$&&$.N$het();
C||(C=A/B);
$&&$.N$uOh(String(A),"colSpan");
($&&$.N$NCh()).style.width=-1==C?"":100*C+"%";
}
$.each(A.N$Kdt,function(A){
var C=0;
$.each(A&&A.N$VOh(),function($){
var A=$&&$.N$JOh();
A||(A=1);
C+=A;
});
C>B&&(B=C);
});
A.N$XOh&&A.N$XOh.remove();
var E=D.create("tr");
E.style.padding="0";
E.style.margin="0";
E.style.border="none";
for(var F=0;B>F;F++){
var G=D.create("td");
G.style.padding="0";
G.style.margin="0";
G.style.width=100/B+"%";
E.appendChild(G);
}
D.prepend(A.N$KOh(),E);
A.N$XOh=E;
$.each(A.N$Kdt,function(A){
var D=0,E=void 0;
$.each(A&&A.N$VOh(),function($){
var A=$&&$.N$JOh();
A||(A=1);
D+=A;
C($,A);
E=$;
});
D!=B&&C(E,1+(B-D));
});
};
B.N$XCh=function(){
var $=E.N$_super.prototype.N$XCh.call(this),A=D.create("tbody");
$.appendChild(A);
return A;
};
B.N$AOh=function(){
this.N$XOh&&this.N$XOh.remove();
this.N$Kdt=this.N$xOh=this.N$XOh=null;
var A=this.N$QOh().slice(0);
$.each(A,function($){
$&&$.N$Vkh();
});
};
B.N$OOh=function(){
var $,A=($=new C._c.N$GOh())&&$.init();
this.N$bCh(A);
this.N$Kdt||(this.N$Kdt=[]);
this.N$Kdt.push(A);
this.N$xOh=A;
return A;
};
B.N$YOh=function($){
this.N$xOh||this.N$OOh();
var A=C._c.N$eMh.N$ZOh($);
this.N$xOh&&this.N$xOh.N$tMh(A);
return A;
};
B.N$nMh=function(){
return this.N$YOh("th");
};
B.N$DOh=function(){
return this.N$YOh("td");
};
return E;
});
C._registerClass("N$GOh","N$RCh",function($,A){
function B(){
C._c.N$RCh.call(this);
this.N$rMh=null;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$iMh=function($){
this.N$rMh=$;
};
A.N$VOh=function(){
return this.N$rMh;
};
$.N$ROh=function(){
return"tr";
};
A.N$tMh=function($){
this.N$rMh||(this.N$rMh=[]);
this.N$rMh.push($);
this.N$bCh($);
};
return B;
});
C._registerClass("N$eMh","N$RCh",function($,A){
function B(){
C._c.N$RCh.call(this);
this.N$sMh=this.N$ret=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$oMh=function($){
this.N$sMh=$;
};
A.N$JOh=function(){
return this.N$sMh;
};
A.N$cet=function($){
this.N$ret=$;
};
A.N$het=function(){
return this.N$ret;
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$uMh",null,function($,A){
function B(){
this.N$aMh=null;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$fMh=function($){
this.N$aMh=$;
};
A.N$lMh=function(){
return this.N$aMh;
};
$.N$cMh=function($){
var A;
return(A=this.alloc())&&A.N$hMh([$]);
};
$.N$pMh=function($){
var A;
return(A=this.alloc())&&A.N$hMh($);
};
$.N$dMh=function($,A){
var B;
return(B=this.alloc())&&B.N$hMh([A,$]);
};
A.N$vMh=function($){
return this.N$hMh([$]);
};
A.N$hMh=function($){
var A=this;
(A=B.N$_super.prototype.init.call(this))&&(A.N$aMh=$);
return A;
};
A.description=function(){
return"<"+this.className()+" "+this.N$aMh.join(",")+">";
};
A.N$mMh=function($){
var A,B,C=this.N$aMh.slice(0);
C.push($);
return(A=(B=this.constructor)&&B.alloc())&&A.N$hMh(C);
};
A.N$gMh=function(){
var $,A,B=this.N$aMh.slice(0);
B.pop();
return($=(A=this.constructor)&&A.alloc())&&$.N$hMh(B);
};
A.N$yMh=function($){
if($>=this.N$aMh.length||0>$)throw new Error("Invalid position "+$);
return this.N$aMh[$];
};
A.N$bMh=function(){
return this.N$aMh.length;
};
A.N$wMh=function(){
return this.N$yMh(0);
};
A.N$EMh=function(){
return this.N$yMh(1);
};
return B;
});
}();
!function(){
"use strict";
var A={
Return:10,
Enter:13,
Escape:27,
Space:32,
Left:37,
Up:38,
Right:39,
Down:40,
Delete:46,
Backspace:8
},B=null,D=!1;
function E(){
if(D)return;
for(var C=48;90>=C;C++)A[String.fromCharCode(C)]=C;
B={};
$.each(A,function($,A){
B[$]=A;
});
D=!0;
}
C._registerClass("N$fOh",null,function(F){
function G(){
this.constructor=G;
this.N$_id=++C._id;
}
F.N$aOh=function($){
D||E();
return B[$];
};
F.N$SMh=function(B){
D||E();
var C=$.last(B.split(" "));
return A[C]||0;
};
F.N$xMh=function($){
return $>=37&&40>=$;
};
F.N$TMh=function($){
return $>=48&&57>=$;
};
F.N$NMh=function($){
return $-48;
};
return G;
});
}();
!function(){
"use strict";
var A=null;
C._registerClass("N$CMh",null,function(B,D){
function E(){
this.N$ILh=null;
this.constructor=E;
this.N$_id=++C._id;
}
B.N$Si=function(){
var $;
A||(A=($=this.alloc())&&$.init());
return A;
};
D.init=function(){
var $=this;
if($=E.N$_super.prototype.init.call(this)){
$.N$ILh=[];
navigator.requestMIDIAccess&&navigator.requestMIDIAccess().then(function(A){
A.inputs.forEach(function(A){
A.onmidimessage=function(A){
if(A.data&&A.data.length){
var B=A.data;
$.N$kMh(B);
}
};
});
});
}
return $;
};
D.N$lAh=function($){
this.N$ILh.push($);
};
D.N$cAh=function(A){
this.N$ILh=$.without(this.N$ILh,A);
};
D.N$kMh=function(A){
if(144==(240&A[0])){
var B=A[1]||0,C=A[2]||0;
B&&C&&$.each(this.N$ILh,function($){
$&&$.N$LMh(B);
});
}
};
return E;
});
}();
!function(){
"use strict";
C._registerClass("N$mCh","N$RCh",function($,A){
function B(){
C._c.N$RCh.call(this);
this.N$OAh=null;
this.constructor=B;
this.N$_id=++C._id;
}
$.N$WCh=function(){
return"_n1a";
};
A.N$XCh=function(){
var $,A=B.N$_super.prototype.N$XCh.call(this);
A.setAttribute("role","dialog");
this.N$OAh=($=new C._c.N$XAh())&&$.N$WAh(A,1,this);
return A;
};
A.N$GAh=function(){
return!0;
};
A.N$nOh=function(){};
return B;
});
}();
!function(){
"use strict";
var A=[];
C._registerClass("N$vCh",null,function(B,D){
function E(){
this.N$AMh=this.N$OMh=this.N$MMh=this.N$DMh=this.N$PMh=this.N$HMh=null;
this.N$BMh=!1;
this.constructor=E;
this.N$_id=++C._id;
}
D.N$jMh=function(){
return this.N$DMh;
};
D.N$FMh=function(){
return this.N$AMh;
};
D.N$qMh=function(){
return this.N$BMh;
};
B.N$RMh=function(){
return A.length>0;
};
B.N$dCh=function($,A){
var B;
return(B=this.alloc())&&B.N$UMh($,A);
};
D.N$UMh=function($,B){
var D,F,G,H=this;
if(H=E.N$_super.prototype.init.call(this)){
var I=C._c.N$RCh.N$JCh("_r1a"),J=C._c.N$RCh.N$JCh("_i1a");
H.N$DMh=$;
H.N$AMh=B;
1!=((D=C._c.N$ukh.N$Ckh())&&D.N$fLh())&&I&&I.N$hCh("_s1a");
var K=J&&J.N$NCh(),L=I&&I.N$NCh();
document.body.appendChild(K);
document.body.appendChild(L);
H.N$HMh=(F=new C._c.N$XAh())&&F.N$WAh(K,1,H);
H.N$MMh=(G=new C._c.N$XAh())&&G.N$WAh(L,1,H);
var M=C._c.N$zMh.N$Si();
M&&M.N$WMh(K);
M&&M.N$WMh(L);
H.N$PMh=J;
H.N$OMh=I;
A.push(H);
document.body.classList.add("_o1a");
H.N$OMh&&H.N$OMh.N$bCh(H.N$DMh);
}
return H;
};
D.N$XMh=function($){
this.N$BMh=$;
var A="_u1a";
this.N$OMh&&this.N$OMh.N$okh(A,$);
this.N$PMh&&this.N$PMh.N$okh(A,$);
};
D.N$TCh=function(){
return this.N$PMh&&this.N$PMh.N$S4();
};
D.N$GAh=function(){
return!0;
};
D.N$nOh=function(){};
D.N$rOh=function($){
$&&$.N$KAh()&&this.N$AMh&&this.N$AMh(this);
};
D.N$HCh=function(){
var B,D=this.N$PMh&&this.N$PMh.N$NCh(),E=this.N$OMh&&this.N$OMh.N$NCh();
D&&D.parentNode&&D.parentNode.removeChild(D);
E&&E.parentNode&&E.parentNode.removeChild(E);
A=$.without(A,this);
0==A.length&&document.body.classList.remove("_o1a");
(B=C._c.N$KMh.N$JMh())&&B.N$VMh("ModalSessionDidEndNotification",this);
};
return E;
});
}();
!function(){
"use strict";
C._g.N$vNh=function($){
var A,B,D,E,F,G,H=(A=(B=C._c.N$QMh)&&B.alloc())&&A.init();
(D=H)&&D.N$Ii($);
(E=(F=C._c.N$Ei)&&F.N$Si())&&E.N$xi(H);
return(G=H)&&G.N$GMh();
};
C._registerClass("N$QMh","N$ji",function(A,B){
function E(){
C._c.N$ji.call(this);
this.N$YMh=this.N$ZMh=this.N$eDh=null;
this.N$tDh=this.N$nDh=0;
this.N$rDh=!1;
this.constructor=E;
this.N$_id=++C._id;
}
B.N$iDh=function($){
this.N$rDh=$;
};
B.N$sDh=function(){
return this.N$rDh;
};
B.N$oDh=function($){
this.N$tDh=$;
};
B.N$uDh=function(){
return this.N$tDh;
};
B.N$aDh=function(){
if(!this.N$eDh)return;
var A=D.create("span",null,this.N$eDh),B=this.N$nDh;
1&B&&(A.style.fontWeight="bold");
2&B&&(A.style.fontStyle="italic");
4&B&&(A=D.create("sup",null,[A]));
8&B&&(A=D.create("sub",null,[A]));
32768&B&&A.classList.add("use-theory-font");
65536&B&&A.classList.add("invalid");
var C=$.last(this.N$YMh);
C&&C.appendChild(A);
this.N$eDh=null;
};
B.N$fDh=function($,A){
var B=D.create("span",{
"class":$
});
this.N$YMh.push(B);
A();
this.N$aDh();
var C=this.N$YMh.pop();
C&&this.N$ZMh.appendChild(C);
};
B.N$lDh=function($,A){
A!=this.N$nDh&&this.N$aDh();
this.N$eDh?this.N$eDh+=$:this.N$eDh=$;
this.N$nDh=A;
};
B.N$cDh=function($){
if(-4==$)return"bbbb";
if(-3==$)return"bbb";
if(-2==$)return"bb";
if(-1==$)return"b";
if(0==$)return"n";
if(1==$)return"#";
if(2==$)return"x";
if(3==$)return"#x";
if(4==$)return"xx";
var A="";
if(-4>$||$>4){
for(var B=$;B-->0;)A+="#";
B=$;
for(;B++<0;)A+="b";
}
return A;
};
B.N$Hi=function(){
this.N$ZMh=D.create("span",{
"class":"MusicType"
});
this.N$YMh=[this.N$ZMh];
};
B.N$Ai=function($){
this.N$lDh(this.N$cDh($),32768);
};
B.N$Ni=function($,A){
this.N$lDh($,A);
};
B.N$Pi=function($,A,B,C){
this.N$Di($,A,B,C,void 0);
};
B.N$Di=function($,A,B,C,D){
var E=this;
this.N$fDh("MusicType-note",function(){
var A=C?65536:0,F=E.N$rDh?32768:0;
E.N$lDh($,F|A);
0!=B&&E.N$lDh(E.N$cDh(B),32768|A);
void 0!==D&&null!==D&&E.N$lDh(""+D,4|A);
});
};
B.N$ki=function($,A){
var B=this;
this.N$fDh("MusicType-lone-quality-and-number",function(){
"h"==$&&($=String.fromCharCode(248));
B.N$lDh($,32768);
B.N$lDh(""+A,0);
});
};
B.N$Li=function($,A){
"h"==$&&($=String.fromCharCode(248));
this.N$lDh($,32768|A);
};
B.N$Oi=function($,A){
var B=this;
this.N$fDh("MusicType-scale-degree",function(){
var C="";
(1==A||-1==A)&&(C+=B.N$cDh(A));
C+="^"+$;
B.N$lDh(C,32768);
});
};
B.N$Ci=function($){
"up"==$?this.N$lDh(String.fromCharCode(8593),32768):"down"==$?this.N$lDh(String.fromCharCode(8595),32768):"blank"==$&&this.N$lDh("__",32768);
};
B.N$Mi=function($,A,B,C,D){
var E=this;
this.N$fDh("MusicType-roman-numeral",function(){
-100!=A&&E.N$lDh(E.N$cDh(A),32768);
var F=E.N$rDh?32768:0;
E.N$lDh($,F);
if(B){
"h"==B&&(B=String.fromCharCode(248));
E.N$lDh(B,32772);
}
D&&E.N$lDh(""+D,32776);
C&&E.N$lDh(""+C,32772);
});
};
B.N$GMh=function(){
this.N$eDh&&this.N$aDh();
return this.N$ZMh;
};
return E;
});
}();
!function(){
"use strict";
C._registerClass("N$hDh","N$RCh",function(A,B){
function E(){
C._c.N$RCh.call(this);
this.N$pDh=this.N$dDh=this.N$vDh=this.N$tet=this.N$mDh=null;
this.N$zNh=0;
this.N$gDh=!1;
this.constructor=E;
this.N$_id=++C._id;
}
B.N$yDh=function(){
return this.N$mDh;
};
B.N$bDh=function($){
this.N$gDh=$;
};
B.N$wDh=function(){
return this.N$gDh;
};
A.N$WCh=function(){
return"_a1a";
};
B.N$EDh=function($){
var A=this;
if(A=E.N$_super.prototype.init.call(this)){
A.N$mDh=$;
A.N$tet=[];
}
return A;
};
B.N$XCh=function(){
var $=E.N$_super.prototype.N$XCh.call(this),A=D.create("div",{
"class":"_f1a"
});
$.appendChild(A);
return A;
};
B.N$SDh=function(){
var $=C._c.N$QCh.N$JCh("_l1a"),A=C._c.N$RCh.N$JCh("_c1a");
$&&$.N$zrt("Back");
$&&$.N$OCh(this,"N$xDh");
$&&$.N$bCh(A);
this.N$bCh($);
return $;
};
B.N$TDh=function(){
var $=D.create("div",{
"class":"_h1a"
});
this.N$NCh().appendChild($);
return $;
};
B.N$xDh=function(){
this.N$mDh&&this.N$mDh.N$NDh(!0);
};
B.N$CDh=function($){
if($&&$.N$kDh())return 44;
var A=$&&$.N$Xat(),B=D.create("span",{
"class":"_p1a"
});
B.innerHTML=A;
document.body.appendChild(B);
var C=B.offsetWidth;
B.remove();
return C;
};
B.N$LDh=function(){
return this.N$NCh().clientWidth;
};
B.N$ADh=function($,A,B){
var E,F=(this.N$CDh($),this.N$CDh(A),this.N$vDh),G=(E=new C._c.N$MDh())&&E.N$ODh(A);
this.N$bCh(G);
var H=this.N$pDh,I=this.N$tet.length>1?this.N$pDh||this.N$SDh():null,J=H!=I,K=this.N$dDh,L=A&&A.N$kDh()?this.N$dDh||this.N$TDh():null,M=K!=L;
this.N$vDh=G;
this.N$pDh=I;
this.N$dDh=L;
var N=F&&F.N$DDh(),O=G&&G.N$DDh(),P=this.N$NCh().getBoundingClientRect().width,Q=18,R=0,S=0,T=0,U=0;
if(B){
S=-(N-Q);
T=P-O;
}else{
S=P-N;
T=-(O-Q);
}
var V=F&&F.N$S4(),W=G&&G.N$S4(),X=I&&I.N$S4(),Y=H&&H.N$S4(),Z=L?L.style:null,_=K?K.style:null;
D.stop(this.N$zNh);
this.N$zNh=D.animate(300,function($){
$=D.ease($);
var A=String($),B=String(1-$);
if(V){
V.opacity=B;
V.left=D.lerp(R,S,$)+"px";
}
if(W){
W.opacity=A;
W.left=D.lerp(T,U,$)+"px";
}
if(J){
X&&(X.opacity=A);
Y&&(Y.opacity=B);
}
if(M){
Z&&(Z.opacity=A);
_&&(_.opacity=B);
}
},function(){
F&&F.N$Vkh();
I||H&&H.N$Vkh();
L||D.remove(K);
});
};
B.N$PDh=function(A){
A==$.last(this.N$tet)&&this.N$HDh();
};
B.N$HDh=function(){
var A,B=$.last(this.N$tet);
this.N$pDh&&this.N$pDh.N$Vkh();
this.N$vDh&&this.N$vDh.N$Vkh();
D.remove(this.N$dDh);
this.N$vDh=(A=new C._c.N$MDh())&&A.N$ODh(B);
this.N$bCh(this.N$vDh);
this.N$pDh=this.N$tet.length>1?this.N$SDh():null;
this.N$dDh=B&&B.N$kDh()?this.N$TDh():null;
};
B.N$BDh=function(A,B){
var C=$.last(this.N$tet);
this.N$tet.push(A);
C&&C.N$jDh(null);
A&&A.N$jDh(this);
B?this.N$ADh(C,A,!0):this.N$HDh();
};
B.N$FDh=function(A){
var B=this.N$tet.pop(),C=$.last(this.N$tet);
B&&B.N$jDh(null);
C&&C.N$jDh(this);
A?this.N$ADh(B,C,!1):this.N$HDh();
};
return E;
});
C._registerClass("N$MDh","N$RCh",function($,A){
function B(){
C._c.N$RCh.call(this);
this.N$IDh=null;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$qDh=function(){
return this.N$IDh;
};
$.N$WCh=function(){
return"_d1a";
};
A.N$ODh=function($){
var A=this;
(A=B.N$_super.prototype.init.call(this))&&(A.N$IDh=$);
return A;
};
A.N$XCh=function(){
var $=B.N$_super.prototype.N$XCh.call(this),A=void 0;
if(this.N$IDh&&this.N$IDh.N$kDh())A=D.create("div",{
"class":"_v1a"
});else{
A=D.create("div",{
"class":"_m1a"
});
A.innerHTML=this.N$IDh&&this.N$IDh.N$Xat();
}
$.appendChild(A);
return A;
};
A.N$DDh=function(){
var $=this.N$NCh().getBoundingClientRect(),A=this.N$KOh().getBoundingClientRect();
return A.left-$.left;
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$RDh","N$UDh",function(A,B){
function E(){
C._c.N$UDh.call(this);
this.N$INh=this.N$zDh=this.N$WDh=null;
this.N$XDh=0;
this.constructor=E;
this.N$_id=++C._id;
}
B.N$VDh=function(){
return this.N$WDh;
};
B.N$nCh=function($){
this.N$INh=$;
};
B.N$rCh=function(){
return this.N$INh;
};
B.N$jDh=function($){
this.N$zDh=$;
};
B.N$JDh=function(){
return this.N$zDh;
};
A.N$WCh=function(){
return"_g1a";
};
B.N$KDh=function($){
var A,B=this;
if(B=E.N$_super.prototype.init.call(this)){
B.N$WDh=[$];
B.N$zDh=(A=new C._c.N$hDh())&&A.N$EDh(B);
}
return B;
};
B.N$QDh=function(){
E.N$_super.prototype.N$QDh.call(this);
this.N$GDh(null,this.N$YDh(),!1,!0);
};
B.N$ZDh=function($){
var A;
this.N$ePh($);
(A=this.N$YDh())&&A.N$ZDh($);
};
B.N$tPh=function($){
var A;
this.N$nPh($);
(A=this.N$YDh())&&A.N$tPh($);
};
B.N$rPh=function($){
var A;
this.N$iPh($);
(A=this.N$YDh())&&A.N$rPh($);
};
B.N$sPh=function($){
var A;
this.N$oPh($);
(A=this.N$YDh())&&A.N$sPh($);
};
B.N$GDh=function($,A,B,E){
var F,G,H=this;
if(this.N$XDh){
D.stop(this.N$XDh);
this.N$XDh=0;
}
var I=E?$:A,J=E?A:$,K=I&&I.N$eLh(),L=J&&J.N$eLh(),M=K&&K.N$NCh(),N=L&&L.N$NCh();
function O($){
var A=D.lerp(Q,R,D.ease($)),B=A+320;
M&&(M.style.transform="translate3d("+A+"px, 0, 0)");
N&&(N.style.transform="translate3d("+B+"px, 0, 0)");
}
function P(){
var B,D;
(B=H.N$eLh())&&B.N$bCh(A&&A.N$eLh());
(D=$&&$.N$eLh())&&D.N$Vkh();
A&&A.N$uPh(H);
$&&$.N$aPh();
$&&$.N$oPh(!0);
A&&A.N$nPh(!0);
C._c.N$lPh.N$fPh();
H.N$INh&&H.N$INh.respondsToSelector_("N$cPh")&&H.N$INh&&H.N$INh.N$cPh(H,A,!1);
}
var Q=E?0:-320,R=E?-320:0;
H.N$INh&&H.N$INh.respondsToSelector_("N$hPh")&&H.N$INh&&H.N$INh.N$hPh(H,A,!0);
A&&A.N$eLh();
$&&$.N$rPh(B);
A&&A.N$ZDh(B);
O(0);
(F=H.N$eLh())&&F.N$bCh(K);
(G=H.N$eLh())&&G.N$bCh(L);
H.N$pPh(A);
$&&$.N$dPh(null);
if(B)H.N$XDh=D.animate(300,O,P);else{
O(1);
P();
}
E?H.N$zDh&&H.N$zDh.N$BDh(A&&A.N$vPh(),B):H.N$zDh&&H.N$zDh.N$FDh(B);
};
B.N$mPh=function($,A){
var B=this.N$YDh();
this.N$WDh.push($);
this.N$GDh(B,$,A,!0);
};
B.N$NDh=function($){
if(this.N$WDh.length<=1)return;
var A=this.N$WDh.pop(),B=this.N$YDh();
this.N$GDh(A,B,$,!1);
};
B.N$gPh=function(A,B){
var C=$.indexOf(this.N$WDh,A),D=this.N$YDh(),E=(this.N$WDh.splice(C+1,this.N$WDh.length-(C+1)),
this.N$YDh());
this.N$GDh(D,E,B,!1);
};
B.N$yPh=function($){
if(this.N$WDh.length<=1)return;
this.N$gPh(this.N$WDh[0],$);
};
B.N$YDh=function(){
var $=this.N$WDh?this.N$WDh.length:0;
return $?this.N$WDh[$-1]:null;
};
B.N$bPh=function(){
return this.N$YDh();
};
B.N$wPh=function($,A){
if(this.N$WDh!=$){
var B=this.N$YDh();
this.N$WDh=$;
var C=this.N$YDh();
this.N$GDh(B,C,A,!0);
}
};
B.N$EPh=function($){
this.N$wPh($,!1);
};
return E;
});
}();
!function(){
"use strict";
C._registerClass("N$SPh",null,function($,A){
function B(){
this.N$zDh=this.N$Ypt=this.N$xPh=null;
this.N$TPh=!1;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$NPh=function($){
this.N$xPh=$;
};
A.N$CPh=function(){
return this.N$xPh;
};
A.N$jDh=function($){
this.N$zDh=$;
};
A.N$JDh=function(){
return this.N$zDh;
};
A.N$Plt=function($){
var A=this.N$Ypt;
if(A!==$){
this.N$Ypt=$;
this.N$kPh(A);
}
};
A.N$Xat=function(){
return this.N$Ypt;
};
A.N$LPh=function($){
var A=this.N$TPh;
if(A!==$){
this.N$TPh=$;
this.N$kPh(A);
}
};
A.N$kDh=function(){
return this.N$TPh;
};
A.N$kPh=function(){
this.N$zDh&&this.N$zDh.N$PDh(this);
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$APh",null,function($,A){
function B(){
this.N$yat=this.N$OPh=this.N$MPh=null;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Cat=function(){
return this.N$yat;
};
A.N$DPh=function(){
return this.N$OPh;
};
A.N$PPh=function(){
return this.N$MPh;
};
$.N$HPh=function($,A){
var B;
return(B=this.alloc())&&B.N$BPh($,A,null);
};
$.N$jPh=function($,A,B){
var C;
return(C=this.alloc())&&C.N$BPh($,A,B);
};
A.N$BPh=function($,A,C){
var D=this;
if(D=B.N$_super.prototype.init.call(this)){
D.N$yat=$;
D.N$OPh=A;
D.N$MPh=C;
}
return D;
};
return B;
});
}();
!function(){
"use strict";
var A=void 0;
C._registerClass("N$KMh",null,function(B,D){
function E(){
this.N$FPh=null;
this.constructor=E;
this.N$_id=++C._id;
}
B.N$JMh=function(){
var $;
A||(A=($=this.alloc())&&$.init());
return A;
};
D.N$IPh=function($,A,B,C){
this.N$FPh||(this.N$FPh=[]);
this.N$FPh.push({
observer:$,
selector:A,
name:B,
object:C
});
};
D.N$qPh=function($){
this.N$RPh($,null,null);
};
D.N$RPh=function(A,B,C){
this.N$FPh=$.filter(this.N$FPh,function($){
var D=!1;
$.observer==A&&(B&&B!=$.name||C&&C!=$.object||(D=!0));
return!D;
});
};
D.N$UPh=function(A){
var B=A&&A.N$Cat(),C=A&&A.N$DPh();
$.each(this.N$FPh,function($){
var D;
$.name==B&&(C&&$.object&&C!=$.object||(D=$.observer)&&D.performSelector_withObject_($.selector,A));
});
};
D.N$VMh=function($,A){
this.N$zPh($,A,null);
};
D.N$zPh=function($,A,B){
this.N$UPh(C._c.N$APh.N$jPh($,A,B));
};
return E;
});
}();
!function(){
"use strict";
C._registerClass("N$Akh","N$RCh",function($,A){
function B(){
C._c.N$RCh.call(this);
this.N$WPh=this.N$XPh=this.N$VPh=null;
this.N$gkh=0;
this.N$JPh=this.N$KPh=!1;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Ukh=function(){
return this.N$XPh;
};
A.N$zkh=function(){
return this.N$KPh;
};
A.N$QPh=function(){
return this.N$JPh;
};
A.N$Okh=function($){
var A=this.N$gkh;
if(A!==$){
this.N$gkh=$;
this.N$GPh(A);
}
};
A.N$YPh=function(){
return this.N$gkh;
};
A.N$Lkh=function($,A){
var C=this;
if(C=B.N$_super.prototype.init.call(this)){
C.N$XPh=$;
C.N$KPh=A;
}
return C;
};
A.N$XCh=function(){
var $=B.N$_super.prototype.N$XCh.call(this);
this.N$Jkh();
return $;
};
A.N$Rkh=function(){
return!this.N$NCh().parentElement;
};
A.N$GPh=function(){
var $=this.N$NCh();
$.style.height=$.style.lineHeight=this.N$gkh+"px";
};
A.N$Jkh=function(){
var $=this,A=this.N$NCh(),B=A.style;
B.textAlign="center";
B.fontSize="13px";
B.fontFamily="-apple-system, Helvetica, Arial, sans";
B.color="#808080";
B.overflow="hidden";
B.setProperty("display","block","important");
B.setProperty("visibility","visible","important");
if(window.top!=window){
B.position="fixed";
B.width="100%";
B.zIndex="500";
B.bottom="0px";
B.backgroundColor="#fcfcfc";
}
this.N$GPh();
if(!(this.N$VPh&&this.N$VPh.parentElement&&this.N$WPh&&this.N$WPh.parentElement)){
D.empty(A);
this.N$VPh=null;
this.N$WPh=null;
}
if(!this.N$VPh||!this.N$WPh){
var C=D.create("span"),E=C.style;
E.display="inline-block";
E.userSelect="none";
E.MozUserSelect="-moz-none";
E.msUserSelect="none";
E.webkitUserSelect="none";
E.webkitFontSmoothing="subpixel-antialiased";
E.setProperty("display","inline-block","important");
E.setProperty("visibility","visible","important");
var F=D.create("a",{
href:"/products"
}),G=F.style;
G.color="#202020";
G.fontWeight="bold";
G.textDecoration="none";
G.cursor="pointer";
G.setProperty("display","inline","important");
G.setProperty("visibility","visible","important");
F.textContent=this.N$KPh?"purchase the musictheory.net apps":"purchase our apps";
D.listen(F,"mouseover",function(){
G.textDecoration="underline";
});
D.listen(F,"mouseout",function(){
G.textDecoration="none";
});
D.append(C,["If this "+$.N$XPh+" helps you, please ",F,$.N$KPh?".":" to support our site."]);
$.N$VPh=C;
$.N$WPh=F;
A.appendChild($.N$VPh);
}
};
return B;
});
}();
!function(){
"use strict";
var $=null,A=null,B=0,E=!1;
function F(){
if(B){
clearTimeout(B);
B=0;
}
$=null;
}
function G($,C){
F();
A&&(B=setTimeout(function(){
A($,C);
},500));
}
function H($){
F();
A(C._g.N$s($.pageX,$.pageY),!1);
$.stopPropagation();
$.preventDefault();
}
function I(A){
if(A==$)return;
var B=A.touches.length>0?A.touches[0]:null;
if(!B)return;
G(C._g.N$s(B.pageX,B.pageY),!0);
}
function J(A){
if(A==$)return;
G(C._g.N$s(A.pageX,A.pageY),!1);
}
var K=void 0;
C._registerClass("N$zMh",null,function(B,G){
function L(){
this.constructor=L;
this.N$_id=++C._id;
}
B.N$Si=function(){
var $;
K||(K=($=this.alloc())&&$.init());
return K;
};
G.N$WMh=function(A){
D.listen(A,"contextmenu",function($){
$.stopPropagation();
$.preventDefault();
});
D.listen(A,"touchstart",function(A){
$=A;
});
D.listen(A,"mousedown",function(A){
$=A;
});
};
G.N$ZPh=function($){
var B=document.documentElement;
if(A){
B.removeEventListener("contextmenu",H,!1);
B.removeEventListener("touchstart",I,!1);
B.removeEventListener("mousedown",J,!1);
}
A=$;
if(A){
if(!E){
B.addEventListener("contextmenu",F,!0);
B.addEventListener("touchstart",F,!0);
B.addEventListener("touchcancel",F,!0);
B.addEventListener("touchend",F,!0);
B.addEventListener("mousedown",F,!0);
B.addEventListener("mouseup",F,!0);
E=!0;
}
B.addEventListener("contextmenu",H,!1);
B.addEventListener("touchstart",I,!1);
B.addEventListener("mousedown",J,!1);
}
};
return L;
});
}();
!function(){
"use strict";
C._registerClass("N$eHh",null,function($,A){
function B(){
this.N$tHh=this.N$nHh=this.N$rHh=this.N$INh=this.N$UNh=this.N$iHh=null;
this.N$zNh=0;
this.N$sHh=this.N$KNh=!1;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$oHh=function(){
return this.N$rHh;
};
A.N$uHh=function(){
return this.N$iHh;
};
A.N$aHh=function(){
return this.N$sHh;
};
A.N$tCh=function(){
return this.N$KNh;
};
A.N$nCh=function($){
this.N$INh=$;
};
A.N$rCh=function(){
return this.N$INh;
};
A.N$fHh=function($){
this.N$nHh=$;
};
A.N$lHh=function(){
return this.N$nHh;
};
A.N$cHh=function($,A,C){
var D=this;
if(D=B.N$_super.prototype.init.call(this)){
D.N$INh=$;
D.N$rHh=A;
D.N$iHh=C;
}
return D;
};
A.N$lCh=function($){
var A,B=this;
if(this.N$KNh)return;
this.N$KNh=!0;
function E(){
B.N$pCh(!0);
B.N$INh&&B.N$INh.respondsToSelector_("N$hHh")&&B.N$INh&&B.N$INh.N$hHh(B);
}
B.N$tHh=(A=new C._c.N$dHh())&&A.N$pHh(B.N$rHh,!0);
B.N$tHh&&B.N$tHh.N$okh("_y1a",B.N$sHh);
B.N$UNh=C._c.N$vCh.N$dCh(B.N$tHh,E);
B.N$UNh&&B.N$UNh.N$XMh(!0);
B.N$INh&&B.N$INh.respondsToSelector_("N$vHh")&&B.N$INh&&B.N$INh.N$vHh(B);
B.N$tHh&&B.N$tHh.N$mHh(B.N$nHh,B.N$iHh);
var F=B.N$tHh&&B.N$tHh.N$NCh();
D.stop(B.N$zNh);
if($){
var G=B.N$UNh&&B.N$UNh.N$TCh();
B.N$zNh=D.animate(250,function($){
$=D.ease($);
var A=D.lerp(.85,1,$);
D.transform(F,0,0,A,A,$);
G.opacity=String($);
},function(){
C._c.N$lPh.N$fPh();
});
}
};
A.N$pCh=function($){
if(!this.N$KNh)return;
this.N$KNh=!1;
var A=this.N$UNh,B=this.N$tHh,C=B&&B.N$NCh();
this.N$UNh=null;
this.N$tHh=null;
D.stop(this.N$zNh);
if($){
var E=A&&A.N$TCh();
this.N$zNh=D.animate(250,function($){
$=D.ease($);
var A=D.lerp(1,.85,$),B=D.lerp(1,0,$);
D.transform(C,0,0,A,A,B);
E.opacity=String(B);
},function(){
A&&A.N$HCh();
});
}else A&&A.N$HCh();
};
A.N$gHh=function($){
if(this.N$sHh!=$){
this.N$sHh=$;
this.N$tHh&&this.N$tHh.N$yHh("_y1a");
}
};
return B;
});
C._registerClass("N$dHh","N$mCh",function($,A){
function B(){
C._c.N$mCh.call(this);
this.N$bHh=this.N$rHh=null;
this.N$wHh=!1;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$oHh=function(){
return this.N$rHh;
};
A.N$EHh=function(){
return this.N$wHh;
};
$.N$WCh=function(){
return"_b1a";
};
A.N$pHh=function($,A){
var C=this;
if(C=B.N$_super.prototype.init.call(this)){
C.N$rHh=$;
C.N$wHh=A;
}
return C;
};
A.N$XCh=function(){
var $=B.N$_super.prototype.N$XCh.call(this),A=D.create("div",{
"class":"_w1a"
});
$.appendChild(A);
if(this.N$wHh){
var C=D.create("div",{
"class":"_x1a"
});
$.appendChild(C);
this.N$bHh=C;
}
return A;
};
A.N$VCh=function(){
B.N$_super.prototype.N$VCh.call(this);
if(this.N$rHh&&this.N$rHh.isKindOfClass_(C._c.N$RDh)){
var $=this.N$rHh;
this.N$hCh("_k1a");
this.N$bCh($&&$.N$JDh());
}
this.N$bCh(this.N$rHh&&this.N$rHh.N$eLh());
};
A.N$mHh=function($,A){
var B=this.N$NCh(),C=this.N$S4();
$&&$.width&&(C.width=$.width+"px");
$&&$.height&&(C.height=$.height+"px");
var D=(A&&A.N$NCh()).getBoundingClientRect(),E=B.getBoundingClientRect(),F=this.N$bHh.getBoundingClientRect(),G=F.width/2,H=Math.round(D.width/2-(E.left-D.left)-G);
this.N$bHh.style.left=H+"px";
C.transformOrigin=Math.round(100*(H+G)/E.width)+"% 0%";
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$SHh","N$RCh",function($,A){
function B(){
C._c.N$RCh.call(this);
this.N$xHh=null;
this.N$THh=this.N$NHh=this.N$CHh=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.init=function(){
var $=this;
if($=B.N$_super.prototype.init.call(this)){
$.N$xHh=C._c.N$LHh.N$kHh(function(A){
$.N$AHh(A);
});
$.N$OHh($.N$xHh);
}
return $;
};
A.N$MHh=function($,A,B){
if(this.N$NHh!=$||this.N$THh!=A||this.N$CHh!=B){
this.N$NHh=$;
this.N$THh=A;
this.N$CHh=B;
this.N$xHh&&this.N$xHh.N$DHh();
}
};
A.N$AHh=function($){
var A=C._g.N$E(this.N$PHh(),0,3),B=C._g.N$y(A),D=C._g.N$y(A),E=B.height/2;
D.x=Math.ceil(D.width*(this.N$NHh/this.N$THh));
D.width=Math.floor(D.width*(this.N$CHh/this.N$THh));
if(D.x<0){
D.width+=D.x;
D.x=0;
}else C._g.N$L(D)>A.width&&(D.width=A.width-D.x);
$&&$.N$HHh();
$&&$.N$BHh(B,E);
$&&$.N$jHh(C._g.N$ONh(4934994,1));
$&&$.N$HHh();
$&&$.N$BHh(D,E);
$&&$.N$jHh(C._g.N$ONh(14869220,1));
};
return B;
});
}();
!function(){
"use strict";
function $($){
var A=0;
do{
A+=$.offsetTop||0;
$=$.offsetParent;
}while($);
return A;
}
C._registerClass("N$lPh","N$RCh",function(A,B){
function E(){
C._c.N$RCh.call(this);
this.N$INh=this.N$FHh=null;
this.N$zNh=0;
this.constructor=E;
this.N$_id=++C._id;
}
B.N$rCh=function(){
return this.N$INh;
};
A.N$fPh=function(){
var $;
($=C._c.N$KMh.N$JMh())&&$.N$VMh("ScrollViewFlashIndicatorsNotification",this);
};
A.N$WCh=function(){
return"_j1a";
};
B.N$XCh=function(){
var $,A=E.N$_super.prototype.N$XCh.call(this),B=D.create("div",{
"class":"_q1a"
});
($=C._c.N$KMh.N$JMh())&&$.N$IPh(this,"N$fPh","ScrollViewFlashIndicatorsNotification",null);
A.appendChild(B);
A.style.overflowY="scroll";
void 0!==A.style.webkitOverflowScrolling&&(A.style.webkitOverflowScrolling="touch");
return B;
};
B.N$fPh=function(){
var $=this.N$NCh(),A=$.scrollTop;
$.scrollTop=A>0?A-1:A+1;
$.scrollTop=A;
};
B.N$IHh=function(A){
var B=this.N$NCh(),C=A&&A.N$NCh(),E=$(B),F=$(C),G=B.clientHeight,H=C.clientHeight,I=F-E+Math.round((G+H)/2)-G,J=B.scrollTop,K=I;
D.stop(this.N$zNh);
this.N$zNh=D.animate(100,function($){
B.scrollTop=D.lerp(J,K,D.easeInOut($));
});
};
B.N$qHh=function(A){
var B=this.N$NCh(),C=A&&A.N$NCh(),E=B.clientHeight,F=B.scrollTop,G=$(B),H=$(C),I=H+C.clientHeight,J=H-G,K=I-G,L=void 0;
K>F+E?L=K+1-E:F>J&&(L=J);
if(void 0!==L){
D.stop(this.N$zNh);
this.N$zNh=D.animate(100,function($){
B.scrollTop=D.lerp(F,L,D.easeInOut($));
});
}
};
B.N$nCh=function($){
var A=this;
if(this.N$INh!=$){
this.N$INh=$;
if(this.N$FHh){
D.unlisten(this.N$NCh(),"scroll",this.N$FHh);
this.N$FHh=null;
}
if(this.N$INh&&this.N$INh.respondsToSelector_("N$RHh")){
this.N$FHh=function(){
$&&$.N$RHh(A);
};
D.listen(A.N$NCh(),"scroll",A.N$FHh);
}
}
};
B.N$UHh=function(){
var $=this.N$NCh();
return C._g.N$s($.scrollLeft,$.scrollTop);
};
B.N$zHh=function($){
var A=this.N$NCh();
A.scrollLeft=$.x;
A.scrollTop=$.y;
};
return E;
});
}();
!function(){
"use strict";
C._registerClass("N$WHh","N$QCh",function($,A){
function B(){
C._c.N$QCh.call(this);
this.N$XHh=this.N$VHh=this.N$JHh=this.N$KHh=this.N$Ypt=null;
this.N$QHh=this.N$wAh=this.N$GHh=this.N$YHh=this.N$ZHh=this.N$rn=0;
this.N$eBh=this.N$tBh=!1;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Ylt=function($){
this.N$rn=$;
};
A.N$Wn=function(){
return this.N$rn;
};
A.N$Xat=function(){
return this.N$Ypt;
};
A.N$SAh=function(){
return this.N$wAh;
};
A.N$nBh=function($){
var A=this.N$eBh;
if(A!==$){
this.N$eBh=$;
this.N$tOh(A);
}
};
A.N$rBh=function(){
return this.N$eBh;
};
A.N$iBh=function(){
return this.N$tBh;
};
A.N$sBh=function($){
this.N$KHh=$;
};
A.N$oBh=function(){
return this.N$KHh;
};
A.N$aBh=function($){
var A=this.N$QHh;
if(A!==$){
this.N$QHh=$;
this.N$uBh(A);
}
};
A.N$fBh=function(){
return this.N$QHh;
};
A.N$lBh=function($){
var A=this.N$ZHh;
if(A!==$){
this.N$ZHh=$;
this.N$uBh(A);
}
};
A.N$cBh=function(){
return this.N$ZHh;
};
A.N$hBh=function($){
var A=this.N$YHh;
if(A!==$){
this.N$YHh=$;
this.N$uBh(A);
}
};
A.N$pBh=function(){
return this.N$YHh;
};
$.N$WCh=function(){
return"_z1a";
};
A.init=function(){
var $=this;
if($=B.N$_super.prototype.init.call(this)){
var A=C._g.N$hNh();
$.N$ZHh=A?12:11;
$.N$YHh=A?2:0;
}
return $;
};
A.N$XCh=function(){
var $=B.N$_super.prototype.N$XCh.call(this),A=D.create("div",{
"class":"_e2a"
}),C=D.create("div",{
"class":"_t2a"
});
$.setAttribute("role","button");
$.appendChild(C);
C.appendChild(A);
this.N$XHh=C;
this.N$VHh=A;
this.N$uBh();
return A;
};
A.N$tOh=function(){
B.N$_super.prototype.N$tOh.call(this);
this.N$okh("selected",this.N$rBh());
this.N$dBh();
};
A.N$dBh=function(){
var $=!1;
$=C._g.N$hNh()?!0:this.N$rBh()&&this.N$q2();
this.N$JHh&&this.N$JHh.N$LAh($);
this.N$JHh&&this.N$JHh.N$F2(this.N$q2());
};
A.N$vBh=function(){
if(this.N$GHh){
clearTimeout(this.N$GHh);
this.N$GHh=0;
}
};
A.N$uBh=function(){
if(!this.N$XHh)return;
var $=this.N$XHh.style,A=this.N$QHh,B=this.N$ZHh+"px",C=this.N$YHh+"px";
$.borderTopLeftRadius=1&A?B:C;
$.borderTopRightRadius=2&A?B:C;
$.borderBottomLeftRadius=4&A?B:C;
$.borderBottomRightRadius=8&A?B:C;
};
A.N$eOh=function(){
var $=this;
this.N$KHh&&(this.N$GHh=setTimeout(function(){
$.N$vBh();
$.N$KHh($);
},500));
};
A.N$iOh=function(){
B.N$_super.prototype.N$iOh.call(this);
this.N$vBh();
};
A.N$mBh=function($){
var A=this.N$QHh,B=A|$;
this.N$aBh(B);
};
A.N$gBh=function($){
var A=this.N$QHh,B=A&~$;
this.N$aBh(B);
};
A.N$Plt=function($){
if(this.N$Ypt!=$){
this.N$yBh(0);
this.N$Ypt=$;
var A=this.N$KOh();
D.empty(A);
$&&D.append(A,C._g.N$vNh($));
}
};
A.N$yBh=function($){
var A;
if(this.N$wAh!=$){
this.N$Plt(null);
this.N$wAh=$;
this.N$JHh&&this.N$JHh.N$Vkh();
this.N$JHh=(A=new C._c.N$bAh())&&A.N$CAh($);
this.N$bCh(this.N$JHh);
this.N$dBh();
}
};
A.N$bBh=function($){
if(this.N$tBh!=$){
this.N$tBh=$;
this.N$okh("_n2a",this.N$tBh);
}
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$wBh",null,function(A,B){
function D(){
this.N$hOh=this.N$FNh=this.N$EBh=this.N$SBh=this.N$dOh=null;
this.N$xBh=0;
this.constructor=D;
this.N$_id=++C._id;
}
B.N$TBh=function(){
return this.N$SBh;
};
B.N$NBh=function(){
return this.N$FNh;
};
B.N$CBh=function(){
return this.N$xBh;
};
B.N$zOh=function($){
this.N$dOh=$;
};
B.N$mOh=function(){
return this.N$dOh;
};
B.N$kBh=function($){
this.N$hOh=$;
};
B.N$gOh=function(){
return this.N$hOh;
};
B.N$LBh=function($){
this.N$EBh=$;
};
B.N$ABh=function(){
return this.N$EBh;
};
B.N$OBh=function($,A){
var B=this;
if(B=D.N$_super.prototype.init.call(this)){
B.N$FNh=[];
B.N$dOh=$;
B.N$hOh=A;
}
return B;
};
B.init=function(){
return this.N$OBh(null,null);
};
B.N$MBh=function($,A,B){
var D,E=(D=new C._c.N$WHh())&&D.init();
E&&E.N$Ylt(B);
E&&E.N$Plt($);
E&&E.N$OCh(this,"N$DBh");
E&&E.N$zrt(A);
this.N$FNh.push(E);
return E;
};
B.N$PBh=function($,A){
return this.N$MBh($,null,A);
};
B.N$HBh=function($){
for(var A,B=this.N$FNh,C=0,D=B?B.length:0;D>C;C++){
A=B[C];
if((A&&A.N$Wn())==$)return A;
}
return null;
};
B.N$DBh=function($){
this.N$BBh($);
this.N$hOh&&this.N$dOh&&this.N$dOh.performSelector_withObject_(this.N$hOh,this);
};
B.N$BBh=function(A){
var B=this;
$.each(this.N$FNh,function($){
$&&$.N$nBh(!1);
});
A&&A.N$nBh(!0);
B.N$SBh=A;
B.N$xBh=A&&A.N$Wn();
};
B.N$jBh=function($){
var A=this.N$HBh($);
A&&this.N$BBh(A);
};
return D;
});
}();
!function(){
"use strict";
C._registerClass("N$FBh","N$RCh",function($,A){
function B(){
C._c.N$RCh.call(this);
this.N$IBh=this.N$xHh=null;
this.N$qBh=this.N$RBh=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$UBh=function(){
return this.N$qBh;
};
A.N$zBh=function(){
return this.N$IBh;
};
A.N$WBh=function(){
return this.N$RBh;
};
A.init=function(){
var $=this;
if($=B.N$_super.prototype.init.call(this)){
$.N$XBh(!1);
$.N$xHh=C._c.N$LHh.N$kHh(function(A){
$.N$AHh(A);
});
$.N$OHh($.N$xHh);
}
return $;
};
A.N$AHh=function($){
var A=1==this.N$qBh||4==this.N$qBh,B=1==this.N$qBh||2==this.N$qBh,D=C._g.N$m(A?0:-this.N$RBh,B?0:-this.N$RBh,2*this.N$RBh,2*this.N$RBh);
$&&$.N$HHh();
$&&$.N$VBh(D);
$&&$.N$BHh(D,this.N$RBh);
$&&$.N$JBh(this.N$IBh,"evenodd");
};
A.N$KBh=function(){
B.N$_super.prototype.N$KBh.call(this);
var $=1==this.N$qBh||4==this.N$qBh,A=1==this.N$qBh||2==this.N$qBh;
this.N$xHh&&this.N$xHh.N$sLh(C._g.N$m($?0:-this.N$RBh,A?0:-this.N$RBh,this.N$RBh,this.N$RBh));
};
A.N$QBh=function($){
if(this.N$qBh!=$){
this.N$qBh=$;
this.N$xHh&&this.N$xHh.N$DHh();
this.N$GBh();
}
};
A.N$YBh=function($){
if(this.N$IBh!=$){
this.N$IBh=$;
this.N$xHh&&this.N$xHh.N$DHh();
this.N$GBh();
}
};
A.N$ZBh=function($){
if(this.N$RBh!=$){
this.N$RBh=$;
this.N$xHh&&this.N$xHh.N$DHh();
this.N$GBh();
}
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$ejh","N$tjh",function(A,B){
function D(){
C._c.N$tjh.call(this);
this.N$njh=this.N$rjh=this.N$ijh=this.N$sjh=this.N$ojh=this.N$ujh=this.N$ajh=null;
this.N$fjh=this.N$ljh=this.N$cjh=this.N$hjh=this.N$pjh=this.N$djh=this.N$ldt=0;
this.constructor=D;
this.N$_id=++C._id;
}
B.N$Mct=function($){
var A=this.N$ldt;
if(A!==$){
this.N$ldt=$;
this.N$GBh(A);
}
};
B.N$Vat=function(){
return this.N$ldt;
};
B.N$vjh=function(){
return this.N$pjh;
};
B.N$mjh=function($){
var A=this.N$njh;
if(A!==$){
this.N$njh=$;
this.N$GBh(A);
}
};
B.N$gjh=function(){
return this.N$njh;
};
B.N$yjh=function(){
return this.N$rjh;
};
B.N$bjh=function($){
var A=this.N$ljh;
if(A!==$){
this.N$ljh=$;
this.N$GBh(A);
}
};
B.N$wjh=function(){
return this.N$ljh;
};
B.N$Ejh=function($){
var A=this.N$djh;
if(A!==$){
this.N$djh=$;
this.N$GBh(A);
}
};
B.N$Sjh=function(){
return this.N$djh;
};
B.N$xjh=function(){
return this.N$ujh;
};
B.N$Tjh=function(){
return this.N$sjh;
};
A.N$WCh=function(){
return"_r2a";
};
B.init=function(){
var $=this;
if($=D.N$_super.prototype.init.call(this)){
$.N$rjh=C._g.N$l(28,28);
$.N$ujh="rgba(0, 0, 0, 0.5)";
$.N$sjh="rgba(0, 0, 0, 0.2)";
}
return $;
};
B.N$VCh=function(){
D.N$_super.prototype.N$VCh.call(this);
this.N$ajh=C._c.N$RCh.N$JCh("_i2a");
this.N$ojh=C._c.N$RCh.N$JCh("_s2a");
this.N$ijh=C._c.N$RCh.N$JCh("_o2a");
this.N$ijh&&this.N$ijh.N$uOh("slider","role");
this.N$ECh([this.N$ajh,this.N$ojh,this.N$ijh]);
this.N$Njh();
};
B.N$KBh=function(){
D.N$_super.prototype.N$KBh.call(this);
var $=this.N$PHh();
if(!$)return;
var A=this.N$rjh?this.N$rjh.width:28,B=this.N$rjh?this.N$rjh.height:28,E=this.N$ijh&&this.N$ijh.N$S4();
if(!E)return;
this.N$hjh=this.N$ljh;
this.N$cjh=this.N$hjh+($.width-(A+this.N$djh+this.N$ljh));
E.width=A+"px";
E.height=B+"px";
E.top=Math.round(($.height-B)/2)+"px";
E.borderRadius=Math.round(A/2)+"px";
var F=this.N$pjh?this.N$pjh-1:1,G=this.N$ljh,H=$.width-(this.N$ljh+this.N$djh+this.N$rjh.width),I=this.N$ldt/F,J=G+I*H;
this.N$hjh=G;
this.N$cjh=H;
var K=C._g.N$m(J,0,A,B),L=C._g.N$m($.x+this.N$ljh,0,$.width-(this.N$ljh+this.N$djh),2),M=C._g.N$g(),N=C._g.N$g();
C._g.N$W(L,$);
C._g.N$X(M,N,L,Math.round(L.width*I),0);
C._g.N$W(K,$);
this.N$ijh&&this.N$ijh.N$sLh(K);
this.N$ajh&&this.N$ajh.N$sLh(M);
this.N$ojh&&this.N$ojh.N$sLh(N);
this.N$ijh&&this.N$ijh.N$uOh("0","aria-valuemin");
this.N$ijh&&this.N$ijh.N$uOh(""+F,"aria-valuemax");
this.N$ijh&&this.N$ijh.N$uOh(""+this.N$ldt,"aria-valuenow");
this.N$ijh&&this.N$ijh.N$uOh(this.N$njh,"aria-valuetext");
};
B.N$Cjh=function(A){
var B=this.N$pjh?this.N$pjh-1:1,C=Math.round($.clamp((A-this.N$hjh)/this.N$cjh,0,1)*B),D=this.N$Vat();
if(D!=C){
this.N$Mct(C);
this.N$lOh();
}
};
B.N$Njh=function(){
this.N$ajh&&((this.N$ajh&&this.N$ajh.N$S4()).backgroundColor=this.N$ujh);
this.N$ojh&&((this.N$ojh&&this.N$ojh.N$S4()).backgroundColor=this.N$sjh);
};
B.N$kjh=function(){
return this.N$ijh;
};
B.N$Ljh=function($){
this.N$Cjh($.x-Math.round(this.N$rjh.width/2));
this.N$Ajh();
};
B.N$Ojh=function(){
var $=this.N$NCh().getBoundingClientRect(),A=(this.N$ijh&&this.N$ijh.N$NCh()).getBoundingClientRect();
this.N$fjh=A.left-$.left;
};
B.N$Mjh=function($){
this.N$Cjh(this.N$fjh+$);
};
B.N$Djh=function(){
this.N$lOh();
};
B.N$Pjh=function(A){
if(this.N$pjh!=A){
this.N$pjh=A;
this.N$ldt=$.clamp(this.N$ldt,0,A-1);
this.N$GBh();
}
};
B.N$Hjh=function(A){
if(!$.isEqual(this.N$rjh,A)){
this.N$rjh=A;
this.N$GBh();
}
};
B.N$Bjh=function($){
if(this.N$ujh!=$){
this.N$ujh=$;
this.N$Njh();
}
};
B.N$jjh=function($){
if(this.N$sjh!=$){
this.N$sjh=$;
this.N$Njh();
}
};
return D;
});
}();
!function(){
"use strict";
var $=null;
function A(A){
$=A;
window.addEventListener("orientationchange",E,!1);
document.body.addEventListener("touchmove",F,!1);
}
function B(){
$=null;
window.removeEventListener("orientationchange",E,!1);
document.body.removeEventListener("touchmove",F,!1);
}
function E(){
var A;
(A=$)&&A.N$Fjh();
}
function F($){
$.preventDefault();
$.stopPropagation();
}
C._registerClass("N$Ijh",null,function($,A){
function B(){
this.N$hAh=this.N$qjh=this.N$Rjh=this.N$Ujh=null;
this.constructor=B;
this.N$_id=++C._id;
}
$.N$zjh=function(){
return(C._c.N$cLh.N$vAh()||C._c.N$cLh.N$dAh())&&!C._g.N$hNh();
};
A.N$Wjh=function($,A,D){
var E,F,G=this;
if(G=B.N$_super.prototype.init.call(this)){
G.N$qjh=D;
G.N$Ujh="//tenuto.link"+A;
if(C._c.N$cLh.N$vAh()){
G.N$Rjh=(E=new C._c.N$Vjh())&&E.N$Xjh(G,$,G.N$Ujh);
G.N$Rjh&&G.N$Rjh.N$Fjh();
}else{
G.N$hAh=(F=new C._c.N$BNh())&&F.N$oCh(G,null,null,"Use Web Version",null,[$,"Download on the App Store"]);
G.N$hAh&&G.N$hAh.N$ICh(0);
setTimeout(function(){
G.N$hAh&&G.N$hAh.N$lCh(!0);
},0);
}
}
return G;
};
A.N$PCh=function($,A){
var B,D;
0===A?(B=C._c.N$ukh.N$Ckh())&&B.N$Mkh(this.N$Ujh):1==A&&(D=C._c.N$ukh.N$Ckh())&&D.N$Mkh("/buy/tenuto");
};
A.N$BCh=function(){
this.N$qjh();
};
return B;
});
C._registerClass("N$Vjh","N$RCh",function($,E){
function F(){
C._c.N$RCh.call(this);
this.N$Jjh=this.N$Kjh=this.N$Qjh=this.N$Gjh=this.N$Yjh=this.N$Zjh=this.N$eFh=this.N$tFh=null;
this.N$zNh=0;
this.N$nFh=!1;
this.constructor=F;
this.N$_id=++C._id;
}
E.N$rFh=function(){
return this.N$Gjh;
};
E.N$iFh=function(){
return this.N$Kjh;
};
E.N$sFh=function(){
return this.N$Qjh;
};
$.N$WCh=function(){
return"_u2a";
};
E.N$Xjh=function($,C,D){
var E=this;
if(E=F.N$_super.prototype.init.call(this)){
E.N$Gjh=$;
E.N$Kjh=C;
E.N$Qjh=D;
B();
A(E);
E.N$KOh();
document.body.appendChild(E.N$NCh());
}
return E;
};
E.N$XCh=function(){
var $=this,A=F.N$_super.prototype.N$XCh.call(this);
D.listen(A,"click",function(A){
A.stopPropagation();
$.N$oFh();
});
D.listen(A,"contextmenu",function($){
$.stopPropagation();
$.preventDefault();
});
return A;
};
E.N$VCh=function(){
var $=this;
F.N$_super.prototype.N$VCh.call(this);
var A=C._c.N$RCh.N$JCh("_a2a"),B=C._c.N$RCh.N$JCh("_f2a"),D=C._c.N$QCh.N$JCh("_l2a"),E=C._c.N$QCh.N$JCh("_c2a"),G=C._c.N$QCh.N$JCh("_h2a");
D&&D.N$yOh(function(){
var A;
$.N$nFh||(A=C._c.N$ukh.N$Ckh())&&A.N$Mkh($.N$Qjh);
});
E&&E.N$yOh(function(){
var A;
$.N$nFh||(A=C._c.N$ukh.N$Ckh())&&A.N$Mkh("/buy/tenuto");
});
G&&G.N$yOh(function(){
$.N$nFh||$.N$oFh();
G&&G.N$hCh("_p2a");
});
D&&D.N$uFh($.N$Kjh);
E&&E.N$uFh("Download on the App Store");
G&&G.N$uFh("Use Web Version");
B&&B.N$bCh(D);
B&&B.N$bCh(E);
B&&B.N$bCh(G);
$.N$bCh(A);
$.N$bCh(B);
$.N$Yjh=A;
$.N$Jjh=B;
$.N$eFh=D;
$.N$Zjh=E;
$.N$tFh=G;
};
E.N$Fjh=function(){
var $=this.N$NCh().getBoundingClientRect(),A=void 0;
A=$.width>$.height?screen.height/$.width:screen.width/$.width;
var B=13/A+"px",C=$.width-20/A+"px",D=58/A+"px",E=this.N$eFh&&this.N$eFh.N$S4(),F=this.N$Zjh&&this.N$Zjh.N$S4(),G=this.N$tFh&&this.N$tFh.N$S4(),H=this.N$Jjh&&this.N$Jjh.N$S4();
H.fontSize=20/A+"px";
H.width=C;
E.height=D;
E.borderTopLeftRadius=B;
E.borderTopRightRadius=B;
E.marginBottom=1/A+"px";
F.height=D;
F.borderBottomLeftRadius=B;
F.borderBottomRightRadius=B;
F.marginBottom=8/A+"px";
G.height=D;
G.borderRadius=B;
G.marginBottom=8/A+"px";
};
E.N$oFh=function(){
var $=this;
D.stop(this.N$zNh);
this.N$zNh=0;
if(!this.N$nFh){
this.N$nFh=!0;
B();
var A=this.N$Yjh&&this.N$Yjh.N$NCh(),C=this.N$Jjh&&this.N$Jjh.N$NCh(),E=C.getBoundingClientRect().height;
this.N$zNh=D.animate(250,function($){
var B=D.lerp(1,0,$),F=D.lerp(0,E+32,D.easeIn($));
D.transform(A,0,0,1,1,B);
D.transform(C,0,F,1,1);
},function(){
document.body.removeChild($.N$NCh());
$.N$Gjh&&$.N$Gjh.N$BCh(null,0/0);
});
}
};
return F;
});
}();
!function(){
"use strict";
C._registerClass("N$aFh","N$AAh",function($,A){
function B(){
C._c.N$AAh.call(this);
this.N$fFh=this.N$OAh=null;
this.constructor=B;
this.N$_id=++C._id;
}
$.N$ROh=function(){
return"input";
};
$.N$WCh=function(){
return"_d2a";
};
A.N$XCh=function(){
var $,A=this,E=B.N$_super.prototype.N$XCh.call(this);
E.setAttribute("type","text");
D.listen(E,"keydown",function($){
var B=C._c.N$fOh.N$aOh($.keyCode);
if(A.N$KAh()){
if("Escape"==B){
A.N$cFh();
$.preventDefault();
}else if("Return"==B||"Enter"==B){
A.N$lOh();
$.preventDefault();
}
$.stopPropagation();
}
});
D.listen(E,"keyup",function($){
A.N$KAh()&&$.stopPropagation();
});
A.N$OAh=($=new C._c.N$XAh())&&$.N$WAh(E,0,null);
A.N$fFh=E;
return E;
};
A.N$KAh=function(){
return document.activeElement==this.N$fFh;
};
A.N$cFh=function(){
this.N$fFh.blur();
};
A.N$hFh=function($){
$?this.N$uOh($,"placeholder"):this.N$EOh("placeholder");
};
A.N$pFh=function(){
return this.N$dFh("placeholder");
};
A.N$F2=function($){
B.N$_super.prototype.N$F2.call(this,$);
$?this.N$fFh.removeAttribute("disabled"):this.N$fFh.setAttribute("disabled","disabled");
};
A.N$Urt=function($){
this.N$fFh.value=$;
};
A.N$zet=function(){
return this.N$fFh.value;
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$Ykh","N$RCh",function(A,B){
function D(){
C._c.N$RCh.call(this);
this.N$vFh=this.N$mFh=this.N$gFh=this.N$yFh=this.N$Ypt=this.N$zCh=null;
this.N$bFh=this.N$wFh=0;
this.N$EFh=this.N$SFh=!1;
this.constructor=D;
this.N$_id=++C._id;
}
B.N$xFh=function($){
this.N$EFh=$;
};
B.N$TFh=function(){
return this.N$EFh;
};
B.N$Xat=function(){
return this.N$Ypt;
};
B.N$NFh=function(){
return this.N$wFh;
};
B.N$CFh=function(){
return this.N$vFh;
};
B.N$kFh=function(){
return this.N$bFh;
};
B.N$LFh=function(){
return this.N$SFh;
};
A.N$ROh=function(){
return"nav";
};
A.N$WCh=function(){
return"_v2a";
};
B.init=function(){
var $=this;
if($=D.N$_super.prototype.init.call(this)){
$.N$wFh=-1;
$.N$gFh=[];
$.N$yFh=[];
$.N$AFh(1);
}
return $;
};
B.N$KBh=function(){
var A=this;
D.N$_super.prototype.N$KBh.call(this);
var B=this.N$PHh(),E=0,F=0,G=52,H=B.height,I=C._g.N$m(0,0,G,H),J=C._g.N$m(0,0,G,H);
C._g.N$dt(I,B);
C._g.N$W(I,B);
C._g.N$ct(I,E+F);
$.each(this.N$gFh,function($){
if(!$||!$.N$eft()){
$&&$.N$sLh(I);
C._g.N$bt(I,I);
C._g.N$ct(I,F);
}
});
C._g.N$vt(J,B);
C._g.N$W(J,B);
C._g.N$lt(J,F);
$.each(A.N$yFh,function($){
if(!$||!$.N$eft()){
$&&$.N$sLh(J);
C._g.N$yt(J,J);
C._g.N$lt(J,F);
}
});
var K=Math.max(C._g.N$T(I),B.width-C._g.N$L(J)),L=C._g.N$E(B,K,0);
A.N$zCh&&A.N$zCh.N$sLh(L);
if(A.N$vFh){
A.N$bFh&&A.N$bFh<L.width&&(L.width=A.N$bFh);
C._g.N$z(L,B);
A.N$vFh&&A.N$vFh.N$sLh(L);
}
};
B.N$VCh=function(){
D.N$_super.prototype.N$VCh.call(this);
this.N$zCh=C._c.N$RCh.N$JCh("_m2a");
this.N$bCh(this.N$zCh);
this.N$OFh();
};
B.N$MFh=function(){
return window.top!=window;
};
B.N$OFh=function(){
var $=this.N$MFh();
this.N$okh("_g2a",$);
$?this.N$zCh&&this.N$zCh.N$KCh("<span>&ldquo;"+this.N$Ypt+"&rdquo; by <a target='_top' href='https://www.musictheory.net/'>musictheory.net</a></span>"):this.N$zCh&&this.N$zCh.N$uFh(this.N$Ypt);
};
B.N$DFh=function($){
return this.N$mFh&&this.N$mFh[$];
};
B.N$PFh=function($){
var A=this.N$mFh&&this.N$mFh[0];
A||this.N$HFh(0,function(){
var A;
(A=C._c.N$ukh.N$Ckh())&&A.N$Mkh($);
});
};
B.N$HFh=function($,A){
var B=this.N$mFh&&this.N$mFh[$];
if(B)return;
var D=C._c.N$RCh.N$JCh("_y2a"),E=!1;
B=C._c.N$QCh.N$JCh("_b2a");
if(0==$){
D&&D.N$hCh("_w2a");
B&&B.N$zrt("Back");
E=!0;
}else if(1==$){
D&&D.N$hCh("_x2a");
B&&B.N$zrt("Settings");
}else if(2==$){
D&&D.N$hCh("_k2a");
B&&B.N$zrt("Piano");
}else if(4==$){
D&&D.N$hCh("_x2a");
B&&B.N$zrt("Customize");
}else if(3==$){
D&&D.N$hCh("_j2a");
B&&B.N$zrt("Actions");
}
B&&B.N$bCh(D);
B&&B.N$yOh(A);
this.N$bCh(B);
E?this.N$gFh.push(B):this.N$yFh.unshift(B);
this.N$mFh||(this.N$mFh={});
this.N$mFh[$]=B;
};
B.N$BFh=function($,A){
var B=this.N$DFh($);
B&&B.N$Sct(A);
this.N$GBh();
};
B.N$Plt=function($){
if(this.N$Ypt!=$){
this.N$Ypt=$;
this.N$OFh();
}
};
B.N$jFh=function($){
this.N$SFh=$;
this.N$okh("_q2a",this.N$vFh&&this.N$SFh);
};
B.N$FFh=function($){
if(this.N$bFh!=$){
this.N$bFh=$;
this.N$GBh();
}
};
B.N$IFh=function($){
if(this.N$vFh!=$){
this.N$vFh&&this.N$vFh.N$qFh("_z2a");
this.N$vFh&&this.N$vFh.N$Vkh();
this.N$vFh=$;
$&&$.N$hCh("_z2a");
this.N$bCh($);
}
this.N$okh("_q2a",this.N$vFh&&this.N$SFh);
};
B.N$AFh=function($){
if(this.N$wFh!=$){
this.N$wFh=$;
this.N$okh("_e3a",0==$);
this.N$okh("_t3a",1==$);
}
};
return D;
});
}();
!function(){
"use strict";
var B=A("trace");
C._registerClass("N$Bkh",null,function(A,D){
function E(){
this.N$RFh=this.N$RLh=this.N$qNh=this.N$Ypt=null;
this.constructor=E;
this.N$_id=++C._id;
}
D.N$Xat=function(){
return this.N$Ypt;
};
D.N$eCh=function(){
return this.N$qNh;
};
D.N$KLh=function(){
return this.N$RLh;
};
D.N$Hkh=function($,A,B){
var C=this;
if(C=E.N$_super.prototype.init.call(this)){
C.N$Ypt=$;
C.N$qNh=A;
C.N$RLh=B;
C.N$RFh=[];
}
return C;
};
D.N$jkh=function($){
$&&$.length&&(this.N$RFh=this.N$RFh.concat($));
};
D.N$UFh=function(){
var A=1/0,B=this.N$RFh;
B.sort(function($,A){
return $.t==A.t?$.i-A.i:$.t-A.t;
});
$.each(B,function($){
var B=$.t;
A>B&&(A=B);
});
var C=$.map(B,function($){
var B=$.t-A,C=Math.floor(B/6e4),D=B%6e4/1e3;
return"+"+C+":"+(10>D?"0":"")+D.toFixed(2)+" "+$.s;
}).join("\n");
return C;
};
D.N$Fkh=function(){
var $=["Log:",this.N$UFh(),""].join("\n");
B.trace({
title:this.N$Ypt,
message:this.N$qNh,
error:this.N$RLh,
log:$,
where:"a"
});
};
return E;
});
}();
!function(){
"use strict";
C._registerClass("N$tjh","N$AAh",function($,A){
function B(){
C._c.N$AAh.call(this);
this.N$zFh=this.N$OAh=null;
this.N$WFh=!1;
this.constructor=B;
this.N$_id=++C._id;
}
$.N$WCh=function(){
return"_n3a";
};
A.N$XCh=function(){
var $,A=B.N$_super.prototype.N$XCh.call(this);
A.setAttribute("role","button");
this.N$OAh=($=new C._c.N$XAh())&&$.N$WAh(A,2,this);
return A;
};
A.N$XFh=function(){
var $;
B.N$_super.prototype.N$XFh.call(this);
($=this.N$kjh())&&$.N$hCh("_r3a");
};
A.N$tOh=function(){
B.N$_super.prototype.N$tOh.call(this);
var $=!this.N$q2();
this.N$okh("active",!$&&this.N$WFh);
document.body.classList.toggle("_i3a",!$&&this.N$WFh);
};
A.N$GAh=function($){
if(!this.N$q2())return!1;
if(!this.N$YAh())return!1;
var A=this.N$kjh(),B=$&&$.N$ZAh(),D=B.x-window.pageXOffset,E=B.y-window.pageYOffset;
this.N$zFh=B;
if(A){
var F=(A&&A.N$NCh()).getBoundingClientRect();
if(D<F.left||D>F.right||E<F.top||E>F.bottom){
var G=this.N$NCh().getBoundingClientRect();
this.N$Ljh(C._g.N$s(D-G.left,E-G.top));
}
}
this.N$tOh();
if(!this.N$WFh){
this.N$Ojh();
this.N$WFh=!0;
}
this.N$tOh();
return!0;
};
A.N$nOh=function($){
var A=$&&$.N$ZAh(),B=A.x-this.N$zFh.x,C=A.y-this.N$zFh.y;
this.N$WFh&&this.N$Mjh(B,C);
};
A.N$rOh=function(){
if(this.N$WFh){
this.N$WFh=!1;
this.N$Djh();
}
this.N$tOh();
};
A.N$Ljh=function(){};
A.N$Ojh=function(){};
A.N$Mjh=function(){};
A.N$Djh=function(){};
A.N$kjh=function(){
return null;
};
A.N$F2=function($){
B.N$_super.prototype.N$F2.call(this,$);
this.N$tOh();
};
return B;
});
}();
!function(){
"use strict";
function $($,A){
for(var B=$.length,C=0,D=0,E=0;B--;)E+=$[C++]*A[D++];
return E;
}
function A($){
for(var A=0,B=0;B<$.length;B++){
var C=$[B];
A+=C*C;
}
return Math.sqrt(A);
}
function B($,A){
for(var B=[],C=0;$>C;C++){
for(var D=[],E=0;A>E;E++)D[E]=0;
B[C]=D;
}
return B;
}
function D(C,D,E){
for(var F=[],G=C.length,H=B(E,G),I=0;G>I;I++){
H[0][I]=1;
for(var J=1;E>J;J++)H[J][I]=H[J-1][I]*C[I];
}
for(var K=B(E,G),L=B(E,E),M=0;E>M;M++){
for(var N=0;G>N;N++)K[M][N]=H[M][N];
for(var O=0;M>O;O++)for(var P=$(K[M],K[O]),Q=0;G>Q;Q++)K[M][Q]-=P*K[O][Q];
var R=A(K[M]);
if(1e-6>R)return null;
for(var S=1/R,T=0;G>T;T++)K[M][T]*=S;
for(var U=0;E>U;U++)L[M][U]=M>U?0:$(K[M],H[U]);
}
for(var V=E;0!=V--;){
F[V]=$(K[V],D);
for(var W=E-1;W>V;W--)F[V]-=L[V][W]*F[W];
F[V]/=L[V][V];
}
return F;
}
C._registerClass("N$VFh",null,function($,A){
function B(){
this.N$JFh=null;
this.N$KFh=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$QFh=function($){
this.N$JFh||(this.N$JFh=[]);
this.N$JFh[this.N$KFh++]=[Date.now(),$];
this.N$KFh>20&&(this.N$KFh=0);
};
A.N$GFh=function(){
var $=this;
if(!this.N$JFh)return 0;
Date.now();
this.N$JFh.sort(function($,A){
return A[0]-$[0];
});
for(var A=[],B=[],C=$.N$JFh[0][0],E=0;E<$.N$JFh.length;E++){
var F=C-$.N$JFh[E][0];
if(200>F){
A.push(.001*F);
B.push($.N$JFh[E][1]);
}
}
if(A.length<3)return 0;
var G=D(A,B,3);
return G?G[1]:0;
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$UDh",null,function(A,B){
function E(){
this.N$YFh=this.N$ZFh=this.N$eIh=this.N$BOh=null;
this.N$tIh=!1;
this.constructor=E;
this.N$_id=++C._id;
}
B.N$nIh=function(){
return this.N$eIh;
};
B.N$rIh=function(){
return this.N$YFh;
};
B.N$vPh=function(){
return this.N$ZFh;
};
A.N$WCh=function(){
return"_s3a";
};
B.init=function(){
var $,A=this;
if(A=E.N$_super.prototype.init.call(this)){
A.N$YFh=[];
A.N$ZFh=($=new C._c.N$SPh())&&$.init();
A.N$ZFh&&A.N$ZFh.N$NPh(A);
}
return A;
};
B.N$eLh=function(){
var $;
if(!this.N$BOh){
for(var A=($=new C._c.N$iIh())&&$.init(),B=C._c.N$UDh,D=this.constructor;D!=B;){
A&&A.N$hCh(D&&D.N$WCh());
D=D&&D.superclass();
}
A&&A.N$hCh("_s3a");
A&&A.N$NPh(this);
this.N$BOh=A;
this.N$QDh();
}
return this.N$BOh;
};
B.N$sIh=function(){
return!!this.N$BOh;
};
B.N$ZDh=function(A){
this.N$ePh(A);
$.each(this.N$YFh,function($){
$&&$.N$ZDh(A);
});
};
B.N$tPh=function(A){
this.N$nPh(A);
$.each(this.N$YFh,function($){
$&&$.N$tPh(A);
});
};
B.N$rPh=function(A){
this.N$iPh(A);
$.each(this.N$YFh,function($){
$&&$.N$rPh(A);
});
};
B.N$sPh=function(A){
this.N$oPh(A);
$.each(this.N$YFh,function($){
$&&$.N$sPh(A);
});
};
B.N$ePh=function(){};
B.N$nPh=function(){};
B.N$iPh=function(){};
B.N$oPh=function(){};
B.N$yDh=function(){
for(var $=this.N$nIh();$;){
if($&&$.isKindOfClass_(C._c.N$RDh))return $;
$=$&&$.N$nIh();
}
return null;
};
B.N$pPh=function($){
this.N$YFh||(this.N$YFh=[]);
$&&$.N$dPh(this);
this.N$YFh.push($);
$&&$.N$oIh(this);
};
B.N$uIh=function(A){
(A&&A.N$nIh())==this&&A&&A.N$oIh(null);
A&&A.N$uPh(null);
this.N$YFh=$.without(this.N$YFh,A);
};
B.N$oIh=function($){
this.N$eIh=$;
};
B.N$aPh=function(){
this.N$eIh&&this.N$eIh.N$uIh(this);
};
B.N$dPh=function(){};
B.N$uPh=function(){};
B.N$QDh=function(){
this.N$aIh();
var A=this.N$fIh();
if(!A)return;
var B=void 0,C=void 0;
if(this.N$lIh()){
try{
if(window.sessionStorage){
var E=window.sessionStorage.getItem(A);
$.isString(E)&&(B=JSON.parse(E));
}
}catch(F){}
B||(B={});
}
if(D.store.enabled){
var G=D.store.get(A);
$.isString(G)&&(C=JSON.parse(G));
}
C||(C={});
var H=this.N$tIh;
this.N$tIh=!0;
B&&this.N$cIh(B);
C&&this.N$dst(C);
this.N$tIh=H;
};
B.N$hIh=function(){};
B.N$pIh=function(){};
B.N$dIh=function(){
if(this.N$tIh)return;
var $=this.N$fIh();
if(!$)return;
try{
if(this.N$lIh()&&window.sessionStorage){
var A={};
this.N$vIh(A);
window.sessionStorage.setItem($,JSON.stringify(A));
}
}catch(B){}
if(D.store.enabled)try{
var C={};
this.N$bft(C);
D.store.set($,JSON.stringify(C));
}catch(B){}
};
B.N$fIh=function(){
return null;
};
B.N$lIh=function(){
return!1;
};
B.N$aIh=function(){};
B.N$bft=function(){};
B.N$dst=function(){};
B.N$vIh=function(){};
B.N$cIh=function(){};
B.N$Plt=function($){
this.N$ZFh&&this.N$ZFh.N$Plt($);
};
B.N$Xat=function(){
return this.N$ZFh&&this.N$ZFh.N$Xat();
};
return E;
});
C._registerClass("N$iIh","N$RCh",function($,A){
function B(){
C._c.N$RCh.call(this);
this.N$xPh=null;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$NPh=function($){
this.N$xPh=$;
};
A.N$CPh=function(){
return this.N$xPh;
};
A.N$mIh=function(){
return!0;
};
A.N$KBh=function(){
this.N$xPh&&this.N$xPh.N$hIh();
B.N$_super.prototype.N$KBh.call(this);
this.N$xPh&&this.N$xPh.N$pIh();
};
return B;
});
}();
!function(){
"use strict";
function A($){
if(!$)return"null";
return[$.sampleRate,$.length,$.duration,$.numberOfChannels].join(", ");
}
function B($,A,B){
if(window.Worker){
var C=new Worker("/vc/19/0/e72e43d3492f23a6f17b11c184a1b57aba6863ff/mp3worker.js");
C.onmessage=function(A){
var C=A.data,D=C.channelData,E=null;
if(D&&C.sampleRate){
E=$.createBuffer(D.length,D[0].length,C.sampleRate);
for(var F=0;F<C.channelData.length;F++)E.getChannelData(F).set(C.channelData[F]);
}
B(E);
};
C.postMessage(A);
}
}
C._registerClass("N$gIh",null,function(D,E){
function F(){
this.N$yIh=this.N$INh=this.N$bIh=this.N$wIh=this.N$EIh=this.N$SIh=this.N$xIh=null;
this.N$TIh=this.N$NIh=0;
this.constructor=F;
this.N$_id=++C._id;
}
E.N$CIh=function(){
return this.N$wIh;
};
E.N$kIh=function(){
return this.N$bIh;
};
E.N$LIh=function(){
return this.N$yIh;
};
E.N$AIh=function(){
return this.N$SIh;
};
E.N$nCh=function($){
this.N$INh=$;
};
E.N$rCh=function(){
return this.N$INh;
};
E.N$OIh=function($,A){
var B=this;
if(B=F.N$_super.prototype.init.call(this)){
B.N$wIh=$;
B.N$yIh=A;
C._g.N$pNh(B.description()+"$D$DG$"+B.N$wIh);
}
return B;
};
E.N$MIh=function($,A){
for(var B=$.getChannelData(0),D=0,E=B.length;E>D;D++)if(B[D]>.5){
var F=D/$.sampleRate,G=26/44100;
C._g.N$pNh("$D$EG$"+F);
return A+(F-G);
}
C._g.N$pNh("$D$FG$");
return 0;
};
E.N$DIh=function($,A,D){
var E=this;
function F(F){
window.Worker?B(E.N$yIh,$,function($){
var B;
if($){
(B=C._c.N$ukh.N$Ckh())&&B.N$Pkh("Decode Recovery",null,F);
A($);
}else D(6);
}):D(6);
}
E.N$yIh.decodeAudioData($,function($){
$?A($):F(null);
},F);
};
E.N$PIh=function($){
var A=new Uint8Array($);
function B($){
if($>=97&&102>=$)return $-87;
if($>=48&&58>$)return $-48;
return 0;
}
for(var C=0,D=1;D<A.length&&34!=A[D++];)C++;
C/=2;
for(var E=new ArrayBuffer(C),F=new Uint8Array(E),G=0,H=1;H<A.length-1;){
var I=A[H++],J=A[H++];
if(34==I||34==J)break;
F[G++]=(B(I)<<4)+B(J);
}
return E;
};
E.N$HIh=function($,A,B){
var C=new DataView($);
if(34==C.getUint8(0)){
var D=this.N$PIh($);
if(D){
$=D;
C=new DataView($);
}
}
var E=[18766,1,0,0,65500,32768,170],F=0;
function G($){
return C.getUint8($);
}
function H($){
return C.getUint16($);
}
function I($){
return C.getUint32($);
}
function J($,A){
return C.setUint8($,A);
}
function K($,A){
return C.setUint16($,A);
}
function L(){
function $(){
var $=H(F);
F+=2;
return $;
}
function D(){
return G(F++);
}
function L(){
var $=I(F);
F+=4;
return $;
}
function M($,A){
for(var B=1,D=0,E=new Uint8Array(C.buffer),F=$;A>F;F++){
B=(B+E[F])%65521;
D=(D+B)%65521;
}
return[D,B];
}
function N(){
var A=$(),B=L(),D=[$(),$()],I=F,N=F+B;
if(A<=E[4]||B>C.buffer.byteLength-I)return null;
for(;N>F;){
var O=H(F);
K(F,A);
if(O&E[5]){
O&=E[5]-1;
for(var P=F+2,Q=F+O;Q>P;P++)J(P,G(P)^E[6]);
}
F+=O;
}
var R=M(I,N);
if(D[0]==R[0]&&D[1]==R[1])return C.buffer.slice(I,N);
return null;
}
var O=!0;
O=O&&$()==E[0];
O=O&&D()==E[1];
if(!O){
B(7);
return;
}
D();
var P=D(),Q=D(),R=D(),S=D();
L();
var T=L(),U=3==S||4==S;
if(!O){
B();
return;
}
var V=N(),W=U&&V&&N();
!V||U&&!W?B(7):A(P,Q,R,T,V,W);
}
L();
};
E.N$BIh=function(){
var $=this,B=!1,D=!1;
function E(){
B&&D&&$.N$INh&&$.N$INh.N$jIh($);
}
var F=$.N$EIh&&$.N$EIh.response,G=F&&F.byteLength<8192;
C._g.N$pNh("$D$GG$"+(F?F.byteLength:0));
if(!F||G){
$.N$INh&&$.N$INh.N$FIh($,2);
return;
}
$.N$HIh(F,function(F,G,H,I,J,K){
var L=null,M=null;
C._g.N$pNh("$D$HG$"+[F,G,H,I,J?J.toString():"?",J?J.byteLength:"?",K?K.toString():"?",K?K.byteLength:"?"].join(", "));
function N(){
try{
for(var A=L,D=$.N$MIh(A,.05),E=Math.floor(D*A.sampleRate),F=$.N$yIh.createBuffer(M.numberOfChannels,A.length-E,A.sampleRate),G=0;G<M.numberOfChannels;G++)for(var H=A.getChannelData(0),I=F.getChannelData(G),J=E,K=0,N=A.length;N>J;J++)I[K++]=H[J];
$.N$SIh=F;
}catch(O){
C._g.N$pNh("$D$IG$"+O.toString());
}
B=!0;
}
function O(){
var A,B=$.N$MIh(M,.1),E=0;
$.N$NIh=F;
$.N$TIh=G;
$.N$xIh={};
for(var J=F;G>=J;J+=H){
var K=B+E/44100;
$.N$xIh[J]=(A=new C._c.N$qIh())&&A.N$IIh(J,M,K,1);
E+=I;
}
D=!0;
}
function P(){
if(!M)return;
if(!L&&!B)return;
L&&N();
O();
E();
}
K?$.N$DIh(K,function($){
C._g.N$pNh("$D$JG$"+A($));
L=$;
P();
},function(A){
C._g.N$pNh("$D$KG$"+A);
$.N$INh&&$.N$INh.N$FIh($,A);
}):B=!0;
$.N$DIh(J,function($){
C._g.N$pNh("$D$LG$"+A($));
M=$;
P();
},function(A){
C._g.N$pNh("$D$MG$"+A);
$.N$INh&&$.N$INh.N$FIh($,A);
});
},function(A){
$.N$INh&&$.N$INh.N$FIh($,A);
});
};
E.N$RIh=function(){
var A=this;
if(this.N$EIh)return;
var B=new XMLHttpRequest(),D=this.N$wIh?$.last(this.N$wIh.split("/")):"";
function E(){
C._g.N$pNh("$D$NG$");
A.N$BIh();
I();
}
function F($){
C._g.N$pNh(D+"$D$OG$"+$.loaded/$.total);
A.N$INh&&A.N$INh.N$UIh(A,$.loaded/$.total);
}
function G(){
C._g.N$pNh(D+"$D$PG$"+$.inspect(B));
A.N$INh&&A.N$INh.N$FIh(A,3);
}
function H(){
C._g.N$pNh(D+"$D$QG$"+$.inspect(B));
A.N$INh&&A.N$INh.N$FIh(A,2);
}
var I=function(){
C._g.N$pNh(D+"$D$RG$");
B.removeEventListener("load",E);
B.removeEventListener("progress",F);
B.removeEventListener("abort",G);
B.removeEventListener("error",H);
A.N$EIh=null;
};
B.addEventListener("load",E,!1);
B.addEventListener("progress",F,!1);
B.addEventListener("abort",G,!1);
B.addEventListener("error",H,!1);
C._g.N$pNh(D+"$D$SG$"+A.N$wIh);
B.open("GET",A.N$wIh,!0);
B.responseType="arraybuffer";
B.send();
A.N$EIh=B;
};
E.N$zIh=function($){
var A=this;
function B($){
return 440*Math.pow(2,($-69)/12);
}
function D(D){
var E,F=A.N$xIh[D];
if(!F)return null;
var G=B(D),H=B($),I=F&&F.N$WIh(),J=F&&F.N$XIh(),K=H/G,L=(E=new C._c.N$qIh())&&E.N$IIh($,I,J,K);
return L;
}
if($<A.N$NIh)return D(A.N$NIh);
if($>A.N$TIh)return D(A.N$TIh);
return A.N$xIh[$]||D($-1)||D($+1)||D($-2)||D($+2);
};
return F;
});
}();
!function(){
"use strict";
function A($){
var A,B,D="Web Audio: "+$;
(A=(B=C._c.N$ukh)&&B.N$Ckh())&&A.N$Pkh(D,null,null);
}
function B($){
var A,B,D="Web Audio Error";
(A=(B=C._c.N$ukh)&&B.N$Ckh())&&A.N$Pkh(D,null,$);
}
C._registerClass("N$ZLh","N$dLh",function(D,E){
function F(){
C._c.N$dLh.call(this);
this.N$yIh=this.N$VIh=this.N$JIh=this.N$KIh=this.N$f2=this.N$QIh=this.N$GIh=this.N$YIh=this.N$ZIh=this.N$eqh=null;
this.N$tqh=this.N$nqh=0;
this.constructor=F;
this.N$_id=++C._id;
}
E.init=function(){
var $=this;
if($=F.N$_super.prototype.init.call(this)){
$.N$yIh=C._c.N$cLh.N$yAh();
$.N$YIh=new Array(128);
$.N$JIh={};
C._g.N$pNh($.description()+"$D$TG$");
setTimeout(function(){
$.N$wLh();
},0);
}
return $;
};
E.N$UIh=function($,A){
this.N$OLh(A);
};
E.N$jIh=function(A){
var B=!(!this.N$QIh||!this.N$QIh.N$AIh());
this.N$rqh(B);
for(var D=0;128>D;D++)this.N$YIh[D]=A&&A.N$zIh(D);
this.N$SLh();
if(this.N$KIh&&this.N$KIh.length){
var E=this.N$QIh&&this.N$QIh.N$CIh(),F=$.last(E.split(".")),G=this.N$KIh.slice(0);
G.push(F);
C._g.N$pNh("$D$UG$"+G.join(" -> "));
}
this.N$QIh=null;
this.N$KIh=null;
this.N$GIh=null;
};
E.N$FIh=function(A,B){
C._g.N$pNh("-[N$ZLh N$FIh] "+[A,B]);
var D=A&&A.N$CIh(),E=$.last(D.split("."));
this.N$KIh||(this.N$KIh=[]);
this.N$KIh.push(E);
if(this.N$iqh())return;
this.N$LLh(B);
};
E.N$HLh=function($,A){
C._g.N$pNh("-[N$ZLh N$HLh] "+[$,A]);
this.N$OLh(0);
this.N$YIh=new Array(128);
this.N$f2=$;
this.N$GIh=A?A.slice(0):null;
this.N$iqh();
};
E.N$iqh=function(){
var $,A=this.N$GIh.shift();
if(!A)return!1;
this.N$QIh&&this.N$QIh.N$nCh(null);
this.N$QIh=null;
this.N$QIh=($=new C._c.N$gIh())&&$.N$OIh(A,this.N$yIh);
this.N$QIh&&this.N$QIh.N$nCh(this);
this.N$QIh&&this.N$QIh.N$RIh();
return!0;
};
E.N$rqh=function(A){
var B=this;
C._g.N$pNh("-[N$ZLh N$rqh] "+[A]);
$.each(this.N$eqh,function($){
$&&$.disconnect();
});
var D=[],E=B.N$yIh,F=E.createGain(),G=E.createDynamicsCompressor(),H=E.createDynamicsCompressor(),I=null,J=null;
G.threshold.value=-3;
G.knee.value=0;
G.ratio.value=2;
G.attack.value=0;
G.release.value=1;
H.threshold.value=-.25;
H.knee.value=0;
H.ratio.value=20;
H.attack.value=0;
H.release.value=.5;
F.connect(G);
G.connect(H);
H.connect(B.N$yIh.destination);
if(A){
I=E.createConvolver();
J=E.createGain();
I.normalize=!1;
J.gain.value=.25;
F.connect(J);
J.connect(I);
I.connect(G);
D.push(I,J);
}
B.N$eqh=D;
B.N$ZIh=F;
};
E.N$sqh=function(){
C._g.N$pNh("-[N$ZLh N$sqh] "+[]);
var $=this.N$VIh;
this.N$VIh=null;
C._g.N$pNh("$D$VG$"+$);
if($)if($.gain&&$.gain.cancelScheduledValues&&$.gain.setValueAtTime&&$.gain.linearRampToValueAtTime){
var A=this.N$yIh.currentTime;
$.gain.setValueAtTime(1,A);
$.gain.linearRampToValueAtTime(0,A+.05);
C._g.N$pNh("$D$WG$"+[A,A+.05]);
setTimeout(function(){
C._g.N$pNh("$D$XG$"+$);
$.disconnect();
},250);
}else{
C._g.N$pNh("$D$XG$"+$);
$.disconnect();
}
};
E.N$BLh=function(D,E){
var F=this;
C._g.N$pNh("-[N$ZLh N$BLh] "+[D,E]);
var G=this.N$yIh,H=this.N$JIh,I=G.currentTime,J=G.sampleRate,K=0,L=0;
function M(){
F.N$CLh();
clearInterval(F.N$tqh);
F.N$tqh=0;
clearTimeout(F.N$nqh);
F.N$nqh=0;
}
function N(){
if(G.currentTime>=K){
C._g.N$pNh("$D$YG$"+G.currentTime+", "+K);
M();
}
}
function O(A,D){
var E=null,F=A&&A.N$XIh(),H=A&&A.N$oqh(),J=D&&D.N$Tr(),K=D&&D.N$xr();
F+=(D&&D.N$Sr())*H;
var M=J+K;
C._g.N$dNh(["$D$ZG$"+D,"$D$aG$"+H,"$D$bG$"+I,"$D$cG$"+J,"$D$dG$"+K]);
try{
E=G.createBufferSource();
E.buffer=A&&A.N$WIh();
E.playbackRate.value=H;
E.start(I+J,F);
E.stop(I+M+.1);
}catch(N){
C._g.N$pNh("$D$eG$"+$.inspect(A));
C._g.N$pNh("$D$fG$"+$.inspect(A&&A.N$WIh()));
B(N);
}
M>L&&(L=M);
return E;
}
function P($,A,B){
var C=$+","+A+","+(B?1:0),D=H[C];
if(!D){
D=new Float32Array($);
var E=1;
4==A?E=2:3==A&&(E=3);
if(B)for(var F=0;$>F;F++)D[F]=Math.pow(F/$,E);else for(var G=0;$>G;G++)D[G]=Math.pow(1-G/$,E);
H[C]=D;
}
return D;
}
function Q($){
var A=G.createGain(),B=$&&$.N$Tr(),D=$&&$.N$Nr(),E=$&&$.N$Cr(),F=$&&$.N$kr(),H=$&&$.N$Lr(),K=I+B,L=K+($&&$.N$xr()),M=K+E,N=L-H;
C._g.N$dNh(["$D$gG$"+$,"$D$hG$"+D,"$D$iG$"+E,"$D$jG$"+F,"$D$kG$"+H,"$D$lG$"+K,"$D$mG$"+L,"$D$nG$"+M,"$D$oG$"+N]);
if(1==D){
A.gain.setValueAtTime(0,K);
A.gain.linearRampToValueAtTime(1,M);
}else if(2==D){
A.gain.setValueAtTime(1/32768,K);
A.gain.exponentialRampToValueAtTime(1,M);
}else if(A.gain.setValueCurveAtTime&&0!=D){
var O=Math.floor(E*J),Q=P(O,D,!0);
A.gain.setValueCurveAtTime(Q,K,O/J);
}else A.gain.setValueAtTime(1,K);
if(1==F){
A.gain.setValueAtTime(1,N);
A.gain.linearRampToValueAtTime(0,L);
}else if(2==F){
A.gain.setValueAtTime(1,N);
A.gain.exponentialRampToValueAtTime(1/32768,L-.01);
A.gain.linearRampToValueAtTime(0,L);
}else if(A.gain.setValueCurveAtTime&&0!=F){
var R=Math.floor(H*J),S=P(R,F,!1);
A.gain.setValueCurveAtTime(S,N,R/J);
}
return A;
}
F.N$gLh(D);
F.N$sqh();
var R=void 0;
try{
R=G.createGain();
R.connect(F.N$ZIh);
$.each(D&&D.N$Yr(),function($){
var A=$&&$.N$Ln(),B=F.N$YIh[A];
if(!B)throw new Error("$D$pG$"+A);
var C=O(B,$);
if(!C)throw new Error("$D$qG$"+A);
var D=Q($);
C.connect(D);
D.connect(R);
});
}catch(S){
B(S);
}
if("closed"==G.state){
C._g.N$pNh("$D$rG$");
A("closed");
}else if("suspended"==G.state){
C._g.N$pNh("$D$sG$");
G.resume().then(function(){
C._g.N$pNh("$D$tG$");
F.N$TLh();
})["catch"](function($){
C._g.N$pNh("$D$uG$"+$);
});
}else F.N$TLh();
C._g.N$dNh(["$D$vG$","$D$bG$"+I,"$D$wG$"+K,"$D$xG$"+J]);
K=I+(D&&D.N$Vr());
F.N$tqh&&clearInterval(F.N$tqh);
F.N$tqh=setInterval(N,0);
F.N$nqh&&clearTimeout(F.N$nqh);
F.N$nqh=setTimeout(M,1e3*(L+.1));
F.N$VIh=R;
N();
};
E.N$Xdt=function(){
C._g.N$pNh("-[N$ZLh N$Xdt] "+[]);
this.N$sqh();
};
return F;
});
}();
!function(){
"use strict";
C._registerClass("N$qIh",null,function($,A){
function B(){
this.N$uqh=null;
this.N$nn=this.N$aqh=this.N$fqh=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Ln=function(){
return this.N$nn;
};
A.N$WIh=function(){
return this.N$uqh;
};
A.N$XIh=function(){
return this.N$aqh;
};
A.N$oqh=function(){
return this.N$fqh;
};
A.N$IIh=function($,A,C,D){
var E=this;
if(E=B.N$_super.prototype.init.call(this)){
E.N$nn=$;
E.N$uqh=A;
E.N$aqh=C;
E.N$fqh=D;
}
return E;
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$Gkh","N$RCh",function($,A){
function B(){
C._c.N$RCh.call(this);
this.N$lqh=null;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$cqh=function(){
return this.N$lqh;
};
$.N$WCh=function(){
return"_o3a";
};
A.init=function(){
var $=this;
($=B.N$_super.prototype.init.call(this))&&document.body.appendChild($.N$NCh());
return $;
};
A.N$hqh=function($){
var A;
if(this.N$lqh!=$){
(A=this.N$lqh&&this.N$lqh.N$eLh())&&A.N$Vkh();
this.N$lqh=$;
this.N$bCh(this.N$lqh&&this.N$lqh.N$eLh());
}
};
A.N$Vkh=function(){
this.N$NCh().remove();
};
A.N$rLh=function(){
this.N$lqh&&this.N$lqh.N$ZDh(!1);
this.N$lqh&&this.N$lqh.N$tPh(!1);
};
A.N$pqh=function(){
return this;
};
return B;
});
}();
!function(){
"use strict";
C._g.N$mNh=function($,A,B,C,D,E){
return{
a:$,
b:A,
c:B,
d:C,
tx:D,
ty:E
};
};
C._g.N$gNh=function($){
return $?{
a:$.a,
b:$.b,
c:$.c,
d:$.d,
tx:$.tx,
ty:$.ty
}:null;
};
C._g.N$yNh=function($,A){
return $==A?!0:$&&A?$.a===A.a&&$.b===A.b&&$.c===A.c&&$.d===A.d&&$.tx===A.tx&&$.ty===A.ty:!1;
};
C._g.N$bNh=function($,A,B){
if(!$)return null;
return{
a:$.a*A,
b:$.b*A,
c:$.c*B,
d:$.d*B,
tx:$.tx,
ty:$.ty
};
};
C._g.N$wNh=function($,A,B){
if(!$)return null;
return{
a:$.a,
b:$.b,
c:$.c,
d:$.d,
tx:$.tx+$.a*A+$.c*B,
ty:$.ty+$.b*A+$.d*B
};
};
C._g.N$ENh=function($,A){
if(!$)return null;
var B=Math.sin(A),C=Math.cos(A);
return{
a:$.a*C+$.c*B,
b:$.b*C+$.d*B,
c:$.c*C-$.a*B,
d:$.d*C-$.b*B,
tx:$.tx,
ty:$.ty
};
};
C._g.N$SNh=function($,A){
if(!$)return C._g.N$gNh(A);
if(!A)return C._g.N$gNh($);
return{
a:$.a*A.a+$.b*A.c,
b:$.a*A.b+$.b*A.d,
c:$.c*A.a+$.d*A.c,
d:$.c*A.b+$.d*A.d,
tx:$.tx*A.a+$.ty*A.c+A.tx,
ty:$.tx*A.b+$.ty*A.d+A.ty
};
};
C._g.N$xNh=function($,A){
if(!A)return C._g.N$u($);
return{
x:$.x*A.a+$.y*A.c+A.tx,
y:$.x*A.b+$.y*A.d+A.ty
};
};
C._g.N$TNh=function($,A){
if(!A)return C._g.N$h($);
return{
width:$.width*A.a+$.height*A.c,
height:$.width*A.b+$.height*A.d
};
};
C._g.N$NNh=function($,A){
function B($,B){
return{
x:A.a*$+A.c*B+A.tx,
y:A.b*$+A.d*B+A.ty
};
}
if(!$)return null;
if(!A)return C._g.N$y($);
var D=$.x,E=$.y,F=$.x+$.width,G=$.y+$.height,H=B(D,E),I=B(F,E),J=B(D,G),K=B(F,G);
D=Math.min(H.x,I.x,J.x,K.x),F=Math.max(H.x,I.x,J.x,K.x),E=Math.min(H.y,I.y,J.y,K.y),
G=Math.max(H.y,I.y,J.y,K.y);
return{
x:D,
y:E,
width:F-D,
height:G-E
};
};
}();
!function(){
"use strict";
var $=null,A={},B=4*((Math.SQRT2-1)/3);
function D($,A,B,C,D,E,F,G,H,I){
var J=$.x,K=$.y,L=J+$.width,M=K+$.height,N=1.2,O=.761,P=.291,Q=.207,R=P+Q,S=P-Q;
A.moveTo(J+N*B,K);
A.lineTo(L-N*D,K);
A.bezierCurveTo(L-O*D,K,L-R*D,K+S*E,L-P*D,K+P*E);
A.bezierCurveTo(L-S*D,K+R*E,L,K+O*E,L,K+N*E);
A.lineTo(L,M-N*I);
A.bezierCurveTo(L,M-O*I,L-S*H,M-R*I,L-P*H,M-P*I);
A.bezierCurveTo(L-R*H,M-S*I,L-O*H,M,L-N*H,M);
A.lineTo(J+N*F,M);
A.bezierCurveTo(J+O*F,M,J+R*F,M-S*G,J+P*F,M-P*G);
A.bezierCurveTo(J+S*F,M-R*G,J,M-O*G,J,M-N*G);
A.lineTo(J,K+N*C);
A.bezierCurveTo(J,K+O*C,J+S*B,K+R*C,J+P*B,K+P*C);
A.bezierCurveTo(J+R*B,K+S*C,J+O*B,K,J+N*B,K);
A.closePath();
}
function E($,A,C,D,E,F,G,H,I,J){
var K=$.x,L=$.y,M=K+$.width,N=L+$.height,O=$.width/2,P=$.height/2;
C=Math.min(C,O);
E=Math.min(E,O);
G=Math.min(G,O);
I=Math.min(I,O);
D=Math.min(D,P);
F=Math.min(F,P);
H=Math.min(H,P);
J=Math.min(J,P);
var Q=1-B;
A.moveTo(K+C,L);
A.lineTo(M-E,L);
A.bezierCurveTo(M-Q*E,L,M,L+Q*F,M,L+F);
A.lineTo(M,N-J);
A.bezierCurveTo(M,N-Q*J,M-Q*I,N,M-I,N);
A.lineTo(K+G,N);
A.bezierCurveTo(K+Q*G,N,K,N-Q*H,K,N-H);
A.lineTo(K,L+D);
A.bezierCurveTo(K,L+Q*D,K+Q*C,L,K+C,L);
A.closePath();
}
C._registerClass("N$dqh",null,function(F,G){
function H(){
this.N$vqh=this.N$mqh=this.N$gqh=this.N$yqh=null;
this.constructor=H;
this.N$_id=++C._id;
}
G.N$bqh=function($){
this.N$gqh=$;
};
G.N$wqh=function(){
return this.N$gqh;
};
F.N$Eqh=function(){
A={};
};
F.N$Sqh=function(){
return $;
};
G.N$xqh=function($){
var A=this;
if(A=H.N$_super.prototype.init.call(this)){
A.N$mqh=$;
A.N$gqh=C._g.N$mNh(1,0,0,1,0,0);
A.N$yqh=[];
}
return A;
};
G.N$Tqh=function(A){
if(!A)return;
var B=$;
$=this;
A(this);
if(0!=this.N$yqh.length)throw new Error("$D$yG$"+this.N$yqh.length);
$=B;
};
G.N$Nqh=function(){
this.N$yqh.push({
c:this.N$vqh,
t:this.N$gqh
});
this.N$mqh.save();
};
G.N$Cqh=function(){
var $=this.N$yqh.pop();
$||($={
t:null,
c:null
});
this.N$gqh=$.t;
this.N$vqh=$.c;
this.N$mqh.restore();
};
G.N$kqh=function($,A){
this.N$gqh=C._g.N$bNh(this.N$gqh,$,A);
this.N$mqh.scale($,A);
};
G.N$Lqh=function($,A){
this.N$gqh=C._g.N$wNh(this.N$gqh,$,A);
this.N$mqh.translate($,A);
};
G.N$Aqh=function($){
this.N$gqh=C._g.N$ENh(this.N$gqh,$);
this.N$mqh.rotate($);
};
G.N$Oqh=function($){
this.N$mqh.fillRect($.x,$.y,$.width,$.height);
};
G.N$Mqh=function($){
this.N$mqh.clearRect($.x,$.y,$.width,$.height);
};
G.N$HHh=function(){
this.N$mqh.beginPath();
};
G.N$Dqh=function(){
this.N$mqh.closePath();
};
G.N$Pqh=function($){
this.N$mqh.moveTo($.x,$.y);
};
G.N$Hqh=function($){
this.N$mqh.lineTo($.x,$.y);
};
G.N$Bqh=function($,A,B){
this.N$mqh.bezierCurveTo(A.x,A.y,B.x,B.y,$.x,$.y);
};
G.N$jqh=function($,A){
this.N$mqh.quadraticCurveTo(A.x,A.y,$.x,$.y);
};
G.N$VBh=function($){
this.N$mqh.rect($.x,$.y,$.width,$.height);
};
G.N$Fqh=function($){
var A=$.x,C=$.y,D=A+$.width,E=C+$.height,F=$.width/2,G=$.height/2,H=(1-B)*F,I=(1-B)*G,J=this.N$mqh;
J.moveTo(A+F,C);
J.bezierCurveTo(D-H,C,D,C+I,D,C+G);
J.bezierCurveTo(D,E-I,D-H,E,D-F,E);
J.bezierCurveTo(A+H,E,A,E-I,A,E-G);
J.bezierCurveTo(A,C+I,A+H,C,A+F,C);
J.closePath();
};
G.N$Iqh=function($,A,B,C,D){
E($,this.N$mqh,A,A,B,B,C,C,D,D);
};
G.N$BHh=function($,A){
E($,this.N$mqh,A,A,A,A,A,A,A,A);
};
G.N$qqh=function($,A,B,C){
var D=1&A?B:C,F=2&A?B:C,G=4&A?B:C,H=8&A?B:C;
E($,this.N$mqh,D,D,F,F,G,G,H,H);
};
G.N$Rqh=function($,A,B){
var C=1&A?B:0,D=2&A?B:0,F=4&A?B:0,G=8&A?B:0;
E($,this.N$mqh,C,C,D,D,F,F,G,G);
};
G.N$Uqh=function($,A,B){
var C=1&A,D=2&A,F=4&A,G=8&A,H=B.width,I=B.height;
E($,this.N$mqh,C?H:0,C?I:0,D?H:0,D?I:0,F?H:0,F?I:0,G?H:0,G?I:0);
};
G.N$zqh=function($,A,B){
var C=1&A,E=2&A,F=4&A,G=8&A,H=B.width,I=B.height;
D($,this.N$mqh,C?H:0,C?I:0,E?H:0,E?I:0,F?H:0,F?I:0,G?H:0,G?I:0);
};
G.N$Wqh=function($){
if(this.N$vqh){
this.N$vqh=C._g.N$D(this.N$vqh,$);
this.N$vqh||(this.N$vqh=C._g.N$g());
}else this.N$vqh=$;
if(this.N$vqh){
this.N$mqh.beginPath();
this.N$mqh.rect(this.N$vqh.x,this.N$vqh.y,this.N$vqh.width,this.N$vqh.height);
this.N$mqh.clip();
}
};
G.N$Xqh=function($,B){
var D=$&&$.N$Vqh(),E=$&&$.N$Jqh();
if(2!=D.length||2!=E.length||0!=E[0]||1!=E[1])return null;
var F=D[0],G=D[1],H=C._g.N$PNh(F),I=C._g.N$PNh(G);
B=4*Math.ceil(B/4);
var J=F+"|"+G+"|"+B,K=J?A[J]:null;
if(K)return K;
if(!H||!I)return null;
K=document.createElement("canvas");
K.width=4;
K.height=B;
for(var L=K.getContext("2d"),M=L.createImageData(4,B),N=M.data,O=B-1,P=H[0],Q=H[1],R=H[2],S=Math.round(255*H[3]),T=I[0]-P,U=I[1]-Q,V=I[2]-R,W=Math.round(255*I[3])-S,X=[1/17,9/17,3/17,11/17,13/17,5/17,15/17,7/17,4/17,12/17,2/17,10/17,16/17,8/17,14/17,6/17],Y=0;B>Y;Y++)for(var Z=Y/O,_=4*M.width*Y,a=P+T*Z,b=Q+U*Z,c=R+V*Z,d=S+W*Z,e=0;4>e;e++){
var f=X[Y%4*4+e%4];
N[_++]=a+f;
N[_++]=b+f;
N[_++]=c+f;
N[_++]=d+f;
}
L.putImageData(M,0,0);
A[J]=K;
return K;
};
G.N$jHh=function($){
this.N$mqh.fillStyle=$;
this.N$mqh.fill();
};
G.N$JBh=function($,A){
this.N$mqh.fillStyle=$;
this.N$mqh.fill(A);
};
G.N$Kqh=function($,A){
this.N$Qqh($,A,"nonzero");
};
G.N$Qqh=function($,A,B){
var D=C._g.N$NNh(A,this.N$gqh),E=this.N$Xqh($,D.height);
if(E){
this.N$mqh.save();
this.N$mqh.setTransform(1,0,0,1,0,D.y);
this.N$mqh.fillStyle=this.N$mqh.createPattern(E,"repeat");
this.N$mqh.fill(B);
this.N$mqh.restore();
}else this.N$Gqh($,A,-90,B);
};
G.N$Yqh=function($,A,B){
this.N$Gqh($,A,B,"nonzero");
};
G.N$Gqh=function($,A,B,C){
var D=Math.PI,E=D/2,F=B-360*Math.floor(B/360)-180,G=F*D/180,H=A.width,I=A.height,J=A.x,K=A.y,L=A.x+H,M=A.y+I,N=Math.atan2(I,H),O=Math.sqrt(H*H+I*I),P=void 0;
if(G>=0&&E>G){
var Q=O*Math.sin(G-N);
P=this.N$mqh.createLinearGradient(J,K,L-Math.cos(E-G)*Q,M+Math.sin(E-G)*Q);
}else if(G>=E){
G=3*E-G;
var R=O*Math.sin(G-N-E);
P=this.N$mqh.createLinearGradient(L,K,J-Math.sin(E-G)*R,M+Math.cos(E-G)*R);
}else if(-E>=G){
var S=O*Math.sin(G-N-D);
P=this.N$mqh.createLinearGradient(L,M,J-Math.cos(E-G)*S,K+Math.sin(E-G)*S);
}else if(G>=-E&&0>G){
G=3*E-G;
var T=O*Math.sin(G-N+E);
P=this.N$mqh.createLinearGradient(J,M,L-Math.sin(E-G)*T,K+Math.cos(E-G)*T);
}
if(!P)return;
for(var U=$&&$.N$Vqh(),V=$&&$.N$Jqh(),W=0,X=U.length;X>W;W++)P.addColorStop(V[W],U[W]);
this.N$mqh.fillStyle=P;
this.N$mqh.fill(C);
};
G.N$Zqh=function($,A,B){
this.N$mqh.shadowBlur=B;
this.N$mqh.shadowOffsetX=A?A.x:0;
this.N$mqh.shadowOffsetY=A?A.y:0;
this.N$mqh.shadowColor=$;
};
G.N$eRh=function(){
this.N$Zqh(null,null,0);
};
G.N$tRh=function($,A){
this.N$mqh.save();
A=C._g.N$xNh(A,this.N$gqh);
this.N$mqh.setTransform(1,0,0,1,0,0);
this.N$mqh.drawImage($&&$.N$nRh(),A.x,A.y);
this.N$mqh.restore();
};
G.N$rRh=function($,A){
var B=$&&$.N$iRh(),D=C._g.N$d(B);
C._g.N$U(D,A);
this.N$tRh($,D);
};
G.N$sRh=function($){
this.N$mqh.save();
$&&$(this.N$mqh);
this.N$mqh.restore();
};
return H;
});
}();
!function(){
"use strict";
C._registerClass("N$oRh",null,function($,A){
function B(){
this.N$uRh=this.N$aRh=null;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Vqh=function(){
return this.N$uRh;
};
A.N$Jqh=function(){
return this.N$aRh;
};
$.N$fRh=function($){
for(var A,B=[],C=0,D=$.length;D>C;C++)B.push(C/(D-1));
return(A=this.alloc())&&A.N$lRh($,B);
};
$.N$cRh=function($,A){
var B;
return(B=this.alloc())&&B.N$lRh($,A);
};
A.N$lRh=function($,A){
var C=this;
if(C=B.N$_super.prototype.init.call(this)){
C.N$uRh=$;
C.N$aRh=A;
}
return C;
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$hRh",null,function($,A){
function B(){
this.N$pRh=this.N$dRh=null;
this.N$wmt=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$iRh=function(){
return this.N$dRh;
};
A.N$vRh=function(){
return this.N$wmt;
};
A.N$nRh=function(){
return this.N$pRh;
};
$.N$mRh=function($,A,B){
var C;
return(C=this.alloc())&&C.N$gRh($,A,B);
};
A.N$gRh=function($,A,D){
var E=this;
if(E=B.N$_super.prototype.init.call(this)){
var F=C._c.N$LHh.N$kHh(D);
F&&F.N$sLh(C._g.N$d($));
F&&F.N$yRh(A);
E.N$dRh=$;
E.N$wmt=F&&F.N$vRh();
F&&F.N$bRh();
E.N$pRh=F&&F.N$nRh();
}
return E;
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$LHh",null,function($,A){
function B(){
this.N$Fdt=this.N$pRh=this.N$wRh=this.N$Met=this.N$ERh=null;
this.N$SRh=this.N$xRh=this.N$wmt=0;
this.N$TRh=!1;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$w4=function(){
return C.makeCopy(this.N$Met);
};
A.N$NRh=function(){
return C.makeCopy(this.N$wRh);
};
A.N$vRh=function(){
return this.N$wmt;
};
A.N$CRh=function(){
return this.N$ERh;
};
A.N$Wdt=function(){
return this.N$Fdt;
};
A.N$nRh=function(){
return this.N$pRh;
};
$.N$kHh=function($){
var A;
return(A=new C._c.N$LHh())&&A.N$nst($);
};
A.N$nst=function($){
var A=this;
if(A=B.N$_super.prototype.init.call(this)){
A.N$Fdt=$;
A.N$pRh=document.createElement("canvas");
A.N$wmt=C._g.N$ANh();
var D=A.N$pRh.style;
D.position="absolute";
D.top="0";
D.left="0";
}
return A;
};
A.N$kRh=function(){
var $=C._g.N$m(this.N$Met?this.N$Met.x:0,this.N$Met?this.N$Met.y:0,this.N$Met?this.N$Met.width:0,this.N$Met?this.N$Met.height:0);
this.N$wRh&&($=C._g.N$q($,this.N$wRh));
var A=this.N$pRh.style;
A.left=$.x+"px";
A.top=$.y+"px";
A.width=$.width+"px";
A.height=$.height+"px";
var B=Math.floor($.height*this.N$wmt),D=Math.floor($.width*this.N$wmt);
if(this.N$SRh!=B||this.N$xRh!=D){
this.N$xRh=D;
this.N$SRh=B;
}
};
A.N$LRh=function($){
this.N$ERh=$;
};
A.N$DHh=function(){
if(!this.N$TRh){
this.N$TRh=!0;
C._c.N$RCh.N$ARh(this);
}
};
A.N$bRh=function(){
var $;
if(this.N$TRh){
var A=this.N$xRh,B=this.N$SRh,D=this.N$pRh,E=D.getContext("2d"),F=($=new C._c.N$dqh())&&$.N$xqh(E);
D.width=A;
D.height=B;
E.setTransform(1,0,0,1,0,0);
var G=Math.floor(A/2);
E.clearRect(0,0,G,B);
E.clearRect(G,0,A-G,B);
E.beginPath();
E.save();
if(this.N$Fdt){
F&&F.N$kqh(this.N$wmt,this.N$wmt);
this.N$wRh&&F&&F.N$Lqh(-this.N$wRh.left,-this.N$wRh.top);
F&&F.N$Tqh(this.N$Fdt);
}
E.restore();
this.N$TRh=!1;
}
};
A.N$ORh=function(){
C._c.N$RCh.N$MRh(this);
};
A.N$DRh=function(){
this.N$ERh&&this.N$ERh.N$PRh(this);
};
A.N$PHh=function(){
return C._g.N$w(this.N$Met);
};
A.N$sLh=function($){
if(!C._g.N$S(this.N$Met,$)){
this.N$Met=C._g.N$y($);
this.N$kRh();
this.N$DHh();
}
};
A.N$ZPh=function($){
if(this.N$Fdt!=$){
this.N$Fdt=$;
this.N$DHh();
}
};
A.N$HRh=function($){
if(!C._g.N$I(this.N$wRh,$)){
this.N$wRh=$;
this.N$kRh();
this.N$DHh();
}
};
A.N$yRh=function($){
$||($=C._g.N$ANh());
if(this.N$wmt!=$){
this.N$wmt=$;
this.N$kRh();
this.N$DHh();
}
};
return B;
});
}();
!function(){
"use strict";
var A=null,B=null,D=null,E=!1,F=0,G=0;
function H(){
if(E)return;
document.addEventListener("touchstart",function($){
F>0&&$.preventDefault();
},!0);
$.each(["mousedown","mouseup","mousemove","click"],function($){
document.addEventListener($,function($){
if(G>0){
$.stopPropagation();
$.preventDefault();
}
},!0);
});
E=!0;
}
function I(){
var $;
document.removeEventListener("touchstart",M,!1);
document.removeEventListener("touchend",L,!1);
document.removeEventListener("touchmove",N,!1);
document.removeEventListener("touchcancel",O,!1);
document.removeEventListener("mouseup",P,!1);
document.removeEventListener("mousemove",Q,!1);
document.removeEventListener("contextmenu",R,!0);
if(D){
var A=($=D)&&$.N$BRh();
A.removeEventListener("mouseover",S,!1);
A.removeEventListener("mouseout",T,!1);
}
D=null;
}
function J($,A){
var B;
I();
if(A){
document.addEventListener("touchstart",M,!1);
document.addEventListener("touchend",L,!1);
document.addEventListener("touchmove",N,!1);
document.addEventListener("touchcancel",O,!1);
}else{
document.addEventListener("mouseup",P,!1);
document.addEventListener("mousemove",Q,!1);
document.addEventListener("contextmenu",R,!0);
}
if(!A){
var C=(B=$)&&B.N$BRh();
C.addEventListener("mouseover",S,!1);
C.addEventListener("mouseout",T,!1);
}
D=$;
}
function K(){
var $,C,E,F,G,H=A,J=null;
D!=H||($=H)&&$.N$jRh()||(J=B);
(C=D)&&C.N$FRh();
I();
A=B=null;
if(J){
var K=(E=H)&&E.N$ZAh();
(F=J)&&F.N$IRh(K.x,K.y,(G=H)&&G.N$qRh());
setTimeout(function(){
var $;
($=J)&&$.N$FRh();
},0);
I();
}
}
function L($){
C._g.N$CNh(function(){
$.stopPropagation();
$.preventDefault();
K();
G++;
F++;
setTimeout(function(){
F--;
},500);
setTimeout(function(){
G--;
},1e3);
});
}
function M($){
C._g.N$CNh(function(){
var A;
$.touches.length>1&&(A=D)&&A.N$RRh(!1);
});
}
function N($){
C._g.N$CNh(function(){
var A,B=$.touches.length>0?$.touches[0]:null;
if(!B)return;
(A=D)&&A.N$URh(B.pageX,B.pageY,!0);
});
}
function O(){
C._g.N$CNh(function(){
var $;
($=D)&&$.N$RRh(!1);
});
}
function P(){
C._g.N$CNh(function(){
K();
});
}
function Q($){
C._g.N$CNh(function(){
var A;
(A=D)&&A.N$URh($.pageX,$.pageY,!1);
});
}
function R(){
C._g.N$CNh(function(){
var $,C;
($=D)&&$.N$RRh(!1);
(C=D)&&C.N$FRh();
I();
A=B=null;
});
}
function S(){
C._g.N$CNh(function(){
var $;
($=D)&&$.N$RRh(!0);
});
}
function T(){
C._g.N$CNh(function(){
var $;
($=D)&&$.N$RRh(!1);
});
}
C._registerClass("N$XAh",null,function($,E){
function F(){
this.N$INh=this.N$zFh=this.N$zRh=this.N$WRh=null;
this.N$XRh=0;
this.N$VRh=this.N$JRh=this.N$KRh=!1;
this.constructor=F;
this.N$_id=++C._id;
}
E.N$qRh=function(){
return this.N$KRh;
};
E.N$KAh=function(){
return this.N$VRh;
};
E.N$jRh=function(){
return this.N$JRh;
};
E.N$ZAh=function(){
return this.N$WRh;
};
E.N$QRh=function(){
return this.N$XRh;
};
E.N$BRh=function(){
return this.N$zRh;
};
E.N$rCh=function(){
return this.N$INh;
};
E.N$WAh=function($,A,B){
var D=this;
if(D=F.N$_super.prototype.init.call(this)){
D.N$INh=B;
D.N$XRh=A;
D.N$zRh=$;
D.N$WRh=C._g.N$o();
H();
D.N$GRh();
}
return D;
};
E.N$GRh=function(){
var $=this,D=this.N$zRh,E=this.N$XRh;
function F(){
3==E?A=$:1==E&&(B=$);
}
D.addEventListener("touchstart",F,!0);
D.addEventListener("mousedown",F,!0);
D.addEventListener("touchstart",function(D){
C._g.N$CNh(function(){
if(A&&B==$)return;
(2==E||3==E)&&D.preventDefault();
if(0!=E)if(D.touches.length>1)$.N$RRh(!1);else{
var C=D.touches[0];
$.N$IRh(C.pageX,C.pageY,!0);
}
D.stopPropagation();
});
},!1);
D.addEventListener("mousedown",function(D){
C._g.N$CNh(function(){
if(A&&B==$)return;
D.stopPropagation();
0!=E&&$.N$IRh(D.pageX,D.pageY,!1);
});
},!1);
};
E.N$IRh=function($,A,B){
this.N$WRh=C._g.N$s($,A);
this.N$zFh=this.N$WRh;
this.N$KRh=B;
this.N$JRh=!1;
if(this.N$INh&&this.N$INh.N$GAh(this)){
J(this,B);
this.N$RRh(!0);
}
};
E.N$URh=function($,A,B){
this.N$WRh=C._g.N$s($,A);
if(B){
var E=$-this.N$zFh.x,F=A-this.N$zFh.y;
if(Math.abs(E)>10||Math.abs(F)>10){
this.N$JRh=!0;
1==this.N$XRh&&D&&D.N$RRh(!1);
}
}
this.N$INh&&this.N$INh.respondsToSelector_("N$nOh")&&this.N$INh&&this.N$INh.N$nOh(this);
};
E.N$RRh=function($){
if(this.N$VRh!=$){
this.N$VRh=$;
this.N$INh&&this.N$INh.respondsToSelector_("N$nOh")&&this.N$INh&&this.N$INh.N$nOh(this);
}
};
E.N$FRh=function(){
this.N$INh&&this.N$INh.respondsToSelector_("N$rOh")&&this.N$INh&&this.N$INh.N$rOh(this);
this.N$RRh(!1);
this.N$WRh=this.N$zFh=C._g.N$o();
};
return F;
});
}();
!function(){
"use strict";
var $=null,A=0;
C._g.N$CNh=function(A){
try{
A();
}catch(B){
$&&$(B);
}
C._g.N$kNh();
};
C._g.N$kNh=function(){
var $;
($=C._c.N$RCh)&&$.N$uLh();
};
C._g.N$LNh=function(A){
$=A;
};
C._g.N$ANh=function(){
return Math.ceil(window.devicePixelRatio||1);
};
C._g.N$ONh=function($,A){
var B=(16711680&$)>>16,C=(65280&$)>>8,D=255&$;
return"rgba("+B+","+C+","+D+","+A+")";
};
C._g.N$MNh=function($){
return"rgba("+$[0]+","+$[1]+","+$[2]+","+$[3]+")";
};
C._g.N$DNh=function(){
return["rgba(255,0  ,0  ,0.5)","rgba(0  ,255,0  ,0.5)","rgba(0  ,0  ,255,0.5)","rgba(0  ,255,255,0.5)","rgba(255,255,0  ,0.5)","rgba(255,0  ,255,0.5)"][A++%6];
};
C._g.N$PNh=function($){
var A=!1,B=void 0,C=void 0,D=void 0,E=void 0;
if(!A){
var F=$.match(/#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})/i);
if(F){
B=parseInt(F[1],16);
C=parseInt(F[2],16);
D=parseInt(F[3],16);
E=1;
A=!0;
}
}
if(!A){
var G=$.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
if(G){
B=parseInt(G[1],10);
C=parseInt(G[2],10);
D=parseInt(G[3],10);
E=1;
A=!0;
}
}
if(!A){
var H=$.match(/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9]+\.?[0-9]*)\s*\)/);
if(H){
B=parseInt(H[1],10);
C=parseInt(H[2],10);
D=parseInt(H[3],10);
E=parseFloat(H[4]);
A=!0;
}
}
return A?[B,C,D,E]:null;
};
C._g.N$HNh=function($,A,B){
var D,E;
return(D=(E=C._c.N$hRh)&&E.alloc())&&D.N$gRh($,A,B);
};
}();
!function(){
"use strict";
var A=1,B=0,D=!1,E=[],F=[],G=[],H=[];
C._registerClass("N$RCh",null,function(I,J){
function K(){
this.N$Met=this.N$YRh=this.N$ZRh=this.N$eUh=this.N$tUh=this.N$nUh=this.N$rUh=null;
this.N$iUh=this.N$ddt=this.N$sUh=this.N$oUh=!1;
this.constructor=K;
this.N$_id=++C._id;
}
J.N$Xkh=function(){
return this.N$rUh;
};
J.N$QOh=function(){
return this.N$tUh;
};
J.N$XBh=function($){
this.N$iUh=$;
};
J.N$uUh=function(){
return this.N$iUh;
};
J.N$w4=function(){
return C.makeCopy(this.N$Met);
};
J.N$eft=function(){
return this.N$ddt;
};
I.N$ARh=function($){
F.push($);
this.N$fUh();
};
I.N$MRh=function($){
G.push($);
this.N$fUh();
};
J.description=function(){
return"<"+this.className()+" "+this.N$lUh()+">";
};
I.N$fUh=function(){
if(!D){
window.requestAnimationFrame(function(){
C._g.N$CNh(function(){
C._c.N$RCh.N$uLh();
});
});
D=!0;
}
};
I.N$uLh=function(){
B++;
for(;E.length;){
var $=E.slice(0);
E=[];
for(var A,I=0,J=$?$.length:0;J>I;I++){
A=$[I];
A&&A.N$cUh();
}
}
for(;F.length;){
var K=F.slice(0);
F=[];
for(var L,M=0,N=K?K.length:0;N>M;M++){
L=K[M];
L&&L.N$bRh();
}
}
for(var O,P=0,Q=G?G.length:0;Q>P;P++){
O=G[P];
O&&O.N$DRh();
}
G=[];
for(var R,S=0,T=H?H.length:0;T>S;S++){
R=H[S];
R&&R.N$Vkh();
}
H=[];
C._c.N$dqh.N$Eqh();
B--;
D=!1;
};
I.N$ROh=function(){
return"div";
};
I.N$WCh=function(){
return null;
};
I.N$ZOh=function($){
var A;
return(A=this.alloc())&&A.N$hUh($);
};
I.N$pUh=function($,A){
var B,C=(B=this.alloc())&&B.N$hUh($);
C&&C.N$hCh(A);
return C;
};
I.N$JCh=function($){
var A,B=(A=this.alloc())&&A.init();
B&&B.N$hCh($);
return B;
};
J.N$hUh=function($){
var A=this;
if(A=K.N$_super.prototype.init.call(this)){
for(var B=document.createElement($),D=C._c.N$RCh,E=A.constructor;E!=D;){
var F=E&&E.N$WCh();
F&&B.classList.add(F);
E=E&&E.superclass();
}
A.N$GBh();
A.N$iUh=!0;
A.N$eUh=B;
A.N$tUh=[];
}
return A;
};
J.init=function(){
var $;
return this.N$hUh(($=this.constructor)&&$.N$ROh());
};
J.N$dUh=function($,A){
var B;
A>0&&$(this);
for(var C=A+1,D=0,E=this.N$tUh.length;E>D;D++)(B=this.N$tUh[D])&&B.N$dUh($,C);
};
J.N$vUh=function($){
this.N$rUh=$;
};
J.N$mUh=function(A){
this.N$GBh();
this.N$tUh=$.without(this.N$tUh,A);
};
J.N$bCh=function($){
if(!$)return;
if(this.N$sUh){
this.N$nUh||(this.N$nUh=[]);
this.N$nUh.push($);
return;
}
if(($&&$.N$Xkh())!=this){
$&&$.N$vUh(this);
this.N$KOh().appendChild($&&$.N$NCh());
this.N$tUh.push($);
this.N$GBh();
}
};
J.N$ECh=function(A){
var B=this;
$.each(A,function($){
B.N$bCh($);
});
};
J.N$gUh=function(){
$.each(this.N$tUh.slice(0),function($){
$&&$.N$Vkh();
});
};
J.N$ORh=function(){
H.push(this);
C._c.N$RCh.N$fUh();
};
J.N$Vkh=function(){
var $=this.N$Xkh();
if(!$)return;
$&&$.N$mUh(this);
this.N$vUh(null);
var A=this.N$NCh();
A&&A.parentNode&&A.parentNode.removeChild(A);
};
J.N$yUh=function(A,B){
var C=this.N$tUh[B];
this.N$bCh(A);
if(C){
this.N$tUh=$.without(this.N$tUh,A);
this.N$tUh.splice(B,0,A);
this.N$NCh().insertBefore(A&&A.N$NCh(),C&&C.N$NCh());
}
};
J.N$bUh=function(A,B){
var C=$.indexOf(this.N$tUh,B);
this.N$yUh(A,C);
};
J.N$Wkh=function(A,B){
var C=$.indexOf(this.N$tUh,B);
this.N$yUh(A,C+1);
};
J.N$wUh=function($){
var A=this;
if($)for(;A;){
if(A==$)return!0;
A=A&&A.N$Xkh();
}
return!1;
};
J.N$Sct=function($){
if(this.N$ddt!=$){
this.N$ddt=$;
var A=this.N$S4();
this.N$ddt?A.display="none":A.removeProperty("display");
}
};
J.N$EUh=function(){
var A=this;
if(this.N$sUh)return;
this.N$sUh=!0;
this.N$YRh=this.N$XCh();
this.N$sUh=!1;
$.each(this.N$nUh,function($){
A.N$bCh($);
});
A.N$nUh=null;
A.N$VCh();
A.N$XFh();
};
J.N$NCh=function(){
this.N$YRh||this.N$EUh();
return this.N$eUh;
};
J.N$KOh=function(){
this.N$YRh||this.N$EUh();
return this.N$YRh;
};
J.N$hCh=function($){
$&&this.N$eUh.classList.add($);
};
J.N$qFh=function($){
$&&this.N$eUh.classList.remove($);
};
J.N$yHh=function($){
$&&this.N$eUh.classList.toggle($);
};
J.N$okh=function($,A){
$&&this.N$eUh.classList.toggle($,!!A);
};
J.N$uOh=function($,A){
this.N$eUh.setAttribute(A,$);
};
J.N$dFh=function($){
return this.N$eUh.getAttribute($);
};
J.N$EOh=function($){
this.N$eUh.removeAttribute($);
};
J.N$uFh=function($){
var A=this.N$KOh();
A.textContent=$;
};
J.N$SUh=function(){
var $=this.N$KOh();
return $.textContent;
};
J.N$KCh=function($){
var A=this.N$KOh();
A.innerHTML=$;
};
J.N$xUh=function(){
var $=this.N$KOh();
return $.innerHTML;
};
J.N$S4=function(){
return this.N$eUh.style;
};
J.N$OHh=function($){
if(!$)return;
this.N$ZRh||(this.N$ZRh=[]);
this.N$ZRh.push($);
this.N$GBh();
$&&$.N$LRh(this);
this.N$eUh.appendChild($&&$.N$nRh());
};
J.N$PRh=function(A){
if(!A)return;
var B=A&&A.N$nRh();
B&&B.parentNode==this.N$eUh&&B.parentNode.removeChild(B);
this.N$ZRh=$.without(this.N$ZRh,A);
A&&A.N$LRh(null);
};
J.N$GBh=function(){
if(!this.N$oUh){
this.N$oUh=!0;
E.push(this);
C._c.N$RCh.N$fUh();
}
};
J.N$cUh=function(){
var A=this;
if(this.N$oUh){
this.N$YRh||this.N$EUh();
if(this.N$iUh){
var B=this.N$PHh();
$.each(this.N$ZRh,function($){
$&&$.N$sLh(B);
});
}
(A.N$Met||A.N$mIh())&&A.N$KBh();
A.N$oUh=!1;
}
};
J.N$Ajh=function(){
if(this.N$oUh){
B++;
this.N$cUh();
B--;
}
};
J.N$KBh=function(){};
J.N$sLh=function($){
if(!this.N$Met&&!$)return;
var A=this.N$Met?this.N$Met:C._g.N$m(Number.NaN,Number.NaN,0,0),D=this.N$eUh.style;
this.N$Met=C._g.N$y($);
if($){
if(A.x!=$.x||A.y!=$.y){
D.position="absolute";
D.top=$.y+"px";
D.left=$.x+"px";
}
if(A.width!=$.width||A.height!=$.height){
D.width=$.width+"px";
D.height=$.height+"px";
this.N$GBh();
B>0&&this.N$cUh();
}
}else{
D.removeProperty("position");
D.removeProperty("top");
D.removeProperty("left");
D.removeProperty("width");
D.removeProperty("height");
}
};
J.N$TUh=function($,A){
this.N$sLh(C._g.N$d($));
A&&(this.N$eUh.style.position="relative");
};
J.N$mIh=function(){
return!1;
};
J.N$PHh=function(){
return this.N$Met?C._g.N$w(this.N$Met):null;
};
J.N$lUh=function(){
var $=this.N$dFh("id");
if(!$){
$="ax-"+A++;
this.N$uOh($,"id");
}
return $;
};
J.N$zrt=function($){
$?this.N$uOh($,"aria-label"):this.N$EOh("aria-label");
};
J.N$Znt=function(){
return this.N$dFh("aria-label");
};
J.N$NUh=function($){
this.N$uOh($&&$.N$lUh(),"aria-labelledby");
};
J.N$XCh=function(){
return this.N$eUh;
};
J.N$VCh=function(){};
J.N$XFh=function(){};
return K;
});
}();
}).call(this);