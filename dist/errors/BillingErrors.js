"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorCodes_1 = require("../types/enums/ErrorCodes");
class BillingError {
    OrderNotFound() {
        return {
            code: ErrorCodes_1.ErrorCodes.OrderNotFound,
            message: {
                ru: "Заказ не найден.",
                uz: "Buyurtma topilmadi.",
                en: "Order not found."
            },
            data: "order"
        };
    }
    ;
    IncorrectAmount() {
        return {
            code: ErrorCodes_1.ErrorCodes.IncorrectAmount,
            message: {
                ru: "Неверная сумма заказа.",
                uz: "Buyurtma miqdori yaroqsiz.",
                en: "Invalid order amount."
            },
            data: "order"
        };
    }
    ;
    InvalidStatus() {
        return {
            code: ErrorCodes_1.ErrorCodes.InvalidStatus,
            message: {
                ru: "Неверный статус заказа.",
                uz: "Buyurtma holati noto‘g‘ri.",
                en: "Invalid order status."
            },
            data: "order"
        };
    }
    ;
    UnableToPerform() {
        return {
            code: ErrorCodes_1.ErrorCodes.UnableToPerform,
            message: {
                ru: "Невозможно выполнить операцию.",
                uz: "Amalni amalga oshirib bo'lmadi.",
                en: "Unable to perform operation."
            },
            data: "transaction"
        };
    }
    ;
    TransactionNotFound() {
        return {
            code: ErrorCodes_1.ErrorCodes.TransactionNotFound,
            message: {
                ru: "Транзакция не найдена.",
                uz: "Tranzaksiya topilmadi.",
                en: "Transaction not found."
            },
            data: "transaction"
        };
    }
    CanNotCancelTransaction() {
        return {
            code: ErrorCodes_1.ErrorCodes.TransactionNotFound,
            message: {
                ru: "Невозможно отменить транзакцию.",
                uz: "Tranzaksiya bekor qilinmadi.",
                en: "Unable to cancel transaction"
            },
            data: "transaction"
        };
    }
}
exports.BillingError = BillingError;
