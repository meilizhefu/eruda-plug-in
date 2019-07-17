// ==UserScript==
// @name        eruda Plug-in
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        https://github.com/meilizhefu/eruda-plug-in
// @grant        none
// ==/UserScript==


document.onmousedown=function(ev){
setTimeout(function (){


var as = document.getElementsByTagName("h2");
for(var i = 0; i < as.length; i++) {  
var txt = as[i].innerText || as[i].textContent; 
if(txt === "Attributes") { 
as[i].setAttribute('class',"ysbq-sx");
}
 }

var hhbys = document.getElementsByClassName("ysbq-sx")[0];
hhbys.innerHTML="属性"


}, 100);
}