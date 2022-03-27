const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res)=>{
    res.json(products)
})

app.listen(5000, (req, res)=>{
    console.log('Listening to port 5000')
})