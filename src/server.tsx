// const { response, json } = require('express');
// const express = require('express');
// const app = express();
// require('dotenv/config');
// const api = process.env.API_URL;
// const formRouter = require('../controllers/myforms')
// const morgan = require('morgan');
// const mongoose = require('mongoose');
// const contactRouter = require('../controllers/contact')

// const cors = require('cors')
// app.use(cors())
// app.options('*', cors)  

// //middleware
// app.use(express.json())
// app.use(morgan('tiny'))

// //routers
// app.use(`${api}/myforms`, formRouter)
// app.use(`${api}/contact`, contactRouter)

// //mongoose connect
// mongoose.connect(process.env.PROFILE_CONNECTION)
// .then(() => {
//     console.log('data base connection successful')
// })
// .catch((err) => {
//     console.log(err)
// })
// mongoose.set('strictQuery', false);

// app.listen(5000, () => {
//     console.log(api);
//     console.log('server running');
// })


const { response, json } = require('express');
const express = require('express');
const app = express();
require('dotenv/config');
const api = process.env.API_URL;
const formRouter = require('../controllers/form')
const morgan = require('morgan');
// const mongoose = require('mongoose');
const contactRouter = require('../controllers/contact')

const cors = require('cors')
app.use(cors())
app.options('*', cors)  

//middleware
app.use(express.json())
app.use(morgan('tiny'))

//routers
app.use(`${api}/form`, formRouter)
app.use(`${api}/contact`, contactRouter)

//mongoose connect
mongoose.connect(process.env.PROFILE_CONNECTION)
.then(() => {
    console.log('data base connection successful')
})
.catch((err: any) => {
    console.log(err)
})
mongoose.set('strictQuery', false);

app.listen(5000, () => {
    console.log(api);
    console.log('server running');
})