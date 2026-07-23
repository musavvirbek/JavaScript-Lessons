let a = 0;
let b = 0;

for (let i = 1; i <= 20; i++) {
    if(i % 2===1){
        a +=i
    }else{
        b+=i
    }   
}
console.log(b-a);



// sonning qoldig'i = 1 bu Toq son degani.
// sonning qoldig'i = 0 bu Juft son degani.
//2 for loop yozinki boshlanishi 1dan boshlansin 
//tugashi 5da tugasin faqat shu sonlar ichidan
//bir vaqtda 3ga va 5ga bo'linnadigan sonlar ni consol loga chiqarib beradi 

for (let i = 1; i <= 5; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}XMLDocument


//3 for loop yozing \...30 
// agar son toq son kelsa uni qadamini 3 ga oshiring 
//agar soni juft soni kelsa uni qadamini 1ga kamaytiring 
//shu sonlarni consol log chiqaring .

for (let i = 1 ; i<=30;){
    if (i % 2 === 1){
        i +=3;
    }else{
        i-=1;
    }
    console.log(i);
    
}

// for ( 'stars'; 'stop';'step')
//for ('boshlash';'to'xtash';'qadam ')

// 4 start =1;

//stop =...

//step =1;

// kelgan sonlarni kubini concol log ga chiqarib bering 

let stop = +prompt ('tugash nuqtasini kiriting ')


for (let  i =1; i<=stop ;  i++){
    console.log(i **3);
    
} 

