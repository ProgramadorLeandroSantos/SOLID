// SRP - Single Responsibility Principle
// OCP — Open-Closed Principle
// LSP— Liskov Substitution Principle

import * as Types from './Types';
import * as Mock from './MockTicket';
import * as Services from './Service/Payment';

class Card extends Services.Payment {
    cardNumber: string

    constructor(cardNumber: string, paymentData:Types.PaymentDataProps){
        super(paymentData)
        this.cardNumber = cardNumber
    }
    showInfo(){
        console.log(`CARD NUMBER => ${this.cardNumber}`);
    }
}

const card = new Card('125335676',Mock.DebitPaymentTicket);
const paymentWithoutCard = new Services.Payment(Mock.creditPaymentTicket);

paymentWithoutCard.pay()
card.pay()