const mongoose = require('mongoose');

const sayingSchema = new mongoose.Schema({
  saying: { type: String, required: true },
});

const Saying = mongoose.model('Saying', sayingSchema);

module.exports = Saying;
