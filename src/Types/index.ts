import {CreditPayment,DebitPayment} from '../Paymentmethods'

export type Method = CreditPayment | DebitPayment;

export interface PaymentDataProps {
    method:Method,
    paymentValue: string,
}

export interface Genarate {
    genaratePayment:(paymentValue:string)=> void,
}