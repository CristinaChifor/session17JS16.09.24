class Quiz {
    constructor(questions){
        this.questions = questions;
        this.questionContainer = document.getElementById("question");
        this.answerButtons = document.getElementById("answer-buttons");
        this.feedback = document.getElementById("feedback");
        this.nextButton = document.getElementById("next-button");
    }

    showQuestion(question) {
        this.questionContainer.textContent = question.question;
    }
}

async function initQuiz() {
    const fileContent = await fetch("./questions.json");
    const quizQuestions = await fileContent.json();
    console.log(quizQuestions);
    const quiz = new Quiz(quizQuestions);

}

initQuiz();