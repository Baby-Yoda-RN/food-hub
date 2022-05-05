import express from 'express';
import { TOrderList, TRequestBody } from './order.type';

export const order = express()

const myOrder:TOrderList = [{
    delivered: true,
    restaurantImage:
      'https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png',
    estimatedTime: '25 min',
    total: '19.99', 
}]

order.get("/api", (request, response) => {
    const {token}: TRequestBody = request.body;

    try{
        token ? response.status(200).send(myOrder) : response.status(400).send('Wrong Credential')
    } catch(error) {
        console.error(error);
        response.status(400).send("Bad Request")
    }
})