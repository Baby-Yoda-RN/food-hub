import express from "express";
import { TFoodItemList, TRequestParams } from "./foodItem.type";

export const getFoodItem = express.Router();

export const foodItemList: TFoodItemList = [
  {
    uuid: "1",
    name: "Pepperoni Pizza",
    description: "Two layers of pepperoni sandwiched between provolone",
    rating: 1,
    usersVoted: 16,
    price: 11.49,
    favorite: true,
    imageName: "https://i.imgur.com/rcYxMyJ.jpeg",
  },
  {
    uuid: "2",
    name: "Supreme Pizza",
    description:
      "Italian sausage, fresh green peppers, fresh mushrooms, fresh onions",
    rating: 4,
    usersVoted: 38,
    price: 14.48,
    favorite: true,
    imageName: "https://i.imgur.com/9Sd1QRO.jpeg",
  },
  {
    uuid: "3",
    name: "Veggie Pizza",
    description:
      "Roasted red peppers, fresh baby spinach, fresh onions, fresh mushrooms, tomatoes, black olives",
    rating: 3,
    usersVoted: 9,
    price: 12.99,
    favorite: true,
    imageName: "https://i.imgur.com/NqMr2mT.jpeg",
  },
  {
    uuid: "4",
    name: "Chicken Bacon Ranch Pizza",
    description: "Grilled chicken breast, ranch, smoked bacon",
    rating: 3,
    usersVoted: 14,
    price: 10.99,
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
