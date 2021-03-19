import { IResponseErrorRPC } from "../types/interfaces/IResponseErrorRPC";
export declare const prepareResponse: (id: number, error?: IResponseErrorRPC, result?: any) => {
    error: IResponseErrorRPC;
    id: number;
    result?: undefined;
} | {
    result: any;
    id: number;
    error?: undefined;
};
