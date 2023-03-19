import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;
  //let token = req.header("Authorization"); // Authorization is the key for the token in the header
  if (!token) {
    return next(createError(401, "You are not authenticated!")); // 403 is the status code for unauthorized
  }

  // if (token.startsWith("Bearer ")) {
  //   token = token.slice(7, token.length).trimLeft();
  // }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!")); // 403 is the status code for forbidden
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    console.log(req.user);
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log(req.user);
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
