import { Genarate } from "../Types"

export class CreditPayment implements Genarate{
    genaratePayment(paymentValue:string){
        console.log(`Credit payment realized R$ ${paymentValue}`)
    }
}

export class DebitPayment implements Genarate{
    genaratePayment(paymentValue:string){
        console.log(`Debit payment realized R$ ${paymentValue}`)
    }
}