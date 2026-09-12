//  clacc - object yaratish uchun kerak bo'lgan shablon.

// class Person {
//     constructor(ism, yosh, manzil) {
//         this.a = ism;
//         this.b = yosh;
//         this.c = manzil;
//     }
// }

// let obj = new Person("ali", "20", "ozbekiston");
// for (let key in obj) {
//     console.log(obj[key]);
// }






// class Person{
// //     constructor(ism,yosh,manzil){
// //         this.a = ism;
// //         this.b = yosh;
// //         this.c = manzil;
// //     }
// }

// let obj = new Person("Ali" , "20" , "O'zbekiston");
// for (let key in obj){
//     console.log(obj [key]);
// }


// class Person{
//     constructor(ism,familya,yosh,maktab,manzil,oquvmarkaz){
//         this.a = ism;
//         this.b = familya;
//         this.c = yosh;
//         this.d = maktab;
//         this.f = manzil;
//         this.e = oquvmarkaz;

//     }
// }

// let obj = new Person("Musavvirxon","Hamzaxonov", 16, 19,"O'zbekiston","oxford");
// for (let key in obj){
//     console.log(obj [key]);

// }



// class Person{
//     constructor(pul){
//         this.ism ="Eshmat";
//         this.familya ="toshmatov";
//         this.yosh ="45";
//         this.skills =["html","css","js"];
//         this.sochi ="oq";
//         this.kasbi ="sanatkor";
//         this.pul ="pul";
//     }

//     getOylik(){
//         return this.pul;
//     }
// }

// class Child extends Person{
//     constructor(pul){
//         super(pul)
//         this.ism ="ali";
//         this.familya ="valiyev";
//         this.yosh ="20";
//         this.skills =["scratch" ,"python"];
//     }
// }

// let obj = new Child("$1000");
// console.log(obj.getOylik());


// class User {
// //     constructor(ism){
// //         this.ism = ism ;
// //         this.massage = null;
// //     }

// //     get cheking(){
// //         return this.massage;
// //     }
// //     set cheking(yosh){
// //         if (yosh >= 15 ) this.massage = "Siz futbol o'ynashga tayorsiz.✅";
// //         else this.massage = "Siz futbol o'ynashga tayyor emassiz❌";
// //     }
// // }

// // let obj = new User("ali");
// // obj.cheking =16;
// // console.log(obj.cheking);

// // let obj2 = new User("valiyev");
// // obj2.cheking =12;
// // console.log(obj2.cheking);



// class Cat {
//     constructor(ism, yosh) {
//         this.name = ism;
//         this.age = yosh;
//     }
// }
// class Dog {
//     constructor(ism, yosh) {
//         this.name = ism;
//         this.age = yosh;
//     }
// }

// let obj1 = new Cat("Masha", 2);
// let obj2 = new Dog("Simba", 4);

// console.log(obj1 instanceof Cat);
// console.log(obj2 instanceof Dog);

// instanceof -- obj in qaysi class dan yaratilganligini aniqlaydi.(true || false) qaytaradi.


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// 1  clacc ----> object yaratish uchun kerak bo'lgan shablon.

// 2   consturctor() ---> classning methodi bo'lib vazifasi tashqaridan kiritilgn qiymatlarni 
// parametrida qabul qilib oladi va this yordamida class biriktiradi.

// 3 super() ---> Meros olganda error ni oldini oladi  boladan otga malumot otkazish uchun ishlatiladi

//4 inhartence ---> Meros olish 
// Biz meros olishda  (extends) kalit so'zi orqali amalga oshiradi 

// 5 get, set 
//malumot chiqarish ham qabul qilish uchun ishlatiladi. doim get va set funsiya bir xil .

// 6 instanceof ---> object class dan yaratilgan aniqlaydi va true || folse qaytaradi 