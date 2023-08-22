const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
cors = require('cors')
require('dotenv').config();

const RestaurantRoute = require('./Routes/RestaurantRoute')

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/', (req, res) =>  {
    res.send("Backend is live")

})

app.listen(port, () => console.log('app listening on ' + port))
app.use('/restaurants', RestaurantRoute)