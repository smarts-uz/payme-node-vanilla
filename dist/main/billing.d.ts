import { IRequestBodyRPC } from "../types/interfaces/IRequestBodyRPC";
import { ICreateTransactionParams } from "../types/interfaces/ICreateTransactionParams";
import { ICheckPerformTransactionParams } from "../types/interfaces/ICheckPerformTransactionParams";
import { TransactionState } from "../types/enums/TransactionState";
import { IPerformTransactionParams } from "../types/interfaces/IPerformTransactionParams";
import { TransactionReason } from "../types/enums/TransactionReason";
import { ICancelTransaction } from "../types/interfaces/ICancelTransaction";
import { ICheckTransactionParams } from "../types/interfaces/ICheckTransactionParams";
import { IGetStatementParams } from "../types/interfaces/IGetStatementParams";
import { IAccount } from "../types/interfaces/IAccount";
import { ITransaction } from "../types/interfaces/ITransaction";
export declare abstract class Billing {
    abstract createAccount(): IAccount;
    CheckPerformTransaction(body: IRequestBodyRPC<ICheckPerformTransactionParams>): Promise<{
        allow: boolean;
    }>;
    CreateTransaction(body: IRequestBodyRPC<ICreateTransactionParams>, transaction: ITransaction): Promise<{
        create_time: number;
        transaction: number;
        state: TransactionState;
    }>;
    PerformTransaction(body: IRequestBodyRPC<IPerformTransactionParams>, transaction: ITransaction): Promise<{
        transaction: number;
        perform_time: number;
        state: TransactionState.payed;
    }>;
    CancelTransaction(body: IRequestBodyRPC<ICancelTransaction>, transaction: ITransaction): Promise<{
        transaction: number;
        cancel_time: number;
        state: TransactionState.waiting;
    } | {
        transaction: number;
        cancel_time: number;
        state: TransactionState.canceled_after_payed | TransactionState.canceled;
    } | {
        transaction: number;
        cancel_time: number;
        state: TransactionState.payed;
    }>;
    CheckTransaction(body: IRequestBodyRPC<ICheckTransactionParams>, transaction: ITransaction): Promise<{
        create_time: number;
        perform_time: number;
        cancel_time: number;
        transaction: number;
        state: TransactionState;
        reason: TransactionReason;
    }>;
    GetStatement(body: IRequestBodyRPC<IGetStatementParams>, transaction: ITransaction): Promise<{
        transactions: ITransaction[];
    }>;
    private isExpired;
}
