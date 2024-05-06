// hello(wait);

// function hello(a) {
//     console.log("Hello")
//     a();
// }

// function leave(){
//     console.log("Leaving now");
// }

// function wait(){
//     console.log("Waiting...");
// }

// function goodbye() {
//     console.log("Goodbye")
// }

sum(displayConsole, 1, 2)

function sum(callback, x, y) {
    const result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result)
}