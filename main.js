nose_x = 0;
nose_y = 0;

function preload(){
    moustache = loadImage('https://i.postimg.cc/9MBx7HX8/m.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotPoses);
}

function modelloaded(){
    console.log("posenet is initalized");
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(moustache, nose_x, nose_y, 80, 35);
}

function take_snapshot(){
    save('image.png');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x - 40;
        nose_y = results[0].pose.nose.y;
    }
}