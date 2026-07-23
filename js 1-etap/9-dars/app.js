// // // // let b ={
// // // //     ism :"eshmat",
// // // //     yosh:20,
// // // // }
// // // // let c = structuredClone(b)
// // // // c.ism ="toshmat "

// // // // console.log(c); 


// // // // let o ={
// // // //     ism : "eshmat",
// // // //     yosh:20,
// // // // }
// // // // let c =Object.assign({},o)

// // // // c.ism ="toshmat"

// // // // console.log(c);


// // // // let user = {
// // // //     id:100,
// // // //     ism:"ali",
// // // //     familya:"valiyev",
// // // //     manzil:"ozbekiston",
// // // //     status:true,
// // // // }

// // // // for (let key in user){
// // // //     if (user.status)
// // // //         user.manzil ="Namangan"          
// // // // }
// // // // console.log(user);

// // // let user = {
// // //     id:100,
// // //     ism:"ali",
// // //     familya:"valiyev",
// // //     manzil:"ozbekiston",
// // //     status:true,
// // //     getFULLName :function(){
// // //         console.log(this.ism,this.familya);

// // //     },
// // // };
// // // let copUser=user;
// // // user=nall;

// // // let newCopyUser;
// // // copUser=nall;

// // // newCopyUser.get.getFULLName();

// // //1
// // const student = {
// //     name: "Ali",
// //     age: 20,
// //     university: "TUIT"
// // };

// // for (let key in student) {
// //     console.log(key + ": " + student[key]);
// // }

// // //2
// // const employee = {
// //     name: "John",
// //     age: 30,
// //     salary: 2500,
// //     city: "London",
// //     experience: 5
// // };

// // let sum = 0;

// // for (let key in employee) {
// //     if (typeof employee[key] === "number") {
// //         sum += employee[key];
// //     }
// // }

// // console.log(sum);

// // //3

// // const user = {
// //     firstName: "Ali",
// //     lastName: "Valiyev",
// //     age: 22,
// //     city: "Tashkent",
// //     married: false,
// //     country: "Uzbekistan"
// // };

// // let count = 0;

// // for (let key in user) {
// //     if (typeof user[key] === "string") {
// //         count++;
// //     }
// // }

// // console.log(count);

// // //4

// // const studen = {
// //     firstName: "Ali",
// //     lastName: "Valiyev",
// //     age: 20,

// //     fullInfo() {
// //         return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
// //     }
// // };

// // console.log(student.fullInfo());

// // //5
// // const bankAccount = {
// //     owner: "Ali",
// //     balance: 1000,

// //     deposit(amount) {
// //         this.balance += amount;
// //     },

// //     withdraw(amount) {
// //         this.balance -= amount;
// //     },

// //     showBalance() {
// //         return this.balance;
// //     }
// // };

// // bankAccount.deposit(500);
// // bankAccount.withdraw(200);

// // console.log(bankAccount.showBalance());























// ////////////////////////////////////////////////////////
// //1

// const obj1 = {
//     name: "Ali",
//     age: 20,
//     university: "TUIT"
// };

// const key = "university";

// console.log(obj1[key]);

// //2
// const obj2 = {
//     firstName: "musavvir",
//     lastName: "hamzaxonov",
//     age: 22,
//     city: "kosonsoy"
// };

// const keys = ["firstName", "city", "phone", "age"];

// let result = "";

// for (let key of keys) {
//     if (obj2[key] !== undefined) {
//         result += obj2[key] + " ";
//     }
// }

// console.log(result.trim());

// //3
// const obj3 = {
//     name: "Ali",
//     age: 20
// };

// const obj4 = obj3;

// obj4.age = 25;

// console.log(obj3);
// console.log(obj4);

// //4

// const obj5 = {
//     name: "John",
//     age: 30
// };

// const obj6 = obj5;

// obj6.country = "Uzbekistan";
// obj6.age = 35;
// delete obj6.name;

// console.log(obj5);
// console.log(obj6);

// //5

// const obj7 = {
//     name: "musavvir",
//     age: 21
// };

// const obj8 = Object.assign({}, obj7);

// obj8.age = 25;
// obj8.city = "namangan ";

// console.log(obj7);
// console.log(obj8);

// //6

// const obj9 = {
//     name: "Ali",
//     age: 20
// };

// const obj10 = {
//     age: 22,
//     city: "Tashkent"
// };

// const obj11 = Object.assign({}, obj9, obj10);

// console.log(obj11);

// //7

// const obj12 = {
//     name: "musavvir",
//     address: {
//         city: "Tashkent",
//         zip: 100000
//     }
// };

// const obj13 = structuredClone(obj12);

// obj13.address.city = "Samarqand";
// obj13.address.zip = 140100;

// console.log(obj12);
// console.log(obj13);

// //8

// const obj14 = {
//     name: "Ali",
//     company: {
//         title: "Google",
//         salary: 2000
//     },
//     skills: ["hTML", "CSS", "JavaScript"]
// };

// const obj15 = structuredClone(obj14);

// obj15.company.title = "Microsoft";
// obj15.company.salary *= 2;
// obj15.experience = 3;
// obj15.skills.push("Node.js");

// console.log(obj14);
// console.log(obj15);



// const input = {
//  ali: {
//  tasks: {
//  task1: { completed: true },
//  task2: { completed: true },
//  task3: { completed: false }
//  }
//  },
//  vali: {
//  tasks: {
//  task1: { completed: false },
//  task2: { completed: false }
//  }
//  },
//  sami: {
//  tasks: {
//  task1: { completed: true },
//  task2: { completed: true },
//  task3: { completed: true }
//  }
//  }
// };


// let summa =0;
// for(let key in webbrin){
//     for (let key2 in obj ){
//         if(`${+key2}` ==="nan"){
//             let obj2 = obj [key ];
//             for(let key3  in obj2){
//                 summa+= obj2 [key3 ].price
//             }
//         }else{
//             summa+=obj  [key2].price;
//         }
//     }
// }
// console.log(summa);

let obj = {
    id: 1,
    name: "macbook",
    price: 1000,
    marka: "usa",
    chip: "m4",
    active: false,
    color: "silva",
};

// raqam:2,
//matn:4,
// boolean:1,


// function getSortData(data){
//     let newObj={};
//     for(let key in data ){
//         if (typeof data [key] ==="number"){
//             newObj.raqam? (newObj.raqam += 1 ( newObj.raqam =1);

//         }else if (typeof data  [key ]==="boolean "){
//             newObj.boolean ?(ne)
//         }
//     }
// }

////////////////////////////////////////////

let lei = 0
let result;
for (let key in obj) {
    if (obj[key].length > lei) {
        len =obj [key ].length
        result = { key: obj[key] };
    }
}
console.log(result);

