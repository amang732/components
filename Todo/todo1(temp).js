var n= document.getElementsByTagName("ul")[1];
ip=document.getElementsByTagName("input");
ip[0].addEventListener("change",done);
ip[1].addEventListener("change",done1);
ip[2].addEventListener("change",done2);
ip[3].addEventListener("change",done3);
ip[4].addEventListener("change",done4);
ip[5].addEventListener("change",done5);

function done(){
	if(this.checked) {
        // Checkbox is checked..
        n.childNodes[1].classList.add("done");
    } else {
        // Checkbox is not checked..
        n.childNodes[1].classList.remove("done");
    }
 }   
function done1(){
	if(this.checked) {
        // Checkbox is checked..
        n.childNodes[3].classList.add("done");
    } else {
        // Checkbox is not checked..
        n.childNodes[3].classList.remove("done");
    }
 } 
 function done2(){
	if(this.checked) {
        // Checkbox is checked..
        n.childNodes[5].classList.add("done");
    } else {
        // Checkbox is not checked..
        n.childNodes[5].classList.remove("done");
    }
 }
 function done3(){
	if(this.checked) {
        // Checkbox is checked..
        n.childNodes[7].classList.add("done");
    } else {
        // Checkbox is not checked..
        n.childNodes[7].classList.remove("done");
    }
 }
 function done4(){
	if(this.checked) {
        // Checkbox is checked..
        n.childNodes[9].classList.add("done");
    } else {
        // Checkbox is not checked..
        n.childNodes[9].classList.remove("done");
    }
 }
 function done5(){
	if(this.checked) {
        // Checkbox is checked..
        n.childNodes[11].classList.add("done");
    } else {
        // Checkbox is not checked..
        n.childNodes[11].classList.remove("done");
    }
 }  
/* var done=document.getElementById("todobox");
console.log("class : "+done);
var done1 =document.getElementsByTagName("li")[0];
console.log("query : "+done1);

console.log("parent node :"+done1.nodeName);

var checkbox = document.querySelectorAll("input[name=checkbox]");

checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        n.childNodes[1].classList.add("done");
    } else {
        // Checkbox is not checked..
        n.childNodes[1].classList.remove("done");
    }
});

     

var btn=document.getElementById("todo-btn");
var ip=[];

var len=ip.lenght;
console.log("len "+ip.lenght);

*/
/*
for(var i=0; i < len; i++) {
   ip[i].addEventListener("change",done);
   }
console.log("len "+len);
//btn.addEventListener("click",done);



 //n.childNodes[1].classList.add("done");
}
console.log("ul node ",n.childNodes[1]);
console.log("input node ",document.getElementsByTagName("input"));
console.log("node name",n.nodeName);
//console.log("node type",n.nodeType);
//console.log("node parent",n.parentNode);
console.log("child node",n.childNodes);
console.log("child node lenght",n.childNodes.length);
//console.log("only elements",elements(n.childNodes));
$(function () {

  'use strict';

$('.todo-list').sortable({
    placeholder         : 'sort-highlight',
    handle              : '.handle',
    forcePlaceholderSize: true,
    zIndex              : 999999
  });
$('.todo-list').todoList({
    onCheck  : function () {
      window.console.log($(this), 'The element has been checked');
    },
    onUnCheck: function () {
      window.console.log($(this), 'The element has been unchecked');
    }
  });

});
*/