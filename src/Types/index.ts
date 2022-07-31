export type Method = 'DEBIT' | 'CREDIT';

export interface PaymentDataProps {
    method:Method,
    paymentValue: string,
}