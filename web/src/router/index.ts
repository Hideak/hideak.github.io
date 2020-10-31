import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Article from "../views/Article.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/projects",
    name: "ProjectsPage",
    props: { article: "ProjectsPage" },
    component: Article
  },
  {
    path: "/curriculum",
    name: "CurriculumPage",
    props: { article: "CurriculumPage" },
    component: Article
  },
  {
    path: "/contact",
    name: "ContactPage",
    props: { article: "ContactPage" },
    component: Article
  },
  {
    path: "/links",
    name: "LinksPage",
    props: { article: "LinksPage" },
    component: Article
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
