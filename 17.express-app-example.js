const express = require('express')
const path = require('path')

const app = express()

//setup static and middleware
app.use(express.static('./public'))


app.all('*', (req, res)=>{
    res.status(404).send('Resource not found')
})


app.listen(5000, ()=>{
    console.log('listening to port')
})
