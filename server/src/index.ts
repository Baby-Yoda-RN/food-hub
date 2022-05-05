import express from "express";
import { login, register,review ,category, resetPassword, phoneRegister, favorites, foodDetail, restaurant, search, cart, order, address} from "./routes";
const cors = require('cors');

const app = express();
app.use(cors());

const port = 80;

app.use(express.json({ limit: "5MB", }));
app.use(express.urlencoded({ limit: "5MB", extended: true }));

app.use('/login', login);
app.use('/register', register);
app.use('/review', review);
app.use('/resetPassword', resetPassword);
app.use('/phoneRegister', phoneRegister);
app.use('/category', category);
app.use('/favorites', favorites);
app.use('/foodDetail', foodDetail);
app.use('/restaurant', restaurant);
app.use('/search', search);
app.use('/cart', cart);
app.use('/order', order)
app.use('/address', address)





app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});