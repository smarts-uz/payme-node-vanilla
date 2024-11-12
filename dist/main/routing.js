"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routing = void 0;
const prepareResponse_1 = require("../utils/prepareResponse");
const MainErrors_1 = require("../errors/MainErrors");
const routing = (body, accountCreator, transaction) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result;
        switch (body.method) {
            case "CheckPerformTransaction":
                result = yield accountCreator.CheckPerformTransaction(body);
                break;
            case "CreateTransaction":
                result = yield accountCreator.CreateTransaction(body, transaction);
                break;
            case "PerformTransaction":
                result = yield accountCreator.PerformTransaction(body, transaction);
                break;
            case "CancelTransaction":
                result = yield accountCreator.CancelTransaction(body, transaction);
                break;
            case "CheckTransaction":
                result = yield accountCreator.CheckTransaction(body, transaction);
                break;
            case "GetStatement":
                result = yield accountCreator.CheckTransaction(body, transaction);
                break;
            default:
                return (0, prepareResponse_1.prepareResponse)(body.id, new MainErrors_1.MainError().MethodNotFound());
        }
        return (0, prepareResponse_1.prepareResponse)(body.id, null, result);
    }
    catch (error) {
        return (0, prepareResponse_1.prepareResponse)(body.id, error, null);
    }
});
exports.routing = routing;
