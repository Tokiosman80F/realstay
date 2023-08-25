import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Rentals from "../pages/Rentals";
import Testimonial from "../pages/Testimonial";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element:<About></About>  },
      { path: "/rentals", element:<Rentals/>  },
      { path: "/testimonial", element:<Testimonial/>  },
      { path: "/blog", element:  <Blog/>},
      { path: "/contact", element: <Contact/> },
    ],
  },
]);

export default router;
