const {Router} = require('express')
const router = Router();

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

router.get('/', (req, res) => {
    console.log('first response')
    res.render('index', {title: 'Mini Messageboard', messages})
})

router.get('/new', (req, res) => {
    res.render('form')
})

router.post('/new', (req, res) => {
  console.log(req.body)
  const {messageUser, messageText} = req.body
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/')

})

module.exports = router