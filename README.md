# Instructions for setup and running application as a local instance.

Upon cloning the repository to your local computer, create two new terminal windows to work with the
frontend and backend instances spearately. Then follow the commands below on their own terminal windows
to run the application as a local instance. Also listed below are the user login credentials once you 
successfully run the application. Additional documentation can be found in the README.md files of the
frontend and backend folders.

Log in Credentials:
- Editor role:
    - username: user1
    - password: password1

- Viewer role:
    - username: user2
    - password: password2

## Backend Terminal
```
cd backend

npm install

npm start
```

## Frontend Terminal
```
cd frontend

npm install

npm run dev
```

If for any reason the application does not render or function properly please run the following commands 
on their respective terminal windows and attempt to run the application again (and/or restart application as needed).

## Backend Terminal
```

npm install bycrypt
```

## Frontend Terminal
```

npm install pinia

npm install bootstrap
```

# Application Deployment

Listed below are the links to the frontend and backend deployment instances of the application using Railway App.
The frontend link will open the application itself while the backend link can be used to test the API's.

Front End: https://unsightly-seashore-production.up.railway.app

Back End: https://cis4339deployment-be-production.up.railway.app

Example on how to use the backend link to render all client documents currently in the MongoDB client collecion on the browser:
https://cis4339deployment-be-production.up.railway.app/clients/

You can test different API's by refrencing the API Documentation in the backend README file
and replace the localhost link with this backend link to get a response directly on the browser.

[Railway App](https://railway.app/)

### Data Platform Project

This project has been developed over time by students in the CIS 4339 course.

The current iteration is based on development done by Elliot Farmer Garcia, Agatha Molski and Chris	Blanco in Fall of 2022.

Requirements:

This project uses NodeJS and MongoDB.
