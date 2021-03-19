"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorCodes_1 = require("../types/enums/ErrorCodes");
class MainError {
    TransportError() {
        return {
            code: ErrorCodes_1.ErrorCodes.TransportError,
            message: {
                ru: "Метод запроса не POST.",
                uz: "So'rov usuli POST emas.",
                en: "The request method is not POST."
            },
            data: null
        };
    }
    ;
    AccessDenied() {
        return {
            code: ErrorCodes_1.ErrorCodes.AccessDenied,
            message: {
                ru: "Недостаточно привилегий для выполнения метода.",
                uz: "Usulni bajarish uchun etarli imtiyozlar mavjud emas.",
                en: "Insufficient privileges to execute the method."
            },
            data: null
        };
    }
    ;
    ParseError() {
        return {
            code: ErrorCodes_1.ErrorCodes.ParseError,
            message: {
                ru: "Ошибка парсинга JSON.",
                uz: "JSONni tahlil qilishda xato.",
                en: "JSON parsing error."
            },
            data: null
        };
    }
    ;
    MethodNotFound() {
        return {
            code: ErrorCodes_1.ErrorCodes.MethodNotFound,
            message: {
                ru: "Запрашиваемый метод не найден.",
                uz: "So'ralgan usul topilmadi.",
                en: "The requested method was not found."
            },
            data: null
        };
    }
}
exports.MainError = MainError;
