import express from "express";
import { cartData } from "./cart.data";

export const cart = express.Router();

cart.get("/", (request, response) => {

  try {
    response.status(200).send(cartData);
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
});