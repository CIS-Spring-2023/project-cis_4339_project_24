# Group 24 - Sprint 3 Backend Documentation

- [API Documentation with Postman](https://documenter.getpostman.com/view/23112815/2s93eSZb6X)

## References

- [Cloud Database with MongoDB Atlas](https://www.mongodb.com/atlas)

- [Mongoose Tutorial](https://vegibit.com/mongoose-relationships-tutorial/)

- [MongoDB find() Documentation](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/)

- [Test Backend API's](https://www.postman.com/)

- [Bcrypt Documentation Lookup](https://www.npmjs.com/package/bcrypt)

- [Password Hashing and Salts](https://stackoverflow.com/questions/43092071/how-should-i-store-salts-and-passwords-in-mongodb)

- [Application Deployment with Railway](https://railway.app/)

- [Querys asked with Chat GPT for Sprint 2:](https://openai.com/blog/chatgpt)
    - "How to use aggregate function to filter out empty document fields in MongoDB"
    - "How to implement bycrypt for password hashing"
    - "How to user bcrypt.compare to compare hashed passwords in mongodb database"

- Code used from CIS 4339 for Sprint 3:
    - Module 9 - student-api-mongodb.js: API's with MongoDB
    - Module 11 - backend-StudentManagement/mongoose-version: Schemas and Mongoose


## Additional Packages Installed for Sprint 3

We have instlled the following additional packages in the development of Sprint 3 to function with 
the backend portion of this project.

    npm install bycrypt
    

# Original Frontend Project Documentation
### Backend

This implementation is for NodeJS based on [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/) and uses [mongoose](https://mongoosejs.com/) as the ODM.

### Project setup

    npm install

### Before startup
You need a MongoDB database ready.

Make sure you have a collection named 'org' in your database that contains at least one organization with the orgid listed in your environment variable (see below).

Setup a .env file with the following variables: MONGO_URL, PORT and ORG

    MONGO_URL= that is the Mongo URL connection string
    PORT= e.g.3000
    ORG= that is the orgid (as a string)

### Compiles and hot-reloads for development

    npm start

### Postman Documentation

Can be found at <https://documenter.getpostman.com/view/23133138/2s83mdJiqh>
