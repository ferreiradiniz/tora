export class ApiError extends Error {
    constructor(readonly message: string, readonly statusCode: number) {
        super(message);
    };
};

export class BadRequesError extends ApiError {
    constructor(message: string) {
        super(message, 400);
    };
};

export class NotFoundError extends ApiError {
    constructor(message: string) {
        super(message, 404);
    };
};

export class UnauthorizedError extends ApiError {
    constructor(message: string) {
        super(message, 401);
    };
};