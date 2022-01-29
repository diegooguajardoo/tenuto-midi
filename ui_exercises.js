/*! @license

(c) 2000-2021 musictheory.net, LLC. All rights reserved.

This file is licensed only for use in providing musictheory.net's
online services and is subject to the Source Code Policy stated
at https://www.musictheory.net/legal 

You may not port this file to another platform without
musictheory.net, LLC's written consent

*/
(function(){
var $=_musictheory_net_("_"),A=(_musictheory_net_("namespace"),_musictheory_net_("require")),B=(_musictheory_net_("nilscript"),
_musictheory_net_("N$$_")),C=_musictheory_net_("$");
!function(){
"use strict";
B._registerClass("N$itM","N$UDh",function($,A){
function D(){
B._c.N$UDh.call(this);
this.N$stM=this.N$INh=this.N$otM=this.N$utM=this.N$atM=this.N$ftM=this.N$ltM=this.N$ctM=this.N$htM=this.N$ptM=this.N$dtM=this.N$vtM=this.N$mtM=this.N$gtM=null;
this.N$zNh=this.N$Oit=this.N$ytM=0;
this.N$btM=!1;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$wtM=function($){
this.N$otM=$;
};
A.N$EtM=function(){
return this.N$otM;
};
A.N$StM=function(){
return this.N$Oit;
};
A.N$xtM=function(){
return this.N$atM;
};
A.N$TtM=function(){
return this.N$ctM;
};
A.N$NtM=function($){
this.N$btM=$;
};
A.N$CtM=function(){
return this.N$btM;
};
A.N$nCh=function($){
this.N$INh=$;
};
A.N$rCh=function(){
return this.N$INh;
};
$.N$WCh=function(){
return"_l5l";
};
A.N$QDh=function(){
var $,A,C,E,F,G=this;
D.N$_super.prototype.N$QDh.call(this);
this.N$dtM=B._c.N$RCh.N$JCh("_c5l");
this.N$ptM=B._c.N$QCh.N$JCh("_h5l");
this.N$ptM&&this.N$ptM.N$yOh(function(){
G.N$ktM();
});
G.N$utM=($=new B._c.N$LtM())&&$.init();
G.N$ltM=B._c.N$RCh.N$JCh("_p5l");
G.N$vtM=B._c.N$QCh.N$JCh("_d5l");
G.N$vtM&&G.N$vtM.N$uFh("Start Challenge");
G.N$gtM=B._c.N$QCh.N$JCh("_d5l");
G.N$gtM&&G.N$gtM.N$uFh("View Report");
G.N$stM=B._c.N$RCh.N$JCh("_v5l");
G.N$htM=(A=new B._c.N$AtM())&&A.init();
G.N$ftM=(C=new B._c.N$AtM())&&C.init();
G.N$mtM=(E=new B._c.N$OtM())&&E.init();
G.N$htM&&G.N$htM.N$yOh(function(){
G.N$INh&&G.N$INh.N$MtM(G,"last");
});
G.N$ftM&&G.N$ftM.N$yOh(function(){
G.N$INh&&G.N$INh.N$MtM(G,"high");
});
G.N$gtM&&G.N$gtM.N$yOh(function(){
G.N$INh&&G.N$INh.N$MtM(G,"high");
});
G.N$vtM&&G.N$vtM.N$yOh(function(){
G.N$INh&&G.N$INh.N$DtM(G);
});
G.N$dtM&&G.N$dtM.N$bCh(G.N$utM);
G.N$dtM&&G.N$dtM.N$bCh(G.N$stM);
G.N$dtM&&G.N$dtM.N$bCh(G.N$ltM);
G.N$dtM&&G.N$dtM.N$bCh(G.N$htM);
G.N$dtM&&G.N$dtM.N$bCh(G.N$ftM);
G.N$dtM&&G.N$dtM.N$bCh(G.N$mtM);
G.N$dtM&&G.N$dtM.N$bCh(G.N$gtM);
G.N$dtM&&G.N$dtM.N$bCh(G.N$vtM);
(F=G.N$eLh())&&F.N$bCh(G.N$dtM);
};
A.N$pIh=function(){
var $;
D.N$_super.prototype.N$pIh.call(this);
var A=($=this.N$eLh())&&$.N$PHh(),C=B._g.N$m(0,0,288,288);
B._g.N$U(C,A);
this.N$dtM&&this.N$dtM.N$sLh(C);
A=this.N$dtM&&this.N$dtM.N$PHh();
this.N$stM&&this.N$stM.N$sLh(A);
this.N$ptM&&this.N$ptM.N$sLh(A);
var E=48,F=48,G=8,H=B._g.N$y(A);
B._g.N$at(H,E+G);
B._g.N$ft(H,-(G+F+G));
var I=B._g.N$y(A),J=B._g.N$E(A,8,0);
I.height=E;
J.height=F;
B._g.N$mt(I,A);
B._g.N$gt(J,A);
B._g.N$ht(J,8);
this.N$utM&&this.N$utM.N$sLh(I);
this.N$vtM&&this.N$vtM.N$sLh(J);
if(this.N$htM&&this.N$htM.N$eft()&&this.N$ftM&&this.N$ftM.N$eft())if(this.N$mtM&&this.N$mtM.N$eft())this.N$ltM&&this.N$ltM.N$sLh(B._g.N$E(H,8,0));else{
var K=B._g.N$y(J),L=B._g.N$E(H,8,0);
B._g.N$wt(K,J);
B._g.N$ht(K,8);
L.height=B._g.N$N(K)-B._g.N$N(L)-16;
this.N$mtM&&this.N$mtM.N$sLh(L);
this.N$gtM&&this.N$gtM.N$sLh(K);
}else{
var M=B._g.N$g(),N=B._g.N$g();
B._g.N$G([M,N],B._g.N$E(H,8,16),[8]);
this.N$ftM&&this.N$ftM.N$eft()?B._g.N$U(N,H):this.N$htM&&this.N$htM.N$eft()&&B._g.N$U(M,H);
this.N$htM&&this.N$htM.N$sLh(N);
this.N$ftM&&this.N$ftM.N$sLh(M);
}
};
A.N$PtM=function($){
var A=this;
function B($){
A.N$utM&&A.N$utM.N$sot();
A.N$ltM&&A.N$ltM.N$Sct(!1);
A.N$htM&&A.N$htM.N$Sct(!0);
A.N$ftM&&A.N$ftM.N$Sct(!0);
A.N$mtM&&A.N$mtM.N$Sct(!0);
A.N$gtM&&A.N$gtM.N$Sct(!0);
A.N$stM&&A.N$stM.N$Vkh();
A.N$ltM&&A.N$ltM.N$KCh($);
}
function C($,B){
A.N$utM&&A.N$utM.N$sot();
A.N$ftM&&A.N$ftM.N$HtM("High Score",A.N$atM);
A.N$htM&&A.N$htM.N$HtM("Last Score",A.N$ctM);
A.N$ltM&&A.N$ltM.N$Sct(!0);
A.N$htM&&A.N$htM.N$Sct(!B);
A.N$ftM&&A.N$ftM.N$Sct(!$);
A.N$mtM&&A.N$mtM.N$Sct(!0);
A.N$gtM&&A.N$gtM.N$Sct(!0);
A.N$stM&&A.N$stM.N$Vkh();
}
function D(){
A.N$utM&&A.N$utM.N$sot();
A.N$mtM&&A.N$mtM.N$BtM(A.N$atM);
A.N$ltM&&A.N$ltM.N$Sct(!0);
A.N$htM&&A.N$htM.N$Sct(!0);
A.N$ftM&&A.N$ftM.N$Sct(!0);
A.N$mtM&&A.N$mtM.N$Sct(!1);
A.N$gtM&&A.N$gtM.N$Sct(!1);
}
if(1==$)B("Tap below to start a challenge with your current exercise customizations.");else if(2==$)B("Tap below to start a challenge with your current exercise customizations.<br><br>Your existing score will be reset.");else if(5==$){
var E=!(A.N$atM&&A.N$atM.N$jtM());
C(E,!0);
A.N$FtM($);
}else if(4==$){
D();
A.N$FtM($);
}else if(3==$){
var F=!(A.N$atM&&A.N$atM.N$jtM()),G=(A.N$atM&&A.N$atM.N$Uot())!=(A.N$ctM&&A.N$ctM.N$Uot());
F||(G=!0);
C(F,G);
}else if(7==$){
A.N$ktM();
A.N$dtM&&A.N$dtM.N$bCh(A.N$ptM);
A.N$vtM&&A.N$vtM.N$F2(!1);
A.N$gtM&&A.N$gtM.N$F2(!1);
A.N$htM&&A.N$htM.N$F2(!1);
A.N$ftM&&A.N$ftM.N$F2(!1);
A.N$ytM=setTimeout(function(){
A.N$ktM();
},5e3);
}
};
A.N$ktM=function(){
if(this.N$ytM){
clearTimeout(this.N$ytM);
this.N$ytM=0;
}
this.N$ptM&&this.N$ptM.N$Vkh();
this.N$htM&&this.N$htM.N$F2(!0);
this.N$ftM&&this.N$ftM.N$F2(!0);
this.N$vtM&&this.N$vtM.N$F2(!0);
this.N$gtM&&this.N$gtM.N$F2(!0);
};
A.N$FtM=function($){
var A,B=this,D=(A=this.N$eLh())&&A.N$NCh(),E=this.N$dtM&&this.N$dtM.N$NCh();
C.stop(this.N$zNh);
this.N$mtM&&this.N$mtM.N$ItM();
this.N$utM&&this.N$utM.N$ItM();
4==$?this.N$utM&&this.N$utM.N$qtM():5==$&&this.N$utM&&this.N$utM.N$RtM();
this.N$zNh=C.animate(300,function($){
$=C.easeOut($);
C.transform(D,0,0,1,1,$);
var A=C.lerp(.001,1,$);
C.transform(E,0,0,A,A,1);
},function(){
4==$&&B.N$mtM&&B.N$mtM.N$qtM();
});
};
A.N$UtM=function($){
var A,B=(A=this.N$eLh())&&A.N$NCh(),D=this.N$dtM&&this.N$dtM.N$NCh();
C.stop(this.N$zNh);
this.N$zNh=C.animate(300,function($){
$=C.easeIn(1-$);
C.transform(B,0,0,1,1,$);
var A=C.lerp(.001,1,$);
C.transform(D,0,0,A,A,1);
},function(){
$();
});
};
A.N$ztM=function($,A,B){
var C;
this.N$atM=A;
this.N$ctM=B;
var D=B&&B.N$jtM()&&A&&A.N$jtM();
if(this.N$Oit!=$||D){
this.N$PtM($);
this.N$Oit=$;
(C=this.N$eLh())&&C.N$GBh();
}
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$WtM","N$UDh",function($,A){
function C(){
B._c.N$UDh.call(this);
this.N$dtM=this.N$XtM=null;
this.N$VtM=0;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$KtM=function($){
var A=this.N$VtM;
if(A!==$){
this.N$VtM=$;
this.N$JtM(A);
}
};
A.N$QtM=function(){
return this.N$VtM;
};
$.N$WCh=function(){
return"_m5l";
};
A.N$QDh=function(){
var $;
C.N$_super.prototype.N$QDh.call(this);
this.N$dtM=B._c.N$RCh.N$JCh("_g5l");
this.N$XtM=B._c.N$RCh.N$JCh("_y5l");
this.N$JtM();
this.N$dtM&&this.N$dtM.N$bCh(this.N$XtM);
($=this.N$eLh())&&$.N$bCh(this.N$dtM);
};
A.N$pIh=function(){
var $;
C.N$_super.prototype.N$pIh.call(this);
var A=($=this.N$eLh())&&$.N$PHh(),D=B._g.N$m(0,0,288,288);
B._g.N$U(D,A);
this.N$dtM&&this.N$dtM.N$sLh(D);
};
A.N$JtM=function(){
var $=void 0;
2==this.N$VtM?$="This customized exercise isn't valid.<br><br>The link you followed may be broken, or the web address may be incorrect.":1==this.N$VtM&&($="The exercise couldn't generate a question matching the selected customizations.");
this.N$XtM&&this.N$XtM.N$KCh($);
};
return C;
});
}();
!function(){
"use strict";
B._registerClass("N$GtM",null,function($,A){
function D(){
this.N$YtM=this.N$DMh=this.N$ZtM=this.N$utM=this.N$J7T=this.N$enM=this.N$UNh=this.N$Q7T=this.N$zCh=null;
this.N$zNh=0;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$tnM=function(){
return this.N$zCh;
};
A.N$jMh=function(){
return this.N$DMh;
};
$.N$WCh=function(){
return"_b5l";
};
A.N$SCh=function($,A,B){
var D=this.N$enM,E=$?0:1,F=$?1:0,G=this.N$UNh&&this.N$UNh.N$TCh(),H=((D&&D.N$NCh()).offsetHeight,
D&&D.N$NCh());
this.N$nnM();
C.stop(this.N$zNh);
if(A){
var I=$?.85:1,J=$?1:.85;
this.N$zNh=C.animate(250,function($){
$=C.ease($);
var A=C.lerp(I,J,$),B=C.lerp(E,F,$);
C.transform(H,0,0,A,A,B);
G.opacity=String(B);
},B);
}else B&&B();
};
A.N$rnM=function($){
this.N$zCh&&this.N$zCh.N$uFh($);
};
A.N$inM=function(){
var $,A,C,D;
if(this.N$enM)return;
var E=this.N$lHh();
this.N$enM=($=new B._c.N$mCh())&&$.init();
this.N$enM&&this.N$enM.N$hCh("_w5l");
var F=this.N$enM&&this.N$enM.N$S4();
if(E.height){
this.N$YtM=(A=new B._c.N$cCh())&&A.init();
F.display="inline-block";
F.height=E.height+"px";
}else{
this.N$ZtM=B._c.N$RCh.N$JCh("_x5l");
F.height="100%";
F.display="block";
}
F.width=(E&&E.width||540)+"px";
this.N$utM=B._c.N$RCh.N$JCh("_k5l");
var G=B._c.N$RCh.N$JCh("_j5l");
this.N$zCh=B._c.N$RCh.N$pUh("span","_q5l");
this.N$DMh=B._c.N$RCh.N$pUh("div","_z5l");
var H=this.N$snM(),I=this.N$onM();
if(H){
this.N$J7T=(C=new B._c.N$QCh())&&C.init();
this.N$J7T&&this.N$J7T.N$hCh("_e6l");
this.N$J7T&&this.N$J7T.N$hCh("_t6l");
this.N$J7T&&this.N$J7T.N$uFh(H);
this.N$J7T&&this.N$J7T.N$OCh(this,"N$unM");
G&&G.N$bCh(this.N$J7T);
}else{
var J=B._c.N$RCh.N$JCh("_n6l");
J&&J.N$KCh("&nbsp;&nbsp;&nbsp;&nbsp;");
G&&G.N$bCh(J);
}
G&&G.N$bCh(this.N$zCh);
if(I){
this.N$Q7T=(D=new B._c.N$QCh())&&D.init();
this.N$Q7T&&this.N$Q7T.N$hCh("_e6l");
this.N$Q7T&&this.N$Q7T.N$hCh("_r6l");
this.N$Q7T&&this.N$Q7T.N$uFh(I);
this.N$Q7T&&this.N$Q7T.N$OCh(this,"N$anM");
G&&G.N$bCh(this.N$Q7T);
}else{
var K=B._c.N$RCh.N$JCh("_n6l");
K&&K.N$KCh("&nbsp;&nbsp;&nbsp;&nbsp;");
G&&G.N$bCh(K);
}
this.N$utM&&this.N$utM.N$bCh(G);
this.N$enM&&this.N$enM.N$bCh(this.N$utM);
this.N$enM&&this.N$enM.N$bCh(this.N$DMh);
this.N$YtM?this.N$YtM&&this.N$YtM.N$bCh(this.N$enM):this.N$ZtM&&this.N$ZtM.N$bCh(this.N$enM);
};
A.N$snM=function(){
return null;
};
A.N$onM=function(){
return"Done";
};
A.N$unM=function(){};
A.N$anM=function(){};
A.N$nnM=function(){};
A.N$fnM=function(){};
A.N$lHh=function(){
return B._g.N$l(540,0);
};
A.N$lCh=function($){
var A=this;
function C(){
A.N$fnM();
}
A.N$inM();
A.N$UNh=B._c.N$vCh.N$dCh(A.N$ZtM||A.N$YtM,C);
A.N$SCh(!0,$,null);
};
A.N$pCh=function($){
var A=this.N$UNh;
this.N$SCh(!1,$,function(){
A&&A.N$HCh();
});
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$lnM","N$GtM",function(A,D){
function E(){
B._c.N$GtM.call(this);
this.N$INh=this.N$Det=this.N$cnM=this.N$hnM=this.N$d2T=this.N$pnM=this.N$dnM=null;
this.N$j5T=0;
this.constructor=E;
this.N$_id=++B._id;
}
D.N$nCh=function($){
this.N$INh=$;
};
D.N$rCh=function(){
return this.N$INh;
};
D.N$vnM=function($){
this.N$cnM=$;
};
D.N$mnM=function(){
return this.N$cnM;
};
D.N$gnM=function($){
this.N$Det=$;
};
D.N$Ret=function(){
return this.N$Det;
};
A.N$WCh=function(){
return"_i6l";
};
D.N$ynM=function($){
var A=this;
if(A=E.N$_super.prototype.init.call(this)){
A.N$INh=$;
A.N$j5T=0;
}
return A;
};
D.N$GIy=function($,A){
if(!A)return!1;
B._c.N$fOh.N$aOh($.keyCode),document.activeElement;
if(this.N$dnM&&this.N$dnM.N$GIy($,A))return!0;
return!1;
};
D.N$bnM=function($){
return this.N$dnM&&this.N$dnM.N$bnM($);
};
D.N$wnM=function($){
var A=this.N$pnM&&this.N$pnM.N$KOh();
C.empty(A);
var B=C.create("iframe",{
srcdoc:$,
style:"width: 528px; height: 320px;"
});
A.appendChild(B);
};
D.N$EnM=function($){
var A,B,C=$["name"],D=$["code"],E=$["url"],F=$["sections"];
if(!F||0==F.length)return;
C?(A=this.N$tnM())&&A.N$uFh("Progress Report for "+C):(B=this.N$tnM())&&B.N$uFh("Progress Report");
this.N$dnM&&this.N$dnM.N$SnM(D,E);
this.N$hnM&&this.N$hnM.N$xnM(F);
this.N$cnM&&this.N$TnM(C,D,F);
};
D.N$TnM=function(A,B,D){
var E=this;
C.empty(this.N$cnM);
var F=C.create("table"),G=C.create("tbody"),H=A?"Progress Report for "+A:"Progress Report",I=C.create("h1",{},H);
B&&C.append(G,[C.create("tr",{},[C.create("th",{
colSpan:2
},"Verification Code")]),C.create("tr",{},[C.create("td",{
colSpan:2
},[C.create("div",{
"class":"verify-code"
},B),C.create("div",{
"class":"verify-footer"
},[C.create("span",{
"class":"verify-span"
},"Verify online at "),C.create("a",{
"class":"verify-a"
},"musictheory.net/verify")])])])]);
$.each(D,function(A){
var B=A["title"],D=A["rows"];
C.append(G,C.create("tr",{},[C.create("th",{
colSpan:2
},B)]));
$.each(D,function($){
C.append(G,C.create("tr",{},[C.create("td",{
"class":"td-left"
},$["name"]),C.create("td",{
"class":"td-right"
},$["string"])]));
});
});
C.append(E.N$cnM,[I,F]);
C.append(F,G);
};
D.N$inM=function(){
var $,A,C,D,F=this;
E.N$_super.prototype.N$inM.call(this);
this.N$hnM=($=new B._c.N$NnM())&&$.init();
this.N$dnM=(A=new B._c.N$CnM())&&A.init();
this.N$dnM&&this.N$dnM.N$knM(function($){
F.N$INh&&F.N$INh.N$LnM(F,$);
F.N$B7T();
});
F.N$d2T=(C=new B._c.N$lPh())&&C.init();
F.N$d2T&&F.N$d2T.N$hCh("_s6l");
F.N$d2T&&F.N$d2T.N$bCh(F.N$dnM);
F.N$d2T&&F.N$d2T.N$bCh(F.N$hnM);
(D=F.N$jMh())&&D.N$bCh(F.N$d2T);
F.N$B7T();
};
D.N$snM=function(){
return"Print";
};
D.N$onM=function(){
return"Done";
};
D.N$unM=function(){
try{
window.print();
}catch($){
if(-2147023673==$.number)return;
throw $;
}
};
D.N$anM=function(){
this.N$INh&&this.N$INh.N$AnM(this);
};
D.N$nnM=function(){
this.N$dnM&&this.N$dnM.N$OnM();
};
D.N$fnM=function(){
this.N$INh&&this.N$INh.N$AnM(this);
};
D.N$B7T=function(){
var $;
if(!this.N$INh)return;
var A=this.N$INh&&this.N$INh.N$MnM(this,this.N$j5T),C=0!=this.N$j5T;
if(C){
if(!this.N$pnM){
this.N$pnM=($=new B._c.N$RCh())&&$.init();
this.N$d2T&&this.N$d2T.N$bCh(this.N$pnM);
}
this.N$wnM(A);
}else this.N$EnM(A);
this.N$dnM&&this.N$dnM.N$Sct(C);
this.N$hnM&&this.N$hnM.N$Sct(C);
this.N$pnM&&this.N$pnM.N$Sct(!C);
};
D.N$DnM=function(){
var $=window.getSelection?window.getSelection():null;
$&&$.removeAllRanges();
};
return E;
});
}();
!function(){
"use strict";
B._registerClass("N$PnM","N$UDh",function(A,C){
function D(){
B._c.N$UDh.call(this);
this.N$HnM=this.N$BnM=this.N$jnM=this.N$FnM=this.N$InM=this.N$qnM=null;
this.constructor=D;
this.N$_id=++B._id;
}
C.N$RnM=function(){
return this.N$InM;
};
C.N$UnM=function(){
return this.N$FnM;
};
C.N$znM=function($){
this.N$BnM=$;
};
C.init=function(){
var $,A=this;
if(A=D.N$_super.prototype.init.call(this)){
A.N$qnM=($=new B._c.N$WnM())&&$.init();
A.N$qnM&&A.N$qnM.N$nCh(A);
}
return A;
};
C.N$ePh=function($){
var A,C;
D.N$_super.prototype.N$ePh.call(this,$);
this.N$HnM=null;
this.N$InM=null;
(A=this.N$eLh())&&A.N$GBh();
if(this.N$FnM){
this.N$FnM=null;
(C=B._c.N$KMh.N$JMh())&&C.N$VMh("SettingsExerciseListControllerDidSelectExerciseNotification",this);
}
};
C.N$iPh=function($){
D.N$_super.prototype.N$iPh.call(this,$);
this.N$jnM=this.N$qnM&&this.N$qnM.N$UHh();
};
C.N$nPh=function(A){
D.N$_super.prototype.N$nPh.call(this,A);
$.each(this.N$qnM&&this.N$qnM.N$XnM(),function($){
$&&$.N$nBh(!1);
});
};
C.N$pIh=function(){
D.N$_super.prototype.N$pIh.call(this);
if(this.N$jnM){
this.N$qnM&&this.N$qnM.N$zHh(this.N$jnM);
this.N$jnM=null;
}
};
C.N$aIh=function(){
var $,A;
D.N$_super.prototype.N$aIh.call(this);
($=this.N$eLh())&&$.N$bCh(this.N$qnM);
(A=this.N$eLh())&&A.N$uOh("menu","role");
};
C.N$VnM=function(){
this.N$qnM&&this.N$qnM.N$VnM();
};
C.N$JnM=function(){
this.N$qnM&&this.N$qnM.N$JnM();
};
C.N$KnM=function($){
this.N$qnM&&this.N$qnM.N$QnM($,null);
};
C.N$GnM=function($){
var A,C=(A=new B._c.N$YnM())&&A.init(),D=B._c.N$fst.N$Bat($),E=D&&D.N$Git(),F=E&&E.N$Zot();
C&&C.N$Plt(F);
C&&C.N$ZnM(45);
C&&C.N$erM($);
this.N$qnM&&this.N$qnM.N$OOh();
this.N$qnM&&this.N$qnM.N$tMh(C);
};
C.N$trM=function($,A){
if(A&&A.isKindOfClass_(B._c.N$YnM)){
var C=A,D=C&&C.N$nrM();
this.N$rrM(D,!0);
A&&A.N$nBh(!0);
}
};
C.N$rrM=function($,A){
var C,D,E,F,G,H,I;
if(this.N$InM)return;
this.N$InM=$;
var J="exercise:"+$,K=(C=(D=B._c.N$fst.N$Kyt(J))&&D.alloc())&&C.init(),L=K&&K.N$qit(),M=(E=B._c.N$ktt.N$Si())&&E.N$Vyt(K),N=this.N$BnM?this.N$BnM[$]:null;
N||(N={});
L&&L.N$dst(N);
L&&L.N$Oot();
var O=(F=new B._c.N$srM())&&F.N$irM(M,null);
O&&O.N$Plt((G=L?L["class"]():null)&&G.N$Zot());
this.N$FnM=K;
(H=B._c.N$KMh.N$JMh())&&H.N$VMh("SettingsExerciseListControllerDidSelectExerciseNotification",this);
this.N$HnM=O;
(I=this.N$yDh())&&I.N$mPh(O,A);
};
C.N$orM=function(){
var $;
this.N$BnM||(this.N$BnM={});
if(this.N$InM){
var A=($=this.N$FnM&&this.N$FnM.N$qit())&&$.N$gst();
this.N$BnM[this.N$InM]=A;
}
return this.N$BnM;
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$srM","N$UDh",function(A,C){
function D(){
B._c.N$UDh.call(this);
this.N$sgF=this.N$urM=this.N$jnM=this.N$arM=this.N$frM=this.N$lrM=this.N$qnM=null;
this.constructor=D;
this.N$_id=++B._id;
}
C.N$crM=function($){
this.N$frM=$;
};
C.N$hrM=function(){
return this.N$frM;
};
C.N$prM=function($){
this.N$sgF=$;
};
C.N$XmF=function(){
return this.N$sgF;
};
A.N$WCh=function(){
return"_o6l";
};
C.N$irM=function($,A){
var B=this;
if(B=D.N$_super.prototype.init.call(this)){
B.N$sgF=$;
B.N$frM=A;
B.N$drM();
}
return B;
};
C.N$aIh=function(){
var $,A,C;
D.N$_super.prototype.N$aIh.call(this);
this.N$eLh();
if(this.N$lrM["range-picker"])this.N$vrM();else if(this.N$lrM["pitch-picker"])this.N$mrM();else{
this.N$qnM=($=new B._c.N$WnM())&&$.init();
this.N$qnM&&this.N$qnM.N$nCh(this);
(A=this.N$eLh())&&A.N$bCh(this.N$qnM);
this.N$grM();
(C=this.N$eLh())&&C.N$uOh("menu","role");
this.N$qnM&&this.N$qnM.N$uOh("group","role");
}
};
C.N$ePh=function($){
var A,C;
D.N$_super.prototype.N$ePh.call(this,$);
if(!this.N$frM){
var E=this.N$XmF();
E&&E.sendAction(3018);
(A=B._c.N$KMh.N$JMh())&&A.N$VMh("SettingsTableControllerDidModifyNotificationName",this);
}
(C=this.N$eLh())&&C.N$GBh();
this.N$drM();
};
C.N$iPh=function($){
D.N$_super.prototype.N$iPh.call(this,$);
this.N$jnM=this.N$qnM&&this.N$qnM.N$UHh();
};
C.N$nPh=function(A){
D.N$_super.prototype.N$nPh.call(this,A);
$.each(this.N$qnM&&this.N$qnM.N$XnM(),function($){
$&&$.N$nBh(!1);
});
};
C.N$pIh=function(){
D.N$_super.prototype.N$pIh.call(this);
if(this.N$jnM){
this.N$qnM&&this.N$qnM.N$zHh(this.N$jnM);
this.N$jnM=null;
}
};
C.N$yrM=function($,A){
var C,D=this.N$XmF();
if(!D)return;
D.sendAction(3201,{
key:$,
value:A
});
this.N$frM||D.sendAction(3018);
(C=B._c.N$KMh.N$JMh())&&C.N$VMh("SettingsTableControllerDidModifyNotificationName",this);
};
C.N$vrM=function(){
var $,A,C=this.N$lrM["range-picker"],D=C["clef"],E=B._c.N$Jn.N$ur(C["range"]),F=B._c.N$Jn.N$ur(C["valid-range"]);
if(!this.N$arM){
this.N$arM=($=new B._c.N$brM())&&$.init();
this.N$arM&&this.N$arM.N$nCh(this);
this.N$arM&&this.N$arM.N$tnt(D);
this.N$arM&&this.N$arM.N$Mrt(E);
this.N$arM&&this.N$arM.N$wrM(F);
}
(A=this.N$eLh())&&A.N$bCh(this.N$arM);
};
C.N$mrM=function(){
var A,C,D=this;
if(!this.N$urM){
var E=this.N$lrM["pitch-picker"],F=E["shows-reset-button"],G=E["shows-side-labels"],H=(E["explanatory-text"],
E["musictype-map"]),I=E["voiceover-map"],J=[];
$.each(E["rows"],function($){
var A,C=$["value"],D=$["default-value"],E=B._c.N$Jn.N$ur($["valid-range"]);
J.push((A=new B._c.N$SrM())&&A.N$ErM(C,D,E));
});
D.N$urM=(A=new B._c.N$TrM())&&A.N$xrM(J,H,I,F,G);
D.N$urM&&D.N$urM.N$OCh(D,"N$NrM");
}
(C=D.N$eLh())&&C.N$bCh(D.N$urM);
};
C.N$CrM=function($){
var A=$["id"],C=$["type"],D=$["ax-label"],E=$["ax-value"],F=$["minimum-height"],G=null;
if(0==C){
var H=this.N$qnM&&this.N$qnM.N$krM(A,B._c.N$LrM);
G=H;
}else if(2==C){
var I=this.N$qnM&&this.N$qnM.N$krM(A,B._c.N$ArM),J=$["title"],K=$["subtitle"],L=$["image-identifier"],M=$["modify-target"],N=$["modify-value"],O=$["allows-multiple"],P=$["checked"],Q=$["smaller"];
D||(D=J);
I&&I.N$Plt(J);
I&&I.N$OrM(K);
I&&I.N$MrM(O);
I&&I.N$DrM(P);
I&&I.N$PrM(M);
I&&I.N$HrM(N);
I&&I.N$Tlt(L);
I&&I.N$BrM(Q);
G=I;
}else if(1==C){
var R=this.N$qnM&&this.N$qnM.N$krM(A,B._c.N$YnM),S=$["title"],T=$["preview-text"],U=$["image-identifiers"],V=$["target-table-id"],W=$["uses-red-color"];
D||(D=S);
E||(E=T);
R&&R.N$Plt(S);
R&&R.N$qlt(T);
R&&R.N$jrM(U);
R&&R.N$FrM(W);
R&&R.N$erM(V);
G=R;
}else if(4==C){
var X=this.N$qnM&&this.N$qnM.N$krM(A,B._c.N$IrM),Y=$["title"],Z=$["explanation"],_=$["remedy"];
X&&X.N$Plt(Y);
X&&X.N$Zpt(Z);
X&&X.N$tdt(_);
G=X;
}else if(5==C){
var a=this.N$qnM&&this.N$qnM.N$krM(A,B._c.N$qrM),b=$["title"],c=$["current-value"],d=$["all-values"],e=$["modify-target"];
a&&a.N$Plt(b);
a&&a.N$PrM(e);
a&&a.N$RrM(b,c,d);
G=a;
}else if(3==C){
var f=this.N$qnM&&this.N$qnM.N$krM(A,B._c.N$UrM),g=$["title"],h=$["modify-target"],i=$["on"];
D||(D=g);
f&&f.N$Plt(g);
f&&f.N$PrM(h);
f&&f.N$OgF(i);
G=f;
}
if(G){
G&&G.N$zrM(A);
G&&G.N$WrM(C);
G&&G.N$zrt(D);
G&&G.N$mjh(E);
G&&G.N$ZnM(F);
}
return G;
};
C.N$grM=function(){
var A=this;
this.N$qnM&&this.N$qnM.N$VnM();
$.each(this.N$lrM["sections"],function(B){
var C=B["header"],D=B["footer"];
A.N$qnM&&A.N$qnM.N$QnM(C,D);
$.each(B["rows"],function(B){
A.N$qnM&&A.N$qnM.N$OOh();
$.each(B,function($){
var B=A.N$CrM($);
B&&A.N$qnM&&A.N$qnM.N$tMh(B);
});
});
});
A.N$qnM&&A.N$qnM.N$JnM();
};
C.N$XrM=function($){
var A;
if($!=this.N$arM)return;
this.N$yrM(this.N$frM,(A=this.N$arM&&this.N$arM.N$wrt())&&A.N$ar());
};
C.N$NrM=function(A){
var B=this;
if(A!=this.N$urM)return;
var C=this.N$urM&&this.N$urM.N$tvt(),D=$.map(C,function($){
return $&&$.N$Vat();
});
B.N$yrM(B.N$frM,D);
};
C.N$trM=function($,A){
var C,D,E,F;
if(A&&A.isKindOfClass_(B._c.N$UrM)){
var G=A;
this.N$yrM(G&&G.N$VrM(),G&&G.N$CgF());
this.N$drM();
}else if(A&&A.isKindOfClass_(B._c.N$ArM)){
var H=A;
this.N$yrM(H&&H.N$VrM(),H&&H.N$JrM());
this.N$drM();
}else if(A&&A.isKindOfClass_(B._c.N$qrM)){
var I=A;
this.N$yrM(I&&I.N$VrM(),I&&I.N$KrM());
this.N$drM();
}else if(A&&A.isKindOfClass_(B._c.N$YnM)&&((C=this.N$yDh())&&C.N$YDh())==this){
A&&A.N$nBh(!0);
var J=(D=A)&&D.N$nrM(),K=(E=new B._c.N$srM())&&E.N$irM(this.N$sgF,J);
(F=this.N$yDh())&&F.N$mPh(K,!0);
}
};
C.N$drM=function(){
var $,A=this.N$XmF();
if(!A)return;
var B=A.sendRequest(1204,{
id:this.N$frM
}),C=B["title"],D=B["has-issue"];
C&&this.N$Plt(C);
($=this.N$vPh())&&$.N$LPh(D);
this.N$lrM=B;
this.N$qnM&&this.N$grM();
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$QrM","N$GtM",function($,A){
function C(){
B._c.N$GtM.call(this);
this.N$GrM=this.N$INh=this.N$Det=this.N$YrM=this.N$ZrM=this.N$eiM=this.N$qnM=null;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$nCh=function($){
this.N$INh=$;
};
A.N$rCh=function(){
return this.N$INh;
};
A.N$gnM=function($){
this.N$Det=$;
};
A.N$Ret=function(){
return this.N$Det;
};
$.N$WCh=function(){
return"_u6l";
};
A.N$ynM=function($){
var A=this;
(A=C.N$_super.prototype.init.call(this))&&(A.N$INh=$);
return A;
};
A.N$trM=function($,A){
var C=B._c.N$tiM.N$Si();
if(A&&A.isKindOfClass_(B._c.N$niM)){
var D=A;
D==this.N$eiM?C&&C.N$riM(D&&D.N$CgF()):D==this.N$GrM?C&&C.N$iiM(D&&D.N$CgF()):D==this.N$YrM&&C&&C.N$siM(D&&D.N$CgF());
}
};
A.N$inM=function(){
var $,A,D,E,F=this;
C.N$_super.prototype.N$inM.call(this);
var G=B._c.N$tiM.N$Si(),H=($=new B._c.N$WnM())&&$.init();
H&&H.N$hCh("_a6l");
H&&H.N$nCh(this);
function I($,A){
var C,D=(C=new B._c.N$UrM())&&C.init();
D&&D.N$Plt($);
D&&D.N$OgF(A);
D&&D.N$ZnM(48);
H&&H.N$QnM(null,null);
H&&H.N$OOh();
H&&H.N$tMh(D);
return D;
}
H&&H.N$VnM();
F.N$qnM=H;
F.N$eiM=I("Remember Score",G&&G.N$oiM());
F.N$GrM=I("Bottom Shortcuts",G&&G.N$uiM());
F.N$YrM=I("Keyboard Shortcuts",G&&G.N$aiM());
H&&H.N$JnM();
(F.N$qnM&&F.N$qnM.N$NCh()).style.overflowY="";
F.N$ZrM=B._c.N$RCh.N$JCh("_f6l");
var J=B._c.N$RCh.N$ZOh("a");
J&&J.N$uFh("Learn more about keyboard shortcuts");
J&&J.N$uOh("_blank","target");
J&&J.N$uOh("//www.musictheory.net/faq#exercise-shortcuts","href");
F.N$ZrM&&F.N$ZrM.N$bCh(J);
(A=F.N$jMh())&&A.N$bCh(F.N$qnM);
(D=F.N$jMh())&&D.N$bCh(F.N$ZrM);
(E=F.N$tnM())&&E.N$uFh("Web Settings");
};
A.N$onM=function(){
return"Done";
};
A.N$lHh=function(){
return B._g.N$l(320,286);
};
A.N$anM=function(){
this.N$INh&&this.N$INh.N$fiM(this);
};
A.N$fnM=function(){
this.N$INh&&this.N$INh.N$fiM(this);
};
return C;
});
}();
!function(){
"use strict";
var $=A("common"),C=A("browser");
$.addReadyHandler(function(A){
var D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V=A.split(":"),W=null;
if("exercise"!=V[0])return;
V[1];
(D=(E=B._c.N$ktt)&&E.N$Si())&&D.N$zyt(C.prefersTouchEvents());
(F=(G=B._c.N$ktt)&&G.N$Si())&&F.N$Wyt($.isBetaEnabled());
if("exercise:customize"==A)W=(H=(I=B._c.N$liM)&&I.alloc())&&H.init();else if("exercise:checker"==A)W=(J=(K=B._c.N$ciM)&&K.alloc())&&J.init();else if("exercise"==V[0]){
var X=window.TenutoBridge.getRegistryInfo(window.location.href),Y=X.identifier,Z=X.path,_=X.prefix,a=X.options;
if(_&&a&&a.match(/[A-Zl02v]/)){
W=(L=(M=B._c.N$hiM)&&M.alloc())&&L.init();
(N=(O=B._c.N$ukh)&&O.N$Ckh())&&N.N$Kkh(W);
return;
}
!X.valid&&X.options&&(P=(Q=B._c.N$ktt)&&Q.N$Si())&&P.N$Wyt(!0);
var b=a?_+"."+a:_;
W=(R=(S=B._c.N$diM)&&S.alloc())&&R.N$piM(Y,Z,b);
}
(T=(U=B._c.N$ukh)&&U.N$Ckh())&&T.N$Kkh(W);
});
}();
!function(){
"use strict";
function A($,A){
C.listen($,"mousedown",function($){
$.preventDefault();
});
C.listen($,"click",function($){
A();
$.preventDefault();
$.stopPropagation();
});
C.listen($,"keydown",function($){
if(10==$.keyCode||13==$.keyCode||32==$.keyCode){
A();
$.preventDefault();
$.stopPropagation();
}
});
}
B._registerClass("N$viM",null,function(A,C){
function D(){
this.N$miM=this.N$giM=this.N$Kft=this.N$yiM=this.N$Gdt=this.N$biM=null;
this.N$Mit=this.N$Bit=this.N$wiM=0;
this.constructor=D;
this.N$_id=++B._id;
}
C.N$EiM=function(){
return this.N$miM;
};
C.N$SiM=function(){
return this.N$Gdt;
};
C.N$zit=function(){
return this.N$Mit;
};
C.N$Wit=function(){
return this.N$Bit;
};
C.N$xiM=function(){
return this.N$giM;
};
C.N$TiM=function(){
return this.N$biM;
};
C.N$NiM=function(){
return this.N$yiM;
};
C.N$Yat=function(){
return this.N$Kft;
};
C.N$CiM=function($){
this.N$wiM=$;
};
C.N$kiM=function(){
return this.N$wiM;
};
C.N$LiM=function($){
D.N$_super.prototype.init.call(this);
this.N$miM=($||"").trim();
this.N$AiM();
return this;
};
C.N$AiM=function(){
var A,C,D=this;
if(!this.N$miM)return;
var E=(A=new B._c.N$tst())&&A.init(),F=void 0,G=void 0;
if(E&&E.N$wft(this.N$miM)){
{
E&&E.N$mst();
}
this.N$yiM=$.map(E&&E.N$mst(),function($){
var A=$&&$.N$qit();
return(A&&A.N$tut())+"/"+(A&&A.N$nut());
}).join("|");
F=(C=B._c.N$Pst.N$Si())&&C.N$Dst(E,0);
}
if(F){
D.N$Gdt=F["name"];
D.N$Mit=F["correct"];
D.N$Bit=F["total"];
D.N$giM=F["percent"];
D.N$biM=F["time"];
G=F["sections"];
}
if(G&&G.length>0){
D.N$Kft=G;
D.N$wiM=1;
}
};
return D;
});
B._registerClass("N$ciM","N$UDh",function(D,E){
function F(){
B._c.N$UDh.call(this);
this.N$OiM=this.N$MiM=this.N$DiM=this.N$PiM=null;
this.constructor=F;
this.N$_id=++B._id;
}
E.N$Zkh=function(){
return!0;
};
D.N$WCh=function(){
return"_l6l";
};
E.N$Xat=function(){
return"Code Checker";
};
E.N$QDh=function(){
var $,A=this;
F.N$_super.prototype.N$QDh.call(this);
B._c.N$cLh.N$dAh()?B._c.N$cLh.N$gAh():B._c.N$cLh.N$lLh()&&B._c.N$cLh.N$mAh("width=616");
var C=($=B._c.N$ukh.N$Ckh())&&$.N$wkh();
C&&C.N$PFh("/exercises");
C&&C.N$AFh(0);
this.N$HiM();
var D=this.N$BiM();
if(D){
this.N$PiM.value=this.N$jiM(D);
this.N$FiM();
}else setTimeout(function(){
A.N$IiM();
},0);
};
E.N$HiM=function(){
var $,A,D,E=this;
function F($,A){
var B=C.create("button",{
"class":"_c6l"
},$);
C.listen(B,"click",function(){
return A();
});
return B;
}
var G=C.create("textarea",{
"class":"_h6l",
rows:"4"
}),H=C.create("div",{
"class":"_p6l"
},[C.create("div",{
"class":"_d6l"
},[C.create("div",{
"class":"_v6l"
},["Enter one or more verification codes:"]),G,C.create("div",{
"class":"_m6l"
},[F("Clear",function(){
E.N$IiM();
}),F("Verify",function(){
E.N$FiM();
})])])]);
E.N$PiM=G;
E.N$MiM=($=new B._c.N$RCh())&&$.init();
(A=E.N$eLh())&&A.N$bCh(E.N$qiM(H));
(D=E.N$eLh())&&D.N$bCh(E.N$MiM);
};
E.N$qiM=function($){
var A,D=(A=new B._c.N$RCh())&&A.init();
C.append(D&&D.N$KOh(),$);
return D;
};
E.N$RiM=function($){
return 1==$?"Valid":0==$?"Invalid":"Issue";
};
E.N$UiM=function($){
var A=C.create("div",{
"class":"_g6l",
role:"img",
"aria-label":this.N$RiM($)
}),B=void 0;
B=1==$?"_y6l":0==$?"_b6l":"_w6l";
B&&A.classList.add(B);
return A;
};
E.N$ziM=function(){
var B=this,D=this.N$WiM("Results",!1,this.N$XiM()),E=C.create("tbody",{},[C.create("tr",{},[C.create("th",{}),C.create("th",{},"Signature"),C.create("th",{
colspan:"2"
},"Score"),C.create("th",{},"Time"),C.create("th",{})])]);
$.each(this.N$DiM,function($){
var D=C.create("tr",{
tabindex:"0"
}),F=($&&$.N$zit())+"/"+($&&$.N$Wit());
C.append(D,[C.create("td",{},B.N$UiM($&&$.N$kiM())),C.create("td",{},$&&$.N$SiM()||"-"),C.create("td",{},F||"-"),C.create("td",{},$&&$.N$xiM()||"-"),C.create("td",{},$&&$.N$TiM()||"-"),C.create("td",{},C.create("div",{
"class":"_x6l"
}))]);
A(D,function(){
B.N$OiM=$;
B.N$kPh();
});
E.append(D);
});
return C.create("div",{
"class":"_p6l"
},[D,C.create("div",{
"class":"_k6l"
},[C.create("table",{},E)])]);
};
E.N$ViM=function($){
var A,D=$&&$.N$SiM(),E=B._c.N$RCh.N$JCh("_p6l"),F=B._c.N$RCh.N$JCh("_j6l"),G="Progress Report for "+D,H=this.N$WiM(G,!!this.N$DiM,!1);
E&&E.N$bCh(this.N$qiM(H));
var I=$&&$.N$kiM();
if(2==I){
var J=C.create("div",{
"class":"CodeChecker-result-warning"
},[C.create("div",{
"class":"CodeChecker-result-warning-title"
},[this.N$UiM(I),"Settings Mismatch"]),C.create("p",{},"The customized settings for this report differ from the other reports. The student may have used an outdated version of the exercise or clicked the wrong link.")]);
E&&E.N$bCh(this.N$qiM(J));
}
E&&E.N$bCh(F);
var K=(A=new B._c.N$NnM())&&A.init();
K&&K.N$xnM($&&$.N$Yat());
F&&F.N$bCh(K);
return E;
};
E.N$WiM=function($,B,D){
var E=this,F=C.create("div",{
"class":"_q6l"
}),G=C.create("span",{
"class":"_z6l"
},$);
C.append(F,G);
if(B||D){
var H=C.create("span",{
"class":"_e7l"
}),I=C.create("span",{
"class":"_t7l"
});
if(B){
var J=C.create("a",{
tabindex:"0",
role:"link"
},[C.create("span",{
"class":"_n7l"
}),"Back"]);
A(J,function(){
E.N$OiM=null;
E.N$kPh();
});
C.append(H,J);
}
if(D){
var K=C.create("a",{
tabindex:"0",
role:"link",
title:"Copy results as tab-delimited text."
},"Copy");
A(K,function(){
E.N$JiM();
});
C.append(I,K);
}
C.append(F,[H,G,I]);
}else C.append(F,G);
return F;
};
E.N$KiM=function($){
var A=this.N$jiM($),B=this.N$WiM("Invalid Code",!!this.N$DiM,!1),D=C.create("div",{
"class":"_r7l"
},[C.create("div",{
"class":"_i7l"
},A+" is not a valid code"),C.create("ul",{},[C.create("li",{},"A verification code should begin with an A and end with a Z."),C.create("li",{},"Each additional segment of a verification code should contain five letters or numbers."),C.create("li",{},"We do not recommend typing or writing codes. Transfer them via copy/paste functionality when possible.")])]);
return C.create("div",{
"class":"_p6l"
},[B,D]);
};
E.N$QiM=function(){
return C.create("div",{
"class":"_s7l"
},[C.create("p",{},["Verification codes help teachers assign exercises as homework. Read ","<a href='/faq#exercise-assign'>How can I assign exercises as homework?</a>"," to learn more."],!0)]);
};
E.N$XiM=function(){
return!!(window.isSecureContext&&navigator.clipboard&&navigator.clipboard.writeText);
};
E.N$JiM=function(){
var A=this,B=[];
B.push(["Signature","Correct","Total","Percent","Time","Validity"].join("	"));
$.each(this.N$DiM,function($){
B.push([$&&$.N$SiM(),$&&$.N$zit(),$&&$.N$Wit(),$&&$.N$xiM(),$&&$.N$TiM(),A.N$RiM($&&$.N$kiM())].join("	"));
});
A.N$XiM()&&navigator.clipboard.writeText(B.join("\n"));
};
E.N$BiM=function(){
var A=document.location.pathname,B=document.location.hash,C=A?A.split("/"):[];
function D($){
$=$?$.replace(/[^A-Za-z0-9]/g,""):"";
return $.toUpperCase();
}
for(var E=["verify","checker","report","progress","certificate"],F=null,G=!1,H=0,I=C.length;I>H;H++){
if(G){
F=D(C[H]);
if(F)break;
}
$.includes(E,C[H].toLowerCase())&&(G=!0);
}
F||(F=D(B));
return F;
};
E.N$kPh=function(){
var $=null,A=null;
this.N$OiM?0==(this.N$OiM&&this.N$OiM.N$kiM())?A=this.N$KiM(this.N$OiM&&this.N$OiM.N$EiM()):$=this.N$ViM(this.N$OiM):A=this.N$DiM?this.N$ziM(this.N$DiM):this.N$QiM();
A&&($=this.N$qiM(A));
this.N$MiM&&this.N$MiM.N$gUh();
$&&this.N$MiM&&this.N$MiM.N$bCh($);
};
E.N$IiM=function(){
this.N$DiM=null;
this.N$OiM=null;
this.N$kPh();
this.N$PiM.value="";
this.N$PiM.focus();
this.N$PiM.select();
};
E.N$GiM=function(){
var A={},B=$.filter(this.N$DiM,function($){
return 0!=($&&$.N$kiM());
});
$.each(B,function($){
var B=$&&$.N$NiM();
A[B]?A[B]++:A[B]=1;
});
var C=$.max($.values(A));
$.each(B,function($){
var B=$&&$.N$NiM();
A[B]<C&&$&&$.N$CiM(2);
});
};
E.N$FiM=function(){
var A=this,C=this.N$PiM.value,D=(C?C.trim():"").split("\n"),E=[];
$.each(D,function($){
var A;
$=$.trim();
$&&E.push((A=new B._c.N$viM())&&A.N$LiM($));
});
A.N$DiM=null;
A.N$OiM=null;
E.length>1?A.N$DiM=E:1==E.length&&(A.N$OiM=E[0]);
A.N$GiM();
A.N$kPh();
};
E.N$jiM=function(A){
var B=A.trim().replace(/O/g,"0").replace(/I/g,"1").replace(/L/g,"1").replace(/[ \-]/g,"").split(""),C="A"==$.first(B),D="Z"==$.last(B);
C&&B.shift();
D&&B.pop();
if(C)for(var E=5;E<B.length;E+=5){
B.splice(E,0,"-");
E++;
}else if(D)for(var F=B.length-5;F>0;F-=5)B.splice(F,0,"-");
return(C?"A-":"")+B.join("")+(D?"-Z":"");
};
return F;
});
}();
!function(){
"use strict";
var $="tenuto",A="prefix",D="all-settings";
B._registerClass("N$liM","N$UDh",function(E,F){
function G(){
B._c.N$UDh.call(this);
this.N$YiM=this.N$ZiM=this.N$esM=this.N$tsM=this.N$nsM=this.N$rsM=this.N$isM=this.N$mDh=this.N$ssM=this.N$osM=this.N$usM=this.N$asM=null;
this.N$fsM=!1;
this.constructor=G;
this.N$_id=++B._id;
}
F.N$fIh=function(){
return"customizer";
};
F.N$lIh=function(){
return!0;
};
F.N$Zkh=function(){
return!0;
};
F.N$E7T=function(){
return!0;
};
F.N$Xat=function(){
return"Exercise Customizer";
};
F.N$vIh=function($){
G.N$_super.prototype.N$vIh.call(this,$);
$[A]=this.N$rsM&&this.N$rsM.N$RnM();
};
F.N$cIh=function($){
G.N$_super.prototype.N$cIh.call(this,$);
this.N$ssM=$[A];
};
F.N$bft=function(A){
G.N$_super.prototype.N$bft.call(this,A);
A[D]=this.N$rsM&&this.N$rsM.N$orM();
A[$]=this.N$fsM;
};
F.N$dst=function(A){
G.N$_super.prototype.N$dst.call(this,A);
this.N$isM=A[D];
this.N$fsM=A[$];
};
F.N$QDh=function(){
var $,A,D,E,F=this;
G.N$_super.prototype.N$QDh.call(this);
B._c.N$cLh.N$dAh()?B._c.N$cLh.N$gAh():B._c.N$cLh.N$lLh()&&B._c.N$cLh.N$mAh("width=616");
var H=($=B._c.N$ukh.N$Ckh())&&$.N$wkh();
H&&H.N$PFh("/exercises");
H&&H.N$AFh(0);
H&&H.N$HFh(3,function(){
F.N$lsM();
});
var I=B._c.N$KMh.N$JMh();
I&&I.N$IPh(F,"N$csM","SettingsExerciseListControllerDidSelectExerciseNotification",null);
I&&I.N$IPh(F,"N$hsM","SettingsTableControllerDidModifyNotificationName",null);
F.N$rsM=(A=new B._c.N$PnM())&&A.init();
F.N$rsM&&F.N$rsM.N$Plt("Exercises");
F.N$rsM&&F.N$rsM.N$VnM();
F.N$rsM&&F.N$rsM.N$KnM("Staff Identification");
F.N$rsM&&F.N$rsM.N$GnM("note");
F.N$rsM&&F.N$rsM.N$GnM("keysig");
F.N$rsM&&F.N$rsM.N$GnM("interval");
F.N$rsM&&F.N$rsM.N$GnM("scale");
F.N$rsM&&F.N$rsM.N$GnM("chord");
F.N$rsM&&F.N$rsM.N$KnM("Staff Construction");
F.N$rsM&&F.N$rsM.N$GnM("note-construction");
F.N$rsM&&F.N$rsM.N$GnM("keysig-construction");
F.N$rsM&&F.N$rsM.N$GnM("interval-construction");
F.N$rsM&&F.N$rsM.N$GnM("scale-construction");
F.N$rsM&&F.N$rsM.N$GnM("chord-construction");
F.N$rsM&&F.N$rsM.N$KnM("Keyboard Identification");
F.N$rsM&&F.N$rsM.N$GnM("keyboard");
F.N$rsM&&F.N$rsM.N$GnM("keyboard-reverse");
F.N$rsM&&F.N$rsM.N$GnM("keyboard-interval");
F.N$rsM&&F.N$rsM.N$GnM("keyboard-scale");
F.N$rsM&&F.N$rsM.N$GnM("keyboard-chord");
F.N$rsM&&F.N$rsM.N$KnM("Fretboard Identification");
F.N$rsM&&F.N$rsM.N$GnM("fretboard");
F.N$rsM&&F.N$rsM.N$GnM("fretboard-interval");
F.N$rsM&&F.N$rsM.N$GnM("fretboard-scale");
F.N$rsM&&F.N$rsM.N$GnM("fretboard-chord");
F.N$rsM&&F.N$rsM.N$KnM("Ear Training");
F.N$rsM&&F.N$rsM.N$GnM("ear-keyboard");
F.N$rsM&&F.N$rsM.N$GnM("ear-note");
F.N$rsM&&F.N$rsM.N$GnM("ear-interval");
F.N$rsM&&F.N$rsM.N$GnM("ear-scale");
F.N$rsM&&F.N$rsM.N$GnM("ear-chord");
F.N$rsM&&F.N$rsM.N$JnM();
F.N$mDh=(D=new B._c.N$RDh())&&D.N$KDh(F.N$rsM);
F.N$mDh&&F.N$mDh.N$nCh(F);
var J=(E=new B._c.N$dHh())&&E.N$pHh(F.N$mDh,!1);
J&&J.N$hCh("_o7l");
F.N$asM=B._c.N$Gkh.N$JCh("_u7l");
F.N$asM&&F.N$asM.N$bCh(J);
document.body.appendChild(F.N$esM=C.create("div",{
"class":"_a7l"
},[C.create("div",{
"class":"_f7l"
},[F.N$tsM=C.create("span",{},"This exercise is permanently available at: "),C.create("br"),F.N$nsM=C.create("a",{},"musictheory.net"),F.N$osM=C.create("br"),F.N$usM=C.create("a",{},"musictheory.net")])]));
F.N$isM&&F.N$rsM&&F.N$rsM.N$znM(F.N$isM);
F.N$ssM&&F.N$rsM&&F.N$rsM.N$rrM(F.N$ssM,!1);
B._c.N$cLh.N$dAh()?B._c.N$cLh.N$gAh():B._c.N$cLh.N$lLh()&&B._c.N$cLh.N$mAh("width=414");
};
F.N$lsM=function(){
var $,A,C,D,E=($=(A=B._c.N$ukh.N$Ckh())&&A.N$wkh())&&$.N$DFh(3),F=(C=new B._c.N$psM())&&C.init();
F&&F.N$dsM(this.N$fsM?"Hide Tenuto URLs":"Show Tenuto URLs");
this.N$ZiM&&this.N$ZiM.N$vsM(null);
this.N$ZiM=F;
this.N$ZiM&&this.N$ZiM.N$vsM(this);
this.N$YiM=(D=new B._c.N$eHh())&&D.N$cHh(this,F,E);
this.N$YiM&&this.N$YiM.N$lCh(!0);
};
F.N$msM=function(){
var $,A=($=this.N$rsM&&this.N$rsM.N$UnM())&&$.N$qit();
if(!A||A&&A.N$hst())return;
var B=A&&A.N$plt(),C=B;
if(this.N$fsM){
var D=A&&A.N$vlt();
this.N$usM.textContent=D;
this.N$usM.setAttribute("href",D);
this.N$usM.style.display="";
this.N$osM.style.display="";
}else{
this.N$usM.style.display="none";
this.N$osM.style.display="none";
C=C.replace("https://","");
B=B.replace("https://www.musictheory.net/","/");
}
this.N$nsM.textContent=C;
this.N$nsM.setAttribute("href",B);
};
F.N$hsM=function(){
this.N$msM();
this.N$dIh();
};
F.N$csM=function(){
if(this.N$rsM&&this.N$rsM.N$UnM()){
this.N$msM();
this.N$esM.classList.add("_l7l");
}else this.N$esM.classList.remove("_l7l");
this.N$dIh();
};
F.N$cPh=function(){
this.N$dIh();
};
F.N$gsM=function(){
this.N$YiM&&this.N$YiM.N$pCh(!0);
this.N$YiM&&this.N$YiM.N$nCh(null);
this.N$YiM=null;
this.N$ZiM&&this.N$ZiM.N$vsM(null);
this.N$ZiM=null;
};
F.N$vHh=function($){
$==this.N$YiM&&$&&$.N$fHh(B._g.N$l(268,132));
};
F.N$ysM=function(){
this.N$fsM=!this.N$fsM;
this.N$gsM();
this.N$msM();
};
F.N$bsM=function(){
this.N$mDh&&this.N$mDh.N$yPh(!0);
this.N$rsM&&this.N$rsM.N$znM({});
this.N$gsM();
this.N$dIh();
};
return G;
});
B._registerClass("N$psM","N$UDh",function($,A){
function C(){
B._c.N$UDh.call(this);
this.N$Jjh=this.N$wsM=this.N$EsM=this.N$eFh=null;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$vsM=function($){
this.N$wsM=$;
};
A.N$SsM=function(){
return this.N$wsM;
};
$.N$WCh=function(){
return"_c7l";
};
A.N$dsM=function($){
var A;
if(this.N$Jjh)return;
this.N$Jjh=B._c.N$RCh.N$JCh("_h7l");
this.N$eFh=B._c.N$QCh.N$JCh("_p7l");
this.N$eFh&&this.N$eFh.N$OCh(this,"N$xsM");
this.N$eFh&&this.N$eFh.N$uFh($);
this.N$EsM=B._c.N$QCh.N$JCh("_d7l");
this.N$EsM&&this.N$EsM.N$OCh(this,"N$TsM");
this.N$EsM&&this.N$EsM.N$uFh("Reset All Customizations");
this.N$Jjh&&this.N$Jjh.N$bCh(this.N$eFh);
this.N$Jjh&&this.N$Jjh.N$bCh(this.N$EsM);
(A=this.N$eLh())&&A.N$bCh(this.N$Jjh);
};
A.N$xsM=function(){
this.N$wsM&&this.N$wsM.N$ysM();
};
A.N$TsM=function(){
this.N$wsM&&this.N$wsM.N$bsM();
};
return C;
});
}();
!function(){
"use strict";
B._registerClass("N$diM","N$UDh",function(A,D){
function E(){
B._c.N$UDh.call(this);
this.N$NsM=this.N$YiM=this.N$U2T=this.N$CsM=this.N$sgF=this.N$ksM=this.N$LsM=this.N$DMh=this.N$AsM=this.N$OsM=this.N$MsM=this.N$DsM=this.N$ugF=this.N$PsM=this.N$HsM=this.N$BsM=this.N$jsM=this.N$cnM=this.N$FsM=this.N$IsM=this.N$o7T=this.N$qsM=this.N$RsM=this.N$UsM=null;
this.N$Oit=this.N$zsM=this.N$WsM=this.N$Pit=this.N$wgF=this.N$XsM=0;
this.N$VsM=this.N$JsM=this.N$KsM=this.N$QsM=this.N$GsM=this.N$YsM=this.N$ZsM=this.N$eoM=!1;
this.constructor=E;
this.N$_id=++B._id;
}
D.N$jMh=function(){
return this.N$DMh;
};
D.N$GpF=function(){
return this.N$ugF;
};
A.N$WCh=function(){
return"_v7l";
};
D.N$Zkh=function(){
return B._g.N$hNh();
};
D.N$tLh=function(){
return!0;
};
D.N$nLh=function(){
return"exercise";
};
D.N$piM=function($,A,C){
var D,F,G=this;
if(G=E.N$_super.prototype.init.call(this)){
var H=(D=B._c.N$ktt.N$Si())&&D.N$Jyt($);
H.handleCommand=function($,A){
G.N$omF($,A);
};
setInterval(function(){
Date.now()>=H.nextTick&&H.sendTick();
},100);
G.N$sgF=H;
G.N$HsM=A;
G.N$RsM=C;
var I=G.N$toM(1e3),J=G.N$toM(1006),K=G.N$toM(1007);
G.N$Plt(I);
G.N$noM(J,K);
(F=B._c.N$KMh.N$JMh())&&F.N$IPh(G,"N$roM","ModalSessionDidEndNotification",null);
}
return G;
};
D.N$QDh=function(){
var $,A,D,F=this;
E.N$_super.prototype.N$QDh.call(this);
var G=B._c.N$ukh.N$Ckh(),H=B._c.N$tiM.N$Si(),I=this.N$toM(1004),J=G&&G.N$wkh();
J&&J.N$PFh("/exercises");
J&&J.N$AFh(0);
if(0==I){
J&&J.N$HFh(4,function(){
F.N$ioM();
});
H&&H.N$soM()&&setTimeout(function(){
F.N$ooM();
},250);
}
2!=I&&J&&J.N$HFh(3,function(){
F.N$lsM();
});
var K=($=B._c.N$ukh.N$Ckh())&&$.N$fLh();
2==K?B._c.N$cLh.N$gAh():1==K&&B._c.N$cLh.N$mAh(B._c.N$Ijh.N$zjh()?"width=616,user-scalable=no":"width=616");
if(B._c.N$Ijh.N$zjh()){
var L=F.N$toM(1200);
(A=new B._c.N$Ijh())&&A.N$Wjh("Open Exercise in Tenuto",L,function(){
1==K&&B._c.N$cLh.N$mAh("width=616");
});
}
(2==K||0==K)&&(D=B._c.N$zMh.N$Si())&&D.N$ZPh(function($,A){
F.N$uoM($,A);
});
F.N$aoM();
F.N$foM(3e3);
F.N$LsM&&F.N$LsM.N$loM();
F.N$DsM&&F.N$DsM.N$loM();
C.listen(document,"keydown",function($){
F.N$EgF($,!0);
});
C.listen(document,"keyup",function($){
F.N$EgF($,!1);
});
C.listen(window,"unload",function(){
F.N$dIh();
});
C.listen(document,"copy",function($){
F.N$coM($);
});
F.N$hoM(!0);
};
D.N$noM=function($,A){
var C,D,E,F,G,H,I,J,K;
if(1==$)this.N$LsM=(C=new B._c.N$doM())&&C.N$poM(this,$);else if(2==$)this.N$LsM=(D=new B._c.N$voM())&&D.N$poM(this,$);else if(3==$)this.N$LsM=(E=new B._c.N$moM())&&E.N$poM(this,$);else if(4==$)this.N$LsM=(F=new B._c.N$goM())&&F.N$poM(this,$);else if(5==$){
var L=(G=new B._c.N$goM())&&G.N$poM(this,$);
L&&L.N$yoM(!0);
this.N$LsM=L;
}
1==A?this.N$DsM=(H=new B._c.N$woM())&&H.N$boM(this,A):2==A?this.N$DsM=(I=new B._c.N$EoM())&&I.N$boM(this,A):3==A?this.N$DsM=(J=new B._c.N$SoM())&&J.N$boM(this,A):4==A&&(this.N$DsM=(K=new B._c.N$xoM())&&K.N$boM(this,A));
};
D.N$aIh=function(){
var $,A,D,F,G,H,I=this;
E.N$_super.prototype.N$aIh.call(this);
var J=this.N$eLh(),K=B._c.N$tiM.N$Si();
this.N$DMh=B._c.N$RCh.N$JCh("_m7l");
this.N$ugF=B._c.N$RCh.N$JCh("_g7l");
J&&J.N$bCh(this.N$DMh);
J&&J.N$bCh(this.N$ugF);
this.N$IsM=($=new B._c.N$ToM())&&$.init();
this.N$IsM&&this.N$IsM.N$NoM(K&&K.N$CoM());
this.N$LsM&&this.N$LsM.N$aIh();
this.N$DMh&&this.N$DMh.N$bCh(this.N$LsM&&this.N$LsM.N$eLh());
(A=this.N$LsM&&this.N$LsM.N$eLh())&&A.N$hCh("_y7l");
this.N$DsM&&this.N$DsM.N$aIh();
this.N$ugF&&this.N$ugF.N$bCh(this.N$DsM&&this.N$DsM.N$eLh());
(D=this.N$DsM&&this.N$DsM.N$eLh())&&D.N$hCh("_y7l");
if(!B._g.N$hNh()){
this.N$cnM=C.create("div",{
"class":"_b7l"
});
C.prepend(document.body,this.N$cnM);
this.N$koM();
}
(F=B._c.N$ukh.N$Ckh())&&F.N$aLh(this);
(G=this.N$eLh())&&G.N$sLh(B._g.N$g());
(H=this.N$eLh())&&H.N$GBh();
this.N$VsM=!0;
setTimeout(function(){
I.N$LoM();
},B._g.N$hNh()?300:1e3);
};
D.N$oLh=function(){
var $;
($=this.N$eLh())&&$.N$GBh();
};
D.N$pIh=function(){
var $,A,C;
E.N$_super.prototype.N$pIh.call(this);
var D=B._g.N$hNh(),F=0,G=this.N$AoM(),H=G?this.N$CsM:null,I=this.N$eLh(),J=B._g.N$m(0,0,Math.max(document.documentElement.clientWidth,window.innerWidth||0),Math.max(document.documentElement.clientHeight,window.innerHeight||0));
D&&(F=J.height<420?32:44);
var K={
"input-frame":J,
"top-length":F,
"is-tenuto":D,
"wants-bottom-area":G
};
this.N$LsM&&this.N$LsM.N$OoM(K);
this.N$DsM&&this.N$DsM.N$OoM(K);
var L=this.N$MoM(1008,K),M=L["output-size"],N=L["content-frame"],O=L["dashboard-frame"],P=L["bottom-area"],Q=L["top-bar-has-customize"],R=L["top-bar-has-score"],S=B._c.N$ukh.N$Ckh(),T=S&&S.N$wkh();
if(D)I&&I.N$sLh(B._g.N$d(M));else{
I&&I.N$sLh(B._g.N$d(M));
(I&&I.N$S4()).position="relative";
}
this.N$LsM&&this.N$LsM.N$DoM(L);
this.N$DsM&&this.N$DsM.N$DoM(L);
this.N$DMh&&this.N$DMh.N$sLh(N);
this.N$ugF&&this.N$ugF.N$sLh(O);
T&&T.N$BFh(4,!Q);
T&&T.N$FFh(320);
if(R)T&&T.N$IFh(this.N$IsM);else{
this.N$IsM&&this.N$IsM.N$sLh(L["score-frame"]);
T&&T.N$IFh(null);
($=this.N$eLh())&&$.N$bCh(this.N$IsM);
}
P&&H&&H.N$sLh(P);
this.N$ksM&&(A=this.N$ksM&&this.N$ksM.N$eLh())&&A.N$sLh(I&&I.N$PHh());
this.N$PsM&&(C=this.N$PsM&&this.N$PsM.N$eLh())&&C.N$sLh(I&&I.N$PHh());
D||S&&S.N$hLh();
};
D.N$AoM=function(){
var $=B._c.N$tiM.N$Si(),A=window.top!=window,C=0!=this.N$Oit;
if(B._g.N$hNh()||A||C)return!1;
if($&&$.N$uiM())return!0;
return!1;
};
D.N$aoM=function(){
var $,A,C=B._c.N$tiM.N$Si(),D=this.N$AoM(),E=D&&C&&C.N$uiM();
if(E&&!this.N$CsM){
this.N$CsM=($=new B._c.N$HoM())&&$.N$PoM(this);
(A=this.N$eLh())&&A.N$Wkh(this.N$CsM,this.N$ugF);
}else if(!E&&this.N$CsM){
this.N$CsM&&this.N$CsM.N$Vkh();
this.N$CsM=null;
}
};
D.N$BoM=function(){
var $,A=($=B._c.N$tiM.N$Si())&&$.N$CoM();
A||(A=0!=this.N$Oit&&this.N$KsM);
this.N$IsM&&this.N$IsM.N$NoM(A);
};
D.N$joM=function(){
this.N$FoM(!0,"background");
this.N$IoM(!1);
};
D.N$qoM=function(){
this.N$FoM(!1,"background");
this.N$IoM(!1);
};
D.N$FoM=function($,A){
if(!A)return;
this.N$RoM(3010,{
pause:$,
name:A
});
};
D.N$IoM=function(){};
D.N$fIh=function(){
return this.N$RsM;
};
D.N$dst=function($){
E.N$_super.prototype.N$dst.call(this,$);
var A=B._c.N$tiM.N$Si(),C=A&&A.N$oiM();
this.N$eoM=A&&A.N$CoM();
this.N$RoM(3001,{
state:$||{},
remembers:C,
path:this.N$HsM
});
if(this.N$toM(1013)){
this.N$LsM&&this.N$LsM.N$dst($);
this.N$DsM&&this.N$DsM.N$dst($);
}
};
D.N$bft=function(A){
var C,D=this;
E.N$_super.prototype.N$bft.call(this,A);
if((C=B._c.N$tiM.N$Si())&&C.N$oiM()){
var F=this.N$toM(1003);
$.each(F,function($,B){
A[B]=F[B];
});
if(0==D.N$Pit){
D.N$LsM&&D.N$LsM.N$bft(A);
D.N$DsM&&D.N$DsM.N$bft(A);
}
}
};
D.N$EgF=function($,A){
var C;
A&&(this.N$JsM=$.altKey&&$.shiftKey);
if($.ctrlKey||$.metaKey||$.altKey)return;
if(!(C=B._c.N$tiM.N$Si())||!C.N$aiM())return;
var D=B._c.N$fOh.N$aOh($.keyCode),E=A&&this.N$BsM&&this.N$BsM[$.keyCode];
this.N$BsM||(this.N$BsM={});
this.N$BsM[$.keyCode]=A;
var F=!1;
if(this.N$FsM){
F=this.N$FsM&&this.N$FsM.N$GIy($,A);
if(F&&"Escape"!=D)return;
}
if(!F&&A)if("N"==D&&$.shiftKey){
if(0==this.N$Oit){
E||this.N$foM(3005);
F=!0;
}
}else if("R"==D&&$.shiftKey){
if(0==this.N$Oit){
E||this.N$foM(3006);
F=!0;
}
}else if("P"==D&&$.shiftKey){
if(0==this.N$Oit){
E||this.N$UoM(4);
F=!0;
}
}else if("Escape"==D){
E||this.N$UoM(0);
F=!0;
}
F||(F=this.N$LsM&&this.N$LsM.N$GIy($,A));
F||(F=this.N$DsM&&this.N$DsM.N$GIy($,A));
if(F){
$.stopPropagation();
$.preventDefault();
}
};
D.N$coM=function($){
var A=this.N$FsM&&this.N$FsM.N$bnM($);
if(A){
$.stopPropagation();
$.preventDefault();
}
};
D.N$LoM=function(){
this.N$VsM=!1;
this.N$hoM(!0);
};
D.N$hoM=function(){
var $,A=!1,C=this.N$VsM||A||this.N$ZsM||this.N$YsM||0!=this.N$WsM,D=($=B._c.N$ukh.N$Ckh())&&$.N$wkh();
D&&D.N$jFh(!C);
};
D.N$uoM=function($,A){
var C;
if(0!=this.N$WsM||0!=this.N$Oit)return;
var D=A?1:0;
this.N$jsM=(C=new B._c.N$WoM())&&C.N$zoM(this,$,D);
if(0==this.N$Pit){
this.N$jsM&&this.N$jsM.N$XoM("Reveal Answer",3);
this.N$jsM&&this.N$jsM.N$VoM();
}
this.N$jsM&&this.N$jsM.N$XoM("Skip Question",4);
this.N$jsM&&this.N$jsM.N$lCh(!0);
};
D.N$JoM=function($,A){
3==A?this.N$foM(3006):4==A&&this.N$foM(3005);
this.N$jsM&&this.N$jsM.N$pCh(!0);
this.N$jsM&&this.N$jsM.N$nCh(null);
this.N$jsM=null;
};
D.N$KoM=function(){
this.N$jsM&&this.N$jsM.N$nCh(null);
this.N$jsM=null;
};
D.N$QoM=function(){
var $;
this.N$UsM=($=new B._c.N$QrM())&&$.N$ynM(this);
};
D.N$GoM=function(){
this.N$UsM&&this.N$UsM.N$nCh(null);
this.N$UsM=null;
};
D.N$fiM=function(){
this.N$aoM();
this.N$UoM(0);
};
D.N$UoM=function($){
var A,C=this,D=this.N$WsM,E=!0;
function F($){
return 3==$||2==$;
}
function G($){
return 4==$||5==$||6==$;
}
D==$&&(F($)?$=0:G($)&&($=0));
F(D)&&F($)&&(E=!1);
G(D)&&G($)&&(E=!1);
2==$&&(A=B._c.N$tiM.N$Si())&&A.N$YoM(!1);
if(C.N$AsM){
C.N$AsM&&C.N$AsM.N$ZoM();
C.N$AsM=null;
}
if(C.N$YiM){
C.N$YiM&&C.N$YiM.N$pCh(E);
C.N$gsM();
}
if(C.N$OsM){
C.N$OsM&&C.N$OsM.N$pCh(E);
C.N$euM();
}
if(C.N$FsM){
C.N$FsM&&C.N$FsM.N$pCh(E);
C.N$tuM();
}
if(C.N$UsM){
C.N$UsM&&C.N$UsM.N$pCh(E);
C.N$GoM();
}
if(3==$){
C.N$nuM();
C.N$YiM&&C.N$YiM.N$lCh(E);
}else if(2==$){
C.N$ruM();
C.N$OsM&&C.N$OsM.N$lCh(E);
}else if(4==$){
C.N$iuM("default");
C.N$FsM&&C.N$FsM.N$lCh(E);
}else if(5==$){
C.N$iuM("last");
C.N$FsM&&C.N$FsM.N$lCh(E);
}else if(6==$){
C.N$iuM("high");
C.N$FsM&&C.N$FsM.N$lCh(E);
}else if(7==$){
C.N$QoM();
C.N$UsM&&C.N$UsM.N$lCh(E);
}
C.N$WsM=$;
C.N$hoM(E);
};
D.N$vHh=function($){
$==this.N$YiM&&$&&$.N$fHh(B._g.N$l(268,this.N$NsM&&this.N$NsM.N$V7T()));
};
D.N$hHh=function(){
this.N$UoM(0);
};
D.N$lsM=function(){
this.N$UoM(3);
};
D.N$nuM=function(){
var $,A,C,D,E=B._c.N$tiM.N$Si(),F=E&&E.N$CoM(),G=F?"Hide Timer":"Show Timer",H=($=(A=B._c.N$ukh.N$Ckh())&&A.N$wkh())&&$.N$DFh(3),I=(C=new B._c.N$suM())&&C.init();
if(0!=this.N$Oit){
this.N$Oit>=6&&I&&I.N$ouM(5,"End Challenge");
this.N$Oit>=1&&this.N$Oit<6&&I&&I.N$uuM("Reset Scores");
}else{
I&&I.N$uuM("Reset Score");
I&&I.N$ouM(2,G);
I&&I.N$ouM(3,"Reveal Answer");
I&&I.N$ouM(4,"Skip Question");
I&&I.N$ouM(6,"Show Progress Report");
}
I&&I.N$ouM(8,"Show Web Settings");
this.N$JsM&&I&&I.N$ouM(9,"Send Debug Report");
I&&I.N$auM();
this.N$NsM=I;
this.N$NsM&&this.N$NsM.N$nCh(this);
this.N$YiM=(D=new B._c.N$eHh())&&D.N$cHh(this,I,H);
this.N$YiM&&this.N$YiM.N$gHh(!0);
};
D.N$gsM=function(){
this.N$YiM=null;
this.N$NsM&&this.N$NsM.N$nCh(null);
this.N$NsM=null;
};
D.N$fuM=function($,A){
var C,D=0;
if(6==A)D=4;else if(1==A){
this.N$RoM(3004,null);
this.N$ksM&&this.N$luM();
}else if(2==A){
var E=B._c.N$tiM.N$Si();
E&&E.N$NoM(!(E&&E.N$CoM()));
this.N$BoM(!0);
}else if(3==A)this.N$foM(3006);else if(4==A)this.N$foM(3005);else if(5==A)this.N$cuM();else if(8==A)D=7;else if(9==A){
(C=B._c.N$ukh.N$Ckh())&&C.N$Pkh("Debug Report",null,null);
alert("Report Sent");
}
this.N$UoM(D);
};
D.N$ioM=function(){
this.N$UoM(2);
};
D.N$ruM=function(){
var $,A,C,D;
if(!this.N$o7T){
this.N$o7T=($=new B._c.N$srM())&&$.N$irM(this.N$sgF,null);
this.N$o7T&&this.N$o7T.N$Plt("Customize");
this.N$o7T&&this.N$o7T.N$eLh();
}
if(!this.N$qsM){
this.N$qsM=(A=new B._c.N$RDh())&&A.N$KDh(this.N$o7T);
this.N$qsM&&this.N$qsM.N$eLh();
}
if(!this.N$OsM){
var E=(C=B._c.N$ukh.N$Ckh())&&C.N$wkh(),F=E&&E.N$DFh(4);
this.N$OsM=(D=new B._c.N$eHh())&&D.N$cHh(this,this.N$qsM,F);
}
if(this.N$GsM){
this.N$qsM&&this.N$qsM.N$yPh(!1);
this.N$GsM=!1;
}
};
D.N$euM=function(){
var $=this.N$toM(1202);
this.N$foM(3003);
this.N$GsM=$;
this.N$OsM=null;
};
D.N$ooM=function(){
var $,A;
if(this.N$AsM)return;
{
var C=($=B._c.N$ukh.N$Ckh())&&$.N$wkh();
C&&C.N$DFh(4);
}
this.N$AsM=(A=new B._c.N$puM())&&A.N$huM("Customize this exercise");
this.N$AsM&&this.N$AsM.N$duM();
};
D.N$koM=function(){
if(!this.N$cnM)return;
C.empty(this.N$cnM);
this.N$cnM.appendChild(C.create("div",{
"class":"_w7l"
},"No Report Selected"));
};
D.N$iuM=function($){
var A;
this.N$FsM=(A=new B._c.N$lnM())&&A.N$ynM(this);
this.N$FsM&&this.N$FsM.N$gnM($);
this.N$FsM&&this.N$FsM.N$vnM(this.N$cnM);
this.N$FoM(!0,"progress-report");
};
D.N$tuM=function(){
this.N$FsM=null;
this.N$FoM(!1,"progress-report");
this.N$koM();
};
D.N$vuM=function($,A){
return this.N$MoM(1002,{
format:$,
identifier:A
});
};
D.N$AnM=function(){
this.N$UoM(0);
};
D.N$MnM=function($,A){
return this.N$vuM(A,$&&$.N$Ret());
};
D.N$LnM=function($,A){
var C;
(C=B._c.N$tiM.N$Si())&&C.N$muM(A);
this.N$RoM(3009,{
name:A,
identifier:$&&$.N$Ret()
});
};
D.N$luM=function(){
var $,A;
if(0==this.N$Oit)return;
var C=this.N$vuM(9,"high"),D=this.N$vuM(9,"last"),E=($=new B._c.N$yuM())&&$.N$guM(C,"high"),F=(A=new B._c.N$yuM())&&A.N$guM(D,"last");
this.N$ksM&&this.N$ksM.N$ztM(this.N$Oit,E,F);
};
D.N$buM=function($){
var A,C,D,E,F,G,H,I,J=this,K=!1;
if($>=1&&6>$){
if(!this.N$ksM){
this.N$ksM=(A=new B._c.N$itM())&&A.init();
this.N$ksM&&this.N$ksM.N$nCh(this);
K?this.N$ksM&&this.N$ksM.N$NtM(!1):this.N$ksM&&this.N$ksM.N$NtM(!0);
}
if(!this.N$ksM||!this.N$ksM.N$nIh()){
this.N$pPh(this.N$ksM);
(C=this.N$eLh())&&C.N$bCh(this.N$ksM&&this.N$ksM.N$eLh());
this.N$ksM&&this.N$ksM.N$uPh(this);
(D=this.N$ksM&&this.N$ksM.N$eLh())&&D.N$sLh((E=this.N$eLh())&&E.N$PHh());
this.N$YsM=!0;
}
}else if(7==$){
var L=!B._c.N$vCh.N$RMh();
L&&setTimeout(function(){
J.N$cuM();
},0);
}else if($>=6){
var M=J.N$ksM;
J.N$ksM=null;
M&&M.N$dPh(null);
M&&M.N$UtM(function(){
var $;
($=M&&M.N$eLh())&&$.N$Vkh();
M&&M.N$aPh();
});
J.N$YsM=!1;
}else if(0==$){
J.N$ksM&&J.N$ksM.N$dPh(null);
(F=J.N$ksM&&J.N$ksM.N$eLh())&&F.N$Vkh();
J.N$ksM&&J.N$ksM.N$aPh();
J.N$ksM=null;
J.N$YsM=!1;
}
var N=null,O=null;
if(0!=$){
var P=J.N$vuM(9,"high"),Q=J.N$vuM(9,"last");
N=(G=new B._c.N$yuM())&&G.N$guM(P,"high");
O=(H=new B._c.N$yuM())&&H.N$guM(Q,"last");
}
7==J.N$Oit&&J.N$ksM&&J.N$ksM.N$ztM(7,null,null);
J.N$ksM&&J.N$ksM.N$ztM($,N,O);
J.N$Oit=$;
J.N$hoM(!0);
(I=J.N$eLh())&&I.N$GBh();
};
D.N$DtM=function(){
this.N$RoM(3012,null);
};
D.N$MtM=function($,A){
"high"==A?this.N$UoM(6):"last"==A&&this.N$UoM(5);
};
D.N$cuM=function(){
this.N$RoM(3013,null);
};
D.N$roM=function(){
B._c.N$vCh.N$RMh()||7==this.N$Oit&&this.N$cuM();
};
D.N$nAh=function($){
var A=this,B=$&&$.N$QLh(),C=$&&$.N$Xr(),D=5==B,E=!1;
D&&!this.N$QsM?E=!0:!D&&this.N$QsM&&(E=!0);
E&&setTimeout(function(){
A.N$RoM(3011,{
playing:D,
"sequence-id":C
});
D||C!=A.N$XsM||A.N$foM(3005);
},0);
A.N$QsM=D;
};
D.N$iAh=function($,A,B){
0==A&&this.N$LsM&&this.N$LsM.N$wuM($&&$.N$Xr(),$&&$.N$Hr());
this.N$LsM&&this.N$LsM.N$EuM(A,B);
};
D.N$toM=function($){
return this.N$sgF.sendRequest($,null);
};
D.N$MoM=function($,A){
return this.N$sgF.sendRequest($,A);
};
D.N$foM=function($){
this.N$sgF.sendAction($,null);
};
D.N$RoM=function($,A){
this.N$sgF.sendAction($,A);
};
D.N$LgF=function(){
var $=this;
this.N$wgF&&clearTimeout(this.N$wgF);
this.N$wgF=setTimeout(function(){
$.N$dIh();
$.N$wgF=0;
},0);
};
D.N$SuM=function($){
var A=this,C=$["status"],D=$["duration"],E=1==C||2==C;
if(E){
if(!this.N$MsM){
var F=B._c.N$QCh.N$JCh("_x7l");
F&&F.N$yOh(function(){
A.N$LsM&&A.N$LsM.N$xuM();
A.N$DsM&&A.N$DsM.N$xuM();
A.N$foM(3005);
});
A.N$MsM=F;
}
A.N$ugF&&A.N$ugF.N$bCh(A.N$MsM);
}else E||A.N$MsM&&A.N$MsM&&A.N$MsM.N$Vkh();
A.N$Pit=C;
if(A.N$zsM){
clearTimeout(A.N$zsM);
A.N$zsM=0;
}
1==C&&1/0!=D&&(A.N$zsM=setTimeout(function(){
A.N$foM(3007);
},1e3*D));
if(1!=C){
A.N$U2T&&A.N$U2T.N$Xdt();
A.N$XsM=0;
}
};
D.N$TuM=function($){
var A,C,D,E,F,G=$["status"];
if(0==G){
this.N$PsM&&this.N$PsM.N$dPh(null);
(A=this.N$PsM&&this.N$PsM.N$eLh())&&A.N$Vkh();
this.N$PsM&&this.N$PsM.N$aPh();
this.N$PsM=null;
this.N$ZsM=!1;
}else{
this.N$PsM||(this.N$PsM=(C=new B._c.N$WtM())&&C.init());
if(!this.N$PsM||!this.N$PsM.N$nIh()){
this.N$pPh(this.N$PsM);
(D=this.N$eLh())&&D.N$bCh(this.N$PsM&&this.N$PsM.N$eLh());
this.N$PsM&&this.N$PsM.N$uPh(this);
(E=this.N$PsM&&this.N$PsM.N$eLh())&&E.N$sLh((F=this.N$eLh())&&F.N$PHh());
this.N$ZsM=!0;
}
this.N$PsM&&this.N$PsM.N$KtM(G);
}
};
D.N$NuM=function($){
var A=$["status"],B=($["question-limit"],$["time-limit"]);
this.N$KsM=A>0?B>0:!1;
this.N$buM(A);
this.N$BoM(!1);
this.N$aoM();
};
D.N$CuM=function($){
var A,C,D=$["instrument"];
if(!this.N$U2T){
this.N$U2T=(A=new B._c.N$jLh())&&A.init();
this.N$U2T&&this.N$U2T.N$lAh(this);
this.N$LsM&&this.N$LsM.respondsToSelector_("N$kuM")&&(C=this.N$LsM)&&C.N$kuM(this.N$U2T);
}
this.N$U2T&&this.N$U2T.N$aAh(D);
};
D.N$LuM=function($){
var A=B._c.N$jr.N$Gr($["sequence"]);
this.N$U2T&&this.N$U2T.N$fAh(A);
};
D.N$AuM=function($){
var A,C=$["title"],D=$["message"]||"";
(A=B._c.N$ukh.N$Ckh())&&A.N$Pkh(C,D,null);
};
D.N$OuM=function($){
var A=$["sequence-id"];
A&&(this.N$XsM=A);
};
D.N$MuM=function($){
var A;
if(!this.N$IsM)return;
if(this.N$Oit>=1&&this.N$Oit<6)return;
var C=$["correct"],D=$["total"],E=$["question-count"],F=$["question-limit"];
this.N$IsM&&this.N$IsM.N$DuM(C,D,E,F);
(A=B._c.N$ukh.N$Ckh())&&A.N$qkh();
if(D>0&&this.N$AsM){
this.N$AsM&&this.N$AsM.N$ZoM();
this.N$AsM=null;
}
};
D.N$PuM=function($){
var A=$["seconds"];
this.N$IsM&&this.N$IsM.N$HuM(B._c.N$Qut.N$rat(A));
};
D.N$omF=function($,A){
2e3==$?this.N$LgF():2001==$?this.N$SuM(A):2019==$?this.N$NuM(A):2004==$?this.N$TuM(A):2014==$?this.N$OuM(A):2002==$?this.N$MuM(A):2003==$?this.N$PuM(A):2017==$?this.N$CuM(A):2018==$?this.N$LuM(A):2022==$&&this.N$AuM(A);
this.N$LsM&&this.N$LsM.N$omF($,A);
this.N$DsM&&this.N$DsM.N$omF($,A);
};
return E;
});
}();
!function(){
"use strict";
B._registerClass("N$hiM","N$UDh",function($,A){
function D(){
B._c.N$UDh.call(this);
this.constructor=D;
this.N$_id=++B._id;
}
$.N$WCh=function(){
return"_k7l";
};
A.N$Xat=function(){
return"Error";
};
A.N$QDh=function(){
var $,A,E;
D.N$_super.prototype.N$QDh.call(this);
B._c.N$cLh.N$dAh()?B._c.N$cLh.N$gAh():B._c.N$cLh.N$lLh()&&B._c.N$cLh.N$mAh("width=616");
var F=($=B._c.N$ukh.N$Ckh())&&$.N$wkh();
F&&F.N$PFh("/exercises");
F&&F.N$AFh(0);
var G=B._c.N$RCh.N$JCh("_j7l");
(A=this.N$eLh())&&A.N$bCh(G);
var H=window.TenutoBridge.getRegistryInfo(window.location.href),I=(H.prefix,H.options),J=I.toLowerCase().replace("l","1").replace("0","o").replace("2","z").replace("v","u"),K=C.create("a",{
"class":"TypoWarner-mono",
href:"/exercises/"+H.prefix+"/"+I
}),L=C.create("a",{
"class":"TypoWarner-mono",
href:"https://www.musictheory.net/exercises/"+H.prefix+"/"+J
});
(E=B._c.N$ukh.N$Ckh())&&E.N$Pkh("Exercise URL Typo",I+" -> "+J,null);
C.append(K,"www.musictheory.net/exercises/"+H.prefix+"/");
C.append(L,"www.musictheory.net/exercises/"+H.prefix+"/");
if(I.length==J.length)for(var M=0;M<I.length;M++){
var N=I[M],O=J[M],P=C.create("span",{},N),Q=C.create("span",{},O);
if(N!=O){
P.classList.add("_q7l");
Q.classList.add("_z7l");
}
C.append(K,P);
C.append(L,Q);
}else{
C.append(K,I);
C.append(L,J);
}
C.append(G&&G.N$KOh(),[C.create("p",{},"The specified web address contains an invalid letter or number:"),K,C.create("p",{},[C.create("span",{},"Please notify your teacher if you followed a link to this web address."),C.create("br"),C.create("span",{},"The corrected address is:")]),L]);
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$yuM",null,function($,A){
function C(){
this.N$gat=this.N$BuM=this.N$Gdt=this.N$Ydt=this.N$Zdt=null;
this.N$Mit=this.N$juM=this.N$Bit=0;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$FuM=function(){
return this.N$BuM;
};
A.N$Uot=function(){
return this.N$gat;
};
A.N$zit=function(){
return this.N$Mit;
};
A.N$Wit=function(){
return this.N$Bit;
};
A.N$Est=function(){
return this.N$juM;
};
A.N$rft=function(){
return this.N$Ydt;
};
A.N$ift=function(){
return this.N$Zdt;
};
A.N$SiM=function(){
return this.N$Gdt;
};
A.N$guM=function($,A){
var B=this;
if(B=C.N$_super.prototype.init.call(this)){
B.N$BuM=A;
B.N$Gdt=$["name"]||null;
B.N$Ydt=$["code"]||null;
B.N$Zdt=$["url"]||null;
B.N$gat=$["uuid"]||null;
B.N$Mit=$["correct"]||0;
B.N$Bit=$["total"]||0;
B.N$juM=$["elapsed"]||0;
}
return B;
};
A.N$IuM=function(){
return""+this.N$Mit+"/"+this.N$Bit;
};
A.N$quM=function(){
return(this.N$Bit>0?Math.round(this.N$Mit/this.N$Bit*100):0)+"%";
};
A.N$RuM=function(){
return B._c.N$Qut.N$rat(this.N$juM);
};
A.N$jtM=function(){
return 0==this.N$Bit&&0==this.N$juM;
};
return C;
});
}();
!function(){
"use strict";
var A=void 0;
B._registerClass("N$tiM",null,function(D,E){
function F(){
this.N$UuM=null;
this.N$zuM=this.N$WuM=this.N$XuM=this.N$VuM=this.N$JuM=!1;
this.constructor=F;
this.N$_id=++B._id;
}
E.N$CoM=function(){
return this.N$VuM;
};
E.N$oiM=function(){
return this.N$WuM;
};
E.N$uiM=function(){
return this.N$XuM;
};
E.N$aiM=function(){
return this.N$JuM;
};
E.N$soM=function(){
return this.N$zuM;
};
E.N$KuM=function(){
return this.N$UuM;
};
D.N$Si=function(){
var $;
A||(A=($=this.alloc())&&$.init());
return A;
};
E.init=function(){
var A,D=this;
if(D=F.N$_super.prototype.init.call(this)){
var E={
timer:!1,
score:!0,
buttons:!1,
keyboard:!0,
customizeHint:!0,
savedName:null,
bottomHint:0
};
if(1==((A=B._c.N$ukh.N$Ckh())&&A.N$fLh())){
E.buttons=!0;
E.bottomHint=9999;
}
$.merge(E,C.store.enabled&&C.store.get("exercises"));
D.N$VuM=E["timer"];
D.N$WuM=E["score"];
D.N$XuM=E["buttons"];
D.N$JuM=E["keyboard"];
D.N$UuM=E["savedName"];
D.N$zuM=E["customizeHint"];
}
return D;
};
E.N$QuM=function(){
if(C.store.enabled)try{
C.store.set("exercises",{
timer:this.N$VuM,
score:this.N$WuM,
savedName:this.N$UuM,
buttons:this.N$XuM,
keyboard:this.N$JuM,
customizeHint:this.N$zuM
});
}catch($){
console.log($);
}
};
E.N$NoM=function($){
if(this.N$VuM!=$){
this.N$VuM=$;
this.N$QuM();
}
};
E.N$riM=function($){
if(this.N$WuM!=$){
this.N$WuM=$;
this.N$QuM();
}
};
E.N$iiM=function($){
if(this.N$XuM!=$){
this.N$XuM=$;
this.N$QuM();
}
};
E.N$siM=function($){
if(this.N$JuM!=$){
this.N$JuM=$;
this.N$QuM();
}
};
E.N$YoM=function($){
if(this.N$zuM!=$){
this.N$zuM=$;
this.N$QuM();
}
};
E.N$muM=function($){
if(this.N$UuM!=$){
this.N$UuM=$;
this.N$QuM();
}
};
return F;
});
}();
!function(){
"use strict";
B._registerClass("N$goM","N$GuM",function($,A){
function C(){
B._c.N$GuM.call(this);
this.N$U2T=this.N$Jjh=this.N$YuM=this.N$ZuM=this.N$Bmt=this.N$eaM=null;
this.N$taM=this.N$naM=0;
this.N$raM=!1;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$iaM=function(){
return this.N$U2T;
};
A.N$yoM=function($){
this.N$raM=$;
};
A.N$saM=function(){
return this.N$raM;
};
A.N$aIh=function(){
var $;
C.N$_super.prototype.N$aIh.call(this);
this.N$Jjh=B._c.N$RCh.N$JCh("_e8l");
this.N$ZuM=($=new B._c.N$uaM())&&$.N$oaM(this);
this.N$Jjh&&this.N$Jjh.N$bCh(this.N$ZuM);
};
A.N$eLh=function(){
return this.N$Jjh;
};
A.N$DoM=function($){
var A=B._g.N$w($["content-frame"]);
this.N$Jjh&&this.N$Jjh.N$sLh(A);
var C=B._g.N$hNh(),D=$["content-corner-radius"],E=$["audio-player-plan"],F=64,G=B._g.N$g(),H=B._g.N$g(),I=B._g.N$g();
if(1==E)G=this.N$Jjh&&this.N$Jjh.N$PHh();else if(2==E){
B._g.N$K(G,H,this.N$Jjh&&this.N$Jjh.N$PHh(),C?2:4);
I=B._g.N$m(G.x,B._g.N$A(G),G.width,1);
}else if(3==E){
B._g.N$J(G,H,this.N$Jjh&&this.N$Jjh.N$PHh(),2);
I=B._g.N$m(B._g.N$L(G),G.y,2,G.height);
}
this.N$ZuM&&this.N$ZuM.N$sLh(G);
this.N$eaM&&this.N$eaM.N$sLh(H);
this.N$ZuM&&this.N$ZuM.N$jIy(D);
this.N$eaM&&this.N$eaM.N$jIy(D);
var J=this.N$eaM&&this.N$eaM.N$aaM();
J+=16;
J>F&&(F=J);
this.N$ZuM&&this.N$ZuM.N$faM(F);
this.N$eaM&&this.N$eaM.N$faM(F);
};
A.N$GIy=function($,A){
if(B._c.N$cLh.N$lLh())return!1;
var C=B._c.N$fOh.N$aOh($.keyCode);
A&&"Space"==C&&($.shiftKey?this.N$Bmt&&this.N$U2T&&this.N$U2T.N$fAh(this.N$Bmt):this.N$YuM?this.N$U2T&&this.N$U2T.N$fAh(this.N$YuM):this.N$U2T&&this.N$U2T.N$uAh());
return!1;
};
A.N$laM=function($){
if(3==$&&this.N$taM)return;
this.N$taM=$;
var A="";
2==$?A="The exercise could not load because a firewall or filter<br>blocked the audio file.":3==$?A="The exercise could not load because the audio file download was interrupted.":5==$?A="The exercise could not load because a newer version of your web browser is required.":6==$?A="The exercise could not load because your web browser could not decode the audio file.":7==$?A="The exercise could not load because the audio file download was corrupted.":$&&(A="The exercise could not load because the audio system encountered an error.");
this.N$ZuM&&this.N$ZuM.N$caM($,A);
this.N$eaM&&this.N$eaM.N$caM($,null);
};
A.N$haM=function($){
var A=void 0;
$==this.N$ZuM?A=this.N$YuM:$==this.N$eaM&&(A=this.N$Bmt);
A?this.N$U2T&&this.N$U2T.N$fAh(A):this.N$U2T&&this.N$U2T.N$uAh();
};
A.N$nAh=function($){
var A=$&&$.N$QLh(),C=A>=4;
C&&this.N$laM(0);
var D=$&&$.N$KLh();
this.N$laM(D);
if(!B._g.N$hNh())if(3==A){
var E=$&&$.N$GLh();
this.N$ZuM&&this.N$ZuM.N$paM(!0,E);
this.N$eaM&&this.N$eaM.N$paM(!0,0);
}else if(3==this.N$naM){
this.N$ZuM&&this.N$ZuM.N$paM(!1,0);
this.N$eaM&&this.N$eaM.N$paM(!1,0);
}
5!=this.N$naM&&5==A&&(this.N$YuM&&(this.N$YuM&&this.N$YuM.N$Xr())!=($&&$.N$Xr())?(this.N$Bmt&&this.N$Bmt.N$Xr())==($&&$.N$Xr())&&this.N$eaM&&this.N$eaM.N$daM($&&$.N$Hr()):this.N$ZuM&&this.N$ZuM.N$daM($&&$.N$Hr()));
this.N$naM=A;
};
A.N$vaM=function($){
var A,C=$["reference-label"],D=$["question-sequence"],E=$["reference-sequence"];
if(!this.N$eaM){
this.N$eaM=(A=new B._c.N$uaM())&&A.N$oaM(this);
this.N$Jjh&&this.N$Jjh.N$bCh(this.N$eaM);
}
this.N$YuM=B._c.N$jr.N$Gr(D);
this.N$Bmt=B._c.N$jr.N$Gr(E);
var F=null!=this.N$Bmt,G=C?"?":null;
F||(G=C=null);
this.N$ZuM&&this.N$ZuM.N$maM(C?"Question Note":null,G,!0);
this.N$eaM&&this.N$eaM.N$maM(C?"Reference Note":null,C,null!=this.N$Bmt);
};
A.N$omF=function($,A){
2009==$?this.N$vaM(A):C.N$_super.prototype.N$omF.call(this,$,A);
};
A.N$kuM=function($){
if($!=this.N$U2T){
this.N$U2T=$;
$&&$.N$lAh(this);
this.N$nAh($);
}
};
return C;
});
B._registerClass("N$uaM","N$RCh",function($,A){
function D(){
B._c.N$RCh.call(this);
this.N$gaM=this.N$JFy=this.N$yaM=this.N$baM=this.N$waM=this.N$EaM=this.N$SaM=this.N$xaM=this.N$TaM=this.N$NaM=this.N$CaM=this.N$kaM=null;
this.N$zNh=this.N$fIy=this.N$RLh=this.N$LaM=this.N$ULh=this.N$AaM=0;
this.N$n9=this.N$wCW=!1;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$OaM=function(){
return this.N$wCW;
};
A.N$GLh=function(){
return this.N$ULh;
};
A.N$MaM=function(){
return this.N$LaM;
};
A.N$pIy=function(){
return this.N$fIy;
};
A.N$DaM=function($){
this.N$gaM=$;
};
A.N$PaM=function(){
return this.N$gaM;
};
A.N$aaM=function(){
return this.N$AaM;
};
$.N$WCh=function(){
return"_t8l";
};
A.N$oaM=function($){
var A=this;
(A=D.N$_super.prototype.init.call(this))&&(A.N$gaM=$);
return A;
};
A.N$KBh=function(){
D.N$_super.prototype.N$KBh.call(this);
var $=this.N$PHh(),A=B._g.N$hNh();
A||($=B._g.N$E($,1,0));
var C=B._g.N$E($,this.N$LaM,0),E=B._g.N$y($);
E.width=this.N$LaM;
B._g.N$dt(E,$);
var F=B._g.N$y($);
F.width=this.N$LaM;
B._g.N$vt(F,$);
var G=B._g.N$y(C);
G.height=3;
B._g.N$W(G,$);
this.N$TaM||(G.width+=Math.floor(this.N$LaM/2));
var H=B._g.N$y(C);
H.y=0;
H.height=B._g.N$N(G);
this.N$baM&&this.N$baM.N$sLh(C);
this.N$EaM&&this.N$EaM.N$sLh(E);
this.N$waM&&this.N$waM.N$sLh(G);
this.N$NaM&&this.N$NaM.N$sLh(F);
this.N$kaM&&this.N$kaM.N$sLh(H);
this.N$SaM&&this.N$SaM.N$sLh($);
};
A.N$VCh=function(){
var $,A;
D.N$_super.prototype.N$VCh.call(this);
this.N$JFy=B._c.N$RCh.N$JCh("_n8l");
this.N$kaM=B._c.N$RCh.N$JCh("_r8l");
this.N$NaM=B._c.N$RCh.N$JCh("_i8l");
this.N$waM=($=new B._c.N$HaM())&&$.init();
this.N$EaM=B._c.N$RCh.N$JCh("_s8l");
this.N$xaM=(A=new B._c.N$bAh())&&A.N$CAh(36);
this.N$SaM=B._c.N$QCh.N$JCh("_o8l");
this.N$SaM&&this.N$SaM.N$OCh(this,"N$BaM");
this.N$EaM&&this.N$EaM.N$bCh(this.N$xaM);
this.N$bCh(this.N$JFy);
this.N$bCh(this.N$EaM);
this.N$bCh(this.N$waM);
this.N$bCh(this.N$kaM);
this.N$bCh(this.N$NaM);
this.N$bCh(this.N$SaM);
this.N$jaM();
};
A.N$jaM=function(){
(this.N$JFy&&this.N$JFy.N$S4()).borderRadius=this.N$fIy+"px";
};
A.N$BaM=function(){
this.N$gaM&&this.N$gaM.N$haM(this);
};
A.N$daM=function($){
this.N$waM&&this.N$waM.N$daM($);
var A=this.N$xaM&&this.N$xaM.N$NCh();
C.stop(this.N$zNh);
this.N$zNh=C.animate(350,function($){
var B=0;
B=.5>$?C.lerp(1,1.05,C.easeInOut(2*$)):C.lerp(1.05,1,C.easeInOut(2*($-.5)));
C.transform(A,0,0,B,B);
});
};
A.N$FaM=function(){
var $=0!=this.N$RLh;
this.N$kaM&&this.N$kaM.N$Sct(this.N$wCW||$||!this.N$CaM);
this.N$NaM&&this.N$NaM.N$Sct(this.N$wCW||$||!this.N$TaM);
this.N$SaM&&this.N$SaM.N$Sct(this.N$wCW||$);
this.N$xaM&&this.N$xaM.N$Sct($);
this.N$waM&&this.N$waM.N$Sct(this.N$wCW?!1:$);
(this.N$xaM&&this.N$xaM.N$S4()).opacity=String(this.N$wCW?.25:1);
this.N$okh("_u8l",0!=this.N$RLh);
this.N$GBh();
};
A.N$caM=function($,A){
if(this.N$RLh==$&&this.N$yaM==A)return;
this.N$RLh=$;
this.N$yaM=A;
if(this.N$RLh&&!this.N$baM){
this.N$baM=B._c.N$RCh.N$JCh("_a8l");
this.N$bCh(this.N$baM);
}else if(!this.N$RLh&&this.N$baM){
this.N$baM&&this.N$baM.N$Vkh();
this.N$baM=null;
}
this.N$baM&&this.N$baM.N$KCh(A);
this.N$FaM();
};
A.N$paM=function($,A){
this.N$wCW=$;
this.N$ULh=A;
this.N$waM&&this.N$waM.N$IaM($,A);
this.N$FaM();
};
A.N$maM=function($,A,D){
if(this.N$CaM==$&&this.N$TaM==A&&this.N$n9==D)return;
this.N$kaM&&this.N$kaM.N$uFh($);
var E=this.N$NaM&&this.N$NaM.N$KOh();
C.empty(E);
if(A){
var F=B._g.N$vNh(A);
F.style.fontSize="16px";
F.style.visibility="hidden";
document.body.appendChild(F);
var G=F.offsetWidth;
F.remove();
F.style.fontSize="";
F.style.visibility="";
this.N$AaM=G;
C.append(E,F);
}else this.N$AaM=0;
this.N$CaM=$;
this.N$TaM=A;
this.N$n9=D;
this.N$FaM();
};
A.N$jIy=function($){
if(this.N$fIy!=$){
this.N$fIy=$;
this.N$jaM();
}
};
A.N$faM=function($){
if(this.N$LaM!=$){
this.N$LaM=$;
this.N$GBh();
}
};
return D;
});
B._registerClass("N$HaM","N$RCh",function($,A){
function D(){
B._c.N$RCh.call(this);
this.N$xHh=null;
this.N$zNh=this.N$ULh=this.N$qaM=this.N$RaM=0;
this.N$wCW=!1;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$OaM=function(){
return this.N$wCW;
};
A.N$GLh=function(){
return this.N$ULh;
};
A.N$VCh=function(){
var $=this;
D.N$_super.prototype.N$VCh.call(this);
this.N$xHh=B._c.N$LHh.N$kHh(function(A){
$.N$UaM(A);
});
$.N$OHh($.N$xHh);
};
A.N$UaM=function($){
var A=this.N$PHh();
if(!A)return;
var C=B._g.N$y(A),D=C.height/2,E=this.N$RaM,F=(this.N$qaM,B._g.N$ONh(0,.25)),G=B._g.N$ONh(0,this.N$qaM);
if(this.N$wCW){
if(!this.N$ULh)return;
E=this.N$ULh;
F=B._g.N$ONh(12105912,.5);
G=B._g.N$ONh(12105912,1);
}
C.width=Math.round(C.width*E);
$&&$.N$HHh();
$&&$.N$BHh(A,D);
$&&$.N$jHh(F);
$&&$.N$Wqh(C);
$&&$.N$HHh();
$&&$.N$Iqh(A,D,0,D,0);
$&&$.N$jHh(G);
};
A.N$daM=function($){
var A=this,B=1e3*$,D=(B-250)/B;
0>D&&(D=0);
C.stop(this.N$zNh);
this.N$zNh=C.animate(B,function($){
var B=1-($-D)/(1-D);
B>1&&(B=1);
A.N$RaM=$;
A.N$qaM=B;
A.N$xHh&&A.N$xHh.N$DHh();
A.N$xHh&&A.N$xHh.N$bRh();
});
};
A.N$IaM=function($,A){
this.N$wCW=$;
this.N$ULh=A;
this.N$xHh&&this.N$xHh.N$DHh();
};
return D;
});
}();
!function(){
"use strict";
var A="button-state";
B._registerClass("N$woM","N$zaM",function(D,E){
function F(){
B._c.N$zaM.call(this);
this.N$WaM=this.N$FNh=this.N$Jjh=this.N$AbF=this.N$XaM=this.N$VaM=this.N$JaM=this.N$KaM=this.N$QaM=this.N$GaM=null;
this.N$XDh=0;
this.constructor=F;
this.N$_id=++B._id;
}
E.N$YaM=function($){
this.N$FNh=$;
};
E.N$NBh=function(){
return this.N$FNh;
};
E.N$dst=function($){
F.N$_super.prototype.N$dst.call(this,$);
this.N$JaM=$[A];
};
E.N$bft=function(B){
var C=null;
$.each(this.N$WaM,function($){
var A=$&&$.N$ZaM();
if(A){
var B=$&&$.N$Wn();
C||(C={});
C[B]=A;
}
});
C&&(B[A]=C);
};
E.N$loM=function(){
var A=this;
if(this.N$JaM){
$.each(this.N$FNh,function($){
var B=$&&$.N$Wn(),C=A.N$JaM[B];
C&&$&&$.N$efM(C);
});
A.N$JaM=null;
}
};
E.N$aIh=function(){
var $;
F.N$_super.prototype.N$aIh.call(this);
this.N$AbF=($=new B._c.N$SOh())&&$.init();
this.N$AbF&&this.N$AbF.N$COh(4);
this.N$Jjh=B._c.N$RCh.N$JCh("_f8l");
this.N$tfM();
};
E.N$eLh=function(){
return this.N$Jjh;
};
E.N$OoM=function($){
F.N$_super.prototype.N$OoM.call(this,$);
$["dashboard-button-layouts"]=this.N$VaM;
};
E.N$DoM=function($){
var A=$["dashboard-frame"];
this.N$Jjh&&this.N$Jjh.N$sLh(B._g.N$w(A));
this.N$AbF&&this.N$AbF.N$LOh(this.N$Jjh&&this.N$Jjh.N$PHh());
};
E.N$xuM=function(){
C.stop(this.N$XDh);
this.N$XDh=0;
$.each(this.N$WaM,function($){
$&&$.N$xuM();
});
};
E.N$GIy=function(A,C){
var D=this;
if(B._c.N$cLh.N$lLh())return!1;
var E=B._c.N$fOh.N$aOh(A.keyCode),F=!1;
if(B._c.N$fOh.N$xMh(A.keyCode)){
if(C){
this.N$QaM||(this.N$QaM=[]);
this.N$QaM.push(E);
this.N$QaM=$.uniq(this.N$QaM);
}else this.N$QaM=$.without(this.N$QaM||[],E);
var G=$.last(this.N$QaM),H=this.N$KaM[G];
$.each(this.N$FNh,function(A){
var B=$.includes(H,A);
A&&A.N$nfM(B);
});
F=!0;
}else if(C){
var I=null,J=D.N$QaM?D.N$QaM.length:0;
I=J>0?D.N$XaM[""+D.N$QaM[J-1]+" "+E]:D.N$XaM[E];
if(I&&I.N$q2()){
I&&I.N$cOh();
F=!0;
}
}
return F;
};
E.N$rfM=function(){
var A,C=$.map(this.N$WaM,function($){
return $&&$.N$Wn();
}),D=JSON.stringify($.inspect(C));
(A=B._c.N$ukh.N$Ckh())&&A.N$Pkh("All Buttons Disabled",D,null);
};
E.N$tfM=function(){
this.N$FNh=[];
this.N$WaM=[];
this.N$XaM={};
this.N$GaM={};
this.N$KaM={};
this.N$Jjh&&this.N$Jjh.N$gUh();
this.N$AbF&&this.N$AbF.N$AOh();
};
E.N$ifM=function($){
var A;
(A=this.N$CPh())&&A.N$RoM(3008,{
tag:$&&$.N$Wn()
});
};
E.N$sfM=function(){
var A=this,B=$.filter(this.N$WaM,function($){
return $&&$.N$ofM();
}),D=$.map(B,function($){
return $&&$.N$NCh();
});
C.stop(A.N$XDh);
A.N$XDh=C.animate(500,function(A){
var B=1-.5*C.easeInOut(A);
$.each(D,function($){
$.style.opacity=String(B);
});
});
};
E.N$ufM=function($){
var A,C=$.tag,D=$.title,E=$.shortcut,F=$.active,G=(A=new B._c.N$afM())&&A.init();
G&&G.N$ffM(D,2);
G&&G.N$OCh(this,"N$ifM");
G&&G.N$Ylt(C);
F?this.N$WaM.push(G):G&&G.N$lfM();
this.N$GaM[C]=G;
this.N$FNh.push(G);
if(E){
var H=E.split(" ");
if(H.length>1){
var I=H[0];
this.N$KaM[I]||(this.N$KaM[I]=[]);
this.N$KaM[I].push(G);
}
this.N$XaM[E]=G;
}
return G;
};
E.N$cfM=function(A,C){
for(var D,E=this,F={},G=0,H=A.length;H>G;G++){
var I=A[G];
F[I.tag]=I;
}
var J=(D=new B._c.N$SOh())&&D.init();
J&&J.N$COh(4);
$.each(C["default"],function(A){
J&&J.N$OOh();
$.each(A,function($){
var A=J&&J.N$DOh(),C=null!==$?F[$]:null;
if(C){
var D=null;
if(C.textOnly){
D=B._c.N$RCh.N$JCh("_l8l");
D&&D.N$uFh(C.title);
}else D=E.N$ufM(C);
A&&A.N$jOh(D);
E.N$Jjh&&E.N$Jjh.N$bCh(D);
}
});
});
E.N$AbF=J;
};
E.N$hfM=function($){
var A=$["buttons"],B=$["layouts"],C=$["options"];
this.N$VaM=B;
this.N$tfM();
this.N$cfM(A,B,C);
};
E.N$pfM=function(){
C.stop(this.N$XDh);
this.N$XDh=0;
$.each(this.N$WaM,function($){
$&&$.N$F2(!0);
$&&$.N$sot();
($&&$.N$NCh()).style.opacity=String(1);
});
};
E.N$OuM=function(A){
var C=this,D=!!A["correct"],E=!!A["reference"],F=A["duration"],G=A["intent"],H=A["object"];
void 0===F&&(F=B._c.N$afM.N$dfM());
$.each(H,function($){
var A=C.N$GaM[$];
if(E)A&&A.N$vfM(F);else if(1==G)D?A&&A.N$mfM(F):A&&A.N$gfM(F);else if(D)A&&A.N$yfM();else{
A&&A.N$bfM();
A&&A.N$F2(!1);
}
});
$.every(C.N$WaM,function($){
return!($&&$.N$q2());
})&&C.N$rfM("All Buttons Disabled");
1==G&&D?$.each(C.N$WaM,function($){
$&&$.N$wfM(F);
}):2==G&&C.N$sfM();
};
E.N$EfM=function(A){
var B=this,C=A["object"],D=[];
$.each(C,function(A){
var C=B.N$GaM[A];
C&&$.includes(B.N$WaM,C)&&D.push(C);
});
$.each(D,function($){
$&&$.N$yfM();
});
$.each(B.N$WaM,function(A){
$.includes(D,A)||A&&A.N$F2(!1);
});
B.N$sfM();
};
E.N$omF=function($,A){
2005==$?this.N$hfM(A):2015==$?this.N$pfM():2014==$?this.N$OuM(A):2016==$?this.N$EfM(A):F.N$_super.prototype.N$omF.call(this,$,A);
};
return F;
});
}();
!function(){
"use strict";
B._registerClass("N$SfM",null,function($,A){
function C(){
this.N$xfM=this.N$xPh=null;
this.N$TfM=!1;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$NPh=function($){
this.N$xPh=$;
};
A.N$CPh=function(){
return this.N$xPh;
};
A.N$NfM=function($){
this.N$xfM=$;
};
A.N$CfM=function(){
return this.N$xfM;
};
A.N$kfM=function($){
this.N$TfM=$;
};
A.N$LfM=function(){
return this.N$TfM;
};
A.N$AfM=function($){
var A=this;
(A=C.N$_super.prototype.init.call(this))&&(A.N$xPh=$);
return A;
};
A.N$aIh=function(){};
A.N$loM=function(){};
A.N$bft=function(){};
A.N$dst=function(){};
A.N$GIy=function(){
return!1;
};
A.N$omF=function(){};
A.N$toM=function($){
return this.N$xPh&&this.N$xPh.N$toM($);
};
A.N$MoM=function($,A){
return this.N$xPh&&this.N$xPh.N$MoM($,A);
};
A.N$foM=function($){
this.N$xPh&&this.N$xPh.N$foM($);
};
A.N$RoM=function($,A){
this.N$xPh&&this.N$xPh.N$RoM($,A);
};
A.N$OoM=function(){};
A.N$DoM=function(){};
A.N$eLh=function(){
return null;
};
A.N$OfM=function(){};
A.N$xuM=function(){};
return C;
});
B._registerClass("N$GuM","N$SfM",function($,A){
function C(){
B._c.N$SfM.call(this);
this.N$MfM=0;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$sut=function(){
return this.N$MfM;
};
A.N$poM=function($,A){
var B=this;
(B=C.N$_super.prototype.N$AfM.call(this,$))&&(B.N$MfM=A);
return B;
};
A.N$OoM=function($){
C.N$_super.prototype.N$OoM.call(this,$);
$["content-module-type"]=this.N$sut();
};
A.N$wuM=function(){};
A.N$EuM=function(){};
return C;
});
B._registerClass("N$zaM","N$SfM",function($,A){
function C(){
B._c.N$SfM.call(this);
this.N$DfM=0;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$out=function(){
return this.N$DfM;
};
A.N$boM=function($,A){
var B=this;
(B=C.N$_super.prototype.N$AfM.call(this,$))&&(B.N$DfM=A);
return B;
};
A.N$OoM=function($){
C.N$_super.prototype.N$OoM.call(this,$);
$["dashboard-module-type"]=this.N$out();
};
return C;
});
}();
!function(){
"use strict";
B._registerClass("N$moM","N$GuM",function($,A){
function C(){
B._c.N$GuM.call(this);
this.N$Jjh=this.N$PfM=this.N$HfM=null;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$BfM=function(){
return this.N$HfM;
};
A.N$aIh=function(){
var $;
C.N$_super.prototype.N$aIh.call(this);
this.N$Jjh=B._c.N$RCh.N$JCh("_c8l");
this.N$HfM=($=new B._c.N$XFy())&&$.init();
this.N$Jjh&&this.N$Jjh.N$bCh(this.N$HfM);
};
A.N$eLh=function(){
return this.N$Jjh;
};
A.N$DoM=function($){
var A=$["content-helper-width"],C=B._g.N$w($["content-frame"]);
this.N$Jjh&&this.N$Jjh.N$sLh(C);
var D=this.N$Jjh&&this.N$Jjh.N$PHh();
D=B._g.N$E(D,$["content-inset-width"],0);
this.N$PfM={
width:D.width,
height:D.height,
scale:B._g.N$ANh(),
simple:!B._g.N$hNh(),
"helper-width":A
};
this.N$HfM&&this.N$HfM.N$jIy($["content-corner-radius"]);
this.N$HfM&&this.N$HfM.N$sLh(D);
this.N$jfM();
};
A.N$EuM=function($,A){
this.N$HfM&&this.N$HfM.N$OIy(1,A,$);
};
A.N$FfM=function(){
this.N$HfM&&this.N$HfM.N$BIy(!0);
};
A.N$IfM=function(){
this.N$HfM&&this.N$HfM.N$BIy(!1);
};
A.N$jfM=function(){
if(!this.N$PfM)return;
var $=this.N$MoM(1010,this.N$PfM),A=B._c.N$Vrt.N$Itt($);
this.N$HfM&&this.N$HfM.N$HIy(A);
};
A.N$OuM=function($){
var A=$["duration"],B=$["intent"],C=$["correct"],D=$["sequence-id"];
C&&(A>0?D||this.N$HfM&&this.N$HfM.N$AIy(1,A):2==B&&this.N$HfM&&this.N$HfM.N$AIy(2,.5));
};
A.N$omF=function($,A){
2012==$?this.N$jfM():2014==$?this.N$OuM(A):C.N$_super.prototype.N$omF.call(this,$,A);
};
return C;
});
}();
!function(){
"use strict";
B._registerClass("N$xoM","N$zaM",function($,A){
function D(){
B._c.N$zaM.call(this);
this.N$Jjh=this.N$qfM=this.N$v2T=this.N$RfM=null;
this.N$Pit=this.N$UfM=0;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$aIh=function(){
var $,A,C;
D.N$_super.prototype.N$aIh.call(this);
var E=B._c.N$RCh.N$JCh("_h8l");
this.N$v2T=($=new B._c.N$FIy())&&$.init();
this.N$v2T&&this.N$v2T.N$OCh(this,"N$zfM");
this.N$RfM=(A=new B._c.N$afM())&&A.init();
this.N$RfM&&this.N$RfM.N$OCh(this,"N$WfM");
this.N$RfM&&this.N$RfM.N$Plt("Submit Answer");
this.N$qfM=B._c.N$RCh.N$JCh("_p8l");
var F=(C=B._c.N$ktt.N$Si())&&C.N$Ctt();
this.N$qfM&&this.N$qfM.N$uFh(F?"Tap for Next Question":"Click or Tap for Next Question");
E&&E.N$bCh(this.N$v2T);
E&&E.N$bCh(this.N$RfM);
this.N$Jjh=E;
};
A.N$eLh=function(){
return this.N$Jjh;
};
A.N$DoM=function($){
var A=$["dashboard-frame"],C=B._g.N$w(A);
this.N$Jjh&&this.N$Jjh.N$sLh(C);
this.N$qfM&&this.N$qfM.N$sLh(C);
var D=this.N$Jjh&&this.N$Jjh.N$PHh(),E=B._g.N$g(),F=B._g.N$g();
B._g.N$V(E,F,D,Math.round(D.height/3*2),4);
this.N$v2T&&this.N$v2T.N$sLh(E);
this.N$RfM&&this.N$RfM.N$sLh(F);
};
A.N$GIy=function($,A){
var C;
if(B._c.N$cLh.N$lLh())return!1;
if(A){
var D=$.keyCode;
if((B._c.N$fOh.N$xMh(D)||B._c.N$fOh.N$TMh(D))&&this.N$v2T&&this.N$v2T.N$GIy($,A))return!0;
var E=B._c.N$fOh.N$aOh(D);
if("Enter"==E||"Return"==E||"Space"==E){
if(0==this.N$Pit){
this.N$RfM&&this.N$RfM.N$cOh();
return!0;
}
(C=this.N$CPh())&&C.N$RoM(3007,null);
}
}
return!1;
};
A.N$zfM=function(){
this.N$RoM(3017,{
tag:this.N$v2T&&this.N$v2T.N$v4()
});
};
A.N$WfM=function(){
0==this.N$Pit?this.N$RoM(3008,{}):this.N$foM(3005);
};
A.N$SuM=function($){
var A,B=$["status"],C=2==B,D=1==B;
C?(A=this.N$eLh())&&A.N$Wkh(this.N$qfM,this.N$Jjh):this.N$qfM&&this.N$qfM.N$Vkh();
var E=!D&&!C;
this.N$v2T&&this.N$v2T.N$F2(E);
this.N$RfM&&this.N$RfM.N$F2(E);
this.N$v2T&&this.N$v2T.N$Sct(C);
this.N$RfM&&this.N$RfM.N$Sct(C);
this.N$Pit=B;
};
A.N$XfM=function($){
var A=$["tag"];
this.N$v2T&&this.N$v2T.N$nnt(A);
};
A.N$pfM=function(){
this.N$RfM&&this.N$RfM.N$sot();
if(this.N$UfM){
C.stop(this.N$UfM);
this.N$UfM=0;
}
C.transform(this.N$v2T&&this.N$v2T.N$NCh(),0,0,1,1,1);
};
A.N$OuM=function($){
var A=$["duration"],D=$["correct"],E=$["intent"];
D?1==E?void 0!==A?this.N$RfM&&this.N$RfM.N$mfM(A):this.N$RfM&&this.N$RfM.N$mfM(B._c.N$afM.N$dfM()):this.N$RfM&&this.N$RfM.N$yfM():1==E||0==E?void 0!==A?this.N$RfM&&this.N$RfM.N$gfM(A):this.N$RfM&&this.N$RfM.N$gfM(.2):this.N$RfM&&this.N$RfM.N$bfM();
C.stop(this.N$UfM);
this.N$UfM=0;
if(2==E){
var F=this.N$v2T&&this.N$v2T.N$NCh();
this.N$UfM=C.animate(500,function($){
$=C.easeOut($);
C.transform(F,0,0,1,1,C.lerp(1,.5,$));
});
}
};
A.N$omF=function($,A){
2021==$?this.N$XfM(A):2015==$?this.N$pfM():2001==$?this.N$SuM(A):2014==$?this.N$OuM(A):D.N$_super.prototype.N$omF.call(this,$,A);
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$voM","N$GuM",function($,A){
function C(){
B._c.N$GuM.call(this);
this.N$Jjh=this.N$PfM=this.N$EmF=null;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$OmF=function(){
return this.N$EmF;
};
A.N$aIh=function(){
var $;
C.N$_super.prototype.N$aIh.call(this);
this.N$Jjh=B._c.N$RCh.N$JCh("_d8l");
var A=B._g.N$hNh()?1:0;
this.N$EmF=($=new B._c.N$Rqy())&&$.N$dqy(A);
this.N$Jjh&&this.N$Jjh.N$bCh(this.N$EmF);
};
A.N$eLh=function(){
return this.N$Jjh;
};
A.N$DoM=function($){
var A=B._g.N$w($["content-frame"]);
this.N$Jjh&&this.N$Jjh.N$sLh(A);
var C=this.N$Jjh&&this.N$Jjh.N$PHh();
C=B._g.N$E(C,$["content-inset-width"],0);
var D=(this.N$LfM()?1:0)|(B._g.N$hNh()?0:4);
this.N$PfM={
width:C.width,
height:C.height,
scale:B._g.N$ANh(),
options:D
};
this.N$EmF&&this.N$EmF.N$sLh(C);
this.N$jfM();
};
A.N$EuM=function($,A){
this.N$EmF&&this.N$EmF.N$OIy(1,A,$);
};
A.N$FfM=function(){
this.N$EmF&&this.N$EmF.N$BIy(!0);
};
A.N$IfM=function(){
this.N$EmF&&this.N$EmF.N$BIy(!1);
};
A.N$jfM=function(){
if(!this.N$PfM)return;
var $=this.N$MoM(1011,this.N$PfM),A=B._c.N$trt.N$Itt($);
this.N$EmF&&this.N$EmF.N$HIy(A);
};
A.N$OuM=function($){
var A=$["duration"],B=$["intent"],C=$["correct"],D=$["sequence-id"];
C&&(A>0?D||this.N$EmF&&this.N$EmF.N$AIy(1,A):2==B&&this.N$EmF&&this.N$EmF.N$AIy(2,.5));
};
A.N$omF=function($,A){
2011==$?this.N$jfM():2014==$?this.N$OuM(A):C.N$_super.prototype.N$omF.call(this,$,A);
};
return C;
});
}();
!function(){
"use strict";
var A="incorrect-keys",C=.5,D=.5,E=.33;
B._registerClass("N$EoM","N$zaM",function(F,G){
function H(){
B._c.N$zaM.call(this);
this.N$Jjh=this.N$VfM=this.N$EmF=this.N$JfM=this.N$Lrt=this.N$d2T=this.N$KfM=this.N$QfM=null;
this.N$GfM=this.N$YfM=!1;
this.constructor=H;
this.N$_id=++B._id;
}
G.N$dst=function($){
H.N$_super.prototype.N$dst.call(this,$);
this.N$JfM=$[A];
};
G.N$bft=function($){
$[A]=this.N$EmF&&this.N$EmF.N$Aqy();
};
G.N$loM=function(){
if(this.N$JfM){
this.N$EmF&&this.N$EmF.N$Lqy(this.N$JfM);
this.N$JfM=null;
}
};
G.N$aIh=function(){
var $,A,C,D,E,F;
H.N$_super.prototype.N$aIh.call(this);
this.N$Jjh=B._c.N$RCh.N$JCh("_v8l");
($=B._c.N$CMh.N$Si())&&$.N$lAh(this);
this.N$EmF=(A=new B._c.N$YIy())&&A.N$dqy(B._g.N$hNh()?1:0);
this.N$EmF&&this.N$EmF.N$nCh(this);
if(B._g.N$hNh()){
this.N$VfM=(C=new B._c.N$SHh())&&C.init();
this.N$KfM=(D=new B._c.N$FBh())&&D.init();
this.N$KfM&&this.N$KfM.N$QBh(1);
this.N$KfM&&this.N$KfM.N$YBh(B._g.N$ONh(0,1));
(this.N$KfM&&this.N$KfM.N$S4()).zIndex=String(100);
this.N$QfM=(E=new B._c.N$FBh())&&E.init();
this.N$QfM&&this.N$QfM.N$QBh(2);
this.N$QfM&&this.N$QfM.N$YBh(B._g.N$ONh(0,1));
(this.N$QfM&&this.N$QfM.N$S4()).zIndex=String(100);
this.N$d2T=(F=new B._c.N$lPh())&&F.init();
this.N$d2T&&this.N$d2T.N$bCh(this.N$EmF);
this.N$d2T&&this.N$d2T.N$nCh(this);
this.N$Jjh&&this.N$Jjh.N$bCh(this.N$VfM);
this.N$Jjh&&this.N$Jjh.N$bCh(this.N$d2T);
this.N$Jjh&&this.N$Jjh.N$bCh(this.N$KfM);
this.N$Jjh&&this.N$Jjh.N$bCh(this.N$QfM);
}else this.N$Jjh&&this.N$Jjh.N$bCh(this.N$EmF);
this.N$ZfM();
};
G.N$eLh=function(){
return this.N$Jjh;
};
G.N$OoM=function($){
H.N$_super.prototype.N$OoM.call(this,$);
$["dashboard-keyboard-range"]=this.N$Lrt&&this.N$Lrt.N$ar();
};
G.N$DoM=function($){
var A=$["dashboard-frame"],C=$["visible-white-key-count"],D=B._g.N$w(A);
this.N$Jjh&&this.N$Jjh.N$sLh(D);
var E=this.N$Jjh&&this.N$Jjh.N$PHh(),F=this.N$Lrt?9:6,G=3,H=0,I=0;
if(B._g.N$hNh()){
var J=Math.round(B._g.N$i(E.width,[12,320,16,768])),K=B._g.N$g(),L=B._g.N$g();
B._g.N$V(K,L,E,F,0);
K=B._g.N$E(K,Math.round(J/1.5),0);
H=L.width;
I=L.height;
this.N$d2T&&this.N$d2T.N$sLh(L);
this.N$VfM&&this.N$VfM.N$sLh(K);
this.N$d2T&&this.N$d2T.N$sLh(L);
var M=B._g.N$g();
B._g.N$mt(M,L);
B._g.N$dt(M,L);
var N=B._g.N$g();
B._g.N$mt(N,L);
B._g.N$vt(N,L);
this.N$KfM&&this.N$KfM.N$sLh(M);
this.N$QfM&&this.N$QfM.N$sLh(N);
this.N$KfM&&this.N$KfM.N$ZBh(J);
this.N$QfM&&this.N$QfM.N$ZBh(J);
}else{
var O=this.N$Jjh&&this.N$Jjh.N$PHh();
H=O.width;
I=O.height;
G|=4;
}
var P=this.N$MoM(1012,{
range:this.N$Lrt&&this.N$Lrt.N$ar(),
"visible-width":H,
"visible-height":I,
"visible-white-key-count":C,
scale:B._g.N$ANh(),
options:G
}),Q=B._c.N$trt.N$Itt(P);
this.N$EmF&&this.N$EmF.N$HIy(Q);
if(B._g.N$hNh())if(this.N$Lrt){
var R=this.N$EmF&&this.N$EmF.N$Dqy(),S=B._g.N$d(R);
this.N$EmF&&this.N$EmF.N$sLh(S);
(this.N$EmF&&this.N$EmF.N$S4()).position="relative";
this.N$RHh(this.N$d2T);
}else this.N$EmF&&this.N$EmF.N$sLh(this.N$Jjh&&this.N$Jjh.N$PHh());else this.N$EmF&&this.N$EmF.N$sLh(this.N$Jjh&&this.N$Jjh.N$PHh());
};
G.N$elM=function(){
var $=(this.N$d2T&&this.N$d2T.N$UHh()).x,A=(this.N$d2T&&this.N$d2T.N$w4()).width,B=(this.N$EmF&&this.N$EmF.N$w4()).width;
this.N$VfM&&this.N$VfM.N$MHh($,B,A);
};
G.N$ZfM=function(){
this.N$VfM&&this.N$VfM.N$Sct(null==this.N$Lrt);
this.N$EmF&&this.N$EmF.N$Pqy(null!=this.N$Lrt);
};
G.N$tlM=function(A){
var B=this,C=$.uniq($.map(A,function($){
return $%12;
}));
return $.filter(B.N$EmF&&B.N$EmF.N$pqy(),function(A){
return $.includes(C,A%12);
});
};
G.N$nlM=function(A,B,C,D,E){
var F=this;
this.N$GfM&&(A=this.N$tlM(A));
$.each(A,function($){
F.N$EmF&&F.N$EmF.N$Cqy(B,$);
});
F.N$EmF&&F.N$EmF.N$Mqy(D);
E&&$.each(F.N$EmF&&F.N$EmF.N$pqy(),function($){
F.N$EmF&&F.N$EmF.N$Cqy(0,$);
});
$.each(A,function($){
F.N$EmF&&F.N$EmF.N$Cqy(C,$);
});
};
G.N$LMh=function($){
if(this.N$YfM)return;
if(!this.N$Lrt){
this.N$GfM=!0;
$%=12;
}
var A=this.N$EmF&&this.N$EmF.N$kqy($),B=0==A||1==A;
if(B){
this.N$nlM([$],4,2,E,!1);
this.N$rlM($);
}
this.N$Lrt||(this.N$GfM=!1);
};
G.N$Nqy=function($,A){
this.N$rlM(A);
};
G.N$RHh=function(){
this.N$elM();
};
G.N$rlM=function($){
this.N$RoM(3008,{
tag:$
});
};
G.N$ilM=function($){
var A=$["range"],C=B._c.N$Jn.N$ur(A);
if(!B._g.N$j7(this.N$Lrt,C)){
this.N$Lrt=C;
this.N$ZfM();
}
};
G.N$pfM=function(){
this.N$YfM=!1;
this.N$EmF&&this.N$EmF.N$sot();
};
G.N$OuM=function($){
var A=!!$["correct"],B=!!$["reference"],C=$["duration"],F=$["object"],G=$["intent"];
if(B){
C||(C=D);
this.N$nlM(F,6,0,C,!1);
}else if(A){
C||(C=D);
1==G?this.N$nlM(F,5,0,C,!0):this.N$nlM(F,5,3,C,!1);
}else{
C||(C=E);
1==G?this.N$nlM(F,4,0,C,!0):this.N$nlM(F,4,2,C,!1);
}
};
G.N$EfM=function(A){
var B=this,D=A["object"],E=[],F=[];
$.each(this.N$EmF&&this.N$EmF.N$pqy(),function(A){
$.includes(D,A)?E.push(A):F.push(A);
});
$.each(E,function($){
B.N$EmF&&B.N$EmF.N$Cqy(5,$);
});
B.N$EmF&&B.N$EmF.N$Mqy(C);
$.each(E,function($){
B.N$EmF&&B.N$EmF.N$Cqy(3,$);
});
$.each(F,function($){
B.N$EmF&&B.N$EmF.N$Cqy(0,$);
});
$.first(E);
B.N$YfM=!0;
};
G.N$omF=function($,A){
2007==$?this.N$ilM(A):2015==$?this.N$pfM():2014==$?this.N$OuM(A):2016==$?this.N$EfM(A):H.N$_super.prototype.N$omF.call(this,$,A);
};
return H;
});
}();
!function(){
"use strict";
B._registerClass("N$SoM","N$zaM",function(A,C){
function D(){
B._c.N$zaM.call(this);
this.N$slM=this.N$Jjh=this.N$olM=this.N$ulM=this.N$alM=this.N$flM=this.N$llM=this.N$clM=this.N$hlM=this.N$qfM=this.N$plM=this.N$dlM=this.N$RfM=this.N$vlM=null;
this.N$Ogt=this.N$Pit=0;
this.N$mlM=!1;
this.constructor=D;
this.N$_id=++B._id;
}
C.N$aIh=function(){
var $,A,C,E=this;
D.N$_super.prototype.N$aIh.call(this);
var F=B._c.N$RCh.N$JCh("_m8l");
function G($){
var A,C=(A=new B._c.N$WHh())&&A.init();
C&&C.N$OCh(E,"N$glM");
C&&C.N$Ylt($);
F&&F.N$bCh(C);
return C;
}
E.N$vlM=G(1);
E.N$alM=G(-1);
E.N$vlM&&E.N$vlM.N$yBh(32);
E.N$alM&&E.N$alM.N$yBh(33);
E.N$vlM&&E.N$vlM.N$aBh(3);
E.N$alM&&E.N$alM.N$aBh(12);
E.N$slM=($=new B._c.N$wBh())&&$.N$OBh(E,"N$ylM");
E.N$olM=E.N$slM&&E.N$slM.N$MBh(null,"Double Flat",-2);
E.N$flM=E.N$slM&&E.N$slM.N$MBh(null,"Flat",-1);
E.N$hlM=E.N$slM&&E.N$slM.N$MBh(null,"Natural",0);
E.N$plM=E.N$slM&&E.N$slM.N$PBh("None",-100);
E.N$dlM=E.N$slM&&E.N$slM.N$MBh(null,"Sharp",1);
E.N$ulM=E.N$slM&&E.N$slM.N$MBh(null,"Double Sharp",2);
E.N$olM&&E.N$olM.N$yBh(1);
E.N$flM&&E.N$flM.N$yBh(2);
E.N$hlM&&E.N$hlM.N$yBh(3);
E.N$dlM&&E.N$dlM.N$yBh(4);
E.N$ulM&&E.N$ulM.N$yBh(5);
E.N$olM&&E.N$olM.N$aBh(5);
E.N$ulM&&E.N$ulM.N$aBh(10);
F&&F.N$bCh(E.N$olM);
F&&F.N$bCh(E.N$flM);
F&&F.N$bCh(E.N$hlM);
F&&F.N$bCh(E.N$plM);
F&&F.N$bCh(E.N$dlM);
F&&F.N$bCh(E.N$ulM);
E.N$RfM=(A=new B._c.N$afM())&&A.init();
E.N$RfM&&E.N$RfM.N$hCh("_g8l");
E.N$RfM&&E.N$RfM.N$OCh(E,"N$WfM");
E.N$RfM&&E.N$RfM.N$Plt("Submit Answer");
F&&F.N$bCh(E.N$RfM);
E.N$Jjh=F;
E.N$llM=B._c.N$RCh.N$JCh("_y8l");
E.N$clM=B._c.N$RCh.N$pUh("span","_b8l");
E.N$llM&&E.N$llM.N$bCh(E.N$clM);
E.N$qfM=B._c.N$RCh.N$JCh("_w8l");
var H=(C=B._c.N$ktt.N$Si())&&C.N$Ctt(),I=H?"Tap for Next Question":"Click for Next Question";
E.N$qfM&&E.N$qfM.N$uFh(I);
};
C.N$eLh=function(){
return this.N$Jjh;
};
C.N$DoM=function($){
var A=$["dashboard-frame"],C=B._g.N$w(A);
this.N$Jjh&&this.N$Jjh.N$sLh(C);
this.N$qfM&&this.N$qfM.N$sLh(C);
var D=!1,E=32;
C.height<=138?D=!0:C.height<=192&&(E=16);
var F=B._g.N$hNh(),G=F?2:-1,H=void 0,I=void 0,J=void 0;
if(D){
var K=128,L=24;
H=B._g.N$y(C);
J=B._g.N$y(C);
I=B._g.N$E(C,K,0);
H.width=K-L;
J.width=K-L;
B._g.N$dt(H,C);
B._g.N$vt(J,C);
this.N$RfM&&this.N$RfM.N$blM(2);
}else{
var M=B._g.N$R(3),N=[G,E];
B._g.N$G(M,C,N);
var O=B._g.N$R(5),P=[16,2,2,2];
B._g.N$Q(O,C,P);
var Q=B._g.N$M(M[0],M[1]);
J=B._g.N$y(M[2]);
H=B._g.N$y(Q);
I=B._g.N$y(Q);
B._g.N$nt(H,O[0]);
B._g.N$rt(H,O[0]);
B._g.N$nt(I,O[1]);
B._g.N$rt(I,O[4]);
this.N$RfM&&this.N$RfM.N$blM(1);
}
var R=this.N$Ogt,S=B._g.N$g(),T=B._g.N$g();
B._g.N$K(S,T,I,G);
var U=B._g.N$g(),V=B._g.N$g(),W=B._g.N$g(),X=B._g.N$g(),Y=B._g.N$g(),Z=B._g.N$g(),_=1,a=0,b=2;
if(4==R||2==R){
S.width=Math.round(.84*I.width);
B._g.N$z(S,T);
2==R?B._g.N$Q([V,W,Y],S,[G,G]):B._g.N$Q([V,Y],S,[G]);
U.y=X.y=Z.y=T.y;
U.height=X.height=Z.height=T.height;
U.width=Z.width=Math.round(.28*I.width);
B._g.N$dt(U,T);
B._g.N$vt(Z,T);
X.x=B._g.N$L(U)+G;
X.width=B._g.N$T(Z)-(B._g.N$T(X)+G);
if(!D){
B._g.N$nt(J,U);
B._g.N$rt(J,Z);
}
}else if(1==R){
B._g.N$Q([V,W,Y],S,[G,G]);
B._g.N$b(X,T);
a=12;
}else if(3==R){
B._g.N$Q([V,X,Y],I,[G,G]);
_=5;
b=10;
}
this.N$flM&&this.N$flM.N$sLh(V);
this.N$hlM&&this.N$hlM.N$sLh(W);
this.N$dlM&&this.N$dlM.N$sLh(Y);
this.N$olM&&this.N$olM.N$sLh(U);
this.N$plM&&this.N$plM.N$sLh(X);
this.N$ulM&&this.N$ulM.N$sLh(Z);
this.N$llM&&this.N$llM.N$sLh(I);
this.N$flM&&this.N$flM.N$aBh(_);
this.N$dlM&&this.N$dlM.N$aBh(b);
this.N$plM&&this.N$plM.N$aBh(a);
var c=B._g.N$g(),d=B._g.N$g();
B._g.N$K(c,d,H,G);
this.N$vlM&&this.N$vlM.N$sLh(c);
this.N$alM&&this.N$alM.N$sLh(d);
this.N$RfM&&this.N$RfM.N$sLh(J);
};
C.N$GIy=function($,A){
var C;
if(B._c.N$cLh.N$lLh())return!1;
var D=B._c.N$fOh.N$aOh($.keyCode);
if(A){
var E="Up",F="Down",G="Right",H="Left";
if(D==E){
this.N$wlM($.shiftKey?4:1);
return!0;
}
if(D==F){
this.N$wlM($.shiftKey?-4:-1);
return!0;
}
if(D==G){
this.N$ElM(1);
return!0;
}
if(D==H){
this.N$ElM(-1);
return!0;
}
if("Enter"==D||"Return"==D||"Space"==D){
if(0==this.N$Pit){
this.N$RfM&&this.N$RfM.N$cOh();
return!0;
}
(C=this.N$CPh())&&C.N$RoM(3007,null);
}
}
return!1;
};
C.N$ElM=function(A){
var C=void 0,D=!1;
if(2==this.N$Ogt)C=[-2,-1,-100,0,1,2];else if(4==this.N$Ogt)C=[-2,-1,-100,1,2];else if(1==this.N$Ogt){
C=[-100,-1,0,1];
D=!0;
}else{
if(3!=this.N$Ogt)return;
C=[-1,-100,1];
}
var E=this.N$slM&&this.N$slM.N$CBh(),F=$.indexOf(C,E),G=F+A;
D&&(G=B._g.N$e(G,C.length));
var H=C[G];
if(void 0===H)return;
this.N$RoM(3015,{
"accidental-type":H
});
};
C.N$wlM=function($){
this.N$RoM(3015,{
delta:$
});
};
C.N$SlM=function(){
var A,C,D,E=this,F=this.N$slM&&this.N$slM.N$NBh(),G=this.N$Pit,H=(this.N$Ogt,1==G),I=2==G,J=this.N$mlM;
if(I)if(B._g.N$hNh()){
$.each(this.N$slM&&this.N$slM.N$NBh(),function($){
$&&$.N$Sct(!0);
});
E.N$vlM&&E.N$vlM.N$Sct(!0);
E.N$alM&&E.N$alM.N$Sct(!0);
E.N$RfM&&E.N$RfM.N$Sct(!0);
(A=E.N$eLh())&&A.N$bCh(E.N$qfM);
}else E.N$RfM&&E.N$RfM.N$Plt("Next Question");else{
1==E.N$Ogt?$.each(F,function($){
$&&$.N$Sct($==E.N$ulM||$==E.N$olM);
}):3==E.N$Ogt?$.each(F,function($){
$&&$.N$Sct($==E.N$ulM||$==E.N$olM||$==E.N$hlM);
}):2==E.N$Ogt?$.each(F,function($){
$&&$.N$Sct(!1);
}):4==E.N$Ogt?$.each(F,function($){
$&&$.N$Sct($==E.N$hlM);
}):$.each(F,function($){
$&&$.N$Sct(!0);
});
if(J){
(C=E.N$eLh())&&C.N$bCh(E.N$llM);
$.each(F,function($){
$&&$.N$nBh(!1);
$&&$.N$bBh(!0);
});
}else{
E.N$llM&&E.N$llM.N$Vkh();
$.each(F,function($){
$&&$.N$bBh(!1);
});
}
E.N$vlM&&E.N$vlM.N$Sct(!1);
E.N$alM&&E.N$alM.N$Sct(!1);
E.N$RfM&&E.N$RfM.N$Sct(!1);
E.N$RfM&&E.N$RfM.N$Plt("Submit Answer");
E.N$qfM&&E.N$qfM.N$Vkh();
}
$.each(F,function($){
$&&$.N$F2(!J&&!H&&!I);
});
E.N$vlM&&E.N$vlM.N$F2(!H&&!I);
E.N$alM&&E.N$alM.N$F2(!H&&!I);
(D=E.N$eLh())&&D.N$GBh();
};
C.N$glM=function($){
this.N$wlM($&&$.N$Wn());
};
C.N$ylM=function(){
this.N$RoM(3015,{
"accidental-type":this.N$slM&&this.N$slM.N$CBh()
});
};
C.N$WfM=function(){
0==this.N$Pit?this.N$RoM(3008,{}):this.N$foM(3005);
};
C.N$SuM=function($){
this.N$Pit=$["status"];
this.N$SlM();
};
C.N$pfM=function(){
this.N$RfM&&this.N$RfM.N$sot();
};
C.N$xlM=function($){
var A=$["accidental-type"],B=$["accidental-layout"],C=$["immutable-label"];
if(C){
this.N$clM&&this.N$clM.N$uFh(C);
this.N$mlM=!0;
}else this.N$mlM=!1;
this.N$Ogt=B;
this.N$slM&&this.N$slM.N$jBh(A);
this.N$SlM();
};
C.N$OuM=function($){
var A=$["duration"],C=$["correct"],D=$["intent"];
C?1==D?this.N$RfM&&this.N$RfM.N$mfM(B._c.N$afM.N$dfM()):this.N$RfM&&this.N$RfM.N$yfM():1==D||0==D?void 0!==A?this.N$RfM&&this.N$RfM.N$gfM(A):this.N$RfM&&this.N$RfM.N$gfM(B._c.N$afM.N$dfM()):this.N$RfM&&this.N$RfM.N$bfM();
};
C.N$omF=function($,A){
2020==$?this.N$xlM(A):2001==$?this.N$SuM(A):2015==$?this.N$pfM():2014==$?this.N$OuM(A):D.N$_super.prototype.N$omF.call(this,$,A);
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$doM","N$GuM",function($,A){
function C(){
B._c.N$GuM.call(this);
this.N$Jjh=this.N$PfM=this.N$NmF=null;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$AmF=function(){
return this.N$NmF;
};
A.N$jfM=function(){
if(!this.N$PfM)return;
var $=this.N$MoM(1009,this.N$PfM),A=B._c.N$Btt.N$Itt($);
this.N$NmF&&this.N$NmF.N$HIy(A);
};
A.N$EuM=function($,A){
this.N$NmF&&this.N$NmF.N$OIy(2,A,$);
};
A.N$rgF=function(){
this.N$jfM();
};
A.N$OuM=function($){
var A=$["duration"],B=$["correct"],C=$["intent"],D=$["sequence-id"],E=B?2:1;
1==C&&A>0?D||this.N$NmF&&this.N$NmF.N$AIy(E,A):this.N$NmF&&this.N$NmF.N$u9T()&&this.N$NmF&&this.N$NmF.N$AIy(E,.5);
};
A.N$omF=function($,A){
2010==$?this.N$rgF(A):2014==$?this.N$OuM(A):C.N$_super.prototype.N$omF.call(this,$,A);
};
A.N$DoM=function($){
var A=B._g.N$w($["content-frame"]);
this.N$Jjh&&this.N$Jjh.N$sLh(A);
var C=this.N$Jjh&&this.N$Jjh.N$S4();
C.borderRadius=$["content-corner-radius"]+"px";
var D=$["content-inset-width"],E=B._g.N$E(A,D,0);
this.N$PfM={
width:E.width,
height:E.height,
"helper-width":$["content-helper-width"]
};
this.N$NmF&&this.N$NmF.N$sLh(E);
this.N$jfM();
};
A.N$aIh=function(){
var $;
C.N$_super.prototype.N$aIh.call(this);
this.N$Jjh=B._c.N$RCh.N$JCh("_x8l");
this.N$NmF=($=new B._c.N$HRy())&&$.init();
this.N$NmF&&this.N$NmF.N$nCh(this);
this.N$Jjh&&this.N$Jjh.N$bCh(this.N$NmF);
};
A.N$eLh=function(){
return this.N$Jjh;
};
A.N$CRy=function($,A){
this.N$RoM(3016,{
active:!0,
position:A
});
};
A.N$kRy=function($,A){
this.N$RoM(3016,{
active:!0,
position:A
});
};
A.N$LRy=function(){
this.N$RoM(3016,{
active:!1
});
};
return C;
});
}();
function D($,A,B){
A in $?Object.defineProperty($,A,{
value:B,
enumerable:!0,
configurable:!0,
writable:!0
}):$[A]=B;
return $;
}
!function(){
"use strict";
B._registerClass("N$afM","N$QCh",function($,A){
function D(){
B._c.N$QCh.call(this);
this.N$TlM=this.N$rn=this.N$Ypt=null;
this.N$XDh=this.N$naM=this.N$wAh=this.N$NlM=this.N$ClM=this.N$klM=0;
this.N$LlM=!1;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$Ylt=function($){
this.N$rn=$;
};
A.N$Wn=function(){
return this.N$rn;
};
A.N$AlM=function(){
return this.N$LlM;
};
A.N$Xat=function(){
return this.N$Ypt;
};
A.N$OlM=function($){
this.N$ClM=$;
};
A.N$MlM=function(){
return this.N$ClM;
};
A.N$SAh=function(){
return this.N$wAh;
};
A.N$blM=function($){
this.N$klM=$;
};
A.N$DlM=function(){
return this.N$klM;
};
A.N$ZaM=function(){
return this.N$NlM;
};
$.N$dfM=function(){
return.5;
};
$.N$WCh=function(){
return"_k8l";
};
A.init=function(){
var $,A=this;
if(A=D.N$_super.prototype.init.call(this)){
A.N$TlM=($=new B._c.N$PlM())&&$.init();
A.N$TlM&&A.N$TlM.N$HlM(A.N$naM);
A.N$sot();
}
return A;
};
A.N$XCh=function(){
var $=D.N$_super.prototype.N$XCh.call(this);
this.N$naM=1;
$.setAttribute("role","button");
return $;
};
A.N$VCh=function(){
D.N$_super.prototype.N$VCh.call(this);
this.N$bCh(this.N$TlM);
};
A.N$tOh=function(){
D.N$_super.prototype.N$tOh.call(this);
(1==this.N$naM||2==this.N$naM)&&(this.N$sOh()?this.N$BlM(0,2,0,0):this.N$q2()&&this.N$BlM(0,1,0,0));
this.N$TlM&&this.N$TlM.N$F2(this.N$q2());
};
A.N$BlM=function($,A,D,E){
var F;
if(!$&&A==this.N$naM)return;
$||($=this.N$naM);
this.N$naM=A;
this.N$TlM&&this.N$TlM.N$HlM(A);
if(D){
var G=(F=new B._c.N$PlM())&&F.init();
G&&G.N$HlM($);
this.N$wAh&&G&&G.N$yBh(this.N$wAh);
this.N$Ypt&&G&&G.N$ffM(this.N$Ypt,this.N$ClM);
this.N$bCh(G);
var H=G&&G.N$NCh();
C.stop(this.N$XDh);
this.N$XDh=C.animate(1e3*D,1e3*E,function($){
$=C.easeOut($);
C.transform(H,0,0,1,1,1-$);
},function(){
G&&G.N$Vkh();
});
}
};
A.N$xuM=function(){
C.stop(this.N$XDh);
this.N$XDh=0;
};
A.N$wfM=function($){
var A=$/3;
this.N$BlM(0,1,A,2*A);
};
A.N$sot=function(){
this.N$F2(!0);
this.N$NlM=0;
this.N$BlM(0,1,0,0);
};
A.N$yfM=function(){
this.N$BlM(8,5,.5,0);
};
A.N$bfM=function(){
this.N$NlM=1;
this.N$BlM(7,4,1/3,0);
this.N$F2(!1);
};
A.N$mfM=function($){
this.N$BlM(8,1,$,0);
};
A.N$gfM=function($){
this.N$BlM(7,1,$,0);
};
A.N$vfM=function($){
this.N$BlM(9,this.N$naM,$,0);
};
A.N$lfM=function(){
this.N$F2(!1);
this.N$BlM(0,3,0,0);
};
A.N$ffM=function($,A){
if(this.N$Ypt!=$||this.N$ClM!=A){
this.N$Ypt=$;
this.N$ClM=A;
this.N$TlM&&this.N$TlM.N$ffM($,A);
}
};
A.N$Plt=function($){
this.N$ffM($,0);
};
A.N$yBh=function($){
this.N$wAh=$;
this.N$TlM&&this.N$TlM.N$yBh($);
};
A.N$efM=function($){
if(this.N$NlM!=$){
this.N$NlM=$;
if(1&this.N$NlM){
this.N$BlM(0,4,0,0);
this.N$F2(!1);
}
}
};
A.N$ofM=function(){
return 1==this.N$naM;
};
A.N$nfM=function($){
if(this.N$LlM!=$){
this.N$LlM=$;
this.N$TlM&&this.N$TlM.N$nfM($);
}
};
return D;
});
B._registerClass("N$PlM","N$RCh",function($,A){
function E(){
B._c.N$RCh.call(this);
this.N$JHh=this.N$jlM=this.N$Ypt=null;
this.N$wAh=this.N$VLh=this.N$ClM=0;
this.N$n9=this.N$LlM=!1;
this.constructor=E;
this.N$_id=++B._id;
}
A.N$Xat=function(){
return this.N$Ypt;
};
A.N$OlM=function($){
this.N$ClM=$;
};
A.N$MlM=function(){
return this.N$ClM;
};
A.N$SAh=function(){
return this.N$wAh;
};
A.N$QLh=function(){
return this.N$VLh;
};
A.N$q2=function(){
return this.N$n9;
};
A.N$AlM=function(){
return this.N$LlM;
};
$.N$WCh=function(){
return"_j8l";
};
A.N$XCh=function(){
var $=E.N$_super.prototype.N$XCh.call(this),A=C.create("div",{
"class":"_q8l"
});
$.appendChild(A);
return A;
};
A.N$ffM=function($,A){
if(this.N$Ypt!=$||this.N$ClM!=A){
this.N$Ypt=$;
this.N$ClM=A;
var D=this.N$KOh();
if(0==this.N$ClM)D.textContent=this.N$Ypt;else if(1==this.N$ClM)D.innerHTML=this.N$Ypt;else if(2==this.N$ClM){
C.empty(D);
D.appendChild(B._g.N$vNh(this.N$Ypt));
}
}
};
A.N$Plt=function($){
this.N$ffM($,0);
};
A.N$yBh=function($){
var A;
if((this.N$JHh&&this.N$JHh.N$SAh())!=$){
this.N$JHh&&this.N$JHh.N$Vkh();
this.N$JHh=null;
if($){
this.N$JHh=(A=new B._c.N$bAh())&&A.N$CAh($);
this.N$JHh&&this.N$JHh.N$F2(this.N$q2());
this.N$JHh&&this.N$JHh.N$hCh("_z8l");
this.N$bCh(this.N$JHh);
}
}
};
A.N$HlM=function($){
if(this.N$VLh!=$){
var A,B=(A={},D(A,1,"_e9l"),D(A,2,"_t9l"),D(A,3,"_n9l"),D(A,4,"_r9l"),D(A,5,"_i9l"),
D(A,6,"_s9l"),D(A,7,"_o9l"),D(A,8,"_u9l"),D(A,9,"_a9l"),A)[$];
this.N$jlM&&this.N$qFh(this.N$jlM);
B&&this.N$hCh(B);
this.N$jlM=B;
this.N$VLh=$;
}
};
A.N$F2=function($){
if(this.N$n9!=$){
this.N$n9=$;
this.N$JHh&&this.N$JHh.N$F2($);
}
};
A.N$nfM=function($){
if(this.N$LlM!=$){
this.N$LlM=$;
this.N$yHh("_f9l");
}
};
return E;
});
}();
!function(){
"use strict";
B._registerClass("N$LtM","N$RCh",function($,A){
function D(){
B._c.N$RCh.call(this);
this.N$FlM=this.N$IlM=null;
this.constructor=D;
this.N$_id=++B._id;
}
$.N$WCh=function(){
return"_l9l";
};
A.N$XCh=function(){
var $=D.N$_super.prototype.N$XCh.call(this),A=C.create("div",{
"class":"_c9l"
});
$.appendChild(A);
return A;
};
A.N$VCh=function(){
D.N$_super.prototype.N$VCh.call(this);
this.N$IlM=B._c.N$RCh.N$JCh("_h9l");
this.N$IlM&&this.N$IlM.N$uFh("Challenge Mode");
this.N$bCh(this.N$IlM);
};
A.N$qlM=function($,A,C){
var D;
this.N$gUh();
for(var E=0,F=[],G=0;G<$.length;G++){
var H=$.charAt(G),I=A[G%A.length],J=(D=new B._c.N$UlM())&&D.N$RlM(H,I);
this.N$bCh(J);
F.push(J);
}
this.N$FlM=F;
for(var K,L=function($,A,B,D){
D=$[A];
setTimeout(function(){
C(D);
},E);
E+=40;
K=D;
},M=this.N$FlM,N=0,O=M?M.length:0;O>N;N++)L(M,N,O,K);
};
A.N$ItM=function(){
this.N$gUh();
};
A.N$sot=function(){
this.N$gUh();
this.N$bCh(this.N$IlM);
this.N$okh("_p9l",!1);
};
A.N$qtM=function(){
this.N$sot();
this.N$okh("_p9l",!0);
this.N$qlM("New High Score!",["#ff0000","#ff8000","#ff00ff","#0000ff","#00cc00"],function($){
$&&$.N$qtM();
});
};
A.N$RtM=function(){
this.N$sot();
this.N$qlM("Challenge Over!",["#c00000"],function($){
$&&$.N$RtM();
});
};
return D;
});
B._registerClass("N$UlM","N$RCh",function($,A){
function D(){
B._c.N$RCh.call(this);
this.N$zlM=this.N$IBh=this.N$WlM=this.N$Qt=null;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$Zt=function(){
return this.N$Qt;
};
A.N$zBh=function(){
return this.N$IBh;
};
$.N$ROh=function(){
return"span";
};
$.N$WCh=function(){
return"_d9l";
};
A.N$RlM=function($,A){
var B=this;
if(B=D.N$_super.prototype.init.call(this)){
B.N$Qt=$;
B.N$IBh=A;
}
return B;
};
A.N$XCh=function(){
var $=D.N$_super.prototype.N$XCh.call(this),A=C.create("span",{
"class":"_v9l"
},this.N$Qt),B=C.create("span",{
"class":"_m9l"
},this.N$Qt);
$.innerHTML=this.N$Qt;
$.appendChild(A);
$.appendChild(B);
B.style.color=this.N$IBh;
A.style.opacity=String(0);
C.transform(B,0,0,1,1,0);
this.N$zlM=A;
this.N$WlM=B;
return $;
};
A.N$qtM=function(){
var $=(this.N$NCh(),this.N$zlM),A=this.N$WlM;
C.animate(300,function($){
var B=void 0,D=void 0,E=void 0;
if(.5>$){
B=C.easeOut(2*$);
E=C.lerp(.001,1.1,B);
D=C.lerp(64,-8,B);
}else{
B=C.easeInOut(2*($-.5));
E=C.lerp(1.1,1,B);
D=C.lerp(-8,0,B);
}
C.transform(A,0,D,E,E,$);
},function(){
C.animate(500,function(B){
C.transform($,0,0,1,1,B);
C.transform(A,0,0,1,1,1-B);
});
});
};
A.N$RtM=function(){
var $=(this.N$NCh(),this.N$zlM),A=this.N$WlM;
C.animate(500,function($){
C.transform(A,0,0,1,1,$);
},function(){
C.animate(500,function(B){
$.style.opacity=String(B);
C.transform(A,0,0,1,1,1-B);
});
});
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$XlM","N$RCh",function($,A){
function C(){
B._c.N$RCh.call(this);
this.N$xHh=null;
this.N$Tat=this.N$VlM=0;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$jst=function(){
return this.N$Tat;
};
A.N$JlM=function(){
return this.N$VlM;
};
A.N$VCh=function(){
var $=this;
C.N$_super.prototype.N$VCh.call(this);
this.N$xHh=B._c.N$LHh.N$kHh(function(A){
$.N$AHh(A);
});
$.N$OHh($.N$xHh);
};
A.N$AHh=function($){
var A=this.N$PHh(),C=A.height/2,D=B._g.N$hNh()?15790320:16777215;
if(!this.N$VlM||!this.N$Tat){
$&&$.N$HHh();
$&&$.N$BHh(A,C);
$&&$.N$jHh(B._g.N$ONh(D,.33));
return;
}
var E=B._g.N$y(A);
E.width=Math.max(Math.ceil(A.width/this.N$VlM),A.height);
E.x=Math.floor((this.N$Tat-1)/this.N$VlM*A.width);
var F=B._g.N$y(A),G=B._g.N$y(F),H=B._g.N$y(F);
G.width=Math.ceil(B._g.N$C(E))-G.x;
H.x=Math.floor(B._g.N$C(E));
H.width=B._g.N$L(F)-B._g.N$T(H);
$&&$.N$HHh();
$&&$.N$Rqh(G,5,C);
$&&$.N$jHh(B._g.N$ONh(D,.66));
$&&$.N$HHh();
$&&$.N$Rqh(H,10,C);
$&&$.N$jHh(B._g.N$ONh(D,.33));
$&&$.N$HHh();
$&&$.N$BHh(E,C);
$&&$.N$Zqh(B._g.N$ONh(0,1),B._g.N$s(0,0),1);
$&&$.N$jHh(B._g.N$ONh(D,1));
};
A.N$KlM=function($,A){
if(this.N$Tat!=$||this.N$VlM!=A){
this.N$Tat=$;
this.N$VlM=A;
this.N$GBh();
this.N$xHh&&this.N$xHh.N$DHh();
}
};
return C;
});
}();
!function(){
"use strict";
B._registerClass("N$AtM","N$QCh",function($,A){
function C(){
B._c.N$QCh.call(this);
this.N$ksM=this.N$QlM=this.N$GlM=this.N$YlM=this.N$ZlM=this.N$ecM=this.N$Ypt=this.N$tcM=null;
this.N$ncM=0;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$rcM=function($){
this.N$ksM=$;
};
A.N$icM=function(){
return this.N$ksM;
};
A.N$scM=function(){
return this.N$YlM;
};
A.N$Xat=function(){
return this.N$Ypt;
};
$.N$ROh=function(){
return"a";
};
$.N$WCh=function(){
return"_g9l";
};
A.N$XCh=function(){
var $=C.N$_super.prototype.N$XCh.call(this);
$.addEventListener("click",function($){
return $.preventDefault();
});
$.addEventListener("contextmenu",function($){
return $.stopPropagation();
});
return $;
};
A.N$VCh=function(){
C.N$_super.prototype.N$VCh.call(this);
var $=B._c.N$RCh.N$JCh("_y9l"),A=B._c.N$RCh.N$JCh("_b9l"),D=B._c.N$RCh.N$JCh("_w9l"),E=B._c.N$RCh.N$JCh("_x9l"),F=B._c.N$RCh.N$JCh("_k9l");
this.N$tcM=$;
this.N$ZlM=A;
this.N$QlM=D;
this.N$GlM=E;
this.N$ecM=F;
this.N$ECh([this.N$tcM,D,E,F]);
};
A.N$KBh=function(){
C.N$_super.prototype.N$KBh.call(this);
var $=this.N$PHh(),A=B._g.N$g(),D=B._g.N$g(),E=B._g.N$g(),F=B._g.N$g(),G=B._g.N$g();
B._g.N$G([A,D],B._g.N$E($,this.N$ncM,$.height/8),null);
B._g.N$Q([E,F,G],D,null);
this.N$tcM&&this.N$tcM.N$sLh(A);
this.N$QlM&&this.N$QlM.N$sLh(E);
this.N$GlM&&this.N$GlM.N$sLh(F);
this.N$ecM&&this.N$ecM.N$sLh(G);
};
A.N$HtM=function($,A){
if(this.N$Ypt!=$){
this.N$Ypt=$;
this.N$tcM&&this.N$tcM.N$uFh($);
}
if(this.N$YlM!=A){
this.N$YlM=A;
var B=this.N$YlM&&this.N$YlM.N$IuM(),C=this.N$YlM&&this.N$YlM.N$quM(),D=this.N$YlM&&this.N$YlM.N$RuM(),E=32;
(B.length>=8||D.length>=6)&&(E=0);
this.N$ncM=E;
this.N$QlM&&this.N$QlM.N$uFh(B);
this.N$GlM&&this.N$GlM.N$uFh(C);
this.N$ecM&&this.N$ecM.N$uFh(D);
this.N$YlM&&this.N$YlM.N$rft()?this.N$uOh(this.N$YlM&&this.N$YlM.N$ift(),"href"):this.N$EOh("href");
this.N$GBh();
}
};
return C;
});
}();
!function(){
"use strict";
B._registerClass("N$OtM","N$RCh",function(A,D){
function E(){
B._c.N$RCh.call(this);
this.N$QlM=this.N$GlM=this.N$YlM=this.N$ecM=this.N$Ypt=null;
this.constructor=E;
this.N$_id=++B._id;
}
D.N$scM=function(){
return this.N$YlM;
};
D.N$Xat=function(){
return this.N$Ypt;
};
A.N$WCh=function(){
return"_j9l";
};
D.N$VCh=function(){
E.N$_super.prototype.N$VCh.call(this);
var $=B._c.N$RCh.N$JCh("_q9l"),A=B._c.N$RCh.N$JCh("_z9l"),C=B._c.N$RCh.N$JCh("_e0m"),D=B._c.N$RCh.N$JCh("_t0m");
this.N$QlM=A;
this.N$GlM=C;
this.N$ecM=D;
$&&$.N$ECh([A,C,D]);
this.N$bCh($);
};
D.N$ItM=function(){
$.each([this.N$QlM,this.N$GlM,this.N$ecM],function($){
C.transform($&&$.N$NCh(),0,0,1,1,0);
});
};
D.N$qtM=function(){
var $=this;
function A($){
var A=$&&$.N$NCh();
C.animate(1e3,function($){
var B=void 0,D=void 0,E=void 0;
if(.5>$){
B=C.easeOut(2*$);
E=C.lerp(.001,1.1,B);
D=C.lerp(32,0,B);
}else{
B=C.easeInOut(2*($-.5));
E=C.lerp(1.1,1,B);
D=C.lerp(0,0,B);
}
C.transform(A,0,0,E,E,$);
});
}
setTimeout(function(){
A($.N$QlM);
},250);
setTimeout(function(){
A($.N$GlM);
},500);
setTimeout(function(){
A($.N$ecM);
},750);
};
D.N$BtM=function($){
if(this.N$YlM!=$){
this.N$YlM=$;
this.N$QlM&&this.N$QlM.N$uFh(this.N$YlM&&this.N$YlM.N$IuM());
this.N$GlM&&this.N$GlM.N$uFh(this.N$YlM&&this.N$YlM.N$quM());
this.N$ecM&&this.N$ecM.N$uFh(this.N$YlM&&this.N$YlM.N$RuM());
}
};
return E;
});
}();
!function(){
"use strict";
B._registerClass("N$suM","N$UDh",function(A,C){
function D(){
B._c.N$UDh.call(this);
this.N$ocM=this.N$Jjh=this.N$INh=this.N$ucM=null;
this.constructor=D;
this.N$_id=++B._id;
}
C.N$nCh=function($){
this.N$INh=$;
};
C.N$rCh=function(){
return this.N$INh;
};
A.N$WCh=function(){
return"_n0m";
};
C.N$auM=function(){
var A,C=this;
if(this.N$Jjh)return;
this.N$Jjh=B._c.N$RCh.N$JCh("_r0m");
var D={},E=[[2],[3,4,5],[8,9],[6],[7],[0]];
this.N$ucM&&this.N$Jjh&&this.N$Jjh.N$bCh(this.N$ucM);
$.each(this.N$ocM,function($){
var A=$&&$.N$acM();
D[A]=$;
});
$.each(E,function(A){
var B=!1;
$.each(A,function($){
var A=D[$];
if(!A)return;
A&&A.N$fcM(B);
B=!0;
C.N$Jjh&&C.N$Jjh.N$bCh(A);
});
});
(A=C.N$eLh())&&A.N$bCh(C.N$Jjh);
};
C.N$uuM=function($){
var A;
this.N$ucM=(A=new B._c.N$ccM())&&A.N$lcM($,this);
};
C.N$hcM=function($){
this.N$INh&&this.N$INh.N$fuM(this,$);
};
C.N$ouM=function($,A){
var C,D=(C=new B._c.N$dcM())&&C.N$pcM($,A,this);
this.N$ocM||(this.N$ocM=[]);
this.N$ocM.push(D);
};
C.N$V7T=function(){
var $=(this.N$Jjh&&this.N$Jjh.N$NCh()).getBoundingClientRect();
return $.height;
};
return D;
});
B._registerClass("N$dcM","N$QCh",function($,A){
function D(){
B._c.N$QCh.call(this);
this.N$Gjh=this.N$Ypt=this.N$wbF=null;
this.N$vcM=0;
this.N$mcM=!1;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$acM=function(){
return this.N$vcM;
};
A.N$rFh=function(){
return this.N$Gjh;
};
A.N$Xat=function(){
return this.N$Ypt;
};
A.N$gcM=function(){
return this.N$mcM;
};
$.N$WCh=function(){
return"_i0m";
};
A.N$pcM=function($,A,B){
var C=this;
if(C=D.N$_super.prototype.init.call(this)){
C.N$Gjh=B;
C.N$Ypt=A;
C.N$vcM=$;
C.N$yOh(function(){
C.N$Gjh&&C.N$Gjh.N$hcM(C.N$vcM);
});
}
return C;
};
A.N$XCh=function(){
var $=D.N$_super.prototype.N$XCh.call(this);
$.appendChild(this.N$wbF=C.create("span"));
this.N$wbF.textContent=this.N$Ypt;
return $;
};
A.N$fcM=function($){
if(this.N$mcM!=$){
this.N$mcM=$;
this.N$okh("group-with-previous",this.N$mcM);
}
};
return D;
});
B._registerClass("N$ccM","N$QCh",function($,A){
function D(){
B._c.N$QCh.call(this);
this.N$ycM=this.N$bcM=this.N$wcM=this.N$Gjh=this.N$Ypt=this.N$wbF=null;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$Xat=function(){
return this.N$Ypt;
};
A.N$rFh=function(){
return this.N$Gjh;
};
$.N$WCh=function(){
return"_s0m";
};
A.N$lcM=function($,A){
var B=this;
if(B=D.N$_super.prototype.init.call(this)){
B.N$Ypt=$;
B.N$Gjh=A;
B.N$yOh(function(){
B.N$EcM();
});
}
return B;
};
A.N$XCh=function(){
var $=D.N$_super.prototype.N$XCh.call(this);
C.append($,[this.N$wbF=C.create("span",{
"class":"_o0m"
},[this.N$wcM=C.create("span",{
"class":"_u0m"
}),this.N$bcM=C.create("span",{
"class":"_a0m"
})])]);
this.N$wcM.innerHTML="&nbsp;"+this.N$Ypt;
this.N$bcM.innerHTML="&nbsp;"+this.N$Ypt+"?";
return $;
};
A.N$EcM=function(){
var $=this;
this.N$yOh(null);
this.N$ycM&&this.N$ycM.N$Vkh();
this.N$ycM=B._c.N$QCh.N$JCh("_f0m");
this.N$ycM&&this.N$ycM.N$uFh("Reset");
this.N$ycM&&this.N$ycM.N$yOh(function(){
$.N$Gjh&&$.N$Gjh.N$hcM(1);
});
$.N$bCh($.N$ycM);
var A=$.N$wbF,D=$.N$ycM&&$.N$ycM.N$NCh(),E=($.N$ycM&&$.N$ycM.N$NCh()).getBoundingClientRect(),F=Math.round(E.width/-2),G=E.width;
C.animate(250,function(B){
var E=C.lerp(0,F,C.ease(B));
C.transform(A,E,0);
var H=C.lerp(G,0,C.easeOut(B));
C.transform(D,H,0);
$.N$wcM.style.opacity=String(1-B);
});
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$HoM","N$RCh",function($,A){
function D(){
B._c.N$RCh.call(this);
this.N$otM=this.N$ScM=this.N$xcM=null;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$EtM=function(){
return this.N$otM;
};
$.N$WCh=function(){
return"_l0m";
};
A.N$PoM=function($){
var A=this;
(A=D.N$_super.prototype.init.call(this))&&(A.N$otM=$);
return A;
};
A.N$XCh=function(){
var $=D.N$_super.prototype.N$XCh.call(this),A=C.create("div",{
"class":"_c0m"
});
$.appendChild(A);
return A;
};
A.N$VCh=function(){
this.N$ScM=B._c.N$QCh.N$JCh("_h0m");
this.N$ScM&&this.N$ScM.N$hCh("_p0m");
this.N$ScM&&this.N$ScM.N$OCh(this,"N$TcM");
this.N$ScM&&this.N$ScM.N$uFh("Reveal Answer");
this.N$xcM=B._c.N$QCh.N$JCh("_h0m");
this.N$xcM&&this.N$xcM.N$hCh("_d0m");
this.N$xcM&&this.N$xcM.N$OCh(this,"N$NcM");
this.N$xcM&&this.N$xcM.N$uFh("Skip Question");
this.N$bCh(this.N$ScM);
this.N$bCh(this.N$xcM);
};
A.N$NcM=function(){
this.N$otM&&this.N$otM.N$foM(3005);
};
A.N$TcM=function(){
this.N$otM&&this.N$otM.N$foM(3006);
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$puM","N$RCh",function($,A){
function D(){
B._c.N$RCh.call(this);
this.N$CcM=this.N$asM=null;
this.N$zNh=0;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$SUh=function(){
return this.N$CcM;
};
A.N$huM=function($){
var A=this;
(A=D.N$_super.prototype.init.call(this))&&(A.N$CcM=$);
return A;
};
A.N$duM=function(){
var $;
this.N$asM&&this.N$ZoM();
this.N$asM=($=new B._c.N$Gkh())&&$.init();
this.N$asM&&this.N$asM.N$hCh("_v0m");
var A=B._c.N$RCh.N$JCh("_m0m"),D=B._c.N$RCh.N$JCh("_g0m"),E=B._c.N$RCh.N$JCh("_y0m");
this.N$asM&&this.N$asM.N$bCh(A);
A&&A.N$bCh(D);
A&&A.N$bCh(E);
E&&E.N$uFh(this.N$CcM);
var F=this.N$asM&&this.N$asM.N$NCh();
C.stop(this.N$zNh);
this.N$zNh=C.animate(350,function($){
$=C.ease($);
var A=C.lerp(16,0,$),B=C.lerp(.75,1,$);
C.transform(F,0,A,B,B,$);
});
};
A.N$ZoM=function(){
var $=this.N$asM,A=$&&$.N$NCh();
this.N$asM=null;
C.stop(this.N$zNh);
this.N$zNh=C.animate(250,function($){
$=C.ease($);
var B=C.lerp(1,.85,$),D=C.lerp(1,0,$);
C.transform(A,0,0,B,B,D);
},function(){
$&&$.N$Vkh();
});
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$WoM",null,function($,A){
function D(){
this.N$kcM=this.N$INh=this.N$UyF=this.N$UNh=this.N$LcM=null;
this.N$zNh=this.N$wFh=0;
this.N$AcM=this.N$KNh=!1;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$OcM=function($){
this.N$LcM=$;
};
A.N$McM=function(){
return this.N$LcM;
};
A.N$nCh=function($){
this.N$INh=$;
};
A.N$rCh=function(){
return this.N$INh;
};
A.N$tCh=function(){
return this.N$KNh;
};
A.N$NFh=function(){
return this.N$wFh;
};
A.N$zoM=function($,A,C){
var E,F=this;
if(F=D.N$_super.prototype.init.call(this)){
F.N$INh=$;
F.N$UyF=(E=new B._c.N$DcM())&&E.init();
F.N$LcM=A;
F.N$wFh=C;
F.N$UyF&&F.N$UyF.N$okh("_b0m",0==F.N$wFh);
F.N$UyF&&F.N$UyF.N$okh("_w0m",1==F.N$wFh);
}
return F;
};
A.N$XoM=function($,A){
var C,D=this,E=(C=new B._c.N$PcM())&&C.init();
E&&E.N$uFh($);
E&&E.N$yOh(function(){
D.N$INh&&D.N$INh.N$JoM(D,A);
});
D.N$UyF&&D.N$UyF.N$bCh(E);
};
A.N$VoM=function(){
var $;
if(0==this.N$wFh){
var A=($=new B._c.N$HcM())&&$.init();
this.N$UyF&&this.N$UyF.N$bCh(A);
}
};
A.N$lCh=function(){
var $,A=this;
if(this.N$KNh)return;
this.N$KNh=!0;
function D(){
A.N$pCh(!0);
A.N$INh&&A.N$INh.respondsToSelector_("N$KoM")&&A.N$INh&&A.N$INh.N$KoM(A);
}
A.N$UNh=B._c.N$vCh.N$dCh(A.N$UyF,D);
var E=A.N$UyF&&A.N$UyF.N$S4(),F=A.N$LcM.y,G=A.N$LcM.x;
E.position="absolute";
E.top=F+"px";
E.left=G+"px";
E.opacity="1";
if(0==A.N$wFh){
var H=(A.N$UyF&&A.N$UyF.N$NCh()).getBoundingClientRect();
H.right>window.innerWidth&&(G-=H.right-window.innerWidth);
H.bottom>window.innerHeight&&(F-=H.bottom-window.innerHeight);
A.N$kcM&&A.N$kcM.N$Vkh();
A.N$kcM=null;
}else if(1==A.N$wFh){
var I=(A.N$UyF&&A.N$UyF.N$NCh()).getBoundingClientRect(),J=I.top;
A.N$kcM&&A.N$kcM.N$Vkh();
A.N$kcM=B._c.N$RCh.N$JCh("_x0m");
if(F-(I.height+16)>0){
F-=16;
J=F;
F-=I.height;
A.N$kcM&&A.N$kcM.N$hCh("_k0m");
A.N$AcM=!0;
}else F+=16;
G-=Math.round(I.width/2);
0>G?G=0:G+I.width>window.innerWidth&&(G-=G+I.width-window.innerWidth);
var K=A.N$LcM.x-17,L=G+10,M=G+I.width-44;
L>K?K=L:K>M&&(K=M);
($=A.N$UyF&&A.N$UyF.N$Xkh())&&$.N$bCh(A.N$kcM);
var N=A.N$kcM&&A.N$kcM.N$S4();
N.left=K+"px";
N.top=J+"px";
}
E.top=F+"px";
E.left=G+"px";
(A.N$UNh&&A.N$UNh.N$TCh()).opacity="0";
C.stop(A.N$zNh);
A.N$zNh=0;
};
A.N$pCh=function($){
if(!this.N$KNh)return;
this.N$KNh=!1;
var A=this.N$UNh,B=this.N$UyF&&this.N$UyF.N$NCh(),D=this.N$kcM&&this.N$kcM.N$NCh(),E=this.N$AcM;
this.N$UNh=null;
C.stop(this.N$zNh);
if($){
{
A&&A.N$TCh();
}
this.N$zNh=C.animate(250,function($){
$=C.ease($);
C.transform(B,0,0,1,1,C.lerp(1,0,$));
C.transform(D,0,0,1,E?-1:1,C.lerp(1,0,$));
},function(){
A&&A.N$HCh();
});
}else A&&A.N$HCh();
};
return D;
});
B._registerClass("N$DcM","N$RCh",function($,A){
function D(){
B._c.N$RCh.call(this);
this.N$bHh=null;
this.constructor=D;
this.N$_id=++B._id;
}
$.N$WCh=function(){
return"_j0m";
};
A.N$XCh=function(){
var $=D.N$_super.prototype.N$XCh.call(this);
$.setAttribute("role","menu");
$.addEventListener("click",function($){
$.stopPropagation();
});
$.addEventListener("contextmenu",function($){
$.stopPropagation();
$.preventDefault();
});
return $;
};
A.N$BcM=function(){
C.remove(this.N$bHh);
this.N$bHh=null;
};
A.N$jcM=function($){
if(!this.N$bHh){
this.N$bHh=C.create("div",{
"class":"_q0m"
});
this.N$NCh().appendChild(this.N$bHh);
}
this.N$bHh.style.left=$.x+"px";
this.N$bHh.style.top=$.y+"px";
this.N$bHh.classList.toggle("_z0m",$.y>0);
};
return D;
});
B._registerClass("N$PcM","N$QCh",function($,A){
function C(){
B._c.N$QCh.call(this);
this.N$Ypt=null;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$Xat=function(){
return this.N$Ypt;
};
$.N$WCh=function(){
return"_e1m";
};
A.N$XCh=function(){
var $=C.N$_super.prototype.N$XCh.call(this);
$.setAttribute("role","menuitem");
return $;
};
return C;
});
B._registerClass("N$HcM","N$RCh",function($,A){
function D(){
B._c.N$RCh.call(this);
this.constructor=D;
this.N$_id=++B._id;
}
$.N$WCh=function(){
return"_t1m";
};
A.N$XCh=function(){
var $=D.N$_super.prototype.N$XCh.call(this);
C.append($,C.create("div",{
"class":"_n1m"
}));
return $;
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$ToM","N$RCh",function($,A){
function C(){
B._c.N$RCh.call(this);
this.N$FcM=this.N$QlM=this.N$GlM=this.N$ecM=this.N$IcM=null;
this.N$qcM=this.N$RcM=0;
this.N$VuM=!1;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$CoM=function(){
return this.N$VuM;
};
A.init=function(){
var $,A,D,E=this;
if(E=C.N$_super.prototype.init.call(this)){
E.N$GlM=($=new B._c.N$UcM())&&$.init();
E.N$QlM=(A=new B._c.N$UcM())&&A.init();
E.N$ecM=(D=new B._c.N$UcM())&&D.init();
}
return E;
};
$.N$WCh=function(){
return"_r1m";
};
A.N$KBh=function(){
var $=this;
C.N$_super.prototype.N$KBh.call(this);
var A=this.N$PHh(),D=B._g.N$y(A),E=B._g.N$g(),F=B._g.N$y(A);
if(this.N$qcM){
D=B._g.N$m(0,0,Math.floor(A.width/2-this.N$RcM),A.height);
E=D;
B._g.N$vt(E,A);
if(this.N$VuM){
F=E;
B._g.N$z(E,A);
}
}else if(this.N$VuM)B._g.N$Q([D,E,F],A,[0,0]);else{
var G=Math.floor(A.width/6);
B._g.N$Q([D,E],B._g.N$E(A,G,0),[8]);
}
var H=16,I=(this.N$QlM&&this.N$QlM.N$KOh(),this.N$GlM&&this.N$GlM.N$KOh(),this.N$ecM&&this.N$ecM.N$KOh(),
0),J=0,K=0;
function L(){
$.N$S4().fontSize=H+"px";
I=$.N$QlM&&$.N$QlM.N$zcM();
J=$.N$GlM&&$.N$GlM.N$zcM();
K=$.N$ecM&&$.N$ecM.N$zcM();
var A=I<=E.width&&J<=D.width&&K<=F.width;
return A;
}
if(!L()&&$.N$VuM&&!$.N$qcM){
E.width=B._g.N$r(I,.5)+8;
B._g.N$z(E,A);
D.width=B._g.N$T(E);
F.x=B._g.N$L(E);
F.width=B._g.N$L(A)-F.x;
}
for(;H>=10&&!L();)H--;
$.N$QlM&&$.N$QlM.N$sLh(D);
$.N$GlM&&$.N$GlM.N$sLh(E);
$.N$ecM&&$.N$ecM.N$sLh($.N$VuM?F:B._g.N$g());
if($.N$FcM){
var M=B._g.N$y(A);
M.height=3;
B._g.N$gt(M,A);
B._g.N$ht(M,3);
$.N$FcM&&$.N$FcM.N$sLh(M);
}
};
A.N$VCh=function(){
C.N$_super.prototype.N$VCh.call(this);
this.N$GlM&&this.N$GlM.N$hCh("_i1m");
this.N$QlM&&this.N$QlM.N$hCh("_s1m");
this.N$ecM&&this.N$ecM.N$hCh("_o1m");
this.N$bCh(this.N$QlM);
this.N$bCh(this.N$GlM);
};
A.N$DuM=function($,A,C,D){
var E,F=$+"/"+A,G=(A>0?Math.round($/A*100):0)+"%",H=$+" of "+A+" correct";
this.N$GlM&&this.N$GlM.N$Urt(G);
this.N$QlM&&this.N$QlM.N$Urt(F);
this.N$QlM&&this.N$QlM.N$zrt(H);
if(D&&!this.N$FcM){
this.N$FcM=(E=new B._c.N$XlM())&&E.init();
this.N$bCh(this.N$FcM);
}else if(!D&&this.N$FcM){
this.N$FcM&&this.N$FcM.N$Vkh();
this.N$FcM=null;
}
this.N$FcM&&this.N$FcM.N$KlM(C,D);
};
A.N$WcM=function($,A){
if(this.N$qcM!=$||this.N$RcM!=A){
this.N$qcM=$;
this.N$RcM=A;
this.N$GBh();
}
};
A.N$HuM=function($){
if(this.N$IcM!=$){
this.N$IcM=$;
this.N$ecM&&this.N$ecM.N$Urt($);
this.N$GBh();
}
};
A.N$NoM=function($){
if(this.N$VuM!=$){
this.N$VuM=$;
this.N$VuM?this.N$bCh(this.N$ecM):this.N$ecM&&this.N$ecM.N$Vkh();
this.N$GBh();
}
};
return C;
});
B._registerClass("N$UcM","N$RCh",function($,A){
function D(){
B._c.N$RCh.call(this);
this.N$Pet=null;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$zet=function(){
return this.N$Pet;
};
$.N$WCh=function(){
return"_u1m";
};
A.N$XCh=function(){
var $=D.N$_super.prototype.N$XCh.call(this),A=C.create("span");
$.appendChild(A);
this.N$Pet&&(A.textContent=this.N$Pet);
return A;
};
A.N$Urt=function($){
if(this.N$Pet!=$){
this.N$Pet=$;
this.N$KOh().textContent=$;
}
};
A.N$zcM=function(){
var $=this.N$KOh();
return $?$.getBoundingClientRect().width:0;
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$XcM","N$RCh",function($,A){
function D(){
B._c.N$RCh.call(this);
this.N$Lrt=null;
this.N$l4=0;
this.constructor=D;
this.N$_id=++B._id;
}
$.N$WCh=function(){
return"_a1m";
};
A.N$VcM=function($,A){
var B=this;
if(B=D.N$_super.prototype.init.call(this)){
B.N$l4=$;
B.N$Lrt=A;
}
return B;
};
A.N$XCh=function(){
var $=D.N$_super.prototype.N$XCh.call(this),A=-2==this.N$l4,B=this.N$Lrt&&this.N$Lrt.N$rr(),E=this.N$Lrt&&this.N$Lrt.N$nr(),F=Math.min(Math.min(B,E),A?-12:-6),G=Math.max(Math.max(B,E),A?12:6);
$.style.height=H(F)+"px";
function H($){
return Math.round(2*(G-$));
}
function I(A,B,D,E,F){
var G=H(B),I=C.create("div",{
"class":A
});
I.style.top=G+F+"px";
I.style.left=D+"px";
I.style.width=E+"px";
$.appendChild(I);
return I;
}
function J($,A,B){
return I("_f1m",$,A,B,0);
}
!function(){
var $=45;
if(A){
J(10,0,$);
J(8,0,$);
J(6,0,$);
J(4,0,$);
J(2,0,$);
J(-2,0,$);
J(-4,0,$);
J(-6,0,$);
J(-8,0,$);
J(-10,0,$);
}else{
J(4,0,$);
J(2,0,$);
J(0,0,$);
J(-2,0,$);
J(-4,0,$);
}
}();
!function(){
for(var $=[18,16,14,12,10,8,6,-6,-8,-10,-12],C=8,D=26,F=11,G=0;11>G;G++){
var H=$[G];
(B>=H&&H>0||H>=B&&0>H)&&J(H,C,F);
(E>=H&&H>0||H>=E&&0>H)&&J(H,D,F);
}
if(A){
0===B&&J(0,C,F);
0===E&&J(0,D,F);
}
}();
!function(){
function $($,A){
var B=I("_l1m",$,A,1,-2);
B.style.height="1px";
}
$(B,11);
$(E,29);
}();
return $;
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$CnM","N$RCh",function($,A){
function D(){
B._c.N$RCh.call(this);
this.N$JcM=this.N$KcM=this.N$QcM=this.N$GcM=this.N$YcM=this.N$ZcM=this.N$ehM=this.N$thM=this.N$nhM=this.N$Ydt=this.N$Zdt=null;
this.N$rhM=!1;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$knM=function($){
this.N$ehM=$;
};
A.N$ihM=function(){
return this.N$ehM;
};
$.N$WCh=function(){
return"_c1m";
};
A.N$XCh=function(){
var $=D.N$_super.prototype.N$XCh.call(this),A=C.create("div",{
"class":"_h1m"
},"Verification Code"),B=C.create("div",{
"class":"_p1m"
});
$.appendChild(A);
$.appendChild(B);
return B;
};
A.N$OnM=function(){
this.N$shM();
};
A.N$VCh=function(){
var $;
D.N$_super.prototype.N$VCh.call(this);
this.N$JcM=B._c.N$RCh.N$JCh("_d1m");
this.N$thM=B._c.N$RCh.N$JCh("_v1m");
this.N$QcM=B._c.N$RCh.N$JCh("_m1m");
var A=B._c.N$FOh.N$JCh("_g1m"),C=B._c.N$RCh.N$JCh("_y1m"),E=B._c.N$RCh.N$JCh("_b1m"),F=B._c.N$RCh.N$JCh("_w1m");
A&&A.N$zOh("_blank");
E&&E.N$uFh("Sign the report to generate a verification code.  Once signed, the text cannot be changed until the score is reset.");
F&&F.N$uFh("Sign the report to generate a verification code.");
this.N$QcM&&this.N$QcM.N$bCh(A);
this.N$QcM&&this.N$QcM.N$bCh(C);
this.N$thM&&this.N$thM.N$bCh(E);
this.N$thM&&this.N$thM.N$bCh(F);
this.N$KcM=A;
var G=B._c.N$RCh.N$JCh("_x1m");
this.N$nhM=($=new B._c.N$aFh())&&$.init();
this.N$nhM&&this.N$nhM.N$hCh("_k1m");
this.N$nhM&&this.N$nhM.N$OCh(this,"N$ohM");
this.N$ZcM=B._c.N$QCh.N$JCh("_j1m");
this.N$ZcM&&this.N$ZcM.N$OCh(this,"N$ohM");
this.N$ZcM&&this.N$ZcM.N$uFh("Sign Report");
G&&G.N$bCh(this.N$nhM);
G&&G.N$bCh(this.N$ZcM);
this.N$thM&&this.N$thM.N$bCh(G);
this.N$JcM&&this.N$JcM.N$bCh(this.N$QcM);
var H=B._c.N$RCh.N$JCh("_q1m");
this.N$YcM=B._c.N$QCh.N$JCh("_j1m");
this.N$YcM&&this.N$YcM.N$OCh(this,"N$uhM");
this.N$YcM&&this.N$YcM.N$uFh("Copy Link");
this.N$GcM=B._c.N$QCh.N$JCh("_j1m");
this.N$GcM&&this.N$GcM.N$OCh(this,"N$ahM");
this.N$GcM&&this.N$GcM.N$uFh("Copy Code");
H&&H.N$bCh(this.N$YcM);
H&&H.N$bCh(this.N$GcM);
this.N$JcM&&this.N$JcM.N$bCh(H);
this.N$bCh(this.N$JcM);
this.N$bCh(this.N$thM);
};
A.N$GIy=function($,A){
{
var C=B._c.N$fOh.N$aOh($.keyCode);
document.activeElement;
}
if(this.N$nhM&&this.N$nhM.N$KAh()&&A){
"Escape"==C&&this.N$nhM&&this.N$nhM.N$cFh();
return!0;
}
return!1;
};
A.N$bnM=function($){
if(!this.N$rhM&&this.N$Ydt)try{
$.clipboardData.setData("text/plain",this.N$Ydt);
return!0;
}catch($){}
return!1;
};
A.N$fhM=function($){
if(window.isSecureContext&&navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText($);else{
var A=document.createElement("textarea");
A.value=$;
A.contentEditable="true";
A.readOnly=!0;
document.body.appendChild(A);
if(B._c.N$cLh.N$dAh()||B._c.N$cLh.N$vAh()){
var C=document.createRange();
C.selectNodeContents(A);
var D=window.getSelection();
D.removeAllRanges();
D.addRange(C);
}else A.select();
A.setSelectionRange(0,A.value.length);
this.N$rhM=!0;
document.execCommand("copy");
A.blur();
document.body.removeChild(A);
this.N$rhM=!1;
}
};
A.N$shM=function(){
var $=(this.N$QcM&&this.N$QcM.N$NCh()).getBoundingClientRect();
if(!$.width||!$.height)return;
for(var A=16,B=this.N$KcM&&this.N$KcM.N$NCh(),C=this.N$KcM&&this.N$KcM.N$S4(),D=void 0;!D||D.height>$.height-16;){
C.fontSize=A+"px";
D=B.getBoundingClientRect();
A--;
if(9>A)break;
}
var E=Math.round(($.width-D.width)/2);
C.left=E+"px";
};
A.N$uhM=function(){
this.N$fhM(this.N$Zdt);
};
A.N$ahM=function(){
this.N$fhM(this.N$Ydt);
};
A.N$ohM=function(){
var $=this.N$nhM&&this.N$nhM.N$zet();
$=$.trim().replace(/\s+/g," ");
if($)this.N$ehM&&this.N$ehM($);else{
this.N$nhM&&this.N$nhM.N$Urt("");
this.N$nhM&&this.N$nhM.N$cFh();
}
};
A.N$SnM=function($,A){
if($){
this.N$KcM&&this.N$KcM.N$uFh($);
this.N$KcM&&this.N$KcM.N$UOh(A);
}else{
this.N$KcM&&this.N$KcM.N$uFh("None");
this.N$KcM&&this.N$KcM.N$UOh("#");
}
this.N$Ydt=$;
this.N$Zdt=A;
this.N$okh("_z1m",!!$);
this.N$shM();
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$NnM","N$RCh",function(A,C){
function D(){
B._c.N$RCh.call(this);
this.N$lhM=this.N$chM=this.N$hhM=this.N$phM=null;
this.N$dhM=0;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$WCh=function(){
return"_e2m";
};
C.init=function(){
var $,A=this;
if(A=D.N$_super.prototype.init.call(this)){
A.N$phM=($=new B._c.N$WOh())&&$.init();
A.N$phM&&A.N$phM.N$hCh("_t2m");
}
return A;
};
C.N$VCh=function(){
D.N$_super.prototype.N$VCh.call(this);
this.N$bCh(this.N$phM);
};
C.N$vhM=function(){
var A,B=this;
if(this.N$hhM)for(var C=0,D=this.N$hhM.length;D>C;C++)for(var E=0,F=this.N$hhM[C].length;F>E;E++)(A=this.N$hhM[C][E])&&A.N$Sct(this.N$dhM!=C);
var G=0===this.N$dhM,H=this.N$dhM===this.N$hhM.length-1;
this.N$chM&&$.each(this.N$chM,function($){
$&&$.N$F2(!G);
});
B.N$lhM&&$.each(B.N$lhM,function($){
$&&$.N$F2(!H);
});
};
C.N$mhM=function(){
this.N$dhM--;
this.N$dhM<0&&(this.N$dhM=0);
this.N$vhM();
};
C.N$ghM=function(){
this.N$dhM++;
this.N$dhM>=this.N$hhM.length&&(this.N$dhM=this.N$hhM.length-1);
this.N$vhM();
};
C.N$xnM=function(A){
var C=this;
if(!this.N$phM)return;
if(!A||0==A.length)return;
function D($){
var A=C.N$phM&&C.N$phM.N$OOh();
A&&A.N$hCh($);
return A;
}
function E($){
var A=D("_n2m"),B=C.N$phM&&C.N$phM.N$nMh();
B&&B.N$hCh("_r2m");
B&&B.N$uFh($);
return{
row:A,
column:B
};
}
function F(){
D("_i2m");
var $=C.N$phM&&C.N$phM.N$DOh();
$&&$.N$hCh("_r2m");
$&&$.N$KCh("&nbsp;");
}
function G(A,F){
var G,H,I=[],J=E(A["title"]);
I.push(J.row);
if(F){
var K=B._c.N$QCh.N$JCh("_s2m"),L=B._c.N$QCh.N$JCh("_s2m");
K&&K.N$bCh(B._c.N$RCh.N$JCh("_o2m"));
L&&L.N$bCh(B._c.N$RCh.N$JCh("_u2m"));
K&&K.N$OCh(C,"N$mhM");
L&&L.N$OCh(C,"N$ghM");
K&&K.N$oOh();
L&&L.N$oOh();
C.N$chM.push(K);
C.N$lhM.push(L);
(G=J.column)&&G.N$bCh(L);
(H=J.column)&&H.N$bCh(K);
}
$.each(A["rows"],function(A){
var E,F=A["name"],G=A["value"];
I.push(D("_a2m"));
var H=C.N$phM&&C.N$phM.N$DOh(),J=C.N$phM&&C.N$phM.N$DOh();
H&&H.N$cet(-1);
J&&J.N$cet(-1);
H&&H.N$KCh(F);
if($.isArray(G)){
var K=A["clef"],L=A["string"],M=B._c.N$Jn.N$ur(G),N=(E=new B._c.N$XcM())&&E.N$VcM(K,M);
N&&N.N$zrt(L);
J&&J.N$bCh(N);
}else J&&J.N$KCh(G);
});
return I;
}
C.N$phM&&C.N$phM.N$AOh();
var H=2==A.length;
C.N$hhM=[];
C.N$chM=[];
C.N$lhM=[];
G(A[0],!1);
F();
for(var I=1;I<A.length;I++)C.N$hhM.push(G(A[I],!H));
C.N$vhM();
C.N$phM&&C.N$phM.N$oLh();
};
return D;
});
}();
!function(){
"use strict";
var A="rgba(112,112,112,0.5)",D="#707070";
function E($,A){
var B=document.createElement("canvas"),C=B.getContext("2d"),D=Math.ceil(window.devicePixelRatio||1),E=$.width,F=$.height,G=E+"px",H=F+"px";
E*=D;
F*=D;
if(B.width!=E||B.height!=F){
B.style.width=G;
B.style.height=H;
B.width=E;
B.height=F;
}
C.setTransform(1,0,0,1,0,0);
C.clearRect(0,0,E,F);
C.setTransform(D,0,0,D,0,0);
C.save();
A(C);
C.restore();
return B;
}
var F=void 0;
B._registerClass("N$yhM",null,function(G,H){
function I(){
this.constructor=I;
this.N$_id=++B._id;
}
G.N$Si=function(){
var $;
F||(F=($=this.alloc())&&$.init());
return F;
};
H.N$bhM=function($,C,F){
var G,H=parseInt($.substring(5),10),I=(G=new B._c.N$A4())&&G.init();
I&&I.N$F4(7);
I&&I.N$B4(Math.floor(F.height/2));
var J=Math.ceil(window.devicePixelRatio||1);
return E(F,function($){
function C(A,C){
var D=I&&I.N$Z4(A,0,C);
D.x=Math.round((F.width-D.width)/2);
B._c.N$DRy.N$PRy($,J,A,D);
}
$.fillStyle=A;
if(-2==H){
var E=I&&I.N$Y4(F.width,6);
B._c.N$DRy.N$PRy($,J,3,E);
var G=I&&I.N$Y4(F.width,-6);
B._c.N$DRy.N$PRy($,J,3,G);
$.fillStyle=D;
C(12,4);
C(13,-4);
}else{
var K=I&&I.N$G4(F.width);
B._c.N$DRy.N$PRy($,J,3,K);
$.fillStyle=D;
var L=B._c.N$A4.N$U4(H),M=B._c.N$A4.N$X4(H);
0!=L&&C(L,M);
}
});
};
H.N$whM=function($,C,F){
var G=$.substring(6).split(","),H=parseInt(G[0],10),I=parseInt(G[1],10),J=parseInt(G[2],10),K=B._c.N$Jn.N$ir(I,J);
return E(F,function($){
var C,E,G=(C=new B._c.N$A4())&&C.init();
G&&G.N$F4(7);
G&&G.N$B4(Math.floor(F.height/2));
var I=(E=new B._c.N$ShM())&&E.N$EhM(H,K,G,F);
I&&I.N$xhM($,D,A);
});
};
H.N$ThM=function(A){
if($.startsWith(A,"range:")){
var C=A.substring(6).split(","),D=parseInt(C[0],10),E=parseInt(C[1],10),F=parseInt(C[2],10),G=Math.abs(E);
Math.abs(F)>G&&(G=Math.abs(F));
var H=7,I=Math.round(2*G*(H/2));
-2==D?82>I&&(I=82):45>I&&(I=45);
return B._g.N$m(0,0,88,I+16);
}
var J={
"keysig:7":[0,0,66,37],
"keysig:6":[0,0,56,37],
"keysig:5":[0,0,46,37],
"keysig:4":[0,0,36,37],
"keysig:3":[0,0,26,37],
"keysig:2":[0,0,16,37],
"keysig:1":[0,0,6,25],
"keysig:0":[220,64,5,21],
"keysig:-1":[0,50,7,37],
"keysig:-2":[0,44,17,37],
"keysig:-3":[0,44,27,37],
"keysig:-4":[0,44,37,37],
"keysig:-5":[0,44,47,37],
"keysig:-6":[0,44,57,37],
"keysig:-7":[0,44,67,37],
"interval-playmode:0":[0,100,80,33],
"interval-playmode:1":[80,100,80,33],
"interval-playmode:2":[160,100,80,33],
"interval-playmode:3":[0,140,120,33],
"interval-playmode:4":[120,140,120,33],
"chord-playmode:0":[0,180,80,33],
"chord-playmode:1":[80,180,80,33],
"chord-playmode:2":[160,180,80,33],
"chord-playmode:3":[0,220,120,33],
"chord-playmode:4":[120,220,120,33],
"scale-playmode:0":[0,256,87,41],
"scale-playmode:1":[68,256,87,41],
"scale-playmode:2":[136,256,120,41],
"clef:-2":[72,1,36,97],
"clef:34":[108,1,36,49],
"clef:28":[144,1,36,49],
"clef:26":[180,1,36,49],
"clef:32":[216,1,36,49],
"clef:22":[108,49,36,49],
"clef:30":[144,49,36,49],
"clef:24":[180,49,36,49]
},K=J[A];
return K?B._g.N$m(K[0],K[1],K[2],K[3]):B._g.N$g();
};
H.N$NhM=function(A,D){
var E=this,F=C.create("div"),G=0,H=0,I=!1,J=!0;
$.each(A,function(A){
var K=void 0,L=E.N$ThM(A);
if(L&&L.width&&L.height&&0==D){
K=C.create("div",{
"class":"_f2m"
});
K.style.backgroundPosition="-"+L.x+"px -"+L.y+"px";
}else if($.startsWith(A,"clef:"))K=E.N$bhM(A,D,B._g.N$O(L));else if($.startsWith(A,"range:"))K=E.N$whM(A,D,B._g.N$O(L));else if($.startsWith(A,"musictype:")){
var M=0!=D;
K=B._g.N$vNh(A.slice(10));
K.classList.add(M?"_l2m":"_c2m");
document.body.appendChild(K);
L=B._g.N$m(0,0,K.offsetWidth+2,K.offsetHeight);
}
if(L&&L.width&&L.height&&J){
K.style.width=L.width+"px";
K.style.height=L.height+"px";
L.height>G&&(G=L.height);
H+=L.width;
}
if(I){
K.style.marginLeft="8px";
H+=8;
}
if(K){
F.appendChild(K);
I=!0;
}
});
F.style.height=G+"px";
F.style.width=H+"px";
return F;
};
return I;
});
}();
!function(){
"use strict";
B._registerClass("N$TrM","N$AAh",function(A,C){
function D(){
B._c.N$AAh.call(this);
this.N$ChM=this.N$EsM=this.N$MgF=this.N$Kdt=this.N$khM=null;
this.N$LhM=this.N$AhM=!1;
this.constructor=D;
this.N$_id=++B._id;
}
C.N$tvt=function(){
return this.N$Kdt;
};
C.N$OhM=function(){
return this.N$ChM;
};
C.N$MhM=function(){
return this.N$khM;
};
C.N$DhM=function(){
return this.N$LhM;
};
C.N$PhM=function(){
return this.N$AhM;
};
A.N$WCh=function(){
return"_h2m";
};
C.N$xrM=function($,A,B,C,E){
var F=this;
if(F=D.N$_super.prototype.init.call(this)){
F.N$Kdt=$;
F.N$ChM=A;
F.N$khM=B;
F.N$LhM=C;
F.N$AhM=E;
}
return F;
};
C.N$VCh=function(){
var A,C=this;
D.N$_super.prototype.N$VCh.call(this);
var E=1;
this.N$MgF=$.map(this.N$Kdt,function($){
var A,D=C.N$AhM?String(E++):null,F=(A=new B._c.N$BhM())&&A.N$HhM($,C.N$ChM,C.N$khM,D);
F&&F.N$OCh(C,"N$jhM");
C.N$bCh(F);
return F;
});
if(C.N$LhM){
C.N$EsM=(A=new B._c.N$QCh())&&A.init();
C.N$EsM&&C.N$EsM.N$hCh("_p2m");
C.N$EsM&&C.N$EsM.N$uFh("Reset");
C.N$EsM&&C.N$EsM.N$OCh(C,"N$FhM");
C.N$bCh(C.N$EsM);
}
};
C.N$jhM=function(A){
var B=$.indexOf(this.N$MgF,A);
B>=0&&this.N$lOh();
};
C.N$FhM=function(){
for(var $,A,B=0,C=this.N$Kdt.length;C>B;B++)($=this.N$MgF[B])&&$.N$Mct((A=this.N$Kdt[B])&&A.N$mdt());
this.N$lOh();
};
return D;
});
B._registerClass("N$BhM","N$AAh",function($,A){
function D(){
B._c.N$AAh.call(this);
this.N$YtM=this.N$IhM=this.N$ChM=this.N$qhM=this.N$RhM=this.N$UhM=this.N$zhM=this.N$v2T=this.N$WhM=this.N$khM=null;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$OhM=function(){
return this.N$ChM;
};
A.N$MhM=function(){
return this.N$khM;
};
$.N$WCh=function(){
return"_d2m";
};
A.N$HhM=function($,A,B,C){
var E=this;
if(E=D.N$_super.prototype.init.call(this)){
E.N$RhM=$;
E.N$ChM=A;
E.N$khM=B;
E.N$zhM=C;
}
return E;
};
A.N$VCh=function(){
var $,A,C,E,F;
D.N$_super.prototype.N$VCh.call(this);
this.N$UhM=B._c.N$RCh.N$JCh("_v2m");
this.N$bCh(this.N$UhM);
var G=B._g.N$l(196,40);
if(this.N$zhM){
this.N$UhM&&this.N$UhM.N$uFh(this.N$zhM);
G.width-=24;
}
var H=this.N$RhM&&this.N$RhM.N$Vat(),I=this.N$RhM&&this.N$RhM.N$wrt();
this.N$v2T=($=new B._c.N$ejh())&&$.init();
this.N$v2T&&this.N$v2T.N$hCh("_m2m");
this.N$v2T&&this.N$v2T.N$Pjh(I&&I.N$cr());
this.N$v2T&&this.N$v2T.N$Mct(H-(I&&I.N$rr()));
this.N$v2T&&this.N$v2T.N$OCh(this,"N$zfM");
this.N$v2T&&this.N$v2T.N$Hjh(B._g.N$l(80,28));
this.N$v2T&&this.N$v2T.N$TUh(G,!0);
this.N$v2T&&this.N$v2T.N$Bjh("#a0a0a0");
this.N$v2T&&this.N$v2T.N$jjh("#a0a0a0");
this.N$bCh(this.N$v2T);
this.N$YtM=(A=new B._c.N$cCh())&&A.init();
(C=this.N$v2T&&this.N$v2T.N$kjh())&&C.N$bCh(this.N$YtM);
this.N$WhM=B._c.N$RCh.N$JCh("_g2m");
this.N$IhM=(E=new B._c.N$VhM())&&E.N$XhM(3);
this.N$qhM=(F=new B._c.N$VhM())&&F.N$XhM(1);
this.N$IhM&&this.N$IhM.N$hCh("_y2m");
this.N$qhM&&this.N$qhM.N$hCh("_b2m");
this.N$IhM&&this.N$IhM.N$OCh(this,"N$JhM");
this.N$qhM&&this.N$qhM.N$OCh(this,"N$JhM");
this.N$bCh(this.N$IhM);
this.N$bCh(this.N$qhM);
this.N$KhM();
};
A.N$KhM=function(){
var $;
if(!this.N$v2T)return;
var A=this.N$RhM&&this.N$RhM.N$Vat(),D=this.N$ChM[A],E=this.N$khM[A],F=this.N$YtM&&this.N$YtM.N$KOh();
C.empty(F);
C.append(F,B._g.N$vNh(D));
this.N$v2T&&this.N$v2T.N$Mct((this.N$RhM&&this.N$RhM.N$Vat())-(($=this.N$RhM&&this.N$RhM.N$wrt())&&$.N$rr()));
this.N$v2T&&this.N$v2T.N$mjh(E);
this.N$v2T&&this.N$v2T.N$Ajh();
};
A.N$QhM=function($,A){
var B;
if((this.N$RhM&&this.N$RhM.N$Vat())!=$&&(B=this.N$RhM&&this.N$RhM.N$wrt())&&B.N$fr($)){
this.N$RhM&&this.N$RhM.N$Mct($);
this.N$KhM();
A&&this.N$lOh();
}
};
A.N$Mct=function($){
this.N$QhM($,!1);
};
A.N$Vat=function(){
return this.N$RhM&&this.N$RhM.N$Vat();
};
A.N$JhM=function($){
$==this.N$IhM?this.N$QhM((this.N$RhM&&this.N$RhM.N$Vat())-1,!0):this.N$QhM((this.N$RhM&&this.N$RhM.N$Vat())+1,!0);
};
A.N$zfM=function($){
var A;
this.N$QhM(($&&$.N$Vat())+((A=this.N$RhM&&this.N$RhM.N$wrt())&&A.N$rr()),!0);
};
return D;
});
B._registerClass("N$SrM",null,function($,A){
function C(){
this.N$Lrt=null;
this.N$udt=this.N$ldt=0;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$Mct=function($){
this.N$ldt=$;
};
A.N$Vat=function(){
return this.N$ldt;
};
A.N$mdt=function(){
return this.N$udt;
};
A.N$wrt=function(){
return this.N$Lrt;
};
A.N$ErM=function($,A,B){
var D=this;
if(D=C.N$_super.prototype.init.call(this)){
D.N$ldt=$;
D.N$udt=A;
D.N$Lrt=B;
}
return D;
};
return C;
});
}();
!function(){
"use strict";
B._registerClass("N$ShM",null,function($,A){
function C(){
this.N$Ket=this.N$GhM=this.N$YhM=this.N$ZhM=this.N$Lrt=this.N$epM=this.N$tpM=this.N$npM=this.N$dRh=null;
this.N$l4=0;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$d4=function(){
return this.N$l4;
};
A.N$wrt=function(){
return this.N$Lrt;
};
A.N$rpM=function(){
return this.N$Ket;
};
A.N$iRh=function(){
return this.N$dRh;
};
A.N$ipM=function(){
return this.N$YhM;
};
A.N$spM=function(){
return this.N$ZhM;
};
A.N$opM=function(){
return this.N$epM;
};
A.N$upM=function(){
return this.N$tpM;
};
A.N$EhM=function($,A,B,D){
var E=this;
if(E=C.N$_super.prototype.init.call(this)){
E.N$l4=$;
E.N$Lrt=A;
E.N$Ket=B;
E.N$dRh=D;
E.N$apM();
}
return E;
};
A.N$apM=function(){
var $=0;
if(-2==this.N$l4){
this.N$GhM=this.N$Ket&&this.N$Ket.N$Z4(12,0,4);
this.N$npM=this.N$Ket&&this.N$Ket.N$Z4(13,0,-4);
$=Math.max(this.N$GhM.width,this.N$npM.width);
}else if(0!=this.N$l4){
var A=B._c.N$A4.N$U4(this.N$l4),C=B._c.N$A4.N$X4(this.N$l4);
this.N$GhM=this.N$Ket&&this.N$Ket.N$Z4(A,0,C);
$=Math.max(this.N$GhM.width);
}
var D=(this.N$dRh.width-$)/5,E=Math.floor($+1.5*D),F=Math.ceil($+3.5*D);
this.N$YhM=this.N$Ket&&this.N$Ket.N$Z4(30,0,this.N$Lrt&&this.N$Lrt.N$Yn());
this.N$YhM.x=Math.round(E-this.N$YhM.width/2);
this.N$epM=this.N$Ket&&this.N$Ket.N$Z4(30,0,this.N$Lrt&&this.N$Lrt.N$er());
this.N$epM.x=Math.round(F-this.N$epM.width/2);
var G=1.6*this.N$YhM.width;
this.N$ZhM=B._g.N$m(Math.round(E-G/2),0,G,this.N$dRh.height);
this.N$tpM=B._g.N$m(Math.round(F-G/2),0,G,this.N$dRh.height);
};
A.N$xhM=function($,A,C){
var D=this,E=Math.ceil(window.devicePixelRatio||1);
function F(A,C){
B._c.N$DRy.N$PRy($,E,A,C);
}
function G(A){
$.fillStyle=C;
if(-2==D.N$l4){
F(A,D.N$Ket&&D.N$Ket.N$Y4(D.N$dRh.width,6));
F(A,D.N$Ket&&D.N$Ket.N$Y4(D.N$dRh.width,-6));
}else F(A,D.N$Ket&&D.N$Ket.N$G4(D.N$dRh.width));
}
function H(B,C){
$.fillStyle=A;
F(B,C);
}
function I(A,E){
{
var G=0>E?-1:1,H=D.N$Ket&&D.N$Ket.N$Q4(30);
Math.round(1.6*H);
}
E*=G;
E%2&&E--;
var I=-2==D.N$l4,J=I?10:4;
I&&!E&&(J=-2);
for(;E>J;){
var K=B._g.N$m(A.x,D.N$Ket&&D.N$Ket.N$V4(E*G),A.width,1);
$.fillStyle=C;
$.strokeStyle=C;
F(4,K);
E-=2;
}
}
function J(B,C,E){
-2==D.N$l4?(-11>E||E>11||0===E)&&I(C,E):(-5>E||E>5)&&I(C,E);
$.fillStyle=A;
F(30,B);
}
G(3);
if(-2==D.N$l4){
H(12,D.N$GhM);
H(13,D.N$npM);
}else 0!=D.N$l4&&H(B._c.N$A4.N$U4(D.N$l4),D.N$GhM);
J(D.N$YhM,D.N$ZhM,D.N$Lrt&&D.N$Lrt.N$Yn());
J(D.N$epM,D.N$tpM,D.N$Lrt&&D.N$Lrt.N$er());
G(100);
};
return C;
});
}();
!function(){
"use strict";
B._registerClass("N$brM","N$RCh",function($,A){
function C(){
B._c.N$RCh.call(this);
this.N$Ket=this.N$fpM=this.N$DMh=this.N$INh=this.N$lpM=this.N$cpM=this.N$hpM=this.N$Lrt=this.N$M3T=this.N$ppM=this.N$dpM=this.N$vpM=this.N$mpM=null;
this.N$l4=this.N$O4=0;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$wrt=function(){
return this.N$Lrt;
};
A.N$wrM=function($){
this.N$mpM=$;
};
A.N$gpM=function(){
return this.N$mpM;
};
A.N$d4=function(){
return this.N$l4;
};
A.N$nCh=function($){
this.N$INh=$;
};
A.N$rCh=function(){
return this.N$INh;
};
A.N$F4=function($){
this.N$O4=$;
};
A.N$I4=function(){
return this.N$O4;
};
$.N$WCh=function(){
return"_w2m";
};
A.init=function(){
var $,A=this;
if(A=C.N$_super.prototype.init.call(this)){
A.N$O4=17;
A.N$Ket=($=new B._c.N$A4())&&$.init();
A.N$Ket&&A.N$Ket.N$F4(17);
A.N$Ket&&A.N$Ket.N$P4(0);
A.N$Ket&&A.N$Ket.N$B4(160);
}
return A;
};
A.N$VCh=function(){
var $,A,D,E,F,G,H=this;
C.N$_super.prototype.N$VCh.call(this);
function I($,A,C){
var D=B._c.N$RCh.N$JCh($);
A&&A.N$hCh("_x2m");
D&&D.N$bCh(A);
C&&C.N$hCh("_k2m");
D&&D.N$bCh(C);
return D;
}
H.N$cpM=($=new B._c.N$VhM())&&$.N$XhM(0);
H.N$lpM=(A=new B._c.N$VhM())&&A.N$XhM(2);
H.N$dpM=(D=new B._c.N$VhM())&&D.N$XhM(0);
H.N$ppM=(E=new B._c.N$VhM())&&E.N$XhM(2);
H.N$cpM&&H.N$cpM.N$OCh(H,"N$JhM");
H.N$lpM&&H.N$lpM.N$OCh(H,"N$JhM");
H.N$dpM&&H.N$dpM.N$OCh(H,"N$JhM");
H.N$ppM&&H.N$ppM.N$OCh(H,"N$JhM");
H.N$hpM=(F=new B._c.N$ypM())&&F.init();
H.N$hpM&&H.N$hpM.N$bpM(H.N$Ket);
H.N$hpM&&H.N$hpM.N$OCh(H,"N$wpM");
H.N$vpM=(G=new B._c.N$ypM())&&G.init();
H.N$vpM&&H.N$vpM.N$bpM(H.N$Ket);
H.N$vpM&&H.N$vpM.N$OCh(H,"N$wpM");
H.N$DMh=B._c.N$RCh.N$JCh("_j2m");
H.N$DMh&&H.N$DMh.N$TUh(B._g.N$l(198,320),!0);
H.N$fpM=B._c.N$LHh.N$kHh(function($){
$&&$.N$sRh(function($){
H.N$M3T&&H.N$M3T.N$xhM($,"#000","#000");
});
});
H.N$DMh&&H.N$DMh.N$OHh(H.N$fpM);
H.N$bCh(I("_q2m",H.N$cpM,H.N$lpM));
H.N$bCh(H.N$DMh);
H.N$bCh(I("_z2m",H.N$dpM,H.N$ppM));
H.N$DMh&&H.N$DMh.N$bCh(H.N$hpM);
H.N$DMh&&H.N$DMh.N$bCh(H.N$vpM);
H.N$kPh();
};
A.N$kPh=function(){
var $;
if(!this.N$hpM||!this.N$vpM)return;
var A=(-2==this.N$l4,this.N$mpM&&this.N$mpM.N$nr()),C=this.N$mpM&&this.N$mpM.N$rr();
this.N$hpM&&this.N$hpM.N$EpM(A);
this.N$vpM&&this.N$vpM.N$EpM(A);
this.N$hpM&&this.N$hpM.N$SpM(C);
this.N$vpM&&this.N$vpM.N$SpM(C);
this.N$hpM&&this.N$hpM.N$pit(this.N$Lrt&&this.N$Lrt.N$Yn());
this.N$vpM&&this.N$vpM.N$pit(this.N$Lrt&&this.N$Lrt.N$er());
this.N$M3T=($=new B._c.N$ShM())&&$.N$EhM(this.N$l4,this.N$Lrt,this.N$Ket,B._g.N$l(198,320));
this.N$hpM&&this.N$hpM.N$xpM(this.N$M3T&&this.N$M3T.N$spM(),this.N$M3T&&this.N$M3T.N$ipM());
this.N$vpM&&this.N$vpM.N$xpM(this.N$M3T&&this.N$M3T.N$upM(),this.N$M3T&&this.N$M3T.N$opM());
this.N$fpM&&this.N$fpM.N$DHh();
};
A.N$JhM=function($){
var A=$==this.N$ppM||$==this.N$dpM,B=$==this.N$cpM||$==this.N$dpM,C=B?1:-1;
A?this.N$vpM&&this.N$vpM.N$TpM(C):this.N$hpM&&this.N$hpM.N$TpM(C);
};
A.N$wpM=function($){
var A=$&&$.N$G9(),B=!1;
if($==this.N$hpM){
var C=this.N$Lrt&&this.N$Lrt.N$Yn();
if(A!=C){
this.N$Lrt&&this.N$Lrt.N$Gn(A);
B=!0;
}
}else if($==this.N$vpM){
var D=this.N$Lrt&&this.N$Lrt.N$er();
if(A!=D){
this.N$Lrt&&this.N$Lrt.N$Zn(A);
B=!0;
}
}
if(B){
this.N$kPh();
this.N$INh&&this.N$INh.N$XrM(this,this.N$Lrt);
}
};
A.N$Mrt=function($){
if(!this.N$Lrt||!this.N$Lrt.isEqual_($)){
this.N$Lrt=$&&$.copy();
this.N$kPh();
}
};
A.N$tnt=function($){
if(this.N$l4!=$){
this.N$l4=$;
this.N$kPh();
}
};
return C;
});
B._registerClass("N$ypM","N$tjh",function($,A){
function C(){
B._c.N$tjh.call(this);
this.N$Ket=this.N$ijh=null;
this.N$NpM=this.N$CpM=this.N$Q9=this.N$kpM=0;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$EpM=function($){
this.N$kpM=$;
};
A.N$LpM=function(){
return this.N$kpM;
};
A.N$SpM=function($){
this.N$NpM=$;
};
A.N$ApM=function(){
return this.N$NpM;
};
A.N$G9=function(){
return this.N$Q9;
};
A.N$bpM=function($){
this.N$Ket=$;
};
A.N$rpM=function(){
return this.N$Ket;
};
$.N$WCh=function(){
return"_e3m";
};
A.N$VCh=function(){
C.N$_super.prototype.N$VCh.call(this);
this.N$ijh=B._c.N$RCh.N$JCh("_t3m");
this.N$bCh(this.N$ijh);
};
A.N$xpM=function($,A){
var B=this.N$S4();
B.left=$.x+"px";
B.width=$.width+"px";
var C=this.N$ijh&&this.N$ijh.N$S4();
C.top=A.y+"px";
C.height=A.height+"px";
};
A.N$TpM=function($){
this.N$pit(this.N$Q9+$);
};
A.N$pit=function($){
$>this.N$kpM&&($=this.N$kpM);
$<this.N$NpM&&($=this.N$NpM);
if(this.N$Q9!=$){
this.N$Q9=$;
this.N$lOh();
}
};
A.N$kjh=function(){
return this.N$ijh;
};
A.N$Ljh=function($){
this.N$pit(this.N$Ket&&this.N$Ket.N$J4($.y));
};
A.N$Ojh=function(){
var $=this.N$NCh().getBoundingClientRect(),A=(this.N$ijh&&this.N$ijh.N$NCh()).getBoundingClientRect();
this.N$CpM=A.top-$.top+A.height/2;
};
A.N$Mjh=function($,A){
var B=this.N$Ket&&this.N$Ket.N$J4(this.N$CpM+A);
this.N$pit(B);
};
return C;
});
}();
!function(){
"use strict";
B._registerClass("N$VhM","N$QCh",function($,A){
function D(){
B._c.N$QCh.call(this);
this.N$JHh=null;
this.N$OpM=0;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$MpM=function(){
return this.N$OpM;
};
$.N$WCh=function(){
return"_n3m";
};
A.N$XhM=function($){
var A=this;
if(A=D.N$_super.prototype.init.call(this)){
A.N$OpM=$;
A.N$FAh(2);
A.N$qAh(500);
A.N$UAh(100);
var B=["_r3m","_i3m","_s3m","_o3m"][A.N$OpM];
A.N$hCh(B);
}
return A;
};
A.N$XCh=function(){
var $=D.N$_super.prototype.N$XCh.call(this),A=C.create("div",{
"class":"_u3m"
});
$.appendChild(A);
return A;
};
A.N$VCh=function(){
var $;
D.N$_super.prototype.N$VCh.call(this);
var A=0;
0==this.N$OpM?A=32:2==this.N$OpM?A=33:3==this.N$OpM?A=34:1==this.N$OpM&&(A=35);
A&&(this.N$JHh=($=new B._c.N$bAh())&&$.N$CAh(A));
this.N$bCh(this.N$JHh);
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$niM","N$QCh",function($,A){
function D(){
B._c.N$QCh.call(this);
this.N$Ynt=this.N$njh=this.N$DpM=this.N$VHh=this.N$qnM=null;
this.N$PpM=this.N$HpM=0;
this.N$eBh=!1;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$zrM=function($){
this.N$DpM=$;
};
A.N$BpM=function(){
return this.N$DpM;
};
A.N$WrM=function($){
this.N$PpM=$;
};
A.N$jpM=function(){
return this.N$PpM;
};
A.N$FpM=function(){
return this.N$HpM;
};
A.N$IpM=function($){
this.N$qnM=$;
};
A.N$qpM=function(){
return this.N$qnM;
};
A.N$zrt=function($){
this.N$Ynt=$;
};
A.N$Znt=function(){
return this.N$Ynt;
};
A.N$mjh=function($){
this.N$njh=$;
};
A.N$gjh=function(){
return this.N$njh;
};
A.N$rBh=function(){
return this.N$eBh;
};
A.N$RpM=function($){
this.N$VHh=$;
};
A.N$UpM=function(){
return this.N$VHh;
};
$.N$WCh=function(){
return"_a3m";
};
A.N$tOh=function(){
D.N$_super.prototype.N$tOh.call(this);
this.N$okh("selected",this.N$rBh());
};
A.N$zpM=function(){
return!1;
};
A.N$WpM=function(){
this.N$qnM&&this.N$qnM.N$XpM(this);
};
A.N$XCh=function(){
var $=D.N$_super.prototype.N$XCh.call(this),A=C.create("div",{
"class":"_f3m"
});
this.N$VHh=A;
this.N$VHh.style.minHeight=this.N$HpM+"px";
$.appendChild(A);
this.N$VpM();
return A;
};
A.N$JpM=function($){
var A=this;
this.N$qnM=$;
this.N$zpM()?this.N$yOh(function(){
A.N$WpM();
}):A.N$yOh(null);
};
A.N$VpM=function(){};
A.N$nBh=function($){
if(this.N$eBh!=$){
this.N$eBh=$;
this.N$tOh();
}
};
A.N$ZnM=function($){
if(this.N$HpM!=$){
this.N$HpM=$;
this.N$VHh&&(this.N$VHh.style.minHeight=$+"px");
}
};
return D;
});
B._registerClass("N$LrM","N$niM",function(){
function $(){
B._c.N$niM.call(this);
this.constructor=$;
this.N$_id=++B._id;
}
return $;
});
}();
!function(){
"use strict";
B._registerClass("N$ArM","N$niM",function($,A){
function D(){
B._c.N$niM.call(this);
this.N$Vct=this.N$KpM=this.N$QpM=this.N$GpM=this.N$YpM=this.N$ZpM=this.N$edM=this.N$tdM=this.N$ndM=this.N$Ypt=this.N$wbF=this.N$rdM=null;
this.N$idM=this.N$sdM=this.N$odM=!1;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$Plt=function($){
var A=this.N$Ypt;
if(A!==$){
this.N$Ypt=$;
this.N$VpM(A);
}
};
A.N$Xat=function(){
return this.N$Ypt;
};
A.N$OrM=function($){
var A=this.N$tdM;
if(A!==$){
this.N$tdM=$;
this.N$VpM(A);
}
};
A.N$udM=function(){
return this.N$tdM;
};
A.N$aht=function(){
return this.N$Vct;
};
A.N$MrM=function($){
var A=this.N$idM;
if(A!==$){
this.N$idM=$;
this.N$VpM(A);
}
};
A.N$adM=function(){
return this.N$idM;
};
A.N$fdM=function(){
return this.N$sdM;
};
A.N$BrM=function($){
var A=this.N$odM;
if(A!==$){
this.N$odM=$;
this.N$VpM(A);
}
};
A.N$ldM=function(){
return this.N$odM;
};
A.N$PrM=function($){
this.N$YpM=$;
};
A.N$VrM=function(){
return this.N$YpM;
};
A.N$HrM=function($){
this.N$ZpM=$;
};
A.N$JrM=function(){
return this.N$ZpM;
};
$.N$WCh=function(){
return"_l3m";
};
A.N$zpM=function(){
return!0;
};
A.N$VpM=function(){
var $=this,A=this.N$UpM();
if(!A)return;
function B($,B,D){
C.remove(B);
$&&!B?B=C.create("div",{
"class":D
}):!$&&B&&(B=null);
B&&C.append(A,B);
return B;
}
$.N$KpM=B($.N$idM,$.N$KpM,"_c3m");
$.N$GpM=B($.N$Vct,$.N$GpM,"_h3m");
$.N$rdM=B($.N$Ypt||$.N$tdM,$.N$rdM,"_p3m");
$.N$wbF=B($.N$Ypt,$.N$wbF,"_d3m");
$.N$ndM=B($.N$tdM,$.N$ndM,"_v3m");
$.N$edM=B(!$.N$idM,$.N$edM,"_m3m");
$.N$wbF&&$.N$rdM.appendChild($.N$wbF);
$.N$ndM&&$.N$rdM.appendChild($.N$ndM);
$.N$Ypt&&($.N$wbF.innerHTML=$.N$Ypt);
$.N$tdM&&($.N$ndM.innerHTML=$.N$tdM);
if($.N$GpM){
C.empty($.N$GpM);
C.append($.N$GpM,$.N$QpM);
}
$.N$okh("_g3m",$.N$odM);
var D=$.N$idM?"menuitemcheckbox":"menuitemradio";
$.N$uOh(D,"role");
var E=$.N$Znt();
E&&E!=$.N$Ypt?$.N$uOh(E,"aria-label"):$.N$EOh("aria-label");
$.N$uOh($.N$sdM?"true":"false","aria-checked");
};
A.N$DrM=function($){
if(this.N$sdM!=$){
this.N$sdM=$;
this.N$okh("_y3m",$);
}
};
A.N$Tlt=function($){
var A;
if(this.N$Vct!=$){
this.N$Vct=$;
this.N$QpM=$?(A=B._c.N$yhM.N$Si())&&A.N$NhM([$],0):null;
this.N$VpM();
}
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$YnM","N$niM",function($,A){
function D(){
B._c.N$niM.call(this);
this.N$cdM=this.N$hdM=this.N$pdM=this.N$ddM=this.N$Qct=this.N$vdM=this.N$mdM=this.N$Ypt=this.N$wbF=null;
this.N$gdM=!1;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$Plt=function($){
var A=this.N$Ypt;
if(A!==$){
this.N$Ypt=$;
this.N$VpM(A);
}
};
A.N$Xat=function(){
return this.N$Ypt;
};
A.N$ydM=function(){
return this.N$ddM;
};
A.N$qlt=function($){
var A=this.N$Qct;
if(A!==$){
this.N$Qct=$;
this.N$VpM(A);
}
};
A.N$Wat=function(){
return this.N$Qct;
};
A.N$bdM=function(){
return this.N$gdM;
};
A.N$erM=function($){
this.N$mdM=$;
};
A.N$nrM=function(){
return this.N$mdM;
};
$.N$WCh=function(){
return"_b3m";
};
A.N$zpM=function(){
return!0;
};
A.N$VpM=function(){
var $=this,A=this.N$UpM();
if(!A)return;
function B($,B,D){
C.remove(B);
$&&!B?B=C.create("div",{
"class":D
}):!$&&B&&(B=null);
B&&C.append(A,B);
return B;
}
$.N$wbF=B($.N$Ypt,$.N$wbF,"_w3m");
$.N$vdM=B($.N$Qct,$.N$vdM,"_x3m");
$.N$pdM=B($.N$ddM,$.N$pdM,"_k3m");
$.N$cdM=B(!0,$.N$cdM,"_j3m");
$.N$Ypt&&($.N$wbF.innerHTML=$.N$Ypt);
$.N$Qct&&($.N$vdM.innerHTML=$.N$Qct);
if($.N$pdM){
C.empty($.N$pdM);
C.append($.N$pdM,$.N$hdM);
}
var D="menuitem";
$.N$uOh(D,"role");
$.N$uOh("true","aria-haspopup");
var E=$.N$Znt();
E&&E!=$.N$Ypt?$.N$uOh(E,"aria-label"):$.N$EOh("aria-label");
};
A.N$FrM=function($){
if(this.N$gdM!=$){
this.N$gdM=$;
this.N$okh("_q3m",this.N$gdM);
}
};
A.N$jrM=function($){
var A;
if(this.N$ddM!=$){
this.N$ddM=$;
this.N$hdM=$?(A=B._c.N$yhM.N$Si())&&A.N$NhM($,1):null;
this.N$VpM();
}
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$IrM","N$niM",function($,A){
function D(){
B._c.N$niM.call(this);
this.N$Qpt=this.N$wdM=this.N$Gpt=this.N$EdM=this.N$Ypt=this.N$wbF=null;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$Plt=function($){
this.N$Ypt=$;
};
A.N$Xat=function(){
return this.N$Ypt;
};
A.N$Zpt=function($){
this.N$Qpt=$;
};
A.N$edt=function(){
return this.N$Qpt;
};
A.N$tdt=function($){
this.N$Gpt=$;
};
A.N$ndt=function(){
return this.N$Gpt;
};
$.N$WCh=function(){
return"_z3m";
};
A.N$VpM=function(){
var $=this,A=this.N$UpM();
if(!A)return;
A.classList.add("_e4m");
function B($,B,D){
C.remove(B);
$&&!B?B=C.create("div",{
"class":D
}):!$&&B&&(B=null);
B&&C.append(A,B);
return B;
}
$.N$wbF=B($.N$Ypt,$.N$wbF,"_t4m");
$.N$wdM=B($.N$Qpt,$.N$wdM,"_n4m");
$.N$EdM=B($.N$Gpt,$.N$EdM,"_r4m");
$.N$Ypt&&($.N$wbF.innerHTML=$.N$Ypt);
$.N$Qpt&&($.N$wdM.innerHTML=$.N$Qpt);
$.N$Gpt&&($.N$EdM.innerHTML=$.N$Gpt);
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$qrM","N$niM",function($,A){
function C(){
B._c.N$niM.call(this);
this.N$SdM=this.N$xdM=this.N$YpM=this.N$v2T=this.N$Ypt=this.N$tcM=null;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$Plt=function($){
this.N$Ypt=$;
};
A.N$Xat=function(){
return this.N$Ypt;
};
A.N$PrM=function($){
this.N$YpM=$;
};
A.N$VrM=function(){
return this.N$YpM;
};
A.N$KrM=function(){
return this.N$xdM;
};
A.N$TdM=function(){
return this.N$SdM;
};
$.N$WCh=function(){
return"_i4m";
};
A.init=function(){
var $,A=this;
if(A=C.N$_super.prototype.init.call(this)){
A.N$tcM=B._c.N$RCh.N$JCh("_s4m");
A.N$tcM&&A.N$tcM.N$KCh(A.N$Ypt);
A.N$v2T=($=new B._c.N$ejh())&&$.init();
A.N$v2T&&A.N$v2T.N$hCh("_o4m");
A.N$v2T&&A.N$v2T.N$Bjh("#0070FF");
A.N$v2T&&A.N$v2T.N$TUh(B._g.N$l(241,44),!0);
A.N$v2T&&A.N$v2T.N$OCh(A,"N$zfM");
A.N$v2T&&A.N$v2T.N$bjh(10);
A.N$v2T&&A.N$v2T.N$Ejh(15);
}
return A;
};
A.N$VCh=function(){
C.N$_super.prototype.N$VCh.call(this);
this.N$bCh(this.N$tcM);
this.N$bCh(this.N$v2T);
};
A.N$zfM=function(){
if(!this.N$SdM)return;
var $=this.N$v2T&&this.N$v2T.N$Vat(),A=this.N$SdM[$];
if(this.N$xdM!=A){
this.N$xdM=A;
this.N$WpM();
}
};
A.N$RrM=function($,A,B){
this.N$Ypt=$;
this.N$SdM=B;
this.N$xdM=A;
var C=B?B.indexOf(A):0,D=B?B.length:0;
this.N$v2T&&this.N$v2T.N$Mct(C);
this.N$v2T&&this.N$v2T.N$Pjh(D);
this.N$tcM&&this.N$tcM.N$KCh($);
};
return C;
});
}();
!function(){
"use strict";
B._registerClass("N$UrM","N$niM",function($,A){
function C(){
B._c.N$niM.call(this);
this.N$nqy=this.N$YpM=this.N$Ypt=this.N$tcM=null;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$Xat=function(){
return this.N$Ypt;
};
A.N$PrM=function($){
this.N$YpM=$;
};
A.N$VrM=function(){
return this.N$YpM;
};
$.N$WCh=function(){
return"_u4m";
};
A.init=function(){
var $,A=this;
if(A=C.N$_super.prototype.init.call(this)){
A.N$tcM=B._c.N$RCh.N$JCh("_a4m");
A.N$nqy=($=new B._c.N$NdM())&&$.init();
A.N$nqy&&A.N$nqy.N$hCh("_f4m");
A.N$nqy&&A.N$nqy.N$OCh(A,"N$CdM");
A.N$nqy&&A.N$nqy.N$TUh(B._g.N$l(50,30),!0);
}
return A;
};
A.N$VCh=function(){
C.N$_super.prototype.N$VCh.call(this);
this.N$bCh(this.N$tcM);
this.N$bCh(this.N$nqy);
};
A.N$CdM=function(){
this.N$WpM();
};
A.N$Plt=function($){
if(this.N$Ypt!=$){
this.N$Ypt=$;
this.N$tcM&&this.N$tcM.N$KCh($);
}
};
A.N$OgF=function($){
this.N$nqy&&this.N$nqy.N$OgF($);
};
A.N$CgF=function(){
return this.N$nqy&&this.N$nqy.N$CgF();
};
return C;
});
B._registerClass("N$NdM","N$QCh",function($,A){
function D(){
B._c.N$QCh.call(this);
this.N$kdM=this.N$LdM=this.N$AdM=null;
this.N$XDh=0;
this.N$hbF=!1;
this.constructor=D;
this.N$_id=++B._id;
}
A.N$CgF=function(){
return this.N$hbF;
};
A.N$XCh=function(){
var $=D.N$_super.prototype.N$XCh.call(this);
$.setAttribute("role","checkbox");
C.append($,[this.N$LdM=C.create("div",{
"class":"_l4m"
}),this.N$AdM=C.create("div",{
"class":"_c4m"
}),this.N$kdM=C.create("div",{
"class":"_h4m"
})]);
this.N$OdM(!1);
return $;
};
A.N$OdM=function($){
var A=this;
if(this.N$XDh){
C.stop(this.N$XDh);
this.N$XDh=0;
}
var B=24,D=4,E=this.N$hbF?D:B,F=this.N$hbF?B:D,G=this.N$hbF?0:1,H=this.N$hbF?1:0;
if($)this.N$XDh=C.animate($?200:0,function($){
$=C.ease($);
var B=C.lerp(E,F,$),D=C.lerp(G,H,$);
A.N$kdM&&(A.N$kdM.style.left=B+"px");
A.N$AdM&&(A.N$AdM.style.opacity=String(D));
});else{
A.N$kdM&&(A.N$kdM.style.left=F+"px");
A.N$AdM&&(A.N$AdM.style.opacity=String(H));
}
};
A.N$QAh=function(){
this.N$MdM(!this.N$hbF,!0);
D.N$_super.prototype.N$QAh.call(this);
};
A.N$MdM=function($,A){
if(this.N$hbF!=$){
this.N$hbF=$;
this.N$uOh(this.N$hbF?"true":"false","aria-checked");
this.N$OdM(A);
}
};
A.N$OgF=function($){
this.N$MdM($,!1);
};
return D;
});
}();
!function(){
"use strict";
B._registerClass("N$DdM",null,function($,A){
function C(){
this.N$PdM=this.N$HdM=this.N$Kdt=null;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$BdM=function($){
this.N$HdM=$;
};
A.N$jdM=function(){
return this.N$HdM;
};
A.N$FdM=function($){
this.N$PdM=$;
};
A.N$IdM=function(){
return this.N$PdM;
};
A.N$NOh=function($){
this.N$Kdt=$;
};
A.N$tvt=function(){
return this.N$Kdt;
};
return C;
});
B._registerClass("N$qdM",null,function($,A){
function C(){
this.N$rMh=null;
this.constructor=C;
this.N$_id=++B._id;
}
A.N$iMh=function($){
this.N$rMh=$;
};
A.N$VOh=function(){
return this.N$rMh;
};
return C;
});
B._registerClass("N$WnM","N$lPh",function(A,C){
function D(){
B._c.N$lPh.call(this);
this.N$RdM=this.N$UdM=this.N$zdM=this.N$WdM=this.N$XdM=this.N$VdM=this.N$Kft=null;
this.N$JdM=this.N$KdM=0;
this.constructor=D;
this.N$_id=++B._id;
}
C.N$XnM=function(){
return this.N$RdM;
};
A.N$WCh=function(){
return"_p4m";
};
C.init=function(){
var $=this;
($=D.N$_super.prototype.init.call(this))&&($.N$KdM=0);
return $;
};
C.N$XpM=function($){
var A;
this.N$VdM=$;
(A=this.N$rCh())&&A.N$trM(this,$);
};
C.N$VnM=function(){
this.N$KdM++;
this.N$XdM=[];
this.N$WdM=null;
this.N$zdM=null;
this.N$VdM&&(this.N$JdM=(this.N$VdM&&this.N$VdM.N$NCh()).offsetTop-this.N$UHh().y);
};
C.N$JnM=function(){
var A=this;
this.N$KdM--;
if(this.N$KdM)return;
this.N$gUh();
var C={},D=[];
$.each(this.N$XdM,function(E){
var F=E&&E.N$jdM(),G=E&&E.N$IdM();
if(F){
var H=B._c.N$RCh.N$JCh("_d4m");
H&&H.N$uFh(F);
A.N$bCh(H);
}
var I=B._c.N$RCh.N$JCh("_v4m");
A.N$bCh(I);
$.each(E&&E.N$tvt(),function(E){
var F=B._c.N$RCh.N$JCh("_m4m");
$.each(E&&E.N$VOh(),function($){
var B=$&&$.N$BpM();
C[B]=$;
D.push($);
$&&$.N$JpM(A);
F&&F.N$bCh($);
});
I&&I.N$bCh(F);
});
if(G){
var J=B._c.N$RCh.N$JCh("_g4m");
J&&J.N$uFh(G);
A.N$bCh(J);
}
});
A.N$UdM=C;
A.N$RdM=D;
A.N$Kft=A.N$XdM;
A.N$XdM=null;
A.N$WdM=null;
A.N$zdM=null;
if(A.N$VdM){
var E=A.N$UHh(),F=(A.N$VdM&&A.N$VdM.N$NCh()).offsetTop-E.y;
if(F!=A.N$JdM){
E.y+=F-A.N$JdM;
A.N$zHh(E);
}
}
};
C.N$QnM=function($,A){
var C,D=(C=new B._c.N$DdM())&&C.init(),E=[];
D&&D.N$BdM($);
D&&D.N$FdM(A);
D&&D.N$NOh(E);
this.N$XdM.push(D);
this.N$WdM=E;
};
C.N$OOh=function(){
var $,A=[],C=($=new B._c.N$qdM())&&$.init();
C&&C.N$iMh(A);
this.N$WdM.push(C);
this.N$zdM=A;
};
C.N$tMh=function($){
this.N$zdM.push($);
};
C.N$krM=function($,A){
var B,C=this.N$UdM?this.N$UdM[$]:null;
C&&C.isKindOfClass_(A)||(C=(B=A&&A.alloc())&&B.init());
return C;
};
return D;
});
}();
}).call(this);