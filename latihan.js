class User {
    constructor(nama) {
        this.nama = nama
    }
    greeting() {
        console.log("Nama: ", this.nama)
    }
    async sendMessage(chat, text) {
        console.log(`${this.nama}: ${text}`)
        await chat.receiveFromUser(this, text)
    }
}

class Ai {
    constructor(Ai_name, calculator) {
        this.Ai_name = Ai_name
        this.calculator = calculator
        this.personality = "centil"
        this.memory = []
    }
    introduce(user) {
        return `Halo ${user.nama}, perkenalkan aku ${this.Ai_name}, senang bertemu denganmu!`
    }
    async generateResponse(user, text) {
        await this.think()
        console.log(`${this.Ai_name} sedang memproses pesan...`)

        const privousMathCount = this.memory.filter(m => this.calculator.isMath(m.message)).length
        let response = ""
        if (this.calculator.isMath(text)) {
            const result = this.calculator.calculate(text)
            response += this.makeCentil(`Hasil dari ${text} adalah ${result}.`)
        } 

        if (privousMathCount >= 2) {
            const komentar = await this.speak()
            response += `\n${this.Ai_name}: ${komentar}`
        }

        this.memory.push({user: user.nama, message:text})
        if (response !== " ") {
            return response
        }
        return this.introduce(user)
    }

    async speak() {
       const kata_speak = [" uhh matematika lagi? bosan tau"," kamu suka matematika ya?"]
       const random = kata_speak[Math.floor(Math.random() * kata_speak.length)]

       await new Promise(resolve => setTimeout(resolve, 2500))
       return random
    }

    think() {
        return new Promise(resolve => {
            setTimeout(resolve, 2000)
        })
    }

    makeCentil(text) {
        const kata = [" hehe~", " mudah loh~", " masa gitu aja ga bisa sih~", " lihat, aku pintar kan~"]
        const random = kata[Math.floor(Math.random() * kata.length)]
        return text + random
    }
}

class Chat {
    constructor(user, Ai) {
        this.user = user
        this.Ai = Ai
        this.queque = Promise.resolve()
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
        this.queque = this.queque.then(async () => {
           console.log(`${this.Ai.Ai_name} sedang berpikir...`)
           const response = await this.Ai.generateResponse(user, text)
           this.sendToUser(response)
        })
        
        return this.queque
    }

    sendToUser(message) {
        console.log(`${this.Ai.Ai_name}: ${message}`)
    }
    
}
class Calculator {
    isMath(text) {
        return /^[0-9\-*/().\s+]+$/.test(text)
    }
    calculate(expression) {
        try {
            return eval(expression)
        } catch (error) {
            return null
        }
    }
}

let user = new User("Raditya")
let calc = new Calculator()
let ai = new Ai("Celia", calc)
let chat1 = new Chat(user, ai)

async function start() {
    await user.sendMessage(chat1, "5*100")
    await user.sendMessage(chat1, "2+2")
    await user.sendMessage(chat1, "10/2")
}

start()

