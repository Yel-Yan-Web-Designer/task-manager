const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        } catch (error) {
// this error return from asynchronous functions invoked by route handlers and middleware
            next(error);
        }
    }
}

module.exports = asyncWrapper;

// this return function async await is coming from express by default