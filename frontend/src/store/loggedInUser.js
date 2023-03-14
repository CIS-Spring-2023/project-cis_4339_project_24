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
      // users are not logged in by default
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
          isLoggedIn: response.isAllowed,     // editor login check
          isLoggedIn2: response.isAllowed2,   // viewer login check
          name: response.name,
        })
        this.$router.push("/");
      } catch(error) {
        console.log(error)
      }
    },
    logout() {
      // clears authentication state
      this.$patch({
        name: "",
        isLoggedIn: false,
        isLoggedIn2: false
      });
    }
  }
});

//hardcoded login credentials for users
function apiLogin(u, p) {
  // editor log in credentials
  if (u === "editor" && p === "editor") return Promise.resolve({ isAllowed: true, name: "John Doe" });
  if (p === "editor") return Promise.resolve({ isAllowed: false });
  
  // viwer log in credentials
  if (u === "viewer" && p === "viewer") return Promise.resolve({ isAllowed2: true, name: "Jane Doe" });
  if (p === "viewer") return Promise.resolve({ isAllowed2: false });

  return Promise.reject(new Error("invalid credentials"));
}
