import { News, Materials, Home } from "../Pages/Index";

export const Pages = [
  {
    component: Home,
    path: "/",
    name: "Home",
  },
  {
    component: Materials,
    path: "/materials",
    name: "Materials",
  },
  {
    component: News,
    path: "/news",
    name: "News",
  },
  {
    component: News,
    path: "/contact",
    name: "Contact US",
  },
  {
    component: News,
    path: "/help",
    name: "Help",
  },
];
