/* eslint-disable prettier/prettier */
const express = require('express')
const router = express.Router()

const org = process.env.ORG

// importing data model schemas
const { users } = require('../models/models')

// GET users
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

module.exports = router