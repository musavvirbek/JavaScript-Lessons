// 1-masala
let str1 = " 144 ";
let str2 = str1.trim();
let son1 = parseInt(str2);
let natija1 = Math.sqrt(son1);
console.log(natija1);

// 2-masala
let str3 = "7.89";
let son2 = parseFloat(str3);
let son3 = Math.floor(son2);
let natija2 = son3.toString();
console.log(natija2);

// 3-masala
let str4 = "-25";
let son4 = parseInt(str4);
let son5 = Math.abs(son4);
let natija3 = son5.toString();
console.log(natija3);

// 4-masala
let str5 = "javascript";
let harf = str5[0].toUpperCase();
let qolgan = str5.slice(1);
let natija4 = harf + qolgan;
console.log(natija4);

// 5-masala
let str6 = "81";
let son6 = parseInt(str6);
let son7 = Math.sqrt(son6);
let natija5 = son7.toString().repeat(2);
console.log(natija5);

// 6-masala
let str7 = "frontend";
let uzunlik = str7.length;
let natija6 = Math.pow(uzunlik, 2);
console.log(natija6);

// 7-masala
let str8 = "125";
let son8 = parseInt(str8);
let son9 = Math.cbrt(son8);
let natija7 = son9.toString();
console.log(natija7);

// 8-masala
let str9 = "React JS";
let str10 = str9.replace(" ", "_");
let natija8 = str10.toUpperCase();
console.log(natija8);

// 9-masala
let str11 = "15.51";
let son10 = parseFloat(str11);
let son11 = Math.round(son10);
let natija9 = son11.toString();
console.log(natija9);

// 10-masala
let str12 = "HTML,CSS,JS";
let arr1 = str12.split(",");
let natija10 = arr1.length;
console.log(natija10);

// 11-masala
let str13 = "49";
let son12 = parseInt(str13);
let son13 = Math.sqrt(son12);
let natija11 = Math.pow(son13, 2);
console.log(natija11);

// 12-masala
let str14 = "backend";
let natija12 = str14[str14.length - 1].toUpperCase();
console.log(natija12);

// 13-masala
let str15 = "  36.9  ";
let str16 = str15.trim();
let son14 = parseFloat(str16);
let natija13 = Math.ceil(son14);
console.log(natija13);

// 14-masala
let str17 = "apple banana apple";
let natija14 = str17.replaceAll("apple", "orange");
console.log(natija14);

// 15-masala
let str18 = "-64";
let son15 = parseInt(str18);
let son16 = Math.abs(son15);
let natija15 = Math.sqrt(son16);
console.log(natija15);
