import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access token required" });

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid token" });
    }
};
