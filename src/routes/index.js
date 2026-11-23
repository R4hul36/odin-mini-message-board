const {Router} = require('express')
const router = Router();


const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
      messageId: crypto.randomUUID()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
      messageId: crypto.randomUUID()
    }
];

router.get('/', (req, res) => {
    console.log('first response')
    res.render('index', {title: 'Mini Messageboard', messages})
})

router.get('/new', (req, res) => {
    res.render('form')
})

router.get('/message/:id', (req, res) => {
  const id = req.params.id
  let message = messages.filter(message => message.messageId === id)[0]
  console.log(id)
  console.log(messages)
  console.log(message)
  res.render('message', {message})
})

router.post('/new', (req, res) => {
  console.log(req.body)
  const {messageUser, messageText} = req.body
  messages.push({ text: messageText, user: messageUser, added: new Date(), messageId: crypto.randomUUID() });
  res.redirect('/')

})

module.exports = router