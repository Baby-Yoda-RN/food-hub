import express from "express";
import { TFoodItemList, TRequestParams } from "./foodItem.type";

export const getFoodItem = express.Router();

export const foodItemList: TFoodItemList = [
  {
    uuid: "1",
    name: "pineapple1",
    description: "pineapple1 desc",
    rating: 1,
    usersVoted: 1,
    price: 1,
    favorite: true,
    imageName: "https://i.imgur.com/rcYxMyJ.jpeg",
  },
  {
    uuid: "2",
    name: "pineapple2",
    description: "pineapple2 desc",
    rating: 2,
    usersVoted: 2,
    price: 2,
    favorite: true,
    imageName: "https://i.imgur.com/9Sd1QRO.jpeg",
  },
  {
    uuid: "3",
    name: "pineapple3",
    description: "pineapple3 desc",
    rating: 3,
    usersVoted: 3,
    price: 3,
    favorite: true,
    imageName: "https://i.imgur.com/NqMr2mT.jpeg",
  },
  {
    uuid: "4",
    name: "pineapple4",
    description: "pineapple4 desc",
    rating: 4,
    usersVoted: 4,
    price: 4,
    favorite: true,
    imageName: "https://i.imgur.com/0Ijt9vt.jpeg",
  },
];

getFoodItem.get("/:id", (request, response) => {
  const { id }: TRequestParams = request.params;

  const foodItem = foodItemList.filter((item) => item.uuid === id)[0];

  try {
    id
      ? response.status(200).send(foodItem)
      : response.status(400).send("Food Item not found: no matching Id exists");
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
});
