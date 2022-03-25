const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/subfolder/first.txt','utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    //console.log(result)
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        } 
        const second = result

        writeFile('./content/result-async.txt',
        `Result : ${first}, ${second}`,
        { flag : 'a' }, (err, result)=>{
            if(err){
                console.log(err)
                return
            } 
            console.log("Done with this task")
        })
    })
})
console.log("Starting next task..")