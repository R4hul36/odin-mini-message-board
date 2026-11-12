const express = require('express')
const app = express()


app.get('/', (req, res) => {
    console.log('first reponse')
    res.send("Hello world!")
})

const PORT = 3000
app.listen(PORT, (err) => {
    if(err) {
        throw err
    }
    console.log(`listening on port ${PORT}`)
})

