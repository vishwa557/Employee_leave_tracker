const mongoose = require('mongoose');

const leaveDataSchema = new mongoose.Schema({
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  empId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
});

const LeaveData = mongoose.model('LeaveData', leaveDataSchema);

module.exports = LeaveData;
