////    this keyword  ////

const student = {
    name: "Shradha",
    age:23,
    eng:95,
    math:93,
    phy:97,
    getAvg(){
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

student.getAvg();

////  Try &  Catch  ////

console.log("hellow");
console.log("hellow");
//  let a = 5
 try {
    console.log(a);
 }catch(err) {
    console.log("caught an err");
 }
console.log("hellow2");
console.log("hellow2");
console.log("hellow2");

////   Arrow function ////  (Miscellaneous Topice )

const sum = (a,b) => {
    console.log(a+b);
};
sum(2,3);

// const cube = (a) => {
//     return a * a * a ;
// };
// console.log(cube(2));

const pow = (a,b) => {
    return a** b;
};
console.log(pow(3,2));

const hellow = () =>{
    console.log("hellow world");
};
hellow();

////   Implicit return  //// 

const mul = (a,b) => a * b;
console.log(mul(4,5));

const cube = (n) => n * n * n ;
console.log(cube(5));

////  Set Timeout   ////

console.log("Hi there !");
setTimeout(() => {
    console.log("Apna College");
},4000);

console.log("Welcome to");

////  Set Interval  ////

// setInterval(() => {
//     console.log("Apna College");
// },2000);

 let id = setInterval(() => {
    console.log("Apna College");
},1000);

console.log(id);

clearInterval(id);

////   This with Arrow function  ////
///  #  Normal Function me this # ///

const students = {
    name: "Sonu",
    show: function (){
        console.log(this.name);
    }
};

students.show();

/// # Arrow function me this # ///
const studentss = {
    name: "Sonu",
    show: () => {
        console.log(this.name);
    }
};

studentss.show();

////  # Practice Quection # ////
// # Write a Arrow function that returns the squre of a number 'n' #///

const squre = (n) => n * n ;
console.log(squre(11));

// # Write a function that print "Hellow world" 5 times at intervals of 2 seconds each. # //

let id5 = setInterval (() =>{
    console.log("Hellow World ");
} ,2000);

setTimeout(() =>{
    clearInterval(id);
    console.log(clearIntervalrun );
},10000)