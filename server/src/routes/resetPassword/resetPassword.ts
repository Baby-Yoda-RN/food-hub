import express from "express";
import { TRequestBody, TUserInfo, TResponseBody } from "./resetPassword.type";

export const resetPassword = express.Router();

resetPassword.post("/api", (request, response) => {

  const { email, password }: TRequestBody = request.body;

  const userInfo: TUserInfo = {
    email: "johndoe@yahoo.com",
    password: "123",
    token: "1F3BE74C45393EAE25AB516C76F2F"
  }

  const responseBody: TResponseBody = {
   message: 'Link to change password'
  }

  try {
    (userInfo.email === email) ? response.status(200)
      .send(responseBody) :
      response.status(400).send("We cant find your account");
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
});
