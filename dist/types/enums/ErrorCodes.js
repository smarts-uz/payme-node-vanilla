"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCodes = void 0;
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["TransportError"] = -32300] = "TransportError";
    ErrorCodes[ErrorCodes["AccessDenied"] = -32504] = "AccessDenied";
    ErrorCodes[ErrorCodes["ParseError"] = -32700] = "ParseError";
    ErrorCodes[ErrorCodes["MethodNotFound"] = -32601] = "MethodNotFound";
    ErrorCodes[ErrorCodes["OrderNotFound"] = -31050] = "OrderNotFound";
    ErrorCodes[ErrorCodes["IncorrectAmount"] = -31001] = "IncorrectAmount";
    ErrorCodes[ErrorCodes["InvalidStatus"] = -31050] = "InvalidStatus";
    ErrorCodes[ErrorCodes["UnableToPerform"] = -31008] = "UnableToPerform";
    ErrorCodes[ErrorCodes["TransactionNotFound"] = -31003] = "TransactionNotFound";
    ErrorCodes[ErrorCodes["CanNotCancelTransaction"] = -31007] = "CanNotCancelTransaction";
})(ErrorCodes || (exports.ErrorCodes = ErrorCodes = {}));
