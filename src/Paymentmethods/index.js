"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebitPayment = exports.CreditPayment = void 0;
class CreditPayment {
    genaratePayment(paymentValue) {
        console.log(`Credit payment realized R$ ${paymentValue}`);
    }
}
exports.CreditPayment = CreditPayment;
class DebitPayment {
    genaratePayment(paymentValue) {
        console.log(`Debit payment realized R$ ${paymentValue}`);
    }
}
exports.DebitPayment = DebitPayment;
