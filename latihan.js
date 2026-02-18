class User {
    constructor(nama) {
        this.nama = nama
    }
    greeting() {
        console.log("Nama: ", this.nama)
    }
    sendMessage(chat, text) {
        console.log(`${this.nama}: ${text}`)
        chat.receiveFromUser(this, text)
    }
}

class Ai {
    constructor(Ai_name) {
        this.Ai_name = Ai_name
    }
    introduce(user) {
        console.log(`Halo ${user.nama}, perkenalkan aku ${this.Ai_name}, senang bertemu denganmu!`)
    }
    async generateResponse(user, text) {
        await this.think()
        const processingMessage = `sedang memproses pesanmu: "${text}"`
        console.log(processingMessage)
        return `hai ${user.nama}, ada yang bisa ${this.Ai_name} bantu?`
    }
    think() {
        return new Promise(resolve => {
            setTimeout(resolve, 2000)
        })
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
    async receiveFromUser(user, text) {
        console.log(`${this.Ai.Ai_name} sedang berpikir...`)
        const response = await this.Ai.generateResponse(user, text)
        this.sendToUser(response)
    }

    sendToUser(message) {
        console.log(`${this.Ai.Ai_name}: ${message}`)
    }
    
}
let user = new User("Raditya")
let Ai1 = new Ai("Celia")
let chat1 = new Chat(user, Ai1)
user.sendMessage(chat1, "hai celia")
