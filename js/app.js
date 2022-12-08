/* 
    What is it?
        A 'Harry Potter' Quiz Web App.
        Composed of one HTML page for display, one CSS page for styling
        and one JavaScript page for the Quiz content and logic.

    How Does it work?
        Offline: double click on the 'index.html' file and open it in your favorite browser.
        Online: go to this website 'www.'
        Answer the questions.

    Credits:
        Code: Thomas Raymond.
        Inspiration: Youtube channel: @ FlorinPop
        Questions: I sourced the questions from different websites such as 
        "https://www.buzzfeed.com/laurafrustaci/harry-potter-trivia-questions-answers"
        "https://www.cambridge-news.co.uk/whats-on/40-harry-potter-quiz-questions-22615506".
*/



/* ----------  VARIABLES ---------- */

/* All the data for the Quiz */
const quizInfo = [
    {
        question: "What's the Dursley's address?",
        a: "London SW1A 1AA",
        b: "Number 4 Privet Drive",
        c: "10 Downing Street",
        d: "221 B Baker Street",
        answer: "b"
    }, {
        question: "Who's Harry's godfather?",
        a: "Cornelius Fudge",
        b: "Dumbledore",
        c: "Doby the Elf",
        d: "Sirius Black",
        answer: "d"
    }, {
        question: "What was the name of the tree Harry and Ron crushed their car into?",
        a: "An Oak Tree",
        b: "The Christmas Tree",
        c: "The Whomping Willow",
        d: " The Mandrake",
        answer: "c"
    }, {
        question: "Which class has a different teacher every year?",
        a: "Defense Against the Dark Arts",
        b: "History of Magic",
        c: "Potions",
        d: "Herbology",
        answer: "a"
    }, {
        question: "What animal represents Hufflepuff's House?",
        a: "A Fox",
        b: "A Squirrel",
        c: "A Phoenix",
        d: "A Badger",
        answer: "d"
    }, {
        question: "Who was Hermione's date at the Yule Ball?",
        a: "Harry Potter",
        b: "Ron Weasley",
        c: "Viktor Krum",
        d: "Neville Longbottom",
        answer: "c"
    }, {
        question: "What subject does Hagrid teach?",
        a: "Flying",
        b: "Care of Magical Creatures",
        c: "Charms",
        d: "Transfiguration",
        answer: "b"
    }, {
        question: "How many Hogwart's houses are there?",
        a: "4",
        b: "8",
        c: "2",
        d: "20",
        answer: "a"
    }, {
        question: "What's the name of the Wizarding newspaper based in London?",
        a: "The Hogwarts Times",
        b: "The Wizard's Voice",
        c: "Rumours!",
        d: "The Daily Prophet",
        answer: "a"
    }
]

/* Access all the HTML elements we need to dynamically generate/change */
const container = document.getElementById("quiz");
const question = document.getElementById("question");
console.log(question);
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

/* Access all the radio input */
const answerElements = document.getElementsByClassName("answer");

/* As answerElements is an object, use Object.keys to get an array of each element's key */
const elementIndex = Object.keys(answerElements);


/* Declare a variable to count user's score */
let score = 0;

/* Declare a variable and set it to zero, which purpose is to iterate 
through each data in the quizData object */
let currentQuiz = 0;
let currentCorrectAnswer = "";


/* ----------  FUNCTIONS ---------- */

/* Create a function called loadQuiz that is going to replace the text 
inside the HTML elements (we want to be dynamically generated) with the 
text inside the quizData object */
function loadQuiz() {
    uncheckRadio();
    /* Select, in the quizData object, the data that is stored at the index corresponding 
    to the currentQuiz value*/
    const currentQuizInfo = quizInfo[currentQuiz];
    currentCorrectAnswer = currentQuizInfo.answer;

    question.innerText = currentQuizInfo.question;
    a_text.innerText = currentQuizInfo.a;
    b_text.innerText = currentQuizInfo.b;
    c_text.innerText = currentQuizInfo.c;
    d_text.innerText = currentQuizInfo.d;
}

/* Create a function that:
    - Checks if user selected an answer,
    - Saves the user's answer inside a variable */
function getUserAnswer() {
    userAnswer = document.querySelector('input[name="answer"]:checked');
    if (!userAnswer) {
        alert("Please, select an answer.");
    }
    return userAnswer.value; 
}



/* Create a function to uncheck the radio buttons every time loadQuiz() is invoked */
function uncheckRadio() {
    elementIndex.forEach((element) => {
        answerElements[element].checked = false;
    });
}

/* Program the submit button to: 
    - Save user's answer inside the userAnswers array,
    - Update score if user's answer matches the current correct answer,
    - Increment the current value of currentQuiz,
    - loadQuiz() again with the new currentQuiz values,
    - Alert user when they finished the quiz,
    - Display the number of correct answers
    - Add a button to start the quiz again */
submitBtn.addEventListener("click", () => {
    if(currentCorrectAnswer == getUserAnswer()) {
        score++;
    }
    currentQuiz++;
    if (currentQuiz < quizInfo.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
        <h2>
            Congratulations ! Your score for this Harry Potter Quiz 
            is ${score}/${quizInfo.length} !!
        </h2> 
        <button onclick="location.reload()">
            Play Again !
        </button>`;
    }
})


/* Call the loadQuiz function directly so that when the page loads, 
the data of the first question is already loaded */
loadQuiz();