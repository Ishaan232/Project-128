song1=" ";
song2=" ";
function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    z=ml5.poseNet(video,modelLoaded);
    z.on('pose',afn);
}

function modelLoaded(){
    console.log("Posenet is initialized")
}

function draw(){

}

function play(){
    
}

function gotposes(result){
    if (result.length >0){
        console.log(result);
        leftWristx=result[0].pose.leftWrist.x;
        leftWristy=result[0].pose.leftWrist.y;
        rightWristx=result[0].pose.rightWrist.x;
        rightWristy=result[0].pose.rightWrist.y;
        leftWrists=result[0].pose.keypoints[9].score;
        rightWrists=result[0].pose.keypoints[10].score;
        console.log("Left wrist x is",leftWristx);
        console.log("Left wrist y is",leftWristy);
        console.log("Right wrist x is",rightWristx);
        console.log("Right wrist y is",rightWristy);
        console.log("Left wrist score is",leftWrists);
        console.log("Right wrist score is",rightWrists);
    }
}    