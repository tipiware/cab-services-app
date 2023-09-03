const mongoose = require('mongoose');

const scheduleCabFormSchema = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  pickup_date: { type: Date, required: true },
  pickup_time: { type: String, required: true },
  passengers: { type: Number, required: true },
  pickup_location: { type: String, required: true },
  drop_location: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" } 
})

module.exports = mongoose.model('ScheduleCabForm', scheduleCabFormSchema);