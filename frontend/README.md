# Group 24 - Sprint 3 Frontend Documentation

To demonstrate user roles and their nagivaition and privileges in the application we have setup the following 
user credentials in the cloud. When logging in with editor credentials, all applications pages will be rendered
including their respective functionalities. While logging in with viewer credentials, only dashboard, find client,
find event, and event services will be rendered. Viewer role will also be restricted from accessing the update  
functionalies on these pages as well.

Log in Credentials:
- Editor role:
    - username: user1
    - password: password1

- Viewer role:
    - username: user2
    - password: password2


## Note

Soft deletion (active/inactive) of services can be performed through the find services pages while logged in
as a user with an editor role. A user can click on the respective service record row they wish to edit and the application
will redirect the user on a different page to make changes to the service name, description (optional), and status.
The delete button in the update page is to permanently delete a service, and will ask the user again if they want to
permanently delete the service before performing the delete action. A cancel button is also provided in the update page 
if the user wishes to cancel the update action. These functionalities are also provided for the find client and 
find event pages for users with editor privilages.


## References

- [Creation and Display of Doughnut Chart](https://www.chartjs.org/docs/latest/samples/other-charts/doughnut.html)

- [Bootstrap 5: to use with online template below](https://getbootstrap.com/)

- [Log in Bootstrap Template: Login Modal](https://mdbootstrap.com/docs/standard/extended/login/)

- [MongoDB Atlas Charts Feature](https://charts.mongodb.com)

- [Querys asked with Chat GPT for Sprint 2:](https://openai.com/blog/chatgpt)
    - "Performing CRUD Operations on a hardcoded list of Data"
    - "Creating Vue Pie Chart from a hardcoded list of Data"
    - "Displaying Active Services as Checkboxes"

- Code used from CIS 4339 for Sprint 2:
    - Module 7 - vue-student-management-app-pinia: Log in feature, 
    - Module 5 - vue-student-management-app: Edit and Delete Features in a List


## Additional Packages Installed for Sprint 2

We have instlled the following additional packages in the development of Sprint 2 to function with 
the front end portion of this project.

    npm install pinia
    
    npm install bootstrap

# Original Frontend Project Documentation
### Data Platform Frontend

This project uses [VueJS 3](https://vuejs.org/) with [Vite](https://vitejs.dev/) and [TailwindCSS](https://tailwindcss.com/).
For form validation [Vuelidate](https://vuelidate-next.netlify.app/) is used.

### Project setup

    npm install

### Before startup

You need to either have a local backend running and or use a cloud deployed backend.

Setup a .env file with following variables, e.g.:

    VITE_ROOT_API=http://localhost:3000

VITE_ROOT_API is the URL for the backend API, either on localhost or in the cloud.

### Compiles and hot-reloads for development

    npm run dev
