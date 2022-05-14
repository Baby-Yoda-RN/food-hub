import express from "express";
import { TRequestBody, TUserInfo, TResponseBody } from "./register.type";
import { mockDelay } from "../../utilities";

export const register = express.Router();

register.post("/", async (request, response) => {
  const { email, password, name }: TRequestBody = request.body;

  const userInfo: TUserInfo = {
    name,
    email,
    password,
    token: "1F3BE74C45393EAE25AB516C76F2F"
  }

  try {
    mockDelay(1000);
    response.status(200).send(userInfo)
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
})