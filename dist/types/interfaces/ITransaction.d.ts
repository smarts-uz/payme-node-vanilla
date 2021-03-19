import { TransactionState } from "../enums/TransactionState";
import { TransactionReason } from "../enums/TransactionReason";
export interface ITransaction {
    id: number;
    time: number;
    state: TransactionState;
    reason: TransactionReason;
    find(params: any): Promise<this>;
    create(params: any): Promise<this>;
    cancel(state: TransactionState, reason: TransactionReason): Promise<any>;
    getId(): number;
    getCreateTime(): number;
    getPerformTime(): number;
    getCancelTime(): number;
    setPerformTime(time: number): void;
    getTransactions(params: any): Promise<ITransaction[]>;
}
