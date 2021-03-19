import {IResponseErrorRPC} from "../types/interfaces/IResponseErrorRPC";
import {ErrorCodes} from "../types/enums/ErrorCodes";

export class MainError {
    TransportError() : IResponseErrorRPC {
        return {
            code : ErrorCodes.TransportError,
            message : {
                ru: "Метод запроса не POST.",
                uz: "So'rov usuli POST emas.",
                en: "The request method is not POST."
            },
            data : null
        }
    };

    AccessDenied(): IResponseErrorRPC {
        return {
            code : ErrorCodes.AccessDenied,
            message : {
                ru: "Недостаточно привилегий для выполнения метода.",
                uz: "Usulni bajarish uchun etarli imtiyozlar mavjud emas.",
                en: "Insufficient privileges to execute the method."
            },
            data : null
        }
    };

    ParseError() : IResponseErrorRPC {
        return {
            code : ErrorCodes.ParseError,
            message : {
                ru: "Ошибка парсинга JSON.",
                uz: "JSONni tahlil qilishda xato.",
                en: "JSON parsing error."
            },
            data : null
        }
    };

    MethodNotFound(): IResponseErrorRPC {
        return {
            code : ErrorCodes.MethodNotFound,
            message : {
                ru: "Запрашиваемый метод не найден.",
                uz: "So'ralgan usul topilmadi.",
                en: "The requested method was not found."
            },
            data : null
        }
    }
}
