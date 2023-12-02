import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import { createStore } from "vuex";


const store = createStore({
  state() {
    return {
      counter: 0,


      firstName: "Shekhar",
      people: {
        firstName: "Shekhar",
        lastName: "Maity",
        age: 30,
        graduation: "BE",
        company: "Own",
      },
      peopleList: [],
    };
  },
  mutations: {
    incrementCounter(state) {
      state.counter++;
    },

    incrementCounterByValue(state,value) {
      state.counter = state.counter + value;
    },
  },
  getters: {
    // getCounter(state){
    //   return state.counter + 2;
    // },

    fullName(state) {
      // BL
      return state.people.firstName + " - " + state.people.lastName;
    },

    fullNameValue: (state) => (prefix) => {
      // BL
      return (
        prefix + " " + state.people.firstName + " - " + state.people.lastName
      );
    },
  },
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
