// quiz.js

document.addEventListener("DOMContentLoaded", function () {
    let score = 0; // Initialize score

    function checkAnswer() {
        const correctAnswer = "4"; // Correct answer
        const selectedOption = document.querySelector('input[name="quiz"]:checked');
        const feedback = document.getElementById("feedback");

        if (selectedOption) {
            const userAnswer = selectedOption.value;

            if (userAnswer === correctAnswer) {
                feedback.textContent = "Correct! Well done.";
                feedback.style.color = "#28a745"; // Green
                score += 1; // Increment score
            } else {
                feedback.textContent = "That's incorrect. Try again!";
                feedback.style.color = "#dc3545"; // Red
            }
        } else {
            feedback.textContent = "Please select an answer before submitting.";
            feedback.style.color = "#dc3545";
        }

        // Show score below feedback
        const scoreDisplay = document.getElementById("score");
        if (scoreDisplay) {
            scoreDisplay.textContent = "Score: " + score;
        } else {
            const scoreElement = document.createElement("p");
            scoreElement.id = "score";
            scoreElement.textContent = "Score: " + score;
            scoreElement.style.marginTop = "10px";
            scoreElement.style.fontWeight = "bold";
            feedback.parentElement.appendChild(scoreElement);
        }
    }

    document.getElementById("submit-answer").addEventListener("click", checkAnswer);
});
