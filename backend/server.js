const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware') 
const connectDB = require('./config/db')
const port = process.env.PORT || 8000

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)// override default express error handler

app.listen(port, () => console.log('server started on port', port))

