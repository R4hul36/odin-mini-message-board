const {Router} = require('express')

const router = Router();



router.get('/', (req, res) => {
    console.log('first response')
    res.render('index')
})

router.get('/new', (req, res) => {
    res.render('new')
})

module.exports = router