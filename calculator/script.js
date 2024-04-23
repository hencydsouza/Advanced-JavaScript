let memory = 0;

function addToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function calculate() {
    const display = document.getElementById("display");
    try {
        const result = eval(display.value);
        display.value = result;
        // memory = result;
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

function recallMemory() {
    const display = document.getElementById("display");
    display.value += memory;
}

function memoryPlus() {
    const display = document.getElementById("display");
    try {
        const result = eval(display.value);
        memory = Number(memory) + result;
        console.log(memory)
    } catch (error) {
        display.value = "Error";
    }
}

function memoryMinus() {
    const display = document.getElementById("display");
    try {
        const result = eval(display.value);
        memory = parseFloat(memory) - result;
    } catch (error) {
        display.value = "Error";
    }
}

function memoryRecall() {
    const display = document.getElementById("display");
    display.value += memory;
}

function memoryClear() {
    memory = "";
}
