import { IResponseErrorRPC } from "../types/interfaces/IResponseErrorRPC";
export declare class MainError {
    TransportError(): IResponseErrorRPC;
    AccessDenied(): IResponseErrorRPC;
    ParseError(): IResponseErrorRPC;
    MethodNotFound(): IResponseErrorRPC;
}
