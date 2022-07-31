// SOLID

import * as Types from './Types';
import * as Mock from './MockTicket';
import * as PaymentMethod from './Paymentmethods';

class Payment{
    paymentData: Types.PaymentDataProps

    constructor(paymentData:Types.PaymentDataProps){
        this.paymentData = paymentData
    }

    paymentGate(){
        const {method,paymentValue} = this.paymentData;
      
        switch (method) {
            case 'CREDIT':
                const creditPaymentGate = new PaymentMethod.CreditPayment(paymentValue);
                
                return creditPaymentGate.genaratePayment();
        
            case 'DEBIT':
                const debitPaymentGate = new PaymentMethod.DebitPayment(paymentValue);
                    
                return debitPaymentGate.genaratePayment();

            default:
                break;
        }
    }
}

var newPayment = new Payment(Mock.ticket);
newPayment.paymentGate();