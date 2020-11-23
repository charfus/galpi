import express from "express";
import session from "express-session"; // req.session 객체를 생성, 현재 세션의 아이디는 req.sessionID
// import cors from "cors";
import path from "path";
import { SESSION_OPTION } from "./config/index.js";
import {
  notFound,
  serverError,
  active,
  catchAsync,
} from "./middleware/index.js";
import { user, login, home, post, like, comment } from "./routes/index.js";

export const createApp = () => {
  const __dirname = path.resolve();
  const app = express();

  // app.use(cors());
  app.use(express.static(path.join(__dirname, "dist")));
  // app.get("/*", function (req, res) {
  //   res.sendFile(path.join(__dirname, "dist", "index.html"));
  // });

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(
    session({
      ...SESSION_OPTION,
      // store
    })
  );

  app.use("/api/img", express.static(path.join(__dirname, "uploads")));

  // app.use(catchAsync(active));

  app.use(home);

  app.use(user); // register

  app.use(login);

  app.use(post);

  app.use(like);

  app.use(comment);

  app.use(notFound);

  app.use(serverError);

  return app;
};
