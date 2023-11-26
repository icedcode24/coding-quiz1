var startScreen = document.querySelector(".start");
var quizScreen = document.querySelector(".quiz");
var EndScreen = document.querySelector(".end");
var startButton = document.querySelector("#startbutton")
var question1 =document.getElementById("question1")
var question2 =document.getElementById("question2")
var question3 =document.getElementById("question3")
var question4 =document.getElementById("question4")
var initialsinput =document.getElementById("initials")
var highscorebutton =document.getElementById("highscore")
var timer = document.getElementById("timer")
var userscore = document.getElementById("score")
function showStart() {
    startScreen.style.display = null;
    quizScreen.style.display = "none";
    EndScreen.style.display = "none";
}

function showQuiz() {
    startScreen.style.display = "none";
    quizScreen.style.display = null;
    question1.style.display = "block"
    question2.style.display = "none"
    question3.style.display = "none"
    question4.style.display = "none"

    EndScreen.style.display = "none";
}

function showEnd() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    EndScreen.style.display = null;
    
}
function highscorelocalstorage(){
    var highscoreobject= {
        user: initialsinput.value(),
        score: userscore.textContent
    }
}

startButton.addEventListener('click', function(event) {
    showQuiz();
});
var score = 90 

quizScreen.addEventListener('click', function(event){
    var timeInterval=setInterval(function(){
        score--
        timer.textContent = score

    }, 1000)
    if (event.target.matches('button')) {
        if (question1.style.display === "block"){
            question1.style.display = "none"
            question2.style.display = "block"
        }
        else if (question2.style.display === "block"){
            question2.style.display = "none"
            question3.style.display = "block"
        }
        else if (question3.style.display === "block"){
            question3.style.display = "none"
            question4.style.display = "block"
        }
        else if (question4.style.display === "block"){
            question4.style.display = "none"
           showEnd(); 
        }
        userscore.textContent= score
    }
});
function init () {
    showStart();
}

init();