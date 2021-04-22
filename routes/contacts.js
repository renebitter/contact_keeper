const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

// CRUD ROUTE

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/contacts
// @desc    Add new contac
// @access  Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route   PUT api/contacts/:id
// @desc    Update contac
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route   PUT api/contacts/:id
// @desc    Delete contac
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
