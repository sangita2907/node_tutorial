const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res
//apply the middleware in all the url
//app.use([logger, authorize])
//app.use(express.static('./public'))
app.use(morgan('tiny'))

//apply the middleware only on the queries starts with /api
//app.use('/api',logger)

app.get('/', (req, res)=>{
    
    res.send('home')
})

app.get('/api/products', (req, res)=>{
    
    res.send('products')
})

app.get('/api/items', (req, res)=>{
    
    console.log(req.user)
    res.send('Items')
})

app.get('/about', (req, res)=>{
    res.send('about')
})


app.listen(5000, ()=>{
    console.log('server is listening..')
})