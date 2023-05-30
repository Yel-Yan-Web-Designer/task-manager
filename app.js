const express = require('express');
const app = express();
const tasks = require('./controllers/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandler');

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes middleware
app.use('/api/v1/tasks', tasks);
app.use(notFound); // for wrong api route
app.use(errorHandlerMiddleware); // custom error

const PORT = 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () => console.log(`Server running on ${PORT}`));
    } catch (error) {
        console.log(error)
    }
}
start();


/*
app.get('/api/v1/tasks) - get all the tasks
app.post('/api/v1/tasks) - create new task
app.get('/api/v1/tasks/:id) - get single task
app.patch('/api/v1/tasks/:id) - update single task
app.delete('/api/v1/tasks/:id) - delete single task
*/