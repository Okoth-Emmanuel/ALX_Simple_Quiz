// calculator.js

// Arithmetic operation functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}

// Function to get input values
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Function to update result on page
function displayResult(value) {
    document.getElementById('calculation-result').textContent = value;
}

// Attach event listeners
document.getElementById('add').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    displayResult(add(number1, number2));
});

document.getElementById('subtract').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    displayResult(subtract(number1, number2));
});

document.getElementById('multiply').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    displayResult(multiply(number1, number2));
});

document.getElementById('divide').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    displayResult(divide(number1, number2));
});
