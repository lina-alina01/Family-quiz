const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');

let shuffledQuestions, currentQuestionIndex;

const questions = [
„Descrieți cel mai amuzant moment petrecut împreună în bucătărie.”  
„Care a fost cea mai memorabilă aniversare pe care am sărbătorit-o împreună?”  
„Cine a adormit primul la ultima noastră seară de film?”  
„Care a fost cea mai de neuitat aventură pe care am avut-o într-o excursie cu mașina?”  
„Care este o tradiție de sărbătoare pe care am creat-o și care este unică familiei noastre?”  
„Cine din familie a avut cea mai amuzantă reacție la o surpriză?”  
„Care a fost cea mai memorabilă masă sau experiență la restaurant pe care am avut-o împreună?”  
„Care membru al familiei a făcut ceva stânjenitor pe care toți încă îl țin minte?”  
„Care a fost cel mai memorabil cadou pe care l-a oferit sau primit cineva?”  
„Unde am fost în prima noastră vacanță de familie?”  
„Cine mănâncă întotdeauna cele mai multe fursecuri de Crăciun?”  
„Care a fost cel mai bun film de Crăciun pe care l-am vizionat împreună?”  
„În ce an am început tradiția de a face turtă dulce?”  
„Cine din familie este cel mai priceput la împachetat cadouri?”  
„Cine este cel mai probabil să încerce să ghicească ce cadouri are înainte de a le despacheta?”  
„Unul dintre lucrurile mele preferate despre Crăciun este…”  
„Cea mai amuzantă amintire de Crăciun pe care o am este…”  
„Cine face cele mai multe poze la evenimentele de familie?”  
„Cine iubește cel mai mult plaja?”  
„Care este activitatea noastră preferată pentru o seară de jocuri în familie?”  
„Cine este cel mai probabil să înceapă să cânte în mașină?”  
„Care este jocul de societate care ne face pe toți să devenim competitivi?”  
„Cine este cel mai probabil să spună „doar încă un episod” la un maraton de filme sau seriale?”  
„Care a fost cel mai amuzant moment dintr-o vacanță?”  
„Care a fost cel mai memorabil moment din excursiile la mare?”  
„Care a fost cel mai memorabil moment din excursiile la munte?”  
„Care este cel mai amuzant joc pe care l-am jucat ca familie?”  
„Cine este cel mai aventuros la mâncare din familie?”  
„Cine este întotdeauna ultimul care se pregătește când ieșim afară?”  
„Cine este cel mai probabil să se împiedice sau să dea peste ceva?”  
„Care membru al familiei are întotdeauna cele mai ciudate povești despre vise de împărtășit?”  
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

