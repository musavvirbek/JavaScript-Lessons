// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: 6,
//     g: 7,
// };

// let mapObj = new Map()

// mapObj.set("a",1)
// mapObj.set("b",2)
// mapObj.set("c",3)
// mapObj.set("d",4)
// mapObj.set("e",5)
// mapObj.set("f",6)
// mapObj.set("g",7)

// let setarr =new Set()
// mapObj.forEach((value,k)=>{
//     setarr.add(value)

// })
// console.log(Array.from(setarr));

let kopaytma = 1
function getSum(value){
    if (value){
        kopaytma *= value;
        return getSum(value - 1);

    }
    console.log(kopaytma);
    
};

getSum(6)