const express = require('express')
// const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 3000

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

mongoose.connect('mongodb://127.0.0.1:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

//routes
const routes = require('./routes/routes')
const authRoutes = require('./routes/authRouters');

app.use("/api/post", routes);
app.use('/api', authRoutes);


// listen port
app.listen(port, () => console.log(`Server listening http://localhost:${port}`))