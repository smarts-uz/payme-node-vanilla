"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionReason;
(function (TransactionReason) {
    TransactionReason[TransactionReason["recipientNotFound"] = 1] = "recipientNotFound";
    TransactionReason[TransactionReason["debitTransaction"] = 2] = "debitTransaction";
    TransactionReason[TransactionReason["transactionFailed"] = 3] = "transactionFailed";
    TransactionReason[TransactionReason["transactionTimeOut"] = 4] = "transactionTimeOut";
    TransactionReason[TransactionReason["refund"] = 5] = "refund";
    TransactionReason[TransactionReason["unknownError"] = 10] = "unknownError";
})(TransactionReason = exports.TransactionReason || (exports.TransactionReason = {}));
