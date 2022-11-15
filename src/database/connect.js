const dotenv = require('dotenv')

dotenv.config();

const mongoose = require('mongoose')

const Personaje = require('../personaje/personajes')
const personajes = require('../personaje/personajes.seed')

const mongoURI = process.env.MONGO_URI
// console.log(mongoURI);

const connect = async () => {
  try {
    const dbConnect = await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    const allPersonaje = await Personaje.find();
    if (allPersonaje.length) await Personaje.collection.drop()
    const PersonajesSeed = await personajes.map(personaje => new Personaje(personaje));
    await Personaje.insertMany(PersonajesSeed);

    const { name, host } = dbConnect.connection
    console.log(`Conectado a la DB 👀: ${name} en el host❤️: ${host}`);
  } catch (error) {
    console.error(`No se ha podido conectar a la DB 💔`, error)
  }
}

module.exports = { connect }