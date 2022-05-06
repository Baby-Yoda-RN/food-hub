import express from "express";
import { TCartList, TRequestBody } from "./cart.type";

export const cart = express.Router();

export const myCart: TCartList= [
{
    uuid: '0',
    name: 'Salad',
    description: 'Lettuce, Anchovies, Ranch',
    imageName: 'https://i.imgur.com/Ux2NUdg.jpg',
    price: 7.99,
    quantity: 1,
    },
    {
    uuid: '1',
    name: 'Pizza',
    description: 'Pinnaple, Pepperoni',
    imageName: 'https://i.imgur.com/vRxiT35.jpg',
    price: 19.99,
    quantity: 1,
    },
    {
    uuid: '2',
    name: 'Pizza',
    description: 'Pinnaple, Pepperoni',
    imageName: 'https://i.imgur.com/vRxiT35.jpg',
    price: 19.99,
    quantity: 1,
    },
    {
    uuid: '3',
    name: 'Pizza',
    description: 'Pinnaple, Pepperoni',
    imageName: 'https://i.imgur.com/vRxiT35.jpg',
    price: 19.99,
    quantity: 1,
    }
]

cart.post("/", (request, response) => {

  const { token}: TRequestBody = request.body;

  try {
    (token) ? response.status(200)
      .send(myCart) :
      response.status(400).send("Wrong Credentials");
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
});
