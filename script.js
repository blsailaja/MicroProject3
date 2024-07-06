const display = document.getElementById('result');
const buttons = Array.from(document.getElementsByClassName('numbers'));
const resetButton = document.querySelector('.reset');
const deleteButton = buttons.find(button => button.value === 'DEL');
const equalsButton = document.querySelector('.equal');

// Function to update display
const updateDisplay = (value) => {
    if (display.value === '0' || display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
};

// Event listener for numbers and operators
buttons.forEach(button => {
    if (button.value !== 'DEL') {
        button.addEventListener('click', () => {
            updateDisplay(button.value);
        });
    }
});

// Event listener for reset button
resetButton.addEventListener('click', () => {
    display.value = '0';
});

// Event listener for delete button
deleteButton.addEventListener('click', () => {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
});

// Event listener for equals button
equalsButton.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
});
