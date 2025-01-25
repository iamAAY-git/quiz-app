
const questions=[ 
    {
    question: "What is the capital of France?", 
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: 3 // Correct answer is "Paris"
},
{ 
    question: "What is 2 + 2?", 
    answers: ["3", "4", "5", "6"],
    correctAnswer: 2 // Correct answer is "4"
},
{ 
    question: "Which planet is known as the Red Planet?", 
    answers: ["Earth", "Saturn", "Jupiter", "Mars"],
    correctAnswer: 4 // Correct answer is "Mars"
}
,
{ 
    question: "What is the formula of (a+b)**2?", 
    answers: ["a\u00B2+2ab+b\u00B22", "a\u00B2-2ab-b\u00B2", "2a+2ab+2b", "(a+b)(a-b)"],
    correctAnswer: 1 // Correct answer is "Mars"
}
,
{ 
    question: "What is the name of longest river in the world?", 
    answers: ["Amazon", "Ganga", "Karnali", "Nile"],
    correctAnswer: 4 // Correct answer is "Mars"
}
];

function question(index){
    let qtn=questions[index-1];
  
    document.getElementById('questions').innerHTML=qtn.question;
   
    const buttons =document.querySelectorAll('.ans-btn button');
buttons.forEach((button, i) =>{
    button.textContent=qtn.answers[i];
    button.onclick=()=>checkAnswer(index,i+1);
    button.style.backgroundColor = "";
});

document.getElementById('right-ans').textContent=' ';
}
let score = 0;
function checkAnswer(index,choice){
    const buttons =document.querySelectorAll('.ans-btn button');
    buttons.forEach((button) =>{
        button.style.backgroundColor = ""; // Reset background color
        button.style.color = ""; 
    });
    const q=questions[index-1];
    const result= document.getElementById('right-ans');
    const questionButton = document.querySelector(`.quest-btn button:nth-child(${index})`);
   
    if(choice===q.correctAnswer){
        result.textContent="Correct Answer";
        buttons[choice-1].style.backgroundColor="green";
        questionButton.style.backgroundColor = "green";

        if (!questionButton.dataset.answered) {
            score++;
            questionButton.dataset.answered = true; // Mark as answered
        }
    }
    else{
       result.textContent="Wrong Answer";
       buttons[choice-1].style.backgroundColor="red";
      
       questionButton.style.backgroundColor = "red";

       questionButton.dataset.answered = true;
    }
}
function showScore() {
    const result = document.getElementById("right-ans");
    result.textContent = `You scored ${score} out of ${questions.length}`;
    result.style.color = "blue";
}
function resetQuiz() {
    const questionButtons = document.querySelectorAll(".quest-btn button");
    const answerButtons = document.querySelectorAll(".ans-btn button");
    const result = document.getElementById("right-ans");
    document.getElementById('right-ans').textContent=' ';
    document.getElementById('questions').innerHTML=' ';

    // Reset question button colors
    questionButtons.forEach(button => {
        button.style.backgroundColor = ""; // Reset to default
        button.dataset.answered = ""; // Reset answered state
    });

    // Reset answer button colors
    answerButtons.forEach(button => {
        button.style.backgroundColor = ""; // Reset to default
        button.style.color = ""; // Reset text color
    });

    // Clear feedback and reset score
    result.textContent = "";
    score = 0; // Reset the score
}
