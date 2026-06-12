////////////////////////////////////////////////////////////////
/////////// Async keyword           /////////////


// async function greet() {
//     // throw "some random error";
//     return "hello"
// }

// greet()
//  .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was :" , result );
//  })

//  .catch((err) => {
//     console.log("promise was rejected with err : " , err);
//  });

 //////////////////////////////////////////////////////////////////
         /////////////////   Await Keyword  /////////

 function getNum() {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 4000);
    });

 }

 async function demo() {
 getNum();
 getNum();
 getNum();
 getNum();
 getNum();
 }

 //////////////////////////////////////////////////////////////////
         /////////             //////////