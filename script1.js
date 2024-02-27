let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const resultElement = document.getElementById("result");

    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";

    questions[currentQuestion].choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = function() {
            checkAnswer(choice);
        };
        choicesElement.appendChild(button);
    });

    resultElement.textContent = "";
}

function checkAnswer(selectedAnswer) {
    const resultElement = document.getElementById("result");
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        resultElement.textContent = "Correct!";
        score++;
    } else {
        resultElement.textContent = "Incorrect! The correct answer is " + correctAnswer;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        resultElement.textContent = "Quiz Complete! You scored " + score + " out of " + questions.length;
    }
}

// Start the quiz when the page loads
window.onload = displayQuestion;
