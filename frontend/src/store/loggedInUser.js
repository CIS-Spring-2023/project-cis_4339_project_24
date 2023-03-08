/* eslint-disable prettier/prettier */
import { defineStore } from 'pinia'

//defining a store
export const useLoggedInUserStore = defineStore({
  // id is only required for devtools with the Pinia store
  id: 'loggedInUser',
  //central part of the store
  state: () => {
    return {
      name: "",
      isLoggedIn: false,
      isLoggedIn2: false,
    }
  },
  // equivalent to methods in components, perfect to define business logic
  actions: {
    async login(username, password) {
      try {
        const response = await apiLogin(username, password);
        this.$patch({
          isLoggedIn: response.isAllowed,
          isLoggedIn2: response.isAllowed2,
          name: response.name,
        })
        this.$router.push("/");
      } catch(error) {
        console.log(error)
      }
    },
    logout() {
      this.patch({
        name: "",
        isLoggedIn: false,
        isLoggedIn2: false
      });

      // we could do other stuff like redirecting the user
    }
  }
});

//simulate a login - we will later use our backend to handle authentication
function apiLogin(u, p) {
  if (u === "editor" && p === "editor") return Promise.resolve({ isAllowed: true, name: "John Doe" });
  if (p === "editor") return Promise.resolve({ isAllowed: false });
  

  if (u === "viewer" && p === "viewer") return Promise.resolve({ isAllowed2: true, name: "Jane Doe" });
  if (p === "viewer") return Promise.resolve({ isAllowed2: false });

  return Promise.reject(new Error("invalid credentials"));
}
