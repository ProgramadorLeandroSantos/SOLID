"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticket = void 0;
const Paymentmethods_1 = require("../Paymentmethods");
// @ts-ignore: Unreachable code error
exports.ticket = {
    method: new Paymentmethods_1.DebitPayment,
    paymentValue: '2.300,00'
};
