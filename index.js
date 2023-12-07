var startBtn = document.getElementsByClassName("startBtn")[0];
var informationContainer = document.getElementsByClassName("informationcontainer")[0];
var firstStage = document.getElementsByClassName("firstStage")[0];
var form1=document.getElementsByClassName("form1")[0];
var btnContinue=document.getElementsByClassName("btnContinue")[0];
var addQuestion= document.getElementsByClassName("addQuestion")[0];
var nextbtn=document.getElementsByClassName("nextbtn")[0];  

startBtn.addEventListener("click", function() {
    informationContainer.classList.add("active");
    firstStage.classList.add("active");
});

// Close the information container and the first stage when the close button is clicked
var closeBtn = document.getElementsByClassName("closeBtn")[0];

closeBtn.addEventListener("click", function() {
    informationContainer.classList.remove("active");
    firstStage.classList.remove("active");
});


btnContinue.addEventListener("click",function(){
    form1.classList.add("active");
    firstStage.classList.remove("active");
    informationContainer.classList.remove("active");
    addQuestion.classList.add("active");

    sQuestions();

})


addQuestion.addEventListener("click",function(){
   

})

nextbtn.addEventListener("click",function(){
    qCount = qCount + 1;
    
    sQuestions(qCount);
})

var questions=[
   {
    num:1,
    question:" Who won the FIFA Ballon d'Or in 2021?",
    answer:"Lionel Messi",
    options:[
        "Lionel Messi",
        "Robert Lewandowski",
        "Cristiano Ronaldo",
        "Kevin De Bruyne"
    ]
},
    {
        num:2,
        question:"Who won the FIFA World Cup in 2022?",
        answer:"France",
        options:[ 
            "Brazil",
            "Germany",
            "France",
            "Italy"
        ]
    },
    {
        num:3,
        question:"The World Cup is held every two years.",
        answer:"True",
        options:[
            "True",
            "False"]
        },
        {
            num:4,
            question:"Lionel Messi currently plays for FC Barcelona.",
            answer:"False",
            options:[
                "True",
                "False"]
            },
            {
                num:5,
                question:"Which country won the 2022 FIFA World Cup?",
                answer:"Brazil",
                options:[
                    "Brazil",
                    "Argentina",
                    "Germany",
                    "France"]
                },
                {
                    num:6,
                    question:"What was the score in the Euro 2012 final?",
                    answer:"2-1",
                    options:[
                        "1-2",
                        "2-1",
                        "1-0",
                        "0-1"
                    ]
                    },
                    {
                        num:7,
                        question:"Who won the Euro 2012 final?",
                        answer:"France",
                        options:[
                            "France",
                            "Germany",
                            "Italy",
                            "Spain"
                        ]
                    },
                    {
                        num:8,
                        question:"Against which country did Wayne Rooney break the England goalscoring record?",
                        answer:"Switzerland",
                        options:[
                            "England",
                            "Italy",
                            "Switzerland",
                            "France"
                        ]
                    },
                    {
                        num:9,
                        question:"Cristiano Ronaldo has won the FIFA Ballon d'Or award more times than Lionel Messi",
                        answer:"False",
                        options:[
                            "True",
                            "False"
                        ]
                    },
                    {
                        num:10,
                        question:"The Hand of God goal was scored by Diego Maradona during the 1986 FIFA World Cup.",
                        answer:"True",
                        options:[
                            "True",
                            "False"
                        ]
                    },
]

var qCount=0;
/*function sQuestions(index){
    var tquestion=document.getElementsByClassName("tQuestion");
    tquestion.textContent=`${questions[index].num}.${questions[index].question}`;
}*/
function sQuestions(index) {
    var tquestion = document.getElementsByClassName("tQuestion");
    tquestion[0].textContent = `${questions[index].num}.${questions[index].question}`;
}




