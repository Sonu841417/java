for(let i=1; i<=5; i++){
    console.log(i);
}

// Backward //

for(let i=5; i>=1; i = i-1){
    console.log(i);
}

for(let i=5; i>=1; i--){
    console.log(i);
}

//   ||Print  all  odd number (1 to 15) ||

for(let i=1; i<=15; i= i+2){
    console.log(i);
}

// Print all even number (2 to 20)//

for (let i=2; i<=20; i=i+2){
    console.log(i);
}

//  Backwards  //

for (let i=20; i>=2; i=i-2){
    console.log(i);
}

// Print divisible by 4 (4 to 40)

for(let i=4; i<=40; i= i+4){
    console.log(i);
}

// Backward  //

for(let i=40; i>=4; i= i-4){
    console.log(i);
}

// Infinite Loop  //

 for (let i=1 ; i >= 0 ; i++){
   console.log(i);
 }

for (let i=1 ; i <= 5 ; i--){ 
     console.log(i);
   }

 for (let i=1 ;  ; i++){
condole.log(i);
 }
// Print the multiplication table form 5 //

for (let i=5; i<=50; i=i+5){
    console.log(i);
}

//  Jo bhi n ke Jagah put karega uasaka table print ho jayega //
//  ye code live server ke web page me jo number likhoge usi ka table console me print karega  //

let n = prompt("write your number");
    n = parseInt(n);

    for(let i=n; i<=n*10; i = i+n){
        console.log(i);
    }
    
       // Nested for loop // 

    for (let i = 1 ; i<=3; i++ ) {
        for(let j=1; j<=3;j++){
            console.log(j);
        }
    }


    // Nested for loop // (outer loop likhega jitna baar nest karega)

    for(let i=1; i<=3; i++){
        console.log("outer loop ${i}");
        for(let j=1; j<=3; j++){
            console.log(j);
        }
    }

    //While loop// (ye bhi for loop ki tarh kaam karega)

    let i=0;
    while(i<=20){
        console.log(i);
        i++;
    }

     //Break keyword  //

    let k = 1;
    while(k<=5){
    if(k==3){
        break;
    }
    console.log(i);
    i++;
    }
    console.log("we used break at 3");

    ///Loops with Array ///

    // let fruit = ["mango","apple","banana","litchi","orrange"]
    // for(i=0; i<fruit. length ; i++ ){
    //     console.log(i,fruit[i]);
    // }
    
/// Loop with Array   (odd fruit)  ///
    
    let fruit = ["mango","apple","banana","litchi","orrange"]
    for(i=1; i<fruit. length ; i = i+2 ){
        console.log(i,fruit[i]);
    }

    ///    Loop with Array  (even number) ///

    let fruits = ["mango","apple","banana","litchi","orrange","pineapple"]
    for(j=1; j<fruits. length ; j = j+2){
        console.log(j,fruits[j]);
    }


///  Reverse me  ///

    let fruitsss = ["mango","apple","banana","litchi","orrange"]
    for(let i = fruitsss .   length - 1; i>=0; i--){
        console.log(i,fruitsss[i]);
    }
    
    ///  ????

    // let heroes =[
    // ["ironman", "spiderman", "thor"],
    // ["superman" ,"wonder women", "flash"]
    // ] 
    // ///  For of loop   ///

   let fruit=  ["mango","apple","banana","litchi","orrange","litchi"];
   for (fruit of fruit ){
    console.log(fruit);
   }




   for (char of "apnacollege"){
    console.log (char);
   }

///   Nested for of loop  ///

let heroes =[
    ["superman", "batman", "wonder women"],
    ["spiderman" ,"ironman", "thor"]
    ];

    for (list of heroes){
        for (name of list){
            console.log(name);
        }
    }


