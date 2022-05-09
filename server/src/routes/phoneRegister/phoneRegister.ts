import express from "express";
import { TRequestBody, TUserInfo, TResponseBody } from "./phoneRegister.type";

export const phoneRegister = express.Router();

phoneRegister.post("/", (request, response) => {

  const { email, password }: TRequestBody = request.body;

  const userInfo: TUserInfo = {
    email,
    password,
    token: "1F3BE74C45393EAE25AB516C76F2F"
  }

  try {
    (userInfo.email === email) ? response.status(200)
      .send("Phone Register Success") :
      response.status(400).send("Wrong Credentials");
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
});
