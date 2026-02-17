class User {
    constructor(nama) {
        this.nama = nama
    }
    greeting() {
        console.log("Nama: ", this.nama)
    }
}

class Ai {
    constructor(Ai_name) {
        this.Ai_name = Ai_name
    }
    introduce(user) {
        console.log(`Halo ${user.nama}, perkenalkan aku ${this.Ai_name}, senang bertemu denganmu!`)
    }
}

class Chat {
    constructor(user, Ai) {
        this.user = user
        this.Ai = Ai
    }
    startChat() {
        console.log(`Chat dimulai antara ${this.user.nama} dan ${this.Ai.Ai_name}`)
    }
    sapa() {
       this.startChat()
         this.user.greeting()
            this.Ai.introduce(this.user)   
    }
    
}
let user = new User("Raditya")
let Ai1 = new Ai("Celia")
let chat1 = new Chat(user, Ai1)
chat1.sapa()