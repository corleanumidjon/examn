// let login = document.querySelector('.login');
// let create = document.querySelector('.create');
// let container = document.querySelector('.container');

// login.onclick = function () {
//     container.classList.add('signinForm');
// }
// create.onclick = function () {
//     container.classList.remove('signinForm');
// }

// let fakeapi = JSON.parse('https://jsonplaceholder.typicode.com/todos');
// console.log(fakeapi);



let InputValue = document.getElementById("value");
let submitBtn = document.getElementById("form");

let InputValue2 = document.getElementById("value2");

let InputValue3 = document.getElementById("value3");
let InputValue4 = document.getElementById("value4");
let InputValue5 = document.getElementById("value5");
let InputValue6 = document.getElementById("value6");
let InputValue7 = document.getElementById("value7");

submitBtn.addEventListener("submit",((e)=>{
    e.preventDefault()
    console.log(InputValue.value);
    console.log(InputValue2.value);
    console.log(InputValue3.value);
    console.log(InputValue4.value);
    console.log(InputValue5.value);
    console.log(InputValue6.value);
    console.log(InputValue7.value);
}))

