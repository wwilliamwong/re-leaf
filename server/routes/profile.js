import express from 'express'
import jwt_decode from 'jwt-decode'
import { getUserById } from '../services/mongoService'; 

const profile = express.Router();

profile.get('/', async (req, res, next) => {
    let token = req.get('Authorization').split(' ')[1]
    let decoded = jwt_decode(token)
    let subject = decoded.payload.sub

    let user = getUserById(subject);
    res.status(200).json(user);
})

export default profile;