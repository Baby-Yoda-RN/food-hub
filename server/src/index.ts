import express from "express";
const cors = require('cors');
import {
  login,
  register,
  review,
  category,
  resetPassword,
  phoneRegister,
  favorites,
  foodDetail,
  restaurant,
  search,
  cart,
  order,
  address,
  getFoodItem,
  userInfo,
  home,
} from "./routes";

const app = express();
app.use(cors());

const port = 80;

app.use(express.json({ limit: "5MB" }));
app.use(express.urlencoded({ limit: "5MB", extended: true }));

app.use('/api/login', login);
app.use('/api/register', register);
app.use('/api/review', review);
app.use('/api/resetPassword', resetPassword);
app.use('/api/phoneRegister', phoneRegister);
app.use('/api/category', category);
app.use('/api/favorites', favorites);
app.use('/api/foodDetail', foodDetail);
app.use('/api/restaurant', restaurant);
app.use('/api/search', search);
app.use('/api/cart', cart);
app.use('/api/order', order)
app.use('/api/address', address)
app.use("/api/foodItem", getFoodItem);
app.use('/api/userInfo', userInfo);
app.use('/api/home', home)

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
