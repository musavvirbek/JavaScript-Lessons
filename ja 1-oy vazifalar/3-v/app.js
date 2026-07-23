// 1. push

let students = ["musavvir", "oqilxon"];
students.push("odilbek");
students.push("firdas");
console.log(students);

//2
let products = ["telefon", "Noutbuk"];
products.push("planshet", "Printer");
console.log(products);


// 2. pop

let fruits = ["olma", "Banan", "Uzum"];
fruits.pop();
console.log(fruits);

//2
let numbers = [10, 20, 30, 40];
numbers.pop();
numbers.pop();
console.log(numbers);


// 3. shift

let queue = ["musavvir", "odilbek", "saidmurod"];
queue.shift();
console.log(queue);

//2
let tasks = ["1-topshiriq", "2-topshiriq", "3-topshiriq"];
tasks.shift();
console.log(tasks);


// 4. unshift

let cars = ["BMW", "Audi"];
cars.unshift("mercedes");
console.log(cars);

//2
let months = ["yoz", "qish"];
months.unshift("kuz");
console.log(months);


// 5. length

let names = ["musavvir", "Vali", "Sardor", "Jasur"];
console.log(names.length);

//2
let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums1.length);


// 6. indexOf

let colors = ["Qizil", "Ko'k", "Yashil", "Sariq"];
console.log(colors.indexOf("Yashil"));

//2
let cities = ["toshkent", "samarqand", "Buxoro"];
console.log(cities.indexOf("Buxoro"));


// 7. includes

let languages = ["JavaScript", "Python", "Java"];
console.log(languages.includes("Python"));


//2
let foods = ["contir", "pubg", "mayinkiraf"];
console.log(foods.includes("dls"));


// 8. join

let words = ["Men", "JavaScript", "o'rganayapman"];
console.log(words.join(" "));


//2
let phone = ["+998", "90", "123", "45", "67"];
console.log(phone.join("-"));


// 9. concat

let boys = ["musavir", "nasibjon"];
let girls = ["farzona", "merochxon"];
console.log(boys.concat(girls));


//2
let frontend = ["HTML", "CSS"];
let backend = [".js", "riyakt"];
console.log(frontend.concat(backend));


// 10. slice

let nums2 = [10, 20, 30, 40, 50, 60];
console.log(nums2.slice(1, 4));


//2

let week = [
  "dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
  "Yakshanba"
];
console.log(week.slice(0, 5));