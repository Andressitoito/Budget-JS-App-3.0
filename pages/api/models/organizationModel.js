const mongoose = require('mongoose')
const usersModel = require('./usersModel')

const organizationSchema = new mongoose.Schema({
 organization: {
  type: String,
  required: [true, 'An organization must have a name'],
  unique: true,
  trim: true
 },
 users: [
  usersModel
 ]
})

module.exports = mongoose.models.Organization || mongoose.model('Organization', organizationSchema)
