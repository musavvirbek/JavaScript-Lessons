// // Array Advenced Methodis....👍👍

// //1 forEach - bu nima 

// //2 map - bu nima 

// //3 filter - bu nima

// //////////////////////////////

// //1 forEach👍👍

// // let arr =[1,2,3,4,5,6,7,8,9];
// // let sum =0;
// // for (let value of arr){
// //     sum += value;
// // }
// // console.log(sum);


// // let arr =[1,2,3,4,5];
// // let sum =0;
// // arr.forEach((value,index,a)=>(sum += value));

// // let arr = [
// //     { id: 1, ism: "ali", familya: "valiyev" },
// //     { id: 2, ism: "vali", familya: "aliyev" },
// //     { id: 3, ism: "urmat", familya: "galmatov" },
// // ]
// // arr.forEach((obj, index, a) => {
// //     console.log(`Hayrli kech ${obj.ism} ${obj.familiya}`);
// // });


// // hayirli kech ali valiyev.
// // hayirli kech vali aliyev.
// // hayirli kech urmat galmatov.

// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////

// // map 👍👍

// // let arr =[1,2,3,4,5]


// // let res =[];

// // for (let value of arr){
// //     res.push (value **2);
// // }
// // console.log(res);

// // let newArr = arr.map((value,index,a) => value **2);
// // let newArr = arr.forEach((value,index,a) => value **2);
// // console.log(newArr);

// // // [1,4,9,16,25]

// // let arr =["olma","uzum","nok"]
// // let newArr =  arr.map ((str,index,a)=> {
// //     return str.toUpperCase();
// // });

// // console.log(newArr);

// ////----------------/////////////////////////
// ////----------------/////////////////////////
// ////----------------/////////////////////////
// ////----------------/////////////////////////
// ////----------------/////////////////////////
// ////----------------/////////////////////////
// ////----------------/////////////////////////
// ////----------------/////////////////////////
// ////----------------/////////////////////////
// ////----------------/////////////////////////
// ////----------------/////////////////////////

// // filter👍👍👍
// // let arr =[1,2,3,4,5,6,7,8,9];
// // let newArr = arr.filter((value,index,a)=>  value % 2);
// // let newArr = arr.filter((value,index,a)=>  !(value % 2));

// // console.log(newArr);
// // [1,3,5,7,9]


// let arr =[
//     {id: 1, ism: "Musavvir", yosh:16},
//     {id: 2, ism: "Abubakir", yosh:10},
//     {id: 3, ism: "ikromxon", yosh:14},
//     {id: 4, ism: "muxamadyusuf", yosh:14},
//     {id: 5, ism: "olimjon", yosh:14},
//     {id: 6, ism: "muhammadsolih", yosh:21},
//     {id: 6, ism: "zilola", yosh:13},
// ];

// // yoshi 15 bolganlar hakatonga qatnasha oladi.

//  let newArr = arr.filter((obj) => {
//     // return obj.yosh >= 15;
//     return obj .ism.length >7;
// });  

// console.log(newArr);
