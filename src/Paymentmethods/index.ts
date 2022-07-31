interface Genarate {
    genaratePayment:(paymentValue:string)=> void,
}
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