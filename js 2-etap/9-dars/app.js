// // let arr = [1,2,3,4,5,5,4,3,2,1];
// // let newArr = arr.find((value,index,arr)=>value === 5 );
// // console.log(newArr);

// // let arr = [1,2,3,4,5,5,4,3,2,1];
// // let newArr = arr.findIndex((value,index,a) => index === 5 );
// // console.log(newArr);

// let arr = [1,2,3,4,5,5,4,3,2,1];
// let newArr = arr.sort((value,index,arr) => a-b );
// console.log(newArr);


//  //1  every 
//  //2  some







// let arr = ["olma", "uzum", "anor", "nok"];

//1 find arrylar ichidan birrota qiymat qidiradi 

// let value = arr.find((value,index,arr)=> value === "nok");
// let value = arr.find((value,index,arr)=> value === "kiwi");

// console.log(value);

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

// 2 findIndex 

// let index = arr.findIndex((value,index,arr)= value === "anor" );
// let index = arr.findIndex((value,index,arr)= value === "kiwi" );
// let index = arr.findIndex((value,index,arr)= value === "nok" );
// let index = arr.findLastIndex((value,index,arr)=>value === "nok" );
// console.log(index);

// 4  sort////////////////////////


// let arr1 = [20, 7, 50, 9, 5, 1];
// arr1.sort((a, b) => b - a);
// let arr2 = ["olma", "o'rik", "bexi", "tarvuz", "banan", "gilos"]
// arr2.sort((a, b) => b.localeCompare(a));

// console.log(arr1);
// console.log(arr2);


// let arr1 = [20, 7, 50, 9, 5, 1];
// arr1.sort((a, b) => b - a);
// let arr2 = ["olma", "o'rik", "bexi", "tarvuz", "banan", "gilos"]
// arr2.sort((a, b) => b.localeCompare(a));

// console.log(arr1);
// console.log(arr2);

//5 evry


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0];

//  let hammasitrumi = arr.every((value,index,arr)=> value);

// console.log(hammasitrumi);
// 

// 6 some 



// some() — hech bo‘lmaganda 1 ta element shartga mos kelsa true.
// flat() — ichma-ich arrayni tekislaydi.
// flatMap() — map() + flat(1) ni birga bajaradi.
// fill() — array elementlarini berilgan qiymat bilan to‘ldiradi.
// copyWithin() — array ichidagi elementlarni boshqa joyga nusxalaydi, array uzunligi o‘zgarmaydi.


// let arr = [1,2,3,4,5,6,7,8,9,];
// arr .reduce("collback","boshlang'ichQiymat");

// arr.reduce((sum,value) => sum +value, 0);

// let sum = arr .reduce((acc,cur) => acc +cur,0 );
// console.log(sum);

