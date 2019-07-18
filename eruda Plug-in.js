// ==UserScript==
// @name        测试当前1.3.0
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        https://www.yunpanjingling.com/
// @grant        none
// ==/UserScript==


//下面是汉化项目
document.onmousedown=function(ev){
setTimeout(function (){

var as = document.getElementsByTagName("h2");
for(var i = 0; i < as.length; i++) {  
var txt = as[i].innerText || as[i].textContent; 
 
if(txt === "Attributes") 
{ as[i].setAttribute('class',"ysbq-sx");
var hhbys = document.getElementsByClassName("ysbq-sx")[0];
     hhbys.innerHTML="属性" ;
 
var hhbys = document.getElementsByClassName("eruda-toggle-all-computed-style eruda-active-effect")[0];
     hhbys.innerHTML="加载样式" ; 
}

    
if(txt === "Styles") 
{ as[i].setAttribute('class',"ysbq-ys");
var hhbys = document.getElementsByClassName("ysbq-ys")[0];
     hhbys.innerHTML="样式" ;
}

    
 if(txt === "Event Listeners") 
{ as[i].setAttribute('class',"ysbq-sjjk");
var hhbys = document.getElementsByClassName("ysbq-sjjk")[0];
    hhbys.innerHTML="事件监控"
}
    

  
 }

    







//下面是点击复制class的功能
var as = document.getElementsByTagName("td");
for(var i = 0; i < as.length; i++) {  
var txt = as[i].innerText || as[i].textContent; 
if(txt === "class") 
{ as[i+1].setAttribute('class',"cslass");

var btn = document.getElementsByClassName('cslass');
    btn[0].addEventListener('click', function(){

//创建input标签
var hm = document.createElement("input");
hm.id = "fzwb";
hm.type = "text";
hm.value = document.getElementsByClassName("cslass")[0].innerHTML;
hm.style = "opacity:0";
var s = document.getElementById("eruda"); 
s.parentNode.insertBefore(hm, s)
hm.focus();
hm.setSelectionRange(0, hm.value.length);
var res = document.execCommand('copy', true);
alert(hm.value)

var obj=document.getElementById("fzwb");
var parentObj=obj.parentNode;
parentObj.removeChild(obj);

        
  });


}}






























}, 100);
}
