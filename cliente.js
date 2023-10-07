export default class Cliente {
    constructor(nome, celular, renda, email) {
        this.nome = nome
        this.celular = celular
        this.renda = Number(renda).toFixed(2)
        this.email = email
    }

    async verificarCredito() {
        return new Promise((resolve, reject) => {
            if(this.renda > 2000) resolve("Crédito aprovado")
            else reject("Crédito recusado")
        })
        .then((response) => {
            console.log(`${response}`)
            return true
        })
        .catch((response) => {
            console.log(`${response}`)
            return false
        })
    }
}