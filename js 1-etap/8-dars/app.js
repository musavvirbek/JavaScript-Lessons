// // function declaretion 

// function func1(a, b, c) {
//     let yigindi = a + b + c;
//     console.log(yigindi);

// }
// func1(10 + 5, 20, 30);

// // function ex[ression

// let func2 = function(){
//     let a =15;
//     let b=20;
//     let yigindi=a +b;
//     console.log(yigindi);

// }
// func2();

// // arraw function 

// let func3 = () {
//     let a =15;
//     let b=20;
//     let yigindi=a +b;
//     console.log(yigindi);

// }
// func3();

// let a = 1;
// let b = 2;
// //let =c=3;

// let d = 10;

// function func1(a = 0, b = 0, c = 0) {
//     let d = 20;
//     let yigindi = a + b + c + d;
//     console.log(yigindi);

// }
// func1(10 + 5, 20.30);

// // nan -not a namber - raqam emas 


// return - qaytarish qaytarmoq 

// let a = 10;
// let b = 20;

// let xisobla = (raqam1, raqam2) => {
//     let kopaytma = raqam1 * raqam2;
//     return kopaytma;
// };
// let k = xisobla(a, b)

// console.log(k + 200);


// check - function yarating 
// 5 ,... 25 for loop yozing 
// faqat 5 bilan 25 funtion tahsqarida yaratilsin 
// hamda argumnent kiritilib parametir dan ushlab olinsin 
// va shu oralig'ida summ ni hisoblang 
// bu summa tashqariga qaytaring ham toq soni yoki juft soni aniqlang 

let a = 5
let b = 25

function check(start, stop) {
  let sum = 0
    for (start; start <= stop; start++) {
        sum += start
    }
    return sum
}

let i = check(a, b)
if (i % 2) {
    console.log(i, "- toq");

} else {
    console.log(i, "- Juft");
}fbh