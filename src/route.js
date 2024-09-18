import { lazy } from "react";

import Home from "./components/home";
const Users = lazy(() => import("./components/users"));
const UserProfile = lazy(() => import("./components/userProfile"));
const NotFound = lazy(() => import("./components/NotFount"));
const SearchUser = lazy(() => import("./components/searchUser"));
const AboutUs = lazy(() => import("./components/about"));
const Login = lazy(() => import("./components/login"));
const AuthProfile = lazy(() => import("./components/authProfile"));

export const appRoutes = [
  {
    path: "",
    component: Home,
    requireAuth: false,
  },

  {
    path: "/users",
    component: Users,
    requireAuth: false,
  },

  {
    path: "/users/user/:id",
    component: UserProfile,
    requireAuth: false,
  },
  {
    path: "*",
    component: NotFound,
    requireAuth: false,
  },
  {
    path: "/search",
    component: SearchUser,
    requireAuth: false,
  },
  {
    path: "/about",
    component: AboutUs,
    requireAuth: false,
  },
  {
    path: "/login",
    component: Login,
    requireAuth: false,
  },
  {
    path: "/authProfile",
    component: AuthProfile,
    requireAuth: true,
  },
];
