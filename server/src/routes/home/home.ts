import express from 'express'
import { homeDummyData } from './home.data';

export const home = express.Router();

home.get('/', (request, response) => {
  try{
    response.status(200).send(homeDummyData)
  } catch (error){
    console.error(error)
    response.status(400).send('Bad Request')
  }
})