import express from "express";
import { TRequestBody, TUserInfo, TResponseBody } from "./login.type";

export const login = express.Router();

login.post("/", (request, response) => {

  const { email, password }: TRequestBody = request.body;

  const userInfo: TUserInfo = {
    email: "First@gmail.com",
    password: "123",
    token: "1F3BE74C45393EAE25AB516C76F2F"
  }

  const responseBody: TResponseBody = {
    email: userInfo.email,
    name: "First Last",
    token: userInfo.token,
  }

  try {
    (userInfo.email === email && userInfo.password === password) ? response.status(200)
      .send(responseBody) :
      response.status(400).send("Wrong Credentials");
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
});
