import { $APP, shadow$provide, $jscomp } from "./nbb_core.js";
const shadow_esm_import = function(x) { return import(x) };
var dQa;$APP.S5=function(a,b){const c=Array.prototype.slice.call(arguments),d=c.shift();if("undefined"==typeof d)throw Error("[goog.string.format] Template required");return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g,function(e,f,k,n,r,p,y,z){if("%"==p)return"%";const E=c.shift();if("undefined"==typeof E)throw Error("[goog.string.format] Not enough arguments");arguments[0]=E;return $APP.S5.Ad[p].apply(null,arguments)})};dQa=new $APP.t(null,"format","format",333606761,null);/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
$APP.S5.Ad={};$APP.S5.Ad.s=function(a,b,c){return isNaN(c)||""==c||a.length>=Number(c)?a:a=-1<b.indexOf("-",0)?a+(0,$APP.CA)(" ",Number(c)-a.length):(0,$APP.CA)(" ",Number(c)-a.length)+a};
$APP.S5.Ad.f=function(a,b,c,d,e){d=a.toString();isNaN(e)||""==e||(d=parseFloat(a).toFixed(e));let f;f=0>Number(a)?"-":0<=b.indexOf("+")?"+":0<=b.indexOf(" ")?" ":"";0<=Number(a)&&(d=f+d);if(isNaN(c)||d.length>=Number(c))return d;d=isNaN(e)?Math.abs(Number(a)).toString():Math.abs(Number(a)).toFixed(e);a=Number(c)-d.length-f.length;0<=b.indexOf("-",0)?d=f+d+(0,$APP.CA)(" ",a):(b=0<=b.indexOf("0",0)?"0":" ",d=f+(0,$APP.CA)(b,a)+d);return d};
$APP.S5.Ad.d=function(a,b,c,d,e,f,k,n){return $APP.S5.Ad.f(parseInt(a,10),b,c,d,0,f,k,n)};$APP.S5.Ad.i=$APP.S5.Ad.d;$APP.S5.Ad.u=$APP.S5.Ad.d;$APP.mV.h($APP.tI,null);$APP.zy(new $APP.h(null,2,[$APP.Fx,new $APP.h(null,1,[$APP.CF,{format:$APP.S5}],null),$APP.Ut,new $APP.h(null,1,[$APP.CF,new $APP.h(null,1,[dQa,$APP.S5],null)],null)],null));