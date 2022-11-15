const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const personajesSchema = new Schema(
  {
    name: { type: String, required: true },
    status: {type: String},
    species: {type: String},
    type: {type:String},
    gender: { type: String }
  },
  {
    timestamps: true
  }
)

const Personaje = mongoose.model('Personaje', personajesSchema)

module.exports = Personaje;