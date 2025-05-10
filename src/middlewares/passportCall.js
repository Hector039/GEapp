import passport from "passport";

export const passportCall = strategy => {
    return async (req, res, next) => {
        passport.authenticate(strategy,
            {
                successRedirect: process.env.SUCCESS_REDIRECT_URL,
                failureRedirect: process.env.FAILURE_REDIRECT_URL
            },
            function (error, user, info) {
                if (error) return next(error);
                if (!user) {
                    return res.status(401).send({ error: info.messages ? info.messages : info.toString() });
                }
                req.user = user;
                next();
            })(req, res, next);
    }
}