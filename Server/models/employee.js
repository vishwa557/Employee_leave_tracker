const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  empId: {
    type: String,
    required: true,
    unique: true,
  },
  empName: {
    type: String,
    required: true,
  },
  empPosition: {
    type: String,
    required: true,
  },
  empAge: {
    type: Number,
    required: true,
  },
  empNumber: {
    type: String,
    required: true,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
