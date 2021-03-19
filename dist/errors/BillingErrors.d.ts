import { IResponseErrorRPC } from "../types/interfaces/IResponseErrorRPC";
export declare class BillingError {
    OrderNotFound(): IResponseErrorRPC;
    IncorrectAmount(): IResponseErrorRPC;
    InvalidStatus(): IResponseErrorRPC;
    UnableToPerform(): IResponseErrorRPC;
    TransactionNotFound(): IResponseErrorRPC;
    CanNotCancelTransaction(): IResponseErrorRPC;
}
