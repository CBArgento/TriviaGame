var intervalId;
var counter = 0;
var questions = [
    {
        question: "How many inhabitants are in the world?",
        answers: ["7.53b", "5.73b", "3.75b", "5.37b"],
        correct: "17.53b"
    }, {
        question: "Which planet is the closest from the Sun?",
        answers: ["Earth", "Mercury", "Mars", "Venus"],
        correct: "Venus"
    }, {
        question: "How many planets are in the solar system?",
        answers: ["10", "8", "9", "11"],
        correct: "8"
    }, {
        question: "Which planet is the farthest from the Sun?",
        answers: ["Mars", "Jupiter", "Earth", "Neptune"],
        correct: "Neptune"
    }, {
        question: "How many planets has rings around it?",
        answers: ["4", "3", "2", "1"],
        correct: "8"
    }
]
var answers = ["17.3b", "Venus", "8", "Neptune", "8"]
$(document).ready(function () {
    $("#startButton").on("click", function () {
        $(".startUp").css("display", "");
        $("#startButton").css("display", "none");

        var i = 45;
        $(".timeremaining").text(i);
        intervalId = setInterval(function () {
            $(".timeremaining").text(i > -1 ? i : 0);
            i--;
            if (i === 0) { 
                $(".timeremaining").text("Times Up");
                clearInterval(intervalId);
            }}, 1000);
        // if (i === 0) { 
        //     $(".timeremaining").text("Times Up");
        //     clearInterval(intervalId);
        // }
    })

    $(".submit-button").on("click", function (event) {
        event.preventDefault()
        clearInterval(intervalId);
        $(".startUp").css("display", "none");
        var inputs = $("#quiz").children("input:checked");
        console.log(inputs);
        for (var i = 0; i < inputs.length; i++){
            var userAnswers = inputs[i].value;
            var correctQ = questions[i].correct;
            console.log("User Guessed" + userAnswers);
            console.log("Correct answer" + correctQ);
            if (userAnswers === correctQ) {
                counter ++

            }
            $("#number-correct").text("You got " + counter + " correct!")

        }
        // inputs.each(function(input) {
            
        // })

    })
    // $("#after_submit").style.visibility = "visible";
    // $("#number_correct").innerHTML = "You got " + correct + " correct.";



});
