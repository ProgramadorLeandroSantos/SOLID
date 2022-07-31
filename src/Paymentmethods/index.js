"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebitPayment = exports.CreditPayment = void 0;
class CreditPayment {
    constructor(paymentValue) {
        this.paymentValue = paymentValue;
    }
    genaratePayment() {
        console.log(`Credit payment realized R$ ${this.paymentValue}`);
    }
}
exports.CreditPayment = CreditPayment;
class DebitPayment {
    constructor(paymentValue) {
        this.paymentValue = paymentValue;
    }
    genaratePayment() {
        console.log(`Debit payment realized R$ ${this.paymentValue}`);
    }
}
exports.DebitPayment = DebitPayment;
