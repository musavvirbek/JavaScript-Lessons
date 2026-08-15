//1forech
let names = ["Ali", "Vali", "Sardor"];

names.forEach(function(name) {
    console.log(name);
});

//2 
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number * 2);
});

//2 map

//1 
let sonlar = [1, 2, 3, 4, 5];

let result = sonlar.map(function(son) {
    return son * 2;
});

console.log(result);

//2 
let baholar = [5, 4, 3, 5];

let resulti = baholar.map(function(baho) {
    return baho + 1;
});

console.log(resulti);

//3 filter

//1 
let raqamlar = [2, 7, 4, 9, 3, 8];

let natija = raqamlar.filter(function(raqam) {
    return raqam > 5;
});

console.log(natija);

//2 
let mevalar = ["olma", "banan", "anor", "uzum"];

let javob = mevalar.filter(function(meva) {
    return meva.length > 4;
});

console.log(javob);
