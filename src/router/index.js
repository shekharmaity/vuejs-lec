import { createRouter, createWebHistory } from "vue-router";
import People from "../view/People.vue";
import LoginPage from "../view/Login.vue";
import UserDetails from "../view/UserDetails.vue";
import UserList from "../view/UserList.vue";
import MoreInfo from "../view/MoreInfo.vue";
import HomePage from "../view/Home.vue";

const route = [
  {
    path: "/people",
    component: People,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/user-details/:id",
    component: UserDetails,
    name: "userDetails",
  },
  {
    path: "/user-list",
    component: UserList,
  },
  {
    path: "/more-info",
    component: MoreInfo,
  },
  {
    path: "/",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: route,
});

export default router;
