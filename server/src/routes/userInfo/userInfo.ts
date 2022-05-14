import express from "express";
import { userInfo as userInfoData } from "./userInfo.data";

export const userInfo = express.Router();

userInfo.get("/", (request, response) => {

    try {
        response.status(200).send(userInfoData);
    } catch (error) {
        console.error(error);
        response.status(400).send("Bad Request");
    }
});
