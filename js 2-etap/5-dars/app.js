let str = "Men Oxforda IT o'qiyman!";
function reverseStr(str){
    let newStr ="";
    for (let i = str .length - 1 ;i  >= 0 ; i --){
      newStr += str.at (i);
  
    }
    return newStr ;  
}
console.log(reverseStr(str));

