const jwt = require('jsonwebtoken');

module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === "OPRIONS") {
            next()
        }
    
        try {
            const token = req.headers.authorization.split(' ')[1]; // Bearer
            if (!token) {
                return res.status(401).json({message: "Not authorized"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if (decoded.role !== role) {
                return res.status(403).json({message: "No access"})
            }
            req.user = decoded;
            next();
        } catch (e) {
            res.status(401).json({message: "Not authorized"})
        }
    };
}





