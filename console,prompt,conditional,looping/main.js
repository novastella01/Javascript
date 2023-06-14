//untuk memunculkan pop up
alert('hallo nova!')

// data ke dalam console(inspect)
console.log('hallo bro')

// memunculkan pop up yang berisi kan isian
prompt('berapakah umur anda?')

//logik.catatan let danvar itu sama.kecuali const dia tetap
let usia = prompt('kamu suka apa ?')
alert('kamu menyukai ' + usia)

// variable
// let nama = 'muhammad nova stella'
// let usia = 19

// alert('hallo ' + nama + ' usia kamu ' + usia)
// //biar lebih mudah tidak menggunakan (+) kita bisa pake (`)
let nama = 'novastella'
let umur = 19
let tinggiBadan = 178.9
let beratBadan
let pacar = null

// //karna di berat badan belum diisi karna belum tau berat badannya berapa,dan ingin di masukan di akhir maka kita bisa menambahkannya tanpa harus menggunakan (let)
beratBadan = 62

// //cara menampilkan string di variable pacar dengan conditional statement menggunakan if else
if (pacar == null) {
    pacar = 'tidak punya'
} else {
    pacar = 'sudah punya'
}

// //atau bisa juga menggunakan switch
// switch (pacar) {
//     case 1:
//         pacar = 'punya satu aja cukup'
//         break
//     case 2:
//         pacar = 'buset dua'
//         break
//     default:
//         pacar = 'tidak punya'
//         break
// }

// let saldoAwal = 10000
// let saldoTambahan = 5000
// let hutang = 1000

// //operator
// const saldoAkhir = saldoAwal + saldoTambahan - hutang

alert(`nama saya adalah ${nama}, usia saya ${umur}tahun, tinggi badan saya ${tinggiBadan}cm, berat badan saya ${beratBadan}kg, dan pacar saya ${pacar}`)
    // alert(`saldo awal saya sebesar Rp.${saldoAwal} dan saldo tambahan saya sebanyak Rp.${saldoTambahan} jadi total saldo yang saya miliki sebanyak ${saldoAkhir}`)

// //array
// let namaDosen = ['amrullah', 'gita', 'adit']
// namaDosen.push('joko', 'ijat') //menambahkan data array
// namaDosen.shift() //menghapus index pertama di array
// namaDosen.pop() //menghapus index terakhir di array
// alert(namaDosen)

// //for loop
// // for (let i = 1; i <= 5; i++) {
// //     console.log('novastella')
// // }

// //for loop array
// let namaBuku = ['harry poter', 'tinker bell', 'koran']

// for (let i = 0; i < namaBuku.length; i++) {
//     console.log(namaBuku[i])
// }