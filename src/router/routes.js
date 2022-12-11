import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import ProjectDetails from "../components/Portfolio/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Header></Header>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/projects",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
]);