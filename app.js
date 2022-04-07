const express = require('express');
require('dotenv').config();
const tasks = require('./routes/tasks')
const connectDB= require('./db/connect');
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handle')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('./public'))


app.use('/api/v1/tasks',tasks);

app.use(notFound);
app.use(errorHandler);
const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('DataBase Connected...')
        app.listen(3000,()=> console.log(`server up and running on 3000...`))

    } catch (error) {
        console.log(error)
    }
}

start();
