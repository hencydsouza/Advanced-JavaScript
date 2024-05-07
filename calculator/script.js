let memory = 0;
let history = []
const histryEle = document.getElementById('history')

function saveData(arr) {
    localStorage.setItem('history', JSON.stringify(arr))
}

function loadData() {
    return JSON.parse(localStorage.getItem('history'))
}

function addToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function calculate() {
    const display = document.getElementById("display");
    try {
        const query = display.value
        const result = eval(display.value);
        display.value = result;
        history.push(query + "=" + result)
        saveData(history)
        displayHistory()
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

function clearStorage() {
    localStorage.setItem('history', '')
    history = loadData()
    histryEle.innerHTML = ""
    location.reload()
}

document.getElementById('clear').addEventListener('click', () => {
    clearStorage()
})

function displayHistory() {
    histryEle.innerHTML = ""
    for (let i = 0; i < history.length; i++) {
        histryEle.innerHTML += `<li>${history[i]}</li>`
    }
}

(function () {
    history = loadData() ? loadData() : []
    displayHistory()
    console.log(history)
})()