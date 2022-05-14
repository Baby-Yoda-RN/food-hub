import express from "express";
import { userInfo, userList } from "./login.data";

export const login = express.Router();

login.post("/", (request, response) => {
  const {email, password} = request.body

  try {
    const userFound = userList.find(user=> user.email===email);
    const copyUser = {...userFound};
    delete copyUser['password'];
    
    (!!userFound && userFound.password === password) ? response.status(200)
        .send(copyUser) :
      response.status(400).send("Wrong Credentials");
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
});
