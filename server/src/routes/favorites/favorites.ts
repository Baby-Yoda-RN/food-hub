import express from "express";
import { TRequestBody } from "./favorites.type";
import { myFavorites } from "./favorites.data";

export const favorites = express.Router();

favorites.get('/', (request, response) => {

  const { token}: TRequestBody = request.body;

  try {
    (token) ? response.status(200)
      .send(myFavorites) :
      response.status(400).send("Wrong Credentials");
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
});
