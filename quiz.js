// quiz.js

document.addEventListener("DOMContentLoaded", function () {
    function checkAnswer() {
        const correctAnswer = "4"; // Correct answer
        const selectedOption = document.querySelector('input[name="quiz"]:checked');
        const feedback = document.getElementById("feedback");

        if (selectedOption) {
            const userAnswer = selectedOption.value;

            if (userAnswer === correctAnswer) {
                feedback.textContent = "Correct! Well done.";
                feedback.style.color = "#28a745"; // Green for correct
            } else {
                feedback.textContent = "That's incorrect. Try again!";
                feedback.style.color = "#dc3545"; // Red for incorrect
            }
        } else {
            feedback.textContent = "Please select an answer before submitting.";
            feedback.style.color = "#dc3545"; // Red warning
        }
    }

    document.getElementById("submit-answer").addEventListener("click", checkAnswer);
});
