import { CreditPayment,DebitPayment } from "../Paymentmethods";

// @ts-ignore: Unreachable code error
export const DebitPaymentTicket: PaymentDataProps = {
   method:  new DebitPayment,
   paymentValue: '2.300,00'
};

// @ts-ignore: Unreachable code error
export const creditPaymentTicket: PaymentDataProps = {
   method:  new CreditPayment,
   paymentValue: '1.500,00'
};