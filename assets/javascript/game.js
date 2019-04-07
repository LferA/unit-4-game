
var ScoreCap = robotScore();
//debugger;
var btn1 = RnmScore();
var btn2 = RnmScore();
var btn3 = RnmScore();
var btn4 = RnmScore();
var accumulatedPoints = 0;
var wins = 0;
var losses = 0;
//debugger;
//$("#image-1").on("click", addPoints(btn1));
//$("#image-2").on("click", addPoints(btn2));
//$("#image-3").on("click", addPoints(btn3));
//$("#image-4").on("click", addPoints(btn4));

//  $("#image-1").on("click", function(){
//      addPoints(btn1)});
//  $("#image-2").on("click", function(){
//      addPoints(btn2)});
//  $("#image-3").on("click", function(){
//      addPoints(btn3)});
//  $("#image-4").on("click", function(){
//      addPoints(btn4)});

function robotScore(){
    var number = Math.floor(Math.random() * 101) + 19;
    console.log("RobotScore equals: ");
    console.log(number);
    return number;
}

function RnmScore(){
    var number = Math.floor(Math.random() * 11) + 1;
    console.log("RandomScore equals: ")
    console.log(number);
    return number;
}

function addPoints (btnValue){
    alert("Button was clicked");
    accumulatedPoints += btnValue;
    console.log("Current accumulated value is: ")
    console.log(accumulatedPoints);
    checkScore(accumulatedPoints);
}

function checkScore(playerScore){
    if (playerScore === ScoreCap){
        win();
    } else if (playerScore > ScoreCap){
        loss();
    }
}

function win(){
    wins++
    console.log("You Win!");
    console.log("Total Wins:" + wins);
    randomize();
}

function loss(){
    losses++
    console.log("You Lose!")
    console.log("Total losses: " + losses)
    randomize();
}

function randomize(){
    var ScoreCap = robotScore();
    var btn1 = RnmScore();
    var btn2 = RnmScore();
    var btn3 = RnmScore();
    var btn4 = RnmScore();
    var accumulatedPoints = 0;
}