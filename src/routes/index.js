const {Router} = require('express')
const router = Router();



router.get('/', (req, res) => {
    console.log('first response')
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
    res.render('index', {title: 'Mini Messageboard', messages})
})

router.get('/new', (req, res) => {
    res.render('new')
})

module.exports = router