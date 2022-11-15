const express = require('express')
const cors = require('cors')

const { connect } = require('./database/connect')


const Personaje = require('./personaje/personajes')

connect()

const server = express()

server.use(cors())

const router = express.Router()

router.get('/personajes', async (req, res) => {
  const personajes = await Personaje.find()
  res.send(personajes);
})

server.use('/', router)

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} 🚀`)
})