const express = require('express')
const path = require('path')
const indexRouter = require('./routes/index.js')

const app = express()
app.set('view engine', 'ejs')
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter)

app.use((req,res,next) => {
    res.status(404).render('404', {title:'Page not Found'})
})

app.listen(PORT, (err) => {
    if(err) {
        throw err
    }
    console.log(`listening on port ${PORT}`)
})

