import { IResponseErrorRPC } from "../types/interfaces/IResponseErrorRPC";
import { ErrorCodes } from "../types/enums/ErrorCodes";

export class BillingError {
  OrderNotFound(): IResponseErrorRPC {
    return {
      code: ErrorCodes.OrderNotFound,
      message: {
        ru: "Заказ не найден.",
        uz: "Buyurtma topilmadi.",
        en: "Order not found.",
      },
      data: "order",
    };
  }

  IncorrectAmount(): IResponseErrorRPC {
    return {
      code: ErrorCodes.IncorrectAmount,
      message: {
        ru: "Неверная сумма заказа.",
        uz: "Buyurtma miqdori yaroqsiz.",
        en: "Invalid order amount.",
      },
      data: "order",
    };
  }

  InvalidStatus(): IResponseErrorRPC {
    return {
      code: ErrorCodes.InvalidStatus,
      message: {
        ru: "Неверный статус заказа.",
        uz: "Buyurtma holati noto‘g‘ri.",
        en: "Invalid order status.",
      },
      data: "order",
    };
  }

  UnableToPerform(): IResponseErrorRPC {
    return {
      code: ErrorCodes.UnableToPerform,
      message: {
        ru: "Невозможно выполнить операцию.",
        uz: "Amalni amalga oshirib bo'lmadi.",
        en: "Unable to perform operation.",
      },
      data: "transaction",
    };
  }

  TransactionNotFound(): IResponseErrorRPC {
    return {
      code: ErrorCodes.TransactionNotFound,
      message: {
        ru: "Транзакция не найдена.",
        uz: "Tranzaksiya topilmadi.",
        en: "Transaction not found.",
      },
      data: "transaction",
    };
  }

  CanNotCancelTransaction(): IResponseErrorRPC {
    return {
      code: ErrorCodes.TransactionNotFound,
      message: {
        ru: "Невозможно отменить транзакцию.",
        uz: "Tranzaksiya bekor qilinmadi.",
        en: "Unable to cancel transaction",
      },
      data: "transaction",
    };
  }
}
