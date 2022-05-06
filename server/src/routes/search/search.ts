import express from "express";
import { TSearch } from "./search.type";

export const search = express.Router();

search.post("/", (request, response) => {

  const { token,search }: TSearch = request.body;

  try {
    (token) ? response.status(200)
      .send('Here is your search') :
      response.status(400).send("Wrong Credentials");
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
});
