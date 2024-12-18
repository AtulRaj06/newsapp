const jwt = require("jsonwebtoken");
const models = require("../../api/v1/common/models");
const { User, Session } = models;

const verifyJWT = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }
    const token = authorizationHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token missing" });
    }
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }
    const userSession = await Session.findOne({
      where: { token },
    });
    if (!userSession) {
      return res.status(401).json({ message: "Session not found" });
    }
    req.user = decodedToken;
    next();
  } catch (err) {
    console.error("Error in verifyJWT middleware:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  verifyJWT,
};
