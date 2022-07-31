// SOLID
import * as Types from './Types';
import * as Mock from './MockTicket';

class Payment{
    paymentData: Types.PaymentDataProps

    constructor(paymentData:Types.PaymentDataProps){
        this.paymentData = paymentData
    }

    paymentGate(){
        const {method,paymentValue} = this.paymentData;
        method.genaratePayment(paymentValue)
    }
}

var newPayment = new Payment(Mock.ticket);
newPayment.paymentGate();