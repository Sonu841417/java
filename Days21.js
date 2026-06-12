//// #  Array Method # ////
///# forEach function # ///

let arr = [1, 2, 3, 4, 5];
arr.forEach(function(el){
    console.log(el);
});
console.log(arr);

// let print = function (el){
//     console.log(el);
// };

// arr.forEach(print);

//// # Map function # ///

let num2 = [1, 2, 3, 4, ];

let double = num2.map((el) =>{
    return el * 2 ;
});

console.log(double);


let students = [
    {
        name:"aman",
        marks:95,

    },
    {
        name:"sonu",
        marks:94,

    },
    {
        name:"prince",
        marks:92,

    },
];

let gpa = students.map((el) =>{
    return el.marks / 10 ;
});

console.log(gpa);


//// # filter function # ////

let nums1 = [1,2,3,4,7,8,9,10,12,11];
let ans = nums1.filter( (el)=>{
    return el % 2 == 0; //even -> true, odd -> faise
} );

console.log(ans);


let num = [1,2,3,4,7,8,9,10,12,11];
let anss = num.filter( (el)=>{
    return el % 2 !== 0; //even -> true, odd -> faise
} );

console.log(anss);

//// # Every # ////

   let ans3 = [2,4,6,].every((el) => el % 2 == 0);
    console.log(ans3);
    
   let ans4 = [2,4,6, 8,].every((el) => el %2  !== 0);
    console.log(ans4);
    
    //// # Some function  # ////

    let ans5 = [2,4,6,7,].some((el) => el % 2 == 0);
    console.log(ans5);
    
    let ans6 = [2,4,6,8,].some((el) => el % 2 !== 0);
    console.log(ans6);
    

    //// #  Reduce  Function  #  ////

    let nums = [1, 2, 3, 4, ];
    let finalValue = nums.reduce((res, el) =>res + el);
    console.log(finalValue);

    let num7 = [1, 2, 3, 4, ];
    let finalValues = num7.reduce((res, el) =>{
        console.log(res);
        return res + el;
    });
    console.log(finalValues);

    //// # Maximum in Array # ////

    let arr1 = [1, 4, 2, 5, 6, 7, 2, 9, 2];

    let max = -1;
    for (let i = 0; i <arr1.length; i++) {
        if (max < arr1[i]) {
            max = arr1[i];
        }
    }

    console.log(max);

    let max1 = arr1.reduce((max1,el) =>{
        if (max1 < el) {
            return el;
        }else{
            return max1 ;
        }
    });

    console.log(max1);

    //// # Default Parameter # ////

     function sum(a, b = 2){
        return a + b ;
    };

    console.log (sum (5));  


    //// # Spread Opterator  #////
    
    let a = [1, 2, 3, ];
    let b = [...a, 4, 5,];

    console.log(b);


    let odd = [1, 3, 5, 7, 9, ];
    let even = [2, 4, 6, 6, 8, ];

    console.log(...odd,...even);


    const data = {
        email:"ironman@gemail.com",
        password:"acdf",
    };

    console.log(data);

    const dataCopy = {...data, id: 1234, country: "India"};

    console.log(dataCopy);

////#   Rest Operator #////

function sum(...args){
    // arguments 
    for (let i = 0; i < arguments.length; i++){
        console.log("you gave us :", args[i]);
    }
};

// console.log(sum);

// function sum(...args){
//     return args,reduce((sum, el) => sum + el);
// }


////#  Destructing  #////

let arr5 = [10, 20, 30];
let [l, m, n] = arr5;

console.log(l);
console.log(m);
console.log(n);