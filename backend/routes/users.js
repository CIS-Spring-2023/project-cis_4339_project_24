/* eslint-disable prettier/prettier */
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // imports bcrypt

const org = process.env.ORG

// importing data model schemas
const { users } = require('../models/models');

// GET all users for org
router.get('/', (req, res, next) => {
  users
    .find({ org: org }, (error, data) => {
      if (error) {
        return next(error)
      } else {
        return res.json(data)
      }
    })
})

// POST user login
// expects to receive JSON payload containing user object with properties username and password
router.post('/login', async (req, res, next) => {
  const user = req.body;
  // queries users collection in mongodb to find matching user based on org and username properties
  users.findOne({ org: org, username: user.username }, async (err, foundUser) => {
    if (err) {
      console.error(err);
      // 500 error response returns if any errors occur when attempting to login 
      res.status(500).send('An error occurred while logging in');
    } else if (!foundUser) {
      // else 401 error response returns if no user credentials are found
      res.status(401).send('Incorrect username or password');
    } else {
      // bcrypt.compare verifies if plain text password provided matches the stored hashed password
      const isMatch = await bcrypt.compare(user.password, foundUser.password);
      if (isMatch) {
        // if password matches 200 status response returns with the foundUser object as a JSON payload
        res.status(200).json(foundUser);
      } else {
        // else 401 error response returns if passwords dont match 
        res.status(401).send('Incorrect username or password');
      }
    }
  });
});

module.exports = router
