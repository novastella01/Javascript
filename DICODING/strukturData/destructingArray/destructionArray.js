//destructing array
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// const [, Salad] = favorites;

// console.log(Salad);

//destructing asignment
//melakukan destructuring assignment pada array. Namun, tidak seperti object, kita tidak perlu membungkusnya dengan tanda kurung.
const makanan = ["Seafood", "Salad", "Nugget", "Soup"];

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = makanan; //ini yang dimaksud gapake kurung ([...])

console.log(myFood);
console.log(herFood);

//Array destructuring assignment menukar nilai antara dua variabel tanpa menggunakan temp
let hari = 'senin';
let bulan = 'januari';

console.log("Sebelum swap");
console.log("hari: " + hari);
console.log("hari: " + bulan);

[hari, bulan] = [bulan, hari] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.

console.log("Setelah swap");
console.log("bulan: " + hari);
console.log("hari:" + bulan);

//default values
const nama = ["ijat"];

const [dia, namaDia = "nopa"] = nama

console.log(dia);
console.log(namaDia);

//MAP 
//tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.
// const myMap = new Map([
//     ['1', 'a String key'],
//     [1, 'a number key'],
//     [true, true]
// ]);

// console.log(myMap);

//MAP menggunakan metode set() dan get()
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);


console.log(capital.size);
console.log(capital.get("Tokyo"));
console.log(capital.size);
console.log(capital.get("Jakarta"));
console.log(capital.size);
console.log(capital.delete("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));
capital.set("ivana", "horror");
console.log(capital.size);
console.log(capital.get("ivana"));