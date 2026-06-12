////# Event Dom #////

// console.log("Hellow");

// let btns = document.querySelectorAll("button")


// for (let btn of btns){
//     btn.onclick = sayHellow;

// }
// function sayHellow(){
//     alert("Hellow");
// }

////# Event Listner  #////

// let btns = document.querySelectorAll("button");

// for (btn of btns){

// // btn. addEventListener("click" , sayHellow);
// // btn. addEventListener("click" , sayName);

// btn.addEventListener("dblclick" , function () {
//     console.log("you double clicked me ");
// });
// }
// function sayHellow(){
//     alert ("Hellow!");
// }

// function sayHellow(){
//     alert ("Apna College");
// }


////  # Activity # ////

let btn = document.querySelector("button");

btn.addEventListener("click" , function (){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div")
    div.style.backgroundColor = randomColor;
    console.log("color update");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}


let p = document.querySelector("p");

p.addEventListener("click" , function() {
    console.log("parah was clicked");
});

let box = document.querySelector("mouseenter" , function () {
    console.log("mouse inside div");
});

//// # this in Event Listeners # ////

// let btn = document.querySelector("button");

// btn.addEventListener("click" , function () {
//     console.log(this);
// } );

////#Form Event # ////

// let btn = document.querySelector("form");

// btn.addEventListener("submit" , function (event) {
//     event.preventDefault();
//     alert("form sumitted");
// } );

//// # Extracting # ////

// let form = document.querySelector("form");

// form.addEventListener("submit" , function (event) {
//     event.preventDefault();
    
//     let data = new FormData(form);
//     console.log(data.get("username"));
// } );