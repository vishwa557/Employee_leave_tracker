const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const LeaveData = require('../models/leaveData');

// Get all employee details
router.get('/empdetails', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching employee details' });
  }
});

// Create a new employee
router.post('/empdetails', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: 'Error creating employee' });
  }
});

// Get leave data by empId
router.get('/leavedata/:empId', async (req, res) => {
  const { empId } = req.params;
  try {
    const leaveData = await LeaveData.find({ empId }).populate('empId');
    res.json(leaveData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching leave data' });
  }
});


// Create leave data
router.post('/leavedata', async (req, res) => {
    try {
      const { startDate, endDate, type, empId } = req.body;
      const employee = await Employee.findOne({ empId });
  
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
  
      const leaveData = await LeaveData.create({
        startDate,
        endDate,
        type,
        empId: employee._id // Assigning the employee's _id field as the reference
      });
  
      res.status(201).json(leaveData);
    } catch (error) {
      res.status(400).json({ error: 'Error creating leave data' });
    }
  });
  

module.exports = router;
