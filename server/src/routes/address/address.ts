import express from "express";
import { TAddress, TRequestBody } from "./address.type";

export const address = express();

const myAddress = {
    name: "john doe", 
    phoneNumber: "123456789",
    state: "Texas",
    city: "Dallas",
    street: "123 drive rd",
}

address.get('/address', (request, response) =>{
    const {token}: TRequestBody= request.body;

    try{
        token ? response.status(200).send(myAddress) : 
        response.status(400).send('Wrong Credential')
    } catch(error){
        console.error(error);
        response.status(400).send("Bad Request")
    }
})


