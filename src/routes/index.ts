import HomePage from "../pages/index";
import About from "../pages/about";
import Form from "../pages/form";
import User from "../pages/user";

const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/about", component: About },
  { path: "/form", component: Form },
  { path: "/user", component: User },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
