function bnt1() {
    alert('tizimga kirish uchun login parol kiritiladi')
    let login = prompt('loginni kiritng')
    let parol = +prompt('parolni kiritng')

    if (login == 'user' || parol == 1234) {
        alert('login parol togri kirish mumkun')
    } else {
        alert('login yoki parol xato qaytaddan harakat qiling!! ')
    }
}


function bnt2() {
    alert('mini kankulator')
    let a1 = prompt('qaysi ammalni qilmoqchi siz (+ , - , * , /)')

    if (a1 == '+') {
        let nm1 = +prompt('1-sonni kiriting')
        let nm2 = +prompt('2-sonni kiriting')
        alert(nm1 + nm2)
    }
    else if (a1 == '-') {
        let n1 = +prompt('1-sonni kiriting')
        let n2 = +prompt('2-sonni kiriting')
        alert(n1 - n2)
    }
    else if (a1 == '*') {
        let m1 = +prompt('1-sonni kiriting')
        let m2 = +prompt('2-sonni kiriting')
        alert(m1 * m2)
    }
    else if (a1 == '/') {
        let musavir1 = +prompt('1-sonni kiriting')
        let musavir2 = +prompt('2-sonni kiriting')
        alert(musavir1 / musavir2)
    } else {
        alert('FAQAT SON KIRITING')
    }

}


function bnt3() {
    alert('quiz')

    // 1-savol
    let quiz1 = +prompt('1-savol: JavaScript nima? 1(web saytlarni jonlantirish uchun) 2(bot yasovchi)')
    if (quiz1 == 1) {
        alert('javobingiz togri!🎉')
    } else if (quiz1 == 2) {
        alert('javobingiz xato❌')
    } else {
        alert('1 yoki 2 kiritish mumkun xolos')
    }

    // 2-savol
    let quiz2 = +prompt('2-savol: JavaScript qaysi yili yaratilgan? 1(1995-yil) 2(2005-yil)')
    if (quiz2 == 1) {
        alert('javobingiz togri!🎉')
    } else if (quiz2 == 2) {
        alert('javobingiz xato❌')
    } else {
        alert('1 yoki 2 kiritish mumkun xolos')
    }

    // 3-savol
    let quiz3 = +prompt('3-savol: O\'zgaruvchi e\'lon qilish uchun qaysi kalit so\'z ishlatiladi? 1(let) 2(function)')
    if (quiz3 == 1) {
        alert('javobingiz togri!🎉')
    } else if (quiz3 == 2) {
        alert('javobingiz xato❌')
    } else {
        alert('1 yoki 2 kiritish mumkun xolos')
    }

    // 4-savol
    let quiz4 = +prompt('4-savol: Rost (true) yoki Yolg\'on (false) qiymat qaysi ma\'lumot turiga kiradi? 1(String) 2(Boolean)')
    if (quiz4 == 2) {
        alert('javobingiz togri!🎉')
    } else if (quiz4 == 1) {
        alert('javobingiz xato❌')
    } else {
        alert('1 yoki 2 kiritish mumkun xolos')
    }

    // 5-savol
    let quiz5 = +prompt('5-savol: JavaScript-da qaysi belgi sharh (comment) qoldirish uchun ishlatiladi? 1(//) 2(#)')
    if (quiz5 == 1) {
        alert('javobingiz togri!🎉')
    } else if (quiz5 == 2) {
        alert('javobingiz xato❌')
    } else {
        alert('1 yoki 2 kiritish mumkun xolos')
    }

    // 6-savol
    let quiz6 = +prompt('6-savol: Oynaga ma\'lumot chiqarish uchun qaysi biridan foydalaniladi? 1(alert) 2(prompt)')
    if (quiz6 == 1) {
        alert('javobingiz togri!🎉')
    } else if (quiz6 == 2) {
        alert('javobingiz xato❌')
    } else {
        alert('1 yoki 2 kiritish mumkun xolos')
    }

    // 7-savol
    let quiz7 = +prompt('7-savol: O\'zgarmas qiymatlarni e\'lon qilish uchun nima ishlatiladi? 1(const) 2(var)')
    if (quiz7 == 1) {
        alert('javobingiz togri!🎉')
    } else if (quiz7 == 2) {
        alert('javobingiz xato❌')
    } else {
        alert('1 yoki 2 kiritish mumkun xolos')
    }

    // 8-savol
    let quiz8 = +prompt('8-savol: JavaScript dasturlash tili kim tomonidan yaratilgan? 1(Brendan Eich) 2(Mark Zuckerberg)')
    if (quiz8 == 1) {
        alert('javobingiz togri!🎉')
    } else if (quiz8 == 2) {
        alert('javobingiz xato❌')
    } else {
        alert('1 yoki 2 kiritish mumkun xolos')
    }

    // 9-savol
    let quiz9 = +prompt('9-savol: Matnli ma\'lumotlar qaysi turga kiradi? 1(Number) 2(String)')
    if (quiz9 == 2) {
        alert('javobingiz togri!🎉')
    } else if (quiz9 == 1) {
        alert('javobingiz xato❌')
    } else {
        alert('1 yoki 2 kiritish mumkun xolos')
    }

    // 10-savol
    let quiz10 = +prompt('10-savol: JavaScript tashqi faylga yozilganda kengaytmasi nima bo\'ladi? 1(.html) 2(.js)')
    if (quiz10 == 2) {
        alert('javobingiz togri!🎉')
    } else if (quiz10 == 1) {
        alert('javobingiz xato❌')
    } else {
        alert('1 yoki 2 kiritish mumkun xolos')
    }
}
