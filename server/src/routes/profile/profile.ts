import express from "express";
import { TRequestBody, TUserInfo, TResponseBody } from "./profile.type";

export const phoneRegister = express.Router();

phoneRegister.post("/", (request, response) => {

  const { name, email, phoneNumber }: TRequestBody = request.body;

  const userInfo: TUserInfo = {
    name,
    email,
    phoneNumber,
    token: "1F3BE74C45393EAE25AB516C76F2F"
  }

  try {
    (userInfo.email === email) ? response.status(200)
      .send("User Saved") :
      response.status(400).send("User Not Saved");
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
});
