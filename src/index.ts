// SRP - Single Responsibility Principle
// OCP — Open-Closed Principle
// LSP— Liskov Substitution Principle
// ISP — Interface Segregation Principle
// DIP — Dependency Inversion Principle


import * as Types from './Types';
import * as Mock from './MockTicket';
import Payment from './Service/Payment';

class Card extends Payment {
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
const paymentWithoutCard = new Payment(Mock.creditPaymentTicket);

paymentWithoutCard.pay()
card.pay()