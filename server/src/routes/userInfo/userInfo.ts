import express from "express";
import { TResponseBody } from "./userInfo.type";

export const userInfo = express.Router();

userInfo.get("/", (request, response) => {

    const responseBody: TResponseBody = {
        name: "First Last",
        email: "First@gmail.com",
        image: "https://i.imgur.com/imwXQ08.png",
    }

    try {
        response.status(200).send(responseBody);
    } catch (error) {
        console.error(error);
        response.status(400).send("Bad Request");
    }
});
