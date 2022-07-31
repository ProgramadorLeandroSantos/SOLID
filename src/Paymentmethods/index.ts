export class CreditPayment {
    paymentValue: string

    constructor(paymentValue:string){
        this.paymentValue = paymentValue
    }

    genaratePayment(){
        console.log(`Credit payment realized R$ ${this.paymentValue}`)
    }
}

export class DebitPayment {
    paymentValue: string

    constructor(paymentValue:string){
        this.paymentValue = paymentValue
    }

    genaratePayment(){
        console.log(`Debit payment realized R$ ${this.paymentValue}`)
    }
}