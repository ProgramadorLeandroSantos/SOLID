// SRP - Single Responsibility Principle
// OCP — Open-Closed Principle

import * as Types from '../Types';

export default class Payment{
    paymentData: Types.PaymentDataProps

    constructor(paymentData:Types.PaymentDataProps){
        this.paymentData = paymentData
    }

    pay(){
        const {method,paymentValue} = this.paymentData;
        method.generatePayment(paymentValue)
    }
}