//soal pertama mengetahui saldo akhir dari yg diinput user
let saldo = prompt('masukkan saldo')
alert('total saldomu sekarang adalah RP.' + saldo)

//soal keddua menentukan hari dari tanggal yang ada saat ini
let hari = new Date().getDay()
switch (hari) {
    case 0:
        hari = 'Minggu'
        break
    case 1:
        hari = 'Senin'
        break
    case 2:
        hari = 'Selasa'
        break
    case 3:
        hari = 'Rabu'
        break
    case 4:
        hari = 'Kamis'
        break
    case 5:
        hari = 'Jumat'
        break
    case 6:
        hari = 'Sabtu'
        break
    default:
        hari = 'not found'
        break
}
console.log(`hari ini adalah hari ${hari}`)