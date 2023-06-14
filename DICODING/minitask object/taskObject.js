// TODO
//     *
//     1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
//     *
//     -Memiliki properti bernama "name" *
//     -Bertipe data string *
//     -Bernilai apa pun, asalkan tidak string kosong atau null.
//      *Memiliki properti bernama "city" *
//     -Bertipe data string *
//     -Bernilai apa pun, asalkan tidak string kosong atau null.*-Memiliki properti "favorite drink" *
//     -Bertipe data string *
//     -Bernilai apa pun, asalkan tidak string kosong atau null.*-Memiliki properti "favorite food" *
//     -Bertipe data string *
//     -Bernilai apa pun, asalkan tidak string kosong atau null.*-Memiliki properti "isVegan" *
//     -Bertipe data boolean *
//     -Bernilai boolean apa pun.*
//     *
//     2. Buatlah variabel bernama name.*Kemudian isi dengan nilai name dari properti object restaurant *
//     3. Buatlah variabel bernama favoriteDrink.*
//Kemudian isi dengan nilai "favorite drink" dari properti object restaurant


//soal pertama
const restaurant = {
    nama: 'bebek bakar HJ.Slamet',
    city: 'bekasi',
    favoriteDrink: 'teh',
    favoriteFood: 'sate',
    isvegan: false
};
if (restaurant.isvegan == false) {
    restaurant.isvegan = "tidak"
};



console.log(`saya membuka kedai toko bernama ${restaurant.nama}, di kota ${restaurant.city}, dengan makanan favorit ${restaurant.favoriteFood} dan minuman nya ${restaurant.favoriteDrink} apakah disini vegan? tentu ${restaurant.isvegan}`);

//soal kedua
const nama = restaurant.nama;

console.log(nama);

//soal ketiga
const favoriteDrink = restaurant.favoriteDrink;

console.log(favoriteDrink);