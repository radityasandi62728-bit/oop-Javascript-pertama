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
    constructor(mahasiswa, nilai, matakuliah) {
        this.mahasiswa = mahasiswa
        this.nilai = nilai
        this.matakuliah = matakuliah
    }
    tampilkanHasil() {
        console.log("Mahasiswa: ", this.mahasiswa.nama)
        console.log("Mata Kuliah: ", this.matakuliah.namaMK)
        console.log("Nilai = ", this.nilai)
        if (this.nilai >= 75) {
            console.log("Status: Lulus")
        } else {
            console.log("Status: Tidak Lulus")
        }
    }
}


let mhs1 = new Mahasiswa("Raditya", "21120119120060", "Informatika", 5)
let mk1 = new MataKuliah("Pemrograman Web", 3, 5)
let ujian1 = new HasilUjian(mhs1, 85, mk1)
ujian1.tampilkanHasil()
