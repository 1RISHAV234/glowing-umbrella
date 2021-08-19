var canvas1 = document.getElementById("myCanvas");
ctx = canvas1.getContext("2d")
var mouseevent = "empty";
var color = document.getElementById("color").value;
var width = document.getElementById("width").value;
var radius = document.getElementById("radius").value;

canvas1.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
    mouseevent = "mousedown";
}

canvas1.addEventListener("mouseup",my_mouseup);

function my_mouseup(e) {
    mouseevent = "mouseup"
}

canvas1.addEventListener("mouseleave" , my_mouse_leave);

function my_mouse_leave(e) {
    mouseevent = "mouseleave";
}

canvas1.addEventListener("mousemove",my_mouse_move);

function my_mouse_move(e) {
    c_x = e.clientX - canvas1.offsetLeft;
    c_y = e.clientY - canvas1.offsetTop;
    if (mouseevent == "mousedown"){
        console.log("Current pos. of x ="+c_x);
        console.log("Current pos. of y ="+c_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(c_x , c_y , radius , 0 , 2*Math.PI);
        ctx.stroke();
    }
}