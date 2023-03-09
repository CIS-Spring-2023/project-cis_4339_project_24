# Sprint 2

To demonstrate user roles and the nagivaition or modification privileges in the application
for Sprint 2, we have hardcoded user credentials corresponding to their respective role. For example,
when logging in with editor credentials, all applications pages will be rendered including their respective
functionalities. On the other hand, when logging in with viewer credentials, only dashboard, find client,
find event, and event services will be rendered to view and access.

Log in Credentials:
- Editor role:
    - username: editor
    - password: editor

- Viewer role:
    - username: viewer
    -password: viewer


# References

- [Creation and Display of Doughnut Chart](https://www.chartjs.org/docs/latest/samples/other-charts/doughnut.html)

- [Bootstrap 5: to use with online template below](https://getbootstrap.com/)

- [Log in Bootstrap Template: Login Modal](https://mdbootstrap.com/docs/standard/extended/login/)

- [Querys asked with Chat GPT for Sprint 2:](https://openai.com/blog/chatgpt)
    - "Performing CRUD Operations on a hardcoded list of Data"
    - "Creating Vue Pie Chart from a hardcoded list of Data"
    - "Displaying Active Services as Checkboxes"

- Code used from CIS 4339 for Sprint 2:
    - Module 7 - vue-student-management-app-pinia: Log in feature, 
    - Module 5 - vue-student-management-app: Edit and Delete Features in a List


# Data Platform Frontend

This project uses [VueJS 3](https://vuejs.org/) with [Vite](https://vitejs.dev/) and [TailwindCSS](https://tailwindcss.com/).
For form validation [Vuelidate](https://vuelidate-next.netlify.app/) is used.

## Project setup

    npm install

### Before startup

You need to either have a local backend running and or use a cloud deployed backend.

Setup a .env file with following variables, e.g.:

    VITE_ROOT_API=http://localhost:3000

VITE_ROOT_API is the URL for the backend API, either on localhost or in the cloud.

### Compiles and hot-reloads for development

    npm run dev
