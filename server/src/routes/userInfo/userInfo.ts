import express from "express";
import { TResponseBody } from "./userInfo.type";

export const userInfo = express.Router();

userInfo.get("/", (request, response) => {

    const responseBody: TResponseBody = {
        email: "Willy Wonka",
        name: "Willy.Wonka@Chocolate.com",
        image: "https://i.imgur.com/vWqQwxo.jpg",
    }

    try {
        response.status(200).send(responseBody);
    } catch (error) {
        console.error(error);
        response.status(400).send("Bad Request");
    }
});
