/* eslint-disable prettier/prettier */
import { defineStore } from 'pinia'
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API

// Defining a store
export const useLoggedInUserStore = defineStore({

  id: 'loggedInUser',
  state: () => {
    return {
      name: "",
      role: "",
      isLoggedIn: false,
      isLoggedIn2: false
    }
  },
  actions: {
    async login(username, password) {
      try {
        console.log(username, password)
        const response = await axios.post(`${apiURL}/users/login`, {username, password});
        console.log(response)
        
        if (response) {
          const { role } = response.data;
          if(role === 'editor') {
            this.$patch({
              isLoggedIn: true,
              role: response.data.role,
              name: response.data.fullName
            });
            this.$router.push("/");
          } else if (role === 'viewer') {
            this.$patch({
              isLoggedIn2: true,
              role: response.data.role,
              name: response.data.fullName
            });
            this.$router.push("/");
          }
        }
      } catch (error) {
        console.log(error)
        alert("Invalid credentials.");
      }
    },  
    logout() {
      // Reset value after user log out
      this.$patch({
        name: "",
        role: "",
        isLoggedIn: false,
        isLoggedIn2: false
      });
    }
  },
});
