"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareResponse = (id, error, result) => {
    if (error) {
        return {
            error,
            id
        };
    }
    return {
        result,
        id
    };
};
