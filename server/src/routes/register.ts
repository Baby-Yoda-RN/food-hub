import express from "express";

export const register = express.Router();

register.post("/", (request, response) => {
    try {
        response.status(201).send("Success!")
    } catch (error) {
        console.error(error);
        response.status(400).send("Bad Request");
    }
});
