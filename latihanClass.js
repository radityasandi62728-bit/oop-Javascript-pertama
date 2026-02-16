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
    mintaPinjamBuku(Perpustakaan, ID_Buku, pustakawan) {
        pustakawan.VerifikasiPeminjaman(this, Perpustakaan.cariBuku(ID_Buku))
        pustakawan.prosesPeminjaman(Perpustakaan, this, ID_Buku)
    }
}

class Perpustakaan {
    constructor(){
        this.daftarBuku = []
    }
    tambahBuku(buku) {
        this.daftarBuku.push(buku)
    }
    tampilkanBuku() {
        this.daftarBuku.forEach((buku) => {
            buku.infoBuku()
            console.log("_______________________________")
        })
    }
    cariBuku(ID_buku) {
        return this.daftarBuku.find(b => b.ID_buku === ID_buku)
    }
    prosesPeminjaman(anggota, ID_buku) {
        let buku = this.daftarBuku.find(b => b.ID_buku === ID_buku)
        if(!buku) {
            console.log("Buku tidak ditemukan")
            return
        } 
        if(!buku.tersedia) {
            console.log("Buku sedang dipinjam")
            return
        }
        buku.pinjam(anggota) 
            console.log(`Anggota ${anggota.Nama_Anggota} berhasil meminjam buku ${buku.Judul}`)
    } 
}

class Buku {
    constructor(ID_buku, Judul, Penerbit, Penulis) {
        this.ID_buku = ID_buku
        this.Judul = Judul
        this.Penerbit = Penerbit
        this.Penulis = Penulis
        this.tersedia = true
        this.peminjam = null
    }
    infoBuku() {
        console.log("ID Buku: ", this.ID_buku)
        console.log("Judul: ", this.Judul)
        console.log("Penerbit: ", this.Penerbit)
        console.log("Penulis: ", this.Penulis)
    }
    pinjam(anggota) {
        this.tersedia = false
        this.peminjam = anggota
    }
    kembalikan() {
        this.tersedia = true
        this.peminjam = null
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
    VerifikasiPeminjaman(anggota, buku) {
        console.log(`Pustakawan ${this.Nama_pustakawan} memverifikasi peminjaman buku ${buku.Judul} yang di pinjam ${anggota.Nama_Anggota}`)
    }
    prosesPeminjaman(perpus, anggota, idBuku){
    console.log(`Pustakawan ${this.Nama_pustakawan} memproses peminjaman...`)
    perpus.prosesPeminjaman(anggota, idBuku)
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

let perpus = new Perpustakaan()
perpus.tambahBuku(buku)
perpus.tambahBuku(new Buku("B002","Dasar-Dasar HTML","Gramedia","Budi"))
perpus.tambahBuku(new Buku("B003","CSS untuk Pemula","Erlangga","Sari"))


anggota.mintaPinjamBuku(perpus, "B002", pustakawan)