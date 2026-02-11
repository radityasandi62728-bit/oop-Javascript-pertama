class Mahasiswa {
    constructor(nama, nim, prodi, semester) {
        this.nama = nama
        this.nim = nim
        this.prodi = prodi
        this.semester = semester
    }
    greeting() {
        console.log("Nama: ", this.nama)
        console.log("NIM: ", this.nim)
        console.log("Prodi: ", this.prodi)
        console.log("Semester: ", this.semester)
    }
}
class MataKuliah {
    constructor(namaMK, sks, semester) {
        this.namaMK = namaMK
        this.sks = sks
        this.semester = semester
    }   
    infoMK() {
        console.log("Mata Kuliah: ", this.namaMK)
        console.log("SKS: ", this.sks)
        console.log("Semester: ", this.semester)
    } 
}
class HasilUjian {
    constructor(mahasiswa, daftarnilai) {
        this.mahasiswa = mahasiswa
        this.daftarnilai = daftarnilai
    }
    tampilkanHasil() {
        this.mahasiswa.greeting()
        console.log("_______________________________")
        this.daftarnilai.forEach((data) => {
            console.log("Mata Kuliah: ", data.mk.namaMK)
            console.log("Nilai: ", data.nilai)
            
        if (data.nilai >= 75) {
            console.log("Status: Lulus")
        } else {
            console.log("Status: Tidak Lulus")
        }
        });
         console.log("_______________________________")
    }
}


let mhs1 = new Mahasiswa("Raditya", "21120119120060", "Informatika", 5)
let mk1 = new MataKuliah("Pemrograman Web", 3, 5)
let mk2 = new MataKuliah("Basis Data", 3, 5)

//buat array untuk menampung daftar nilai

let ujian1 = new HasilUjian (mhs1, [
    {mk : mk1, nilai: 85},
    {mk : mk2, nilai: 90}
])

ujian1.tampilkanHasil()
