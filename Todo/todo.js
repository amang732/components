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

//For appending the li node into the list
var btn=document.getElementById("todo-btn");
btn.addEventListener("click",addition);
function addition(){ 
    item=//'<li class="info">'+
                  '<!-- drag handle -->'+
                  '<span class="handle">'+
                        '<i class="fa fa-bars"></i>'+ 
                      '</span>'+
                 ' <!-- checkbox -->'+
                  '<input type="checkbox" value="">'+
                  '<!-- todo text -->'+
                  '<span class="text">Design a nice theme</span>'+
                  '<!-- Emphasis label -->'+
                  '<small class="label label-danger"><i class="fa fa-clock-o"></i> 2 mins</small>'+
                  '<!-- General tools such as edit or delete-->'+
                  '<div class="tools">'+
                    '<i class="fa fa-edit"></i>'+
                    '<i class="fa fa-trash-o"></i>'+
                  '</div>';
                //'</li>';
    //console.log("item "+item);
    //console.log("append child "+n.childNodes[0].nodeName);
    var classname=["info","danger","primary","warning","success"];
    var randomclass = classname[Math.floor(Math.random()*classname.length)];
    var li=document.createElement('li');
    li.setAttribute('class',randomclass);
    li.innerHTML+=item;
    n.appendChild(li);
  }
  