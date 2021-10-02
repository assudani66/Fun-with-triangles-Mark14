var quizForm = document.querySelector("#quiz-form");
var submit = document.querySelector("#submit");
var output = document.querySelector("#output");

const correctAnswers = ["90°","right angled", "one right angle", "12, 16, 20","Equilateral triangle","85°"];


function calculateScore(){
    var score = 0;
    var index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    if(index == 6)
        output.innerText = `Your score is ${score}`;
    else
        output.innerText = "Please answer all the questions and submit again";
}


submit.addEventListener("click", calculateScore);
