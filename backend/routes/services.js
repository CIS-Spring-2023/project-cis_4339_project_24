/* eslint-disable prettier/prettier */
const express = require('express')
const router = express.Router()

const org = process.env.ORG

// importing data model schemas
const { services } = require('../models/models')

// GET 25 most recent services for org
router.get('/', (req, res, next) => {
    services
      .find({ orgs: org }, (error, data) => {
        if (error) {
          return next(error)
        } else {
          return res.json(data)
        }
      })
      .sort({ updatedAt: -1 })
      .limit(25)
})

// GET single service by ID
router.get('/id/:id', (req, res, next) => {
    // use findOne instead of find to not return array
    services.findOne({ _id: req.params.id, orgs: org }, (error, data) => {
      if (error) {
        return next(error)
      } else if (!data) {
        res.status(400).send('Service not found')
      } else {
        res.json(data)
      }
    })
  })

// GET services based on search query
router.get('/search', (req, res, next) => {
    const dbQuery = { orgs: org }
    switch (req.query.searchBy) {
      case 'name':
        // match event name, no anchor
        dbQuery.servname = { $regex: `${req.query.servname}`, $options: 'i' }
        break
      case 'sstatus':
        dbQuery.status = { $regex: `^${req.query.status}`, $options: 'i' }
        break
      default:
        return res.status(400).send('invalid searchBy')
    }
    services.find(dbQuery, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
})

// POST new service
router.post('/', (req, res, next) => {
    const newService = req.body
    newService.orgs = [org]
    services.create(newService, (error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
})

// PUT update service
router.put('/update/:id', (req, res, next) => {
    services.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// PUT add existing service to org
router.put('/register/:id', (req, res, next) => {
    services.findByIdAndUpdate(
      req.params.id,
      { $push: { orgs: org } },
      (error, data) => {
        if (error) {
          console.log(error)
          return next(error)
        } else {
          res.send('Service registered with org')
        }
      }
    )
})

// PUT remove existing service from org
router.put('/deregister/:id', (req, res, next) => {
    services.findByIdAndUpdate(
      req.params.id,
      { $pull: { orgs: org } },
      (error, data) => {
        if (error) {
          console.log(error)
          return next(error)
        } else {
          res.send('Service deregistered with org')
        }
      }
    )
})

// hard DELETE service by ID, as per project specifications
router.delete('/:id', (req, res, next) => {
    services.findByIdAndDelete(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else if (!data) {
        res.status(400).send('Service not found')
      } else {
        res.send('Service deleted')
      }
    })
})

module.exports = router