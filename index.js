const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./routes/routes')

app.use(router)
app.listen(3000,()=>{
    console.log('Server start on post'  + 3000)
})