import VueRouter from "vue-router";
import HomePage from "../components/HomePage";
import Detail from "../components/Detail";
import Readme from "../components/Readme"

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/detail/:id",
      name: "Detail",
      component: Detail
    },
    {
      path: "/detail/:id/:repo",
      name: "Readme",
      component: Readme
    }
  ],
  mode: "history"
});
