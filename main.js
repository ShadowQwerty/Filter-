function preload() {
    
}

function setup() {
canvas=createCanvas(500,400);
canvas.position(300,250);
video=createCapture(VIDEO);
video.hide();
}
var f="";

function apply() {
    f=document.getElementById("fc").value;
}

function draw() {
    image(video,0,0,500,400);
    tint(f);
}
function take_snapshot() {
    save('filter.png');
}