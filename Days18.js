 //// JS object literal //// 

//  let student = {
//   name : "shradha",
//     Age : 23 ,
//          marks : 94.4,
//  };
//  console.log(student);
 
////  Creating a post [Thread / Twitter  Post] ////

const  post = {
    username:"@shradhakhapra",
    content : "this is my # first post",
    likes :5 ,
    tags : ["@apnacollege","@delta"]
};

console.log(post);


////  Get value   ////  (Get value ka matlab object ke ander jo data hai usko bahar nikalna / access karna)
 

// let student = {
//     name : "shradha",
//     marks : 94.4
// };

//   console.log (student ["name"]);
//   console.log(student["marks"]);

////  Conversion in get value //// (ek data type ko dusare data type me badalna hota hai)

  const obj = {
    1 :"a",
    2 :"b",
    true : "c",
    null : "d",
    undefined : "e",
  };console.log(obj[1])
  console.log(obj[2])
  console.log(obj[true])
  console.log(obj[null])
  console.log(obj[undefined])

  ////  Add / Update value ////  (Kisi variable , object , arry ya  input field ki value ko nayi value dena.)
  
  let a = 10 ;
  a = 20 ; // update value
  console.log(a);

  ////  Object of object  ////  (ek object ke ander dusra object hona/a)

  // const classInfo = {
  //   aman:{
  //     grade:"A",
  //     City:" Delhi"
  //   },
  //   sonu:{
  //     grade:"A+",
  //     City:"Utter Predesh"
  //   },
  //   raja:{
  //     grade:"B",
  //     City:"Bihar"
  //   }
    
  // };
  // console.log(classInfo);   
  

  ////  Array of object //// (ek arry ke ander multiple object store hote hai)

  const classInfo = [
    {
      name:"aman",
      grade:"A+",
      city:"Delhi"
    },
    {
      name:"shradha",
      grade:"A",
      city:"Pune"

    },
    {
      name:"karan",
      grade:"o",
      city:"Mumbai"
    },
  ];
  console.log(classInfo);


  ////  Math object //// 
  
  // (JavaScript me math object ek built-in object hota hai jo mathematical operations ke liye use hota hai isame bahut sare methods aur properties hote hai )
  

  // let random = Math.fioor(Math.random() * 10) + 1;
  // console.log(random);


  //// Creat Guessing Game  ////

  // const max = prompt("enter the  max number");

  const random = Math.fioor(Math.random()* max) + 1;

  let guess = prompt("guess the number");

  while (true) {
    if(guess == "quit"){
      console.log("user quit");
      break;
    }

  if(guess == random){
    console.log("you are rigth! congrats!! random number was " , random )
    break;
  
  }else{
  //   guess = prompt("your guess was wrong. plese try again");
  // }
}
  }