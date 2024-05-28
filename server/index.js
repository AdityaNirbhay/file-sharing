import express from 'express';//mention type:module in package.json
import router from './routes/routes.js';
import cors from 'cors';
import DBconnection from './database/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express(); //initializing express

app.use(cors());//enabling cors here, should be before router
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/',router);

const PORT = process.env.PORT || 8000; //on which port you want to this to run

DBconnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));//for starting server
