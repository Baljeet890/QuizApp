
const questions =[

   {
    question: "Which is the largest animal in the world",
    answers :[
        {
            text:"shark ", correct: false
        },
        {
            text: "Blue Whale ", correct: true
        },
        {
            text: "Loion ", correct: false
        },
        {
            text: "Tiger ", correct: false
        },
    ]
   },
    {
        question: "Which is the largest animal in the world",
        answers: [
            {
                text: "shark ", correct: false
            },
            {
                text: "Blue Whale ", correct: true
            },
            {
                text: "Loion ", correct: false
            },
            {
                text: "Tiger ", correct: false
            },
        ]
    },
    {
        question: "Which is the smallest conitnet in the world",
        answers: [
            {
                text: "newzealand", correct: false
            },
            {
                text: "India ", correct: true
            },
            {
                text: "USA ", correct: false
            },
            {
                text: "australia ", correct: false
            },
        ]
    }
    , {
        question: "Which is the largest Flower in the world",
        answers: [
            {
                text: "Rose ", correct: false
            },
            {
                text: "Rafellisia ", correct: true
            },
            {
                text: "SunFlower ", correct: false
            },
            {
                text: "jasmine", correct: false
            },
        ]
    },
    {
        question: "Which is the largest land animal  in the world",
        answers: [
            {
                text: "Lion", correct: false
            },
            {
                text: "Tiger ", correct: true
            },
            {
                text: "Elephant", correct: false
            },
            {
                text: "Cow", correct: false
            },
        ]
    },
    {
        question: "Which is the largest country in the world",
        answers: [
            {
                text: "India ", correct: false
            },
            {
                text: "Europe ", correct: true
            },
            {
                text: "Australia ", correct: false
            },
            {
                text: "America", correct: false
            },
        ]
    }

]

const questionElemnet = document.getElementById('question');

const answerButton = document.getElementById('answer-button');
const nextButton = document.getElementById('next-btn');


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElemnet.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;

        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }

}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;


    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}
function showScore(){
    resetState();
    questionElemnet.innerHTML = `You score ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'play Again';
    nextButton.style.display ="block" 
}
function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        // console.log('I am at handel next button')
        showQuestion();
    }
    else{
        showScore(); 
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
        // console.log("i am at next button")
    }
    else{
        startQuiz();
        // console.log(" i am starting the quiz")

    }

});
startQuiz();
