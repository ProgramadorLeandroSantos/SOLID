// SOLID
import * as Types from './Types';
import * as Mock from './MockTicket';

class Payment{
    paymentData: Types.PaymentDataProps

    constructor(paymentData:Types.PaymentDataProps){
        this.paymentData = paymentData
    }

    pay(){
        const {method,paymentValue} = this.paymentData;
        method.generatePayment(paymentValue)
    }
}

var newPayment = new Payment(Mock.ticket);
newPayment.pay();