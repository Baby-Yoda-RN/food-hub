import express from "express";
import { TRequestBody, TCategoryList, TRestaurantList, TPopularItemList } from "./restaurant.type";

export const restaurant = express.Router();

export const categoryList: TCategoryList=[
  {value:'Burger',image:'https://flyclipart.com/thumb2/burger-energy-food-junk-food-meal-veggie-burger-icon-587826.png'},
  {value:'Pizza',image:'https://cdn-icons-png.flaticon.com/512/3132/3132693.png'},
  {value:'Mexican',image:'https://i.pinimg.com/originals/1b/ec/81/1bec818c51ca78276ffa641f2a210612.png'},
  {value:'Asian',image:'https://cdn.iconscout.com/icon/free/png-256/sushi-hotel-food-fastfood-emoj-symbol-30705.png'},
  {value:'Coffee',image:'https://cdn-icons-png.flaticon.com/512/924/924514.png'},
]

export const restaurantList: TRestaurantList=[
{
  uuid: '1234',
  name: "McDonald's",
  rating: 4,
  usersVoted: 25,
  favorite: true,
  freeDelivery: 'Free Delivery',
  deliveryTime: 10,
  items: ['Burger', 'Chicken', 'Fast Food', 'Breakfast', 'American'],
  imageName:
    'https://www.tasteofhome.com/wp-content/uploads/2021/03/mcdonalds-1200x630-GettyImages-1285446341.jpg',
}
]

export const popularItems: TPopularItemList = [
{
    uuid: '12345',
    name: 'Vegan Pizza',
    description: 'Vegan Pizza',
    rating: 5,
    usersVoted: 100,
    price: 5.5,
    favorite: false,
    imageName: 'https://foodish-api.herokuapp.com/images/pizza/pizza29.jpg',
},
]

restaurant.post("/api", (request, response) => {

    const home = {
        categoryList,
        restaurantList,
        popularItems
    }

  const { token }: TRequestBody = request.body;


  try {
    (token) ? response.status(200)
      .send(home) :
      response.status(400).send("Wrong Credentials");
  } catch (error) {
    console.error(error);
    response.status(400).send("Bad Request");
  }
});
