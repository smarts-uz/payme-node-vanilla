export interface IAccount {
    find(params: any): Promise<this>;
    validate(params: any): Promise<any>;
    allowCancelPaidOrder(params: any): Promise<boolean>;
    cancel(params: any): Promise<any>;
}
