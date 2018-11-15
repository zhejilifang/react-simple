const url = require('url');
module.exports = function (req, res, next) {
    const token = req.headers.token || "";
    const referer = req.headers.referer;
    const urlPath = url.parse(referer);
    const whiteList = ['/login', '/registry'];
    const isWhite = whiteList.some(item => {
        return item === urlPath.pathname;
    })
    if (isWhite) {
        next();
    } else {
        if (token === "undefined") {
            res.json({
                code: 2,
                result: "No permission to access resources,you must login"
            })
        } else {
            next();
        }
    }
}