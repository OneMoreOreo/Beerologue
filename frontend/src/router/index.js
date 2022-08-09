import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Design from "../views/Design.vue";
import Project from "../views/Project.vue";
import Basic from "../views/Basic.vue";
import Beer from "../views/Beer.vue";
import AllReviews from "../views/AllReviews.vue";
import EditReview from "../views/EditReview.vue";
import NewReview from "../views/NewReview.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/design",
    name: "Design",
    component: Design,
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
  },
  {
    path: "/basic",
    name: "Basic",
    component: Basic,
  },
  {
    path: "/beer",
    name: "Beer",
    component: Beer,
  },
  {
    path: "/allreviews",
    name: "AllReviews",
    component: AllReviews,
  },
  {
    path: "/reviews/:reviewid",
    name: "EditReview",
    component: EditReview,
  },
  {
    path: "/newreview",
    name: "NewReview",
    component: NewReview,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
