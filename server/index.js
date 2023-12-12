import express from 'express';
import {PORT, mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//middleware for parsing request body
app.use(express.json());
//middleware for handling CORS policy

app.use(cors())
//      or
// app.use(
//     cors({
//         origin: 'ttp://llocalhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: 'Content-Type',
//     })
// );

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to MERN stack Project');
});

app.use('/books', booksRoute);

mongoose
.connect(mongoDBURL)
.then(() => {
    console.log("App connected to database");                    
    app.listen(PORT, () => {
        console.log(`App is listening to port ${PORT}`);
    })
})
.catch((error) => {
    console.log(error)
})

