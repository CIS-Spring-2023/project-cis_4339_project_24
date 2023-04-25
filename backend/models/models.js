/* eslint-disable prettier/prettier */
const uuid = require('uuid')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');

// collection for org
const orgDataSchema = new Schema(
  {
    _id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  {
    collection: 'org'
  }
)

// collection for clients
const clientDataSchema = new Schema(
  {
    _id: { type: String, default: uuid.v1 },
    firstName: {
      type: String,
      required: true
    },
    middleName: {
      type: String
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    phoneNumber: {
      primary: {
        type: String,
        required: true
      },
      alternate: {
        type: String
      }
    },
    address: {
      line1: {
        type: String
      },
      line2: {
        type: String
      },
      city: {
        type: String,
        required: true
      },
      county: {
        type: String
      },
      zip: {
        type: String
      }
    },
    orgs: {
      type: [{ type: String, ref: 'org' }],
      required: true,
      validate: [(org) => org.length > 0, 'needs at least one org']
    }
  },
  {
    collection: 'client',
    timestamps: true
  }
)

// collection for events
const eventDataSchema = new Schema(
  {
    _id: { type: String, default: uuid.v1 },
    org: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    services: [
      {
        type: String
      }
    ],
    date: {
      type: Date,
      required: true
    },
    address: {
      line1: {
        type: String
      },
      line2: {
        type: String
      },
      city: {
        type: String
      },
      county: {
        type: String
      },
      zip: {
        type: String
      }
    },
    description: {
      type: String
    },
    attendees: [
      {
        type: String,
        ref: 'client'
      }
    ]
  },
  {
    collection: 'event'
  }
)

// collection for services
const serviceDataSchema = new Schema(
  {
    _id: { type: String, default: uuid.v1 },
    servname: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    status: {
      type: String,
      required: true
    },
    orgs: {
      type: [{ type: String, ref: 'org' }],
      required: true,
      validate: [(org) => org.length > 0, 'needs at least one org']
    }
  },
  {
    collection: 'service'
  }
)

// collection for users
const userDataSchema = new Schema(
  {
    _id: { type: String, default: uuid.v1 },
    fullName: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    org: {
      type: String,
      required: true
    }
  },
  {
    collection: 'user'
  }
)

// determines the strength of the hash
/* const SALT_ROUNDS = 10;

//  pre-save hook to the user model that hashes the password before it's saved to the database
userDataSchema.pre('save', async function(next) {
  // "pre" middleware intercepts the save event and checks if password field has been modified
  if (!this.isModified('password')) return next();
  try {
    // generates a salt and hashes password again using bcrypt's hash function if password has been modified
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hash = await bcrypt.hash(this.password, salt);
    // sets password field to the hashed value before calling next() to proceed with saving it
    this.password = hash;
    next();
  } catch (error) {
    next(error);
  }
}); */

// create models from mongoose schemas
const clients = mongoose.model('client', clientDataSchema)
const orgs = mongoose.model('org', orgDataSchema)
const events = mongoose.model('event', eventDataSchema)
const services = mongoose.model('service', serviceDataSchema)
const users = mongoose.model('user', userDataSchema)

// user created for editor privilages
/* const user1 = new users({
  fullName: 'John Doe',
  username: 'user1',
  password: 'password1',
  role: 'editor',
  org: 'firstid'
}); */

// pre-save defined earlier automatically hashes the password before saving the user document to the database
/* user1.save((err, user) => {
  if (err) {
    console.error(err);
  } else {
    console.log(user);
  }
}); */

// user created for viewer privilages
/* const user2 = new users({
  fullName: 'Jane Doe',
  username: 'user2',
  password: 'password2',
  role: 'viewer',
  org: 'firstid'
}); */

// pre-save defined earlier automatically hashes the password before saving the user document to the database
/* user2.save((err, user) => {
  if (err) {
    console.error(err);
  } else {
    console.log(user);
  }
}); */

// package the models in an object to export
module.exports = { clients, orgs, events, services, users }
