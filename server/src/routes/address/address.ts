import express from "express";
import { TAddress, TRequestBody } from "./address.type";

export const address = express.Router();

const myAddress = {
    name: "john doe", 
    phoneNumber: "123456789",
    state: "Texas",
    city: "Dallas",
    street: "123 drive rd",
}

address.get('/', (request, response) =>{
    // const {token}: TRequestBody= request.body;

    try{
        response.status(200).send(myAddress) 
    } catch(error){
        console.error(error);
        response.status(400).send("Bad Request")
    }
})


