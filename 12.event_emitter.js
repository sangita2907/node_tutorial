const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', ()=>{
    console.log(`data recieved`)
})

customEmitter.on('response', (name, id)=>{
    console.log(`data recieved ${name} with id: ${id}`)
})

customEmitter.emit('response', 'john', 34)