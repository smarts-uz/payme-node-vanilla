"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["created"] = 0] = "created";
    OrderStatus[OrderStatus["waiting"] = 1] = "waiting";
    OrderStatus[OrderStatus["paid"] = 2] = "paid";
    OrderStatus[OrderStatus["delivered"] = 3] = "delivered";
    OrderStatus[OrderStatus["canceled"] = 4] = "canceled";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
