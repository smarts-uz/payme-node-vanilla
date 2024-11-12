"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareResponse = void 0;
const prepareResponse = (id, error, result) => {
    if (error) {
        return {
            error,
            id,
        };
    }
    return {
        result,
        id,
    };
};
exports.prepareResponse = prepareResponse;
