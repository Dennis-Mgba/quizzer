var question = document.getElementById('question');
var opt1 = document.getElementById('btn0');
var opt2 = document.getElementById('btn1');
var opt3 = document.getElementById('btn2');
var opt4 = document.getElementById('btn3');
var opt5 = document.getElementById('btn4');
var score = document.getElementById('score');
var endNext = document.getElementById('next');
var progress = document.getElementById('progress');
var returnBack = document.getElementById('returnBack');

var btns = document.getElementById('buttons');

var app = {
    questions: [
        {qst: "Which of this is a language for the web?", options: ["PHP", "HTML", "Javascript", "All"], answer: 3},
        {qst: "MVC is a ____.", options: ["Library", "Language", "Framework", "Helper function"], answer: 2},
        {qst: "There are ___ main component of Object Oriented Programming.", options: ["1", "2", "3", "4"], answer: 3},
        {qst: "HTML is the first programming language?", options: ["True", "False", "May be", "Not sure"], answer: 1},
        {qst: "What of this is not an Object Oriented Programming Language?", options: ["C", "Java", "PHP", "Javascript"], answer: 0}
    ],
    index: 0,
    score: 0,
    load: function() { // created function to populate quizzer with question and options
            if (this.index <= this.questions.length - 1) {
                question.innerHTML = this.index + 1 +". "+ this.questions[this.index].qst;
                opt1.innerHTML = this.questions[this.index].options[0];
                opt2.innerHTML = this.questions[this.index].options[1];
                opt3.innerHTML = this.questions[this.index].options[2];
                opt4.innerHTML = this.questions[this.index].options[3];
                this.calScore();
            } else {
                question.innerHTML = "Quiz OVER!";
                question.style.marginLeft = "37%";
                opt1.style.display ="none";
                opt2.style.display ="none";
                opt3.style.display ="none";
                opt4.style.display ="none";
                endNext.style.display = "none";
                progress.style.marginLeft = "40%";
                progress.style.fontSize = "25px";
                returnBack.style.display = "block";
            }
    },
    check: function(opt) {
            var id = opt.id.split('');
            var correctAnwser = this.questions[this.index].answer;

            if(id[id.length - 1] == correctAnwser) {
                this.score++;
                this.calScore();
                opt.style.backgroundColor = "#0fd40f";
            } else {
                opt.style.backgroundColor = "#ff4d4d";
            }
    },
    calScore: function() {
            score.innerHTML = this.score + " / " + this.questions.length;
    },
    unClickable: function() {
        for(let i = 0; i < btns.children.length; i++) {
            btns.children[i].style.pointerEvents = "none";
        }
    },
    clickable: function() {
        for(let i = 0; i < btns.children.length; i++) {
            btns.children[i].style.pointerEvents = "auto";
            btns.children[i].style.backgroundColor = "#4d94ff";

        }
    },
    next: function() {
        this.index++;
        this.load();
    }

}


function button(opt){
    // alert(opt.id);
    app.check(opt);
    app.unClickable(opt);
}


function next() {
    app.next();
    app.clickable();
}

returnBack.addEventListener('click', function() {
    location.reload()
 });


window.onload = app.load();
