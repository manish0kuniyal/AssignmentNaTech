const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  email: String,
});

const Data = mongoose.model('Data', dataSchema)

module.exports = Data
