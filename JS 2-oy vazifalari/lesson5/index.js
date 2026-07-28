
// 1
let k = "salom";
console.log(k.length);

// 2
let u = "Javascript";
console.log(u.charAt(4));

// 3
let c = "Web development ";
console.log(c.at(-1));
console.log(c.at(2));

// 4
let d = "A";
let e = "a";
console.log(d.charCodeAt(0));
console.log(e.charCodeAt(0));
console.log(e.charCodeAt(0) - d.charCodeAt(0));

// 5
let f = "hello";
let g = "sory";
console.log(f.concat(" ", g));

// 6
let h = "Men javaScript o'rganyapman";
console.log(h.includes("javaScript"));

//7 
const url = "https://example.com";
console.log(url.startsWith("https")); 

// 8.
const fileName = "report.pdf";
console.log(fileName.endsWith(".pdf")); 


// 10.
let text2 = "qizil olma, yashil olma, sariq olma";
console.log(text2.indexOf("olma")); 

//13 
console.log(text2.lastIndexOf("olma"));

// 12
let text3 = "42";
console.log(text3.padStart(5, "0")); 

// 13
let text4 = "Salom";
console.log(text4.padEnd(10, "."));

// 14
let text5 = "Ba- ";
console.log(text5.repeat(3));

// 15
let text6 = "Men choyni yaxshi ko'raman";
console.log(text6.replace("choy", "qahva"));

// 16
let text7 = "1, 2, 3, 2, 4, 2";
console.log(text7.replaceAll("2", "besh"));

// 17
let text8 = "Kod yozish juda qiziq";
console.log(text8.slice(4, 8));

// 18
let text9 = "Dasturlash";
console.log(text9.substring(0, 5)); 

// 19
let text10 = "olma, banan, gilos, xurmo";
console.log(text10.split(", ")); 

// 20
let text11 = "   Salom dunyo   ";
console.log(text11.trim()); 

// 21.
let num = 12345;
console.log(num.toString());

// 22.
let text12 = "Men JavaScript bilaman";
console.log(text12.toUpperCase()); 

// 23
let text13 = "HELLO WORLD";
console.log(text13.toLowerCase()); 

// 24
let a = "apple";
let b = "banana";
console.log(a.localeCompare(b));

// 25
let title = "5 + 3 * 2";
console.log(eval(hisoblayman  )); 