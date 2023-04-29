/* eslint-disable prettier/prettier */
import { defineStore } from 'pinia'
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API

// Defining a store
export const useLoggedInUserStore = defineStore({

  id: 'loggedInUser',
  state: () => {
    return {
      // stores name of logged in user
      name: "",
      // used for editor role
      isLoggedIn: false,
      // used for viewer role
      isLoggedIn2: false
    }
  },
  actions: {
    async login(username, password) {
      try {
        const response = await axios.post(`${apiURL}/users/login`, {username, password});
        
        // checkes to see if the user has an "editor" or "viewer" role
        if (response) {
          const { role } = response.data;
          // user with "editor" for role field in mongodb user collection is assigned to isLoggedIn
          if(role === 'editor') {
            this.$patch({
              isLoggedIn: true,
              // retreives users name from mongodb user collection fullName field
              name: response.data.fullName
            });
            this.$router.push("/");
          } else if (role === 'viewer') {
            this.$patch({
              // user with "viewer" for role field in mongodb user collection is assigned to isLoggedIn2
              isLoggedIn2: true,
              // retreives users name from mongodb user collection fullName field
              name: response.data.fullName
            });
            // user is redirected to home page
            this.$router.push("/");
          }
        }
      } catch (error) {
        console.log(error)
        // alerts user if input credentials for username and password are invalid or do not exist
        alert("Invalid credentials.");
      }
    },  
    logout() {
      //  reset the state when a user logs out
      this.$patch({
        name: "",
        isLoggedIn: false,
        isLoggedIn2: false
      });
    }
  },
});
