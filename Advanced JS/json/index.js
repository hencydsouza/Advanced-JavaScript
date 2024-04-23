// const names = ["a", "b", "c", "d"]

// const person = {
//     "name": "a",
//     "age": 30,
//     "isEmployeed": true,
//     "hobbies": [
//         "Jellyfishing",
//         "Karate",
//         "Cooking"
//     ]
// }
// const people = [
//     {
//         "name": "a",
//         "age": 30,
//         "isEmployeed": true
//     },
//     {
//         "name": "b",
//         "age": 34,
//         "isEmployeed": false
//     },
//     {
//         "name": "c",
//         "age": 50,
//         "isEmployeed": true
//     },
//     {
//         "name": "d",
//         "age": 27,
//         "isEmployeed": false
//     }
// ]

// const jsonString = JSON.stringify(people)

// console.log(JSON.parse(jsonString))

fetch("names.json").then(response => response.json()).then(values => values.forEach(value => console.log(value.name))).catch(err => console.log(err))