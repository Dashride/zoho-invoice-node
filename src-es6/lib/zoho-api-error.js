class ZohoAPIError extends Error {
    constructor(err) {
        super(err);
        this.name = this.constructor.name;
        this.code = err.code;
        this.message = err.message;
        Error.captureStackTrace(this, this.constructor.name);
    }
}

export { ZohoAPIError };
