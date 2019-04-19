var btnobj=document.querySelector(".colorbtn");
//console.log(btnobj); check

// now add event listerner

btnobj.addEventListener("click",myfun);

var color=["yellow","orange","white","tomato","cyan","grey","green","coral"];

var bodyobj=document.getElementsByTagName("body");

function myfun(e){
  //console.log("yes check");
  e.preventDefault();
//console.log(bodyobj[0]); check;

var rand=Math.floor(Math.random()*color.length);

//console.log(Math.floor(Math.random()*color.length));
bodyobj[0].style.backgroundColor=color[rand];

}
