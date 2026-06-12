/////////////////////////////////////////////////////////////////
//////////////  Call Stack  ////////////

function hello () {
    console.log("inside hello fnx");
    console.log("hellow")
}

function demo () {
    console.log("calling hello fnx");
    hello();
}

console.log("calling demo fnx");
demo();
console.log("done, bye");

///////////////////////////////////////////////////////////////////
/////////////////   Visualizing the call Stack  (console me )/////////////

function one () {
    return 1;
}

function two () {
    return one () + one ();
}

function three () {
    let ans = two() + one ();
    console.log(ans);
}

///////////////////////////////////////////////////////////////////
     ////////////////  Callback Hell            ////////////////

     h1 = document.querySelector("h1");

     function changecolor(color,delay,nextColorChange){
        setTimeout(() =>{
            h1.style.color = color;
            if(nextColorChange) nextColorChange();
        }, delay );
     }

     changecolor("red",1000, () => {
        changecolor("orange",1000, () => {
         changecolor("green",1000, () => {
         changecolor("yelloow",1000, () => {
          changecolor("blue",1000, () => {

            });
          });
        });
      });
     });

     