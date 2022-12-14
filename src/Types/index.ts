import {CreditPayment,DebitPayment} from '../Paymentmethods'

export type Method = CreditPayment | DebitPayment;

export interface PaymentDataProps {
    method:Method,
    paymentValue: string,
}

export interface Generate {
    generatePayment:(paymentValue:string)=> void,
}