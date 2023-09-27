song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
    if(scoreLeftWrist > 0.2)
{
    circle(leftWristX, leftWristY, 20);
    IsNumberleftWristY = Number(leftWrist);
    remove_decimals = floor(InNumberleftWristY);
    song1 = remove_decimals/500;
    document.getElementById("song1").innerHTML = "Song1 = " + song1;
    
}
if(scoreRightWrist > 0.2)
{
    circle(leftWristX, leftWristY, 20);
    IsNumberleftWristX = Number(rightWrist);
    remove_decimals = floor(InNumberleftWristX);
    song2 = remove_decimals/500;
    document.getElementById("song2").innerHTML = "Song2 = " + song2;
}



}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist);

        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWrist = " + leftWristX +" leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY = "+ rightWristY);
    }
}