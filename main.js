function preload(){

}

function setup(){
canvas= createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();
tintcolor="";
}

 function draw(){
    image(video,0,0,400,400);
    tint(tintcolor);

    fill("pink");
    stroke("white");
    rect(20,20,10,360)

    fill("pink");
    stroke("white");
    rect(370,20,10,360)

    fill("pink");
    stroke("white");
    rect(20,20,360,10)

    fill("pink");
    stroke("white");
    rect(20,370,360,10)

    fill("pink");
    stroke("white");
    circle(10,10,260,10)

    fill("pink");
    stroke("white");
    circle(10,370,210,20)

    fill("pink");
    stroke("white");
    circle(370,10,210,20)

    fill("pink");
    stroke("white");
    circle(370,370,210,20)

 }

function filtercolor(){
    tintcolor=document.getElementById("filtertint").value;
}

function take_snapshot(){
save("chenin.png");
}