//buat class untuk sistem perpustakaan dengan entitas anggota, buku, pustakawan dan admin

class Anggota {
    constructor(ID_anggota, Nama_Anggota, Alamat_anggota,) {
        this.ID_anggota = ID_anggota
        this.Nama_Anggota = Nama_Anggota
        this.Alamat_anggota = Alamat_anggota
    }
    infoAnggota() {
        console.log("ID Anggota: ", this.ID_anggota)
        console.log("Nama Anggota: ", this.Nama_Anggota)
        console.log("Alamat Anggota: ", this.Alamat_anggota)
    }
    pinjamBuku(buku) {
       if(buku.tersedia) {
            buku.pinjam()
            console.log(`${this.Nama_Anggota} berhasil meminjam buku ${buku.Judul}`)
       } else {
            console.log(`Buku ${buku.Judul} tidak tersedia untuk dipinjam`)
       }
    }
}

class Buku {
    constructor(ID_buku, Judul, Penerbit, Penulis) {
        this.ID_buku = ID_buku
        this.Judul = Judul
        this.Penerbit = Penerbit
        this.Penulis = Penulis
        this.tersedia = true
    }
    infoBuku() {
        console.log("ID Buku: ", this.ID_buku)
        console.log("Judul: ", this.Judul)
        console.log("Penerbit: ", this.Penerbit)
        console.log("Penulis: ", this.Penulis)
    }
    pinjam() {
        if(this.tersedia) {
            this.tersedia = false
            console.log("Peminjaman Berhasil")
        } else {
            console.log("Buku Tidak Tersedia")
        }
    }
    kembalikan() {
        this.tersedia = true
        console.log("Buku Berhasil Dikembalikan")
    }
}

class Pustakawan {
    constructor(ID_pustakawan, Nama_pustakawan, Alamat_pustakawan) {
        this.ID_pustakawan = ID_pustakawan
        this.Nama_pustakawan = Nama_pustakawan
        this.Alamat_pustakawan = Alamat_pustakawan
    }
    infoPustakawan() {
        console.log("ID Pustakawan: ", this.ID_pustakawan)
        console.log("Nama Pustakawan: ", this.Nama_pustakawan)
        console.log("Alamat Pustakawan: ", this.Alamat_pustakawan)
    }
}
class Admin {
    constructor(ID_admin, Nama_admin, Alamat_admin) {
        this.ID_admin = ID_admin
        this.Nama_admin = Nama_admin
        this.Alamat_admin = Alamat_admin
    }   
    infoAdmin() {
        console.log("ID Admin: ", this.ID_admin)
        console.log("Nama Admin: ", this.Nama_admin)
        console.log("Alamat Admin: ", this.Alamat_admin)
    }
}

let anggota = new Anggota("A021", "Raditya", "JL.Kosmik No.12")
let buku = new Buku("B001", "Pemrograman JavaScript", "Erlangga", "Cantika")
let pustakawan = new Pustakawan("P100", "Celia", "JL.Merdeka No.45")
let admin = new Admin("AD10", "Lyra", "JL.Gajah Mada No.78")
anggota.infoAnggota()
console.log("_______________________________")
buku.infoBuku()
console.log("_______________________________")
pustakawan.infoPustakawan()
console.log("_______________________________")
admin.infoAdmin()
console.log("_______________________________")
anggota.pinjamBuku(buku)
console.log("Status buku:", buku.tersedia)
