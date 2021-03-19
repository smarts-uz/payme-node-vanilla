import { IRequestBodyRPC } from "../types/interfaces/IRequestBodyRPC";
import { Billing } from "./billing";
import { ITransaction } from "../types/interfaces/ITransaction";
export declare const routing: (body: IRequestBodyRPC<any>, accountCreator: Billing, transaction: ITransaction) => Promise<{
    error: import("..").IResponseErrorRPC;
    id: number;
    result?: undefined;
} | {
    result: any;
    id: number;
    error?: undefined;
}>;
