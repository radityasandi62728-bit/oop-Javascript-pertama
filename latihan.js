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
    constructor(Ai_name, calculator) {
        this.Ai_name = Ai_name
        this.calculator = calculator
    }
    introduce(user) {
        console.log(`Halo ${user.nama}, perkenalkan aku ${this.Ai_name}, senang bertemu denganmu!`)
    }
    async generateResponse(user, text) {
        await this.think()
        const processingMessage = `sedang memproses pesanmu: "${text}"`
        console.log(processingMessage)
        //const returnMessage = `hai ${user.nama}, ada yang bisa ${this.Ai_name} bantu?`
        //console.log(returnMessage)

        if (this.calculator.isMath(text)) {
            const result = this.calculator.calculate(text)
            if (result !== null) {
                return `Hasil perhitungannya adalah ${result}`
            }
            return "Aku tidak bisa menghitung itu, maaf..."
        }
        return `Hai ${user.nama}`
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
class Calculator {
    isMath(text) {
        return /^[0-9\-*/().\s]+$/.test(text)
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

user.sendMessage(chat1, "5*10")
