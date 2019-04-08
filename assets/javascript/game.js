
//debugger;
//$("#image-1").on("click", addPoints(btn1));
//$("#image-2").on("click", addPoints(btn2));
//$("#image-3").on("click", addPoints(btn3));
//$("#image-4").on("click", addPoints(btn4));
$(document).ready(function(){
    var ScoreCap = robotScore();
    //debugger;
    var btn1 = RnmScore();
    var btn2 = RnmScore();
    var btn3 = RnmScore();
    var btn4 = RnmScore();
    var accumulatedPoints = 0;
    var wins = 0;
    var losses = 0;

    display();

$("#image-1").on("click", function(){
      addPoints(btn1)});
  $("#image-2").on("click", function(){
      addPoints(btn2)});
  $("#image-3").on("click", function(){
      addPoints(btn3)});
  $("#image-4").on("click", function(){
      addPoints(btn4)});


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
    //alert("Button was clicked");
    accumulatedPoints += btnValue;
    checkScore(accumulatedPoints);
    $("#UsrPoints").text(accumulatedPoints);
    console.log("Current accumulated value is: ")
    console.log(accumulatedPoints);
    
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
    display();
}

function loss(){
    losses++
    console.log("You Lose!")
    console.log("Total losses: " + losses)
    randomize();
    display();
}

function randomize(){
    ScoreCap = robotScore();
    btn1 = RnmScore();
    btn2 = RnmScore();
    btn3 = RnmScore();
    btn4 = RnmScore();
    accumulatedPoints = 0;
}

function display(){
    $("#Wins").text(wins);
    $("#Losses").text(losses);
    $("#RbtPoints").text(ScoreCap);
    $("#UsrPoints").text(accumulatedPoints);
}

})
