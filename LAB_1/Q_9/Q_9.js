$('#start').on('click', function(){
    $('#start').remove();
  quiz.loadQuestion();

})
$(document).on('click','.answer-button',function(e){
    quiz.clicked(e);
})

$(document).on('click','#reset',function(){
    quiz.reset();
})
var questions = [{
    question: "What is the capital of india?",
    answers: ["Mumbai", "kolkata", "Delhi","Hyderabad"],
    correctAnswer: "Delhi",
}, {
    question: "which of the following is programming language?",
    answers: ["CSS", "HTML", "Mysql", "javascript"],
    correctAnswer: "javascript",
}, {
question: "whats the value of 39+69?",
    answers: ["98", "108", "118", "106"],
    correctAnswer: "108",
},

];
var quiz = {
    questions:questions,
    currentQuestion:0, 
    counter:30, 
    correct:0,
    incorrect:0,
    unanswered:0,
    
    countdown: function(){
        quiz.counter --;
        $('#counter').html(quiz.counter); 
        if(quiz.counter<=0){
            console.log("TIME UP!")
            quiz.timeUp();
        }
    },
    loadQuestion: function (){
        timer = setInterval(quiz.countdown,1000);
        $('#subwrapper').html("<h2> Time Remaining : <span id ='counter'>"+quiz.counter+"</span> Seconds</h2>");
        $('#subwrapper').append('<h2>'+questions[quiz.currentQuestion].question+'</h2>');
        for(var i=0;i<questions[quiz.currentQuestion].answers.length;i++){
            $('#subwrapper').append('<button class="answer-button id="button- '+i+'" data-name="'+questions[quiz.currentQuestion].answers[i]+'">'+questions[quiz.currentQuestion].answers[i]+'</button>');
        }
    },
    nextQuestion: function(){
        $('#counter').html(quiz.counter);
        quiz.currentQuestion++;
        quiz.loadQuestion();

    },
    timeUp: function(){
        clearInterval(timer);
        quiz.unanswered = questions.length - quiz.correct-quiz.incorrect;
        $('#subwrapper').html('<h2>TIME UP!<h2>');
        setTimeout(quiz.results,2*1000);
    },
    results: function(){
        clearInterval(timer);
        $('#subwrapper').html('<h2>Complete!</h2>')
        $('#subwrapper').append(" Score: " +quiz.correct + '<br/>');
        $('#subwrapper').append(" Incorrect: " +quiz.incorrect + '<br/>');
        $('#subwrapper').append(" Unanswered: " +quiz.unanswered + '<br/>');
        $('#subwrapper').append("<button id= reset>Try again?</button>");

        for(var i=0;i<questions.length;i++){

            $('#subwrapper').append('<h3>'+(i+1)+')'+questions[i].question+'</h3>');
            $('#subwrapper').append('<h3>The correct answer : '+questions[i].correctAnswer+'</h3>');
        }


    },
    clicked: function(e){
        clearInterval(timer);
        if($(e.target).data("name")==questions[quiz.currentQuestion].correctAnswer){
            quiz.answeredCorrectly();
    } else {
        quiz.answeredIncorrectly();
    }

    },
    answeredCorrectly: function(){
        console.log("right!")
        clearInterval(timer);
        quiz.correct++;
        if(quiz.currentQuestion==questions.length-1){
            setTimeout(quiz.results,10);
        } else{
            setTimeout(quiz.nextQuestion,10);
        }

    },
    answeredIncorrectly: function(){
        console.log("wrong")
        clearInterval(timer);
        quiz.incorrect++;
        if(quiz.currentQuestion==questions.length-1){
            setTimeout(quiz.results,10);
        } else{
            setTimeout(quiz.nextQuestion,10);
        }

    },
    reset: function(){
        quiz.currentQuestion = 0;
        quiz.counter = 30;
        quiz.correct = 0;
        quiz.incorrect = 0;
        quiz.unanswered = 0;
        quiz.loadQuestion();

    }

}