const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json());
app.use(cors());

//Import Routes
const postsRoute = require('./routes/posts');
const getsRoute = require('./routes/gets');
    //Middleware
app.use('/posts', postsRoute);
app.use('/', getsRoute);

//Connect to DB 6w5Shoio1KOx5Gjf
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('Connected to DB');
});

//Start listening to the server
app.listen(3000); 