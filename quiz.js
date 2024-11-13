const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');

let shuffledQuestions, currentQuestionIndex;

const questions = [
    "Describe our funniest family moment in the kitchen.",
    "What’s the most unforgettable birthday celebration we’ve had?",
    "Who fell asleep first during our last movie night?",
    "What was the most memorable adventure we had on a road trip?",
    "What’s a holiday tradition we created that’s unique to our family?",
    "Which family member had the funniest reaction to a surprise?"
];

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainer.style.display = 'block';
    setNextQuestion();
}

function setNextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        alert("You've reached the end of the questions!");
        questionContainer.style.display = 'none';
        startButton.classList.remove('hide');
        startButton.innerText = "Restart Quiz";
    }
}

function showQuestion(question) {
    questionElement.innerText = question;
}

