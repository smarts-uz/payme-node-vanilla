"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionState;
(function (TransactionState) {
    TransactionState[TransactionState["waiting"] = 1] = "waiting";
    TransactionState[TransactionState["payed"] = 2] = "payed";
    TransactionState[TransactionState["canceled_after_payed"] = -2] = "canceled_after_payed";
    TransactionState[TransactionState["canceled"] = -1] = "canceled";
})(TransactionState = exports.TransactionState || (exports.TransactionState = {}));
