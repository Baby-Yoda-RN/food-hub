import express from "express";

import { TRequestBody, TUserInfo, TResponseBody } from "./register.type";

export const register = express.Router();

register.post("/", (request, response) => { 
    const { email, password, name}: TRequestBody = request.body;

    const userInfo: TUserInfo = {
    name,
    email,
    password,
    token: "1F3BE74C45393EAE25AB516C76F2F"
  }

  try {
    (name && email && password) ? response.status(200)
      .send(userInfo) :
      response.status(400).send("Error: Registration");
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
})