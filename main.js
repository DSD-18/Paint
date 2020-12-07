var canvas = document.getElementById("myCanvas");

ctx= canvas.getContext("2d");
 var mouseEvent;

 canvas.addEventListener("mousedown", mymousedown);

 function mymousedown(e){
     mouseEvent = "mousedown";
 }

 canvas.addEventListener("mouseup", mymouseup);

 function mymouseup(e){
     mouseEvent= "mouseup";
 }

 canvas.addEventListener("mouseleave", mymouseleave);

 function mymouseleave(e){
     mouseEvent= "mouseleave";
 }

 canvas.addEventListener("mousemove", mymousemove);

 function mymousemove(e){
 
current_x = e.clientX-canvas.offsetLeft;
current_y = e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.arc(current_x,current_y,40,0,2*Math.PI);
    ctx.stroke();
}
last_x=current_x;
last_y=current_y;
}