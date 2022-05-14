import express from "express";

import { TRequestBody, TResponseBody } from "./register.type";
import { TUserInfo } from "../login/login.type";
import { userList } from "../login/login.data";

export const register = express.Router();

//TODO for now we are using a fake user to be edited since we dont have database
const userInfo: TUserInfo = {
  name: "fake",
  email: "fake@gmail.com",
  password: '123',
  image: "https://i.imgur.com/imwXQ08.png",
  address: {
      street: '555 Fake Street',
      city: 'Dallas',
      state: 'Texas',
      zipcode: 78888
  },
  phone: '1 (214) 111-1111',
  token: "1F3BE74C45393EAE25AB516C76F22"
}

export const createUser = (name: string,email: string,password: string) => {
  userInfo.name=name;
  userInfo.email=email;
  userInfo.password=password;

  const foundUser = userList.find(user=> user.email === email)
  if (foundUser){
  return false
  }else {
    userList.push(userInfo) 
    return true
  }
}

register.post("/", (request, response) => { 
    const { email, password, name}: TRequestBody = request.body;
    console.log(userInfo);
  try {
    (createUser(name, email, password)) ? response.status(200)
      .send(userInfo) :
      response.status(400).send("Error: Registration");
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
})