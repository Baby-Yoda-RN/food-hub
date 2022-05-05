import express from "express";
import { TFoodDetail, TRequestBody } from "./foodDetail.type";

export const foodDetail = express.Router();

export const groundBeefTacos: TFoodDetail= {
    name: 'Ground Beef Tacos',
    rating: 4.5,
    reviewCounts: 31,
    price: 4.00,
    description: 'Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion powder.',
    choiceOfAddOns: [
        {name: 'Pepper Julienned', price: 2.30,},
        {name: 'Baby Spinach',price: 4.70,},
        {name: 'Mushroom',price: 2.50,}
    ]
}

foodDetail.post("/api", (request, response) => {

  const { token}: TRequestBody = request.body;

  try {
    (token) ? response.status(200)
      .send(groundBeefTacos) :
      response.status(400).send("Wrong Credentials");
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
});
