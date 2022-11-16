import { lazy } from "react";
import { BiHomeAlt } from "react-icons/bi";

const Home = lazy(() => import("../views/Home"));

export const MAIN_ROUTES = [
  {
    path: "/home",
    element: Home,
    title: "Home",
    hidden: false,
    icon: <BiHomeAlt size={24}/>,
  },
  {
    path: "/artists",
    element: Home,
    title: "Artists",
    hidden: false,
    icon: <BiHomeAlt size={24}/>,
  },
];
