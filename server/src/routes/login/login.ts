import express from "express";
import { password, userInfo } from "./login.data";

export const login = express.Router();

login.post("/", (request, response) => {

  try {
    (userInfo.email === request.body.email &&
      password === request.body.password) ? response.status(200)
        .send(userInfo) :
      response.status(400).send("Wrong Credentials");
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
});
