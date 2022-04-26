import express from "express";

export const login = express.Router();

login.post("/", (request, response) => {

  const { email, password } = request.body;

  const userInfo = {
    email: "First@gmail.com",
    password: "123"
  }

  try {
    (userInfo.email === email && userInfo.password === password) ? response.status(200).send(userInfo) :
      response.status(400).send("Wrong Credentials");
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
});
