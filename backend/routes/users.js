/* eslint-disable prettier/prettier */
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // Import bcrypt

const org = process.env.ORG;

// importing data model schemas
const { users } = require('../models/models');

// POST user login
router.post('/login', async (req, res, next) => {
  const user = req.body;
  users.findOne({ /* org: user.org, */ username: user.username }, async (err, foundUser) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred while logging in');
    } else if (!foundUser) {
      res.status(401).send('Incorrect username or password');
    } else {
      // Use bcrypt.compare to verify if the provided password matches the stored hashed password
      const isMatch = await bcrypt.compare(user.password, foundUser.password);
      if (isMatch) {
        res.status(200).json(foundUser);
      } else {
        res.status(401).send('Incorrect username or password');
      }
    }
  });
});

module.exports = router
