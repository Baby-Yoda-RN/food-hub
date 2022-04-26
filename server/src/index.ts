import express from "express";
import { login, register } from "./routes";

const app = express();
const port = 80;

app.use(express.json({ limit: "5MB", }));
app.use(express.urlencoded({ limit: "5MB", extended: true }));

app.use('/api/login', login);
app.use('/api/register', register);

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});