import express from "express";
import { login, register, review } from "./routes";
const cors = require('cors');

const app = express();
app.use(cors());

const port = 80;

app.use(express.json({ limit: "5MB", }));
app.use(express.urlencoded({ limit: "5MB", extended: true }));

app.use('/api/login', login);
app.use('/api/register', register);
app.use('/api/review', review);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});