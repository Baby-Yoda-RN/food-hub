import express from "express";
import { myFavorites } from "./favorites.data";

export const favorites = express.Router();

favorites.get('/', (request, response) => {

  try{
    response.status(200).send(myFavorites)
  } catch (error){
    console.error(error)
    response.status(400).send('Bad Request')
  }
});
