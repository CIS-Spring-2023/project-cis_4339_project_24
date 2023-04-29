/* eslint-disable prettier/prettier */
const express = require('express')
const router = express.Router()

// importing data model schemas
const { orgs } = require('../models/models')

// GET org
router.get('/', (req, res, next) => {
  const org = process.env.ORG
  orgs.findOne({orgid: org}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = router
