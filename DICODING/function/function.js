//perhitungan matematika 
function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)


function greeting(name, language) {
    if (language === "English") {
        console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
        console.log(`Bonjour ${name}!`);
    } else {
        console.log(`Selamat Pagi ${name}!`);
    }
}

greeting("Harry", "French");



//menggunakan return. note: kalo di return kita baut var baru yang isi nya sama dengan var di atasnya
function greeting(name, language) {
    if (language === "English") {
        return `Good Morning ${name}!`
    } else if (language === "French") {
        return `Bonjour ${name}!`;
    } else {
        return `Selamat Pagi ${name}!`;
    }
}

let greetingMessage = greeting("nopa", "French");
console.log(greetingMessage);

//function parameter
// function multiply(a, b) { //ini parameter
//     return a * b;
// }
// multiply(3, 4); //ini argumen

//Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya
const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({ displayName, fullName }) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

//default paramaters ketika argumen lebih sedikit dari parameternya, maka parameter yang tidak terdefinisi akan bernilai undefined
function exponentsFormula(baseNumber, exponent = 3) { //exponentnya bernilai 2
    const result = baseNumber ** exponent; //** artinyaa pangkat
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(2); //ini nilai dari baseNumber

//rest parameter
function sum(...numbers) {
    let result = 0;
    for (let angka of numbers) { //angka adalah variable baru
        result += angka;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));

//arrow function
//perbedaan arrow dan regular function
//regular function
// function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
}
sayHello('hallo');

// function expression
const sayName = function(name) {
    console.log(`Nama saya ${name}`)
}
sayName('novastella');

//arrow function
const saidName = (name) => { // *function digantikan dengan arrow =>
    console.log(`Nama saya ${name}`)
}
saidName('ijat kamal');
// Note: 1.kita bisa menghilangkan () jika hanya satu parameter, 
//       2.jika tidak membutuhkan parameter kita tetep mengguankan () tapi di kosongkan parameternya

//ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal.
const myName = name => console.log(`Nama saya ${name}`);
myName("Leia");

const saidHello = () => console.log("Selamat pagi semuanya!");
saidHello();

// Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return (hanya bekerja untuk fungsi satu baris).
// const multiply = (a, b) => a * b;
// console.log(multiply(3, 4));

//kuis 1
let minimal = (x, y) => {
    if (x < y) {
        return a;
    } else if (x > y) {
        return y;
    } else {
        return a;
    }
}
let myNumber = minimal(3, 1);
console.log(`ini jawaban tugas pertama hasilnya (${myNumber})`)

//kuis 2
function power(k, n) {
    const hasil = k ** n;
    console.log(`ini jawaban tugas kedua hasilnya (${hasil})`)
}
power(2, 2);

//testing kuis di google(function)
// Buatlah logika
// if untuk mengevaluasi nilai score dengan ketentuan:
//     *
//     1. Jika nilai score lebih atau sama dengan 90 *
//     -Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.' *
//     2. Jika nilai score ada di antara 80 hingga 89 *
//     -Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.' *
//     3. Jika nilai score ada di antara 70 hingga 79 *
//     -Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.' *
//     4. Jika nilai score ada di antara 60 hingga 69:
//     *
//     -Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.' *
//     5. Jika nilai score di bawah 60:
//     *
//     -Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'

function nilai(score) {
    let hasil = '';
    if (score >= 90) {
        hasil = 'Anda mendapatkan nilai A'
    } else if (score >= 80) {
        hasil = 'Anda mendapatkan nilai B'
    } else if (score >= 70) {
        hasil = 'Anda mendapatkan nilai C'
    } else if (score >= 60) {
        hasil = 'Anda mendapatkan nilai D'
        s
    } else if (score < 60) {
        hasil = 'Anda mendapatkan nilai E'
    }
    console.log(hasil)
}
nilai(90);