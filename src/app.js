const express = require('express')
const indexRouter = require('./routes/index.js')

const app = express()
app.set('view engine', 'ejs')
const PORT = 3000

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter)


app.listen(PORT, (err) => {
    if(err) {
        throw err
    }
    console.log(`listening on port ${PORT}`)
})

