import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import People from "./view/People.vue";
import LoginPage from "./view/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/people',
      component: People,
    },
    {
        path: '/login',
        component:LoginPage,
    }
  ],
});


const app = createApp(App);
app.use(router);
app.mount("#app");
