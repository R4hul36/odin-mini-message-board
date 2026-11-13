const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const PORT = 3000

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


app.get('/', (req, res) => {
    console.log('first reponse')
    res.render('index')
})


app.listen(PORT, (err) => {
    if(err) {
        throw err
    }
    console.log(`listening on port ${PORT}`)
})

