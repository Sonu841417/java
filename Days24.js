// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function() {
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event) {
//     // event.stopPropagation();
//     console.log("ul was clicked");
// });


// for(li of lis){
// li.addEventListener("click", function(event) {
//     // event.stopPropagation();
//     console.log("li was clicked");
// });

// }


////////////////////////////////////////////////////////////
//////////   Todo  App    ////////////

// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click" , function ()  {
//  let item = document.createElement("li"); 
//   item.innerText = inp.value;
  
//   let delBtn = document.createElement("button");
//   delBtn.innerText = "delete";
//   delBtn.classList = "delete";

//   item.appendChild(delBtn);
//   ul.appendChild(item);
//   inp.value = "";
// });

// ul.addEventListener("click",function (event){
//     if(event.target.nodeName == "Button"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("delete");
//     }
// });

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns){
//     delBtn.addEventListener("click", function () {
//         let par = delBtn.parentElement;
//         console.log(par);
//         par.remove();
//    

/////////////////////////////////////////////////////////////////
     ///////////////// Siman Game //////////////////////

let gameSeg = [];
let usergame = [];

let btns = ["yellow" , "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress" , function (){
    if (started == false) {
        console.log("game to started");
        started = true ;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },1000 );
}

function levelUp(){
    level++;
    h2.innerText = 'Level ${level}';

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector('.${randColor}');
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);

}