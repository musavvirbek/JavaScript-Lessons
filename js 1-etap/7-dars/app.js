// // // while 
// let b = 1;
// while (b <= 10) {
//     console.log(b);
//     b++

// }

// // do wihle

// let j = 1;
// do {
//     console.log(j);
//     j++;
// } while (j <= 10);





// let sum1 = 0;
// let s = 1;

// while (s <= 5000) {
//     if (s % 4 === 0 && s % 6 !== 0 && s % 9 === 1) {
//         sum1 += s;
//     }
//     s++;
// }

// console.log(sum1);

// // 2
// let j = 1;
// let sum2 = 0;

// do {
//     if (j % 2 === 0) {
//         sum2 += j * 2;
//     } else {
//         sum2 += j - 3;
//     }
//     j++;
// } while (j <= 100);

// console.log(sum2);
// 3
// let sum = 0
// let g = 1
// while (g <= 300) {
//     if (g % 7 === 0 || g % 11 === 0 || g % 13 === 5) {
//         sum ++
//     } else {}
//     g++;
// }
// console.log(sum);

// //4 
// let product4 = 1;
// let e = 1;

// while (e <= 50) {
//     if (e % 3 === 0 && e % 5 !== 0 && e < 30) {
//         product4 *= e;
//     }
//     e++;
// }

// console.log(product4);

// 5
// let result5 = 0;
// let y = 1;

// while (y <= 100) {
//     if (y < 40) {
//         result5 -= y;
//     } else {
//         result5 += y;
//     }
//     y++;
// }

// console.log(result5);

// 6
// let sum6 = 0;
// let u = 1;

// while (u <= 200) {
//     sum6 += u % 7;
//     u++;
// }

// console.log(sum6);
// 7
// let count7 = 0;
// let o = 1;

// while (o <= 150) {
//     if (o % 2 === 0 && o % 5 === 0 && o % 7 === 3) {
//         count7++;
//     }
//     o++;
// }

// console.log(count7);

// 8
// let result8 = 0;
// let m = 1;

// while (m <= 80) {
//     if (m % 4 === 0) {
//         result8 += m / 2;
//     } else {
//         result8 -= m % 3;
//     }
//     m++;
// }

// console.log(result8);
// 9
// let sum9 = 0;
// let b = 1;

// while (b <= 500) {
//     if (
//         b > 100 &&
//         b < 400 &&
//         (b % 8 === 0 || b % 13 === 0) &&
//         b % 5 !== 0
//     ) {
//         sum9 += b;
//     }
//     b++;
// }

// console.log(sum9);
// console.log(sum9);

// //10
// let result10 = 0;
// let l = 1;

// while (l <= 50) {
//     if (l % 2 === 0) {
//         result10 += l * 2;
//     } else {
//         result10 -= l;
//     }
//     l++;
// }

// console.log(result10);










// do while

// 1
let sum1 = 0;
let s = 1;

do {
    if (s % 4 === 0 && s % 6 !== 0 && s % 9 === 1) {
        sum1 += s;
    }
    s++;
} while (s <= 5000);

console.log(sum1);

// 2
let j = 1;
let sum2 = 0;

do {
    if (j % 2 === 0) {
        sum2 += j * 2;
    } else {
        sum2 += j - 3;
    }
    j++;
} while (j <= 100);

console.log(sum2);

// 3
let sum = 0;
let g = 1;

do {
    if (g % 7 === 0 || g % 11 === 0 || g % 13 === 5) {
        sum++;
    }
    g++;
} while (g <= 300);

console.log(sum);

// 4
let product4 = 1;
let e = 1;

do {
    if (e % 3 === 0 && e % 5 !== 0 && e < 30) {
        product4 *= e;
    }
    e++;
} while (e <= 50);

console.log(product4);

// 5
let result5 = 0;
let y = 1;

do {
    if (y < 40) {
        result5 -= y;
    } else {
        result5 += y;
    }
    y++;
} while (y <= 100);

console.log(result5);

// 6
let sum6 = 0;
let u = 1;

do {
    sum6 += u % 7;
    u++;
} while (u <= 200);

console.log(sum6);

// 7
let count7 = 0;
let o = 1;

do {
    if (o % 2 === 0 && o % 5 === 0 && o % 7 === 3) {
        count7++;
    }
    o++;
} while (o <= 150);

console.log(count7);

// 8
let result8 = 0;
let m = 1;

do {
    if (m % 4 === 0) {
        result8 += m / 2;
    } else {
        result8 -= m % 3;
    }
    m++;
} while (m <= 80);

console.log(result8);

// 9
let sum9 = 0;
let b = 1;

do {
    if (
        b > 100 &&
        b < 400 &&
        (b % 8 === 0 || b % 13 === 0) &&
        b % 5 !== 0
    ) {
        sum9 += b;
    }
    b++;
} while (b <= 500);

console.log(sum9);

// 10
let result10 = 0;
let l = 1;

do {
    if (l % 2 === 0) {
        result10 += l * 2;
    } else {
        result10 -= l;
    }
    l++;
} while (l <= 50);

console.log(result10);