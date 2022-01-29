/*! @license

(c) 2000-2021 musictheory.net, LLC. All rights reserved.

This file is licensed only for use in providing musictheory.net's
online services and is subject to the Source Code Policy stated
at https://www.musictheory.net/legal 

You may not port this file to another platform without
musictheory.net, LLC's written consent

Includes parts of:

- crypto-js <https://github.com/brix/crypto-js/>
  Copyright (c) 2009-2013 Jeff Mott
  Copyright (c) 2013-2016 Evan Vosberg
  MIT license, http://www.opensource.org/licenses/mit-license.php

*/
(function(){
var $=_musictheory_net_("_"),A=(_musictheory_net_("namespace"),_musictheory_net_("require")),B=_musictheory_net_("nilscript"),C=_musictheory_net_("N$$_");
!function(){
"use strict";
function $($){
var A=[[15,0],[25,1],[35,1],[45,0],[55,0],[65,1],[75,2],[65,4],[75,4],[15,4],[25,4],[35,4],[16,7],[26,7],[35,7],[46,7],[56,7],[16,8],[26,8],[35,8],[46,8],[56,8],[15,1],[25,2],[34,0],[45,1],[55,1],[55,0],[64,0],[74,0],[75,2],[74,4],[15,4],[25,4],[34,4],[45,4],[25,7],[35,7],[46,7],[55,7],[65,7],[25,8],[35,8],[46,8],[55,8],[65,8],[45,13],[64,9],[64,10],[64,11],[64,12],[34,3],[0,0],[0,0],[0,0],[26,7],[66,7],[35,0],[34,0],[34,1],[65,0],[64,0],[64,1],[34,1],[35,1],[35,0],[64,1],[65,1],[65,0],[15,5],[25,6],[35,6],[45,5],[55,4],[65,6],[75,8],[15,6],[25,8],[34,5],[34,16],[45,6],[55,6],[55,4],[64,5],[74,4],[75,7],[65,0],[75,0],[15,0],[25,0],[35,0],[74,0],[15,0],[25,0],[34,0],[45,0],[16,2],[26,2],[35,2],[46,2],[56,2],[25,2],[35,2],[46,2],[55,2],[65,2],[55,3],[55,15],[55,3],[55,15],[64,0]][$];
if(!A)return null;
return{
interval:A[0],
chord:A[1]
};
}
C._registerClass("N$q7",null,function(A,B){
function D(){
this.N$R7=this.N$U7=null;
this.N$rn=0;
this.constructor=D;
this.N$_id=++C._id;
}
B.N$z7=function(){
return this.N$U7;
};
B.N$W7=function(){
return this.N$R7;
};
B.N$Wn=function(){
return this.N$rn;
};
A.N$X7=function(A){
var B,D,E,F=$(A);
if(!F)return null;
var G=F.interval,H=F.chord;
if(G>=0&&H>=0){
var I=(B=new C._c.N$J7())&&B.N$V7(G),J=(D=new C._c.N$K7())&&D.N$V7(H);
return(E=this.alloc())&&E.N$Q7(A,I,J);
}
return null;
};
B.N$Q7=function($,A,B){
var C=this;
if(C=D.N$_super.prototype.init.call(this)){
C.N$rn=$;
C.N$U7=A;
C.N$R7=B;
}
return C;
};
return D;
});
}();
!function(){
"use strict";
C._registerClass("N$K7",null,function($,A){
function B(){
this.N$G7=null;
this.N$rn=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Y7=function(){
return this.N$G7;
};
A.N$Wn=function(){
return this.N$rn;
};
$.N$Z7=function($){
var A=$>=0&&3>=$;
if(A||10==$||13==$)return 3;
return 4;
};
$.N$e2=function($){
var A;
return(A=this.alloc())&&A.N$V7($);
};
A.N$t2=function($,A){
var C=this;
if(C=B.N$_super.prototype.init.call(this)){
C.N$rn=$;
C.N$G7=A.sort(function($,A){
return($&&$.N$qn())-(A&&A.N$qn());
});
}
return C;
};
A.N$V7=function($){
var A=this,B=[];
function D($,A){
var D,E=(D=new C._c.N$J7())&&D.N$n2($,A);
B.push(E);
}
switch($){
case 0:
D(0,3);
D(0,5);
break;

case 1:
D(-1,3);
D(0,5);
break;

case 2:
D(-1,3);
D(-2,5);
break;

case 3:
D(0,3);
D(1,5);
break;

case 4:
D(0,3);
D(0,5);
D(-1,7);
break;

case 5:
D(0,3);
D(0,5);
D(0,7);
break;

case 6:
D(-1,3);
D(0,5);
D(-1,7);
break;

case 7:
D(-1,3);
D(-2,5);
D(-2,7);
break;

case 8:
D(-1,3);
D(-2,5);
D(-1,7);
break;

case 9:
D(0,3);
D(0,5);
D(1,6);
break;

case 10:
D(0,3);
D(1,6);
break;

case 11:
D(0,3);
D(1,4);
D(1,6);
break;

case 12:
D(0,3);
D(2,4);
D(1,6);
break;

case 13:
D(-1,3);
D(-1,6);
break;

case 14:
D(-1,3);
D(0,5);
D(0,7);
break;

case 15:
D(0,3);
D(1,5);
D(-1,7);
break;

case 16:
D(0,3);
D(1,5);
D(0,7);
break;

case 17:
D(0,2);
D(0,5);
break;

case 18:
D(0,4);
D(0,5);
break;

case 19:
D(0,4);
D(0,5);
D(-1,7);
break;

case-1:
case 20:}
return A.N$t2($,B);
};
A.N$r2=function($){
return this.N$t2(-1,$);
};
A.copy=function(){
var $,A;
return-1==this.N$rn?($=new C._c.N$K7())&&$.N$r2(this.N$G7):(A=new C._c.N$K7())&&A.N$V7(this.N$rn);
};
A.isEqual_=function($){
if(!$||!$.isKindOfClass_(C._c.N$K7))return!1;
if(-1!=this.N$rn&&($&&$.N$Wn())==this.N$rn)return!0;
var A=this.N$G7.length,B=$&&$.N$Y7();
if(A==B.length){
for(var D=!0,E=0;A>E;E++){
var F=this.N$G7[E],G=B[E];
if(!F||!F.isEqual_(G)){
D=!1;
break;
}
}
return D;
}
return!1;
};
A.N$i2=function($){
var A=this.N$rn,B=$&&$.N$Wn();
if(A==B)return!0;
var C=!1;
function D($,D){
A==$&&B==D&&(C=!0);
A==D&&B==$&&(C=!0);
}
D(17,18);
return C;
};
A.N$kn=function($){
if(!$||!$.isKindOfClass_(C._c.N$K7))return!1;
if(-1!=this.N$rn&&($&&$.N$Wn())==this.N$rn)return!0;
var A=this.N$G7.length,B=$&&$.N$Y7();
if(A==B.length){
for(var D=!0,E=0;A>E;E++){
var F=this.N$G7[E],G=B[E];
if(!F||!F.N$kn(G)){
D=!1;
break;
}
}
return D;
}
return!1;
};
return B;
});
}();
!function(){
"use strict";
function A($,A,B){
var C;
if(A>=0&&A<$.length){
var D=$[A];
return(C=D)&&C.N$s2(B);
}
return 0;
}
C._registerClass("N$o2",null,function(B,D){
function E(){
this.N$u2=this.N$a2=null;
this.N$f2=this.N$l2=0;
this.N$c2=this.N$h2=!1;
this.constructor=E;
this.N$_id=++C._id;
}
D.N$p2=function(){
return this.N$f2;
};
D.N$d2=function(){
return this.N$a2;
};
D.N$v2=function(){
return this.N$u2;
};
D.N$m2=function(){
return this.N$h2;
};
D.N$g2=function(){
return this.N$c2;
};
D.N$y2=function(){
return this.N$l2;
};
B.N$b2=function(){
return[0,3,1,4,7,5,8,9,2];
};
B.N$w2=function($){
var A;
return(A=this.alloc())&&A.N$E2($);
};
D.N$E2=function($){
var A=this;
if(A=E.N$_super.prototype.init.call(this)){
A.N$f2=$;
A.N$S2($);
if(!A.N$a2){
A=null;
return null;
}
}
return A;
};
D.N$S2=function($){
var A,B=this;
function D($){
return 12*($+1);
}
function E($){
return 0+D($);
}
function F($){
return 2+D($);
}
function G($){
return 4+D($);
}
function H($){
return 7+D($);
}
function I($){
return 9+D($);
}
function J($){
return 11+D($);
}
function K($,A,B){
var D;
return(D=new C._c.N$T2())&&D.N$x2($,A,B,0);
}
function L($,A){
var B;
return(B=new C._c.N$C2())&&B.N$N2($,A);
}
if(0==$){
B.N$a2=[K(G(4),1,0),K(J(3),2,.1),K(H(3),3,.25),K(F(3),4,.5),K(I(2),5,.75),K(G(2),6,1)];
B.N$u2=[L(3,!1),L(5,!1),L(7,!1),L(9,!1),L(12,!0),L(15,!1),L(17,!1)];
}else if(1==$){
B.N$a2=[K(H(2),5,.4),K(F(2),6,.6),K(I(1),7,.8),K(G(1),8,1)];
B.N$u2=[L(3,!1),L(5,!1),L(7,!1),L(9,!1),L(12,!0),L(15,!1),L(17,!1)];
}else if(2==$){
B.N$a2=[K(G(5),1,0),K(I(4),1,0),K(F(4),2,.25),K(H(3),2,.5)];
B.N$u2=[L(3,!1),L(5,!1),L(7,!1),L(10,!1),L(12,!0),L(15,!1),L(17,!1)];
B.N$h2=!0;
}else if(3==$){
B.N$a2=[K(G(4),1,0),K(J(3),2,.1),K(H(3),3,.25),K(F(3),4,.5),K(I(2),5,.75),K(G(2),6,1),K(J(1),7,1)];
B.N$u2=[L(3,!1),L(5,!1),L(7,!1),L(9,!1),L(12,!0),L(15,!1),L(17,!1)];
}else if(4==$){
B.N$a2=[K(H(2),5,.4),K(F(2),6,.6),K(I(1),7,.8),K(G(1),8,1),K(J(0),9,1)];
B.N$u2=[L(3,!1),L(5,!1),L(7,!1),L(9,!1),L(12,!0),L(15,!1),L(17,!1)];
}else if(5==$){
B.N$a2=[K(H(4),2,.3),K(E(4),2,.2),K(G(4),1,.1),K(I(4),1,0)];
B.N$u2=[L(5,!1),L(7,!1),L(10,!1),L(12,!0),L(15,!1)];
}else if(7==$){
B.N$a2=[K(E(3),4,.2),K(H(2),5,.4),K(F(2),6,.6),K(I(1),7,.8),K(G(1),8,1),K(J(0),9,1)];
B.N$u2=[L(3,!1),L(5,!1),L(7,!1),L(9,!1),L(12,!0)];
}else if(8==$){
B.N$a2=[K(I(4),1,0),K(G(4),1,.1),K(E(4),2,.2),K(H(4),1,.3)];
B.N$u2=[L(5,!1),L(7,!1),L(10,!1),L(12,!0),L(15,!1)];
}else if(9==$){
B.N$a2=[K(F(4),1,0),K(J(3),2,.1),K(H(3),3,.25),K(F(3),4,.5),(A=new C._c.N$T2())&&A.N$x2(H(4),1,0,5)];
B.N$u2=[L(3,!1),L(5,!1),L(7,!1),L(10,!1),L(12,!0),L(15,!1),L(17,!1)];
B.N$c2=!0;
B.N$l2=4;
}
};
D.N$k2=function($){
return A(this.N$a2,$&&$.N$L2(),$&&$.N$A2());
};
D.N$O2=function($,B){
return A(this.N$a2,$,B);
};
D.N$M2=function($){
for(var A,B=0,C=Math.min(this.N$a2.length,$.length);C>B;B++)(A=this.N$a2[B])&&A.N$M2($[B]);
};
D.N$D2=function(){
return $.map(this.N$a2,function($){
return $&&$.N$D2();
});
};
D.N$P2=function($){
for(var A=0,B=Math.min(this.N$a2.length,$.length);B>A;A++){
var C=$[A],D=this.N$a2[A],E=C-(D&&D.N$H2());
D&&D.N$M2(E);
}
};
D.N$B2=function(){
return $.map(this.N$a2,function($){
return($&&$.N$H2())+($&&$.N$D2());
});
};
D.N$j2=function(A){
var B=this;
$.each(this.N$a2,function($){
$&&$.N$F2(!1);
});
$.each(A,function($){
var A;
(A=B.N$a2[$])&&A.N$F2(!0);
});
};
D.N$I2=function(){
var A=[],B=0;
$.each(this.N$a2,function($){
$&&$.N$q2()&&A.push(B);
B++;
});
return A;
};
D.N$R2=function($,A){
if(0>$||$>=this.N$a2.length)return!1;
var B=this.N$a2[$];
if(!B||!B.N$q2())return!1;
if(this.N$c2)return A>=(B&&B.N$U2());
return!0;
};
D.N$z2=function($){
return this.N$R2($&&$.N$L2(),$&&$.N$A2());
};
D.N$W2=function(A,B){
var D,E=this,F=(D=new C._c.N$V2())&&D.N$X2(B);
$.each(this.N$I2(),function(B){
var D=E.N$a2[B],G=D&&D.N$U2();
$.each(A,function($){
if($>=G){
var A=C._c.N$K2.N$J2(B,$),E=D&&D.N$s2($);
F&&F.N$Q2(A,E);
}
});
});
return F;
};
return E;
});
C._registerClass("N$T2",null,function($,A){
function B(){
this.N$G2=this.N$Y2=this.N$Z2=this.N$e9=this.N$t9=0;
this.N$n9=!1;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$M2=function($){
this.N$t9=$;
};
A.N$D2=function(){
return this.N$t9;
};
A.N$F2=function($){
this.N$n9=$;
};
A.N$q2=function(){
return this.N$n9;
};
A.N$H2=function(){
return this.N$Z2;
};
A.N$r9=function(){
return this.N$e9;
};
A.N$i9=function(){
return this.N$Y2;
};
A.N$U2=function(){
return this.N$G2;
};
A.N$x2=function($,A,C,D){
var E=this;
if(E=B.N$_super.prototype.init.call(this)){
E.N$Z2=$;
E.N$e9=A;
E.N$Y2=C;
E.N$G2=D;
E.N$n9=!0;
}
return E;
};
A.N$s2=function($){
return this.N$Z2+$-this.N$G2+this.N$t9;
};
A.N$s9=function(){
return this.N$Z2+this.N$t9;
};
return B;
});
C._registerClass("N$C2",null,function($,A){
function B(){
this.N$o9=0;
this.N$u9=!1;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$A2=function(){
return this.N$o9;
};
A.N$a9=function(){
return this.N$u9;
};
A.N$N2=function($,A){
var C=this;
if(C=B.N$_super.prototype.init.call(this)){
C.N$o9=$;
C.N$u9=A;
}
return C;
};
return B;
});
C._registerClass("N$K2",null,function(A,B){
function D(){
this.N$o9=this.N$f9=0;
this.constructor=D;
this.N$_id=++C._id;
}
B.N$L2=function(){
return this.N$f9;
};
B.N$A2=function(){
return this.N$o9;
};
A.N$l9=function(A){
return $.map(A,function($){
return C._c.N$K2.N$J2($[0],$[1]);
});
};
A.N$c9=function(A){
return $.map(A,function($){
return[$&&$.N$L2(),$&&$.N$A2()];
});
};
A.N$J2=function($,A){
var B;
return(B=this.alloc())&&B.N$h9($,A);
};
B.N$h9=function($,A){
var B=this;
if(B=D.N$_super.prototype.init.call(this)){
B.N$f9=$;
B.N$o9=A;
}
return B;
};
B.isEqual_=function($){
if(!$||!$.isKindOfClass_(C._c.N$K2))return!1;
return this.N$f9==($&&$.N$L2())&&this.N$o9==($&&$.N$A2());
};
B.N$p9=function($){
var A=$&&$.N$L2();
if(this.N$f9==A)return this.N$o9-($&&$.N$A2());
return this.N$f9-A;
};
return D;
});
C._registerClass("N$V2",null,function($,A){
function B(){
this.N$d9=this.N$v9=this.N$m9=null;
this.N$g9=!1;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$y9=function($){
this.N$m9=$;
};
A.N$b9=function(){
return this.N$m9;
};
A.N$w9=function(){
return this.N$g9;
};
A.N$X2=function($){
var A=this;
if(A=B.N$_super.prototype.init.call(this)){
A.N$d9={};
A.N$v9={};
A.N$m9=[];
A.N$g9=$;
}
return A;
};
A.N$Q2=function($,A){
this.N$g9||(A%=12);
var B=this.N$d9[A];
B||(B=this.N$d9[A]=[]);
B.push($);
if(!this.N$v9[A]){
this.N$v9[A]=A;
this.N$m9.push(A);
this.N$m9.sort();
}
};
A.N$E9=function($){
this.N$g9||($%=12);
return this.N$d9[$]||[];
};
return B;
});
}();
!function(){
"use strict";
function A($){
var A=$%7;
return 1==A||4==A||5==A;
}
C._registerClass("N$J7",null,function(B,D){
function E(){
this.N$S9=this.N$x9=this.N$Yt=this.N$pi=0;
this.constructor=E;
this.N$_id=++C._id;
}
D.N$en=function(){
return this.N$Yt;
};
D.N$vi=function(){
return this.N$pi;
};
D.N$In=function(){
return this.N$x9;
};
D.N$qn=function(){
return this.N$S9;
};
B.N$T9=function($){
return this.N$N9($+70);
};
B.N$C9=function($,A){
var B;
return(B=this.alloc())&&B.N$k9($,A);
};
B.N$N9=function($){
var A;
return(A=this.alloc())&&A.N$V7($);
};
B.N$L9=function($,A){
var B;
return(B=this.alloc())&&B.N$n2($,A);
};
D.N$k9=function($,B){
var C=(B&&B.N$Xn())-($&&$.N$Xn()),D=(B&&B.N$Vn())-($&&$.N$Vn());
if(0>D){
C=-C;
D=-D;
}
var E=12*Math.floor(D/7),F=[0,2,4,5,7,9,11][D%7],G=E+F,H=C-G,I=D+1;
-1>=H&&A(I)&&H--;
return this.N$n2(H,I);
};
D.N$V7=function($){
var B=Math.floor($/10),C=$%10-5;
A(B)&&0>C&&C--;
return this.N$n2(C,B);
};
D.N$n2=function($,B){
var C=this;
if(C=E.N$_super.prototype.init.call(this)){
C.N$Yt=$;
C.N$pi=B;
C.N$x9=B-1;
C.N$S9=0;
var D=[0,2,4,5,7,9,11];
C.N$S9+=D[C.N$x9%7];
C.N$S9+=12*Math.floor(C.N$x9/7);
C.N$S9+=$;
-2>=$&&A(B)&&C.N$S9++;
}
return C;
};
D.isEqual_=function($){
if(!$||!$.isKindOfClass_(C._c.N$J7))return!1;
return this.N$x9==($&&$.N$In())&&this.N$S9==($&&$.N$qn());
};
D.description=function(){
return"<"+this.className()+" "+this.N$A9()+">";
};
D.N$kn=function($){
if(!$||!$.isKindOfClass_(C._c.N$J7))return!1;
return this.N$S9==($&&$.N$qn());
};
D.N$O9=function(){
return $.includes([15,16,24,25,26,34,35,45,46,54,55,56,64,65,66,74,75,0],this.N$Wn());
};
D.N$A9=function(){
var $="";
if(A(this.N$pi)&&0==this.N$Yt)$+="P";else if(0==this.N$Yt)$+="M";else if(-1==this.N$Yt)$+="m";else if(this.N$Yt<=-2)for(var B=this.N$Yt;-2>=B;B++)$+="d";else if(this.N$Yt>=1)for(var C=1;C<=this.N$Yt;C++)$+="A";
$+=this.N$pi;
return $;
};
D.N$Wn=function(){
var $=10*this.N$pi+5+this.N$Yt;
A(this.N$pi)&&this.N$Yt<=-2&&$++;
return $;
};
return E;
});
}();
!function(){
"use strict";
var A=[3,0,4,1,5,2,6];
function B($){
var A=0==$||20==$,B=1==$||10==$||11==$||12==$||25==$;
if(A)return 0;
if(B)return 3;
if(21==$)return 2;
if(22==$)return 4;
if(23==$)return-1;
if(24==$)return 1;
if(26==$)return 5;
return 0;
}
function D(D,E){
var F,G=B(D);
if(!$.isNumber(G))return null;
var H=E+(G+1),I=A[C._g.N$e(H,7)],J=Math.floor(H/7);
return(F=C._c.N$Kt)&&F.N$fn(I,J);
}
function E(C,D,E){
var F=B(C);
if(!$.isNumber(F))return 0;
var G=A.indexOf(D)+7*E;
return G-(F+1);
}
C._registerClass("N$M9",null,function(A,B){
function F(){
this.N$D9=this.N$P9=null;
this.N$rn=0;
this.constructor=F;
this.N$_id=++C._id;
}
B.N$Wn=function(){
return this.N$rn;
};
A.N$H9=function($,A){
return D($,A);
};
A.N$B9=function($,A,B){
return C._c.N$Kt.N$dn(D($,A),B);
};
A.N$j9=function($,A){
return E($,A&&A.N$Zt(),A&&A.N$en());
};
A.N$F9=function($){
return this.N$I9($,0,!1);
};
A.N$I9=function($,A,B){
B&&(12==$||11==$)&&($=10);
return 12==$&&1==A?10:25==$?10:20==$?0:$;
};
A.N$q9=function($,A){
return this.N$R9($,A,0,!1);
};
A.N$R9=function($,A,B,C){
return this.N$I9($,B,C)==this.N$I9(A,B,C);
};
A.N$U9=function($){
if($>=0&&26>=$)return 6;
if(30==$)return 4;
if(31==$||32==$)return 5;
if(33==$)return 11;
return 0;
};
A.N$z9=function(A,B){
var D,E=(D=new C._c.N$M9())&&D.N$V7(A),F=C._c.N$Kt.N$hn(0);
return $.map(E&&E.N$W9(F,B),function($){
return $&&$.N$Ln();
});
};
B.N$V7=function($){
var A=this,B=void 0,C=void 0;
if(0==$||20==$)B=[25,35,45,55,65,75];else if(1==$||10==$||25==$)B=[25,34,45,55,64,74];else if(11==$)B=[25,34,45,55,64,75];else if(12==$){
B=[25,34,45,55,65,75];
C=[25,34,45,55,64,74];
}else 21==$?B=[25,34,45,55,65,74]:22==$?B=[24,34,45,55,64,74]:23==$?B=[25,35,46,55,65,75]:24==$?B=[25,35,45,55,65,74]:26==$?B=[24,34,45,54,64,74]:30==$?B=[25,35,55,65]:31==$?B=[34,45,46,55,74]:32==$?B=[25,35,46,56,66]:33==$&&(B=[24,25,34,35,45,54,55,64,65,74,75]);
if(!B)return null;
if(A=F.N$_super.prototype.init.call(this)){
A.N$rn=$;
A.N$D9=B;
A.N$P9=C;
}
return A;
};
B.N$W9=function(A,B){
var D=this,E=[],F=A&&A.N$Rn(1);
0==B||2==B?E.push(A):1==B&&E.push(F);
if(0==B||2==B){
$.each(this.N$D9,function($){
var B=C._c.N$J7.N$N9($);
E.push(A&&A.N$Pn(B,!0));
});
E.push(F);
}
if(1==B||2==B){
var G=D.N$P9||D.N$D9.slice(0);
G.reverse();
$.each(G,function($){
var B=C._c.N$J7.N$N9($);
E.push(A&&A.N$Pn(B,!0));
});
E.push(A);
}
return E;
};
B.N$X9=function($,A){
return C._c.N$M9.N$B9(this.N$rn,$,A);
};
B.N$V9=function($){
return E(this.N$rn,$&&$.N$Zt(),$&&$.N$en());
};
return F;
});
}();
!function(){
"use strict";
}();
!function(){
"use strict";
C._registerClass("N$J9",null,function(A,B){
function D(){
this.N$K9=this.N$Q9=0;
this.constructor=D;
this.N$_id=++C._id;
}
B.N$G9=function(){
return this.N$Q9;
};
B.N$Y9=function(){
return this.N$K9;
};
A.N$Z9=function(A,B){
return $.map(A,function($,A){
return C._c.N$J9.N$e8($,B[A]);
});
};
A.N$e8=function($,A){
var B;
return(B=new C._c.N$J9())&&B.N$t8($,A);
};
B.N$t8=function($,A){
var B=this;
if(B=D.N$_super.prototype.init.call(this)){
B.N$Q9=$;
B.N$K9=A;
}
return B;
};
return D;
});
}();
!function(){
"use strict";
var $=["{b}{b}{b}{b}","{b}{b}{b}","{bb}","{b}","{n}","{#}","{x}","{#}{#}{#}","{#}{#}{#}{#}"],A=["Quadruple Flat","Triple Flat","Double Flat","Flat","Natural","Sharp","Double Sharp","Triple Sharp","Quadruple Sharp"];
function B($,A){
return(A?A[$]:"")||"";
}
function D($,A){
return(A?A[$- -4]:"")||"";
}
function E($,A){
var B=[5,A?6:14,15,A?16:24,25,35,A?36:44,45,A?46:54,55,A?56:64,65];
return B[$%12];
}
function F($){
var A,E,F=(A=C._c.N$Kt)&&A.N$un($),G=(E=C._c.N$Kt)&&E.N$an($),H=B(F,["C","D","E","F","G","A","H"]);
if(64==$)return"B";
if(0==G)return H;
var I=D(G,["eseseses","eseses","eses","es","","is","isis","isisis","isisisis"]);
return-1>=G&&(2==F||5==F)?H+I.substr(1):H+I;
}
function G($){
var E,F,G=(E=C._c.N$Kt)&&E.N$un($),H=(F=C._c.N$Kt)&&F.N$an($),I=B(G,["C","D","E","F","G","A","B"]);
return 0==H?I:I+" "+D(H,A);
}
function H($){
var A,E,F=(A=C._c.N$Kt)&&A.N$un($),G=(E=C._c.N$Kt)&&E.N$an($),H=B(F,["C","D","E","F","G","A","_B"]),I=D(G,["bbbb","bbb","bb","b","","#","x","###","####"]);
return"{"+H+I+"}";
}
function I(A,E){
var F,G;
if(13==E){
if(6==A)return"Di";
if(14==A)return"Ra";
if(16==A)return"Ri";
if(24==A)return"Me";
if(36==A)return"Fi";
if(44==A)return"Se";
if(46==A)return"Si";
if(54==A)return"Le";
if(56==A)return"Li";
if(64==A)return"Te";
}
var H=3==E||4==E,I=3==E||1==E,J=(F=C._c.N$Kt)&&F.N$un(A),K=(G=C._c.N$Kt)&&G.N$an(A),L=B(J,[H?"Ut":"Do","Re","Mi","Fa","Sol","La",I?"Si":"Ti"]);
return 0==K?L:L+D(K,$);
}
function J($){
var E,F,G=(E=C._c.N$Kt)&&E.N$un($),H=(F=C._c.N$Kt)&&F.N$an($),I=B(G,["C","D","E","F","G","eh","B"]);
return 0==H?I.toLowerCase():I+" "+D(H,A);
}
function K($,E){
var F,G,H=3==E||4==E,I=3==E||1==E,J=(F=C._c.N$Kt)&&F.N$un($),K=(G=C._c.N$Kt)&&G.N$an($),L=B(J,[H?"Oot":"Doe","Ray","Mee","Fäh","Sol","La",I?"See":"Tea"]);
return 0==K?L:L+" "+D(K,A);
}
function L($,A){
var B;
return 14==A?F($):15==A?G($):(B=C._c.N$r8)&&B.N$n8(A)?I($,A):H($);
}
function M($,A){
var B;
return 14==A?F($):(B=C._c.N$r8)&&B.N$n8(A)?K($,A):J($);
}
function N($,A,B,D){
var F,G=E($,B),H=Math.floor($/12)-1,I=L(G,A);
D&&(I=(F=C._c.N$r8)&&F.N$n8(A)?I+"^"+(H-1)+"^":14==A?I+"^"+H+"^":I.replace("}",H+"}"));
return I;
}
function O($,A,B,D){
var F,G=E($,B),H=Math.floor($/12-1),I=M(G,A);
D&&(I=(F=C._c.N$r8)&&F.N$n8(A)?I+" "+(H-1):I+" "+H);
return I;
}
function P($,A,B){
var C="";
3==A||4==A||5==A?C=5==A?""+($+1):3==A?""+($-1):""+$:1==A&&(C=B[""+$]);
return C;
}
function Q($,A){
return P($,A,{
"1":"Contra",
"2":"Great",
"3":"Small",
"4":"One-line",
"5":"Two-line",
"6":"Three-line",
"7":"Four-line",
"8":"Five-line"
});
}
function R($){
switch($){
case 16:
return"A1";

case 15:
return"P1";

case 14:
return"d1";

case 26:
return"A2";

case 25:
return"M2";

case 24:
return"m2";

case 23:
return"d2";

case 36:
return"A3";

case 35:
return"M3";

case 34:
return"m3";

case 33:
return"d3";

case 46:
return"A4";

case 45:
return"P4";

case 44:
return"d4";

case 56:
return"A5";

case 55:
return"P5";

case 54:
return"d5";

case 66:
return"A6";

case 65:
return"M6";

case 64:
return"m6";

case 63:
return"d6";

case 76:
return"A7";

case 75:
return"M7";

case 74:
return"m7";

case 73:
return"d7";

case 86:
return"A8";

case 85:
return"P8";

case 84:
return"d8";

case 96:
return"A9";

case 95:
return"M9";

case 94:
return"m9";

case 93:
return"d9";

case 106:
return"A10";

case 105:
return"M10";

case 104:
return"m10";

case 103:
return"d10";

case 116:
return"A11";

case 115:
return"P11";

case 114:
return"d11";

case 126:
return"A12";

case 125:
return"P12";

case 124:
return"d12";

case 136:
return"A13";

case 135:
return"M13";

case 134:
return"m13";

case 133:
return"d13";

case 146:
return"A14";

case 145:
return"M14";

case 144:
return"m14";

case 143:
return"d14";

case 156:
return"A15";

case 155:
return"P15";

case 154:
return"d15";

case-1:
return"";
}
return"";
}
function S($){
switch($){
case 16:
return"Augmented 1st";

case 15:
return"Perfect 1st";

case 14:
return"Diminished 1st";

case 26:
return"Augmented 2nd";

case 25:
return"Major 2nd";

case 24:
return"Minor 2nd";

case 23:
return"Diminished 2nd";

case 36:
return"Augmented 3rd";

case 35:
return"Major 3rd";

case 34:
return"Minor 3rd";

case 33:
return"Diminished 3rd";

case 46:
return"Augmented 4th";

case 45:
return"Perfect 4th";

case 44:
return"Diminished 4th";

case 56:
return"Augmented 5th";

case 55:
return"Perfect 5th";

case 54:
return"Diminished 5th";

case 66:
return"Augmented 6th";

case 65:
return"Major 6th";

case 64:
return"Minor 6th";

case 63:
return"Diminished 6th";

case 76:
return"Augmented 7th";

case 75:
return"Major 7th";

case 74:
return"Minor 7th";

case 73:
return"Diminished 7th";

case 86:
return"Augmented 8th";

case 85:
return"Perfect 8th";

case 84:
return"Diminished 8th";

case 96:
return"Augmented 9th";

case 95:
return"Major 9th";

case 94:
return"Minor 9th";

case 93:
return"Diminished 9th";

case 106:
return"Augmented 10th";

case 105:
return"Major 10th";

case 104:
return"Minor 10th";

case 103:
return"Diminished 10th";

case 116:
return"Augmented 11th";

case 115:
return"Perfect 11th";

case 114:
return"Diminished 11th";

case 126:
return"Augmented 12th";

case 125:
return"Perfect 12th";

case 124:
return"Diminished 12th";

case 136:
return"Augmented 13th";

case 135:
return"Major 13th";

case 134:
return"Minor 13th";

case 133:
return"Diminished 13th";

case 146:
return"Augmented 14th";

case 145:
return"Major 14th";

case 144:
return"Minor 14th";

case 143:
return"Diminished 14th";

case 156:
return"Augmented 15th";

case 155:
return"Perfect 15th";

case 154:
return"Diminished 15th";

case-1:
return"";
}
return"";
}
function T($){
switch($){
case 16:
return"Augmented First";

case 15:
return"Perfect First";

case 14:
return"Diminished First";

case 26:
return"Augmented Second";

case 25:
return"Major Second";

case 24:
return"Minor Second";

case 23:
return"Diminished Second";

case 36:
return"Augmented Third";

case 35:
return"Major Third";

case 34:
return"Minor Third";

case 33:
return"Diminished Third";

case 46:
return"Augmented Fourth";

case 45:
return"Perfect Fourth";

case 44:
return"Diminished Fourth";

case 56:
return"Augmented Fifth";

case 55:
return"Perfect Fifth";

case 54:
return"Diminished Fifth";

case 66:
return"Augmented Sixth";

case 65:
return"Major Sixth";

case 64:
return"Minor Sixth";

case 63:
return"Diminished Sixth";

case 76:
return"Augmented Seventh";

case 75:
return"Major Seventh";

case 74:
return"Minor Seventh";

case 73:
return"Diminished Seventh";

case 86:
return"Augmented Eighth";

case 85:
return"Perfect Eighth";

case 84:
return"Diminished Eighth";

case 96:
return"Augmented Ninth";

case 95:
return"Major Ninth";

case 94:
return"Minor Ninth";

case 93:
return"Diminished Ninth";

case 106:
return"Augmented Tenth";

case 105:
return"Major Tenth";

case 104:
return"Minor Tenth";

case 103:
return"Diminished Tenth";

case 116:
return"Augmented Eleventh";

case 115:
return"Perfect Eleventh";

case 114:
return"Diminished Eleventh";

case 126:
return"Augmented Twelfth";

case 125:
return"Perfect Twelfth";

case 124:
return"Diminished Twelfth";

case 136:
return"Augmented Thirteenth";

case 135:
return"Major Thirteenth";

case 134:
return"Minor Thirteenth";

case 133:
return"Diminished Thirteenth";

case 146:
return"Augmented Fourteenth";

case 145:
return"Major Fourteenth";

case 144:
return"Minor Fourteenth";

case 143:
return"Diminished Fourteenth";

case 156:
return"Augmented Fifteenth";

case 155:
return"Perfect Fifteenth";

case 154:
return"Diminished Fifteenth";

case-1:
return"";
}
return"";
}
function U($,A,B){
var C=0;
switch($){
case 0:
C=15;
break;

case 1:
C=24;
break;

case 2:
C=25;
break;

case 3:
C=34;
break;

case 4:
C=35;
break;

case 5:
C=45;
break;

case 6:
C=54;
break;

case 7:
C=55;
break;

case 8:
C=64;
break;

case 9:
C=65;
break;

case 10:
C=74;
break;

case 11:
C=75;
break;

case 12:
C=85;
break;

case 13:
C=94;
break;

case 14:
C=95;
break;

case 15:
C=104;
break;

case 16:
C=105;
break;

case 17:
C=115;
break;

case 18:
C=124;
break;

case 19:
C=125;
break;

case 20:
C=134;
break;

case 21:
C=135;
break;

case 22:
C=144;
break;

case 23:
C=145;
break;

case 24:
C=155;
}
var D=A==R,E=A==T,F=0===$||6==$||12==$||24==$;
if(B&&D)return A(C);
if(B&&F){
if(0===$)return"Unison";
if(6==$)return E?"Tri-tone":"Tritone";
if(12==$)return"Octave";
if(24==$)return"Double Octave";
if(C)return A(C);
}else if(C)return A(C);
return"";
}
C._registerClass("N$i8",null,function(B){
function E(){
this.constructor=E;
this.N$_id=++C._id;
}
B.N$s8=function($,A){
switch($){
case 34:
return A?"Treble Clef":"Treble";

case 22:
return A?"Bass Clef":"Bass";

case 28:
return A?"Alto Clef":"Alto";

case 26:
return A?"Tenor Clef":"Tenor";

case 32:
return A?"Soprano Clef":"Soprano";

case 30:
return A?"Mezzo-soprano Clef":"Mezzo-soprano";

case 24:
return A?"Baritone Clef":"Baritone";

case 36:
return A?"French Violin Clef":"French Violin";

case 20:
return A?"Sub-bass Clef":"Sub-bass";

case-2:
return"Grand Staff";

case-1:
case 0:
return"";
}
return"";
};
B.N$o8=function($){
switch($){
case 7:
return"Seven Sharps";

case 6:
return"Six Sharps";

case 5:
return"Five Sharps";

case 4:
return"Four Sharps";

case 3:
return"Three Sharps";

case 2:
return"Two Sharps";

case 1:
return"One Sharp";

case 0:
return"No Key Signature";

case-1:
return"One Flat";

case-2:
return"Two Flats";

case-3:
return"Three Flats";

case-4:
return"Four Flats";

case-5:
return"Five Flats";

case-6:
return"Six Flats";

case-7:
return"Seven Flats";
}
return"";
};
B.N$u8=function($,A){
var B=8==A;
if(B&&$>9){
if(10==$)return"t";
if(11==$)return"e";
}
return""+$;
};
B.N$a8=function($,A){
return L($,A);
};
B.N$f8=function($,A){
return M($,A);
};
B.N$l8=function($,A){
var B=C._c.N$Kt.N$an($),D=this.N$a8($,0);
Math.abs(B)>=A&&(D=D.replace("{","{!"));
return D;
};
B.N$c8=function($,A){
var B=L($,A);
B=B.replace("_B","B");
B=B.replace("{b}","-b");
B=B.replace("{","");
B=B.replace("}","");
return B;
};
B.N$h8=function($,A,B,C){
var D=this.N$a8($,B),E=P(A,C,{
"0":"„",
"1":"‚",
"2":"",
"3":"",
"4":"′",
"5":"″",
"6":"‴",
"7":"⁗",
"8":"⁗′"
});
return 1==C?A>=3?D.toLowerCase()+E:D+E:B>=1&&4>=B?D+"^"+E+"^":D.replace("}",E+"}");
};
B.N$p8=function($,A,B,C){
var D=this.N$f8($,B),E=Q(A,C);
return 1==C?E+" "+D:D+" "+E;
};
B.N$d8=function($,A,B,D){
var E="B";
if(14==B){
B=0;
E="H";
}else 11==B||16==B||17==B||18==B?B=0:13==B&&(B=4);
if(B>=0&&4>=B){
var F=void 0;
F=D?[["C","D","E","F","G","eh",E],["Doe","Ray","Mee","Fäh","Sol","La","See"],["Doe","Ray","Mee","Fäh","Sol","La","Tea"],["Oot","Ray","Mee","Fäh","Sol","La","See"],["Oot","Ray","Mee","Fäh","Sol","La","Tea"]]:[["C","D","E","F","G","A",E],["Do","Re","Mi","Fa","Sol","La","Si"],["Do","Re","Mi","Fa","Sol","La","Ti"],["Ut","Re","Mi","Fa","Sol","La","Si"],["Ut","Re","Mi","Fa","Sol","La","Ti"]];
var G=C._c.N$Kt.N$on($,A);
return F[B][C._g.N$e(G,7)];
}
return null;
};
B.N$v8=function($,A){
var B=Q($,A);
return 1==A?B+" Octave":"Octave "+B;
};
B.N$m8=function($,A){
var B=null;
if(-2==A)if($>=0){
$-=6;
B="treble staff";
}else{
$+=6;
B="bass staff";
}
var D=C._g.N$e($,2)>0;
if($>=-4&&4>=$){
var E=Math.floor(($+4)/2)+1;
return(D?"space":"line")+" "+E+(B?" on "+B:"");
}
var F=Math.floor((Math.abs($)-5)/2)+1,G=0>$?"below":"above",H=void 0;
H=1==F?D?"space":"line":D?"spaces":"lines";
B||(B="staff");
return F+" "+H+" "+G+" "+B;
};
B.N$g8=function($,A){
return this.N$m8($&&$.N$rr(),A)+" to "+this.N$m8($&&$.N$nr(),A);
};
B.N$y8=function($,A,B){
var C=this.N$a8(A,B),D=this.N$b8($);
return C+" "+D;
};
B.N$w8=function($,A,B){
return 0==$?this.N$a8(A,B):1==$||10==$?this.N$a8(A,B).toLowerCase():this.N$y8($,A,B);
};
B.N$E8=function($,A,B){
var C=this.N$f8(A,B),D=this.N$b8($);
return C+" "+D;
};
B.N$S8=function($,A,B,C){
if(1==B)return N($,A,!0,C);
if(2==B)return N($,A,!1,C);
var D=N($,A,!0,C),E=N($,A,!1,C);
return D==E?D:D+" -- "+E;
};
B.N$x8=function($,A,B,C){
var D=this.N$S8($,A,B,C);
D=D.replace(/\{_B/g,"{B");
D=D.replace("{b}","-b");
D=D.replace(/[\{\}\^]/g,"");
D=D.replace(" -- "," - ");
return D;
};
B.N$T8=function($,A,B,C){
if(1==B)return O($,A,!0,C);
if(2==B)return O($,A,!1,C);
var D=O($,A,!0,C),E=O($,A,!1,C);
return D==E?D:D+" or "+E;
};
B.N$N8=function($){
switch($){
case 0:
return"C";

case 1:
return"D";

case 2:
return"E";

case 3:
return"F";

case 4:
return"G";

case 5:
return"A";

case 6:
return"B";

case 7:
return"";
}
return"";
};
B.N$C8=function(A){
return D(A,$);
};
B.N$k8=function($){
return D($,A);
};
B.N$L8=function($,A){
if(A)switch($){
case 15:
return"La";

case 16:
return"Li";

case 24:
return"Te";

case 25:
return"Ti";

case 34:
return"Do";

case 35:
return"Di";

case 45:
return"Re";

case 46:
return"Ri";

case 54:
return"Me";

case 55:
return"Mi";

case 64:
return"Fa";

case 65:
return"Fi";

case 74:
return"Sol";

case 75:
return"Si";

default:
return"";
}else switch($){
case 14:
return"De";

case 15:
return"Do";

case 16:
return"Di";

case 24:
return"Ra";

case 25:
return"Re";

case 26:
return"Ri";

case 34:
return"Me";

case 35:
return"Mi";

case 36:
return"Ma";

case 44:
return"Fe";

case 45:
return"Fa";

case 46:
return"Fi";

case 54:
return"Se";

case 55:
return"Sol";

case 56:
return"Si";

case 64:
return"Le";

case 65:
return"La";

case 66:
return"Li";

case 74:
return"Te";

case 75:
return"Ti";

case 76:
return"To";

default:
return"";
}
};
B.N$A8=function($){
switch($){
case 14:
return"De";

case 15:
return"Doe";

case 16:
return"Dee";

case 24:
return"Ra";

case 25:
return"Ray";

case 26:
return"Ree";

case 34:
return"May";

case 35:
return"Mee";

case 44:
return"Fay";

case 45:
return"Fa";

case 46:
return"Fee";

case 54:
return"Say";

case 55:
return"Sol";

case 56:
return"See";

case 64:
return"Lay";

case 65:
return"Lah";

case 66:
return"Lee";

case 74:
return"Tay";

case 75:
return"Tea";

default:
return"";
}
};
B.N$O8=function($){
return R($);
};
B.N$M8=function($){
return S($);
};
B.N$D8=function($){
return T($);
};
B.N$P8=function($,A){
switch($){
case 15:
return"1";

case 16:
return"#1";

case 24:
return"b2";

case 25:
return"2";

case 26:
return"#2";

case 45:
return"4";

case 46:
return"#4";

case 54:
return"b5";

case 55:
return"5";

case 56:
return"#5";
}
if(0==A)switch($){
case 34:
return"b3";

case 35:
return"3";

case 64:
return"b6";

case 65:
return"6";

case 66:
return"#6";

case 74:
return"b7";

case 75:
return"7";
}else switch($){
case 34:
return"3";

case 35:
return"#3";

case 64:
return"6";

case 65:
return"#6";

case 74:
return"7";

case 75:
return"#7";
}
return"";
};
B.N$H8=function($,A){
switch($){
case 15:
return"{^1}";

case 16:
return"{#^1}";

case 24:
return"{b^2}";

case 25:
return"{^2}";

case 26:
return"{#^2}";

case 45:
return"{^4}";

case 46:
return"{#^4}";

case 54:
return"{b^5}";

case 55:
return"{^5}";

case 56:
return"{#^5}";
}
if(0==A)switch($){
case 34:
return"{b^3}";

case 35:
return"{^3}";

case 64:
return"{b^6}";

case 65:
return"{^6}";

case 66:
return"{#^6}";

case 74:
return"{b^7}";

case 75:
return"{^7}";
}else switch($){
case 34:
return"{^3}";

case 35:
return"{#^3}";

case 64:
return"{^6}";

case 65:
return"{#^6}";

case 74:
return"{^7}";

case 75:
return"{#^7}";
}
return"";
};
B.N$B8=function($,A){
switch($){
case 15:
return"1";

case 16:
return"Sharp 1";

case 24:
return"Flat 2";

case 25:
return"2";

case 26:
return"Sharp 2";

case 45:
return"4";

case 46:
return"Sharp 4";

case 54:
return"Flat 5";

case 55:
return"5";

case 56:
return"Sharp 5";
}
if(0==A)switch($){
case 34:
return"Flat 3";

case 35:
return"3";

case 64:
return"Flat 6";

case 65:
return"6";

case 66:
return"Sharp 6";

case 74:
return"Flat 7";

case 75:
return"7";
}else switch($){
case 34:
return"3";

case 35:
return"Sharp 3";

case 64:
return"6";

case 65:
return"Sharp 6";

case 74:
return"7";

case 75:
return"Sharp 7";
}
return"";
};
B.N$j8=function($){
switch($){
case 1:
return"1st";

case 2:
return"2nd";

case 3:
return"3rd";

case 4:
return"4th";

case 5:
return"5th";

case 6:
return"6th";

case 7:
return"7th";

case 8:
return"8th";

case 9:
return"9th";

case 10:
return"10th";

case 11:
return"11th";

case 12:
return"12th";

case 13:
return"13th";

case 14:
return"14th";

case 15:
return"15th";
}
return"";
};
B.N$F8=function($){
switch($){
case 1:
return"First";

case 2:
return"Second";

case 3:
return"Third";

case 4:
return"Fourth";

case 5:
return"Fifth";

case 6:
return"Sixth";

case 7:
return"Seventh";

case 8:
return"Eighth";

case 9:
return"Ninth";

case 10:
return"Tenth";

case 11:
return"Eleventh";

case 12:
return"Twelfth";

case 13:
return"Thirteenth";

case 14:
return"Fourteenth";

case 15:
return"Fifteenth";
}
return"";
};
B.N$I8=function($){
return U($,R,!0);
};
B.N$q8=function($){
return U($,R,!1);
};
B.N$R8=function($){
return U($,S,!0);
};
B.N$U8=function($){
return U($,T,!0);
};
B.N$z8=function($){
switch($){
case 0:
return"Maj. Triad";

case 1:
return"Min. Triad";

case 2:
return"Dim. Triad";

case 3:
return"Aug. Triad";

case 4:
return"Dom. 7th";

case 5:
return"Maj. 7th";

case 6:
return"Min. 7th";

case 7:
return"Dim. 7th";

case 8:
return"Half-dim. 7th";

case 14:
return"Min-maj. 7th";

case 15:
return"Aug. 7th";

case 16:
return"Aug-maj. 7th";

case 17:
return"Sus. 2nd";

case 18:
return"Sus. 4th";

case 19:
return"Dom. 7th, Sus. 4th";

case-1:
case 9:
case 10:
case 11:
case 12:
case 13:
return"";
}
return"";
};
B.N$W8=function($){
switch($){
case 0:
return"Major Triad";

case 1:
return"Minor Triad";

case 2:
return"Diminished Triad";

case 3:
return"Augmented Triad";

case 4:
return"Dominant 7th";

case 5:
return"Major 7th";

case 6:
return"Minor 7th";

case 7:
return"Diminished 7th";

case 8:
return"Half-diminished 7th";

case 14:
return"Minor-major 7th";

case 15:
return"Augmented 7th";

case 16:
return"Augmented-major 7th";

case 17:
return"Suspended 2nd";

case 18:
return"Suspended 4th";

case 19:
return"Dominant 7th, Sus. 4th";

case-1:
case 9:
case 10:
case 11:
case 12:
case 13:
return"";
}
return"";
};
B.N$X8=function($){
switch($){
case 0:
return"Major Triad";

case 1:
return"Minor Triad";

case 2:
return"Diminished Triad";

case 3:
return"Augmented Triad";

case 4:
return"Dominant Seventh";

case 5:
return"Major Seventh";

case 6:
return"Minor Seventh";

case 7:
return"Diminished Seventh";

case 8:
return"Half-diminished Seventh";

case 14:
return"Minor-major Seventh";

case 15:
return"Augmented Seventh";

case 16:
return"Augmented-major Seventh";

case 17:
return"Suspended Second";

case 18:
return"Suspended Fourth";

case 19:
return"Dominant Seventh, Suspended Fourth";

case-1:
case 9:
case 10:
case 11:
case 12:
case 13:
return"";
}
return"";
};
B.N$V8=function($){
switch($){
case 0:
return"M";

case 1:
return"m";

case 2:
return"d";

case 3:
return"A";

case 4:
return"7";

case 5:
return"M7";

case 6:
return"m7";

case 7:
return"{o7}";

case 8:
return"{h7}";

case 14:
return"mM7";

case 15:
return"+7";

case 16:
return"+M7";

case 17:
return"sus2";

case 18:
return"sus4";

case 19:
return"7sus4";

case-1:
case 9:
case 10:
case 11:
case 12:
case 13:
return"";
}
return"";
};
B.N$J8=function($,A){
function B(){
switch(A){
case 0:
return"";

case 1:
return"m";

case 2:
return"^{o}^";

case 3:
return"+";

case 4:
return"7";

case 5:
return"M7";

case 6:
return"m7";

case 7:
return"^{o}^7";

case 8:
return"^{h}^7";

case 14:
return"m^M7^";

case 15:
return"+7";

case 16:
return"+M7";

case 17:
return"sus2";

case 18:
return"sus4";

case 19:
return"7sus4";

case-1:
case 9:
case 10:
case 11:
case 12:
case 13:
return"";
}
return"";
}
return H($)+B();
};
B.N$b8=function($){
switch($){
case 0:
return"Major";

case 1:
return"Minor";

case 10:
return"Natural Minor";

case 11:
return"Harmonic Minor";

case 12:
return"Melodic Minor";

case 20:
return"Ionian";

case 21:
return"Dorian";

case 22:
return"Phrygian";

case 23:
return"Lydian";

case 24:
return"Mixolydian";

case 25:
return"Aeolian";

case 26:
return"Locrian";

case 30:
return"Pentatonic";

case 31:
return"Blues";

case 32:
return"Whole Tone";

case 33:
return"Chromatic";
}
return"";
};
B.N$K8=function($){
return this.N$b8($);
};
B.N$Q8=function($){
switch($){
case 0:
return"{I}";

case 1:
return"{ii}";

case 2:
return"{iii}";

case 3:
return"{IV}";

case 4:
return"{V}";

case 5:
return"{vi}";

case 6:
return"{viio}";

case 7:
return"{V7}/{ii}";

case 8:
return"{V7}/{iii}";

case 9:
return"{V7}/{IV}";

case 10:
return"{V7}/{V}";

case 11:
return"{V7}/{vi}";

case 12:
return"{viio7}/{ii}";

case 13:
return"{viio7}/{iii}";

case 14:
return"{viio7}/{IV}";

case 15:
return"{viio7}/{V}";

case 16:
return"{viio7}/{vi}";

case 17:
return"{viih7}/{ii}";

case 18:
return"{viih7}/{iii}";

case 19:
return"{viih7}/{IV}";

case 20:
return"{viih7}/{V}";

case 21:
return"{viih7}/{vi}";

case 22:
return"{i}";

case 23:
return"{iio}";

case 24:
return"{III}";

case 25:
return"{iv}";

case 26:
return"{v}";

case 27:
return"{V}";

case 28:
return"{VI}";

case 29:
return"{VII}";

case 30:
return"{viio}";

case 31:
return"{V7}/{III}";

case 32:
return"{V7}/{iv}";

case 33:
return"{V7}/{V}";

case 34:
return"{V7}/{VI}";

case 35:
return"{V7}/{VII}";

case 36:
return"{viio7}/{III}";

case 37:
return"{viio7}/{iv}";

case 38:
return"{viio7}/{V}";

case 39:
return"{viio7}/{VI}";

case 40:
return"{viio7}/{VII}";

case 41:
return"{viih7}/{III}";

case 42:
return"{viih7}/{iv}";

case 43:
return"{viih7}/{V}";

case 44:
return"{viih7}/{VI}";

case 45:
return"{viih7}/{VII}";

case 46:
return"{N6}";

case 47:
return"{Gr6}";

case 48:
return"{It6}";

case 49:
return"{Fr6}";

case 50:
return"{Sw6}";

case 51:
return"{III+}";

case 55:
return"{#iio7}";

case 56:
return"{#vio7}";

case 57:
return"{III}";

case 58:
return"{bIII}";

case 59:
return"{biii}";

case 60:
return"{VI}";

case 61:
return"{bVI}";

case 62:
return"{bvi}";

case 63:
return"{iii}";

case 64:
return"{#iii}";

case 65:
return"{#III}";

case 66:
return"{vi}";

case 67:
return"{#vi}";

case 68:
return"{#VI}";

case 69:
return"{I7}";

case 70:
return"{ii7}";

case 71:
return"{iii7}";

case 72:
return"{IV7}";

case 73:
return"{V7}";

case 74:
return"{vi7}";

case 75:
return"{viih7}";

case 76:
return"{i7}";

case 77:
return"{iih7}";

case 78:
return"{III7}";

case 79:
return"{III+7}";

case 80:
return"{iv7}";

case 81:
return"{v7}";

case 82:
return"{V7}";

case 83:
return"{VI7}";

case 84:
return"{VII7}";

case 85:
return"{viio7}";

case 86:
return"{V}/{ii}";

case 87:
return"{V}/{iii}";

case 88:
return"{V}/{IV}";

case 89:
return"{V}/{V}";

case 90:
return"{V}/{vi}";

case 91:
return"{V}/{III}";

case 92:
return"{V}/{iv}";

case 93:
return"{V}/{V}";

case 94:
return"{V}/{VI}";

case 95:
return"{V}/{VII}";

case 96:
return"{viio}/{ii}";

case 97:
return"{viio}/{iii}";

case 98:
return"{viio}/{IV}";

case 99:
return"{viio}/{V}";

case 100:
return"{viio}/{vi}";

case 101:
return"{viio}/{III}";

case 102:
return"{viio}/{iv}";

case 103:
return"{viio}/{V}";

case 104:
return"{viio}/{VI}";

case 105:
return"{viio}/{VII}";

case 106:
return"{V+}";

case 107:
return"{V+7}";

case 108:
return"{V+}";

case 109:
return"{V+7}";

case 110:
return"{bVI}";

case-1:
return"";
}
return"";
};
return E;
});
}();
!function(){
"use strict";
C._registerClass("N$r8",null,function(A){
function B(){
this.constructor=B;
this.N$_id=++C._id;
}
A.N$G8=function($){
return 0==$||11==$||15==$||16==$||17==$||18==$||13==$||1==$||2==$||3==$||4==$||14==$;
};
A.N$n8=function($){
return 13==$||1==$||2==$||3==$||4==$;
};
A.N$Y8=function($){
return 7==$||8==$;
};
A.N$Z8=function($){
return 5==$||6==$||12==$||9==$||10==$;
};
A.N$e4=function($){
return 9==$||10==$;
};
A.N$t4=function($){
var A=5==$||9==$;
return A?0:1;
};
A.N$n4=function($,A,B){
var D=C._c.N$r8.N$t4(B),E=A&&A.N$Wn(),F=A&&A.N$tn(),G=C._c.N$M9.N$H9(D,$),H=F;
C._c.N$Kt.N$un(E)<C._c.N$Kt.N$un(G)&&H--;
return C._c.N$J7.N$C9(C._c.N$Kt.N$dn(G,H),A);
};
A.N$r4=function($,A){
if(!A)return 5==$||9==$?[15,25,35,45,55,65,75]:[15,25,34,45,55,64,74];
if(5==$||9==$)return[15,16,24,25,26,34,35,45,46,54,55,56,64,65,66,74,75];
if(6==$||10==$)return[15,16,24,25,26,34,35,45,46,54,55,56,64,65,74,75];
if(12==$)return[15,16,24,25,34,35,45,46,54,55,64,65,74,75];
return null;
};
A.N$i4=function(A,B,C){
var D=this.N$r4(B,C);
return $.includes(D,A);
};
A.N$s4=function($,A){
return $<C._c.N$K7.N$Z7(A);
};
return B;
});
C._g.N$j7=function($,A){
var B;
return $==A||(B=$)&&B.isEqual_(A);
};
}();
!function(){
"use strict";
function A($){
if(20==$)return"Quadruple Flat";
if(21==$)return"Triple Flat";
if(22==$)return"Double Flat";
if(23==$)return"Flat";
if(24==$)return"Natural";
if(25==$)return"Sharp";
if(26==$)return"Double Sharp";
if(27==$)return"Triple Sharp";
if(28==$)return"Quadruple Sharp";
return null;
}
C._registerClass("N$o4",null,function(B,D){
function E(){
this.N$u4=this.N$a4=this.N$f4=null;
this.N$l4=this.N$c4=this.N$h4=0;
this.constructor=E;
this.N$_id=++C._id;
}
D.N$p4=function($,A){
this.N$f4=[];
this.N$l4=$&&$.N$d4();
this.N$h4=$&&$.N$v4();
this.N$c4=$&&$.N$m4();
for(var B=0;A>B;B++)this.N$f4[B]={
cf:null,
cg:0,
kf:null,
n:{},
h:null
};
};
D.N$g4=function($,A,B,D){
var E=D&&D.N$y4(),F=D&&D.N$b4(),G=this.N$f4[A];
if(!G)return;
var H=$&&$.N$w4();
if(1==F){
G.cf=H;
G.cg=$&&$.N$E4();
}else if(2==F)G.kf=C._g.N$M(G.kf,H);else if(3==F||4==F){
var I=G.n[E];
I||(I=G.n[E]={});
var J=I[B];
J||(J=I[B]={
r:null,
a:0,
s:0
});
J.r=C._g.N$M(J.r,H);
3==F?J.a=$&&$.N$E4():J.s=$&&$.N$S4();
}
};
D.N$x4=function($,A){
this.N$a4={
r:$&&$.N$w4(),
s:"Highlighted Range, "+C._c.N$i8.N$g8(A,this.N$l4)
};
};
D.N$T4=function($,A,B,D){
var E=this.N$f4[A],F=E.h;
E.h||(F=E.h={
r:null,
s:{}
});
F.r=C._g.N$M(F.r,$&&$.N$w4());
F.s[B]=D;
};
D.N$N4=function($,A){
this.N$u4||(this.N$u4=[]);
this.N$u4.push({
r:$&&$.N$w4(),
s:A
});
};
D.N$C4=function(B){
var D=this,E=0;
function F(A){
return $.nsort($.map($.keys(A),function($){
return parseInt($,10);
}));
}
function G($,A,D,F,G){
var H,I=C._g.N$y($);
I.width<48&&(I.width=48);
I.height<48&&(I.height=48);
C._g.N$U(I,$);
B.push((H=new C._c.N$L4())&&H.N$k4(I,A,D,4,"AX,"+E++,0,F,G));
}
function H($,A){
G($,93,0,A,0);
}
for(var I,J=function(B,E,J){
B=E[J];
var K=B.cf;
if(K){
var L=D.N$l4;
-2==L&&(L=12==B.cg?34:22);
H(K,C._c.N$i8.N$s8(L,!0));
}
var M=B.kf;
if(M){
var N=C._c.N$i8.N$o8(D.N$h4)+" in Key Signature";
H(M,N);
}else{
var O="No Accidentals in Key Signature";
M=C._g.N$y(K);
C._g.N$bt(M,K);
H(M,O);
}
var P=(B.n,F(B.n));
$.each(P,function(E){
var I=B.n[E],J=F(I);
$.each(J,function($){
var B=I[$],E="Note",F=A(B.a),J=C._c.N$i8.N$m8($,0);
F&&(E=F+" "+E);
J&&(E+=" "+J);
3==D.N$c4||4==D.N$c4?G(B.r,94,B.s,E,$):1==D.N$c4||2==D.N$c4&&3==B.s?H(B.r,"Movable "+E):H(B.r,E);
});
});
if(B.h&&B.h.r){
var Q=["Helpers"];
$.each(F(B.h.s),function($){
Q.push(B.h.s[$]+" "+C._c.N$i8.N$m8($,0));
});
H(B.h.r,Q.join(", "));
}
I=B;
},K=D.N$f4,L=0,M=K?K.length:0;M>L;L++)J(I,K,L,M);
D.N$a4&&H(D.N$a4.r,D.N$a4.s);
for(var N,O=D.N$u4,P=0,Q=O?O.length:0;Q>P;P++){
N=O[P];
H(N.r,N.s);
}
};
return E;
});
}();
!function(){
"use strict";
function $($){
if(25==$)return 5;
return 0;
}
function A($,A){
if(-2==$)return 0==A?-6:6;
return 0;
}
C._registerClass("N$A4",null,function(B,D){
function E(){
this.N$O4=this.N$M4=this.N$D4=0;
this.constructor=E;
this.N$_id=++C._id;
}
D.N$P4=function($){
this.N$M4=$;
};
D.N$H4=function(){
return this.N$M4;
};
D.N$B4=function($){
this.N$D4=$;
};
D.N$j4=function(){
return this.N$D4;
};
D.N$F4=function($){
this.N$O4=$;
};
D.N$I4=function(){
return this.N$O4;
};
B.N$q4=function($){
var A=[0,0,0,0],B=$;
3==B?A=[0,0,.5,0]:12==B?A=[2.645,6.95,.615,0]:13==B?A=[2.85,3.2,.312,0]:14==B?A=[2.74,4,.5,1]:20==B?A=[2,2.016,.744,0]:21==B?A=[1.725,2.016,.744,0]:22==B?A=[1.579,2.688,.744,0]:23==B?A=[.855,2.688,.744,0]:24==B?A=[.666,2.755,.5,1]:25==B?A=[.828,3,.5,1]:26==B?A=[1,1,.5,1]:27==B?A=[1.9,3,.5,1]:28==B?A=[2,1,.5,1]:30==B?A=[1.6,1,.5,1]:31==B?A=[1.1353,1.013,.5,1]:32==B&&(A=[1.1353,1.013,.5,1]);
return{
widthInUnits:A[0],
heightInUnits:A[1],
centerInUnits:A[2],
centerOffset:A[3]
};
};
B.N$R4=function($,A,B){
var C=[-1,2,-2,1,-3,0,-4,-2,1,-3,0,-4,-1,-5,4,0,3,-1,2,-2,1,3,-1,2,-2,1,-3,0,2,-2,1,-3,0,-4,-1,1,4,0,3,-1,2,-2,0,3,-1,2,-2,1,-3],D=[3,0,4,1,-2,2,-1,2,-1,3,0,-3,1,-2,1,-2,2,-1,3,0,4,0,-3,1,-2,2,-1,3,-1,-4,0,-3,1,-2,2,-2,2,-1,3,0,4,1,4,1,5,2,-1,3,0],E=$%7*7;
return 0>A?C[E+B]:D[E+B];
};
B.N$U4=function($){
if(34==$||36==$)return 12;
if(22==$||24==$||20==$)return 13;
if(32==$||30==$||28==$||26==$)return 14;
return 0;
};
B.N$z4=function($,B,C){
if(-100==$)return-100;
return $+A(B,C);
};
B.N$W4=function($,B,C){
if(-100==$)return-100;
return $-A(B,C);
};
B.N$X4=function($){
if(34==$)return-2;
if(22==$)return 2;
if(28==$)return 0;
if(26==$)return 2;
if(32==$)return-4;
if(30==$)return-2;
if(24==$)return 0;
if(20==$)return 4;
if(36==$)return-4;
return 0;
};
D.N$V4=function($){
return this.N$D4+Math.round($*((this.N$O4-1)/-2));
};
D.N$J4=function($){
return Math.round(($-this.N$D4)/((this.N$O4-1)/-2));
};
D.N$K4=function($){
return Math.round((this.N$O4-1)*$);
};
D.N$Q4=function(A){
var B=C._c.N$A4.N$q4(A),D=Math.round((this.N$O4-1)*B.widthInUnits),E=$(A);
return E>D?E:D;
};
D.N$G4=function($){
var A=4*(this.N$O4-1);
return C._g.N$m(this.N$M4,this.N$D4-Math.round(A/2),$,A+1);
};
D.N$Y4=function($,A){
var B=4*(this.N$O4-1);
return C._g.N$m(this.N$M4,this.N$V4(A)-Math.round(B/2),$,B+1);
};
D.N$Z4=function(A,B,D){
var E=C._c.N$A4.N$q4(A),F=this.N$O4-1,G=F*E.heightInUnits,H=F*E.widthInUnits,I=G+E.centerOffset;
if(this.N$O4<10){
H=Math.ceil(H);
I=Math.ceil(I);
}else{
H=Math.round(H);
I=Math.round(I);
}
var J=$(A);
J>H&&(H=J);
return C._g.N$m(this.N$M4+B,this.N$V4(D)-Math.round(G*E.centerInUnits),H,I);
};
return E;
});
}();
!function(){
"use strict";
C._registerClass("N$eet",null,function($,A){
function B(){
this.N$tet=null;
this.N$net=this.N$ret=this.N$iet=this.N$set=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$oet=function(){
return this.N$tet;
};
A.N$b4=function(){
return this.N$set;
};
A.N$y4=function(){
return this.N$net;
};
$.N$uet=function($,A,B){
var C;
return(C=this.alloc())&&C.N$aet($,A,B);
};
A.N$aet=function($,A,C){
var D=this;
if(D=B.N$_super.prototype.init.call(this)){
D.N$tet=$;
D.N$set=A;
D.N$net=C;
}
return D;
};
A.N$fet=function($){
this.N$iet=$;
};
A.N$let=function(){
return this.N$iet;
};
A.N$cet=function($){
this.N$ret=$;
};
A.N$het=function(){
return this.N$ret;
};
A.N$pet=function($,A){
this.N$iet=$;
this.N$ret=A;
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$det",null,function($,A){
function B(){
this.N$vet=this.N$met=this.N$get=this.N$yet=null;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$bet=function(){
return this.N$met;
};
A.N$wet=function(){
return this.N$vet;
};
A.N$Eet=function(){
return this.N$yet;
};
A.N$Set=function($){
var A,D,E,F=this;
if(F=B.N$_super.prototype.init.call(this)){
F.N$met=$;
F.N$get=-2==($&&$.N$d4())?[(A=new C._c.N$Tet())&&A.N$xet(F.N$met,34,0),(D=new C._c.N$Tet())&&D.N$xet(F.N$met,22,1)]:[(E=new C._c.N$Tet())&&E.N$xet(F.N$met,F.N$met&&F.N$met.N$d4(),0)];
F.N$Net();
}
return F;
};
A.N$Cet=function($){
for(var A,B,D=(A=$[0])&&A.N$b4(),E=(B=$[0])&&B.N$y4(),F=0,G=$.length,H=0;G>H;H++){
var I=$[H];
F=Math.max(I&&I.N$ket(),F);
}
var J=[];
if(F)for(var K=0;F>K;K++){
for(var L=[],M=0;G>M;M++){
var N=$[M],O=K;
1==(N&&N.N$Let())&&(O=F-1-K);
Array.prototype.push.apply(L,N&&N.N$Aet(O));
}
J.push(C._c.N$eet.N$uet(L,D,E));
}else J.push(C._c.N$eet.N$uet([],D,E));
return J;
};
A.N$Net=function(){
for(var $,A=0,B=[],C=[],D=this.N$get,E=0,F=D?D.length:0;F>E;E++){
$=D[E];
var G=$&&$.N$Oet(),H=G.length;
H>A&&(A=H);
C.push(G);
}
for(var I=0;A>I;I++){
for(var J=[],K=0;K<C.length;K++){
var L=C[K];
L[I]&&J.push(L[I]);
}
Array.prototype.push.apply(B,this.N$Cet(J,I));
}
this.N$vet=B;
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$L4",null,function(A,B){
function D(){
this.N$Met=this.N$Det=this.N$Pet=null;
this.N$Het=this.N$Bet=this.N$jet=this.N$Fet=this.N$Iet=0;
this.constructor=D;
this.N$_id=++C._id;
}
B.N$w4=function(){
return this.N$Met;
};
B.N$E4=function(){
return this.N$jet;
};
B.N$S4=function(){
return this.N$Iet;
};
B.N$qet=function(){
return this.N$Fet;
};
B.N$Ret=function(){
return this.N$Det;
};
B.N$Uet=function(){
return this.N$Bet;
};
B.N$zet=function(){
return this.N$Pet;
};
B.N$Wet=function(){
return this.N$Het;
};
B.N$k4=function($,A,B,C,E,F,G,H){
var I=this;
if(I=D.N$_super.prototype.init.call(this)){
I.N$jet=A;
I.N$Det=E;
I.N$Bet=F;
I.N$Iet=B;
I.N$Fet=C;
I.N$Met=$;
I.N$Pet=G;
I.N$Het=H;
}
return I;
};
A.N$Xet=function($){
var A;
return(A=C._c.N$Mt.N$Bt($))&&A.N$Jt(function($){
var A,B=void 0,D=C._c.N$Mt.N$Bt($),E=D&&D.N$Ut(),F=D&&D.N$qt(),G=D&&D.N$qt(),H=D&&D.N$qt(),I=D&&D.N$zt(),J=D&&D.N$zt(),K=D&&D.N$qt(),L=D&&D.N$qt();
D&&D.N$Ht()&&(B=(A=new C._c.N$L4())&&A.N$k4(E,F,G,H,I,L,J,K));
return B;
});
};
A.N$Vet=function(A){
return $.map(A,function($){
return $&&$.N$ar();
});
};
B.N$ar=function(){
return[this.N$Met.x,this.N$Met.y,this.N$Met.width,this.N$Met.height,this.N$jet,this.N$Iet,this.N$Fet,this.N$Det,this.N$Pet,this.N$Het,this.N$Bet];
};
return D;
});
}();
!function(){
"use strict";
var A=9,B=33,D="M",E="S",F="H",G="L,K",H="L,C",I="L,G",J="TA",K="TW",L="LZ";
function M($){
return 3==$||4==$||92==$?0:80==$?1:2;
}
function N($,A){
var B,C,D,E,F,G,H=M((B=$)&&B.N$E4())-M((C=A)&&C.N$E4());
if(0!=H)return H;
var I=((D=$)&&D.N$S4())-((E=A)&&E.N$S4());
if(0!=I)return I;
var J=(F=$)&&F.N$w4(),K=(G=A)&&G.N$w4(),L=K.x-J.x;
if(0!=L)return L;
return 0;
}
C._registerClass("N$Jet",null,function(M,O){
function P(){
this.N$Ket=this.N$Qet=this.N$Get=this.N$Yet=this.N$Zet=this.N$met=this.N$ett=this.N$ttt=null;
this.N$ntt=this.N$rtt=this.N$itt=this.N$O4=this.N$ret=0;
this.constructor=P;
this.N$_id=++C._id;
}
O.N$stt=function($){
if($&&$.N$ott()||$&&$.N$utt())return!0;
for(var A,B=$&&$.N$att(),C=0,D=B?B.length:0;D>C;C++){
A=B[C];
if(A&&A.N$ftt())return!0;
}
return!1;
};
O.N$ltt=function(){
var $=this.N$met&&this.N$met.N$ctt(),A=.5;
if(0!=$){
var B=Math.abs(this.N$met&&this.N$met.N$v4());
B>=7?A=.4:B>=6&&(A=.45);
}
return Math.round(this.N$O4*A);
};
O.N$htt=function(A){
var B=this,C=0,D=0,E=0,F=0,G=[],H=[],I=!1,J=Math.round(.25*this.N$O4),K=Math.round(.5*this.N$O4),L=Math.round(.9*(this.N$Ket&&this.N$Ket.N$Q4(30))),M=Math.round(.8*(this.N$Ket&&this.N$Ket.N$Q4(22))),N=Math.round(.9*(this.N$Ket&&this.N$Ket.N$Q4(26))),O=this.N$Ket&&this.N$Ket.N$Q4(25),P=0,Q=$.map(A,function($){
var A,Q=$&&$.N$b4(),R={
x:0,
w:0
},S=(A=($&&$.N$oet())[0])&&A.N$E4();
if(1==Q){
R.w=B.N$Ket&&B.N$Ket.N$Q4(S);
P+=R.w+K;
}else if(2==Q){
if(S){
I=!0;
R.x=P;
if(22==S){
R.w=M;
P+=R.w+1;
}else if(26==S){
R.w=N;
R.x-=Math.round((R.w-O)/2);
P+=O+J;
}else{
R.w=O;
P+=R.w+J;
}
}
}else if(3==Q){
G.push(R);
if(S){
R.w=22==S?M:26==S?N:O;
D+=R.w;
F++;
}
}else if(4==Q){
H.push(R);
R.w=L;
C+=L;
E++;
}
return R;
});
P+=G[0].w?4*J:3*J;
if(!I){
D=0;
F=0;
}
var R=B.N$ret-(P+K+C+D),S=R/(3*(E-1)+F),T=0;
function U($){
var A=S*$,B=Math.round(A+T);
T+=A-B;
return B;
}
for(var V=0;V<H.length;V++){
var W=G[V],X=H[V];
if(W.w)if(I){
W.x=P;
P+=W.w+U(1);
}else{
W.x=P-W.w;
X.x+=J;
}
X.x+=P;
P+=X.w+U(3);
}
return Q;
};
O.N$ptt=function(A){
var B=this,C=this.N$ltt(),D=0,E=this.N$ret-this.N$rtt,F=[],G=[],H=$.map(A,function($){
var A,E=$&&$.N$b4(),H=(A=($&&$.N$oet())[0])&&A.N$E4(),I=B.N$Ket&&B.N$Ket.N$Q4(H),J={
x:D,
w:I
};
1==E?D+=I+2*C:2==E?D+=I+C:3==E?F.push(J):4==E&&G.push(J);
return J;
});
D-=C;
for(var I=1.25,J=(E-D)/(2*I+(G.length-1)),K=0;K<G.length;K++){
var L=F[K],M=G[K];
if(!L||!M)continue;
var N=D+J*(I+K);
M.x=Math.round(N-M.w/2);
L.x=M.x-(L.w+C);
}
return H;
};
O.N$dtt=function(A){
var B=this,C=[];
function D(A){
var B=$.first(A&&A.N$oet());
return B&&B.N$G9();
}
function E(){
for(var $,E=0,F=void 0,G=void 0,H=2,I=B.N$ltt(),J=0,K=A?A.length:0;K>J;J++){
$=A[J];
for(var L,M=$&&$.N$b4(),N=0,O=$&&$.N$oet(),P=0,Q=O?O.length:0;Q>P;P++){
L=O[P];
var R=B.N$Ket&&B.N$Ket.N$Q4(L&&L.N$E4());
R>N&&(N=R);
}
var S={
x:0,
c:$,
w:N,
lPad:0,
lFlex:0,
rPad:0,
rFlex:0
};
if(1==M)S.rPad=2*I;else if(2==M)S.rPad=I;else if(4==M){
S.rPad=2*B.N$O4;
S.rFlex=1;
if(4==E)if(D(F.c)==D($)){
F.rPad=0;
F.rFlex=0;
}else{
F.rPad=Math.round(-.176777*B.N$O4);
F.rFlex=0;
}
G=S;
}else if(3==M){
if(2==E){
S.lPad=2*B.N$O4;
S.lFlex=H;
}
S.rPad=S.w>0?I:0;
}
2==E&&2!=M&&(F.rPad=0);
1==E&&0==S.w&&(F.rPad=0);
C.push(S);
F=S;
E=M;
}
G.rFlex=H;
}
var F=0,G=0,H=0,I=0;
function J(){
for(var $,A=0,B=C?C.length:0;B>A;A++){
$=C[A];
var D=$.lPad,E=$.rPad;
F+=D+E;
$.lFlex?I+=$.lFlex:G+=D;
$.rFlex?I+=$.rFlex:G+=E;
H+=$.w;
}
}
function K(){
var $=H+F-(B.N$ret-B.N$rtt),A=0,D=0;
function E(B){
if(!B)return 0;
var C=$*(B/F),E=Math.floor(C+A);
A=C-E;
D+=E;
return B-E;
}
for(var G,I=0,J=C?C.length:0;J>I;I++){
G=C[I];
G.lPad=E(G.lPad);
G.rPad=E(G.rPad);
}
}
function L(){
var $=B.N$ret-B.N$rtt-(H+G),A=$/I,D=0;
function E($){
var B=A*$,C=Math.floor(B+D);
D=B-C;
return C;
}
for(var F,J=0,K=C?C.length:0;K>J;J++){
F=C[J];
if(F.lFlex){
F.lPad=E(F.lFlex);
F.lFlex=0;
}
if(F.rFlex){
F.rPad=E(F.rFlex);
F.rFlex=0;
}
}
}
function M(){
for(var $,A=0,B=0,D=C?C.length:0;D>B;B++){
$=C[B];
A+=$.lPad;
$.x=A;
A+=$.w+$.rPad;
}
}
E();
J();
H+F>=B.N$ret?K():L();
M();
return C;
};
O.N$vtt=function($){
for(var A,B=0,C=1/0,D=1/0,E=0,F=[],G=0,H=$?$.length:0;H>G;G++){
A=$[G];
var I=A.c,J=I&&I.N$b4();
if(2==J||1==J)B=Math.max(B,A.x+A.w);else if(3==J){
C=Math.min(C,A.x);
F.push(A);
}else if(4==J){
D=Math.min(D,A.x);
E=Math.max(E,A.x+A.w);
F.push(A);
}
}
var K=D+Math.round((E-D)/2),L=B+Math.round(this.N$ret-this.N$rtt-B)/2,M=K-L,N=Math.min(C,D)-B-this.N$O4;
M>N&&(M=N);
for(var O,P=0,Q=F?F.length:0;Q>P;P++){
O=F[P];
O.x-=M;
}
};
O.N$mtt=function($){
var A;
if(!$)return;
var B=this.N$met&&this.N$met.N$ctt(),C=null;
if(1==B)C=this.N$htt($);else if(3==B)C=this.N$ptt($);else if(2==B){
C=this.N$dtt($);
this.N$vtt(C);
}else C=this.N$dtt($);
for(var D=0;D<C.length;D++){
var E=C[D];
(A=$[D])&&A.N$pet(E.x,E.w);
}
};
O.N$gtt=function(){
for(var $,A=0;A<this.N$ett.length;A++){
this.N$Ket&&this.N$Ket.N$B4(this.N$ttt[A]);
var B=($=new C._c.N$L4())&&$.N$k4(this.N$Ket&&this.N$Ket.N$G4(this.N$ret),3,0,1,E+","+A,0,null,0);
this.N$Yet.push(B);
}
};
O.N$ytt=function(A){
var B=this,E=(Math.round(.5*this.N$O4),void 0),F=void 0;
if(1==(this.N$met&&this.N$met.N$ctt())){
E=Math.round(.9*(this.N$Ket&&this.N$Ket.N$Q4(30)));
F=Math.round(1.5*E);
}else{
E=this.N$Ket&&this.N$Ket.N$Q4(30);
F=Math.round(1.6*E);
}
Math.floor(F)%2!=Math.floor(E)%2&&(F+=1);
for(var G,H=(4&(this.N$met&&this.N$met.N$qet()))>0,I={},J=function(J,K){
J=A[K];
var L=J&&J.N$let(),M=J&&J.N$het();
$.each(J&&J.N$oet(),function($){
var A,G=$&&$.N$btt();
B.N$Ket&&B.N$Ket.N$B4(B.N$ttt[G]);
var K=J&&J.N$b4(),N=$&&$.N$E4(),O=$&&$.N$G9(),P=4==N,Q=void 0;
if(P){
var R=L-(F-E)/2;
Q=C._g.N$m(R,B.N$Ket&&B.N$Ket.N$V4(O),F,1);
}else{
Q=B.N$Ket&&B.N$Ket.N$Z4(N,L,$&&$.N$G9());
Q.width>M&&(Q.width=M);
Q.x+=Math.round((M-Q.width)/2);
}
var S=D+(J&&J.N$y4())+","+K+","+G+","+N+","+O,T=I[S]||0;
T++;
I[S]=T;
S+=","+T;
var U=0;
1==K?U|=1:H&&2==K?U|=2:P||4!=K&&3!=K||(U|=2);
var V=0;
30==N&&(V=C._c.N$A4.N$W4(O,B.N$met&&B.N$met.N$d4(),G));
var W=(A=new C._c.N$L4())&&A.N$k4(Q,N,$&&$.N$S4(),U,S,J&&J.N$y4(),null,V);
P||B.N$Qet&&B.N$Qet.N$g4(W,G,O,J);
4!=K&&3!=K||P?(1==K||2==K)&&(B.N$Get=C._g.N$M(B.N$Get,Q)):B.N$Zet=C._g.N$M(B.N$Zet,Q);
B.N$Yet.push(W);
});
G=J;
},K=0,L=A?A.length:0;L>K;K++)J(G,K,L);
};
O.N$wtt=function(){
var $=this,A=this.N$met&&this.N$met.N$Ett(),B=A&&A.N$Stt(),D=A&&A.N$xtt(),E=!D||1==D,G=!D||2==D,H=this.N$Ket&&this.N$Ket.N$G4(this.N$ret),I=C._g.N$L(H),J=this.N$Ket&&this.N$Ket.N$I4(),K=Math.round(this.N$Ket&&this.N$Ket.N$K4(.75));
C._g.N$e(K,2)==C._g.N$e(J,2)&&K++;
C._c.N$r8.N$n8(B)&&this.N$rtt<24&&K>13&&(K=13);
function L(A,B,D,E,G){
var H,I=$.N$Ket&&$.N$Ket.N$V4(B),J=F+",91,"+D+","+B,L=(H=new C._c.N$L4())&&H.N$k4(C._g.N$m(A,I,0,0),91,0,0,J,0,G,K);
E&&$.N$Qet&&$.N$Qet.N$T4(L,D,B,E);
$.N$Yet.push(L);
}
function M(A,B){
var D,E=I-$.N$rtt,G=$.N$Ket&&$.N$Ket.N$V4(A),H=F+",92,"+B+","+A,J=(D=new C._c.N$L4())&&D.N$k4(C._g.N$m(E,G,$.N$rtt,1),92,0,0,H,0,null,0);
$.N$Yet.push(J);
}
function N(){
for(var A=Math.floor($.N$rtt/2),D=I-A,F=I+A,H=0;H<$.N$ett.length;H++){
$.N$Ket&&$.N$Ket.N$B4($.N$ttt[H]);
for(var J=!0,K=-4;4>=K;K++){
J=!J;
if(J&&!G)continue;
if(!J&&!E)continue;
var M=C._c.N$i8.N$d8($.N$ett[H],K,B,!1),N=C._c.N$i8.N$d8($.N$ett[H],K,B,!0);
L(J?D:F,K,H,N,M);
}
}
}
function O(){
var A=void 0,D=void 0;
if(9==B||10==B)A=D="1";else if(12==B)A=D="La";else{
A="Do";
D="Doe";
}
for(var E=$.N$met&&$.N$met.N$v4(),F=C._c.N$r8.N$t4(B),G=C._c.N$M9.N$B9(F,E,4),H=0;H<$.N$ett.length;H++){
var I=$.N$ett[H];
$.N$Ket&&$.N$Ket.N$B4($.N$ttt[H]);
var J=C._g.N$e(G&&G.N$An($.N$ett[H]),7),K=$.N$Ket&&$.N$Ket.N$G4($.N$ret),N=C._g.N$L(K),O=-4,P=4;
34==I&&(O=-6);
22==I&&(P=H>0?5:6);
34==I&&2==J&&M(-6,H);
22==I&&5==J&&M(6,H);
for(var Q=O;P>=Q;Q++){
var R=C._g.N$e(Q,7);
if(R==J){
0==C._g.N$e(Q,2)&&M(Q,H);
L(N-$.N$rtt/2,Q,H,D,A);
}
}
}
}
C._c.N$r8.N$Z8(A&&A.N$Stt())?O():N();
};
O.N$Ttt=function(){
var $,A,B=this,D=C._g.N$y(this.N$Zet);
if(!D)return;
function E($){
var A,D=B.N$Ket&&B.N$Ket.N$Z4(82,0,$),E=(A=new C._c.N$L4())&&A.N$k4(D,82,0,4,K+","+$,0,null,$);
B.N$Yet.push(E);
}
var F=B.N$met&&B.N$met.N$Ntt(),G=-2==(B.N$met&&B.N$met.N$d4()),H=G?-12:-6,I=G?12:6;
H=Math.min(F&&F.N$rr(),H);
I=Math.max(F&&F.N$nr(),I);
B.N$Ket&&B.N$Ket.N$B4(B.N$itt);
E(H);
E(I);
var L=B.N$met&&B.N$met.N$m4(),M=($=C._c.N$ktt.N$Si())&&$.N$Ctt(),N=!1,O=!1;
if(4==L){
O=!0;
N=!0;
}else(1==L||2==L)&&(O=!M);
if(N){
D.x=C._g.N$L(B.N$Get);
D.width=B.N$ret-B.N$rtt-D.x;
}
if(O){
D.y=B.N$Ket&&B.N$Ket.N$V4(I);
D.height=(B.N$Ket&&B.N$Ket.N$V4(H))-D.y;
}
if(D){
var P=B.N$Ket&&B.N$Ket.N$I4();
D=C._g.N$E(D,-P,-P);
if(D.width<64){
D.x+=Math.round((D.width-64)/2);
D.width=64;
}
if(D.height<64){
D.y+=Math.round((D.height-64)/2);
D.height=64;
}
var Q=0;
4==(B.N$met&&B.N$met.N$m4())&&(Q=1);
var R=(A=new C._c.N$L4())&&A.N$k4(D,81,0,4,J,0,null,Q);
B.N$Yet.push(R);
}
};
O.N$Ltt=function(A){
var B=this,D=this.N$met,E=!1,F=this.N$ret-this.N$rtt,J=F,K=0,M=0,N=0,O=[],P=[],Q=100,R=this.N$ett.length-1,S=Math.round(C._g.N$i(this.N$Ket&&this.N$Ket.N$I4(),[13,13,24,30]));
function T(){
for(var $,C=0,D=A?A.length:0;D>C;C++){
$=A[C];
var G=$&&$.N$b4(),H=$&&$.N$y4(),I=$&&$.N$let(),L=I+($&&$.N$het());
if(1==G)M=L;else if(2==G){
J>I&&(J=I);
L>K&&(K=L);
E=!0;
}else if(4==G){
var N=O[H]||B.N$ret,S=P[H]||0;
O[H]=N>I?I:N;
P[H]=L>S?L:S;
for(var T,U=$&&$.N$oet(),V=0,W=U?U.length:0;W>V;V++){
T=U[V];
var X=T&&T.N$btt();
if(X==R){
var Y=T&&T.N$G9();
Q>Y&&(Q=Y);
}
}
}
}
if(1==O.length){
var Z=Math.round(Math.min(O[0]-K,F-P[0]));
O[0]-=Z;
P[0]+=Z;
}
}
function U(){
for(var $,A=B.N$Yet,D=0,E=A?A.length:0;E>D;D++){
$=A[D];
var F=$&&$.N$E4();
(3==F||30==F)&&(N=Math.max(C._g.N$A($&&$.N$w4()),N));
}
}
function V($,A,D,E){
var F,G=Math.min(B.N$Ket&&B.N$Ket.N$V4(Math.min(-9,Q-4)),N+Math.round((B.N$ntt-N)/2)),H=(F=new C._c.N$L4())&&F.N$k4(C._g.N$m(A,G,D-A,0),90,0,0,$,0,E&&E.N$Att(),S);
B.N$Qet&&B.N$Qet.N$N4(H,E&&E.N$Ott());
B.N$Yet.push(H);
}
function W(){
var $=D&&D.N$ott();
if(!$)return;
var A=J,C=K;
if(!E){
A=M+B.N$O4/2;
C=M+B.N$O4;
}
V(G,A,C,$);
}
function X(){
var $=B.N$met&&B.N$met.N$utt();
if(!$)return;
if(1&(D&&D.N$qet()))V(H,0,B.N$ret,$);else{
var A=Math.max(M,K);
V(H,A,B.N$ret,$);
}
}
function Y(){
for(var $,A=0,C=B.N$met&&B.N$met.N$att(),D=0,E=C?C.length:0;E>D;D++){
$=C[D];
var F=$&&$.N$ftt();
if(F){
var G=I+","+A;
V(G,O[A],P[A],F);
}
A++;
}
}
function Z(){
var $,A=D&&D.N$Mtt();
if(!A)return;
var F=B.N$Ket&&B.N$Ket.N$V4((A&&A.N$nr())+1),G=(B.N$Ket&&B.N$Ket.N$V4((A&&A.N$rr())-1))+1,H=E?K:M,I=C._g.N$m(H,F,B.N$ret-B.N$rtt-H,G-F),J=C._g.N$y(I);
J.width=8*Math.round(B.N$O4);
C._g.N$U(J,I);
var N=($=new C._c.N$L4())&&$.N$k4(J,80,0,0,L,0,null,0);
B.N$Qet&&B.N$Qet.N$x4(N,A);
B.N$Yet.unshift(N);
}
B.N$Ket&&B.N$Ket.N$B4($.last(B.N$ttt));
T();
U();
W();
X();
Y();
B.N$Ket&&B.N$Ket.N$B4(B.N$itt);
Z();
};
O.N$Dtt=function($,D,E,F,G){
var H,I=B,J=Math.round(E/2),K=(H=new C._c.N$A4())&&H.init();
K&&K.N$B4(J);
if(G&&E>=1){
var L=void 0,M=0,N=6,O=-6;
if(-2==$){
L=12;
M=4;
N=10;
O=-10;
}else{
L=C._c.N$A4.N$U4($);
M=C._c.N$A4.N$X4($);
}
for(var P=Math.max(G&&G.N$nr(),N),Q=Math.min(G&&G.N$rr(),O),R=1,S=E-1;I>=A;){
K&&K.N$F4(I);
var T=K&&K.N$Z4(23,0,P),U=K&&K.N$Z4(25,0,Q),V=K&&K.N$Z4(L,0,M),W=C._g.N$N(T)>=R,X=C._g.N$A(U)<=S,Y=C._g.N$N(V)>=R&&C._g.N$A(V)<=S;
if(W&&X&&Y)break;
I-=2;
}
}
if(F&&E>=1)for(var Z=I;I>=A;){
K&&K.N$F4(I);
var _=K&&K.N$Z4(30,0,0),a=D/_.width;
if(a>F){
I=Z;
break;
}
Z=I;
I-=2;
}
return I;
};
O.N$Ptt=function($,A,B,D){
var E,F,G,H,I=$&&$.N$d4(),J=($&&$.N$v4(),$&&$.N$Mtt()),K=$&&$.N$Ett(),L=$&&$.N$m4(),M=this.N$stt($),O=this.N$Dtt(I,A,B,$&&$.N$Htt(),$&&$.N$Ntt());
this.N$met=$;
this.N$O4=O;
this.N$ret=A;
this.N$ntt=B;
this.N$itt=Math.round(B/2);
this.N$Ket=(E=new C._c.N$A4())&&E.init();
this.N$Ket&&this.N$Ket.N$F4(O);
this.N$Ket&&this.N$Ket.N$B4(this.N$itt);
if(-2==I){
this.N$ett=[34,22];
this.N$ttt=[this.N$Ket&&this.N$Ket.N$V4(6),this.N$Ket&&this.N$Ket.N$V4(-6)];
}else{
this.N$ett=[I];
this.N$ttt=[this.N$itt];
}
if(K){
var P=Math.round(.75*(this.N$Ket&&this.N$Ket.N$Q4(30)));
this.N$rtt=Math.min(P,D);
}else this.N$rtt=0;
this.N$Qet=(F=new C._c.N$o4())&&F.init();
this.N$Qet&&this.N$Qet.N$p4(this.N$met,this.N$ett.length);
var Q=(G=new C._c.N$det())&&G.N$Set(this.N$met),R=Q&&Q.N$wet();
this.N$mtt(R,this.N$met&&this.N$met.N$ctt());
this.N$Yet=[];
this.N$gtt();
this.N$ytt(R);
K&&this.N$wtt();
(J||M)&&this.N$Ltt(R);
0!=L&&this.N$Ttt();
this.N$Yet.sort(N);
this.N$Qet&&this.N$Qet.N$C4(this.N$Yet);
var S=(H=new C._c.N$Btt())&&H.init();
S&&S.N$jtt(this.N$Yet);
this.N$Ket=null;
this.N$met=null;
this.N$Yet=null;
this.N$Qet=null;
this.N$Zet=null;
this.N$Get=null;
return S;
};
return P;
});
C._registerClass("N$Btt",null,function($,A){
function B(){
this.N$Yet=null;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$jtt=function($){
this.N$Yet=$;
};
A.N$Ftt=function(){
return this.N$Yet;
};
$.N$Itt=function($){
var A,B=C._c.N$Mt.N$Bt($),D=B&&B.N$Wt(),E=(A=this.alloc())&&A.init();
E&&E.N$jtt(C._c.N$L4.N$Xet(D));
return B&&B.N$Ht()?E:null;
};
A.N$ar=function(){
return[C._c.N$L4.N$Vet(this.N$Yet)];
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$qtt",null,function($,A){
function B(){
this.N$Rtt=this.N$jet=this.N$Q9=this.N$Utt=this.N$Iet=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$E4=function(){
return this.N$jet;
};
A.N$G9=function(){
return this.N$Q9;
};
A.N$btt=function(){
return this.N$Utt;
};
A.N$ztt=function(){
return this.N$Rtt;
};
A.N$S4=function(){
return this.N$Iet;
};
A.N$Wtt=function($,A,C,D,E){
var F=this;
if(F=B.N$_super.prototype.init.call(this)){
F.N$jet=$;
F.N$Q9=A;
F.N$Utt=C;
F.N$Rtt=D;
F.N$Iet=E;
if(null===F.N$Q9||void 0===F.N$Q9)throw new Error("position is null");
}
return F;
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$Xtt",null,function($,A){
function B(){
this.N$Vtt=this.N$Jtt=this.N$Ktt=this.N$Qtt=this.N$Gtt=this.N$Ytt=null;
this.N$l4=this.N$c4=this.N$h4=this.N$Ztt=this.N$Fet=this.N$ent=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$tnt=function($){
this.N$l4=$;
};
A.N$d4=function(){
return this.N$l4;
};
A.N$nnt=function($){
this.N$h4=$;
};
A.N$v4=function(){
return this.N$h4;
};
A.N$rnt=function($){
this.N$Qtt=$;
};
A.N$ott=function(){
return this.N$Qtt;
};
A.N$int=function($){
this.N$Vtt=$;
};
A.N$utt=function(){
return this.N$Vtt;
};
A.N$snt=function($){
this.N$Gtt=$;
};
A.N$Mtt=function(){
return this.N$Gtt;
};
A.N$ont=function($){
this.N$Jtt=$;
};
A.N$att=function(){
return this.N$Jtt;
};
A.N$unt=function($){
this.N$Ktt=$;
};
A.N$Ett=function(){
return this.N$Ktt;
};
A.N$ant=function($){
this.N$Fet=$;
};
A.N$qet=function(){
return this.N$Fet;
};
A.N$fnt=function($){
this.N$ent=$;
};
A.N$Htt=function(){
return this.N$ent;
};
A.N$lnt=function($){
this.N$Ytt=$;
};
A.N$Ntt=function(){
return this.N$Ytt;
};
A.N$cnt=function($){
this.N$c4=$;
};
A.N$m4=function(){
return this.N$c4;
};
A.N$hnt=function($){
this.N$Ztt=$;
};
A.N$ctt=function(){
return this.N$Ztt;
};
A.N$pnt=function($){
this.N$dnt(C._c.N$mnt.N$vnt($));
};
A.N$dnt=function($){
this.N$Jtt||(this.N$Jtt=[]);
this.N$Jtt.push($);
};
return B;
});
C._registerClass("N$mnt",null,function($,A){
function B(){
this.N$gnt=this.N$Ir=this.N$ynt=null;
this.N$bnt=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Jr=function(){
return this.N$Ir;
};
A.N$wnt=function(){
return this.N$ynt;
};
A.N$Ent=function($){
this.N$gnt=$;
};
A.N$ftt=function(){
return this.N$gnt;
};
A.N$Snt=function($){
this.N$bnt=$;
};
A.N$xnt=function(){
return this.N$bnt;
};
$.N$vnt=function($){
var A;
return(A=this.alloc())&&A.N$Tnt($);
};
$.N$Nnt=function($){
var A;
return(A=this.alloc())&&A.N$Cnt($);
};
A.N$Tnt=function($){
var A=this;
if(A=B.N$_super.prototype.init.call(this)){
A.N$Ir=$;
A.N$bnt=-1;
}
return A;
};
A.N$Cnt=function($){
var A=this;
if(A=B.N$_super.prototype.init.call(this)){
A.N$ynt=$;
A.N$bnt=-1;
}
return A;
};
A.N$knt=function(){
return null!=this.N$Ir;
};
return B;
});
C._registerClass("N$Lnt",null,function($,A){
function B(){
this.N$Ant=this.N$Ont=null;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Mnt=function($){
this.N$Ant=$;
};
A.N$Att=function(){
return this.N$Ant;
};
A.N$Dnt=function($){
this.N$Ont=$;
};
A.N$Ott=function(){
return this.N$Ont;
};
return B;
});
C._registerClass("N$Pnt",null,function($,A){
function B(){
this.N$Hnt=this.N$Bnt=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$jnt=function($){
this.N$Hnt=$;
};
A.N$Stt=function(){
return this.N$Hnt;
};
A.N$Fnt=function($){
this.N$Bnt=$;
};
A.N$xtt=function(){
return this.N$Bnt;
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$Int",null,function($,A){
function B(){
this.N$tet=null;
this.N$net=this.N$set=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$oet=function(){
return this.N$tet;
};
A.N$b4=function(){
return this.N$set;
};
A.N$y4=function(){
return this.N$net;
};
A.N$Unt=function($,A,C){
var D=this;
if(D=B.N$_super.prototype.init.call(this)){
D.N$tet=C;
D.N$set=$;
D.N$net=A;
}
return D;
};
A.N$Aet=function($){
for(var A,B=[],C=this.N$tet,D=0,E=C?C.length:0;E>D;D++){
A=C[D];
(A&&A.N$ztt())==$&&B.push(A);
}
return B;
};
A.N$ket=function(){
for(var $,A=-1,B=this.N$tet,C=0,D=B?B.length:0;D>C;C++){
$=B[C];
var E=$&&$.N$ztt();
E>A&&(A=E);
}
return A+1;
};
A.N$Let=function(){
return 3==this.N$set?1:0;
};
return B;
});
}();
!function(){
"use strict";
function A(A){
var B,C=0;
$.each((B=A)&&B.N$att(),function(B){
var D,E,F,G,H=!1,I=!1,J=0;
function K($){
J>$&&(J=$);
0==$?H=!0:-1==$&&(I=!0);
}
if((D=B)&&D.N$knt()){
var L=(E=A)&&E.N$d4();
$.each((F=B)&&F.N$Jr(),function($){
var A;
K((A=$)&&A.N$An(L));
});
}else $.each((G=B)&&G.N$wnt(),function($){
var A;
K((A=$)&&A.N$G9());
});
H&&I&&(C=J);
});
return C;
}
C._registerClass("N$Tet",null,function(B,D){
function E(){
this.N$met=this.N$znt=null;
this.N$l4=this.N$h4=this.N$Utt=0;
this.N$Wnt=!1;
this.constructor=E;
this.N$_id=++C._id;
}
D.N$bet=function(){
return this.N$met;
};
D.N$Oet=function(){
return this.N$znt;
};
D.N$d4=function(){
return this.N$l4;
};
D.N$v4=function(){
return this.N$h4;
};
D.N$btt=function(){
return this.N$Utt;
};
D.N$Xnt=function(){
return this.N$Wnt;
};
D.N$xet=function($,A,B){
var C=this;
if(C=E.N$_super.prototype.init.call(this)){
C.N$l4=A;
C.N$Utt=B;
C.N$znt=[];
C.N$met=$;
C.N$h4=$&&$.N$v4();
C.N$Vnt();
C.N$Jnt();
C.N$Knt();
}
return C;
};
D.N$Vnt=function(){
var $,A,B=($=new C._c.N$qtt())&&$.N$Wtt(C._c.N$A4.N$U4(this.N$l4),C._c.N$A4.N$X4(this.N$l4),this.N$Utt,0,0);
this.N$znt.push((A=new C._c.N$Int())&&A.N$Unt(1,0,[B]));
};
D.N$Jnt=function(){
for(var $,A,B=[],D=(this.N$met&&this.N$met.N$v4(),Math.abs(this.N$h4)),E=this.N$h4<0?23:25,F=this.N$h4<0?-1:1,G=[],H=0;D>H;H++){
var I=H%7;
I<G.length?G[I]+=F:G.push(E);
}
for(var J=0;J<G.length;J++){
var K=C._c.N$A4.N$R4(this.N$l4,this.N$h4,J),L=G[J],M=0;
L!=E&&(M=1);
var N=($=new C._c.N$qtt())&&$.N$Wtt(G[J],K,this.N$Utt,J,M);
B.push(N);
}
this.N$znt.push((A=new C._c.N$Int())&&A.N$Unt(2,0,B));
};
D.N$Knt=function(){
var B=this,D=function(){
return!0;
},E=B.N$met&&B.N$met.N$d4(),F=B.N$Utt,G=0;
if(-2==E){
var H=A(B.N$met);
if(34==B.N$l4){
D=function($){
return $>=H;
};
G=-6;
}else if(22==B.N$l4){
D=function($){
return H>$;
};
G=6;
}
}
for(var I,J=(2&(B.N$met&&B.N$met.N$qet()))>0,K=0,L=function(A,G,H){
A=G[H];
var L=A&&A.N$xnt(),M=[];
A&&A.N$knt()?$.each(A&&A.N$Jr(),function($,A){
var C=$&&$.N$An(E),F=$&&$.N$en();
D(C)&&M.push({
p:$&&$.N$An(B.N$l4),
a:$&&$.N$On(B.N$h4),
i:Math.abs(F)>=(J?2:3),
s:L==A
});
}):$.each(A&&A.N$wnt(),function($,A){
var B=$&&$.N$G9(),G=$&&$.N$Y9(),H=-100==G?0:G;
D(B)&&M.push({
p:C._c.N$A4.N$z4(B,E,F),
a:G,
i:Math.abs(H)>=(J?2:3),
s:L==A
});
});
B.N$Qnt(A,K,M);
K++;
I=A;
},M=B.N$met&&B.N$met.N$att(),N=0,O=M?M.length:0;O>N;N++)L(I,M,N,O);
};
D.N$Qnt=function(A,B,D){
var E,F,G=this;
D||(D=[]);
var H=[],I=this.N$met&&this.N$met.N$Mtt();
if(I){
var J=I&&I.N$Yn(),K=I&&I.N$er();
J=C._c.N$A4.N$z4(J,this.N$met&&this.N$met.N$d4(),this.N$Utt);
K=C._c.N$A4.N$z4(K,this.N$met&&this.N$met.N$d4(),this.N$Utt);
I=C._c.N$Jn.N$ir(J,K);
}
var L=[],M=[],N=[],O=[],P=0;
function Q(A,B,D){
var E,F=B.p,J=0;
!I||I&&I.N$fr(F)||(J=2);
D&&(B.s?J=3:$.includes(H,F)&&(J=1));
var K=(E=new C._c.N$qtt())&&E.N$Wtt(B.g,F,G.N$Utt,B.o,J);
A.push(K);
}
function R($,A){
var B=0>$?-1:1;
$*=B;
$%2&&$--;
for(;$>4;){
var C=$*B;
Q(M,{
g:4,
p:C,
o:A,
s:!1
},!1);
$-=2;
}
}
D.sort(function($,A){
return $.p-A.p;
});
$.each(D,function($){
var A=$.p,B=$.a,C=$.i,D=$.s;
N.push({
p:A,
g:30,
o:0,
s:D
});
-100!=B&&O.push({
p:A,
g:B+24,
o:0,
s:D
});
P+=A;
C&&H.push(A);
});
{
var S=0,T=0,U=O.length;
(2&(G.N$met&&G.N$met.N$qet()))>0;
}
if(U>1){
var V=O[0],W=O[U-1];
W.o=S;
var X=Math.abs(W.p-V.p),Y=V.g>=20&&V.g<=23,Z=W.g>=20&&W.g<=24,_=Y&&!Z;
if(X>6||X>5&&!_){
V.o=S;
T++;
}
S++;
U--;
}
for(;U>T;T++)O[T].o=S++;
O=O.sort(function($,A){
return A.o-$.o;
});
for(var a=0,b=O.length;b>a;a++)Q(L,O[a],!0);
for(var c=Number.MAX_VALUE,d=Number.MIN_VALUE,e=Number.MAX_VALUE,f=Number.MIN_VALUE,g=N.length,h=[!1],i=!1,j=1;g>j;j++){
var k=N[j].p-N[j-1].p<2;
h[j]=k;
k&&(i=!0);
}
if(i){
var l=P>=0;
if(l)for(var m=g-1;m>=0;m--){
N[m].o=l?1:0;
l=h[m]?!l:!0;
}else for(var n=1;g>n;n++){
l=h[n]?!l:!1;
N[n].o=l?1:0;
}
}
for(var o=0;g>o;o++){
var p=N[o],q=p.p,r=p.o;
if(r>0){
e>q&&(e=q);
q>f&&(f=q);
}else{
c>q&&(c=q);
q>d&&(d=q);
}
Q(M,p,!0);
}
-5>c&&R(c,0);
-5>e&&R(e,1);
d>5&&R(d,0);
f>5&&R(f,1);
G.N$znt.push((E=new C._c.N$Int())&&E.N$Unt(3,B,L));
G.N$znt.push((F=new C._c.N$Int())&&F.N$Unt(4,B,M));
};
return E;
});
}();
!function(){
"use strict";
C._registerClass("N$Gnt",null,function(A,B){
function D(){
this.N$Ynt=this.N$Met=this.N$Pet=null;
this.N$nn=this.N$Het=this.N$Bet=this.N$Fet=this.N$pi=0;
this.constructor=D;
this.N$_id=++C._id;
}
B.N$vi=function(){
return this.N$pi;
};
B.N$w4=function(){
return C.makeCopy(this.N$Met);
};
B.N$qet=function(){
return this.N$Fet;
};
B.N$Uet=function(){
return this.N$Bet;
};
B.N$Ln=function(){
return this.N$nn;
};
B.N$Znt=function(){
return this.N$Ynt;
};
B.N$zet=function(){
return this.N$Pet;
};
B.N$Wet=function(){
return this.N$Het;
};
B.N$ert=function($,A,B,C,E,F,G,H){
var I=this;
if(I=D.N$_super.prototype.init.call(this)){
I.N$pi=A;
I.N$Met=$;
I.N$Fet=B;
I.N$nn=C;
I.N$Bet=E;
I.N$Ynt=F;
I.N$Pet=G;
I.N$Het=H;
}
return I;
};
A.N$Xet=function($){
var A;
return(A=C._c.N$Mt.N$Bt($))&&A.N$Jt(function($){
var A,B=null,D=C._c.N$Mt.N$Bt($),E=D&&D.N$Ut(),F=D&&D.N$qt(),G=D&&D.N$qt(),H=D&&D.N$qt(),I=D&&D.N$qt(),J=D&&D.N$zt(),K=D&&D.N$zt(),L=D&&D.N$qt();
D&&D.N$Ht()&&(B=(A=new C._c.N$Gnt())&&A.N$ert(E,F,G,H,I,J,K,L));
return B;
});
};
A.N$Vet=function(A){
return $.map(A,function($){
return $&&$.N$ar();
});
};
B.N$ar=function(){
return[this.N$Met.x,this.N$Met.y,this.N$Met.width,this.N$Met.height,this.N$pi,this.N$Fet,this.N$nn,this.N$Bet,this.N$Ynt,this.N$Pet,this.N$Het];
};
return D;
});
}();
!function(){
"use strict";
var A=[1,0,1,0,1,1,0,1,0,1,0,1];
C._registerClass("N$trt",null,function($,A){
function B(){
this.N$Yet=null;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Ftt=function(){
return this.N$Yet;
};
A.N$nrt=function($){
var A=this;
(A=B.N$_super.prototype.init.call(this))&&(A.N$Yet=$);
return A;
};
$.N$Itt=function($){
var A,B=C._c.N$Mt.N$Bt($),D=B&&B.N$Wt(),E=C._c.N$Gnt.N$Xet(D);
return B&&B.N$Ht()?(A=this.alloc())&&A.N$nrt(E):null;
};
A.N$ar=function(){
return[C._c.N$Gnt.N$Vet(this.N$Yet)];
};
return B;
});
C._registerClass("N$rrt",null,function(B,D){
function E(){
this.N$irt=this.N$Yet=this.N$srt=this.N$ort=null;
this.N$urt=this.N$art=this.N$frt=this.N$lrt=this.N$crt=this.N$hrt=0;
this.constructor=E;
this.N$_id=++C._id;
}
B.N$prt=function($){
var B=0;
if($)for(var C=$&&$.N$nr(),D=$&&$.N$rr();C>=D;D++)B+=A[D%12];
return B;
};
D.N$drt=function(B,D,E,F,G,H,I){
var J=this,K=4&H?-1:1,L=(1&H)>0,M=(2&H)>0,N=[],O=[],P=0,Q=0,R={},S={},T=null;
if(8>=F)B||(B=C._c.N$Jn.N$ir(0,12));else if(11>=F){
B||(B=C._c.N$Jn.N$ir(0,17));
F=11;
}else{
var U=Math.floor((F-1)/7);
F=7*U+1;
B||(B=C._c.N$Jn.N$ir(0,12*U));
}
var V=B&&B.N$rr(),W=B&&B.N$nr();
if(8&H){
V-=12;
F+=7;
}
if(I){
P=Math.round(16&H?C._g.N$i(D,[24,320,32,768]):C._g.N$i(D,[32,320,48,768]));
Q=Math.round(C._g.N$i(D,[13,320,18,768]));
}
for(var X=V;W>=X;X++)A[X%12]?N.push(X):O.push(X);
var Y=(N.length,0),Z=D+K;
Z/=F;
Z-=K;
var _=0;
if(L)_=E-2*P;else{
_=Math.min(E,Math.round(Z/.1618));
2*P>E-_&&(_=E-2*P);
}
var a=Math.round(.66*Z),b=Math.round(_*(M?.6:.66)),c=0,d=Math.ceil((E-_)/2);
$.each(N,function($){
var A=Z+c,B=C._g.N$t(A,G);
c=A-B;
var D=C._g.N$t(Y,G),E=C._g.N$m(D,d,B,_);
T=C._g.N$M(T,E);
R[$]=E;
Y+=B+K;
});
var e=a/2*.25;
$.each(O,function($){
var A=C._g.N$m(0,d,a,b);
Y=C._g.N$L(R[$-1]);
Y-=A.width/2;
var B=$%12;
1==B?Y=C._g.N$n(Y-e,G):3==B?Y=C._g.N$r(Y+e,G):6==B?Y=C._g.N$n(Y-e,G):8==B?Y=C._g.N$t(Y,G):10==B&&(Y=C._g.N$r(Y+e,G));
A.x=Y;
S[$]=A;
});
var f=Math.floor(Z/6),g=Math.floor(a/8);
J.N$srt=T;
J.N$ort=R;
J.N$irt=S;
J.N$hrt=C._g.N$t(Z-2*f,G);
J.N$art=C._g.N$t(a-2*g,G);
J.N$crt=Math.round(1.5*f);
J.N$urt=Math.round(3*g);
J.N$lrt=P;
J.N$frt=Q;
};
D.N$vrt=function(A,B,D){
var E=this,F=this.N$Yet;
function G(E,G){
$.each(E,function($,E){
var H,I=parseInt(E,10),J=0,K=0,L=D&&void 0!==D[I],M=null;
if(1==G){
M="White Key";
if(1==B||2==B){
M+=", "+["C","","D","","E","F","","G","","A","","B"][I%12];
2==B&&(M+=Math.floor(I/12)-1);
}
}else 2==G&&(M="Black Key");
if(L){
K=D[I];
M="Highlighted "+M;
0==A&&(J=1);
}
F.push((H=new C._c.N$Gnt())&&H.N$ert($,G,J,I,K,M,null,0));
});
}
G(E.N$ort,1);
G(E.N$irt,2);
};
D.N$mrt=function(B){
var D=this,E=this.N$Yet,F=this.N$hrt,G=this.N$art,H=this.N$crt,I=this.N$urt;
function J($,A,D){
var F;
E.push((F=new C._c.N$Gnt())&&F.N$ert($,A,0,D,B[D]||0,null,null,0));
}
$.each(B,function($,B){
var E=parseInt(B,10);
if(A[E%12]){
var K=D.N$ort[E],L=C._g.N$m(0,0,F,F);
C._g.N$gt(L,K);
C._g.N$z(L,K);
C._g.N$ht(L,H);
J(L,3,E);
}else{
var M=D.N$irt[E],N=C._g.N$m(0,0,G,G);
C._g.N$gt(N,M);
C._g.N$z(N,M);
C._g.N$ht(N,I);
J(N,4,E);
}
});
};
D.N$grt=function($,A,B){
var D,E=$&&$.N$zet(),F=$&&$.N$Znt()||E;
this.N$Yet.push((D=new C._c.N$Gnt())&&D.N$ert(B,A,0,0,0,F,E,this.N$frt));
};
D.N$yrt=function($,A,B,D,E,F){
var G;
this.N$Yet=[];
this.N$drt($,A,B,D,E,F,!1);
var H=$?2:1;
this.N$vrt(-1,H,null);
return(G=new C._c.N$trt())&&G.N$nrt(this.N$Yet);
};
D.N$brt=function(A,B,D,E,F){
var G,H=this,I=A&&A.N$wrt(),J=(A&&A.N$Ert(),A&&A.N$Srt()),K={},L=(A&&A.N$Ert()||[]).sort(function($,A){
return($&&$.N$Ln())-(A&&A.N$Ln());
});
$.each(L,function($){
var A=$&&$.N$Ln();
K[A]=$&&$.N$Uet();
});
var M=A&&A.N$xrt(),N=A&&A.N$Trt(),O=!!M||!!N,P=C._c.N$rrt.N$prt(I);
H.N$Yet=[];
H.N$drt(I,B,D,P,E,F,O);
H.N$vrt(J,0,K);
1==J&&H.N$mrt(K);
if(M){
var Q=C._g.N$y(H.N$srt);
Q.height=H.N$lrt;
C._g.N$wt(Q,H.N$srt);
H.N$grt(M,5,Q);
}
if(N){
var R=C._g.N$y(H.N$srt);
R.height=H.N$lrt;
C._g.N$Et(R,H.N$srt);
H.N$grt(N,6,R);
}
return(G=new C._c.N$trt())&&G.N$nrt(H.N$Yet);
};
return E;
});
}();
!function(){
"use strict";
C._registerClass("N$Nrt",null,function($,A){
function B(){
this.N$Crt=this.N$krt=this.N$Lrt=this.N$Art=null;
this.N$Ort=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Mrt=function($){
this.N$Lrt=$;
};
A.N$wrt=function(){
return this.N$Lrt;
};
A.N$Drt=function($){
this.N$Ort=$;
};
A.N$Srt=function(){
return this.N$Ort;
};
A.N$Ert=function(){
return this.N$krt;
};
A.N$Prt=function($){
this.N$Art=$;
};
A.N$xrt=function(){
return this.N$Art;
};
A.N$Hrt=function($){
this.N$Crt=$;
};
A.N$Trt=function(){
return this.N$Crt;
};
A.N$Brt=function($,A){
var B,D=(B=new C._c.N$jrt())&&B.init();
D&&D.N$Frt($);
D&&D.N$Irt(A);
this.N$qrt(D);
};
A.N$qrt=function($){
this.N$krt||(this.N$krt=[]);
this.N$krt.push($);
};
return B;
});
C._registerClass("N$Rrt",null,function($,A){
function B(){
this.N$Ynt=this.N$Pet=null;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Urt=function($){
this.N$Pet=$;
};
A.N$zet=function(){
return this.N$Pet;
};
A.N$zrt=function($){
this.N$Ynt=$;
};
A.N$Znt=function(){
return this.N$Ynt;
};
return B;
});
C._registerClass("N$jrt",null,function($,A){
function B(){
this.N$nn=this.N$Bet=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Frt=function($){
this.N$nn=$;
};
A.N$Ln=function(){
return this.N$nn;
};
A.N$Irt=function($){
this.N$Bet=$;
};
A.N$Uet=function(){
return this.N$Bet;
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$Wrt",null,function(A,B){
function D(){
this.N$Met=this.N$Pet=null;
this.N$Het=this.N$Bet=this.N$pi=0;
this.constructor=D;
this.N$_id=++C._id;
}
B.N$vi=function(){
return this.N$pi;
};
B.N$w4=function(){
return C.makeCopy(this.N$Met);
};
B.N$Uet=function(){
return this.N$Bet;
};
B.N$zet=function(){
return this.N$Pet;
};
B.N$Wet=function(){
return this.N$Het;
};
B.N$Xrt=function($,A,B,C,E){
var F=this;
if(F=D.N$_super.prototype.init.call(this)){
F.N$pi=A;
F.N$Met=$;
F.N$Bet=B;
F.N$Pet=C;
F.N$Het=E;
}
return F;
};
A.N$Xet=function($){
var A;
return(A=C._c.N$Mt.N$Bt($))&&A.N$Jt(function($){
var A,B=void 0,D=C._c.N$Mt.N$Bt($),E=D&&D.N$Ut(),F=D&&D.N$qt(),G=D&&D.N$qt(),H=D&&D.N$zt(),I=D&&D.N$qt();
D&&D.N$Ht()&&(B=(A=new C._c.N$Wrt())&&A.N$Xrt(E,F,G,H,I));
return B;
});
};
A.N$Vet=function(A){
return $.map(A,function($){
return $&&$.N$ar();
});
};
B.N$ar=function(){
return[this.N$Met.x,this.N$Met.y,this.N$Met.width,this.N$Met.height,this.N$pi,this.N$Bet,this.N$Pet,this.N$Het];
};
return D;
});
}();
!function(){
"use strict";
C._registerClass("N$Vrt",null,function($,A){
function B(){
this.N$Yet=null;
this.N$Jrt=!1;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Ftt=function(){
return this.N$Yet;
};
A.N$Krt=function(){
return this.N$Jrt;
};
A.N$Qrt=function($,A){
var C=this;
if(C=B.N$_super.prototype.init.call(this)){
C.N$Yet=$;
C.N$Jrt=A;
}
return C;
};
$.N$Itt=function($){
var A,B=C._c.N$Mt.N$Bt($),D=B&&B.N$Ft(),E=B&&B.N$Wt(),F=C._c.N$Wrt.N$Xet(E);
return B&&B.N$Ht()?(A=this.alloc())&&A.N$Qrt(F,D):null;
};
A.N$ar=function(){
return[this.N$Jrt,C._c.N$Wrt.N$Vet(this.N$Yet)];
};
return B;
});
function A(A,B,C){
var D=$.clamp(A-1,0,8);
return 190>C?B>=3?[2,3,4,5,6,7,8,9,10][D]/3:B>=2?[1,2,3,3,4,4,4,5,5][D]/2:[1,1,1,2,2,3,3,4,4][D]:[1,2,3,3,4,4,4,5,5][D];
}
C._registerClass("N$Grt",null,function(B,D){
function E(){
this.constructor=E;
this.N$_id=++C._id;
}
D.N$Yrt=function(B,D,E,F,G,H){
var I,J,K=B&&B.N$Zrt(),L=B&&B.N$eit(),M=(2&L)>0,N=(1&L)>0,O=(4&L)>0,P=[],Q=(K&&K.N$d2()).length;
if(!Q)return null;
var R=null;
function S($,A,B){
var E=C._g.N$i(D,[$,320,A,768]);
return B?C._g.N$t(E,F):E;
}
var T=$.max(B&&B.N$tit()),U=0;
if(T>15){
T=17;
U=S(.75,0,!1);
}else if(T>12){
T=15;
U=S(.5,0,!1);
}else T=12;
var V=S(20,60,!0),W=S(7,13,!0),X=S(8,16,!0),Y=S(2,3,!0),Z=S(24,32,!0),_=S(96,192,!0),a=E-_,b=Math.floor(E/4),c=S(9,12,!0),d=Math.round(2*c);
b>a&&(_+=a-b);
var e=Math.ceil((E-_)/2);
e>d&&(e=d);
if(G){
Y=2;
X=4;
W=7;
Z=0;
}
M&&(V+=Z);
var f=K&&K.N$y2(),g=Math.round((E-_)/2),h=C._g.N$m(0,g,D,_),i=[],j=[],k=[],l=[],m=[],n=void 0,o=[],p=_;
function q($,A,E,F,G){
var H;
if(!A)return;
var I=C._g.N$y(A);
I&&B&&B.N$Krt()&&(I.x=D-(I.x+I.width));
P.push((H=new C._c.N$Wrt())&&H.N$Xrt(I,$,E,F,G));
}
for(var r=_/Q,s=g+Math.round(r/2),t=0;Q>t;t++){
o[t]=C._g.N$t(s,F);
s+=r;
}
if(f){
var u=o[Q-1],v=o[Q-2];
p=v-g+C._g.N$t((u-v)/2,F);
}
for(var w=0,x=0;T>x;x++)w+=1/Math.pow(2,x/12);
var y=V,z=D;
z-=V;
z+=Y/2;
for(var $A=0;T>$A;$A++){
var AA=1/Math.pow(2,$A/12)/w*z,BA=z/T,CA=C._g.N$t(BA*U+AA*(1-U),F),DA=Y;
0==$A&&(DA=C._g.N$t(X*(1-U),F));
i[$A]=C._g.N$m(C._g.N$t(y-DA/2,F),g,DA,f>=$A?p:_);
y+=CA;
}
n=C._g.N$m(0,g,i[0].x,i[0].height);
var EA=K&&K.N$m2(),FA=0;
$.each(K&&K.N$d2(),function($){
var B=$&&$.N$i9(),E=G?1:A($&&$.N$r9(),F,_),H=o[FA]-C._g.N$t(E/2,F);
if(EA){
j.push(C._g.N$m(0,H-2,D,E));
j.push(C._g.N$m(0,H+2,D,E));
k.push(B);
k.push(B);
}else{
j.push(C._g.N$m(0,H,D,E));
k.push(B);
}
FA++;
});
$.each(K&&K.N$v2(),function($){
function A($){
var A=i[B-1],E=i[B],G=A?C._g.N$L(A):0,H=E?C._g.N$T(E):D,I=G+(H-G)/2;
I-=W/2;
$-=W/2;
I=C._g.N$t(I,F);
$=C._g.N$t($,F);
l.push(C._g.N$m(I,$,W,W));
}
var B=$&&$.N$A2(),E=$&&$.N$a9();
if(B>T)return;
if(E||f){
var G=Math.floor((Q-1)/2),H=Math.floor(Q/2);
if(7==Q){
G--;
H++;
}
var I=C._g.N$n((o[G-1]+o[G])/2,F),J=C._g.N$r((o[H+1]+o[H])/2,F);
A(I);
E&&A(J);
}else A(g+_/2);
});
var GA=0;
o.length>1&&(GA=Math.floor(.75*(o[1]-o[0])));
var HA=M?Z:0,IA=C._g.N$T(i[T-1])-C._g.N$L(i[T-2])-2,JA=G?17:Math.min(GA,IA);
$.each(B&&B.N$Ert(),function($){
var A=$&&$.N$G9(),B=A&&A.N$L2(),E=A&&A.N$A2(),G=E?C._g.N$L(i[E-1]):HA,H=E==T?D:C._g.N$T(i[E]),I=C._g.N$m(G+(H-G)/2,o[B],JA,JA);
I.x=C._g.N$t(I.x-JA/2,F);
I.y=C._g.N$t(I.y-JA/2,F);
m.push(I);
});
var KA=void 0,LA=void 0,MA=void 0,NA=void 0,OA=void 0;
if(f){
var PA=$.last(j),QA=i[f],RA=i[f+1],SA=G?.5:.55,TA=C._g.N$r(QA.x+(RA.x-QA.x)*SA,F);
KA=C._g.N$m(TA-1,PA.y-1,PA.height,PA.height);
KA.width+=2;
KA.height+=2;
var UA=.5*_,VA=UA*(172/286);
LA=C._g.N$m(C._g.N$t(C._g.N$C(QA)-VA/2,F),C._g.N$t(C._g.N$k(PA)-UA/2,F),C._g.N$t(VA,F),C._g.N$t(UA,F));
var WA=C._g.N$t(28/108*VA,F);
MA=C._g.N$m(C._g.N$t(QA.x+(QA.width-WA)/2,F),LA.y,C._g.N$t(WA,F),C._g.N$t(LA.height/2,F));
NA=C._g.N$m(QA.x,g+p,RA.x-QA.x,_-p);
if(G||N){
PA.x=TA;
PA.width-=PA.x;
OA=C._g.N$y(PA);
OA.width=RA.x-OA.x;
}else{
OA=C._g.N$y(PA);
OA.x=C._g.N$L(MA);
OA.width=C._g.N$T(KA)-OA.x;
PA.x=C._g.N$L(MA);
PA.width-=PA.x;
}
if(G||N){
MA=null;
LA=null;
}
}
q(1,MA,0,null,0);
q(2,h,0,null,0);
q(4,NA,0,null,0);
q(3,n,0,null,0);
q(5,i[0],0,null,0);
for(var XA=1;XA<i.length;XA++)q(6,i[XA],0,null,0);
for(var YA=0;YA<l.length;YA++)q(7,l[YA],0,null,0);
for(var ZA=0;ZA<j.length;ZA++)q(8,j[ZA],0,null,k[ZA]);
M&&q(9,n,0,null,0);
var _A=0;
$.each(B&&B.N$Ert(),function($){
var A=m[_A++],B=$&&$.N$Uet();
q(10,A,B,null,0);
if(O){
var C=$&&$.N$zet();
C&&q(13,A,B,C,Math.round(.8*A.height));
}
});
q(14,LA,0,null,0);
q(16,OA,0,null,0);
q(15,KA,0,null,0);
if(M){
var aA=2*c,bA=o.slice(0);
f&&bA.pop();
var cA=C._g.N$m(0,g+_-Math.round(aA/2),Z,aA);
if(G){
cA.x=-H;
cA.width=H;
}
var dA=K&&K.N$d2(),eA=B&&B.N$Stt();
R=[];
for(var fA=0;fA<bA.length;fA++){
var gA=(I=dA[fA])&&I.N$s9(),hA=C._c.N$i8.N$S8(gA,eA,1,!1),iA=C._c.N$i8.N$T8(gA,eA,1,!1);
R[fA]=iA+" String";
q(11,C._g.N$m(cA.x,bA[fA]-Math.round(aA/2),cA.width,cA.height),0,hA,c);
}
}
if(N)for(var jA=M?Z:0,kA=1;T>=kA;kA++){
var lA=kA?C._g.N$L(i[kA-1]):jA,mA=kA==T?D:C._g.N$T(i[kA]),nA=C._g.N$m(lA,0,mA-lA,e);
nA.y=f&&f>=kA?g+p:g+_;
q(12,nA,0,String(kA),c);
}
if(!R){
R=[];
for(var oA=0;Q>oA;oA++)R[oA]="String "+(oA+1);
}
var pA=0;
$.each(B&&B.N$Ert(),function($){
var A=$&&$.N$G9(),B=A&&A.N$L2(),C=A&&A.N$A2(),D="Open";
C&&(D="Fret "+C);
q(17,m[pA++],0,R[B]+", "+D,0);
});
return(J=new C._c.N$Vrt())&&J.N$Qrt(P,B&&B.N$Krt());
};
return E;
});
}();
!function(){
"use strict";
C._registerClass("N$nit",null,function($,A){
function B(){
this.N$rit=this.N$iit=this.N$krt=null;
this.N$sit=this.N$Hnt=0;
this.N$Jrt=!1;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$oit=function($){
this.N$iit=$;
};
A.N$Zrt=function(){
return this.N$iit;
};
A.N$uit=function($){
this.N$rit=$;
};
A.N$tit=function(){
return this.N$rit;
};
A.N$ait=function($){
this.N$Jrt=$;
};
A.N$Krt=function(){
return this.N$Jrt;
};
A.N$jnt=function($){
this.N$Hnt=$;
};
A.N$Stt=function(){
return this.N$Hnt;
};
A.N$fit=function($){
this.N$sit=$;
};
A.N$eit=function(){
return this.N$sit;
};
A.N$lit=function($){
this.N$krt=$;
};
A.N$Ert=function(){
return this.N$krt;
};
A.N$cit=function($){
var A,B=(A=new C._c.N$hit())&&A.init();
B&&B.N$pit($);
this.N$qrt(B);
};
A.N$qrt=function($){
this.N$krt||(this.N$krt=[]);
this.N$krt.push($);
};
return B;
});
C._registerClass("N$hit",null,function($,A){
function B(){
this.N$Ynt=this.N$Q9=this.N$Pet=null;
this.N$Bet=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$pit=function($){
this.N$Q9=$;
};
A.N$G9=function(){
return this.N$Q9;
};
A.N$Irt=function($){
this.N$Bet=$;
};
A.N$Uet=function(){
return this.N$Bet;
};
A.N$Urt=function($){
this.N$Pet=$;
};
A.N$zet=function(){
return this.N$Pet;
};
A.N$zrt=function($){
this.N$Ynt=$;
};
A.N$Znt=function(){
return this.N$Ynt;
};
return B;
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
var A="reports",B="build",E="q",F="ips",G="challenge",H="last-score",I="high-score";
C._registerClass("N$dit",null,function(J,K){
function L(){
this.N$vit=this.N$mit=this.N$git=this.N$yit=this.N$bit=this.N$wit=this.N$Eit=this.N$Sit=this.N$xit=this.N$Tit=this.N$Nit=this.N$Cit=this.N$kit=null;
this.N$Lit=this.N$Ait=this.N$Oit=this.N$Mit=this.N$Dit=this.N$Pit=this.N$Hit=this.N$Bit=0;
this.N$jit=this.N$Fit=this.N$Iit=!1;
this.constructor=L;
this.N$_id=++C._id;
}
K.N$qit=function(){
return this.N$Nit;
};
K.N$Rit=function(){
return this.N$Eit;
};
K.N$Uit=function($){
this.N$yit=$;
};
K.N$zit=function(){
return this.N$Mit;
};
K.N$Wit=function(){
return this.N$Bit;
};
K.N$Xit=function(){
return this.N$Hit;
};
K.N$Vit=function(){
return this.N$Pit;
};
K.N$Jit=function(){
return this.N$kit;
};
K.N$Kit=function($){
this.N$vit=$;
};
K.N$Qit=function(){
return this.N$vit;
};
J.N$Git=function(){
return null;
};
K.init=function(){
var $,A,B,D,E,F,G,H,I,J=this;
if(J=L.N$_super.prototype.init.call(this)){
var K=($=J.constructor)&&$.N$Git();
J.N$Nit=(A=K&&K.alloc())&&A.init();
J.N$Eit=(B=new C._c.N$Yit())&&B.init();
J.N$Eit&&J.N$Eit.N$Zit(J);
J.N$xit=(D=new C._c.N$est())&&D.init();
J.N$Tit=(E=new C._c.N$tst())&&E.init();
J.N$git=(F=new C._c.N$tst())&&F.init();
J.N$mit=(G=new C._c.N$tst())&&G.init();
J.N$kit=(H=new C._c.N$rst())&&H.N$nst(function(){
J.N$ist();
});
(I=C._c.N$ost.N$Si())&&I.N$sst(J);
}
return J;
};
K.N$ust=function($){
var D,J,K,L,M,N=$["state"],O=$["remembers"],P=$["path"],Q=!1;
if(P){
var R=C._c.N$fst.N$ast(P,!1),S=R.prefix,T=R.options;
if(S&&T){
if(T.match(/[A-Zl02v]/)){
var U=T.toLowerCase().replace("l","1").replace("0","o").replace("2","z").replace("v","u");
this.N$lst("O",T+" -> "+U);
}
Q=this.N$Nit&&this.N$Nit.N$cst(S,T);
if(!Q||this.N$Nit&&this.N$Nit.N$hst()){
this.N$Dit=2;
this.N$pst(2);
return;
}
this.N$Dit=1;
}
}
Q||this.N$Nit&&this.N$Nit.N$dst({});
var V=void 0,W=void 0;
void 0===O&&(O=!0);
if(O){
V=N[A];
W=N[G];
}
V&&this.N$Tit&&this.N$Tit.N$vst(V);
if(W){
this.N$mit&&this.N$mit.N$vst(W[I]);
this.N$git&&this.N$git.N$vst(W[H]);
}
var X=this.N$Tit&&this.N$Tit.N$mst();
!Q&&X.length>0&&this.N$Nit&&this.N$Nit.N$dst((D=(J=X[0])&&J.N$qit())&&D.N$gst());
if(0==X.length)this.N$yst();else{
var Y=this.N$Tit&&this.N$Tit.N$bst();
this.N$Mit=Y&&Y.N$zit();
this.N$Bit=Y&&Y.N$Wit();
this.N$Hit=Y&&Y.N$Xit();
this.N$kit&&this.N$kit.N$wst(1e3*(Y&&Y.N$Est()));
this.N$Tit&&this.N$Tit.N$Sst(this.N$Nit);
(K=this.N$Tit&&this.N$Tit.N$Tst())&&K.N$xst(this.N$kit&&this.N$kit.N$Nst());
}
if(X.length||N[F]){
var Z=N[B],_=N[E],a=(L=C._c.N$ktt.N$Si())&&L.N$Cst();
if(_&&a==Z){
this.N$bit=_;
if(W){
this.N$Ait=(M=this.N$Tit&&this.N$Tit.N$Tst())&&M.N$kst();
this.N$Lit=-1;
}
}
}
};
K.N$Lst=function(){
var $,D;
($=this.N$Tit&&this.N$Tit.N$Tst())&&$.N$Ast(this.N$kit&&this.N$kit.N$Nst());
var F=(D=C._c.N$ktt.N$Si())&&D.N$Cst(),J={};
J[A]=this.N$Tit&&this.N$Tit.N$gst();
J[B]=F;
if(this.N$Nit&&this.N$Nit.N$Ost()){
var K={};
K[I]=this.N$mit&&this.N$mit.N$gst();
K[H]=this.N$git&&this.N$git.N$gst();
J[G]=K;
}
0==this.N$Pit&&(J[E]=this.N$bit);
return J;
};
K.N$Mst=function($){
var A,B=$["format"],D=$["identifier"],E=this.N$Tit;
"last"==D?E=this.N$git:"high"==D&&(E=this.N$mit);
return(A=C._c.N$Pst.N$Si())&&A.N$Dst(E,B);
};
K.N$pst=function($){
C._g.N$F7("-[N$dit N$pst] "+[$]);
this.N$Hst(2004,{
status:$
});
};
K.N$Bst=function($){
var A;
C._g.N$F7("-[N$dit N$Bst] "+[$]);
this.N$Oit=$;
var B=this.N$Nit&&this.N$Nit.N$Ost(),D=(6==$?(A=this.N$Tit&&this.N$Tit.N$Tst())&&A.N$jst():0,
B?this.N$Nit&&this.N$Nit.N$Fst():0,{});
D["status"]=$;
if(B){
D["question-limit"]=this.N$Nit&&this.N$Nit.N$Fst();
D["time-limit"]=this.N$Nit&&this.N$Nit.N$Ist();
}
this.N$Hst(2019,D);
};
K.N$qst=function($,A){
C._g.N$F7("-[N$dit N$qst] "+[$,A]);
this.N$Pit=$;
this.N$Hst(2001,{
status:$,
duration:A
});
};
K.N$Rst=function($,A){
var B,D;
C._g.N$F7("-[N$dit N$Rst] "+[$,A]);
var E=$;
if(7==this.N$Oit)return;
if(0==this.N$Pit){
this.N$Bit++;
if($){
this.N$Mit++;
(B=this.N$Tit&&this.N$Tit.N$Tst())&&B.N$Ust(this.N$kit&&this.N$kit.N$Nst());
}else(D=this.N$Tit&&this.N$Tit.N$Tst())&&D.N$zst(this.N$kit&&this.N$kit.N$Nst());
}
$||!this.N$Nit||!this.N$Nit.N$Ost()||this.N$Nit&&this.N$Nit.N$Wst()||(E=!0);
E&&(0==A?this.N$Xst():this.N$qst(1,A));
this.N$Vst();
};
K.N$Jst=function(){
var $,A=!0,B=($=this.N$mit&&this.N$mit.N$Tst())&&$.N$qit();
B&&this.N$Nit&&this.N$Nit.isEqual_(B)&&(A=!1);
return A;
};
K.N$Kst=function(){
var $;
if(this.N$Eit&&this.N$Eit.N$Qst())if(($=this.N$qit())&&$.N$Ost()){
var A=3;
if(this.N$Jst())A=2;else{
var B=this.N$git&&this.N$git.N$Tst(),C=this.N$mit&&this.N$mit.N$Tst(),D=B&&B.N$zit()||0,E=C&&C.N$zit()||0,F=B&&B.N$Est()||0,G=C&&C.N$Est()||0;
D||E||F||G||(A=1);
}
this.N$pst(0);
this.N$Bst(A);
this.N$qst(3,1/0);
}else{
this.N$pst(0);
this.N$Bst(0);
this.N$Xst();
}else{
this.N$lst("Invalid Settings",null);
this.N$pst(1);
this.N$Bst(0);
this.N$qst(4,1/0);
}
};
K.N$Xst=function(){
var $,A;
if(!this.N$Eit||!this.N$Eit.N$Qst())return;
if(this.N$Nit&&this.N$Nit.N$Ost()){
var B=this.N$Nit&&this.N$Nit.N$Fst();
if(B&&(($=this.N$Tit&&this.N$Tit.N$Tst())&&$.N$jst())>=B){
this.N$Gst();
return;
}
}
this.N$qst(0,1/0);
var D=this.N$Yst(),E=this.N$bit;
this.N$bit=this.N$Eit&&this.N$Eit.N$Zst(E,D);
this.N$yit=null;
C._g.N$I7(["$D$48$"+JSON.stringify(this.N$bit),"$D$58$"+(this.N$Eit&&this.N$Eit.N$eot()),"$D$68$"+D]);
(A=this.N$Tit&&this.N$Tit.N$Tst())&&A.N$tot();
this.N$not(this.N$bit);
this.N$Vst();
this.N$Hst(2e3,null);
};
K.N$Gst=function(){
var $,A=this.N$kit&&this.N$kit.N$Nst(),B=7==this.N$Oit;
($=this.N$Tit&&this.N$Tit.N$Tst())&&$.N$rot(A,B);
this.N$git&&this.N$git.N$iot(this.N$Tit);
var C=this.N$git&&this.N$git.N$Tst(),D=this.N$mit&&this.N$mit.N$Tst(),E=C&&C.N$zit()||0,F=D&&D.N$zit()||0,G=C&&C.N$Wit()||0,H=D&&D.N$Wit()||0,I=C&&C.N$Est()||0,J=D&&D.N$Est()||0,K=G?Math.round(1e3*E/G):0,L=H?Math.round(1e3*F/H):0,M=!1,N=5;
D?E>F?M=!0:E==F&&(K>L?M=!0:K==L&&J>I&&(M=!0)):M=!0;
if(M){
N=4;
this.N$mit&&this.N$mit.N$iot(this.N$Tit);
}
this.N$Bst(N);
this.N$qst(3,1/0);
this.N$yst();
};
K.N$yst=function(){
this.N$Mit=0;
this.N$Bit=0;
this.N$Hit=0;
this.N$kit&&this.N$kit.N$sot();
this.N$Tit&&this.N$Tit.N$oot(this.N$Nit);
this.N$Vst();
this.N$Hst(2e3,null);
};
K.N$uot=function(){
this.N$git&&this.N$git.N$oot(this.N$Nit);
this.N$mit&&this.N$mit.N$oot(this.N$Nit);
};
K.N$Vst=function(){
var $,A={};
A["correct"]=this.N$Mit;
A["total"]=this.N$Bit;
A["skipped"]=this.N$Hit;
if(this.N$Nit&&this.N$Nit.N$Ost()){
A["question-count"]=($=this.N$Tit&&this.N$Tit.N$Tst())&&$.N$jst();
A["question-limit"]=this.N$Nit&&this.N$Nit.N$Fst();
}
this.N$Hst(2002,A);
this.N$Iit&&this.N$Hst(2e3,null);
};
K.N$aot=function(){
var $;
if(1==this.N$Pit){
this.N$Xst();
return;
}
if(0!=this.N$Oit)return;
if(2!=this.N$Pit){
this.N$Hit++;
($=this.N$Tit&&this.N$Tit.N$Tst())&&$.N$fot(this.N$kit&&this.N$kit.N$Nst());
}
this.N$Xst();
};
K.N$lot=function(){
var $;
if(0!=this.N$Oit)return;
if(2==this.N$Pit)return;
this.N$Hit++;
($=this.N$Tit&&this.N$Tit.N$Tst())&&$.N$fot(this.N$kit&&this.N$kit.N$Nst());
this.N$qst(2,1/0);
this.N$cot();
this.N$Vst();
this.N$Hst(2e3,null);
};
K.N$hot=function(){
1==this.N$Pit?this.N$Xst():2==this.N$Pit?this.N$aot():0==this.N$Pit&&this.N$lot();
};
K.N$pot=function($){
var A,B=this.N$Cit;
if(!B)return null;
var D=(A=new C._c.N$Jet())&&A.init(),E=D&&D.N$Ptt(B,$["width"],$["height"],$["helper-width"]);
return E&&E.N$ar();
};
K.N$dot=function($){
var A,B=this.N$Sit;
if(!B)return null;
var D=(A=new C._c.N$rrt())&&A.init(),E=D&&D.N$brt(B,$["width"],$["height"],$["scale"],$["options"]);
return E&&E.N$ar();
};
K.N$vot=function($){
var A,B=$["range"],D=B?C._c.N$Jn.N$ur(B):null,E=(A=new C._c.N$rrt())&&A.init(),F=E&&E.N$yrt(D,$["visible-width"],$["visible-height"],$["visible-white-key-count"],$["scale"],$["options"]);
return F&&F.N$ar();
};
K.N$mot=function($){
var A,B=this.N$wit;
if(!B)return null;
var D=(A=new C._c.N$Grt())&&A.init(),E=D&&D.N$Yrt(B,$["width"],$["height"],$["scale"],$["simple"],$["helper-width"]);
return E&&E.N$ar();
};
K.N$got=function(){
if(this.N$Nit&&this.N$Nit.N$yot()){
this.N$Fit=!0;
this.N$jit=!0;
this.N$Nit&&this.N$Nit.N$bot(!1);
}
};
K.N$wot=function(){
if(!this.N$Fit)return;
this.N$Fit=!1;
this.N$Nit&&this.N$Nit.N$Eot(null);
this.N$Sot();
var A=0==$.size(this.N$Nit&&this.N$Nit.N$xot()),B=Math.min(1024,this.N$Yst()/2);
!A||this.N$Eit&&this.N$Eit.N$Tot(B)||this.N$Nit&&this.N$Nit.N$Eot([C._c.N$Cot.N$Not(1)]);
};
K.N$kot=function(){
if(!this.N$jit)return;
this.N$jit=!1;
this.N$Lot();
var $=this.N$Yst();
this.N$Eit&&this.N$Eit.N$Tot($);
};
K.N$Aot=function(){
this.N$Nit&&this.N$Nit.N$bot(!1);
this.N$Nit&&this.N$Nit.N$dst({});
this.N$Nit&&this.N$Nit.N$Oot();
this.N$Fit=!0;
this.N$wot();
this.N$jit=!0;
this.N$kot();
this.N$Tit&&this.N$Tit.N$oot(this.N$Nit);
this.N$mit&&this.N$mit.N$oot(this.N$Nit);
this.N$Kst();
};
K.N$Mot=function(){
this.N$got();
this.N$Nit&&this.N$Nit.N$Oot();
this.N$wot();
};
K.N$Dot=function(){
var $;
this.N$got();
this.N$Nit&&this.N$Nit.N$Oot();
this.N$wot();
if(this.N$jit){
this.N$kot();
this.N$Tit&&this.N$Tit.N$Sst(this.N$Nit);
($=this.N$Tit&&this.N$Tit.N$Tst())&&$.N$xst(this.N$kit&&this.N$kit.N$Nst());
this.N$Kst();
if(this.N$Nit&&this.N$Nit.N$Pot()){
this.N$yst();
this.N$Nit&&this.N$Nit.N$Hot(!1);
}
}
};
K.N$Bot=function(){
this.N$kit&&this.N$kit.N$jot();
if(!this.N$Nit||!this.N$Nit.N$Fot()){
this.N$vit.nextTick=this.N$kit&&this.N$kit.N$qot();
return;
}
var $=Math.floor((Date.now()-this.N$Ait)/1e3);
if(this.N$Lit!=$){
this.N$Lit=$;
6==this.N$Oit&&this.N$Iot();
}
if(6==this.N$Oit){
this.N$vit.nextTick=this.N$Ait+1e3*(this.N$Lit+1);
return;
}
this.N$vit.nextTick=Date.now()+1e3;
};
K.N$Iot=function(){
if(!this.N$Nit||!this.N$Nit.N$Fot())return;
var $=!1,A=!1,B=0,C=this.N$Nit&&this.N$Nit.N$Ist();
if(C){
B=60*C-this.N$Lit;
if(0>=B){
B=0;
$=!0;
}
}else B=this.N$Lit;
this.N$Hst(2003,{
seconds:B,
countdown:A
});
$&&this.N$Bst(7);
};
K.N$ist=function(){
this.N$Nit&&this.N$Nit.N$Fot()||this.N$Hst(2003,{
seconds:this.N$kit&&this.N$kit.N$Nst(),
countdown:!1
});
};
K.N$Rot=function($){
var A,B,C=$["name"],D=$["identifier"];
if("last"==D||"high"==D){
var E=(A=this.N$git&&this.N$git.N$Tst())&&A.N$Uot(),F=(B=this.N$mit&&this.N$mit.N$Tst())&&B.N$Uot();
if(E==F){
this.N$git&&this.N$git.N$zot(C);
this.N$mit&&this.N$mit.N$zot(C);
}else"last"==D?this.N$git&&this.N$git.N$zot(C):"high"==D&&this.N$mit&&this.N$mit.N$zot(C);
}else this.N$Tit&&this.N$Tit.N$zot(C);
this.N$Vst();
};
K.N$Wot=function($){
var A=$&&$["tag"];
void 0==A?this.N$Xot():this.N$Vot(A);
};
K.N$Jot=function($){
var A=$["pause"],B=$["name"];
A?this.N$kit&&this.N$kit.N$Kot(B):this.N$kit&&this.N$kit.N$Qot(B);
};
K.N$Got=function(){
var $;
if(!this.N$Nit||!this.N$Nit.N$Ost())return;
this.N$yst();
this.N$Jst()&&this.N$uot();
this.N$Ait=($=this.N$Tit&&this.N$Tit.N$Tst())&&$.N$kst();
this.N$Lit=-1;
this.N$Bst(6);
this.N$Bot();
this.N$Xst();
};
K.N$Yot=function(){
var $;
if(!($=this.N$qit())||!$.N$Ost())return;
this.N$Gst();
};
K.N$lst=function($,A){
var B,C;
$||($="No Title");
A||(A="");
$=$+": "+((B=(C=this.constructor)&&C.N$Git())&&B.N$Zot());
this.N$Hst(2022,{
title:$,
message:A
});
};
K.N$eut=function(){
var $,A="$D$78$"+(this.N$Nit&&this.N$Nit.N$tut())+"/"+(this.N$Nit&&this.N$Nit.N$nut());
return $={},D($,"$D$88$",this.N$Lit),D($,"$D$98$",this.N$Pit),D($,"$D$A8$",this.N$bit),
D($,"$D$B8$",this.N$Nit&&this.N$Nit.N$gst()),D($,"$D$C8$",A),$;
};
K.N$Hst=function($,A){
this.N$vit._sendCommand($,A);
};
K.N$rut=function($,A){
var B,C;
return 1008==$?this.N$xit&&this.N$xit.N$iut(A):1e3==$?(B=(C=this.constructor)&&C.N$Git())&&B.N$Zot():1006==$?this.N$sut():1007==$?this.N$out():1002==$?this.N$Mst(A):1003==$?this.N$Lst():1009==$?this.N$pot(A):1011==$?this.N$dot(A):1012==$?this.N$vot(A):1010==$?this.N$mot(A):1013==$?!!this.N$bit:1005==$?this.N$kit&&this.N$kit.N$uut():1203==$?this.N$Nit&&this.N$Nit.N$yot()||this.N$jit:1004==$?this.N$Dit:this.N$Nit&&this.N$Nit.N$rut($,A);
};
K.N$aut=function($,A){
if(3e3==$){
if(2==this.N$Dit)return;
this.N$Iit=!0;
this.N$kit&&this.N$kit.N$fut();
this.N$Fit=!0;
this.N$wot();
this.N$jit=!0;
this.N$kot();
this.N$bit&&(this.N$lut(this.N$bit)||(this.N$bit=null));
if(this.N$bit){
C._g.N$F7("$D$D8$"+JSON.stringify(this.N$bit));
this.N$not(this.N$bit);
if(this.N$Nit&&this.N$Nit.N$Ost()){
this.N$Bst(6);
this.N$Bot();
}
}else this.N$Kst();
this.N$Vst();
}else if(3001==$)this.N$ust(A);else if(3002==$)this.N$Aot();else if(3018==$)this.N$Mot();else if(3003==$)this.N$Dot();else if(3004==$){
this.N$uot();
this.N$yst();
if(0!=this.N$Oit){
this.N$Bst(1);
this.N$qst(3,1/0);
}
}else 3005==$?this.N$aot():3006==$?this.N$lot():3008==$?this.N$Wot(A):3010==$?this.N$Jot(A):3007==$?this.N$hot():3009==$?this.N$Rot(A):3012==$?this.N$Got(A):3013==$?this.N$Yot(A):this.N$Nit&&this.N$Nit.N$aut($,A);
};
K.N$cut=function($){
this.N$Eit&&this.N$Eit.N$hut($);
};
K.N$put=function(){
return this.N$Eit&&this.N$Eit.N$dut();
};
K.N$vut=function(){
this.N$yit||(this.N$yit=this.N$mut(this.N$bit));
return this.N$yit;
};
K.N$gut=function($,A,B){
if(0!=this.N$Pit)return;
var C=this.N$Nit&&this.N$Nit.N$Ost()&&!(this.N$Nit&&this.N$Nit.N$Wst());
if($||C){
C&&!$&&2==A&&(A=0);
if(0==A){
this.N$yut(1);
this.N$Hst(2014,{
correct:$,
object:B,
intent:1
});
this.N$Rst($,0);
}else if(1==A){
this.N$yut(2);
this.N$Hst(2014,{
correct:$,
object:B,
intent:2
});
this.N$Rst($,1/0);
}else if(2==A){
var D=this.N$vut(),E=D&&D.N$Vr()||0,F=D&&D.N$Xr()||0;
this.N$yut(1);
this.N$Hst(2014,{
correct:$,
object:B,
"sequence-id":F,
duration:E,
intent:1
});
D&&this.N$but(D);
this.N$Rst($,1/0);
}else if(3==A){
this.N$yut(1);
this.N$Hst(2014,{
correct:$,
object:B,
duration:.5,
intent:1
});
this.N$Rst($,.5);
}
}else{
this.N$yut(0);
this.N$Hst(2014,{
correct:!1,
object:B,
intent:0
});
this.N$Rst(!1,0);
}
this.N$Vst();
};
K.N$wut=function(){
this.N$Hst(2015,null);
};
K.N$Eut=function($){
this.N$Hst(2017,{
instrument:$
});
};
K.N$Sut=function($,A,B){
this.N$Hst(2005,{
buttons:$,
layouts:B,
options:A
});
};
K.N$xut=function($){
this.N$Hst(2007,{
range:$&&$.N$ar()
});
};
K.N$Tut=function($){
this.N$Hst(2016,{
object:$
});
};
K.N$Nut=function($){
this.N$Hst(2016,{
object:$
});
};
K.N$Cut=function($){
this.N$Cit=$;
this.N$Hst(2010,{});
};
K.N$kut=function($){
this.N$Sit=$;
this.N$Hst(2011,{});
};
K.N$Lut=function($){
this.N$wit=$;
this.N$Hst(2012,{});
};
K.N$but=function($){
this.N$Hst(2018,{
sequence:$&&$.N$ar()
});
};
K.N$sut=function(){
return 0;
};
K.N$out=function(){
return 0;
};
K.N$Yst=function(){
return 8192;
};
K.N$Vot=function(){};
K.N$Xot=function(){};
K.N$cot=function(){};
K.N$yut=function(){};
K.N$Sot=function(){};
K.N$Lot=function(){};
K.N$not=function(){};
K.N$Aut=function(){
return!1;
};
K.N$lut=function(){
return!0;
};
K.N$mut=function(){
return null;
};
return L;
});
}();
!function(){
"use strict";
function A($,A,B,D,E){
var F=B?C._g.N$F(B):C._g.N$j(),G=!1;
if(D){
var H=$-(F.left+F.right)-D;
if(H>0){
var I=Math.floor(H/2);
F.left+=I;
F.right+=H-I;
G=!0;
}
}
if(E){
var J=A-(F.top+F.bottom)-E;
if(J>0){
var K=Math.floor(J/2);
F.top+=K;
F.bottom+=J-K;
G=!0;
}
}
return G?F:B;
}
C._registerClass("N$est",null,function(B,D){
function E(){
this.constructor=E;
this.N$_id=++C._id;
}
D.N$Out=function($,A,B,D,E){
var F=$.height<=420;
function G(A,B,D,E,F){
return Math.ceil(C._g.N$i($.height,[A,320,B,480,D,568,E,768,F,1024]));
}
function H(A,B,D){
var E=Math.round(C._g.N$i($.height,[A,667,B,768,D,1024])),F=Math.round(C._g.N$i($.width,[0,667,32,768,96,1024]));
return C._g.N$B(E,F,E,F);
}
var I=0,J=void 0;
if(4==A){
I=G(216,344,424,576,820);
J=H(8,16,64);
}else if(5==A){
I=G(216,248,328,432,632);
J=H(8,16,16);
}else if(!F||2!=B||2!=A&&3!=A)if(3>=B){
I=G(146,180,224,264,288);
J=H(8,16,16);
var K=$.height>$.width&&$.height>700&&$.width<420;
K&&(I=Math.round(1.2*I));
}else{
I=G(146,220,232,280,376);
J=H(8,16,16);
}else{
I=120;
J=C._g.N$B(8,0,8,0);
}
$.height<=320?J=C._g.N$B(4,0,0,0):$.height<=480&&(J=C._g.N$B(8,0,0,0));
D||(J=E?C._g.N$B(0,22,11,22):C._g.N$B(0,22,22,22));
return{
w:$.width,
h:I,
i:J
};
};
D.N$Mut=function($,A,B,D){
var E=$.width,F=0,G=4==A||5==A;
if(B){
E=$.width-44;
var H=E/B;
H>32?E=32*B:16>H&&(E=16*B);
600>E&&(E=600);
F=Math.ceil(E/B/.1618);
!G&&F>160&&(F=160);
}else{
E=600;
B=15;
F=G?Math.ceil(E/B/.1618):D?180:200;
}
return{
w:E,
h:F,
i:C._g.N$B(0,22,D?11:22,22),
r:{
"visible-white-key-count":B
}
};
};
D.N$Dut=function($,A,B,D){
var E=$.width,F=0,G=C._g.N$j(),H=4==A||5==A,I=$.height-B,J=Math.ceil(H?I/1.25:I/2),K=void 0;
if($.height<=420){
F=J;
K=$.width<=480?11:15;
}else if($.width<=420){
F=Math.ceil(C._g.N$i($.height,[H?244:164,320,H?224:176,480,H?244:226,568,310,768]));
K=8;
}else{
if($.width<=420)K=8;else if($.width<=480)K=11;else if($.width<=1024||!D){
K=15;
H||(J=Math.ceil(I/2.4));
}else{
K=$.width/48;
F=Math.ceil($.width/K/.1618);
K=7*Math.floor((K-1)/7)+1;
}
D&&K>D&&(K=D);
}
F||(F=Math.ceil($.width/K/.1618));
F>J&&(F=J);
return{
w:E,
h:F,
i:G,
r:{
"visible-white-key-count":K
}
};
};
D.N$Put=function($,B){
var D=void 0,E=void 0;
if(B){
D=$.height<420?138:$.height<481?192:222;
E=C._g.N$B(8,0,0,0);
}else{
D=118;
E=C._g.N$B(0,22,22,22);
}
return{
w:$.width,
h:D,
i:A($.width,D,E,640,0)
};
};
D.N$Hut=function($,B){
var D=$.width,E=void 0,F=void 0;
if(B){
E=$.height<420?138:$.height<481?192:222;
F=C._g.N$B(8,0,0,0);
}else{
E=220;
F=C._g.N$B(0,22,22,22);
}
return{
w:D,
h:E,
i:A(D,E,F,640,0)
};
};
D.N$But=function($,A,B,D){
var E=0,F=void 0;
if(2==A||3==A){
E=D?200:240;
F=D?C._g.N$B(11,22,11,22):C._g.N$B(22,22,22,22);
}else if(B==B){
E=D?200:240;
if(D)F=C._g.N$B(11,22,11,22);else{
var G=1==A?0:22;
F=C._g.N$B(G,22,22,22);
}
}
return{
w:$.width,
h:E,
i:F
};
};
D.N$iut=function(A){
var B=A["is-tenuto"],D=A["wants-bottom-area"],E=A["input-frame"],F=A["top-length"],G=A["content-module-type"],H=A["dashboard-module-type"],I=E.height<420||E.width<420,J=I&&E.height<E.width,K=1==G,L=2==G,M=3==G,N=4==G||5==G,O={},P=null,Q=void 0,R=void 0,S=void 0,T=0,U=0,V=0,W=!(B&&I),X=!0,Y=void 0,Z=void 0,_=void 0;
if(B){
Y=C._g.N$h(E);
Z=E.width;
_=E.height;
}else{
Z=600;
_=534;
Y=2==H?C._g.N$l(Math.max(E.width,Z),534):C._g.N$l(Z,534);
}
var a=55;
D&&(Y.height-=a);
if(B||!L&&!M)if(1==H){
var b=A["dashboard-button-layouts"]||{},c="default";
J&&b["landscape"]&&(c="landscape");
var d=b[c],e=d?d.length:0;
O["button-layout-name"]=c;
P=this.N$Out(Y,G,e,B,D);
}else if(2==H){
var f=A["dashboard-keyboard-range"],g=f?C._c.N$Jn.N$ur(f):null,h=C._c.N$rrt.N$prt(g);
P=B?this.N$Dut(Y,G,F,h):this.N$Mut(Y,G,h,D);
}else 3==H?P=this.N$Put(Y,B):4==H&&(P=this.N$Hut(Y,B));else P=this.N$But(Y,G,H,D);
var i=P.h,j=P.w;
R=C._g.N$m(E.x,E.y+(Y.height-i),j,i);
var k=Y.height-i;
k-=F;
S=C._g.N$m(E.x+Math.round((j-Z)/2),F,Z,k);
if(!X){
var l=C._g.N$y(S);
l.height=44;
if(l.width>320){
l.width=320;
C._g.N$z(l,S);
}
O["score-frame"]=l;
S.height-=44;
S.y+=44;
}
O["content-corner-radius"]=Math.round(C._g.N$i(Y.width,[12,320,16,768]));
$.merge(O,P.r);
P.i&&(R=C._g.N$q(R,P.i));
Q=C._g.N$l(j,_);
if(K)if(B){
T=J?128:Math.round(C._g.N$i(Y.width,[16,320,16,414,48,768,128,1024]));
U=T;
}else{
T=22;
U=22;
}else if(L)B||(T=22);else if(M){
if(!B){
T=22;
U=22;
}
}else if(N){
var m=1;
if(5==G)if(J){
m=3;
V=2;
}else m=2;
if(B)T=W?112:64;else{
S=C._g.N$E(S,22,22);
T=80;
}
O["audio-player-plan"]=m;
}
if(D){
var n=C._g.N$y(R);
n.height=55;
C._g.N$Et(n,C._g.N$d(Y));
O["bottom-area"]=n;
}
O["output-size"]=Q;
O["top-bar-has-customize"]=W;
O["top-bar-has-score"]=X;
O["content-inset-width"]=T;
O["content-helper-width"]=U;
R&&(O["dashboard-frame"]=R);
S&&(O["content-frame"]=S);
V&&(O["content-column-count"]=V);
return O;
};
return E;
});
}();
!function(){
"use strict";
C._registerClass("N$Yit",null,function(A,B){
function D(){
this.N$jut=this.N$Fut=this.N$Iut=this.N$qut=this.N$Rut=this.N$Uut=this.N$zut=this.N$Wut=null;
this.N$Xut=this.N$Vut=0;
this.constructor=D;
this.N$_id=++C._id;
}
B.N$dut=function(){
return this.N$Wut;
};
B.N$Zit=function($){
this.N$jut=$;
};
B.N$Jut=function(){
return this.N$jut;
};
B.N$eot=function(){
return this.N$Xut;
};
B.N$Kut=function($,A){
var B=!1,C=0,D=this.N$Uut,E=this.N$zut,F=this.N$qut,G=this.N$Rut;
this.N$Xut=-1;
for(;C++<A&&!B;){
for(var H={},I=0,J=D.length;J>I;I++){
var K=D[I],L=E[I];
H[K]=Math.floor(Math.random()*L);
}
for(var M=0,N=F.length;N>M;M++){
var O=F[M],P=G[M],Q=Math.floor(Math.random()*P.length);
H[O]=P[Q];
}
var R=C/A;
if(this.N$jut&&this.N$jut.N$Aut(H,$,R)&&this.N$jut&&this.N$jut.N$lut(H)){
this.N$Xut=C;
return H;
}
}
return null;
};
B.N$Tot=function($){
if(this.N$Fut)return!0;
if(!this.N$Wut)return!1;
var A=this.N$Kut(null,$);
if(!A)return!1;
var B=this.N$Kut(A,$);
if(!B)return!1;
this.N$Fut=[A,B];
this.N$Iut=B;
return!0;
};
B.N$Zst=function($,A){
var B=void 0;
if(this.N$Iut){
B=this.N$Iut;
this.N$Iut=null;
}
B||(B=this.N$Kut($,A));
B||(B=this.N$Fut[this.N$Vut++]);
return B;
};
B.N$Qst=function(){
return!!this.N$Fut;
};
B.N$hut=function(A){
var B=this;
if(this.N$Wut!=A){
this.N$Wut=A;
this.N$Vut=0;
this.N$Fut=null;
var C=[],D=[],E=[],F=[],G=$.keys(A).sort();
$.each(G,function(B){
var G=A[B];
if($.isArray(G)){
E.push(B);
F.push(G);
}else if($.isNumber(G)){
C.push(B);
D.push(G);
}
});
B.N$Uut=C;
B.N$zut=D;
B.N$qut=E;
B.N$Rut=F;
}
};
return D;
});
}();
!function(){
"use strict";
C._registerClass("N$Qut",null,function(A){
function B(){
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Gut=function(){
return[4,5,6,14,15,16,24,25,26,34,35,36,44,45,46,54,55,56,64,65,66];
};
A.N$Yut=function(A,B){
var C=void 0;
if(16==A){
C=[[26,66,null,null,null,null,null],[25,65,36,6,46,16,56],[24,64,35,5,45,15,55],[null,null,34,4,44,14,54]];
$.includes(B,26)||$.includes(B,66)||C.shift();
}else if(17==A){
C=[[6,46,16,56,26,66,null],[5,45,15,55,25,65,36],[4,44,14,54,24,64,35],[null,null,null,null,null,null,34]];
$.includes(B,34)||C.pop();
}else C=18==A?[[36,6,46,16,56,26,66],[35,5,45,15,55,25,65],[34,4,44,14,54,24,64]]:11==A?[[56,66,6,16,26,36,46],[55,65,5,15,25,35,45],[54,64,4,14,24,34,44]]:[[6,16,26,36,46,56,66],[5,15,25,35,45,55,65],[4,14,24,34,44,54,64]];
return C;
};
A.N$Zut=function($,A,B){
for(var C=0,D=$.length;D>C;C++){
var E=$[C],F=E&&E.N$On(A);
if(-100==F)continue;
0==F&&(F=1);
if(Math.abs(F)>B)return!1;
}
return!0;
};
A.N$eat=function($,A,B){
for(var C=0,D=$.length;D>C;C++){
var E=$[C],F=E&&E.N$en();
if(F>2||-2>F)return!1;
var G=E&&E.N$An(A);
if(!B||!B.N$fr(G))return!1;
}
return!0;
};
A.N$tat=function(A,B,D,E){
var F,G,H=(F=new C._c.N$Kt())&&F.N$pn(A),I=(G=new C._c.N$K7())&&G.N$V7(B),J=H&&H.N$Bn(I&&I.N$Y7(),!0,D),K=0;
!function(){
var A=E&&E.N$nr(),B=E&&E.N$rr(),C=0,D=128;
$.each(J,function($){
var A=$&&$.N$Ln();
A>C&&(C=A);
D>A&&(D=A);
});
for(;C+K>A;)K-=12;
for(;B>D+K;)K+=12;
}();
return $.map(J,function($){
return($&&$.N$Ln())+K;
});
};
A.N$nat=function($,A){
var B=C._c.N$ti.N$ei($),D=B&&B.N$gi(),E=B&&B.N$mi(),F=A&&A.N$rr(),G=A&&A.N$nr();
E&&E.N$fr(F)||(F=D&&D.N$rr());
E&&E.N$fr(G)||(G=D&&D.N$nr());
return C._c.N$Jn.N$ir(F,G);
};
A.N$rat=function($){
$=Math.floor($);
var A=Math.floor($/3600),B=Math.floor($/60)%60,C=$%60,D="";
A>0&&(D+=A+":");
A>0&&10>B&&(D+="0");
D+=B+":";
10>C&&(D+="0");
D+=C;
return D;
};
A.N$iat=function($){
if(6==$)return"Up C";
if(16==$)return"Up D";
if(26==$)return"Up E";
if(36==$)return"Up F";
if(46==$)return"Up G";
if(56==$)return"Up A";
if(66==$)return"Up B";
if(5==$)return"C";
if(15==$)return"D";
if(25==$)return"E";
if(35==$)return"F";
if(45==$)return"G";
if(55==$)return"A";
if(65==$)return"B";
if(4==$)return"Down C";
if(14==$)return"Down D";
if(24==$)return"Down E";
if(34==$)return"Down F";
if(44==$)return"Down G";
if(54==$)return"Down A";
if(64==$)return"Down B";
return null;
};
A.N$sat=function($){
if(26==$)return"Up 2";
if(36==$)return"Up 3";
if(46==$)return"Up 4";
if(56==$)return"Up 5";
if(66==$)return"Up 6";
if(76==$)return"Up 7";
if(86==$)return"Up 8";
if(25==$)return"2";
if(35==$)return"3";
if(45==$)return"4";
if(55==$)return"5";
if(65==$)return"6";
if(75==$)return"7";
if(85==$)return"8";
if(24==$)return"Down 2";
if(34==$)return"Down 3";
if(64==$)return"Down 6";
if(74==$)return"Down 7";
if(23==$)return"Left 2";
if(33==$)return"Left 3";
if(44==$)return"Left 4";
if(54==$)return"Left 5";
if(63==$)return"Left 6";
if(73==$)return"Left 7";
if(84==$)return"Left 8";
return null;
};
A.N$oat=function($){
return["1","Down 2","2","Down 3","3","4","Down 5","5","Down 6","6","Down 7","7","8"][$]||null;
};
A.N$uat=function($,A,B){
if(0==B)return!1;
var D=C._c.N$Kt.N$on($,A),E=D%7;
return 1==B&&(2==E||6==E)||-1==B&&(0==E||3==E);
};
A.N$aat=function($,A,B){
var D=$&&$.N$rr(),E=$&&$.N$nr();
if(7>E-D){
E%2==0&&E++;
D%2==0&&D--;
return C._c.N$Jn.N$ir(D,E);
}
E%2==0&&E==A&&(E+=2);
D%2==0&&D==A&&(D-=2);
var F=[],G=void 0;
if(A%2==0){
A--;
G=A-4;
}else G=A-6;
for(;A>=G;){
var H=G+6;
G>=D&&E>=G&&H>=D&&E>=H&&F.push(C._c.N$Jn.N$ir(G,H));
G+=2;
}
return F.length>0?F[B%F.length]:null;
};
A.N$fat=function($){
var A,B=$&&$.N$rr(),D=$&&$.N$nr();
function E($,A,B){
for(;;){
var C=$%12;
if(0===C||B&&5==C)break;
$+=A;
}
return $;
}
var F=D-B>36;
B=E(B,-1,F);
D=E(D,1,F);
B>60&&(B=60);
60>D&&(D=60);
for(;24>D-B;)Math.abs(D-60)>Math.abs(B-60)?B=E(B-1,-1,F):D=E(D+1,1,F);
return(A=new C._c.N$Jn())&&A.N$sr(B,D);
};
A.N$lat=function(A,B,D){
var E=[],F=!B||1==B,G=!B||2==B,H=null;
if(D){
H=[!1,!1,!1,!1,!1,!1,!1];
$.each(D,function($){
var A=C._c.N$Kt.N$un($);
H[A]=!0;
});
}
$.each(A&&A.N$cat(),function($){
var B=A&&A.N$hat($);
B||(B=A&&A.N$hat(0));
for(var D=B&&B.N$rr();D<=(B&&B.N$nr());D++){
var I=(0>D?-D:D)%2===0,J=F&&I||G&&!I;
if(!J)continue;
var K=C._c.N$Kt.N$on($,D),L=K%7,M=!H||H[L];
if(!M)continue;
E.push({
clef:$,
position:D
});
}
});
return E;
};
A.N$pat=function(A,B,D,E){
var F=[];
0==B?$.each(A,function(A){
$.each(D,function($){
var B=C._c.N$M9.N$H9(A,$);
F.push({
scale:A,
tonic:B
});
});
}):1==B&&!function(){
var B={};
$.each(E,function($){
B[$]=!0;
});
for(var D=function(D){
$.each(A,function($){
var A=C._c.N$M9.N$H9($,D);
B[A]&&F.push({
scale:$,
tonic:A
});
});
},G=-7;7>=G;G++)D(G);
}();
return F;
};
A.N$dat=function($,A,B,D,E){
var F=$&&$.N$Y9(),G=A&&A.N$Y9(),H=$&&$.N$G9(),I=A&&A.N$G9(),J=!1;
2==E?J=!0:1==E&&(J=0==F);
if(J){
var K=C._c.N$Kt.N$Sn(B,D,F,H),L=C._c.N$Kt.N$Sn(B,D,G,I);
return K&&K.isEqual_(L);
}
return F==G&&H==I;
};
A.N$vat=function($,A,B,C,D){
var E=$.length,F=A.length;
if(E!=F)return!1;
for(var G=0;E>G;G++){
var H=$[G],I=A[G];
if(!this.N$dat(H,I,B,C,D))return!1;
}
return!0;
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$mat",null,function(A,B){
function D(){
this.N$gat=this.N$yat=this.N$Nit=null;
this.N$bat=this.N$wat=this.N$Mit=this.N$Eat=this.N$Sat=this.N$xat=this.N$Tat=this.N$Hit=this.N$Bit=0;
this.constructor=D;
this.N$_id=++C._id;
}
B.N$Nat=function(){
return this.N$Sat;
};
B.N$qit=function(){
return this.N$Nit;
};
B.N$Cat=function(){
return this.N$yat;
};
B.N$zit=function(){
return this.N$Mit;
};
B.N$Wit=function(){
return this.N$Bit;
};
B.N$Xit=function(){
return this.N$Hit;
};
B.N$kat=function(){
return this.N$xat;
};
B.N$jst=function(){
return this.N$Tat;
};
B.N$kst=function(){
return this.N$wat;
};
B.N$Uot=function(){
return this.N$gat;
};
B.N$Lat=function(A,B,E,F,G,H,I,J,K){
var L=this;
if(L=D.N$_super.prototype.init.call(this)){
L.N$Sat=C._c.N$fst.N$Aat(A&&A.N$tut());
L.N$yat=B;
L.N$Nit=A;
L.N$Mit=E;
L.N$Bit=F;
L.N$Hit=G;
L.N$Tat=I||0;
L.N$Eat=H;
L.N$wat=J||Date.now();
L.N$gat=K||$.uuid();
L.N$bat=0;
L.N$xat=0;
}
return L;
};
B.N$Oat=function($,A,B,C,D,E){
return this.N$Lat($,A,B,C,D,E,0,0,null);
};
B.N$Mat=function($,A){
return this.N$Lat($,A,0,0,0,0,0,0,null);
};
B.N$Dat=function($){
var A,B;
if(!$)return null;
var D=$.b,E=$.c,F=$.e,G=$.h,H=$.n,I=$.o,J=$.p,K=$.q,L=$.s,M=$.t,N=$.u,O=C._c.N$Hat.N$Pat([N,D,I||"",H||"",J||"",F,L,E,M,K]);
if(O.join(",")!=G.join(","))return null;
var P=C._c.N$fst.N$Bat(J),Q=(A=(B=P&&P.N$Git())&&B.alloc())&&A.init();
if(!Q)return null;
if(!Q||!Q.N$cst(J,I))return null;
return this.N$Lat(Q,H,E,M,L,F,K,D,N);
};
B.N$gst=function(){
var $=this.N$Nit&&this.N$Nit.N$tut(),A=this.N$Nit&&this.N$Nit.N$nut(),B=this.N$Est(),D=C._c.N$Hat.N$Pat([this.N$gat,this.N$wat,A||"",this.N$yat||"",$||"",B,this.N$Hit,this.N$Mit,this.N$Bit,this.N$Tat]);
return{
b:this.N$wat,
c:this.N$Mit,
e:B,
h:D,
n:this.N$yat,
o:A,
p:$,
q:this.N$Tat,
s:this.N$Hit,
t:this.N$Bit,
u:this.N$gat
};
};
B.N$rot=function($,A){
var B=this.N$Nit,C=B&&B.N$Fst(),D=B&&B.N$Ist();
!(C>0)||B&&B.N$Wst()||(this.N$Bit=C);
if(A){
this.N$Eat=60*D;
this.N$bat=this.N$xat=0;
}else this.N$Ast($);
};
B.N$tot=function(){
this.N$Tat++;
};
B.N$Ust=function($){
this.N$Mit++;
this.N$Bit++;
this.N$Ast($);
};
B.N$zst=function($){
this.N$Bit++;
this.N$Ast($);
};
B.N$fot=function($){
this.N$Hit++;
this.N$Ast($);
};
B.N$zot=function($){
this.N$yat||(this.N$yat=$);
};
B.N$xst=function($){
this.N$Eat+=this.N$xat-this.N$bat;
this.N$xat=this.N$bat=$;
};
B.N$Ast=function($){
isNaN($)||(this.N$xat=$);
};
B.N$jat=function($){
this.N$Eat=$;
this.N$bat=this.N$xat=0;
};
B.N$Est=function(){
return this.N$Eat+(this.N$xat-this.N$bat);
};
return D;
});
}();
!function(){
"use strict";
var A=void 0;
C._registerClass("N$Pst",null,function(B,D){
function E(){
this.constructor=E;
this.N$_id=++C._id;
}
B.N$Si=function(){
var $;
A||(A=($=this.alloc())&&$.init());
return A;
};
D.N$Fat=function($){
var A=$&&$.N$Est(),B=Math.floor(A/3600),C=Math.floor(A/60)%60,D=A%60,E="";
B>0&&(E+=B+":");
B>0&&10>C&&(E+="0");
E+=C+":";
10>D&&(E+="0");
E+=D;
return E;
};
D.N$Iat=function($){
var A=$&&$.N$Wit(),B=$&&$.N$zit();
return(A>0?Math.round(B/A*100):0)+"%";
};
D.N$qat=function($){
var A=$&&$.N$Wit(),B=$&&$.N$zit(),C=$&&$.N$Xit(),D="";
D+=B+"/"+A+", ";
D+=this.N$Iat($);
C>0&&(D+=", "+C+" skipped");
return D;
};
D.N$Rat=function(A){
function B(A){
var B="";
$.each(A,function($,A){
B+=A+": "+$+";";
});
return B;
}
var C={};
C["title-td"]=B({
"text-align":"center",
"font-weight":"bold",
color:"#202020",
"padding-top":"1em",
"padding-bottom":"1em",
"font-size":"1.25em"
});
C["code-td"]=B({
"padding-top":"0.5em",
"text-align":"center",
color:"#202020"
});
C["verify-td"]=B({
"padding-top":"0.5em",
"padding-bottom":"0.5em",
"text-align":"center"
});
C["td-left"]=C["td-range-left"]=B({
"font-weight":"bold",
"padding-right":"8px",
"white-space":"nowrap"
});
C["td-right"]=B({
"padding-left":"8px"
});
C["header-td"]=B({
"text-align":"center",
"font-weight":"bold",
color:"#606060",
"padding-top":"1em",
"border-bottom":"1px solid #404040"
});
C["vline-td"]=B({
"border-left":"1px dashed #404040"
});
if(!A){
C["body"]=B({
"font-family":"Helvetica",
margin:"0.5in 0.5in 0 0.5in"
});
C["verify-a"]=B({
"text-decoration":"none"
});
}
return C;
};
D.N$Uat=function(A,B){
var D=this,E=[],F=A&&A.N$qit();
function G($,A,B){
var C=["C","D","E","F","G","A","B"],D="",E="";
if(34==A){
E="B4";
D="(Treble)";
}else if(22==A){
E="D3";
D="(Bass)";
}else if(28==A){
E="C4";
D="(Alto)";
}else if(26==A){
E="A3";
D="(Tenor)";
}else if(32==A){
E="G4";
D="(Soprano)";
}else if(30==A){
E="E4";
D="(Mezzo-soprano)";
}else if(24==A){
E="F3";
D="(Baritone Range";
}else if(-2==A){
E="C4";
D="(Grand Staff)";
}
var F=7*parseInt(E.slice(1),10)+C.indexOf(E.slice(0,1)),G=F+($&&$.N$rr()),H=F+($&&$.N$nr()),I=C[G%7]+(""+Math.floor(G/7)),J=C[H%7]+(""+Math.floor(H/7)),K=I+" - "+J;
B&&(K+=" "+D);
return K;
}
function H($,A){
var B=F&&F.N$Stt();
return C._c.N$i8.N$x8($,B,1,A);
}
function I($){
var A=$&&$.N$zat();
A||(A=$&&$.N$zet());
A||(A=$&&$.N$Wat());
return A;
}
function J($,A){
var B={};
B["name"]=$;
B["value"]=A;
B["string"]=A;
E.push(B);
}
function K($){
var B,C=$&&$.N$Xat(),D=$&&$.N$Vat(),F=$&&$.N$Wn(),H=!1;
if(0==F){
F=((B=A&&A.N$qit())&&B.N$cat())[0];
H=!0;
}
var I={};
I["name"]=C;
I["value"]=D&&D.N$ar();
I["string"]=G(D,F,H);
I["clef"]=F;
E.push(I);
}
function L(A){
var B,C=A&&A.N$Xat(),D=A&&A.N$vi(),E=A&&A.N$Vat(),G=A&&A.N$Jat(),K=void 0;
if(5==G){
var L=A&&A.N$Kat();
L&&(K=L(!1));
}
if(!K)if(0==D){
K=I(A&&A.N$Qat(E));
K||(3==G?K=E?"On":"Off":4==G&&(K=E?"Off":"On"));
}else if(1==D){
var M=[];
$.each(A&&A.N$Gat(),function(A){
$.includes(E,A&&A.N$Wn())&&M.push(I(A));
});
K=M.join(", ");
}else if(3==D)K=H(E&&E.N$rr(),!0)+" - "+H(E&&E.N$nr(),!0);else if(4==D)K=H(E,!0);else if(5==D){
for(var N=(B=F&&F.N$Zrt())&&B.N$d2(),O=[],P=N.length-1;P>=0;P--){
var Q=N[P];
O.push(H(Q&&Q.N$s9(),!1));
}
K=O.join(" ");
}
J(C,K);
}
var M=[];
if(B){
J("Score",D.N$qat(A));
J("Time",D.N$Fat(A));
}
$.each(F&&F.N$Yat(),function(A){
$.each(A&&A.N$Zat(),function($){
$&&$.N$eft()||(2==($&&$.N$vi())?M.push($):L($));
});
});
$.each(M,function($){
K($);
});
if(F&&F.N$Ost()){
J("Challenge Mode","On");
L(F&&F.N$tft("ChallengeTimeLimit"));
L(F&&F.N$tft("ChallengeQuestionLimit"));
L(F&&F.N$tft("ChallengeMultipleAttempts"));
}else J("Challenge Mode","Off");
return E;
};
D.N$nft=function($,A){
var B=this,C={},D=[],E=void 0,F=void 0,G=void 0;
function H(){
var A=$&&$.N$Cat();
if(A){
C["name"]=A;
C["code"]=$&&$.N$rft();
C["url"]=$&&$.N$ift();
}
var D=$&&$.N$sft(),H=$&&$.N$bst();
if(D.length>0){
var I=D[D.length-1];
C["uuid"]=I&&I.N$Uot();
}
F=B.N$Iat(H);
E=B.N$qat(H);
G=B.N$Fat(H);
C["correct"]=H&&H.N$zit();
C["total"]=H&&H.N$Wit();
C["elapsed"]=H&&H.N$Est();
C["percent"]=F;
C["score"]=E;
C["time"]=G;
}
function I($,A){
var B={};
B["name"]=$;
B["value"]=A;
B["string"]=A;
return B;
}
function J($,A){
var B={};
B["title"]=$;
B["rows"]=A;
D.push(B);
}
function K(){
{
var A=$&&$.N$sft(),C=A.length>1;
$&&$.N$bst();
}
J("Exercise Information",[I("Name",$&&$.N$Zot()),I(C?"Total Score":"Score",E),I(C?"Total Time":"Time",G)]);
for(var D=0,F=A.length;F>D;D++){
var H="Customized Settings";
C&&(H+=" ("+(D+1)+" of "+A.length+")");
J(H,B.N$Uat(A[D],C));
}
}
H();
A||K();
D.length&&(C["sections"]=D);
return C;
};
D.N$oft=function(A,B){
var D,E=this.N$Rat(B),F=(D=new C._c.N$uft())&&D.init(),G=A&&A.N$sft();
if(!G||!G.length)return null;
var H=(A&&A.N$bst(),this.N$nft(A,!1)),I=A&&A.N$rft(),J=A&&A.N$ift(),K=B?"musictheory.net":"www.musictheory.net/verify";
F&&F.N$aft(A&&A.N$Cat());
F&&F.N$fft(I,J,K);
$.each(H["sections"],function(A){
var B=A["title"],C=A["rows"];
F&&F.N$lft(B);
$.each(C,function($){
var A=$["name"],B=$["string"];
F&&F.N$cft(A,B);
});
F&&F.N$hft();
});
return F&&F.N$pft(E);
};
D.N$Dst=function(A,B){
if(0==B)return this.N$nft(A,!1);
if(9==B)return this.N$nft(A,!0);
if(1==B)return $.format("%1 Progress Report",A&&A.N$Zot());
if(2==B)return this.N$oft(A,!0);
if(3==B)return this.N$oft(A,!1);
if(4==B)return A&&A.N$dft();
return null;
};
return E;
});
}();
!function(){
"use strict";
C._registerClass("N$tst",null,function(B,D){
function E(){
this.N$vft=this.N$mft=this.N$yat=this.N$gft=null;
this.N$yft=0;
this.constructor=E;
this.N$_id=++C._id;
}
D.N$Tst=function(){
return this.N$vft;
};
D.N$Cat=function(){
return this.N$yat;
};
D.N$mst=function(){
return this.N$gft;
};
D.init=function(){
var $=this;
if($=E.N$_super.prototype.init.call(this)){
$.N$gft=[];
$.N$vft=null;
}
return $;
};
D.N$iot=function($){
var A,B,D=(A=$&&$.N$Tst())&&A.N$gst();
this.N$yat=$&&$.N$Cat();
this.N$vft=(B=new C._c.N$mat())&&B.N$Dat(D);
this.N$gft=[this.N$vft];
};
D.N$oot=function($){
this.N$yat=null;
this.N$gft=[];
this.N$vft=null;
this.N$Sst($);
};
D.N$Sst=function($){
for(var A,B,D,E,F,G=$&&$.N$tut(),H=$&&$.N$nut(),I=void 0,J=void 0,K=void 0,L=void 0,M=0,N=this.N$gft.length;N>M;M++){
K=this.N$gft[M];
I=(A=K&&K.N$qit())&&A.N$tut();
J=(B=K&&K.N$qit())&&B.N$nut();
if(I==G&&J==H){
L=K;
break;
}
}
if(L){
var O=this.N$gft.indexOf(L);
O>=0&&this.N$gft.splice(O,1);
}else{
var P={};
$&&$.N$bft(P);
var Q=(D=(E=$?$["class"]():null)&&E.alloc())&&D.init();
Q&&Q.N$dst(P);
L=(F=new C._c.N$mat())&&F.N$Mat(Q,this.N$yat);
}
this.N$gft.unshift(L);
this.N$vft=L;
};
D.N$zot=function(A){
if(!this.N$yat){
this.N$yat=A;
$.each(this.N$gft,function($){
$&&$.N$zot(A);
});
}
};
D.N$ift=function(){
var $=this.N$rft(),A=$?$.replace(/\-/g,""):"";
return"https://www.musictheory.net/verify/#"+A;
};
D.N$dft=function(){
var $=this.N$rft(),A=$?$.replace(/\-/g,""):"";
return"https://www.musictheory.net/report/#"+A;
};
D.N$wft=function($){
var A=this,B=0,D=!0,E=void 0;
this.N$gft=[];
C._c.N$Hat.N$Eft(function(D){
var F,G,H;
if(E){
E.push(D);
if(7==E.length){
var I=E[0],J=E[1],K=E[2],L=E[3],M=E[4],N=E[6],O=C._c.N$fst.N$Sft(J),P=C._c.N$fst.N$Bat(O),Q=(F=(G=P&&P.N$Git())&&G.alloc())&&F.init();
Q&&Q.N$cst(O,I);
var R=(H=new C._c.N$mat())&&H.N$Oat(Q,A.N$yat,K,L,M,N);
A.N$gft.push(R);
A.N$Sst(Q);
E=[];
}
}else if(2==B){
E=[];
A.N$yft=D;
}else 1==B&&A.N$zot(D);
B++;
return $;
})||(D=!1);
return D;
};
D.N$rft=function(){
var $;
if(!this.N$yat)return null;
for(var B=[this.N$yat,this.N$yft],D=this.N$sft(),E=D.length-1;E>=0;E--){
var F=D[E];
B.push(($=F&&F.N$qit())&&$.N$nut(),F&&F.N$Nat(),F&&F.N$zit(),F&&F.N$Wit(),F&&F.N$Xit(),0,F&&F.N$Est());
}
var G=void 0,H=0;
C._c.N$Hat.N$xft(function($){
if(H<B.length)return B[H++];
G=$;
});
!function(){
var $=void 0,D=C._c.N$Hat.N$Eft(function(A){
if(!$){
$=[];
return G;
}
$.push(A);
}),E=$.pop(),F=B.shift(),H=$.shift(),I=F.toUpperCase().replace(/[^A-Z0-9]/g,"")==H.toUpperCase().replace(/[^A-Z0-9]/g,""),J=B.join(",").toUpperCase()==$.join(",").toUpperCase();
if(!D||!I||!J){
B.unshift(F);
$.unshift(H);
var K=A("trace",!0);
K&&K.trace({
title:"Code Mismatch",
message:["Code Mismatch",G,E,B.join(","),$.join(",")].join("\n")
});
}
}();
return G;
};
D.N$bst=function(){
for(var $,A=0,B=0,D=0,E=0,F=this.N$sft(),G=0,H=F.length;H>G;G++){
var I=F[G];
A+=I&&I.N$zit();
B+=I&&I.N$Wit();
D+=I&&I.N$Xit();
E+=I&&I.N$Est();
}
return($=new C._c.N$mat())&&$.N$Oat(null,null,A,B,D,E);
};
D.N$sft=function(){
if(1==this.N$gft.length)return this.N$gft;
for(var $=[],A=0,B=this.N$gft.length;B>A;A++){
var C=this.N$gft[A];
(C&&C.N$zit()||C&&C.N$Wit()||C&&C.N$Xit()||C==this.N$vft)&&$.push(C);
}
return $;
};
D.N$Tft=function($){
this.N$gft=$;
this.N$vft=$.length>0?$[0]:null;
};
D.N$vst=function($){
for(var A,B=$.n,D=$.r,E=[],F=0,G=D.length;G>F;F++){
var H=(A=new C._c.N$mat())&&A.N$Dat(D[F]);
H&&(H&&H.N$Cat())==B&&E.push(H);
}
this.N$Tft(E);
this.N$yat=B;
};
D.N$gst=function(){
for(var $,A=[],B=0,C=this.N$gft.length;C>B;B++)A.push(($=this.N$gft[B])&&$.N$gst());
return{
r:A,
n:this.N$yat
};
};
D.N$Zot=function(){
var $,A;
if(!this.N$mft){
var B=this.N$gft.length>0?this.N$gft[0]:null;
B&&(this.N$mft=($=(A=B&&B.N$qit())&&A["class"]())&&$.N$Zot());
}
return this.N$mft;
};
return E;
});
}();
!function(){
"use strict";
var A=void 0,B=!1;
B&&$.log&&(A=$.log);
var D=" -  .'ABCDEFGHIJKLMNOPQRSTUVWXYZ",E="ybndrfg8ejkmcpqxot1uwisza345h769",F="093E7W8FXGKJTRBPN4ZHCD6SQ21MY5AV";
function G($){
function A($){
for(var A=[],B=0,C=0,D=$.length;D>B;B++,C+=8)A[C>>>5]|=(255&$[B])<<24-C%32;
return A;
}
function B($){
for(var A=[],B=0,C=32*$.length;C>B;B+=8)A.push($[B>>>5]>>>24-B%32&255);
return A;
}
function C($){
var B=A($),C=8*$.length,D=1732584193,E=-271733879,F=-1732584194,G=271733878,H=-1009589776,I=[];
B[C>>5]|=128<<24-C%32;
B[(C+64>>>9<<4)+15]=C;
for(var J=0;J<B.length;J+=16){
for(var K=D,L=E,M=F,N=G,O=H,P=0;80>P;P++){
if(16>P)I[P]=B[J+P];else{
var Q=I[P-3]^I[P-8]^I[P-14]^I[P-16];
I[P]=Q<<1|Q>>>31;
}
var R=(D<<5|D>>>27)+H+(I[P]>>>0)+(20>P?(E&F|~E&G)+1518500249:40>P?(E^F^G)+1859775393:60>P?(E&F|E&G|F&G)-1894007588:(E^F^G)-899497514);
H=G;
G=F;
F=E<<30|E>>>2;
E=D;
D=R;
}
D+=K;
E+=L;
F+=M;
G+=N;
H+=O;
}
return[D,E,F,G,H];
}
return B(C($));
}
function H($){
return String.fromCharCode($);
}
function I($){
return String.fromCharCode.apply(null,$);
}
function J($,A){
for(var B=[],C=0,D=$.length;D>C;C++){
var E=$.charAt(C),F=A.indexOf(E);
F>=0&&B.push(F);
}
return B;
}
function K($,A){
for(var B=[],C=0,D=$.length;D>C;C++)B.push(A.charCodeAt($[C]));
return I(B);
}
function L($){
var A=[];
$=unescape(encodeURIComponent($));
for(var B=0,C=$.length;C>B;B++)A[B]=$.charCodeAt(B);
return A;
}
function M($){
if($)try{
return decodeURIComponent(escape(I($)));
}catch(A){}
return null;
}
function N($){
for(var A=L($),B=[0,0,0,0,0],C=G(A),D=0,E=C.length;E>D;D++)B[D%5]^=C[D];
return B;
}
function O($,A){
for(var B=0,C=A.length;C>B;B++){
var D=A[B];
$.push((1&D)>0,(2&D)>0,(4&D)>0,(8&D)>0,(16&D)>0);
}
}
function P($,A){
for(var B=0,C=0;A>C;C++)$.shift()&&(B+=1<<C);
return B;
}
function Q($){
return P($,1)>0;
}
function R($){
for(var A=0,B=0;;){
B|=P($,7)<<A;
if(0===P($,1))break;
A+=7;
}
return B;
}
function S($,A,B){
for(var C=[],D=0;A>D&&$.length>0;D++)C.push(P($,B));
return C;
}
function T($,A,B){
for(var C=0;B>C;C++){
$.push(!!(1&A));
A=Math.floor(A/2);
}
}
function U($,A){
T($,A?1:0,1);
}
function V($,A,B){
for(var C=0,D=A.length;D>C;C++)T($,A[C],B);
}
function W($,A){
for(;;){
var B=A>>>7;
T($,127&A,7);
T($,B>0?1:0,1);
if(!(A=B))break;
}
}
function X($){
for(var A=[];$.length%25!==0;)$.push(!1);
for(var B=0;B<$.length;)A.push(($[B++]?1:0)+($[B++]?2:0)+($[B++]?4:0)+($[B++]?8:0)+($[B++]?16:0));
return A;
}
function Y($){
$=$.slice(0);
for(var A=1,B=$.length;B>A;A++)$[A]=31&($[A]^$[A-1]^31&A);
return $;
}
function Z($){
for(var A=[$[0]],B=1,C=$.length;C>B;B++)A[B]=31&($[B]^$[B-1]^31&B);
return A;
}
function _($){
for(var A=[],B=0,C=$.length;C>B;B++)A.push(D.charCodeAt($[B]));
return I(A);
}
function a($){
var A=[];
$=$.toUpperCase().trim();
for(var B=0,C=$.length;C>B;B++){
var D=$.charCodeAt(B);
if(9==D||32==D)D=0;else if(45==D)D=1;else if(46==D)D=4;else if(D>=65&&90>=D)D-=59;else{
if(39!=D&&96!=D){
if(D>=48&&57>=D||D>=128)return null;
continue;
}
D=5;
}
A.push(D);
}
return A;
}
function b($){
for(var A=[],B=0,C=$.length;C>B;B+=5)A.push($.substr(B,5));
A.unshift(H(65));
A.push(H(90));
return A.join(H(45));
}
function c($){
return N($.join(H(0)));
}
function d($,A){
for(var B=$.toUpperCase(),C=[],D=B.length-1,E=0;D>=E;E++){
var F=B.charCodeAt(E);
if(79==F)F=48;else if(73==F||76==F)F=49;else if(A&&(65==F&&0==E||90==F&&E==D))continue;
C.push(F);
}
return I(C);
}
function e($,A){
var B=J(A,F),C=Z(B),D=[];
O(D,C);
var G=P(D,3),H=[],I=S(D,5,8),L=Q(D),N=1,T=0,U=void 0,V=void 0;
if(2==G){
U=R(D);
V=S(D,U,L?5:8);
N=R(D);
T=R(D);
}
for(var W=0;N>W;W++){
var X=Q(D),a=P(D,6),d=R(D),e=R(D),f=R(D),g=X?R(D):0,h=R(D);
1==G&&(U=R(D));
var i=R(D),j=S(D,i,5);
1==G&&(V=S(D,U,L?5:8));
V||(V=[]);
j||(j=[]);
var k=d+g,l=e+k,m=j.length>0?K(j,E):"";
H.push(m,a,k,l,f,g,h);
}
var n=void 0;
n=V?L?_(V):M(V):"";
H.unshift(n);
for(var o=c(H),p=!0,q=0,r=I.length;r>q;q++)if(I[q]!==o[q]){
p=!1;
break;
}
var s=Y(C),t=K(s,F),u=b(t),v=u;
if(L){
for(var w=n.split(/\s+/),x=0,y=w.length;y>x;x++)w[x]=w[x].charAt(0).toUpperCase()+w[x].substring(1).toLowerCase();
n=w.join(" ");
}
var z=H;
z.splice(0,1,n,T);
z.push(v);
for(var $A=0,AA=z.length;AA>$A;$A++)$(p?z[$A]:null);
return p;
}
function f($){
for(var A=$(),B=$(),C=[A],D=[];;){
var G=[];
G[0]=$();
if(void 0===G[0])break;
C.push(G[0]);
C.push(G[1]=$());
C.push(G[2]=$());
C.push(G[3]=$());
C.push(G[4]=$());
C.push(G[5]=$());
C.push(G[6]=$());
D.push(G);
}
var H=a(A),I=!!H;
if(H){
I=!0;
A=_(H);
C[0]=A;
}else{
I=!1;
H=L(A);
}
var M=c(C),N=void 0,O=[];
if(1==D.length&&0===B){
T(O,1,3);
V(O,M,8);
U(O,I);
N=1;
}else{
T(O,2,3);
V(O,M,8);
U(O,I);
W(O,H.length);
V(O,H,I?5:8);
W(O,D.length);
W(O,B);
N=2;
}
for(var P=0,Q=D.length;Q>P;P++){
var R=D[P],S=R[0],Z=R[1],d=R[2],e=R[3],f=R[4],g=(R[5],R[6]),h=J(S,E);
U(O,!1);
T(O,Z,6);
W(O,d);
W(O,e-d);
W(O,f);
W(O,g);
1==N&&W(O,H.length);
W(O,h.length);
V(O,h,5);
1==N&&V(O,H,I?5:8);
}
var i=X(O),j=Y(i),k=K(j,F),l=b(k);
$(l);
}
C._registerClass("N$Hat",null,function(A){
function B(){
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Eft=function(A){
if($.isFunction(A)){
var B=A();
return e(A,d(B,!0))||e(A,d(B,!1));
}
return!1;
};
A.N$xft=function($){
f($);
};
A.N$Pat=function($){
return c($);
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$Nft",null,function(A,B){
function D(){
this.N$Cft=this.N$kft=this.N$Lft=this.N$Aft=this.N$Oft=this.N$Mft=this.N$Dft=this.N$Pft=this.N$Hft=this.N$Bft=this.N$jft=this.N$Fft=this.N$Ift=this.N$qft=this.N$Rft=this.N$Uft=this.N$zft=this.N$Wft=this.N$Xft=this.N$Vft=this.N$Jft=this.N$Kft=this.N$Qft=null;
this.N$Gft=this.N$Yft=this.N$Zft=!1;
this.constructor=D;
this.N$_id=++C._id;
}
B.N$elt=function($){
this.N$Kft=$;
};
B.N$Yat=function(){
return this.N$Kft;
};
B.N$tlt=function(){
return this.N$Bft;
};
B.N$nlt=function($){
this.N$Jft=$;
};
B.N$Zat=function(){
return this.N$Jft;
};
B.N$bot=function($){
this.N$Yft=$;
};
B.N$yot=function(){
return this.N$Yft;
};
B.N$Hot=function($){
this.N$Zft=$;
};
B.N$Pot=function(){
return this.N$Zft;
};
B.N$Eot=function($){
this.N$Uft=$;
};
B.N$xot=function(){
return this.N$Uft;
};
A.N$Zot=function(){
return"";
};
A.N$rlt=function($){
return"AudioRange-"+$;
};
B.init=function(){
var $,A=this;
if(A=D.N$_super.prototype.init.call(this)){
A.N$ilt();
A.N$slt();
A.N$olt();
A.N$jft=($=A.constructor)&&$.N$ult();
}
return A;
};
B.N$alt=function($){
var A=this.N$flt(),B=A[$];
return B&&B.N$Vat();
};
B.isEqual_=function($){
if(!$||!$.isKindOfClass_(C._c.N$Nft))return!1;
var A=this.N$tut(),B=$&&$.N$tut();
if(A!=B)return!1;
var D=this.N$nut(),E=$&&$.N$nut();
return D==E;
};
A.N$ult=function(){
return null;
};
B.N$cst=function($,A){
var B=this.N$jft&&this.N$jft.N$llt($,A),C=this.N$jft&&this.N$jft.N$clt();
if(0!=C)return!1;
this.N$jft&&this.N$jft.N$Zrt();
B&&this.N$dst(B);
return!0;
};
B.N$nut=function(){
var $=null;
try{
$=this.N$jft&&this.N$jft.N$hlt(this.N$tut(),this);
}catch(A){}
return $;
};
B.N$plt=function(){
return"https://www.musictheory.net/exercises/"+this.N$tut()+"/"+this.N$nut();
};
B.N$dlt=function(){
return"/exercises/"+this.N$tut()+"/"+this.N$nut();
};
B.N$vlt=function(){
return"x-tenuto:/"+this.N$dlt();
};
B.N$tut=function(){
return null;
};
B.N$ilt=function(){};
B.N$mlt=function(){};
B.N$glt=function(A){
var B=this;
if(!this.N$Rft){
var D={},E=C._c.N$o2.N$b2();
$.each(E,function($){
var A=C._c.N$o2.N$w2($);
D[$]=A;
});
B.N$Rft=D;
}
return B.N$Rft[A];
};
B.N$flt=function(){
var A=this;
if(!this.N$Wft){
var B={};
$.each(this.N$Jft,function($){
var A=$&&$.N$ylt();
B[A]=$;
});
A.N$Wft=B;
}
return A.N$Wft;
};
B.N$blt=function(){
var A=this;
if(!this.N$Pft)return;
var B=null,C=this.N$Pft&&this.N$Pft.N$vi();
1==C?B=this.N$Pft&&this.N$Pft.N$Vat():0==C&&(B=[this.N$Pft&&this.N$Pft.N$Vat()]);
B&&$.each(this.N$Qft,function(C){
var D=C&&C.N$Wn();
if(0==D){
var E=$.includes(A.N$cat(),-2);
A.N$wlt(C,E);
}else{
var F=!$.includes(B,D);
A.N$wlt(C,F);
}
});
};
B.N$Elt=function(){
var A=this;
if(!this.N$kft)return;
if(!this.N$Lft)return;
var B=this.N$Slt();
$.each(this.N$Lft,function($){
A.N$wlt($,B!=($&&$.N$Wn()));
});
};
B.N$xlt=function(){
if(!this.N$Vft)return;
var A=this.N$Xft?this.N$Stt():0;
$.each(this.N$Vft&&this.N$Vft.N$Gat(),function($){
var B=$&&$.N$Wn(),D=C._c.N$i8.N$a8(B,A),E=C._c.N$i8.N$c8(B,A);
$&&$.N$Tlt("musictype:"+D);
$&&$.N$Nlt(E);
});
};
B.N$Clt=function(){
var A,B=this;
if(!this.N$Fft)return;
var C=(A=this.N$Zrt())&&A.N$p2();
$.each(this.N$Ift,function(A){
$.each(A&&A.N$Gat(),function($){
$&&$.N$Tlt(null);
});
B.N$wlt(A,C!=(A&&A.N$Wn()));
B.N$klt(A);
});
$.each(B.N$qft,function($){
B.N$wlt($,C!=($&&$.N$Wn()));
});
};
B.N$klt=function(A){
var B=this.N$glt(A&&A.N$Wn()),C=A&&A.N$Vat(),D=0;
$.each(B&&B.N$d2(),function(A){
var B=$.includes(C,D);
A&&A.N$F2(B);
D++;
});
};
B.N$Llt=function(A,B,C){
if(A==this.N$Pft){
var D=$.includes(C,-2),E=$.includes(B,-2);
if(E&&!D)return[-2];
if(D&&B.length>1)return $.without(B,-2);
}
return B;
};
B.N$Alt=function(A,B){
if(A==this.N$Pft)this.N$blt();else if(A==this.N$Xft){
this.N$xlt();
this.N$Clt();
this.N$Elt();
}else A==this.N$kft?this.N$Elt():A==this.N$Fft?this.N$Clt():$.includes(this.N$Ift,A)&&this.N$klt(A);
this.N$mlt(A,B);
this.N$Yft=!0;
};
B.N$Olt=function(A){
var B,D=this,E={};
$.each(A,function($){
E[$]=!0;
});
var F=(B=new C._c.N$Dlt())&&B.N$Mlt("NoteNameStyle");
F&&F.N$Plt("Note Names");
F&&F.N$Hlt(0);
F&&F.N$Blt(0);
F&&F.N$jlt(0);
function G($,A,B){
if(!E[B])return null;
var D=C._c.N$Ilt.N$Flt($,B);
D&&D.N$qlt(A);
F&&F.N$Rlt(D);
return D;
}
G("Letters","Letters",0);
G("Letters (Alphabetical)","Alphabetical",11);
G("Letters (Accidental Words)","Letters (Words)",15);
if(E[16]||E[17]||E[18]){
F&&F.N$slt();
G("Letters (Fifths, C in Center)","Fifths (C)",16);
G("Letters (Fifths, A in Center)","Fifths (A)",17);
G("Letters (Fifths, Symmetric)","Fifths (Sym.)",18);
}
F&&F.N$slt();
var H=G("Solf&egrave;ge (Fixed, Do-Si)","Fixed Do-Si",1),I=G("Solf&egrave;ge (Fixed, Do-Ti)","Fixed Do-Ti",2),J=G("Solf&egrave;ge (Fixed, Ut-Si)","Fixed Ut-Si",3),K=G("Solf&egrave;ge (Fixed, Ut-Ti)","Fixed Ut-Ti",4);
H&&H.N$zrt("Soulfedge Fixed Doe See");
I&&I.N$zrt("Soulfedge Fixed Doe Tea");
J&&J.N$zrt("Soulfedge Fixed Oot See");
K&&K.N$zrt("Soulfedge Fixed Oot Tea");
H&&H.N$Ult("Fixed Doe See");
I&&I.N$Ult("Fixed Doe Tea");
J&&J.N$Ult("Fixed Oot See");
K&&K.N$Ult("Fixed Oot Tea");
var L=G("Solf&egrave;ge (Fixed, Chromatic)","Fixed Chromatic",13);
L&&L.N$zrt("Soulfedge Fixed Chromatic");
F&&F.N$slt();
G("German","German",14);
if(E[7]||E[8]){
F&&F.N$slt();
G("Pitch-class Integer","Integer",7);
G("Pitch-class Integer (t, e)","Integer (t, e)",8);
}
if(E[5]||E[6]||E[12]){
F&&F.N$zlt(1);
var M=G("Solf&egrave;ge (Movable Do)","Movable Do",5);
M&&M.N$Ult("Movable Doe");
M&&M.N$zrt("Soulfedge, Movable Doe");
var N=G("Solf&egrave;ge (Movable Minor-Do)","Minor-Do",6);
N&&N.N$zrt("Soulfedge, Movable Minor Doe");
N&&N.N$Ult("Minor Doe");
var O=G("Solf&egrave;ge (Movable Minor-La)","Minor-La",12);
O&&O.N$zrt("Soulfedge, Movable Minor La");
O&&O.N$Ult("Minor La");
}
if(E[9]||E[10]){
F&&F.N$zlt(1);
G("Scale Degrees","Degrees",9);
G("Scale Degrees (Minor)","Degrees (Minor)",10);
}
D.N$Wlt(F);
return F;
};
B.N$Xlt=function($,A){
var B,D=this,E=(B=new C._c.N$Dlt())&&B.N$Mlt($);
E&&E.N$Plt("Clefs");
E&&E.N$Blt(1);
E&&E.N$jlt([34]);
E&&E.N$Hlt(2);
E&&E.N$Vlt(!0);
E&&E.N$Jlt(4);
function F($){
var A=C._c.N$i8.N$s8($,!0),B=C._c.N$i8.N$s8($,!1),D="clef:"+$,F=0;
F=-2==$?99:61;
var G=C._c.N$Ilt.N$Klt(A,D,$);
G&&G.N$Qlt(F);
G&&G.N$Ult(B);
E&&E.N$Rlt(G);
}
if(A){
F(-2);
E&&E.N$slt();
}
F(34);
F(22);
F(28);
F(26);
E&&E.N$slt();
F(32);
F(30);
F(24);
D.N$Wlt(E);
return E;
};
B.N$Glt=function($,A){
var B,D=(B=new C._c.N$Dlt())&&B.N$Mlt($);
D&&D.N$Blt(2);
D&&D.N$Ylt(A);
D&&D.N$Hlt(2);
var E=-8,F=8;
if(34==A)D&&D.N$Plt("Treble Range");else if(22==A)D&&D.N$Plt("Bass Range");else if(28==A)D&&D.N$Plt("Alto Range");else if(26==A)D&&D.N$Plt("Tenor Range");else if(32==A)D&&D.N$Plt("Soprano Range");else if(30==A)D&&D.N$Plt("Mezzo-sop. Range");else if(24==A)D&&D.N$Plt("Baritone Range");else{
D&&D.N$Plt("Range");
if(-2==A){
E=-12;
F=12;
}
}
D&&D.N$jlt(C._c.N$Jn.N$ir(E,F));
this.N$Wlt(D);
return D;
};
B.N$Zlt=function(){
var $,A=($=new C._c.N$Dlt())&&$.N$Mlt("Instrument");
A&&A.N$Plt("Instrument");
A&&A.N$Hlt(0);
A&&A.N$Blt(0);
A&&A.N$jlt(2);
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Modern Piano",2));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Grand Piano",1));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Classic Piano",0));
A&&A.N$slt();
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Acoustic Guitar",5));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Synth Guitar",6));
A&&A.N$slt();
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Piccolo",15));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Flute",10));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Oboe",11));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Clarinet",12));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Bass Clarinet",14));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Bassoon",13));
A&&A.N$slt();
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Soprano Sax",16));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Alto Sax",17));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Tenor Sax",18));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Bari. Sax",19));
A&&A.N$slt();
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Trumpet",20));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Trombone",21));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("French Horn",22));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Tuba",23));
A&&A.N$slt();
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Violin",24));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Viola",25));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Cello",26));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Double Bass",27));
A&&A.N$slt();
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Marimba",28));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Vibraphone",29));
this.N$Wlt(A);
return A;
};
B.N$ect=function($){
var A,B=C._c.N$Nft.N$rlt($),D=C._c.N$ti.N$ei($),E=(A=new C._c.N$Dlt())&&A.N$Mlt(B);
E&&E.N$Blt(3);
E&&E.N$Ylt($);
E&&E.N$Hlt(2);
E&&E.N$Plt("Range");
E&&E.N$jlt(D&&D.N$gi());
E&&E.N$tct(D&&D.N$mi());
this.N$Wlt(E);
return E;
};
B.N$nct=function(){
var $,A=this,B=($=new C._c.N$Dlt())&&$.N$Mlt("FretboardInstrument");
function D($,A){
var D=C._c.N$Ilt.N$Flt(A,$);
B&&B.N$Rlt(D);
}
B&&B.N$Plt("Instrument");
B&&B.N$Blt(0);
B&&B.N$Hlt(0);
B&&B.N$jlt(0);
D(0,"Guitar");
D(3,"Guitar (7-string)");
B&&B.N$slt();
D(1,"Bass Guitar");
D(4,"Bass Guitar (5-string)");
D(7,"Bass Guitar (6-string)");
B&&B.N$slt();
D(2,"Mandolin");
D(9,"Banjo");
D(8,"Ukulele");
A.N$Wlt(B);
return B;
};
B.N$rct=function($){
var A,B="FretboardTuning-"+$,D=this.N$glt($),E=(A=new C._c.N$Dlt())&&A.N$Mlt(B);
E&&E.N$Plt("Tuning");
E&&E.N$Blt(5);
E&&E.N$Hlt(2);
E&&E.N$ict(D);
E&&E.N$Ylt(D&&D.N$p2());
this.N$Wlt(E);
return E;
};
B.N$sct=function(A){
var B,D=this,E="FretboardString-"+A,F=this.N$glt(A),G=(B=new C._c.N$Dlt())&&B.N$Mlt(E);
G&&G.N$Plt("Strings");
G&&G.N$Blt(1);
G&&G.N$Hlt(1);
G&&G.N$Ylt(F&&F.N$p2());
var H=[],I=0;
$.each(F&&F.N$d2(),function($){
var A=C._c.N$Ilt.N$Flt("",I),B=I+1;
A&&A.N$oct(function(){
var A=C._c.N$Kt.N$hn($&&$.N$s9()),E=C._c.N$i8.N$a8(A&&A.N$Wn(),D.N$Stt());
return"musictype:"+B+" -- "+E;
});
A&&A.N$uct(function(){
var A=C._c.N$Kt.N$hn($&&$.N$s9()),E=C._c.N$i8.N$f8(A&&A.N$Wn(),D.N$Stt());
return B+" - "+E;
});
A&&A.N$Nlt(""+B);
H.push(I);
G&&G.N$Rlt(A);
I++;
});
G&&G.N$jlt(H);
D.N$Wlt(G);
return G;
};
B.N$act=function($){
var A,B,D=(A=new C._c.N$Dlt())&&A.N$Mlt("CorrectAnswerStyle"),E=13==$?3:2;
D&&D.N$Plt("Next Question");
D&&D.N$Hlt(0);
D&&D.N$Blt(0);
D&&D.N$jlt(E);
var F=[],G=C._c.N$Ilt.N$Flt("Immediately",0);
F.push("proceed to the next question immediately");
D&&D.N$Rlt(G);
var H=C._c.N$Ilt.N$Flt("Wait",1);
F.push("wait for a tap or click");
D&&D.N$Rlt(H);
if(12==$){
var I=C._c.N$Ilt.N$Flt("After Replay",2);
F.push("or replay the question");
D&&D.N$Rlt(I);
}else if(13==$){
var J=C._c.N$Ilt.N$Flt("After Animation",3);
F.push("or show a brief animation");
D&&D.N$Rlt(J);
}else{
var K=C._c.N$Ilt.N$Flt("After Audio",2);
F.push("play an audio example");
D&&D.N$Rlt(K);
var L=C._c.N$Ilt.N$Flt("After Animation",3);
F.push("or show a brief animation");
D&&D.N$Rlt(L);
}
(B=D&&D.N$tlt())&&B.N$fct("Upon a correct answer: "+F.join(", ")+".");
this.N$Wlt(D);
return D;
};
B.N$lct=function(){
var $,A,B=this,D=($=new C._c.N$Dlt())&&$.N$Mlt("KeySignature");
D&&D.N$Plt("Key Signatures");
D&&D.N$Hlt(1);
D&&D.N$Blt(1);
function E($){
var A="keysig:"+$,B=void 0;
B=$>0?$+"#":0>$?-$+"b":"None";
var E=C._c.N$Ilt.N$Qat($);
E&&E.N$Tlt(A);
E&&E.N$Nlt(B);
E&&E.N$zrt(C._c.N$i8.N$o8($));
E&&E.N$Qlt(48);
D&&D.N$Rlt(E);
return $;
}
D&&D.N$slt();
E(0);
D&&D.N$slt();
(A=D&&D.N$tlt())&&A.N$cct([[E(-1),E(1)],[E(-2),E(2)],[E(-3),E(3)],[E(-4),E(4)],[E(-5),E(5)],[E(-6),E(6)],[E(-7),E(7)]]);
D&&D.N$jlt([-2,-1,0,1,2]);
B.N$Wlt(D);
return D;
};
B.N$hct=function(){
var $,A=this,B=($=new C._c.N$Dlt())&&$.N$Mlt("Difficulty");
function D($,A,B){
var D=C._c.N$Ilt.N$Flt(A,$);
B&&D&&D.N$pct(B);
D&&D.N$Qlt(B?55:49);
return D;
}
B&&B.N$Plt("Difficulty");
B&&B.N$Hlt(0);
B&&B.N$Blt(0);
B&&B.N$jlt(2);
B&&B.N$Rlt(D(1,"Level 1","No accidentals"));
B&&B.N$Rlt(D(2,"Level 2",null));
B&&B.N$Rlt(D(3,"Level 3",null));
B&&B.N$Rlt(D(4,"Level 4",null));
B&&B.N$Rlt(D(5,"Level 5","Accidentals of doom"));
A.N$Wlt(B);
return B;
};
B.N$dct=function(){
var $,A=($=new C._c.N$Dlt())&&$.N$Mlt("Speed");
A&&A.N$Plt("Speed");
A&&A.N$Hlt(0);
A&&A.N$Blt(0);
A&&A.N$jlt(1e3);
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Slower",1e3));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Slow",750));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Normal",500));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Fast",333));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Faster",250));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Fastest",125));
this.N$Wlt(A);
return A;
};
B.N$vct=function(){
var $,A,B=this,D=($=new C._c.N$Dlt())&&$.N$Mlt("Note");
function E($){
var A=C._c.N$i8.N$f8($,0),B=C._c.N$Ilt.N$Klt("","",$);
B&&B.N$zrt(A);
B&&B.N$Qlt(60);
D&&D.N$Rlt(B);
return $;
}
D&&D.N$Plt("Notes");
D&&D.N$Blt(1);
D&&D.N$Hlt(1);
D&&D.N$jlt([5,15,25,35,45,55,65]);
D&&D.N$slt();
(A=D&&D.N$tlt())&&A.N$cct([[E(4),E(5),E(6)],[E(14),E(15),E(16)],[E(24),E(25),E(26)],[E(34),E(35),E(36)],[E(44),E(45),E(46)],[E(54),E(55),E(56)],[E(64),E(65),E(66)]]);
B.N$Wlt(D);
return D;
};
B.N$mct=function(){
var A,B=this,D=(A=new C._c.N$Dlt())&&A.N$Mlt("ChallengeTimeLimit");
D&&D.N$Plt("Time Limit");
D&&D.N$Blt(0);
D&&D.N$Hlt(6);
D&&D.N$jlt(0);
$.each([0,1,2,3,4,5,6,7,8,9,10,15,20,25,30],function($){
var A=$?$+" min":"Off",B=null;
$>1?B=$+" minutes":1==$&&(B="1 minute");
var E=C._c.N$Ilt.N$Klt(A,null,$);
E&&E.N$Nlt(B);
E&&E.N$zrt(B);
D&&D.N$Rlt(E);
});
B.N$Wlt(D);
return D;
};
B.N$gct=function(){
var A,B=this,D=(A=new C._c.N$Dlt())&&A.N$Mlt("ChallengeQuestionLimit");
D&&D.N$Plt("Question Limit");
D&&D.N$Blt(0);
D&&D.N$Hlt(6);
D&&D.N$jlt(0);
$.each([0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100],function($){
var A=$?String($):"Off",B=C._c.N$Ilt.N$Klt(A,null,$);
D&&D.N$Rlt(B);
});
B.N$Wlt(D);
return D;
};
B.N$yct=function(){
var $,A=($=new C._c.N$Dlt())&&$.N$Mlt("ChallengeMultipleAttempts");
A&&A.N$Plt("Multiple Attempts");
A&&A.N$Hlt(3);
A&&A.N$Blt(0);
A&&A.N$jlt(0);
A&&A.N$Rlt(C._c.N$Ilt.N$Qat(0));
A&&A.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$Wlt(A);
return A;
};
B.N$bct=function($){
this.N$wct($,null);
};
B.N$wct=function(A,B){
var D=this;
if(1==A){
this.N$Pft=this.N$Xlt("Clef",!1);
this.N$Pft&&this.N$Pft.N$Ect(A);
}else if(2==A){
this.N$Pft=this.N$Xlt("Clef",!0);
this.N$Pft&&this.N$Pft.N$Ect(A);
this.N$Gft=!0;
}else if(3==A){
var E=this.N$Glt("Range",0);
E&&E.N$Ect(A);
this.N$Qft=[E];
if(this.N$Gft){
var F=this.N$Glt("GrandRange",-2);
F&&F.N$Ect(A);
this.N$Qft=[E,F];
}
}else if(4==A){
this.N$Qft=[this.N$Glt("TrebleRange",34),this.N$Glt("BassRange",22),this.N$Glt("AltoRange",28),this.N$Glt("TenorRange",26),this.N$Glt("SopranoRange",32),this.N$Glt("MezzoSopranoRange",30),this.N$Glt("BaritoneRange",24)];
if(this.N$Gft){
var G=this.N$Glt("GrandRange",-2);
this.N$Qft.push(G);
}
$.each(this.N$Qft,function($){
$&&$.N$Ect(A);
});
}else if(5==A){
B||(B=[0,11,1,2,3,4,13,14]);
D.N$Xft=D.N$Olt(B);
D.N$Xft&&D.N$Xft.N$Ect(A);
}else if(6==A){
D.N$kft=D.N$Zlt();
D.N$kft&&D.N$kft.N$Ect(A);
}else if(7==A){
var H=[];
$.each(C._c.N$ti.N$bi(),function($){
var B=D.N$ect($);
B&&B.N$Ect(A);
H.push(B);
});
D.N$Lft=H;
}else if(8==A){
D.N$Fft=D.N$nct();
D.N$Fft&&D.N$Fft.N$Ect(A);
}else if(9==A){
var I=[];
$.each(C._c.N$o2.N$b2(),function($){
var B=D.N$rct($);
B&&B.N$Ect(A);
I.push(B);
});
D.N$qft=I;
}else if(10==A){
var J=[];
$.each(C._c.N$o2.N$b2(),function($){
var B=D.N$sct($);
B&&B.N$Ect(A);
J.push(B);
D.N$klt(B);
});
D.N$Ift=J;
}else if(11==A||12==A||13==A){
D.N$Hft=D.N$act(A);
D.N$Hft&&D.N$Hft.N$Ect(A);
}else if(14==A){
D.N$zft=D.N$lct();
D.N$zft&&D.N$zft.N$Ect(A);
}else if(15==A){
D.N$Cft=D.N$hct();
D.N$Cft&&D.N$Cft.N$Ect(A);
}else if(16==A){
D.N$Aft=D.N$dct();
D.N$Aft&&D.N$Aft.N$Ect(A);
}else if(17==A){
D.N$Vft=D.N$vct();
D.N$Vft&&D.N$Vft.N$Ect(A);
}
};
B.N$olt=function(){
var $=this.N$mct();
$&&$.N$Sct(!0);
this.N$Dft=$;
var A=this.N$gct();
A&&A.N$Sct(!0);
this.N$Mft=A;
var B=this.N$yct();
B&&B.N$Sct(!0);
this.N$Oft=B;
};
B.N$xct=function($){
for(var A=0,B=this.N$Jft.length;B>A;A++){
var C=this.N$Jft[A];
if((C&&C.N$Tct())==$)return C;
}
return null;
};
B.N$Nct=function(A){
var B=[];
$.each(this.N$Jft,function($){
($&&$.N$Tct())==A&&B.push($);
});
return B;
};
B.N$Cct=function(A){
var B,D=this,E=A["key"],F=A["value"];
function G(){
if($.isArray(F)&&2==F.length)return C._c.N$Jn.N$ir(F[0],F[1]);
if(F instanceof C._c.N$Jn)return F;
return null;
}
var H=D.N$tft(E),I=H&&H.N$vi(),J=H&&H.N$Jat();
if(3==J||4==J){
4==J&&(F=!F);
for(var K=H&&H.N$Gat(),L=void 0,M=0,N=K.length;N>M;M++){
var O=K[M];
if(0===(O&&O.N$Wn())&&!F){
L=O;
break;
}
if(0!==(O&&O.N$Wn())&&F){
L=O;
break;
}
}
L&&H&&H.N$kct(L,!0);
}else if(0==I)H&&H.N$Lct(F,!0);else if(1==I||7==I){
var P=H&&H.N$Qat(F),Q=!(H&&H.N$Act(P));
H&&H.N$kct(P,Q);
}else if(5==I){
(B=D.N$Zrt())&&B.N$P2(F);
H&&H.N$Oct();
}else if(3==I||2==I){
F=G();
if(!F)return;
H&&H.N$Mct(F);
}else if(4==I){
F=F.pop();
H&&H.N$Mct(F);
}
};
B.N$Dct=function($){
var A=$["dictionary"],B=$["reset"];
this.N$dst(A);
this.N$bot(!0);
this.N$Hot(B);
};
B.N$rut=function(A,B){
var D;
if(1200==A)return this.N$dlt();
if(1201==A)return this.N$plt();
if(1210==A)return this.N$vlt();
if(1202==A)return this.N$hst()||$.size(this.N$xot())>0;
if(1204==A){
var E=B["id"];
return(D=C._c.N$Hct.N$Si())&&D.N$Pct(this,E);
}
if(1208==A)return this.N$gst();
};
B.N$aut=function($,A){
3201==$?this.N$Cct(A):3202==$?this.N$Dct(A):3200==$&&this.N$Oot();
};
B.N$dst=function(A){
var B=this;
A=A||{};
$.each(this.N$Jft,function($){
$&&$.N$dst(A);
});
B.N$Oot();
B.N$blt();
B.N$xlt();
B.N$Elt();
B.N$Clt();
B.N$bot(!1);
};
B.N$bft=function(A){
$.each(this.N$Jft,function($){
$&&$.N$bft(A);
});
};
B.N$gst=function(){
var $={};
this.N$bft($);
return $;
};
B.N$slt=function(){
var $;
this.N$Kft||(this.N$Kft=[]);
var A=($=new C._c.N$Bct())&&$.init();
this.N$Kft.push(A);
this.N$Bft=A;
};
B.N$Wlt=function($){
this.N$Bft||this.N$slt();
this.N$Jft||(this.N$Jft=[]);
$&&$.N$jct(this);
this.N$Bft&&this.N$Bft.N$Wlt($);
this.N$Jft.push($);
this.N$Wft=null;
};
B.N$hst=function(){
return $.some(this.N$Jft,function($){
if(1==($&&$.N$vi())){
var A=$&&$.N$Vat();
return!A||!A.length;
}
return!1;
});
};
B.N$Oot=function(){
$.each(this.N$Jft,function($){
if(1==($&&$.N$vi())){
var A=$&&$.N$Vat();
A&&A.length||$&&$.N$Fct();
}
});
};
B.N$tft=function($){
var A=this.N$flt();
return A[$];
};
B.N$wlt=function($,A){
$&&$.N$Sct(A);
};
B.N$Slt=function(){
return this.N$kft&&this.N$kft.N$Vat();
};
B.N$Stt=function(){
return this.N$Xft&&this.N$Xft.N$Vat();
};
B.N$Ict=function(){
for(var $=this.N$kft&&this.N$kft.N$Vat(),A=0,B=this.N$Lft.length;B>A;A++){
var C=this.N$Lft[A];
if($==(C&&C.N$Wn()))return C&&C.N$Vat();
}
return null;
};
B.N$cat=function(){
return this.N$Pft&&this.N$Pft.N$Vat();
};
B.N$wrt=function(){
var A=this.N$cat();
if(this.N$Gft&&$.includes(A,-2))return this.N$hat(-2);
var B=[];
$.each(this.N$Qft,function(C){
var D=C&&C.N$Wn();
-2==D||0!=D&&!$.includes(A,D)||B.push(C&&C.N$Vat());
});
return C._c.N$Jn.N$tr(B);
};
B.N$hat=function($){
for(var A=null,B=0,C=this.N$Qft.length;C>B;B++){
var D=this.N$Qft[B];
if((D&&D.N$Wn())==$){
A=D&&D.N$Vat();
break;
}
}
return A;
};
B.N$Zrt=function(){
var $=this.N$Fft&&this.N$Fft.N$Vat();
return this.N$Rft&&this.N$Rft[$];
};
B.N$qct=function(){
return this.N$Hft&&this.N$Hft.N$Vat();
};
B.N$Rct=function(){
return this.N$zft&&this.N$zft.N$Vat();
};
B.N$Uct=function(){
return this.N$Cft&&this.N$Cft.N$Vat();
};
B.N$zct=function(){
return(this.N$Aft&&this.N$Aft.N$Vat())/1e3;
};
B.N$Wct=function(){
return this.N$Vft&&this.N$Vft.N$Vat();
};
B.N$Ist=function(){
return this.N$Dft&&this.N$Dft.N$Vat();
};
B.N$Fst=function(){
return this.N$Mft&&this.N$Mft.N$Vat();
};
B.N$Wst=function(){
return(this.N$Oft&&this.N$Oft.N$Vat())>0;
};
B.N$Ost=function(){
return this.N$Ist()>0||this.N$Fst()>0;
};
B.N$Fot=function(){
return this.N$Ist()>0;
};
return D;
});
}();
!function(){
"use strict";
C._registerClass("N$Ilt",null,function($,A){
function B(){
this.N$Ynt=this.N$Xct=this.N$Vct=this.N$Jct=this.N$Kct=this.N$Qct=this.N$Gct=this.N$Yct=this.N$Zct=this.N$Pet=null;
this.N$ntt=this.N$rn=0;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$eht=function($){
this.N$Gct=$;
};
A.N$tht=function(){
return this.N$Gct;
};
A.N$Urt=function($){
this.N$Pet=$;
};
A.N$zet=function(){
return this.N$Pet;
};
A.N$pct=function($){
this.N$Zct=$;
};
A.N$nht=function(){
return this.N$Zct;
};
A.N$zrt=function($){
this.N$Ynt=$;
};
A.N$Tlt=function($){
this.N$Vct=$;
};
A.N$oct=function($){
this.N$Jct=$;
};
A.N$rht=function(){
return this.N$Jct;
};
A.N$uct=function($){
this.N$Xct=$;
};
A.N$iht=function(){
return this.N$Xct;
};
A.N$Nlt=function($){
this.N$Yct=$;
};
A.N$zat=function(){
return this.N$Yct;
};
A.N$qlt=function($){
this.N$Qct=$;
};
A.N$Wat=function(){
return this.N$Qct;
};
A.N$Ult=function($){
this.N$Kct=$;
};
A.N$sht=function(){
return this.N$Kct;
};
A.N$Qlt=function($){
this.N$ntt=$;
};
A.N$oht=function(){
return this.N$ntt;
};
A.N$Wn=function(){
return this.N$rn;
};
$.N$Qat=function($){
return this.N$Klt(null,null,$);
};
$.N$Flt=function($,A){
return this.N$Klt($,null,A);
};
$.N$uht=function($,A,B){
var C,D=(C=this.alloc())&&C.N$V7(B);
D&&D.N$Urt($);
D&&D.N$qlt(A);
return D;
};
$.N$Klt=function($,A,B){
var C,D=(C=this.alloc())&&C.N$V7(B);
D&&D.N$Urt($);
D&&D.N$Tlt(A);
return D;
};
A.N$V7=function($){
var A=this;
if(A=B.N$_super.prototype.init.call(this)){
A.N$rn=$;
A.N$ntt=49;
}
return A;
};
A.N$aht=function(){
!this.N$Vct&&this.N$Jct&&(this.N$Vct=this.N$Jct());
return this.N$Vct;
};
A.N$Znt=function(){
!this.N$Ynt&&this.N$Xct&&(this.N$Ynt=this.N$Xct());
return this.N$Ynt;
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$fht",null,function(A,B){
function D(){
this.N$lht=this.N$cht=this.N$hht=this.N$pht=this.N$dht=this.N$vht=null;
this.constructor=D;
this.N$_id=++C._id;
}
B.N$mht=function($){
this.N$pht=$;
};
B.N$ght=function(){
return this.N$pht;
};
B.N$fct=function($){
this.N$cht=$;
};
B.N$yht=function(){
return this.N$cht;
};
B.N$bht=function(){
return this.N$hht;
};
B.N$Gat=function(){
return this.N$lht;
};
B.N$Rlt=function($){
this.N$lht||(this.N$lht=[]);
this.N$lht.push($);
var A=$&&$.N$Wn();
this.N$vht||(this.N$vht={});
this.N$vht[A]=$;
this.N$dht=null;
};
B.N$wht=function(){
var A=this;
this.N$dht||(this.N$hht?this.N$dht=$.map(this.N$hht,function(B){
return $.map(B,function($){
return null===$?null:A.N$vht[$];
});
}):A.N$dht=$.map(A.N$lht,function($){
return[$];
}));
return A.N$dht;
};
B.N$cct=function($){
if(this.N$hht!=$){
this.N$hht=$;
this.N$dht=null;
}
};
return D;
});
}();
!function(){
"use strict";
function A($){
return"AudioRange-"+$;
}
function B(A,B){
$.includes(A,34)&&B("TrebleRange");
$.includes(A,22)&&B("BassRange");
$.includes(A,28)&&B("AltoRange");
$.includes(A,26)&&B("TenorRange");
$.includes(A,32)&&B("SopranoRange");
$.includes(A,30)&&B("MezzoSopranoRange");
$.includes(A,24)&&B("BaritoneRange");
$.includes(A,-2)&&B("GrandRange");
}
C._registerClass("N$Eht",null,function(A,B){
function D(){
this.N$Sht=this.N$iit=this.N$xht=this.N$Tht=this.N$Nht=this.N$Cht=null;
this.N$kht=0;
this.N$Lht=!1;
this.constructor=D;
this.N$_id=++C._id;
}
B.N$Aht=function($){
this.N$kht=$;
};
B.N$clt=function(){
return this.N$kht;
};
B.N$Oht=function($){
this.N$Lht=$;
};
B.N$Mht=function(){
return this.N$Lht;
};
B.N$oit=function($){
this.N$iit=$;
};
B.N$Zrt=function(){
return this.N$iit;
};
B.N$Dht=function($){
this.N$xht=$;
};
B.N$Pht=function(){
return this.N$xht;
};
B.N$Hht=function($){
this.N$Nht=$;
};
B.N$Bht=function(){
return this.N$Nht;
};
B.N$jht=function($){
this.N$Tht=$;
};
B.N$Fht=function(){
return this.N$Tht;
};
B.N$llt=function(A,B){
var D,E,F=this;
this.N$kht=0;
var G={},H={};
try{
var I=C._c.N$qht.N$Iht(B);
this.N$xht&&this.N$xht(A,I);
var J=(D=C._c.N$ktt.N$Si())&&D.N$Rht(),K=(E=new C._c.N$qht())&&E.N$Uht(I),L=this.N$Cht[A];
$.each(L,function($){
if(!J&&$&&$.N$zht())return;
$&&$.N$Wht(A,G,H,K,F);
});
F.N$Tht&&F.N$Tht(A,G);
K&&K.N$Xht()||(F.N$kht=1);
}catch(M){
F.N$kht=2;
}
return G;
};
B.N$hlt=function(A,B){
var D,E,F=this,G=this.N$Cht[A],H=(D=new C._c.N$Vht())&&D.init(),I=B&&B.N$gst();
this.N$oit(B&&B.N$Zrt());
this.N$Nht&&this.N$Nht(A,B,I,H);
var J=(E=C._c.N$ktt.N$Si())&&E.N$Rht();
$.each(G,function($){
if(!J&&$&&$.N$zht())return;
$&&$.N$Jht(A,I,H,F);
});
return H&&H.N$Kht();
};
B.N$Qht=function($){
this.N$Cht||(this.N$Cht={});
this.N$Sht=[];
this.N$Cht[$]=this.N$Sht;
};
B.N$Ght=function(){
var $=C._c.N$Zht.N$Yht("Clef",0,null);
this.N$Sht.push($);
};
B.N$ept=function(){
var $=C._c.N$Zht.N$Yht("Range",1,null);
this.N$Sht.push($);
};
B.N$tpt=function(){
var $=C._c.N$Zht.N$Yht(null,2,null);
this.N$Sht.push($);
};
B.N$npt=function(){
var $=C._c.N$Zht.N$Yht("FretboardInstrument",6,null);
this.N$Sht.push($);
};
B.N$rpt=function(){
var $=C._c.N$Zht.N$Yht(null,7,null);
this.N$Sht.push($);
};
B.N$ipt=function(){
var $=C._c.N$Zht.N$Yht(null,8,null);
this.N$Sht.push($);
};
B.N$spt=function($){
var A=C._c.N$Zht.N$Yht($,3,[0,1]);
this.N$Sht.push(A);
};
B.N$opt=function($){
var A,B=(A=C._c.N$Jn.N$ir(0,31))&&A.N$lr(),D=C._c.N$Zht.N$Yht($,3,B);
this.N$Sht.push(D);
};
B.N$upt=function(){
this.N$opt("Instrument");
};
B.N$apt=function(){
var $=C._c.N$Zht.N$Yht(null,5,null);
this.N$Sht.push($);
};
B.N$fpt=function($,A){
var B=C._c.N$Zht.N$Yht($,9,null);
B&&B.N$lpt(A);
this.N$Sht.push(B);
};
B.N$cpt=function($,A){
var B=C._c.N$Zht.N$Yht(A,4,$);
this.N$Sht.push(B);
};
B.N$hpt=function($,A){
var B=C._c.N$Zht.N$Yht(A,3,$);
this.N$Sht.push(B);
};
B.N$ppt=function(){
var $=C._c.N$Zht.N$Yht("ChallengeTimeLimit",10,null);
this.N$Sht.push($);
};
B.N$dpt=function(){
var $=C._c.N$Zht.N$Yht("ChallengeQuestionLimit",11,null);
this.N$Sht.push($);
};
B.N$vpt=function(){
this.N$spt("ChallengeMultipleAttempts");
};
B.N$mpt=function($,A){
var B=C._c.N$Zht.N$Yht(null,100,null);
B&&B.N$gpt($);
B&&B.N$ypt(A);
this.N$Sht.push(B);
};
B.N$bpt=function(){
var A;
(A=$.last(this.N$Sht))&&A.N$wpt(!0);
};
return D;
});
C._registerClass("N$Zht",null,function(D,E){
function F(){
this.N$lht=this.N$Ept=this.N$Spt=this.N$xpt=this.N$Tpt=null;
this.N$pi=0;
this.N$Npt=!1;
this.constructor=F;
this.N$_id=++C._id;
}
E.N$Cpt=function($){
this.N$Tpt=$;
};
E.N$ylt=function(){
return this.N$Tpt;
};
E.N$Blt=function($){
this.N$pi=$;
};
E.N$vi=function(){
return this.N$pi;
};
E.N$kpt=function($){
this.N$lht=$;
};
E.N$Gat=function(){
return this.N$lht;
};
E.N$lpt=function($){
this.N$Spt=$;
};
E.N$Lpt=function(){
return this.N$Spt;
};
E.N$gpt=function($){
this.N$xpt=$;
};
E.N$Apt=function(){
return this.N$xpt;
};
E.N$ypt=function($){
this.N$Ept=$;
};
E.N$Opt=function(){
return this.N$Ept;
};
E.N$wpt=function($){
this.N$Npt=$;
};
E.N$zht=function(){
return this.N$Npt;
};
D.N$Yht=function($,A,B){
var C;
return(C=this.alloc())&&C.N$Mpt($,A,B);
};
E.N$Mpt=function($,A,B){
var C=this;
if(C=F.N$_super.prototype.init.call(this)){
C.N$Tpt=$;
C.N$pi=A;
C.N$lht=B;
}
return C;
};
E.N$Wht=function(D,E,F,G,H){
var I=this;
function J($,A){
E[A+"Left"]=$&&$.N$Yn();
E[A+"Right"]=$&&$.N$er();
}
if(0==I.N$pi){
var K=G&&G.N$Dpt();
K&&(E[I.N$Tpt]=K);
}else if(1==I.N$pi){
var L=G&&G.N$Ppt();
L&&J(L,I.N$Tpt);
}else if(5==I.N$pi){
var M=E["Instrument"],N=G&&G.N$Hpt();
N&&J(N,A(M));
}else if(2==I.N$pi)if(H&&H.N$Mht()){
var O=G&&G.N$Ppt();
B(E["Clef"],function($){
O&&J(O,$);
});
}else B(E["Clef"],function($){
var A=G&&G.N$Ppt();
A&&J(A,$);
});else if(3==I.N$pi){
var P=G&&G.N$Bpt(I.N$lht);
$.isNumber(P)&&(E[I.N$Tpt]=P);
}else if(4==I.N$pi){
var Q=G&&G.N$jpt(I.N$lht),R=E[I.N$Tpt];
R&&(Q=$.uniq(R.concat(Q)));
E[I.N$Tpt]=Q;
}else if(6==I.N$pi){
var S=G&&G.N$Fpt();
$.isNumber(S)&&(E[I.N$Tpt]=S);
var T=C._c.N$o2.N$w2(S);
H&&H.N$oit(T);
}else if(7==I.N$pi){
var U=H&&H.N$Zrt(),V=[];
$.each(U&&U.N$d2(),function(){
var $=G&&G.N$Fpt();
void 0===$&&($=0);
16&$&&($=-(15&$));
V.push($);
});
E["FretboardTuning-"+(U&&U.N$p2())]=V;
}else if(8==I.N$pi){
var W=H&&H.N$Zrt(),X=G&&G.N$Ipt((W&&W.N$d2()).length),Y=[],Z=0;
$.each(W&&W.N$d2(),function(){
X&&X[Z]===!1||Y.push(Z);
Z++;
});
E["FretboardString-"+(W&&W.N$p2())]=Y;
}else if(9==I.N$pi){
var _=G&&G.N$qpt();
if($.isNumber(_)){
I.N$Spt&&(E[I.N$Spt]=_>0);
E[I.N$Tpt]=_;
}
}else if(10==I.N$pi||11==I.N$pi){
var a=G&&G.N$Fpt();
11==I.N$pi&&(a*=5);
E[I.N$Tpt]=a;
}else 100==I.N$pi&&I.N$Ept&&I.N$Ept(D,E,G,F);
};
E.N$Jht=function($,D,E,F){
var G,H=this;
function I($){
var A=D[$+"Left"],B=D[$+"Right"];
return C._c.N$Jn.N$ir(A,B);
}
if(0==H.N$pi)E&&E.N$Rpt(D[H.N$Tpt]);else if(1==H.N$pi)E&&E.N$Upt(I(H.N$Tpt));else if(5==H.N$pi){
var J=D["Instrument"],K=I(A(J));
E&&E.N$zpt(K);
}else if(2==H.N$pi)B(D["Clef"],function($){
E&&E.N$Upt(I($));
});else if(3==H.N$pi)E&&E.N$Wpt(H.N$lht,D[H.N$Tpt]);else if(4==H.N$pi)E&&E.N$Xpt(H.N$lht,D[H.N$Tpt]);else if(6==H.N$pi){
var L=(G=F&&F.N$Zrt())&&G.N$p2();
E&&E.N$Vpt(L);
}else if(7==H.N$pi){
var M=F&&F.N$Zrt(),N=D["FretboardTuning-"+(M&&M.N$p2())];
N||(N=[]);
for(var O=0,P=(M&&M.N$d2()).length;P>O;O++){
var Q=N[O]?N[O]:0;
Q=(0>Q?16:0)|Math.abs(Q);
E&&E.N$Vpt(Q);
}
}else if(8==H.N$pi){
for(var R=F&&F.N$Zrt(),S=D["FretboardString-"+(R&&R.N$p2())],T=[],U=0,V=(R&&R.N$d2()).length;V>U;U++)T[U]=S?!1:!0;
for(var W=0,X=S?S.length:0;X>W;W++)T[S[W]]=!0;
E&&E.N$Jpt(T);
}else if(9==H.N$pi){
var Y=D[H.N$Tpt];
H.N$Spt&&!D[H.N$Spt]&&(Y=0);
E&&E.N$Kpt(Y);
}else if(10==H.N$pi||11==H.N$pi){
var Z=D[H.N$Tpt];
11==H.N$pi&&(Z=Math.floor(Z/5));
Z>30?Z=30:0>Z&&(Z=0);
E&&E.N$Vpt(Z);
}else 100==H.N$pi&&H.N$xpt&&H.N$xpt($,D,E);
};
return F;
});
}();
!function(){
"use strict";
function A($){
var A=null;
if(1==$||2==$){
var B=null;
2==$&&(B="Try adding more scales, changing the filter, adding more strings, or adding more frets.");
A=["No Questions","This customization generates no valid questions.",B];
}else if(4==$||5==$||6==$||7==$||9==$||8==$||10==$||11==$||12==$){
var C=null;
4==$?C="Try increasing the range, adding more clefs, or adding more key signatures.":5==$?C="Try increasing the range or adding more notes.":6==$?C="Try increasing the range or adding more intervals.":7==$?C="Try increasing the range or adding more chords.":9==$?C="Try increasing the range or adding more scales.":8==$?C="Try adding more key signatures or scales.":10==$?C="Try adding more scales or changing the filter.":11==$?C="Try adding more scales, changing the filter, adding more strings, or adding more frets.":12==$&&(C="Try adding more strings or frets.");
A=["Lone Question","This customization generates only one valid question.",C];
}else 13==$?A=["Range Too Small","The specified range is too small when combined with the other customizations.",null]:14==$?A=["Range Too Small","The specified range is too small when combined with the other customizations. It will be automatically increased.",null]:15==$?A=["Range Too Small","The specified range is too small when combined with the other customizations.","To include all scales, increase the range to one octave or larger."]:16==$?A=["Range Too Small","The specified range is too small when combined with the other customizations.","To include all scales, increase the range to two octaves or larger."]:17==$?A=["Scales and Tonics","When combined, the customized Scales and Tonics result in no valid questions.","Try adding additional scales or tonics."]:18==$&&(A=["Range and Positions","When combined, the customized Range and Positions result in no valid questions.","Try increasing the range or enabling more positions."]);
return A;
}
C._registerClass("N$Cot",null,function(B,D){
function E(){
this.N$Qpt=this.N$Gpt=this.N$Ypt=null;
this.constructor=E;
this.N$_id=++C._id;
}
D.N$Plt=function($){
this.N$Ypt=$;
};
D.N$Xat=function(){
return this.N$Ypt;
};
D.N$Zpt=function($){
this.N$Qpt=$;
};
D.N$edt=function(){
return this.N$Qpt;
};
D.N$tdt=function($){
this.N$Gpt=$;
};
D.N$ndt=function(){
return this.N$Gpt;
};
B.N$rdt=function(A){
var B=this;
return $.map(A,function($){
return B.N$Not($);
});
};
B.N$Not=function($){
var B,C=A($);
return(B=this.alloc())&&B.N$idt(C[0],C[1],C[2]);
};
D.N$idt=function($,A,B){
var C=this;
if(C=E.N$_super.prototype.init.call(this)){
C.N$Ypt=$;
C.N$Qpt=A;
C.N$Gpt=B;
}
return C;
};
return E;
});
}();
!function(){
"use strict";
var A=0;
C._registerClass("N$Dlt",null,function(B,D){
function E(){
this.N$sdt=this.N$odt=this.N$lht=this.N$Bft=this.N$ai=this.N$udt=this.N$adt=this.N$Tpt=this.N$fdt=this.N$Kft=this.N$li=this.N$Nit=this.N$vht=this.N$Ypt=this.N$ldt=null;
this.N$cdt=this.N$hdt=this.N$pdt=this.N$rn=this.N$pi=0;
this.N$Pft=this.N$ddt=!1;
this.constructor=E;
this.N$_id=++C._id;
}
D.N$ict=function($){
this.N$odt=$;
};
D.N$vdt=function(){
return this.N$odt;
};
D.N$Blt=function($){
this.N$pi=$;
};
D.N$vi=function(){
return this.N$pi;
};
D.N$Vat=function(){
return this.N$ldt;
};
D.N$jlt=function($){
this.N$udt=$;
};
D.N$mdt=function(){
return this.N$udt;
};
D.N$ylt=function(){
return this.N$Tpt;
};
D.N$gdt=function(){
return this.N$sdt;
};
D.N$Ylt=function($){
this.N$rn=$;
};
D.N$Wn=function(){
return this.N$rn;
};
D.N$Jlt=function($){
this.N$hdt=$;
};
D.N$ydt=function(){
return this.N$hdt;
};
D.N$Yat=function(){
return this.N$Kft;
};
D.N$Gat=function(){
return this.N$lht;
};
D.N$jct=function($){
this.N$Nit=$;
};
D.N$qit=function(){
return this.N$Nit;
};
D.N$Plt=function($){
this.N$Ypt=$;
};
D.N$Xat=function(){
return this.N$Ypt;
};
D.N$Hlt=function($){
this.N$pdt=$;
};
D.N$bdt=function($){
this.N$fdt=$;
};
D.N$Kat=function(){
return this.N$fdt;
};
D.N$Sct=function($){
this.N$ddt=$;
};
D.N$eft=function(){
return this.N$ddt;
};
D.N$Vlt=function($){
this.N$Pft=$;
};
D.N$wdt=function(){
return this.N$Pft;
};
D.N$Ect=function($){
this.N$cdt=$;
};
D.N$Tct=function(){
return this.N$cdt;
};
D.N$Edt=function($){
this.N$adt=$;
};
D.N$Sdt=function(){
return this.N$adt;
};
D.N$tct=function($){
this.N$li=$;
};
D.N$mi=function(){
return this.N$li;
};
D.N$xdt=function($){
this.N$ai=$;
};
D.N$gi=function(){
return this.N$ai;
};
D.N$Mlt=function($){
var B=this;
if(B=E.N$_super.prototype.init.call(this)){
B.N$Tpt=$;
B.N$sdt=""+A++;
}
return B;
};
D.N$dst=function(A){
var B,D=this.N$ylt();
this.N$Fct();
if(0==this.N$pi||4==this.N$pi||7==this.N$pi){
var E=A[D];
($.isNumber(E)||$.isBoolean(E))&&this.N$Mct(E);
}else if(1==this.N$pi){
var F=A[D];
$.isArray(F)&&this.N$Mct(F);
}else if(2==this.N$pi||3==this.N$pi){
var G=A[D+"Left"],H=A[D+"Right"];
$.isString(G)&&(G=parseInt(G,10));
$.isString(H)&&(H=parseInt(H,10));
if($.isNumber(G)&&$.isNumber(H)){
var I=(B=new C._c.N$Jn())&&B.init();
I&&I.N$Gn(G);
I&&I.N$Zn(H);
this.N$Mct(I);
}
}else if(5==this.N$pi){
var J=A[D];
if(this.N$odt instanceof C._c.N$o2)for(var K=this.N$odt,L=0,M=(K&&K.N$d2()).length;M>L;L++){
var N=(K&&K.N$d2())[L];
N&&N.N$M2(J?J[L]:0);
}
}
};
D.N$bft=function(A){
var B=this.N$ylt(),D=this.N$Vat();
if(0==this.N$pi||4==this.N$pi||7==this.N$pi)A[B]=D;else if(1==this.N$pi)A[B]=D;else if(2==this.N$pi||3==this.N$pi){
if(D instanceof C._c.N$Jn){
A[B+"Left"]=D&&D.N$Yn();
A[B+"Right"]=D&&D.N$er();
}
}else if(5==this.N$pi&&this.N$odt instanceof C._c.N$o2){
var E=this.N$odt,F=[];
$.each(E&&E.N$d2(),function($){
F.push($&&$.N$D2());
});
A[B]=F;
}
};
D.N$Fct=function(){
var A=this.N$mdt();
if(0==this.N$pi||4==this.N$pi||7==this.N$pi)($.isNumber(A)||$.isBoolean(A))&&this.N$Mct(A);else if(1==this.N$pi)$.isArray(A)?this.N$Mct(A.slice(0)):($.isNumber(A)||$.isBoolean(A))&&this.N$Mct([A]);else if(2==this.N$pi||3==this.N$pi)A instanceof C._c.N$Jn&&this.N$Mct(A&&A.copy());else if(5==this.N$pi&&this.N$odt instanceof C._c.N$o2){
var B=this.N$odt;
$.each(B&&B.N$d2(),function($){
$&&$.N$M2(0);
});
}
};
D.N$tlt=function(){
this.N$Bft||this.N$slt();
return this.N$Bft;
};
D.N$Rlt=function($){
this.N$Bft||this.N$slt();
this.N$lht||(this.N$lht=[]);
this.N$Bft&&this.N$Bft.N$Rlt($);
this.N$lht.push($);
$&&$.N$eht(this);
this.N$vht=null;
};
D.N$slt=function(){
var $;
this.N$Kft||(this.N$Kft=[]);
this.N$Bft=($=new C._c.N$fht())&&$.init();
this.N$Kft.push(this.N$Bft);
};
D.N$zlt=function($){
this.N$slt();
this.N$Kft.splice($,0,this.N$Kft.pop());
};
D.N$Qat=function(A){
var B=this;
if(!this.N$vht){
var C={};
$.each(this.N$lht,function($){
var A=$&&$.N$Wn();
C[A]=$;
});
B.N$vht=C;
}
return B.N$vht[A];
};
D.N$Oct=function(){
this.N$Nit&&this.N$Nit.N$Alt(this,this.N$ldt,null);
};
D.N$kct=function(A,B){
var C=A&&A.N$Wn();
if(0==this.N$pi)this.N$Mct(C);else if(7==this.N$pi){
var D=B?this.N$ldt|C:this.N$ldt&~C;
this.N$Mct(D);
}else if(1==this.N$pi){
var E=void 0;
if(B){
E=this.N$ldt?this.N$ldt.slice(0):[];
E.push(C);
}else E=$.without(this.N$ldt||[],C);
this.N$Mct(E);
}
};
D.N$Lct=function($,A){
var B=this.N$Qat($);
B&&this.N$kct(B,A);
};
D.N$Act=function(A){
var B=A&&A.N$Wn(),C=!1;
C=0==this.N$pi?this.N$ldt==B:7==this.N$pi?(this.N$ldt&B)>0:$.includes(this.N$ldt,B);
return C;
};
D.N$Jat=function(){
var $=2==this.N$pdt,A=1==this.N$pi;
if(A&&$&&this.N$hdt>0&&this.N$ldt.length>this.N$hdt)return 1;
return this.N$pdt;
};
D.N$Mct=function(A){
if(this.N$ldt!=A){
var B=this.N$ldt;
A=this.N$Nit&&this.N$Nit.N$Llt(this,A,B);
A&&(Array.isArray(A)?A=$.nsort(A.slice(0)):A instanceof C._c.N$Jn&&(A=A&&A.copy()));
this.N$ldt=A;
this.N$Nit&&this.N$Nit.N$Alt(this,this.N$ldt,B);
}
};
return E;
});
}();
!function(){
"use strict";
C._registerClass("N$Bct",null,function($,A){
function B(){
this.N$cht=this.N$pht=this.N$Jft=null;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$mht=function($){
this.N$pht=$;
};
A.N$ght=function(){
return this.N$pht;
};
A.N$fct=function($){
this.N$cht=$;
};
A.N$yht=function(){
return this.N$cht;
};
A.N$Zat=function(){
return this.N$Jft;
};
A.N$Wlt=function($){
this.N$Jft||(this.N$Jft=[]);
this.N$Jft.push($);
};
return B;
});
}();
!function(){
"use strict";
var A=45,B=void 0;
C._registerClass("N$Hct",null,function(D,E){
function F(){
this.constructor=F;
this.N$_id=++C._id;
}
D.N$Si=function(){
var $;
B||(B=($=this.alloc())&&$.init());
return B;
};
E.N$Tdt=function($,A){
var B,D=$&&$.N$vi(),E=" ",F=[];
function G(B,D){
var E,G,H=void 0;
H=A?C._c.N$i8.N$T8(B,(E=$&&$.N$qit())&&E.N$Stt(),1,D):C._c.N$i8.N$S8(B,(G=$&&$.N$qit())&&G.N$Stt(),1,D);
F.push(H);
}
if(3==D){
var H=$&&$.N$Vat();
G(H&&H.N$Yn(),!0);
G(H&&H.N$er(),!0);
E=" - ";
}else if(4==D)G($&&$.N$Vat(),!0);else if(5==D)for(var I=(B=$&&$.N$qit())&&B.N$Zrt(),J=I&&I.N$d2(),K=J.length-1;K>=0;K--){
var L=J[K];
G(L&&L.N$s9(),!1);
}
return F.join(E);
};
E.N$Ndt=function($){
return this.N$Tdt($,!0);
};
E.N$Cdt=function($){
return this.N$Tdt($,!1);
};
E.N$kdt=function(A,B){
var D=this,E="",F=A&&A.N$vi(),G=A&&A.N$Vat(),H=A&&A.N$Jat();
if(5==H){
var I=A&&A.N$Kat();
if(I)return I(B);
}
if(0==F){
var J=A&&A.N$Qat(G);
if(B){
E=J&&J.N$sht();
E||(E=J&&J.N$Znt());
}else{
E=J&&J.N$Wat();
E||(E=J&&J.N$zet());
}
}else if(1==F||7==F){
var K=A&&A.N$Gat();
if(7==F){
G=[];
$.each(K,function($){
A&&A.N$Act($)&&G.push($&&$.N$Wn());
});
}
if(G.length==K.length)E="All";else if(1==H)E=""+G.length;else if(G.length>1)E="Multiple";else if(1==G.length){
var L=G[0],M=A&&A.N$Qat(L);
if(B){
E=M&&M.N$sht();
E||(E=M&&M.N$Znt());
}else{
E=M&&M.N$Wat();
E||(E=M&&M.N$zet());
}
}else E="";
}else if(B)if(2==F){
var N=A&&A.N$Wn();
E=C._c.N$i8.N$g8(G,N);
}else(3==F||4==F||5==F)&&(E=D.N$Ndt(A));
return E?E:"";
};
E.N$Ldt=function(A){
var B,C=this,D=A&&A.N$vi(),E=A&&A.N$Vat(),F=[];
0==D?F.push((B=A&&A.N$Qat(E))&&B.N$aht()):1==D?$.each(A&&A.N$Gat(),function($){
A&&A.N$Act($)&&F.push($&&$.N$aht());
}):2==D?F=["range:"+(A&&A.N$Wn())+","+(E&&E.N$Yn())+","+(E&&E.N$er())]:(3==D||4==D||5==D)&&(F=["musictype:"+C.N$Cdt(A)]);
return F;
};
E.N$Adt=function(A){
var B,D,E,F=A&&A.N$vi(),G=[],H={},I=!0,J=!0;
function K($,A,B){
$=B&&B.N$hr($);
A=B&&B.N$hr(A);
for(var C=B&&B.N$rr(),D=B&&B.N$nr();D>=C;C++)H[C]=C;
G.push({
value:$,
"default-value":A,
"valid-range":B&&B.N$ar()
});
}
if(5==F){
{
var L=(B=A&&A.N$qit())&&B.N$Zrt();
L&&L.N$d2();
}
$.each(L&&L.N$d2(),function($){
var A=$&&$.N$H2(),B=A+($&&$.N$D2()),D=C._c.N$Jn.N$ir(A-11,A+11);
K(B,A,D);
});
}else if(3==F){
var M=A&&A.N$Wn(),N=C._c.N$ti.N$ei(M),O=A&&A.N$Vat(),P=A&&A.N$mi();
P||(P=N&&N.N$mi());
var Q=A&&A.N$gi();
Q||(Q=N&&N.N$gi());
K(O&&O.N$Yn(),Q&&Q.N$Yn(),P);
K(O&&O.N$er(),Q&&Q.N$er(),P);
I=!1;
}else if(4==F){
var R=(D=C._c.N$ti.N$ei(A&&A.N$Wn()))&&D.N$mi();
K(A&&A.N$Vat(),0,R);
I=!1;
J=!1;
}
var S={},T={},U=(E=A&&A.N$qit())&&E.N$Stt();
$.each($.values(H),function($){
S[$]=C._c.N$i8.N$S8($,U,1,!0);
T[$]=C._c.N$i8.N$T8($,U,1,!0);
});
return{
"shows-reset-button":J,
"shows-side-labels":I,
"musictype-map":S,
"voiceover-map":T,
"explanatory-text":A&&A.N$Sdt(),
rows:G
};
};
E.N$Odt=function($){
for(var A=$&&$.N$Wn(),B=$&&$.N$Vat(),D=-2==A?-18:-12,E=18,F={},G=D;E>=G;G++)F[G]=C._c.N$i8.N$m8(G,A);
return{
clef:A,
range:B&&B.N$ar(),
"valid-range":[D,E],
"voiceover-map":F
};
};
E.N$Mdt=function(A){
var B=A&&A.N$ylt(),C=A&&A.N$Yat(),D=A&&A.N$vi(),E=A&&A.N$Vat(),F=1==D||7==D,G=[],H=0;
$.each(C,function(A){
var C=[],I=!1;
$.each(A&&A.N$wht(),function($){
$.length>2&&(I=!0);
});
$.each(A&&A.N$wht(),function(A){
var G=[];
$.each(A,function(A){
var C=B+"."+H++;
if(A){
var J=A&&A.N$Wn(),K=void 0;
1==D?K=$.includes(E,J):7==D?K=(E&J)>0:0==D&&(K=E==J);
G.push({
id:C,
type:2,
"ax-label":A&&A.N$Znt(),
"minimum-height":A&&A.N$oht(),
"modify-target":B,
"modify-value":J,
title:A&&A.N$zet(),
subtitle:A&&A.N$nht(),
"image-identifier":A&&A.N$aht(),
"allows-multiple":F,
checked:K,
smaller:I
});
}else G.push({
id:C,
type:0
});
});
G.length&&C.push(G);
});
C.length&&G.push({
header:A&&A.N$ght(),
footer:A&&A.N$yht(),
rows:C
});
});
return G;
};
E.N$Ddt=function(B){
var C=this,D=B&&B.N$ylt(),E=(B&&B.N$vi(),B&&B.N$Jat()),F={};
if(3==E||4==E){
var G=!(!B||!B.N$Vat());
4==E&&(G=!G);
F["type"]=3;
F["id"]=D;
F["modify-target"]=D;
F["title"]=B&&B.N$Xat();
F["on"]=G;
F["minimum-height"]=A;
}else if(6==E){
var H=B&&B.N$Vat(),I=B&&B.N$Qat(H),J=$.map(B&&B.N$Gat(),function($){
return $&&$.N$Wn();
}),K=I&&I.N$Znt();
K&&(F["ax-value"]=K);
F["type"]=5;
F["id"]=D;
F["modify-target"]=D;
F["title"]=I&&I.N$zet();
F["current-value"]=H;
F["all-values"]=J;
F["minimum-height"]=64;
}else{
F["type"]=1;
F["id"]=D;
F["target-table-id"]=D;
F["title"]=B&&B.N$Xat();
F["minimum-height"]=A;
}
if(5==E){
var L=B&&B.N$Kat();
if(L){
F["preview-text"]=L(!1);
var M=L(!0);
M&&(F["ax-value"]=M);
}
}else if(0==E||1==E){
F["preview-text"]=C.N$kdt(B,!1);
var N=C.N$kdt(B,!0);
N&&(F["ax-value"]=N);
}else{
F["image-identifiers"]=C.N$Ldt(B);
var O=C.N$kdt(B,!0);
O&&(F["ax-value"]=O);
}
return F;
};
E.N$Pdt=function(B){
var C,D=this,E=[],F=!1,G=B&&B.N$xot();
if(G&&G.length){
var H=void 0;
H=1==G.length?(C=G[0])&&C.N$Xat():""+G.length;
F=!0;
E.push({
rows:[[{
id:"Issues",
type:1,
"target-table-id":"Issues",
title:G.length>1?"Issues":"Issue",
"uses-red-color":!0,
"preview-text":H,
"minimum-height":A
}]]
});
}
$.each(B&&B.N$Yat(),function(A){
var B=[],C=!0;
$.each(A&&A.N$Zat(),function($){
if(!$||!$.N$eft()){
C=!1;
B.push([D.N$Ddt($)]);
}
});
C||E.push({
header:A&&A.N$ght(),
footer:A&&A.N$yht(),
rows:B
});
});
E.push({
rows:[[{
type:1,
id:"ChallengeMode",
"target-table-id":"ChallengeMode",
title:"Challenge Mode",
"preview-text":B&&B.N$Ost()?"On":"Off",
"minimum-height":A
}]]
});
return{
"has-issue":F,
sections:E
};
};
E.N$Hdt=function(A){
var B=A&&A.N$xot(),C=0,D=$.map(B,function($){
return{
rows:[[{
id:"issue"+C++,
type:4,
title:$&&$.N$Xat(),
explanation:$&&$.N$edt(),
remedy:$&&$.N$ndt()
}]]
};
});
return{
title:B.length>1?"Issues":"Issue",
sections:D
};
};
E.N$Bdt=function($){
var A=$&&$.N$tft("ChallengeTimeLimit"),B=$&&$.N$tft("ChallengeQuestionLimit"),C=$&&$.N$tft("ChallengeMultipleAttempts"),D=this.N$Ddt(A),E=this.N$Ddt(B),F=this.N$Ddt(C);
return{
title:"Challenge Mode",
sections:[{
header:"Time Limit",
rows:[[D]]
},{
header:"Question Limit",
rows:[[E]]
},{
header:"Options",
rows:[[F]],
footer:"Allow multiple attempts to answer a question."
}]
};
};
E.N$jdt=function($,A){
var B={};
B["title"]=A&&A.N$Xat();
var C=A&&A.N$vi();
3==C||5==C||4==C?B["pitch-picker"]=this.N$Adt(A):2==C?B["range-picker"]=this.N$Odt(A):B["sections"]=this.N$Mdt(A);
return B;
};
E.N$Pct=function($,A){
if(A){
if("Issues"==A)return this.N$Hdt($);
if("ChallengeMode"==A)return this.N$Bdt($);
var B=$&&$.N$tft(A);
return B?this.N$jdt($,B):null;
}
return this.N$Pdt($);
};
return F;
});
}();
!function(){
"use strict";
C._registerClass("N$rst",null,function(A,B){
function D(){
this.N$Fdt=this.N$Idt=null;
this.N$qdt=this.N$Rdt=this.N$Udt=0;
this.N$zdt=!1;
this.constructor=D;
this.N$_id=++C._id;
}
B.N$Wdt=function(){
return this.N$Fdt;
};
B.N$nst=function($){
var A=this;
if(A=D.N$_super.prototype.init.call(this)){
A.N$Fdt=$;
A.N$Rdt=0;
A.N$Udt=Date.now();
A.N$Idt={};
}
return A;
};
B.N$sot=function(){
var $=this.N$zdt;
this.N$Xdt();
this.N$Rdt=0;
$&&this.N$fut();
};
B.N$wst=function($){
this.N$Rdt=$;
};
B.N$fut=function(){
if(!this.N$zdt){
this.N$Udt=Date.now();
this.N$qdt=-1;
this.N$zdt=!0;
this.N$Fdt();
}
};
B.N$jot=function(){
if(this.N$zdt){
var $=this.N$Nst();
if($!=this.N$qdt){
this.N$Fdt&&this.N$Fdt();
this.N$qdt=$;
}
}
};
B.N$Xdt=function(){
if(this.N$zdt){
this.N$Rdt=this.N$Vdt();
this.N$zdt=!1;
}
};
B.N$Nst=function(){
return Math.floor(this.N$zdt?(Date.now()-this.N$Udt+this.N$Rdt)/1e3:this.N$Rdt/1e3);
};
B.N$qot=function(){
return this.N$zdt?1e3*(Math.floor((Date.now()-this.N$Udt+this.N$Rdt)/1e3)+1)-this.N$Rdt+this.N$Udt:Date.now()+1e3;
};
B.N$Vdt=function(){
return this.N$zdt?Date.now()-this.N$Udt+this.N$Rdt:this.N$Rdt;
};
B.N$Jdt=function(){
this.N$Idt={};
this.N$zdt||this.N$fut();
};
B.N$Kot=function($){
var A=this.N$Idt[$]||0;
this.N$Idt[$]=A+1;
this.N$zdt&&this.N$Xdt();
};
B.N$Qot=function(A){
var B=this.N$Idt[A]||0;
0>=B-1&&delete this.N$Idt[A];
0==$.keys(this.N$Idt).length&&this.N$Jdt();
};
B.N$uut=function(){
return this.N$Idt?$.keys(this.N$Idt):[];
};
return D;
});
}();
!function(){
"use strict";
function A(B,C){
var D=B.tag,E=B.attributes;
C.push("<",D,E?" "+E:"",">");
B.innerHTML?C.push(B.innerHTML):B.innerText?C.push(B.innerText.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")):$.each(B.children,function($){
A($,C);
});
C.push("</",D,">");
}
function B(A,B,C){
var D=B?$.without($.map(B,function($,A){
return $?A+'="'+$+'"':null;
}),null):[],E={
tag:A,
children:[],
innerHTML:null,
innerText:null,
attributes:D.join("")
};
$.isArray(C)||(C=[C]);
$.each(C,function($){
if("undefined"==typeof $||null===$)return;
"string"==typeof $?E.innerHTML=$:E.children.push($);
});
return E;
}
C._registerClass("N$uft",null,function($,D){
function E(){
this.N$Kdt=this.N$Qdt=this.N$Kft=this.N$Gdt=this.N$Ydt=this.N$Zdt=this.N$evt=null;
this.constructor=E;
this.N$_id=++C._id;
}
D.N$tvt=function(){
return this.N$Kdt;
};
D.init=function(){
var $=this;
($=E.N$_super.prototype.init.call(this))&&($.N$Kdt=[]);
return $;
};
D.N$pft=function($){
var C=this;
function D(A){
return A?$[A]:null;
}
var E=void 0,F=void 0,G=void 0,H=void 0,I=void 0,J=void 0,K=void 0,L=void 0;
E=B("html",{},F=B("body",{
style:D("body")
},G=B("table",{
style:D("main-table")
},H=B("tbody",{},null))));
for(var M=0,N=0,O=C.N$Kft.length;O>N;N++){
for(var P=C.N$Kft[N].rows,Q=C.N$Kft[N].vline,R=0,S=P.length;S>R;R++){
var T=P[R];
T.length>M&&(M=T.length);
}
Q&&M++;
}
var U=String(M);
if(C.N$Gdt){
I=B("tr",{
valign:"top"
},null);
H.children.push(I=B("tr",{
valign:"top"
},J=B("td",{
style:D("title-td"),
colSpan:U
},K=B("span",{
style:D("title-span")
},null))));
K.innerText="Progress Report for "+C.N$Gdt;
}
if(C.N$Ydt){
I=B("tr",{
valign:"top"
},null);
H.children.push(I=B("tr",{
valign:"top"
},J=B("td",{
style:D("header-td"),
colSpan:U
},K=B("span",{
style:D("header-span")
},null))));
K.innerHTML="Verification Code";
H.children.push(I=B("tr",{
valign:"top"
},J=B("td",{
style:D("code-td"),
colSpan:U
},K=B("span",{
style:D("code-span")
},null))));
K.innerHTML=C.N$Ydt;
H.children.push(I=B("tr",{
valign:"top"
},J=B("td",{
style:D("verify-td"),
colSpan:U
},[K=B("span",{
style:D("verify-span")
},null),L=B("a",{
style:D("verify-a"),
href:C.N$Zdt
},null)])));
K.innerText="Verify online at ";
L.innerText=C.N$evt?C.N$evt:C.N$Zdt;
}
for(var V=0,W=C.N$Kft.length;W>V;V++){
var X=C.N$Kft[V].rows,Y=C.N$Kft[V].vline;
if(C.N$Kft[V].name){
H.children.push(I=B("tr",{
valign:"top",
style:D("header-tr")
},J=B("td",{
style:D("header-td"),
colSpan:U
},K=B("span",{
style:D("header-span")
},null))));
K.innerHTML=C.N$Kft[V].name;
}
for(var Z=0,_=X.length;_>Z;Z++){
var a=X[Z];
I=B("tr",{
valign:"top",
style:D("normal-tr")
},null);
H.children.push(I);
for(var b=0,c=a.length;c>b;b++){
var d=a[b];
I.children.push(J=B("td",{
style:D(d[1])
},d[0]));
if(Y){
I.children.push(J=B("td",{
rowSpan:X.length,
style:D("vline-td")
},null));
Y=!1;
}
}
}
}
var e=[];
A(E,e);
return e.join("");
};
D.N$aft=function($){
this.N$Gdt=$;
};
D.N$fft=function($,A,B){
this.N$Ydt=$;
this.N$Zdt=A;
this.N$evt=B;
};
D.N$lft=function($){
this.N$Kdt=[];
this.N$Qdt={
rows:this.N$Kdt,
name:$
};
};
D.N$cft=function($,A){
this.N$nvt($,A,null,null);
};
D.N$nvt=function($,A,B,C){
(void 0===B||null===B)&&(B="td-left");
(void 0===C||null===C)&&(C="td-right");
this.N$Kdt.push([[$,B],[A,C]]);
};
D.N$rvt=function(){
this.N$Qdt.vline=!0;
};
D.N$hft=function(){
this.N$Kft||(this.N$Kft=[]);
this.N$Kft.push(this.N$Qdt);
this.N$Kdt=null;
this.N$Qdt=null;
};
return E;
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
var A="Clef",B="KeySignature",E="StaffPosition",F="Chord",G="Inversion",H="Accidental",I="Chords",J="Inversions",K="QuestionMode",L="Difficulty",M="Leniency";
C._registerClass("N$ivt","N$Nft",function($,A){
function B(){
C._c.N$Nft.call(this);
this.constructor=B;
this.N$_id=++C._id;
}
$.N$Zot=function(){
return"Chord Construction";
};
$.N$ult=function(){
var $,A=($=new C._c.N$Eht())&&$.init();
A&&A.N$Qht("chord-construction");
A&&A.N$Ght();
A&&A.N$ept();
A&&A.N$cpt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],"KeySignature");
A&&A.N$cpt([0,1,3,2,4,5,6,7,8,14,15,16,17,18,19],I);
A&&A.N$spt(J);
A&&A.N$hpt([0,1,2],K);
A&&A.N$hpt([1,2,3,4],L);
A&&A.N$hpt([0,1,2,3],"CorrectAnswerStyle");
A&&A.N$ppt();
A&&A.N$dpt();
A&&A.N$vpt();
A&&A.N$hpt([0,1,2],M);
return A;
};
A.N$tut=function(){
return"chord-construction";
};
A.N$ilt=function(){
var $,A,B,D,E,F,G,H,N,O,P=this;
this.N$bct(1);
this.N$slt();
this.N$bct(3);
this.N$slt();
this.N$bct(14);
var Q=($=new C._c.N$Dlt())&&$.N$Mlt(I);
Q&&Q.N$Plt("Chords");
Q&&Q.N$Blt(1);
Q&&Q.N$Hlt(1);
var R=function($){
var A=C._c.N$i8.N$W8($),B=C._c.N$i8.N$X8($),D=C._c.N$Ilt.N$Flt(A,$);
D&&D.N$zrt(B);
19==$&&D&&D.N$Nlt("Dominant 7th (Sus. 4th)");
Q&&Q.N$Rlt(D);
};
R(0);
R(1);
R(3);
R(2);
Q&&Q.N$slt();
R(4);
R(5);
R(6);
R(14);
R(8);
R(7);
Q&&Q.N$slt();
R(15);
R(16);
Q&&Q.N$slt();
R(17);
R(18);
R(19);
Q&&Q.N$jlt([0,1,3,2,4,5,6,7,8]);
P.N$slt();
P.N$Wlt(Q);
var S=(A=new C._c.N$Dlt())&&A.N$Mlt(J);
S&&S.N$Plt("Inversions");
S&&S.N$Hlt(3);
S&&S.N$Blt(0);
S&&S.N$jlt(0);
S&&S.N$Rlt(C._c.N$Ilt.N$Qat(0));
S&&S.N$Rlt(C._c.N$Ilt.N$Qat(1));
P.N$Wlt(S);
P.N$slt();
var T=(B=new C._c.N$Dlt())&&B.N$Mlt(K);
T&&T.N$Plt("Question Mode");
T&&T.N$Blt(0);
T&&T.N$Hlt(0);
T&&T.N$jlt(0);
T&&T.N$slt();
T&&T.N$Rlt(C._c.N$Ilt.N$Flt("Quality Only",0));
(D=T&&T.N$tlt())&&D.N$fct("Select the correct accidentals for the specified quality.  The lowest note may not be modified.");
T&&T.N$slt();
T&&T.N$Rlt(C._c.N$Ilt.N$Flt("Root and Quality",1));
T&&T.N$Rlt(C._c.N$Ilt.N$Flt("Root and Symbol",2));
(E=T&&T.N$tlt())&&E.N$fct("Select the correct accidentals for the specified chord.  All notes may be modified.");
P.N$Wlt(T);
var U=(F=new C._c.N$Dlt())&&F.N$Mlt(L);
U&&U.N$Plt("Difficulty");
U&&U.N$Blt(0);
U&&U.N$Hlt(0);
U&&U.N$jlt(1);
U&&U.N$Rlt(C._c.N$Ilt.N$Flt("Level 1",1));
U&&U.N$Rlt(C._c.N$Ilt.N$Flt("Level 2",2));
U&&U.N$Rlt(C._c.N$Ilt.N$Flt("Level 3",3));
U&&U.N$Rlt(C._c.N$Ilt.N$Flt("Level 4",4));
P.N$slt();
P.N$Wlt(U);
var V=(G=new C._c.N$Dlt())&&G.N$Mlt(M);
V&&V.N$Plt("Leniency");
V&&V.N$Hlt(0);
V&&V.N$Blt(0);
V&&V.N$jlt(0);
V&&V.N$slt();
V&&V.N$Rlt(C._c.N$Ilt.N$Flt("Lenient",2));
(H=V&&V.N$tlt())&&H.N$fct("Allow answers with unneeded or duplicated accidentals.");
V&&V.N$slt();
V&&V.N$Rlt(C._c.N$Ilt.N$Flt("Naturals Only",1));
(N=V&&V.N$tlt())&&N.N$fct("Only allow unneeded naturals.");
V&&V.N$slt();
V&&V.N$Rlt(C._c.N$Ilt.N$Flt("Strict",0));
(O=V&&V.N$tlt())&&O.N$fct("Disallow answers with unneeded or duplicated accidentals.");
P.N$Wlt(V);
P.N$slt();
P.N$bct(11);
};
return B;
});
function N($,A,B,D){
var E,F,G,H;
return-100==B?(E=(F=C._c.N$Kt)&&F.alloc())&&E.N$xn($,D,A):(G=(H=C._c.N$Kt)&&H.alloc())&&G.N$En($,D,B);
}
function O($,A,B,D,E,F){
var G,H,I,J,K=(G=(H=C._c.N$K7)&&H.alloc())&&G.N$V7(E),L=N($,A,B,D);
return(I=L)&&I.N$Bn((J=K)&&J.N$Y7(),!0,F);
}
C._registerClass("N$svt","N$dit",function(P,Q){
function R(){
C._c.N$dit.call(this);
this.N$ovt=this.N$uvt=this.N$gnt=this.N$avt=this.N$Lrt=null;
this.N$fvt=this.N$l4=this.N$lvt=this.N$h4=this.N$cvt=this.N$bnt=0;
this.N$hvt=this.N$pvt=this.N$dvt=this.N$vvt=!1;
this.constructor=R;
this.N$_id=++C._id;
}
P.N$Git=function(){
return C._c.N$ivt;
};
Q.N$sut=function(){
return 1;
};
Q.N$out=function(){
return 3;
};
Q.N$Xot=function(){
var $,A=C._c.N$J9.N$Z9(this.N$avt,this.N$ovt),B=C._c.N$J9.N$Z9(this.N$avt,this.N$uvt),D=($=this.N$qit())&&$.N$alt(M),E=C._c.N$Qut.N$vat(B,A,this.N$l4,this.N$h4,D);
this.N$gut(E,this.N$lvt,null);
};
Q.N$yut=function($){
if(0!=$){
this.N$dvt=!0;
this.N$mvt();
}
};
Q.N$cot=function(){
this.N$uvt=this.N$ovt.slice(0);
this.N$mvt();
};
Q.N$Sot=function(){
var M,N=this,O=this.N$qit(),P=O&&O.N$cat(),Q=O&&O.N$wrt(),R=O&&O.N$Rct(),S=O&&O.N$alt(I),T=O&&O.N$alt(J),U=O&&O.N$alt(L),V=O&&O.N$alt(K),W=0,X=void 0,Y=void 0,Z=[],_=$.some(S,function($){
return 4==C._c.N$K7.N$Z7($);
});
X=T&&_?[0,1,2,3]:T?[0,1,2]:[0];
if(1==U){
Y=[-100];
W=1;
}else if(2==U){
Y=[-1,0,1];
W=1;
}else if(3==U){
Y=[-1,0,1];
W=2;
}else if(4==U){
Y=[-2,-1,0,1,2];
W=2;
}
var a=_?6:T?5:4;
Q&&Q.N$pr(a,12)&&Z.push(14);
var b=Q&&Q.N$lr();
N.N$cut((M={},D(M,A,P),D(M,E,b),D(M,B,R),D(M,F,S),D(M,G,X),D(M,H,Y),M));
N.N$cvt=V;
N.N$fvt=W;
N.N$Lrt=Q;
N.N$vvt=T;
N.N$hvt=!1;
O&&O.N$Eot(C._c.N$Cot.N$rdt(Z));
};
Q.N$Lot=function(){
var $=this.N$qit();
this.N$lvt=$&&$.N$qct();
2==this.N$lvt&&this.N$Eut(2);
};
Q.N$Aut=function(D,I,J){
var K=D[A],L=D[B],M=D[H],N=D[E],P=D[F],Q=D[G],R=I?I[E]:0,S=I?I[F]:0;
if(I&&N==R&&P==S){
if(J>.5){
var T=this.N$qit();
this.N$hvt=!0;
0==$.size(T&&T.N$xot())&&T&&T.N$Eot([C._c.N$Cot.N$Not(7)]);
}
if(!this.N$hvt)return!1;
}
if(!C._c.N$r8.N$s4(Q,P))return!1;
var U=O(K,L,M,N,P,Q),V=!0;
V&&!C._c.N$Qut.N$Zut(U,L,this.N$fvt)&&(V=!1);
V&&!C._c.N$Qut.N$eat(U,K,this.N$Lrt)&&(V=!1);
return V;
};
Q.N$mvt=function(){
var $,A,B=0==this.N$Vit();
this.N$dvt&&(B=!1);
var D=($=new C._c.N$Xtt())&&$.init();
D&&D.N$tnt(this.N$l4);
D&&D.N$nnt(this.N$h4);
D&&D.N$lnt(this.N$Lrt);
D&&D.N$hnt(2);
D&&D.N$fnt(16);
B&&D&&D.N$cnt(3);
for(var E=[],F=0;F<this.N$avt.length;F++){
var G=this.N$avt[F],H=this.N$uvt[F];
E.push((A=new C._c.N$J9())&&A.N$t8(G,H));
}
var I=this.N$bnt,J=this.N$avt[this.N$bnt],K=this.N$uvt[this.N$bnt],L=0==this.N$bnt&&0==this.N$cvt,M=null;
L&&(M=this.N$pvt?"This note cannot\nbe modified.":"Select a note to modify.");
var N=C._c.N$mnt.N$Nnt(E);
N&&N.N$Ent(this.N$gnt);
N&&N.N$Snt(B?I:-1);
D&&D.N$dnt(N);
var O=C._c.N$i8.N$m8(J,this.N$l4),P=void 0;
P=0==this.N$fvt?0:1==this.N$fvt?1:2;
this.N$Hst(2020,{
"accidental-type":K,
"accidental-layout":P,
position:J,
"immutable-label":M,
"ax-label":"Selected Note",
"ax-value":O
});
this.N$Cut(D);
};
Q.N$not=function(D){
var I,J=this,K=D[A],L=D[B],M=D[H],P=D[E],Q=D[F],R=D[G],S=N(K,L,M,P),T=O(K,L,M,P,Q,R),U=[],V=[],W=[];
$.each(T,function($,A){
var B=$&&$.N$An(K),C=$&&$.N$On(L);
U.push(B);
V.push(C);
W.push(0==A?C:-100);
});
var X=null,Y=null;
if(2==J.N$cvt){
X=C._c.N$i8.N$J8(S&&S.N$Wn(),Q);
Y=C._c.N$i8.N$f8(S&&S.N$Wn(),0)+" "+C._c.N$i8.N$X8(Q);
}else if(1==J.N$cvt){
X=C._c.N$i8.N$a8(S&&S.N$Wn(),0)+" "+C._c.N$i8.N$W8(Q);
Y=C._c.N$i8.N$f8(S&&S.N$Wn(),0)+" "+C._c.N$i8.N$X8(Q);
}else{
X=C._c.N$i8.N$W8(Q);
Y=C._c.N$i8.N$X8(Q);
}
var Z=(I=new C._c.N$Lnt())&&I.init();
Z&&Z.N$Mnt(X);
Z&&Z.N$Dnt(Y);
J.N$l4=K;
J.N$h4=L;
J.N$avt=U;
J.N$ovt=V;
J.N$uvt=W;
J.N$gnt=Z;
J.N$bnt=0;
J.N$pvt=!1;
J.N$dvt=!1;
J.N$wut();
J.N$mvt();
};
Q.N$gvt=function($){
var A=$["accidental-type"],B=$["delta"],C=$["position"];
if(void 0!==A){
var D=0==this.N$bnt&&0==this.N$cvt;
if(D)return;
this.N$uvt[this.N$bnt]=A;
}else if(void 0!==B){
this.N$bnt+=B;
this.N$bnt<0?this.N$bnt=0:this.N$bnt>=this.N$avt.length&&(this.N$bnt=this.N$avt.length-1);
0!=this.N$bnt&&(this.N$pvt=!0);
}else if(void 0!==C){
var E=this.N$avt.indexOf(C);
E>=0&&(this.N$bnt=E);
E>0&&(this.N$pvt=!0);
}
this.N$mvt();
};
Q.N$yvt=function($){
var A=$["position"];
if(void 0!==A){
for(var B=1/0,C=this.N$bnt,D=0,E=this.N$avt.length;E>D;D++){
var F=Math.abs(this.N$avt[D]-A);
if(B>F){
B=F;
C=D;
}
}
if(C!=this.N$bnt){
this.N$bnt=C;
this.N$mvt();
}
}
};
Q.N$aut=function($,A){
3015==$?this.N$gvt(A):3016==$?this.N$yvt(A):R.N$_super.prototype.N$aut.call(this,$,A);
};
Q.N$mut=function(D){
var I,J=D[A],K=D[B],L=D[H],M=D[E],N=D[F],P=D[G],Q=O(J,K,L,M,N,P),R=(I=new C._c.N$jr())&&I.N$Qr(2);
$.each(Q,function($){
R&&R.N$oi($&&$.N$Ln(),0,1);
});
return R;
};
return R;
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
var A="Root",B="Chord",E="PlayMode",F="Inversion",G="Chords",H="Inversions",I="PlayMode";
C._registerClass("N$bvt","N$Nft",function(A,B){
function D(){
C._c.N$Nft.call(this);
this.constructor=D;
this.N$_id=++C._id;
}
A.N$Zot=function(){
return"Chord Ear Training";
};
A.N$ult=function(){
var $,A=($=new C._c.N$Eht())&&$.init();
A&&A.N$Qht("ear-chord");
A&&A.N$cpt([0,1,2,3,4,5,6,7,8,14,15,16,17,18,19],G);
A&&A.N$spt(H);
A&&A.N$cpt([0,1,2,3,4],I);
A&&A.N$hpt([1e3,750,500,333,250,125],"Speed");
A&&A.N$spt("AllowChange");
A&&A.N$upt();
A&&A.N$apt();
A&&A.N$hpt([0,1,2,3],"CorrectAnswerStyle");
A&&A.N$ppt();
A&&A.N$dpt();
A&&A.N$vpt();
A&&A.N$Dht(function($,A){
A.length<=7&&A.splice(2,0,0);
});
return A;
};
B.N$tut=function(){
return"ear-chord";
};
B.N$ilt=function(){
var A,B,D,E,F=this,J=(A=new C._c.N$Dlt())&&A.N$Mlt(G);
J&&J.N$Plt("Chords");
J&&J.N$Blt(1);
J&&J.N$Hlt(1);
var K=[],L=function($,A){
var B=C._c.N$i8.N$W8($),D=C._c.N$i8.N$X8($),E=C._c.N$Ilt.N$Flt(B,$);
E&&E.N$zrt(D);
19==$&&E&&E.N$Nlt("Dominant 7th (Sus. 4th)");
A&&K.push($);
J&&J.N$Rlt(E);
};
L(0,!0);
L(1,!0);
L(3,!0);
L(2,!0);
J&&J.N$slt();
L(4,!0);
L(5,!0);
L(6,!0);
L(14,!1);
L(8,!0);
L(7,!0);
J&&J.N$slt();
L(15,!1);
L(16,!1);
J&&J.N$slt();
L(17,!1);
L(18,!1);
L(19,!1);
J&&J.N$jlt(K);
F.N$Wlt(J);
var M=(B=new C._c.N$Dlt())&&B.N$Mlt(H);
M&&M.N$Plt("Inversions");
M&&M.N$Hlt(3);
M&&M.N$Blt(0);
M&&M.N$jlt(0);
M&&M.N$Rlt(C._c.N$Ilt.N$Qat(0));
M&&M.N$Rlt(C._c.N$Ilt.N$Qat(1));
F.N$Wlt(M);
var N=(D=new C._c.N$Dlt())&&D.N$Mlt(I);
N&&N.N$Plt("Play Mode");
N&&N.N$Blt(1);
N&&N.N$jlt([0]);
var O=function($,A,B){
var D=C._c.N$Ilt.N$Klt(null,"chord-playmode:"+$,$);
D&&D.N$zrt(A);
D&&D.N$qlt(B?B:A);
D&&D.N$Qlt(61);
N&&N.N$Rlt(D);
};
O(0,"Harmonic",null);
O(1,"Ascending",null);
O(2,"Descending",null);
O(3,"Ascending Harmonic","Asc. Harmonic");
O(4,"Descending Harmonic","Desc. Harmonic");
F.N$slt();
F.N$Wlt(N);
F.N$bct(16);
F.N$slt();
F.N$bct(6);
F.N$bct(7);
F.N$slt();
F.N$bct(12);
(E=F.N$xct(12))&&E.N$jlt(0);
$.each(F.N$Nct(7),function($){
$&&$.N$Edt("Range determines the available pitches for all notes of the chord.");
});
};
return D;
});
C._registerClass("N$wvt","N$dit",function(J,K){
function L(){
C._c.N$dit.call(this);
this.N$Lrt=null;
this.N$lvt=this.N$Evt=0;
this.N$vvt=!1;
this.constructor=L;
this.N$_id=++C._id;
}
J.N$Git=function(){
return C._c.N$bvt;
};
K.N$Svt=function($){
if(this.N$vvt){
var A=C._c.N$K7.N$e2(this.N$Evt),B=C._c.N$K7.N$e2($);
if(A&&A.N$i2(B))return!0;
}
return $==this.N$Evt;
};
K.N$mut=function($){
var D,G=$[A],H=$[B],I=$[F],J=$[E],K=this.N$qit(),L=C._c.N$Qut.N$tat(G,H,I,this.N$Lrt),M=(L.length,
0),N=(D=new C._c.N$jr())&&D.N$Qr(K&&K.N$Slt()),O=K&&K.N$zct();
function P($){
var A=(L.length-1,L.slice(0));
1==$&&A.reverse();
for(var B=0,C=A.length;C>B;B++){
N&&N.N$oi(A[B],M,O);
2!=$&&(M+=O);
}
}
if(0===J)P(2);else if(1==J)P(0);else if(2==J)P(1);else if(3==J){
P(0);
P(2);
}else if(4==J){
P(1);
P(2);
}
return N;
};
K.N$sut=function(){
return 4;
};
K.N$out=function(){
return 1;
};
K.N$Vot=function($){
var A=this.N$Svt($);
this.N$gut(A,this.N$lvt,[$]);
};
K.N$cot=function(){
this.N$Tut([this.N$Evt]);
};
K.N$Sot=function(){
var $,J=this.N$qit(),K=J&&J.N$Slt(),L=J&&J.N$alt(I),M=J&&J.N$alt(G),N=J&&J.N$alt(H),O=N?[0,1,2,3]:[0],P=C._c.N$Qut.N$nat(K,J&&J.N$Ict()),Q=C._c.N$Jn.N$ir(P&&P.N$Yn(),(P&&P.N$er())-7),R=Q&&Q.N$lr();
this.N$cut(($={},D($,A,R),D($,B,M),D($,E,L),D($,F,O),$));
this.N$Lrt=Q;
this.N$vvt=N;
};
K.N$Lot=function(){
var A=this,B=this.N$qit(),D=B&&B.N$alt(G),E=B&&B.N$Slt();
this.N$lvt=B&&B.N$qct();
this.N$Eut(E);
var F=[],H=$.includes(D,17),I=$.includes(D,18),J=$.includes(D,19);
$.each([0,1,3,2,4,5,6,14,8,7,15,16,17,18,19],function(A){
var B=C._c.N$i8.N$W8(A),E=C._c.N$i8.N$z8(A),G=C._c.N$i8.N$V8(A),I=C._c.N$i8.N$X8(A);
18!=A||H||J||(B=I="Suspended");
F.push({
title:B,
"short":E,
symbol:G,
ax:I,
tag:A,
active:$.includes(D,A)
});
});
var K=[[0,1],[3,2],[4,5],[6,14],[8,7],[15,16]],L=[[0,1,3,2],[4,5,6,14],[8,7,15,16],[17,18,19]];
if(H||I||J){
var M=[17,18];
J&&M.push(19);
K.push(M);
}
A.N$Sut(F,0,{
"default":K,
landscape:L
});
};
K.N$Aut=function($,D){
var E=$[A],G=$[B],H=$[F];
if(D){
var I=D[A],J=D[B];
if(E==I&&G==J)return!1;
}
if(!C._c.N$r8.N$s4(H,G))return!1;
return!0;
};
K.N$not=function($){
this.N$Evt=$[B];
this.N$wut();
this.N$but(this.N$vut());
};
return L;
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
var A="Clef",B="KeySignature",E="StaffPosition",F="Chord",G="Inversion",H="Accidental",I="Chords",J="Inversions";
C._registerClass("N$xvt","N$Nft",function($,A){
function B(){
C._c.N$Nft.call(this);
this.constructor=B;
this.N$_id=++C._id;
}
$.N$Zot=function(){
return"Chord Identification";
};
$.N$ult=function(){
var $,A=($=new C._c.N$Eht())&&$.init();
A&&A.N$Qht("chord");
A&&A.N$Ght();
A&&A.N$ept();
A&&A.N$cpt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],"KeySignature");
A&&A.N$cpt([0,1,3,2,4,5,6,7,8,14],I);
A&&A.N$spt(J);
A&&A.N$hpt([1,2,3,4,5],"Difficulty");
A&&A.N$hpt([0,1,2,3],"CorrectAnswerStyle");
A&&A.N$cpt([15,16,17,18,19],I);
A&&A.N$ppt();
A&&A.N$dpt();
A&&A.N$vpt();
return A;
};
A.N$tut=function(){
return"chord";
};
A.N$ilt=function(){
var $,A,B=this;
this.N$bct(1);
this.N$slt();
this.N$bct(3);
this.N$slt();
this.N$bct(14);
var D=($=new C._c.N$Dlt())&&$.N$Mlt(I);
D&&D.N$Plt("Chords");
D&&D.N$Blt(1);
D&&D.N$Hlt(1);
var E=function($){
var A=C._c.N$i8.N$W8($),B=C._c.N$i8.N$X8($),E=C._c.N$Ilt.N$Flt(A,$);
E&&E.N$zrt(B);
19==$&&E&&E.N$Nlt("Dominant 7th (Sus. 4th)");
D&&D.N$Rlt(E);
};
E(0);
E(1);
E(3);
E(2);
D&&D.N$slt();
E(4);
E(5);
E(6);
E(14);
E(8);
E(7);
D&&D.N$slt();
E(15);
E(16);
D&&D.N$slt();
E(17);
E(18);
E(19);
D&&D.N$jlt([0,1,3,2,4,5,6,7,8]);
B.N$slt();
B.N$Wlt(D);
var F=(A=new C._c.N$Dlt())&&A.N$Mlt(J);
F&&F.N$Plt("Inversions");
F&&F.N$Hlt(3);
F&&F.N$Blt(0);
F&&F.N$jlt(0);
F&&F.N$Rlt(C._c.N$Ilt.N$Qat(0));
F&&F.N$Rlt(C._c.N$Ilt.N$Qat(1));
B.N$Wlt(F);
B.N$slt();
B.N$bct(15);
B.N$slt();
B.N$bct(11);
};
return B;
});
function K($,A,B,D,E,F){
var G,H,I,J,K,L,M,N,O=(G=(H=C._c.N$K7)&&H.alloc())&&G.N$V7(E),P=null;
P=-100==B?(I=(J=C._c.N$Kt)&&J.alloc())&&I.N$xn($,D,A):(K=(L=C._c.N$Kt)&&L.alloc())&&K.N$En($,D,B);
return(M=P)&&M.N$Bn((N=O)&&N.N$Y7(),!0,F);
}
C._registerClass("N$Tvt","N$dit",function(L,M){
function N(){
C._c.N$dit.call(this);
this.N$Lrt=null;
this.N$fvt=this.N$lvt=this.N$Evt=0;
this.N$hvt=this.N$vvt=!1;
this.constructor=N;
this.N$_id=++C._id;
}
L.N$Git=function(){
return C._c.N$xvt;
};
M.N$Svt=function($){
if(this.N$vvt){
var A=C._c.N$K7.N$e2(this.N$Evt),B=C._c.N$K7.N$e2($);
if(A&&A.N$i2(B))return!0;
}
return $==this.N$Evt;
};
M.N$sut=function(){
return 1;
};
M.N$out=function(){
return 1;
};
M.N$Vot=function($){
var A=this.N$Svt($);
this.N$gut(A,this.N$lvt,[$]);
};
M.N$cot=function(){
this.N$Tut([this.N$Evt]);
};
M.N$Sot=function(){
var K,L=this,M=this.N$qit(),N=M&&M.N$cat(),O=M&&M.N$wrt(),P=M&&M.N$Rct(),Q=M&&M.N$alt(I),R=M&&M.N$alt(J),S=M&&M.N$Uct(),T=0,U=void 0,V=void 0,W=[],X=$.some(Q,function($){
return 4==C._c.N$K7.N$Z7($);
});
U=R&&X?[0,1,2,3]:R?[0,1,2]:[0];
if(1==S){
V=[-100];
T=0;
}else if(2==S){
V=[-100];
T=1;
}else if(3==S){
V=[-1,0,1];
T=1;
}else if(4==S){
V=[-1,0,1];
T=2;
}else{
V=[-2,-1,0,1,2];
T=2;
}
var Y=X?6:R?5:4;
O&&O.N$pr(Y,12)&&W.push(14);
var Z=O&&O.N$lr();
L.N$cut((K={},D(K,A,N),D(K,E,Z),D(K,B,P),D(K,F,Q),D(K,G,U),D(K,H,V),K));
L.N$fvt=T;
L.N$Lrt=O;
L.N$vvt=R;
L.N$hvt=!1;
M&&M.N$Eot(C._c.N$Cot.N$rdt(W));
};
M.N$Lot=function(){
var A=this,B=this.N$qit(),D=B&&B.N$alt(I);
this.N$lvt=B&&B.N$qct();
2==this.N$lvt&&this.N$Eut(2);
var E=[];
$.each([0,1,3,2,4,5,6,14,8,7,15,16,17,18,19],function(A){
var B=C._c.N$i8.N$W8(A),F=C._c.N$i8.N$z8(A),G=C._c.N$i8.N$X8(A),H=C._c.N$i8.N$V8(A);
E.push({
title:B,
"short":F,
symbol:H,
ax:G,
tag:A,
active:$.includes(D,A)
});
});
var F=$.includes(D,17)||$.includes(D,18)||$.includes(D,19)||$.includes(D,14)||$.includes(D,15)||$.includes(D,16),G=F?[[0,1,3,2],[4,5,6,14],[8,7,15,16],[17,18,19]]:[[0,1],[3,2],[4,5,6],[8,7]],H=F?[[0,1,3,2,17,18,19],[4,5,6,14,8,7,15,16]]:[[0,1,3,2],[4,5,6,8,7]];
A.N$Sut(E,1,{
"default":G,
landscape:H
});
};
M.N$Aut=function(D,I,J){
var L=D[A],M=D[B],N=D[H],O=D[E],P=D[F],Q=D[G],R=I?I[E]:0,S=I?I[F]:0;
if(I&&O==R&&P==S){
if(J>.5){
var T=this.N$qit();
this.N$hvt=!0;
0==$.size(T&&T.N$xot())&&T&&T.N$Eot([C._c.N$Cot.N$Not(7)]);
}
if(!this.N$hvt)return!1;
}
if(!C._c.N$r8.N$s4(Q,P))return!1;
var U=K(L,M,N,O,P,Q),V=!0;
V&&!C._c.N$Qut.N$Zut(U,M,this.N$fvt)&&(V=!1);
V&&!C._c.N$Qut.N$eat(U,L,this.N$Lrt)&&(V=!1);
return V;
};
M.N$not=function($){
var D,I=$[A],J=$[B],L=$[H],M=$[E],N=$[F],O=$[G],P=(D=new C._c.N$Xtt())&&D.init();
P&&P.N$tnt(I);
P&&P.N$nnt(J);
P&&P.N$pnt(K(I,J,L,M,N,O));
P&&P.N$fnt(15.5);
P&&P.N$lnt(this.N$Lrt);
this.N$Evt=N;
this.N$wut();
this.N$Cut(P);
};
M.N$mut=function(D){
var I,J=D[A],L=D[B],M=D[H],N=D[E],O=D[F],P=D[G],Q=K(J,L,M,N,O,P),R=(I=new C._c.N$jr())&&I.N$Qr(2);
$.each(Q,function($){
R&&R.N$oi($&&$.N$Ln(),0,1);
});
return R;
};
return N;
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
var A="Root",B="Chord",E="Positions",F="LeftHand",G="Fret",H="Chords",I="Difficulty",J="Labels";
C._registerClass("N$Nvt","N$Nft",function($,A){
function B(){
C._c.N$Nft.call(this);
this.constructor=B;
this.N$_id=++C._id;
}
$.N$Zot=function(){
return"Fretboard Chord Identification";
};
$.N$ult=function(){
var $,A=($=new C._c.N$Eht())&&$.init();
A&&A.N$Qht("fretboard-chord");
A&&A.N$npt();
A&&A.N$rpt();
A&&A.N$ipt();
A&&A.N$spt(F);
A&&A.N$cpt([0,1,2,3,4,5,6,7,8,9,10,11,12],G);
A&&A.N$cpt([0,1,2,3,4,5,6,7,8,14,15,16,17,18,19],H);
A&&A.N$hpt([1,2,3],I);
A&&A.N$hpt([0,1,2,3],"CorrectAnswerStyle");
A&&A.N$hpt([0,1,2,3,4,5,6,7],J);
A&&A.N$cpt([13,14,15,16,17],G);
A&&A.N$ppt();
A&&A.N$dpt();
A&&A.N$vpt();
return A;
};
A.N$tut=function(){
return"fretboard-chord";
};
A.N$ilt=function(){
var $,A,B,D,E,K=this;
this.N$bct(8);
this.N$bct(9);
var L=($=new C._c.N$Dlt())&&$.N$Mlt(F);
L&&L.N$Plt("Left Hand");
L&&L.N$Hlt(3);
L&&L.N$Blt(0);
L&&L.N$jlt(0);
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(0));
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$Wlt(L);
var M=(A=new C._c.N$Dlt())&&A.N$Mlt(G),N=function($,A,B){
var D=C._c.N$Ilt.N$Flt(A,$);
D&&D.N$Nlt(B);
M&&M.N$Rlt(D);
};
M&&M.N$Plt("Fret Positions");
M&&M.N$Blt(1);
M&&M.N$Hlt(1);
N(0,"Open","Open");
N(1,"Fret 1","1");
N(2,"Fret 2","2");
N(3,"Fret 3","3");
N(4,"Fret 4","4");
N(5,"Fret 5","5");
N(6,"Fret 6","6");
N(7,"Fret 7","7");
N(8,"Fret 8","8");
N(9,"Fret 9","9");
N(10,"Fret 10","10");
N(11,"Fret 11","11");
N(12,"Fret 12","12");
N(13,"Fret 13","13");
N(14,"Fret 14","14");
N(15,"Fret 15","15");
N(16,"Fret 16","16");
N(17,"Fret 17","17");
M&&M.N$jlt([0,1,2,3,4,5]);
K.N$slt();
K.N$Wlt(M);
K.N$bct(10);
var O=(B=new C._c.N$Dlt())&&B.N$Mlt(J);
O&&O.N$Plt("Labels");
O&&O.N$Blt(7);
O&&O.N$jlt(3);
O&&O.N$Rlt(C._c.N$Ilt.N$Flt("Frets",1));
O&&O.N$Rlt(C._c.N$Ilt.N$Flt("Strings",2));
O&&O.N$Rlt(C._c.N$Ilt.N$Flt("Markers",4));
O&&O.N$Hlt(5);
O&&O.N$bdt(function(){
var $=O&&O.N$Vat();
return["None","Frets","Strings","Frets & Strings","Markers","Frets & Markers","Strings & Markers","All"][$]||"";
});
K.N$Wlt(O);
var P=(D=new C._c.N$Dlt())&&D.N$Mlt(H);
P&&P.N$Plt("Chords");
P&&P.N$Blt(1);
P&&P.N$Hlt(1);
var Q=function($){
var A=C._c.N$i8.N$W8($),B=C._c.N$i8.N$X8($),D=C._c.N$Ilt.N$Flt(A,$);
D&&D.N$zrt(B);
19==$&&D&&D.N$Nlt("Dominant 7th (Sus. 4th)");
P&&P.N$Rlt(D);
};
Q(0);
Q(1);
Q(3);
Q(2);
P&&P.N$slt();
Q(4);
Q(5);
Q(6);
Q(14);
Q(8);
Q(7);
P&&P.N$slt();
Q(15);
Q(16);
P&&P.N$slt();
Q(18);
Q(19);
P&&P.N$jlt([0,1,3,2,4,5,6,7,8]);
K.N$slt();
K.N$Wlt(P);
var R=(E=new C._c.N$Dlt())&&E.N$Mlt(I);
R&&R.N$Plt("Difficulty");
R&&R.N$Blt(0);
R&&R.N$Hlt(0);
var S=C._c.N$Ilt.N$Flt("Level 1",1),T=C._c.N$Ilt.N$Flt("Level 2",2),U=C._c.N$Ilt.N$Flt("Level 3",3);
S&&S.N$pct("All positions");
T&&T.N$pct("Nearby positions");
U&&U.N$pct("Random");
R&&R.N$Rlt(S);
R&&R.N$Rlt(T);
R&&R.N$Rlt(U);
R&&R.N$jlt(2);
K.N$slt();
K.N$Wlt(R);
K.N$slt();
K.N$bct(11);
};
return B;
});
C._registerClass("N$Cvt","N$dit",function(K,L){
function M(){
C._c.N$dit.call(this);
this.N$d9=null;
this.N$lvt=this.N$Evt=this.N$kvt=0;
this.constructor=M;
this.N$_id=++C._id;
}
K.N$Git=function(){
return C._c.N$Nvt;
};
L.N$Svt=function($){
var A=C._c.N$K7.N$e2(this.N$Evt),B=C._c.N$K7.N$e2($);
return A&&A.N$i2(B);
};
L.N$Lvt=function(A){
var B=void 0,C=$.sample(A);
B=$.sample(C);
A=$.without(A,C);
for(var D=void 0,E=B&&B.N$L2(),F=B&&B.N$A2(),G=1/0,H=1,I=0,J=A.length;J>I;I++)H*=A[I].length;
for(var K=0;H>K;K++){
var L=[],M=K,N=0,O=[];
O[E]=!0;
for(var P=0,Q=A.length;Q>P;P++){
var R=A[P],S=R.length,T=M%S,U=R[T],V=U&&U.N$L2();
if(O[V]){
N=1/0;
break;
}
O[V]=!0;
var W=E-V,X=F-(U&&U.N$A2());
N+=Math.sqrt(W*W+X*X);
L.push(U);
M=(M-T)/S;
}
if(G>N){
G=N;
D=L;
}
}
D&&D.push(B);
return D;
};
L.N$Avt=function(A){
return $.map(A,function(A){
return A[$.random(A.length-1)];
});
};
L.N$Ovt=function(){
var $,A=this.N$qit(),B=A&&A.N$alt(G),D=A&&A.N$alt(F),E=A&&A.N$alt(J),H=($=new C._c.N$nit())&&$.init();
H&&H.N$oit(A&&A.N$Zrt());
H&&H.N$uit(B);
H&&H.N$ait(D);
H&&H.N$jnt(0);
H&&H.N$fit(E);
return H;
};
L.N$Mvt=function(D,E){
var F,G=D&&D.N$Zrt(),H=E[A]%12,I=E[B],J=(F=C._c.N$K7.N$e2(I))&&F.N$Y7(),K={},L={};
K[H]="1";
L[H]="Root";
$.each(J,function($){
var A=($&&$.N$In())+1,B=$&&$.N$qn(),D=(H+B)%12;
K[D]=String(A);
L[D]=C._c.N$i8.N$F8(A);
});
$.each(D&&D.N$Ert(),function($){
var A=$&&$.N$G9(),B=(G&&G.N$k2(A))%12;
$&&$.N$Urt(K[B]);
$&&$.N$zrt(L[B]);
});
};
L.N$Dvt=function(D,F){
for(var G,H,I=this,J=D[A],K=D[B],L=C._c.N$K7.N$e2(K),M=(G=C._c.N$Kt.N$hn(J))&&G.N$Hn(L&&L.N$Y7()),N=this.N$d9,O=$.map(M,function($){
return N&&N.N$E9($&&$.N$Ln());
}),P=0,Q=O?O.length:0;Q>P;P++){
H=O[P];
if($.isEmpty(H))return!1;
}
var R=void 0;
R=3==I.N$kvt?I.N$Avt(O):2==I.N$kvt?I.N$Lvt(O):$.flattenDeep(O);
if(!R)return!1;
R.sort(function($,A){
return $&&$.N$p9(A);
});
if(F&&$.isEqual(R,C._c.N$K2.N$l9(F[E])))return!1;
D[E]=C._c.N$K2.N$c9(R);
return!0;
};
L.N$sut=function(){
return 3;
};
L.N$out=function(){
return 1;
};
L.N$Vot=function($){
var A=this.N$Svt($);
this.N$gut(A,this.N$lvt,[$]);
};
L.N$cot=function(){
this.N$Tut([this.N$Evt]);
};
L.N$Sot=function(){
{
var $,C,E=this.N$qit(),F=E&&E.N$alt(H),J=E&&E.N$alt(I),K=E&&E.N$alt(G);
E&&E.N$Zrt();
}
this.N$d9=(C=E&&E.N$Zrt())&&C.N$W2(K,!1);
this.N$cut(($={},D($,A,12),D($,B,F),$));
this.N$kvt=J;
};
L.N$Lot=function(){
var A=this,B=this.N$qit(),D=B&&B.N$alt(H),E=B&&B.N$qct();
this.N$lvt=E;
2==E&&this.N$Eut(5);
var F=[];
$.each([0,1,3,2,4,5,6,14,8,7,15,16,17,18,19],function(A){
var B=C._c.N$i8.N$W8(A),E=C._c.N$i8.N$z8(A),G=C._c.N$i8.N$X8(A),H=C._c.N$i8.N$V8(A);
F.push({
title:B,
"short":E,
symbol:H,
ax:G,
tag:A,
active:$.includes(D,A)
});
});
var G=$.includes(D,17)||$.includes(D,18)||$.includes(D,19)||$.includes(D,14)||$.includes(D,15)||$.includes(D,16),I=G?[[0,1,3,2],[4,5,6,14],[8,7,15,16],[17,18,19]]:[[0,1],[3,2],[4,5,6],[8,7]],J=G?[[0,1,3,2,17,18,19],[4,5,6,14,8,7,15,16]]:[[0,1,3,2],[4,5,6,8,7]];
A.N$Sut(F,1,{
"default":I,
landscape:J
});
};
L.N$Aut=function($,C){
var D=$[A],E=$[B];
if(C){
var F=C[A],G=C[B];
if(D==F&&E==G)return!1;
}
return this.N$Dvt($,C);
};
L.N$not=function(A){
var D=this,F=A[E],G=C._c.N$K2.N$l9(F);
this.N$Evt=A[B];
var H=this.N$Ovt();
$.each(G,function($){
H&&H.N$cit($);
});
4&(H&&H.N$eit())&&D.N$Mvt(H,A);
D.N$wut();
D.N$Lut(H);
};
L.N$Yst=function(){
return 512;
};
L.N$mut=function(A){
var B,D,F=(B=this.N$qit())&&B.N$Zrt(),G=C._c.N$K2.N$l9(A[E]),H=(D=new C._c.N$jr())&&D.N$Qr(5),I=[];
$.each(G,function(A){
var B=F&&F.N$k2(A);
if(!$.includes(I,B)){
H&&H.N$oi(B,0,1);
I.push(B);
}
});
return H;
};
return M;
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
var A="LeftHand",B="Fret",E="Intervals",F="Placement",G="DistanceLimit",H="Labels",I="ButtonLayout",J="QuestionIndex";
C._registerClass("N$Pvt","N$Nft",function(D,J){
function K(){
C._c.N$Nft.call(this);
this.constructor=K;
this.N$_id=++C._id;
}
D.N$Zot=function(){
return"Fretboard Interval Identification";
};
D.N$ult=function(){
var D,J=(D=new C._c.N$Eht())&&D.init();
J&&J.N$Qht("fretboard-interval");
J&&J.N$npt();
J&&J.N$rpt();
J&&J.N$ipt();
J&&J.N$spt(A);
J&&J.N$cpt([0,1,2,3,4,5,6,7,8,9,10,11,12],B);
J&&J.N$cpt([0,1,2,3,4,5,6,7,8,9,10,11,12],E);
J&&J.N$mpt(function(A,B,C){
var D=0;
$.each(B[F],function($){
0==$?D|=4:1==$?D|=8:2==$&&(D|=16);
});
4==D?D=0:8==D?D=1:28==D&&(D=2);
C&&C.N$Vpt(D);
},function($,A,B){
var C=B&&B.N$Fpt(),D=[];
(4&C||0==C||2==C)&&D.push(0);
(8&C||1==C||2==C)&&D.push(1);
(16&C||2==C)&&D.push(2);
A[F]=D;
});
J&&J.N$hpt([0,1,2,3],"CorrectAnswerStyle");
J&&J.N$hpt([0,1,2,3],H);
J&&J.N$cpt([13,14,15,16,17],B);
J&&J.N$ppt();
J&&J.N$dpt();
J&&J.N$vpt();
J&&J.N$spt(I);
J&&J.N$opt(G);
return J;
};
J.N$tut=function(){
return"fretboard-interval";
};
J.N$ilt=function(){
var $,D,J,K,L,M,N,O,P,Q,R=this;
this.N$bct(8);
this.N$bct(9);
var S=($=new C._c.N$Dlt())&&$.N$Mlt(A);
S&&S.N$Plt("Left Hand");
S&&S.N$Hlt(3);
S&&S.N$Blt(0);
S&&S.N$jlt(0);
S&&S.N$Rlt(C._c.N$Ilt.N$Qat(0));
S&&S.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$Wlt(S);
var T=(D=new C._c.N$Dlt())&&D.N$Mlt(B),U=function($,A,B){
var D=C._c.N$Ilt.N$Flt(A,$);
D&&D.N$Nlt(B);
T&&T.N$Rlt(D);
};
T&&T.N$Plt("Fret Positions");
T&&T.N$Blt(1);
T&&T.N$Hlt(1);
U(0,"Open","Open");
U(1,"Fret 1","1");
U(2,"Fret 2","2");
U(3,"Fret 3","3");
U(4,"Fret 4","4");
U(5,"Fret 5","5");
U(6,"Fret 6","6");
U(7,"Fret 7","7");
U(8,"Fret 8","8");
U(9,"Fret 9","9");
U(10,"Fret 10","10");
U(11,"Fret 11","11");
U(12,"Fret 12","12");
U(13,"Fret 13","13");
U(14,"Fret 14","14");
U(15,"Fret 15","15");
U(16,"Fret 16","16");
U(17,"Fret 17","17");
T&&T.N$jlt([0,1,2,3,4,5]);
R.N$slt();
R.N$Wlt(T);
R.N$bct(10);
var V=(J=new C._c.N$Dlt())&&J.N$Mlt(H);
V&&V.N$Plt("Labels");
V&&V.N$Blt(7);
V&&V.N$jlt(3);
V&&V.N$Rlt(C._c.N$Ilt.N$Flt("Frets",1));
V&&V.N$Rlt(C._c.N$Ilt.N$Flt("Strings",2));
V&&V.N$Hlt(5);
V&&V.N$bdt(function(){
var $=V&&V.N$Vat();
return["None","Frets","Strings","Frets & Strings"][$]||"";
});
R.N$Wlt(V);
var W=(K=new C._c.N$Dlt())&&K.N$Mlt(E),X=[],Y=function($){
var A=C._c.N$i8.N$R8($),B=C._c.N$i8.N$U8($),D=C._c.N$Ilt.N$Flt(A,$);
D&&D.N$zrt(B);
W&&W.N$Rlt(D);
X.push($);
};
W&&W.N$Plt("Intervals");
W&&W.N$Blt(1);
W&&W.N$Hlt(1);
Y(0);
Y(1);
Y(2);
Y(3);
Y(4);
Y(5);
Y(6);
Y(7);
Y(8);
Y(9);
Y(10);
Y(11);
Y(12);
W&&W.N$jlt(X);
R.N$slt();
R.N$Wlt(W);
var Z=(L=new C._c.N$Dlt())&&L.N$Mlt(I);
Z&&Z.N$Plt("Button Layout");
Z&&Z.N$Blt(0);
Z&&Z.N$jlt(0);
Z&&Z.N$Hlt(0);
Z&&Z.N$slt();
Z&&Z.N$Rlt(C._c.N$Ilt.N$Flt("Default",0));
(M=Z&&Z.N$tlt())&&M.N$fct("Use more rows with wider buttons.");
Z&&Z.N$slt();
Z&&Z.N$Rlt(C._c.N$Ilt.N$Flt("Alternate",1));
(N=Z&&Z.N$tlt())&&N.N$fct("Use fewer rows grouped by interval quality.");
R.N$Wlt(Z);
R.N$slt();
var _=(O=new C._c.N$Dlt())&&O.N$Mlt(F);
_&&_.N$Plt("Placement");
_&&_.N$Blt(1);
_&&_.N$Hlt(0);
_&&_.N$jlt([2]);
var a=C._c.N$Ilt.N$Flt("Same String",0),b=C._c.N$Ilt.N$Flt("Neighboring Strings",1),c=C._c.N$Ilt.N$Flt("Distant Strings",2);
_&&_.N$slt();
_&&_.N$Rlt(a);
_&&_.N$Rlt(b);
_&&_.N$Rlt(c);
(P=_&&_.N$tlt())&&P.N$fct("Allow intervals to be placed on the same string, neighboring strings, or distant (nonadjacent) strings.");
R.N$Wlt(_);
var d=(Q=new C._c.N$Dlt())&&Q.N$Mlt(G);
d&&d.N$Plt("Distance Limit");
d&&d.N$Blt(0);
d&&d.N$Hlt(0);
d&&d.N$jlt(3);
d&&d.N$slt();
d&&d.N$Rlt(C._c.N$Ilt.N$Flt("Same Fret",0));
d&&d.N$slt();
d&&d.N$Rlt(C._c.N$Ilt.N$Flt("1 Fret",1));
d&&d.N$Rlt(C._c.N$Ilt.N$Flt("2 Frets",2));
d&&d.N$Rlt(C._c.N$Ilt.N$Flt("3 Frets",3));
d&&d.N$Rlt(C._c.N$Ilt.N$Flt("4 Frets",4));
d&&d.N$Rlt(C._c.N$Ilt.N$Flt("5 Frets",5));
d&&d.N$slt();
d&&d.N$Rlt(C._c.N$Ilt.N$Flt("Off",31));
R.N$Wlt(d);
R.N$slt();
R.N$bct(11);
};
return K;
});
C._registerClass("N$Hvt","N$dit",function(K,L){
function M(){
C._c.N$dit.call(this);
this.N$iit=this.N$Bvt=null;
this.N$lvt=this.N$Evt=0;
this.N$hvt=!1;
this.constructor=M;
this.N$_id=++C._id;
}
K.N$Git=function(){
return C._c.N$Pvt;
};
L.N$jvt=function($){
var A=(this.N$Bvt,4*$[J]),B=this.N$Bvt[A+0],D=this.N$Bvt[A+1],E=this.N$Bvt[A+2],F=this.N$Bvt[A+3];
return[C._c.N$K2.N$J2(B,D),C._c.N$K2.N$J2(E,F)];
};
L.N$Ovt=function(){
var $,D=this.N$qit(),E=D&&D.N$alt(B),F=D&&D.N$alt(A),G=D&&D.N$alt(H),I=($=new C._c.N$nit())&&$.init();
I&&I.N$oit(this.N$iit);
I&&I.N$uit(E);
I&&I.N$ait(F);
I&&I.N$jnt(0);
I&&I.N$fit(G);
return I;
};
L.N$sut=function(){
return 3;
};
L.N$out=function(){
return 1;
};
L.N$Vot=function($){
this.N$gut($==this.N$Evt,this.N$lvt,[$]);
};
L.N$cot=function(){
this.N$Tut([this.N$Evt]);
};
L.N$Sot=function(){
for(var A=this,C=this.N$qit(),H=C&&C.N$alt(F),I=C&&C.N$alt(G),K=C&&C.N$alt(E),L=$.includes(H,0),M=$.includes(H,1),N=$.includes(H,2),O=C&&C.N$Zrt(),P=O&&O.N$I2(),Q=O&&O.N$d2(),R=C&&C.N$alt(B),S=P.length,T=R.length,U=[],V=S*T,W=V*(V+1)/2-V,X=new Uint8Array(4*W),Y=0,Z=[],_=function(A){
var B=P[A],C=Q[B];
Z[A]=$.map(R,function($){
return O&&O.N$R2(B,$)?C&&C.N$s2($):255;
});
},a=0;S>a;a++)_(a);
for(var a=0;S>a;a++)for(var b=P[a],c=Z[a],d=a;S>d;d++){
var e=P[d],f=Z[d],g=e-b;
if(!(0==g&&L||1==g&&M||g>=2&&N))continue;
for(var h=0;T>h;h++)for(var i=R[h],j=0==g?h+1:0;T>j;j++){
if(a==d&&h==j)continue;
var k=R[j],l=Math.abs(i-k);
if(l>I)continue;
var m=c[h],n=f[j],o=Math.abs(m-n);
if($.includes(K,o)){
X[Y++]=b;
X[Y++]=i;
X[Y++]=e;
X[Y++]=k;
}
}
}
var p=Math.floor(Y/4),q=1==p;
p?q&&U.push(12):U.push(1);
A.N$cut(D({},J,p));
A.N$Bvt=X;
A.N$iit=O;
A.N$hvt=q;
};
L.N$Lot=function(){
var A=this.N$qit(),B=A&&A.N$alt(E),D=(A&&A.N$alt(I))>0,F=A&&A.N$qct();
this.N$lvt=F;
2==F&&this.N$Eut(5);
for(var G=[],H=0;13>=H;H++){
var J=C._c.N$i8.N$I8(H),K=C._c.N$i8.N$q8(H),L=C._c.N$i8.N$U8(H),M=C._c.N$Qut.N$oat(H);
D||(0===H||6==H||12==H)&&(K=C._c.N$i8.N$R8(H));
G.push({
title:K,
ax:L,
symbol:J,
tag:H,
active:$.includes(B,H),
shortcut:M
});
}
var N=void 0,O=void 0,P=$.includes(B,0),Q=$.includes(B,12);
if(D){
var R=[2,4,5,7,9,11],S=[1,3,null,6,8,10];
if(P){
R.unshift(0);
S.unshift(null);
}
if(Q){
R.push(12);
S.push(null);
}
N=O=[R,S];
}else{
N=[[1,2,3,4],[5,6,7],[8,9,10,11]];
(Q||P)&&N.push([0,12]);
O=[[0,1,2,3,4,5,6],[7,8,9,10,11,12,13]];
}
this.N$Sut(G,1,{
"default":N,
landscape:O
});
};
L.N$Aut=function($,A){
var B=this.N$jvt($),C=B[0],D=B[1];
if(C&&C.isEqual_(D))return!1;
if(!this.N$iit||!this.N$iit.N$z2(C))return!1;
if(!this.N$iit||!this.N$iit.N$z2(D))return!1;
if(A){
var E=this.N$jvt(A),F=E[0],G=E[1];
if(C&&C.isEqual_(F)&&D&&D.isEqual_(G)||C&&C.isEqual_(G)&&D&&D.isEqual_(F))return!1;
}
return!0;
};
L.N$not=function($){
var A=this.N$jvt($),B=A[0],C=A[1],D=this.N$iit&&this.N$iit.N$k2(B),E=this.N$iit&&this.N$iit.N$k2(C);
this.N$Evt=Math.abs(D-E);
this.N$wut();
var F=this.N$Ovt();
F&&F.N$cit(B);
F&&F.N$cit(C);
this.N$Lut(F);
};
L.N$mut=function($){
var A,B=this.N$jvt($),D=this.N$iit&&this.N$iit.N$k2(B[0]),E=this.N$iit&&this.N$iit.N$k2(B[1]),F=(A=new C._c.N$jr())&&A.N$Qr(5);
F&&F.N$oi(D,0,1);
F&&F.N$oi(E,0,1);
return F;
};
return M;
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
var A="LeftHand",B="Labels",E="Fret",F="UsesNoteFilter",G="QuestionIndex";
C._registerClass("N$Fvt","N$Nft",function(D,G){
function H(){
C._c.N$Nft.call(this);
this.constructor=H;
this.N$_id=++C._id;
}
D.N$Zot=function(){
return"Fretboard Note Identification";
};
D.N$ult=function(){
var D,G=(D=new C._c.N$Eht())&&D.init(),H=$.without(C._c.N$Qut.N$Gut(),66);
G&&G.N$Qht("fretboard");
G&&G.N$npt();
G&&G.N$rpt();
G&&G.N$ipt();
G&&G.N$spt(A);
G&&G.N$cpt([0,1,2,3,4,5,6,7,8,9,10,11,12],E);
G&&G.N$hpt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"NoteNameStyle");
G&&G.N$hpt([0,1,2,3],"CorrectAnswerStyle");
G&&G.N$hpt([0,1,2,3],B);
G&&G.N$cpt([13,14,15,16,17],E);
G&&G.N$ppt();
G&&G.N$dpt();
G&&G.N$vpt();
G&&G.N$mpt(function(A,B,C){
var D=B[F],E=B["Note"],G=D&&$.includes(E,66);
C&&C.N$Vpt((D?16:0)|(G?8:0));
D&&C&&C.N$Xpt(H,E);
},function($,A,B){
var C=B&&B.N$Fpt(),D=(16&C)>0,E=(8&C)>0,G=[];
if(D){
G=B&&B.N$jpt(H);
E&&G.push(66);
}
A[F]=D?1:0;
A["Note"]=G;
});
G&&G.N$Dht(function($,A){
if(A.length<=6){
var B=A[0];
3==B?A.splice(1,0,0,0,0,0,0,0,0,31,3):0===B||7==B?A.splice(1,0,0,0,0,0,0,0,31,1):6==B?A.splice(0,1,0,0,0,0,0,0,18,31,1):4==B||9==B?A.splice(1,0,0,0,0,0,0,31):(1==B||2==B||5==B||8==B)&&A.splice(1,0,0,0,0,0,15);
}
});
return G;
};
G.N$tut=function(){
return"fretboard";
};
G.N$ilt=function(){
var $,D,G,H,I,J=this;
this.N$bct(8);
this.N$bct(9);
var K=($=new C._c.N$Dlt())&&$.N$Mlt(A);
K&&K.N$Plt("Left Hand");
K&&K.N$Hlt(3);
K&&K.N$Blt(0);
K&&K.N$jlt(0);
K&&K.N$Rlt(C._c.N$Ilt.N$Qat(0));
K&&K.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$Wlt(K);
var L=(D=new C._c.N$Dlt())&&D.N$Mlt(E),M=function($,A,B){
var D=C._c.N$Ilt.N$Flt(A,$);
D&&D.N$Nlt(B);
L&&L.N$Rlt(D);
};
L&&L.N$Plt("Fret Positions");
L&&L.N$Blt(1);
L&&L.N$Hlt(1);
M(0,"Open","Open");
M(1,"Fret 1","1");
M(2,"Fret 2","2");
M(3,"Fret 3","3");
M(4,"Fret 4","4");
M(5,"Fret 5","5");
M(6,"Fret 6","6");
M(7,"Fret 7","7");
M(8,"Fret 8","8");
M(9,"Fret 9","9");
M(10,"Fret 10","10");
M(11,"Fret 11","11");
M(12,"Fret 12","12");
M(13,"Fret 13","13");
M(14,"Fret 14","14");
M(15,"Fret 15","15");
M(16,"Fret 16","16");
M(17,"Fret 17","17");
L&&L.N$jlt([0,1,2,3,4,5]);
J.N$slt();
J.N$Wlt(L);
J.N$bct(10);
var N=(G=new C._c.N$Dlt())&&G.N$Mlt(B);
N&&N.N$Plt("Labels");
N&&N.N$Blt(7);
N&&N.N$jlt(3);
N&&N.N$Rlt(C._c.N$Ilt.N$Flt("Frets",1));
N&&N.N$Rlt(C._c.N$Ilt.N$Flt("Strings",2));
N&&N.N$Hlt(5);
N&&N.N$bdt(function(){
var $=N&&N.N$Vat();
return["None","Frets","Strings","Frets & Strings"][$]||"";
});
J.N$Wlt(N);
J.N$slt();
J.N$bct(5);
var O=(H=new C._c.N$Dlt())&&H.N$Mlt(F);
O&&O.N$Plt("Note Filter");
O&&O.N$Hlt(3);
O&&O.N$Blt(0);
O&&O.N$jlt(0);
O&&O.N$Rlt(C._c.N$Ilt.N$Qat(0));
O&&O.N$Rlt(C._c.N$Ilt.N$Qat(1));
J.N$slt();
J.N$Wlt(O);
J.N$bct(17);
(I=J.N$xct(17))&&I.N$jlt(C._c.N$Qut.N$Gut());
J.N$slt();
J.N$bct(11);
};
G.N$Ivt=function(){
var $=this.N$tft("Note"),A=this.N$alt(F);
this.N$wlt($,!A);
};
G.N$mlt=function($){
($&&$.N$ylt())==F&&this.N$Ivt();
};
return H;
});
C._registerClass("N$qvt","N$dit",function(H,I){
function J(){
C._c.N$dit.call(this);
this.N$Rvt=this.N$iit=this.N$Bvt=null;
this.N$lvt=this.N$Evt=this.N$Hnt=0;
this.N$hvt=!1;
this.constructor=J;
this.N$_id=++C._id;
}
H.N$Git=function(){
return C._c.N$Fvt;
};
I.N$Ovt=function(){
var $,D=this.N$qit(),F=D&&D.N$alt(E),G=D&&D.N$alt(A),H=D&&D.N$alt(B),I=($=new C._c.N$nit())&&$.init();
I&&I.N$oit(this.N$iit);
I&&I.N$uit(F);
I&&I.N$ait(G);
I&&I.N$jnt(this.N$Hnt);
I&&I.N$fit(H);
return I;
};
I.N$sut=function(){
return 3;
};
I.N$out=function(){
return 1;
};
I.N$Vot=function($){
var A,B=(A=new C._c.N$Kt())&&A.N$vn($,4),D=(B&&B.N$Ln())%12==this.N$Evt;
this.N$gut(D,this.N$lvt,[$]);
};
I.N$cot=function(){
var A=this,B=[];
$.each(this.N$Rvt,function($){
var D=C._c.N$Kt.N$dn($,4);
(D&&D.N$Ln())%12==A.N$Evt&&B.push($);
});
A.N$Tut(B);
};
I.N$Sot=function(){
for(var A,B=this,H=this.N$qit(),I=H&&H.N$Zrt(),J=H&&H.N$alt(E),K=I&&I.N$I2(),L=I&&I.N$d2(),M=H&&H.N$alt(F)?H&&H.N$alt("Note"):$.without(C._c.N$Qut.N$Gut(),26,66,4,34),N=$.map(M,function($){
var A;
return((A=C._c.N$Kt.N$dn($,4))&&A.N$Ln())%12;
}),O=[],P=0;12>P;P++)O[P]=$.includes(N,P);
for(var Q,R=[],S=new Uint8Array(K.length*J.length*2),T=0,U=0,V=K?K.length:0;V>U;U++){
Q=K[U];
for(var W,X=(A=L[Q])&&A.N$U2(),Y=0,Z=J?J.length:0;Z>Y;Y++){
W=J[Y];
var _=I&&I.N$O2(Q,W);
if(W>=X&&O[_%12]){
S[T++]=Q;
S[T++]=W;
}
}
}
var a=Math.floor(T/2),b=1==a;
a?b&&R.push(12):R.push(1);
B.N$cut(D({},G,a));
B.N$Bvt=S;
B.N$iit=I;
B.N$Rvt=M;
B.N$hvt=b;
H&&H.N$Eot(C._c.N$Cot.N$rdt(R));
};
I.N$Lot=function(){
var A=this,B=this.N$qit(),D=B&&B.N$Stt(),E=B&&B.N$qct();
this.N$lvt=E;
this.N$Hnt=D;
2==E&&this.N$Eut(5);
var F=$.map(C._c.N$Qut.N$Gut(),function(B){
return{
title:C._c.N$i8.N$a8(B,D),
ax:C._c.N$i8.N$f8(B,D),
tag:B,
active:$.includes(A.N$Rvt,B),
shortcut:C._c.N$Qut.N$iat(B)
};
}),G=C._c.N$Qut.N$Yut(D,A.N$Rvt);
A.N$Sut(F,0,{
"default":G
});
};
I.N$Aut=function($,A){
var B=$[G];
if(A){
var C=A[G];
if(B==C&&!this.N$hvt)return!1;
}
return!0;
};
I.N$not=function($){
var A=2*$[G],B=this.N$Bvt[A+0],D=this.N$Bvt[A+1],E=C._c.N$K2.N$J2(B,D),F=this.N$iit&&this.N$iit.N$O2(B,D);
this.N$Evt=F%12;
this.N$wut();
var H=this.N$Ovt();
H&&H.N$cit(E);
this.N$Lut(H);
};
I.N$mut=function($){
var A,B=2*$[G],D=this.N$Bvt[B+0],E=this.N$Bvt[B+1],F=this.N$iit&&this.N$iit.N$O2(D,E),H=(A=new C._c.N$jr())&&A.N$Qr(5);
H&&H.N$oi(F,0,1);
return H;
};
return J;
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
var A="LeftHand",B="Labels",E="Fret",F="Scale",G="Filter",H="PairIndex",I="Positions",J={};
function K($){
var A,B=J[$];
if(!B){
B=(A=C._c.N$M9)&&A.N$z9($,0);
J[$]=B;
}
return B;
}
C._registerClass("N$Uvt","N$Nft",function($,D){
function H(){
C._c.N$Nft.call(this);
this.constructor=H;
this.N$_id=++C._id;
}
$.N$Zot=function(){
return"Fretboard Scale Identification";
};
$.N$ult=function(){
var $,D=($=new C._c.N$Eht())&&$.init(),H=C._c.N$Qut.N$Gut(),I=[7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7];
D&&D.N$Qht("fretboard-scale");
D&&D.N$npt();
D&&D.N$rpt();
D&&D.N$ipt();
D&&D.N$spt(A);
D&&D.N$cpt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],E);
D&&D.N$cpt([0,10,11,12,20,21,22,23,24,25,26],F);
D&&D.N$mpt(function($,A,B){
if(1==A[G]){
B&&B.N$zvt(!0);
B&&B.N$Xpt(H,A["Note"]);
}else{
B&&B.N$zvt(!1);
B&&B.N$Xpt(I,A["KeySignature"]);
}
},function($,A,B){
if(B&&B.N$Ft()){
A[G]=1;
A["Note"]=B&&B.N$jpt(H);
}else{
A[G]=0;
A["KeySignature"]=B&&B.N$jpt(I);
}
});
D&&D.N$hpt([0,1,2,3],"CorrectAnswerStyle");
D&&D.N$hpt([0,1,2,3,4,5,6,7],B);
D&&D.N$ppt();
D&&D.N$dpt();
D&&D.N$vpt();
return D;
};
D.N$tut=function(){
return"fretboard-scale";
};
D.N$ilt=function(){
var $,D,H,I,J,K,L,M=this;
this.N$bct(8);
this.N$bct(9);
var N=($=new C._c.N$Dlt())&&$.N$Mlt(A);
N&&N.N$Plt("Left Hand");
N&&N.N$Hlt(3);
N&&N.N$Blt(0);
N&&N.N$jlt(0);
N&&N.N$Rlt(C._c.N$Ilt.N$Qat(0));
N&&N.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$Wlt(N);
var O=(D=new C._c.N$Dlt())&&D.N$Mlt(E),P=function($,A,B){
var D=C._c.N$Ilt.N$Flt(A,$);
D&&D.N$Nlt(B);
O&&O.N$Rlt(D);
};
O&&O.N$Plt("Fret Positions");
O&&O.N$Blt(1);
O&&O.N$Hlt(1);
P(0,"Open","Open");
P(1,"Fret 1","1");
P(2,"Fret 2","2");
P(3,"Fret 3","3");
P(4,"Fret 4","4");
P(5,"Fret 5","5");
P(6,"Fret 6","6");
P(7,"Fret 7","7");
P(8,"Fret 8","8");
P(9,"Fret 9","9");
P(10,"Fret 10","10");
P(11,"Fret 11","11");
P(12,"Fret 12","12");
P(13,"Fret 13","13");
P(14,"Fret 14","14");
P(15,"Fret 15","15");
P(16,"Fret 16","16");
P(17,"Fret 17","17");
O&&O.N$jlt([0,1,2,3,4,5]);
M.N$slt();
M.N$Wlt(O);
M.N$bct(10);
var Q=(H=new C._c.N$Dlt())&&H.N$Mlt(B);
Q&&Q.N$Plt("Labels");
Q&&Q.N$Blt(7);
Q&&Q.N$jlt(3);
Q&&Q.N$Rlt(C._c.N$Ilt.N$Flt("Frets",1));
Q&&Q.N$Rlt(C._c.N$Ilt.N$Flt("Strings",2));
Q&&Q.N$Rlt(C._c.N$Ilt.N$Flt("Markers",4));
Q&&Q.N$Hlt(5);
Q&&Q.N$bdt(function(){
var $=Q&&Q.N$Vat();
return["None","Frets","Strings","Frets & Strings","Markers","Frets & Markers","Strings & Markers","All"][$]||"";
});
M.N$Wlt(Q);
function R($){
var A=C._c.N$i8.N$b8($);
return C._c.N$Ilt.N$Flt(A,$);
}
var S=(I=new C._c.N$Dlt())&&I.N$Mlt(F);
S&&S.N$Plt("Scales");
S&&S.N$Blt(1);
S&&S.N$Hlt(1);
S&&S.N$jlt([0,10,11,12]);
S&&S.N$Rlt(R(0));
S&&S.N$Rlt(R(10));
S&&S.N$Rlt(R(11));
S&&S.N$Rlt(R(12));
S&&S.N$slt();
S&&S.N$Rlt(R(20));
S&&S.N$Rlt(R(21));
S&&S.N$Rlt(R(22));
S&&S.N$Rlt(R(23));
S&&S.N$Rlt(R(24));
S&&S.N$Rlt(R(25));
S&&S.N$Rlt(R(26));
M.N$slt();
M.N$Wlt(S);
var T=(J=new C._c.N$Dlt())&&J.N$Mlt(G);
T&&T.N$Plt("Filter");
T&&T.N$Blt(0);
T&&T.N$Hlt(0);
T&&T.N$jlt(0);
T&&T.N$Rlt(C._c.N$Ilt.N$Flt("By Key Signature",0));
T&&T.N$Rlt(C._c.N$Ilt.N$Flt("By Tonic",1));
M.N$slt();
M.N$Wlt(T);
M.N$bct(14);
(K=M.N$xct(14))&&K.N$jlt([-3,-2,-1,0,1,2,3]);
M.N$bct(17);
(L=M.N$xct(17))&&L.N$Plt("Tonics");
M.N$slt();
M.N$bct(11);
};
D.N$mlt=function($){
var A=$&&$.N$ylt();
if(A==G){
var B=0==this.N$alt(G);
this.N$wlt(this.N$tft("KeySignature"),!B);
this.N$wlt(this.N$tft("Note"),B);
}
};
return H;
});
C._registerClass("N$Wvt","N$dit",function(J,L){
function M(){
C._c.N$dit.call(this);
this.N$d9=this.N$Xvt=null;
this.N$lvt=this.N$Evt=0;
this.constructor=M;
this.N$_id=++C._id;
}
J.N$Git=function(){
return C._c.N$Uvt;
};
L.N$Vvt=function(){
return[0,10,11,12,20,21,22,23,24,25,26];
};
L.N$Ovt=function(){
var $,D=this.N$qit(),F=D&&D.N$alt(E),G=D&&D.N$alt(A),H=D&&D.N$alt(B),I=($=new C._c.N$nit())&&$.init();
I&&I.N$oit(D&&D.N$Zrt());
I&&I.N$uit(F);
I&&I.N$ait(G);
I&&I.N$jnt(0);
I&&I.N$fit(H);
return I;
};
L.N$Jvt=function(A){
var B=A[H],C=this.N$Xvt[B],D=C.m,E=C.s;
return $.map(K(E),function($){
return D+$;
});
};
L.N$Dvt=function(A){
var B=this;
function D(A,B,C){
var D=C[0]-B[0],E=C[1]-B[1],F=$.clamp(((A[0]-B[0])*D+(A[1]-B[1])*E)/(D*D+E*E),0,1);
return Math.hypot(A[0]-B[0]+F*D,A[1]-B[1]+F*E);
}
var E=B.N$d9,F=$.map(B.N$Jvt(A),function($){
var A=E&&E.N$E9($);
return C._c.N$K2.N$c9(A);
}),G=$.sample($.first(F)),H=$.sample($.last(F));
A[I]=$.map(F,function($){
for(var A,B=1/0,C=null,E=0,F=$?$.length:0;F>E;E++){
A=$[E];
var I=D(A,G,H);
if(B>I){
B=I;
C=A;
}
}
return C;
});
return!0;
};
L.N$sut=function(){
return 3;
};
L.N$out=function(){
return 1;
};
L.N$Vot=function($){
var A=C._c.N$M9.N$q9($,this.N$Evt);
this.N$gut(A,this.N$lvt,[$]);
};
L.N$cot=function(){
var A=this,B=[];
$.each(this.N$Vvt(),function($){
C._c.N$M9.N$q9($,A.N$Evt)&&B.push($);
});
A.N$Tut(B);
};
L.N$Sot=function(){
var A,B=this,I=this.N$qit(),J=I&&I.N$alt(E),L=I&&I.N$alt(F),M=(A=I&&I.N$Zrt())&&A.N$W2(J,!0),N=null,O=[],P=[],Q=I&&I.N$Rct(),R=I&&I.N$Wct(),S=I&&I.N$alt(G),T=C._c.N$Qut.N$pat(L,S,Q,R),U={};
$.each(T,function($){
var A,B=C._c.N$M9.N$F9($.scale),D=((A=C._c.N$Kt.N$dn($.tonic,0))&&A.N$Ln())%12;
U[D+","+B]={
s:B,
m:D
};
});
N=$.values(U);
var V=M&&M.N$b9(),W=$.last(V),X=$.filter(V,function($){
return W-12>=$;
});
X=$.filter(X,function(A){
return $.includes(V,A+12);
});
$.each(X,function(A){
$.each(N,function(B){
var C=B.m,D=B.s;
C==A%12&&$.every(K(D),function(B){
return $.includes(V,A+B);
})&&O.push({
m:A,
s:D
});
});
});
1==O.length?P.push(11):0==O.length&&P.push(2);
B.N$d9=M;
B.N$Xvt=O;
B.N$cut(D({},H,O.length));
I&&I.N$Eot(C._c.N$Cot.N$rdt(P));
};
L.N$Lot=function(){
var A=this,B=this.N$qit(),D=B&&B.N$alt(F),E=B&&B.N$qct();
2==E&&this.N$Eut(5);
this.N$lvt=E;
var G=[],H=!1,I=!1,J=!1;
$.each(D,function($){
0==$||10==$?H=!0:11==$||12==$?I=!0:J=!0;
});
$.each(A.N$Vvt(),function(A){
var B=C._c.N$i8.N$b8(A);
G.push({
title:B,
tag:A,
active:$.includes(D,A)
});
});
var K=null,L=null;
if(!H||I||J){
var M=[];
H&&M.push([0,10]);
I&&M.push([11,12]);
if(J){
M.push([20,21,22,23]);
M.push([24,25,26]);
}
K=M;
}else{
K=[[0],[10]];
L=[[0,10]];
}
A.N$Sut(G,0,{
"default":K,
landscape:L
});
};
L.N$Aut=function($,A){
var B=$[H];
if(A){
var C=A[H];
if(B==C)return!1;
}
return this.N$Dvt($,A);
};
L.N$not=function(A){
var B,D=this,E=((B=this.N$qit())&&B.N$Zrt(),A[H]),F=this.N$Xvt[E],G=F.s,J=C._c.N$K2.N$l9(A[I]),K=this.N$Ovt(),L=0;
$.each(J,function($){
var A,B=(A=new C._c.N$hit())&&A.init(),D=String(L+1);
B&&B.N$pit($);
B&&B.N$Irt(L);
B&&B.N$Urt(D);
B&&B.N$zrt("Degree "+D);
K&&K.N$qrt(B);
L++;
});
D.N$Evt=G;
D.N$wut();
D.N$Lut(K);
};
L.N$mut=function(A){
var B,D,E=(B=this.N$qit())&&B.N$Zrt(),F=C._c.N$K2.N$l9(A[I]),G=(D=new C._c.N$jr())&&D.N$Qr(5);
$.each(F,function($){
var A=E&&E.N$k2($);
G&&G.N$si(A,.33);
});
return G;
};
return M;
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
var A="Clef",B="KeySignature",E="StaffPosition",F="AnswerTag",G="Accidental",H="DisplayMode",I="Direction",J="RequireQuality",K="Intervals",L="DisplayMode",M="DirectionMode",N="CompoundMode",O="GenericIntervals",P="ResetAnswer",Q="Leniency";
C._registerClass("N$Kvt","N$Nft",function(A,B){
function D(){
C._c.N$Nft.call(this);
this.constructor=D;
this.N$_id=++C._id;
}
A.N$Zot=function(){
return"Interval Construction";
};
A.N$ult=function(){
var A,B=(A=new C._c.N$Eht())&&A.init(),D=[26,36,46,56,66,76,86,25,35,45,55,65,75,85,24,34,64,74,23,33,44,54,63,73,84],E=[2,3,4,5,6,7,8,9,10,11,12,13,14,15],F=[1,2,3,4,5];
B&&B.N$Qht("interval-construction");
B&&B.N$Ght();
B&&B.N$ept();
B&&B.N$cpt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],"KeySignature");
B&&B.N$mpt(function($,A,B){
if(A[J]){
var C=A[K],G=A[N],H=A["Difficulty"];
B&&B.N$zvt(!0);
B&&B.N$Xpt(D,C);
B&&B.N$zvt(G);
B&&B.N$Wpt(F,H);
}else{
var I=A[O];
B&&B.N$zvt(!1);
B&&B.N$Xpt(E,I);
}
},function(A,B,C){
if(C&&C.N$Ft()){
B[J]=!0;
B[K]=C&&C.N$jpt(D);
B[N]=C&&C.N$Ft();
var G=C&&C.N$Bpt(F);
$.isNumber(G)&&(B["Difficulty"]=G);
}else{
B[J]=!1;
B[O]=C&&C.N$jpt(E);
}
});
B&&B.N$mpt(function($,A,B){
var C=A[L],D=A[M];
B&&B.N$Vpt((C<<2)+D);
},function($,A,B){
var C=B&&B.N$Fpt();
A[L]=C>>2&3;
A[M]=3&C;
});
B&&B.N$spt(P);
B&&B.N$hpt([0,1,2,3],"CorrectAnswerStyle");
B&&B.N$ppt();
B&&B.N$dpt();
B&&B.N$vpt();
B&&B.N$hpt([0,1,2],Q);
return B;
};
B.N$tut=function(){
return"interval-construction";
};
B.N$ilt=function(){
var A,B,D,E,F,G,I,L,R,S,T,U,V,W,X,Y=this;
this.N$bct(2);
this.N$slt();
this.N$bct(3);
this.N$slt();
this.N$bct(14);
this.N$slt();
var Z=(A=new C._c.N$Dlt())&&A.N$Mlt(H);
Z&&Z.N$Plt("Display Mode");
Z&&Z.N$Blt(0);
Z&&Z.N$jlt(0);
Z&&Z.N$Rlt(C._c.N$Ilt.N$Flt("Harmonic",0));
Z&&Z.N$Rlt(C._c.N$Ilt.N$Flt("Melodic",1));
Z&&Z.N$Rlt(C._c.N$Ilt.N$Flt("Both",2));
this.N$Wlt(Z);
var _=(B=new C._c.N$Dlt())&&B.N$Mlt(M);
_&&_.N$Plt("Direction");
_&&_.N$Blt(0);
_&&_.N$jlt(0);
var a=C._c.N$Ilt.N$Flt("Ascending Only",0);
a&&a.N$qlt("Ascending");
_&&_.N$Rlt(a);
var b=C._c.N$Ilt.N$Flt("Descending Only",1);
b&&b.N$qlt("Descending");
_&&_.N$Rlt(b);
_&&_.N$Rlt(C._c.N$Ilt.N$Flt("Both",2));
(D=_&&_.N$tlt())&&D.N$fct("Direction is applicable to melodic intervals.");
this.N$Wlt(_);
var c=(E=new C._c.N$Dlt())&&E.N$Mlt(J);
c&&c.N$Plt("Require Quality");
c&&c.N$Hlt(3);
c&&c.N$Blt(0);
c&&c.N$jlt(1);
c&&c.N$Rlt(C._c.N$Ilt.N$Qat(0));
c&&c.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$slt();
this.N$Wlt(c);
(F=this.N$tlt())&&F.N$fct("Require both the interval quality and type.");
this.N$slt();
var d=[[2,9],[3,10],[4,11],[5,12],[6,13],[7,14],[8,15]],e=(G=new C._c.N$Dlt())&&G.N$Mlt(O);
e&&e.N$Plt("Intervals");
e&&e.N$Blt(1);
e&&e.N$Hlt(1);
$.each($.flatten(d),function($){
var A=C._c.N$i8.N$j8($),B=C._c.N$i8.N$F8($),D=C._c.N$Ilt.N$Flt(A,$);
D&&D.N$zrt(B);
D&&D.N$Qlt(61);
e&&e.N$Rlt(D);
});
(I=e&&e.N$tlt())&&I.N$cct(d);
e&&e.N$jlt([2,3,4,5,6,7,8]);
Y.N$Wlt(e);
var f=[[23,24,25,26],[33,34,35,36],[44,null,45,46],[54,null,55,56],[63,64,65,66],[73,74,75,76],[84,null,85,86]],g=(L=new C._c.N$Dlt())&&L.N$Mlt(K),h=[];
g&&g.N$Plt("Intervals");
g&&g.N$Blt(1);
g&&g.N$Hlt(1);
$.each($.flatten(f),function($){
if(null===$)return;
var A=C._c.N$i8.N$O8($),B=C._c.N$i8.N$D8($),D=C._c.N$Ilt.N$Flt(A,$);
D&&D.N$zrt(B);
D&&D.N$Qlt(61);
g&&g.N$Rlt(D);
h.push($);
});
(R=g&&g.N$tlt())&&R.N$cct(f);
g&&g.N$jlt(h);
Y.N$Wlt(g);
var i=(S=new C._c.N$Dlt())&&S.N$Mlt(N);
i&&i.N$Plt("Compound Mode");
i&&i.N$Blt(0);
i&&i.N$Hlt(3);
i&&i.N$jlt(0);
i&&i.N$Rlt(C._c.N$Ilt.N$Qat(0));
i&&i.N$Rlt(C._c.N$Ilt.N$Qat(1));
Y.N$Wlt(i);
Y.N$slt();
Y.N$bct(15);
var j=(T=new C._c.N$Dlt())&&T.N$Mlt(Q);
j&&j.N$Plt("Leniency");
j&&j.N$Hlt(0);
j&&j.N$Blt(0);
j&&j.N$jlt(0);
j&&j.N$slt();
j&&j.N$Rlt(C._c.N$Ilt.N$Flt("Lenient",2));
(U=j&&j.N$tlt())&&U.N$fct("Allow answers with unneeded or duplicated accidentals.");
j&&j.N$slt();
j&&j.N$Rlt(C._c.N$Ilt.N$Flt("Naturals Only",1));
(V=j&&j.N$tlt())&&V.N$fct("Only allow unneeded naturals.");
j&&j.N$slt();
j&&j.N$Rlt(C._c.N$Ilt.N$Flt("Strict",0));
(W=j&&j.N$tlt())&&W.N$fct("Disallow answers with unneeded or duplicated accidentals.");
Y.N$Wlt(j);
Y.N$slt();
Y.N$bct(11);
var k=(X=new C._c.N$Dlt())&&X.N$Mlt(P);
k&&k.N$Plt("Reset Answer");
k&&k.N$Hlt(3);
k&&k.N$Blt(0);
k&&k.N$jlt(1);
k&&k.N$Rlt(C._c.N$Ilt.N$Qat(0));
k&&k.N$Rlt(C._c.N$Ilt.N$Qat(1));
Y.N$Wlt(k);
};
B.N$Ivt=function(){
var $=this.N$tft(K),A=this.N$tft(O),B=this.N$tft(Q),C=this.N$xct(15),D=this.N$tft(N),E=this.N$alt(J);
this.N$wlt($,!E);
this.N$wlt(C,!E);
this.N$wlt(B,!E);
this.N$wlt(D,!E);
this.N$wlt(A,E);
};
B.N$Qvt=function(){
var A=this.N$tft(K),B=this.N$alt(N);
$.each(A&&A.N$Gat(),function($){
var A=$&&$.N$Wn(),D=A;
if(B){
var E=C._c.N$J7.N$T9(A);
D=E&&E.N$Wn();
}
$&&$.N$Urt(C._c.N$i8.N$O8(D));
$&&$.N$zrt(C._c.N$i8.N$D8(D));
$&&$.N$Nlt(C._c.N$i8.N$O8(D));
});
};
B.N$mlt=function($){
var A=$&&$.N$ylt();
A==J?this.N$Ivt():A==N&&this.N$Qvt();
};
return D;
});
C._registerClass("N$Gvt","N$dit",function(R,S){
function T(){
C._c.N$dit.call(this);
this.N$Yvt=this.N$Zvt=this.N$gnt=this.N$Lrt=null;
this.N$fvt=this.N$l4=this.N$lvt=this.N$Evt=this.N$emt=this.N$tmt=this.N$nmt=this.N$h4=0;
this.N$hvt=this.N$dvt=this.N$rmt=this.N$imt=this.N$smt=!1;
this.constructor=T;
this.N$_id=++C._id;
}
R.N$Git=function(){
return C._c.N$Kvt;
};
S.N$omt=function(A){
return $.map(A,function($){
var A=C._c.N$J7.N$T9($);
return A&&A.N$Wn();
});
};
S.N$umt=function($){
var D,H,J,K,L=$[A],M=$[B],N=$[G],O=$[E],P=$[I],Q=$[F],R=0==P,S=void 0,T=void 0;
S=-100==N?(D=new C._c.N$Kt())&&D.N$xn(L,O,M):(H=new C._c.N$Kt())&&H.N$En(L,O,N);
if(this.N$imt){
var U=(J=new C._c.N$J7())&&J.N$V7(Q);
T=S&&S.N$Dn(U,R);
}else{
var V=void 0;
V=R?O+(Q-1):O-(Q-1);
T=(K=new C._c.N$Kt())&&K.N$xn(L,V,M);
}
return[S,T];
};
S.N$sut=function(){
return 1;
};
S.N$out=function(){
return 3;
};
S.N$Xot=function(){
var $,A=C._c.N$J9.N$e8(this.N$tmt,this.N$emt),B=($=this.N$qit())&&$.N$alt(Q),D=C._c.N$Qut.N$dat(A,this.N$Zvt,this.N$l4,this.N$h4,B);
this.N$gut(D,this.N$lvt,null);
};
S.N$yut=function($){
if(0!=$){
this.N$dvt=!0;
this.N$mvt();
}
};
S.N$cot=function(){
this.N$tmt=this.N$Zvt&&this.N$Zvt.N$G9();
this.N$emt=this.N$Zvt&&this.N$Zvt.N$Y9();
this.N$mvt();
};
S.N$Sot=function(){
var P,Q=this,R=this.N$qit(),S=R&&R.N$cat(),T=R&&R.N$wrt(),U=R&&R.N$Uct(),V=R&&R.N$Rct(),W=R&&R.N$alt(J),X=R&&R.N$alt(N),Y=R&&R.N$alt(M),Z=R&&R.N$alt(L),_=0,a=0,b=void 0,c=void 0,d=[];
if(W){
b=R&&R.N$alt(K);
X&&(b=this.N$omt(b));
if(1==U){
c=[-100];
a=0;
}else if(2==U){
c=[-100];
a=1;
}else if(3==U){
c=[-1,0,1];
a=1;
}else if(4==U){
c=[-1,0,1];
a=2;
}else{
c=[-2,-1,0,1,2];
a=2;
}
$.each(b,function($){
var A,B=(A=new C._c.N$J7())&&A.N$V7($),D=B&&B.N$vi();
D>_&&(_=D);
});
}else{
b=R&&R.N$alt(O);
$.each(b,function($){
$>_&&(_=$);
});
c=[-100];
}
T&&T.N$pr(_-1,12)&&d.push(14);
var e=T&&T.N$lr(),f=2==Y?[0,1]:[Y||0],g=2==Z?[0,1]:[Z||0];
Q.N$cut((P={},D(P,F,b),D(P,A,S),D(P,B,V),D(P,E,e),D(P,I,f),D(P,H,g),D(P,G,c),P));
Q.N$emt=-100;
T&&T.N$fr(Q.N$tmt)||(Q.N$tmt=T&&T.N$rr());
Q.N$imt=W;
Q.N$fvt=a;
Q.N$Lrt=T;
Q.N$rmt=0!=Y;
Q.N$hvt=e.length==_&&1==b.length;
Q.N$hvt&&d.push(6);
R&&R.N$Eot(C._c.N$Cot.N$rdt(d));
};
S.N$Lot=function(){
var $=this.N$qit();
this.N$lvt=$&&$.N$qct();
2==this.N$lvt&&this.N$Eut(2);
};
S.N$mvt=function(){
var $,A,B,D,E=0==this.N$Vit();
this.N$dvt&&(E=!1);
var F=($=new C._c.N$Xtt())&&$.init();
F&&F.N$tnt(this.N$l4);
F&&F.N$nnt(this.N$h4);
F&&F.N$lnt(this.N$Lrt);
F&&F.N$fnt(15.5);
E&&F&&F.N$cnt(2);
var G=!1,H=this.N$Yvt,I=H&&H.N$G9(),J=this.N$tmt,K=this.N$emt;
J!=I&&(this.N$smt=!0);
if(0==this.N$nmt){
var L=[H];
if(J==I){
this.N$smt&&L.push((A=new C._c.N$J9())&&A.N$t8(J,-100));
G=!0;
}else L.push((B=new C._c.N$J9())&&B.N$t8(J,K));
var M=C._c.N$mnt.N$Nnt(L);
M&&M.N$Ent(this.N$gnt);
E&&M&&M.N$Snt(1);
F&&F.N$dnt(M);
F&&F.N$hnt(2);
}else{
var N=(D=new C._c.N$J9())&&D.N$t8(J,K),O=C._c.N$mnt.N$Nnt([H]),P=C._c.N$mnt.N$Nnt([N]);
F&&F.N$dnt(O);
F&&F.N$dnt(P);
F&&F.N$hnt(3);
F&&F.N$int(this.N$gnt);
}
var Q=C._c.N$i8.N$m8(J,this.N$l4),R=void 0;
R=0==this.N$fvt?0:1==this.N$fvt?1:2;
this.N$Hst(2020,{
"accidental-type":K,
"accidental-layout":R,
position:J,
"immutable-label":G?" ":null,
"ax-label":"Position",
"ax-value":Q
});
this.N$Cut(F);
};
S.N$Aut=function(D,G,H){
var I,J,K=D[A],L=D[B],M=D[E],N=G?G[E]:0;
if(G&&M==N&&!this.N$hvt){
if(H>.5){
this.N$hvt=!0;
0==$.size((I=this.N$qit())&&I.N$xot())&&(J=this.N$qit())&&J.N$Eot([C._c.N$Cot.N$Not(6)]);
}
if(G[F]==D[F])return!1;
}
var O=this.N$umt(D),P=!0;
P&&this.N$imt&&!C._c.N$Qut.N$Zut(O,L,this.N$fvt)&&(P=!1);
P&&!C._c.N$Qut.N$eat(O,K,this.N$Lrt)&&(P=!1);
return P;
};
S.N$not=function(D){
var E,G=this,J=D[F],K=D[A],M=D[B],N=D[I],O=D[H],Q=null,R=null;
if(this.N$imt){
Q=C._c.N$i8.N$O8(J);
R=C._c.N$i8.N$D8(J);
}else{
Q=C._c.N$i8.N$j8(J);
R=C._c.N$i8.N$F8(J);
}
var S=this.N$umt(D);
if(this.N$rmt)if(0==N){
Q="{{up}} "+Q;
R="Ascending "+R;
}else if(1==N){
Q="{{down}} "+Q;
R="Descending "+R;
}
var T=$.map(S,function($){
var A;
return(A=new C._c.N$J9())&&A.N$t8($&&$.N$An(K),$&&$.N$On(M));
}),U=(E=new C._c.N$Lnt())&&E.init();
U&&U.N$Mnt(Q);
U&&U.N$Dnt(R);
G.N$l4=K;
G.N$h4=M;
G.N$gnt=U;
G.N$nmt=O;
G.N$Yvt=$.first(T);
G.N$Zvt=$.last(T);
G.N$Evt=J;
G.N$dvt=!1;
var V=G.N$qit(),W=V&&V.N$alt(L);
G.N$smt=0!=W;
if(V&&V.N$alt(P)){
G.N$tmt=G.N$Yvt&&G.N$Yvt.N$G9();
G.N$emt=-100;
}
G.N$wut();
G.N$mvt();
};
S.N$gvt=function($){
var A=$["accidental-type"],B=$["delta"],C=$["position"];
if(void 0!==A)this.N$emt=A;else if(void 0!==B){
var D=this.N$tmt+B;
this.N$tmt=this.N$Lrt&&this.N$Lrt.N$hr(D);
}else void 0!==C&&(this.N$tmt=this.N$Lrt&&this.N$Lrt.N$hr(C));
this.N$mvt();
};
S.N$yvt=function($){
var A=$["position"];
if(void 0!==A){
var B=Math.round(A);
this.N$tmt=this.N$Lrt&&this.N$Lrt.N$hr(B);
}
this.N$mvt();
};
S.N$aut=function($,A){
3015==$?this.N$gvt(A):3016==$?this.N$yvt(A):T.N$_super.prototype.N$aut.call(this,$,A);
};
S.N$mut=function(A){
var B,D=A[H],E=this.N$umt(A),F=(B=new C._c.N$jr())&&B.N$Qr(2);
0==D?$.each(E,function($){
F&&F.N$oi($&&$.N$Ln(),0,1);
}):1==D&&$.each(E,function($){
F&&F.N$si($&&$.N$Ln(),.5);
});
return F;
};
return T;
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
var A="Intervals",B="PlayMode",E="RangeMode",F="QuestionIndex";
function G($){
return 2==$?"Range determines the available pitches for the starting note of the interval.":"Range determines the available pitches for both notes of the interval.";
}
C._registerClass("N$amt","N$Nft",function(D,F){
function H(){
C._c.N$Nft.call(this);
this.constructor=H;
this.N$_id=++C._id;
}
D.N$Zot=function(){
return"Interval Ear Training";
};
D.N$ult=function(){
var $,D=($=new C._c.N$Eht())&&$.init();
function F($,A){
var B;
return(B=C._c.N$Jn.N$ir($,A))&&B.N$lr();
}
D&&D.N$Qht("ear-interval");
D&&D.N$cpt(F(0,14),A);
D&&D.N$cpt(F(0,4),B);
D&&D.N$hpt([1e3,750,500,333,250,125],"Speed");
D&&D.N$hpt([0,1,2],E);
D&&D.N$upt();
D&&D.N$apt();
D&&D.N$hpt([0,1,2,3],"CorrectAnswerStyle");
D&&D.N$cpt(F(15,24),A);
D&&D.N$ppt();
D&&D.N$dpt();
D&&D.N$vpt();
return D;
};
F.N$tut=function(){
return"ear-interval";
};
F.N$ilt=function(){
var $,D,F,H,I,J,K=this,L=($=new C._c.N$Dlt())&&$.N$Mlt(A);
L&&L.N$Plt("Intervals");
L&&L.N$Blt(1);
L&&L.N$Hlt(1);
var M=[],N=function($){
var A=C._c.N$i8.N$R8($),B=C._c.N$i8.N$U8($),D=C._c.N$Ilt.N$Flt(A,$);
D&&D.N$zrt(B);
13>$&&M.push($);
L&&L.N$Rlt(D);
};
N(0);
N(1);
N(2);
N(3);
N(4);
N(5);
N(6);
N(7);
N(8);
N(9);
N(10);
N(11);
N(12);
L&&L.N$slt();
N(13);
N(14);
N(15);
N(16);
N(17);
N(18);
N(19);
N(20);
N(21);
N(22);
N(23);
N(24);
L&&L.N$jlt(M);
K.N$Wlt(L);
var O=(D=new C._c.N$Dlt())&&D.N$Mlt(B);
O&&O.N$Plt("Play Mode");
O&&O.N$Blt(1);
O&&O.N$jlt([0]);
var P=function($,A,B){
var D=C._c.N$Ilt.N$Klt(null,"interval-playmode:"+$,$);
D&&D.N$zrt(A);
D&&D.N$qlt(B?B:A);
D&&D.N$Qlt(61);
O&&O.N$Rlt(D);
};
P(0,"Ascending",null);
P(1,"Descending",null);
P(2,"Harmonic",null);
P(3,"Ascending Harmonic","Asc. Harmonic");
P(4,"Descending Harmonic","Desc. Harmonic");
K.N$slt();
K.N$Wlt(O);
K.N$bct(16);
K.N$slt();
K.N$bct(6);
K.N$bct(7);
var Q=(F=new C._c.N$Dlt())&&F.N$Mlt(E);
Q&&Q.N$Plt("Range Mode");
Q&&Q.N$Blt(0);
Q&&Q.N$jlt(0);
Q&&Q.N$slt();
Q&&Q.N$Rlt(C._c.N$Ilt.N$Flt("Starting Note",2));
(H=Q&&Q.N$tlt())&&H.N$fct(G(2));
Q&&Q.N$slt();
Q&&Q.N$Rlt(C._c.N$Ilt.N$Flt("Both Notes",0));
(I=Q&&Q.N$tlt())&&I.N$fct(G(0));
K.N$Wlt(Q);
K.N$slt();
K.N$bct(12);
(J=K.N$xct(12))&&J.N$jlt(0);
K.N$fmt();
};
F.N$fmt=function(){
var A=this.N$alt(E),B=G(A);
$.each(this.N$Nct(7),function($){
$&&$.N$Edt(B);
});
};
F.N$mlt=function($){
($&&$.N$ylt())==E&&this.N$fmt();
};
return H;
});
C._registerClass("N$lmt","N$dit",function(G,H){
function I(){
C._c.N$dit.call(this);
this.N$Bvt=null;
this.N$lvt=this.N$Evt=0;
this.N$hvt=!1;
this.constructor=I;
this.N$_id=++C._id;
}
G.N$Git=function(){
return C._c.N$amt;
};
H.N$sut=function(){
return 4;
};
H.N$out=function(){
return 1;
};
H.N$Vot=function($){
this.N$gut($==this.N$Evt,this.N$lvt,[$]);
};
H.N$cot=function(){
this.N$Tut([this.N$Evt]);
};
H.N$Sot=function(){
var G=this,H=this.N$qit(),I=H&&H.N$Slt(),J=H&&H.N$alt(B),K=H&&H.N$alt(A),L=H&&H.N$alt(E),M=[],N=$.includes(J,0),O=$.includes(J,1),P=$.includes(J,3),Q=$.includes(J,4),R=$.includes(J,2),S=C._c.N$Qut.N$nat(I,H&&H.N$Ict()),T=S&&S.N$rr(),U=S&&S.N$nr(),V=S&&S.N$cr(),W=new Uint8Array(V*K.length*J.length*3),X=0;
function Y($,A,B){
W[X++]=$;
W[X++]=A;
W[X++]=B;
}
if(2==L){
var Z=$.max(K),_=C._c.N$Jn.N$ir((S&&S.N$rr())-Z,(S&&S.N$nr())+Z),a=C._c.N$Qut.N$nat(I,_),b=a&&a.N$rr(),c=a&&a.N$nr();
$.each(K,function($){
for(var A=T;U>=A;A++){
var B=A+$;
if(B>c)continue;
N&&Y(A,B,0);
if(A!=B){
P&&Y(A,B,3);
R&&Y(A,B,2);
}
}
for(var C=U;C>=T;C--){
var D=C-$;
if(b>D)continue;
O&&Y(C,D,1);
C!=D&&Q&&Y(C,D,4);
}
});
}else $.each(K,function($){
for(var A=T;U-$>=A;A++){
var B=A+$;
N&&Y(A,B,0);
O&&Y(B,A,1);
if(A!=B){
P&&Y(A,B,3);
Q&&Y(B,A,4);
R&&Y(A,B,2);
}
}
});
var d=Math.floor(X/3),e=1==d;
d?e&&M.push(6):M.push(1);
G.N$cut(D({},F,d));
G.N$Bvt=W;
G.N$hvt=e;
H&&H.N$Eot(C._c.N$Cot.N$rdt(M));
};
H.N$Lot=function(){
var B=this,D=this.N$qit(),E=D&&D.N$alt(A),F=D&&D.N$Slt();
this.N$lvt=D&&D.N$qct();
this.N$Eut(F);
var G=$.some(E,function($){
return 12>$;
}),H=$.some(E,function($){
return $>12;
});
H||G||(G=!0);
for(var I=[],J=["1","Down 2","2","Down 3","3","4","Down 5","5","Down 6","6","Down 7","7","8","Down 9","9","Down 0","0","1","Down 2","2","Down 3","3","Down 4","4","5"],K=G?0:12,L=H?24:12,M=K;L>=M;M++){
var N=C._c.N$i8.N$R8(M),O=C._c.N$i8.N$q8(M),P=C._c.N$i8.N$U8(M),Q=J[M];
G&&H&&(Q=null);
I.push({
title:N,
ax:P,
symbol:O,
tag:M,
active:$.includes(E,M),
shortcut:Q
});
}
var R=null,S=null;
if(G&&H){
R=[[null,0,null,null],[1,2,13,14],[3,4,15,16],[null,5,null,17],[6,7,18,19],[8,9,20,21],[10,11,22,23],[null,12,null,24]];
S=[[1,2,3,4,13,14,15,16],[5,6,7,17,18,19],[8,9,10,11,20,21,22,23],[0,12,24]];
}else if(G){
R=[[null,0],[1,2],[3,4],[null,5],[6,7],[8,9],[10,11],[null,12]];
S=[[1,2,3,4],[5,6,7],[8,9,10,11],[0,12]];
}else if(H){
R=[[null,12],[13,14],[15,16],[null,17],[18,19],[20,21],[22,23],[null,24]];
S=[[13,14,15,16],[17,18,19],[20,21,22,23],[12,24]];
}
B.N$Sut(I,0,{
"default":R,
landscape:S
});
};
H.N$Aut=function($,A){
var B=$[F];
if(A){
var C=A[F];
if(!this.N$hvt&&B==C)return!1;
}
return!0;
};
H.N$mut=function($){
var A,B=3*$[F],D=this.N$Bvt[B+0],E=this.N$Bvt[B+1],G=this.N$Bvt[B+2],H=this.N$qit(),I=H&&H.N$Slt(),J=H&&H.N$zct(),K=0,L=J,M=2*J,N=(A=new C._c.N$jr())&&A.N$Qr(I);
if(0==G||1==G){
N&&N.N$oi(D,K,J);
N&&N.N$oi(E,L,J);
}else if(2==G){
N&&N.N$oi(D,K,J);
N&&N.N$oi(E,K,J);
}else if(3==G||4==G){
N&&N.N$oi(D,K,J);
N&&N.N$oi(E,L,J);
N&&N.N$oi(D,M,J);
N&&N.N$oi(E,M,J);
}
return N;
};
H.N$not=function($){
var A=3*$[F],B=this.N$Bvt[A+0],C=this.N$Bvt[A+1];
this.N$wut();
this.N$but(this.N$vut());
this.N$Evt=Math.abs(B-C);
};
return I;
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
var A="Clef",B="KeySignature",E="StaffPosition",F="AnswerTag",G="Accidental",H="DisplayMode",I="Direction",J="RequireQuality",K="Intervals",L="CompoundMode",M="GenericIntervals";
C._registerClass("N$cmt","N$Nft",function(A,B){
function D(){
C._c.N$Nft.call(this);
this.constructor=D;
this.N$_id=++C._id;
}
A.N$Zot=function(){
return"Interval Identification";
};
A.N$ult=function(){
var $,A=($=new C._c.N$Eht())&&$.init();
function B($,A,B){
var C=A[H],D=A[I];
B&&B.N$Vpt((C<<2)+D);
}
function D($,A,B){
var C=B&&B.N$Fpt();
A[H]=C>>2&3;
A[I]=3&C;
}
A&&A.N$Qht("interval");
A&&A.N$Ght();
A&&A.N$ept();
A&&A.N$cpt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],"KeySignature");
A&&A.N$cpt([26,36,46,56,66,76,86,25,35,45,55,65,75,85,24,34,64,74,23,33,44,54,63,73,84],K);
A&&A.N$hpt([1,2,3,4,5],"Difficulty");
A&&A.N$hpt([0,1,2,3],"CorrectAnswerStyle");
A&&A.N$spt(L);
A&&A.N$ppt();
A&&A.N$dpt();
A&&A.N$vpt();
A&&A.N$mpt(B,D);
A&&A.N$Qht("generic-interval");
A&&A.N$Ght();
A&&A.N$ept();
A&&A.N$cpt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],"KeySignature");
A&&A.N$cpt([2,3,4,5,6,7,8,9,10,11],M);
A&&A.N$hpt([0,1,2,3],"CorrectAnswerStyle");
A&&A.N$cpt([12,13,14,15],M);
A&&A.N$ppt();
A&&A.N$dpt();
A&&A.N$vpt();
A&&A.N$mpt(B,D);
A&&A.N$Dht(function($,A){
if("generic-interval"==$&&A.length<=4){
A.splice(0,0,1);
A.splice(3,0,0,4,0);
}
});
A&&A.N$jht(function($,A){
var B="generic-interval"!=$;
A[J]=B;
});
return A;
};
B.N$tut=function(){
return this.N$alt(J)?"interval":"generic-interval";
};
B.N$ilt=function(){
var A,B,D,E,F,G,N,O,P,Q,R=this;
this.N$bct(2);
this.N$slt();
this.N$bct(3);
this.N$slt();
this.N$bct(14);
this.N$slt();
var S=(A=new C._c.N$Dlt())&&A.N$Mlt(H);
S&&S.N$Plt("Display Mode");
S&&S.N$Blt(0);
S&&S.N$jlt(0);
S&&S.N$Rlt(C._c.N$Ilt.N$Flt("Harmonic",0));
S&&S.N$Rlt(C._c.N$Ilt.N$Flt("Melodic",1));
S&&S.N$Rlt(C._c.N$Ilt.N$Flt("Both",2));
this.N$Wlt(S);
var T=(B=new C._c.N$Dlt())&&B.N$Mlt(I);
T&&T.N$Plt("Direction");
T&&T.N$Blt(0);
T&&T.N$jlt(0);
var U=C._c.N$Ilt.N$Flt("Ascending Only",0);
U&&U.N$qlt("Ascending");
T&&T.N$Rlt(U);
var V=C._c.N$Ilt.N$Flt("Descending Only",1);
V&&V.N$qlt("Descending");
T&&T.N$Rlt(V);
T&&T.N$Rlt(C._c.N$Ilt.N$Flt("Both",2));
(D=T&&T.N$tlt())&&D.N$fct("Direction is applicable to melodic intervals.");
this.N$Wlt(T);
var W=(E=new C._c.N$Dlt())&&E.N$Mlt(J);
W&&W.N$Plt("Require Quality");
W&&W.N$Hlt(3);
W&&W.N$Blt(0);
W&&W.N$jlt(1);
W&&W.N$Rlt(C._c.N$Ilt.N$Qat(0));
W&&W.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$slt();
this.N$Wlt(W);
(F=this.N$tlt())&&F.N$fct("Require both the interval quality and type.");
var X=[[2,9],[3,10],[4,11],[5,12],[6,13],[7,14],[8,15]],Y=(G=new C._c.N$Dlt())&&G.N$Mlt(M);
Y&&Y.N$Plt("Intervals");
Y&&Y.N$Blt(1);
Y&&Y.N$Hlt(1);
$.each($.flatten(X),function($){
var A=C._c.N$i8.N$j8($),B=C._c.N$i8.N$F8($),D=C._c.N$Ilt.N$Flt(A,$);
D&&D.N$zrt(B);
D&&D.N$Qlt(61);
Y&&Y.N$Rlt(D);
});
(N=Y&&Y.N$tlt())&&N.N$cct(X);
Y&&Y.N$jlt([2,3,4,5,6,7,8]);
R.N$slt();
R.N$Wlt(Y);
var Z=[[23,24,25,26],[33,34,35,36],[44,null,45,46],[54,null,55,56],[63,64,65,66],[73,74,75,76],[84,null,85,86]],_=(O=new C._c.N$Dlt())&&O.N$Mlt(K),a=[];
_&&_.N$Plt("Intervals");
_&&_.N$Blt(1);
_&&_.N$Hlt(1);
$.each($.flatten(Z),function($){
if(null===$)return;
var A=C._c.N$i8.N$O8($),B=C._c.N$i8.N$D8($),D=C._c.N$Ilt.N$Flt(A,$);
D&&D.N$zrt(B);
D&&D.N$Qlt(61);
_&&_.N$Rlt(D);
a.push($);
});
(P=_&&_.N$tlt())&&P.N$cct(Z);
_&&_.N$jlt(a);
R.N$slt();
R.N$Wlt(_);
var b=(Q=new C._c.N$Dlt())&&Q.N$Mlt(L);
b&&b.N$Plt("Compound Mode");
b&&b.N$Blt(0);
b&&b.N$Hlt(3);
b&&b.N$jlt(0);
b&&b.N$Rlt(C._c.N$Ilt.N$Qat(0));
b&&b.N$Rlt(C._c.N$Ilt.N$Qat(1));
R.N$Wlt(b);
R.N$slt();
R.N$bct(15);
R.N$slt();
R.N$bct(11);
};
B.N$Ivt=function(){
var $=this.N$tft(K),A=this.N$tft(M),B=this.N$xct(15),C=this.N$tft(L),D=this.N$alt(J);
this.N$wlt($,!D);
this.N$wlt(B,!D);
this.N$wlt(C,!D);
this.N$wlt(A,D);
var E=this.N$tft(I),F=this.N$alt(H);
this.N$wlt(E,0==F);
};
B.N$Qvt=function(){
var A=this.N$tft(K),B=this.N$alt(L);
$.each(A&&A.N$Gat(),function($){
var A=$&&$.N$Wn(),D=A;
if(B){
var E=C._c.N$J7.N$T9(A);
D=E&&E.N$Wn();
}
$&&$.N$Urt(C._c.N$i8.N$O8(D));
$&&$.N$zrt(C._c.N$i8.N$D8(D));
$&&$.N$Nlt(C._c.N$i8.N$O8(D));
});
};
B.N$mlt=function($){
var A=$&&$.N$ylt();
A==J||A==H?this.N$Ivt():A==L&&this.N$Qvt();
};
return D;
});
C._registerClass("N$hmt","N$dit",function(N,O){
function P(){
C._c.N$dit.call(this);
this.N$pmt=this.N$Lrt=null;
this.N$fvt=this.N$lvt=this.N$Evt=0;
this.N$hvt=this.N$dmt=this.N$vmt=this.N$imt=!1;
this.constructor=P;
this.N$_id=++C._id;
}
N.N$Git=function(){
return C._c.N$cmt;
};
O.N$omt=function(A){
return $.map(A,function($){
var A=C._c.N$J7.N$T9($);
return A&&A.N$Wn();
});
};
O.N$umt=function(D){
var J,K,L,M,N=D[A],O=D[B],P=D[G],Q=D[E],R=D[F],S=D[I],T=D[H],U=null,V=null;
U=-100==P?(J=new C._c.N$Kt())&&J.N$xn(N,Q,O):(K=new C._c.N$Kt())&&K.N$En(N,Q,P);
(void 0===R||null===R)&&this.N$lst("!aT",$.inspect(D));
if(this.N$imt){
var W=(L=new C._c.N$J7())&&L.N$V7(R);
V=U&&U.N$Fn(W);
}else{
var X=Q+(R-1);
V=(M=new C._c.N$Kt())&&M.N$xn(N,X,O);
}
return 1==T&&1==S?[V,U]:[U,V];
};
O.N$sut=function(){
return 1;
};
O.N$out=function(){
return 1;
};
O.N$Vot=function($){
var A=$==this.N$Evt;
this.N$gut(A,this.N$lvt,[$]);
};
O.N$aut=function($,A){
if(3008==$){
var B=A["tag"],C=B==this.N$Evt;
this.N$gut(C,this.N$lvt,[B]);
}else P.N$_super.prototype.N$aut.call(this,$,A);
};
O.N$cot=function(){
this.N$Tut([this.N$Evt]);
};
O.N$Sot=function(){
var N,O=this,P=this.N$qit(),Q=P&&P.N$cat(),R=P&&P.N$wrt(),S=P&&P.N$Uct(),T=P&&P.N$Rct(),U=P&&P.N$alt(J),V=P&&P.N$alt(L),W=P&&P.N$alt(I),X=P&&P.N$alt(H),Y=0,Z=0,_=!1,a=!1,b=void 0,c=void 0,d=[];
if(U){
b=P&&P.N$alt(K);
V&&(b=this.N$omt(b));
if(1==S){
c=[-100];
Y=0;
}else if(2==S){
c=[-100];
Y=1;
}else if(3==S){
c=[-1,0,1];
Y=1;
}else if(4==S){
c=[-1,0,1];
Y=2;
}else{
c=[-2,-1,0,1,2];
Y=2;
}
$.each(b,function($){
var A,B=(A=new C._c.N$J7())&&A.N$V7($),D=B&&B.N$vi();
D>Z&&(Z=D);
});
}else{
b=P&&P.N$alt(M);
$.each(b,function($){
$>Z&&(Z=$);
$>8?a=!0:_=!0;
});
c=[-100];
}
R&&R.N$pr(Z-1,12)&&d.push(14);
var e=R&&R.N$lr(),f=2==W?[0,1]:[W||0],g=2==X?[0,1]:[X||0];
O.N$cut((N={},D(N,F,b),D(N,A,Q),D(N,B,T),D(N,E,e),D(N,G,c),D(N,H,g),D(N,I,f),N));
O.N$pmt=b;
O.N$imt=U;
O.N$fvt=Y;
O.N$Lrt=R;
O.N$vmt=_;
O.N$dmt=a;
O.N$hvt=e.length==Z&&1==b.length;
O.N$hvt&&d.push(6);
P&&P.N$Eot(C._c.N$Cot.N$rdt(d));
};
O.N$Lot=function(){
var A=this,B=this.N$qit();
this.N$lvt=B&&B.N$qct();
2==this.N$lvt&&this.N$Eut(2);
for(var D,E=[],F=null,G=null,H={},I=this.N$pmt,J=0,K=I?I.length:0;K>J;J++){
D=I[J];
H[D]=!0;
}
function M($){
for(var A,B=0,C=$?$.length:0;C>B;B++){
A=$[B];
if(H[A])return!0;
}
return!1;
}
function N($){
if(null===$)return null;
var A=C._c.N$i8.N$O8($),B=C._c.N$i8.N$D8($),D=C._c.N$Qut.N$sat($);
E.push({
title:A,
ax:B,
tag:$,
active:!!H[$],
shortcut:D
});
return $;
}
function O(B){
var D=C._c.N$i8.N$j8(B),F=(C._c.N$i8.N$F8(B),[null,"1","2","3","4","5","6","7","8","9","0","Up 1","Up 2","Up 3","Up 4","Up 5"][B]);
E.push({
title:D,
tag:B,
active:$.includes(A.N$pmt,B),
shortcut:F
});
return B;
}
if(A.N$imt){
var P=B&&B.N$alt(L),Q=[P?96:26,P?106:36,P?116:46,P?126:56,P?136:66,P?146:76,P?156:86],R=[P?95:25,P?105:35,P?115:45,P?125:55,P?135:65,P?145:75,P?155:85],S=[P?94:24,P?104:34,null,null,P?134:64,P?144:74,null],T=[P?93:23,P?103:33,P?114:44,P?124:54,P?133:63,P?143:73,P?154:84],U=$.map(Q,function($){
return N($);
}),V=$.map(R,function($){
return N($);
}),W=$.map(S,function($){
return N($);
}),X=$.map(T,function($){
return N($);
});
F=[U,V,W,X];
G=[];
M(Q)&&G.push(U);
M(R)&&G.push(V);
M(S)&&G.push(W);
M(T)&&G.push(X);
}else if(A.N$vmt&&A.N$dmt){
F=[[O(2),O(3),O(4),O(5)],[O(6),O(7),null,O(8)],[O(9),O(10),O(11),O(12)],[O(13),O(14),null,O(15)]];
G=[[O(2),O(3),O(4),O(5),O(6),O(7),O(8)],[O(9),O(10),O(11),O(12),O(13),O(14),O(15)]];
}else{
var Y=A.N$dmt?7:0;
F=[[O(Y+2),O(Y+3)],[O(Y+4),O(Y+5)],[O(Y+6),O(Y+7)],[null,O(Y+8)]];
G=[[O(Y+2),O(Y+3),O(Y+4),O(Y+5)],[O(Y+6),O(Y+7),O(Y+8)]];
}
A.N$Sut(E,0,{
"default":F,
landscape:G
});
};
O.N$Aut=function(D,G,H){
var I,J,K=D[A],L=D[B],M=D[E],N=G?G[E]:0;
if(G&&M==N&&!this.N$hvt){
if(H>.5){
this.N$hvt=!0;
0==$.size((I=this.N$qit())&&I.N$xot())&&(J=this.N$qit())&&J.N$Eot([C._c.N$Cot.N$Not(6)]);
}
if(D[F]==G[F])return!1;
}
var O=this.N$umt(D),P=!0;
P&&this.N$imt&&!C._c.N$Qut.N$Zut(O,L,this.N$fvt)&&(P=!1);
P&&!C._c.N$Qut.N$eat(O,K,this.N$Lrt)&&(P=!1);
return P;
};
O.N$not=function(D){
{
var E,G=this,J=D[A],K=D[B],L=D[H];
D[I];
}
this.N$Evt=D[F];
var M=(E=new C._c.N$Xtt())&&E.init();
M&&M.N$tnt(J);
M&&M.N$nnt(K);
M&&M.N$fnt(15.5);
M&&M.N$lnt(this.N$Lrt);
var N=this.N$umt(D);
0==L?M&&M.N$pnt(N):$.each(N,function($){
M&&M.N$dnt(C._c.N$mnt.N$vnt([$]));
});
G.N$wut();
G.N$Cut(M);
};
O.N$mut=function(A){
var B,D=A[H],E=this.N$umt(A),F=(B=new C._c.N$jr())&&B.N$Qr(2);
0==D?$.each(E,function($){
F&&F.N$oi($&&$.N$Ln(),0,1);
}):1==D&&$.each(E,function($){
F&&F.N$si($&&$.N$Ln(),.5);
});
return F;
};
return P;
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
var $="Clef",A="KeySignature",B="Scales",E="ResetAnswer";
C._registerClass("N$mmt","N$Nft",function($,D){
function F(){
C._c.N$Nft.call(this);
this.constructor=F;
this.N$_id=++C._id;
}
$.N$Zot=function(){
return"Key Signature Construction";
};
$.N$ult=function(){
var $,D=($=new C._c.N$Eht())&&$.init();
D&&D.N$Qht("keysig-construction");
D&&D.N$Ght();
D&&D.N$cpt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],A);
D&&D.N$cpt([0,1,20,21,22,23,24,25,26],B);
D&&D.N$spt(E);
D&&D.N$hpt([0,1,2,3],"CorrectAnswerStyle");
D&&D.N$ppt();
D&&D.N$dpt();
D&&D.N$vpt();
D&&D.N$hpt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"NoteNameStyle");
return D;
};
D.N$tut=function(){
return"keysig-construction";
};
D.N$ilt=function(){
var $,A,D;
this.N$bct(2);
this.N$slt();
this.N$bct(14);
($=this.N$xct(14))&&$.N$jlt([-1,0,1,2,3,4,5]);
var F=(A=new C._c.N$Dlt())&&A.N$Mlt(B);
F&&F.N$Plt("Scales");
F&&F.N$Hlt(1);
F&&F.N$Blt(1);
F&&F.N$jlt([0]);
F&&F.N$Rlt(C._c.N$Ilt.N$Flt("Major",0));
F&&F.N$Rlt(C._c.N$Ilt.N$Flt("Minor",1));
F&&F.N$slt();
F&&F.N$Rlt(C._c.N$Ilt.N$Flt("Ionian",20));
F&&F.N$Rlt(C._c.N$Ilt.N$Flt("Dorian",21));
F&&F.N$Rlt(C._c.N$Ilt.N$Flt("Phrygian",22));
F&&F.N$Rlt(C._c.N$Ilt.N$Flt("Lydian",23));
F&&F.N$Rlt(C._c.N$Ilt.N$Flt("Mixolydian",24));
F&&F.N$Rlt(C._c.N$Ilt.N$Flt("Aeolian",25));
F&&F.N$Rlt(C._c.N$Ilt.N$Flt("Locrian",26));
this.N$slt();
this.N$Wlt(F);
this.N$slt();
this.N$wct(5,[0,1,2,3,4,13,14]);
this.N$slt();
this.N$bct(13);
var G=(D=new C._c.N$Dlt())&&D.N$Mlt(E);
G&&G.N$Plt("Reset Answer");
G&&G.N$Hlt(3);
G&&G.N$Blt(0);
G&&G.N$jlt(1);
G&&G.N$Rlt(C._c.N$Ilt.N$Qat(0));
G&&G.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$Wlt(G);
};
return F;
});
C._registerClass("N$gmt","N$dit",function(F,G){
function H(){
C._c.N$dit.call(this);
this.N$pmt=this.N$gnt=null;
this.N$l4=this.N$lvt=this.N$ymt=this.N$bmt=this.N$Hnt=this.N$wmt=0;
this.N$hvt=!1;
this.constructor=H;
this.N$_id=++C._id;
}
F.N$Git=function(){
return C._c.N$mmt;
};
G.N$mvt=function(){
var $,A=(0==this.N$Vit(),($=new C._c.N$Xtt())&&$.init());
A&&A.N$tnt(this.N$l4);
A&&A.N$nnt(this.N$bmt);
A&&A.N$lnt(C._c.N$Jn.N$ir(-6,6));
A&&A.N$fnt(12);
A&&A.N$int(this.N$gnt);
A&&A.N$ant(5);
A&&A.N$dnt(C._c.N$mnt.N$vnt([]));
this.N$Hst(2021,{
tag:this.N$bmt
});
this.N$Cut(A);
};
G.N$Emt=function($){
this.N$bmt=$["tag"];
this.N$mvt();
};
G.N$sut=function(){
return 1;
};
G.N$out=function(){
return 4;
};
G.N$Xot=function(){
var $=this.N$bmt==this.N$ymt;
this.N$gut($,this.N$lvt,null);
};
G.N$cot=function(){
this.N$bmt=this.N$ymt;
this.N$mvt();
};
G.N$Sot=function(){
var E,F=this.N$qit(),G=F&&F.N$Rct(),H=F&&F.N$cat(),I=F&&F.N$alt(B),J=F&&F.N$Stt();
this.N$cut((E={},D(E,$,H),D(E,A,G),D(E,B,I),E));
this.N$hvt=1==G.length&&1==I.length;
this.N$hvt&&F&&F.N$Eot([C._c.N$Cot.N$Not(8)]);
this.N$lvt=F&&F.N$qct();
this.N$Hnt=J;
this.N$pmt=G;
};
G.N$Aut=function($,C){
var D=$[A],E=$[B];
if(C){
var F=C[A],G=C[B];
if(D==F&&E==G&&!this.N$hvt)return!1;
}
return!0;
};
G.N$not=function(D){
var F,G,H=D[$],I=D[A],J=D[B];
this.N$l4=H;
this.N$wmt=J;
this.N$ymt=I;
var K=C._c.N$M9.N$B9(J,I,0);
(F=this.N$qit())&&F.N$alt(E)&&(this.N$bmt=0);
this.N$gnt=(G=new C._c.N$Lnt())&&G.init();
this.N$gnt&&this.N$gnt.N$Mnt(C._c.N$i8.N$y8(J,K&&K.N$Wn(),this.N$Hnt));
this.N$gnt&&this.N$gnt.N$Dnt(C._c.N$i8.N$E8(J,K&&K.N$Wn(),this.N$Hnt));
this.N$wut();
this.N$mvt();
};
G.N$aut=function($,A){
3017==$?this.N$Emt(A):H.N$_super.prototype.N$aut.call(this,$,A);
};
return H;
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
var A="Clef",B="KeySignature",E="Scales";
C._registerClass("N$Smt","N$Nft",function(A,D){
function F(){
C._c.N$Nft.call(this);
this.constructor=F;
this.N$_id=++C._id;
}
A.N$Zot=function(){
return"Key Signature Identification";
};
A.N$ult=function(){
var A,D=(A=new C._c.N$Eht())&&A.init();
D&&D.N$Qht("keysig");
D&&D.N$Ght();
D&&D.N$cpt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],B);
D&&D.N$cpt([1,0],E);
D&&D.N$hpt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16],"NoteNameStyle");
D&&D.N$hpt([0,1,2,3],"CorrectAnswerStyle");
D&&D.N$ppt();
D&&D.N$dpt();
D&&D.N$vpt();
D&&D.N$cpt([20,21,22,23,24,25,26],E);
D&&D.N$Hht(function(A,B,C){
$.isEqual(C[E],[0])&&(C[E]=[]);
});
return D;
};
D.N$tut=function(){
return"keysig";
};
D.N$ilt=function(){
var $,A,B=this;
this.N$bct(2);
this.N$slt();
this.N$bct(14);
this.N$slt();
this.N$wct(5,[0,11,16,17,18,1,2,3,4,13,14]);
($=this.N$xct(14))&&$.N$jlt([-1,0,1,2,3,4,5]);
var D=(A=new C._c.N$Dlt())&&A.N$Mlt(E);
D&&D.N$Plt("Scales");
D&&D.N$Blt(1);
D&&D.N$Hlt(1);
D&&D.N$jlt([0]);
var F=function($){
var A=C._c.N$i8.N$b8($),B=C._c.N$Ilt.N$Flt(A,$);
D&&D.N$Rlt(B);
};
F(0);
F(1);
D&&D.N$slt();
F(20);
F(21);
F(22);
F(23);
F(24);
F(25);
F(26);
B.N$slt();
B.N$Wlt(D);
B.N$slt();
B.N$bct(13);
};
return F;
});
C._registerClass("N$xmt","N$dit",function(F,G){
function H(){
C._c.N$dit.call(this);
this.N$pmt=this.N$Tmt=null;
this.N$lvt=this.N$Evt=this.N$Hnt=0;
this.N$hvt=!1;
this.constructor=H;
this.N$_id=++C._id;
}
F.N$Git=function(){
return C._c.N$Smt;
};
G.N$sut=function(){
return 1;
};
G.N$out=function(){
return 1;
};
G.N$Vot=function($){
var A=$==this.N$Evt;
this.N$gut(A,this.N$lvt,[$]);
};
G.N$cot=function(){
this.N$Tut([this.N$Evt]);
};
G.N$Sot=function(){
var F,G=this,H=this.N$qit(),I=H&&H.N$Rct(),J=H&&H.N$cat(),K=H&&H.N$alt(E);
this.N$cut((F={},D(F,A,J),D(F,B,I),D(F,E,K),F));
var L={};
$.each(I,function(A){
$.each(K,function($){
var B,D=(B=C._c.N$M9.N$B9($,A,0))&&B.N$Wn();
L[D]=D;
});
});
G.N$hvt=1==I.length&&1==K.length;
G.N$hvt&&H&&H.N$Eot([C._c.N$Cot.N$Not(8)]);
G.N$lvt=H&&H.N$qct();
G.N$Hnt=H&&H.N$Stt();
G.N$Tmt=K;
G.N$pmt=$.values(L);
};
G.N$Lot=function(){
var A=this,B=[],D=this.N$Hnt,E=$.isEqual(this.N$Tmt,[1]);
$.each(C._c.N$Qut.N$Gut(),function(F){
var G=C._c.N$i8.N$a8(F,D),H=C._c.N$i8.N$f8(F,D);
E&&(G=G.toLowerCase());
B.push({
title:G,
ax:H,
tag:F,
active:$.includes(A.N$pmt,F),
shortcut:C._c.N$Qut.N$iat(F)
});
});
var F=C._c.N$Qut.N$Yut(D,A.N$pmt);
A.N$Sut(B,0,{
"default":F
});
};
G.N$Aut=function($,A){
var C=$[B],D=$[E];
if(A){
var F=A[B],G=A[E];
if(C==F&&D==G&&!this.N$hvt)return!1;
}
return!0;
};
G.N$not=function($){
var D,F,G,H=$[A],I=$[B],J=$[E];
this.N$Evt=(D=C._c.N$M9.N$B9(J,I,0))&&D.N$Wn();
var K=C._c.N$i8.N$b8(J);
1==J&&(K=K.toLowerCase());
var L=(F=new C._c.N$Lnt())&&F.init();
L&&L.N$Mnt("{{blank}} "+K);
L&&L.N$Dnt("Blank "+C._c.N$i8.N$K8(J)+"?");
var M=(G=new C._c.N$Xtt())&&G.init();
M&&M.N$tnt(H);
M&&M.N$nnt(I);
M&&M.N$fnt(13);
M&&M.N$lnt(C._c.N$Jn.N$ir(-6,6));
M&&M.N$int(L);
M&&M.N$ant(5);
M&&M.N$pnt([]);
this.N$wut();
this.N$Cut(M);
};
return H;
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
var A="MIDI",B="Chord",E="Inversion",F="Chords",G="Inversions",H="HighlightStyle",I=0,J=24;
C._registerClass("N$Nmt","N$Nft",function($,A){
function B(){
C._c.N$Nft.call(this);
this.constructor=B;
this.N$_id=++C._id;
}
$.N$Zot=function(){
return"Keyboard Chord Identification";
};
$.N$ult=function(){
var $,A=($=new C._c.N$Eht())&&$.init();
A&&A.N$Qht("keyboard-chord");
A&&A.N$cpt([0,1,3,2,4,5,6,7,8,14],F);
A&&A.N$spt(G);
A&&A.N$hpt([0,1,2,3],"CorrectAnswerStyle");
A&&A.N$cpt([15,16,17,18,19],F);
A&&A.N$hpt([0,1],H);
A&&A.N$ppt();
A&&A.N$dpt();
A&&A.N$vpt();
return A;
};
A.N$tut=function(){
return"keyboard-chord";
};
A.N$ilt=function(){
var $,A,B,D=this,E=($=new C._c.N$Dlt())&&$.N$Mlt(F);
E&&E.N$Plt("Chords");
E&&E.N$Blt(1);
E&&E.N$Hlt(1);
var I=function($){
var A=C._c.N$i8.N$W8($),B=C._c.N$i8.N$X8($),D=C._c.N$Ilt.N$Flt(A,$);
D&&D.N$zrt(B);
19==$&&D&&D.N$Nlt("Dominant 7th (Sus. 4th)");
E&&E.N$Rlt(D);
};
I(0);
I(1);
I(3);
I(2);
E&&E.N$slt();
I(4);
I(5);
I(6);
I(14);
I(8);
I(7);
E&&E.N$slt();
I(15);
I(16);
E&&E.N$slt();
I(17);
I(18);
I(19);
E&&E.N$jlt([0,1,3,2,4,5,6,7,8]);
D.N$slt();
D.N$Wlt(E);
var J=(A=new C._c.N$Dlt())&&A.N$Mlt(G);
J&&J.N$Plt("Inversions");
J&&J.N$Hlt(3);
J&&J.N$Blt(0);
J&&J.N$jlt(0);
J&&J.N$Rlt(C._c.N$Ilt.N$Qat(0));
J&&J.N$Rlt(C._c.N$Ilt.N$Qat(1));
D.N$Wlt(J);
D.N$slt();
var K=(B=new C._c.N$Dlt())&&B.N$Mlt(H);
K&&K.N$Plt("Highlight Style");
K&&K.N$Hlt(0);
K&&K.N$Blt(0);
K&&K.N$jlt(1);
K&&K.N$Rlt(C._c.N$Ilt.N$Flt("Dot",1));
K&&K.N$Rlt(C._c.N$Ilt.N$Flt("Entire Key",0));
D.N$Wlt(K);
D.N$slt();
D.N$bct(11);
};
return B;
});
C._registerClass("N$Cmt","N$dit",function(K,L){
function M(){
C._c.N$dit.call(this);
this.N$lvt=this.N$Evt=0;
this.N$vvt=!1;
this.constructor=M;
this.N$_id=++C._id;
}
K.N$Git=function(){
return C._c.N$Nmt;
};
L.N$Svt=function($){
if(this.N$vvt){
var A=C._c.N$K7.N$e2(this.N$Evt),B=C._c.N$K7.N$e2($);
if(A&&A.N$i2(B))return!0;
}
return $==this.N$Evt;
};
L.N$kmt=function($){
var D=$[A],F=$[B],G=$[E],H=C._c.N$Jn.N$ir(0,J);
return C._c.N$Qut.N$tat(D,F,G,H);
};
L.N$sut=function(){
return 2;
};
L.N$out=function(){
return 1;
};
L.N$Vot=function($){
var A=this.N$Svt($);
this.N$gut(A,this.N$lvt,[$]);
};
L.N$cot=function(){
this.N$Tut([this.N$Evt]);
};
L.N$Sot=function(){
var $,H,K=this.N$qit(),L=K&&K.N$alt(F),M=K&&K.N$alt(G),N=(H=C._c.N$Jn.N$ir(I,J))&&H.N$lr(),O=M?[0,1,2,3]:[0];
this.N$cut(($={},D($,E,O),D($,B,L),D($,A,N),$));
this.N$vvt=M;
};
L.N$Lot=function(){
var A=this,B=this.N$qit(),D=B&&B.N$alt(F),E=B&&B.N$qct();
2==E&&this.N$Eut(2);
this.N$lvt=E;
var G=[];
$.each([0,1,3,2,4,5,6,14,8,7,15,16,17,18,19],function(A){
var B=C._c.N$i8.N$W8(A),E=C._c.N$i8.N$z8(A),F=C._c.N$i8.N$X8(A),H=C._c.N$i8.N$V8(A);
G.push({
title:B,
"short":E,
symbol:H,
ax:F,
tag:A,
active:$.includes(D,A)
});
});
var H=$.includes(D,17)||$.includes(D,18)||$.includes(D,19)||$.includes(D,14)||$.includes(D,15)||$.includes(D,16),I=H?[[0,1,3,2],[4,5,6,14],[8,7,15,16],[17,18,19]]:[[0,1],[3,2],[4,5,6],[8,7]],J=H?[[0,1,3,2,17,18,19],[4,5,6,14,8,7,15,16]]:[[0,1,3,2],[4,5,6,8,7]];
A.N$Sut(G,1,{
"default":I,
landscape:J
});
};
L.N$Aut=function($,D){
var F=$[A],G=$[B],H=$[E];
if(D){
var I=D[A],J=D[B],K=D[E];
if(F==I&&G==J&&H==K)return!1;
}
if(!C._c.N$r8.N$s4(H,G))return!1;
return!0;
};
L.N$not=function(A){
var D,E,F=this;
this.N$wut();
var G=(D=this.N$qit())&&D.N$alt(H),K=(E=new C._c.N$Nrt())&&E.init();
K&&K.N$Mrt(C._c.N$Jn.N$ir(I,J));
K&&K.N$Drt(G);
$.each(this.N$kmt(A),function($){
K&&K.N$Brt($,0);
});
F.N$kut(K);
F.N$Evt=A[B];
};
L.N$mut=function(A){
var B,D=(B=new C._c.N$jr())&&B.N$Qr(2);
$.each(this.N$kmt(A),function($){
D&&D.N$oi($+48,0,1);
});
return D;
};
return M;
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
var A="Pitch",B="ActiveTags",E="UseReference",F="ReferenceNote",G="AnyOctave";
C._registerClass("N$Lmt","N$Nft",function(A,D){
function H(){
C._c.N$Nft.call(this);
this.constructor=H;
this.N$_id=++C._id;
}
A.N$Zot=function(){
return"Keyboard Ear Training";
};
D.N$tut=function(){
return"ear-keyboard";
};
A.N$ult=function(){
var $,A=($=new C._c.N$Eht())&&$.init();
A&&A.N$Qht("ear-keyboard");
A&&A.N$cpt([0,1,2,3,4,5,6,7,8,9,10,11],B);
A&&A.N$fpt(F,E);
A&&A.N$hpt([1e3,750,500,333,250,125],"Speed");
A&&A.N$upt();
A&&A.N$apt();
A&&A.N$spt(G);
A&&A.N$hpt([0,1,2,3],"CorrectAnswerStyle");
A&&A.N$ppt();
A&&A.N$dpt();
A&&A.N$vpt();
return A;
};
D.N$ilt=function(){
var A,D,H,I,J,K=this,L=(A=new C._c.N$Dlt())&&A.N$Mlt(B);
L&&L.N$Plt("Keys");
L&&L.N$Blt(1);
L&&L.N$jlt([0,2,4,5,7,9,11]);
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(0));
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(1));
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(2));
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(3));
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(4));
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(5));
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(6));
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(7));
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(8));
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(9));
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(10));
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(11));
$.each(L&&L.N$Gat(),function($){
var A=$&&$.N$Wn(),B=C._c.N$i8.N$T8(A,0,0,!1),D=C._c.N$i8.N$S8(A,0,0,!1),E=C._c.N$i8.N$x8(A,0,0,!1);
$&&$.N$Nlt(E);
$&&$.N$Tlt("musictype:"+D);
$&&$.N$zrt(B);
});
K.N$Wlt(L);
K.N$slt();
var M=(D=new C._c.N$Dlt())&&D.N$Mlt(E);
M&&M.N$Plt("Reference Note");
M&&M.N$Blt(0);
M&&M.N$Hlt(3);
M&&M.N$jlt(!0);
M&&M.N$Rlt(C._c.N$Ilt.N$Qat(0));
M&&M.N$Rlt(C._c.N$Ilt.N$Qat(1));
K.N$Wlt(M);
var N=(H=new C._c.N$Dlt())&&H.N$Mlt(F);
N&&N.N$Plt("Pitch");
N&&N.N$Blt(4);
N&&N.N$Hlt(2);
N&&N.N$jlt(60);
K.N$Wlt(N);
K.N$slt();
K.N$bct(16);
K.N$slt();
K.N$bct(6);
K.N$bct(7);
var O=C._c.N$Nft.N$rlt(2);
(I=K.N$tft(O))&&I.N$jlt(C._c.N$Jn.N$ir(60,72));
var P=(J=new C._c.N$Dlt())&&J.N$Mlt(G);
P&&P.N$Plt("Require Octave");
P&&P.N$Hlt(4);
P&&P.N$Blt(0);
P&&P.N$jlt(1);
P&&P.N$Rlt(C._c.N$Ilt.N$Qat(0));
P&&P.N$Rlt(C._c.N$Ilt.N$Qat(1));
K.N$slt();
K.N$Wlt(P);
K.N$slt();
K.N$bct(12);
$.each(K.N$Nct(7),function($){
$&&$.N$Edt("Range determines the available pitches for the question note.");
});
};
D.N$Amt=function($,A){
var B=$;
if(!A||!A.N$fr($))for(var C=$,D=$,E=0;10>E;E++){
C+=12;
D-=12;
if(A&&A.N$fr(D)){
B=D;
break;
}
if(A&&A.N$fr(C)){
B=C;
break;
}
}
return B;
};
D.N$Omt=function(){
var $=this.N$Slt(),A=C._c.N$ti.N$ei($),B=this.N$tft(F),D=B&&B.N$Vat(),E=A&&A.N$mi();
if(!E||!E.N$fr(D)){
var G=this.N$Amt(D,A&&A.N$mi());
B&&B.N$jlt(G);
B&&B.N$Fct();
}
B&&B.N$Ylt($);
};
D.N$Ivt=function(){
var $=this.N$tft(E),A=this.N$tft(F),B=$&&$.N$Vat();
this.N$wlt(A,!B);
};
D.N$mlt=function($){
var A=$&&$.N$Tct(),B=$&&$.N$ylt();
6==A?this.N$Omt():B==E&&this.N$Ivt();
};
return H;
});
C._registerClass("N$Mmt","N$dit",function(H,I){
function J(){
C._c.N$dit.call(this);
this.N$Dmt=this.N$Pmt=this.N$Hmt=this.N$Bmt=null;
this.N$lvt=this.N$jmt=this.N$Fmt=this.N$Imt=0;
this.N$hvt=this.N$qmt=this.N$Rmt=!1;
this.constructor=J;
this.N$_id=++C._id;
}
H.N$Git=function(){
return C._c.N$Lmt;
};
I.N$Umt=function($){
var A,B,D=(A=new C._c.N$jr())&&A.N$Qr((B=this.N$qit())&&B.N$Slt());
D&&D.N$oi($,0,this.N$Imt);
return D;
};
I.N$zmt=function($,A){
var B=[];
if(A)for(var C=0;128>=C;C++)C%12==$%12&&B.push(C);else B.push($);
return B;
};
I.N$Wmt=function(){
var $;
this.N$Hst(2009,{
"question-sequence":($=this.N$vut())&&$.N$ar(),
"reference-sequence":this.N$Bmt&&this.N$Bmt.N$ar(),
"reference-label":this.N$Hmt,
"reference-ax-label":this.N$Pmt
});
};
I.N$sut=function(){
return 5;
};
I.N$out=function(){
return 2;
};
I.N$Vot=function($){
var A=void 0;
A=this.N$qmt?$%12==this.N$jmt%12:$==this.N$jmt;
this.N$gut(A,this.N$lvt,[$]);
};
I.N$cot=function(){
var $=this.N$zmt(this.N$jmt,this.N$qmt);
this.N$Tut($);
};
I.N$aut=function($,A){
if(3011==$){
var B=A["playing"],C=A["sequence-id"];
if(C==(this.N$Bmt&&this.N$Bmt.N$Xr()))if(B){
var D=this.N$zmt(this.N$Fmt,this.N$qmt),E=this.N$Bmt&&this.N$Bmt.N$Vr();
this.N$Hst(2014,{
reference:!0,
duration:E,
object:D
});
}else if(this.N$Rmt){
this.N$Rmt=!1;
this.N$but(this.N$vut());
}
}else J.N$_super.prototype.N$aut.call(this,$,A);
};
I.N$Sot=function(){
var E,F=this,G=this.N$qit(),H=G&&G.N$Slt(),I=G&&G.N$Ict(),J=G&&G.N$alt(B),K=(E=C._c.N$Qut.N$nat(H,I))&&E.N$lr(),L=$.filter(K,function(A){
return $.includes(J,A%12);
}),M=[];
F.N$hvt=1==L.length;
F.N$Dmt=L;
F.N$hvt?M.push(5):0==L.length&&M.push(1);
F.N$cut(D({},A,L));
G&&G.N$Eot(C._c.N$Cot.N$rdt(M));
};
I.N$Lot=function(){
var A=this.N$qit(),D=A&&A.N$Slt(),H=(A&&A.N$Stt(),A&&A.N$alt(E)),I=(A&&A.N$alt(B),
A&&A.N$alt(G)),J=A&&A.N$zct(),K=A&&A.N$qct();
this.N$Eut(D);
this.N$Imt=J;
this.N$qmt=I;
this.N$lvt=K;
if(H){
this.N$Fmt=A&&A.N$alt(F);
this.N$Rmt=!0;
this.N$Bmt=this.N$Umt(this.N$Fmt);
this.N$Hmt=C._c.N$i8.N$S8(this.N$Fmt,0,0,!this.N$qmt);
this.N$Pmt=C._c.N$i8.N$T8(this.N$Fmt,0,0,!this.N$qmt);
}else{
this.N$Fmt=0;
this.N$Rmt=!1;
this.N$Bmt=null;
this.N$Hmt=null;
this.N$Pmt=null;
}
this.N$Eut(D);
if(this.N$qmt)this.N$xut(null);else{
var L=this.N$Dmt.slice(0);
H&&L.push(this.N$Fmt);
var M=C._c.N$Jn.N$ir($.min(L),$.max(L)),N=C._c.N$Qut.N$fat(M);
this.N$xut(N);
}
};
I.N$Aut=function($,B){
var C=$[A];
if(B){
var D=B[A];
if(C==D)return this.N$hvt;
}
return!0;
};
I.N$mut=function($){
return this.N$Umt($[A]);
};
I.N$not=function($){
this.N$Wmt();
this.N$jmt=$[A];
this.N$wut();
this.N$but(this.N$Rmt?this.N$Bmt:this.N$vut());
};
return J;
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
var A="MIDI",B="Interval",E="Intervals",F="HighlightStyle",G="ButtonLayout",H=0,I=24;
C._registerClass("N$Xmt","N$Nft",function($,A){
function B(){
C._c.N$Nft.call(this);
this.constructor=B;
this.N$_id=++C._id;
}
$.N$Zot=function(){
return"Keyboard Interval Identification";
};
$.N$ult=function(){
var $,A=($=new C._c.N$Eht())&&$.init();
A&&A.N$Qht("keyboard-interval");
A&&A.N$cpt([1,2,3,4,5,6,7,8,9,10,11,12],E);
A&&A.N$hpt([0,1,2,3],"CorrectAnswerStyle");
A&&A.N$hpt([0,1],F);
A&&A.N$ppt();
A&&A.N$dpt();
A&&A.N$vpt();
A&&A.N$spt(G);
return A;
};
A.N$tut=function(){
return"keyboard-interval";
};
A.N$ilt=function(){
var $,A,B,D,H,I=this,J=($=new C._c.N$Dlt())&&$.N$Mlt(E),K=[],L=function($){
var A=C._c.N$i8.N$R8($),B=C._c.N$i8.N$U8($),D=C._c.N$Ilt.N$Flt(A,$);
D&&D.N$zrt(B);
J&&J.N$Rlt(D);
K.push($);
};
J&&J.N$Plt("Intervals");
J&&J.N$Blt(1);
J&&J.N$Hlt(1);
L(1);
L(2);
L(3);
L(4);
L(5);
L(6);
L(7);
L(8);
L(9);
L(10);
L(11);
L(12);
J&&J.N$jlt(K);
I.N$slt();
I.N$Wlt(J);
var M=(A=new C._c.N$Dlt())&&A.N$Mlt(G);
M&&M.N$Plt("Button Layout");
M&&M.N$Blt(0);
M&&M.N$jlt(0);
M&&M.N$Hlt(0);
M&&M.N$slt();
M&&M.N$Rlt(C._c.N$Ilt.N$Flt("Default",0));
(B=M&&M.N$tlt())&&B.N$fct("Use more rows with wider buttons.");
M&&M.N$slt();
M&&M.N$Rlt(C._c.N$Ilt.N$Flt("Alternate",1));
(D=M&&M.N$tlt())&&D.N$fct("Use fewer rows grouped by interval quality.");
I.N$Wlt(M);
I.N$slt();
var N=(H=new C._c.N$Dlt())&&H.N$Mlt(F);
N&&N.N$Plt("Highlight Style");
N&&N.N$Hlt(0);
N&&N.N$Blt(0);
N&&N.N$jlt(1);
N&&N.N$Rlt(C._c.N$Ilt.N$Flt("Dot",1));
N&&N.N$Rlt(C._c.N$Ilt.N$Flt("Entire Key",0));
I.N$Wlt(N);
I.N$slt();
I.N$bct(11);
};
return B;
});
C._registerClass("N$Vmt","N$dit",function(J,K){
function L(){
C._c.N$dit.call(this);
this.N$pmt=null;
this.N$lvt=this.N$Evt=0;
this.constructor=L;
this.N$_id=++C._id;
}
J.N$Git=function(){
return C._c.N$Xmt;
};
K.N$kmt=function($){
var C=$[A],D=$[B];
C+D>I&&(C-=12);
return[C,C+D];
};
K.N$sut=function(){
return 2;
};
K.N$out=function(){
return 1;
};
K.N$Vot=function($){
this.N$gut($==this.N$Evt,this.N$lvt,[$]);
};
K.N$cot=function(){
this.N$Tut([this.N$Evt]);
};
K.N$Sot=function(){
var $,F,G=this.N$qit(),J=G&&G.N$alt(E),K=(F=C._c.N$Jn.N$ir(H,I))&&F.N$lr();
this.N$cut(($={},D($,A,K),D($,B,J),$));
this.N$pmt=J;
};
K.N$Lot=function(){
var A=this.N$qit(),B=(A&&A.N$alt(G))>0,D=[];
this.N$lvt=A&&A.N$qct();
2==this.N$lvt&&this.N$Eut(2);
for(var E=0;13>=E;E++){
var F=C._c.N$i8.N$I8(E),H=C._c.N$i8.N$q8(E),I=C._c.N$i8.N$U8(E),J=C._c.N$Qut.N$oat(E);
B||(0===E||6==E||12==E)&&(H=C._c.N$i8.N$R8(E));
D.push({
title:H,
ax:I,
symbol:F,
tag:E,
active:$.includes(this.N$pmt,E),
shortcut:J
});
}
var K=void 0,L=void 0,M=$.includes(this.N$pmt,12);
if(B){
var N=[2,4,5,7,9,11],O=[1,3,null,6,8,10];
if(M){
N.push(12);
O.push(null);
}
K=L=[N,O];
}else{
K=[[1,2,3,4],[5,6,7],[8,9,10,11]];
M&&K.push([null,12,null]);
L=[[0,1,2,3,4,5,6],[7,8,9,10,11,12,13]];
}
this.N$Sut(D,1,{
"default":K,
landscape:L
});
};
K.N$Aut=function($,C){
var D=$[A],E=$[B];
if(C){
var F=C[A],G=C[B];
if(D==F&&E==G)return!1;
}
return!0;
};
K.N$not=function(A){
var D,E,G=this;
this.N$wut();
var J=(D=this.N$qit())&&D.N$alt(F),K=(E=new C._c.N$Nrt())&&E.init();
K&&K.N$Mrt(C._c.N$Jn.N$ir(H,I));
K&&K.N$Drt(J);
$.each(this.N$kmt(A),function($){
K&&K.N$Brt($,0);
});
G.N$kut(K);
G.N$Evt=A[B];
};
K.N$mut=function(A){
var B,D=(B=new C._c.N$jr())&&B.N$Qr(2);
$.each(this.N$kmt(A),function($){
D&&D.N$oi($+48,0,1);
});
return D;
};
return L;
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
var A="MIDI",B="HighlightStyle",E=24;
C._registerClass("N$Jmt","N$Nft",function($,A){
function D(){
C._c.N$Nft.call(this);
this.constructor=D;
this.N$_id=++C._id;
}
$.N$Zot=function(){
return"Keyboard Note Identification";
};
$.N$ult=function(){
var $,A=($=new C._c.N$Eht())&&$.init();
A&&A.N$Qht("keyboard");
A&&A.N$cpt([6,16,36,46,56,5,15,25,35,45,55,65,14,24,44,54,64,26,66,4,34],"Note");
A&&A.N$hpt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"NoteNameStyle");
A&&A.N$hpt([0,1,2,3],"CorrectAnswerStyle");
A&&A.N$hpt([0,1],B);
A&&A.N$ppt();
A&&A.N$dpt();
A&&A.N$vpt();
A&&A.N$Dht(function($,A){
A.length<=7&&A.splice(4,0,0);
});
return A;
};
A.N$tut=function(){
return"keyboard";
};
A.N$ilt=function(){
var $;
this.N$bct(17);
this.N$slt();
var A=($=new C._c.N$Dlt())&&$.N$Mlt(B);
A&&A.N$Plt("Highlight Style");
A&&A.N$Hlt(0);
A&&A.N$Blt(0);
A&&A.N$jlt(1);
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Dot",1));
A&&A.N$Rlt(C._c.N$Ilt.N$Flt("Entire Key",0));
this.N$Wlt(A);
this.N$slt();
this.N$bct(5);
this.N$slt();
this.N$bct(11);
};
return D;
});
C._registerClass("N$Kmt","N$dit",function(F,G){
function H(){
C._c.N$dit.call(this);
this.N$Rvt=null;
this.N$lvt=this.N$Evt=this.N$Hnt=0;
this.constructor=H;
this.N$_id=++C._id;
}
F.N$Git=function(){
return C._c.N$Jmt;
};
G.N$sut=function(){
return 2;
};
G.N$out=function(){
return 1;
};
G.N$Vot=function($){
var A,B=(A=new C._c.N$Kt())&&A.N$vn($,4),D=(B&&B.N$Ln())%12==this.N$Evt;
this.N$gut(D,this.N$lvt,[$]);
};
G.N$cot=function(){
var A=this,B=[];
$.each(this.N$Rvt,function($){
var D=C._c.N$Kt.N$dn($,4);
(D&&D.N$Ln())%12==A.N$Evt&&B.push($);
});
A.N$Tut(B);
};
G.N$Sot=function(){
var B=this,F=this.N$qit(),G=F&&F.N$Wct(),H=[],I=[];
$.each(G,function($){
var A,B=(A=new C._c.N$Kt())&&A.N$vn($,4),D=B&&B.N$Ln();
I[D%12]=!0;
});
for(var J=0;12>J;J++)if(I[J])for(var K=J;E>=K;K+=12)H.push(K);
B.N$cut(D({},A,H));
B.N$Rvt=G;
};
G.N$Lot=function(){
var A=this,B=this.N$qit(),D=B&&B.N$Stt(),E=B&&B.N$qct();
this.N$lvt=E;
this.N$Hnt=D;
2==E&&this.N$Eut(2);
var F=$.map(C._c.N$Qut.N$Gut(),function(B){
var E=C._c.N$i8.N$a8(B,D),F=C._c.N$i8.N$f8(B,D),G=C._c.N$Qut.N$iat(B);
return{
title:E,
ax:F,
tag:B,
active:$.includes(A.N$Rvt,B),
shortcut:G
};
}),G=C._c.N$Qut.N$Yut(D,A.N$Rvt);
A.N$Sut(F,0,{
"default":G
});
};
G.N$Aut=function($,B){
var C=$[A];
if(B&&C==B[A])return!1;
return!0;
};
G.N$not=function($){
var D,F,G=$[A];
this.N$wut();
var H=(D=this.N$qit())&&D.N$alt(B),I=(F=new C._c.N$Nrt())&&F.init();
I&&I.N$Mrt(C._c.N$Jn.N$ir(0,E));
I&&I.N$Drt(H);
I&&I.N$Brt(G,0);
this.N$kut(I);
this.N$Evt=G%12;
};
G.N$mut=function($){
var B,D=$[A],E=(B=new C._c.N$jr())&&B.N$Qr(2);
E&&E.N$oi(D+48,0,1);
return E;
};
return H;
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
var A="Accidentals",B="AnyOctave",E="Helpers",F="Positions",G="UsesNoteFilter",H="PairIndex",I="KeySignature",J="NoteQuality";
C._registerClass("N$Qmt","N$Nft",function(D,H){
function I(){
C._c.N$Nft.call(this);
this.constructor=I;
this.N$_id=++C._id;
}
D.N$Zot=function(){
return"Keyboard Reverse Identification";
};
D.N$ult=function(){
var D,H=(D=new C._c.N$Eht())&&D.init(),I=$.without(C._c.N$Qut.N$Gut(),66);
H&&H.N$Qht("keyboard-reverse");
H&&H.N$Ght();
H&&H.N$tpt();
H&&H.N$cpt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],"KeySignature");
H&&H.N$mpt(function(B,C,D){
var E=C[A],F=C[G],H=C["Note"],J=F&&$.includes(H,66);
D&&D.N$Vpt((E?1:0)|(F?16:0)|(J?8:0));
F&&D&&D.N$Xpt(I,H);
},function($,B,C){
var D=C&&C.N$Fpt(),E=(1&D)>0,F=(16&D)>0,H=(8&D)>0,J=[];
if(F){
J=C&&C.N$jpt(I);
H&&J.push(66);
}
B[A]=E?1:0;
B[G]=F?1:0;
B["Note"]=J;
});
H&&H.N$spt(B);
H&&H.N$hpt([0,1,2,3],"CorrectAnswerStyle");
H&&H.N$ppt();
H&&H.N$dpt();
H&&H.N$vpt();
H&&H.N$hpt([0,1,2],F);
H&&H.N$mpt(function($,A,B){
var C=A[E];
if(C>0){
B&&B.N$zvt(!0);
B&&B.N$Vpt(C-1);
}else{
B&&B.N$zvt(!1);
B&&B.N$Vpt(0);
}
},function($,A,B){
var C=B&&B.N$Ft(),D=B&&B.N$Fpt();
C&&(A[E]=D+1);
});
H&&H.N$Dht(function($,A){
if(A.length<=8){
var B=A[0];
0===B?A.splice(0,1,1):1==B?A.splice(0,1,2):2==B?A.splice(0,1,4):3==B?A.splice(0,1,8):4==B?A.splice(0,1,16,1):5==B?A.splice(0,1,16,2):6==B&&A.splice(0,1,16,4);
}
});
return H;
};
H.N$tut=function(){
return"keyboard-reverse";
};
H.N$ilt=function(){
var $,D,H,I,J,K,L;
this.N$bct(2);
this.N$slt();
this.N$bct(4);
var M=($=new C._c.N$Dlt())&&$.N$Mlt(F);
M&&M.N$Plt("Positions");
M&&M.N$Hlt(0);
M&&M.N$Blt(0);
M&&M.N$jlt(0);
M&&M.N$Rlt(C._c.N$Ilt.N$Flt("Lines and Spaces",0));
M&&M.N$slt();
M&&M.N$Rlt(C._c.N$Ilt.N$Flt("Lines Only",1));
M&&M.N$Rlt(C._c.N$Ilt.N$Flt("Spaces Only",2));
this.N$Wlt(M);
this.N$slt();
this.N$bct(14);
(D=this.N$xct(14))&&D.N$jlt([0]);
var N=(H=new C._c.N$Dlt())&&H.N$Mlt(B);
N&&N.N$Plt("Require Octave");
N&&N.N$Hlt(4);
N&&N.N$Blt(0);
N&&N.N$jlt(1);
N&&N.N$Rlt(C._c.N$Ilt.N$Qat(0));
N&&N.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$slt();
this.N$Wlt(N);
var O=(I=new C._c.N$Dlt())&&I.N$Mlt(E);
O&&O.N$Plt("Helpers");
O&&O.N$Hlt(0);
O&&O.N$Blt(0);
O&&O.N$jlt(0);
var P=C._c.N$Ilt.N$Flt("Off",0),Q=C._c.N$Ilt.N$Flt("Letters",1),R=C._c.N$Ilt.N$uht("Solf&egrave;ge (Fixed, Do-Si)","Fixed Do-Si",2),S=C._c.N$Ilt.N$uht("Solf&egrave;ge (Fixed, Do-Ti)","Fixed Do-Ti",3),T=C._c.N$Ilt.N$uht("Solf&egrave;ge (Fixed, Ut-Si)","Fixed Ut-Si",4),U=C._c.N$Ilt.N$uht("Solf&egrave;ge (Fixed, Ut-Ti)","Fixed Ut-Ti",5),V=C._c.N$Ilt.N$Flt("German",15);
R&&R.N$zrt("Soulfedge Fixed Doe See");
S&&S.N$zrt("Soulfedge Fixed Doe Tea");
T&&T.N$zrt("Soulfedge Fixed Oot See");
U&&U.N$zrt("Soulfedge Fixed Oot Tea");
R&&R.N$Ult("Fixed Doe See");
S&&S.N$Ult("Fixed Doe Tea");
T&&T.N$Ult("Fixed Oot See");
U&&U.N$Ult("Fixed Oot Tea");
O&&O.N$Rlt(P);
O&&O.N$slt();
O&&O.N$Rlt(Q);
O&&O.N$slt();
O&&O.N$Rlt(R);
O&&O.N$Rlt(S);
O&&O.N$Rlt(T);
O&&O.N$Rlt(U);
O&&O.N$slt();
O&&O.N$Rlt(V);
this.N$slt();
this.N$Wlt(O);
this.N$slt();
var W=(J=new C._c.N$Dlt())&&J.N$Mlt(A);
W&&W.N$Plt("Accidentals");
W&&W.N$Hlt(3);
W&&W.N$Blt(0);
W&&W.N$jlt(1);
W&&W.N$Rlt(C._c.N$Ilt.N$Qat(0));
W&&W.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$Wlt(W);
var X=(K=new C._c.N$Dlt())&&K.N$Mlt(G);
X&&X.N$Plt("Note Filter");
X&&X.N$Hlt(3);
X&&X.N$Blt(0);
X&&X.N$jlt(0);
X&&X.N$Rlt(C._c.N$Ilt.N$Qat(0));
X&&X.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$slt();
this.N$Wlt(X);
this.N$bct(17);
(L=this.N$xct(17))&&L.N$jlt(C._c.N$Qut.N$Gut());
this.N$slt();
this.N$bct(11);
};
H.N$Ivt=function(){
var $=this.N$tft("Note"),A=this.N$alt(G);
this.N$wlt($,!A);
};
H.N$mlt=function($){
($&&$.N$ylt())==G&&this.N$Ivt();
};
return I;
});
C._registerClass("N$Gmt","N$dit",function(K,L){
function M(){
C._c.N$dit.call(this);
this.N$Rvt=this.N$Ymt=this.N$Ktt=this.N$Zmt=this.N$egt=null;
this.N$lvt=this.N$Evt=0;
this.N$hvt=this.N$qmt=!1;
this.constructor=M;
this.N$_id=++C._id;
}
K.N$Git=function(){
return C._c.N$Qmt;
};
L.N$tgt=function($){
var A,B,D=$[H],E=$[I],F=$[J],G=this.N$Ymt[D],K=G.clef,L=G.position;
return void 0!==F?(A=new C._c.N$Kt())&&A.N$En(K,L,F):(B=new C._c.N$Kt())&&B.N$xn(K,L,E);
};
L.N$sut=function(){
return 1;
};
L.N$out=function(){
return 2;
};
L.N$Vot=function($){
var A=void 0;
A=this.N$qmt?$%12==this.N$Evt%12:$==this.N$Evt;
this.N$gut(A,this.N$lvt,[$]);
};
L.N$cot=function(){
var $=[];
if(this.N$qmt)for(var A=0;128>=A;A++)A%12==this.N$Evt%12&&$.push(A);else $.push(this.N$Evt);
this.N$Tut($);
};
L.N$Sot=function(){
var K,L,M,N=this,O=this.N$qit(),P=(O&&O.N$cat(),O&&O.N$Rct()),Q=O&&O.N$alt(A),R=O&&O.N$alt(F),S=[],T=O&&O.N$alt(G)?O&&O.N$alt("Note"):null,U=[],V=C._c.N$Qut.N$lat(O,R,null);
if(Q>0){
U.push(-1);
U.push(0);
U.push(1);
}
(L=this.N$Rit())&&L.N$hut(V.length?(K={},D(K,H,V.length),D(K,I,P),D(K,J,U),K):null);
this.N$Ymt=V;
this.N$lvt=O&&O.N$qct();
this.N$hvt=1==V.length&&1==P.length&&U.length<2;
0==V.length?S.push(18):this.N$hvt&&S.push(4);
this.N$egt=O&&O.N$wrt();
var W=O&&O.N$alt(E);
if(W){
this.N$Ktt=(M=new C._c.N$Pnt())&&M.init();
this.N$Ktt&&this.N$Ktt.N$jnt(W-1);
this.N$Ktt&&this.N$Ktt.N$Fnt(R);
}else this.N$Ktt=null;
this.N$qmt=O&&O.N$alt(B);
this.N$Rvt=T;
if(this.N$qmt)this.N$Zmt=null;else{
var X=[];
$.each(O&&O.N$cat(),function($){
var A=O&&O.N$hat($),B=C._c.N$Kt.N$Tn($,A&&A.N$rr(),0),D=C._c.N$Kt.N$Tn($,A&&A.N$nr(),0),E=C._c.N$Jn.N$ir(B&&B.N$Ln(),D&&D.N$Ln());
X.push(E);
});
var Y=C._c.N$Jn.N$tr(X);
N.N$Zmt=C._c.N$Qut.N$fat(Y);
}
O&&O.N$Eot(C._c.N$Cot.N$rdt(S));
};
L.N$Lot=function(){
this.N$qit();
2==this.N$lvt&&this.N$Eut(2);
this.N$xut(this.N$Zmt);
};
L.N$Aut=function(A,B,D){
var E,F,G=A[H],K=A[I],L=A[J];
if(B){
var M=B[H],N=B[I],O=B[J];
if(G==M&&K==N&&L==O){
if(D>.5){
this.N$hvt=!0;
0==$.size((E=this.N$qit())&&E.N$xot())&&(F=this.N$qit())&&F.N$Eot([C._c.N$Cot.N$Not(4)]);
}
if(!this.N$hvt)return!1;
}
}
if(!this.N$qmt||this.N$Rvt){
var P=this.N$tgt(A);
if(!(this.N$qmt||this.N$Zmt&&this.N$Zmt.N$fr(P&&P.N$Ln())))return!1;
if(this.N$Rvt&&!$.includes(this.N$Rvt,P&&P.N$Wn()))return!1;
}
return!0;
};
L.N$not=function($){
var A,B=$[H],D=$[I],E=this.N$Ymt[B],F=this.N$tgt($);
this.N$Evt=F&&F.N$Ln();
var G=(A=new C._c.N$Xtt())&&A.init();
G&&G.N$tnt(E.clef);
G&&G.N$nnt(D);
G&&G.N$unt(this.N$Ktt);
G&&G.N$fnt(15.5);
G&&G.N$lnt(this.N$egt);
G&&G.N$pnt([F]);
this.N$wut();
this.N$Cut(G);
};
L.N$mut=function($){
var A,B=this.N$tgt($),D=(A=new C._c.N$jr())&&A.N$Qr(2);
D&&D.N$oi(B&&B.N$Ln(),0,1);
return D;
};
return M;
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
var A="Scale",B="Filter",E="HighlightStyle",F="PairIndexKey",G=0,H=24;
C._registerClass("N$ngt","N$Nft",function($,D){
function F(){
C._c.N$Nft.call(this);
this.constructor=F;
this.N$_id=++C._id;
}
$.N$Zot=function(){
return"Keyboard Scale Identification";
};
$.N$ult=function(){
var $,D=($=new C._c.N$Eht())&&$.init(),F=C._c.N$Qut.N$Gut(),G=[7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7];
D&&D.N$Qht("keyboard-scale");
D&&D.N$cpt([0,10,11,12,20,21,22,23,24,25,26],A);
D&&D.N$mpt(function($,A,C){
if(1==A[B]){
C&&C.N$zvt(!0);
C&&C.N$Xpt(F,A["Note"]);
}else{
C&&C.N$zvt(!1);
C&&C.N$Xpt(G,A["KeySignature"]);
}
},function($,A,C){
if(C&&C.N$Ft()){
A[B]=1;
A["Note"]=C&&C.N$jpt(F);
}else{
A[B]=0;
A["KeySignature"]=C&&C.N$jpt(G);
}
});
D&&D.N$hpt([0,1,2,3],"CorrectAnswerStyle");
D&&D.N$hpt([0,1],E);
D&&D.N$ppt();
D&&D.N$dpt();
D&&D.N$vpt();
return D;
};
D.N$tut=function(){
return"keyboard-scale";
};
D.N$ilt=function(){
var $,D,F,G,H,I=this;
function J($){
var A=C._c.N$i8.N$b8($);
return C._c.N$Ilt.N$Flt(A,$);
}
var K=($=new C._c.N$Dlt())&&$.N$Mlt(A);
K&&K.N$Plt("Scales");
K&&K.N$Blt(1);
K&&K.N$Hlt(1);
K&&K.N$jlt([0,10,11,12]);
K&&K.N$Rlt(J(0));
K&&K.N$Rlt(J(10));
K&&K.N$Rlt(J(11));
K&&K.N$Rlt(J(12));
K&&K.N$slt();
K&&K.N$Rlt(J(20));
K&&K.N$Rlt(J(21));
K&&K.N$Rlt(J(22));
K&&K.N$Rlt(J(23));
K&&K.N$Rlt(J(24));
K&&K.N$Rlt(J(25));
K&&K.N$Rlt(J(26));
I.N$slt();
I.N$Wlt(K);
var L=(D=new C._c.N$Dlt())&&D.N$Mlt(B);
L&&L.N$Plt("Filter");
L&&L.N$Blt(0);
L&&L.N$Hlt(0);
L&&L.N$jlt(0);
L&&L.N$Rlt(C._c.N$Ilt.N$Flt("By Key Signature",0));
L&&L.N$Rlt(C._c.N$Ilt.N$Flt("By Tonic",1));
I.N$slt();
I.N$Wlt(L);
I.N$bct(14);
(F=I.N$xct(14))&&F.N$jlt([-3,-2,-1,0,1,2,3]);
I.N$bct(17);
(G=I.N$xct(17))&&G.N$Plt("Tonics");
I.N$slt();
var M=(H=new C._c.N$Dlt())&&H.N$Mlt(E);
M&&M.N$Plt("Highlight Style");
M&&M.N$Hlt(0);
M&&M.N$Blt(0);
M&&M.N$jlt(1);
M&&M.N$Rlt(C._c.N$Ilt.N$Flt("Dot",1));
M&&M.N$Rlt(C._c.N$Ilt.N$Flt("Entire Key",0));
I.N$Wlt(M);
I.N$slt();
I.N$bct(11);
};
D.N$mlt=function($){
var A=$&&$.N$ylt();
if(A==B){
var C=0==this.N$alt(B);
this.N$wlt(this.N$tft("KeySignature"),!C);
this.N$wlt(this.N$tft("Note"),C);
}
};
return F;
});
C._registerClass("N$rgt","N$dit",function(I,J){
function K(){
C._c.N$dit.call(this);
this.N$igt=this.N$Xvt=null;
this.N$lvt=this.N$Evt=0;
this.constructor=K;
this.N$_id=++C._id;
}
I.N$Git=function(){
return C._c.N$ngt;
};
J.N$Vvt=function(){
return[0,10,11,12,20,21,22,23,24,25,26];
};
J.N$sut=function(){
return 2;
};
J.N$out=function(){
return 1;
};
J.N$Vot=function($){
var A=C._c.N$M9.N$q9($,this.N$Evt);
this.N$gut(A,this.N$lvt,[$]);
};
J.N$cot=function(){
var A=this,B=[];
$.each(this.N$Vvt(),function($){
C._c.N$M9.N$q9($,A.N$Evt)&&B.push($);
});
A.N$Tut(B);
};
J.N$Sot=function(){
var E=this,G=this.N$qit(),H=G&&G.N$Rct(),I=G&&G.N$Wct(),J=G&&G.N$alt(A),K=G&&G.N$alt(B),L=[],M=C._c.N$Qut.N$pat(J,K,H,I),N={};
$.each(M,function($){
var A,B=C._c.N$M9.N$F9($.scale),D=((A=C._c.N$Kt.N$dn($.tonic,0))&&A.N$Ln())%12;
N[D+","+B]={
s:B,
m:D
};
});
1==K&&0==M.length&&L.push(17);
var O=$.values(N);
1==O.length?L.push(10):0==O.length&&L.push(1);
E.N$Xvt=O;
E.N$cut(D({},F,O.length));
G&&G.N$Eot(C._c.N$Cot.N$rdt(L));
};
J.N$Lot=function(){
var B=this,D=this.N$qit(),E=D&&D.N$alt(A),F=D&&D.N$qct();
2==F&&this.N$Eut(2);
this.N$lvt=F;
var G=[],H=!1,I=!1,J=!1;
$.each(E,function($){
0==$||10==$?H=!0:11==$||12==$?I=!0:J=!0;
});
$.each(B.N$Vvt(),function(A){
var B=C._c.N$i8.N$b8(A);
G.push({
title:B,
tag:A,
active:$.includes(E,A)
});
});
var K=null,L=null;
if(!H||I||J){
var M=[];
H&&M.push([0,10]);
I&&M.push([11,12]);
if(J){
M.push([20,21,22,23]);
M.push([24,25,26]);
}
K=M;
}else{
K=[[0],[10]];
L=[[0,10]];
}
B.N$Sut(G,0,{
"default":K,
landscape:L
});
};
J.N$Aut=function($,A){
var B=$[F];
if(A){
var C=A[F];
if(B==C)return!1;
}
return!0;
};
J.N$not=function(A){
var B,D,I,J,K=this;
this.N$wut();
var L=(B=this.N$qit())&&B.N$alt(E),M=A[F],N=this.N$Xvt[M],O=N.s,P=(D=new C._c.N$Kt())&&D.N$pn(N.m),Q=(I=new C._c.N$M9())&&I.N$V7(O),R=$.map(Q&&Q.N$W9(P,0),function($){
return $&&$.N$Ln();
}),S=(J=new C._c.N$Nrt())&&J.init();
S&&S.N$Mrt(C._c.N$Jn.N$ir(G,H));
S&&S.N$Drt(L);
var T=0;
$.each(R,function($){
S&&S.N$Brt($,T++);
});
K.N$kut(S);
K.N$Evt=O;
K.N$igt=R;
};
J.N$mut=function(){
var A,B=(A=new C._c.N$jr())&&A.N$Qr(2);
$.each(this.N$igt,function($){
B&&B.N$si($+48,.33);
});
return B;
};
return K;
});
}();
!function(){
"use strict";
var A="PairIndex",B="KeySignature",D="NoteQuality",E="RangeSeed",F="QuestionMode",G="Positions",H="AccidentalMode",I="UsesNoteFilter",J="OctaveStyle",K="Helpers",L="ResetAnswer",M="Leniency";
C._registerClass("N$sgt","N$Nft",function(A,B){
function D(){
C._c.N$Nft.call(this);
this.constructor=D;
this.N$_id=++C._id;
}
A.N$Zot=function(){
return"Note Construction";
};
A.N$ult=function(){
var A,B=(A=new C._c.N$Eht())&&A.init(),D=$.without(C._c.N$Qut.N$Gut(),66);
B&&B.N$Qht("note-construction");
B&&B.N$Ght();
B&&B.N$tpt();
B&&B.N$cpt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],"KeySignature");
B&&B.N$hpt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"NoteNameStyle");
B&&B.N$mpt(function($,A,B){
var C=A[F];
2==C?B&&B.N$Vpt(A[J]+10):B&&B.N$Vpt(C);
},function($,A,B){
var C=B&&B.N$Fpt(),D=void 0,E=void 0;
if(C>=10){
D=2;
E=C-10;
}else D=C;
0!=D&&1!=D&&2!=D&&(D=0);
1!=E&&3!=E&&4!=E&&5!=E&&(E=4);
A[J]=E;
A[F]=D;
});
B&&B.N$hpt([0,1,2],G);
B&&B.N$spt(K);
B&&B.N$mpt(function(A,B,C){
var E=B[H],F=B[I],G=B["Note"];
2==E&&(F=!1);
var J=F&&$.includes(G,66);
C&&C.N$Vpt(E|(F?16:0)|(J?8:0));
F&&C&&C.N$Xpt(D,G);
},function($,A,B){
var C=B&&B.N$Fpt(),E=3&C,F=(16&C)>0,G=(8&C)>0,J=[];
if(F){
J=B&&B.N$jpt(D);
G&&J.push(66);
}
A[H]=E;
A[I]=F?1:0;
A["Note"]=J;
});
B&&B.N$spt(L);
B&&B.N$hpt([0,1,2,3],"CorrectAnswerStyle");
B&&B.N$ppt();
B&&B.N$dpt();
B&&B.N$vpt();
B&&B.N$hpt([0,1,2],M);
return B;
};
B.N$tut=function(){
return"note-construction";
};
B.N$ilt=function(){
var $,A,B,D,E,N,O,P,Q,R,S,T,U,V,W,X,Y,Z;
this.N$bct(2);
this.N$slt();
this.N$bct(4);
var _=($=new C._c.N$Dlt())&&$.N$Mlt(G);
_&&_.N$Plt("Positions");
_&&_.N$Hlt(0);
_&&_.N$Blt(0);
_&&_.N$jlt(0);
_&&_.N$Rlt(C._c.N$Ilt.N$Flt("Lines and Spaces",0));
_&&_.N$slt();
_&&_.N$Rlt(C._c.N$Ilt.N$Flt("Lines Only",1));
_&&_.N$Rlt(C._c.N$Ilt.N$Flt("Spaces Only",2));
this.N$Wlt(_);
this.N$slt();
this.N$bct(14);
(A=this.N$xct(14))&&A.N$jlt([0]);
this.N$slt();
this.N$wct(5,[0,15,1,2,3,4,13,5,12,9,10,14]);
var a=(B=new C._c.N$Dlt())&&B.N$Mlt(K);
a&&a.N$Plt("Helpers");
a&&a.N$Hlt(3);
a&&a.N$Blt(0);
a&&a.N$jlt(0);
a&&a.N$Rlt(C._c.N$Ilt.N$Qat(0));
a&&a.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$slt();
this.N$Wlt(a);
this.N$slt();
var b=(D=new C._c.N$Dlt())&&D.N$Mlt(F);
b&&b.N$Plt("Question Mode");
b&&b.N$Blt(0);
b&&b.N$Hlt(0);
b&&b.N$jlt(0);
b&&b.N$slt();
b&&b.N$Rlt(C._c.N$Ilt.N$Flt("Any Octave",0));
(E=b&&b.N$tlt())&&E.N$fct("Select the staff position and accidentals for the specified note.  Any octave is acceptable.");
b&&b.N$slt();
b&&b.N$Rlt(C._c.N$Ilt.N$Flt("Highlighted Range",1));
(N=b&&b.N$tlt())&&N.N$fct("Select the staff position and accidentals for the specified note and highlighted range.");
b&&b.N$slt();
b&&b.N$Rlt(C._c.N$Ilt.N$Flt("Specific Octave",2));
(O=b&&b.N$tlt())&&O.N$fct("Select the staff position and accidentals for the specified note and octave.");
this.N$Wlt(b);
var c=(P=new C._c.N$Dlt())&&P.N$Mlt(J);
c&&c.N$Plt("Octave Labels");
c&&c.N$Blt(0);
c&&c.N$Hlt(0);
c&&c.N$jlt(4);
c&&c.N$slt();
(Q=c&&c.N$tlt())&&Q.N$mht("Scientific Pitch Notation");
var d=C._c.N$Ilt.N$Flt("Middle C is C4",4);
d&&d.N$qlt("Middle C4");
c&&c.N$Rlt(d);
c&&c.N$slt();
(R=c&&c.N$tlt())&&R.N$mht("Alternate Notations");
var e=C._c.N$Ilt.N$Flt("Middle C is C3",3);
e&&e.N$qlt("Middle C3");
c&&c.N$Rlt(e);
var f=C._c.N$Ilt.N$Flt("Middle C is C5",5);
f&&f.N$qlt("Middle C5");
c&&c.N$Rlt(f);
var g=C._c.N$Ilt.N$Flt("C„ C‚ C c c′ c″",1);
g&&g.N$qlt("C„ c″");
c&&c.N$Rlt(g);
this.N$Wlt(c);
this.N$slt();
var h=(S=new C._c.N$Dlt())&&S.N$Mlt(H);
h&&h.N$Plt("Difficulty");
h&&h.N$Hlt(0);
h&&h.N$Blt(0);
h&&h.N$jlt(1);
var i=C._c.N$Ilt.N$Flt("Level 1",0);
i&&i.N$pct("No accidentals, diatonic notes only");
h&&h.N$Rlt(i);
var j=C._c.N$Ilt.N$Flt("Level 2",1);
j&&j.N$pct("Flats, sharps, and naturals allowed");
h&&h.N$Rlt(j);
var k=C._c.N$Ilt.N$Flt("Level 3",2);
k&&k.N$pct("All accidentals allowed");
h&&h.N$Rlt(k);
this.N$Wlt(h);
var l=(T=new C._c.N$Dlt())&&T.N$Mlt(M);
l&&l.N$Plt("Leniency");
l&&l.N$Hlt(0);
l&&l.N$Blt(0);
l&&l.N$jlt(0);
l&&l.N$slt();
l&&l.N$Rlt(C._c.N$Ilt.N$Flt("Lenient",2));
(U=l&&l.N$tlt())&&U.N$fct("Allow answers with unneeded or duplicated accidentals.");
l&&l.N$slt();
l&&l.N$Rlt(C._c.N$Ilt.N$Flt("Naturals Only",1));
(V=l&&l.N$tlt())&&V.N$fct("Only allow unneeded naturals.");
l&&l.N$slt();
l&&l.N$Rlt(C._c.N$Ilt.N$Flt("Strict",0));
(W=l&&l.N$tlt())&&W.N$fct("Disallow answers with unneeded or duplicated accidentals.");
this.N$Wlt(l);
var m=(X=new C._c.N$Dlt())&&X.N$Mlt(I);
m&&m.N$Plt("Note Filter");
m&&m.N$Hlt(3);
m&&m.N$Blt(0);
m&&m.N$jlt(0);
m&&m.N$Rlt(C._c.N$Ilt.N$Qat(0));
m&&m.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$slt();
this.N$Wlt(m);
this.N$bct(17);
(Y=this.N$xct(17))&&Y.N$jlt(C._c.N$Qut.N$Gut());
this.N$slt();
this.N$bct(11);
var n=(Z=new C._c.N$Dlt())&&Z.N$Mlt(L);
n&&n.N$Plt("Reset Answer");
n&&n.N$Hlt(3);
n&&n.N$Blt(0);
n&&n.N$jlt(0);
n&&n.N$Rlt(C._c.N$Ilt.N$Qat(0));
n&&n.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$Wlt(n);
};
B.N$Ivt=function(){
var $=this.N$tft(K),A=this.N$tft(J),B=this.N$tft(I),D=this.N$tft("Note"),E=this.N$Stt(),G=this.N$alt(F),L=2==G,M=C._c.N$r8.N$Y8(E),N=C._c.N$r8.N$Z8(E);
C._c.N$r8.N$Z8(E)&&(L=!1);
this.N$wlt(A,!L);
this.N$wlt($,M);
M&&$&&$.N$Mct(!1);
var O=2==this.N$alt(H)||M||N;
this.N$wlt(B,O);
O&&B&&B.N$Mct(!1);
var P=this.N$alt(I);
this.N$wlt(D,!P);
};
B.N$mlt=function($){
var A=$&&$.N$ylt();
(A==F||A==H||A==I||"NoteNameStyle"==A)&&this.N$Ivt();
};
return D;
});
C._registerClass("N$ogt","N$dit",function(N,O){
function P(){
C._c.N$dit.call(this);
this.N$Rvt=this.N$Ymt=this.N$Zvt=this.N$Ktt=this.N$gnt=this.N$Gtt=this.N$Lrt=null;
this.N$fvt=this.N$l4=this.N$lvt=this.N$emt=this.N$tmt=this.N$h4=this.N$Hnt=this.N$ugt=this.N$cvt=0;
this.N$hvt=!1;
this.constructor=P;
this.N$_id=++C._id;
}
N.N$Git=function(){
return C._c.N$sgt;
};
O.N$mvt=function(){
var $,A,B=0==this.N$Vit(),D=($=new C._c.N$Xtt())&&$.init();
D&&D.N$tnt(this.N$l4);
D&&D.N$nnt(this.N$h4);
D&&D.N$lnt(this.N$Lrt);
D&&D.N$hnt(2);
D&&D.N$fnt(15.5);
D&&D.N$snt(this.N$Gtt);
D&&D.N$unt(this.N$Ktt);
B&&D&&D.N$cnt(1);
var E=[(A=new C._c.N$J9())&&A.N$t8(this.N$tmt,this.N$emt)],F=C._c.N$mnt.N$Nnt(E);
F&&F.N$Ent(this.N$gnt);
D&&D.N$dnt(F);
var G=C._c.N$i8.N$m8(this.N$tmt,this.N$l4),H=void 0;
H=0==this.N$fvt?0:1==this.N$fvt?1:2;
this.N$Hst(2020,{
"accidental-type":this.N$emt,
"accidental-layout":H,
position:this.N$tmt,
"ax-label":"Position",
"ax-value":G
});
this.N$Cut(D);
};
O.N$agt=function($,A){
return C._c.N$r8.N$n4($[B],A,this.N$Hnt);
};
O.N$fgt=function($){
var B=$[E];
if(void 0===B)return null;
var D=$[A],F=this.N$Ymt[D],G=F.position,H=C._c.N$Qut.N$aat(this.N$Lrt,G,B);
H||this.N$lst("!lzR",null);
return H;
};
O.N$tgt=function($){
var E,F,G=$[A],H=$[B],I=$[D],J=this.N$Ymt[G],K=J.clef,L=J.position,M=null;
M=void 0!==I?(E=new C._c.N$Kt())&&E.N$En(K,L,I):(F=new C._c.N$Kt())&&F.N$xn(K,L,H);
return M;
};
O.N$sut=function(){
return 1;
};
O.N$out=function(){
return 3;
};
O.N$Xot=function(){
var $,A=this.N$tmt,B=this.N$Zvt;
if(0==this.N$cvt){
A=C._g.N$e(A,7);
B=C._c.N$J9.N$e8(C._g.N$e(B&&B.N$G9(),7),B&&B.N$Y9());
}
var D=C._c.N$J9.N$e8(A,this.N$emt),E=($=this.N$qit())&&$.N$alt(M),F=C._c.N$Qut.N$dat(D,B,this.N$l4,this.N$h4,E);
this.N$gut(F,this.N$lvt,null);
};
O.N$cot=function(){
this.N$tmt=this.N$Zvt&&this.N$Zvt.N$G9();
this.N$emt=this.N$Zvt&&this.N$Zvt.N$Y9();
this.N$mvt();
};
O.N$Sot=function(){
var $,L=this.N$qit(),M=(L&&L.N$cat(),L&&L.N$Rct()),N=L&&L.N$wrt(),O=L&&L.N$Stt(),P=L&&L.N$alt(H),Q=L&&L.N$alt(F),R=L&&L.N$alt(G),S=L&&L.N$alt(J),T=[],U=L&&L.N$alt(I)?L&&L.N$alt("Note"):null,V=[];
if(P>0){
V.push(-1);
V.push(0);
V.push(1);
if(P>1){
V.push(-2);
V.push(2);
U=null;
}
}else this.N$emt=-100;
var W=C._c.N$Qut.N$lat(L,R,U);
2!=Q&&(S=0);
var X={};
X[A]=W.length;
X[B]=M;
X[D]=V;
1==Q&&(X[E]=12);
this.N$cut(W.length?X:null);
this.N$Ymt=W;
this.N$fvt=P;
this.N$cvt=Q;
this.N$Hnt=O;
this.N$ugt=S;
this.N$lvt=L&&L.N$qct();
this.N$Rvt=U;
this.N$Lrt=N;
this.N$hvt=1==W.length&&1==M.length&&V.length<2;
0==W.length?T.push(18):this.N$hvt&&T.push(4);
var Y=L&&L.N$alt(K);
if(Y){
this.N$Ktt=($=new C._c.N$Pnt())&&$.init();
this.N$Ktt&&this.N$Ktt.N$jnt(O);
this.N$Ktt&&this.N$Ktt.N$Fnt(R);
}else this.N$Ktt=null;
L&&L.N$Eot(C._c.N$Cot.N$rdt(T));
};
O.N$Lot=function(){
2==this.N$lvt&&this.N$Eut(2);
};
O.N$Aut=function(E,F,G){
var H,I,J=E[A],K=E[B],L=E[D];
if(F){
var M=F[A],N=F[B],O=F[D];
if(J==M&&K==N&&L==O){
if(G>.5){
this.N$hvt=!0;
0==$.size((H=this.N$qit())&&H.N$xot())&&(I=this.N$qit())&&I.N$Eot([C._c.N$Cot.N$Not(4)]);
}
if(!this.N$hvt)return!1;
}
}
var P=this.N$tgt(E);
if(this.N$Rvt&&!$.includes(this.N$Rvt,P&&P.N$Wn()))return!1;
if(C._c.N$r8.N$Z8(this.N$Hnt)){
var Q=this.N$agt(E,P);
return C._c.N$r8.N$i4(Q&&Q.N$Wn(),this.N$Hnt,!0);
}
return!0;
};
O.N$not=function($){
var D,E,F,G,H=$[A],I=$[B],J=this.N$tgt($),K=this.N$Ymt[H],M=K.clef,N=void 0,O=this.N$Hnt,P=null,Q=null;
if(C._c.N$r8.N$Z8(this.N$Hnt)){
var R=(D=this.N$agt($,J))&&D.N$Wn();
if(9==O){
P=C._c.N$i8.N$H8(R,0);
Q=C._c.N$i8.N$B8(R,0);
}else if(10==O){
P=C._c.N$i8.N$H8(R,1);
Q=C._c.N$i8.N$B8(R,1);
}else if(12==O){
P=C._c.N$i8.N$L8(R,!0);
Q=C._c.N$i8.N$A8(R,!0);
}else{
P=C._c.N$i8.N$L8(R,!1);
Q=C._c.N$i8.N$A8(R,!1);
}
if(0!=this.N$ugt){
var S=C._c.N$Kt.N$hn(12*Math.floor((J&&J.N$Ln())/12)),T=C._c.N$Kt.N$hn((S&&S.N$Ln())+11),U=this.N$Lrt&&this.N$Lrt.N$hr(S&&S.N$An(M)),V=this.N$Lrt&&this.N$Lrt.N$hr(T&&T.N$An(M));
N=C._c.N$Jn.N$ir(U,V);
}else N=this.N$fgt($);
}else{
P=C._c.N$i8.N$h8(J&&J.N$Wn(),J&&J.N$tn(),this.N$Hnt,this.N$ugt);
Q=C._c.N$i8.N$p8(J&&J.N$Wn(),J&&J.N$tn(),this.N$Hnt,this.N$ugt);
N=this.N$fgt($);
}
if((E=this.N$qit())&&E.N$alt(L)){
this.N$emt=-100;
this.N$tmt=0;
}
this.N$Zvt=(F=new C._c.N$J9())&&F.N$t8(J&&J.N$An(M),J&&J.N$On(I));
var W=(G=new C._c.N$Lnt())&&G.init();
W&&W.N$Mnt(P);
W&&W.N$Dnt(Q);
this.N$l4=M;
this.N$h4=I;
this.N$gnt=W;
this.N$Gtt=N;
this.N$wut();
this.N$mvt();
};
O.N$gvt=function($){
var A=$["accidental-type"],B=$["delta"],C=$["position"];
void 0!==A?this.N$emt=A:void 0!==B?this.N$tmt=this.N$Lrt&&this.N$Lrt.N$hr(this.N$tmt+B):void 0!==C&&(this.N$tmt=this.N$Lrt&&this.N$Lrt.N$hr(C));
this.N$mvt();
};
O.N$yvt=function($){
var A=$["position"];
if(void 0!==A){
var B=Math.round(A);
this.N$tmt=this.N$Lrt&&this.N$Lrt.N$hr(B);
}
this.N$mvt();
};
O.N$aut=function($,A){
3015==$?this.N$gvt(A):3016==$?this.N$yvt(A):P.N$_super.prototype.N$aut.call(this,$,A);
};
O.N$mut=function($){
var E,F,G,H=$[A],I=$[B],J=$[D],K=this.N$Ymt[H],L=K.clef,M=void 0;
M=void 0!==J?(E=new C._c.N$Kt())&&E.N$En(L,this.N$tmt,J):(F=new C._c.N$Kt())&&F.N$xn(L,this.N$tmt,I);
var N=(G=new C._c.N$jr())&&G.N$Qr(2);
N&&N.N$oi(M&&M.N$Ln(),0,1);
return N;
};
return P;
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
var A="Pitch",B="AccidentalNameStyle",E="ActiveTags",F="UseReference",G="ReferenceNote";
C._registerClass("N$lgt","N$Nft",function(A,D){
function H(){
C._c.N$Nft.call(this);
this.constructor=H;
this.N$_id=++C._id;
}
A.N$Zot=function(){
return"Note Ear Training";
};
D.N$tut=function(){
return"ear-note";
};
A.N$ult=function(){
var $,A=($=new C._c.N$Eht())&&$.init();
A&&A.N$Qht("ear-note");
A&&A.N$cpt([0,1,2,3,4,5,6,7,8,9,10,11],E);
A&&A.N$fpt(G,F);
A&&A.N$hpt([1e3,750,500,333,250,125],"Speed");
A&&A.N$upt();
A&&A.N$apt();
A&&A.N$hpt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"NoteNameStyle");
A&&A.N$hpt([0,1,2],B);
A&&A.N$hpt([0,1,2,3],"CorrectAnswerStyle");
A&&A.N$ppt();
A&&A.N$dpt();
A&&A.N$vpt();
return A;
};
D.N$ilt=function(){
var A,D,H,I,J,K=(A=new C._c.N$Dlt())&&A.N$Mlt(E);
K&&K.N$Plt("Notes");
K&&K.N$Blt(1);
K&&K.N$jlt([0,2,4,5,7,9,11]);
K&&K.N$Rlt(C._c.N$Ilt.N$Qat(0));
K&&K.N$Rlt(C._c.N$Ilt.N$Qat(1));
K&&K.N$Rlt(C._c.N$Ilt.N$Qat(2));
K&&K.N$Rlt(C._c.N$Ilt.N$Qat(3));
K&&K.N$Rlt(C._c.N$Ilt.N$Qat(4));
K&&K.N$Rlt(C._c.N$Ilt.N$Qat(5));
K&&K.N$Rlt(C._c.N$Ilt.N$Qat(6));
K&&K.N$Rlt(C._c.N$Ilt.N$Qat(7));
K&&K.N$Rlt(C._c.N$Ilt.N$Qat(8));
K&&K.N$Rlt(C._c.N$Ilt.N$Qat(9));
K&&K.N$Rlt(C._c.N$Ilt.N$Qat(10));
K&&K.N$Rlt(C._c.N$Ilt.N$Qat(11));
this.N$Wlt(K);
this.N$slt();
this.N$cgt();
var L=(D=new C._c.N$Dlt())&&D.N$Mlt(F);
L&&L.N$Plt("Reference Note");
L&&L.N$Blt(0);
L&&L.N$Hlt(3);
L&&L.N$jlt(!0);
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(0));
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$Wlt(L);
var M=(H=new C._c.N$Dlt())&&H.N$Mlt(G);
M&&M.N$Plt("Pitch");
M&&M.N$Blt(4);
M&&M.N$Hlt(2);
M&&M.N$jlt(60);
this.N$Wlt(M);
this.N$slt();
this.N$bct(16);
this.N$slt();
this.N$bct(6);
this.N$bct(7);
this.N$slt();
this.N$wct(5,[0,11,1,2,3,4,13,5,6,12,7,8,9,10,14]);
var N=(I=new C._c.N$Dlt())&&I.N$Mlt(B);
N&&N.N$Plt("Accidental Names");
N&&N.N$jlt(0);
N&&N.N$Rlt(C._c.N$Ilt.N$Flt("Both",0));
N&&N.N$slt();
N&&N.N$Rlt(C._c.N$Ilt.N$Flt("Sharps Only",1));
N&&N.N$Rlt(C._c.N$Ilt.N$Flt("Flats Only",2));
this.N$Wlt(N);
this.N$slt();
this.N$bct(12);
(J=this.N$xct(12))&&J.N$jlt(0);
$.each(this.N$Nct(7),function($){
$&&$.N$Edt("Range determines the available pitches for the question note.");
});
};
D.N$Amt=function($,A){
var B=$;
if(!A||!A.N$fr($))for(var C=$,D=$,E=0;10>E;E++){
C+=12;
D-=12;
if(A&&A.N$fr(D)){
B=D;
break;
}
if(A&&A.N$fr(C)){
B=C;
break;
}
}
return B;
};
D.N$cgt=function(){
var A=this,B=this.N$tft(E);
$.each(B&&B.N$Gat(),function($){
var B=$&&$.N$Wn(),C=A.N$hgt(B,!0);
$&&$.N$Urt(null);
$&&$.N$zrt(C);
$&&$.N$oct(function(){
var $=void 0;
$=A.N$pgt()?A.N$dgt(B,!1):A.N$hgt(B,!1);
return"musictype:"+$;
});
});
};
D.N$Omt=function(){
var $=this.N$Slt(),A=C._c.N$ti.N$ei($),B=this.N$tft(G),D=B&&B.N$Vat(),E=A&&A.N$mi();
if(!E||!E.N$fr(D)){
var F=this.N$Amt(D,A&&A.N$mi());
B&&B.N$jlt(F);
B&&B.N$Fct();
}
B&&B.N$Ylt($);
};
D.N$Ivt=function(){
var A=this,B=this.N$Stt(),D=this.N$tft(E),H=this.N$tft(F),I=this.N$tft(G),J=C._c.N$r8.N$Z8(B),K=H&&H.N$Vat(),L=9==B||10==B;
$.each(D&&D.N$Gat(),function($){
var B=void 0,C=void 0;
if(J){
B=A.N$dgt($&&$.N$Wn(),!0);
C=A.N$vgt($&&$.N$Wn());
}else{
B=A.N$hgt($&&$.N$Wn(),!0);
C=A.N$mgt($&&$.N$Wn());
}
$&&$.N$Tlt(null);
$&&$.N$zrt(B);
$&&$.N$Nlt(C);
});
L?D&&D.N$Plt("Scale Degrees"):D&&D.N$Plt("Notes");
if(J){
I&&I.N$Plt("Reference Note");
H&&H.N$Mct(!0);
}else I&&I.N$Plt("Pitch");
A.N$wlt(H,J);
A.N$wlt(I,!J&&!K);
};
D.N$mlt=function($){
var A=$&&$.N$Tct(),C=$&&$.N$ylt();
6==A?this.N$Omt():5==A?this.N$Ivt():(C==F||C==B)&&this.N$Ivt();
};
D.N$ggt=function($){
var A=[15,16,25,26,35,45,46,55,56,65,66,75],B=this.N$Stt(),C=A[$%12];
(10==B||12==B)&&(3==$?C=34:8==$?C=64:10==$&&(C=74));
return C;
};
D.N$ygt=function($){
var A=[15,24,25,34,35,45,54,55,64,65,74,75],B=A[$%12];
10==this.N$Stt()&&(3==$?B=34:8==$?B=64:10==$&&(B=74));
return B;
};
D.N$bgt=function($,A,C,D){
var E=this.N$alt(B);
if(0==E)return D?$:$+"/"+A;
if(1==E)return $;
if(2==E)return A;
return"";
};
D.N$pgt=function(){
return C._c.N$r8.N$Z8(this.N$Stt());
};
D.N$mgt=function($){
var A=this.N$Stt(),D=this.N$alt(B);
return C._c.N$i8.N$x8($,A,D,!1);
};
D.N$vgt=function($){
var A=this.N$Stt(),B=this.N$ggt($),D=this.N$ygt($),E=12==A,F=void 0,G=void 0;
if(9==A||10==A){
var H=C._c.N$r8.N$t4(A);
F=C._c.N$i8.N$P8(B,H);
G=C._c.N$i8.N$P8(D,H);
}else{
F=C._c.N$i8.N$L8(B,E);
G=C._c.N$i8.N$L8(D,E);
}
return this.N$bgt(F,G,"/",D==B);
};
D.N$hgt=function($,A){
var D=this.N$Stt(),E=this.N$alt(B);
return A?C._c.N$i8.N$T8($,D,E,!1):C._c.N$i8.N$S8($,D,E,!1);
};
D.N$dgt=function($,A){
var D=this.N$Stt(),E=(this.N$alt(B),this.N$ggt($)),F=this.N$ygt($),G=12==D,H=void 0,I=void 0;
if(9==D||10==D){
var J=C._c.N$r8.N$t4(D);
if(A){
H=C._c.N$i8.N$B8(E,J);
I=C._c.N$i8.N$B8(F,J);
}else{
H=C._c.N$i8.N$H8(E,J);
I=C._c.N$i8.N$H8(F,J);
}
}else{
H=C._c.N$i8.N$L8(E,G);
I=C._c.N$i8.N$L8(F,G);
}
return this.N$bgt(H,I,A?" or ":" -- ",F==E);
};
return H;
});
C._registerClass("N$wgt","N$dit",function(H,I){
function J(){
C._c.N$dit.call(this);
this.N$Pmt=this.N$Hmt=this.N$Bmt=null;
this.N$lvt=this.N$Evt=this.N$Fmt=this.N$Imt=0;
this.N$hvt=this.N$Rmt=!1;
this.constructor=J;
this.N$_id=++C._id;
}
H.N$Git=function(){
return C._c.N$lgt;
};
I.N$Umt=function($){
var A,B,D=(A=new C._c.N$jr())&&A.N$Qr((B=this.N$qit())&&B.N$Slt());
D&&D.N$oi($,0,this.N$Imt);
return D;
};
I.N$Egt=function($){
var A=this;
function B($,A){
if(0===A)return 0;
for(;0>$;)$+=A;
return $%A;
}
var C=A.N$qit();
if(C&&C.N$pgt()){
var D=C&&C.N$alt(G);
return B($-D,12);
}
return B($,12);
};
I.N$Wmt=function(){
var $;
this.N$Hst(2009,{
"question-sequence":($=this.N$vut())&&$.N$ar(),
"reference-sequence":this.N$Bmt&&this.N$Bmt.N$ar(),
"reference-label":this.N$Hmt,
"reference-ax-label":this.N$Pmt
});
};
I.N$sut=function(){
return 5;
};
I.N$out=function(){
return 1;
};
I.N$Vot=function($){
this.N$gut($==this.N$Evt,this.N$lvt,[$]);
};
I.N$cot=function(){
this.N$Tut([this.N$Evt]);
};
I.N$aut=function(A,B){
var C;
if(3011==A){
var D=B["playing"],F=B["sequence-id"];
if(F==(this.N$Bmt&&this.N$Bmt.N$Xr()))if(D){
var G=(C=this.N$qit())&&C.N$alt(E),H=this.N$Egt(this.N$Fmt),I=this.N$Bmt&&this.N$Bmt.N$Vr();
$.includes(G,H)&&this.N$Hst(2014,{
reference:!0,
duration:I,
object:[H]
});
}else if(this.N$Rmt){
this.N$Rmt=!1;
this.N$but(this.N$vut());
}
}else J.N$_super.prototype.N$aut.call(this,A,B);
};
I.N$Sot=function(){
var B,F=this,G=this.N$qit(),H=G&&G.N$Slt(),I=G&&G.N$Ict(),J=G&&G.N$alt(E),K=(B=C._c.N$Qut.N$nat(H,I))&&B.N$lr(),L=$.filter(K,function(A){
var B=F.N$Egt(A);
return $.includes(J,B);
}),M=[];
F.N$hvt=1==L.length;
F.N$hvt?M.push(5):0==L.length&&M.push(1);
F.N$cut(D({},A,L));
G&&G.N$Eot(C._c.N$Cot.N$rdt(M));
};
I.N$Lot=function(){
var A=this.N$qit(),D=A&&A.N$Slt(),H=A&&A.N$Stt(),I=(A&&A.N$alt(B),A&&A.N$alt(F)),J=A&&A.N$alt(E),K=A&&A.N$zct(),L=A&&A.N$qct();
this.N$Eut(D);
var M=[];
C._c.N$r8.N$Z8(H)&&(I=!0);
this.N$Imt=K;
this.N$lvt=L;
if(I){
this.N$Fmt=A&&A.N$alt(G);
this.N$Rmt=!0;
this.N$Bmt=this.N$Umt(this.N$Fmt);
this.N$Hmt=A&&A.N$hgt(this.N$Fmt,!1);
this.N$Pmt=A&&A.N$hgt(this.N$Fmt,!0);
}else{
this.N$Fmt=0;
this.N$Rmt=!1;
this.N$Bmt=null;
this.N$Hmt=null;
this.N$Pmt=null;
}
for(var N=0;12>N;N++){
var O=void 0,P=void 0,Q=void 0;
if(C._c.N$r8.N$Z8(H)){
O=A&&A.N$dgt(N,!1);
P=A&&A.N$dgt(N,!0);
}else if(7==H||8==H){
O=C._c.N$i8.N$u8(N,H);
P=O;
}else{
O=A&&A.N$hgt(N,!1);
P=A&&A.N$hgt(N,!0);
Q=C._c.N$Qut.N$iat(N);
}
M.push({
title:O,
ax:P,
tag:N,
active:$.includes(J,N),
shortcut:Q
});
}
var R=void 0;
R=11==H?[[9,10,11],[0,1,2],[3,4,5],[6,7,8]]:[[0,1,2],[3,4,5],[6,7,8],[9,10,11]];
this.N$Sut(M,0,{
"default":R
});
};
I.N$Aut=function($,B){
var C=$[A];
if(B){
var D=B[A];
if(C==D)return this.N$hvt;
}
return!0;
};
I.N$mut=function($){
var B=$[A];
return this.N$Umt(B);
};
I.N$not=function($){
this.N$Wmt();
var B=$[A];
this.N$Evt=this.N$Egt(B);
this.N$wut();
this.N$but(this.N$Rmt?this.N$Bmt:this.N$vut());
};
return J;
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
var A="Helpers",B="Positions",E="Accidentals",F="UsesNoteFilter",G="PairIndex",H="KeySignature",I="NoteQuality";
function J(A){
var B;
A||(A=(B=C._c.N$Qut)&&B.N$Gut());
return $.without(A,4,34,26,66);
}
C._registerClass("N$Sgt","N$Nft",function(D,G){
function H(){
C._c.N$Nft.call(this);
this.constructor=H;
this.N$_id=++C._id;
}
D.N$Zot=function(){
return"Note Identification";
};
D.N$ult=function(){
var D,G=(D=new C._c.N$Eht())&&D.init(),H=$.without(C._c.N$Qut.N$Gut(),66);
G&&G.N$Qht("note");
G&&G.N$Ght();
G&&G.N$tpt();
G&&G.N$cpt([7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7],"KeySignature");
G&&G.N$mpt(function(A,B,C){
var D=B[E],G=B[F],I=B["Note"],J=G&&$.includes(I,66);
C&&C.N$Vpt((D?1:0)|(G?16:0)|(J?8:0));
G&&C&&C.N$Xpt(H,I);
},function($,A,B){
var C=B&&B.N$Fpt(),D=!1,G=!1,I=[];
if(2==C){
D=!0;
G=!0;
I=J(null);
}else{
D=(1&C)>0;
G=(16&C)>0;
if(G){
I=B&&B.N$jpt(H);
(8&C)>0&&I.push(66);
}
}
A[E]=D?1:0;
A[F]=G?1:0;
A["Note"]=I;
});
G&&G.N$hpt([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"NoteNameStyle");
G&&G.N$hpt([0,1,2,3],"CorrectAnswerStyle");
G&&G.N$hpt([0,1,2],B);
G&&G.N$spt(A);
G&&G.N$ppt();
G&&G.N$dpt();
G&&G.N$vpt();
G&&G.N$Dht(function($,A){
G&&G.N$Oht(A.length<=6);
});
return G;
};
G.N$tut=function(){
return"note";
};
G.N$ilt=function(){
var $,D,G,H,I,J;
this.N$bct(2);
this.N$slt();
this.N$bct(4);
var K=($=new C._c.N$Dlt())&&$.N$Mlt(B);
K&&K.N$Plt("Positions");
K&&K.N$Hlt(0);
K&&K.N$Blt(0);
K&&K.N$jlt(0);
K&&K.N$Rlt(C._c.N$Ilt.N$Flt("Lines and Spaces",0));
K&&K.N$slt();
K&&K.N$Rlt(C._c.N$Ilt.N$Flt("Lines Only",1));
K&&K.N$Rlt(C._c.N$Ilt.N$Flt("Spaces Only",2));
this.N$Wlt(K);
this.N$slt();
this.N$bct(14);
(D=this.N$xct(14))&&D.N$jlt([0]);
this.N$slt();
this.N$wct(5,[0,11,1,2,3,4,13,5,6,12,7,8,9,10,14]);
var L=(G=new C._c.N$Dlt())&&G.N$Mlt(A);
L&&L.N$Plt("Helpers");
L&&L.N$Hlt(3);
L&&L.N$Blt(0);
L&&L.N$jlt(0);
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(0));
L&&L.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$slt();
this.N$Wlt(L);
this.N$slt();
var M=(H=new C._c.N$Dlt())&&H.N$Mlt(E);
M&&M.N$Plt("Accidentals");
M&&M.N$Hlt(3);
M&&M.N$Blt(0);
M&&M.N$jlt(1);
M&&M.N$Rlt(C._c.N$Ilt.N$Qat(0));
M&&M.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$Wlt(M);
var N=(I=new C._c.N$Dlt())&&I.N$Mlt(F);
N&&N.N$Plt("Note Filter");
N&&N.N$Hlt(3);
N&&N.N$Blt(0);
N&&N.N$jlt(0);
N&&N.N$Rlt(C._c.N$Ilt.N$Qat(0));
N&&N.N$Rlt(C._c.N$Ilt.N$Qat(1));
this.N$slt();
this.N$Wlt(N);
this.N$bct(17);
(J=this.N$xct(17))&&J.N$jlt(C._c.N$Qut.N$Gut());
this.N$slt();
this.N$bct(11);
};
G.N$Ivt=function(){
var $=this.N$Stt(),B=C._c.N$r8.N$Y8($),D=C._c.N$r8.N$Z8($),E=this.N$tft(A),G=this.N$tft(F),H=this.N$tft("Note");
this.N$wlt(G,B||D);
(B||D)&&G&&G.N$Mct(!1);
this.N$wlt(E,B);
B&&E&&E.N$Mct(!1);
var I=this.N$alt(F);
this.N$wlt(H,!I);
};
G.N$mlt=function($){
5==($&&$.N$Tct())?this.N$Ivt():($&&$.N$ylt())==F&&this.N$Ivt();
};
return H;
});
C._registerClass("N$xgt","N$dit",function(K,L){
function M(){
C._c.N$dit.call(this);
this.N$Rvt=this.N$Ymt=this.N$Ktt=this.N$Lrt=null;
this.N$lvt=this.N$Evt=this.N$Hnt=0;
this.N$hvt=this.N$Tgt=!1;
this.constructor=M;
this.N$_id=++C._id;
}
K.N$Git=function(){
return C._c.N$Sgt;
};
L.N$tgt=function($){
var A,B,D=$[G],E=$[H],F=$[I],J=this.N$Ymt[D],K=J.clef,L=J.position;
return void 0!==F?(A=new C._c.N$Kt())&&A.N$En(K,L,F):(B=new C._c.N$Kt())&&B.N$xn(K,L,E);
};
L.N$agt=function($,A){
return C._c.N$r8.N$n4($[H],A,this.N$Hnt);
};
L.N$sut=function(){
return 1;
};
L.N$out=function(){
return 1;
};
L.N$Vot=function($){
var A=$==this.N$Evt;
this.N$gut(A,this.N$lvt,[$]);
};
L.N$cot=function(){
this.N$Tut([this.N$Evt]);
};
L.N$Sot=function(){
var $,K,L,M=this.N$qit(),N=(M&&M.N$cat(),M&&M.N$Rct()),O=M&&M.N$Stt(),P=M&&M.N$alt(B),Q=(M&&M.N$alt(E))>0,R=[],S=M&&M.N$alt(F)?M&&M.N$alt("Note"):null;
13==O&&(S=J(S));
var T=[];
if(Q){
T.push(-1);
T.push(0);
T.push(1);
if(7==O||8==O){
T.push(-2);
T.push(2);
}
}
var U=C._c.N$Qut.N$lat(M,P,S);
(K=this.N$Rit())&&K.N$hut(U.length?($={},D($,G,U.length),D($,H,N),D($,I,T),$):null);
this.N$Ymt=U;
this.N$lvt=M&&M.N$qct();
this.N$hvt=1==U.length&&1==N.length&&T.length<2;
0==U.length?R.push(18):this.N$hvt&&R.push(4);
this.N$Lrt=M&&M.N$wrt();
var V=M&&M.N$alt(A);
if(V){
this.N$Ktt=(L=new C._c.N$Pnt())&&L.init();
this.N$Ktt&&this.N$Ktt.N$jnt(O);
this.N$Ktt&&this.N$Ktt.N$Fnt(P);
}else this.N$Ktt=null;
this.N$Hnt=O;
this.N$Tgt=Q;
this.N$Rvt=S;
M&&M.N$Eot(C._c.N$Cot.N$rdt(R));
};
L.N$Lot=function(){
var A=this,B=[],D=void 0;
function E($,D){
var E=C._c.N$i8.N$u8($,A.N$Hnt);
B.push({
title:E,
tag:$,
active:!0,
shortcut:D
});
}
if(C._c.N$r8.N$Y8(A.N$Hnt)){
E(0,"0");
E(1,"1");
E(2,"2");
E(3,"3");
E(4,"4");
E(5,"5");
E(6,"6");
E(7,"7");
E(8,"8");
E(9,"9");
E(10,"T");
E(11,"E");
D=[[0,1,2,3],[4,5,6,7],[8,9,10,11]];
}else if(C._c.N$r8.N$Z8(A.N$Hnt)){
var F=C._c.N$r8.N$t4(A.N$Hnt),G=C._c.N$r8.N$e4(A.N$Hnt),H=0==F,I=12==A.N$Hnt,J=A.N$Tgt;
$.each(C._c.N$r8.N$r4(A.N$Hnt,J),function($){
var A=void 0,D=void 0;
if(G){
A=C._c.N$i8.N$H8($,F);
D=C._c.N$i8.N$B8($,F);
}else{
A=C._c.N$i8.N$L8($,I);
D=C._c.N$i8.N$A8($,I);
}
B.push({
title:A,
ax:D,
tag:$,
active:!0
});
});
if(H)D=[[16,26,null,46,56,66,null],[15,25,35,45,55,65,75],[null,24,34,null,54,64,74]];else{
B.push({
title:"Minor",
"short":"m",
tag:1e3,
textOnly:!0
});
D=[[16,26,35,46,56,65,75],[15,25,34,45,55,64,74],[null,24,null,null,54,null,1e3]];
}
if(!J){
D[0]=[null,null,null,null,null,null,null];
D[2]=[null,null,null,null,null,null,1e3];
}
}else{
var K=A.N$Hnt,L=A.N$Rvt;
$.each(C._c.N$Qut.N$Gut(),function(A){
B.push({
title:C._c.N$i8.N$a8(A,K),
ax:C._c.N$i8.N$f8(A,K),
tag:A,
active:!L||$.includes(L,A),
shortcut:C._c.N$Qut.N$iat(A)
});
});
D=C._c.N$Qut.N$Yut(A.N$Hnt,L);
}
A.N$Sut(B,0,{
"default":D
});
2==A.N$lvt&&A.N$Eut(2);
};
L.N$Aut=function(A,B,D){
var E,F,J=A[G],K=A[H],L=A[I];
if(B){
var M=B[G],N=B[H],O=B[I];
if(J==M&&K==N&&L==O){
if(D>.5){
this.N$hvt=!0;
0==$.size((E=this.N$qit())&&E.N$xot())&&(F=this.N$qit())&&F.N$Eot([C._c.N$Cot.N$Not(4)]);
}
if(!this.N$hvt)return!1;
}
}
var P=this.N$tgt(A);
if(this.N$Rvt&&!$.includes(this.N$Rvt,P&&P.N$Wn()))return!1;
if(C._c.N$r8.N$Z8(this.N$Hnt)){
var Q=this.N$agt(A,P);
return C._c.N$r8.N$i4(Q&&Q.N$Wn(),this.N$Hnt,this.N$Tgt);
}
return!0;
};
L.N$not=function($){
var A,B,D=$[G],E=$[H],F=this.N$Ymt[D],I=this.N$tgt($),J=(A=new C._c.N$Xtt())&&A.init();
J&&J.N$tnt(F.clef);
J&&J.N$nnt(E);
J&&J.N$unt(this.N$Ktt);
J&&J.N$fnt(15.5);
J&&J.N$lnt(this.N$Lrt);
var K=[I];
J&&J.N$pnt(K);
this.N$Evt=7==this.N$Hnt||8==this.N$Hnt?(I&&I.N$Ln())%12:C._c.N$r8.N$Z8(this.N$Hnt)?(B=this.N$agt($,I))&&B.N$Wn():I&&I.N$Wn();
this.N$wut();
this.N$Cut(J);
};
L.N$mut=function($){
var A,B=this.N$tgt($),D=(A=new C._c.N$jr())&&A.N$Qr(2);
D&&D.N$oi(B&&B.N$Ln(),0,1);
return D;
};
return M;
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
var A="Clef",B="TagIndexKey",E="Scale",F="Octave",G="Filter",H="QuestionMode",I="Landing",J="ComputedNoteTag",K="ComputedScaleTag",L="ComputedOctave";
C._registerClass("N$Ngt","N$Nft",function($,A){
function B(){
C._c.N$Nft.call(this);
this.constructor=B;
this.N$_id=++C._id;
}
$.N$Zot=function(){
return"Scale Construction";
};
$.N$ult=function(){
var $,A=($=new C._c.N$Eht())&&$.init(),B=C._c.N$Qut.N$Gut(),D=[7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7];
A&&A.N$Qht("scale-construction");
A&&A.N$Ght();
A&&A.N$ept();
A&&A.N$cpt([0,10,11,12,20,21,22,23,24,25,26],E);
A&&A.N$mpt(function($,A,C){
if(1==A[G]){
C&&C.N$zvt(!0);
C&&C.N$Xpt(B,A["Note"]);
}else{
C&&C.N$zvt(!1);
C&&C.N$Xpt(D,A["KeySignature"]);
}
},function($,A,C){
if(C&&C.N$Ft()){
A[G]=1;
A["Note"]=C&&C.N$jpt(B);
}else{
A[G]=0;
A["KeySignature"]=C&&C.N$jpt(D);
}
});
A&&A.N$hpt([0,2,1],H);
A&&A.N$hpt([0,1,2,3],"CorrectAnswerStyle");
A&&A.N$ppt();
A&&A.N$dpt();
A&&A.N$vpt();
return A;
};
A.N$tut=function(){
return"scale-construction";
};
A.N$ilt=function(){
var $,A,B,D,F,I,J,K,L=this;
function M($){
var A=C._c.N$i8.N$b8($);
return C._c.N$Ilt.N$Flt(A,$);
}
L.N$bct(2);
L.N$slt();
L.N$bct(3);
var N=($=new C._c.N$Dlt())&&$.N$Mlt(E);
N&&N.N$Plt("Scales");
N&&N.N$Blt(1);
N&&N.N$Hlt(1);
N&&N.N$jlt([0,10,11,12]);
N&&N.N$Rlt(M(0));
N&&N.N$Rlt(M(10));
N&&N.N$Rlt(M(11));
N&&N.N$Rlt(M(12));
N&&N.N$slt();
N&&N.N$Rlt(M(20));
N&&N.N$Rlt(M(21));
N&&N.N$Rlt(M(22));
N&&N.N$Rlt(M(23));
N&&N.N$Rlt(M(24));
N&&N.N$Rlt(M(25));
N&&N.N$Rlt(M(26));
L.N$slt();
L.N$Wlt(N);
var O=(A=new C._c.N$Dlt())&&A.N$Mlt(G);
O&&O.N$Plt("Filter");
O&&O.N$Blt(0);
O&&O.N$Hlt(0);
O&&O.N$jlt(0);
O&&O.N$Rlt(C._c.N$Ilt.N$Flt("By Key Signature",0));
O&&O.N$Rlt(C._c.N$Ilt.N$Flt("By Tonic",1));
L.N$slt();
L.N$Wlt(O);
L.N$bct(14);
(B=L.N$xct(14))&&B.N$jlt([-3,-2,-1,0,1,2,3]);
L.N$bct(17);
(D=L.N$xct(17))&&D.N$Plt("Tonics");
L.N$slt();
var P=(F=new C._c.N$Dlt())&&F.N$Mlt(H);
P&&P.N$Plt("Question Mode");
P&&P.N$Blt(0);
P&&P.N$Hlt(0);
P&&P.N$jlt(0);
P&&P.N$slt();
P&&P.N$Rlt(C._c.N$Ilt.N$uht("Accidentals","Accidentals",0));
(I=P&&P.N$tlt())&&I.N$fct("Select the correct accidentals for the specified scale.");
P&&P.N$slt();
P&&P.N$Rlt(C._c.N$Ilt.N$uht("Tonic (Any Octave)","Any Octave",2));
(J=P&&P.N$tlt())&&J.N$fct("Select the staff position for the tonic of the specified scale. Any octave is acceptable.");
P&&P.N$slt();
P&&P.N$Rlt(C._c.N$Ilt.N$uht("Tonic (Highlighted Range)","Highlighted Range",1));
(K=P&&P.N$tlt())&&K.N$fct("Select the staff position for the tonic of the specified scale and highlighted range.");
L.N$Wlt(P);
L.N$slt();
L.N$bct(11);
};
A.N$mlt=function($){
var A=$&&$.N$ylt();
if(A==G){
var B=0==this.N$alt(G);
this.N$wlt(this.N$tft("KeySignature"),!B);
this.N$wlt(this.N$tft("Note"),B);
}
};
return B;
});
C._registerClass("N$Cgt","N$dit",function(M,N){
function O(){
C._c.N$dit.call(this);
this.N$ovt=this.N$uvt=this.N$kgt=this.N$gnt=this.N$Gtt=this.N$Lgt=this.N$avt=this.N$Lrt=this.N$Agt=null;
this.N$Ogt=this.N$l4=this.N$lvt=this.N$Mgt=this.N$tmt=this.N$h4=this.N$cvt=this.N$bnt=0;
this.N$pvt=this.N$dvt=!1;
this.constructor=O;
this.N$_id=++C._id;
}
M.N$Git=function(){
return C._c.N$Ngt;
};
N.N$mvt=function(){
var A,B,D,E=this,F=0==this.N$Vit();
this.N$dvt&&(F=!1);
var G=(A=new C._c.N$Xtt())&&A.init(),H=null,I=null,J=null,K=void 0,L=void 0;
G&&G.N$tnt(this.N$l4);
G&&G.N$lnt(this.N$Lrt);
G&&G.N$hnt(2);
G&&G.N$snt(this.N$Gtt);
if(0==this.N$cvt){
G&&G.N$int(this.N$gnt);
G&&G.N$ant(1);
G&&G.N$fnt(20);
G&&G.N$nnt(0);
G&&G.N$hnt(1);
for(var M=[],N=0;N<this.N$avt.length;N++){
var O=this.N$avt[N],P=this.N$uvt[N];
M.push((B=new C._c.N$J9())&&B.N$t8(O,P));
}
K=this.N$avt[this.N$bnt];
L=this.N$uvt[this.N$bnt];
this.N$Dgt()&&(H=this.N$pvt?"This note cannot\nbe modified.":"Select a note to modify.");
$.each(M,function($,A){
var B=C._c.N$mnt.N$Nnt([$]);
F&&A==E.N$bnt&&B&&B.N$Snt(0);
G&&G.N$dnt(B);
});
J="Selected Note";
I=C._c.N$i8.N$m8(K,E.N$l4);
}else{
G&&G.N$fnt(15.5);
G&&G.N$nnt(E.N$h4);
var Q=(D=new C._c.N$J9())&&D.N$t8(E.N$tmt,-100),R=C._c.N$mnt.N$Nnt([Q]);
R&&R.N$Ent(E.N$gnt);
G&&G.N$dnt(R);
K=E.N$tmt;
L=-100;
J="Position";
I=C._c.N$i8.N$m8(E.N$tmt,E.N$l4);
}
F&&G&&G.N$cnt(4);
E.N$Hst(2020,{
"accidental-type":L,
"accidental-layout":E.N$Ogt,
position:K,
"immutable-label":H,
"ax-label":J,
"ax-value":I
});
E.N$Cut(G);
};
N.N$Dgt=function(){
return 0==this.N$cvt?0==this.N$bnt||this.N$bnt==this.N$avt.length-1:!1;
};
N.N$sut=function(){
return 1;
};
N.N$out=function(){
return 3;
};
N.N$Xot=function(){
var $=void 0;
if(0==this.N$cvt){
var A=C._c.N$J9.N$Z9(this.N$avt,this.N$ovt),B=C._c.N$J9.N$Z9(this.N$avt,this.N$uvt);
$=C._c.N$Qut.N$vat(B,A,this.N$l4,this.N$h4,2);
}else 1==this.N$cvt?$=this.N$tmt==this.N$Mgt:2==this.N$cvt&&($=C._g.N$e(this.N$tmt,7)==C._g.N$e(this.N$Mgt,7));
this.N$gut($,this.N$lvt,null);
};
N.N$yut=function($){
if(0!=$){
this.N$dvt=!0;
this.N$mvt();
}
};
N.N$cot=function(){
0==this.N$cvt?this.N$uvt=this.N$ovt.slice(0):this.N$tmt=this.N$Mgt;
this.N$mvt();
};
N.N$Sot=function(){
var J,K=this,L=this.N$qit(),M=L&&L.N$cat(),N=L&&L.N$wrt(),O=L&&L.N$Rct(),P=L&&L.N$Wct(),Q=L&&L.N$alt(H),R=L&&L.N$alt(E),S=L&&L.N$alt(G),T=N&&N.N$rr(),U=N&&N.N$nr(),V=[];
0==Q&&(U-=7);
function W($,A){
var B=A%7,C=Math.floor(A/7);
return B>$?C+1:C;
}
var X={},Y=!1;
$.each(M,function($){
for(var A=C._c.N$Kt.N$on($,T),B=C._c.N$Kt.N$on($,U),D=0;7>D;D++){
var E=W(D,A),F=W(D,B+1)-E;
X[$+","+D]={
base:E,
count:F
};
F&&(Y=!0);
}
});
var Z=!1,_=C._c.N$Qut.N$pat(R,S,O,P),a=$.filter(_,function(A){
var B=A.tonic,D=A.scale,E=C._c.N$Kt.N$un(B);
11!=D&&12!=D||46!=B&&16!=B&&56!=B||(Z=!0);
return $.some(M,function($){
var A=X[$+","+E];
return A&&A.count>0;
});
}),b=0;
0==Q&&(b=Z?4:3);
1==S&&0==_.length?V.push(17):a.length<_.length&&V.push(0==Q?16:15);
K.N$Lrt=L&&L.N$wrt();
K.N$Lgt=X;
K.N$Agt=a;
K.N$cvt=Q;
K.N$Ogt=b;
K.N$cut(a.length?(J={},D(J,A,M),D(J,B,a.length),D(J,F,120),D(J,I,12),J):null);
L&&L.N$Eot(C._c.N$Cot.N$rdt(V));
};
N.N$Lot=function(){
var $=this.N$qit();
this.N$lvt=$&&$.N$qct();
2==this.N$lvt&&this.N$Eut(2);
};
N.N$Aut=function($,A){
var C=$[B];
if(A){
var D=A[B];
if(C==D&&this.N$Agt.length>1)return!1;
}
return!0;
};
N.N$lut=function($){
var D=$[A],E=$[B],G=$[F],H=this.N$Agt&&this.N$Agt[E];
if(!H)return!1;
var I=H.tonic,M=C._c.N$Kt.N$un(I),N=this.N$Lgt&&this.N$Lgt[D+","+M];
if(!N||!N.count)return!1;
{
var O=N.base+G%N.count;
C._c.N$Kt.N$dn(I,O);
}
$[J]=I;
$[K]=H.scale;
$[L]=O;
return!0;
};
N.N$not=function(B){
var D,E,F=this,G=B[A],H=B[I],M=B[J],N=B[K],O=B[L],P=C._c.N$Kt.N$dn(M,O),Q=(D=new C._c.N$M9())&&D.N$V7(N),R=null,S=[],T=[],U=[],V=void 0,W=void 0,X=(E=new C._c.N$Lnt())&&E.init(),Y=null;
if(0==this.N$cvt){
V=0;
Y=Q&&Q.N$W9(P,0);
var Z=Y.length-1;
$.each(Y,function($,A){
var B=$&&$.N$An(G),C=$&&$.N$On(0);
S.push(B);
T.push(C);
U.push(0==A||A==Z?C:-100);
});
X&&X.N$Mnt(C._c.N$i8.N$y8(N,M,0));
X&&X.N$Dnt(C._c.N$i8.N$E8(N,M,0));
}else{
W=P&&P.N$An(G);
V=Q&&Q.N$V9(P);
Y=[P];
1==F.N$cvt&&(R=C._c.N$Qut.N$aat(F.N$Lrt,W,H));
X&&X.N$Mnt(C._c.N$i8.N$b8(N));
X&&X.N$Dnt(C._c.N$i8.N$K8(N)+"?");
}
F.N$l4=G;
F.N$h4=V;
F.N$avt=S;
F.N$ovt=T;
F.N$uvt=U;
F.N$Mgt=W;
F.N$Gtt=R;
F.N$kgt=Y;
F.N$gnt=X;
F.N$bnt=0;
F.N$pvt=!1;
F.N$dvt=!1;
F.N$wut();
F.N$mvt();
};
N.N$mut=function(){
for(var $,A,B=($=new C._c.N$jr())&&$.N$Qr(2),D=0==this.N$cvt?.33:1,E=this.N$kgt,F=0,G=E?E.length:0;G>F;F++){
A=E[F];
B&&B.N$si(A&&A.N$Ln(),D);
}
return B;
};
N.N$gvt=function($){
var A=$["accidental-type"],B=$["delta"],C=$["position"];
if(0==this.N$cvt){
if(void 0!==A){
if(this.N$Dgt())return;
this.N$uvt[this.N$bnt]=A;
}else if(void 0!==B){
this.N$bnt+=B;
this.N$bnt<0?this.N$bnt=0:this.N$bnt>=this.N$avt.length&&(this.N$bnt=this.N$avt.length-1);
0!=this.N$bnt&&(this.N$pvt=!0);
}else if(void 0!==C){
var D=this.N$avt.indexOf(C);
D>=0&&(this.N$bnt=D);
D>0&&(this.N$pvt=!0);
}
}else void 0!==B?this.N$tmt=this.N$Lrt&&this.N$Lrt.N$hr(this.N$tmt+B):void 0!==C&&(this.N$tmt=this.N$Lrt&&this.N$Lrt.N$hr(C));
this.N$mvt();
};
N.N$yvt=function($){
var A=$["position"];
if(void 0!==A){
for(var B=1/0,C=this.N$bnt,D=0,E=this.N$avt.length;E>D;D++){
var F=Math.abs(this.N$avt[D]-A);
if(B>F){
B=F;
C=D;
}
}
if(C!=this.N$bnt){
this.N$bnt=C;
this.N$mvt();
}
}
};
N.N$aut=function($,A){
3015==$?this.N$gvt(A):3016==$?this.N$yvt(A):O.N$_super.prototype.N$aut.call(this,$,A);
};
return O;
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
var A="StartingPitch",B="Scale",E="PlayMode",F="Scales",G="PlayMode";
C._registerClass("N$Pgt","N$Nft",function(A,B){
function D(){
C._c.N$Nft.call(this);
this.constructor=D;
this.N$_id=++C._id;
}
A.N$Zot=function(){
return"Scale Ear Training";
};
A.N$ult=function(){
var $,A=($=new C._c.N$Eht())&&$.init();
A&&A.N$Qht("ear-scale");
A&&A.N$cpt([0,10,11,12,20,21,22,23,24,25,26,30,31,32,33],F);
A&&A.N$cpt([0,1,2],G);
A&&A.N$hpt([1e3,750,500,333,250,125],"Speed");
A&&A.N$spt("AllowChange");
A&&A.N$upt();
A&&A.N$apt();
A&&A.N$hpt([0,1,2,3],"CorrectAnswerStyle");
A&&A.N$ppt();
A&&A.N$dpt();
A&&A.N$vpt();
return A;
};
B.N$tut=function(){
return"ear-scale";
};
B.N$ilt=function(){
var A,B,D,E=this,H=(A=new C._c.N$Dlt())&&A.N$Mlt(F);
H&&H.N$Plt("Scales");
H&&H.N$Blt(1);
H&&H.N$Hlt(1);
var I=[],J=function($,A){
var B=C._c.N$i8.N$b8($),D=C._c.N$Ilt.N$Flt(B,$);
D&&D.N$zrt(B);
A&&I.push($);
H&&H.N$Rlt(D);
};
J(0,!0);
J(10,!0);
J(11,!0);
J(12,!0);
H&&H.N$slt();
J(20,!0);
J(21,!0);
J(22,!0);
J(23,!0);
J(24,!0);
J(25,!0);
J(26,!0);
H&&H.N$slt();
J(30,!1);
J(31,!1);
J(32,!1);
J(33,!1);
H&&H.N$jlt(I);
E.N$Wlt(H);
var K=(B=new C._c.N$Dlt())&&B.N$Mlt(G);
K&&K.N$Plt("Play Mode");
K&&K.N$Blt(1);
K&&K.N$jlt([0]);
var L=function($,A,B){
var D=C._c.N$Ilt.N$Klt(null,"scale-playmode:"+$,$);
D&&D.N$zrt(A);
D&&D.N$qlt(B?B:A);
D&&D.N$Qlt(61);
K&&K.N$Rlt(D);
};
L(0,"Ascending",null);
L(1,"Descending",null);
L(2,"Asc./Desc.",null);
E.N$slt();
E.N$Wlt(K);
E.N$bct(16);
E.N$slt();
E.N$bct(6);
E.N$bct(7);
E.N$slt();
E.N$bct(12);
(D=E.N$xct(12))&&D.N$jlt(0);
$.each(E.N$Nct(7),function($){
var A,B=C._c.N$ti.N$ei($&&$.N$Wn()),D=(A=B&&B.N$mi())&&A.copy();
D&&D.N$Zn((D&&D.N$er())-12);
$&&$.N$tct(D);
$&&$.N$Edt("Range determines the available pitches for the lowest note of the scale.");
var E=$&&$.N$gi();
48==(E&&E.N$Yn())&&72==(E&&E.N$er())&&$&&$.N$xdt(C._c.N$Jn.N$ir(48,60));
});
};
return D;
});
C._registerClass("N$Hgt","N$dit",function(H,I){
function J(){
C._c.N$dit.call(this);
this.N$lvt=this.N$Evt=this.N$Bgt=0;
this.N$hvt=!1;
this.constructor=J;
this.N$_id=++C._id;
}
H.N$Git=function(){
return C._c.N$Pgt;
};
I.N$Svt=function($){
var A=this;
function B($){
var A=10==$||12==$||25==$;
return A;
}
if(1==A.N$Bgt&&B(A.N$Evt)&&B($))return!0;
if(20==A.N$Evt&&0==$||0==A.N$Evt&&20==$||25==A.N$Evt&&10==$||10==A.N$Evt&&25==$)return!0;
return $==A.N$Evt;
};
I.N$Vvt=function(){
return[0,10,11,12,20,21,22,23,24,25,26,30,31,32,33];
};
I.N$sut=function(){
return 4;
};
I.N$out=function(){
return 1;
};
I.N$Vot=function($){
var A=this.N$Svt($);
this.N$gut(A,this.N$lvt,[$]);
};
I.N$cot=function(){
var A=this,B=[];
$.each(this.N$Vvt(),function($){
A.N$Svt($)&&B.push($);
});
A.N$Tut(B);
};
I.N$Sot=function(){
var $,H=this.N$qit(),I=H&&H.N$alt(G),J=H&&H.N$alt(F),K=H&&H.N$Slt(),L=H&&H.N$Ict(),M=[],N=C._c.N$Qut.N$nat(K,L),O=N&&N.N$lr();
this.N$cut(($={},D($,A,N&&N.N$lr()),D($,B,J),D($,E,I),$));
this.N$hvt=1==J.length&&1==O.length;
this.N$hvt&&M.push(9);
H&&H.N$Eot(C._c.N$Cot.N$rdt(M));
};
I.N$Lot=function(){
var A=this,B=this.N$qit(),D=B&&B.N$alt(F),E=B&&B.N$Slt();
this.N$Eut(E);
this.N$lvt=B&&B.N$qct();
var G=[];
$.each(this.N$Vvt(),function(A){
var B=C._c.N$i8.N$b8(A);
G.push({
title:B,
tag:A,
active:$.includes(D,A)
});
});
var H=!1,I=!1,J=!1,K=!1,L=!1;
$.each(D,function($){
30==$?H=!0:31==$?I=!0:32==$?J=!0:33==$?K=!0:$>=20&&26>=$&&(L=!0);
});
var M=[[0,10],[11,12],[20,21],[22,23],[null,24],[25,26]],N=[[0,10],[11,12]];
(H||I)&&M.push([30,31]);
(J||K)&&M.push([32,33]);
L&&N.push([20,21,22,23],[24,25,26]);
if(H||I||J||K){
var O=[];
(H||I)&&O.push(30,31);
(J||K)&&O.push(32,33);
N.push(O);
}
A.N$Sut(G,0,{
"default":M,
landscape:N
});
};
I.N$Aut=function($,C){
var D=$[A],E=$[B];
if(C){
var F=C[A],G=C[B];
if(D==F&&E==G&&!this.N$hvt)return!1;
}
return!0;
};
I.N$mut=function(D){
var F,G,H,I=this.N$qit(),J=(F=new C._c.N$Kt())&&F.N$pn(D[A]),K=(G=new C._c.N$M9())&&G.N$V7(D[B]),L=D[E],M=$.map(K&&K.N$W9(J,L),function($){
return $&&$.N$Ln();
}),N=(H=new C._c.N$jr())&&H.N$Qr(I&&I.N$Slt());
N&&N.N$ui(M,I&&I.N$zct());
return N;
};
I.N$not=function($){
this.N$Evt=$[B];
this.N$Bgt=$[E];
this.N$wut();
this.N$but(this.N$vut());
};
return J;
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
var A="Clef",B="TagIndexKey",E="Scale",F="Octave",G="Filter",H="QuestionMode",I="ComputedNoteTag",J="ComputedScaleTag",K="ComputedOctave";
C._registerClass("N$jgt","N$Nft",function($,A){
function B(){
C._c.N$Nft.call(this);
this.constructor=B;
this.N$_id=++C._id;
}
$.N$Zot=function(){
return"Scale Identification";
};
$.N$ult=function(){
var $,A=($=new C._c.N$Eht())&&$.init(),B=C._c.N$Qut.N$Gut(),D=[7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7];
A&&A.N$Qht("scale");
A&&A.N$Ght();
A&&A.N$ept();
A&&A.N$cpt([0,10,11,12,20,21,22,23,24,25,26],E);
A&&A.N$mpt(function($,A,C){
if(1==A[G]){
C&&C.N$zvt(!0);
C&&C.N$Xpt(B,A["Note"]);
}else{
C&&C.N$zvt(!1);
C&&C.N$Xpt(D,A["KeySignature"]);
}
},function($,A,C){
if(C&&C.N$Ft()){
A[G]=1;
A["Note"]=C&&C.N$jpt(B);
}else{
A[G]=0;
A["KeySignature"]=C&&C.N$jpt(D);
}
});
A&&A.N$hpt([0,1,2],H);
A&&A.N$hpt([0,1,2,3],"CorrectAnswerStyle");
A&&A.N$ppt();
A&&A.N$dpt();
A&&A.N$vpt();
return A;
};
A.N$tut=function(){
return"scale";
};
A.N$ilt=function(){
var $,A,B,D,F,I,J,K,L=this;
function M($){
var A=C._c.N$i8.N$b8($);
return C._c.N$Ilt.N$Flt(A,$);
}
L.N$bct(2);
L.N$slt();
L.N$bct(3);
var N=($=new C._c.N$Dlt())&&$.N$Mlt(E);
N&&N.N$Plt("Scales");
N&&N.N$Blt(1);
N&&N.N$Hlt(1);
N&&N.N$jlt([0,10,11,12]);
N&&N.N$Rlt(M(0));
N&&N.N$Rlt(M(10));
N&&N.N$Rlt(M(11));
N&&N.N$Rlt(M(12));
N&&N.N$slt();
N&&N.N$Rlt(M(20));
N&&N.N$Rlt(M(21));
N&&N.N$Rlt(M(22));
N&&N.N$Rlt(M(23));
N&&N.N$Rlt(M(24));
N&&N.N$Rlt(M(25));
N&&N.N$Rlt(M(26));
L.N$slt();
L.N$Wlt(N);
var O=(A=new C._c.N$Dlt())&&A.N$Mlt(G);
O&&O.N$Plt("Filter");
O&&O.N$Blt(0);
O&&O.N$Hlt(0);
O&&O.N$jlt(0);
O&&O.N$Rlt(C._c.N$Ilt.N$Flt("By Key Signature",0));
O&&O.N$Rlt(C._c.N$Ilt.N$Flt("By Tonic",1));
L.N$slt();
L.N$Wlt(O);
L.N$bct(14);
(B=L.N$xct(14))&&B.N$jlt([-3,-2,-1,0,1,2,3]);
L.N$bct(17);
(D=L.N$xct(17))&&D.N$Plt("Tonics");
L.N$slt();
var P=(F=new C._c.N$Dlt())&&F.N$Mlt(H);
P&&P.N$Plt("Question Mode");
P&&P.N$Blt(0);
P&&P.N$Hlt(0);
P&&P.N$jlt(0);
P&&P.N$slt();
P&&P.N$Rlt(C._c.N$Ilt.N$uht("Use Accidentals","Use Accidentals",0));
(I=P&&P.N$tlt())&&I.N$fct("Use accidentals instead of a key signature.");
P&&P.N$slt();
P&&P.N$Rlt(C._c.N$Ilt.N$uht("Key Signature and Notes","Key Sig. and Notes",1));
(J=P&&P.N$tlt())&&J.N$fct("Use a key signature and show the full scale.");
P&&P.N$slt();
P&&P.N$Rlt(C._c.N$Ilt.N$uht("Key Signature and Tonic","Key Sig. and Tonic",2));
(K=P&&P.N$tlt())&&K.N$fct("Use a key signature and show only the tonic.");
L.N$Wlt(P);
L.N$slt();
L.N$bct(11);
};
A.N$mlt=function($){
var A=$&&$.N$ylt();
if(A==G){
var B=0==this.N$alt(G);
this.N$wlt(this.N$tft("KeySignature"),!B);
this.N$wlt(this.N$tft("Note"),B);
}
};
return B;
});
C._registerClass("N$Fgt","N$dit",function(L,M){
function N(){
C._c.N$dit.call(this);
this.N$kgt=this.N$Lgt=this.N$Lrt=this.N$Agt=null;
this.N$lvt=this.N$Evt=0;
this.constructor=N;
this.N$_id=++C._id;
}
L.N$Git=function(){
return C._c.N$jgt;
};
M.N$qit=function(){
return N.N$_super.prototype.N$qit.call(this);
};
M.N$Vvt=function(){
return[0,10,11,12,20,21,22,23,24,25,26];
};
M.N$Igt=function($){
var A,B=(A=this.N$qit())&&A.N$alt(H),D=2==B;
return C._c.N$M9.N$R9($,this.N$Evt,0,D);
};
M.N$sut=function(){
return 1;
};
M.N$out=function(){
return 1;
};
M.N$Vot=function($){
var A=this.N$Igt($);
this.N$gut(A,this.N$lvt,[$]);
};
M.N$cot=function(){
var A=this,B=[];
$.each(this.N$Vvt(),function($){
A.N$Igt($)&&B.push($);
});
A.N$Tut(B);
};
M.N$Sot=function(){
var I,J=this,K=this.N$qit(),L=K&&K.N$cat(),M=K&&K.N$wrt(),N=K&&K.N$Rct(),O=K&&K.N$Wct(),P=K&&K.N$alt(H),Q=K&&K.N$alt(E),R=K&&K.N$alt(G),S=M&&M.N$rr(),T=M&&M.N$nr(),U=[];
2!=P&&(T-=7);
function V($,A){
var B=A%7,C=Math.floor(A/7);
return B>$?C+1:C;
}
var W={},X=!1;
$.each(L,function($){
for(var A=C._c.N$Kt.N$on($,S),B=C._c.N$Kt.N$on($,T),D=0;7>D;D++){
var E=V(D,A),F=V(D,B+1)-E;
W[$+","+D]={
base:E,
count:F
};
F&&(X=!0);
}
});
var Y=C._c.N$Qut.N$pat(Q,R,N,O),Z=$.filter(Y,function(A){
var B=A.tonic,D=C._c.N$Kt.N$un(B);
return $.some(L,function($){
var A=W[$+","+D];
return A&&A.count>0;
});
});
1==R&&0==Y.length?U.push(17):Z.length<Y.length&&U.push(2==P?15:16);
J.N$Lrt=K&&K.N$wrt();
J.N$Lgt=W;
J.N$Agt=Z;
J.N$cut(Z.length?(I={},D(I,A,L),D(I,B,Z.length),D(I,F,120),I):null);
K&&K.N$Eot(C._c.N$Cot.N$rdt(U));
};
M.N$Lot=function(){
var A=this,B=this.N$qit(),D=B&&B.N$alt(E),F=B&&B.N$qct();
2==F&&this.N$Eut(2);
this.N$lvt=F;
var G=[],H=!1,I=!1,J=!1;
$.each(D,function($){
0==$||10==$?H=!0:11==$||12==$?I=!0:J=!0;
});
$.each(A.N$Vvt(),function(A){
var B=C._c.N$i8.N$b8(A);
G.push({
title:B,
tag:A,
active:$.includes(D,A)
});
});
var K=null,L=null;
if(!H||I||J){
var M=[];
H&&M.push([0,10]);
I&&M.push([11,12]);
if(J){
M.push([20,21,22,23]);
M.push([24,25,26]);
}
K=M;
}else{
K=[[0],[10]];
L=[[0,10]];
}
A.N$Sut(G,0,{
"default":K,
landscape:L
});
};
M.N$Aut=function($,A){
var C=$[B];
if(A){
var D=A[B];
if(C==D&&this.N$Agt.length>1)return!1;
}
return!0;
};
M.N$lut=function($){
var D=$[A],E=$[B],G=$[F],H=this.N$Agt&&this.N$Agt[E];
if(!H)return!1;
var L=H.tonic,M=C._c.N$Kt.N$un(L),N=this.N$Lgt&&this.N$Lgt[D+","+M];
if(!N||!N.count)return!1;
{
var O=N.base+G%N.count;
C._c.N$Kt.N$dn(L,O);
}
$[I]=L;
$[J]=H.scale;
$[K]=O;
return!0;
};
M.N$not=function(D){
var E,F,G,L=this,M=D[A],N=(D[B],D[I]),O=D[K],P=D[J];
this.N$wut();
var Q=C._c.N$Kt.N$dn(N,O),R=(E=new C._c.N$M9())&&E.N$V7(P);
this.N$Evt=P;
this.N$kgt=R&&R.N$W9(Q,0);
var S=(F=new C._c.N$Xtt())&&F.init(),T=(G=this.N$qit())&&G.N$alt(H),U=0;
if(1==T||0==T){
S&&S.N$hnt(1);
S&&S.N$fnt(20);
}else S&&S.N$fnt(15.5);
(2==T||1==T)&&(U=R&&R.N$V9(Q));
S&&S.N$tnt(M);
S&&S.N$nnt(U);
S&&S.N$lnt(this.N$Lrt);
if(2==T){
var V=C._c.N$mnt.N$vnt([$.first(this.N$kgt)]);
S&&S.N$dnt(V);
}else $.each(this.N$kgt,function($){
var A=C._c.N$mnt.N$vnt([$]);
S&&S.N$dnt(A);
});
L.N$Cut(S);
};
M.N$mut=function(){
for(var $,A,B=($=new C._c.N$jr())&&$.N$Qr(2),D=this.N$kgt,E=0,F=D?D.length:0;F>E;E++){
A=D[E];
B&&B.N$si(A&&A.N$Ln(),.33);
}
return B;
};
return N;
});
}();
!function(){
"use strict";
C._registerClass("N$qgt","N$Rgt",function($,A){
function B(){
C._c.N$Rgt.call(this);
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Ugt=function($,A){
A["Clef"]=$&&$.N$zgt();
A["KeySignature"]=$&&$.N$Wgt();
A["NoteLetter"]=$&&$.N$Wgt();
A["NoteQuality"]=$&&$.N$Wgt();
};
A.N$Xgt=function($,A){
A&&A.N$Vgt($["Clef"]);
A&&A.N$Jgt($["KeySignature"]);
A&&A.N$Jgt($["NoteLetter"]);
A&&A.N$Jgt($["NoteQuality"]);
};
A.N$Kgt=function(){
var $={},A={},B={};
$["Clef"]=34;
$["KeySignature"]=0;
$["NoteLetter"]=0;
$["NoteQuality"]=0;
this.N$Qgt(A);
this.N$Ggt(A);
this.N$Ygt(A);
B["prefix"]="accidental";
B["defaults"]=$;
B["choices"]=A;
return B;
};
A.N$Zgt=function($){
var A,B=$["Clef"],D=$["KeySignature"],E=$["NoteLetter"],F=$["NoteQuality"],G=22==B||26==B||24==B?3:4,H=C._c.N$Kt.N$mn(E,F,G),I=[H];
if(-1==B){
I=this.N$eyt(I);
var J=this.N$tyt(I,null,null,3);
this.N$kut(J);
}else{
var K=(A=new C._c.N$Xtt())&&A.init();
K&&K.N$tnt(B);
K&&K.N$nnt(D);
K&&K.N$fnt(16);
K&&K.N$lnt(C._c.N$Jn.N$ir(6,-6));
K&&K.N$pnt(I);
this.N$Cut(K);
}
this.N$Uit(this.N$nyt(I));
};
return B;
});
}();
!function(){
"use strict";
C._registerClass("N$ryt","N$Rgt",function(A,B){
function D(){
C._c.N$Rgt.call(this);
this.N$iyt=null;
this.constructor=D;
this.N$_id=++C._id;
}
A.N$tut=function(){
return"analysis";
};
B.N$Ugt=function($,A){
A["Clef"]=$&&$.N$zgt();
A["KeySignature"]=$&&$.N$Wgt();
var B=$&&$.N$Ft(),C=$&&$.N$qpt();
if(B){
A["ScaleType"]=1;
A["MajorSymbol"]=0;
A["MinorSymbol"]=C;
}else{
A["ScaleType"]=0;
A["MajorSymbol"]=C;
A["MinorSymbol"]=22;
}
};
B.N$Xgt=function($,A){
A&&A.N$Vgt($["Clef"]);
A&&A.N$Jgt($["KeySignature"]);
var B=1==$["ScaleType"],C=$["MajorSymbol"],D=$["MinorSymbol"];
A&&A.N$zvt(B);
A&&A.N$Kpt(B?D:C);
};
B.N$Kgt=function(){
var A=this,B={},D={},E={},F={};
B["Clef"]=34;
B["KeySignature"]=0;
B["ScaleType"]=0;
B["ChordType"]=0;
B["MajorSymbol"]=0;
B["MajorTriadSymbol"]=0;
B["MajorSeventhSymbol"]=69;
B["MinorSymbol"]=22;
B["MinorTriadSymbol"]=22;
B["MinorSeventhSymbol"]=76;
this.N$Qgt(D);
this.N$Ggt(D);
var G=[0,1,2,3,4,5,6,46,47,48,49,50,23,25,106,110,57,58,59,60,61,62,86,87,88,89,90,96,97,98,99,100],H=[69,70,71,72,73,74,75,46,47,48,49,50,77,80,85,107,57,58,59,60,61,62,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,55,56],I=[22,23,24,25,26,28,29,46,47,48,49,50,0,51,27,30,108,63,64,65,66,67,68,91,92,93,94,95,101,102,103,104,105],J=[76,77,78,80,81,83,84,46,47,48,49,50,79,82,85,109,63,64,65,66,67,68,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],K=G.concat(H),L=I.concat(J);
D["ScaleType"]=[0,1];
D["ChordType"]=[0,1,2];
var M={};
$.each(K.concat(L),function($){
M[$]=C._c.N$i8.N$Q8($);
});
F["title"]=M;
D["MajorTriadSymbol"]=G;
D["MajorSeventhSymbol"]=H;
D["MinorTriadSymbol"]=I;
D["MinorSeventhSymbol"]=J;
D["MajorSymbol"]=K;
D["MinorSymbol"]=L;
E["prefix"]="analysis";
E["defaults"]=B;
E["choices"]=D;
E["strings"]=F;
A.N$iyt=D;
return E;
};
B.N$syt=function($,A){
return 0==$?A?"MinorTriadSymbol":"MajorTriadSymbol":1==$?A?"MinorSeventhSymbol":"MajorSeventhSymbol":A?"MinorSymbol":"MajorSymbol";
};
B.N$oyt=function(A,B,C){
var D=-1,E=this.N$syt(0,C),F=this.N$syt(1,C),G=this.N$syt(2,C),H=[0,69,1,70,2,71,3,72,4,73,5,74,6,75,86,7,87,8,88,9,89,10,90,11,96,12,97,13,98,14,99,15,100,16,96,17,97,18,98,19,99,20,100,21,22,76,23,77,24,78,51,79,25,80,26,81,27,82,28,83,29,84,30,85,91,31,92,32,93,33,94,34,95,35,101,36,102,37,103,38,104,39,105,40,101,41,102,42,103,43,104,44,105,45,D,55,D,56,106,107,108,109,D,D],I=void 0,J=0,K=void 0,L=void 0;
do{
K=H[J++];
L=H[J++];
K==A&&(I=[L,K,L]);
L==A&&(I=[K,K,L]);
}while(!I&&(K>=0||L>=0));
I&&$.includes(this.N$iyt[E],I[1])?B[E]=I[1]:$.includes(this.N$iyt[E],A)&&(B[E]=A);
I&&$.includes(this.N$iyt[F],I[2])?B[F]=I[2]:$.includes(this.N$iyt[F],A)&&(B[F]=A);
$.includes(this.N$iyt[G],A)&&(B[G]=A);
};
B.N$Zgt=function(A){
var B,D,E,F,G=this,H=A["Clef"],I=A["KeySignature"],J=A["ScaleType"],K=1==J,L=C._c.N$M9.N$B9(J,I,4),M=L&&L.N$Zt();
M>=0&&2>=M&&(L=C._c.N$M9.N$B9(J,I,5));
var N=A["ChordType"],O=this.N$syt(N,K),P=A[O];
this.N$oyt(P,A,K);
A[O]=P;
var Q=C._c.N$q7.N$X7(P),R=L&&L.N$Mn(Q&&Q.N$z7()),S=R&&R.N$Hn((B=Q&&Q.N$W7())&&B.N$Y7()),T=C._c.N$i8.N$a8(L&&L.N$Wn(),0),U=C._c.N$i8.N$f8(L&&L.N$Wn(),0),V=C._c.N$i8.N$Q8(P),W=V;
if(-1==H){
var X=$.min($.map(S,function($){
return $&&$.N$Ln();
})),Y=Math.ceil((X-71)/12);
Y>0&&(S=G.N$uyt(-Y,S));
var Z=T+" "+(K?"minor":"Major")+": "+V,_=U+" "+(K?"minor":"Major")+", "+W,a=G.N$tyt(S,Z,_,3);
G.N$kut(a);
}else{
S=G.N$ayt(S,H);
var b=(D=new C._c.N$Xtt())&&D.init();
b&&b.N$tnt(H);
b&&b.N$nnt(I);
b&&b.N$fnt(16);
b&&b.N$lnt(C._c.N$Jn.N$ir(6,-6));
var c=C._c.N$mnt.N$vnt(S);
b&&b.N$dnt(c);
var d=(E=new C._c.N$Lnt())&&E.init();
d&&d.N$Mnt(T+":");
d&&d.N$Dnt(U+":");
b&&b.N$rnt(d);
var e=(F=new C._c.N$Lnt())&&F.init();
e&&e.N$Mnt(V);
c&&c.N$Ent(e);
G.N$Cut(b);
}
G.N$Uit(G.N$nyt(S));
};
return D;
});
}();
!function(){
"use strict";
var A="Groups",B="Additional";
C._registerClass("N$Rgt",null,function(D,E){
function F(){
this.N$vit=this.N$yit=this.N$Jtt=this.N$fyt=this.N$Sit=this.N$Cit=null;
this.constructor=F;
this.N$_id=++C._id;
}
E.N$Kit=function($){
this.N$vit=$;
};
E.N$Qit=function(){
return this.N$vit;
};
E.N$Uit=function($){
this.N$yit=$;
};
E.N$vut=function(){
return this.N$yit;
};
E.N$lyt=function(){
this.N$fyt||(this.N$fyt=this.N$Kgt());
return this.N$fyt;
};
E.N$cyt=function(){
this.N$Hst(2401,{
groups:this.N$Jtt,
"enabled-triggers":this.N$hyt()
});
};
E.N$pyt=function(){
this.N$Hst(2400,{});
};
E.N$nyt=function($){
for(var A,B,D=(A=new C._c.N$jr())&&A.N$Qr(2),E=0,F=$?$.length:0;F>E;E++){
B=$[E];
D&&D.N$oi(B&&B.N$Ln(),0,1);
}
return D;
};
E.N$uyt=function(A,B){
return $.map(B,function($){
return $&&$.N$Rn(A);
});
};
E.N$eyt=function($){
for(var A,B=0,C=$?$.length:0;C>B;B++){
A=$[B];
if((A&&A.N$Ln())<60)return this.N$uyt(1,$);
}
return $;
};
E.N$ayt=function(A,B){
var C=this,D=void 0,E=void 0,F=void 0,G=void 0;
function H(){
F=-99;
G=99;
$.each(A,function($){
var A=$&&$.N$An(B);
if(A>F){
D=$;
F=A;
}
if(G>A){
E=$;
G=A;
}
});
}
H();
for(;F>6;){
A=C.N$uyt(-1,A);
H();
}
for(;-6>G;){
A=C.N$uyt(1,A);
H();
}
return A;
};
E.N$Qgt=function($){
$["KeySignature"]=[-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7];
};
E.N$Ggt=function($){
$["Clef"]=[34,22,28,26,32,30,24,-1];
};
E.N$Ygt=function($){
$["NoteLetter"]=[0,1,2,3,4,5,6];
$["NoteQuality"]=[-2,-1,0,1,2];
};
E.N$Cut=function($){
this.N$Cit=$;
this.N$Hst(2402,{});
};
E.N$tyt=function(A,B,D,E){
var F,G,H,I=(F=new C._c.N$Nrt())&&F.init(),J=[],K=[];
I&&I.N$Drt(1);
$.each(A,function($){
{
var A,B=(A=new C._c.N$jrt())&&A.init(),D=$&&$.N$Wn(),F=C._c.N$i8.N$l8(D,E),G=C._c.N$i8.N$f8(D,0);
C._c.N$Kt.N$an(D);
}
B&&B.N$Frt($&&$.N$Ln());
B&&B.N$Irt(0);
I&&I.N$qrt(B);
J.push(F);
K.push(G);
});
I&&I.N$Mrt(C._c.N$Jn.N$ir(60,84));
if(B){
var L=(G=new C._c.N$Rrt())&&G.init();
L&&L.N$Urt(B);
L&&L.N$zrt(D);
I&&I.N$Prt(L);
}
if(J.length){
var M=(H=new C._c.N$Rrt())&&H.init();
M&&M.N$Urt(J.join(" -- "));
M&&M.N$zrt(K.join(", "));
I&&I.N$Hrt(M);
}
return I;
};
E.N$kut=function($){
this.N$Sit=$;
this.N$Hst(2403,{});
};
E.N$Kgt=function(){
return{};
};
E.N$hyt=function(){
return[];
};
E.N$dyt=function(){};
E.N$vyt=function(){
return null;
};
E.N$Zgt=function(){};
E.N$myt=function(){};
E.N$Ugt=function(){};
E.N$Xgt=function(){};
E.N$Hst=function($,A){
this.N$vit._sendCommand($,A);
};
E.N$Lst=function(){
var $={};
$[A]=this.N$Jtt||{};
var C=this.N$vyt();
C&&($[B]=C);
return $;
};
E.N$pot=function($){
var A,B=(A=new C._c.N$Jet())&&A.init(),D=B&&B.N$Ptt(this.N$Cit,$["width"],$["height"],0);
return D&&D.N$ar();
};
E.N$dot=function($){
var A,B=(A=new C._c.N$rrt())&&A.init(),D=B&&B.N$brt(this.N$Sit,$["width"],$["height"],$["scale"],$["options"]);
return D&&D.N$ar();
};
E.N$rut=function($,A){
var B;
if(1400==$)return this.N$lyt();
if(1401==$)return this.N$Lst();
if(1403==$)return this.N$pot(A);
if(1404==$)return this.N$dot(A);
if(1402==$)return(B=this.N$vut())&&B.N$ar();
};
E.N$gyt=function(){
this.N$Zgt(this.N$Jtt);
this.N$cyt();
};
E.N$yyt=function(C){
var D=this,E=C["state"],F=this.N$lyt(),G=F["defaults"],H=F["choices"],I=E[A]||{},J=E[B]||{},K={};
$.each(G,function(A,B){
var C=I[B],D=G[B];
void 0!==C&&$.includes(H[B],C)&&(D=C);
K[B]=D;
});
D.N$Jtt=K;
D.N$dyt(J);
};
E.N$byt=function($){
var A=$["value"],B=$["group"];
this.N$Jtt[B]=A;
this.N$Zgt(this.N$Jtt);
this.N$cyt();
this.N$pyt();
};
E.N$wyt=function($){
var A=$["name"];
this.N$myt(A);
this.N$cyt();
this.N$pyt();
};
E.N$aut=function($,A){
3400==$?this.N$gyt():3401==$?this.N$yyt(A):3402==$?this.N$cyt():3403==$?this.N$byt(A):3404==$&&this.N$wyt(A);
};
return F;
});
}();
!function(){
"use strict";
C._registerClass("N$Eyt","N$Rgt",function(A,B){
function D(){
C._c.N$Rgt.call(this);
this.constructor=D;
this.N$_id=++C._id;
}
B.N$Ugt=function($,A){
A["Clef"]=$&&$.N$zgt();
A["KeySignature"]=$&&$.N$Wgt();
A["NoteLetter"]=$&&$.N$Wgt();
A["NoteQuality"]=$&&$.N$Wgt();
A["Chord"]=$&&$.N$qpt();
};
B.N$Xgt=function($,A){
A&&A.N$Vgt($["Clef"]);
A&&A.N$Jgt($["KeySignature"]);
A&&A.N$Jgt($["NoteLetter"]);
A&&A.N$Jgt($["NoteQuality"]);
A&&A.N$Kpt($["Chord"]);
};
B.N$Kgt=function(){
var A={},B={},D={},E={};
A["Clef"]=34;
A["KeySignature"]=0;
A["NoteLetter"]=0;
A["NoteQuality"]=0;
A["Chord"]=0;
this.N$Qgt(B);
this.N$Ggt(B);
this.N$Ygt(B);
var F={},G={},H={},I={},J=[0,1,3,2,4,5,6,7,15,16,14,8,17,18,19];
$.each(J,function($){
H[$]=C._c.N$i8.N$V8($);
F[$]=C._c.N$i8.N$z8($);
G[$]=C._c.N$i8.N$W8($);
I[$]=C._c.N$i8.N$X8($);
});
E["symbol"]=H;
E["short"]=F;
E["title"]=G;
E["ax"]=I;
B["Chord"]=J;
D["prefix"]="chord";
D["defaults"]=A;
D["choices"]=B;
D["strings"]=E;
return D;
};
B.N$Zgt=function($){
var A,B,D=$["Clef"],E=$["KeySignature"],F=$["NoteLetter"],G=$["NoteQuality"],H=$["Chord"],I=C._c.N$Kt.N$mn(F,G,4),J=C._c.N$K7.N$e2(H),K=J&&J.N$Y7(),L=I&&I.N$Hn(K);
if(-1==D){
L=this.N$eyt(L);
var M=C._c.N$i8.N$X8(H),N=this.N$tyt(L,M,null,3);
this.N$kut(N);
}else{
L=this.N$ayt(L,D);
var O=(A=new C._c.N$Xtt())&&A.init();
O&&O.N$tnt(D);
O&&O.N$nnt(E);
O&&O.N$fnt(16);
O&&O.N$lnt(C._c.N$Jn.N$ir(6,-6));
var P=C._c.N$mnt.N$vnt(L);
O&&O.N$dnt(P);
var Q=(B=new C._c.N$Lnt())&&B.init();
Q&&Q.N$Mnt(C._c.N$i8.N$V8(H));
Q&&Q.N$Dnt(C._c.N$i8.N$X8(H));
P&&P.N$Ent(Q);
this.N$Cut(O);
}
this.N$Uit(this.N$nyt(L));
};
return D;
});
}();
!function(){
"use strict";
C._registerClass("N$Syt","N$Rgt",function(A,B){
function D(){
C._c.N$Rgt.call(this);
this.constructor=D;
this.N$_id=++C._id;
}
B.N$Ugt=function($,A){
A["Clef"]=$&&$.N$zgt();
A["KeySignature"]=$&&$.N$Wgt();
A["NoteLetter"]=$&&$.N$Wgt();
A["NoteQuality"]=$&&$.N$Wgt();
A["Interval"]=$&&$.N$qpt();
A["Ascending"]=$&&$.N$Ft()?1:0;
};
B.N$Xgt=function($,A){
A&&A.N$Vgt($["Clef"]);
A&&A.N$Jgt($["KeySignature"]);
A&&A.N$Jgt($["NoteLetter"]);
A&&A.N$Jgt($["NoteQuality"]);
A&&A.N$Kpt($["Interval"]);
A&&A.N$zvt($["Ascending"]>0);
};
B.N$Kgt=function(){
var A={},B={},D={},E={};
A["Clef"]=34;
A["KeySignature"]=0;
A["NoteLetter"]=0;
A["NoteQuality"]=0;
A["Interval"]=85;
A["Ascending"]=1;
this.N$Qgt(B);
this.N$Ggt(B);
this.N$Ygt(B);
var F=[26,36,46,56,66,76,86,25,35,45,55,65,75,85,24,34,64,74,23,33,44,54,63,73,84],G={},H={};
$.each(F,function($){
G[$]=C._c.N$i8.N$O8($);
H[$]=C._c.N$i8.N$D8($);
});
E["title"]=G;
E["ax"]=H;
B["Ascending"]=[0,1];
B["Interval"]=F;
D["prefix"]="interval";
D["defaults"]=A;
D["choices"]=B;
D["strings"]=E;
return D;
};
B.N$Zgt=function($){
var A,B,D,E=$["Clef"],F=$["KeySignature"],G=$["NoteLetter"],H=$["NoteQuality"],I=$["Interval"],J=!!$["Ascending"],K=C._c.N$Kt.N$mn(G,H,4),L=(A=new C._c.N$J7())&&A.N$V7(I),M=[K,K&&K.N$Pn(L,J)];
if(-1==E){
M=this.N$eyt(M);
var N=C._c.N$i8.N$D8(I),O=this.N$tyt(M,N,null,3);
this.N$kut(O);
}else{
M=this.N$ayt(M,E);
var P=(B=new C._c.N$Xtt())&&B.init();
P&&P.N$tnt(E);
P&&P.N$nnt(F);
P&&P.N$fnt(16);
P&&P.N$lnt(C._c.N$Jn.N$ir(6,-6));
var Q=C._c.N$mnt.N$vnt(M);
P&&P.N$dnt(Q);
var R=(D=new C._c.N$Lnt())&&D.init();
R&&R.N$Mnt(C._c.N$i8.N$O8(I));
R&&R.N$Dnt(C._c.N$i8.N$D8(I));
Q&&Q.N$Ent(R);
this.N$Cut(P);
}
this.N$Uit(this.N$nyt(M));
};
return D;
});
}();
!function(){
"use strict";
var $="Tones";
C._registerClass("N$xyt","N$Rgt",function(A,B){
function D(){
C._c.N$Rgt.call(this);
this.N$Tyt=this.N$Nyt=null;
this.constructor=D;
this.N$_id=++C._id;
}
A.N$tut=function(){
return"matrix";
};
B.N$dyt=function(A){
A||(A={});
this.N$Nyt=A[$];
this.N$Nyt||(this.N$Nyt=[]);
this.N$Cyt();
};
B.N$vyt=function(){
var A={};
A[$]=this.N$Nyt;
return A;
};
B.N$Ugt=function(){};
B.N$Xgt=function(){};
B.N$Kgt=function(){
var $={},A={},B={},C=["0","1","2","3","4","5","6","7","8","9","10","11","reset","delete"];
A["ToneStyle"]=0;
B["ToneStyle"]=[0,1,2,3];
$["prefix"]="matrix";
$["defaults"]=A;
$["choices"]=B;
$["triggers"]=C;
return $;
};
B.N$Cyt=function(){
var $=[];
if(this.N$Nyt.length>0){
$.push("delete");
$.push("reset");
}
for(var A=[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],B=0;B<this.N$Nyt.length;B++)A[this.N$Nyt[B]]=!1;
for(var C=0;12>C;C++)A[C]&&$.push(""+C);
this.N$Tyt=$;
};
B.N$kyt=function(){
for(var $=this.N$Nyt,A=$.length,B=[],C=[],D=[],E=0;A>E;E++){
B[E]=[];
for(var F=0;E>=F;F++){
B[E][F]=(12+($[0]+($[F]-$[E])))%12;
B[F][E]=(12+($[0]+($[E]-$[F])))%12;
}
C[E]=(12+($[0]-$[E]))%12;
D[E]=(12+($[E]-$[0]))%12;
}
this.N$Hst(2404,{
tones:B,
"h-labels":D,
"v-labels":C
});
};
B.N$Lyt=function($){
for(var A={},B=[],D=[],E=void 0,F=void 0,G=0;12>G;G++){
if(2==$)E=F=C._c.N$i8.N$u8(G,7);else if(3==$)E=F=C._c.N$i8.N$u8(G,8);else if(1==$){
E=C._c.N$i8.N$S8(G,0,1,!1);
F=C._c.N$i8.N$T8(G,0,1,!1);
}else{
E=C._c.N$i8.N$S8(G,0,2,!1);
F=C._c.N$i8.N$T8(G,0,2,!1);
}
B.push(E);
D.push(F);
}
A["tone-title"]=B;
A["tone-ax"]=D;
this.N$Hst(2405,{
strings:A
});
};
B.N$hyt=function(){
return this.N$Tyt;
};
B.N$myt=function($){
"delete"==$?this.N$Nyt.pop():"reset"==$?this.N$Nyt=[]:this.N$Nyt.push(parseInt($,10));
this.N$kyt();
this.N$Cyt();
};
B.N$Zgt=function($){
this.N$Lyt($["ToneStyle"]);
this.N$kyt();
};
return D;
});
}();
!function(){
"use strict";
C._registerClass("N$Ayt","N$Rgt",function(A,B){
function D(){
C._c.N$Rgt.call(this);
this.constructor=D;
this.N$_id=++C._id;
}
B.N$Ugt=function($,A){
A["Clef"]=$&&$.N$zgt();
A["NoteLetter"]=$&&$.N$Wgt();
A["NoteQuality"]=$&&$.N$Wgt();
A["Scale"]=$&&$.N$qpt();
A["DisplayMode"]=$&&$.N$Wgt();
};
B.N$Xgt=function($,A){
A&&A.N$Vgt($["Clef"]);
A&&A.N$Jgt($["NoteLetter"]);
A&&A.N$Jgt($["NoteQuality"]);
A&&A.N$Kpt($["Scale"]);
A&&A.N$Jgt($["DisplayMode"]);
};
B.N$Kgt=function(){
var A={},B={},D={},E={};
A["Clef"]=34;
A["NoteLetter"]=0;
A["NoteQuality"]=0;
A["Scale"]=0;
A["DisplayMode"]=0;
this.N$Ggt(B);
this.N$Ygt(B);
var F=[0,10,11,12,20,21,22,23,24,25,26],G={};
$.each(F,function($){
G[$]=C._c.N$i8.N$b8($);
});
E["title"]=G;
B["Scale"]=F;
B["DisplayMode"]=[0,1];
D["prefix"]="scale";
D["defaults"]=A;
D["choices"]=B;
D["strings"]=E;
return D;
};
B.N$Zgt=function(A){
var B,D,E,F=this,G=A["Clef"],H=A["NoteLetter"],I=A["NoteQuality"],J=A["Scale"],K=A["DisplayMode"],L=C._c.N$Kt.N$mn(H,I,4),M=(B=new C._c.N$M9())&&B.N$V7(J),N=0;
0==K&&(N=M&&M.N$V9(L));
var O=M&&M.N$W9(L,0);
if(-1==G){
O=this.N$eyt(O);
var P=C._c.N$i8.N$y8(J,L&&L.N$Wn(),0),Q=null,R=this.N$tyt(O,P,Q,2),S=0;
$.each(R&&R.N$Ert(),function($){
$&&$.N$Irt(S++);
});
F.N$kut(R);
}else{
O=F.N$ayt(O,G);
var T=(D=new C._c.N$Xtt())&&D.init();
T&&T.N$tnt(G);
T&&T.N$nnt(N);
T&&T.N$fnt(20);
T&&T.N$hnt(1);
T&&T.N$ant(2);
T&&T.N$lnt(C._c.N$Jn.N$ir(6,-6));
$.each(O,function($){
var A=C._c.N$mnt.N$vnt([$]);
T&&T.N$dnt(A);
});
F.N$Cut(T);
}
for(var U,V=(E=new C._c.N$jr())&&E.N$Qr(2),W=0,X=O?O.length:0;X>W;W++){
U=O[W];
V&&V.N$si(U&&U.N$Ln(),.33);
}
F.N$Uit(V);
};
return D;
});
}();
!function(){
"use strict";
function $($,A){
var C;
if($==A)return!0;
if(B.isObject($)&&B.isObject(A))return(C=$)&&C.isEqual_(A);
return!1;
}
C._registerClass("N$Oyt",null,function(A){
function B(){
this.constructor=B;
this.N$_id=++C._id;
}
A.N$Myt=function($,A){
Array.prototype.push.apply($,A);
};
A.N$Dyt=function($,A,B){
$.splice(B,0,A);
};
A.N$Pyt=function($,A){
$.splice(A,1);
};
A.N$Hyt=function(A,B){
if(A===B)return!0;
var C=A.length;
if(C!=B.length)return!1;
for(var D=0;C>D;D++)if(!$(A[D],B[D]))return!1;
return!0;
};
A.N$Byt=function($,A){
return C._c.N$Oyt.N$jyt($,A)>=0;
};
A.N$jyt=function(A,B){
for(var C=0,D=A.length;D>C;C++)if($(A[C],B))return C;
return-1;
};
return B;
});
}();
!function(){
"use strict";
var A=null;
C._g.N$F7=function($){
var B,D,E;
A||(A=(B=(D=C._c.N$St)&&D.alloc())&&B.init());
(E=A)&&E.N$At($);
};
C._g.N$I7=function($){
C._g.N$F7($.join("\n    "));
};
var D=void 0;
C._registerClass("N$ost",null,function(E,F){
function G(){
this.N$Fyt=null;
this.constructor=G;
this.N$_id=++C._id;
}
E.N$Si=function(){
var $;
D||(D=($=this.alloc())&&$.init());
return D;
};
F.init=function(){
var $=this;
($=G.N$_super.prototype.init.call(this))&&($.N$Fyt=[]);
return $;
};
F.N$sst=function(A){
$.includes(this.N$Fyt,A)||this.N$Fyt.push(A);
};
F.N$Iyt=function(){
var C=[],D={};
$.each(this.N$Fyt,function($){
Object.assign(D,$&&$.N$eut());
});
function E($){
if(B.isObject($))return $&&$.description();
try{
return JSON.stringify($);
}catch(A){
return"???";
}
}
$.each($.keys(D).sort(),function($){
var A=D[$];
C.push($+":");
C.push(E(A));
C.push("");
});
return{
h:C.join("\n"),
l:A&&A.N$Ot()
};
};
return G;
});
}();
!function($){
var A,B;
function D($){
return JSON.stringify($,function($,A){
return"n"==$&&A?"<redacted>":A;
});
}
function E($,A,B){
var E=$+" "+A;
if(B){
var F="";
try{
F=3001==A||1003==A?D(B,"n"):3009==A||1002==A?"<redacted>":JSON.stringify(B);
}catch(G){
F="???";
}
C._g.N$F7(E+F);
}else C._g.N$F7(E);
}
var F=void 0;
C._registerClass("N$ktt",null,function($,A){
function B(){
this.N$qyt=null;
this.N$Ryt=this.N$Uyt=!1;
this.constructor=B;
this.N$_id=++C._id;
}
A.N$zyt=function($){
this.N$Uyt=$;
};
A.N$Ctt=function(){
return this.N$Uyt;
};
A.N$Wyt=function($){
this.N$Ryt=$;
};
A.N$Rht=function(){
return this.N$Ryt;
};
$.N$Si=function(){
var $;
F||(F=($=this.alloc())&&$.init());
return F;
};
A.N$Xyt=function($){
var A=null;
A||(A=C._c.N$fst.N$ast($,!0));
A||(A=C._c.N$fst.N$ast(unescape($),!0));
return A;
};
A.N$Vyt=function($){
return new G($);
};
A.N$Jyt=function($){
var A,B=C._c.N$fst.N$Kyt($);
if(B){
var D=(A=B&&B.alloc())&&A.init();
return this.N$Vyt(D);
}
return null;
};
A.N$Cst=function(){
return"62c163e5bae545149bad327d8bba02d0";
};
A.N$eut=function(){
var $;
return($=C._c.N$ost.N$Si())&&$.N$Iyt();
};
A.N$Qyt=function($){
var A={},B=A[$];
B||(B=$);
return B;
};
A.N$Gyt=function($){
this.N$qyt=$;
};
A.N$Yyt=function(){
return this.N$qyt;
};
return B;
});
function G($){
var A,B=this;
(A=$)&&A.N$Kit(B);
B._wrapped=$;
B.nextTick=0;
}
G.prototype._sendCommand=function($,A){
2003!=$&&E("<-C",$,A);
this.handleCommand($,A);
};
G.prototype.sendRequest=function($,A){
var B,C=this._wrapped;
E("R->",$,A);
var D=(B=C)&&B.N$rut($,A);
E("<-R",$,D);
return D;
};
G.prototype.sendAction=function($,A){
var B;
E("A->",$,A);
var C=this._wrapped;
(B=C)&&B.N$aut($,A);
};
G.prototype.sendTick=function(){
var $,A=this._wrapped;
return($=A)&&$.N$Bot();
};
G.prototype.handleCommand=function(){};
var H=(A=C._c.N$ktt)&&A.N$Si();
(B=H)&&B.N$Gyt($);
$.TenutoBridge={
getRegistryInfo:function($){
var A;
return(A=H)&&A.N$Xyt($);
},
makeBridgedObject:function($){
var A;
return(A=H)&&A.N$Jyt($);
},
getMappedVersion:function($){
var A;
return(A=H)&&A.N$Qyt($);
},
setPrefersTouchEvents:function($){
var A;
(A=H)&&A.N$zyt($);
},
getPrefersTouchEvents:function(){
var $;
return($=H)&&$.N$Ctt();
},
getBuildUUIDString:function(){
var $;
return($=H)&&$.N$Cst();
},
getDebugReportObject:function(){
var $;
return($=H)&&$.N$eut();
},
setBetaEnabled:function($){
var A;
(A=H)&&A.N$Wyt($);
},
getBetaEnabled:function(){
var $;
return($=H)&&$.N$Rht();
}
};
}(this);
!function(){
"use strict";
var A=null,B=null,D=null,E=null,F=null;
function G(){
var G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,a,b,c,d,e,f,g,h,i,j;
A={};
B={};
D={};
E={};
F={
"exercise:generic-interval":"exercise:interval"
};
$.each([{
n:1,
p:"note",
c:(G=C._c.N$xgt)&&G["class"]()
},{
n:2,
p:"keysig",
c:(H=C._c.N$xmt)&&H["class"]()
},{
n:3,
p:"interval",
c:(I=C._c.N$hmt)&&I["class"]()
},{
n:4,
p:"generic-interval",
c:(J=C._c.N$hmt)&&J["class"]()
},{
n:23,
p:"scale",
c:(K=C._c.N$Fgt)&&K["class"]()
},{
n:5,
p:"chord",
c:(L=C._c.N$Tvt)&&L["class"]()
},{
n:17,
p:"note-construction",
c:(M=C._c.N$ogt)&&M["class"]()
},{
n:21,
p:"keysig-construction",
c:(N=C._c.N$gmt)&&N["class"]()
},{
n:18,
p:"interval-construction",
c:(O=C._c.N$Gvt)&&O["class"]()
},{
n:22,
p:"scale-construction",
c:(P=C._c.N$Cgt)&&P["class"]()
},{
n:19,
p:"chord-construction",
c:(Q=C._c.N$svt)&&Q["class"]()
},{
n:6,
p:"keyboard",
c:(R=C._c.N$Kmt)&&R["class"]()
},{
n:7,
p:"keyboard-reverse",
c:(S=C._c.N$Gmt)&&S["class"]()
},{
n:8,
p:"keyboard-interval",
c:(T=C._c.N$Vmt)&&T["class"]()
},{
n:24,
p:"keyboard-scale",
c:(U=C._c.N$rgt)&&U["class"]()
},{
n:9,
p:"keyboard-chord",
c:(V=C._c.N$Cmt)&&V["class"]()
},{
n:10,
p:"fretboard",
c:(W=C._c.N$qvt)&&W["class"]()
},{
n:14,
p:"fretboard-interval",
c:(X=C._c.N$Hvt)&&X["class"]()
},{
n:25,
p:"fretboard-scale",
c:(Y=C._c.N$Wvt)&&Y["class"]()
},{
n:16,
p:"fretboard-chord",
c:(Z=C._c.N$Cvt)&&Z["class"]()
},{
n:20,
p:"ear-keyboard",
c:(_=C._c.N$Mmt)&&_["class"]()
},{
n:15,
p:"ear-note",
c:(a=C._c.N$wgt)&&a["class"]()
},{
n:11,
p:"ear-interval",
c:(b=C._c.N$lmt)&&b["class"]()
},{
n:12,
p:"ear-scale",
c:(c=C._c.N$Hgt)&&c["class"]()
},{
n:13,
p:"ear-chord",
c:(d=C._c.N$wvt)&&d["class"]()
}],function($){
var C=$.p,G=$.n,H=$.c,I="exercise:"+C;
A[I]=H;
D[G]=C;
E[C]=G;
B[C]=H;
F[I]||(F[I]=I);
});
$.each([{
p:"accidental",
c:(e=C._c.N$qgt)&&e["class"]()
},{
p:"interval",
c:(f=C._c.N$Syt)&&f["class"]()
},{
p:"scale",
c:(g=C._c.N$Ayt)&&g["class"]()
},{
p:"chord",
c:(h=C._c.N$Eyt)&&h["class"]()
},{
p:"analysis",
c:(i=C._c.N$ryt)&&i["class"]()
},{
p:"matrix",
c:(j=C._c.N$xyt)&&j["class"]()
}],function($){
var B="calculator:"+$.p;
A[B]=$.c;
F[B]=B;
});
}
C._registerClass("N$fst",null,function(H){
function I(){
this.constructor=I;
this.N$_id=++C._id;
}
H.N$ast=function(B,C){
var D,E="exercise",H="calculator",I={
exercises:E,
calculators:H
},J=B;
if(!J)return null;
var K=J.indexOf("#");
K>=0&&(J=J.substring(0,K));
var L=J.indexOf("?");
L>=0&&(J=J.substring(0,L));
var M=null,N=null,O=null,P=null;
$.each(J.split("/"),function($){
if(!$&&!M)return;
var A=$.toLowerCase();
if(M)if(N)O||(O=$);else{
N=A;
P+="/"+A;
}else{
M=I[A];
M&&(P="/"+A);
}
});
if(O){
O=O.replace(/[^A-Za-z0-9].*?$/,"");
P+="/"+O;
}
A||G();
var Q=F[M+":"+N],R=A[Q],S=!!R;
if(S&&N&&O&&C&&M==E){
var T=R&&R.N$Git(),U=(D=T&&T.alloc())&&D.init(),V=U&&U.N$cst(N,O);
S=V&&!(U&&U.N$hst());
}
return{
identifier:Q,
type:M,
prefix:N,
options:O,
path:P,
valid:S
};
};
H.N$Kyt=function($){
A||G();
return A[$];
};
H.N$Bat=function($){
B||G();
return B[$];
};
H.N$Sft=function($){
D||G();
return D[$]||null;
};
H.N$Aat=function($){
E||G();
return E[$]||0;
};
return I;
});
}();
!function(){
"use strict";
C._registerClass("N$qht",null,function(A,B){
function D(){
this.N$Zyt=null;
this.constructor=D;
this.N$_id=++C._id;
}
A.N$Iht=function($){
$||($="");
$=$.toLowerCase();
$=$.replace("l","1");
$=$.replace("0","o");
$=$.replace("2","z");
$=$.replace("v","u");
for(var A=[],B=0,C=$.length;C>B;B++){
var D=$.charAt(B),E="ybndrfg8ejkmcpqxot1uwisza345h769".indexOf(D);
E>=0&&A.push(E);
}
return A;
};
A.N$ebt=function(){
return[0,-1,-2,34,22,28,26,32,30,24,20,36];
};
B.N$Uht=function($){
var A=this;
(A=D.N$_super.prototype.init.call(this))&&(A.N$Zyt=$);
return A;
};
B.N$bn=function($){
var A,B=(A=this.constructor)&&A.N$Iht($);
return this.N$Uht(B);
};
B.N$tbt=function(){
return this.N$Zyt.length>0?this.N$Zyt.shift():void 0;
};
B.N$nbt=function(){
var $=this.N$tbt(),A=void 0;
void 0!==$&&(A=$<<27>>27);
return A;
};
B.N$rbt=function(){
var $=this.N$tbt(),A=this.N$tbt(),B=void 0;
void 0!==$&&void 0!==A&&(B=($<<5|A)<<22>>22);
return B;
};
B.N$Fpt=function(){
var $=this.N$tbt();
return $;
};
B.N$Ft=function(){
var $=this.N$Wgt()>0;
return $;
};
B.N$Wgt=function(){
var $=this.N$nbt();
return $;
};
B.N$qpt=function(){
var $=this.N$rbt();
return $;
};
B.N$zgt=function(){
var $,A=this.N$tbt(),B=($=this.constructor)&&$.N$ebt(),C=B[A];
return C;
};
B.N$Dpt=function(){
var $=this.N$tbt(),A=[$],B=[];
if(void 0!==$){
1&$&&B.push(34);
2&$&&B.push(22);
4&$&&B.push(28);
8&$&&B.push(26);
if(16&$){
var C=this.N$tbt();
A.push(C);
if(0===C&&0===B.length)B.push(-2);else{
1&C&&B.push(32);
2&C&&B.push(30);
4&C&&B.push(24);
8&C&&B.push(20);
}
}
}
0===B.length&&B.push(34);
return B;
};
B.N$Ipt=function($){
for(var A=!0,B=[],C=0;$>C;C+=5){
var D=this.N$tbt();
if(void 0===D)return void 0;
for(var E=0;5>E&&$>C+E;E++){
var F=(D&1<<E)>0;
B.push(F);
F&&(A=!1);
}
}
A&&(B=void 0);
return B;
};
B.N$Bpt=function(A){
var B=this.N$Fpt();
if($.isNumber(B))return A[B];
return null;
};
B.N$jpt=function($){
var A=this.N$Ipt($.length),B=[];
if(A)for(var C=0,D=$.length;D>C;C++)A[C]&&B.push($[C]);
return B;
};
B.N$Ppt=function(){
var $=this.N$tbt(),A=void 0,B=void 0;
if(31==$){
A=this.N$rbt();
B=this.N$rbt();
if(void 0===A||void 0===B)return C._c.N$Jn.N$ir(-8,8);
}else{
A=$;
B=this.N$tbt();
if(void 0===A||void 0===B)return C._c.N$Jn.N$ir(-8,8);
A-=12;
B-=12;
A>18&&(A=18);
-12>A&&(A=-12);
B>18&&(B=18);
-12>B&&(B=-12);
}
return A>B?C._c.N$Jn.N$ir(B,A):C._c.N$Jn.N$ir(A,B);
};
B.N$Hpt=function(){
var $=this.N$tbt(),A=this.N$tbt(),B=this.N$tbt();
if(void 0===$||void 0===A||void 0===B)return void 0;
var D=$<<3|A>>2,E=(3&A)<<5|B;
return D>E?C._c.N$Jn.N$ir(E,D):C._c.N$Jn.N$ir(D,E);
};
B.N$Xht=function(){
return 0===this.N$Zyt.length;
};
return D;
});
}();
!function(){
"use strict";
C._registerClass("N$Vht",null,function(A,B){
function D(){
this.N$Zyt=null;
this.constructor=D;
this.N$_id=++C._id;
}
B.init=function(){
var $=this;
($=D.N$_super.prototype.init.call(this))&&($.N$Zyt=[]);
return $;
};
B.N$Vpt=function($){
this.N$Zyt.push($>=0?$:0);
};
B.N$zvt=function($){
this.N$Jgt($?1:0);
};
B.N$Jgt=function($){
this.N$Vpt(31&$);
};
B.N$Kpt=function($){
this.N$Vpt($>>5&31);
this.N$Vpt(31&$);
};
B.N$ibt=function($,A){
if($>=-12&&18>=$&&A>=-12&&18>=A){
this.N$Vpt($+12);
this.N$Vpt(A+12);
}else{
this.N$Vpt(31);
this.N$Kpt($);
this.N$Kpt(A);
}
};
B.N$Upt=function($){
var A=void 0,B=void 0;
if($)if($ instanceof C._c.N$Jn){
A=$&&$.N$rr();
B=$&&$.N$nr();
}else{
A=$[0];
B=$[1];
}else{
A=-10;
B=10;
}
this.N$ibt(A,B);
};
B.N$zpt=function($){
var A=void 0,B=void 0;
if($)if($ instanceof C._c.N$Jn){
A=$&&$.N$rr();
B=$&&$.N$nr();
}else{
A=$[0];
B=$[1];
}else{
A=0;
B=0;
}
this.N$Vpt(A>>>3);
this.N$Vpt((7&A)<<2|B>>>5);
this.N$Vpt(31&B);
};
B.N$Vgt=function($){
var A=C._c.N$qht.N$ebt(),B=A.indexOf($);
0>B&&(B=0);
this.N$Vpt(B);
};
B.N$Rpt=function($){
for(var A={},B=0,C=$.length;C>B;B++)A[$[B]]=!0;
var D=(A[34]?1:0)+(A[22]?2:0)+(A[28]?4:0)+(A[26]?8:0),E=(A[32]?1:0)+(A[30]?2:0)+(A[24]?4:0)+(A[20]?8:0);
if(A[-2]){
this.N$Zyt.push(16);
this.N$Zyt.push(0);
}else if(E>0){
this.N$Zyt.push(D+16);
this.N$Zyt.push(E);
}else this.N$Zyt.push(D);
};
B.N$Jpt=function($){
for(var A=[],B=0,C=$.length;C>B;B++){
var D=Math.floor(B/5);
A[D]||(A[D]=0);
A[D]+=$[B]?1<<B%5:0;
}
this.N$Zyt=this.N$Zyt.concat(A);
};
B.N$Wpt=function(A,B){
B===!0?B=1:B||(B=0);
this.N$Vpt($.indexOf(A,B));
};
B.N$Xpt=function(A,B){
for(var C=[],D=0,E=A.length;E>D;D++)C[D]=$.includes(B,A[D]);
this.N$Jpt(C);
};
B.N$Kht=function(){
for(var $=[],A=0,B=this.N$Zyt.length;B>A;A++){
var C=this.N$Zyt[A];
$[A]="ybndrfg8ejkmcpqxot1uwisza345h769".charCodeAt(C);
}
return String.fromCharCode.apply($,$);
};
return D;
});
}();
}).call(this);