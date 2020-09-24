import { SESSION_NAME } from "./config/index.js";

export const isLoggedIn = (req) => !!req.session.userId;

export const logIn = (req, userId) => {
  req.session.userId = userId;
  req.session.createdAt = Date.now();
};

export const logOut = (req, res) =>
  new Promise((resolve, reject) => {
    req.session.destroy((err) => {
      if (err) reject(err);

      res.clearCookie(SESSION_NAME);

      resolve();
    });
  });
