var btnStart = document.querySelector('.btnStart');
var informaion = document.querySelector('.informaion');
var colseBtn = document.querySelector('.colseBtn');
var container = document.querySelector('.container');
var continueBtn = document.querySelector('.continueBtn');
var section = document.querySelector('.section');
var box1 = document.querySelector('.box1');
var btnNext = document.querySelector('.btnNext');
var optionList = document.querySelector('.option-list');
var box2 = document.querySelector('.box2');
var score2 = document.querySelector('.score2');
var questionText = document.querySelector('.question');
var totalQuestion = document.querySelector('.totalQuestion');
var btnTest = document.querySelector('.btnTest');
var btnHome = document.querySelector('.btnHome');


btnStart.onclick = () => {
    informaion.classList.add('active');
    container.classList.add('active');
}
continueBtn.onclick = () => {
    section.classList.add('active');
    informaion.classList.remove('active');
    container.classList.remove('active');
    box1.classList.add('active');
    headerScore();
    showQuestions(0);
    questionCounter(1);
    
}
colseBtn.onclick = () => {
    informaion.classList.remove('active');
    container.classList.remove('active');
}
var questions = [
   
    {
        numb: 1,
        question: "Who won the FIFA Ballon d'Or in 2021?",
        answer: "C.Cristiano Ronaldo",
        options: [
            "A.Lionel Messi ",
            "B.Robert Lewandowski ",
            "C.Cristiano Ronaldo ",
            "D.Kevin De Bruyne "
        ]
    },
    {
        numb: 2,
        question: "Who won the FIFA World Cup in 2022?",
        answer: "C.France",
        options: [
            "A.Brazil",
            "B.Germany",
            "C.France",
            "D.Italy"
        ]
    },
    {
        numb: 3,
        question: "The World Cup is held every two years.",
        answer: "A.False",
        options: [
            "A.False",
            "B.True",
            
        ]
    }
   ,
    {
        numb: 4,
        question: "Lionel Messi currently plays for FC Barcelona.",
        answer: "A.True",
        options: [
            "A.True",
            "B.False",
            
        ]
    },
    {
        numb: 5,
        question: "What was the score in the Euro 2012 final?",
        answer: "B.2-1",
        options: [
            "A.2-0",
            "B.2-1",
            "C.3-0",
            "D.1-0"
        ]
    },
    {
        numb: 6,
        question: "Who won the Euro 2012 final?",
        answer: "A.France",
        options: [
            "A.France",
            "B.Germany",
            "C.Italy",
            "D.Spain"
        ]
    },
    {
        numb: 7,
        question: "Against which country did Wayne Rooney break the England goalscoring record?",
        answer: "C.Switzerland",
        options: [
            "A.England",
            "B.Italy",
            "C.Switzerland",
            "D.France"
        ]
    },
    {
        numb: 8,
        question: "Which country won the 2022 FIFA World Cup?",
        answer: "A.Brazil",
        options: [
            "A.Brazil",
            "B.Argentina",
            "C.Germany",
            "D.France"
        ]
    },
    {
        numb: 9,
        question: "Cristiano Ronaldo has won the FIFA Ballon d'Or award more times than Lionel Messi",
        answer: "A.False",
        options: [
            "A.False",
            "B.True",
            ]
    },
    {
        numb: 10,
        question: "The Hand of God goal was scored by Diego Maradona during the 1986 FIFA World Cup.",
        answer: "A.True",
        options: [
            "A.True",
            "B.False",
        ]
           
    },
    
];

var questionNumb = 0;
var userScore = 0;
var questionCount = 0;
btnNext.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        btnNext.classList.remove('active');
    }
    else {
        showResultBox();
    }
}
// object array
function showQuestions(index) {
    var questionText = document.querySelector('.question');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    var optionTag = '';
     // Flse,true och multiple choice frågor
    if (questions[index].options.length === 2) {
      
        optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
            <div class="option"><span>${questions[index].options[1]}</span></div>`;
    } else {
        
        optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
            <div class="option"><span>${questions[index].options[1]}</span></div>
            <div class="option"><span>${questions[index].options[2]}</span></div>
            <div class="option"><span>${questions[index].options[3]}</span></div>`;
    }
optionList.innerHTML = optionTag;

    var option = document.querySelectorAll('.option');
    for (var i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}


function optionSelected(answer) {
    var userAnswer = answer.textContent;
    var correctAnswer = questions[questionCount].answer;
    var allOptions = optionList.children.length;

    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    }
    else {
        answer.classList.add('incorrect');

        // rätta frågor
        for (var i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }

    
    for (var i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    btnNext.classList.add('active');
}

function questionCounter(index) {
    totalQuestion.textContent = `${index} of ${questions.length} Questions`;
}

function headerScore() {
   
    score2.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox() {
    box1.classList.remove('active');
    box2.classList.add('active');

    var scoreText = document.querySelector('.tScore');
    scoreText.textContent = `Your Score: ${userScore} out of ${questions.length}`;

   
    var value = document.querySelector('.value');

    // Räkna ut procentuellt antal frågor som rätt
    var optionTotal = questions[questionCount].options.length;
    if (optionTotal === 2) {
        var procent = (userScore / questions.length) * 100; 
        var Percentage = Math.floor(procent); 
        value.textContent = `${Percentage}%`;

        
    } else {
        // Förkorta procentuellt antal frågor som rätt till heltal för att kunna använda i setInterval()
        var star = -1;
        var progressEndValue = (userScore / questions.length) * 100;
        var truncatedEndValue = Math.floor(progressEndValue); 
        var speed = 20;

        var progress = setInterval(() => {
            star++;

            value.textContent = `${star}%`;
            

            if (star == truncatedEndValue) {
                clearInterval(progress);
            }
        }, speed);
    }
}
btnTest.onclick = () => {
    box1.classList.add('active');
    btnNext.classList.remove('active');
    box2.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerScore();
}
btnHome.onclick = () => {
    section.classList.remove('active');
    btnNext.classList.remove('active');
    box2.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
}


