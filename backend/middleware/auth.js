const jwt = require("jsonwebtoken");

const JWT_SECRET = "VihariTravelSite"

const auth = (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
//   console.log(authHeader)
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Authentication invalid" });
  }

  const token = authHeader.split(" ")[1];

  if(!token){
    return res.status(401).json({ error: "Authentication invalid" });
  }

  const payload = jwt.verify(token, JWT_SECRET);

  // attach the user to the job routes
  req.user = payload.user;
  next();
};

module.exports = auth;
