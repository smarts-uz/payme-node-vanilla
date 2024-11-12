"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Billing = void 0;
const BillingErrors_1 = require("../errors/BillingErrors");
const TransactionState_1 = require("../types/enums/TransactionState");
const TransactionReason_1 = require("../types/enums/TransactionReason");
const TimeOutTime = 43200000;
class Billing {
    CheckPerformTransaction(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = this.createAccount();
            yield account.find(body.params);
            yield account.validate(body.params);
            return { allow: true };
        });
    }
    CreateTransaction(body, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            yield transaction.find(body.params);
            if (!transaction.id) {
                yield this.CheckPerformTransaction(body);
                yield transaction.create(body.params);
                return {
                    create_time: transaction.getCreateTime(),
                    transaction: transaction.getId(),
                    state: transaction.state,
                };
            }
            if (transaction.state !== TransactionState_1.TransactionState.waiting) {
                throw new BillingErrors_1.BillingError().UnableToPerform();
            }
            if (this.isExpired(transaction.time)) {
                yield transaction.cancel(TransactionState_1.TransactionState.canceled, TransactionReason_1.TransactionReason.transactionTimeOut);
                throw new BillingErrors_1.BillingError().UnableToPerform();
            }
            return {
                create_time: transaction.getCreateTime(),
                transaction: transaction.getId(),
                state: transaction.state,
            };
        });
    }
    PerformTransaction(body, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            yield transaction.find(body.params);
            if (!transaction.id) {
                throw new BillingErrors_1.BillingError().TransactionNotFound();
            }
            if (transaction.state !== TransactionState_1.TransactionState.waiting) {
                if (transaction.state !== TransactionState_1.TransactionState.payed) {
                    throw new BillingErrors_1.BillingError().UnableToPerform();
                }
                return {
                    transaction: transaction.getId(),
                    perform_time: transaction.getPerformTime(),
                    state: transaction.state,
                };
            }
            if (this.isExpired(transaction.time)) {
                yield transaction.cancel(TransactionState_1.TransactionState.canceled, TransactionReason_1.TransactionReason.transactionTimeOut);
                throw new BillingErrors_1.BillingError().UnableToPerform();
            }
            transaction.state = TransactionState_1.TransactionState.payed;
            transaction.setPerformTime(Date.now());
            return {
                transaction: transaction.getId(),
                perform_time: transaction.getPerformTime(),
                state: transaction.state,
            };
        });
    }
    CancelTransaction(body, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            yield transaction.find(body.params);
            if (!transaction.id) {
                throw new BillingErrors_1.BillingError().TransactionNotFound();
            }
            if (transaction.state === TransactionState_1.TransactionState.waiting) {
                yield transaction.cancel(TransactionState_1.TransactionState.canceled, body.params.reason);
                return {
                    transaction: transaction.getId(),
                    cancel_time: transaction.getCancelTime(),
                    state: transaction.state,
                };
            }
            if (transaction.state !== TransactionState_1.TransactionState.payed) {
                return {
                    transaction: transaction.getId(),
                    cancel_time: transaction.getCancelTime(),
                    state: transaction.state,
                };
            }
            const account = this.createAccount();
            if (!(yield account.allowCancelPaidOrder(body.params))) {
                throw new BillingErrors_1.BillingError().CanNotCancelTransaction();
            }
            yield account.cancel(body.params);
            yield transaction.cancel(TransactionState_1.TransactionState.canceled_after_payed, body.params.reason);
            return {
                transaction: transaction.getId(),
                cancel_time: transaction.getCancelTime(),
                state: transaction.state,
            };
        });
    }
    CheckTransaction(body, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            yield transaction.find(body.params);
            if (!transaction.id) {
                throw new BillingErrors_1.BillingError().TransactionNotFound();
            }
            return {
                create_time: transaction.getCreateTime(),
                perform_time: transaction.getPerformTime(),
                cancel_time: transaction.getCancelTime(),
                transaction: transaction.getId(),
                state: transaction.state,
                reason: transaction.reason,
            };
        });
    }
    GetStatement(body, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                transactions: yield transaction.getTransactions(body.params),
            };
        });
    }
    isExpired(time) {
        return Date.now() > time + TimeOutTime;
    }
}
exports.Billing = Billing;
