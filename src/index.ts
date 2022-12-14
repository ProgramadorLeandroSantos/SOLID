// SRP - Single Responsibility Principle
// OCP â Open-Closed Principle
// LSPâ Liskov Substitution Principle
// ISP â Interface Segregation Principle
// DIP â Dependency Inversion Principle


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