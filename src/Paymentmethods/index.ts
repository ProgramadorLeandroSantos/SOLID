import { Generate } from "../Types"

export class CreditPayment implements Generate{
    generatePayment(paymentValue:string){
        console.log(`Credit payment realized R$ ${paymentValue}`)
    }
}

export class DebitPayment implements Generate{
    generatePayment(paymentValue:string){
        console.log(`Debit payment realized R$ ${paymentValue}`)
    }
}